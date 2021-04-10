(ns seven-guis-cljs.task5crud
  (:require [clojure.string :as string]
            [reagent.core :as r]))

;; -------------------------
;; UTIL
;; -------------------------

(defn gen-key []
  (gensym "key-"))

(defn event->target-value [e]
  (-> e .-target .-value))

;; -------------------------
;; STATE
;; -------------------------

(def default-state {:crud-db []
                    :prefix ""
                    :selected-full-name nil
                    :name ""
                    :surname ""})
(def state (r/atom default-state))

; Test-Data
(def me {:surname "Nachname" :name "Vorname" :time 10})
(def you {:surname "Highly" :name "Specific" :time 10})
(reset! state (assoc @state :crud-db [me you] :selected-full-name me))

(defn get-cur-full-name [state]
  {:name (:name state) :surname (:surname state) :time (js/Date.now)})

(defn add-cur-full-name-to-crud-db []
  (swap! state (fn [st] (assoc st :crud-db
                               (conj (:crud-db st)
                                     (get-cur-full-name st))))))

(defn replace-selected-full-name-in-crud-db []
  (swap! state (fn [st] (assoc st :crud-db
                               (vec (replace {(:selected-full-name st) (get-cur-full-name st)} (:crud-db st)))
                               :selected-full-name nil))))

(defn remove-selected-full-name-from-crud-db []
  (swap! state (fn [st] (assoc st :crud-db
                               (vec (remove #(= % (:selected-full-name st)) (:crud-db st)))))))

;; -------------------------
;; COMPONENTS
;; -------------------------

; I am resisting the urge to abstract here
; in a real project I would assume that these buttons get more specialised in the future
(defn prefix-field []
  (let [prefix-cursor (r/cursor state [:prefix])]
    (fn []
      [:input {:type "text" :on-change #(reset! prefix-cursor (event->target-value %))}])))

(defn name-field []
  (let [name-cursor (r/cursor state [:name])]
    (fn []
      [:input {:type "text"
               :value @name-cursor
               :on-change #(reset! name-cursor (event->target-value %))}])))

(defn surname-field []
  (let [surname-cursor (r/cursor state [:surname])]
    (fn []
      [:input {:type "text"
               :value @surname-cursor
               :on-change #(reset! surname-cursor (event->target-value %))}])))

(defn fields []
  [:div {:style {:display "flex" :flex-direction "column"  :align-items "flex-end"}}
   [:div "Name: " [name-field]]
   [:div "Surname: "  [surname-field]]])

(defn full-name-list-entry [full-name]
  (let [selected-full-name-cursor (r/cursor state [:selected-full-name])]
    (fn []
      [:div {:on-click #(if (= @selected-full-name-cursor full-name)
                          (reset! selected-full-name-cursor nil)
                          (reset! selected-full-name-cursor full-name))
             :style (if (= @selected-full-name-cursor full-name)
                      {:background-color "LightBlue" :color "white" :margin "0px 2px 0px"}
                      {:margin "0px 2px 0px"})}
       (:surname full-name) ", " (:name full-name)])))

(defn surname-starts-with-prefix [full-name prefix]
  (string/starts-with? (:surname full-name) prefix))

(defn full-name-list []
  (let [selected-full-name-cursor (r/cursor state [:selected-full-name])
        crud-db-cursor (r/cursor state [:crud-db])
        prefix-cursor (r/cursor state [:prefix])]
    (fn []
      [:div
       {:class "flex-column-start"
        :style {:border "1px solid" :min-width "150px"}}
       (doall
        (for [full-name
              ; assuming "filter" in the spec has the same interpretation as in Clojure 
              ; (filter everything else out / select where pred = true)
              (filter #(if
                        (surname-starts-with-prefix % @prefix-cursor)
                         true
                         ; if the selected name is filtered out, 
                         ; it should be set nil to make sure the correct buttons are enabled
                         ; at this scale this could also be solved by iterating over the names twice
                         ; but a future improvement / more robust solution would be to make an extra function that returns
                         ; the filtered names and the one that was filtered out                                                                           
                         (do
                           (when (= @selected-full-name-cursor %)
                             (reset! selected-full-name-cursor nil))
                           false)) @crud-db-cursor)]
          ^{:key (gen-key)} [full-name-list-entry full-name]))])))

(defn create-button []
  [:button {:on-click add-cur-full-name-to-crud-db} "Create"])

; cant find anything about "" / empty updates in the spec, so we will allow it
(defn update-button []
  (let [selected-full-name-cursor (r/cursor state [:selected-full-name])]
    (fn []
      [:button {:on-click replace-selected-full-name-in-crud-db
                :disabled (not @selected-full-name-cursor)} "Update"])))

(defn delete-button []
  (let [selected-full-name-cursor (r/cursor state [:selected-full-name])]
    (fn []
      [:button {:on-click #(do
                             (remove-selected-full-name-from-crud-db)
                             (reset! selected-full-name-cursor nil))
                :disabled (not @selected-full-name-cursor)} "Delete"])))

(defn buttons []
  [:div {:class "flex-row-start"}
   [:div
    [create-button]]
   [:div {:style {:margin "0px 50px"}}
    [update-button]]
   [:div
    [delete-button]]])

(defn crud-gui []
  [:div
   {:class "flex-column-start"}
   [:div {:class "flex-row-start"
          :style {:margin "0px 0px 2px"}}
    "Filter prefix: " [prefix-field]]
   [:div {:class "flex-row-start"}
    [full-name-list] [:div {:style {:margin "0px 3px"}} [fields]]]
   [buttons]])
