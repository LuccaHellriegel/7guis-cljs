(ns seven-guis-cljs.task2tempconverter
  (:require [reagent.core :as r]))

(defn event->target-value [e]
  (-> e .-target .-value))

(def celsius-value (r/atom nil))
(def fahrenheit-value (r/atom nil))

(defn fahrenheit->celsius [f]
  (* (- f 32) (/ 5 9)))

(defn celsius->fahrenheit [c]
  (+ (* c (/ 9 5)) 32))

(defn parse-converter-input [input]
  (let [n (js/parseFloat input)
        valid (= input (str n))]
    (when valid n)))

(defn change-celsius [val]
  (let [n (parse-converter-input val)]
    (if n
      (do
        (reset! celsius-value n)
        (reset! fahrenheit-value (celsius->fahrenheit n)))
      (reset! celsius-value val))))

(defn celsius-field []
  [:div
   [:input
    {:class "bigger-font"
     :style {:margin "2px"}
     :type "text"
     :value @celsius-value
     :on-change #(-> %
                     event->target-value
                     change-celsius)}]])

(defn change-fahrenheit [val]
  (let [n (parse-converter-input val)]
    (if n
      (do
        (reset! fahrenheit-value n)
        (reset! celsius-value (fahrenheit->celsius n)))
      (reset! fahrenheit-value val))))

(defn fahrenheit-field []
  [:div
   [:input
    {:class "bigger-font"
     :style {:margin "2px"}
     :type "text"
     :value @fahrenheit-value
     :on-change #(-> %
                     event->target-value
                     change-fahrenheit)}]])

(defn temp-converter-gui []
  [:div {:class "flex-column-start" :style {:width "30%"}}
   [:div {:class "flex-row-start" :style {:padding "10px" :flex-wrap "wrap" :margin "2px" :justify-content "space-between" :width "100%" :align-items "center"}}
    [:div {:style {:padding "7px" :border-radius "25px" :border "2px solid" :font-size "1.5em" :margin "4px"}} "Celsius:"]
    [celsius-field]]
   [:div {:class "flex-row-start" :style {:padding "10px" :flex-wrap "wrap" :margin "2px" :justify-content "space-between" :width "100%" :align-items "center"}}
    [:div {:style {:padding "7px" :border-radius "25px" :border "2px solid" :font-size "1.5em" :margin "4px"}} "Fahrenheit:"]
    [fahrenheit-field]]])
