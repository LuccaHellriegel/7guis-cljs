(ns seven-guis-cljs.task3flightbooker
  (:require [reagent.core :as r]))

;; -------------------------
;; DATA and STATE
;; -------------------------

(def one-way-flight "one-way flight")
(def return-flight "return flight")

(def default-state {:start "27.03.2014" :return "27.03.2014" :flight-type one-way-flight})
(def state (r/atom default-state))

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
  (let [flight-type (r/cursor state [:flight-type])]
    (fn []
      [:select
       {:class "flight-select"
        :on-change #(reset! flight-type (event->target-value %))}
       [:option one-way-flight]
       [:option return-flight]])))

(defn start-field []
  (let [start-value (r/cursor state [:start])]
    (fn []
      [:input
       {:type "text"
        :value @start-value
        :class (if
                (not (re-match-date-str @start-value))
                 "date-field date-field-wrong"
                 "date-field")
        :on-change #(reset! start-value
                            (event->target-value %))}])))

(defn return-field []
  (let [return-value (r/cursor state [:return])
        flight-type (r/cursor state [:flight-type])]
    (fn []
      [:input
       {:type "text"
        :value @return-value
        :disabled (= @flight-type one-way-flight)
        :class (if
                (and (not (re-match-date-str @return-value))
                     (not (= @flight-type one-way-flight)))
                 "date-field date-field-wrong"
                 "date-field")
        :on-change #(reset! return-value
                            (event->target-value %))}])))

(defn book-message [state]
  (case (:flight-type state)
    "one-way flight" (str "You have booked a " one-way-flight " on " (:start state) ".")
    "return flight"  (str
                      "You have booked a flight on " (:start state)
                      " and a return flight on " (:return state) ".")))

(defn return-strictly-before-start [start return]
  (> (date-str-to-int start)
     (date-str-to-int return)))

(defn book-button []
  (let [out (r/atom "")]
    (fn []
      (let [start-value (:start @state)
            return-value (:return @state)]
        [:div
         [:button
          {:class "book-button"
           :on-click #(reset! out (book-message
                                   @state))
           :disabled (or (not (re-match-date-str start-value))
                         (and
                          (not (= (:flight-type state) one-way-flight))
                          (or
                           (not (re-match-date-str return-value))
                           (return-strictly-before-start start-value return-value))))}
          "Book"]
         (when (seq @out)
           [:div {:class "book-message"} @out])]))))

(defn flight-booker-gui []
  [:div {:class "flight-booker-gui"}
   [flight-type-select]
   [:div {:class "date-field-container"}
    [start-field]
    [return-field]]
   [book-button]])