(ns seven-guis-cljs.task7cells
  (:require [clojure.string :as string]
            [reagent.core :as r]))

;; -------------------------
;; UTIL
;; -------------------------

(defn str-float? [s] (= s (str (js/parseFloat s))))

(defn map-upper-case [v] (map string/upper-case v))

(defn map-parse-int [v] (map js/parseInt v))

(defn column-range [c1 c2]
  (let [code1 (.charCodeAt c1 0)
        code2 (.charCodeAt c2 0)]
    (map char (range code1 (inc code2)))))

(defn event->target-value [e]
  (-> e .-target .-value))

(defn gen-key []
  (gensym "key-"))

;; -------------------------
;; DATA
;; -------------------------

; inspired by Google Table
; is used if we evaluate a cell with value = nil
(def cell-default-value 0)

(def default-cell-state {:value nil :formula "" :dependencies []})

(def columns (column-range "A" "Z"))
(def rows (range 0 100))

;; -------------------------
;; STATE
;; -------------------------

(def default-cells-state (into {}
                               (for
                                [c columns n
                                 (range 0 100)]
                                 [(keyword (str c n)) default-cell-state])))

(def cells-state (r/atom default-cells-state))

; Test-Data
(def test-state {:A0 {:dependencies [] :formula "1" :value 1}
                 :A1 {:dependencies [] :formula "2" :value 2}
                 :A2 {:dependencies [] :formula "2" :value 2}
                 :B0 {:dependencies [:A0 :A1 :A2 :A3 :A4] :formula "=sum(A0:A4)+1*2 / (2) + add(A0,A1) - mul(A1,A0) -1" :value 6}
                 :B1 {:dependencies [:B0] :formula "=B0+1" :value 7}})
(swap! cells-state merge test-state)


(defn vec-contains? [v i]
  (some #(= % i) v))

(defn find-dependants [state state-keys id]
  (filter #(vec-contains? (:dependencies (% state)) id)
          state-keys))

;; -------------------------
;; FORMULA PARSING PATTERNS
;; -------------------------

(def num-pattern-str "[0-9]+")

(def var-pattern-str "[a-zA-Z][0-9][0-9]?")
(def var-pattern (re-pattern var-pattern-str))

(def args-pattern-str (str "\\(" "(" num-pattern-str "|" var-pattern-str ")"
                           "(,(" num-pattern-str "|" var-pattern-str "))*"
                           "\\)"))
(defn arg-function-pattern [fun-name]
  (re-pattern (str fun-name args-pattern-str)))

(def range-pattern-str (str var-pattern-str ":" var-pattern-str))
(def range-pattern (re-pattern range-pattern-str))
(defn range-function-pattern [fun-name]
  (re-pattern (str "(" fun-name "\\(" range-pattern-str "\\)" ")")))

;; -------------------------
;; FORMULA VARIABLE / FUNCTION ARGUMENT PARSING
;; -------------------------

(defn args->vals [args state]
  (map #(if (str-float? %)
          (js/parseFloat %)
          ; var-case
          (let [val (:value
                     ((keyword %) state))]
            (if val val cell-default-value))) args))

(defn arg-fun-str->arg-str [s fun-name]
  (subs s
        ; remove ( and function name
        (inc (count fun-name))
        ; remove )
        (dec (count s))))

(defn function-pattern->args [s fun-name]
  (string/split
   (arg-fun-str->arg-str s fun-name)
   #","))

(defn range-str->sorted-vars [s] (sort (string/split s #":")))

(defn vars->columns [v] (map first v))

(defn vars->rows [v] (map #(apply str (rest %)) v))

(defn range-str->var-list [s]
  (let [vars (range-str->sorted-vars s)
        columns (map-upper-case (vars->columns vars))
        rows (map-parse-int (vars->rows vars))]
    (for [r (range
             (first rows)
             (inc (second rows)))
          c (column-range
             (first columns)
             (second columns))]
      (str c r))))


;; -------------------------
;; FORMULA FUNCTION PARSING
;; -------------------------

(def arg-function-map {"add" +
                       "sub" -
                       "div" /
                       "mul" *
                       "mod" mod})
(def arg-function-names (keys arg-function-map))

(def range-function-map {"sum" +
                         "prod" *})
(def range-function-names (keys range-function-map))

(defn replace-arg-function [s fun-name state]
  (string/replace s
                  (arg-function-pattern fun-name)
                  #(apply
                    (get arg-function-map fun-name)
                    (args->vals
                     (function-pattern->args (first %) fun-name)
                     state))))

(defn replace-arg-functions [s state]
  (reduce
   #(replace-arg-function %1 %2 state)
   s
   arg-function-names))

(defn replace-range-function [s fun-name state]
  (string/replace s
                  (range-function-pattern fun-name)
                  #(apply
                    (get range-function-map fun-name)
                    (args->vals
                     (range-str->var-list
                      ; because we get a range-str back,
                      ; we dont use function-pattern->args
                      (arg-fun-str->arg-str
                       ; because we use capture groups, 
                       ; we get a seq as input
                       (first %)
                       fun-name))
                     state))))

(defn replace-range-functions [s state]
  (reduce
   #(replace-range-function %1 %2 state)
   s
   range-function-names))

;; -------------------------
;; FORMULA EVALUATION
;; -------------------------

(defn replace-vars [s state]
  (string/replace s var-pattern
                  #(:value ((keyword %) state))))

(defn replace-functions [fml state]
  (-> fml
      (#(replace-range-functions % state))
      (#(replace-arg-functions % state))))

(def js-formula-pattern #"[0-9+-/*\(\) ]+")

(defn eval-formula [fml state-atom]
  (let [state @state-atom
        s (replace-functions fml state)]
    (loop [last-s fml
           cur-s s]
      ; we recur until there is no more changes
      (if (= last-s cur-s)
        (let [js-formula (replace-vars cur-s state)]
          ; if at the end it is roughly a js-formula we try to eval it        
          (when (re-matches js-formula-pattern js-formula)
            (try
              ; an alternative would be to parse the formula to Clojure code or use an eval library              
              (js/eval js-formula)
              ; we catch everything but return nil
              (catch :default e
                nil))))
        (recur cur-s
               (replace-functions cur-s state))))))

;; -------------------------
;; CYCLE DETECTION
;; -------------------------

(defn depth-first-search [state state-keys id visited]
  (let [cur-dependencies (find-dependants state state-keys id)
        new-visited (conj visited id)]
    (if (some visited cur-dependencies)
      false
      ; using lazy functions to not evaluate all paths
      (not (some #(= % false)
                 (map #(depth-first-search state state-keys % new-visited) cur-dependencies))))))

(defn cycle-free? [state formula-vars id]
  (let [state-keys (keys state)]
    (depth-first-search state state-keys id (set formula-vars))))

;; -------------------------
;; FORMULA-STR HANDLING
;; -------------------------

(defn formula->vars [formula]
  (let [single-vars (into #{} (re-seq var-pattern formula))
        range-vars (re-seq range-pattern formula)]
    (map keyword
         (reduce
          #(into %1 (range-str->var-list %2))
          single-vars
          range-vars))))

(defn formula-self-ref? [formula id]
  (string/includes? formula (name id)))

(defn formula? [fml]
  (string/starts-with? fml "="))

(defn formula-str->val [formula vars id]
  (cond
    (formula-self-ref? formula id) nil
    (str-float? formula) (js/parseFloat formula)
    (not (cycle-free? @cells-state vars id)) nil
    (formula? formula) (eval-formula (subs formula 1) cells-state)
    :else nil))

;; -------------------------
;; CHANGE PROPAGATION
;; -------------------------

; alternatively we could optimize the propagation by ordering the dependants according to their dependants
; I assume that by starting with the dependant with the least dependants, 
; we could avoid some calculations
(defn propagate-change [state-atom state-keys id]
  (let [state @state-atom
        dependants (find-dependants state state-keys id)]
    (doseq [d dependants]
      (prn
       (let [formula (:formula (d state))
             new-val (formula-str->val formula (formula->vars formula) d)]
         (if new-val
           (do
             (swap! cells-state assoc-in [d :value] new-val)
             (propagate-change state-atom state-keys d))
           (swap! cells-state assoc-in [d :value] nil)))))))

;; -------------------------
;; FORMULA CELL
;; -------------------------

(defn reset-cell-value [cell-cursor]
  (swap! cell-cursor
         #(assoc % :value nil)))

(defn set-cell-value [cell-cursor new-value]
  (swap! cell-cursor
         #(assoc % :value new-value)))

(defn eval-cell [cell-cursor id]
  (let [formula (:formula @cell-cursor)
        vars (formula->vars formula)]
    ; save new dependencies in any case, update could make the formula valid
    (swap! cell-cursor #(assoc % :dependencies (vec vars)))
    (let [new-val (formula-str->val formula vars id)]
      (if new-val
        (do
          (set-cell-value cell-cursor new-val)
          (propagate-change cells-state (keys @cells-state) id))
        ; we do not propagate wrong inputs
        ; alternatively we could propagate them, 
        ; but then we would need to stop before it cycles        
        (reset-cell-value cell-cursor)))))

(defn invalid-cell-state? [disabled cell-state]
  ; the state is invalid if we are not editing (disabled = false)
  ; but the value is still nil and a formula has been entered
  ; this means the formula was evaluated and was invalid
  (and
   disabled
   (not (:value cell-state))
   (formula? (:formula cell-state))))

(defn reset-cell-state [cell-cursor]
  (reset! cell-cursor default-cell-state))

(defn set-cell-formula [cell-cursor fml]
  (swap! cell-cursor #(assoc % :formula fml)))

(defn cell-display-value [cell-state disabled?]
  (let [value (:value cell-state)]
    ; we want to show the formula always if we are editing: disabled = false    
    (if (and disabled? value)
      value
      (:formula cell-state))))

(defn has-formula? [cell-cursor]
  (seq (:formula @cell-cursor)))

(defn cell [id]
  (let [cell-cursor (r/cursor cells-state [id])
        disabled (r/atom true)
        disable #(reset! disabled true)
        enable #(reset! disabled false)]
    (fn []
      [:input {:type "text"
               :style {:border "1px solid" :min-width "120px" :min-height "30px" :padding "1px 2px"
                       :background-color (when
                                          (invalid-cell-state? @disabled @cell-cursor)
                                           "red")}
               :read-only @disabled
               :value (cell-display-value @cell-cursor @disabled)
               :on-blur #(when (and
                                ; its only already disabled if we fire blur via on-key-press
                                (not @disabled)
                                (has-formula? cell-cursor))
                           (disable)
                           (eval-cell cell-cursor id))
               :on-change #(let [new-val (event->target-value %)]
                             (if
                              (= "" new-val)
                               (reset-cell-state cell-cursor)
                               (set-cell-formula cell-cursor new-val)))
               :on-key-press
               #(when (= (.-key %) "Enter")
                  (disable)
                  (.blur (.-target %))
                  (when (has-formula? cell-cursor)
                    (eval-cell cell-cursor id)))
               :on-double-click enable}])))

;; -------------------------
;; TABLE
;; -------------------------

(defn header-cell [content]
  [:div {:style {:min-width "120px" :min-height "30px" :padding "1px 2px" :background-color "lightblue" :border "1px groove"}} content])

(defn top-row []
  [:div {:style {:display "flex" :flex-direction "row" :justify-content "flex-start"}}
   (conj
    (for [c columns]
      ^{:key (gen-key)} [header-cell c])
    ^{:key (gen-key)} [header-cell ""])])

(defn row [r]
  [:div {:style {:display "flex" :flex-direction "row" :justify-content "flex-start"}}
   (conj
    (for [c columns]
      ^{:key (gen-key)} [cell (keyword (str c r))])
    ^{:key (gen-key)}  [header-cell (str r)])])

(defn cells-gui []
  [:div
   {"style" {:max-height "600px" :display "flex" :flex-direction "column" :outline "3px solid" :overflow "scroll" :justify-content "flex-start"}}
   (conj
    (for [r rows]
      ^{:key (gen-key)} [row r])
    ^{:key (gen-key)} [top-row])])
