(ns seven-guis-cljs.core
  (:require
   [reagent.core :as r]
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

(defn home-page []
  [:div
   ; putting functions in vectors
   [counter-field]
   [count-button]])

;; -------------------------
;; Initialize app

(defn mount-root []
  (d/render [home-page] (.getElementById js/document "app")))

(defn ^:export init! []
  (mount-root))
