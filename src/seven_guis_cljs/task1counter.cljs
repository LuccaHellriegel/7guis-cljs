(ns seven-guis-cljs.task1counter
  (:require [reagent.core :as r]))

(def click-count (r/atom 0))

(defn counter-field []
  [:input {:class "bigger-font"
           :style {:max-width "15ch"}
           :type "text"
           :value @click-count
           :read-only true}])

(defn count-button []
  [:input
   {:class "bigger-font"
    :style {:min-width "6ch"}
    :type "button"
    :value "Count"
    :on-click
    #(swap! click-count inc)}])

(defn counter-gui []
  [:div {:class "flex-row-start"}
   [count-button]
   [counter-field]])
