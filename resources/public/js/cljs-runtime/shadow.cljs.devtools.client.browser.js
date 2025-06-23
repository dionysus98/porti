goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5755__auto__ = [];
var len__5749__auto___38541 = arguments.length;
var i__5750__auto___38542 = (0);
while(true){
if((i__5750__auto___38542 < len__5749__auto___38541)){
args__5755__auto__.push((arguments[i__5750__auto___38542]));

var G__38543 = (i__5750__auto___38542 + (1));
i__5750__auto___38542 = G__38543;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq38036){
var G__38037 = cljs.core.first(seq38036);
var seq38036__$1 = cljs.core.next(seq38036);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38037,seq38036__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__38048 = cljs.core.seq(sources);
var chunk__38049 = null;
var count__38050 = (0);
var i__38051 = (0);
while(true){
if((i__38051 < count__38050)){
var map__38078 = chunk__38049.cljs$core$IIndexed$_nth$arity$2(null,i__38051);
var map__38078__$1 = cljs.core.__destructure_map(map__38078);
var src = map__38078__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38078__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38078__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38078__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38078__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e38086){var e_38544 = e38086;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_38544);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_38544.message)].join('')));
}

var G__38545 = seq__38048;
var G__38546 = chunk__38049;
var G__38547 = count__38050;
var G__38548 = (i__38051 + (1));
seq__38048 = G__38545;
chunk__38049 = G__38546;
count__38050 = G__38547;
i__38051 = G__38548;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__38048);
if(temp__5823__auto__){
var seq__38048__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38048__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__38048__$1);
var G__38549 = cljs.core.chunk_rest(seq__38048__$1);
var G__38550 = c__5548__auto__;
var G__38551 = cljs.core.count(c__5548__auto__);
var G__38552 = (0);
seq__38048 = G__38549;
chunk__38049 = G__38550;
count__38050 = G__38551;
i__38051 = G__38552;
continue;
} else {
var map__38099 = cljs.core.first(seq__38048__$1);
var map__38099__$1 = cljs.core.__destructure_map(map__38099);
var src = map__38099__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38099__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38099__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38099__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38099__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e38104){var e_38553 = e38104;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_38553);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_38553.message)].join('')));
}

var G__38554 = cljs.core.next(seq__38048__$1);
var G__38555 = null;
var G__38556 = (0);
var G__38557 = (0);
seq__38048 = G__38554;
chunk__38049 = G__38555;
count__38050 = G__38556;
i__38051 = G__38557;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (next){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (next.cljs$core$IFn$_invoke$arity$0 ? next.cljs$core$IFn$_invoke$arity$0() : next.call(null));
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__38113 = cljs.core.seq(js_requires);
var chunk__38114 = null;
var count__38115 = (0);
var i__38116 = (0);
while(true){
if((i__38116 < count__38115)){
var js_ns = chunk__38114.cljs$core$IIndexed$_nth$arity$2(null,i__38116);
var require_str_38561 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_38561);


var G__38562 = seq__38113;
var G__38563 = chunk__38114;
var G__38564 = count__38115;
var G__38565 = (i__38116 + (1));
seq__38113 = G__38562;
chunk__38114 = G__38563;
count__38115 = G__38564;
i__38116 = G__38565;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__38113);
if(temp__5823__auto__){
var seq__38113__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38113__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__38113__$1);
var G__38570 = cljs.core.chunk_rest(seq__38113__$1);
var G__38571 = c__5548__auto__;
var G__38572 = cljs.core.count(c__5548__auto__);
var G__38573 = (0);
seq__38113 = G__38570;
chunk__38114 = G__38571;
count__38115 = G__38572;
i__38116 = G__38573;
continue;
} else {
var js_ns = cljs.core.first(seq__38113__$1);
var require_str_38574 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_38574);


var G__38575 = cljs.core.next(seq__38113__$1);
var G__38576 = null;
var G__38577 = (0);
var G__38578 = (0);
seq__38113 = G__38575;
chunk__38114 = G__38576;
count__38115 = G__38577;
i__38116 = G__38578;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__38118){
var map__38119 = p__38118;
var map__38119__$1 = cljs.core.__destructure_map(map__38119);
var msg = map__38119__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38119__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38119__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5503__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38120(s__38121){
return (new cljs.core.LazySeq(null,(function (){
var s__38121__$1 = s__38121;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__38121__$1);
if(temp__5823__auto__){
var xs__6383__auto__ = temp__5823__auto__;
var map__38129 = cljs.core.first(xs__6383__auto__);
var map__38129__$1 = cljs.core.__destructure_map(map__38129);
var src = map__38129__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38129__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38129__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5499__auto__ = ((function (s__38121__$1,map__38129,map__38129__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__38119,map__38119__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38120_$_iter__38122(s__38123){
return (new cljs.core.LazySeq(null,((function (s__38121__$1,map__38129,map__38129__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__38119,map__38119__$1,msg,info,reload_info){
return (function (){
var s__38123__$1 = s__38123;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__38123__$1);
if(temp__5823__auto____$1){
var s__38123__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__38123__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__38123__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__38125 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__38124 = (0);
while(true){
if((i__38124 < size__5502__auto__)){
var warning = cljs.core._nth(c__5501__auto__,i__38124);
cljs.core.chunk_append(b__38125,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__38580 = (i__38124 + (1));
i__38124 = G__38580;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38125),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38120_$_iter__38122(cljs.core.chunk_rest(s__38123__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38125),null);
}
} else {
var warning = cljs.core.first(s__38123__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38120_$_iter__38122(cljs.core.rest(s__38123__$2)));
}
} else {
return null;
}
break;
}
});})(s__38121__$1,map__38129,map__38129__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__38119,map__38119__$1,msg,info,reload_info))
,null,null));
});})(s__38121__$1,map__38129,map__38129__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__38119,map__38119__$1,msg,info,reload_info))
;
var fs__5500__auto__ = cljs.core.seq(iterys__5499__auto__(warnings));
if(fs__5500__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5500__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38120(cljs.core.rest(s__38121__$1)));
} else {
var G__38581 = cljs.core.rest(s__38121__$1);
s__38121__$1 = G__38581;
continue;
}
} else {
var G__38582 = cljs.core.rest(s__38121__$1);
s__38121__$1 = G__38582;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__38130_38583 = cljs.core.seq(warnings);
var chunk__38131_38584 = null;
var count__38132_38585 = (0);
var i__38133_38586 = (0);
while(true){
if((i__38133_38586 < count__38132_38585)){
var map__38136_38587 = chunk__38131_38584.cljs$core$IIndexed$_nth$arity$2(null,i__38133_38586);
var map__38136_38588__$1 = cljs.core.__destructure_map(map__38136_38587);
var w_38589 = map__38136_38588__$1;
var msg_38590__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38136_38588__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_38591 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38136_38588__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_38592 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38136_38588__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_38593 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38136_38588__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_38593)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_38591),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_38592),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_38590__$1)].join(''));


var G__38594 = seq__38130_38583;
var G__38595 = chunk__38131_38584;
var G__38596 = count__38132_38585;
var G__38597 = (i__38133_38586 + (1));
seq__38130_38583 = G__38594;
chunk__38131_38584 = G__38595;
count__38132_38585 = G__38596;
i__38133_38586 = G__38597;
continue;
} else {
var temp__5823__auto___38598 = cljs.core.seq(seq__38130_38583);
if(temp__5823__auto___38598){
var seq__38130_38599__$1 = temp__5823__auto___38598;
if(cljs.core.chunked_seq_QMARK_(seq__38130_38599__$1)){
var c__5548__auto___38600 = cljs.core.chunk_first(seq__38130_38599__$1);
var G__38601 = cljs.core.chunk_rest(seq__38130_38599__$1);
var G__38602 = c__5548__auto___38600;
var G__38603 = cljs.core.count(c__5548__auto___38600);
var G__38604 = (0);
seq__38130_38583 = G__38601;
chunk__38131_38584 = G__38602;
count__38132_38585 = G__38603;
i__38133_38586 = G__38604;
continue;
} else {
var map__38137_38605 = cljs.core.first(seq__38130_38599__$1);
var map__38137_38606__$1 = cljs.core.__destructure_map(map__38137_38605);
var w_38607 = map__38137_38606__$1;
var msg_38608__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38137_38606__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_38609 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38137_38606__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_38610 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38137_38606__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_38611 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38137_38606__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_38611)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_38609),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_38610),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_38608__$1)].join(''));


var G__38612 = cljs.core.next(seq__38130_38599__$1);
var G__38613 = null;
var G__38614 = (0);
var G__38615 = (0);
seq__38130_38583 = G__38612;
chunk__38131_38584 = G__38613;
count__38132_38585 = G__38614;
i__38133_38586 = G__38615;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__38117_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__38117_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5023__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5023__auto__){
var and__5023__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5023__auto____$1){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__38139 = node_uri;
G__38139.setQuery(null);

G__38139.setPath(new$);

return G__38139;
})());
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__38140){
var map__38141 = p__38140;
var map__38141__$1 = cljs.core.__destructure_map(map__38141);
var msg = map__38141__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38141__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38141__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__38142 = cljs.core.seq(updates);
var chunk__38144 = null;
var count__38145 = (0);
var i__38146 = (0);
while(true){
if((i__38146 < count__38145)){
var path = chunk__38144.cljs$core$IIndexed$_nth$arity$2(null,i__38146);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__38325_38616 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__38329_38617 = null;
var count__38330_38618 = (0);
var i__38331_38619 = (0);
while(true){
if((i__38331_38619 < count__38330_38618)){
var node_38620 = chunk__38329_38617.cljs$core$IIndexed$_nth$arity$2(null,i__38331_38619);
if(cljs.core.not(node_38620.shadow$old)){
var path_match_38621 = shadow.cljs.devtools.client.browser.match_paths(node_38620.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38621)){
var new_link_38622 = (function (){var G__38372 = node_38620.cloneNode(true);
G__38372.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38621),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38372;
})();
(node_38620.shadow$old = true);

(new_link_38622.onload = ((function (seq__38325_38616,chunk__38329_38617,count__38330_38618,i__38331_38619,seq__38142,chunk__38144,count__38145,i__38146,new_link_38622,path_match_38621,node_38620,path,map__38141,map__38141__$1,msg,updates,reload_info){
return (function (e){
var seq__38373_38623 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__38375_38624 = null;
var count__38376_38625 = (0);
var i__38377_38626 = (0);
while(true){
if((i__38377_38626 < count__38376_38625)){
var map__38381_38627 = chunk__38375_38624.cljs$core$IIndexed$_nth$arity$2(null,i__38377_38626);
var map__38381_38628__$1 = cljs.core.__destructure_map(map__38381_38627);
var task_38629 = map__38381_38628__$1;
var fn_str_38630 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38381_38628__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38631 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38381_38628__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38632 = goog.getObjectByName(fn_str_38630,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38631)].join(''));

(fn_obj_38632.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38632.cljs$core$IFn$_invoke$arity$2(path,new_link_38622) : fn_obj_38632.call(null,path,new_link_38622));


var G__38633 = seq__38373_38623;
var G__38634 = chunk__38375_38624;
var G__38635 = count__38376_38625;
var G__38636 = (i__38377_38626 + (1));
seq__38373_38623 = G__38633;
chunk__38375_38624 = G__38634;
count__38376_38625 = G__38635;
i__38377_38626 = G__38636;
continue;
} else {
var temp__5823__auto___38637 = cljs.core.seq(seq__38373_38623);
if(temp__5823__auto___38637){
var seq__38373_38638__$1 = temp__5823__auto___38637;
if(cljs.core.chunked_seq_QMARK_(seq__38373_38638__$1)){
var c__5548__auto___38639 = cljs.core.chunk_first(seq__38373_38638__$1);
var G__38640 = cljs.core.chunk_rest(seq__38373_38638__$1);
var G__38641 = c__5548__auto___38639;
var G__38642 = cljs.core.count(c__5548__auto___38639);
var G__38643 = (0);
seq__38373_38623 = G__38640;
chunk__38375_38624 = G__38641;
count__38376_38625 = G__38642;
i__38377_38626 = G__38643;
continue;
} else {
var map__38382_38644 = cljs.core.first(seq__38373_38638__$1);
var map__38382_38645__$1 = cljs.core.__destructure_map(map__38382_38644);
var task_38646 = map__38382_38645__$1;
var fn_str_38647 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38382_38645__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38648 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38382_38645__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38650 = goog.getObjectByName(fn_str_38647,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38648)].join(''));

(fn_obj_38650.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38650.cljs$core$IFn$_invoke$arity$2(path,new_link_38622) : fn_obj_38650.call(null,path,new_link_38622));


var G__38654 = cljs.core.next(seq__38373_38638__$1);
var G__38655 = null;
var G__38656 = (0);
var G__38657 = (0);
seq__38373_38623 = G__38654;
chunk__38375_38624 = G__38655;
count__38376_38625 = G__38656;
i__38377_38626 = G__38657;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_38620);
});})(seq__38325_38616,chunk__38329_38617,count__38330_38618,i__38331_38619,seq__38142,chunk__38144,count__38145,i__38146,new_link_38622,path_match_38621,node_38620,path,map__38141,map__38141__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38621], 0));

goog.dom.insertSiblingAfter(new_link_38622,node_38620);


var G__38658 = seq__38325_38616;
var G__38659 = chunk__38329_38617;
var G__38660 = count__38330_38618;
var G__38661 = (i__38331_38619 + (1));
seq__38325_38616 = G__38658;
chunk__38329_38617 = G__38659;
count__38330_38618 = G__38660;
i__38331_38619 = G__38661;
continue;
} else {
var G__38662 = seq__38325_38616;
var G__38663 = chunk__38329_38617;
var G__38664 = count__38330_38618;
var G__38665 = (i__38331_38619 + (1));
seq__38325_38616 = G__38662;
chunk__38329_38617 = G__38663;
count__38330_38618 = G__38664;
i__38331_38619 = G__38665;
continue;
}
} else {
var G__38666 = seq__38325_38616;
var G__38667 = chunk__38329_38617;
var G__38668 = count__38330_38618;
var G__38669 = (i__38331_38619 + (1));
seq__38325_38616 = G__38666;
chunk__38329_38617 = G__38667;
count__38330_38618 = G__38668;
i__38331_38619 = G__38669;
continue;
}
} else {
var temp__5823__auto___38671 = cljs.core.seq(seq__38325_38616);
if(temp__5823__auto___38671){
var seq__38325_38672__$1 = temp__5823__auto___38671;
if(cljs.core.chunked_seq_QMARK_(seq__38325_38672__$1)){
var c__5548__auto___38673 = cljs.core.chunk_first(seq__38325_38672__$1);
var G__38674 = cljs.core.chunk_rest(seq__38325_38672__$1);
var G__38675 = c__5548__auto___38673;
var G__38676 = cljs.core.count(c__5548__auto___38673);
var G__38677 = (0);
seq__38325_38616 = G__38674;
chunk__38329_38617 = G__38675;
count__38330_38618 = G__38676;
i__38331_38619 = G__38677;
continue;
} else {
var node_38678 = cljs.core.first(seq__38325_38672__$1);
if(cljs.core.not(node_38678.shadow$old)){
var path_match_38679 = shadow.cljs.devtools.client.browser.match_paths(node_38678.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38679)){
var new_link_38680 = (function (){var G__38384 = node_38678.cloneNode(true);
G__38384.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38679),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38384;
})();
(node_38678.shadow$old = true);

(new_link_38680.onload = ((function (seq__38325_38616,chunk__38329_38617,count__38330_38618,i__38331_38619,seq__38142,chunk__38144,count__38145,i__38146,new_link_38680,path_match_38679,node_38678,seq__38325_38672__$1,temp__5823__auto___38671,path,map__38141,map__38141__$1,msg,updates,reload_info){
return (function (e){
var seq__38385_38681 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__38387_38682 = null;
var count__38388_38683 = (0);
var i__38389_38684 = (0);
while(true){
if((i__38389_38684 < count__38388_38683)){
var map__38394_38686 = chunk__38387_38682.cljs$core$IIndexed$_nth$arity$2(null,i__38389_38684);
var map__38394_38687__$1 = cljs.core.__destructure_map(map__38394_38686);
var task_38688 = map__38394_38687__$1;
var fn_str_38689 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38394_38687__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38690 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38394_38687__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38691 = goog.getObjectByName(fn_str_38689,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38690)].join(''));

(fn_obj_38691.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38691.cljs$core$IFn$_invoke$arity$2(path,new_link_38680) : fn_obj_38691.call(null,path,new_link_38680));


var G__38692 = seq__38385_38681;
var G__38693 = chunk__38387_38682;
var G__38694 = count__38388_38683;
var G__38695 = (i__38389_38684 + (1));
seq__38385_38681 = G__38692;
chunk__38387_38682 = G__38693;
count__38388_38683 = G__38694;
i__38389_38684 = G__38695;
continue;
} else {
var temp__5823__auto___38696__$1 = cljs.core.seq(seq__38385_38681);
if(temp__5823__auto___38696__$1){
var seq__38385_38697__$1 = temp__5823__auto___38696__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38385_38697__$1)){
var c__5548__auto___38698 = cljs.core.chunk_first(seq__38385_38697__$1);
var G__38699 = cljs.core.chunk_rest(seq__38385_38697__$1);
var G__38700 = c__5548__auto___38698;
var G__38701 = cljs.core.count(c__5548__auto___38698);
var G__38702 = (0);
seq__38385_38681 = G__38699;
chunk__38387_38682 = G__38700;
count__38388_38683 = G__38701;
i__38389_38684 = G__38702;
continue;
} else {
var map__38397_38703 = cljs.core.first(seq__38385_38697__$1);
var map__38397_38704__$1 = cljs.core.__destructure_map(map__38397_38703);
var task_38705 = map__38397_38704__$1;
var fn_str_38706 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38397_38704__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38707 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38397_38704__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38708 = goog.getObjectByName(fn_str_38706,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38707)].join(''));

(fn_obj_38708.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38708.cljs$core$IFn$_invoke$arity$2(path,new_link_38680) : fn_obj_38708.call(null,path,new_link_38680));


var G__38709 = cljs.core.next(seq__38385_38697__$1);
var G__38710 = null;
var G__38711 = (0);
var G__38712 = (0);
seq__38385_38681 = G__38709;
chunk__38387_38682 = G__38710;
count__38388_38683 = G__38711;
i__38389_38684 = G__38712;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_38678);
});})(seq__38325_38616,chunk__38329_38617,count__38330_38618,i__38331_38619,seq__38142,chunk__38144,count__38145,i__38146,new_link_38680,path_match_38679,node_38678,seq__38325_38672__$1,temp__5823__auto___38671,path,map__38141,map__38141__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38679], 0));

goog.dom.insertSiblingAfter(new_link_38680,node_38678);


var G__38713 = cljs.core.next(seq__38325_38672__$1);
var G__38714 = null;
var G__38715 = (0);
var G__38716 = (0);
seq__38325_38616 = G__38713;
chunk__38329_38617 = G__38714;
count__38330_38618 = G__38715;
i__38331_38619 = G__38716;
continue;
} else {
var G__38717 = cljs.core.next(seq__38325_38672__$1);
var G__38718 = null;
var G__38719 = (0);
var G__38720 = (0);
seq__38325_38616 = G__38717;
chunk__38329_38617 = G__38718;
count__38330_38618 = G__38719;
i__38331_38619 = G__38720;
continue;
}
} else {
var G__38721 = cljs.core.next(seq__38325_38672__$1);
var G__38722 = null;
var G__38723 = (0);
var G__38724 = (0);
seq__38325_38616 = G__38721;
chunk__38329_38617 = G__38722;
count__38330_38618 = G__38723;
i__38331_38619 = G__38724;
continue;
}
}
} else {
}
}
break;
}


var G__38725 = seq__38142;
var G__38726 = chunk__38144;
var G__38727 = count__38145;
var G__38728 = (i__38146 + (1));
seq__38142 = G__38725;
chunk__38144 = G__38726;
count__38145 = G__38727;
i__38146 = G__38728;
continue;
} else {
var G__38732 = seq__38142;
var G__38733 = chunk__38144;
var G__38734 = count__38145;
var G__38735 = (i__38146 + (1));
seq__38142 = G__38732;
chunk__38144 = G__38733;
count__38145 = G__38734;
i__38146 = G__38735;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__38142);
if(temp__5823__auto__){
var seq__38142__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38142__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__38142__$1);
var G__38736 = cljs.core.chunk_rest(seq__38142__$1);
var G__38737 = c__5548__auto__;
var G__38738 = cljs.core.count(c__5548__auto__);
var G__38739 = (0);
seq__38142 = G__38736;
chunk__38144 = G__38737;
count__38145 = G__38738;
i__38146 = G__38739;
continue;
} else {
var path = cljs.core.first(seq__38142__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__38399_38740 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__38403_38741 = null;
var count__38404_38742 = (0);
var i__38405_38743 = (0);
while(true){
if((i__38405_38743 < count__38404_38742)){
var node_38744 = chunk__38403_38741.cljs$core$IIndexed$_nth$arity$2(null,i__38405_38743);
if(cljs.core.not(node_38744.shadow$old)){
var path_match_38745 = shadow.cljs.devtools.client.browser.match_paths(node_38744.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38745)){
var new_link_38747 = (function (){var G__38446 = node_38744.cloneNode(true);
G__38446.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38745),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38446;
})();
(node_38744.shadow$old = true);

(new_link_38747.onload = ((function (seq__38399_38740,chunk__38403_38741,count__38404_38742,i__38405_38743,seq__38142,chunk__38144,count__38145,i__38146,new_link_38747,path_match_38745,node_38744,path,seq__38142__$1,temp__5823__auto__,map__38141,map__38141__$1,msg,updates,reload_info){
return (function (e){
var seq__38449_38748 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__38451_38749 = null;
var count__38452_38750 = (0);
var i__38453_38751 = (0);
while(true){
if((i__38453_38751 < count__38452_38750)){
var map__38458_38752 = chunk__38451_38749.cljs$core$IIndexed$_nth$arity$2(null,i__38453_38751);
var map__38458_38753__$1 = cljs.core.__destructure_map(map__38458_38752);
var task_38754 = map__38458_38753__$1;
var fn_str_38755 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38458_38753__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38756 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38458_38753__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38757 = goog.getObjectByName(fn_str_38755,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38756)].join(''));

(fn_obj_38757.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38757.cljs$core$IFn$_invoke$arity$2(path,new_link_38747) : fn_obj_38757.call(null,path,new_link_38747));


var G__38758 = seq__38449_38748;
var G__38759 = chunk__38451_38749;
var G__38760 = count__38452_38750;
var G__38761 = (i__38453_38751 + (1));
seq__38449_38748 = G__38758;
chunk__38451_38749 = G__38759;
count__38452_38750 = G__38760;
i__38453_38751 = G__38761;
continue;
} else {
var temp__5823__auto___38762__$1 = cljs.core.seq(seq__38449_38748);
if(temp__5823__auto___38762__$1){
var seq__38449_38763__$1 = temp__5823__auto___38762__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38449_38763__$1)){
var c__5548__auto___38764 = cljs.core.chunk_first(seq__38449_38763__$1);
var G__38765 = cljs.core.chunk_rest(seq__38449_38763__$1);
var G__38766 = c__5548__auto___38764;
var G__38767 = cljs.core.count(c__5548__auto___38764);
var G__38768 = (0);
seq__38449_38748 = G__38765;
chunk__38451_38749 = G__38766;
count__38452_38750 = G__38767;
i__38453_38751 = G__38768;
continue;
} else {
var map__38460_38769 = cljs.core.first(seq__38449_38763__$1);
var map__38460_38770__$1 = cljs.core.__destructure_map(map__38460_38769);
var task_38771 = map__38460_38770__$1;
var fn_str_38772 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38460_38770__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38773 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38460_38770__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38774 = goog.getObjectByName(fn_str_38772,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38773)].join(''));

(fn_obj_38774.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38774.cljs$core$IFn$_invoke$arity$2(path,new_link_38747) : fn_obj_38774.call(null,path,new_link_38747));


var G__38775 = cljs.core.next(seq__38449_38763__$1);
var G__38776 = null;
var G__38777 = (0);
var G__38778 = (0);
seq__38449_38748 = G__38775;
chunk__38451_38749 = G__38776;
count__38452_38750 = G__38777;
i__38453_38751 = G__38778;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_38744);
});})(seq__38399_38740,chunk__38403_38741,count__38404_38742,i__38405_38743,seq__38142,chunk__38144,count__38145,i__38146,new_link_38747,path_match_38745,node_38744,path,seq__38142__$1,temp__5823__auto__,map__38141,map__38141__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38745], 0));

goog.dom.insertSiblingAfter(new_link_38747,node_38744);


var G__38779 = seq__38399_38740;
var G__38780 = chunk__38403_38741;
var G__38781 = count__38404_38742;
var G__38782 = (i__38405_38743 + (1));
seq__38399_38740 = G__38779;
chunk__38403_38741 = G__38780;
count__38404_38742 = G__38781;
i__38405_38743 = G__38782;
continue;
} else {
var G__38783 = seq__38399_38740;
var G__38784 = chunk__38403_38741;
var G__38785 = count__38404_38742;
var G__38786 = (i__38405_38743 + (1));
seq__38399_38740 = G__38783;
chunk__38403_38741 = G__38784;
count__38404_38742 = G__38785;
i__38405_38743 = G__38786;
continue;
}
} else {
var G__38787 = seq__38399_38740;
var G__38788 = chunk__38403_38741;
var G__38789 = count__38404_38742;
var G__38790 = (i__38405_38743 + (1));
seq__38399_38740 = G__38787;
chunk__38403_38741 = G__38788;
count__38404_38742 = G__38789;
i__38405_38743 = G__38790;
continue;
}
} else {
var temp__5823__auto___38791__$1 = cljs.core.seq(seq__38399_38740);
if(temp__5823__auto___38791__$1){
var seq__38399_38792__$1 = temp__5823__auto___38791__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38399_38792__$1)){
var c__5548__auto___38793 = cljs.core.chunk_first(seq__38399_38792__$1);
var G__38794 = cljs.core.chunk_rest(seq__38399_38792__$1);
var G__38795 = c__5548__auto___38793;
var G__38796 = cljs.core.count(c__5548__auto___38793);
var G__38797 = (0);
seq__38399_38740 = G__38794;
chunk__38403_38741 = G__38795;
count__38404_38742 = G__38796;
i__38405_38743 = G__38797;
continue;
} else {
var node_38798 = cljs.core.first(seq__38399_38792__$1);
if(cljs.core.not(node_38798.shadow$old)){
var path_match_38799 = shadow.cljs.devtools.client.browser.match_paths(node_38798.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38799)){
var new_link_38800 = (function (){var G__38462 = node_38798.cloneNode(true);
G__38462.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38799),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38462;
})();
(node_38798.shadow$old = true);

(new_link_38800.onload = ((function (seq__38399_38740,chunk__38403_38741,count__38404_38742,i__38405_38743,seq__38142,chunk__38144,count__38145,i__38146,new_link_38800,path_match_38799,node_38798,seq__38399_38792__$1,temp__5823__auto___38791__$1,path,seq__38142__$1,temp__5823__auto__,map__38141,map__38141__$1,msg,updates,reload_info){
return (function (e){
var seq__38464_38801 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__38466_38802 = null;
var count__38467_38803 = (0);
var i__38468_38804 = (0);
while(true){
if((i__38468_38804 < count__38467_38803)){
var map__38477_38805 = chunk__38466_38802.cljs$core$IIndexed$_nth$arity$2(null,i__38468_38804);
var map__38477_38806__$1 = cljs.core.__destructure_map(map__38477_38805);
var task_38807 = map__38477_38806__$1;
var fn_str_38808 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38477_38806__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38809 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38477_38806__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38810 = goog.getObjectByName(fn_str_38808,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38809)].join(''));

(fn_obj_38810.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38810.cljs$core$IFn$_invoke$arity$2(path,new_link_38800) : fn_obj_38810.call(null,path,new_link_38800));


var G__38811 = seq__38464_38801;
var G__38812 = chunk__38466_38802;
var G__38813 = count__38467_38803;
var G__38814 = (i__38468_38804 + (1));
seq__38464_38801 = G__38811;
chunk__38466_38802 = G__38812;
count__38467_38803 = G__38813;
i__38468_38804 = G__38814;
continue;
} else {
var temp__5823__auto___38815__$2 = cljs.core.seq(seq__38464_38801);
if(temp__5823__auto___38815__$2){
var seq__38464_38816__$1 = temp__5823__auto___38815__$2;
if(cljs.core.chunked_seq_QMARK_(seq__38464_38816__$1)){
var c__5548__auto___38817 = cljs.core.chunk_first(seq__38464_38816__$1);
var G__38818 = cljs.core.chunk_rest(seq__38464_38816__$1);
var G__38819 = c__5548__auto___38817;
var G__38820 = cljs.core.count(c__5548__auto___38817);
var G__38821 = (0);
seq__38464_38801 = G__38818;
chunk__38466_38802 = G__38819;
count__38467_38803 = G__38820;
i__38468_38804 = G__38821;
continue;
} else {
var map__38485_38822 = cljs.core.first(seq__38464_38816__$1);
var map__38485_38823__$1 = cljs.core.__destructure_map(map__38485_38822);
var task_38824 = map__38485_38823__$1;
var fn_str_38825 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38485_38823__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38826 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38485_38823__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38830 = goog.getObjectByName(fn_str_38825,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38826)].join(''));

(fn_obj_38830.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38830.cljs$core$IFn$_invoke$arity$2(path,new_link_38800) : fn_obj_38830.call(null,path,new_link_38800));


var G__38831 = cljs.core.next(seq__38464_38816__$1);
var G__38832 = null;
var G__38833 = (0);
var G__38834 = (0);
seq__38464_38801 = G__38831;
chunk__38466_38802 = G__38832;
count__38467_38803 = G__38833;
i__38468_38804 = G__38834;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_38798);
});})(seq__38399_38740,chunk__38403_38741,count__38404_38742,i__38405_38743,seq__38142,chunk__38144,count__38145,i__38146,new_link_38800,path_match_38799,node_38798,seq__38399_38792__$1,temp__5823__auto___38791__$1,path,seq__38142__$1,temp__5823__auto__,map__38141,map__38141__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38799], 0));

goog.dom.insertSiblingAfter(new_link_38800,node_38798);


var G__38835 = cljs.core.next(seq__38399_38792__$1);
var G__38836 = null;
var G__38837 = (0);
var G__38838 = (0);
seq__38399_38740 = G__38835;
chunk__38403_38741 = G__38836;
count__38404_38742 = G__38837;
i__38405_38743 = G__38838;
continue;
} else {
var G__38839 = cljs.core.next(seq__38399_38792__$1);
var G__38840 = null;
var G__38841 = (0);
var G__38842 = (0);
seq__38399_38740 = G__38839;
chunk__38403_38741 = G__38840;
count__38404_38742 = G__38841;
i__38405_38743 = G__38842;
continue;
}
} else {
var G__38843 = cljs.core.next(seq__38399_38792__$1);
var G__38844 = null;
var G__38845 = (0);
var G__38846 = (0);
seq__38399_38740 = G__38843;
chunk__38403_38741 = G__38844;
count__38404_38742 = G__38845;
i__38405_38743 = G__38846;
continue;
}
}
} else {
}
}
break;
}


var G__38847 = cljs.core.next(seq__38142__$1);
var G__38848 = null;
var G__38849 = (0);
var G__38850 = (0);
seq__38142 = G__38847;
chunk__38144 = G__38848;
count__38145 = G__38849;
i__38146 = G__38850;
continue;
} else {
var G__38851 = cljs.core.next(seq__38142__$1);
var G__38852 = null;
var G__38853 = (0);
var G__38854 = (0);
seq__38142 = G__38851;
chunk__38144 = G__38852;
count__38145 = G__38853;
i__38146 = G__38854;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$4 = (function (this$,code,success,fail){
var this$__$1 = this;
try{var G__38496 = shadow.cljs.devtools.client.browser.global_eval(code);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__38496) : success.call(null,G__38496));
}catch (e38495){var e = e38495;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$5 = (function (this$,ns,p__38498,success,fail){
var map__38499 = p__38498;
var map__38499__$1 = cljs.core.__destructure_map(map__38499);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38499__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
try{var G__38501 = shadow.cljs.devtools.client.browser.global_eval(js);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__38501) : success.call(null,G__38501));
}catch (e38500){var e = e38500;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__38502,done,error){
var map__38503 = p__38502;
var map__38503__$1 = cljs.core.__destructure_map(map__38503);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38503__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__38513,done,error){
var map__38514 = p__38513;
var map__38514__$1 = cljs.core.__destructure_map(map__38514);
var msg = map__38514__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38514__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38514__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38514__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__38517){
var map__38518 = p__38517;
var map__38518__$1 = cljs.core.__destructure_map(map__38518);
var src = map__38518__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38518__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5023__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5023__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__38519 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__38519) : done.call(null,G__38519));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__38520){
var map__38521 = p__38520;
var map__38521__$1 = cljs.core.__destructure_map(map__38521);
var msg__$1 = map__38521__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38521__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e38522){var ex = e38522;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__38523){
var map__38525 = p__38523;
var map__38525__$1 = cljs.core.__destructure_map(map__38525);
var env = map__38525__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38525__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__38537){
var map__38538 = p__38537;
var map__38538__$1 = cljs.core.__destructure_map(map__38538);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38538__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38538__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__38539){
var map__38540 = p__38539;
var map__38540__$1 = cljs.core.__destructure_map(map__38540);
var svc = map__38540__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38540__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
