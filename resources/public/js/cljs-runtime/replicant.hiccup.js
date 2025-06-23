goog.provide('replicant.hiccup');
/**
 * Returns `true` if `sexp` is a vector with a keyword in the first position.
 */
replicant.hiccup.hiccup_QMARK_ = (function replicant$hiccup$hiccup_QMARK_(sexp){
return ((cljs.core.vector_QMARK_(sexp)) && ((((!(cljs.core.map_entry_QMARK_(sexp)))) && ((cljs.core.first(sexp) instanceof cljs.core.Keyword)))));
});
/**
 * Ensure that `hiccup` has an attribute map, and call `update` on it with `args`.
 * 
 *   ```clj
 *   (update-attrs [:h1 "Hello"] assoc :title "Hi")
 *   ;;=> [:h1 {:title "Hi"} "Hello"]
 * 
 *   (update-attrs [:h1 {:title "Hello"} "Hello"] dissoc :title)
 *   ;;=> [:h1 {} "Hello"]
 *   ```
 */
replicant.hiccup.update_attrs = (function replicant$hiccup$update_attrs(var_args){
var args__5755__auto__ = [];
var len__5749__auto___34747 = arguments.length;
var i__5750__auto___34748 = (0);
while(true){
if((i__5750__auto___34748 < len__5749__auto___34747)){
args__5755__auto__.push((arguments[i__5750__auto___34748]));

var G__34751 = (i__5750__auto___34748 + (1));
i__5750__auto___34748 = G__34751;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return replicant.hiccup.update_attrs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(replicant.hiccup.update_attrs.cljs$core$IFn$_invoke$arity$variadic = (function (hiccup,args){
if(cljs.core.map_QMARK_(cljs.core.second(hiccup))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.update,hiccup,(1),args);
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(hiccup),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.first(args),cljs.core.PersistentArrayMap.EMPTY,cljs.core.rest(args))], null),cljs.core.rest(hiccup));
}
}));

(replicant.hiccup.update_attrs.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(replicant.hiccup.update_attrs.cljs$lang$applyTo = (function (seq34700){
var G__34709 = cljs.core.first(seq34700);
var seq34700__$1 = cljs.core.next(seq34700);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34709,seq34700__$1);
}));

/**
 * Set attribute `attr` on the `hiccup` node to `v`. Updates the attribute map
 *   if it exists, otherwise inserts one.
 * 
 *   ```clj
 *   (set-attr [:h1 "Hello"] :title "Hi")
 *   ;;=> [:h1 {:title "Hi"} "Hello"]
 * 
 *   (set-attr [:h1 {:title "Hello"} "Hello"] :title "Hi")
 *   ;;=> [:h1 {:title "Hi"} "Hello"]
 *   ```
 */
replicant.hiccup.set_attr = (function replicant$hiccup$set_attr(hiccup,attr,v){
return replicant.hiccup.update_attrs.cljs$core$IFn$_invoke$arity$variadic(hiccup,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc,attr,v], 0));
});

//# sourceMappingURL=replicant.hiccup.js.map
