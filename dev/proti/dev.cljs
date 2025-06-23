(ns proti.dev
  (:require [porti.core :as p.core]
            [datascript.db :as db]))

(defonce !state (atom {:app/current-view :home}))

(defn main! []
  (p.core/init! !state)
  (println "Loaded!"))

(defn ^:dev/after-load  reload! []
  (p.core/init! !state)
  (println "ReLoaded!"))


(comment
  (swap! !state update :app/debug? not)

  @!state
  )