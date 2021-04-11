(ns seven-guis-cljs.task4timer
  (:require [reagent.core :as r]))

(defn event->target-value [e]
  (-> e .-target .-value))

(def elapsed-time (r/atom 0.0))
(def duration (r/atom 15.0))

(defn elapsed-time-gauge []
  [:div {:style {:font-size "1.5em" :margin "4px"}}
   "Elapsed Time: "
   [:meter {:value @elapsed-time :min 0 :max @duration :step 0.1}]])

(defn inc-zero-point-one [n]
  (/ (+ (* 10 n) 1) 10))

(defn elapsed-time-numerical [tick]
  (js/setTimeout #(when
                   tick
                    (swap! elapsed-time inc-zero-point-one)) 100)
  [:div {:style {:font-size "1.5em" :margin "4px" :border "2px solid" :padding "4px" :width "6ch"}}
   (str @elapsed-time "s")])

(defn duration-slider []
  [:div {:style {:font-size "1.5em" :margin "4px"}}
   "Duration: "
   [:input {:style {:min-width "10%"}
            :type "range" :value @duration :min 0 :max 15 :step 0.1
            :on-change #(reset! duration (event->target-value %))}]])

(defn reset-button []
  [:button {:style {:font-size "1.5em" :margin "4px" :max-width "50vh"}
            :on-click #(reset! elapsed-time 0)} "Reset"])

(defn timer-gui []
  [:div {:class "flex-column-start"}
   [elapsed-time-gauge]
   [elapsed-time-numerical (< @elapsed-time @duration)]
   [duration-slider]
   [reset-button]])
