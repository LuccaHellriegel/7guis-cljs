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

(defn vec-contains? [v i]
  (some #(= % i) v))

;; -------------------------
;; DATA
;; -------------------------

; inspired by Google Table
; is used if we evaluate a cell with value = nil
(def default-cell-value 0)

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

(def state-atom (r/atom {:cells default-cells-state :active-id nil}))

; Test-Data
(def test-state {:A0 {:dependencies [] :formula "1" :value 1}
                 :A1 {:dependencies [] :formula "2" :value 2}
                 :A2 {:dependencies [] :formula "2" :value 2}
                 :B0 {:dependencies [:A0 :A1 :A2 :A3 :A4] :formula "=sum(A0:A4)+1*2 / (2) + add(A0,A1) - mul(A1,A0) -1" :value 6}
                 :B1 {:dependencies [:B0] :formula "=B0+1" :value 7}})
(swap! state-atom assoc :cells (merge (:cells @state-atom) test-state))

(defn get-cells-state [atom]
  (:cells @atom))

(defn get-cell-state-cursor [atom id]
  (r/cursor atom [:cells id]))

(defn get-active-id-cursor []
  (r/cursor state-atom [:active-id]))

(defn swap-cell-value [atom id new-val]
  (swap! atom assoc-in [:cells id :value] new-val))

(defn find-dependants [cells-state cells-state-keys id]
  (filter #(vec-contains? (:dependencies (% cells-state)) id)
          cells-state-keys))

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

(defn var->val [var cells-state]
  (if (str-float? var)
    (js/parseFloat var)
          ; var-case
    (let [val (:value
               ((keyword var) cells-state))]
      (if val val default-cell-value))))

(defn vars->vals [vars cells-state]
  (map #(var->val % cells-state) vars))

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

(defn replace-arg-function [s fun-name cells-state]
  (string/replace s
                  (arg-function-pattern fun-name)
                  #(apply
                    (get arg-function-map fun-name)
                    (vars->vals
                     (function-pattern->args (first %) fun-name)
                     cells-state))))

(defn replace-arg-functions [s cells-state]
  (reduce
   #(replace-arg-function %1 %2 cells-state)
   s
   arg-function-names))

(defn replace-range-function [s fun-name cells-state]
  (string/replace s
                  (range-function-pattern fun-name)
                  #(apply
                    (get range-function-map fun-name)
                    (vars->vals
                     (range-str->var-list
                      ; because we get a range-str back,
                      ; we dont use function-pattern->args
                      (arg-fun-str->arg-str
                       ; because we use capture groups, 
                       ; we get a seq as input
                       (first %)
                       fun-name))
                     cells-state))))

(defn replace-range-functions [s cells-state]
  (reduce
   #(replace-range-function %1 %2 cells-state)
   s
   range-function-names))

;; -------------------------
;; FORMULA EVALUATION
;; -------------------------

(defn replace-vars [s cells-state] (string/replace s var-pattern #(var->val % cells-state)))

(defn replace-functions [fml cells-state]
  (-> fml
      (#(replace-range-functions % cells-state))
      (#(replace-arg-functions % cells-state))))

(def js-formula-pattern #"[0-9+-/*\(\) ]+")

(defn eval-formula [fml cells-state]
  (let [s (replace-functions fml cells-state)]
    (loop [last-s fml
           cur-s s]
      ; we recur until there is no more changes
      (if (= last-s cur-s)
        (let [js-formula (replace-vars cur-s cells-state)]
          ; if at the end it is roughly a js-formula we try to eval it        
          (when (re-matches js-formula-pattern js-formula)
            (try
              ; an alternative would be to parse the formula to Clojure code or use an eval library              
              (js/eval js-formula)
              ; we catch everything but return nil
              (catch :default e
                nil))))
        (recur cur-s
               (replace-functions cur-s cells-state))))))

;; -------------------------
;; CYCLE DETECTION
;; -------------------------

(defn depth-first-search [state state-keys id visited]
  (let [cur-dependencies (find-dependants state state-keys id)
        new-visited (conj visited id)]
    (if (some visited cur-dependencies)
      false
      ; using lazy functions to not evaluate all paths if not necessary
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

(defn formula-str->val [state-atom formula vars id]
  (cond
    (empty? formula) default-cell-value
    (formula-self-ref? formula id) nil
    (str-float? formula) (js/parseFloat formula)
    (not (cycle-free? (get-cells-state state-atom) vars id)) nil
    (formula? formula) (eval-formula (subs formula 1) (get-cells-state state-atom))
    :else nil))

;; -------------------------
;; CHANGE PROPAGATION
;; -------------------------

; alternatively we could optimize the propagation by ordering the dependants according to their dependants
; I assume that by starting with the dependant with the least dependants, 
; we could avoid some calculations
(defn propagate-change [state-atom cells-state-keys id]
  (let [cells-state (get-cells-state state-atom)
        dependants (find-dependants cells-state cells-state-keys id)]
    (doseq [d dependants]
      (prn
       (let [formula (:formula (d cells-state))
             new-val (formula-str->val state-atom formula (formula->vars formula) d)]
         (if new-val
           (do
             (swap-cell-value state-atom d new-val)
             (propagate-change state-atom cells-state-keys d))
           (swap-cell-value state-atom d nil)))))))

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
  (let [old-val (:value @cell-cursor)
        formula (:formula @cell-cursor)
        vars (formula->vars formula)]
    ; save new dependencies in any case, update could make the formula valid
    (swap! cell-cursor #(assoc % :dependencies (vec vars)))
    (let [new-val (formula-str->val state-atom formula vars id)]
      (when (not (= old-val new-val))
        (if new-val
          (do
            (set-cell-value cell-cursor new-val)
            (propagate-change state-atom (keys (get-cells-state state-atom)) id))
          ; we do not propagate wrong inputs
          ; alternatively we could propagate them, 
          ; but then we would need to stop before it cycles        
          (reset-cell-value cell-cursor))))))

(defn invalid-cell-state? [disabled cell-state]
  ; the state is invalid if we are not editing (disabled = false)
  ; but the value is still nil and a formula has been entered
  ; this means the formula was evaluated and was invalid 
  ; (except when typing in the editor-component, in future iterations there needs to be a 
  ;  connection between the two components beyond active-id)
  (and
   disabled
   (not (:value cell-state))
   (formula? (:formula cell-state))))

(defn reset-cell-state [cell-cursor]
  (reset! cell-cursor default-cell-state))

(defn set-cell-formula [cell-cursor fml]
  (swap! cell-cursor #(assoc % :formula fml)))

(defn cell-display-value [cell-state disabled?]
  (let [value (:value cell-state)
        formula (:formula cell-state)]
    ; we want to show the formula always if we are editing: disabled = false    
    (if (and disabled? value (seq formula))
      value
      (:formula cell-state))))

(defn change-cell-formula [cell-cursor event]
  (let [new-formula (event->target-value event)]
    (if
     (= "" new-formula)
      (reset-cell-state cell-cursor)
      (set-cell-formula cell-cursor new-formula))))

(defn cell [id]
  (let [html-id (str "7gui-cells-" id)
        cell-cursor (get-cell-state-cursor state-atom id)
        active-id (get-active-id-cursor)
        disabled (r/atom true)
        disable #(reset! disabled true)
        enable #(reset! disabled false)]
    (fn []
      [:input {:id html-id
               :type "text"
               :class (if (invalid-cell-state? @disabled @cell-cursor) "formula-cell formula-cell-wrong" "formula-cell")
               :read-only @disabled
               :value (cell-display-value @cell-cursor @disabled)
               ; its only already disabled if we fire blur via on-key-press
               :on-blur #(when (not @disabled)
                           (disable)
                           (eval-cell cell-cursor id))
               :on-change #(change-cell-formula cell-cursor %)
               :on-key-press
               #(let [k (.-key %)]
                  (if @disabled
                    ; inspired by Google Table, if you just start typing, it should work
                    ; the only reason I enable via double-click is the 7GUIs spec                    
                    (when (and
                           (re-matches #"(\w|=)" k)
                           (not (.-altKey %))
                           (not (.-ctrlKey %)))
                      (enable)
                      (set-cell-formula cell-cursor k)
                      ; need to move the cursor to the end, otherwise when typing the cursor is at the start of the key
                      (r/after-render (fn []
                                        (let [element (.getElementById js/document html-id)]
                                          (.setSelectionRange element 1 1)))))
                    (when (= k "Enter")
                      (disable)
                      (.blur (.-target %))
                      (eval-cell cell-cursor id))))
               :on-click #(reset! active-id id)
               :on-double-click enable}])))

;; -------------------------
;; TABLE
;; -------------------------

(defn editor []
  (let [active-id (get-active-id-cursor)]
    (fn []
      (let [id @active-id
            cell-cursor (get-cell-state-cursor state-atom id)]
        [:div {:class (if id "cells-editor-container cells-editor-container-active" "cells-editor-container")}
         (if id [:div {:class "cells-editor-content"}
                 [:b {:class "cells-editor-id"} id "="]
                 [:input {:value (:formula @cell-cursor)
                          :on-change #(change-cell-formula cell-cursor %)
                          :on-blur #(eval-cell cell-cursor id)
                          :on-key-press #(when (= (.-key %) "Enter")
                                           (.blur (.-target %))
                                           (eval-cell cell-cursor id))
                          :type "text"
                          :class "cells-editor-formula"}]]
             [:b "Double-click a cell or type in it to edit it!"])]))))

(defn column-cell [content]
  [:div {:class "column-cell"} content])

(defn row-cell [content]
  [:div {:class "row-cell"} content])

(defn top-row []
  [:div {:class "cells-row"}
   (conj
    (for [c columns]
      ^{:key (gen-key)} [column-cell c])
    ^{:key (gen-key)} [row-cell ""])])

(defn row [r]
  [:div {:class "cells-row"}
   (conj
    (for [c columns]
      ^{:key (gen-key)} [cell (keyword (str c r))])
    ^{:key (gen-key)}  [row-cell (str r)])])

(defn cells-gui []
  [:div
   {:class "cells-gui"}
   [editor]
   [:div {:class "rows"} (conj
                          (for [r rows]
                            ^{:key (gen-key)} [row r])
                          ^{:key (gen-key)} [top-row])]])
