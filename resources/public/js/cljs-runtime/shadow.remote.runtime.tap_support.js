goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__36934,p__36935){
var map__36936 = p__36934;
var map__36936__$1 = cljs.core.__destructure_map(map__36936);
var svc = map__36936__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36936__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36936__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36936__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__36937 = p__36935;
var map__36937__$1 = cljs.core.__destructure_map(map__36937);
var msg = map__36937__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36937__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36937__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36937__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36937__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__36944,p__36945){
var map__36946 = p__36944;
var map__36946__$1 = cljs.core.__destructure_map(map__36946);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36946__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__36947 = p__36945;
var map__36947__$1 = cljs.core.__destructure_map(map__36947);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36947__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__36949,p__36950){
var map__36951 = p__36949;
var map__36951__$1 = cljs.core.__destructure_map(map__36951);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36951__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36951__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__36952 = p__36950;
var map__36952__$1 = cljs.core.__destructure_map(map__36952);
var msg = map__36952__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36952__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__36956,tid){
var map__36957 = p__36956;
var map__36957__$1 = cljs.core.__destructure_map(map__36957);
var svc = map__36957__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36957__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__36972 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__36973 = null;
var count__36974 = (0);
var i__36975 = (0);
while(true){
if((i__36975 < count__36974)){
var vec__36990 = chunk__36973.cljs$core$IIndexed$_nth$arity$2(null,i__36975);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36990,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36990,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__37008 = seq__36972;
var G__37009 = chunk__36973;
var G__37010 = count__36974;
var G__37011 = (i__36975 + (1));
seq__36972 = G__37008;
chunk__36973 = G__37009;
count__36974 = G__37010;
i__36975 = G__37011;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__36972);
if(temp__5823__auto__){
var seq__36972__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36972__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__36972__$1);
var G__37012 = cljs.core.chunk_rest(seq__36972__$1);
var G__37013 = c__5548__auto__;
var G__37014 = cljs.core.count(c__5548__auto__);
var G__37015 = (0);
seq__36972 = G__37012;
chunk__36973 = G__37013;
count__36974 = G__37014;
i__36975 = G__37015;
continue;
} else {
var vec__36994 = cljs.core.first(seq__36972__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36994,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36994,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__37016 = cljs.core.next(seq__36972__$1);
var G__37017 = null;
var G__37018 = (0);
var G__37019 = (0);
seq__36972 = G__37016;
chunk__36973 = G__37017;
count__36974 = G__37018;
i__36975 = G__37019;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__36964_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__36964_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__36965_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__36965_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__36966_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__36966_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__36969_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__36969_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__37001){
var map__37002 = p__37001;
var map__37002__$1 = cljs.core.__destructure_map(map__37002);
var svc = map__37002__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37002__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37002__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
