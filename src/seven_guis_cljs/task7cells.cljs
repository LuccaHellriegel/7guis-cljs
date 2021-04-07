(ns seven-guis-cljs.task7cells
  (:require [clojure.string :as string]
            [reagent.core :as r]))

(defn column-range [c1 c2]
  (let [code1 (.charCodeAt c1 0)
        code2 (.charCodeAt c2 0)]
    (map char (range code1 (inc code2)))))

(defn range-str->sorted-vars [s] (sort (string/split s #":")))

(defn vars->columns [v] (map first v))

(defn vars->rows [v] (map #(apply str (rest %)) v))

(defn map-upper-case [v] (map string/upper-case v))

(defn map-parse-int [v] (map js/parseInt v))

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

(defn str-float? [s] (= s (str (js/parseFloat s))))

; default value is 0 (inspired by Google Table)
; default value == empty formula
(def cell-default-value 0)

(defn args->vals [args state]
  (map #(if (str-float? %)
          (js/parseFloat %)
          ; var-case
          (let [val (:value
                     ((keyword %) state))]
            (if val val cell-default-value))) args))

(def var-pattern-str "[a-zA-Z][0-9][0-9]?")
(def num-pattern-str "[0-9]+")
(def arguments-pattern-str (str "\\(" "(" num-pattern-str "|" var-pattern-str ")"
                                "(,(" num-pattern-str "|" var-pattern-str "))*"
                                "\\)"))

(def arg-function-map {"add" +
                       "sub" -
                       "div" /
                       "mul" *
                       "mod" mod})
(def arg-function-names (keys arg-function-map))

(defn arg-function-pattern [fun-name]
  (re-pattern (str fun-name arguments-pattern-str)))

(defn arg-fun-str->arg-str [s fun-name]
  (subs s
        ; remove ( too
        (inc (count fun-name))
        ; remove )
        (dec (count s))))

(defn function-pattern->args [s fun-name]
  (string/split
   (arg-fun-str->arg-str s fun-name)
   #","))

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

(def range-function-map {"sum" +
                         "prod" *})
(def range-function-names (keys range-function-map))

(def range-pattern-str (str var-pattern-str ":" var-pattern-str))

(defn replace-range-function [s fun-name state]
  (string/replace s
                  (re-pattern (str "(" fun-name "\\(" range-pattern-str "\\)" ")"))
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

(defn replace-vars [s state]
  (string/replace s (re-pattern var-pattern-str) #(:value ((keyword %) state))))

(defn replace-functions-once [fml state]
  (-> fml
      (#(replace-range-functions % state))
      (#(replace-arg-functions % state))))

(def re-js-formula #"[0-9+-/*\(\) ]+")

(defn formula? [fml]
  (string/starts-with? fml "="))

(defn eval-formula [fml state-atom]
  (let [state @state-atom
        s (replace-functions-once fml state)]
    (loop [last-s fml
           cur-s s]
      ; we recur until there is no more changes
      (if (= last-s cur-s)
        (let [js-formula (replace-vars cur-s state)]
          ; if at the end it is roughly a js-formula we try to eval it        
          (when (re-matches re-js-formula js-formula)

            (try
              ; alternative would be to parse the formula to clojure code or use an eval library              
              (js/eval js-formula)
              ; we catch everything but return nil
              (catch :default e
                nil))))
        (recur cur-s
               (replace-functions-once cur-s state))))))

(def default-cell-state {:value nil :formula "" :dependencies []})

(def columns (column-range "A" "Z"))
(def rows (range 0 100))

(def default-cells-state (into {} (for [c columns n
                                        (range 0 100)]
                                    [(keyword (str c n)) default-cell-state])))

(def cells-state (r/atom default-cells-state))

(defn header-cell [content]
  [:div {:style {:min-width "80px" :min-height "30px"}} content])

(defn event->target-value [e]
  (-> e .-target .-value))

(defn cell-value [cell-state disabled?]
  (let [value (:value cell-state)]
    ; we want to show the formula always if we are editing: disabled = false    
    (if (and disabled? value)
      value
      (:formula cell-state))))

(defn reset-cell-value [cell-cursor]
  (swap! cell-cursor
         #(assoc % :value nil)))

(defn set-cell-value [cell-cursor new-value]
  (swap! cell-cursor
         #(assoc % :value new-value)))

(defn vec-contains? [v i]
  (some #(= % i) v))

(defn find-dependants [state state-keys id]
  (filter #(vec-contains? (:dependencies (% state)) id)
          state-keys))

; TODO: optimize change propagation -> with least dependencies first?

(def test-state {:A0 {:dependencies [] :formula "1" :value 1}
                 :A1 {:dependencies [:A0] :formula "=A0" :value 1}
                ;;  :A2 {:dependencies [:A0 :A1]}
                ;;  :A3 {:dependencies []}
                 })
(swap! cells-state merge test-state)

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

(defn formula->vars [formula]
  (let [single-vars (into #{} (re-seq (re-pattern (str var-pattern-str)) formula))
        range-vars (re-seq (re-pattern (str range-pattern-str)) formula)]
    (map keyword
         (reduce
          #(into %1 (range-str->var-list %2))
          single-vars
          range-vars))))

(defn formula-str->val [formula vars id]
  (cond
    (string/includes? formula (name id)) nil
    (str-float? formula) (js/parseFloat formula)
    ; TODO: mark cycle-culprits
    (not (cycle-free? @cells-state vars id)) nil
    (formula? formula) (eval-formula (subs formula 1) cells-state)
    :else nil))

(defn propagate-change [state state-keys id]
  (let [dependants (find-dependants state state-keys id)]
    (doseq [d dependants]
      (prn
       (let [formula (:formula (d state))
             new-val (formula-str->val formula (formula->vars formula) d)]
         (if new-val
           (do
             (swap! cells-state assoc-in [d :value] new-val)
             (propagate-change state state-keys d))
           (swap! cells-state assoc-in [d :value] nil)))))))

; TODO: think about default value -> how to detect invalid formulas when refreshing?
; currenlty I dont refresh invalid formulas?
(defn eval-cell [cell-cursor id]
  (let [formula (:formula @cell-cursor)
        vars (formula->vars formula)
        new-val (formula-str->val formula vars id)]
    ; save new dependencies in any case, update could make the formula valid
    (swap! cell-cursor #(assoc % :dependencies (vec vars)))
    (if new-val
      (do
        (set-cell-value cell-cursor new-val)
        (propagate-change @cells-state (keys @cells-state) id))
      (reset-cell-value cell-cursor))))

(defn invalid-cell-state? [disabled cell-state]
  ; the state is invalid if we are not editing (disabled = false)
  ; but the value is still nil and a formula has been entered
  ; this means the formula was evaluated and was invalid
  (and
   disabled
   (not (:value cell-state))
   (seq (:formula cell-state))))

(defn reset-cell-state [cell-cursor]
  (reset! cell-cursor default-cell-state))

(defn set-cell-formula [cell-cursor fml]
  (swap! cell-cursor #(assoc % :formula fml)))

(defn cell [id]
  (let [cell-cursor (r/cursor cells-state [id])
        disabled (r/atom true)
        disable #(reset! disabled true)
        enable #(reset! disabled false)]
    (fn []
      [:input {:type "text"
               :style {:border "1px solid" :min-width "80px" :min-height "30px"
                       :background-color (when
                                          (invalid-cell-state? @disabled @cell-cursor)
                                           "red")}
               :read-only @disabled
               :value (cell-value @cell-cursor @disabled)
               :on-blur #(when
                          (and
                           ; its only already disabled if we fire blur via on-key-press
                           (not @disabled)
                           (seq (:formula @cell-cursor)))
                           (disable)
                           (eval-cell cell-cursor id))
               :on-change #(if
                            (= "" (event->target-value %))
                             (reset-cell-state cell-cursor)
                             (set-cell-formula cell-cursor (event->target-value %)))
               :on-key-press
               #(when (= (.-key %) "Enter")
                  (disable)
                  (.blur (.-target %))
                  (when (seq (:formula @cell-cursor))
                    (eval-cell cell-cursor id)))
               :on-double-click enable}])))

(defn row [content]
  [:div {:style {:display "flex" :flex-direction "row"}} content])

(defn gen-key []
  (gensym "key-"))

(defn cells-container []
  [:div
   {"style" {:max-height "600px" :display "flex" :flex-direction "column" :outline "3px solid" :overflow "scroll"}}
   (conj
    (for [r rows]
      ^{:key (gen-key)} [row
                         (conj
                          (for [c columns]
                            ^{:key (gen-key)} [cell (keyword (str c r))])
                          ^{:key (gen-key)}  [header-cell (str r)])])
    ^{:key (gen-key)} [row
                       (conj
                        (for [c columns]
                          ^{:key (gen-key)} [header-cell c])
                        ^{:key (gen-key)} [header-cell ""])])])

(defn cells-gui []
  (cells-container))