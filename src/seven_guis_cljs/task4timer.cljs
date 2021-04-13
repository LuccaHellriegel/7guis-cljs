(ns seven-guis-cljs.task4timer
  (:require [reagent.core :as r]))

(defn event->target-value [e]
  (-> e .-target .-value))

(def default-state {:elapsed-time 0.0
                    :duration 15.0})
(def state (r/atom default-state))

(defn get-elapsed-time-cursor []
  (r/cursor state [:elapsed-time]))

(defn elapsed-time-gauge []
  [:div {:class "time-gauge"}
   "Elapsed Time: "
   [:meter {:value (:elapsed-time @state) :min 0 :max (:duration @state) :step 0.1}]])

(defn inc-zero-point-one [n]
  (/ (+ (* 10 n) 1) 10))

(defn elapsed-time-numerical []
  (let [elapsed-time (get-elapsed-time-cursor)
        timer (r/atom nil)]
    (fn []
      (when (not @timer)
        (reset! timer (js/setTimeout
                       #(do (reset! timer nil)
                            (when (< (:elapsed-time @state) (:duration @state))
                              (swap! state assoc :elapsed-time (inc-zero-point-one (:elapsed-time @state)))))
                       100)))
      [:div {:class "time-number"}
       (str @elapsed-time "s")])))

(defn duration-slider []
  (let [duration (r/cursor state [:duration])]
    (fn []
      [:div {:class "time-slider-container"}
       "Duration: "
       [:input {:class "time-slider"
                :type "range" :value @duration :min 0 :max (:duration default-state) :step 0.1
                :on-change #(reset! duration (event->target-value %))}]])))

(defn reset-button []
  (let [elapsed-time (get-elapsed-time-cursor)]
    (fn []
      [:button {:class "reset-button"
                :on-click #(reset! elapsed-time 0)} "Reset"])))

(defn timer-gui []
  [:div {:class "timer-gui"}
   [elapsed-time-gauge]
   [elapsed-time-numerical]
   [duration-slider]
   [reset-button]])
