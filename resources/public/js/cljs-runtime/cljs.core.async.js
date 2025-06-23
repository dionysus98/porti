goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31579 = (function (f,blockable,meta31580){
this.f = f;
this.blockable = blockable;
this.meta31580 = meta31580;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31579.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31581,meta31580__$1){
var self__ = this;
var _31581__$1 = this;
return (new cljs.core.async.t_cljs$core$async31579(self__.f,self__.blockable,meta31580__$1));
}));

(cljs.core.async.t_cljs$core$async31579.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31581){
var self__ = this;
var _31581__$1 = this;
return self__.meta31580;
}));

(cljs.core.async.t_cljs$core$async31579.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31579.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31579.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async31579.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async31579.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta31580","meta31580",1634363732,null)], null);
}));

(cljs.core.async.t_cljs$core$async31579.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31579.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31579");

(cljs.core.async.t_cljs$core$async31579.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async31579");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31579.
 */
cljs.core.async.__GT_t_cljs$core$async31579 = (function cljs$core$async$__GT_t_cljs$core$async31579(f,blockable,meta31580){
return (new cljs.core.async.t_cljs$core$async31579(f,blockable,meta31580));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__31577 = arguments.length;
switch (G__31577) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async31579(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__31630 = arguments.length;
switch (G__31630) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed, then return the value (or nil) forever. See chan for the
 *   semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__31710 = arguments.length;
switch (G__31710) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__31757 = arguments.length;
switch (G__31757) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_34902 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34902) : fn1.call(null,val_34902));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34902) : fn1.call(null,val_34902));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__31799 = arguments.length;
switch (G__31799) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5821__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5821__auto__)){
var ret = temp__5821__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5821__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5821__auto__)){
var retb = temp__5821__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5616__auto___34910 = n;
var x_34911 = (0);
while(true){
if((x_34911 < n__5616__auto___34910)){
(a[x_34911] = x_34911);

var G__34912 = (x_34911 + (1));
x_34911 = G__34912;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31833 = (function (flag,meta31834){
this.flag = flag;
this.meta31834 = meta31834;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31833.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31835,meta31834__$1){
var self__ = this;
var _31835__$1 = this;
return (new cljs.core.async.t_cljs$core$async31833(self__.flag,meta31834__$1));
}));

(cljs.core.async.t_cljs$core$async31833.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31835){
var self__ = this;
var _31835__$1 = this;
return self__.meta31834;
}));

(cljs.core.async.t_cljs$core$async31833.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31833.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async31833.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31833.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async31833.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta31834","meta31834",1360667107,null)], null);
}));

(cljs.core.async.t_cljs$core$async31833.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31833.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31833");

(cljs.core.async.t_cljs$core$async31833.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async31833");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31833.
 */
cljs.core.async.__GT_t_cljs$core$async31833 = (function cljs$core$async$__GT_t_cljs$core$async31833(flag,meta31834){
return (new cljs.core.async.t_cljs$core$async31833(flag,meta31834));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async31833(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31855 = (function (flag,cb,meta31856){
this.flag = flag;
this.cb = cb;
this.meta31856 = meta31856;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31855.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31857,meta31856__$1){
var self__ = this;
var _31857__$1 = this;
return (new cljs.core.async.t_cljs$core$async31855(self__.flag,self__.cb,meta31856__$1));
}));

(cljs.core.async.t_cljs$core$async31855.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31857){
var self__ = this;
var _31857__$1 = this;
return self__.meta31856;
}));

(cljs.core.async.t_cljs$core$async31855.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31855.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async31855.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31855.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async31855.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta31856","meta31856",511832241,null)], null);
}));

(cljs.core.async.t_cljs$core$async31855.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31855.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31855");

(cljs.core.async.t_cljs$core$async31855.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async31855");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31855.
 */
cljs.core.async.__GT_t_cljs$core$async31855 = (function cljs$core$async$__GT_t_cljs$core$async31855(flag,cb,meta31856){
return (new cljs.core.async.t_cljs$core$async31855(flag,cb,meta31856));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async31855(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var ports__$1 = cljs.core.vec(ports);
var n = cljs.core.count(ports__$1);
var _ = (function (){var i = (0);
while(true){
if((i < n)){
var port_34918 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,i);
if(cljs.core.vector_QMARK_(port_34918)){
if((!(((port_34918.cljs$core$IFn$_invoke$arity$1 ? port_34918.cljs$core$IFn$_invoke$arity$1((1)) : port_34918.call(null,(1))) == null)))){
} else {
throw (new Error(["Assert failed: ","can't put nil on channel","\n","(some? (port 1))"].join('')));
}
} else {
}

var G__34919 = (i + (1));
i = G__34919;
continue;
} else {
return null;
}
break;
}
})();
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__31872_SHARP_){
var G__31896 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31872_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31896) : fret.call(null,G__31896));
});})(i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__31875_SHARP_){
var G__31901 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31875_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31901) : fret.call(null,G__31901));
});})(i,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5025__auto__ = wport;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return port;
}
})()], null));
} else {
var G__34920 = (i + (1));
i = G__34920;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5025__auto__ = ret;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5823__auto__ = (function (){var and__5023__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5023__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5023__auto__;
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var got = temp__5823__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___34928 = arguments.length;
var i__5750__auto___34929 = (0);
while(true){
if((i__5750__auto___34929 < len__5749__auto___34928)){
args__5755__auto__.push((arguments[i__5750__auto___34929]));

var G__34933 = (i__5750__auto___34929 + (1));
i__5750__auto___34929 = G__34933;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__31913){
var map__31938 = p__31913;
var map__31938__$1 = cljs.core.__destructure_map(map__31938);
var opts = map__31938__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq31903){
var G__31904 = cljs.core.first(seq31903);
var seq31903__$1 = cljs.core.next(seq31903);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31904,seq31903__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__31966 = arguments.length;
switch (G__31966) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__31441__auto___34937 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31442__auto__ = (function (){var switch__30825__auto__ = (function (state_32031){
var state_val_32032 = (state_32031[(1)]);
if((state_val_32032 === (7))){
var inst_32025 = (state_32031[(2)]);
var state_32031__$1 = state_32031;
var statearr_32034_34938 = state_32031__$1;
(statearr_32034_34938[(2)] = inst_32025);

(statearr_32034_34938[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (1))){
var state_32031__$1 = state_32031;
var statearr_32035_34939 = state_32031__$1;
(statearr_32035_34939[(2)] = null);

(statearr_32035_34939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (4))){
var inst_32003 = (state_32031[(7)]);
var inst_32003__$1 = (state_32031[(2)]);
var inst_32005 = (inst_32003__$1 == null);
var state_32031__$1 = (function (){var statearr_32036 = state_32031;
(statearr_32036[(7)] = inst_32003__$1);

return statearr_32036;
})();
if(cljs.core.truth_(inst_32005)){
var statearr_32037_34940 = state_32031__$1;
(statearr_32037_34940[(1)] = (5));

} else {
var statearr_32038_34941 = state_32031__$1;
(statearr_32038_34941[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (13))){
var state_32031__$1 = state_32031;
var statearr_32040_34942 = state_32031__$1;
(statearr_32040_34942[(2)] = null);

(statearr_32040_34942[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (6))){
var inst_32003 = (state_32031[(7)]);
var state_32031__$1 = state_32031;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32031__$1,(11),to,inst_32003);
} else {
if((state_val_32032 === (3))){
var inst_32027 = (state_32031[(2)]);
var state_32031__$1 = state_32031;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32031__$1,inst_32027);
} else {
if((state_val_32032 === (12))){
var state_32031__$1 = state_32031;
var statearr_32044_34949 = state_32031__$1;
(statearr_32044_34949[(2)] = null);

(statearr_32044_34949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (2))){
var state_32031__$1 = state_32031;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32031__$1,(4),from);
} else {
if((state_val_32032 === (11))){
var inst_32016 = (state_32031[(2)]);
var state_32031__$1 = state_32031;
if(cljs.core.truth_(inst_32016)){
var statearr_32046_34950 = state_32031__$1;
(statearr_32046_34950[(1)] = (12));

} else {
var statearr_32047_34951 = state_32031__$1;
(statearr_32047_34951[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (9))){
var state_32031__$1 = state_32031;
var statearr_32052_34952 = state_32031__$1;
(statearr_32052_34952[(2)] = null);

(statearr_32052_34952[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (5))){
var state_32031__$1 = state_32031;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32054_34956 = state_32031__$1;
(statearr_32054_34956[(1)] = (8));

} else {
var statearr_32055_34958 = state_32031__$1;
(statearr_32055_34958[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (14))){
var inst_32023 = (state_32031[(2)]);
var state_32031__$1 = state_32031;
var statearr_32056_34959 = state_32031__$1;
(statearr_32056_34959[(2)] = inst_32023);

(statearr_32056_34959[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (10))){
var inst_32013 = (state_32031[(2)]);
var state_32031__$1 = state_32031;
var statearr_32057_34960 = state_32031__$1;
(statearr_32057_34960[(2)] = inst_32013);

(statearr_32057_34960[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (8))){
var inst_32010 = cljs.core.async.close_BANG_(to);
var state_32031__$1 = state_32031;
var statearr_32058_34961 = state_32031__$1;
(statearr_32058_34961[(2)] = inst_32010);

(statearr_32058_34961[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30826__auto__ = null;
var cljs$core$async$state_machine__30826__auto____0 = (function (){
var statearr_32062 = [null,null,null,null,null,null,null,null];
(statearr_32062[(0)] = cljs$core$async$state_machine__30826__auto__);

(statearr_32062[(1)] = (1));

return statearr_32062;
});
var cljs$core$async$state_machine__30826__auto____1 = (function (state_32031){
while(true){
var ret_value__30827__auto__ = (function (){try{while(true){
var result__30828__auto__ = switch__30825__auto__(state_32031);
if(cljs.core.keyword_identical_QMARK_(result__30828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30828__auto__;
}
break;
}
}catch (e32063){var ex__30829__auto__ = e32063;
var statearr_32064_34962 = state_32031;
(statearr_32064_34962[(2)] = ex__30829__auto__);


if(cljs.core.seq((state_32031[(4)]))){
var statearr_32066_34963 = state_32031;
(statearr_32066_34963[(1)] = cljs.core.first((state_32031[(4)])));

} else {
throw ex__30829__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34964 = state_32031;
state_32031 = G__34964;
continue;
} else {
return ret_value__30827__auto__;
}
break;
}
});
cljs$core$async$state_machine__30826__auto__ = function(state_32031){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30826__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30826__auto____1.call(this,state_32031);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30826__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30826__auto____0;
cljs$core$async$state_machine__30826__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30826__auto____1;
return cljs$core$async$state_machine__30826__auto__;
})()
})();
var state__31443__auto__ = (function (){var statearr_32067 = f__31442__auto__();
(statearr_32067[(6)] = c__31441__auto___34937);

return statearr_32067;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31443__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__32074){
var vec__32075 = p__32074;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32075,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32075,(1),null);
var job = vec__32075;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__31441__auto___34965 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31442__auto__ = (function (){var switch__30825__auto__ = (function (state_32082){
var state_val_32083 = (state_32082[(1)]);
if((state_val_32083 === (1))){
var state_32082__$1 = state_32082;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32082__$1,(2),res,v);
} else {
if((state_val_32083 === (2))){
var inst_32079 = (state_32082[(2)]);
var inst_32080 = cljs.core.async.close_BANG_(res);
var state_32082__$1 = (function (){var statearr_32089 = state_32082;
(statearr_32089[(7)] = inst_32079);

return statearr_32089;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32082__$1,inst_32080);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30826__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30826__auto____0 = (function (){
var statearr_32096 = [null,null,null,null,null,null,null,null];
(statearr_32096[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30826__auto__);

(statearr_32096[(1)] = (1));

return statearr_32096;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30826__auto____1 = (function (state_32082){
while(true){
var ret_value__30827__auto__ = (function (){try{while(true){
var result__30828__auto__ = switch__30825__auto__(state_32082);
if(cljs.core.keyword_identical_QMARK_(result__30828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30828__auto__;
}
break;
}
}catch (e32098){var ex__30829__auto__ = e32098;
var statearr_32099_34971 = state_32082;
(statearr_32099_34971[(2)] = ex__30829__auto__);


if(cljs.core.seq((state_32082[(4)]))){
var statearr_32100_34973 = state_32082;
(statearr_32100_34973[(1)] = cljs.core.first((state_32082[(4)])));

} else {
throw ex__30829__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34974 = state_32082;
state_32082 = G__34974;
continue;
} else {
return ret_value__30827__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30826__auto__ = function(state_32082){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30826__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30826__auto____1.call(this,state_32082);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30826__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30826__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30826__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30826__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30826__auto__;
})()
})();
var state__31443__auto__ = (function (){var statearr_32101 = f__31442__auto__();
(statearr_32101[(6)] = c__31441__auto___34965);

return statearr_32101;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31443__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__32104){
var vec__32105 = p__32104;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32105,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32105,(1),null);
var job = vec__32105;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5616__auto___34975 = n;
var __34976 = (0);
while(true){
if((__34976 < n__5616__auto___34975)){
var G__32108_34979 = type;
var G__32108_34980__$1 = (((G__32108_34979 instanceof cljs.core.Keyword))?G__32108_34979.fqn:null);
switch (G__32108_34980__$1) {
case "compute":
var c__31441__auto___34982 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34976,c__31441__auto___34982,G__32108_34979,G__32108_34980__$1,n__5616__auto___34975,jobs,results,process__$1,async){
return (function (){
var f__31442__auto__ = (function (){var switch__30825__auto__ = ((function (__34976,c__31441__auto___34982,G__32108_34979,G__32108_34980__$1,n__5616__auto___34975,jobs,results,process__$1,async){
return (function (state_32122){
var state_val_32123 = (state_32122[(1)]);
if((state_val_32123 === (1))){
var state_32122__$1 = state_32122;
var statearr_32124_34992 = state_32122__$1;
(statearr_32124_34992[(2)] = null);

(statearr_32124_34992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32123 === (2))){
var state_32122__$1 = state_32122;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32122__$1,(4),jobs);
} else {
if((state_val_32123 === (3))){
var inst_32120 = (state_32122[(2)]);
var state_32122__$1 = state_32122;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32122__$1,inst_32120);
} else {
if((state_val_32123 === (4))){
var inst_32112 = (state_32122[(2)]);
var inst_32113 = process__$1(inst_32112);
var state_32122__$1 = state_32122;
if(cljs.core.truth_(inst_32113)){
var statearr_32126_34993 = state_32122__$1;
(statearr_32126_34993[(1)] = (5));

} else {
var statearr_32128_34994 = state_32122__$1;
(statearr_32128_34994[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32123 === (5))){
var state_32122__$1 = state_32122;
var statearr_32129_34995 = state_32122__$1;
(statearr_32129_34995[(2)] = null);

(statearr_32129_34995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32123 === (6))){
var state_32122__$1 = state_32122;
var statearr_32130_34996 = state_32122__$1;
(statearr_32130_34996[(2)] = null);

(statearr_32130_34996[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32123 === (7))){
var inst_32118 = (state_32122[(2)]);
var state_32122__$1 = state_32122;
var statearr_32131_34997 = state_32122__$1;
(statearr_32131_34997[(2)] = inst_32118);

(statearr_32131_34997[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__34976,c__31441__auto___34982,G__32108_34979,G__32108_34980__$1,n__5616__auto___34975,jobs,results,process__$1,async))
;
return ((function (__34976,switch__30825__auto__,c__31441__auto___34982,G__32108_34979,G__32108_34980__$1,n__5616__auto___34975,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30826__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30826__auto____0 = (function (){
var statearr_32132 = [null,null,null,null,null,null,null];
(statearr_32132[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30826__auto__);

(statearr_32132[(1)] = (1));

return statearr_32132;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30826__auto____1 = (function (state_32122){
while(true){
var ret_value__30827__auto__ = (function (){try{while(true){
var result__30828__auto__ = switch__30825__auto__(state_32122);
if(cljs.core.keyword_identical_QMARK_(result__30828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30828__auto__;
}
break;
}
}catch (e32133){var ex__30829__auto__ = e32133;
var statearr_32134_35007 = state_32122;
(statearr_32134_35007[(2)] = ex__30829__auto__);


if(cljs.core.seq((state_32122[(4)]))){
var statearr_32136_35009 = state_32122;
(statearr_32136_35009[(1)] = cljs.core.first((state_32122[(4)])));

} else {
throw ex__30829__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35014 = state_32122;
state_32122 = G__35014;
continue;
} else {
return ret_value__30827__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30826__auto__ = function(state_32122){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30826__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30826__auto____1.call(this,state_32122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30826__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30826__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30826__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30826__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30826__auto__;
})()
;})(__34976,switch__30825__auto__,c__31441__auto___34982,G__32108_34979,G__32108_34980__$1,n__5616__auto___34975,jobs,results,process__$1,async))
})();
var state__31443__auto__ = (function (){var statearr_32138 = f__31442__auto__();
(statearr_32138[(6)] = c__31441__auto___34982);

return statearr_32138;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31443__auto__);
});})(__34976,c__31441__auto___34982,G__32108_34979,G__32108_34980__$1,n__5616__auto___34975,jobs,results,process__$1,async))
);


break;
case "async":
var c__31441__auto___35015 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34976,c__31441__auto___35015,G__32108_34979,G__32108_34980__$1,n__5616__auto___34975,jobs,results,process__$1,async){
return (function (){
var f__31442__auto__ = (function (){var switch__30825__auto__ = ((function (__34976,c__31441__auto___35015,G__32108_34979,G__32108_34980__$1,n__5616__auto___34975,jobs,results,process__$1,async){
return (function (state_32156){
var state_val_32157 = (state_32156[(1)]);
if((state_val_32157 === (1))){
var state_32156__$1 = state_32156;
var statearr_32164_35016 = state_32156__$1;
(statearr_32164_35016[(2)] = null);

(statearr_32164_35016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32157 === (2))){
var state_32156__$1 = state_32156;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32156__$1,(4),jobs);
} else {
if((state_val_32157 === (3))){
var inst_32154 = (state_32156[(2)]);
var state_32156__$1 = state_32156;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32156__$1,inst_32154);
} else {
if((state_val_32157 === (4))){
var inst_32145 = (state_32156[(2)]);
var inst_32146 = async(inst_32145);
var state_32156__$1 = state_32156;
if(cljs.core.truth_(inst_32146)){
var statearr_32167_35017 = state_32156__$1;
(statearr_32167_35017[(1)] = (5));

} else {
var statearr_32169_35018 = state_32156__$1;
(statearr_32169_35018[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32157 === (5))){
var state_32156__$1 = state_32156;
var statearr_32170_35019 = state_32156__$1;
(statearr_32170_35019[(2)] = null);

(statearr_32170_35019[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32157 === (6))){
var state_32156__$1 = state_32156;
var statearr_32171_35020 = state_32156__$1;
(statearr_32171_35020[(2)] = null);

(statearr_32171_35020[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32157 === (7))){
var inst_32152 = (state_32156[(2)]);
var state_32156__$1 = state_32156;
var statearr_32172_35021 = state_32156__$1;
(statearr_32172_35021[(2)] = inst_32152);

(statearr_32172_35021[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__34976,c__31441__auto___35015,G__32108_34979,G__32108_34980__$1,n__5616__auto___34975,jobs,results,process__$1,async))
;
return ((function (__34976,switch__30825__auto__,c__31441__auto___35015,G__32108_34979,G__32108_34980__$1,n__5616__auto___34975,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30826__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30826__auto____0 = (function (){
var statearr_32174 = [null,null,null,null,null,null,null];
(statearr_32174[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30826__auto__);

(statearr_32174[(1)] = (1));

return statearr_32174;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30826__auto____1 = (function (state_32156){
while(true){
var ret_value__30827__auto__ = (function (){try{while(true){
var result__30828__auto__ = switch__30825__auto__(state_32156);
if(cljs.core.keyword_identical_QMARK_(result__30828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30828__auto__;
}
break;
}
}catch (e32175){var ex__30829__auto__ = e32175;
var statearr_32176_35022 = state_32156;
(statearr_32176_35022[(2)] = ex__30829__auto__);


if(cljs.core.seq((state_32156[(4)]))){
var statearr_32177_35023 = state_32156;
(statearr_32177_35023[(1)] = cljs.core.first((state_32156[(4)])));

} else {
throw ex__30829__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35024 = state_32156;
state_32156 = G__35024;
continue;
} else {
return ret_value__30827__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30826__auto__ = function(state_32156){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30826__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30826__auto____1.call(this,state_32156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30826__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30826__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30826__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30826__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30826__auto__;
})()
;})(__34976,switch__30825__auto__,c__31441__auto___35015,G__32108_34979,G__32108_34980__$1,n__5616__auto___34975,jobs,results,process__$1,async))
})();
var state__31443__auto__ = (function (){var statearr_32178 = f__31442__auto__();
(statearr_32178[(6)] = c__31441__auto___35015);

return statearr_32178;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31443__auto__);
});})(__34976,c__31441__auto___35015,G__32108_34979,G__32108_34980__$1,n__5616__auto___34975,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32108_34980__$1)].join('')));

}

var G__35025 = (__34976 + (1));
__34976 = G__35025;
continue;
} else {
}
break;
}

var c__31441__auto___35026 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31442__auto__ = (function (){var switch__30825__auto__ = (function (state_32202){
var state_val_32203 = (state_32202[(1)]);
if((state_val_32203 === (7))){
var inst_32198 = (state_32202[(2)]);
var state_32202__$1 = state_32202;
var statearr_32205_35027 = state_32202__$1;
(statearr_32205_35027[(2)] = inst_32198);

(statearr_32205_35027[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32203 === (1))){
var state_32202__$1 = state_32202;
var statearr_32206_35028 = state_32202__$1;
(statearr_32206_35028[(2)] = null);

(statearr_32206_35028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32203 === (4))){
var inst_32181 = (state_32202[(7)]);
var inst_32181__$1 = (state_32202[(2)]);
var inst_32182 = (inst_32181__$1 == null);
var state_32202__$1 = (function (){var statearr_32208 = state_32202;
(statearr_32208[(7)] = inst_32181__$1);

return statearr_32208;
})();
if(cljs.core.truth_(inst_32182)){
var statearr_32209_35032 = state_32202__$1;
(statearr_32209_35032[(1)] = (5));

} else {
var statearr_32210_35033 = state_32202__$1;
(statearr_32210_35033[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32203 === (6))){
var inst_32181 = (state_32202[(7)]);
var inst_32188 = (state_32202[(8)]);
var inst_32188__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_32189 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32190 = [inst_32181,inst_32188__$1];
var inst_32191 = (new cljs.core.PersistentVector(null,2,(5),inst_32189,inst_32190,null));
var state_32202__$1 = (function (){var statearr_32211 = state_32202;
(statearr_32211[(8)] = inst_32188__$1);

return statearr_32211;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32202__$1,(8),jobs,inst_32191);
} else {
if((state_val_32203 === (3))){
var inst_32200 = (state_32202[(2)]);
var state_32202__$1 = state_32202;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32202__$1,inst_32200);
} else {
if((state_val_32203 === (2))){
var state_32202__$1 = state_32202;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32202__$1,(4),from);
} else {
if((state_val_32203 === (9))){
var inst_32195 = (state_32202[(2)]);
var state_32202__$1 = (function (){var statearr_32217 = state_32202;
(statearr_32217[(9)] = inst_32195);

return statearr_32217;
})();
var statearr_32219_35037 = state_32202__$1;
(statearr_32219_35037[(2)] = null);

(statearr_32219_35037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32203 === (5))){
var inst_32184 = cljs.core.async.close_BANG_(jobs);
var state_32202__$1 = state_32202;
var statearr_32220_35038 = state_32202__$1;
(statearr_32220_35038[(2)] = inst_32184);

(statearr_32220_35038[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32203 === (8))){
var inst_32188 = (state_32202[(8)]);
var inst_32193 = (state_32202[(2)]);
var state_32202__$1 = (function (){var statearr_32221 = state_32202;
(statearr_32221[(10)] = inst_32193);

return statearr_32221;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32202__$1,(9),results,inst_32188);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30826__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30826__auto____0 = (function (){
var statearr_32224 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32224[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30826__auto__);

(statearr_32224[(1)] = (1));

return statearr_32224;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30826__auto____1 = (function (state_32202){
while(true){
var ret_value__30827__auto__ = (function (){try{while(true){
var result__30828__auto__ = switch__30825__auto__(state_32202);
if(cljs.core.keyword_identical_QMARK_(result__30828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30828__auto__;
}
break;
}
}catch (e32225){var ex__30829__auto__ = e32225;
var statearr_32226_35039 = state_32202;
(statearr_32226_35039[(2)] = ex__30829__auto__);


if(cljs.core.seq((state_32202[(4)]))){
var statearr_32227_35040 = state_32202;
(statearr_32227_35040[(1)] = cljs.core.first((state_32202[(4)])));

} else {
throw ex__30829__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35041 = state_32202;
state_32202 = G__35041;
continue;
} else {
return ret_value__30827__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30826__auto__ = function(state_32202){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30826__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30826__auto____1.call(this,state_32202);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30826__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30826__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30826__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30826__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30826__auto__;
})()
})();
var state__31443__auto__ = (function (){var statearr_32228 = f__31442__auto__();
(statearr_32228[(6)] = c__31441__auto___35026);

return statearr_32228;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31443__auto__);
}));


var c__31441__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31442__auto__ = (function (){var switch__30825__auto__ = (function (state_32271){
var state_val_32272 = (state_32271[(1)]);
if((state_val_32272 === (7))){
var inst_32267 = (state_32271[(2)]);
var state_32271__$1 = state_32271;
var statearr_32273_35043 = state_32271__$1;
(statearr_32273_35043[(2)] = inst_32267);

(statearr_32273_35043[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32272 === (20))){
var state_32271__$1 = state_32271;
var statearr_32274_35044 = state_32271__$1;
(statearr_32274_35044[(2)] = null);

(statearr_32274_35044[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32272 === (1))){
var state_32271__$1 = state_32271;
var statearr_32275_35045 = state_32271__$1;
(statearr_32275_35045[(2)] = null);

(statearr_32275_35045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32272 === (4))){
var inst_32232 = (state_32271[(7)]);
var inst_32232__$1 = (state_32271[(2)]);
var inst_32233 = (inst_32232__$1 == null);
var state_32271__$1 = (function (){var statearr_32277 = state_32271;
(statearr_32277[(7)] = inst_32232__$1);

return statearr_32277;
})();
if(cljs.core.truth_(inst_32233)){
var statearr_32278_35047 = state_32271__$1;
(statearr_32278_35047[(1)] = (5));

} else {
var statearr_32279_35048 = state_32271__$1;
(statearr_32279_35048[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32272 === (15))){
var inst_32245 = (state_32271[(8)]);
var state_32271__$1 = state_32271;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32271__$1,(18),to,inst_32245);
} else {
if((state_val_32272 === (21))){
var inst_32262 = (state_32271[(2)]);
var state_32271__$1 = state_32271;
var statearr_32280_35052 = state_32271__$1;
(statearr_32280_35052[(2)] = inst_32262);

(statearr_32280_35052[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32272 === (13))){
var inst_32264 = (state_32271[(2)]);
var state_32271__$1 = (function (){var statearr_32281 = state_32271;
(statearr_32281[(9)] = inst_32264);

return statearr_32281;
})();
var statearr_32282_35053 = state_32271__$1;
(statearr_32282_35053[(2)] = null);

(statearr_32282_35053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32272 === (6))){
var inst_32232 = (state_32271[(7)]);
var state_32271__$1 = state_32271;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32271__$1,(11),inst_32232);
} else {
if((state_val_32272 === (17))){
var inst_32256 = (state_32271[(2)]);
var state_32271__$1 = state_32271;
if(cljs.core.truth_(inst_32256)){
var statearr_32291_35054 = state_32271__$1;
(statearr_32291_35054[(1)] = (19));

} else {
var statearr_32292_35055 = state_32271__$1;
(statearr_32292_35055[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32272 === (3))){
var inst_32269 = (state_32271[(2)]);
var state_32271__$1 = state_32271;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32271__$1,inst_32269);
} else {
if((state_val_32272 === (12))){
var inst_32242 = (state_32271[(10)]);
var state_32271__$1 = state_32271;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32271__$1,(14),inst_32242);
} else {
if((state_val_32272 === (2))){
var state_32271__$1 = state_32271;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32271__$1,(4),results);
} else {
if((state_val_32272 === (19))){
var state_32271__$1 = state_32271;
var statearr_32298_35056 = state_32271__$1;
(statearr_32298_35056[(2)] = null);

(statearr_32298_35056[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32272 === (11))){
var inst_32242 = (state_32271[(2)]);
var state_32271__$1 = (function (){var statearr_32301 = state_32271;
(statearr_32301[(10)] = inst_32242);

return statearr_32301;
})();
var statearr_32302_35060 = state_32271__$1;
(statearr_32302_35060[(2)] = null);

(statearr_32302_35060[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32272 === (9))){
var state_32271__$1 = state_32271;
var statearr_32303_35061 = state_32271__$1;
(statearr_32303_35061[(2)] = null);

(statearr_32303_35061[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32272 === (5))){
var state_32271__$1 = state_32271;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32304_35062 = state_32271__$1;
(statearr_32304_35062[(1)] = (8));

} else {
var statearr_32305_35063 = state_32271__$1;
(statearr_32305_35063[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32272 === (14))){
var inst_32245 = (state_32271[(8)]);
var inst_32247 = (state_32271[(11)]);
var inst_32245__$1 = (state_32271[(2)]);
var inst_32246 = (inst_32245__$1 == null);
var inst_32247__$1 = cljs.core.not(inst_32246);
var state_32271__$1 = (function (){var statearr_32306 = state_32271;
(statearr_32306[(8)] = inst_32245__$1);

(statearr_32306[(11)] = inst_32247__$1);

return statearr_32306;
})();
if(inst_32247__$1){
var statearr_32307_35064 = state_32271__$1;
(statearr_32307_35064[(1)] = (15));

} else {
var statearr_32309_35065 = state_32271__$1;
(statearr_32309_35065[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32272 === (16))){
var inst_32247 = (state_32271[(11)]);
var state_32271__$1 = state_32271;
var statearr_32312_35067 = state_32271__$1;
(statearr_32312_35067[(2)] = inst_32247);

(statearr_32312_35067[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32272 === (10))){
var inst_32239 = (state_32271[(2)]);
var state_32271__$1 = state_32271;
var statearr_32313_35068 = state_32271__$1;
(statearr_32313_35068[(2)] = inst_32239);

(statearr_32313_35068[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32272 === (18))){
var inst_32251 = (state_32271[(2)]);
var state_32271__$1 = state_32271;
var statearr_32314_35069 = state_32271__$1;
(statearr_32314_35069[(2)] = inst_32251);

(statearr_32314_35069[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32272 === (8))){
var inst_32236 = cljs.core.async.close_BANG_(to);
var state_32271__$1 = state_32271;
var statearr_32318_35073 = state_32271__$1;
(statearr_32318_35073[(2)] = inst_32236);

(statearr_32318_35073[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30826__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30826__auto____0 = (function (){
var statearr_32323 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32323[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30826__auto__);

(statearr_32323[(1)] = (1));

return statearr_32323;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30826__auto____1 = (function (state_32271){
while(true){
var ret_value__30827__auto__ = (function (){try{while(true){
var result__30828__auto__ = switch__30825__auto__(state_32271);
if(cljs.core.keyword_identical_QMARK_(result__30828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30828__auto__;
}
break;
}
}catch (e32324){var ex__30829__auto__ = e32324;
var statearr_32325_35077 = state_32271;
(statearr_32325_35077[(2)] = ex__30829__auto__);


if(cljs.core.seq((state_32271[(4)]))){
var statearr_32326_35078 = state_32271;
(statearr_32326_35078[(1)] = cljs.core.first((state_32271[(4)])));

} else {
throw ex__30829__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35079 = state_32271;
state_32271 = G__35079;
continue;
} else {
return ret_value__30827__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30826__auto__ = function(state_32271){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30826__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30826__auto____1.call(this,state_32271);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30826__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30826__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30826__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30826__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30826__auto__;
})()
})();
var state__31443__auto__ = (function (){var statearr_32327 = f__31442__auto__();
(statearr_32327[(6)] = c__31441__auto__);

return statearr_32327;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31443__auto__);
}));

return c__31441__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__32330 = arguments.length;
switch (G__32330) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__32335 = arguments.length;
switch (G__32335) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__32350 = arguments.length;
switch (G__32350) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__31441__auto___35089 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31442__auto__ = (function (){var switch__30825__auto__ = (function (state_32382){
var state_val_32383 = (state_32382[(1)]);
if((state_val_32383 === (7))){
var inst_32378 = (state_32382[(2)]);
var state_32382__$1 = state_32382;
var statearr_32386_35091 = state_32382__$1;
(statearr_32386_35091[(2)] = inst_32378);

(statearr_32386_35091[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32383 === (1))){
var state_32382__$1 = state_32382;
var statearr_32394_35092 = state_32382__$1;
(statearr_32394_35092[(2)] = null);

(statearr_32394_35092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32383 === (4))){
var inst_32359 = (state_32382[(7)]);
var inst_32359__$1 = (state_32382[(2)]);
var inst_32360 = (inst_32359__$1 == null);
var state_32382__$1 = (function (){var statearr_32395 = state_32382;
(statearr_32395[(7)] = inst_32359__$1);

return statearr_32395;
})();
if(cljs.core.truth_(inst_32360)){
var statearr_32397_35093 = state_32382__$1;
(statearr_32397_35093[(1)] = (5));

} else {
var statearr_32398_35094 = state_32382__$1;
(statearr_32398_35094[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32383 === (13))){
var state_32382__$1 = state_32382;
var statearr_32400_35095 = state_32382__$1;
(statearr_32400_35095[(2)] = null);

(statearr_32400_35095[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32383 === (6))){
var inst_32359 = (state_32382[(7)]);
var inst_32365 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32359) : p.call(null,inst_32359));
var state_32382__$1 = state_32382;
if(cljs.core.truth_(inst_32365)){
var statearr_32404_35096 = state_32382__$1;
(statearr_32404_35096[(1)] = (9));

} else {
var statearr_32405_35097 = state_32382__$1;
(statearr_32405_35097[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32383 === (3))){
var inst_32380 = (state_32382[(2)]);
var state_32382__$1 = state_32382;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32382__$1,inst_32380);
} else {
if((state_val_32383 === (12))){
var state_32382__$1 = state_32382;
var statearr_32410_35098 = state_32382__$1;
(statearr_32410_35098[(2)] = null);

(statearr_32410_35098[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32383 === (2))){
var state_32382__$1 = state_32382;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32382__$1,(4),ch);
} else {
if((state_val_32383 === (11))){
var inst_32359 = (state_32382[(7)]);
var inst_32369 = (state_32382[(2)]);
var state_32382__$1 = state_32382;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32382__$1,(8),inst_32369,inst_32359);
} else {
if((state_val_32383 === (9))){
var state_32382__$1 = state_32382;
var statearr_32412_35099 = state_32382__$1;
(statearr_32412_35099[(2)] = tc);

(statearr_32412_35099[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32383 === (5))){
var inst_32362 = cljs.core.async.close_BANG_(tc);
var inst_32363 = cljs.core.async.close_BANG_(fc);
var state_32382__$1 = (function (){var statearr_32414 = state_32382;
(statearr_32414[(8)] = inst_32362);

return statearr_32414;
})();
var statearr_32415_35100 = state_32382__$1;
(statearr_32415_35100[(2)] = inst_32363);

(statearr_32415_35100[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32383 === (14))){
var inst_32376 = (state_32382[(2)]);
var state_32382__$1 = state_32382;
var statearr_32422_35101 = state_32382__$1;
(statearr_32422_35101[(2)] = inst_32376);

(statearr_32422_35101[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32383 === (10))){
var state_32382__$1 = state_32382;
var statearr_32424_35102 = state_32382__$1;
(statearr_32424_35102[(2)] = fc);

(statearr_32424_35102[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32383 === (8))){
var inst_32371 = (state_32382[(2)]);
var state_32382__$1 = state_32382;
if(cljs.core.truth_(inst_32371)){
var statearr_32425_35103 = state_32382__$1;
(statearr_32425_35103[(1)] = (12));

} else {
var statearr_32427_35104 = state_32382__$1;
(statearr_32427_35104[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30826__auto__ = null;
var cljs$core$async$state_machine__30826__auto____0 = (function (){
var statearr_32429 = [null,null,null,null,null,null,null,null,null];
(statearr_32429[(0)] = cljs$core$async$state_machine__30826__auto__);

(statearr_32429[(1)] = (1));

return statearr_32429;
});
var cljs$core$async$state_machine__30826__auto____1 = (function (state_32382){
while(true){
var ret_value__30827__auto__ = (function (){try{while(true){
var result__30828__auto__ = switch__30825__auto__(state_32382);
if(cljs.core.keyword_identical_QMARK_(result__30828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30828__auto__;
}
break;
}
}catch (e32430){var ex__30829__auto__ = e32430;
var statearr_32431_35105 = state_32382;
(statearr_32431_35105[(2)] = ex__30829__auto__);


if(cljs.core.seq((state_32382[(4)]))){
var statearr_32434_35106 = state_32382;
(statearr_32434_35106[(1)] = cljs.core.first((state_32382[(4)])));

} else {
throw ex__30829__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35111 = state_32382;
state_32382 = G__35111;
continue;
} else {
return ret_value__30827__auto__;
}
break;
}
});
cljs$core$async$state_machine__30826__auto__ = function(state_32382){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30826__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30826__auto____1.call(this,state_32382);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30826__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30826__auto____0;
cljs$core$async$state_machine__30826__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30826__auto____1;
return cljs$core$async$state_machine__30826__auto__;
})()
})();
var state__31443__auto__ = (function (){var statearr_32437 = f__31442__auto__();
(statearr_32437[(6)] = c__31441__auto___35089);

return statearr_32437;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31443__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__31441__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31442__auto__ = (function (){var switch__30825__auto__ = (function (state_32463){
var state_val_32464 = (state_32463[(1)]);
if((state_val_32464 === (7))){
var inst_32459 = (state_32463[(2)]);
var state_32463__$1 = state_32463;
var statearr_32470_35112 = state_32463__$1;
(statearr_32470_35112[(2)] = inst_32459);

(statearr_32470_35112[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32464 === (1))){
var inst_32439 = init;
var inst_32440 = inst_32439;
var state_32463__$1 = (function (){var statearr_32471 = state_32463;
(statearr_32471[(7)] = inst_32440);

return statearr_32471;
})();
var statearr_32472_35113 = state_32463__$1;
(statearr_32472_35113[(2)] = null);

(statearr_32472_35113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32464 === (4))){
var inst_32443 = (state_32463[(8)]);
var inst_32443__$1 = (state_32463[(2)]);
var inst_32444 = (inst_32443__$1 == null);
var state_32463__$1 = (function (){var statearr_32473 = state_32463;
(statearr_32473[(8)] = inst_32443__$1);

return statearr_32473;
})();
if(cljs.core.truth_(inst_32444)){
var statearr_32474_35118 = state_32463__$1;
(statearr_32474_35118[(1)] = (5));

} else {
var statearr_32475_35119 = state_32463__$1;
(statearr_32475_35119[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32464 === (6))){
var inst_32440 = (state_32463[(7)]);
var inst_32443 = (state_32463[(8)]);
var inst_32449 = (state_32463[(9)]);
var inst_32449__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_32440,inst_32443) : f.call(null,inst_32440,inst_32443));
var inst_32450 = cljs.core.reduced_QMARK_(inst_32449__$1);
var state_32463__$1 = (function (){var statearr_32477 = state_32463;
(statearr_32477[(9)] = inst_32449__$1);

return statearr_32477;
})();
if(inst_32450){
var statearr_32478_35120 = state_32463__$1;
(statearr_32478_35120[(1)] = (8));

} else {
var statearr_32479_35121 = state_32463__$1;
(statearr_32479_35121[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32464 === (3))){
var inst_32461 = (state_32463[(2)]);
var state_32463__$1 = state_32463;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32463__$1,inst_32461);
} else {
if((state_val_32464 === (2))){
var state_32463__$1 = state_32463;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32463__$1,(4),ch);
} else {
if((state_val_32464 === (9))){
var inst_32449 = (state_32463[(9)]);
var inst_32440 = inst_32449;
var state_32463__$1 = (function (){var statearr_32480 = state_32463;
(statearr_32480[(7)] = inst_32440);

return statearr_32480;
})();
var statearr_32481_35122 = state_32463__$1;
(statearr_32481_35122[(2)] = null);

(statearr_32481_35122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32464 === (5))){
var inst_32440 = (state_32463[(7)]);
var state_32463__$1 = state_32463;
var statearr_32484_35123 = state_32463__$1;
(statearr_32484_35123[(2)] = inst_32440);

(statearr_32484_35123[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32464 === (10))){
var inst_32457 = (state_32463[(2)]);
var state_32463__$1 = state_32463;
var statearr_32485_35124 = state_32463__$1;
(statearr_32485_35124[(2)] = inst_32457);

(statearr_32485_35124[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32464 === (8))){
var inst_32449 = (state_32463[(9)]);
var inst_32453 = cljs.core.deref(inst_32449);
var state_32463__$1 = state_32463;
var statearr_32486_35125 = state_32463__$1;
(statearr_32486_35125[(2)] = inst_32453);

(statearr_32486_35125[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__30826__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30826__auto____0 = (function (){
var statearr_32487 = [null,null,null,null,null,null,null,null,null,null];
(statearr_32487[(0)] = cljs$core$async$reduce_$_state_machine__30826__auto__);

(statearr_32487[(1)] = (1));

return statearr_32487;
});
var cljs$core$async$reduce_$_state_machine__30826__auto____1 = (function (state_32463){
while(true){
var ret_value__30827__auto__ = (function (){try{while(true){
var result__30828__auto__ = switch__30825__auto__(state_32463);
if(cljs.core.keyword_identical_QMARK_(result__30828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30828__auto__;
}
break;
}
}catch (e32488){var ex__30829__auto__ = e32488;
var statearr_32489_35126 = state_32463;
(statearr_32489_35126[(2)] = ex__30829__auto__);


if(cljs.core.seq((state_32463[(4)]))){
var statearr_32490_35127 = state_32463;
(statearr_32490_35127[(1)] = cljs.core.first((state_32463[(4)])));

} else {
throw ex__30829__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35128 = state_32463;
state_32463 = G__35128;
continue;
} else {
return ret_value__30827__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30826__auto__ = function(state_32463){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30826__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30826__auto____1.call(this,state_32463);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__30826__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30826__auto____0;
cljs$core$async$reduce_$_state_machine__30826__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30826__auto____1;
return cljs$core$async$reduce_$_state_machine__30826__auto__;
})()
})();
var state__31443__auto__ = (function (){var statearr_32496 = f__31442__auto__();
(statearr_32496[(6)] = c__31441__auto__);

return statearr_32496;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31443__auto__);
}));

return c__31441__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__31441__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31442__auto__ = (function (){var switch__30825__auto__ = (function (state_32504){
var state_val_32505 = (state_32504[(1)]);
if((state_val_32505 === (1))){
var inst_32498 = cljs.core.async.reduce(f__$1,init,ch);
var state_32504__$1 = state_32504;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32504__$1,(2),inst_32498);
} else {
if((state_val_32505 === (2))){
var inst_32501 = (state_32504[(2)]);
var inst_32502 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_32501) : f__$1.call(null,inst_32501));
var state_32504__$1 = state_32504;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32504__$1,inst_32502);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__30826__auto__ = null;
var cljs$core$async$transduce_$_state_machine__30826__auto____0 = (function (){
var statearr_32507 = [null,null,null,null,null,null,null];
(statearr_32507[(0)] = cljs$core$async$transduce_$_state_machine__30826__auto__);

(statearr_32507[(1)] = (1));

return statearr_32507;
});
var cljs$core$async$transduce_$_state_machine__30826__auto____1 = (function (state_32504){
while(true){
var ret_value__30827__auto__ = (function (){try{while(true){
var result__30828__auto__ = switch__30825__auto__(state_32504);
if(cljs.core.keyword_identical_QMARK_(result__30828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30828__auto__;
}
break;
}
}catch (e32508){var ex__30829__auto__ = e32508;
var statearr_32509_35129 = state_32504;
(statearr_32509_35129[(2)] = ex__30829__auto__);


if(cljs.core.seq((state_32504[(4)]))){
var statearr_32511_35130 = state_32504;
(statearr_32511_35130[(1)] = cljs.core.first((state_32504[(4)])));

} else {
throw ex__30829__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35137 = state_32504;
state_32504 = G__35137;
continue;
} else {
return ret_value__30827__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__30826__auto__ = function(state_32504){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__30826__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__30826__auto____1.call(this,state_32504);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__30826__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__30826__auto____0;
cljs$core$async$transduce_$_state_machine__30826__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__30826__auto____1;
return cljs$core$async$transduce_$_state_machine__30826__auto__;
})()
})();
var state__31443__auto__ = (function (){var statearr_32516 = f__31442__auto__();
(statearr_32516[(6)] = c__31441__auto__);

return statearr_32516;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31443__auto__);
}));

return c__31441__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__32518 = arguments.length;
switch (G__32518) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__31441__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31442__auto__ = (function (){var switch__30825__auto__ = (function (state_32551){
var state_val_32552 = (state_32551[(1)]);
if((state_val_32552 === (7))){
var inst_32533 = (state_32551[(2)]);
var state_32551__$1 = state_32551;
var statearr_32564_35139 = state_32551__$1;
(statearr_32564_35139[(2)] = inst_32533);

(statearr_32564_35139[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32552 === (1))){
var inst_32526 = cljs.core.seq(coll);
var inst_32527 = inst_32526;
var state_32551__$1 = (function (){var statearr_32565 = state_32551;
(statearr_32565[(7)] = inst_32527);

return statearr_32565;
})();
var statearr_32566_35140 = state_32551__$1;
(statearr_32566_35140[(2)] = null);

(statearr_32566_35140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32552 === (4))){
var inst_32527 = (state_32551[(7)]);
var inst_32531 = cljs.core.first(inst_32527);
var state_32551__$1 = state_32551;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32551__$1,(7),ch,inst_32531);
} else {
if((state_val_32552 === (13))){
var inst_32545 = (state_32551[(2)]);
var state_32551__$1 = state_32551;
var statearr_32568_35141 = state_32551__$1;
(statearr_32568_35141[(2)] = inst_32545);

(statearr_32568_35141[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32552 === (6))){
var inst_32536 = (state_32551[(2)]);
var state_32551__$1 = state_32551;
if(cljs.core.truth_(inst_32536)){
var statearr_32569_35142 = state_32551__$1;
(statearr_32569_35142[(1)] = (8));

} else {
var statearr_32570_35143 = state_32551__$1;
(statearr_32570_35143[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32552 === (3))){
var inst_32549 = (state_32551[(2)]);
var state_32551__$1 = state_32551;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32551__$1,inst_32549);
} else {
if((state_val_32552 === (12))){
var state_32551__$1 = state_32551;
var statearr_32577_35144 = state_32551__$1;
(statearr_32577_35144[(2)] = null);

(statearr_32577_35144[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32552 === (2))){
var inst_32527 = (state_32551[(7)]);
var state_32551__$1 = state_32551;
if(cljs.core.truth_(inst_32527)){
var statearr_32578_35145 = state_32551__$1;
(statearr_32578_35145[(1)] = (4));

} else {
var statearr_32580_35146 = state_32551__$1;
(statearr_32580_35146[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32552 === (11))){
var inst_32542 = cljs.core.async.close_BANG_(ch);
var state_32551__$1 = state_32551;
var statearr_32582_35147 = state_32551__$1;
(statearr_32582_35147[(2)] = inst_32542);

(statearr_32582_35147[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32552 === (9))){
var state_32551__$1 = state_32551;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32583_35148 = state_32551__$1;
(statearr_32583_35148[(1)] = (11));

} else {
var statearr_32584_35149 = state_32551__$1;
(statearr_32584_35149[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32552 === (5))){
var inst_32527 = (state_32551[(7)]);
var state_32551__$1 = state_32551;
var statearr_32585_35150 = state_32551__$1;
(statearr_32585_35150[(2)] = inst_32527);

(statearr_32585_35150[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32552 === (10))){
var inst_32547 = (state_32551[(2)]);
var state_32551__$1 = state_32551;
var statearr_32586_35151 = state_32551__$1;
(statearr_32586_35151[(2)] = inst_32547);

(statearr_32586_35151[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32552 === (8))){
var inst_32527 = (state_32551[(7)]);
var inst_32538 = cljs.core.next(inst_32527);
var inst_32527__$1 = inst_32538;
var state_32551__$1 = (function (){var statearr_32593 = state_32551;
(statearr_32593[(7)] = inst_32527__$1);

return statearr_32593;
})();
var statearr_32594_35152 = state_32551__$1;
(statearr_32594_35152[(2)] = null);

(statearr_32594_35152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30826__auto__ = null;
var cljs$core$async$state_machine__30826__auto____0 = (function (){
var statearr_32600 = [null,null,null,null,null,null,null,null];
(statearr_32600[(0)] = cljs$core$async$state_machine__30826__auto__);

(statearr_32600[(1)] = (1));

return statearr_32600;
});
var cljs$core$async$state_machine__30826__auto____1 = (function (state_32551){
while(true){
var ret_value__30827__auto__ = (function (){try{while(true){
var result__30828__auto__ = switch__30825__auto__(state_32551);
if(cljs.core.keyword_identical_QMARK_(result__30828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30828__auto__;
}
break;
}
}catch (e32601){var ex__30829__auto__ = e32601;
var statearr_32602_35155 = state_32551;
(statearr_32602_35155[(2)] = ex__30829__auto__);


if(cljs.core.seq((state_32551[(4)]))){
var statearr_32603_35156 = state_32551;
(statearr_32603_35156[(1)] = cljs.core.first((state_32551[(4)])));

} else {
throw ex__30829__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35157 = state_32551;
state_32551 = G__35157;
continue;
} else {
return ret_value__30827__auto__;
}
break;
}
});
cljs$core$async$state_machine__30826__auto__ = function(state_32551){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30826__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30826__auto____1.call(this,state_32551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30826__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30826__auto____0;
cljs$core$async$state_machine__30826__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30826__auto____1;
return cljs$core$async$state_machine__30826__auto__;
})()
})();
var state__31443__auto__ = (function (){var statearr_32613 = f__31442__auto__();
(statearr_32613[(6)] = c__31441__auto__);

return statearr_32613;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31443__auto__);
}));

return c__31441__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__32616 = arguments.length;
switch (G__32616) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_35159 = (function (_){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5374__auto__.call(null,_));
} else {
var m__5372__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5372__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_35159(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_35160 = (function (m,ch,close_QMARK_){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5374__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5372__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5372__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_35160(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_35161 = (function (m,ch){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5374__auto__.call(null,m,ch));
} else {
var m__5372__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5372__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_35161(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_35165 = (function (m){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5374__auto__.call(null,m));
} else {
var m__5372__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5372__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_35165(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32675 = (function (ch,cs,meta32676){
this.ch = ch;
this.cs = cs;
this.meta32676 = meta32676;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32675.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32677,meta32676__$1){
var self__ = this;
var _32677__$1 = this;
return (new cljs.core.async.t_cljs$core$async32675(self__.ch,self__.cs,meta32676__$1));
}));

(cljs.core.async.t_cljs$core$async32675.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32677){
var self__ = this;
var _32677__$1 = this;
return self__.meta32676;
}));

(cljs.core.async.t_cljs$core$async32675.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32675.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async32675.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32675.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async32675.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async32675.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async32675.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta32676","meta32676",-1190766827,null)], null);
}));

(cljs.core.async.t_cljs$core$async32675.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32675.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32675");

(cljs.core.async.t_cljs$core$async32675.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async32675");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32675.
 */
cljs.core.async.__GT_t_cljs$core$async32675 = (function cljs$core$async$__GT_t_cljs$core$async32675(ch,cs,meta32676){
return (new cljs.core.async.t_cljs$core$async32675(ch,cs,meta32676));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async32675(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__31441__auto___35166 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31442__auto__ = (function (){var switch__30825__auto__ = (function (state_32884){
var state_val_32886 = (state_32884[(1)]);
if((state_val_32886 === (7))){
var inst_32874 = (state_32884[(2)]);
var state_32884__$1 = state_32884;
var statearr_32898_35167 = state_32884__$1;
(statearr_32898_35167[(2)] = inst_32874);

(statearr_32898_35167[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32886 === (20))){
var inst_32748 = (state_32884[(7)]);
var inst_32763 = cljs.core.first(inst_32748);
var inst_32764 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32763,(0),null);
var inst_32765 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32763,(1),null);
var state_32884__$1 = (function (){var statearr_32902 = state_32884;
(statearr_32902[(8)] = inst_32764);

return statearr_32902;
})();
if(cljs.core.truth_(inst_32765)){
var statearr_32903_35168 = state_32884__$1;
(statearr_32903_35168[(1)] = (22));

} else {
var statearr_32906_35169 = state_32884__$1;
(statearr_32906_35169[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32886 === (27))){
var inst_32797 = (state_32884[(9)]);
var inst_32799 = (state_32884[(10)]);
var inst_32805 = (state_32884[(11)]);
var inst_32713 = (state_32884[(12)]);
var inst_32805__$1 = cljs.core._nth(inst_32797,inst_32799);
var inst_32806 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_32805__$1,inst_32713,done);
var state_32884__$1 = (function (){var statearr_32911 = state_32884;
(statearr_32911[(11)] = inst_32805__$1);

return statearr_32911;
})();
if(cljs.core.truth_(inst_32806)){
var statearr_32913_35170 = state_32884__$1;
(statearr_32913_35170[(1)] = (30));

} else {
var statearr_32915_35171 = state_32884__$1;
(statearr_32915_35171[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32886 === (1))){
var state_32884__$1 = state_32884;
var statearr_32919_35172 = state_32884__$1;
(statearr_32919_35172[(2)] = null);

(statearr_32919_35172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32886 === (24))){
var inst_32748 = (state_32884[(7)]);
var inst_32773 = (state_32884[(2)]);
var inst_32774 = cljs.core.next(inst_32748);
var inst_32722 = inst_32774;
var inst_32723 = null;
var inst_32724 = (0);
var inst_32725 = (0);
var state_32884__$1 = (function (){var statearr_32921 = state_32884;
(statearr_32921[(13)] = inst_32773);

(statearr_32921[(14)] = inst_32722);

(statearr_32921[(15)] = inst_32723);

(statearr_32921[(16)] = inst_32724);

(statearr_32921[(17)] = inst_32725);

return statearr_32921;
})();
var statearr_32925_35173 = state_32884__$1;
(statearr_32925_35173[(2)] = null);

(statearr_32925_35173[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32886 === (39))){
var state_32884__$1 = state_32884;
var statearr_32937_35174 = state_32884__$1;
(statearr_32937_35174[(2)] = null);

(statearr_32937_35174[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32886 === (4))){
var inst_32713 = (state_32884[(12)]);
var inst_32713__$1 = (state_32884[(2)]);
var inst_32714 = (inst_32713__$1 == null);
var state_32884__$1 = (function (){var statearr_32939 = state_32884;
(statearr_32939[(12)] = inst_32713__$1);

return statearr_32939;
})();
if(cljs.core.truth_(inst_32714)){
var statearr_32940_35175 = state_32884__$1;
(statearr_32940_35175[(1)] = (5));

} else {
var statearr_32942_35176 = state_32884__$1;
(statearr_32942_35176[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32886 === (15))){
var inst_32725 = (state_32884[(17)]);
var inst_32722 = (state_32884[(14)]);
var inst_32723 = (state_32884[(15)]);
var inst_32724 = (state_32884[(16)]);
var inst_32743 = (state_32884[(2)]);
var inst_32744 = (inst_32725 + (1));
var tmp32928 = inst_32722;
var tmp32929 = inst_32724;
var tmp32930 = inst_32723;
var inst_32722__$1 = tmp32928;
var inst_32723__$1 = tmp32930;
var inst_32724__$1 = tmp32929;
var inst_32725__$1 = inst_32744;
var state_32884__$1 = (function (){var statearr_32946 = state_32884;
(statearr_32946[(18)] = inst_32743);

(statearr_32946[(14)] = inst_32722__$1);

(statearr_32946[(15)] = inst_32723__$1);

(statearr_32946[(16)] = inst_32724__$1);

(statearr_32946[(17)] = inst_32725__$1);

return statearr_32946;
})();
var statearr_32949_35177 = state_32884__$1;
(statearr_32949_35177[(2)] = null);

(statearr_32949_35177[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32886 === (21))){
var inst_32777 = (state_32884[(2)]);
var state_32884__$1 = state_32884;
var statearr_32962_35178 = state_32884__$1;
(statearr_32962_35178[(2)] = inst_32777);

(statearr_32962_35178[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32886 === (31))){
var inst_32805 = (state_32884[(11)]);
var inst_32819 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_32805);
var state_32884__$1 = state_32884;
var statearr_32974_35179 = state_32884__$1;
(statearr_32974_35179[(2)] = inst_32819);

(statearr_32974_35179[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32886 === (32))){
var inst_32799 = (state_32884[(10)]);
var inst_32796 = (state_32884[(19)]);
var inst_32797 = (state_32884[(9)]);
var inst_32798 = (state_32884[(20)]);
var inst_32821 = (state_32884[(2)]);
var inst_32824 = (inst_32799 + (1));
var tmp32954 = inst_32798;
var tmp32955 = inst_32797;
var tmp32956 = inst_32796;
var inst_32796__$1 = tmp32956;
var inst_32797__$1 = tmp32955;
var inst_32798__$1 = tmp32954;
var inst_32799__$1 = inst_32824;
var state_32884__$1 = (function (){var statearr_32978 = state_32884;
(statearr_32978[(21)] = inst_32821);

(statearr_32978[(19)] = inst_32796__$1);

(statearr_32978[(9)] = inst_32797__$1);

(statearr_32978[(20)] = inst_32798__$1);

(statearr_32978[(10)] = inst_32799__$1);

return statearr_32978;
})();
var statearr_32980_35184 = state_32884__$1;
(statearr_32980_35184[(2)] = null);

(statearr_32980_35184[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32886 === (40))){
var inst_32843 = (state_32884[(22)]);
var inst_32849 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_32843);
var state_32884__$1 = state_32884;
var statearr_32982_35185 = state_32884__$1;
(statearr_32982_35185[(2)] = inst_32849);

(statearr_32982_35185[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32886 === (33))){
var inst_32829 = (state_32884[(23)]);
var inst_32831 = cljs.core.chunked_seq_QMARK_(inst_32829);
var state_32884__$1 = state_32884;
if(inst_32831){
var statearr_32988_35189 = state_32884__$1;
(statearr_32988_35189[(1)] = (36));

} else {
var statearr_32994_35190 = state_32884__$1;
(statearr_32994_35190[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32886 === (13))){
var inst_32737 = (state_32884[(24)]);
var inst_32740 = cljs.core.async.close_BANG_(inst_32737);
var state_32884__$1 = state_32884;
var statearr_32998_35191 = state_32884__$1;
(statearr_32998_35191[(2)] = inst_32740);

(statearr_32998_35191[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32886 === (22))){
var inst_32764 = (state_32884[(8)]);
var inst_32769 = cljs.core.async.close_BANG_(inst_32764);
var state_32884__$1 = state_32884;
var statearr_33004_35192 = state_32884__$1;
(statearr_33004_35192[(2)] = inst_32769);

(statearr_33004_35192[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32886 === (36))){
var inst_32829 = (state_32884[(23)]);
var inst_32835 = cljs.core.chunk_first(inst_32829);
var inst_32836 = cljs.core.chunk_rest(inst_32829);
var inst_32838 = cljs.core.count(inst_32835);
var inst_32796 = inst_32836;
var inst_32797 = inst_32835;
var inst_32798 = inst_32838;
var inst_32799 = (0);
var state_32884__$1 = (function (){var statearr_33008 = state_32884;
(statearr_33008[(19)] = inst_32796);

(statearr_33008[(9)] = inst_32797);

(statearr_33008[(20)] = inst_32798);

(statearr_33008[(10)] = inst_32799);

return statearr_33008;
})();
var statearr_33011_35196 = state_32884__$1;
(statearr_33011_35196[(2)] = null);

(statearr_33011_35196[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32886 === (41))){
var inst_32829 = (state_32884[(23)]);
var inst_32851 = (state_32884[(2)]);
var inst_32852 = cljs.core.next(inst_32829);
var inst_32796 = inst_32852;
var inst_32797 = null;
var inst_32798 = (0);
var inst_32799 = (0);
var state_32884__$1 = (function (){var statearr_33019 = state_32884;
(statearr_33019[(25)] = inst_32851);

(statearr_33019[(19)] = inst_32796);

(statearr_33019[(9)] = inst_32797);

(statearr_33019[(20)] = inst_32798);

(statearr_33019[(10)] = inst_32799);

return statearr_33019;
})();
var statearr_33021_35197 = state_32884__$1;
(statearr_33021_35197[(2)] = null);

(statearr_33021_35197[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32886 === (43))){
var state_32884__$1 = state_32884;
var statearr_33024_35198 = state_32884__$1;
(statearr_33024_35198[(2)] = null);

(statearr_33024_35198[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32886 === (29))){
var inst_32861 = (state_32884[(2)]);
var state_32884__$1 = state_32884;
var statearr_33028_35200 = state_32884__$1;
(statearr_33028_35200[(2)] = inst_32861);

(statearr_33028_35200[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32886 === (44))){
var inst_32870 = (state_32884[(2)]);
var state_32884__$1 = (function (){var statearr_33035 = state_32884;
(statearr_33035[(26)] = inst_32870);

return statearr_33035;
})();
var statearr_33037_35205 = state_32884__$1;
(statearr_33037_35205[(2)] = null);

(statearr_33037_35205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32886 === (6))){
var inst_32788 = (state_32884[(27)]);
var inst_32787 = cljs.core.deref(cs);
var inst_32788__$1 = cljs.core.keys(inst_32787);
var inst_32789 = cljs.core.count(inst_32788__$1);
var inst_32790 = cljs.core.reset_BANG_(dctr,inst_32789);
var inst_32795 = cljs.core.seq(inst_32788__$1);
var inst_32796 = inst_32795;
var inst_32797 = null;
var inst_32798 = (0);
var inst_32799 = (0);
var state_32884__$1 = (function (){var statearr_33042 = state_32884;
(statearr_33042[(27)] = inst_32788__$1);

(statearr_33042[(28)] = inst_32790);

(statearr_33042[(19)] = inst_32796);

(statearr_33042[(9)] = inst_32797);

(statearr_33042[(20)] = inst_32798);

(statearr_33042[(10)] = inst_32799);

return statearr_33042;
})();
var statearr_33043_35206 = state_32884__$1;
(statearr_33043_35206[(2)] = null);

(statearr_33043_35206[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32886 === (28))){
var inst_32796 = (state_32884[(19)]);
var inst_32829 = (state_32884[(23)]);
var inst_32829__$1 = cljs.core.seq(inst_32796);
var state_32884__$1 = (function (){var statearr_33044 = state_32884;
(statearr_33044[(23)] = inst_32829__$1);

return statearr_33044;
})();
if(inst_32829__$1){
var statearr_33045_35207 = state_32884__$1;
(statearr_33045_35207[(1)] = (33));

} else {
var statearr_33046_35208 = state_32884__$1;
(statearr_33046_35208[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32886 === (25))){
var inst_32799 = (state_32884[(10)]);
var inst_32798 = (state_32884[(20)]);
var inst_32802 = (inst_32799 < inst_32798);
var inst_32803 = inst_32802;
var state_32884__$1 = state_32884;
if(cljs.core.truth_(inst_32803)){
var statearr_33047_35209 = state_32884__$1;
(statearr_33047_35209[(1)] = (27));

} else {
var statearr_33048_35210 = state_32884__$1;
(statearr_33048_35210[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32886 === (34))){
var state_32884__$1 = state_32884;
var statearr_33049_35211 = state_32884__$1;
(statearr_33049_35211[(2)] = null);

(statearr_33049_35211[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32886 === (17))){
var state_32884__$1 = state_32884;
var statearr_33050_35212 = state_32884__$1;
(statearr_33050_35212[(2)] = null);

(statearr_33050_35212[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32886 === (3))){
var inst_32877 = (state_32884[(2)]);
var state_32884__$1 = state_32884;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32884__$1,inst_32877);
} else {
if((state_val_32886 === (12))){
var inst_32783 = (state_32884[(2)]);
var state_32884__$1 = state_32884;
var statearr_33052_35216 = state_32884__$1;
(statearr_33052_35216[(2)] = inst_32783);

(statearr_33052_35216[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32886 === (2))){
var state_32884__$1 = state_32884;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32884__$1,(4),ch);
} else {
if((state_val_32886 === (23))){
var state_32884__$1 = state_32884;
var statearr_33053_35217 = state_32884__$1;
(statearr_33053_35217[(2)] = null);

(statearr_33053_35217[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32886 === (35))){
var inst_32858 = (state_32884[(2)]);
var state_32884__$1 = state_32884;
var statearr_33054_35218 = state_32884__$1;
(statearr_33054_35218[(2)] = inst_32858);

(statearr_33054_35218[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32886 === (19))){
var inst_32748 = (state_32884[(7)]);
var inst_32752 = cljs.core.chunk_first(inst_32748);
var inst_32753 = cljs.core.chunk_rest(inst_32748);
var inst_32755 = cljs.core.count(inst_32752);
var inst_32722 = inst_32753;
var inst_32723 = inst_32752;
var inst_32724 = inst_32755;
var inst_32725 = (0);
var state_32884__$1 = (function (){var statearr_33063 = state_32884;
(statearr_33063[(14)] = inst_32722);

(statearr_33063[(15)] = inst_32723);

(statearr_33063[(16)] = inst_32724);

(statearr_33063[(17)] = inst_32725);

return statearr_33063;
})();
var statearr_33064_35219 = state_32884__$1;
(statearr_33064_35219[(2)] = null);

(statearr_33064_35219[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32886 === (11))){
var inst_32722 = (state_32884[(14)]);
var inst_32748 = (state_32884[(7)]);
var inst_32748__$1 = cljs.core.seq(inst_32722);
var state_32884__$1 = (function (){var statearr_33065 = state_32884;
(statearr_33065[(7)] = inst_32748__$1);

return statearr_33065;
})();
if(inst_32748__$1){
var statearr_33066_35220 = state_32884__$1;
(statearr_33066_35220[(1)] = (16));

} else {
var statearr_33067_35221 = state_32884__$1;
(statearr_33067_35221[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32886 === (9))){
var inst_32785 = (state_32884[(2)]);
var state_32884__$1 = state_32884;
var statearr_33069_35222 = state_32884__$1;
(statearr_33069_35222[(2)] = inst_32785);

(statearr_33069_35222[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32886 === (5))){
var inst_32720 = cljs.core.deref(cs);
var inst_32721 = cljs.core.seq(inst_32720);
var inst_32722 = inst_32721;
var inst_32723 = null;
var inst_32724 = (0);
var inst_32725 = (0);
var state_32884__$1 = (function (){var statearr_33073 = state_32884;
(statearr_33073[(14)] = inst_32722);

(statearr_33073[(15)] = inst_32723);

(statearr_33073[(16)] = inst_32724);

(statearr_33073[(17)] = inst_32725);

return statearr_33073;
})();
var statearr_33074_35223 = state_32884__$1;
(statearr_33074_35223[(2)] = null);

(statearr_33074_35223[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32886 === (14))){
var state_32884__$1 = state_32884;
var statearr_33075_35224 = state_32884__$1;
(statearr_33075_35224[(2)] = null);

(statearr_33075_35224[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32886 === (45))){
var inst_32867 = (state_32884[(2)]);
var state_32884__$1 = state_32884;
var statearr_33076_35225 = state_32884__$1;
(statearr_33076_35225[(2)] = inst_32867);

(statearr_33076_35225[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32886 === (26))){
var inst_32788 = (state_32884[(27)]);
var inst_32863 = (state_32884[(2)]);
var inst_32864 = cljs.core.seq(inst_32788);
var state_32884__$1 = (function (){var statearr_33078 = state_32884;
(statearr_33078[(29)] = inst_32863);

return statearr_33078;
})();
if(inst_32864){
var statearr_33081_35226 = state_32884__$1;
(statearr_33081_35226[(1)] = (42));

} else {
var statearr_33082_35227 = state_32884__$1;
(statearr_33082_35227[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32886 === (16))){
var inst_32748 = (state_32884[(7)]);
var inst_32750 = cljs.core.chunked_seq_QMARK_(inst_32748);
var state_32884__$1 = state_32884;
if(inst_32750){
var statearr_33083_35228 = state_32884__$1;
(statearr_33083_35228[(1)] = (19));

} else {
var statearr_33084_35229 = state_32884__$1;
(statearr_33084_35229[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32886 === (38))){
var inst_32855 = (state_32884[(2)]);
var state_32884__$1 = state_32884;
var statearr_33088_35231 = state_32884__$1;
(statearr_33088_35231[(2)] = inst_32855);

(statearr_33088_35231[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32886 === (30))){
var state_32884__$1 = state_32884;
var statearr_33089_35232 = state_32884__$1;
(statearr_33089_35232[(2)] = null);

(statearr_33089_35232[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32886 === (10))){
var inst_32723 = (state_32884[(15)]);
var inst_32725 = (state_32884[(17)]);
var inst_32736 = cljs.core._nth(inst_32723,inst_32725);
var inst_32737 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32736,(0),null);
var inst_32738 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32736,(1),null);
var state_32884__$1 = (function (){var statearr_33118 = state_32884;
(statearr_33118[(24)] = inst_32737);

return statearr_33118;
})();
if(cljs.core.truth_(inst_32738)){
var statearr_33119_35236 = state_32884__$1;
(statearr_33119_35236[(1)] = (13));

} else {
var statearr_33123_35237 = state_32884__$1;
(statearr_33123_35237[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32886 === (18))){
var inst_32781 = (state_32884[(2)]);
var state_32884__$1 = state_32884;
var statearr_33125_35240 = state_32884__$1;
(statearr_33125_35240[(2)] = inst_32781);

(statearr_33125_35240[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32886 === (42))){
var state_32884__$1 = state_32884;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32884__$1,(45),dchan);
} else {
if((state_val_32886 === (37))){
var inst_32829 = (state_32884[(23)]);
var inst_32843 = (state_32884[(22)]);
var inst_32713 = (state_32884[(12)]);
var inst_32843__$1 = cljs.core.first(inst_32829);
var inst_32845 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_32843__$1,inst_32713,done);
var state_32884__$1 = (function (){var statearr_33126 = state_32884;
(statearr_33126[(22)] = inst_32843__$1);

return statearr_33126;
})();
if(cljs.core.truth_(inst_32845)){
var statearr_33157_35244 = state_32884__$1;
(statearr_33157_35244[(1)] = (39));

} else {
var statearr_33158_35247 = state_32884__$1;
(statearr_33158_35247[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32886 === (8))){
var inst_32725 = (state_32884[(17)]);
var inst_32724 = (state_32884[(16)]);
var inst_32727 = (inst_32725 < inst_32724);
var inst_32728 = inst_32727;
var state_32884__$1 = state_32884;
if(cljs.core.truth_(inst_32728)){
var statearr_33159_35248 = state_32884__$1;
(statearr_33159_35248[(1)] = (10));

} else {
var statearr_33161_35249 = state_32884__$1;
(statearr_33161_35249[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__30826__auto__ = null;
var cljs$core$async$mult_$_state_machine__30826__auto____0 = (function (){
var statearr_33162 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33162[(0)] = cljs$core$async$mult_$_state_machine__30826__auto__);

(statearr_33162[(1)] = (1));

return statearr_33162;
});
var cljs$core$async$mult_$_state_machine__30826__auto____1 = (function (state_32884){
while(true){
var ret_value__30827__auto__ = (function (){try{while(true){
var result__30828__auto__ = switch__30825__auto__(state_32884);
if(cljs.core.keyword_identical_QMARK_(result__30828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30828__auto__;
}
break;
}
}catch (e33163){var ex__30829__auto__ = e33163;
var statearr_33205_35250 = state_32884;
(statearr_33205_35250[(2)] = ex__30829__auto__);


if(cljs.core.seq((state_32884[(4)]))){
var statearr_33206_35251 = state_32884;
(statearr_33206_35251[(1)] = cljs.core.first((state_32884[(4)])));

} else {
throw ex__30829__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35252 = state_32884;
state_32884 = G__35252;
continue;
} else {
return ret_value__30827__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30826__auto__ = function(state_32884){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30826__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30826__auto____1.call(this,state_32884);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__30826__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30826__auto____0;
cljs$core$async$mult_$_state_machine__30826__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30826__auto____1;
return cljs$core$async$mult_$_state_machine__30826__auto__;
})()
})();
var state__31443__auto__ = (function (){var statearr_33207 = f__31442__auto__();
(statearr_33207[(6)] = c__31441__auto___35166);

return statearr_33207;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31443__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__33220 = arguments.length;
switch (G__33220) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_35257 = (function (m,ch){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5374__auto__.call(null,m,ch));
} else {
var m__5372__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5372__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_35257(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_35270 = (function (m,ch){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5374__auto__.call(null,m,ch));
} else {
var m__5372__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5372__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_35270(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_35271 = (function (m){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5374__auto__.call(null,m));
} else {
var m__5372__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5372__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_35271(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_35272 = (function (m,state_map){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5374__auto__.call(null,m,state_map));
} else {
var m__5372__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5372__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_35272(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_35273 = (function (m,mode){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5374__auto__.call(null,m,mode));
} else {
var m__5372__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5372__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_35273(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___35274 = arguments.length;
var i__5750__auto___35275 = (0);
while(true){
if((i__5750__auto___35275 < len__5749__auto___35274)){
args__5755__auto__.push((arguments[i__5750__auto___35275]));

var G__35276 = (i__5750__auto___35275 + (1));
i__5750__auto___35275 = G__35276;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33275){
var map__33276 = p__33275;
var map__33276__$1 = cljs.core.__destructure_map(map__33276);
var opts = map__33276__$1;
var statearr_33279_35277 = state;
(statearr_33279_35277[(1)] = cont_block);


var temp__5823__auto__ = cljs.core.async.do_alts((function (val){
var statearr_33280_35278 = state;
(statearr_33280_35278[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5823__auto__)){
var cb = temp__5823__auto__;
var statearr_33282_35279 = state;
(statearr_33282_35279[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33270){
var G__33272 = cljs.core.first(seq33270);
var seq33270__$1 = cljs.core.next(seq33270);
var G__33273 = cljs.core.first(seq33270__$1);
var seq33270__$2 = cljs.core.next(seq33270__$1);
var G__33274 = cljs.core.first(seq33270__$2);
var seq33270__$3 = cljs.core.next(seq33270__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33272,G__33273,G__33274,seq33270__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33286 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33287){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta33287 = meta33287;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33286.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33288,meta33287__$1){
var self__ = this;
var _33288__$1 = this;
return (new cljs.core.async.t_cljs$core$async33286(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta33287__$1));
}));

(cljs.core.async.t_cljs$core$async33286.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33288){
var self__ = this;
var _33288__$1 = this;
return self__.meta33287;
}));

(cljs.core.async.t_cljs$core$async33286.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33286.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async33286.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33286.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33286.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33286.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33286.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33286.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33286.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta33287","meta33287",-1336284368,null)], null);
}));

(cljs.core.async.t_cljs$core$async33286.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33286.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33286");

(cljs.core.async.t_cljs$core$async33286.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async33286");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33286.
 */
cljs.core.async.__GT_t_cljs$core$async33286 = (function cljs$core$async$__GT_t_cljs$core$async33286(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33287){
return (new cljs.core.async.t_cljs$core$async33286(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33287));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (cljs.core.seq(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async33286(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__31441__auto___35280 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31442__auto__ = (function (){var switch__30825__auto__ = (function (state_33366){
var state_val_33367 = (state_33366[(1)]);
if((state_val_33367 === (7))){
var inst_33324 = (state_33366[(2)]);
var state_33366__$1 = state_33366;
if(cljs.core.truth_(inst_33324)){
var statearr_33370_35281 = state_33366__$1;
(statearr_33370_35281[(1)] = (8));

} else {
var statearr_33371_35282 = state_33366__$1;
(statearr_33371_35282[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33367 === (20))){
var inst_33317 = (state_33366[(7)]);
var state_33366__$1 = state_33366;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33366__$1,(23),out,inst_33317);
} else {
if((state_val_33367 === (1))){
var inst_33298 = calc_state();
var inst_33299 = cljs.core.__destructure_map(inst_33298);
var inst_33300 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33299,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33301 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33299,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33302 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33299,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33303 = inst_33298;
var state_33366__$1 = (function (){var statearr_33397 = state_33366;
(statearr_33397[(8)] = inst_33300);

(statearr_33397[(9)] = inst_33301);

(statearr_33397[(10)] = inst_33302);

(statearr_33397[(11)] = inst_33303);

return statearr_33397;
})();
var statearr_33398_35283 = state_33366__$1;
(statearr_33398_35283[(2)] = null);

(statearr_33398_35283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33367 === (24))){
var inst_33306 = (state_33366[(12)]);
var inst_33303 = inst_33306;
var state_33366__$1 = (function (){var statearr_33399 = state_33366;
(statearr_33399[(11)] = inst_33303);

return statearr_33399;
})();
var statearr_33400_35284 = state_33366__$1;
(statearr_33400_35284[(2)] = null);

(statearr_33400_35284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33367 === (4))){
var inst_33317 = (state_33366[(7)]);
var inst_33319 = (state_33366[(13)]);
var inst_33316 = (state_33366[(2)]);
var inst_33317__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33316,(0),null);
var inst_33318 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33316,(1),null);
var inst_33319__$1 = (inst_33317__$1 == null);
var state_33366__$1 = (function (){var statearr_33401 = state_33366;
(statearr_33401[(7)] = inst_33317__$1);

(statearr_33401[(14)] = inst_33318);

(statearr_33401[(13)] = inst_33319__$1);

return statearr_33401;
})();
if(cljs.core.truth_(inst_33319__$1)){
var statearr_33402_35288 = state_33366__$1;
(statearr_33402_35288[(1)] = (5));

} else {
var statearr_33403_35289 = state_33366__$1;
(statearr_33403_35289[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33367 === (15))){
var inst_33307 = (state_33366[(15)]);
var inst_33340 = (state_33366[(16)]);
var inst_33340__$1 = cljs.core.empty_QMARK_(inst_33307);
var state_33366__$1 = (function (){var statearr_33404 = state_33366;
(statearr_33404[(16)] = inst_33340__$1);

return statearr_33404;
})();
if(inst_33340__$1){
var statearr_33405_35290 = state_33366__$1;
(statearr_33405_35290[(1)] = (17));

} else {
var statearr_33406_35291 = state_33366__$1;
(statearr_33406_35291[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33367 === (21))){
var inst_33306 = (state_33366[(12)]);
var inst_33303 = inst_33306;
var state_33366__$1 = (function (){var statearr_33407 = state_33366;
(statearr_33407[(11)] = inst_33303);

return statearr_33407;
})();
var statearr_33408_35292 = state_33366__$1;
(statearr_33408_35292[(2)] = null);

(statearr_33408_35292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33367 === (13))){
var inst_33331 = (state_33366[(2)]);
var inst_33332 = calc_state();
var inst_33303 = inst_33332;
var state_33366__$1 = (function (){var statearr_33409 = state_33366;
(statearr_33409[(17)] = inst_33331);

(statearr_33409[(11)] = inst_33303);

return statearr_33409;
})();
var statearr_33410_35293 = state_33366__$1;
(statearr_33410_35293[(2)] = null);

(statearr_33410_35293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33367 === (22))){
var inst_33360 = (state_33366[(2)]);
var state_33366__$1 = state_33366;
var statearr_33416_35295 = state_33366__$1;
(statearr_33416_35295[(2)] = inst_33360);

(statearr_33416_35295[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33367 === (6))){
var inst_33318 = (state_33366[(14)]);
var inst_33322 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33318,change);
var state_33366__$1 = state_33366;
var statearr_33419_35296 = state_33366__$1;
(statearr_33419_35296[(2)] = inst_33322);

(statearr_33419_35296[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33367 === (25))){
var state_33366__$1 = state_33366;
var statearr_33422_35297 = state_33366__$1;
(statearr_33422_35297[(2)] = null);

(statearr_33422_35297[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33367 === (17))){
var inst_33308 = (state_33366[(18)]);
var inst_33318 = (state_33366[(14)]);
var inst_33342 = (inst_33308.cljs$core$IFn$_invoke$arity$1 ? inst_33308.cljs$core$IFn$_invoke$arity$1(inst_33318) : inst_33308.call(null,inst_33318));
var inst_33343 = cljs.core.not(inst_33342);
var state_33366__$1 = state_33366;
var statearr_33423_35298 = state_33366__$1;
(statearr_33423_35298[(2)] = inst_33343);

(statearr_33423_35298[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33367 === (3))){
var inst_33364 = (state_33366[(2)]);
var state_33366__$1 = state_33366;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33366__$1,inst_33364);
} else {
if((state_val_33367 === (12))){
var state_33366__$1 = state_33366;
var statearr_33424_35302 = state_33366__$1;
(statearr_33424_35302[(2)] = null);

(statearr_33424_35302[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33367 === (2))){
var inst_33303 = (state_33366[(11)]);
var inst_33306 = (state_33366[(12)]);
var inst_33306__$1 = cljs.core.__destructure_map(inst_33303);
var inst_33307 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33306__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33308 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33306__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33309 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33306__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33366__$1 = (function (){var statearr_33426 = state_33366;
(statearr_33426[(12)] = inst_33306__$1);

(statearr_33426[(15)] = inst_33307);

(statearr_33426[(18)] = inst_33308);

return statearr_33426;
})();
return cljs.core.async.ioc_alts_BANG_(state_33366__$1,(4),inst_33309);
} else {
if((state_val_33367 === (23))){
var inst_33351 = (state_33366[(2)]);
var state_33366__$1 = state_33366;
if(cljs.core.truth_(inst_33351)){
var statearr_33430_35303 = state_33366__$1;
(statearr_33430_35303[(1)] = (24));

} else {
var statearr_33431_35304 = state_33366__$1;
(statearr_33431_35304[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33367 === (19))){
var inst_33346 = (state_33366[(2)]);
var state_33366__$1 = state_33366;
var statearr_33432_35305 = state_33366__$1;
(statearr_33432_35305[(2)] = inst_33346);

(statearr_33432_35305[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33367 === (11))){
var inst_33318 = (state_33366[(14)]);
var inst_33328 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_33318);
var state_33366__$1 = state_33366;
var statearr_33434_35306 = state_33366__$1;
(statearr_33434_35306[(2)] = inst_33328);

(statearr_33434_35306[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33367 === (9))){
var inst_33307 = (state_33366[(15)]);
var inst_33318 = (state_33366[(14)]);
var inst_33335 = (state_33366[(19)]);
var inst_33335__$1 = (inst_33307.cljs$core$IFn$_invoke$arity$1 ? inst_33307.cljs$core$IFn$_invoke$arity$1(inst_33318) : inst_33307.call(null,inst_33318));
var state_33366__$1 = (function (){var statearr_33436 = state_33366;
(statearr_33436[(19)] = inst_33335__$1);

return statearr_33436;
})();
if(cljs.core.truth_(inst_33335__$1)){
var statearr_33437_35308 = state_33366__$1;
(statearr_33437_35308[(1)] = (14));

} else {
var statearr_33439_35309 = state_33366__$1;
(statearr_33439_35309[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33367 === (5))){
var inst_33319 = (state_33366[(13)]);
var state_33366__$1 = state_33366;
var statearr_33440_35310 = state_33366__$1;
(statearr_33440_35310[(2)] = inst_33319);

(statearr_33440_35310[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33367 === (14))){
var inst_33335 = (state_33366[(19)]);
var state_33366__$1 = state_33366;
var statearr_33442_35311 = state_33366__$1;
(statearr_33442_35311[(2)] = inst_33335);

(statearr_33442_35311[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33367 === (26))){
var inst_33356 = (state_33366[(2)]);
var state_33366__$1 = state_33366;
var statearr_33444_35312 = state_33366__$1;
(statearr_33444_35312[(2)] = inst_33356);

(statearr_33444_35312[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33367 === (16))){
var inst_33348 = (state_33366[(2)]);
var state_33366__$1 = state_33366;
if(cljs.core.truth_(inst_33348)){
var statearr_33445_35316 = state_33366__$1;
(statearr_33445_35316[(1)] = (20));

} else {
var statearr_33446_35318 = state_33366__$1;
(statearr_33446_35318[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33367 === (10))){
var inst_33362 = (state_33366[(2)]);
var state_33366__$1 = state_33366;
var statearr_33448_35319 = state_33366__$1;
(statearr_33448_35319[(2)] = inst_33362);

(statearr_33448_35319[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33367 === (18))){
var inst_33340 = (state_33366[(16)]);
var state_33366__$1 = state_33366;
var statearr_33450_35320 = state_33366__$1;
(statearr_33450_35320[(2)] = inst_33340);

(statearr_33450_35320[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33367 === (8))){
var inst_33317 = (state_33366[(7)]);
var inst_33326 = (inst_33317 == null);
var state_33366__$1 = state_33366;
if(cljs.core.truth_(inst_33326)){
var statearr_33456_35321 = state_33366__$1;
(statearr_33456_35321[(1)] = (11));

} else {
var statearr_33457_35322 = state_33366__$1;
(statearr_33457_35322[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__30826__auto__ = null;
var cljs$core$async$mix_$_state_machine__30826__auto____0 = (function (){
var statearr_33460 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33460[(0)] = cljs$core$async$mix_$_state_machine__30826__auto__);

(statearr_33460[(1)] = (1));

return statearr_33460;
});
var cljs$core$async$mix_$_state_machine__30826__auto____1 = (function (state_33366){
while(true){
var ret_value__30827__auto__ = (function (){try{while(true){
var result__30828__auto__ = switch__30825__auto__(state_33366);
if(cljs.core.keyword_identical_QMARK_(result__30828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30828__auto__;
}
break;
}
}catch (e33461){var ex__30829__auto__ = e33461;
var statearr_33462_35323 = state_33366;
(statearr_33462_35323[(2)] = ex__30829__auto__);


if(cljs.core.seq((state_33366[(4)]))){
var statearr_33463_35324 = state_33366;
(statearr_33463_35324[(1)] = cljs.core.first((state_33366[(4)])));

} else {
throw ex__30829__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35325 = state_33366;
state_33366 = G__35325;
continue;
} else {
return ret_value__30827__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30826__auto__ = function(state_33366){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30826__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30826__auto____1.call(this,state_33366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__30826__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30826__auto____0;
cljs$core$async$mix_$_state_machine__30826__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30826__auto____1;
return cljs$core$async$mix_$_state_machine__30826__auto__;
})()
})();
var state__31443__auto__ = (function (){var statearr_33464 = f__31442__auto__();
(statearr_33464[(6)] = c__31441__auto___35280);

return statearr_33464;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31443__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_35329 = (function (p,v,ch,close_QMARK_){
var x__5373__auto__ = (((p == null))?null:p);
var m__5374__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5374__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5372__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5372__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_35329(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_35330 = (function (p,v,ch){
var x__5373__auto__ = (((p == null))?null:p);
var m__5374__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5374__auto__.call(null,p,v,ch));
} else {
var m__5372__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5372__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_35330(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_35332 = (function() {
var G__35333 = null;
var G__35333__1 = (function (p){
var x__5373__auto__ = (((p == null))?null:p);
var m__5374__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5374__auto__.call(null,p));
} else {
var m__5372__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5372__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__35333__2 = (function (p,v){
var x__5373__auto__ = (((p == null))?null:p);
var m__5374__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5374__auto__.call(null,p,v));
} else {
var m__5372__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5372__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__35333 = function(p,v){
switch(arguments.length){
case 1:
return G__35333__1.call(this,p);
case 2:
return G__35333__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__35333.cljs$core$IFn$_invoke$arity$1 = G__35333__1;
G__35333.cljs$core$IFn$_invoke$arity$2 = G__35333__2;
return G__35333;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__33514 = arguments.length;
switch (G__33514) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35332(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35332(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33529 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33530){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33530 = meta33530;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33529.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33531,meta33530__$1){
var self__ = this;
var _33531__$1 = this;
return (new cljs.core.async.t_cljs$core$async33529(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33530__$1));
}));

(cljs.core.async.t_cljs$core$async33529.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33531){
var self__ = this;
var _33531__$1 = this;
return self__.meta33530;
}));

(cljs.core.async.t_cljs$core$async33529.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33529.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33529.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33529.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async33529.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5823__auto__)){
var m = temp__5823__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async33529.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async33529.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async33529.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33530","meta33530",167622431,null)], null);
}));

(cljs.core.async.t_cljs$core$async33529.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33529.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33529");

(cljs.core.async.t_cljs$core$async33529.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async33529");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33529.
 */
cljs.core.async.__GT_t_cljs$core$async33529 = (function cljs$core$async$__GT_t_cljs$core$async33529(ch,topic_fn,buf_fn,mults,ensure_mult,meta33530){
return (new cljs.core.async.t_cljs$core$async33529(ch,topic_fn,buf_fn,mults,ensure_mult,meta33530));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__33523 = arguments.length;
switch (G__33523) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5025__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__33519_SHARP_){
if(cljs.core.truth_((p1__33519_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__33519_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__33519_SHARP_.call(null,topic)))){
return p1__33519_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__33519_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async33529(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__31441__auto___35350 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31442__auto__ = (function (){var switch__30825__auto__ = (function (state_33638){
var state_val_33639 = (state_33638[(1)]);
if((state_val_33639 === (7))){
var inst_33634 = (state_33638[(2)]);
var state_33638__$1 = state_33638;
var statearr_33659_35351 = state_33638__$1;
(statearr_33659_35351[(2)] = inst_33634);

(statearr_33659_35351[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33639 === (20))){
var state_33638__$1 = state_33638;
var statearr_33661_35352 = state_33638__$1;
(statearr_33661_35352[(2)] = null);

(statearr_33661_35352[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33639 === (1))){
var state_33638__$1 = state_33638;
var statearr_33662_35353 = state_33638__$1;
(statearr_33662_35353[(2)] = null);

(statearr_33662_35353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33639 === (24))){
var inst_33615 = (state_33638[(7)]);
var inst_33624 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_33615);
var state_33638__$1 = state_33638;
var statearr_33666_35354 = state_33638__$1;
(statearr_33666_35354[(2)] = inst_33624);

(statearr_33666_35354[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33639 === (4))){
var inst_33566 = (state_33638[(8)]);
var inst_33566__$1 = (state_33638[(2)]);
var inst_33567 = (inst_33566__$1 == null);
var state_33638__$1 = (function (){var statearr_33671 = state_33638;
(statearr_33671[(8)] = inst_33566__$1);

return statearr_33671;
})();
if(cljs.core.truth_(inst_33567)){
var statearr_33675_35355 = state_33638__$1;
(statearr_33675_35355[(1)] = (5));

} else {
var statearr_33676_35356 = state_33638__$1;
(statearr_33676_35356[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33639 === (15))){
var inst_33609 = (state_33638[(2)]);
var state_33638__$1 = state_33638;
var statearr_33677_35357 = state_33638__$1;
(statearr_33677_35357[(2)] = inst_33609);

(statearr_33677_35357[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33639 === (21))){
var inst_33631 = (state_33638[(2)]);
var state_33638__$1 = (function (){var statearr_33682 = state_33638;
(statearr_33682[(9)] = inst_33631);

return statearr_33682;
})();
var statearr_33683_35358 = state_33638__$1;
(statearr_33683_35358[(2)] = null);

(statearr_33683_35358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33639 === (13))){
var inst_33590 = (state_33638[(10)]);
var inst_33593 = cljs.core.chunked_seq_QMARK_(inst_33590);
var state_33638__$1 = state_33638;
if(inst_33593){
var statearr_33688_35359 = state_33638__$1;
(statearr_33688_35359[(1)] = (16));

} else {
var statearr_33689_35360 = state_33638__$1;
(statearr_33689_35360[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33639 === (22))){
var inst_33621 = (state_33638[(2)]);
var state_33638__$1 = state_33638;
if(cljs.core.truth_(inst_33621)){
var statearr_33693_35361 = state_33638__$1;
(statearr_33693_35361[(1)] = (23));

} else {
var statearr_33694_35362 = state_33638__$1;
(statearr_33694_35362[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33639 === (6))){
var inst_33566 = (state_33638[(8)]);
var inst_33615 = (state_33638[(7)]);
var inst_33617 = (state_33638[(11)]);
var inst_33615__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_33566) : topic_fn.call(null,inst_33566));
var inst_33616 = cljs.core.deref(mults);
var inst_33617__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33616,inst_33615__$1);
var state_33638__$1 = (function (){var statearr_33695 = state_33638;
(statearr_33695[(7)] = inst_33615__$1);

(statearr_33695[(11)] = inst_33617__$1);

return statearr_33695;
})();
if(cljs.core.truth_(inst_33617__$1)){
var statearr_33696_35363 = state_33638__$1;
(statearr_33696_35363[(1)] = (19));

} else {
var statearr_33697_35365 = state_33638__$1;
(statearr_33697_35365[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33639 === (25))){
var inst_33628 = (state_33638[(2)]);
var state_33638__$1 = state_33638;
var statearr_33698_35366 = state_33638__$1;
(statearr_33698_35366[(2)] = inst_33628);

(statearr_33698_35366[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33639 === (17))){
var inst_33590 = (state_33638[(10)]);
var inst_33600 = cljs.core.first(inst_33590);
var inst_33601 = cljs.core.async.muxch_STAR_(inst_33600);
var inst_33602 = cljs.core.async.close_BANG_(inst_33601);
var inst_33603 = cljs.core.next(inst_33590);
var inst_33576 = inst_33603;
var inst_33577 = null;
var inst_33578 = (0);
var inst_33579 = (0);
var state_33638__$1 = (function (){var statearr_33703 = state_33638;
(statearr_33703[(12)] = inst_33602);

(statearr_33703[(13)] = inst_33576);

(statearr_33703[(14)] = inst_33577);

(statearr_33703[(15)] = inst_33578);

(statearr_33703[(16)] = inst_33579);

return statearr_33703;
})();
var statearr_33710_35368 = state_33638__$1;
(statearr_33710_35368[(2)] = null);

(statearr_33710_35368[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33639 === (3))){
var inst_33636 = (state_33638[(2)]);
var state_33638__$1 = state_33638;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33638__$1,inst_33636);
} else {
if((state_val_33639 === (12))){
var inst_33611 = (state_33638[(2)]);
var state_33638__$1 = state_33638;
var statearr_33711_35369 = state_33638__$1;
(statearr_33711_35369[(2)] = inst_33611);

(statearr_33711_35369[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33639 === (2))){
var state_33638__$1 = state_33638;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33638__$1,(4),ch);
} else {
if((state_val_33639 === (23))){
var state_33638__$1 = state_33638;
var statearr_33712_35371 = state_33638__$1;
(statearr_33712_35371[(2)] = null);

(statearr_33712_35371[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33639 === (19))){
var inst_33617 = (state_33638[(11)]);
var inst_33566 = (state_33638[(8)]);
var inst_33619 = cljs.core.async.muxch_STAR_(inst_33617);
var state_33638__$1 = state_33638;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33638__$1,(22),inst_33619,inst_33566);
} else {
if((state_val_33639 === (11))){
var inst_33576 = (state_33638[(13)]);
var inst_33590 = (state_33638[(10)]);
var inst_33590__$1 = cljs.core.seq(inst_33576);
var state_33638__$1 = (function (){var statearr_33717 = state_33638;
(statearr_33717[(10)] = inst_33590__$1);

return statearr_33717;
})();
if(inst_33590__$1){
var statearr_33718_35373 = state_33638__$1;
(statearr_33718_35373[(1)] = (13));

} else {
var statearr_33721_35374 = state_33638__$1;
(statearr_33721_35374[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33639 === (9))){
var inst_33613 = (state_33638[(2)]);
var state_33638__$1 = state_33638;
var statearr_33723_35376 = state_33638__$1;
(statearr_33723_35376[(2)] = inst_33613);

(statearr_33723_35376[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33639 === (5))){
var inst_33573 = cljs.core.deref(mults);
var inst_33574 = cljs.core.vals(inst_33573);
var inst_33575 = cljs.core.seq(inst_33574);
var inst_33576 = inst_33575;
var inst_33577 = null;
var inst_33578 = (0);
var inst_33579 = (0);
var state_33638__$1 = (function (){var statearr_33726 = state_33638;
(statearr_33726[(13)] = inst_33576);

(statearr_33726[(14)] = inst_33577);

(statearr_33726[(15)] = inst_33578);

(statearr_33726[(16)] = inst_33579);

return statearr_33726;
})();
var statearr_33727_35377 = state_33638__$1;
(statearr_33727_35377[(2)] = null);

(statearr_33727_35377[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33639 === (14))){
var state_33638__$1 = state_33638;
var statearr_33731_35380 = state_33638__$1;
(statearr_33731_35380[(2)] = null);

(statearr_33731_35380[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33639 === (16))){
var inst_33590 = (state_33638[(10)]);
var inst_33595 = cljs.core.chunk_first(inst_33590);
var inst_33596 = cljs.core.chunk_rest(inst_33590);
var inst_33597 = cljs.core.count(inst_33595);
var inst_33576 = inst_33596;
var inst_33577 = inst_33595;
var inst_33578 = inst_33597;
var inst_33579 = (0);
var state_33638__$1 = (function (){var statearr_33733 = state_33638;
(statearr_33733[(13)] = inst_33576);

(statearr_33733[(14)] = inst_33577);

(statearr_33733[(15)] = inst_33578);

(statearr_33733[(16)] = inst_33579);

return statearr_33733;
})();
var statearr_33734_35381 = state_33638__$1;
(statearr_33734_35381[(2)] = null);

(statearr_33734_35381[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33639 === (10))){
var inst_33577 = (state_33638[(14)]);
var inst_33579 = (state_33638[(16)]);
var inst_33576 = (state_33638[(13)]);
var inst_33578 = (state_33638[(15)]);
var inst_33584 = cljs.core._nth(inst_33577,inst_33579);
var inst_33585 = cljs.core.async.muxch_STAR_(inst_33584);
var inst_33586 = cljs.core.async.close_BANG_(inst_33585);
var inst_33587 = (inst_33579 + (1));
var tmp33728 = inst_33578;
var tmp33729 = inst_33577;
var tmp33730 = inst_33576;
var inst_33576__$1 = tmp33730;
var inst_33577__$1 = tmp33729;
var inst_33578__$1 = tmp33728;
var inst_33579__$1 = inst_33587;
var state_33638__$1 = (function (){var statearr_33736 = state_33638;
(statearr_33736[(17)] = inst_33586);

(statearr_33736[(13)] = inst_33576__$1);

(statearr_33736[(14)] = inst_33577__$1);

(statearr_33736[(15)] = inst_33578__$1);

(statearr_33736[(16)] = inst_33579__$1);

return statearr_33736;
})();
var statearr_33738_35382 = state_33638__$1;
(statearr_33738_35382[(2)] = null);

(statearr_33738_35382[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33639 === (18))){
var inst_33606 = (state_33638[(2)]);
var state_33638__$1 = state_33638;
var statearr_33741_35383 = state_33638__$1;
(statearr_33741_35383[(2)] = inst_33606);

(statearr_33741_35383[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33639 === (8))){
var inst_33579 = (state_33638[(16)]);
var inst_33578 = (state_33638[(15)]);
var inst_33581 = (inst_33579 < inst_33578);
var inst_33582 = inst_33581;
var state_33638__$1 = state_33638;
if(cljs.core.truth_(inst_33582)){
var statearr_33742_35384 = state_33638__$1;
(statearr_33742_35384[(1)] = (10));

} else {
var statearr_33743_35385 = state_33638__$1;
(statearr_33743_35385[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30826__auto__ = null;
var cljs$core$async$state_machine__30826__auto____0 = (function (){
var statearr_33748 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33748[(0)] = cljs$core$async$state_machine__30826__auto__);

(statearr_33748[(1)] = (1));

return statearr_33748;
});
var cljs$core$async$state_machine__30826__auto____1 = (function (state_33638){
while(true){
var ret_value__30827__auto__ = (function (){try{while(true){
var result__30828__auto__ = switch__30825__auto__(state_33638);
if(cljs.core.keyword_identical_QMARK_(result__30828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30828__auto__;
}
break;
}
}catch (e33749){var ex__30829__auto__ = e33749;
var statearr_33750_35386 = state_33638;
(statearr_33750_35386[(2)] = ex__30829__auto__);


if(cljs.core.seq((state_33638[(4)]))){
var statearr_33752_35387 = state_33638;
(statearr_33752_35387[(1)] = cljs.core.first((state_33638[(4)])));

} else {
throw ex__30829__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35388 = state_33638;
state_33638 = G__35388;
continue;
} else {
return ret_value__30827__auto__;
}
break;
}
});
cljs$core$async$state_machine__30826__auto__ = function(state_33638){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30826__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30826__auto____1.call(this,state_33638);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30826__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30826__auto____0;
cljs$core$async$state_machine__30826__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30826__auto____1;
return cljs$core$async$state_machine__30826__auto__;
})()
})();
var state__31443__auto__ = (function (){var statearr_33757 = f__31442__auto__();
(statearr_33757[(6)] = c__31441__auto___35350);

return statearr_33757;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31443__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__33759 = arguments.length;
switch (G__33759) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__33763 = arguments.length;
switch (G__33763) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__33765 = arguments.length;
switch (G__33765) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__31441__auto___35401 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31442__auto__ = (function (){var switch__30825__auto__ = (function (state_33816){
var state_val_33819 = (state_33816[(1)]);
if((state_val_33819 === (7))){
var state_33816__$1 = state_33816;
var statearr_33824_35402 = state_33816__$1;
(statearr_33824_35402[(2)] = null);

(statearr_33824_35402[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33819 === (1))){
var state_33816__$1 = state_33816;
var statearr_33825_35403 = state_33816__$1;
(statearr_33825_35403[(2)] = null);

(statearr_33825_35403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33819 === (4))){
var inst_33775 = (state_33816[(7)]);
var inst_33774 = (state_33816[(8)]);
var inst_33777 = (inst_33775 < inst_33774);
var state_33816__$1 = state_33816;
if(cljs.core.truth_(inst_33777)){
var statearr_33826_35407 = state_33816__$1;
(statearr_33826_35407[(1)] = (6));

} else {
var statearr_33827_35408 = state_33816__$1;
(statearr_33827_35408[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33819 === (15))){
var inst_33802 = (state_33816[(9)]);
var inst_33807 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_33802);
var state_33816__$1 = state_33816;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33816__$1,(17),out,inst_33807);
} else {
if((state_val_33819 === (13))){
var inst_33802 = (state_33816[(9)]);
var inst_33802__$1 = (state_33816[(2)]);
var inst_33803 = cljs.core.some(cljs.core.nil_QMARK_,inst_33802__$1);
var state_33816__$1 = (function (){var statearr_33830 = state_33816;
(statearr_33830[(9)] = inst_33802__$1);

return statearr_33830;
})();
if(cljs.core.truth_(inst_33803)){
var statearr_33831_35409 = state_33816__$1;
(statearr_33831_35409[(1)] = (14));

} else {
var statearr_33832_35410 = state_33816__$1;
(statearr_33832_35410[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33819 === (6))){
var state_33816__$1 = state_33816;
var statearr_33833_35414 = state_33816__$1;
(statearr_33833_35414[(2)] = null);

(statearr_33833_35414[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33819 === (17))){
var inst_33809 = (state_33816[(2)]);
var state_33816__$1 = (function (){var statearr_33838 = state_33816;
(statearr_33838[(10)] = inst_33809);

return statearr_33838;
})();
var statearr_33839_35415 = state_33816__$1;
(statearr_33839_35415[(2)] = null);

(statearr_33839_35415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33819 === (3))){
var inst_33814 = (state_33816[(2)]);
var state_33816__$1 = state_33816;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33816__$1,inst_33814);
} else {
if((state_val_33819 === (12))){
var _ = (function (){var statearr_33841 = state_33816;
(statearr_33841[(4)] = cljs.core.rest((state_33816[(4)])));

return statearr_33841;
})();
var state_33816__$1 = state_33816;
var ex33837 = (state_33816__$1[(2)]);
var statearr_33842_35416 = state_33816__$1;
(statearr_33842_35416[(5)] = ex33837);


if((ex33837 instanceof Object)){
var statearr_33843_35417 = state_33816__$1;
(statearr_33843_35417[(1)] = (11));

(statearr_33843_35417[(5)] = null);

} else {
throw ex33837;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33819 === (2))){
var inst_33773 = cljs.core.reset_BANG_(dctr,cnt);
var inst_33774 = cnt;
var inst_33775 = (0);
var state_33816__$1 = (function (){var statearr_33849 = state_33816;
(statearr_33849[(11)] = inst_33773);

(statearr_33849[(8)] = inst_33774);

(statearr_33849[(7)] = inst_33775);

return statearr_33849;
})();
var statearr_33850_35419 = state_33816__$1;
(statearr_33850_35419[(2)] = null);

(statearr_33850_35419[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33819 === (11))){
var inst_33781 = (state_33816[(2)]);
var inst_33782 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_33816__$1 = (function (){var statearr_33855 = state_33816;
(statearr_33855[(12)] = inst_33781);

return statearr_33855;
})();
var statearr_33856_35420 = state_33816__$1;
(statearr_33856_35420[(2)] = inst_33782);

(statearr_33856_35420[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33819 === (9))){
var inst_33775 = (state_33816[(7)]);
var _ = (function (){var statearr_33858 = state_33816;
(statearr_33858[(4)] = cljs.core.cons((12),(state_33816[(4)])));

return statearr_33858;
})();
var inst_33788 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_33775) : chs__$1.call(null,inst_33775));
var inst_33789 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_33775) : done.call(null,inst_33775));
var inst_33790 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_33788,inst_33789);
var ___$1 = (function (){var statearr_33859 = state_33816;
(statearr_33859[(4)] = cljs.core.rest((state_33816[(4)])));

return statearr_33859;
})();
var state_33816__$1 = state_33816;
var statearr_33860_35421 = state_33816__$1;
(statearr_33860_35421[(2)] = inst_33790);

(statearr_33860_35421[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33819 === (5))){
var inst_33800 = (state_33816[(2)]);
var state_33816__$1 = (function (){var statearr_33864 = state_33816;
(statearr_33864[(13)] = inst_33800);

return statearr_33864;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33816__$1,(13),dchan);
} else {
if((state_val_33819 === (14))){
var inst_33805 = cljs.core.async.close_BANG_(out);
var state_33816__$1 = state_33816;
var statearr_33865_35422 = state_33816__$1;
(statearr_33865_35422[(2)] = inst_33805);

(statearr_33865_35422[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33819 === (16))){
var inst_33812 = (state_33816[(2)]);
var state_33816__$1 = state_33816;
var statearr_33866_35423 = state_33816__$1;
(statearr_33866_35423[(2)] = inst_33812);

(statearr_33866_35423[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33819 === (10))){
var inst_33775 = (state_33816[(7)]);
var inst_33793 = (state_33816[(2)]);
var inst_33794 = (inst_33775 + (1));
var inst_33775__$1 = inst_33794;
var state_33816__$1 = (function (){var statearr_33867 = state_33816;
(statearr_33867[(14)] = inst_33793);

(statearr_33867[(7)] = inst_33775__$1);

return statearr_33867;
})();
var statearr_33868_35424 = state_33816__$1;
(statearr_33868_35424[(2)] = null);

(statearr_33868_35424[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33819 === (8))){
var inst_33798 = (state_33816[(2)]);
var state_33816__$1 = state_33816;
var statearr_33869_35426 = state_33816__$1;
(statearr_33869_35426[(2)] = inst_33798);

(statearr_33869_35426[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30826__auto__ = null;
var cljs$core$async$state_machine__30826__auto____0 = (function (){
var statearr_33874 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33874[(0)] = cljs$core$async$state_machine__30826__auto__);

(statearr_33874[(1)] = (1));

return statearr_33874;
});
var cljs$core$async$state_machine__30826__auto____1 = (function (state_33816){
while(true){
var ret_value__30827__auto__ = (function (){try{while(true){
var result__30828__auto__ = switch__30825__auto__(state_33816);
if(cljs.core.keyword_identical_QMARK_(result__30828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30828__auto__;
}
break;
}
}catch (e33876){var ex__30829__auto__ = e33876;
var statearr_33877_35427 = state_33816;
(statearr_33877_35427[(2)] = ex__30829__auto__);


if(cljs.core.seq((state_33816[(4)]))){
var statearr_33879_35428 = state_33816;
(statearr_33879_35428[(1)] = cljs.core.first((state_33816[(4)])));

} else {
throw ex__30829__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35430 = state_33816;
state_33816 = G__35430;
continue;
} else {
return ret_value__30827__auto__;
}
break;
}
});
cljs$core$async$state_machine__30826__auto__ = function(state_33816){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30826__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30826__auto____1.call(this,state_33816);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30826__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30826__auto____0;
cljs$core$async$state_machine__30826__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30826__auto____1;
return cljs$core$async$state_machine__30826__auto__;
})()
})();
var state__31443__auto__ = (function (){var statearr_33880 = f__31442__auto__();
(statearr_33880[(6)] = c__31441__auto___35401);

return statearr_33880;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31443__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__33885 = arguments.length;
switch (G__33885) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31441__auto___35436 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31442__auto__ = (function (){var switch__30825__auto__ = (function (state_33948){
var state_val_33949 = (state_33948[(1)]);
if((state_val_33949 === (7))){
var inst_33918 = (state_33948[(7)]);
var inst_33919 = (state_33948[(8)]);
var inst_33918__$1 = (state_33948[(2)]);
var inst_33919__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33918__$1,(0),null);
var inst_33920 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33918__$1,(1),null);
var inst_33929 = (inst_33919__$1 == null);
var state_33948__$1 = (function (){var statearr_33959 = state_33948;
(statearr_33959[(7)] = inst_33918__$1);

(statearr_33959[(8)] = inst_33919__$1);

(statearr_33959[(9)] = inst_33920);

return statearr_33959;
})();
if(cljs.core.truth_(inst_33929)){
var statearr_33966_35440 = state_33948__$1;
(statearr_33966_35440[(1)] = (8));

} else {
var statearr_33969_35441 = state_33948__$1;
(statearr_33969_35441[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33949 === (1))){
var inst_33904 = cljs.core.vec(chs);
var inst_33906 = inst_33904;
var state_33948__$1 = (function (){var statearr_33976 = state_33948;
(statearr_33976[(10)] = inst_33906);

return statearr_33976;
})();
var statearr_33977_35442 = state_33948__$1;
(statearr_33977_35442[(2)] = null);

(statearr_33977_35442[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33949 === (4))){
var inst_33906 = (state_33948[(10)]);
var state_33948__$1 = state_33948;
return cljs.core.async.ioc_alts_BANG_(state_33948__$1,(7),inst_33906);
} else {
if((state_val_33949 === (6))){
var inst_33944 = (state_33948[(2)]);
var state_33948__$1 = state_33948;
var statearr_33987_35443 = state_33948__$1;
(statearr_33987_35443[(2)] = inst_33944);

(statearr_33987_35443[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33949 === (3))){
var inst_33946 = (state_33948[(2)]);
var state_33948__$1 = state_33948;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33948__$1,inst_33946);
} else {
if((state_val_33949 === (2))){
var inst_33906 = (state_33948[(10)]);
var inst_33908 = cljs.core.count(inst_33906);
var inst_33909 = (inst_33908 > (0));
var state_33948__$1 = state_33948;
if(cljs.core.truth_(inst_33909)){
var statearr_33992_35444 = state_33948__$1;
(statearr_33992_35444[(1)] = (4));

} else {
var statearr_33995_35445 = state_33948__$1;
(statearr_33995_35445[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33949 === (11))){
var inst_33906 = (state_33948[(10)]);
var inst_33937 = (state_33948[(2)]);
var tmp33988 = inst_33906;
var inst_33906__$1 = tmp33988;
var state_33948__$1 = (function (){var statearr_33999 = state_33948;
(statearr_33999[(11)] = inst_33937);

(statearr_33999[(10)] = inst_33906__$1);

return statearr_33999;
})();
var statearr_34000_35446 = state_33948__$1;
(statearr_34000_35446[(2)] = null);

(statearr_34000_35446[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33949 === (9))){
var inst_33919 = (state_33948[(8)]);
var state_33948__$1 = state_33948;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33948__$1,(11),out,inst_33919);
} else {
if((state_val_33949 === (5))){
var inst_33942 = cljs.core.async.close_BANG_(out);
var state_33948__$1 = state_33948;
var statearr_34008_35447 = state_33948__$1;
(statearr_34008_35447[(2)] = inst_33942);

(statearr_34008_35447[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33949 === (10))){
var inst_33940 = (state_33948[(2)]);
var state_33948__$1 = state_33948;
var statearr_34010_35448 = state_33948__$1;
(statearr_34010_35448[(2)] = inst_33940);

(statearr_34010_35448[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33949 === (8))){
var inst_33906 = (state_33948[(10)]);
var inst_33918 = (state_33948[(7)]);
var inst_33919 = (state_33948[(8)]);
var inst_33920 = (state_33948[(9)]);
var inst_33931 = (function (){var cs = inst_33906;
var vec__33913 = inst_33918;
var v = inst_33919;
var c = inst_33920;
return (function (p1__33881_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__33881_SHARP_);
});
})();
var inst_33933 = cljs.core.filterv(inst_33931,inst_33906);
var inst_33906__$1 = inst_33933;
var state_33948__$1 = (function (){var statearr_34011 = state_33948;
(statearr_34011[(10)] = inst_33906__$1);

return statearr_34011;
})();
var statearr_34012_35449 = state_33948__$1;
(statearr_34012_35449[(2)] = null);

(statearr_34012_35449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30826__auto__ = null;
var cljs$core$async$state_machine__30826__auto____0 = (function (){
var statearr_34013 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34013[(0)] = cljs$core$async$state_machine__30826__auto__);

(statearr_34013[(1)] = (1));

return statearr_34013;
});
var cljs$core$async$state_machine__30826__auto____1 = (function (state_33948){
while(true){
var ret_value__30827__auto__ = (function (){try{while(true){
var result__30828__auto__ = switch__30825__auto__(state_33948);
if(cljs.core.keyword_identical_QMARK_(result__30828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30828__auto__;
}
break;
}
}catch (e34017){var ex__30829__auto__ = e34017;
var statearr_34018_35453 = state_33948;
(statearr_34018_35453[(2)] = ex__30829__auto__);


if(cljs.core.seq((state_33948[(4)]))){
var statearr_34019_35454 = state_33948;
(statearr_34019_35454[(1)] = cljs.core.first((state_33948[(4)])));

} else {
throw ex__30829__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35455 = state_33948;
state_33948 = G__35455;
continue;
} else {
return ret_value__30827__auto__;
}
break;
}
});
cljs$core$async$state_machine__30826__auto__ = function(state_33948){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30826__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30826__auto____1.call(this,state_33948);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30826__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30826__auto____0;
cljs$core$async$state_machine__30826__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30826__auto____1;
return cljs$core$async$state_machine__30826__auto__;
})()
})();
var state__31443__auto__ = (function (){var statearr_34020 = f__31442__auto__();
(statearr_34020[(6)] = c__31441__auto___35436);

return statearr_34020;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31443__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__34034 = arguments.length;
switch (G__34034) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31441__auto___35459 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31442__auto__ = (function (){var switch__30825__auto__ = (function (state_34063){
var state_val_34064 = (state_34063[(1)]);
if((state_val_34064 === (7))){
var inst_34045 = (state_34063[(7)]);
var inst_34045__$1 = (state_34063[(2)]);
var inst_34046 = (inst_34045__$1 == null);
var inst_34047 = cljs.core.not(inst_34046);
var state_34063__$1 = (function (){var statearr_34077 = state_34063;
(statearr_34077[(7)] = inst_34045__$1);

return statearr_34077;
})();
if(inst_34047){
var statearr_34078_35460 = state_34063__$1;
(statearr_34078_35460[(1)] = (8));

} else {
var statearr_34079_35461 = state_34063__$1;
(statearr_34079_35461[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34064 === (1))){
var inst_34040 = (0);
var state_34063__$1 = (function (){var statearr_34080 = state_34063;
(statearr_34080[(8)] = inst_34040);

return statearr_34080;
})();
var statearr_34081_35462 = state_34063__$1;
(statearr_34081_35462[(2)] = null);

(statearr_34081_35462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34064 === (4))){
var state_34063__$1 = state_34063;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34063__$1,(7),ch);
} else {
if((state_val_34064 === (6))){
var inst_34058 = (state_34063[(2)]);
var state_34063__$1 = state_34063;
var statearr_34086_35463 = state_34063__$1;
(statearr_34086_35463[(2)] = inst_34058);

(statearr_34086_35463[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34064 === (3))){
var inst_34060 = (state_34063[(2)]);
var inst_34061 = cljs.core.async.close_BANG_(out);
var state_34063__$1 = (function (){var statearr_34087 = state_34063;
(statearr_34087[(9)] = inst_34060);

return statearr_34087;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34063__$1,inst_34061);
} else {
if((state_val_34064 === (2))){
var inst_34040 = (state_34063[(8)]);
var inst_34042 = (inst_34040 < n);
var state_34063__$1 = state_34063;
if(cljs.core.truth_(inst_34042)){
var statearr_34088_35464 = state_34063__$1;
(statearr_34088_35464[(1)] = (4));

} else {
var statearr_34089_35465 = state_34063__$1;
(statearr_34089_35465[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34064 === (11))){
var inst_34040 = (state_34063[(8)]);
var inst_34050 = (state_34063[(2)]);
var inst_34051 = (inst_34040 + (1));
var inst_34040__$1 = inst_34051;
var state_34063__$1 = (function (){var statearr_34090 = state_34063;
(statearr_34090[(10)] = inst_34050);

(statearr_34090[(8)] = inst_34040__$1);

return statearr_34090;
})();
var statearr_34091_35466 = state_34063__$1;
(statearr_34091_35466[(2)] = null);

(statearr_34091_35466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34064 === (9))){
var state_34063__$1 = state_34063;
var statearr_34093_35467 = state_34063__$1;
(statearr_34093_35467[(2)] = null);

(statearr_34093_35467[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34064 === (5))){
var state_34063__$1 = state_34063;
var statearr_34095_35468 = state_34063__$1;
(statearr_34095_35468[(2)] = null);

(statearr_34095_35468[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34064 === (10))){
var inst_34055 = (state_34063[(2)]);
var state_34063__$1 = state_34063;
var statearr_34102_35473 = state_34063__$1;
(statearr_34102_35473[(2)] = inst_34055);

(statearr_34102_35473[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34064 === (8))){
var inst_34045 = (state_34063[(7)]);
var state_34063__$1 = state_34063;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34063__$1,(11),out,inst_34045);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30826__auto__ = null;
var cljs$core$async$state_machine__30826__auto____0 = (function (){
var statearr_34106 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34106[(0)] = cljs$core$async$state_machine__30826__auto__);

(statearr_34106[(1)] = (1));

return statearr_34106;
});
var cljs$core$async$state_machine__30826__auto____1 = (function (state_34063){
while(true){
var ret_value__30827__auto__ = (function (){try{while(true){
var result__30828__auto__ = switch__30825__auto__(state_34063);
if(cljs.core.keyword_identical_QMARK_(result__30828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30828__auto__;
}
break;
}
}catch (e34107){var ex__30829__auto__ = e34107;
var statearr_34108_35474 = state_34063;
(statearr_34108_35474[(2)] = ex__30829__auto__);


if(cljs.core.seq((state_34063[(4)]))){
var statearr_34109_35475 = state_34063;
(statearr_34109_35475[(1)] = cljs.core.first((state_34063[(4)])));

} else {
throw ex__30829__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35476 = state_34063;
state_34063 = G__35476;
continue;
} else {
return ret_value__30827__auto__;
}
break;
}
});
cljs$core$async$state_machine__30826__auto__ = function(state_34063){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30826__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30826__auto____1.call(this,state_34063);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30826__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30826__auto____0;
cljs$core$async$state_machine__30826__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30826__auto____1;
return cljs$core$async$state_machine__30826__auto__;
})()
})();
var state__31443__auto__ = (function (){var statearr_34121 = f__31442__auto__();
(statearr_34121[(6)] = c__31441__auto___35459);

return statearr_34121;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31443__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34143 = (function (f,ch,meta34128,_,fn1,meta34144){
this.f = f;
this.ch = ch;
this.meta34128 = meta34128;
this._ = _;
this.fn1 = fn1;
this.meta34144 = meta34144;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34143.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34145,meta34144__$1){
var self__ = this;
var _34145__$1 = this;
return (new cljs.core.async.t_cljs$core$async34143(self__.f,self__.ch,self__.meta34128,self__._,self__.fn1,meta34144__$1));
}));

(cljs.core.async.t_cljs$core$async34143.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34145){
var self__ = this;
var _34145__$1 = this;
return self__.meta34144;
}));

(cljs.core.async.t_cljs$core$async34143.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34143.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async34143.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34143.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__34126_SHARP_){
var G__34171 = (((p1__34126_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__34126_SHARP_) : self__.f.call(null,p1__34126_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__34171) : f1.call(null,G__34171));
});
}));

(cljs.core.async.t_cljs$core$async34143.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34128","meta34128",1103295078,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34127","cljs.core.async/t_cljs$core$async34127",1617983749,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34144","meta34144",1629469954,null)], null);
}));

(cljs.core.async.t_cljs$core$async34143.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34143.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34143");

(cljs.core.async.t_cljs$core$async34143.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async34143");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34143.
 */
cljs.core.async.__GT_t_cljs$core$async34143 = (function cljs$core$async$__GT_t_cljs$core$async34143(f,ch,meta34128,_,fn1,meta34144){
return (new cljs.core.async.t_cljs$core$async34143(f,ch,meta34128,_,fn1,meta34144));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34127 = (function (f,ch,meta34128){
this.f = f;
this.ch = ch;
this.meta34128 = meta34128;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34127.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34129,meta34128__$1){
var self__ = this;
var _34129__$1 = this;
return (new cljs.core.async.t_cljs$core$async34127(self__.f,self__.ch,meta34128__$1));
}));

(cljs.core.async.t_cljs$core$async34127.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34129){
var self__ = this;
var _34129__$1 = this;
return self__.meta34128;
}));

(cljs.core.async.t_cljs$core$async34127.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34127.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34127.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34127.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34127.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async34143(self__.f,self__.ch,self__.meta34128,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5023__auto__ = ret;
if(cljs.core.truth_(and__5023__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5023__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__34180 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__34180) : self__.f.call(null,G__34180));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async34127.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34127.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async34127.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34128","meta34128",1103295078,null)], null);
}));

(cljs.core.async.t_cljs$core$async34127.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34127.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34127");

(cljs.core.async.t_cljs$core$async34127.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async34127");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34127.
 */
cljs.core.async.__GT_t_cljs$core$async34127 = (function cljs$core$async$__GT_t_cljs$core$async34127(f,ch,meta34128){
return (new cljs.core.async.t_cljs$core$async34127(f,ch,meta34128));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async34127(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34184 = (function (f,ch,meta34185){
this.f = f;
this.ch = ch;
this.meta34185 = meta34185;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34184.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34186,meta34185__$1){
var self__ = this;
var _34186__$1 = this;
return (new cljs.core.async.t_cljs$core$async34184(self__.f,self__.ch,meta34185__$1));
}));

(cljs.core.async.t_cljs$core$async34184.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34186){
var self__ = this;
var _34186__$1 = this;
return self__.meta34185;
}));

(cljs.core.async.t_cljs$core$async34184.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34184.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34184.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34184.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34184.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34184.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async34184.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34185","meta34185",761170904,null)], null);
}));

(cljs.core.async.t_cljs$core$async34184.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34184.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34184");

(cljs.core.async.t_cljs$core$async34184.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async34184");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34184.
 */
cljs.core.async.__GT_t_cljs$core$async34184 = (function cljs$core$async$__GT_t_cljs$core$async34184(f,ch,meta34185){
return (new cljs.core.async.t_cljs$core$async34184(f,ch,meta34185));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async34184(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34197 = (function (p,ch,meta34198){
this.p = p;
this.ch = ch;
this.meta34198 = meta34198;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34197.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34199,meta34198__$1){
var self__ = this;
var _34199__$1 = this;
return (new cljs.core.async.t_cljs$core$async34197(self__.p,self__.ch,meta34198__$1));
}));

(cljs.core.async.t_cljs$core$async34197.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34199){
var self__ = this;
var _34199__$1 = this;
return self__.meta34198;
}));

(cljs.core.async.t_cljs$core$async34197.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34197.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34197.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34197.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34197.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34197.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34197.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async34197.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34198","meta34198",-531665175,null)], null);
}));

(cljs.core.async.t_cljs$core$async34197.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34197.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34197");

(cljs.core.async.t_cljs$core$async34197.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async34197");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34197.
 */
cljs.core.async.__GT_t_cljs$core$async34197 = (function cljs$core$async$__GT_t_cljs$core$async34197(p,ch,meta34198){
return (new cljs.core.async.t_cljs$core$async34197(p,ch,meta34198));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async34197(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__34203 = arguments.length;
switch (G__34203) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31441__auto___35491 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31442__auto__ = (function (){var switch__30825__auto__ = (function (state_34224){
var state_val_34225 = (state_34224[(1)]);
if((state_val_34225 === (7))){
var inst_34220 = (state_34224[(2)]);
var state_34224__$1 = state_34224;
var statearr_34229_35493 = state_34224__$1;
(statearr_34229_35493[(2)] = inst_34220);

(statearr_34229_35493[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34225 === (1))){
var state_34224__$1 = state_34224;
var statearr_34230_35494 = state_34224__$1;
(statearr_34230_35494[(2)] = null);

(statearr_34230_35494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34225 === (4))){
var inst_34206 = (state_34224[(7)]);
var inst_34206__$1 = (state_34224[(2)]);
var inst_34207 = (inst_34206__$1 == null);
var state_34224__$1 = (function (){var statearr_34231 = state_34224;
(statearr_34231[(7)] = inst_34206__$1);

return statearr_34231;
})();
if(cljs.core.truth_(inst_34207)){
var statearr_34232_35495 = state_34224__$1;
(statearr_34232_35495[(1)] = (5));

} else {
var statearr_34233_35496 = state_34224__$1;
(statearr_34233_35496[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34225 === (6))){
var inst_34206 = (state_34224[(7)]);
var inst_34211 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34206) : p.call(null,inst_34206));
var state_34224__$1 = state_34224;
if(cljs.core.truth_(inst_34211)){
var statearr_34235_35497 = state_34224__$1;
(statearr_34235_35497[(1)] = (8));

} else {
var statearr_34237_35498 = state_34224__$1;
(statearr_34237_35498[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34225 === (3))){
var inst_34222 = (state_34224[(2)]);
var state_34224__$1 = state_34224;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34224__$1,inst_34222);
} else {
if((state_val_34225 === (2))){
var state_34224__$1 = state_34224;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34224__$1,(4),ch);
} else {
if((state_val_34225 === (11))){
var inst_34214 = (state_34224[(2)]);
var state_34224__$1 = state_34224;
var statearr_34239_35499 = state_34224__$1;
(statearr_34239_35499[(2)] = inst_34214);

(statearr_34239_35499[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34225 === (9))){
var state_34224__$1 = state_34224;
var statearr_34241_35501 = state_34224__$1;
(statearr_34241_35501[(2)] = null);

(statearr_34241_35501[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34225 === (5))){
var inst_34209 = cljs.core.async.close_BANG_(out);
var state_34224__$1 = state_34224;
var statearr_34242_35505 = state_34224__$1;
(statearr_34242_35505[(2)] = inst_34209);

(statearr_34242_35505[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34225 === (10))){
var inst_34217 = (state_34224[(2)]);
var state_34224__$1 = (function (){var statearr_34246 = state_34224;
(statearr_34246[(8)] = inst_34217);

return statearr_34246;
})();
var statearr_34247_35506 = state_34224__$1;
(statearr_34247_35506[(2)] = null);

(statearr_34247_35506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34225 === (8))){
var inst_34206 = (state_34224[(7)]);
var state_34224__$1 = state_34224;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34224__$1,(11),out,inst_34206);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30826__auto__ = null;
var cljs$core$async$state_machine__30826__auto____0 = (function (){
var statearr_34258 = [null,null,null,null,null,null,null,null,null];
(statearr_34258[(0)] = cljs$core$async$state_machine__30826__auto__);

(statearr_34258[(1)] = (1));

return statearr_34258;
});
var cljs$core$async$state_machine__30826__auto____1 = (function (state_34224){
while(true){
var ret_value__30827__auto__ = (function (){try{while(true){
var result__30828__auto__ = switch__30825__auto__(state_34224);
if(cljs.core.keyword_identical_QMARK_(result__30828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30828__auto__;
}
break;
}
}catch (e34259){var ex__30829__auto__ = e34259;
var statearr_34260_35511 = state_34224;
(statearr_34260_35511[(2)] = ex__30829__auto__);


if(cljs.core.seq((state_34224[(4)]))){
var statearr_34261_35512 = state_34224;
(statearr_34261_35512[(1)] = cljs.core.first((state_34224[(4)])));

} else {
throw ex__30829__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35513 = state_34224;
state_34224 = G__35513;
continue;
} else {
return ret_value__30827__auto__;
}
break;
}
});
cljs$core$async$state_machine__30826__auto__ = function(state_34224){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30826__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30826__auto____1.call(this,state_34224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30826__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30826__auto____0;
cljs$core$async$state_machine__30826__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30826__auto____1;
return cljs$core$async$state_machine__30826__auto__;
})()
})();
var state__31443__auto__ = (function (){var statearr_34270 = f__31442__auto__();
(statearr_34270[(6)] = c__31441__auto___35491);

return statearr_34270;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31443__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__34277 = arguments.length;
switch (G__34277) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__31441__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31442__auto__ = (function (){var switch__30825__auto__ = (function (state_34369){
var state_val_34370 = (state_34369[(1)]);
if((state_val_34370 === (7))){
var inst_34365 = (state_34369[(2)]);
var state_34369__$1 = state_34369;
var statearr_34378_35515 = state_34369__$1;
(statearr_34378_35515[(2)] = inst_34365);

(statearr_34378_35515[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34370 === (20))){
var inst_34332 = (state_34369[(7)]);
var inst_34346 = (state_34369[(2)]);
var inst_34347 = cljs.core.next(inst_34332);
var inst_34309 = inst_34347;
var inst_34310 = null;
var inst_34311 = (0);
var inst_34313 = (0);
var state_34369__$1 = (function (){var statearr_34379 = state_34369;
(statearr_34379[(8)] = inst_34346);

(statearr_34379[(9)] = inst_34309);

(statearr_34379[(10)] = inst_34310);

(statearr_34379[(11)] = inst_34311);

(statearr_34379[(12)] = inst_34313);

return statearr_34379;
})();
var statearr_34380_35523 = state_34369__$1;
(statearr_34380_35523[(2)] = null);

(statearr_34380_35523[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34370 === (1))){
var state_34369__$1 = state_34369;
var statearr_34381_35524 = state_34369__$1;
(statearr_34381_35524[(2)] = null);

(statearr_34381_35524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34370 === (4))){
var inst_34295 = (state_34369[(13)]);
var inst_34295__$1 = (state_34369[(2)]);
var inst_34296 = (inst_34295__$1 == null);
var state_34369__$1 = (function (){var statearr_34383 = state_34369;
(statearr_34383[(13)] = inst_34295__$1);

return statearr_34383;
})();
if(cljs.core.truth_(inst_34296)){
var statearr_34384_35525 = state_34369__$1;
(statearr_34384_35525[(1)] = (5));

} else {
var statearr_34385_35526 = state_34369__$1;
(statearr_34385_35526[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34370 === (15))){
var state_34369__$1 = state_34369;
var statearr_34389_35527 = state_34369__$1;
(statearr_34389_35527[(2)] = null);

(statearr_34389_35527[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34370 === (21))){
var state_34369__$1 = state_34369;
var statearr_34393_35528 = state_34369__$1;
(statearr_34393_35528[(2)] = null);

(statearr_34393_35528[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34370 === (13))){
var inst_34313 = (state_34369[(12)]);
var inst_34309 = (state_34369[(9)]);
var inst_34310 = (state_34369[(10)]);
var inst_34311 = (state_34369[(11)]);
var inst_34324 = (state_34369[(2)]);
var inst_34326 = (inst_34313 + (1));
var tmp34386 = inst_34310;
var tmp34387 = inst_34311;
var tmp34388 = inst_34309;
var inst_34309__$1 = tmp34388;
var inst_34310__$1 = tmp34386;
var inst_34311__$1 = tmp34387;
var inst_34313__$1 = inst_34326;
var state_34369__$1 = (function (){var statearr_34394 = state_34369;
(statearr_34394[(14)] = inst_34324);

(statearr_34394[(9)] = inst_34309__$1);

(statearr_34394[(10)] = inst_34310__$1);

(statearr_34394[(11)] = inst_34311__$1);

(statearr_34394[(12)] = inst_34313__$1);

return statearr_34394;
})();
var statearr_34396_35530 = state_34369__$1;
(statearr_34396_35530[(2)] = null);

(statearr_34396_35530[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34370 === (22))){
var state_34369__$1 = state_34369;
var statearr_34399_35534 = state_34369__$1;
(statearr_34399_35534[(2)] = null);

(statearr_34399_35534[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34370 === (6))){
var inst_34295 = (state_34369[(13)]);
var inst_34307 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34295) : f.call(null,inst_34295));
var inst_34308 = cljs.core.seq(inst_34307);
var inst_34309 = inst_34308;
var inst_34310 = null;
var inst_34311 = (0);
var inst_34313 = (0);
var state_34369__$1 = (function (){var statearr_34400 = state_34369;
(statearr_34400[(9)] = inst_34309);

(statearr_34400[(10)] = inst_34310);

(statearr_34400[(11)] = inst_34311);

(statearr_34400[(12)] = inst_34313);

return statearr_34400;
})();
var statearr_34401_35539 = state_34369__$1;
(statearr_34401_35539[(2)] = null);

(statearr_34401_35539[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34370 === (17))){
var inst_34332 = (state_34369[(7)]);
var inst_34336 = cljs.core.chunk_first(inst_34332);
var inst_34340 = cljs.core.chunk_rest(inst_34332);
var inst_34341 = cljs.core.count(inst_34336);
var inst_34309 = inst_34340;
var inst_34310 = inst_34336;
var inst_34311 = inst_34341;
var inst_34313 = (0);
var state_34369__$1 = (function (){var statearr_34402 = state_34369;
(statearr_34402[(9)] = inst_34309);

(statearr_34402[(10)] = inst_34310);

(statearr_34402[(11)] = inst_34311);

(statearr_34402[(12)] = inst_34313);

return statearr_34402;
})();
var statearr_34403_35541 = state_34369__$1;
(statearr_34403_35541[(2)] = null);

(statearr_34403_35541[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34370 === (3))){
var inst_34367 = (state_34369[(2)]);
var state_34369__$1 = state_34369;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34369__$1,inst_34367);
} else {
if((state_val_34370 === (12))){
var inst_34355 = (state_34369[(2)]);
var state_34369__$1 = state_34369;
var statearr_34406_35542 = state_34369__$1;
(statearr_34406_35542[(2)] = inst_34355);

(statearr_34406_35542[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34370 === (2))){
var state_34369__$1 = state_34369;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34369__$1,(4),in$);
} else {
if((state_val_34370 === (23))){
var inst_34363 = (state_34369[(2)]);
var state_34369__$1 = state_34369;
var statearr_34407_35543 = state_34369__$1;
(statearr_34407_35543[(2)] = inst_34363);

(statearr_34407_35543[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34370 === (19))){
var inst_34350 = (state_34369[(2)]);
var state_34369__$1 = state_34369;
var statearr_34408_35544 = state_34369__$1;
(statearr_34408_35544[(2)] = inst_34350);

(statearr_34408_35544[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34370 === (11))){
var inst_34309 = (state_34369[(9)]);
var inst_34332 = (state_34369[(7)]);
var inst_34332__$1 = cljs.core.seq(inst_34309);
var state_34369__$1 = (function (){var statearr_34427 = state_34369;
(statearr_34427[(7)] = inst_34332__$1);

return statearr_34427;
})();
if(inst_34332__$1){
var statearr_34433_35545 = state_34369__$1;
(statearr_34433_35545[(1)] = (14));

} else {
var statearr_34435_35546 = state_34369__$1;
(statearr_34435_35546[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34370 === (9))){
var inst_34357 = (state_34369[(2)]);
var inst_34358 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_34369__$1 = (function (){var statearr_34448 = state_34369;
(statearr_34448[(15)] = inst_34357);

return statearr_34448;
})();
if(cljs.core.truth_(inst_34358)){
var statearr_34453_35547 = state_34369__$1;
(statearr_34453_35547[(1)] = (21));

} else {
var statearr_34454_35548 = state_34369__$1;
(statearr_34454_35548[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34370 === (5))){
var inst_34298 = cljs.core.async.close_BANG_(out);
var state_34369__$1 = state_34369;
var statearr_34461_35553 = state_34369__$1;
(statearr_34461_35553[(2)] = inst_34298);

(statearr_34461_35553[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34370 === (14))){
var inst_34332 = (state_34369[(7)]);
var inst_34334 = cljs.core.chunked_seq_QMARK_(inst_34332);
var state_34369__$1 = state_34369;
if(inst_34334){
var statearr_34463_35554 = state_34369__$1;
(statearr_34463_35554[(1)] = (17));

} else {
var statearr_34464_35556 = state_34369__$1;
(statearr_34464_35556[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34370 === (16))){
var inst_34353 = (state_34369[(2)]);
var state_34369__$1 = state_34369;
var statearr_34466_35562 = state_34369__$1;
(statearr_34466_35562[(2)] = inst_34353);

(statearr_34466_35562[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34370 === (10))){
var inst_34310 = (state_34369[(10)]);
var inst_34313 = (state_34369[(12)]);
var inst_34322 = cljs.core._nth(inst_34310,inst_34313);
var state_34369__$1 = state_34369;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34369__$1,(13),out,inst_34322);
} else {
if((state_val_34370 === (18))){
var inst_34332 = (state_34369[(7)]);
var inst_34344 = cljs.core.first(inst_34332);
var state_34369__$1 = state_34369;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34369__$1,(20),out,inst_34344);
} else {
if((state_val_34370 === (8))){
var inst_34313 = (state_34369[(12)]);
var inst_34311 = (state_34369[(11)]);
var inst_34319 = (inst_34313 < inst_34311);
var inst_34320 = inst_34319;
var state_34369__$1 = state_34369;
if(cljs.core.truth_(inst_34320)){
var statearr_34478_35563 = state_34369__$1;
(statearr_34478_35563[(1)] = (10));

} else {
var statearr_34480_35567 = state_34369__$1;
(statearr_34480_35567[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__30826__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30826__auto____0 = (function (){
var statearr_34481 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34481[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30826__auto__);

(statearr_34481[(1)] = (1));

return statearr_34481;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30826__auto____1 = (function (state_34369){
while(true){
var ret_value__30827__auto__ = (function (){try{while(true){
var result__30828__auto__ = switch__30825__auto__(state_34369);
if(cljs.core.keyword_identical_QMARK_(result__30828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30828__auto__;
}
break;
}
}catch (e34486){var ex__30829__auto__ = e34486;
var statearr_34488_35592 = state_34369;
(statearr_34488_35592[(2)] = ex__30829__auto__);


if(cljs.core.seq((state_34369[(4)]))){
var statearr_34491_35593 = state_34369;
(statearr_34491_35593[(1)] = cljs.core.first((state_34369[(4)])));

} else {
throw ex__30829__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35594 = state_34369;
state_34369 = G__35594;
continue;
} else {
return ret_value__30827__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30826__auto__ = function(state_34369){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30826__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30826__auto____1.call(this,state_34369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__30826__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30826__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30826__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30826__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30826__auto__;
})()
})();
var state__31443__auto__ = (function (){var statearr_34492 = f__31442__auto__();
(statearr_34492[(6)] = c__31441__auto__);

return statearr_34492;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31443__auto__);
}));

return c__31441__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__34494 = arguments.length;
switch (G__34494) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__34507 = arguments.length;
switch (G__34507) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__34513 = arguments.length;
switch (G__34513) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31441__auto___35614 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31442__auto__ = (function (){var switch__30825__auto__ = (function (state_34555){
var state_val_34556 = (state_34555[(1)]);
if((state_val_34556 === (7))){
var inst_34549 = (state_34555[(2)]);
var state_34555__$1 = state_34555;
var statearr_34561_35615 = state_34555__$1;
(statearr_34561_35615[(2)] = inst_34549);

(statearr_34561_35615[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34556 === (1))){
var inst_34530 = null;
var state_34555__$1 = (function (){var statearr_34565 = state_34555;
(statearr_34565[(7)] = inst_34530);

return statearr_34565;
})();
var statearr_34569_35616 = state_34555__$1;
(statearr_34569_35616[(2)] = null);

(statearr_34569_35616[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34556 === (4))){
var inst_34534 = (state_34555[(8)]);
var inst_34534__$1 = (state_34555[(2)]);
var inst_34535 = (inst_34534__$1 == null);
var inst_34536 = cljs.core.not(inst_34535);
var state_34555__$1 = (function (){var statearr_34572 = state_34555;
(statearr_34572[(8)] = inst_34534__$1);

return statearr_34572;
})();
if(inst_34536){
var statearr_34573_35617 = state_34555__$1;
(statearr_34573_35617[(1)] = (5));

} else {
var statearr_34574_35618 = state_34555__$1;
(statearr_34574_35618[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34556 === (6))){
var state_34555__$1 = state_34555;
var statearr_34575_35619 = state_34555__$1;
(statearr_34575_35619[(2)] = null);

(statearr_34575_35619[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34556 === (3))){
var inst_34551 = (state_34555[(2)]);
var inst_34552 = cljs.core.async.close_BANG_(out);
var state_34555__$1 = (function (){var statearr_34579 = state_34555;
(statearr_34579[(9)] = inst_34551);

return statearr_34579;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34555__$1,inst_34552);
} else {
if((state_val_34556 === (2))){
var state_34555__$1 = state_34555;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34555__$1,(4),ch);
} else {
if((state_val_34556 === (11))){
var inst_34534 = (state_34555[(8)]);
var inst_34543 = (state_34555[(2)]);
var inst_34530 = inst_34534;
var state_34555__$1 = (function (){var statearr_34580 = state_34555;
(statearr_34580[(10)] = inst_34543);

(statearr_34580[(7)] = inst_34530);

return statearr_34580;
})();
var statearr_34581_35633 = state_34555__$1;
(statearr_34581_35633[(2)] = null);

(statearr_34581_35633[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34556 === (9))){
var inst_34534 = (state_34555[(8)]);
var state_34555__$1 = state_34555;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34555__$1,(11),out,inst_34534);
} else {
if((state_val_34556 === (5))){
var inst_34534 = (state_34555[(8)]);
var inst_34530 = (state_34555[(7)]);
var inst_34538 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34534,inst_34530);
var state_34555__$1 = state_34555;
if(inst_34538){
var statearr_34586_35634 = state_34555__$1;
(statearr_34586_35634[(1)] = (8));

} else {
var statearr_34587_35635 = state_34555__$1;
(statearr_34587_35635[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34556 === (10))){
var inst_34546 = (state_34555[(2)]);
var state_34555__$1 = state_34555;
var statearr_34588_35636 = state_34555__$1;
(statearr_34588_35636[(2)] = inst_34546);

(statearr_34588_35636[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34556 === (8))){
var inst_34530 = (state_34555[(7)]);
var tmp34582 = inst_34530;
var inst_34530__$1 = tmp34582;
var state_34555__$1 = (function (){var statearr_34589 = state_34555;
(statearr_34589[(7)] = inst_34530__$1);

return statearr_34589;
})();
var statearr_34590_35655 = state_34555__$1;
(statearr_34590_35655[(2)] = null);

(statearr_34590_35655[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30826__auto__ = null;
var cljs$core$async$state_machine__30826__auto____0 = (function (){
var statearr_34592 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34592[(0)] = cljs$core$async$state_machine__30826__auto__);

(statearr_34592[(1)] = (1));

return statearr_34592;
});
var cljs$core$async$state_machine__30826__auto____1 = (function (state_34555){
while(true){
var ret_value__30827__auto__ = (function (){try{while(true){
var result__30828__auto__ = switch__30825__auto__(state_34555);
if(cljs.core.keyword_identical_QMARK_(result__30828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30828__auto__;
}
break;
}
}catch (e34594){var ex__30829__auto__ = e34594;
var statearr_34595_35659 = state_34555;
(statearr_34595_35659[(2)] = ex__30829__auto__);


if(cljs.core.seq((state_34555[(4)]))){
var statearr_34597_35660 = state_34555;
(statearr_34597_35660[(1)] = cljs.core.first((state_34555[(4)])));

} else {
throw ex__30829__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35661 = state_34555;
state_34555 = G__35661;
continue;
} else {
return ret_value__30827__auto__;
}
break;
}
});
cljs$core$async$state_machine__30826__auto__ = function(state_34555){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30826__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30826__auto____1.call(this,state_34555);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30826__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30826__auto____0;
cljs$core$async$state_machine__30826__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30826__auto____1;
return cljs$core$async$state_machine__30826__auto__;
})()
})();
var state__31443__auto__ = (function (){var statearr_34599 = f__31442__auto__();
(statearr_34599[(6)] = c__31441__auto___35614);

return statearr_34599;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31443__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__34601 = arguments.length;
switch (G__34601) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31441__auto___35666 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31442__auto__ = (function (){var switch__30825__auto__ = (function (state_34665){
var state_val_34666 = (state_34665[(1)]);
if((state_val_34666 === (7))){
var inst_34661 = (state_34665[(2)]);
var state_34665__$1 = state_34665;
var statearr_34672_35667 = state_34665__$1;
(statearr_34672_35667[(2)] = inst_34661);

(statearr_34672_35667[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34666 === (1))){
var inst_34619 = (new Array(n));
var inst_34620 = inst_34619;
var inst_34621 = (0);
var state_34665__$1 = (function (){var statearr_34683 = state_34665;
(statearr_34683[(7)] = inst_34620);

(statearr_34683[(8)] = inst_34621);

return statearr_34683;
})();
var statearr_34684_35668 = state_34665__$1;
(statearr_34684_35668[(2)] = null);

(statearr_34684_35668[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34666 === (4))){
var inst_34624 = (state_34665[(9)]);
var inst_34624__$1 = (state_34665[(2)]);
var inst_34625 = (inst_34624__$1 == null);
var inst_34626 = cljs.core.not(inst_34625);
var state_34665__$1 = (function (){var statearr_34685 = state_34665;
(statearr_34685[(9)] = inst_34624__$1);

return statearr_34685;
})();
if(inst_34626){
var statearr_34688_35673 = state_34665__$1;
(statearr_34688_35673[(1)] = (5));

} else {
var statearr_34689_35674 = state_34665__$1;
(statearr_34689_35674[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34666 === (15))){
var inst_34655 = (state_34665[(2)]);
var state_34665__$1 = state_34665;
var statearr_34690_35680 = state_34665__$1;
(statearr_34690_35680[(2)] = inst_34655);

(statearr_34690_35680[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34666 === (13))){
var state_34665__$1 = state_34665;
var statearr_34692_35683 = state_34665__$1;
(statearr_34692_35683[(2)] = null);

(statearr_34692_35683[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34666 === (6))){
var inst_34621 = (state_34665[(8)]);
var inst_34642 = (inst_34621 > (0));
var state_34665__$1 = state_34665;
if(cljs.core.truth_(inst_34642)){
var statearr_34693_35697 = state_34665__$1;
(statearr_34693_35697[(1)] = (12));

} else {
var statearr_34694_35698 = state_34665__$1;
(statearr_34694_35698[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34666 === (3))){
var inst_34663 = (state_34665[(2)]);
var state_34665__$1 = state_34665;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34665__$1,inst_34663);
} else {
if((state_val_34666 === (12))){
var inst_34620 = (state_34665[(7)]);
var inst_34653 = cljs.core.vec(inst_34620);
var state_34665__$1 = state_34665;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34665__$1,(15),out,inst_34653);
} else {
if((state_val_34666 === (2))){
var state_34665__$1 = state_34665;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34665__$1,(4),ch);
} else {
if((state_val_34666 === (11))){
var inst_34636 = (state_34665[(2)]);
var inst_34637 = (new Array(n));
var inst_34620 = inst_34637;
var inst_34621 = (0);
var state_34665__$1 = (function (){var statearr_34704 = state_34665;
(statearr_34704[(10)] = inst_34636);

(statearr_34704[(7)] = inst_34620);

(statearr_34704[(8)] = inst_34621);

return statearr_34704;
})();
var statearr_34705_35701 = state_34665__$1;
(statearr_34705_35701[(2)] = null);

(statearr_34705_35701[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34666 === (9))){
var inst_34620 = (state_34665[(7)]);
var inst_34634 = cljs.core.vec(inst_34620);
var state_34665__$1 = state_34665;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34665__$1,(11),out,inst_34634);
} else {
if((state_val_34666 === (5))){
var inst_34620 = (state_34665[(7)]);
var inst_34621 = (state_34665[(8)]);
var inst_34624 = (state_34665[(9)]);
var inst_34629 = (state_34665[(11)]);
var inst_34628 = (inst_34620[inst_34621] = inst_34624);
var inst_34629__$1 = (inst_34621 + (1));
var inst_34630 = (inst_34629__$1 < n);
var state_34665__$1 = (function (){var statearr_34710 = state_34665;
(statearr_34710[(12)] = inst_34628);

(statearr_34710[(11)] = inst_34629__$1);

return statearr_34710;
})();
if(cljs.core.truth_(inst_34630)){
var statearr_34712_35709 = state_34665__$1;
(statearr_34712_35709[(1)] = (8));

} else {
var statearr_34713_35710 = state_34665__$1;
(statearr_34713_35710[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34666 === (14))){
var inst_34658 = (state_34665[(2)]);
var inst_34659 = cljs.core.async.close_BANG_(out);
var state_34665__$1 = (function (){var statearr_34716 = state_34665;
(statearr_34716[(13)] = inst_34658);

return statearr_34716;
})();
var statearr_34717_35711 = state_34665__$1;
(statearr_34717_35711[(2)] = inst_34659);

(statearr_34717_35711[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34666 === (10))){
var inst_34640 = (state_34665[(2)]);
var state_34665__$1 = state_34665;
var statearr_34721_35716 = state_34665__$1;
(statearr_34721_35716[(2)] = inst_34640);

(statearr_34721_35716[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34666 === (8))){
var inst_34620 = (state_34665[(7)]);
var inst_34629 = (state_34665[(11)]);
var tmp34714 = inst_34620;
var inst_34620__$1 = tmp34714;
var inst_34621 = inst_34629;
var state_34665__$1 = (function (){var statearr_34723 = state_34665;
(statearr_34723[(7)] = inst_34620__$1);

(statearr_34723[(8)] = inst_34621);

return statearr_34723;
})();
var statearr_34724_35731 = state_34665__$1;
(statearr_34724_35731[(2)] = null);

(statearr_34724_35731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30826__auto__ = null;
var cljs$core$async$state_machine__30826__auto____0 = (function (){
var statearr_34725 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34725[(0)] = cljs$core$async$state_machine__30826__auto__);

(statearr_34725[(1)] = (1));

return statearr_34725;
});
var cljs$core$async$state_machine__30826__auto____1 = (function (state_34665){
while(true){
var ret_value__30827__auto__ = (function (){try{while(true){
var result__30828__auto__ = switch__30825__auto__(state_34665);
if(cljs.core.keyword_identical_QMARK_(result__30828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30828__auto__;
}
break;
}
}catch (e34726){var ex__30829__auto__ = e34726;
var statearr_34727_35736 = state_34665;
(statearr_34727_35736[(2)] = ex__30829__auto__);


if(cljs.core.seq((state_34665[(4)]))){
var statearr_34728_35741 = state_34665;
(statearr_34728_35741[(1)] = cljs.core.first((state_34665[(4)])));

} else {
throw ex__30829__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35742 = state_34665;
state_34665 = G__35742;
continue;
} else {
return ret_value__30827__auto__;
}
break;
}
});
cljs$core$async$state_machine__30826__auto__ = function(state_34665){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30826__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30826__auto____1.call(this,state_34665);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30826__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30826__auto____0;
cljs$core$async$state_machine__30826__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30826__auto____1;
return cljs$core$async$state_machine__30826__auto__;
})()
})();
var state__31443__auto__ = (function (){var statearr_34729 = f__31442__auto__();
(statearr_34729[(6)] = c__31441__auto___35666);

return statearr_34729;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31443__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__34742 = arguments.length;
switch (G__34742) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31441__auto___35750 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31442__auto__ = (function (){var switch__30825__auto__ = (function (state_34790){
var state_val_34791 = (state_34790[(1)]);
if((state_val_34791 === (7))){
var inst_34786 = (state_34790[(2)]);
var state_34790__$1 = state_34790;
var statearr_34794_35752 = state_34790__$1;
(statearr_34794_35752[(2)] = inst_34786);

(statearr_34794_35752[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34791 === (1))){
var inst_34744 = [];
var inst_34745 = inst_34744;
var inst_34746 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34790__$1 = (function (){var statearr_34795 = state_34790;
(statearr_34795[(7)] = inst_34745);

(statearr_34795[(8)] = inst_34746);

return statearr_34795;
})();
var statearr_34796_35754 = state_34790__$1;
(statearr_34796_35754[(2)] = null);

(statearr_34796_35754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34791 === (4))){
var inst_34749 = (state_34790[(9)]);
var inst_34749__$1 = (state_34790[(2)]);
var inst_34750 = (inst_34749__$1 == null);
var inst_34751 = cljs.core.not(inst_34750);
var state_34790__$1 = (function (){var statearr_34797 = state_34790;
(statearr_34797[(9)] = inst_34749__$1);

return statearr_34797;
})();
if(inst_34751){
var statearr_34799_35756 = state_34790__$1;
(statearr_34799_35756[(1)] = (5));

} else {
var statearr_34800_35757 = state_34790__$1;
(statearr_34800_35757[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34791 === (15))){
var inst_34745 = (state_34790[(7)]);
var inst_34778 = cljs.core.vec(inst_34745);
var state_34790__$1 = state_34790;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34790__$1,(18),out,inst_34778);
} else {
if((state_val_34791 === (13))){
var inst_34773 = (state_34790[(2)]);
var state_34790__$1 = state_34790;
var statearr_34802_35758 = state_34790__$1;
(statearr_34802_35758[(2)] = inst_34773);

(statearr_34802_35758[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34791 === (6))){
var inst_34745 = (state_34790[(7)]);
var inst_34775 = inst_34745.length;
var inst_34776 = (inst_34775 > (0));
var state_34790__$1 = state_34790;
if(cljs.core.truth_(inst_34776)){
var statearr_34803_35760 = state_34790__$1;
(statearr_34803_35760[(1)] = (15));

} else {
var statearr_34804_35761 = state_34790__$1;
(statearr_34804_35761[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34791 === (17))){
var inst_34783 = (state_34790[(2)]);
var inst_34784 = cljs.core.async.close_BANG_(out);
var state_34790__$1 = (function (){var statearr_34805 = state_34790;
(statearr_34805[(10)] = inst_34783);

return statearr_34805;
})();
var statearr_34806_35763 = state_34790__$1;
(statearr_34806_35763[(2)] = inst_34784);

(statearr_34806_35763[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34791 === (3))){
var inst_34788 = (state_34790[(2)]);
var state_34790__$1 = state_34790;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34790__$1,inst_34788);
} else {
if((state_val_34791 === (12))){
var inst_34745 = (state_34790[(7)]);
var inst_34764 = cljs.core.vec(inst_34745);
var state_34790__$1 = state_34790;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34790__$1,(14),out,inst_34764);
} else {
if((state_val_34791 === (2))){
var state_34790__$1 = state_34790;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34790__$1,(4),ch);
} else {
if((state_val_34791 === (11))){
var inst_34745 = (state_34790[(7)]);
var inst_34749 = (state_34790[(9)]);
var inst_34753 = (state_34790[(11)]);
var inst_34761 = inst_34745.push(inst_34749);
var tmp34807 = inst_34745;
var inst_34745__$1 = tmp34807;
var inst_34746 = inst_34753;
var state_34790__$1 = (function (){var statearr_34820 = state_34790;
(statearr_34820[(12)] = inst_34761);

(statearr_34820[(7)] = inst_34745__$1);

(statearr_34820[(8)] = inst_34746);

return statearr_34820;
})();
var statearr_34821_35765 = state_34790__$1;
(statearr_34821_35765[(2)] = null);

(statearr_34821_35765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34791 === (9))){
var inst_34746 = (state_34790[(8)]);
var inst_34757 = cljs.core.keyword_identical_QMARK_(inst_34746,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_34790__$1 = state_34790;
var statearr_34826_35766 = state_34790__$1;
(statearr_34826_35766[(2)] = inst_34757);

(statearr_34826_35766[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34791 === (5))){
var inst_34749 = (state_34790[(9)]);
var inst_34753 = (state_34790[(11)]);
var inst_34746 = (state_34790[(8)]);
var inst_34754 = (state_34790[(13)]);
var inst_34753__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34749) : f.call(null,inst_34749));
var inst_34754__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34753__$1,inst_34746);
var state_34790__$1 = (function (){var statearr_34827 = state_34790;
(statearr_34827[(11)] = inst_34753__$1);

(statearr_34827[(13)] = inst_34754__$1);

return statearr_34827;
})();
if(inst_34754__$1){
var statearr_34828_35768 = state_34790__$1;
(statearr_34828_35768[(1)] = (8));

} else {
var statearr_34829_35769 = state_34790__$1;
(statearr_34829_35769[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34791 === (14))){
var inst_34749 = (state_34790[(9)]);
var inst_34753 = (state_34790[(11)]);
var inst_34766 = (state_34790[(2)]);
var inst_34767 = [];
var inst_34768 = inst_34767.push(inst_34749);
var inst_34745 = inst_34767;
var inst_34746 = inst_34753;
var state_34790__$1 = (function (){var statearr_34831 = state_34790;
(statearr_34831[(14)] = inst_34766);

(statearr_34831[(15)] = inst_34768);

(statearr_34831[(7)] = inst_34745);

(statearr_34831[(8)] = inst_34746);

return statearr_34831;
})();
var statearr_34832_35770 = state_34790__$1;
(statearr_34832_35770[(2)] = null);

(statearr_34832_35770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34791 === (16))){
var state_34790__$1 = state_34790;
var statearr_34833_35771 = state_34790__$1;
(statearr_34833_35771[(2)] = null);

(statearr_34833_35771[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34791 === (10))){
var inst_34759 = (state_34790[(2)]);
var state_34790__$1 = state_34790;
if(cljs.core.truth_(inst_34759)){
var statearr_34834_35772 = state_34790__$1;
(statearr_34834_35772[(1)] = (11));

} else {
var statearr_34841_35773 = state_34790__$1;
(statearr_34841_35773[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34791 === (18))){
var inst_34780 = (state_34790[(2)]);
var state_34790__$1 = state_34790;
var statearr_34842_35775 = state_34790__$1;
(statearr_34842_35775[(2)] = inst_34780);

(statearr_34842_35775[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34791 === (8))){
var inst_34754 = (state_34790[(13)]);
var state_34790__$1 = state_34790;
var statearr_34846_35776 = state_34790__$1;
(statearr_34846_35776[(2)] = inst_34754);

(statearr_34846_35776[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30826__auto__ = null;
var cljs$core$async$state_machine__30826__auto____0 = (function (){
var statearr_34848 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34848[(0)] = cljs$core$async$state_machine__30826__auto__);

(statearr_34848[(1)] = (1));

return statearr_34848;
});
var cljs$core$async$state_machine__30826__auto____1 = (function (state_34790){
while(true){
var ret_value__30827__auto__ = (function (){try{while(true){
var result__30828__auto__ = switch__30825__auto__(state_34790);
if(cljs.core.keyword_identical_QMARK_(result__30828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30828__auto__;
}
break;
}
}catch (e34852){var ex__30829__auto__ = e34852;
var statearr_34853_35778 = state_34790;
(statearr_34853_35778[(2)] = ex__30829__auto__);


if(cljs.core.seq((state_34790[(4)]))){
var statearr_34854_35779 = state_34790;
(statearr_34854_35779[(1)] = cljs.core.first((state_34790[(4)])));

} else {
throw ex__30829__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35780 = state_34790;
state_34790 = G__35780;
continue;
} else {
return ret_value__30827__auto__;
}
break;
}
});
cljs$core$async$state_machine__30826__auto__ = function(state_34790){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30826__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30826__auto____1.call(this,state_34790);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30826__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30826__auto____0;
cljs$core$async$state_machine__30826__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30826__auto____1;
return cljs$core$async$state_machine__30826__auto__;
})()
})();
var state__31443__auto__ = (function (){var statearr_34855 = f__31442__auto__();
(statearr_34855[(6)] = c__31441__auto___35750);

return statearr_34855;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31443__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
