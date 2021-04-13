(ns seven-guis-cljs.task1counter
  (:require [reagent.core :as r]))

(def click-count (r/atom 0))

(defn counter-field []
  [:input {:class "counter-field"
           :type "text"
           :value @click-count
           :read-only true}])

(defn counter-button []
  [:input
   {:class "counter-button"
    :type "button"
    :value "Count"
    :on-click
    #(swap! click-count inc)}])

(defn counter-gui []
  [:div {:class "counter-gui"}
   [counter-button]
   [counter-field]])
