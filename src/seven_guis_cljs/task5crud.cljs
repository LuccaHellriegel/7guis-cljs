(ns seven-guis-cljs.task5crud
  (:require [clojure.string :as string]
            [reagent.core :as r]))

(defn event->target-value [e]
  (-> e .-target .-value))

(def me {:surname "Nachname" :name "Vorname"})
(def you {:surname "Highly" :name "Specific"})

(def crud-db (r/atom [me you]))
(def prefix (r/atom ""))
(def selected-full-name (r/atom me))
(def name-atom (r/atom ""))
(def surname-atom (r/atom ""))

(defn prefix-field []
  [:input {:type "text" :on-change #(reset! prefix (event->target-value %))}])

(defn name-field []
  [:input {:type "text"
           :value @name-atom
           :on-change #(reset! name-atom (event->target-value %))}])

(defn surname-field []
  [:input {:type "text"
           :value @surname-atom
           :on-change #(reset! surname-atom (event->target-value %))}])

(defn fields []
  [:div {:style {:display "flex" :flex-direction "column"  :align-items "flex-end"}}
   [:div "Name: " [name-field]]
   [:div "Surname: "  [surname-field]]])

(defn gen-key []
  (gensym "key-"))

(defn full-name-list-entry [full-name selected-name]
  ^{:key (gen-key)}
  [:div {:on-click #(if (identical? selected-name full-name)
                      (reset! selected-full-name nil)
                      (reset! selected-full-name full-name))
        ; = is not enough if we allow same names (the world is big)
         :style (if (identical? full-name selected-name)
                  {:background-color "LightBlue" :color "white" :margin "0px 2px 0px"}
                  {:margin "0px 2px 0px"})}
   (:surname full-name) ", " (:name full-name)])

(defn surname-starts-with-prefix [full-name]
  (string/starts-with? (:surname full-name) @prefix))

(defn full-name-list []
  [:div
   {:style {:display "flex" :flex-direction "column" :align-items "flex-start" :border "1px solid"}}
   (doall (map
           #(full-name-list-entry % @selected-full-name)
           (filter #(if
                     (surname-starts-with-prefix %)
                      true
                      (do
                        (when (= @selected-full-name %)
                          (reset! selected-full-name nil))
                        false)) @crud-db)))])

(defn add-full-name-to-vec [v]
  (conj v {:name @name-atom :surname @surname-atom}))

(defn create-button []
  [:button {:on-click #(swap! crud-db add-full-name-to-vec)} "Create"])

(defn replace-in-db [db selected-name new-name]
  (vec (replace {selected-name new-name} db)))

; cant find anything about "" / empty updates in the spec, so we will allow it
(defn update-button []
  [:button {:on-click #(swap! crud-db replace-in-db @selected-full-name {:name @name-atom :surname @surname-atom})
            :disabled (not @selected-full-name)} "Update"])

(defn remove-from-db [db selected-name]
  (vec (remove #(= % selected-name) db)))

(defn delete-button []
  [:button {:on-click #(do
                         (swap! crud-db remove-from-db @selected-full-name)
                         (reset! selected-full-name nil))
            :disabled (not @selected-full-name)} "Delete"])

(defn buttons []
  [:div [create-button] " "
   [update-button] " "
   [delete-button]])

(defn crud-gui []
  [:div
   {:style {:display "flex" :flex-direction "column" :justify-content "flex-start"}}
   [:div  "Filter prefix: " [prefix-field]]
   [:div
    {:style {:display "flex" :flex-direction "row" :justify-content "flex-start"}}
    [full-name-list]
    [:div {:style {:margin "0px 3px"}} [fields]]]
   [buttons]])
