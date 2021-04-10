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

(def field-style {:font-size "2em" :margin "4px"})

(defn flight-type-select []
  (let [flight-type (r/cursor state [:flight-type])]
    (fn []
      [:select
       {:style field-style
        :on-change #(reset! flight-type (event->target-value %))}
       [:option one-way-flight]
       [:option return-flight]])))

(def red-background-style (assoc field-style :background-color "indianred"))

(defn start-field []
  (let [start-value (r/cursor state [:start])]
    (fn []
      [:input
       {:type "text"
        :value @start-value
        :style (if
                (not (re-match-date-str @start-value))
                 red-background-style
                 field-style)
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
        :style (if
                (and (not (re-match-date-str @return-value))
                     (not (= @flight-type one-way-flight)))
                 red-background-style
                 field-style)
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
          {:style field-style
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
           [:div {:style {:background-color "lightblue"
                          :border-radius "30px" :border "2px solid" :padding "12px " :font-size "1.2em" :margin "10px"}} @out])]))))

(defn flight-booker-gui []
  [:div
   [flight-type-select]
   [:br]
   [start-field]
   [:br]
   [return-field]
   [:br]
   [book-button]])