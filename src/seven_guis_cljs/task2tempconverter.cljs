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
      ((reset! celsius-value n)
       (reset! fahrenheit-value (celsius->fahrenheit n)))
      (reset! celsius-value val))))

(defn celsius-field []
  [:div
   [:input
    {:type "text"
     :value @celsius-value
     :on-change #(-> %
                     event->target-value
                     change-celsius)}]])

(defn change-fahrenheit [val]
  (let [n (parse-converter-input val)]
    (if n
      ((reset! fahrenheit-value n)
       (reset! celsius-value (fahrenheit->celsius n)))
      (reset! fahrenheit-value val))))

(defn fahrenheit-field []
  [:div
   [:input
    {:type "text"
     :value @fahrenheit-value
     :on-change #(-> %
                     event->target-value
                     change-fahrenheit)}]])

(defn temp-converter-gui []
  [:div {:style {:display "flex" :flex-direction "row" :justify-content "flex-start"}}
   [celsius-field] [:div {:style {:margin "0px 5px 0px"}} "Celsius ="] [fahrenheit-field] [:div {:style {:margin "0px 5px"}} "Fahrenheit"]])
