goog.provide('replicant.string');

/**
 * @interface
 */
replicant.string.IStringifier = function(){};

var replicant$string$IStringifier$append$dyn_37972 = (function (this$,s){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (replicant.string.append[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(this$,s) : m__5374__auto__.call(null,this$,s));
} else {
var m__5372__auto__ = (replicant.string.append["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(this$,s) : m__5372__auto__.call(null,this$,s));
} else {
throw cljs.core.missing_protocol("IStringifier.append",this$);
}
}
});
replicant.string.append = (function replicant$string$append(this$,s){
if((((!((this$ == null)))) && ((!((this$.replicant$string$IStringifier$append$arity$2 == null)))))){
return this$.replicant$string$IStringifier$append$arity$2(this$,s);
} else {
return replicant$string$IStringifier$append$dyn_37972(this$,s);
}
});

var replicant$string$IStringifier$to_string$dyn_37973 = (function (this$){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (replicant.string.to_string[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5374__auto__.call(null,this$));
} else {
var m__5372__auto__ = (replicant.string.to_string["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5372__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IStringifier.to-string",this$);
}
}
});
replicant.string.to_string = (function replicant$string$to_string(this$){
if((((!((this$ == null)))) && ((!((this$.replicant$string$IStringifier$to_string$arity$1 == null)))))){
return this$.replicant$string$IStringifier$to_string$arity$1(this$);
} else {
return replicant$string$IStringifier$to_string$dyn_37973(this$);
}
});


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {replicant.string.IStringifier}
 * @implements {cljs.core.IWithMeta}
*/
replicant.string.t_replicant$string37936 = (function (sb,meta37937){
this.sb = sb;
this.meta37937 = meta37937;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(replicant.string.t_replicant$string37936.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37938,meta37937__$1){
var self__ = this;
var _37938__$1 = this;
return (new replicant.string.t_replicant$string37936(self__.sb,meta37937__$1));
}));

(replicant.string.t_replicant$string37936.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37938){
var self__ = this;
var _37938__$1 = this;
return self__.meta37937;
}));

(replicant.string.t_replicant$string37936.prototype.replicant$string$IStringifier$ = cljs.core.PROTOCOL_SENTINEL);

(replicant.string.t_replicant$string37936.prototype.replicant$string$IStringifier$append$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
return self__.sb.push(s);
}));

(replicant.string.t_replicant$string37936.prototype.replicant$string$IStringifier$to_string$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.sb.join("");
}));

(replicant.string.t_replicant$string37936.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sb","sb",-1249746442,null),new cljs.core.Symbol(null,"meta37937","meta37937",-2109834118,null)], null);
}));

(replicant.string.t_replicant$string37936.cljs$lang$type = true);

(replicant.string.t_replicant$string37936.cljs$lang$ctorStr = "replicant.string/t_replicant$string37936");

(replicant.string.t_replicant$string37936.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"replicant.string/t_replicant$string37936");
}));

/**
 * Positional factory function for replicant.string/t_replicant$string37936.
 */
replicant.string.__GT_t_replicant$string37936 = (function replicant$string$__GT_t_replicant$string37936(sb,meta37937){
return (new replicant.string.t_replicant$string37936(sb,meta37937));
});


replicant.string.create_renderer = (function replicant$string$create_renderer(){
var sb = [];
return (new replicant.string.t_replicant$string37936(sb,cljs.core.PersistentArrayMap.EMPTY));
});
replicant.string.self_closing_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, ["track",null,"br",null,"img",null,"area",null,"base",null,"hr",null,"col",null,"param",null,"input",null,"link",null,"source",null,"audio",null,"meta",null,"wbr",null,"embed",null], null), null);
replicant.string.str_join = (function replicant$string$str_join(stringifier,sep,xs){
var G__37939_37974 = cljs.core.first(xs);
if((G__37939_37974 == null)){
} else {
replicant.string.append(stringifier,G__37939_37974);
}

var seq__37940_37975 = cljs.core.seq(cljs.core.rest(xs));
var chunk__37941_37976 = null;
var count__37942_37977 = (0);
var i__37943_37978 = (0);
while(true){
if((i__37943_37978 < count__37942_37977)){
var x_37979 = chunk__37941_37976.cljs$core$IIndexed$_nth$arity$2(null,i__37943_37978);
if(cljs.core.truth_(x_37979)){
replicant.string.append(stringifier,sep);

replicant.string.append(stringifier,x_37979);
} else {
}


var G__37980 = seq__37940_37975;
var G__37981 = chunk__37941_37976;
var G__37982 = count__37942_37977;
var G__37983 = (i__37943_37978 + (1));
seq__37940_37975 = G__37980;
chunk__37941_37976 = G__37981;
count__37942_37977 = G__37982;
i__37943_37978 = G__37983;
continue;
} else {
var temp__5823__auto___37984 = cljs.core.seq(seq__37940_37975);
if(temp__5823__auto___37984){
var seq__37940_37985__$1 = temp__5823__auto___37984;
if(cljs.core.chunked_seq_QMARK_(seq__37940_37985__$1)){
var c__5548__auto___37986 = cljs.core.chunk_first(seq__37940_37985__$1);
var G__37987 = cljs.core.chunk_rest(seq__37940_37985__$1);
var G__37988 = c__5548__auto___37986;
var G__37989 = cljs.core.count(c__5548__auto___37986);
var G__37990 = (0);
seq__37940_37975 = G__37987;
chunk__37941_37976 = G__37988;
count__37942_37977 = G__37989;
i__37943_37978 = G__37990;
continue;
} else {
var x_37991 = cljs.core.first(seq__37940_37985__$1);
if(cljs.core.truth_(x_37991)){
replicant.string.append(stringifier,sep);

replicant.string.append(stringifier,x_37991);
} else {
}


var G__37992 = cljs.core.next(seq__37940_37985__$1);
var G__37993 = null;
var G__37994 = (0);
var G__37995 = (0);
seq__37940_37975 = G__37992;
chunk__37941_37976 = G__37993;
count__37942_37977 = G__37994;
i__37943_37978 = G__37995;
continue;
}
} else {
}
}
break;
}

return stringifier;
});
replicant.string.render_attrs = (function replicant$string$render_attrs(stringifier,attrs){
return cljs.core.reduce_kv((function (_,k,v){
if(cljs.core.truth_((function (){var and__5023__auto__ = cljs.core.not((function (){var fexpr__37944 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"innerHTML","innerHTML",-1856751343),null,new cljs.core.Keyword(null,"on","on",173873944),null], null), null);
return (fexpr__37944.cljs$core$IFn$_invoke$arity$1 ? fexpr__37944.cljs$core$IFn$_invoke$arity$1(k) : fexpr__37944.call(null,k));
})());
if(and__5023__auto__){
var and__5023__auto____$1 = v;
if(cljs.core.truth_(and__5023__auto____$1)){
return (cljs.core.namespace(k) == null);
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())){
var v_37996__$1 = (function (){var G__37945 = v;
if((v instanceof cljs.core.Keyword)){
return cljs.core.name(G__37945);
} else {
return G__37945;
}
})();
replicant.string.append(stringifier," ");

var G__37946_37997 = k;
var G__37946_37998__$1 = (((G__37946_37997 instanceof cljs.core.Keyword))?G__37946_37997.fqn:null);
switch (G__37946_37998__$1) {
case "classes":
replicant.string.append(stringifier,"class=\"");

replicant.string.str_join(stringifier," ",v_37996__$1);

replicant.string.append(stringifier,"\"");

break;
case "style":
replicant.string.append(stringifier,"style=\"");

replicant.string.str_join(stringifier," ",cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p__37947){
var vec__37948 = p__37947;
var prop = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37948,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37948,(1),null);
var temp__5823__auto__ = replicant.core.get_style_val(prop,val);
if(cljs.core.truth_(temp__5823__auto__)){
var val__$1 = temp__5823__auto__;
return [cljs.core.name(prop),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(val__$1),";"].join('');
} else {
return null;
}
}),v_37996__$1));

replicant.string.append(stringifier,"\"");

break;
default:
if(((typeof v_37996__$1 === 'number') || (((typeof v_37996__$1 === 'string') && (((0) < cljs.core.count(v_37996__$1))))))){
var G__37951_38000 = stringifier;
replicant.string.append(G__37951_38000,cljs.core.name(k));

replicant.string.append(G__37951_38000,"=\"");

replicant.string.append(G__37951_38000,v_37996__$1);

replicant.string.append(G__37951_38000,"\"");

} else {
replicant.string.append(stringifier,cljs.core.name(k));
}

}
} else {
}

return null;
}),null,attrs);
});
/**
 * Change special characters into HTML character entities.
 * 
 *   Taken from Hiccup:
 *   https://github.com/weavejester/hiccup/blob/5a6d45c17728dcbcb3aeb32ea890fd9dc1508547/src/hiccup/util.clj#L80-L88
 */
replicant.string.escape_html = (function replicant$string$escape_html(text){
return clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(text,"&","&amp;"),"<","&lt;"),">","&gt;"),"\"","&quot;"),"'","&apos;");
});
replicant.string.get_expanded_headers = (function replicant$string$get_expanded_headers(opt,headers){
if(((cljs.core.qualified_keyword_QMARK_((headers[(0)]))) && ((cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"aliases","aliases",1346874714).cljs$core$IFn$_invoke$arity$1(opt),(headers[(0)])) == null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Tried to expand undefined alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((headers[(0)]))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"missing","missing",362507769),(headers[(0)]),new cljs.core.Keyword(null,"available","available",-1470697127),new cljs.core.Keyword(null,"aliases","aliases",1346874714).cljs$core$IFn$_invoke$arity$1(opt)], null));
} else {
}

var or__5025__auto__ = (function (){var temp__5823__auto__ = replicant.core.get_alias_headers(opt,headers);
if(cljs.core.truth_(temp__5823__auto__)){
var aliased = temp__5823__auto__;
return (replicant.string.get_expanded_headers.cljs$core$IFn$_invoke$arity$2 ? replicant.string.get_expanded_headers.cljs$core$IFn$_invoke$arity$2(opt,aliased) : replicant.string.get_expanded_headers.call(null,opt,aliased));
} else {
return null;
}
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return headers;
}
});
replicant.string.render_node = (function replicant$string$render_node(stringifier,headers,p__37952){
var map__37953 = p__37952;
var map__37953__$1 = cljs.core.__destructure_map(map__37953);
var depth = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37953__$1,new cljs.core.Keyword(null,"depth","depth",1768663640));
var indent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37953__$1,new cljs.core.Keyword(null,"indent","indent",-148200125));
var aliases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37953__$1,new cljs.core.Keyword(null,"aliases","aliases",1346874714));
var alias_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37953__$1,new cljs.core.Keyword(null,"alias-data","alias-data",1743863930));
var indent_QMARK_ = (indent > (0));
var indent_s = ((indent_QMARK_)?clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((depth * indent)," ")):"");
var newline = ((indent_QMARK_)?"\n":"");
var headers__$1 = replicant.string.get_expanded_headers(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"aliases","aliases",1346874714),aliases,new cljs.core.Keyword(null,"alias-data","alias-data",1743863930),alias_data], null),headers);
var temp__5821__auto__ = (headers__$1[(8)]);
if(cljs.core.truth_(temp__5821__auto__)){
var text = temp__5821__auto__;
var G__37954 = stringifier;
replicant.string.append(G__37954,indent_s);

replicant.string.append(G__37954,replicant.string.escape_html(text));

replicant.string.append(G__37954,newline);

return G__37954;
} else {
var tag_name = (headers__$1[(0)]);
var attrs = replicant.core.get_attrs(headers__$1);
var ns_string = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("svg",tag_name)) && (cljs.core.not(new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571).cljs$core$IFn$_invoke$arity$1(attrs)))))?" xmlns=\"http://www.w3.org/2000/svg\"":"");
var G__37955_38001 = stringifier;
replicant.string.append(G__37955_38001,indent_s);

replicant.string.append(G__37955_38001,"<");

replicant.string.append(G__37955_38001,tag_name);

replicant.string.append(G__37955_38001,ns_string);


replicant.string.render_attrs(stringifier,attrs);

var G__37956_38002 = stringifier;
replicant.string.append(G__37956_38002,">");

replicant.string.append(G__37956_38002,newline);


if(cljs.core.truth_(new cljs.core.Keyword(null,"innerHTML","innerHTML",-1856751343).cljs$core$IFn$_invoke$arity$1(attrs))){
replicant.string.append(stringifier,new cljs.core.Keyword(null,"innerHTML","innerHTML",-1856751343).cljs$core$IFn$_invoke$arity$1(attrs));
} else {
cljs.core.run_BANG_((function (child){
if(cljs.core.truth_(child)){
var G__37957 = stringifier;
var G__37958 = child;
var G__37959 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"depth","depth",1768663640),(depth + (1)),new cljs.core.Keyword(null,"indent","indent",-148200125),indent,new cljs.core.Keyword(null,"aliases","aliases",1346874714),aliases,new cljs.core.Keyword(null,"alias-data","alias-data",1743863930),alias_data], null);
return (replicant.string.render_node.cljs$core$IFn$_invoke$arity$3 ? replicant.string.render_node.cljs$core$IFn$_invoke$arity$3(G__37957,G__37958,G__37959) : replicant.string.render_node.call(null,G__37957,G__37958,G__37959));
} else {
return null;
}
}),replicant.core.get_children(headers__$1,(headers__$1[(6)])));
}

if(cljs.core.truth_((replicant.string.self_closing_QMARK_.cljs$core$IFn$_invoke$arity$1 ? replicant.string.self_closing_QMARK_.cljs$core$IFn$_invoke$arity$1(tag_name) : replicant.string.self_closing_QMARK_.call(null,tag_name)))){
} else {
var G__37960_38003 = stringifier;
replicant.string.append(G__37960_38003,indent_s);

replicant.string.append(G__37960_38003,"</");

replicant.string.append(G__37960_38003,tag_name);

replicant.string.append(G__37960_38003,">");

replicant.string.append(G__37960_38003,newline);

}

return stringifier;
}
});
/**
 * Render `hiccup` to a string of HTML. `hiccup` can be either a single hiccup
 *   node or a list of multiple nodes.
 */
replicant.string.render = (function replicant$string$render(var_args){
var args__5755__auto__ = [];
var len__5749__auto___38004 = arguments.length;
var i__5750__auto___38005 = (0);
while(true){
if((i__5750__auto___38005 < len__5749__auto___38004)){
args__5755__auto__.push((arguments[i__5750__auto___38005]));

var G__38006 = (i__5750__auto___38005 + (1));
i__5750__auto___38005 = G__38006;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return replicant.string.render.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(replicant.string.render.cljs$core$IFn$_invoke$arity$variadic = (function (hiccup,p__37963){
var vec__37964 = p__37963;
var map__37967 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37964,(0),null);
var map__37967__$1 = cljs.core.__destructure_map(map__37967);
var aliases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37967__$1,new cljs.core.Keyword(null,"aliases","aliases",1346874714));
var alias_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37967__$1,new cljs.core.Keyword(null,"alias-data","alias-data",1743863930));
var indent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37967__$1,new cljs.core.Keyword(null,"indent","indent",-148200125));
var opt = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"indent","indent",-148200125),(function (){var or__5025__auto__ = indent;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (0);
}
})(),new cljs.core.Keyword(null,"depth","depth",1768663640),(0),new cljs.core.Keyword(null,"aliases","aliases",1346874714),(function (){var or__5025__auto__ = aliases;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return replicant.alias.get_registered_aliases();
}
})(),new cljs.core.Keyword(null,"alias-data","alias-data",1743863930),alias_data], null);
if(replicant.hiccup.hiccup_QMARK_(hiccup)){
var stringifier = replicant.string.create_renderer();
replicant.string.render_node(stringifier,replicant.core.get_hiccup_headers(null,hiccup),opt);

return stringifier.replicant$string$IStringifier$to_string$arity$1(null);
} else {
if(cljs.core.list_QMARK_(hiccup)){
var stringifier = replicant.string.create_renderer();
var seq__37968_38007 = cljs.core.seq(hiccup);
var chunk__37969_38008 = null;
var count__37970_38009 = (0);
var i__37971_38010 = (0);
while(true){
if((i__37971_38010 < count__37970_38009)){
var hiccup_node_38011 = chunk__37969_38008.cljs$core$IIndexed$_nth$arity$2(null,i__37971_38010);
replicant.string.render_node(stringifier,replicant.core.get_hiccup_headers(null,hiccup_node_38011),opt);


var G__38012 = seq__37968_38007;
var G__38013 = chunk__37969_38008;
var G__38014 = count__37970_38009;
var G__38015 = (i__37971_38010 + (1));
seq__37968_38007 = G__38012;
chunk__37969_38008 = G__38013;
count__37970_38009 = G__38014;
i__37971_38010 = G__38015;
continue;
} else {
var temp__5823__auto___38016 = cljs.core.seq(seq__37968_38007);
if(temp__5823__auto___38016){
var seq__37968_38017__$1 = temp__5823__auto___38016;
if(cljs.core.chunked_seq_QMARK_(seq__37968_38017__$1)){
var c__5548__auto___38018 = cljs.core.chunk_first(seq__37968_38017__$1);
var G__38019 = cljs.core.chunk_rest(seq__37968_38017__$1);
var G__38020 = c__5548__auto___38018;
var G__38021 = cljs.core.count(c__5548__auto___38018);
var G__38022 = (0);
seq__37968_38007 = G__38019;
chunk__37969_38008 = G__38020;
count__37970_38009 = G__38021;
i__37971_38010 = G__38022;
continue;
} else {
var hiccup_node_38023 = cljs.core.first(seq__37968_38017__$1);
replicant.string.render_node(stringifier,replicant.core.get_hiccup_headers(null,hiccup_node_38023),opt);


var G__38024 = cljs.core.next(seq__37968_38017__$1);
var G__38025 = null;
var G__38026 = (0);
var G__38027 = (0);
seq__37968_38007 = G__38024;
chunk__37969_38008 = G__38025;
count__37970_38009 = G__38026;
i__37971_38010 = G__38027;
continue;
}
} else {
}
}
break;
}

return stringifier.replicant$string$IStringifier$to_string$arity$1(null);
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccup);

}
}
}));

(replicant.string.render.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(replicant.string.render.cljs$lang$applyTo = (function (seq37961){
var G__37962 = cljs.core.first(seq37961);
var seq37961__$1 = cljs.core.next(seq37961);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37962,seq37961__$1);
}));


//# sourceMappingURL=replicant.string.js.map
