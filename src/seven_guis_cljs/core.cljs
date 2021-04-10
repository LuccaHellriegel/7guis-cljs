(ns seven-guis-cljs.core
  (:require
   [reagent.dom :as d]
   [seven-guis-cljs.task1counter :as task1counter]
   [seven-guis-cljs.task2tempconverter :as task2tempconverter]
   [seven-guis-cljs.task3flightbooker :as task3flightbooker]
   [seven-guis-cljs.task4timer :as task4timer]
   [seven-guis-cljs.task5crud :as task5crud]
   [seven-guis-cljs.task6circledrawer :as task6circledrawer]
   [seven-guis-cljs.task7cells :as task7cells]
   [reagent.core :as r]))

(def active-task (r/atom "Task 1: Counter"))

(def content-vec [["Task 1: Counter" task1counter/counter-gui]
                  ["Task 2: Temperature Converter" task2tempconverter/temp-converter-gui]
                  ["Task 3: Flight Booker" task3flightbooker/flight-booker-gui]
                  ["Task 4: Timer" task4timer/timer-gui]
                  ["Task 5: CRUD" task5crud/crud-gui]
                  ["Task 6: Circle Drawer"
                   task6circledrawer/circle-drawer-gui
                   [:div
                    [:u "How to:"]
                    [:ul
                     [:li "Left-click: create / select circle."]
                     [:li "Right-click on selected-circle: change diameter via popup."]
                     [:li "Undo/redo buttons: undo/redo circle creation / diameter change."
                      [:ul [:li "Can't be used during changing the diameter or if no changes to undo/redo exist."]]]]]]
                  ["Task 7: Cells"
                   task7cells/cells-gui
                   [:div [:u "How to:"]
                    [:ul
                     [:li "IMPORTANT: the included example content contains formulas in B0 and B1, so if something doesn't work as expected, check those."]
                     [:li "Basics:"
                      [:ul
                       [:li "Double-click: edit cell-content."]
                       [:li "Click away / press enter: evaluate cell-formula / -content."]
                       [:li "Formulas start with \"=\" and fundamentally work like you would expect from e.g. Google Table."]
                       [:li "If the cell is red, either it contains a wrong formula or is part of a cyclic dependency."]]]
                     [:li "Formula syntax:"]
                     [:ul
                      [:li "Math operations (*,+,/,-) and brackets (\"(\", \")\")."]
                      [:li "Single- (A0) and range-variables (A0:A2 -> A0,A1,A2)."]
                      [:li "Functions:"
                       [:ul
                        [:li "Accept lists (e.g. \"A0,A1,A2\"): add, sub, div, mul, mod."]
                        [:li "Accept ranges (e.g. \"A0:A2\"): sum, prod."]]]]]]]])

(defn signature []
  [:h3
   {:style {:border-radius "25px" :border "2px solid" :padding "14px 16px" :margin "4px" :text-align "center"}}
   "7GUIs by Lucca Hellriegel"])



(defn heading [text]
  [:h3 [:u [:b text]]])

(def task-heading-style {:text-align "center"
                         :display "flex"
                         :justify-content "center"
                         :align-items "center"
                         :padding "10px"
                         :text-decoration "none"
                         :font-size "17px"
                         :margin "4px 2px 4px"
                         :border-radius "25px"
                         :border "2px solid white"
                         :color "#f2f2f2"})

(def task-heading-active-style  (assoc task-heading-style
                                       :background-color "#ffffff"
                                       :color "black"))

(def task-heading-hover-style (assoc task-heading-style
                                     :background-color "#ddd"
                                     :color "black"
                                     :text-decoration "underline"))

(defn task-heading [text]
  (let [style (r/atom task-heading-style)]
    (fn []
      [:div {:on-click #(reset! active-task text)
             ; you can solve this via :hover in css too, 
             ; but I am in a Reagent-groove now so here we are
             :on-mouse-enter #(reset! style task-heading-hover-style)
             :on-mouse-leave #(reset! style task-heading-style)
             :style (if
                     (and (not (= task-heading-hover-style @style))
                          (= text @active-task))
                      task-heading-active-style
                      @style)}
       text])))

(defn nav []
  [:div {:class "topnav flex-row-start"
         :style {:width "100%" :background-color "#79aea3"}}
   [signature]
   (doall (map (fn [c] ^{:key (first c)} [task-heading (first c)]) content-vec))])

(defn content []
  (let [v (some #(when (= (first %) @active-task) %) content-vec)]
    [:div {:style {:border "2px solid white" :background-color "white" :margin "10px"}}
     [(second v)]
     (when (= (count v) 3) [:div {:style {:margin "2px"}} (nth v 2)])]))

(defn home-page []
  [:div {:style {:display "flex" :flex-direction "column" :justify-content "center" :width "100%"}}
   [nav]
   [content]])

(defn mount-root []
  (d/render [home-page] (.getElementById js/document "app")))

(defn ^:export init! []
  (mount-root))
