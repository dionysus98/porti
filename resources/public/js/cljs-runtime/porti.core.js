goog.provide('porti.core');
porti.core._GT_bubble = (function porti$core$_GT_bubble(p__44247,position){
var map__44248 = p__44247;
var map__44248__$1 = cljs.core.__destructure_map(map__44248);
var bubble = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44248__$1,new cljs.core.Keyword("ui.header","bubble","ui.header/bubble",-1894635034));
if(cljs.core.truth_((function (){var fexpr__44249 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"right","right",-452581833),null,new cljs.core.Keyword(null,"left","left",-399115937),null], null), null);
return (fexpr__44249.cljs$core$IFn$_invoke$arity$1 ? fexpr__44249.cljs$core$IFn$_invoke$arity$1(position) : fexpr__44249.call(null,position));
})())){
} else {
throw (new Error("Assert failed: (#{:right :left} position)"));
}

var __GT_mouseover = (function (mouseover_QMARK_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("action","assoc-in","action/assoc-in",-895300168),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ui.header","bubble","ui.header/bubble",-1894635034),position,new cljs.core.Keyword(null,"mouseover?","mouseover?",-2068096550)], null),mouseover_QMARK_], null);
});
var map__44250 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(bubble,position);
var map__44250__$1 = cljs.core.__destructure_map(map__44250);
var mouseover_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44250__$1,new cljs.core.Keyword(null,"mouseover?","mouseover?",-2068096550));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("replicant","on-mount","replicant/on-mount",-1518504162),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [__GT_mouseover(false)], null),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [__GT_mouseover(true)], null),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [__GT_mouseover(false)], null)], null),new cljs.core.Keyword(null,"style","style",-496642736),(function (){var G__44251 = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"margin","margin",-995903681)],["#000","transform 0.25s ease","-2rem","6rem","#fff","pointer","0","fixed","50%","6rem","0"]);
var G__44251__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(position,new cljs.core.Keyword(null,"left","left",-399115937)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44251,new cljs.core.Keyword(null,"left","left",-399115937),"-2rem"):G__44251);
var G__44251__$2 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(position,new cljs.core.Keyword(null,"right","right",-452581833)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44251__$1,new cljs.core.Keyword(null,"right","right",-452581833),"-2rem"):G__44251__$1);
if(cljs.core.truth_(mouseover_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__44251__$2,new cljs.core.Keyword(null,"transform","transform",1381301764),"scale(1.175)",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"background","background",-863952629),"#dd119988",new cljs.core.Keyword(null,"border","border",1444987323),"1.2rem solid #fff"], 0));
} else {
return G__44251__$2;
}
})()], null)], null);
});
porti.core._GT_header_title = (function porti$core$_GT_header_title(_state){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin","margin",-995903681),"1rem 0 0 0",new cljs.core.Keyword(null,"padding","padding",1660304693),"0",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"Fira Code"], null)], null),"<==| <(*)> |==>"], null);
});
porti.core._GT_header = (function porti$core$_GT_header(state){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"3.9rem",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null)], null),porti.core._GT_header_title(state),porti.core._GT_bubble(state,new cljs.core.Keyword(null,"left","left",-399115937)),porti.core._GT_bubble(state,new cljs.core.Keyword(null,"right","right",-452581833))], null);
});
porti.core._GT_summary = (function porti$core$_GT_summary(_state){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),"Dancing Script",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], null),"Avinash Sridhar"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"article","article",-21685045),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var github_profile = "https://github.com/dionysus98";
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"article","article",-21685045),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",119441134),"Toys"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),[github_profile,"/reflector-clj"].join(''),new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),"A basic neural net library"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["A very simple neural net library written in clojure from scratch ","to understand the logic behind neural networks, ","machine learning and model building in general. ","A example model is created at the core to demonstrate the neural net capabilities."].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),[github_profile,"/clox"].join(''),new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),"An interpreted programming language [lox]"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),[github_profile,"/pngme"].join(''),new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),"PNG hidden messages encoder/decoder"], null)], null)], null)], null);
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"article","article",-21685045),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",119441134),"Contacts"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Email"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"avysridhar@gmail.com"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Github"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"dionysus98"], null)], null)], null)], null)], null)], null)], null)], null);
});
porti.core._GT_app = (function porti$core$_GT_app(state){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#root.container-fluid","div#root.container-fluid",643203863),porti.core._GT_header(state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main","main",-2117802661),porti.core._GT_summary(state)], null)], null);
});
porti.core.process_effect = (function porti$core$process_effect(_BANG_state,p__44252){
var vec__44253 = p__44252;
var seq__44254 = cljs.core.seq(vec__44253);
var first__44255 = cljs.core.first(seq__44254);
var seq__44254__$1 = cljs.core.next(seq__44254);
var effect = first__44255;
var args = seq__44254__$1;
if(cljs.core.truth_(new cljs.core.Keyword("app","debug?","app/debug?",-1831590826).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(_BANG_state)))){
cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, ["Effect",cljs.core.PersistentArrayMap.createAsIfByAssoc([effect,args])], null));
} else {
}

var G__44256 = effect;
var G__44256__$1 = (((G__44256 instanceof cljs.core.Keyword))?G__44256.fqn:null);
switch (G__44256__$1) {
case "effect/assoc-in":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.swap_BANG_,_BANG_state,cljs.core.assoc_in,args);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44256__$1)].join('')));

}
});
porti.core.execute_actions = (function porti$core$execute_actions(_BANG_state,event_data){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__44257){
var vec__44258 = p__44257;
var seq__44259 = cljs.core.seq(vec__44258);
var first__44260 = cljs.core.first(seq__44259);
var seq__44259__$1 = cljs.core.next(seq__44259);
var action_id = first__44260;
var action_args = seq__44259__$1;
var _action = vec__44258;
if(cljs.core.truth_(new cljs.core.Keyword("app","debug?","app/debug?",-1831590826).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(_BANG_state)))){
cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, ["Action",cljs.core.PersistentArrayMap.createAsIfByAssoc([action_id,action_args])], null));
} else {
}

var G__44261 = action_id;
var G__44261__$1 = (((G__44261 instanceof cljs.core.Keyword))?G__44261.fqn:null);
switch (G__44261__$1) {
case "action/assoc-in":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("effect","assoc-in","effect/assoc-in",-913600263)], null),action_args)], null);

break;
case "ui.header/bubble":
var vec__44262 = action_args;
var event_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44262,(0),null);
var position = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44262,(1),null);
var G__44265 = event_type;
var G__44265__$1 = (((G__44265 instanceof cljs.core.Keyword))?G__44265.fqn:null);
switch (G__44265__$1) {
case "mouseover":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("effect","assoc-in","effect/assoc-in",-913600263),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [action_id,position,new cljs.core.Keyword(null,"mouseover?","mouseover?",-2068096550)], null),true], null)], null);

break;
case "mouseleave":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("effect","assoc-in","effect/assoc-in",-913600263),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [action_id,position,new cljs.core.Keyword(null,"mouseover?","mouseover?",-2068096550)], null),false], null)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44265__$1)].join('')));

}

break;
default:
if(cljs.core.truth_(new cljs.core.Keyword("app","debug?","app/debug?",-1831590826).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(_BANG_state)))){
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, ["Unknown Action",cljs.core.PersistentArrayMap.createAsIfByAssoc([action_id,action_args])], null));
} else {
return null;
}

}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([event_data], 0));
});
porti.core.interpolate = (function porti$core$interpolate(event,data){
return clojure.walk.postwalk((function (x){
var G__44266 = x;
var G__44266__$1 = (((G__44266 instanceof cljs.core.Keyword))?G__44266.fqn:null);
switch (G__44266__$1) {
case "event.target/value-as-number":
var G__44267 = event;
var G__44267__$1 = (((G__44267 == null))?null:G__44267.target);
if((G__44267__$1 == null)){
return null;
} else {
return G__44267__$1.valueAsNumber;
}

break;
case "event.target/value-as-keyword":
var G__44268 = event;
var G__44268__$1 = (((G__44268 == null))?null:G__44268.target);
var G__44268__$2 = (((G__44268__$1 == null))?null:G__44268__$1.value);
if((G__44268__$2 == null)){
return null;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(G__44268__$2);
}

break;
case "event.target/value":
var G__44269 = event;
var G__44269__$1 = (((G__44269 == null))?null:G__44269.target);
if((G__44269__$1 == null)){
return null;
} else {
return G__44269__$1.value;
}

break;
case "event.target/as-map":
var G__44270 = event;
var G__44270__$1 = (((G__44270 == null))?null:G__44270.target);
if((G__44270__$1 == null)){
return null;
} else {
return cljs.core.clj__GT_js(G__44270__$1);
}

break;
default:
return x;

}
}),data);
});
porti.core.dispatcher_BANG_ = (function porti$core$dispatcher_BANG_(_BANG_state,p__44272,event_data){
var map__44273 = p__44272;
var map__44273__$1 = cljs.core.__destructure_map(map__44273);
var dom_event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44273__$1,new cljs.core.Keyword("replicant","dom-event","replicant/dom-event",-1613182512));
return cljs.core.run_BANG_((function (p1__44271_SHARP_){
return porti.core.process_effect(_BANG_state,p1__44271_SHARP_);
}),porti.core.execute_actions(_BANG_state,porti.core.interpolate(dom_event,event_data)));
});
porti.core.init_BANG_ = (function porti$core$init_BANG_(_BANG_state){
cljs.core.add_watch(_BANG_state,new cljs.core.Keyword("porti.core","render","porti.core/render",-2050628725),(function porti$core$init_BANG__$_init_app_BANG_(_,___$1,___$2,new_state){
return replicant.dom.render(document.body,porti.core._GT_app(new_state));
}));

replicant.dom.set_dispatch_BANG_(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(porti.core.dispatcher_BANG_,_BANG_state));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(_BANG_state,cljs.core.assoc,new cljs.core.Keyword("porti.core","loaded-at","porti.core/loaded-at",803499539),(new Date()).getTime());
});

//# sourceMappingURL=porti.core.js.map
