(ns seven-guis-cljs.task4timer
  (:require [reagent.core :as r]))

(defn event->target-value [e]
  (-> e .-target .-value))

(def elapsed-time (r/atom 0.0))
(def duration (r/atom 15.0))

(defn elapsed-time-gauge []
  [:div
   "Elapsed Time: "
   [:meter {:value @elapsed-time :min 0 :max @duration :step 0.1}]])

(defn inc-zero-point-one [n]
  (/ (+ (* 10 n) 1) 10))

(defn elapsed-time-numerical [tick]
  (js/setTimeout #(when
                   tick
                    (swap! elapsed-time inc-zero-point-one)) 100)
  [:div (str @elapsed-time "s")])

(defn duration-slider []
  [:div
   "Duration: "
   [:input {:type "range" :value @duration :min 0 :max 15 :step 0.1
            :on-change #(reset! duration (event->target-value %))}]])

(defn reset-button []
  [:button {:on-click #(reset! elapsed-time 0)} "Reset"])

(defn timer-gui []
  [:div
   [elapsed-time-gauge]
   [elapsed-time-numerical (< @elapsed-time @duration)]
   [duration-slider]
   [reset-button]])
