(ns seven-guis-cljs.core
  (:require [reagent.core :as r]
            [reagent.dom :as d]))

;; -------------------------
;; Views

; special reagent atom for re-render
(def click-count (r/atom 0))

(defn counter-field []
  [:input {:type "text"
           ; @ for referencing the value
           :value @click-count
           ; React naming
           :readOnly true}])

(defn count-button []
  [:input
   ; defining attributes via maps
   {:type "button"
    :value "Count"
    ; Reagent naming?
    :on-click
    ;swap! Atomically swaps the value of atom 
    #(swap! click-count inc)}])

(defn counter-gui []
  [:div
   ; putting functions in vectors
   [counter-field]
   [count-button]])

;; -------------------------

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
  [:span
   [celsius-field] "Celsius =" [fahrenheit-field] "Fahrenheit"])

;; -------------------------

(def one-way-flight "one-way flight")
(def return-flight "return flight")

(def flight-type (r/atom one-way-flight))

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

;; -------------------------

(defn home-page []
  [:div
   [:u "Counter"]
   [counter-gui]
   [:br]
   [:br]
   [:u "Temperature Converter"]
   [temp-converter-gui]
   [:br]
   [:br]
   [:u "Flight Booker"]
   [flight-booker-gui]
   [:br]
   [:br]])
;; -------------------------
;; Initialize app

(defn mount-root []
  (d/render [home-page] (.getElementById js/document "app")))

(defn ^:export init! []
  (mount-root))
