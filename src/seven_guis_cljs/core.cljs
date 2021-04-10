(ns seven-guis-cljs.core
  (:require
   [reagent.dom :as d]
   [seven-guis-cljs.task1counter :as task1counter]
   [seven-guis-cljs.task2tempconverter :as task2tempconverter]
   [seven-guis-cljs.task3flightbooker :as task3flightbooker]
   [seven-guis-cljs.task4timer :as task4timer]
   [seven-guis-cljs.task5crud :as task5crud]
   [seven-guis-cljs.task6circledrawer :as task6circledrawer]
   [seven-guis-cljs.task7cells :as task7cells]))

(defn heading [text]
  [:h3 [:u [:b text]]])

(defn home-page []
  [:div {:style {:display "flex" :flex-direction "column" :justify-content "center" :width "100%"}}
   [heading "1. Counter"]
   [task1counter/counter-gui]
   [:br]
   [:br]
   [heading "2. Temperature Converter"]
   [task2tempconverter/temp-converter-gui]
   [:br]
   [:br]
   [heading "3. Flight Booker"]
   [task3flightbooker/flight-booker-gui]
   [:br]
   [:br]
   [heading "4. Timer"]
   [task4timer/timer-gui]
   [:br]
   [:br]
   [heading "5. CRUD"]
   [task5crud/crud-gui]
   [:br]
   [:br]
   [heading "6. Circle Drawer"]
   [task6circledrawer/circle-drawer-gui]
   [:div [:u "How to:"]]
   [:ul
    [:li "Left-click: create / select circle."]
    [:li "Right-click on selected-circle: change diameter via popup."]
    [:li "Undo/redo buttons: undo/redo circle creation / diameter change."
     [:ul [:li "Can't be used during changing the diameter or if no changes to undo/redo exist."]]]]
   [:br]
   [:br]
   [heading "7. Cells"]
   [task7cells/cells-gui]
   [:br]
   [:div [:u "How to:"]]
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
       [:li "Accept ranges (e.g. \"A0:A2\"): sum, prod."]]]]]
   [:br]])

(defn mount-root []
  (d/render [home-page] (.getElementById js/document "app")))

(defn ^:export init! []
  (mount-root))
