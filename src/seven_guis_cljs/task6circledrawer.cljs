(ns seven-guis-cljs.task6circledrawer
  (:require [reagent.core :as r]))

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

(def line-width 1)

(defn remove-circle [ctx circle]
  (.beginPath ctx)
  (.arc ctx (:x circle) (:y circle) (+ line-width (:radius circle)) 0 (* 2 js/Math.PI) false)
  (set! (.-fillStyle ctx) "white")
  (.fill ctx))

(defn dist-between-points [p1 p2]
  (js/Math.sqrt (+
                 (js/Math.pow (- (:x p1) (:x p2)) 2)
                 (js/Math.pow (- (:y p1) (:y p2)) 2))))



(defn pos-inside-circle? [pos circle]
  (> (:radius circle) (dist-between-points pos circle)))

; could merge these functions but the task spec says smaller than radius not including line-width
(defn pos-inside-or-on-circle? [pos circle]
  (> (+ line-width  (:radius circle)) (dist-between-points pos circle)))

(defn draw-circle [ctx circle]
  (.beginPath ctx)
  (.arc ctx (:x circle) (:y circle) (:radius circle) 0 (* 2 js/Math.PI) false)
  (when (:color circle)
    (set! (.-fillStyle ctx) (:color circle))
    (.fill ctx))
  (set! (.-lineWidth ctx) line-width)
  (.stroke ctx))

(def canvas-id "circle-canvas")

(defn get-canvas []
  (.getElementById js/document canvas-id))

(defn get-canvas-ctx []
  (.getContext (get-canvas) "2d"))

(defn equal-pos? [p1 p2]
  (and
   (=
    (:x p1) (:x p2))
   (= (:y p1) (:y p2))))

(defn redraw-affected-circles [circle]
  (let [affected-circles
        (filter #(and (not (equal-pos? % circle))
                      (> (+ (:radius %) (:radius circle)) (dist-between-points % circle)))
                @present)]
    (js/console.log (str "Affected" affected-circles))
    (when (not-empty affected-circles)
      (doseq [circle affected-circles] (prn (draw-circle (get-canvas-ctx) circle))))))

(defn event->canvas-mouse-pos [e]
  (let [rect (.getBoundingClientRect (get-canvas))]
    {:x (- (.-clientX e) (.-left rect))
     :y (- (.-clientY e) (.-top rect))}))

(defn conj-mouse-pos [v e]
  (conj v (assoc (event->canvas-mouse-pos e) :radius 15)))

(defn click-in-circle? [pos]
  (some #(when (pos-inside-circle? pos %) %) @present))

(defn circle-canvas []
  [:canvas {:id canvas-id :width "300" :height "200" :style {:border "3px solid"}
            :on-click
            #((let [clicked-circle (click-in-circle? (event->canvas-mouse-pos %))]
                (do
                  ; once we draw a new circle we cant redo
                  (reset! future [])
                  (if clicked-circle
                    (swap! present conj (assoc clicked-circle :color "grey" :update true :radius 10))
                    (swap! present conj-mouse-pos %)))))}])

(defn reset-canvas  [canvas]
  (.clearRect (.getContext canvas "2d") 0 0 (.-width canvas) (.-height canvas)))


(defn find-circle [pos]
  (js/console.log (str @present pos))
  (some #(when (and (not (:update %))
                    (equal-pos? pos %))
           %) @present))

(defn circle-drawer [circles]
  (r/after-render
   #(do (reset-canvas (get-canvas))
        (let [ctx (get-canvas-ctx)]
          (doseq [circle circles] (prn ((when (:update circle)
                                          (let [orig-circle (find-circle circle)]
                                            (js/console.log (str orig-circle))
                                            (do
                                              (remove-circle (get-canvas-ctx) orig-circle)
                                              (redraw-affected-circles orig-circle))))
                                        (draw-circle ctx circle)))))))
  nil)

(defn circle-drawer-gui []
  [:div
   [undo-button] " "
   [redo-button]
   [:br]
   [circle-canvas]
   [circle-drawer @present]])