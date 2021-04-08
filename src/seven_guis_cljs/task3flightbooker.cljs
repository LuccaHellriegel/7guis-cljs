(ns seven-guis-cljs.task3flightbooker
  (:require [reagent.core :as r]))

;; -------------------------
;; DATA and STATE
;; -------------------------

(def one-way-flight "one-way flight")
(def return-flight "return flight")

(def flight-type (r/atom one-way-flight))
(def start-value (r/atom "27.03.2014"))
(def return-value (r/atom "27.03.2014"))

(defn is-one-way-flight []
  (= @flight-type one-way-flight))

;; -------------------------
;; DATE PARSING
;; -------------------------

; the specification doesnt include the valid year range, so 0000 is valid
; alternatively we could use re-find and check the third capturing group
(def date-pattern #"([1-9][0-9]|[0-9][1-9])\.(0[1-9]|[1-2][0-2])\.([0-9][0-9][0-9][0-9])")

(defn re-match-date-str [s]
  (re-matches date-pattern s))

(defn date-str-to-int [s]
  (js/parseInt
   (apply str
          (rest (re-match-date-str s)))))

;; -------------------------
;; COMPONENTS
;; -------------------------

(defn event->target-value [e]
  (-> e .-target .-value))

(defn flight-type-select []
  [:select
   {:on-change #(reset! flight-type (event->target-value %))}
   [:option one-way-flight]
   [:option return-flight]])

(def red-background-style {:background-color "red"})

(defn start-field []
  [:input
   {:type "text"
    :value @start-value
    :style (when
            (not (re-match-date-str @start-value))
             red-background-style)
    :on-change #(reset! start-value
                        (event->target-value %))}])

(defn return-field []
  [:input
   {:type "text"
    :value @return-value
    :disabled (is-one-way-flight)
    :style (when
            (not (re-match-date-str @return-value))
             red-background-style)
    :on-change #(reset! return-value
                        (event->target-value %))}])

(defn book-message [flight dates]
  (case flight
    "one-way flight" (str "You have booked a " one-way-flight " on " (:start dates) ".")
    "return flight"  (str
                      "You have booked a flight on " (:start dates)
                      " and a return flight on " (:return dates) ".")))

(defn return-strictly-before-start [start return]
  (> (date-str-to-int start)
     (date-str-to-int return)))

(defn book-button []
  (let [out (r/atom "")]
    (fn []
      [:div
       [:button
        {:on-click #(reset! out (book-message
                                 @flight-type
                                 {:start @start-value :return @return-value}))
         :disabled (or (not (re-match-date-str @start-value))
                       (and
                        (not (is-one-way-flight))
                        (or
                         (not (re-match-date-str @return-value))
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