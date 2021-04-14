(ns seven-guis-cljs.task6circledrawer
  (:require [reagent.core :as r]))

;; -------------------------
;; UTIL
;; -------------------------

(defn vec-contains? [v i]
  (some #(= % i) v))

(defn event->target-value [e]
  (-> e .-target .-value))

;; -------------------------
;; STATE
;; -------------------------

(def default-state {:present [] :future [] :modal false})
(def state (r/atom default-state))

; we do not count selection as a change (not defined in spec), so we ignore it
(defn remove-select [present]
  (if (= :select (:type (last present)))
    (pop present)
    present))

(defn same-pos? [pos1 pos2]
  (and (= (:x pos1) (:x pos2))
       (= (:y pos1) (:y pos2))))

(defn find-circle-with-changed-radius [present]
  (let [select-circle (last present)]
    (loop [index (dec (dec (count present)))]
      (if (= -1 index)
        nil
        (let [cur-circle (nth present index)]
          (if (same-pos? cur-circle select-circle)
            (if (= (:radius cur-circle) (:radius select-circle))
              nil
              cur-circle)
            (recur (dec index))))))))

(defn can-undo? [present] (> (count present) 0))

(defn undo []
  (let [present (remove-select (:present @state))
        future (:future @state)]
    (swap! state assoc
           :future (conj future (last present))
           :present (pop present))))

(defn can-redo? [future] (> (count future) 0))

(defn redo []
  (let [present (remove-select (:present @state))
        future (:future @state)]
    (swap! state assoc
           :present (conj present (last future))
           :future (pop future))))

(defn get-modal-cursor []
  (r/cursor state [:modal]))

(defn get-present-cursor []
  (r/cursor state [:present]))

;; -------------------------
;; CANVAS
;; -------------------------

(def canvas-id "circle-canvas")

(defn get-canvas []
  (.getElementById js/document canvas-id))

(defn get-canvas-ctx []
  (.getContext (get-canvas) "2d"))

(defn reset-canvas  []
  (let [canvas (get-canvas)]
    (.clearRect (.getContext canvas "2d") 0 0 (.-width canvas) (.-height canvas))))

(defn draw-circle [circle]
  (let [ctx (get-canvas-ctx)]
    (.beginPath ctx)
    (.arc ctx (:x circle) (:y circle) (:radius circle) 0 (* 2 js/Math.PI) false)
    (when (= (:type circle) :select)
      (set! (.-fillStyle ctx) "#475c7a")
      (.fill ctx))
    (set! (.-lineWidth ctx) 1)
    (.stroke ctx)))

(defn event->canvas-mouse-pos [e]
  (let [rect (.getBoundingClientRect (get-canvas))]
    {:x (- (.-clientX e) (.-left rect))
     :y (- (.-clientY e) (.-top rect))}))

;; -------------------------
;; CIRCLES
;; -------------------------

(defn dist-between-points [p1 p2]
  (js/Math.sqrt (+
                 (js/Math.pow (- (:x p1) (:x p2)) 2)
                 (js/Math.pow (- (:y p1) (:y p2)) 2))))

(defn pos-inside-circle? [pos circle]
  (> (:radius circle) (dist-between-points pos circle)))

(defn click-in-circle? [v pos]
  (some #(when (pos-inside-circle? pos %) %)
        ; reverse because we want to get updates/selects first
        (reverse v)))

(defn pos->circle-id [pos]
  (str "x" (:x pos) "y" (:y pos)))

(defn event->circle [e]
  (let [pos (event->canvas-mouse-pos e)
        id (pos->circle-id pos)]
    (assoc pos :radius 15 :id id :type :create)))

(defn conj-mouse-pos-as-circle [v e]
  (conj v (event->circle e)))

;; -------------------------
;; COMPONENTS
;; -------------------------

(defn undo-button [modal-cursor]
  (let [present (get-present-cursor)]
    (fn []
      [:button {:class "circle-drawer-button"
                :on-click undo
                :disabled (or
                           @modal-cursor
                           (not (can-undo? @present)))}
       "Undo"])))

(defn redo-button [modal-cursor]
  (let [future (r/cursor state [:future])]
    (fn []
      [:button {:class "circle-drawer-button"
                :on-click redo
                :disabled (or
                           @modal-cursor
                           (not (can-redo? @future)))}
       "Redo"])))

(defn buttons []
  (let [modal (get-modal-cursor)]
    [:div {:class "circle-drawer-buttons"}
     [undo-button
      modal]
     [redo-button
      modal]]))

(defn circle-drawer [circles]
  (r/after-render
   #(do
      (reset-canvas)
      (when (seq circles)
        ; we start from the right to catch all updates/selects first, 
        ; so we dont draw unecessarily
        ; this only works because with empty circles draw order is irrelevant          
        (loop [index (dec (count circles))
               prevent []]
          (when (not (= -1 index))
            (let [circle (nth circles index)]
              (when (not (vec-contains? prevent (:id circle)))
                (draw-circle circle))
              (recur (dec index)
                     (if (= :create (:type circle))
                       prevent
                       (conj prevent (:id circle)))))))))))

(defn handle-modal-opening [modal-cursor present-cursor event]
  (when (not @modal-cursor) (let [clicked-circle (click-in-circle? @present-cursor (event->canvas-mouse-pos event))]
                              (when (= :select (:type clicked-circle))
                                (.preventDefault event)
                                (swap! state assoc :modal true)
                                true))))

(defn circle-canvas []
  (let [present-cursor (get-present-cursor)
        modal-cursor (get-modal-cursor)]
    (fn []
      (circle-drawer @present-cursor)
      [:canvas {:class "circle-canvas"
                ; this shouldnt be in the style-map because then it doesnt affect the bitmap
                :width (let [w js/document.documentElement.clientWidth] (if (< w 500) "250px" "400px")) :height "300px"
                :id canvas-id
                ; the spec only defines right-click, but that doesnt work on mobile!
                :on-double-click #(when (handle-modal-opening modal-cursor present-cursor %)
                                    ; the double-click selects the modal-text, so we remove the selection
                                    ; this doesnt work 100%, so I added user-select: none; to the text 
                                    ; (we still remove the selection of the "Close"-text)
                                    (r/after-render (fn [] (let [selection (.getSelection js/document)]
                                                             (when selection (.empty selection))))))
                :on-context-menu #(handle-modal-opening modal-cursor present-cursor %)
                :on-click
                #(when (not @modal-cursor) (let [present @present-cursor
                                                 clicked-circle (click-in-circle? present (event->canvas-mouse-pos %))]
                                             (if clicked-circle
                                               (swap! state assoc
                                                      :present (conj
                                                                (remove-select present)
                                                                (assoc clicked-circle :type :select)))
                                               (swap! state assoc
                                                      :present (conj-mouse-pos-as-circle
                                                                (remove-select present)
                                                                %)
                                                      ; once we draw a new circle we cant redo
                                                      :future []))))}])))

(defn close-modal-button [present]
  [:button {:class "diameter-modal-button"
            :on-click #(let [orig-circle (find-circle-with-changed-radius present)]
                         (swap! state assoc
                                :modal false
                                :present (if orig-circle
                                           (conj (pop present) (assoc (last present)
                                                                      :type :update))
                                           (remove-select present))))}
   "Close"])

(defn diameter-slider [present]
  [:input {:class "diameter-modal-slider"
           :type "range" :value (:radius (last present)) :min 1 :max 100 :step 1
           :on-change #(swap! state assoc :present (conj
                                                    (remove-select present)
                                                    (assoc (last present) :radius (event->target-value %))))}])
(defn diameter-text [present]
  [:div {:class "diameter-modal-text"} "Adjust diameter of circle at (" (:x (last present)) "," (:y (last present)) ")."])

(defn diameter-modal []
  (let [modal-cursor (get-modal-cursor)
        present-cursor (get-present-cursor)]
    (fn []
      [:div {:class (if @modal-cursor "diameter-modal diameter-modal-active" "diameter-modal")}
       (when @modal-cursor [diameter-text @present-cursor])
       (when @modal-cursor  [diameter-slider @present-cursor])
       (when @modal-cursor [close-modal-button @present-cursor])])))

(defn circle-drawer-gui []
  [:div {:class "circle-drawer-gui"}
   [buttons]
   [:div {:class "circle-drawer-content"}
    [circle-canvas]
    [diameter-modal]]])