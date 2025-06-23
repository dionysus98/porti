(ns porti.core
  (:require
   [cljs.pprint :as pprint]
   [clojure.walk :as walk]
   [replicant.dom :as r]))

(defn >bubble [{bubble :ui.header/bubble} position]
  {:pre [(#{:left :right} position)]}
  (let [->mouseover
        (fn [mouseover?]
          [:action/assoc-in [:ui.header/bubble position :mouseover?] mouseover?])
        {:keys [mouseover?]} (get bubble position)]
    [:div
     {:replicant/on-mount [(->mouseover false)]
      :on
      {:mouseover  [(->mouseover true)]
       :mouseleave [(->mouseover false)]}
      :style
      (cond-> {:position      "fixed"
               :margin        "0"
               :padding       "0"
               :top           "-2rem"
               :background    "#fff"
               :color         "#000"
               :width         "6rem"
               :height        "6rem"
               :border-radius "50%"
               :transition    "transform 0.25s ease"
               :cursor        "pointer"}
        (= position :left) (assoc :left "-2rem")
        (= position :right) (assoc :right "-2rem")
        mouseover? (assoc :transform  "scale(1.175)"
                          :background "#dd119988"
                          :border     "1.2rem solid #fff"))}]))

(defn >header-title [_state]
  [:h4 {:style {:margin      "1rem 0 0 0"
                :padding     "0"
                :font-family "Fira Code"}}
   "<==| <(*)> |==>"])

(defn >header [state]
  [:nav
   {:style
    {:margin-bottom "3.9rem"
     :display "flex"
     :justify-content "center"
     :align-items "center"}}
   (>header-title state)
   (>bubble state :left)
   (>bubble state :right)])

(defn >summary [_state]
  [:section
   [:h1 {:style {:font-family "Dancing Script"
                 :text-align  "center"}}
    "Avinash Sridhar"]
   [:article
    [:ul
     [:li (let [github-profile "https://github.com/dionysus98"]
            [:article
             [:header "Toys"]
             [:ol
              [:li
               [:a {:href   (str github-profile "/reflector-clj")
                    :target "_blank"}
                "A basic neural net library"]
               [:p (str "A very simple neural net library written in clojure from scratch "
                        "to understand the logic behind neural networks, "
                        "machine learning and model building in general. "
                        "A example model is created at the core to demonstrate the neural net capabilities.")]]
              [:li [:a
                    {:href (str github-profile "/clox")
                     :target "_blank"}
                    "An interpreted programming language [lox]"]]
              [:li [:a
                    {:href (str github-profile "/pngme")
                     :target "_blank"}
                    "PNG hidden messages encoder/decoder"]]]])]
     [:li [:article
           [:header "Contacts"]
           [:table
            [:tr
             [:th "Email"]
             [:td "avysridhar@gmail.com"]]
            [:tr
             [:th "Github"]
             [:td "dionysus98"]]]]]]]])

(defn >app [state]
  [:div#root.container-fluid
   (>header state)
   [:main
    (>summary state)]])

(defn process-effect [!state [effect & args]]
  (when (:app/debug? @!state)
    (pprint/pprint {"Effect" {effect args}}))
  (case effect
    :effect/assoc-in
    (apply swap! !state assoc-in args)))

(defn execute-actions [!state event-data]
  (mapcat
   (fn [[action-id & action-args :as _action]]
     (when (:app/debug? @!state)
       (pprint/pprint {"Action" {action-id action-args}}))
     (case action-id
       :action/assoc-in
       [(into [:effect/assoc-in] action-args)]

       :ui.header/bubble
       (let [[event-type position] action-args]
         (case event-type
           :mouseover [[:effect/assoc-in [action-id position :mouseover?] true]]
           :mouseleave [[:effect/assoc-in [action-id position :mouseover?] false]]))
       (when (:app/debug? @!state)
         (pprint/pprint {"Unknown Action" {action-id action-args}}))))
   event-data))

(defn interpolate [event data]
  (walk/postwalk
   (fn [x]
     (case x
       :event.target/value-as-number
       (some-> event .-target .-valueAsNumber)

       :event.target/value-as-keyword
       (some-> event .-target .-value keyword)

       :event.target/value
       (some-> event .-target .-value)

       :event.target/as-map
       (some-> event .-target clj->js)

       x))
   data))

(defn dispatcher!
  [!state {:replicant/keys [dom-event]} event-data]
  (->> (interpolate dom-event event-data)
       (execute-actions !state)
       (run! #(process-effect !state %))))

(defn init! [!state]
  (->> (fn init-app! [_ _ _ new-state]
         (r/render
          js/document.body
          (>app new-state)))
       (add-watch !state ::render))
  (r/set-dispatch! (partial dispatcher! !state))
  (swap! !state assoc ::loaded-at (-> (js/Date.) .getTime)))

(comment
  (require '[replicant.string :as rstr])

  (some-> js/document
          (.querySelector ".container-fluid")
          (.insertAdjacentHTML "beforeend"
                               (replicant.string/render [:div "FKU"])))

  :rcf)