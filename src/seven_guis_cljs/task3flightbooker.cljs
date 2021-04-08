(ns seven-guis-cljs.task3flightbooker
  (:require [reagent.core :as r]))

(def one-way-flight "one-way flight")
(def return-flight "return flight")

(def flight-type (r/atom one-way-flight))

(defn event->target-value [e]
  (-> e .-target .-value))


(defn flight-type-select []
  [:select
   {:on-change #(reset! flight-type (event->target-value %))}
   [:option one-way-flight]
   [:option return-flight]])

(def red-background-style {:background-color "red"})

(def start-value (r/atom "27.03.2014"))
(def return-value (r/atom "27.03.2014"))

(defn has-point [s pos]
  (= (get s pos) "."))

(defn has-date-points [s]
  (and (has-point s 2)
       (has-point s 5)))

(defn has-date-length [s]
  (= (.-length s) 10))

(defn str-is-int [c]
  (= c (str (js/parseInt c))))

(def date-num-pos [0 1 3 4 6 7 8 9])

(defn has-date-nums [s]
  (reduce
   #(and %1 (str-is-int (get s %2)))
   true date-num-pos))

; valid in the context of the gui guidelines, not in JS
(defn valid-date-str [s]
  (and (has-date-length s)
       (has-date-points s)
       (has-date-nums s)))

; 7guis date-str not JS
(defn date-str-to-int [s]
  (js/parseInt (apply str (map #(get s %) date-num-pos))))

(defn return-strictly-before-start [start return]
  (> (date-str-to-int start)
     (date-str-to-int return)))

(defn start-field []
  [:input
   {:type "text"
    :value @start-value
    :style (when
            (not (valid-date-str @start-value))
             red-background-style)
    :on-change #(reset! start-value
                        (event->target-value %))}])

(defn is-one-way-flight []
  (= @flight-type one-way-flight))

(defn return-field []
  [:input
   {:type "text"
    :value @return-value
    :disabled (is-one-way-flight)
    :style (when
            (not (valid-date-str @return-value))
             red-background-style)
    :on-change #(reset! return-value
                        (event->target-value %))}])

(defn book-message [flight dates]
  (case flight
    "one-way flight" (str "You have booked a " one-way-flight " on " (:start dates) ".")
    "return flight"  (str
                      "You have booked a flight on " (:start dates)
                      " and a return flight on " (:return dates) ".")))

(defn book-button []
  (let [out (r/atom "")]
    (fn []
      [:div
       [:button
        {:on-click #(reset! out (book-message
                                 @flight-type
                                 {:start @start-value :return @return-value}))
         :disabled (or (not (valid-date-str @start-value))
                       (and
                        (not (is-one-way-flight))
                        (or
                         (not (valid-date-str @return-value))
                         (return-strictly-before-start @start-value @return-value))))}
        "Book"]
       [:div @out]])))

(defn flight-booker-gui []
  [:div
   [flight-type-select]
   [:br]
   [start-field]
   [:br]
   [return-field]
   [:br]
   [book-button]])