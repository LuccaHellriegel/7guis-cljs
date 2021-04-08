(ns seven-guis-cljs.task1counter
  (:require [reagent.core :as r]))

(def click-count (r/atom 0))

(defn counter-field []
  [:input {:type "text"
           :value @click-count
           :read-only true}])

(defn count-button []
  [:input
   {:type "button"
    :value "Count"
    :on-click
    #(swap! click-count inc)}])

(defn counter-gui []
  [:div
   [counter-field]
   [count-button]])
