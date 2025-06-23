goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__35378){
var map__35379 = p__35378;
var map__35379__$1 = cljs.core.__destructure_map(map__35379);
var m = map__35379__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35379__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35379__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5025__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return [(function (){var temp__5823__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5823__auto__)){
var ns = temp__5823__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35397_35863 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35398_35864 = null;
var count__35399_35865 = (0);
var i__35400_35866 = (0);
while(true){
if((i__35400_35866 < count__35399_35865)){
var f_35867 = chunk__35398_35864.cljs$core$IIndexed$_nth$arity$2(null,i__35400_35866);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35867], 0));


var G__35868 = seq__35397_35863;
var G__35869 = chunk__35398_35864;
var G__35870 = count__35399_35865;
var G__35871 = (i__35400_35866 + (1));
seq__35397_35863 = G__35868;
chunk__35398_35864 = G__35869;
count__35399_35865 = G__35870;
i__35400_35866 = G__35871;
continue;
} else {
var temp__5823__auto___35872 = cljs.core.seq(seq__35397_35863);
if(temp__5823__auto___35872){
var seq__35397_35873__$1 = temp__5823__auto___35872;
if(cljs.core.chunked_seq_QMARK_(seq__35397_35873__$1)){
var c__5548__auto___35874 = cljs.core.chunk_first(seq__35397_35873__$1);
var G__35875 = cljs.core.chunk_rest(seq__35397_35873__$1);
var G__35876 = c__5548__auto___35874;
var G__35877 = cljs.core.count(c__5548__auto___35874);
var G__35878 = (0);
seq__35397_35863 = G__35875;
chunk__35398_35864 = G__35876;
count__35399_35865 = G__35877;
i__35400_35866 = G__35878;
continue;
} else {
var f_35879 = cljs.core.first(seq__35397_35873__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35879], 0));


var G__35880 = cljs.core.next(seq__35397_35873__$1);
var G__35881 = null;
var G__35882 = (0);
var G__35883 = (0);
seq__35397_35863 = G__35880;
chunk__35398_35864 = G__35881;
count__35399_35865 = G__35882;
i__35400_35866 = G__35883;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35884 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_35884], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_35884)))?cljs.core.second(arglists_35884):arglists_35884)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35469_35886 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35470_35887 = null;
var count__35471_35888 = (0);
var i__35472_35889 = (0);
while(true){
if((i__35472_35889 < count__35471_35888)){
var vec__35507_35890 = chunk__35470_35887.cljs$core$IIndexed$_nth$arity$2(null,i__35472_35889);
var name_35891 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35507_35890,(0),null);
var map__35510_35892 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35507_35890,(1),null);
var map__35510_35893__$1 = cljs.core.__destructure_map(map__35510_35892);
var doc_35894 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35510_35893__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35895 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35510_35893__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35891], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35895], 0));

if(cljs.core.truth_(doc_35894)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35894], 0));
} else {
}


var G__35896 = seq__35469_35886;
var G__35897 = chunk__35470_35887;
var G__35898 = count__35471_35888;
var G__35899 = (i__35472_35889 + (1));
seq__35469_35886 = G__35896;
chunk__35470_35887 = G__35897;
count__35471_35888 = G__35898;
i__35472_35889 = G__35899;
continue;
} else {
var temp__5823__auto___35900 = cljs.core.seq(seq__35469_35886);
if(temp__5823__auto___35900){
var seq__35469_35901__$1 = temp__5823__auto___35900;
if(cljs.core.chunked_seq_QMARK_(seq__35469_35901__$1)){
var c__5548__auto___35902 = cljs.core.chunk_first(seq__35469_35901__$1);
var G__35903 = cljs.core.chunk_rest(seq__35469_35901__$1);
var G__35904 = c__5548__auto___35902;
var G__35905 = cljs.core.count(c__5548__auto___35902);
var G__35906 = (0);
seq__35469_35886 = G__35903;
chunk__35470_35887 = G__35904;
count__35471_35888 = G__35905;
i__35472_35889 = G__35906;
continue;
} else {
var vec__35516_35907 = cljs.core.first(seq__35469_35901__$1);
var name_35908 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35516_35907,(0),null);
var map__35519_35909 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35516_35907,(1),null);
var map__35519_35910__$1 = cljs.core.__destructure_map(map__35519_35909);
var doc_35911 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35519_35910__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35912 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35519_35910__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35908], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35912], 0));

if(cljs.core.truth_(doc_35911)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35911], 0));
} else {
}


var G__35913 = cljs.core.next(seq__35469_35901__$1);
var G__35914 = null;
var G__35915 = (0);
var G__35916 = (0);
seq__35469_35886 = G__35913;
chunk__35470_35887 = G__35914;
count__35471_35888 = G__35915;
i__35472_35889 = G__35916;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5823__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5823__auto__)){
var fnspec = temp__5823__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__35549 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__35550 = null;
var count__35551 = (0);
var i__35552 = (0);
while(true){
if((i__35552 < count__35551)){
var role = chunk__35550.cljs$core$IIndexed$_nth$arity$2(null,i__35552);
var temp__5823__auto___35917__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5823__auto___35917__$1)){
var spec_35918 = temp__5823__auto___35917__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35918)], 0));
} else {
}


var G__35919 = seq__35549;
var G__35920 = chunk__35550;
var G__35921 = count__35551;
var G__35922 = (i__35552 + (1));
seq__35549 = G__35919;
chunk__35550 = G__35920;
count__35551 = G__35921;
i__35552 = G__35922;
continue;
} else {
var temp__5823__auto____$1 = cljs.core.seq(seq__35549);
if(temp__5823__auto____$1){
var seq__35549__$1 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__35549__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__35549__$1);
var G__35923 = cljs.core.chunk_rest(seq__35549__$1);
var G__35924 = c__5548__auto__;
var G__35925 = cljs.core.count(c__5548__auto__);
var G__35926 = (0);
seq__35549 = G__35923;
chunk__35550 = G__35924;
count__35551 = G__35925;
i__35552 = G__35926;
continue;
} else {
var role = cljs.core.first(seq__35549__$1);
var temp__5823__auto___35927__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5823__auto___35927__$2)){
var spec_35928 = temp__5823__auto___35927__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35928)], 0));
} else {
}


var G__35929 = cljs.core.next(seq__35549__$1);
var G__35930 = null;
var G__35931 = (0);
var G__35932 = (0);
seq__35549 = G__35929;
chunk__35550 = G__35930;
count__35551 = G__35931;
i__35552 = G__35932;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map(o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__35720 = datafied_throwable;
var map__35720__$1 = cljs.core.__destructure_map(map__35720);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35720__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35720__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35720__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__35725 = cljs.core.last(via);
var map__35725__$1 = cljs.core.__destructure_map(map__35725);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35725__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35725__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35725__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__35726 = data;
var map__35726__$1 = cljs.core.__destructure_map(map__35726);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35726__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35726__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35726__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__35727 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__35727__$1 = cljs.core.__destructure_map(map__35727);
var top_data = map__35727__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35727__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__35743 = phase;
var G__35743__$1 = (((G__35743 instanceof cljs.core.Keyword))?G__35743.fqn:null);
switch (G__35743__$1) {
case "read-source":
var map__35749 = data;
var map__35749__$1 = cljs.core.__destructure_map(map__35749);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35749__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35749__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__35751 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__35751__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35751,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35751);
var G__35751__$2 = (cljs.core.truth_((function (){var fexpr__35755 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35755.cljs$core$IFn$_invoke$arity$1 ? fexpr__35755.cljs$core$IFn$_invoke$arity$1(source) : fexpr__35755.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35751__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35751__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35751__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35751__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__35762 = top_data;
var G__35762__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35762,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35762);
var G__35762__$2 = (cljs.core.truth_((function (){var fexpr__35764 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35764.cljs$core$IFn$_invoke$arity$1 ? fexpr__35764.cljs$core$IFn$_invoke$arity$1(source) : fexpr__35764.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35762__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35762__$1);
var G__35762__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35762__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35762__$2);
var G__35762__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35762__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35762__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35762__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35762__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__35781 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35781,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35781,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35781,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35781,(3),null);
var G__35788 = top_data;
var G__35788__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35788,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__35788);
var G__35788__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35788__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__35788__$1);
var G__35788__$3 = (cljs.core.truth_((function (){var and__5023__auto__ = source__$1;
if(cljs.core.truth_(and__5023__auto__)){
return method;
} else {
return and__5023__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35788__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__35788__$2);
var G__35788__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35788__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35788__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35788__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35788__$4;
}

break;
case "execution":
var vec__35795 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35795,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35795,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35795,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35795,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__35700_SHARP_){
var or__5025__auto__ = (p1__35700_SHARP_ == null);
if(or__5025__auto__){
return or__5025__auto__;
} else {
var fexpr__35798 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35798.cljs$core$IFn$_invoke$arity$1 ? fexpr__35798.cljs$core$IFn$_invoke$arity$1(p1__35700_SHARP_) : fexpr__35798.call(null,p1__35700_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return line;
}
})();
var G__35803 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__35803__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35803,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__35803);
var G__35803__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35803__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35803__$1);
var G__35803__$3 = (cljs.core.truth_((function (){var or__5025__auto__ = fn;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var and__5023__auto__ = source__$1;
if(cljs.core.truth_(and__5023__auto__)){
return method;
} else {
return and__5023__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35803__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5025__auto__ = fn;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__35803__$2);
var G__35803__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35803__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__35803__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35803__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35803__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35743__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__35808){
var map__35809 = p__35808;
var map__35809__$1 = cljs.core.__destructure_map(map__35809);
var triage_data = map__35809__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35809__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35809__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35809__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35809__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35809__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35809__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35809__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35809__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5025__auto__ = source;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5025__auto__ = line;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5025__auto__ = class$;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__35814 = phase;
var G__35814__$1 = (((G__35814 instanceof cljs.core.Keyword))?G__35814.fqn:null);
switch (G__35814__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__35815 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__35816 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35817 = loc;
var G__35818 = (cljs.core.truth_(spec)?(function (){var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35819_35949 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35820_35950 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35821_35951 = true;
var _STAR_print_fn_STAR__temp_val__35822_35952 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35821_35951);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35822_35952);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35806_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__35806_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35820_35950);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35819_35949);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__35815,G__35816,G__35817,G__35818) : format.call(null,G__35815,G__35816,G__35817,G__35818));

break;
case "macroexpansion":
var G__35824 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__35825 = cause_type;
var G__35826 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35827 = loc;
var G__35828 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35824,G__35825,G__35826,G__35827,G__35828) : format.call(null,G__35824,G__35825,G__35826,G__35827,G__35828));

break;
case "compile-syntax-check":
var G__35832 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__35833 = cause_type;
var G__35834 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35835 = loc;
var G__35836 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35832,G__35833,G__35834,G__35835,G__35836) : format.call(null,G__35832,G__35833,G__35834,G__35835,G__35836));

break;
case "compilation":
var G__35837 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__35838 = cause_type;
var G__35839 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35840 = loc;
var G__35841 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35837,G__35838,G__35839,G__35840,G__35841) : format.call(null,G__35837,G__35838,G__35839,G__35840,G__35841));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__35842 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__35843 = symbol;
var G__35844 = loc;
var G__35845 = (function (){var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35847_35954 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35848_35955 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35849_35956 = true;
var _STAR_print_fn_STAR__temp_val__35850_35957 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35849_35956);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35850_35957);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35807_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__35807_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35848_35955);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35847_35954);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__35842,G__35843,G__35844,G__35845) : format.call(null,G__35842,G__35843,G__35844,G__35845));
} else {
var G__35856 = "Execution error%s at %s(%s).\n%s\n";
var G__35857 = cause_type;
var G__35858 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35859 = loc;
var G__35860 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35856,G__35857,G__35858,G__35859,G__35860) : format.call(null,G__35856,G__35857,G__35858,G__35859,G__35860));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35814__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
