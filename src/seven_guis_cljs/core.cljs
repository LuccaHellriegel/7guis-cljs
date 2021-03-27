(ns seven-guis-cljs.core
  (:require [reagent.core :as r]
            [reagent.dom :as d]
            [clojure.string :as string]))

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

(def elapsed-time (r/atom 0.0))
(def duration (r/atom 15.0))

(defn elapsed-time-gauge []
  [:div "Elapsed Time: " [:meter {:value @elapsed-time :min 0 :max @duration :step 0.1}]])

(defn inc-zero-point-one [v]
  (/ (+ (* 10 v) 1) 10))

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
   ; this leads to re-render once the < value changes
   ; either: d <= e, then we stop executing 
   ; the execution itself is driven by the swap of @elapsed-time
   ; which leads to re-render by itself
   ; or: d > e, then we start again
   ; so the reaction time is roughly 100 ms
   ; if we set d = e while the function still executes
   ; we will reach d + 0.1 = e?
   [elapsed-time-numerical (< @elapsed-time @duration)]
   [duration-slider]
   [reset-button]])

;; -------------------------

(def me {:surname "Nachname" :name "Vorname"})

(def you {:surname "Highly" :name "Specific"})

(def crud-db (r/atom [me you]))
(def prefix (r/atom ""))
(def selected-full-name (r/atom me))
(def name-atom (r/atom ""))
(def surname-atom (r/atom ""))

(defn prefix-field []
  [:input {:type "text" :on-change #(reset! prefix (event->target-value %))}])

(defn name-field []
  [:input {:type "text"
           :value @name-atom
           :on-change #(reset! name-atom (event->target-value %))}])

(defn surname-field []
  [:input {:type "text"
           :value @surname-atom
           :on-change #(reset! surname-atom (event->target-value %))}])

(defn fields []
  [:div {:style {:width "50%"}}
   "Name: " [name-field]
   [:br]
   "Surname: "  [surname-field]])

(defn gen-key []
  (gensym "key-"))

(defn full-name-list-entry [full-name selected-name]
  ^{:key (gen-key)}
  [:li {:on-click #(if (identical? selected-name full-name)
                     (reset! selected-full-name nil)
                     (reset! selected-full-name full-name))
        ; = is not enough if we allow same names (the world is big)
        :style (if (identical? full-name selected-name)
                 {:background-color "LightBlue" :color "white" :list-style-type "none"}
                 {:list-style-type "none"})}
   (:surname full-name) ", " (:name full-name)])

(defn surname-starts-with-prefix [full-name]
  (string/starts-with? (:surname full-name) @prefix))

(defn full-name-list []
  [:ul
   {:style {:width "50%"}}
   (doall (map
           #(full-name-list-entry % @selected-full-name)
           (filter #(if
                     (surname-starts-with-prefix %)
                      true
                      (do
                        (when (= @selected-full-name %)
                          (reset! selected-full-name nil))
                        false)) @crud-db)))])

(defn add-full-name-to-vec [v]
  (conj v {:name @name-atom :surname @surname-atom}))

(defn create-button []
  [:button {:on-click #(swap! crud-db add-full-name-to-vec)} "Create"])

(defn replace-in-db [db selected-name new-name]
  (vec (replace {selected-name new-name} db)))

; cant find anything about "" / empty updates in the spec, so we will allow it
(defn update-button []
  [:button {:on-click #(swap! crud-db replace-in-db @selected-full-name {:name @name-atom :surname @surname-atom})
            :disabled (not @selected-full-name)} "Update"])

(defn remove-from-db [db selected-name]
  (vec (remove #(= % selected-name) db)))

(defn delete-button []
  [:button {:on-click #(swap! crud-db remove-from-db @selected-full-name)
            :disabled (not @selected-full-name)} "Delete"])

(defn buttons []
  [:div [create-button] " "
   [update-button] " "
   [delete-button]])

(defn crud-gui []
  [:div
   "Filter prefix: " [prefix-field] [:br]
   [full-name-list]
   [fields]
   [buttons]])

;; -------------------------

; think about using just one atom, especially when we include selected-circles
(def present (r/atom []))

(def future (r/atom []))

(defn undo []
  (when (> (count @present) 0)
    (swap! future #(conj % (last @present)))
    (swap! present #(pop %))))

(defn undo-button []
  [:button {:on-click undo} "Undo"])

(defn redo []
  (when (> (count @future) 0)
    (swap! present #(conj % (last @future)))
    (swap! future #(pop %))))

(defn redo-button []
  [:button {:on-click redo} "Redo"])

(defn draw-standard-circle [ctx pos]
  (.beginPath ctx)
  (.arc ctx (:x pos) (:y pos) 15 0 (* 2 js/Math.PI) false)
  (set! (.-lineWidth ctx) 1)
  (.stroke ctx)
  (reset! future []))

(def canvas-id "circle-canvas")

(defn get-canvas []
  (.getElementById js/document canvas-id))

(defn get-canvas-ctx []
  (.getContext (get-canvas) "2d"))

(defn event->canvas-mouse-pos [e]
  (let [rect (.getBoundingClientRect (get-canvas))]
    {:x (- (.-clientX e) (.-left rect))
     :y (- (.-clientY e) (.-top rect))}))

(defn conj-mouse-pos [v e]
  (conj v (event->canvas-mouse-pos e)))

(defn circle-canvas []
  [:canvas {:id canvas-id :width "300" :height "200" :style {:border "3px solid"}
            :on-click
            #(swap! present conj-mouse-pos %)}])

(defn reset-canvas  [canvas]
  (.clearRect (.getContext canvas "2d") 0 0 (.-width canvas) (.-height canvas)))

(defn circle-drawer [positions]
  (r/after-render
   #(do (reset-canvas (get-canvas))
        (let [ctx (get-canvas-ctx)]
          (doseq [pos positions] (prn (draw-standard-circle ctx pos))))))
  nil)

(defn circle-drawer-gui []
  [:div
   [undo-button] " "
   [redo-button]
   [:br]
   [circle-canvas]
   [circle-drawer @present]])

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
   [:br]
   [:u "Timer"]
   [timer-gui]
   [:br]
   [:br]
   [:u "CRUD"]
   [crud-gui]
   [:br]
   [:br]
   [:u "Circle Drawer"]
   [circle-drawer-gui]])
;; -------------------------
;; Initialize app

(defn mount-root []
  (d/render [home-page] (.getElementById js/document "app")))

(defn ^:export init! []
  (mount-root))
