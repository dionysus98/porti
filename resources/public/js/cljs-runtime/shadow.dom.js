goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_29154 = (function (this$){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5374__auto__.call(null,this$));
} else {
var m__5372__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5372__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_29154(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_29155 = (function (this$){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5374__auto__.call(null,this$));
} else {
var m__5372__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5372__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_29155(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__28282 = coll;
var G__28283 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__28282,G__28283) : shadow.dom.lazy_native_coll_seq.call(null,G__28282,G__28283));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5025__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__28292 = arguments.length;
switch (G__28292) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__28294 = arguments.length;
switch (G__28294) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__28298 = arguments.length;
switch (G__28298) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__28305 = arguments.length;
switch (G__28305) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__28316 = arguments.length;
switch (G__28316) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__28326 = arguments.length;
switch (G__28326) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5025__auto__ = (!((typeof document !== 'undefined')));
if(or__5025__auto__){
return or__5025__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e28334){if((e28334 instanceof Object)){
var e = e28334;
return console.log("didnt support attachEvent",el,e);
} else {
throw e28334;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5025__auto__ = (!((typeof document !== 'undefined')));
if(or__5025__auto__){
return or__5025__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__28340 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__28341 = null;
var count__28343 = (0);
var i__28344 = (0);
while(true){
if((i__28344 < count__28343)){
var el = chunk__28341.cljs$core$IIndexed$_nth$arity$2(null,i__28344);
var handler_29206__$1 = ((function (seq__28340,chunk__28341,count__28343,i__28344,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__28340,chunk__28341,count__28343,i__28344,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_29206__$1);


var G__29208 = seq__28340;
var G__29209 = chunk__28341;
var G__29210 = count__28343;
var G__29211 = (i__28344 + (1));
seq__28340 = G__29208;
chunk__28341 = G__29209;
count__28343 = G__29210;
i__28344 = G__29211;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__28340);
if(temp__5823__auto__){
var seq__28340__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28340__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__28340__$1);
var G__29213 = cljs.core.chunk_rest(seq__28340__$1);
var G__29214 = c__5548__auto__;
var G__29215 = cljs.core.count(c__5548__auto__);
var G__29216 = (0);
seq__28340 = G__29213;
chunk__28341 = G__29214;
count__28343 = G__29215;
i__28344 = G__29216;
continue;
} else {
var el = cljs.core.first(seq__28340__$1);
var handler_29217__$1 = ((function (seq__28340,chunk__28341,count__28343,i__28344,el,seq__28340__$1,temp__5823__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__28340,chunk__28341,count__28343,i__28344,el,seq__28340__$1,temp__5823__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_29217__$1);


var G__29220 = cljs.core.next(seq__28340__$1);
var G__29221 = null;
var G__29222 = (0);
var G__29223 = (0);
seq__28340 = G__29220;
chunk__28341 = G__29221;
count__28343 = G__29222;
i__28344 = G__29223;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__28359 = arguments.length;
switch (G__28359) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__28369 = cljs.core.seq(events);
var chunk__28370 = null;
var count__28371 = (0);
var i__28372 = (0);
while(true){
if((i__28372 < count__28371)){
var vec__28380 = chunk__28370.cljs$core$IIndexed$_nth$arity$2(null,i__28372);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28380,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28380,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__29227 = seq__28369;
var G__29228 = chunk__28370;
var G__29229 = count__28371;
var G__29230 = (i__28372 + (1));
seq__28369 = G__29227;
chunk__28370 = G__29228;
count__28371 = G__29229;
i__28372 = G__29230;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__28369);
if(temp__5823__auto__){
var seq__28369__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28369__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__28369__$1);
var G__29231 = cljs.core.chunk_rest(seq__28369__$1);
var G__29232 = c__5548__auto__;
var G__29233 = cljs.core.count(c__5548__auto__);
var G__29234 = (0);
seq__28369 = G__29231;
chunk__28370 = G__29232;
count__28371 = G__29233;
i__28372 = G__29234;
continue;
} else {
var vec__28383 = cljs.core.first(seq__28369__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28383,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28383,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__29235 = cljs.core.next(seq__28369__$1);
var G__29236 = null;
var G__29237 = (0);
var G__29238 = (0);
seq__28369 = G__29235;
chunk__28370 = G__29236;
count__28371 = G__29237;
i__28372 = G__29238;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__28386 = cljs.core.seq(styles);
var chunk__28387 = null;
var count__28388 = (0);
var i__28389 = (0);
while(true){
if((i__28389 < count__28388)){
var vec__28408 = chunk__28387.cljs$core$IIndexed$_nth$arity$2(null,i__28389);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28408,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28408,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__29242 = seq__28386;
var G__29243 = chunk__28387;
var G__29244 = count__28388;
var G__29245 = (i__28389 + (1));
seq__28386 = G__29242;
chunk__28387 = G__29243;
count__28388 = G__29244;
i__28389 = G__29245;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__28386);
if(temp__5823__auto__){
var seq__28386__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28386__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__28386__$1);
var G__29247 = cljs.core.chunk_rest(seq__28386__$1);
var G__29248 = c__5548__auto__;
var G__29249 = cljs.core.count(c__5548__auto__);
var G__29250 = (0);
seq__28386 = G__29247;
chunk__28387 = G__29248;
count__28388 = G__29249;
i__28389 = G__29250;
continue;
} else {
var vec__28411 = cljs.core.first(seq__28386__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28411,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28411,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__29253 = cljs.core.next(seq__28386__$1);
var G__29254 = null;
var G__29255 = (0);
var G__29256 = (0);
seq__28386 = G__29253;
chunk__28387 = G__29254;
count__28388 = G__29255;
i__28389 = G__29256;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__28425_29258 = key;
var G__28425_29259__$1 = (((G__28425_29258 instanceof cljs.core.Keyword))?G__28425_29258.fqn:null);
switch (G__28425_29259__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_29276 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5025__auto__ = goog.string.startsWith(ks_29276,"data-");
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return goog.string.startsWith(ks_29276,"aria-");
}
})())){
el.setAttribute(ks_29276,value);
} else {
(el[ks_29276] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__28451){
var map__28452 = p__28451;
var map__28452__$1 = cljs.core.__destructure_map(map__28452);
var props = map__28452__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28452__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__28453 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28453,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28453,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28453,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__28460 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__28460,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__28460;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__28462 = arguments.length;
switch (G__28462) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5823__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5823__auto__)){
var n = temp__5823__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5823__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5823__auto__)){
var n = temp__5823__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__28475){
var vec__28476 = p__28475;
var seq__28477 = cljs.core.seq(vec__28476);
var first__28478 = cljs.core.first(seq__28477);
var seq__28477__$1 = cljs.core.next(seq__28477);
var nn = first__28478;
var first__28478__$1 = cljs.core.first(seq__28477__$1);
var seq__28477__$2 = cljs.core.next(seq__28477__$1);
var np = first__28478__$1;
var nc = seq__28477__$2;
var node = vec__28476;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__28480 = nn;
var G__28481 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__28480,G__28481) : create_fn.call(null,G__28480,G__28481));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__28482 = nn;
var G__28483 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__28482,G__28483) : create_fn.call(null,G__28482,G__28483));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__28484 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28484,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28484,(1),null);
var seq__28490_29304 = cljs.core.seq(node_children);
var chunk__28491_29305 = null;
var count__28492_29306 = (0);
var i__28493_29307 = (0);
while(true){
if((i__28493_29307 < count__28492_29306)){
var child_struct_29309 = chunk__28491_29305.cljs$core$IIndexed$_nth$arity$2(null,i__28493_29307);
var children_29310 = shadow.dom.dom_node(child_struct_29309);
if(cljs.core.seq_QMARK_(children_29310)){
var seq__28508_29311 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_29310));
var chunk__28510_29312 = null;
var count__28511_29313 = (0);
var i__28512_29314 = (0);
while(true){
if((i__28512_29314 < count__28511_29313)){
var child_29325 = chunk__28510_29312.cljs$core$IIndexed$_nth$arity$2(null,i__28512_29314);
if(cljs.core.truth_(child_29325)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_29325);


var G__29326 = seq__28508_29311;
var G__29327 = chunk__28510_29312;
var G__29328 = count__28511_29313;
var G__29329 = (i__28512_29314 + (1));
seq__28508_29311 = G__29326;
chunk__28510_29312 = G__29327;
count__28511_29313 = G__29328;
i__28512_29314 = G__29329;
continue;
} else {
var G__29330 = seq__28508_29311;
var G__29331 = chunk__28510_29312;
var G__29332 = count__28511_29313;
var G__29333 = (i__28512_29314 + (1));
seq__28508_29311 = G__29330;
chunk__28510_29312 = G__29331;
count__28511_29313 = G__29332;
i__28512_29314 = G__29333;
continue;
}
} else {
var temp__5823__auto___29334 = cljs.core.seq(seq__28508_29311);
if(temp__5823__auto___29334){
var seq__28508_29335__$1 = temp__5823__auto___29334;
if(cljs.core.chunked_seq_QMARK_(seq__28508_29335__$1)){
var c__5548__auto___29336 = cljs.core.chunk_first(seq__28508_29335__$1);
var G__29337 = cljs.core.chunk_rest(seq__28508_29335__$1);
var G__29338 = c__5548__auto___29336;
var G__29339 = cljs.core.count(c__5548__auto___29336);
var G__29340 = (0);
seq__28508_29311 = G__29337;
chunk__28510_29312 = G__29338;
count__28511_29313 = G__29339;
i__28512_29314 = G__29340;
continue;
} else {
var child_29341 = cljs.core.first(seq__28508_29335__$1);
if(cljs.core.truth_(child_29341)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_29341);


var G__29343 = cljs.core.next(seq__28508_29335__$1);
var G__29344 = null;
var G__29345 = (0);
var G__29346 = (0);
seq__28508_29311 = G__29343;
chunk__28510_29312 = G__29344;
count__28511_29313 = G__29345;
i__28512_29314 = G__29346;
continue;
} else {
var G__29348 = cljs.core.next(seq__28508_29335__$1);
var G__29349 = null;
var G__29350 = (0);
var G__29351 = (0);
seq__28508_29311 = G__29348;
chunk__28510_29312 = G__29349;
count__28511_29313 = G__29350;
i__28512_29314 = G__29351;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_29310);
}


var G__29353 = seq__28490_29304;
var G__29354 = chunk__28491_29305;
var G__29355 = count__28492_29306;
var G__29356 = (i__28493_29307 + (1));
seq__28490_29304 = G__29353;
chunk__28491_29305 = G__29354;
count__28492_29306 = G__29355;
i__28493_29307 = G__29356;
continue;
} else {
var temp__5823__auto___29357 = cljs.core.seq(seq__28490_29304);
if(temp__5823__auto___29357){
var seq__28490_29359__$1 = temp__5823__auto___29357;
if(cljs.core.chunked_seq_QMARK_(seq__28490_29359__$1)){
var c__5548__auto___29360 = cljs.core.chunk_first(seq__28490_29359__$1);
var G__29361 = cljs.core.chunk_rest(seq__28490_29359__$1);
var G__29362 = c__5548__auto___29360;
var G__29363 = cljs.core.count(c__5548__auto___29360);
var G__29364 = (0);
seq__28490_29304 = G__29361;
chunk__28491_29305 = G__29362;
count__28492_29306 = G__29363;
i__28493_29307 = G__29364;
continue;
} else {
var child_struct_29366 = cljs.core.first(seq__28490_29359__$1);
var children_29367 = shadow.dom.dom_node(child_struct_29366);
if(cljs.core.seq_QMARK_(children_29367)){
var seq__28514_29368 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_29367));
var chunk__28516_29369 = null;
var count__28517_29370 = (0);
var i__28518_29371 = (0);
while(true){
if((i__28518_29371 < count__28517_29370)){
var child_29375 = chunk__28516_29369.cljs$core$IIndexed$_nth$arity$2(null,i__28518_29371);
if(cljs.core.truth_(child_29375)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_29375);


var G__29378 = seq__28514_29368;
var G__29379 = chunk__28516_29369;
var G__29380 = count__28517_29370;
var G__29381 = (i__28518_29371 + (1));
seq__28514_29368 = G__29378;
chunk__28516_29369 = G__29379;
count__28517_29370 = G__29380;
i__28518_29371 = G__29381;
continue;
} else {
var G__29382 = seq__28514_29368;
var G__29383 = chunk__28516_29369;
var G__29384 = count__28517_29370;
var G__29385 = (i__28518_29371 + (1));
seq__28514_29368 = G__29382;
chunk__28516_29369 = G__29383;
count__28517_29370 = G__29384;
i__28518_29371 = G__29385;
continue;
}
} else {
var temp__5823__auto___29386__$1 = cljs.core.seq(seq__28514_29368);
if(temp__5823__auto___29386__$1){
var seq__28514_29389__$1 = temp__5823__auto___29386__$1;
if(cljs.core.chunked_seq_QMARK_(seq__28514_29389__$1)){
var c__5548__auto___29390 = cljs.core.chunk_first(seq__28514_29389__$1);
var G__29391 = cljs.core.chunk_rest(seq__28514_29389__$1);
var G__29392 = c__5548__auto___29390;
var G__29393 = cljs.core.count(c__5548__auto___29390);
var G__29394 = (0);
seq__28514_29368 = G__29391;
chunk__28516_29369 = G__29392;
count__28517_29370 = G__29393;
i__28518_29371 = G__29394;
continue;
} else {
var child_29395 = cljs.core.first(seq__28514_29389__$1);
if(cljs.core.truth_(child_29395)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_29395);


var G__29396 = cljs.core.next(seq__28514_29389__$1);
var G__29397 = null;
var G__29398 = (0);
var G__29399 = (0);
seq__28514_29368 = G__29396;
chunk__28516_29369 = G__29397;
count__28517_29370 = G__29398;
i__28518_29371 = G__29399;
continue;
} else {
var G__29401 = cljs.core.next(seq__28514_29389__$1);
var G__29402 = null;
var G__29403 = (0);
var G__29404 = (0);
seq__28514_29368 = G__29401;
chunk__28516_29369 = G__29402;
count__28517_29370 = G__29403;
i__28518_29371 = G__29404;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_29367);
}


var G__29409 = cljs.core.next(seq__28490_29359__$1);
var G__29410 = null;
var G__29411 = (0);
var G__29412 = (0);
seq__28490_29304 = G__29409;
chunk__28491_29305 = G__29410;
count__28492_29306 = G__29411;
i__28493_29307 = G__29412;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__28533 = cljs.core.seq(node);
var chunk__28534 = null;
var count__28535 = (0);
var i__28536 = (0);
while(true){
if((i__28536 < count__28535)){
var n = chunk__28534.cljs$core$IIndexed$_nth$arity$2(null,i__28536);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__29428 = seq__28533;
var G__29429 = chunk__28534;
var G__29430 = count__28535;
var G__29431 = (i__28536 + (1));
seq__28533 = G__29428;
chunk__28534 = G__29429;
count__28535 = G__29430;
i__28536 = G__29431;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__28533);
if(temp__5823__auto__){
var seq__28533__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28533__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__28533__$1);
var G__29434 = cljs.core.chunk_rest(seq__28533__$1);
var G__29435 = c__5548__auto__;
var G__29436 = cljs.core.count(c__5548__auto__);
var G__29437 = (0);
seq__28533 = G__29434;
chunk__28534 = G__29435;
count__28535 = G__29436;
i__28536 = G__29437;
continue;
} else {
var n = cljs.core.first(seq__28533__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__29440 = cljs.core.next(seq__28533__$1);
var G__29441 = null;
var G__29442 = (0);
var G__29443 = (0);
seq__28533 = G__29440;
chunk__28534 = G__29441;
count__28535 = G__29442;
i__28536 = G__29443;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__28540 = arguments.length;
switch (G__28540) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__28554 = arguments.length;
switch (G__28554) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__28557 = arguments.length;
switch (G__28557) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5025__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5755__auto__ = [];
var len__5749__auto___29461 = arguments.length;
var i__5750__auto___29462 = (0);
while(true){
if((i__5750__auto___29462 < len__5749__auto___29461)){
args__5755__auto__.push((arguments[i__5750__auto___29462]));

var G__29464 = (i__5750__auto___29462 + (1));
i__5750__auto___29462 = G__29464;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__28566_29466 = cljs.core.seq(nodes);
var chunk__28567_29467 = null;
var count__28568_29468 = (0);
var i__28569_29469 = (0);
while(true){
if((i__28569_29469 < count__28568_29468)){
var node_29471 = chunk__28567_29467.cljs$core$IIndexed$_nth$arity$2(null,i__28569_29469);
fragment.appendChild(shadow.dom._to_dom(node_29471));


var G__29473 = seq__28566_29466;
var G__29474 = chunk__28567_29467;
var G__29475 = count__28568_29468;
var G__29476 = (i__28569_29469 + (1));
seq__28566_29466 = G__29473;
chunk__28567_29467 = G__29474;
count__28568_29468 = G__29475;
i__28569_29469 = G__29476;
continue;
} else {
var temp__5823__auto___29477 = cljs.core.seq(seq__28566_29466);
if(temp__5823__auto___29477){
var seq__28566_29478__$1 = temp__5823__auto___29477;
if(cljs.core.chunked_seq_QMARK_(seq__28566_29478__$1)){
var c__5548__auto___29479 = cljs.core.chunk_first(seq__28566_29478__$1);
var G__29480 = cljs.core.chunk_rest(seq__28566_29478__$1);
var G__29481 = c__5548__auto___29479;
var G__29482 = cljs.core.count(c__5548__auto___29479);
var G__29483 = (0);
seq__28566_29466 = G__29480;
chunk__28567_29467 = G__29481;
count__28568_29468 = G__29482;
i__28569_29469 = G__29483;
continue;
} else {
var node_29484 = cljs.core.first(seq__28566_29478__$1);
fragment.appendChild(shadow.dom._to_dom(node_29484));


var G__29486 = cljs.core.next(seq__28566_29478__$1);
var G__29487 = null;
var G__29488 = (0);
var G__29489 = (0);
seq__28566_29466 = G__29486;
chunk__28567_29467 = G__29487;
count__28568_29468 = G__29488;
i__28569_29469 = G__29489;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq28565){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28565));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__28615_29496 = cljs.core.seq(scripts);
var chunk__28616_29497 = null;
var count__28617_29498 = (0);
var i__28618_29499 = (0);
while(true){
if((i__28618_29499 < count__28617_29498)){
var vec__28625_29503 = chunk__28616_29497.cljs$core$IIndexed$_nth$arity$2(null,i__28618_29499);
var script_tag_29504 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28625_29503,(0),null);
var script_body_29505 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28625_29503,(1),null);
eval(script_body_29505);


var G__29506 = seq__28615_29496;
var G__29507 = chunk__28616_29497;
var G__29508 = count__28617_29498;
var G__29509 = (i__28618_29499 + (1));
seq__28615_29496 = G__29506;
chunk__28616_29497 = G__29507;
count__28617_29498 = G__29508;
i__28618_29499 = G__29509;
continue;
} else {
var temp__5823__auto___29510 = cljs.core.seq(seq__28615_29496);
if(temp__5823__auto___29510){
var seq__28615_29511__$1 = temp__5823__auto___29510;
if(cljs.core.chunked_seq_QMARK_(seq__28615_29511__$1)){
var c__5548__auto___29512 = cljs.core.chunk_first(seq__28615_29511__$1);
var G__29513 = cljs.core.chunk_rest(seq__28615_29511__$1);
var G__29514 = c__5548__auto___29512;
var G__29515 = cljs.core.count(c__5548__auto___29512);
var G__29516 = (0);
seq__28615_29496 = G__29513;
chunk__28616_29497 = G__29514;
count__28617_29498 = G__29515;
i__28618_29499 = G__29516;
continue;
} else {
var vec__28628_29517 = cljs.core.first(seq__28615_29511__$1);
var script_tag_29518 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28628_29517,(0),null);
var script_body_29519 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28628_29517,(1),null);
eval(script_body_29519);


var G__29521 = cljs.core.next(seq__28615_29511__$1);
var G__29522 = null;
var G__29523 = (0);
var G__29524 = (0);
seq__28615_29496 = G__29521;
chunk__28616_29497 = G__29522;
count__28617_29498 = G__29523;
i__28618_29499 = G__29524;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__28631){
var vec__28632 = p__28631;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28632,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28632,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__28640 = arguments.length;
switch (G__28640) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__28647 = cljs.core.seq(style_keys);
var chunk__28648 = null;
var count__28649 = (0);
var i__28650 = (0);
while(true){
if((i__28650 < count__28649)){
var it = chunk__28648.cljs$core$IIndexed$_nth$arity$2(null,i__28650);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__29535 = seq__28647;
var G__29536 = chunk__28648;
var G__29537 = count__28649;
var G__29538 = (i__28650 + (1));
seq__28647 = G__29535;
chunk__28648 = G__29536;
count__28649 = G__29537;
i__28650 = G__29538;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__28647);
if(temp__5823__auto__){
var seq__28647__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28647__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__28647__$1);
var G__29540 = cljs.core.chunk_rest(seq__28647__$1);
var G__29541 = c__5548__auto__;
var G__29542 = cljs.core.count(c__5548__auto__);
var G__29543 = (0);
seq__28647 = G__29540;
chunk__28648 = G__29541;
count__28649 = G__29542;
i__28650 = G__29543;
continue;
} else {
var it = cljs.core.first(seq__28647__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__29544 = cljs.core.next(seq__28647__$1);
var G__29545 = null;
var G__29546 = (0);
var G__29547 = (0);
seq__28647 = G__29544;
chunk__28648 = G__29545;
count__28649 = G__29546;
i__28650 = G__29547;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5323__auto__,k__5324__auto__){
var self__ = this;
var this__5323__auto____$1 = this;
return this__5323__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5324__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k28657,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__28664 = k28657;
var G__28664__$1 = (((G__28664 instanceof cljs.core.Keyword))?G__28664.fqn:null);
switch (G__28664__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k28657,else__5326__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__28670){
var vec__28671 = p__28670;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28671,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28671,(1),null);
return (f__5344__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5344__auto__.cljs$core$IFn$_invoke$arity$3(ret__5346__auto__,k__5347__auto__,v__5348__auto__) : f__5344__auto__.call(null,ret__5346__auto__,k__5347__auto__,v__5348__auto__));
}),init__5345__auto__,this__5343__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5338__auto__,writer__5339__auto__,opts__5340__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var pr_pair__5341__auto__ = (function (keyval__5342__auto__){
return cljs.core.pr_sequential_writer(writer__5339__auto__,cljs.core.pr_writer,""," ","",opts__5340__auto__,keyval__5342__auto__);
});
return cljs.core.pr_sequential_writer(writer__5339__auto__,pr_pair__5341__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5340__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28656){
var self__ = this;
var G__28656__$1 = this;
return (new cljs.core.RecordIter((0),G__28656__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5321__auto__){
var self__ = this;
var this__5321__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5318__auto__){
var self__ = this;
var this__5318__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5327__auto__){
var self__ = this;
var this__5327__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5319__auto__){
var self__ = this;
var this__5319__auto____$1 = this;
var h__5134__auto__ = self__.__hash;
if((!((h__5134__auto__ == null)))){
return h__5134__auto__;
} else {
var h__5134__auto____$1 = (function (coll__5320__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5320__auto__));
})(this__5319__auto____$1);
(self__.__hash = h__5134__auto____$1);

return h__5134__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this28658,other28659){
var self__ = this;
var this28658__$1 = this;
return (((!((other28659 == null)))) && ((((this28658__$1.constructor === other28659.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28658__$1.x,other28659.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28658__$1.y,other28659.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28658__$1.__extmap,other28659.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5333__auto__,k__5334__auto__){
var self__ = this;
var this__5333__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5334__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5333__auto____$1),self__.__meta),k__5334__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5334__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k28657){
var self__ = this;
var this__5330__auto____$1 = this;
var G__28692 = k28657;
var G__28692__$1 = (((G__28692 instanceof cljs.core.Keyword))?G__28692.fqn:null);
switch (G__28692__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k28657);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__28656){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__28694 = cljs.core.keyword_identical_QMARK_;
var expr__28695 = k__5332__auto__;
if(cljs.core.truth_((pred__28694.cljs$core$IFn$_invoke$arity$2 ? pred__28694.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__28695) : pred__28694.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__28695)))){
return (new shadow.dom.Coordinate(G__28656,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28694.cljs$core$IFn$_invoke$arity$2 ? pred__28694.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__28695) : pred__28694.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__28695)))){
return (new shadow.dom.Coordinate(self__.x,G__28656,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__28656),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__28656){
var self__ = this;
var this__5322__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__28656,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5328__auto__,entry__5329__auto__){
var self__ = this;
var this__5328__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5329__auto__)){
return this__5328__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5329__auto__,(0)),cljs.core._nth(entry__5329__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5328__auto____$1,entry__5329__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5369__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5369__auto__,writer__5370__auto__){
return cljs.core._write(writer__5370__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__28660){
var extmap__5365__auto__ = (function (){var G__28704 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__28660,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__28660)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__28704);
} else {
return G__28704;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__28660),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__28660),null,cljs.core.not_empty(extmap__5365__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5323__auto__,k__5324__auto__){
var self__ = this;
var this__5323__auto____$1 = this;
return this__5323__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5324__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k28711,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__28723 = k28711;
var G__28723__$1 = (((G__28723 instanceof cljs.core.Keyword))?G__28723.fqn:null);
switch (G__28723__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k28711,else__5326__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__28728){
var vec__28730 = p__28728;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28730,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28730,(1),null);
return (f__5344__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5344__auto__.cljs$core$IFn$_invoke$arity$3(ret__5346__auto__,k__5347__auto__,v__5348__auto__) : f__5344__auto__.call(null,ret__5346__auto__,k__5347__auto__,v__5348__auto__));
}),init__5345__auto__,this__5343__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5338__auto__,writer__5339__auto__,opts__5340__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var pr_pair__5341__auto__ = (function (keyval__5342__auto__){
return cljs.core.pr_sequential_writer(writer__5339__auto__,cljs.core.pr_writer,""," ","",opts__5340__auto__,keyval__5342__auto__);
});
return cljs.core.pr_sequential_writer(writer__5339__auto__,pr_pair__5341__auto__,"#shadow.dom.Size{",", ","}",opts__5340__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28710){
var self__ = this;
var G__28710__$1 = this;
return (new cljs.core.RecordIter((0),G__28710__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5321__auto__){
var self__ = this;
var this__5321__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5318__auto__){
var self__ = this;
var this__5318__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5327__auto__){
var self__ = this;
var this__5327__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5319__auto__){
var self__ = this;
var this__5319__auto____$1 = this;
var h__5134__auto__ = self__.__hash;
if((!((h__5134__auto__ == null)))){
return h__5134__auto__;
} else {
var h__5134__auto____$1 = (function (coll__5320__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5320__auto__));
})(this__5319__auto____$1);
(self__.__hash = h__5134__auto____$1);

return h__5134__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this28712,other28713){
var self__ = this;
var this28712__$1 = this;
return (((!((other28713 == null)))) && ((((this28712__$1.constructor === other28713.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28712__$1.w,other28713.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28712__$1.h,other28713.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28712__$1.__extmap,other28713.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5333__auto__,k__5334__auto__){
var self__ = this;
var this__5333__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5334__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5333__auto____$1),self__.__meta),k__5334__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5334__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k28711){
var self__ = this;
var this__5330__auto____$1 = this;
var G__28760 = k28711;
var G__28760__$1 = (((G__28760 instanceof cljs.core.Keyword))?G__28760.fqn:null);
switch (G__28760__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k28711);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__28710){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__28766 = cljs.core.keyword_identical_QMARK_;
var expr__28767 = k__5332__auto__;
if(cljs.core.truth_((pred__28766.cljs$core$IFn$_invoke$arity$2 ? pred__28766.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__28767) : pred__28766.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__28767)))){
return (new shadow.dom.Size(G__28710,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28766.cljs$core$IFn$_invoke$arity$2 ? pred__28766.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__28767) : pred__28766.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__28767)))){
return (new shadow.dom.Size(self__.w,G__28710,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__28710),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__28710){
var self__ = this;
var this__5322__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__28710,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5328__auto__,entry__5329__auto__){
var self__ = this;
var this__5328__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5329__auto__)){
return this__5328__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5329__auto__,(0)),cljs.core._nth(entry__5329__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5328__auto____$1,entry__5329__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5369__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5369__auto__,writer__5370__auto__){
return cljs.core._write(writer__5370__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__28721){
var extmap__5365__auto__ = (function (){var G__28788 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__28721,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__28721)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__28788);
} else {
return G__28788;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__28721),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__28721),null,cljs.core.not_empty(extmap__5365__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5613__auto__ = opts;
var l__5614__auto__ = a__5613__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5614__auto__)){
var G__29649 = (i + (1));
var G__29650 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__29649;
ret = G__29650;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__28866){
var vec__28867 = p__28866;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28867,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28867,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__28872 = arguments.length;
switch (G__28872) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5821__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5821__auto__)){
var child = temp__5821__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__29660 = ps;
var G__29661 = (i + (1));
el__$1 = G__29660;
i = G__29661;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__28924 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28924,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28924,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28924,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__28928_29667 = cljs.core.seq(props);
var chunk__28929_29668 = null;
var count__28930_29669 = (0);
var i__28931_29670 = (0);
while(true){
if((i__28931_29670 < count__28930_29669)){
var vec__28953_29672 = chunk__28929_29668.cljs$core$IIndexed$_nth$arity$2(null,i__28931_29670);
var k_29673 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28953_29672,(0),null);
var v_29674 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28953_29672,(1),null);
el.setAttributeNS((function (){var temp__5823__auto__ = cljs.core.namespace(k_29673);
if(cljs.core.truth_(temp__5823__auto__)){
var ns = temp__5823__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_29673),v_29674);


var G__29675 = seq__28928_29667;
var G__29676 = chunk__28929_29668;
var G__29677 = count__28930_29669;
var G__29678 = (i__28931_29670 + (1));
seq__28928_29667 = G__29675;
chunk__28929_29668 = G__29676;
count__28930_29669 = G__29677;
i__28931_29670 = G__29678;
continue;
} else {
var temp__5823__auto___29679 = cljs.core.seq(seq__28928_29667);
if(temp__5823__auto___29679){
var seq__28928_29680__$1 = temp__5823__auto___29679;
if(cljs.core.chunked_seq_QMARK_(seq__28928_29680__$1)){
var c__5548__auto___29681 = cljs.core.chunk_first(seq__28928_29680__$1);
var G__29684 = cljs.core.chunk_rest(seq__28928_29680__$1);
var G__29685 = c__5548__auto___29681;
var G__29686 = cljs.core.count(c__5548__auto___29681);
var G__29687 = (0);
seq__28928_29667 = G__29684;
chunk__28929_29668 = G__29685;
count__28930_29669 = G__29686;
i__28931_29670 = G__29687;
continue;
} else {
var vec__28960_29688 = cljs.core.first(seq__28928_29680__$1);
var k_29689 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28960_29688,(0),null);
var v_29690 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28960_29688,(1),null);
el.setAttributeNS((function (){var temp__5823__auto____$1 = cljs.core.namespace(k_29689);
if(cljs.core.truth_(temp__5823__auto____$1)){
var ns = temp__5823__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_29689),v_29690);


var G__29691 = cljs.core.next(seq__28928_29680__$1);
var G__29692 = null;
var G__29693 = (0);
var G__29694 = (0);
seq__28928_29667 = G__29691;
chunk__28929_29668 = G__29692;
count__28930_29669 = G__29693;
i__28931_29670 = G__29694;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__28969 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28969,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28969,(1),null);
var seq__28974_29698 = cljs.core.seq(node_children);
var chunk__28976_29699 = null;
var count__28977_29700 = (0);
var i__28978_29701 = (0);
while(true){
if((i__28978_29701 < count__28977_29700)){
var child_struct_29706 = chunk__28976_29699.cljs$core$IIndexed$_nth$arity$2(null,i__28978_29701);
if((!((child_struct_29706 == null)))){
if(typeof child_struct_29706 === 'string'){
var text_29707 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_29707),child_struct_29706].join(''));
} else {
var children_29710 = shadow.dom.svg_node(child_struct_29706);
if(cljs.core.seq_QMARK_(children_29710)){
var seq__29067_29711 = cljs.core.seq(children_29710);
var chunk__29069_29712 = null;
var count__29070_29713 = (0);
var i__29071_29714 = (0);
while(true){
if((i__29071_29714 < count__29070_29713)){
var child_29715 = chunk__29069_29712.cljs$core$IIndexed$_nth$arity$2(null,i__29071_29714);
if(cljs.core.truth_(child_29715)){
node.appendChild(child_29715);


var G__29716 = seq__29067_29711;
var G__29717 = chunk__29069_29712;
var G__29718 = count__29070_29713;
var G__29719 = (i__29071_29714 + (1));
seq__29067_29711 = G__29716;
chunk__29069_29712 = G__29717;
count__29070_29713 = G__29718;
i__29071_29714 = G__29719;
continue;
} else {
var G__29720 = seq__29067_29711;
var G__29721 = chunk__29069_29712;
var G__29722 = count__29070_29713;
var G__29723 = (i__29071_29714 + (1));
seq__29067_29711 = G__29720;
chunk__29069_29712 = G__29721;
count__29070_29713 = G__29722;
i__29071_29714 = G__29723;
continue;
}
} else {
var temp__5823__auto___29725 = cljs.core.seq(seq__29067_29711);
if(temp__5823__auto___29725){
var seq__29067_29726__$1 = temp__5823__auto___29725;
if(cljs.core.chunked_seq_QMARK_(seq__29067_29726__$1)){
var c__5548__auto___29728 = cljs.core.chunk_first(seq__29067_29726__$1);
var G__29729 = cljs.core.chunk_rest(seq__29067_29726__$1);
var G__29730 = c__5548__auto___29728;
var G__29731 = cljs.core.count(c__5548__auto___29728);
var G__29732 = (0);
seq__29067_29711 = G__29729;
chunk__29069_29712 = G__29730;
count__29070_29713 = G__29731;
i__29071_29714 = G__29732;
continue;
} else {
var child_29734 = cljs.core.first(seq__29067_29726__$1);
if(cljs.core.truth_(child_29734)){
node.appendChild(child_29734);


var G__29736 = cljs.core.next(seq__29067_29726__$1);
var G__29737 = null;
var G__29738 = (0);
var G__29739 = (0);
seq__29067_29711 = G__29736;
chunk__29069_29712 = G__29737;
count__29070_29713 = G__29738;
i__29071_29714 = G__29739;
continue;
} else {
var G__29740 = cljs.core.next(seq__29067_29726__$1);
var G__29741 = null;
var G__29742 = (0);
var G__29743 = (0);
seq__29067_29711 = G__29740;
chunk__29069_29712 = G__29741;
count__29070_29713 = G__29742;
i__29071_29714 = G__29743;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_29710);
}
}


var G__29745 = seq__28974_29698;
var G__29746 = chunk__28976_29699;
var G__29747 = count__28977_29700;
var G__29748 = (i__28978_29701 + (1));
seq__28974_29698 = G__29745;
chunk__28976_29699 = G__29746;
count__28977_29700 = G__29747;
i__28978_29701 = G__29748;
continue;
} else {
var G__29749 = seq__28974_29698;
var G__29750 = chunk__28976_29699;
var G__29751 = count__28977_29700;
var G__29752 = (i__28978_29701 + (1));
seq__28974_29698 = G__29749;
chunk__28976_29699 = G__29750;
count__28977_29700 = G__29751;
i__28978_29701 = G__29752;
continue;
}
} else {
var temp__5823__auto___29753 = cljs.core.seq(seq__28974_29698);
if(temp__5823__auto___29753){
var seq__28974_29754__$1 = temp__5823__auto___29753;
if(cljs.core.chunked_seq_QMARK_(seq__28974_29754__$1)){
var c__5548__auto___29755 = cljs.core.chunk_first(seq__28974_29754__$1);
var G__29756 = cljs.core.chunk_rest(seq__28974_29754__$1);
var G__29757 = c__5548__auto___29755;
var G__29758 = cljs.core.count(c__5548__auto___29755);
var G__29759 = (0);
seq__28974_29698 = G__29756;
chunk__28976_29699 = G__29757;
count__28977_29700 = G__29758;
i__28978_29701 = G__29759;
continue;
} else {
var child_struct_29761 = cljs.core.first(seq__28974_29754__$1);
if((!((child_struct_29761 == null)))){
if(typeof child_struct_29761 === 'string'){
var text_29762 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_29762),child_struct_29761].join(''));
} else {
var children_29764 = shadow.dom.svg_node(child_struct_29761);
if(cljs.core.seq_QMARK_(children_29764)){
var seq__29098_29765 = cljs.core.seq(children_29764);
var chunk__29100_29766 = null;
var count__29101_29767 = (0);
var i__29102_29768 = (0);
while(true){
if((i__29102_29768 < count__29101_29767)){
var child_29769 = chunk__29100_29766.cljs$core$IIndexed$_nth$arity$2(null,i__29102_29768);
if(cljs.core.truth_(child_29769)){
node.appendChild(child_29769);


var G__29770 = seq__29098_29765;
var G__29771 = chunk__29100_29766;
var G__29772 = count__29101_29767;
var G__29773 = (i__29102_29768 + (1));
seq__29098_29765 = G__29770;
chunk__29100_29766 = G__29771;
count__29101_29767 = G__29772;
i__29102_29768 = G__29773;
continue;
} else {
var G__29774 = seq__29098_29765;
var G__29775 = chunk__29100_29766;
var G__29776 = count__29101_29767;
var G__29777 = (i__29102_29768 + (1));
seq__29098_29765 = G__29774;
chunk__29100_29766 = G__29775;
count__29101_29767 = G__29776;
i__29102_29768 = G__29777;
continue;
}
} else {
var temp__5823__auto___29778__$1 = cljs.core.seq(seq__29098_29765);
if(temp__5823__auto___29778__$1){
var seq__29098_29779__$1 = temp__5823__auto___29778__$1;
if(cljs.core.chunked_seq_QMARK_(seq__29098_29779__$1)){
var c__5548__auto___29780 = cljs.core.chunk_first(seq__29098_29779__$1);
var G__29781 = cljs.core.chunk_rest(seq__29098_29779__$1);
var G__29782 = c__5548__auto___29780;
var G__29783 = cljs.core.count(c__5548__auto___29780);
var G__29784 = (0);
seq__29098_29765 = G__29781;
chunk__29100_29766 = G__29782;
count__29101_29767 = G__29783;
i__29102_29768 = G__29784;
continue;
} else {
var child_29787 = cljs.core.first(seq__29098_29779__$1);
if(cljs.core.truth_(child_29787)){
node.appendChild(child_29787);


var G__29788 = cljs.core.next(seq__29098_29779__$1);
var G__29789 = null;
var G__29790 = (0);
var G__29791 = (0);
seq__29098_29765 = G__29788;
chunk__29100_29766 = G__29789;
count__29101_29767 = G__29790;
i__29102_29768 = G__29791;
continue;
} else {
var G__29792 = cljs.core.next(seq__29098_29779__$1);
var G__29793 = null;
var G__29794 = (0);
var G__29795 = (0);
seq__29098_29765 = G__29792;
chunk__29100_29766 = G__29793;
count__29101_29767 = G__29794;
i__29102_29768 = G__29795;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_29764);
}
}


var G__29796 = cljs.core.next(seq__28974_29754__$1);
var G__29797 = null;
var G__29798 = (0);
var G__29799 = (0);
seq__28974_29698 = G__29796;
chunk__28976_29699 = G__29797;
count__28977_29700 = G__29798;
i__28978_29701 = G__29799;
continue;
} else {
var G__29800 = cljs.core.next(seq__28974_29754__$1);
var G__29801 = null;
var G__29802 = (0);
var G__29803 = (0);
seq__28974_29698 = G__29800;
chunk__28976_29699 = G__29801;
count__28977_29700 = G__29802;
i__28978_29701 = G__29803;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5755__auto__ = [];
var len__5749__auto___29807 = arguments.length;
var i__5750__auto___29808 = (0);
while(true){
if((i__5750__auto___29808 < len__5749__auto___29807)){
args__5755__auto__.push((arguments[i__5750__auto___29808]));

var G__29810 = (i__5750__auto___29808 + (1));
i__5750__auto___29808 = G__29810;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq29119){
var G__29120 = cljs.core.first(seq29119);
var seq29119__$1 = cljs.core.next(seq29119);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29120,seq29119__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
