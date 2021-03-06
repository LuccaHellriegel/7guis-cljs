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
                       [:li "Double-click or single-click + typing: edit cell-content."]
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

(defn signature [] [:h3 {:class "nav-signature"} "7GUIs by Lucca Hellriegel"])

(def active-task (r/atom "Task 1: Counter"))

(defn task-heading [text]
  [:div {:on-click #(reset! active-task text)
         :class (if (= text @active-task) "nav-item nav-item-active" "nav-item")}
   text])

(defn nav []
  [:div {:class "mobile-flex-column-start flex-row-start nav"}
   [signature]
   [:div {:class "mobile-flex-column-start flex-row-start nav-items"}
    (doall (map (fn [c] ^{:key (first c)} [task-heading (first c)]) content-vec))]])

(defn content []
  (let [v (some #(when (= (first %) @active-task) %) content-vec)]
    [:div {:class "content"}
     [(second v)]
     (when (= (count v) 3) [:div {:class "content-desc"} (nth v 2)])]))

(defn home-page []
  [:div {:class
         ; this is a hack, because overflow and align-items: center dont like each other
         (if (= "Task 7: Cells" @active-task) "cells-container" "container")}
   [nav]
   [content]])

(defn mount-root []
  (d/render [home-page] (.getElementById js/document "app")))

(defn ^:export init! []
  (mount-root))
