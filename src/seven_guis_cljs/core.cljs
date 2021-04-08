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

(defn home-page []
  [:div
   [:u "Counter"]
   [task1counter/counter-gui]
   [:br]
   [:br]
   [:u "Temperature Converter"]
   [task2tempconverter/temp-converter-gui]
   [:br]
   [:br]
   [:u "Flight Booker"]
   [task3flightbooker/flight-booker-gui]
   [:br]
   [:br]
   [:u "Timer"]
   [task4timer/timer-gui]
   [:br]
   [:br]
   [:u "CRUD"]
   [task5crud/crud-gui]
   [:br]
   [:br]
   [:u "Circle Drawer"]
   [task6circledrawer/circle-drawer-gui]
   [:br]
   [:br]
   [:u "Cells"]
   [task7cells/cells-gui]])

(defn mount-root []
  (d/render [home-page] (.getElementById js/document "app")))

(defn ^:export init! []
  (mount-root))
