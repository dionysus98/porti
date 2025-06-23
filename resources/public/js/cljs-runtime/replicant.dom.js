goog.provide('replicant.dom');
replicant.dom.remove_listener = (function replicant$dom$remove_listener(el,event,opt){
var temp__5823__auto__ = (function (){var G__36644 = el;
var G__36644__$1 = (((G__36644 == null))?null:G__36644.replicantHandlers);
if((G__36644__$1 == null)){
return null;
} else {
return (G__36644__$1[event]);
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var old_handler = temp__5823__auto__;
return el.removeEventListener(event,old_handler,cljs.core.clj__GT_js(opt));
} else {
return null;
}
});
replicant.dom.on_next_frame = (function replicant$dom$on_next_frame(f){
return requestAnimationFrame((function (){
return requestAnimationFrame(f);
}));
});
replicant.dom._on_transition_end = (function replicant$dom$_on_transition_end(el,f){
var vec__36645 = replicant.transition.get_transition_stats(window.getComputedStyle(el).getPropertyValue("transition-duration"));
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36645,(0),null);
var dur = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36645,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,(0))){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
var complete = cljs.core.volatile_BANG_((0));
var timer = cljs.core.volatile_BANG_(null);
var started = (new Date());
var callback = (function() { 
var replicant$dom$_on_transition_end_$_listener__delegate = function (_args){
var cn = complete.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(complete.cljs$core$IDeref$_deref$arity$1(null) + (1)));
if((((n <= cn)) || ((dur < ((new Date()) - started))))){
el.removeEventListener("transitionend",replicant$dom$_on_transition_end_$_listener);

clearTimeout(cljs.core.deref(timer));

return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
return null;
}
};
var replicant$dom$_on_transition_end_$_listener = function (var_args){
var _args = null;
if (arguments.length > 0) {
var G__36662__i = 0, G__36662__a = new Array(arguments.length -  0);
while (G__36662__i < G__36662__a.length) {G__36662__a[G__36662__i] = arguments[G__36662__i + 0]; ++G__36662__i;}
  _args = new cljs.core.IndexedSeq(G__36662__a,0,null);
} 
return replicant$dom$_on_transition_end_$_listener__delegate.call(this,_args);};
replicant$dom$_on_transition_end_$_listener.cljs$lang$maxFixedArity = 0;
replicant$dom$_on_transition_end_$_listener.cljs$lang$applyTo = (function (arglist__36663){
var _args = cljs.core.seq(arglist__36663);
return replicant$dom$_on_transition_end_$_listener__delegate(_args);
});
replicant$dom$_on_transition_end_$_listener.cljs$core$IFn$_invoke$arity$variadic = replicant$dom$_on_transition_end_$_listener__delegate;
return replicant$dom$_on_transition_end_$_listener;
})()
;
el.addEventListener("transitionend",callback);

return cljs.core.vreset_BANG_(timer,setTimeout(callback,(dur + (200))));
}
});
replicant.dom.memories = (new WeakMap());

/**
* @constructor
 * @implements {replicant.protocols.IMemory}
 * @implements {cljs.core.IMeta}
 * @implements {replicant.protocols.IRender}
 * @implements {cljs.core.IWithMeta}
*/
replicant.dom.t_replicant$dom36648 = (function (meta36649){
this.meta36649 = meta36649;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(replicant.dom.t_replicant$dom36648.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36650,meta36649__$1){
var self__ = this;
var _36650__$1 = this;
return (new replicant.dom.t_replicant$dom36648(meta36649__$1));
}));

(replicant.dom.t_replicant$dom36648.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36650){
var self__ = this;
var _36650__$1 = this;
return self__.meta36649;
}));

(replicant.dom.t_replicant$dom36648.prototype.replicant$protocols$IRender$ = cljs.core.PROTOCOL_SENTINEL);

(replicant.dom.t_replicant$dom36648.prototype.replicant$protocols$IRender$remove_attribute$arity$3 = (function (this$,el,attr){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("innerHTML",attr)){
(el.innerHTML = "");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("value",attr)){
(el.value = null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("default-value",attr)){
el.removeAttribute("value");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("selected",attr)){
(el.selected = null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("default-selected",attr)){
el.removeAttribute("selected");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checked",attr)){
(el.checked = null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("default-checked",attr)){
el.removeAttribute("checked");
} else {
el.removeAttribute(attr);

}
}
}
}
}
}
}

return this$__$1;
}));

(replicant.dom.t_replicant$dom36648.prototype.replicant$protocols$IRender$remove_all_children$arity$2 = (function (this$,el){
var self__ = this;
var this$__$1 = this;
(el.textContent = "");

return this$__$1;
}));

(replicant.dom.t_replicant$dom36648.prototype.replicant$protocols$IRender$remove_child$arity$3 = (function (this$,el,child_node){
var self__ = this;
var this$__$1 = this;
el.removeChild(child_node);

return this$__$1;
}));

(replicant.dom.t_replicant$dom36648.prototype.replicant$protocols$IRender$insert_before$arity$4 = (function (this$,el,child_node,reference_node){
var self__ = this;
var this$__$1 = this;
el.insertBefore(child_node,reference_node);

return this$__$1;
}));

(replicant.dom.t_replicant$dom36648.prototype.replicant$protocols$IRender$append_child$arity$3 = (function (this$,el,child_node){
var self__ = this;
var this$__$1 = this;
el.appendChild(child_node);

return this$__$1;
}));

(replicant.dom.t_replicant$dom36648.prototype.replicant$protocols$IRender$remove_event_handler$arity$4 = (function (this$,el,event,opt){
var self__ = this;
var this$__$1 = this;
var event_36664__$1 = cljs.core.name(event);
replicant.dom.remove_listener(el,event_36664__$1,opt);

(el.replicantHandlers[event_36664__$1] = null);

return this$__$1;
}));

(replicant.dom.t_replicant$dom36648.prototype.replicant$protocols$IRender$remove_class$arity$3 = (function (this$,el,cn){
var self__ = this;
var this$__$1 = this;
el.classList.remove(cn);

return this$__$1;
}));

(replicant.dom.t_replicant$dom36648.prototype.replicant$protocols$IRender$set_event_handler$arity$5 = (function (this$,el,event,handler,opt){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(el.replicantHandlers)){
} else {
(el.replicantHandlers = ({}));
}

var event_36665__$1 = cljs.core.name(event);
replicant.dom.remove_listener(el,event_36665__$1,opt);

(el.replicantHandlers[event_36665__$1] = handler);

el.addEventListener(event_36665__$1,handler,cljs.core.clj__GT_js(opt));

return this$__$1;
}));

(replicant.dom.t_replicant$dom36648.prototype.replicant$protocols$IRender$replace_child$arity$4 = (function (this$,el,insert_child,replace_child){
var self__ = this;
var this$__$1 = this;
el.replaceChild(insert_child,replace_child);

return this$__$1;
}));

(replicant.dom.t_replicant$dom36648.prototype.replicant$protocols$IRender$on_transition_end$arity$3 = (function (this$,el,f){
var self__ = this;
var this$__$1 = this;
replicant.dom._on_transition_end(el,f);

return this$__$1;
}));

(replicant.dom.t_replicant$dom36648.prototype.replicant$protocols$IRender$remove_style$arity$3 = (function (this$,el,style){
var self__ = this;
var this$__$1 = this;
el.style.removeProperty(cljs.core.name(style));

return this$__$1;
}));

(replicant.dom.t_replicant$dom36648.prototype.replicant$protocols$IRender$set_attribute$arity$5 = (function (this$,el,attr,v,opt){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("innerHTML",attr)){
(el.innerHTML = v);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("value",attr)){
(el.value = v);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("default-value",attr)){
el.setAttribute("value",v);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("selected",attr)){
(el.selected = v);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("default-selected",attr)){
el.setAttribute("selected",v);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checked",attr)){
(el.checked = v);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("default-checked",attr)){
el.setAttribute("checked",v);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(opt))){
el.setAttributeNS(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(opt),attr,v);
} else {
el.setAttribute(attr,v);

}
}
}
}
}
}
}
}

return this$__$1;
}));

(replicant.dom.t_replicant$dom36648.prototype.replicant$protocols$IRender$create_text_node$arity$2 = (function (_this,text){
var self__ = this;
var _this__$1 = this;
return document.createTextNode(text);
}));

(replicant.dom.t_replicant$dom36648.prototype.replicant$protocols$IRender$set_style$arity$4 = (function (this$,el,style,v){
var self__ = this;
var this$__$1 = this;
el.style.setProperty(cljs.core.name(style),v);

return this$__$1;
}));

(replicant.dom.t_replicant$dom36648.prototype.replicant$protocols$IRender$next_frame$arity$2 = (function (_this,f){
var self__ = this;
var _this__$1 = this;
return replicant.dom.on_next_frame(f);
}));

(replicant.dom.t_replicant$dom36648.prototype.replicant$protocols$IRender$add_class$arity$3 = (function (this$,el,cn){
var self__ = this;
var this$__$1 = this;
el.classList.add(cn);

return this$__$1;
}));

(replicant.dom.t_replicant$dom36648.prototype.replicant$protocols$IRender$get_child$arity$3 = (function (_this,el,idx){
var self__ = this;
var _this__$1 = this;
return (el.childNodes[idx]);
}));

(replicant.dom.t_replicant$dom36648.prototype.replicant$protocols$IRender$create_element$arity$3 = (function (_this,tag_name,options){
var self__ = this;
var _this__$1 = this;
var temp__5821__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(temp__5821__auto__)){
var ns = temp__5821__auto__;
return document.createElementNS(ns,tag_name);
} else {
return document.createElement(tag_name);
}
}));

(replicant.dom.t_replicant$dom36648.prototype.replicant$protocols$IMemory$ = cljs.core.PROTOCOL_SENTINEL);

(replicant.dom.t_replicant$dom36648.prototype.replicant$protocols$IMemory$remember$arity$3 = (function (_this,node,memory){
var self__ = this;
var _this__$1 = this;
return replicant.dom.memories.set(node,memory);
}));

(replicant.dom.t_replicant$dom36648.prototype.replicant$protocols$IMemory$recall$arity$2 = (function (_this,node){
var self__ = this;
var _this__$1 = this;
return replicant.dom.memories.get(node);
}));

(replicant.dom.t_replicant$dom36648.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta36649","meta36649",-1228257503,null)], null);
}));

(replicant.dom.t_replicant$dom36648.cljs$lang$type = true);

(replicant.dom.t_replicant$dom36648.cljs$lang$ctorStr = "replicant.dom/t_replicant$dom36648");

(replicant.dom.t_replicant$dom36648.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"replicant.dom/t_replicant$dom36648");
}));

/**
 * Positional factory function for replicant.dom/t_replicant$dom36648.
 */
replicant.dom.__GT_t_replicant$dom36648 = (function replicant$dom$__GT_t_replicant$dom36648(meta36649){
return (new replicant.dom.t_replicant$dom36648(meta36649));
});


replicant.dom.create_renderer = (function replicant$dom$create_renderer(){
return (new replicant.dom.t_replicant$dom36648(cljs.core.PersistentArrayMap.EMPTY));
});
if((typeof replicant !== 'undefined') && (typeof replicant.dom !== 'undefined') && (typeof replicant.dom.state !== 'undefined')){
} else {
replicant.dom.state = cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.EMPTY);
}
/**
 * Render `hiccup` in DOM element `el`. Replaces any pre-existing content not
 *   created by this function. Subsequent calls with the same `el` will update the
 *   rendered DOM by comparing `hiccup` to the previous `hiccup`. `hiccup` can be
 *   either a single hiccup node, or a list of multiple nodes.
 */
replicant.dom.render = (function replicant$dom$render(var_args){
var args__5755__auto__ = [];
var len__5749__auto___36666 = arguments.length;
var i__5750__auto___36667 = (0);
while(true){
if((i__5750__auto___36667 < len__5749__auto___36666)){
args__5755__auto__.push((arguments[i__5750__auto___36667]));

var G__36668 = (i__5750__auto___36667 + (1));
i__5750__auto___36667 = G__36668;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((2) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((2)),(0),null)):null);
return replicant.dom.render.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5756__auto__);
});
goog.exportSymbol('replicant.dom.render', replicant.dom.render);

(replicant.dom.render.cljs$core$IFn$_invoke$arity$variadic = (function (el,hiccup,p__36654){
var vec__36655 = p__36654;
var map__36658 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36655,(0),null);
var map__36658__$1 = cljs.core.__destructure_map(map__36658);
var aliases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36658__$1,new cljs.core.Keyword(null,"aliases","aliases",1346874714));
var alias_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36658__$1,new cljs.core.Keyword(null,"alias-data","alias-data",1743863930));
var rendering_QMARK__36669 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(replicant.dom.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [el,new cljs.core.Keyword(null,"rendering?","rendering?",-1124117844)], null));
if(cljs.core.contains_QMARK_(cljs.core.deref(replicant.dom.state),el)){
} else {
(el.innerHTML = "");

replicant.dom.state.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(replicant.dom.state.cljs$core$IDeref$_deref$arity$1(null),el,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"renderer","renderer",336841071),replicant.dom.create_renderer(),new cljs.core.Keyword(null,"unmounts","unmounts",173366521),cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY),new cljs.core.Keyword(null,"rendering?","rendering?",-1124117844),true], null)));
}

if(cljs.core.truth_(rendering_QMARK__36669)){
if((!(false))){
var fn__34883__auto___36670 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__34884__auto___36671 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__34885__auto___36672 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__36659 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5025__auto__ = null;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),"Triggered a render while rendering",new cljs.core.Keyword(null,"message","message",-406056002),["replicant.dom/render was called while working on a previous render. ","This call will be throttled.\n\nNested renders can occur when","life-cycle hooks trigger renders, e.g. by storing some information from","the DOM (size of elements, etc) in the state that triggers rendering.","Doing so isn't catagorically wrong, but should be used with care.","Nested renders can cause performance issues, or, in the worst case - ","unresponsive UIs."].join('')], null);
var G__36659__$1 = (cljs.core.truth_(fn__34883__auto___36670)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36659,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__34883__auto___36670):G__36659);
var G__36659__$2 = (cljs.core.truth_(alias__34884__auto___36671)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36659__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__34884__auto___36671):G__36659__$1);
if(cljs.core.truth_(fd__34885__auto___36672)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36659__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__34885__auto___36672);
} else {
return G__36659__$2;
}
})());
} else {
}

replicant.dom.state.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.assoc_in(replicant.dom.state.cljs$core$IDeref$_deref$arity$1(null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [el,new cljs.core.Keyword(null,"queued","queued",1701634607)], null),hiccup));
} else {
replicant.dom.state.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.assoc_in(replicant.dom.state.cljs$core$IDeref$_deref$arity$1(null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [el,new cljs.core.Keyword(null,"rendering?","rendering?",-1124117844)], null),true));

var map__36660_36673 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(replicant.dom.state),el);
var map__36660_36674__$1 = cljs.core.__destructure_map(map__36660_36673);
var renderer_36675 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36660_36674__$1,new cljs.core.Keyword(null,"renderer","renderer",336841071));
var current_36676 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36660_36674__$1,new cljs.core.Keyword(null,"current","current",-1088038603));
var unmounts_36677 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36660_36674__$1,new cljs.core.Keyword(null,"unmounts","unmounts",173366521));
var aliases_36678__$1 = (function (){var or__5025__auto__ = aliases;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return replicant.alias.get_registered_aliases();
}
})();
var hiccup_36679__$1 = (cljs.core.truth_(alias_data)?(function (){var hiccup__34801__auto__ = hiccup;
if(cljs.core.vector_QMARK_(hiccup__34801__auto__)){
if(cljs.core.map_QMARK_(cljs.core.second(hiccup__34801__auto__))){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(hiccup__34801__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword("replicant","key","replicant/key",-670108117)], null),(function (k__34802__auto__){
if(cljs.core.truth_(k__34802__auto__)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k__34802__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [aliases_36678__$1,alias_data], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [aliases_36678__$1,alias_data], null);
}
}));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(hiccup__34801__auto__),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("replicant","key","replicant/key",-670108117),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [aliases_36678__$1,alias_data], null)], null)], null),cljs.core.rest(hiccup__34801__auto__));
}
} else {
return hiccup__34801__auto__;
}
})():(function (){var hiccup__34801__auto__ = hiccup;
if(cljs.core.vector_QMARK_(hiccup__34801__auto__)){
if(cljs.core.map_QMARK_(cljs.core.second(hiccup__34801__auto__))){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(hiccup__34801__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword("replicant","key","replicant/key",-670108117)], null),(function (k__34802__auto__){
if(cljs.core.truth_(k__34802__auto__)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k__34802__auto__,aliases_36678__$1], null);
} else {
return aliases_36678__$1;
}
}));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(hiccup__34801__auto__),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("replicant","key","replicant/key",-670108117),aliases_36678__$1], null)], null),cljs.core.rest(hiccup__34801__auto__));
}
} else {
return hiccup__34801__auto__;
}
})());
var map__36661_36680 = replicant.core.reconcile.cljs$core$IFn$_invoke$arity$variadic(renderer_36675,el,hiccup_36679__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([current_36676,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"unmounts","unmounts",173366521),unmounts_36677,new cljs.core.Keyword(null,"aliases","aliases",1346874714),aliases_36678__$1,new cljs.core.Keyword(null,"alias-data","alias-data",1743863930),alias_data], null)], 0));
var map__36661_36681__$1 = cljs.core.__destructure_map(map__36661_36680);
var vdom_36682 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36661_36681__$1,new cljs.core.Keyword(null,"vdom","vdom",953162958));
replicant.dom.state.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.update.cljs$core$IFn$_invoke$arity$4(replicant.dom.state.cljs$core$IDeref$_deref$arity$1(null),el,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current","current",-1088038603),vdom_36682,new cljs.core.Keyword(null,"rendering?","rendering?",-1124117844),false], null)));

var temp__5823__auto___36683 = new cljs.core.Keyword(null,"queued","queued",1701634607).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(replicant.dom.state),el));
if(cljs.core.truth_(temp__5823__auto___36683)){
var pending_36684 = temp__5823__auto___36683;
requestAnimationFrame((function (){
return replicant.dom.render(el,pending_36684);
}));

replicant.dom.state.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.update.cljs$core$IFn$_invoke$arity$4(replicant.dom.state.cljs$core$IDeref$_deref$arity$1(null),el,cljs.core.dissoc,new cljs.core.Keyword(null,"queued","queued",1701634607)));
} else {
}
}

return el;
}));

(replicant.dom.render.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(replicant.dom.render.cljs$lang$applyTo = (function (seq36651){
var G__36652 = cljs.core.first(seq36651);
var seq36651__$1 = cljs.core.next(seq36651);
var G__36653 = cljs.core.first(seq36651__$1);
var seq36651__$2 = cljs.core.next(seq36651__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36652,G__36653,seq36651__$2);
}));

/**
 * Unmounts elements in `el`, and clears internal state.
 */
replicant.dom.unmount = (function replicant$dom$unmount(el){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(replicant.dom.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [el,new cljs.core.Keyword(null,"rendering?","rendering?",-1124117844)], null)))){
return requestAnimationFrame((function (){
return (replicant.dom.unmount.cljs$core$IFn$_invoke$arity$1 ? replicant.dom.unmount.cljs$core$IFn$_invoke$arity$1(el) : replicant.dom.unmount.call(null,el));
}));
} else {
replicant.dom.render(el,null);

replicant.dom.state.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(replicant.dom.state.cljs$core$IDeref$_deref$arity$1(null),el));

return null;
}
});
goog.exportSymbol('replicant.dom.unmount', replicant.dom.unmount);
/**
 * Register a global dispatch function for event handlers and life-cycle hooks
 *   that are not functions. See data-driven event handlers and life-cycle hooks in
 *   the user guide for details.
 */
replicant.dom.set_dispatch_BANG_ = (function replicant$dom$set_dispatch_BANG_(f){
return (replicant.core._STAR_dispatch_STAR_ = f);
});
goog.exportSymbol('replicant.dom.set_dispatch_BANG_', replicant.dom.set_dispatch_BANG_);

//# sourceMappingURL=replicant.dom.js.map
