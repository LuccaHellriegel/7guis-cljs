goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__33014 = arguments.length;
switch (G__33014) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33015 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33015 = (function (f,blockable,meta33016){
this.f = f;
this.blockable = blockable;
this.meta33016 = meta33016;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33015.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33017,meta33016__$1){
var self__ = this;
var _33017__$1 = this;
return (new cljs.core.async.t_cljs$core$async33015(self__.f,self__.blockable,meta33016__$1));
}));

(cljs.core.async.t_cljs$core$async33015.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33017){
var self__ = this;
var _33017__$1 = this;
return self__.meta33016;
}));

(cljs.core.async.t_cljs$core$async33015.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33015.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33015.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async33015.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async33015.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta33016","meta33016",1821063713,null)], null);
}));

(cljs.core.async.t_cljs$core$async33015.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33015.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33015");

(cljs.core.async.t_cljs$core$async33015.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async33015");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33015.
 */
cljs.core.async.__GT_t_cljs$core$async33015 = (function cljs$core$async$__GT_t_cljs$core$async33015(f__$1,blockable__$1,meta33016){
return (new cljs.core.async.t_cljs$core$async33015(f__$1,blockable__$1,meta33016));
});

}

return (new cljs.core.async.t_cljs$core$async33015(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__33032 = arguments.length;
switch (G__33032) {
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
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__33044 = arguments.length;
switch (G__33044) {
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
var G__33046 = arguments.length;
switch (G__33046) {
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
var val_35370 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_35370) : fn1.call(null,val_35370));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_35370) : fn1.call(null,val_35370));
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
var G__33061 = arguments.length;
switch (G__33061) {
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
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
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
var n__4613__auto___35374 = n;
var x_35375 = (0);
while(true){
if((x_35375 < n__4613__auto___35374)){
(a[x_35375] = x_35375);

var G__35376 = (x_35375 + (1));
x_35375 = G__35376;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33065 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33065 = (function (flag,meta33066){
this.flag = flag;
this.meta33066 = meta33066;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33065.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33067,meta33066__$1){
var self__ = this;
var _33067__$1 = this;
return (new cljs.core.async.t_cljs$core$async33065(self__.flag,meta33066__$1));
}));

(cljs.core.async.t_cljs$core$async33065.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33067){
var self__ = this;
var _33067__$1 = this;
return self__.meta33066;
}));

(cljs.core.async.t_cljs$core$async33065.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33065.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async33065.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33065.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async33065.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta33066","meta33066",-1097936177,null)], null);
}));

(cljs.core.async.t_cljs$core$async33065.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33065.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33065");

(cljs.core.async.t_cljs$core$async33065.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async33065");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33065.
 */
cljs.core.async.__GT_t_cljs$core$async33065 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async33065(flag__$1,meta33066){
return (new cljs.core.async.t_cljs$core$async33065(flag__$1,meta33066));
});

}

return (new cljs.core.async.t_cljs$core$async33065(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33073 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33073 = (function (flag,cb,meta33074){
this.flag = flag;
this.cb = cb;
this.meta33074 = meta33074;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33073.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33075,meta33074__$1){
var self__ = this;
var _33075__$1 = this;
return (new cljs.core.async.t_cljs$core$async33073(self__.flag,self__.cb,meta33074__$1));
}));

(cljs.core.async.t_cljs$core$async33073.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33075){
var self__ = this;
var _33075__$1 = this;
return self__.meta33074;
}));

(cljs.core.async.t_cljs$core$async33073.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33073.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async33073.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33073.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async33073.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta33074","meta33074",1493569644,null)], null);
}));

(cljs.core.async.t_cljs$core$async33073.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33073.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33073");

(cljs.core.async.t_cljs$core$async33073.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async33073");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33073.
 */
cljs.core.async.__GT_t_cljs$core$async33073 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async33073(flag__$1,cb__$1,meta33074){
return (new cljs.core.async.t_cljs$core$async33073(flag__$1,cb__$1,meta33074));
});

}

return (new cljs.core.async.t_cljs$core$async33073(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33082_SHARP_){
var G__33084 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33082_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33084) : fret.call(null,G__33084));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33083_SHARP_){
var G__33085 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33083_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33085) : fret.call(null,G__33085));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__35399 = (i + (1));
i = G__35399;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
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
var args__4742__auto__ = [];
var len__4736__auto___35402 = arguments.length;
var i__4737__auto___35403 = (0);
while(true){
if((i__4737__auto___35403 < len__4736__auto___35402)){
args__4742__auto__.push((arguments[i__4737__auto___35403]));

var G__35404 = (i__4737__auto___35403 + (1));
i__4737__auto___35403 = G__35404;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__33088){
var map__33089 = p__33088;
var map__33089__$1 = (((((!((map__33089 == null))))?(((((map__33089.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33089.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33089):map__33089);
var opts = map__33089__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq33086){
var G__33087 = cljs.core.first(seq33086);
var seq33086__$1 = cljs.core.next(seq33086);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33087,seq33086__$1);
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
var G__33092 = arguments.length;
switch (G__33092) {
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
var c__32934__auto___35410 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32935__auto__ = (function (){var switch__32743__auto__ = (function (state_33132){
var state_val_33136 = (state_33132[(1)]);
if((state_val_33136 === (7))){
var inst_33125 = (state_33132[(2)]);
var state_33132__$1 = state_33132;
var statearr_33140_35413 = state_33132__$1;
(statearr_33140_35413[(2)] = inst_33125);

(statearr_33140_35413[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33136 === (1))){
var state_33132__$1 = state_33132;
var statearr_33141_35414 = state_33132__$1;
(statearr_33141_35414[(2)] = null);

(statearr_33141_35414[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33136 === (4))){
var inst_33098 = (state_33132[(7)]);
var inst_33098__$1 = (state_33132[(2)]);
var inst_33099 = (inst_33098__$1 == null);
var state_33132__$1 = (function (){var statearr_33145 = state_33132;
(statearr_33145[(7)] = inst_33098__$1);

return statearr_33145;
})();
if(cljs.core.truth_(inst_33099)){
var statearr_33146_35415 = state_33132__$1;
(statearr_33146_35415[(1)] = (5));

} else {
var statearr_33147_35416 = state_33132__$1;
(statearr_33147_35416[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33136 === (13))){
var state_33132__$1 = state_33132;
var statearr_33148_35417 = state_33132__$1;
(statearr_33148_35417[(2)] = null);

(statearr_33148_35417[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33136 === (6))){
var inst_33098 = (state_33132[(7)]);
var state_33132__$1 = state_33132;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33132__$1,(11),to,inst_33098);
} else {
if((state_val_33136 === (3))){
var inst_33127 = (state_33132[(2)]);
var state_33132__$1 = state_33132;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33132__$1,inst_33127);
} else {
if((state_val_33136 === (12))){
var state_33132__$1 = state_33132;
var statearr_33152_35419 = state_33132__$1;
(statearr_33152_35419[(2)] = null);

(statearr_33152_35419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33136 === (2))){
var state_33132__$1 = state_33132;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33132__$1,(4),from);
} else {
if((state_val_33136 === (11))){
var inst_33115 = (state_33132[(2)]);
var state_33132__$1 = state_33132;
if(cljs.core.truth_(inst_33115)){
var statearr_33153_35420 = state_33132__$1;
(statearr_33153_35420[(1)] = (12));

} else {
var statearr_33154_35421 = state_33132__$1;
(statearr_33154_35421[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33136 === (9))){
var state_33132__$1 = state_33132;
var statearr_33156_35422 = state_33132__$1;
(statearr_33156_35422[(2)] = null);

(statearr_33156_35422[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33136 === (5))){
var state_33132__$1 = state_33132;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33157_35423 = state_33132__$1;
(statearr_33157_35423[(1)] = (8));

} else {
var statearr_33158_35428 = state_33132__$1;
(statearr_33158_35428[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33136 === (14))){
var inst_33123 = (state_33132[(2)]);
var state_33132__$1 = state_33132;
var statearr_33159_35429 = state_33132__$1;
(statearr_33159_35429[(2)] = inst_33123);

(statearr_33159_35429[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33136 === (10))){
var inst_33108 = (state_33132[(2)]);
var state_33132__$1 = state_33132;
var statearr_33160_35430 = state_33132__$1;
(statearr_33160_35430[(2)] = inst_33108);

(statearr_33160_35430[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33136 === (8))){
var inst_33105 = cljs.core.async.close_BANG_(to);
var state_33132__$1 = state_33132;
var statearr_33161_35431 = state_33132__$1;
(statearr_33161_35431[(2)] = inst_33105);

(statearr_33161_35431[(1)] = (10));


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
var cljs$core$async$state_machine__32744__auto__ = null;
var cljs$core$async$state_machine__32744__auto____0 = (function (){
var statearr_33162 = [null,null,null,null,null,null,null,null];
(statearr_33162[(0)] = cljs$core$async$state_machine__32744__auto__);

(statearr_33162[(1)] = (1));

return statearr_33162;
});
var cljs$core$async$state_machine__32744__auto____1 = (function (state_33132){
while(true){
var ret_value__32745__auto__ = (function (){try{while(true){
var result__32746__auto__ = switch__32743__auto__(state_33132);
if(cljs.core.keyword_identical_QMARK_(result__32746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32746__auto__;
}
break;
}
}catch (e33163){var ex__32747__auto__ = e33163;
var statearr_33164_35434 = state_33132;
(statearr_33164_35434[(2)] = ex__32747__auto__);


if(cljs.core.seq((state_33132[(4)]))){
var statearr_33165_35435 = state_33132;
(statearr_33165_35435[(1)] = cljs.core.first((state_33132[(4)])));

} else {
throw ex__32747__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32745__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35436 = state_33132;
state_33132 = G__35436;
continue;
} else {
return ret_value__32745__auto__;
}
break;
}
});
cljs$core$async$state_machine__32744__auto__ = function(state_33132){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32744__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32744__auto____1.call(this,state_33132);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32744__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32744__auto____0;
cljs$core$async$state_machine__32744__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32744__auto____1;
return cljs$core$async$state_machine__32744__auto__;
})()
})();
var state__32936__auto__ = (function (){var statearr_33166 = f__32935__auto__();
(statearr_33166[(6)] = c__32934__auto___35410);

return statearr_33166;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32936__auto__);
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
var process = (function (p__33168){
var vec__33169 = p__33168;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33169,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33169,(1),null);
var job = vec__33169;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__32934__auto___35440 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32935__auto__ = (function (){var switch__32743__auto__ = (function (state_33176){
var state_val_33177 = (state_33176[(1)]);
if((state_val_33177 === (1))){
var state_33176__$1 = state_33176;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33176__$1,(2),res,v);
} else {
if((state_val_33177 === (2))){
var inst_33173 = (state_33176[(2)]);
var inst_33174 = cljs.core.async.close_BANG_(res);
var state_33176__$1 = (function (){var statearr_33211 = state_33176;
(statearr_33211[(7)] = inst_33173);

return statearr_33211;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33176__$1,inst_33174);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32744__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32744__auto____0 = (function (){
var statearr_33212 = [null,null,null,null,null,null,null,null];
(statearr_33212[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32744__auto__);

(statearr_33212[(1)] = (1));

return statearr_33212;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32744__auto____1 = (function (state_33176){
while(true){
var ret_value__32745__auto__ = (function (){try{while(true){
var result__32746__auto__ = switch__32743__auto__(state_33176);
if(cljs.core.keyword_identical_QMARK_(result__32746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32746__auto__;
}
break;
}
}catch (e33215){var ex__32747__auto__ = e33215;
var statearr_33216_35450 = state_33176;
(statearr_33216_35450[(2)] = ex__32747__auto__);


if(cljs.core.seq((state_33176[(4)]))){
var statearr_33217_35455 = state_33176;
(statearr_33217_35455[(1)] = cljs.core.first((state_33176[(4)])));

} else {
throw ex__32747__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32745__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35459 = state_33176;
state_33176 = G__35459;
continue;
} else {
return ret_value__32745__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32744__auto__ = function(state_33176){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32744__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32744__auto____1.call(this,state_33176);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32744__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32744__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32744__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32744__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32744__auto__;
})()
})();
var state__32936__auto__ = (function (){var statearr_33222 = f__32935__auto__();
(statearr_33222[(6)] = c__32934__auto___35440);

return statearr_33222;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32936__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__33223){
var vec__33224 = p__33223;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33224,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33224,(1),null);
var job = vec__33224;
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
var n__4613__auto___35467 = n;
var __35468 = (0);
while(true){
if((__35468 < n__4613__auto___35467)){
var G__33230_35469 = type;
var G__33230_35470__$1 = (((G__33230_35469 instanceof cljs.core.Keyword))?G__33230_35469.fqn:null);
switch (G__33230_35470__$1) {
case "compute":
var c__32934__auto___35472 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__35468,c__32934__auto___35472,G__33230_35469,G__33230_35470__$1,n__4613__auto___35467,jobs,results,process,async){
return (function (){
var f__32935__auto__ = (function (){var switch__32743__auto__ = ((function (__35468,c__32934__auto___35472,G__33230_35469,G__33230_35470__$1,n__4613__auto___35467,jobs,results,process,async){
return (function (state_33255){
var state_val_33256 = (state_33255[(1)]);
if((state_val_33256 === (1))){
var state_33255__$1 = state_33255;
var statearr_33270_35476 = state_33255__$1;
(statearr_33270_35476[(2)] = null);

(statearr_33270_35476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33256 === (2))){
var state_33255__$1 = state_33255;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33255__$1,(4),jobs);
} else {
if((state_val_33256 === (3))){
var inst_33253 = (state_33255[(2)]);
var state_33255__$1 = state_33255;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33255__$1,inst_33253);
} else {
if((state_val_33256 === (4))){
var inst_33241 = (state_33255[(2)]);
var inst_33242 = process(inst_33241);
var state_33255__$1 = state_33255;
if(cljs.core.truth_(inst_33242)){
var statearr_33332_35484 = state_33255__$1;
(statearr_33332_35484[(1)] = (5));

} else {
var statearr_33334_35485 = state_33255__$1;
(statearr_33334_35485[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33256 === (5))){
var state_33255__$1 = state_33255;
var statearr_33335_35486 = state_33255__$1;
(statearr_33335_35486[(2)] = null);

(statearr_33335_35486[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33256 === (6))){
var state_33255__$1 = state_33255;
var statearr_33336_35490 = state_33255__$1;
(statearr_33336_35490[(2)] = null);

(statearr_33336_35490[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33256 === (7))){
var inst_33249 = (state_33255[(2)]);
var state_33255__$1 = state_33255;
var statearr_33337_35494 = state_33255__$1;
(statearr_33337_35494[(2)] = inst_33249);

(statearr_33337_35494[(1)] = (3));


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
});})(__35468,c__32934__auto___35472,G__33230_35469,G__33230_35470__$1,n__4613__auto___35467,jobs,results,process,async))
;
return ((function (__35468,switch__32743__auto__,c__32934__auto___35472,G__33230_35469,G__33230_35470__$1,n__4613__auto___35467,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32744__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32744__auto____0 = (function (){
var statearr_33342 = [null,null,null,null,null,null,null];
(statearr_33342[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32744__auto__);

(statearr_33342[(1)] = (1));

return statearr_33342;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32744__auto____1 = (function (state_33255){
while(true){
var ret_value__32745__auto__ = (function (){try{while(true){
var result__32746__auto__ = switch__32743__auto__(state_33255);
if(cljs.core.keyword_identical_QMARK_(result__32746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32746__auto__;
}
break;
}
}catch (e33351){var ex__32747__auto__ = e33351;
var statearr_33353_35498 = state_33255;
(statearr_33353_35498[(2)] = ex__32747__auto__);


if(cljs.core.seq((state_33255[(4)]))){
var statearr_33354_35499 = state_33255;
(statearr_33354_35499[(1)] = cljs.core.first((state_33255[(4)])));

} else {
throw ex__32747__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32745__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35500 = state_33255;
state_33255 = G__35500;
continue;
} else {
return ret_value__32745__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32744__auto__ = function(state_33255){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32744__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32744__auto____1.call(this,state_33255);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32744__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32744__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32744__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32744__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32744__auto__;
})()
;})(__35468,switch__32743__auto__,c__32934__auto___35472,G__33230_35469,G__33230_35470__$1,n__4613__auto___35467,jobs,results,process,async))
})();
var state__32936__auto__ = (function (){var statearr_33360 = f__32935__auto__();
(statearr_33360[(6)] = c__32934__auto___35472);

return statearr_33360;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32936__auto__);
});})(__35468,c__32934__auto___35472,G__33230_35469,G__33230_35470__$1,n__4613__auto___35467,jobs,results,process,async))
);


break;
case "async":
var c__32934__auto___35504 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__35468,c__32934__auto___35504,G__33230_35469,G__33230_35470__$1,n__4613__auto___35467,jobs,results,process,async){
return (function (){
var f__32935__auto__ = (function (){var switch__32743__auto__ = ((function (__35468,c__32934__auto___35504,G__33230_35469,G__33230_35470__$1,n__4613__auto___35467,jobs,results,process,async){
return (function (state_33375){
var state_val_33376 = (state_33375[(1)]);
if((state_val_33376 === (1))){
var state_33375__$1 = state_33375;
var statearr_33378_35509 = state_33375__$1;
(statearr_33378_35509[(2)] = null);

(statearr_33378_35509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33376 === (2))){
var state_33375__$1 = state_33375;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33375__$1,(4),jobs);
} else {
if((state_val_33376 === (3))){
var inst_33372 = (state_33375[(2)]);
var state_33375__$1 = state_33375;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33375__$1,inst_33372);
} else {
if((state_val_33376 === (4))){
var inst_33364 = (state_33375[(2)]);
var inst_33365 = async(inst_33364);
var state_33375__$1 = state_33375;
if(cljs.core.truth_(inst_33365)){
var statearr_33381_35516 = state_33375__$1;
(statearr_33381_35516[(1)] = (5));

} else {
var statearr_33387_35517 = state_33375__$1;
(statearr_33387_35517[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33376 === (5))){
var state_33375__$1 = state_33375;
var statearr_33388_35520 = state_33375__$1;
(statearr_33388_35520[(2)] = null);

(statearr_33388_35520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33376 === (6))){
var state_33375__$1 = state_33375;
var statearr_33389_35523 = state_33375__$1;
(statearr_33389_35523[(2)] = null);

(statearr_33389_35523[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33376 === (7))){
var inst_33370 = (state_33375[(2)]);
var state_33375__$1 = state_33375;
var statearr_33390_35526 = state_33375__$1;
(statearr_33390_35526[(2)] = inst_33370);

(statearr_33390_35526[(1)] = (3));


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
});})(__35468,c__32934__auto___35504,G__33230_35469,G__33230_35470__$1,n__4613__auto___35467,jobs,results,process,async))
;
return ((function (__35468,switch__32743__auto__,c__32934__auto___35504,G__33230_35469,G__33230_35470__$1,n__4613__auto___35467,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32744__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32744__auto____0 = (function (){
var statearr_33392 = [null,null,null,null,null,null,null];
(statearr_33392[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32744__auto__);

(statearr_33392[(1)] = (1));

return statearr_33392;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32744__auto____1 = (function (state_33375){
while(true){
var ret_value__32745__auto__ = (function (){try{while(true){
var result__32746__auto__ = switch__32743__auto__(state_33375);
if(cljs.core.keyword_identical_QMARK_(result__32746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32746__auto__;
}
break;
}
}catch (e33393){var ex__32747__auto__ = e33393;
var statearr_33394_35528 = state_33375;
(statearr_33394_35528[(2)] = ex__32747__auto__);


if(cljs.core.seq((state_33375[(4)]))){
var statearr_33396_35530 = state_33375;
(statearr_33396_35530[(1)] = cljs.core.first((state_33375[(4)])));

} else {
throw ex__32747__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32745__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35531 = state_33375;
state_33375 = G__35531;
continue;
} else {
return ret_value__32745__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32744__auto__ = function(state_33375){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32744__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32744__auto____1.call(this,state_33375);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32744__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32744__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32744__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32744__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32744__auto__;
})()
;})(__35468,switch__32743__auto__,c__32934__auto___35504,G__33230_35469,G__33230_35470__$1,n__4613__auto___35467,jobs,results,process,async))
})();
var state__32936__auto__ = (function (){var statearr_33401 = f__32935__auto__();
(statearr_33401[(6)] = c__32934__auto___35504);

return statearr_33401;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32936__auto__);
});})(__35468,c__32934__auto___35504,G__33230_35469,G__33230_35470__$1,n__4613__auto___35467,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33230_35470__$1)].join('')));

}

var G__35533 = (__35468 + (1));
__35468 = G__35533;
continue;
} else {
}
break;
}

var c__32934__auto___35534 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32935__auto__ = (function (){var switch__32743__auto__ = (function (state_33427){
var state_val_33428 = (state_33427[(1)]);
if((state_val_33428 === (7))){
var inst_33423 = (state_33427[(2)]);
var state_33427__$1 = state_33427;
var statearr_33429_35538 = state_33427__$1;
(statearr_33429_35538[(2)] = inst_33423);

(statearr_33429_35538[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33428 === (1))){
var state_33427__$1 = state_33427;
var statearr_33435_35539 = state_33427__$1;
(statearr_33435_35539[(2)] = null);

(statearr_33435_35539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33428 === (4))){
var inst_33404 = (state_33427[(7)]);
var inst_33404__$1 = (state_33427[(2)]);
var inst_33405 = (inst_33404__$1 == null);
var state_33427__$1 = (function (){var statearr_33436 = state_33427;
(statearr_33436[(7)] = inst_33404__$1);

return statearr_33436;
})();
if(cljs.core.truth_(inst_33405)){
var statearr_33438_35544 = state_33427__$1;
(statearr_33438_35544[(1)] = (5));

} else {
var statearr_33439_35545 = state_33427__$1;
(statearr_33439_35545[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33428 === (6))){
var inst_33404 = (state_33427[(7)]);
var inst_33410 = (state_33427[(8)]);
var inst_33410__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_33412 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33414 = [inst_33404,inst_33410__$1];
var inst_33416 = (new cljs.core.PersistentVector(null,2,(5),inst_33412,inst_33414,null));
var state_33427__$1 = (function (){var statearr_33441 = state_33427;
(statearr_33441[(8)] = inst_33410__$1);

return statearr_33441;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33427__$1,(8),jobs,inst_33416);
} else {
if((state_val_33428 === (3))){
var inst_33425 = (state_33427[(2)]);
var state_33427__$1 = state_33427;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33427__$1,inst_33425);
} else {
if((state_val_33428 === (2))){
var state_33427__$1 = state_33427;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33427__$1,(4),from);
} else {
if((state_val_33428 === (9))){
var inst_33420 = (state_33427[(2)]);
var state_33427__$1 = (function (){var statearr_33442 = state_33427;
(statearr_33442[(9)] = inst_33420);

return statearr_33442;
})();
var statearr_33443_35556 = state_33427__$1;
(statearr_33443_35556[(2)] = null);

(statearr_33443_35556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33428 === (5))){
var inst_33408 = cljs.core.async.close_BANG_(jobs);
var state_33427__$1 = state_33427;
var statearr_33450_35557 = state_33427__$1;
(statearr_33450_35557[(2)] = inst_33408);

(statearr_33450_35557[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33428 === (8))){
var inst_33410 = (state_33427[(8)]);
var inst_33418 = (state_33427[(2)]);
var state_33427__$1 = (function (){var statearr_33452 = state_33427;
(statearr_33452[(10)] = inst_33418);

return statearr_33452;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33427__$1,(9),results,inst_33410);
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
var cljs$core$async$pipeline_STAR__$_state_machine__32744__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32744__auto____0 = (function (){
var statearr_33454 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33454[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32744__auto__);

(statearr_33454[(1)] = (1));

return statearr_33454;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32744__auto____1 = (function (state_33427){
while(true){
var ret_value__32745__auto__ = (function (){try{while(true){
var result__32746__auto__ = switch__32743__auto__(state_33427);
if(cljs.core.keyword_identical_QMARK_(result__32746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32746__auto__;
}
break;
}
}catch (e33455){var ex__32747__auto__ = e33455;
var statearr_33456_35563 = state_33427;
(statearr_33456_35563[(2)] = ex__32747__auto__);


if(cljs.core.seq((state_33427[(4)]))){
var statearr_33457_35564 = state_33427;
(statearr_33457_35564[(1)] = cljs.core.first((state_33427[(4)])));

} else {
throw ex__32747__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32745__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35569 = state_33427;
state_33427 = G__35569;
continue;
} else {
return ret_value__32745__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32744__auto__ = function(state_33427){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32744__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32744__auto____1.call(this,state_33427);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32744__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32744__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32744__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32744__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32744__auto__;
})()
})();
var state__32936__auto__ = (function (){var statearr_33460 = f__32935__auto__();
(statearr_33460[(6)] = c__32934__auto___35534);

return statearr_33460;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32936__auto__);
}));


var c__32934__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32935__auto__ = (function (){var switch__32743__auto__ = (function (state_33501){
var state_val_33502 = (state_33501[(1)]);
if((state_val_33502 === (7))){
var inst_33497 = (state_33501[(2)]);
var state_33501__$1 = state_33501;
var statearr_33503_35586 = state_33501__$1;
(statearr_33503_35586[(2)] = inst_33497);

(statearr_33503_35586[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33502 === (20))){
var state_33501__$1 = state_33501;
var statearr_33506_35587 = state_33501__$1;
(statearr_33506_35587[(2)] = null);

(statearr_33506_35587[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33502 === (1))){
var state_33501__$1 = state_33501;
var statearr_33507_35598 = state_33501__$1;
(statearr_33507_35598[(2)] = null);

(statearr_33507_35598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33502 === (4))){
var inst_33464 = (state_33501[(7)]);
var inst_33464__$1 = (state_33501[(2)]);
var inst_33465 = (inst_33464__$1 == null);
var state_33501__$1 = (function (){var statearr_33509 = state_33501;
(statearr_33509[(7)] = inst_33464__$1);

return statearr_33509;
})();
if(cljs.core.truth_(inst_33465)){
var statearr_33510_35599 = state_33501__$1;
(statearr_33510_35599[(1)] = (5));

} else {
var statearr_33511_35600 = state_33501__$1;
(statearr_33511_35600[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33502 === (15))){
var inst_33478 = (state_33501[(8)]);
var state_33501__$1 = state_33501;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33501__$1,(18),to,inst_33478);
} else {
if((state_val_33502 === (21))){
var inst_33492 = (state_33501[(2)]);
var state_33501__$1 = state_33501;
var statearr_33512_35609 = state_33501__$1;
(statearr_33512_35609[(2)] = inst_33492);

(statearr_33512_35609[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33502 === (13))){
var inst_33494 = (state_33501[(2)]);
var state_33501__$1 = (function (){var statearr_33513 = state_33501;
(statearr_33513[(9)] = inst_33494);

return statearr_33513;
})();
var statearr_33514_35610 = state_33501__$1;
(statearr_33514_35610[(2)] = null);

(statearr_33514_35610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33502 === (6))){
var inst_33464 = (state_33501[(7)]);
var state_33501__$1 = state_33501;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33501__$1,(11),inst_33464);
} else {
if((state_val_33502 === (17))){
var inst_33487 = (state_33501[(2)]);
var state_33501__$1 = state_33501;
if(cljs.core.truth_(inst_33487)){
var statearr_33515_35611 = state_33501__$1;
(statearr_33515_35611[(1)] = (19));

} else {
var statearr_33516_35612 = state_33501__$1;
(statearr_33516_35612[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33502 === (3))){
var inst_33499 = (state_33501[(2)]);
var state_33501__$1 = state_33501;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33501__$1,inst_33499);
} else {
if((state_val_33502 === (12))){
var inst_33474 = (state_33501[(10)]);
var state_33501__$1 = state_33501;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33501__$1,(14),inst_33474);
} else {
if((state_val_33502 === (2))){
var state_33501__$1 = state_33501;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33501__$1,(4),results);
} else {
if((state_val_33502 === (19))){
var state_33501__$1 = state_33501;
var statearr_33519_35620 = state_33501__$1;
(statearr_33519_35620[(2)] = null);

(statearr_33519_35620[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33502 === (11))){
var inst_33474 = (state_33501[(2)]);
var state_33501__$1 = (function (){var statearr_33520 = state_33501;
(statearr_33520[(10)] = inst_33474);

return statearr_33520;
})();
var statearr_33521_35621 = state_33501__$1;
(statearr_33521_35621[(2)] = null);

(statearr_33521_35621[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33502 === (9))){
var state_33501__$1 = state_33501;
var statearr_33522_35622 = state_33501__$1;
(statearr_33522_35622[(2)] = null);

(statearr_33522_35622[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33502 === (5))){
var state_33501__$1 = state_33501;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33523_35625 = state_33501__$1;
(statearr_33523_35625[(1)] = (8));

} else {
var statearr_33524_35626 = state_33501__$1;
(statearr_33524_35626[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33502 === (14))){
var inst_33478 = (state_33501[(8)]);
var inst_33478__$1 = (state_33501[(2)]);
var inst_33480 = (inst_33478__$1 == null);
var inst_33481 = cljs.core.not(inst_33480);
var state_33501__$1 = (function (){var statearr_33528 = state_33501;
(statearr_33528[(8)] = inst_33478__$1);

return statearr_33528;
})();
if(inst_33481){
var statearr_33530_35632 = state_33501__$1;
(statearr_33530_35632[(1)] = (15));

} else {
var statearr_33531_35633 = state_33501__$1;
(statearr_33531_35633[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33502 === (16))){
var state_33501__$1 = state_33501;
var statearr_33532_35634 = state_33501__$1;
(statearr_33532_35634[(2)] = false);

(statearr_33532_35634[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33502 === (10))){
var inst_33471 = (state_33501[(2)]);
var state_33501__$1 = state_33501;
var statearr_33533_35641 = state_33501__$1;
(statearr_33533_35641[(2)] = inst_33471);

(statearr_33533_35641[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33502 === (18))){
var inst_33484 = (state_33501[(2)]);
var state_33501__$1 = state_33501;
var statearr_33534_35642 = state_33501__$1;
(statearr_33534_35642[(2)] = inst_33484);

(statearr_33534_35642[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33502 === (8))){
var inst_33468 = cljs.core.async.close_BANG_(to);
var state_33501__$1 = state_33501;
var statearr_33543_35644 = state_33501__$1;
(statearr_33543_35644[(2)] = inst_33468);

(statearr_33543_35644[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__32744__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32744__auto____0 = (function (){
var statearr_33549 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33549[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32744__auto__);

(statearr_33549[(1)] = (1));

return statearr_33549;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32744__auto____1 = (function (state_33501){
while(true){
var ret_value__32745__auto__ = (function (){try{while(true){
var result__32746__auto__ = switch__32743__auto__(state_33501);
if(cljs.core.keyword_identical_QMARK_(result__32746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32746__auto__;
}
break;
}
}catch (e33558){var ex__32747__auto__ = e33558;
var statearr_33559_35646 = state_33501;
(statearr_33559_35646[(2)] = ex__32747__auto__);


if(cljs.core.seq((state_33501[(4)]))){
var statearr_33560_35650 = state_33501;
(statearr_33560_35650[(1)] = cljs.core.first((state_33501[(4)])));

} else {
throw ex__32747__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32745__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35652 = state_33501;
state_33501 = G__35652;
continue;
} else {
return ret_value__32745__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32744__auto__ = function(state_33501){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32744__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32744__auto____1.call(this,state_33501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32744__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32744__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32744__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32744__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32744__auto__;
})()
})();
var state__32936__auto__ = (function (){var statearr_33561 = f__32935__auto__();
(statearr_33561[(6)] = c__32934__auto__);

return statearr_33561;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32936__auto__);
}));

return c__32934__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__33564 = arguments.length;
switch (G__33564) {
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
var G__33567 = arguments.length;
switch (G__33567) {
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
var G__33570 = arguments.length;
switch (G__33570) {
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
var c__32934__auto___35671 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32935__auto__ = (function (){var switch__32743__auto__ = (function (state_33596){
var state_val_33597 = (state_33596[(1)]);
if((state_val_33597 === (7))){
var inst_33592 = (state_33596[(2)]);
var state_33596__$1 = state_33596;
var statearr_33599_35673 = state_33596__$1;
(statearr_33599_35673[(2)] = inst_33592);

(statearr_33599_35673[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33597 === (1))){
var state_33596__$1 = state_33596;
var statearr_33600_35674 = state_33596__$1;
(statearr_33600_35674[(2)] = null);

(statearr_33600_35674[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33597 === (4))){
var inst_33573 = (state_33596[(7)]);
var inst_33573__$1 = (state_33596[(2)]);
var inst_33574 = (inst_33573__$1 == null);
var state_33596__$1 = (function (){var statearr_33601 = state_33596;
(statearr_33601[(7)] = inst_33573__$1);

return statearr_33601;
})();
if(cljs.core.truth_(inst_33574)){
var statearr_33602_35675 = state_33596__$1;
(statearr_33602_35675[(1)] = (5));

} else {
var statearr_33603_35676 = state_33596__$1;
(statearr_33603_35676[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33597 === (13))){
var state_33596__$1 = state_33596;
var statearr_33604_35677 = state_33596__$1;
(statearr_33604_35677[(2)] = null);

(statearr_33604_35677[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33597 === (6))){
var inst_33573 = (state_33596[(7)]);
var inst_33579 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_33573) : p.call(null,inst_33573));
var state_33596__$1 = state_33596;
if(cljs.core.truth_(inst_33579)){
var statearr_33606_35680 = state_33596__$1;
(statearr_33606_35680[(1)] = (9));

} else {
var statearr_33607_35681 = state_33596__$1;
(statearr_33607_35681[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33597 === (3))){
var inst_33594 = (state_33596[(2)]);
var state_33596__$1 = state_33596;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33596__$1,inst_33594);
} else {
if((state_val_33597 === (12))){
var state_33596__$1 = state_33596;
var statearr_33608_35684 = state_33596__$1;
(statearr_33608_35684[(2)] = null);

(statearr_33608_35684[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33597 === (2))){
var state_33596__$1 = state_33596;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33596__$1,(4),ch);
} else {
if((state_val_33597 === (11))){
var inst_33573 = (state_33596[(7)]);
var inst_33583 = (state_33596[(2)]);
var state_33596__$1 = state_33596;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33596__$1,(8),inst_33583,inst_33573);
} else {
if((state_val_33597 === (9))){
var state_33596__$1 = state_33596;
var statearr_33609_35685 = state_33596__$1;
(statearr_33609_35685[(2)] = tc);

(statearr_33609_35685[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33597 === (5))){
var inst_33576 = cljs.core.async.close_BANG_(tc);
var inst_33577 = cljs.core.async.close_BANG_(fc);
var state_33596__$1 = (function (){var statearr_33610 = state_33596;
(statearr_33610[(8)] = inst_33576);

return statearr_33610;
})();
var statearr_33611_35687 = state_33596__$1;
(statearr_33611_35687[(2)] = inst_33577);

(statearr_33611_35687[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33597 === (14))){
var inst_33590 = (state_33596[(2)]);
var state_33596__$1 = state_33596;
var statearr_33613_35694 = state_33596__$1;
(statearr_33613_35694[(2)] = inst_33590);

(statearr_33613_35694[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33597 === (10))){
var state_33596__$1 = state_33596;
var statearr_33618_35695 = state_33596__$1;
(statearr_33618_35695[(2)] = fc);

(statearr_33618_35695[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33597 === (8))){
var inst_33585 = (state_33596[(2)]);
var state_33596__$1 = state_33596;
if(cljs.core.truth_(inst_33585)){
var statearr_33623_35696 = state_33596__$1;
(statearr_33623_35696[(1)] = (12));

} else {
var statearr_33624_35697 = state_33596__$1;
(statearr_33624_35697[(1)] = (13));

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
var cljs$core$async$state_machine__32744__auto__ = null;
var cljs$core$async$state_machine__32744__auto____0 = (function (){
var statearr_33629 = [null,null,null,null,null,null,null,null,null];
(statearr_33629[(0)] = cljs$core$async$state_machine__32744__auto__);

(statearr_33629[(1)] = (1));

return statearr_33629;
});
var cljs$core$async$state_machine__32744__auto____1 = (function (state_33596){
while(true){
var ret_value__32745__auto__ = (function (){try{while(true){
var result__32746__auto__ = switch__32743__auto__(state_33596);
if(cljs.core.keyword_identical_QMARK_(result__32746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32746__auto__;
}
break;
}
}catch (e33634){var ex__32747__auto__ = e33634;
var statearr_33635_35699 = state_33596;
(statearr_33635_35699[(2)] = ex__32747__auto__);


if(cljs.core.seq((state_33596[(4)]))){
var statearr_33640_35700 = state_33596;
(statearr_33640_35700[(1)] = cljs.core.first((state_33596[(4)])));

} else {
throw ex__32747__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32745__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35701 = state_33596;
state_33596 = G__35701;
continue;
} else {
return ret_value__32745__auto__;
}
break;
}
});
cljs$core$async$state_machine__32744__auto__ = function(state_33596){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32744__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32744__auto____1.call(this,state_33596);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32744__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32744__auto____0;
cljs$core$async$state_machine__32744__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32744__auto____1;
return cljs$core$async$state_machine__32744__auto__;
})()
})();
var state__32936__auto__ = (function (){var statearr_33642 = f__32935__auto__();
(statearr_33642[(6)] = c__32934__auto___35671);

return statearr_33642;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32936__auto__);
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
var c__32934__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32935__auto__ = (function (){var switch__32743__auto__ = (function (state_33665){
var state_val_33666 = (state_33665[(1)]);
if((state_val_33666 === (7))){
var inst_33661 = (state_33665[(2)]);
var state_33665__$1 = state_33665;
var statearr_33667_35704 = state_33665__$1;
(statearr_33667_35704[(2)] = inst_33661);

(statearr_33667_35704[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33666 === (1))){
var inst_33643 = init;
var inst_33644 = inst_33643;
var state_33665__$1 = (function (){var statearr_33668 = state_33665;
(statearr_33668[(7)] = inst_33644);

return statearr_33668;
})();
var statearr_33669_35705 = state_33665__$1;
(statearr_33669_35705[(2)] = null);

(statearr_33669_35705[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33666 === (4))){
var inst_33647 = (state_33665[(8)]);
var inst_33647__$1 = (state_33665[(2)]);
var inst_33648 = (inst_33647__$1 == null);
var state_33665__$1 = (function (){var statearr_33670 = state_33665;
(statearr_33670[(8)] = inst_33647__$1);

return statearr_33670;
})();
if(cljs.core.truth_(inst_33648)){
var statearr_33671_35706 = state_33665__$1;
(statearr_33671_35706[(1)] = (5));

} else {
var statearr_33672_35708 = state_33665__$1;
(statearr_33672_35708[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33666 === (6))){
var inst_33647 = (state_33665[(8)]);
var inst_33644 = (state_33665[(7)]);
var inst_33651 = (state_33665[(9)]);
var inst_33651__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_33644,inst_33647) : f.call(null,inst_33644,inst_33647));
var inst_33652 = cljs.core.reduced_QMARK_(inst_33651__$1);
var state_33665__$1 = (function (){var statearr_33674 = state_33665;
(statearr_33674[(9)] = inst_33651__$1);

return statearr_33674;
})();
if(inst_33652){
var statearr_33675_35715 = state_33665__$1;
(statearr_33675_35715[(1)] = (8));

} else {
var statearr_33676_35716 = state_33665__$1;
(statearr_33676_35716[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33666 === (3))){
var inst_33663 = (state_33665[(2)]);
var state_33665__$1 = state_33665;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33665__$1,inst_33663);
} else {
if((state_val_33666 === (2))){
var state_33665__$1 = state_33665;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33665__$1,(4),ch);
} else {
if((state_val_33666 === (9))){
var inst_33651 = (state_33665[(9)]);
var inst_33644 = inst_33651;
var state_33665__$1 = (function (){var statearr_33677 = state_33665;
(statearr_33677[(7)] = inst_33644);

return statearr_33677;
})();
var statearr_33678_35717 = state_33665__$1;
(statearr_33678_35717[(2)] = null);

(statearr_33678_35717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33666 === (5))){
var inst_33644 = (state_33665[(7)]);
var state_33665__$1 = state_33665;
var statearr_33679_35718 = state_33665__$1;
(statearr_33679_35718[(2)] = inst_33644);

(statearr_33679_35718[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33666 === (10))){
var inst_33659 = (state_33665[(2)]);
var state_33665__$1 = state_33665;
var statearr_33681_35720 = state_33665__$1;
(statearr_33681_35720[(2)] = inst_33659);

(statearr_33681_35720[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33666 === (8))){
var inst_33651 = (state_33665[(9)]);
var inst_33654 = cljs.core.deref(inst_33651);
var state_33665__$1 = state_33665;
var statearr_33682_35722 = state_33665__$1;
(statearr_33682_35722[(2)] = inst_33654);

(statearr_33682_35722[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__32744__auto__ = null;
var cljs$core$async$reduce_$_state_machine__32744__auto____0 = (function (){
var statearr_33683 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33683[(0)] = cljs$core$async$reduce_$_state_machine__32744__auto__);

(statearr_33683[(1)] = (1));

return statearr_33683;
});
var cljs$core$async$reduce_$_state_machine__32744__auto____1 = (function (state_33665){
while(true){
var ret_value__32745__auto__ = (function (){try{while(true){
var result__32746__auto__ = switch__32743__auto__(state_33665);
if(cljs.core.keyword_identical_QMARK_(result__32746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32746__auto__;
}
break;
}
}catch (e33684){var ex__32747__auto__ = e33684;
var statearr_33685_35730 = state_33665;
(statearr_33685_35730[(2)] = ex__32747__auto__);


if(cljs.core.seq((state_33665[(4)]))){
var statearr_33686_35731 = state_33665;
(statearr_33686_35731[(1)] = cljs.core.first((state_33665[(4)])));

} else {
throw ex__32747__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32745__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35735 = state_33665;
state_33665 = G__35735;
continue;
} else {
return ret_value__32745__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__32744__auto__ = function(state_33665){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__32744__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__32744__auto____1.call(this,state_33665);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__32744__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__32744__auto____0;
cljs$core$async$reduce_$_state_machine__32744__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__32744__auto____1;
return cljs$core$async$reduce_$_state_machine__32744__auto__;
})()
})();
var state__32936__auto__ = (function (){var statearr_33687 = f__32935__auto__();
(statearr_33687[(6)] = c__32934__auto__);

return statearr_33687;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32936__auto__);
}));

return c__32934__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__32934__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32935__auto__ = (function (){var switch__32743__auto__ = (function (state_33694){
var state_val_33695 = (state_33694[(1)]);
if((state_val_33695 === (1))){
var inst_33689 = cljs.core.async.reduce(f__$1,init,ch);
var state_33694__$1 = state_33694;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33694__$1,(2),inst_33689);
} else {
if((state_val_33695 === (2))){
var inst_33691 = (state_33694[(2)]);
var inst_33692 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_33691) : f__$1.call(null,inst_33691));
var state_33694__$1 = state_33694;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33694__$1,inst_33692);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__32744__auto__ = null;
var cljs$core$async$transduce_$_state_machine__32744__auto____0 = (function (){
var statearr_33697 = [null,null,null,null,null,null,null];
(statearr_33697[(0)] = cljs$core$async$transduce_$_state_machine__32744__auto__);

(statearr_33697[(1)] = (1));

return statearr_33697;
});
var cljs$core$async$transduce_$_state_machine__32744__auto____1 = (function (state_33694){
while(true){
var ret_value__32745__auto__ = (function (){try{while(true){
var result__32746__auto__ = switch__32743__auto__(state_33694);
if(cljs.core.keyword_identical_QMARK_(result__32746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32746__auto__;
}
break;
}
}catch (e33698){var ex__32747__auto__ = e33698;
var statearr_33699_35740 = state_33694;
(statearr_33699_35740[(2)] = ex__32747__auto__);


if(cljs.core.seq((state_33694[(4)]))){
var statearr_33700_35741 = state_33694;
(statearr_33700_35741[(1)] = cljs.core.first((state_33694[(4)])));

} else {
throw ex__32747__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32745__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35749 = state_33694;
state_33694 = G__35749;
continue;
} else {
return ret_value__32745__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__32744__auto__ = function(state_33694){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__32744__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__32744__auto____1.call(this,state_33694);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__32744__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__32744__auto____0;
cljs$core$async$transduce_$_state_machine__32744__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__32744__auto____1;
return cljs$core$async$transduce_$_state_machine__32744__auto__;
})()
})();
var state__32936__auto__ = (function (){var statearr_33701 = f__32935__auto__();
(statearr_33701[(6)] = c__32934__auto__);

return statearr_33701;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32936__auto__);
}));

return c__32934__auto__;
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
var G__33704 = arguments.length;
switch (G__33704) {
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
var c__32934__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32935__auto__ = (function (){var switch__32743__auto__ = (function (state_33730){
var state_val_33731 = (state_33730[(1)]);
if((state_val_33731 === (7))){
var inst_33712 = (state_33730[(2)]);
var state_33730__$1 = state_33730;
var statearr_33732_35761 = state_33730__$1;
(statearr_33732_35761[(2)] = inst_33712);

(statearr_33732_35761[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33731 === (1))){
var inst_33706 = cljs.core.seq(coll);
var inst_33707 = inst_33706;
var state_33730__$1 = (function (){var statearr_33733 = state_33730;
(statearr_33733[(7)] = inst_33707);

return statearr_33733;
})();
var statearr_33734_35762 = state_33730__$1;
(statearr_33734_35762[(2)] = null);

(statearr_33734_35762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33731 === (4))){
var inst_33707 = (state_33730[(7)]);
var inst_33710 = cljs.core.first(inst_33707);
var state_33730__$1 = state_33730;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33730__$1,(7),ch,inst_33710);
} else {
if((state_val_33731 === (13))){
var inst_33724 = (state_33730[(2)]);
var state_33730__$1 = state_33730;
var statearr_33735_35764 = state_33730__$1;
(statearr_33735_35764[(2)] = inst_33724);

(statearr_33735_35764[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33731 === (6))){
var inst_33715 = (state_33730[(2)]);
var state_33730__$1 = state_33730;
if(cljs.core.truth_(inst_33715)){
var statearr_33737_35766 = state_33730__$1;
(statearr_33737_35766[(1)] = (8));

} else {
var statearr_33738_35767 = state_33730__$1;
(statearr_33738_35767[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33731 === (3))){
var inst_33728 = (state_33730[(2)]);
var state_33730__$1 = state_33730;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33730__$1,inst_33728);
} else {
if((state_val_33731 === (12))){
var state_33730__$1 = state_33730;
var statearr_33739_35769 = state_33730__$1;
(statearr_33739_35769[(2)] = null);

(statearr_33739_35769[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33731 === (2))){
var inst_33707 = (state_33730[(7)]);
var state_33730__$1 = state_33730;
if(cljs.core.truth_(inst_33707)){
var statearr_33740_35774 = state_33730__$1;
(statearr_33740_35774[(1)] = (4));

} else {
var statearr_33741_35775 = state_33730__$1;
(statearr_33741_35775[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33731 === (11))){
var inst_33721 = cljs.core.async.close_BANG_(ch);
var state_33730__$1 = state_33730;
var statearr_33742_35779 = state_33730__$1;
(statearr_33742_35779[(2)] = inst_33721);

(statearr_33742_35779[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33731 === (9))){
var state_33730__$1 = state_33730;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33743_35780 = state_33730__$1;
(statearr_33743_35780[(1)] = (11));

} else {
var statearr_33744_35781 = state_33730__$1;
(statearr_33744_35781[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33731 === (5))){
var inst_33707 = (state_33730[(7)]);
var state_33730__$1 = state_33730;
var statearr_33745_35785 = state_33730__$1;
(statearr_33745_35785[(2)] = inst_33707);

(statearr_33745_35785[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33731 === (10))){
var inst_33726 = (state_33730[(2)]);
var state_33730__$1 = state_33730;
var statearr_33746_35789 = state_33730__$1;
(statearr_33746_35789[(2)] = inst_33726);

(statearr_33746_35789[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33731 === (8))){
var inst_33707 = (state_33730[(7)]);
var inst_33717 = cljs.core.next(inst_33707);
var inst_33707__$1 = inst_33717;
var state_33730__$1 = (function (){var statearr_33747 = state_33730;
(statearr_33747[(7)] = inst_33707__$1);

return statearr_33747;
})();
var statearr_33749_35795 = state_33730__$1;
(statearr_33749_35795[(2)] = null);

(statearr_33749_35795[(1)] = (2));


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
var cljs$core$async$state_machine__32744__auto__ = null;
var cljs$core$async$state_machine__32744__auto____0 = (function (){
var statearr_33750 = [null,null,null,null,null,null,null,null];
(statearr_33750[(0)] = cljs$core$async$state_machine__32744__auto__);

(statearr_33750[(1)] = (1));

return statearr_33750;
});
var cljs$core$async$state_machine__32744__auto____1 = (function (state_33730){
while(true){
var ret_value__32745__auto__ = (function (){try{while(true){
var result__32746__auto__ = switch__32743__auto__(state_33730);
if(cljs.core.keyword_identical_QMARK_(result__32746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32746__auto__;
}
break;
}
}catch (e33751){var ex__32747__auto__ = e33751;
var statearr_33752_35808 = state_33730;
(statearr_33752_35808[(2)] = ex__32747__auto__);


if(cljs.core.seq((state_33730[(4)]))){
var statearr_33753_35809 = state_33730;
(statearr_33753_35809[(1)] = cljs.core.first((state_33730[(4)])));

} else {
throw ex__32747__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32745__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35810 = state_33730;
state_33730 = G__35810;
continue;
} else {
return ret_value__32745__auto__;
}
break;
}
});
cljs$core$async$state_machine__32744__auto__ = function(state_33730){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32744__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32744__auto____1.call(this,state_33730);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32744__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32744__auto____0;
cljs$core$async$state_machine__32744__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32744__auto____1;
return cljs$core$async$state_machine__32744__auto__;
})()
})();
var state__32936__auto__ = (function (){var statearr_33754 = f__32935__auto__();
(statearr_33754[(6)] = c__32934__auto__);

return statearr_33754;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32936__auto__);
}));

return c__32934__auto__;
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
var G__33757 = arguments.length;
switch (G__33757) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_35815 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_35815(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_35817 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_35817(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_35824 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_35824(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_35829 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_35829(m);
}
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
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33762 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33762 = (function (ch,cs,meta33763){
this.ch = ch;
this.cs = cs;
this.meta33763 = meta33763;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33762.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33764,meta33763__$1){
var self__ = this;
var _33764__$1 = this;
return (new cljs.core.async.t_cljs$core$async33762(self__.ch,self__.cs,meta33763__$1));
}));

(cljs.core.async.t_cljs$core$async33762.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33764){
var self__ = this;
var _33764__$1 = this;
return self__.meta33763;
}));

(cljs.core.async.t_cljs$core$async33762.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33762.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33762.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33762.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async33762.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async33762.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async33762.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33763","meta33763",-187457009,null)], null);
}));

(cljs.core.async.t_cljs$core$async33762.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33762.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33762");

(cljs.core.async.t_cljs$core$async33762.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async33762");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33762.
 */
cljs.core.async.__GT_t_cljs$core$async33762 = (function cljs$core$async$mult_$___GT_t_cljs$core$async33762(ch__$1,cs__$1,meta33763){
return (new cljs.core.async.t_cljs$core$async33762(ch__$1,cs__$1,meta33763));
});

}

return (new cljs.core.async.t_cljs$core$async33762(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__32934__auto___35854 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32935__auto__ = (function (){var switch__32743__auto__ = (function (state_33902){
var state_val_33903 = (state_33902[(1)]);
if((state_val_33903 === (7))){
var inst_33898 = (state_33902[(2)]);
var state_33902__$1 = state_33902;
var statearr_33904_35855 = state_33902__$1;
(statearr_33904_35855[(2)] = inst_33898);

(statearr_33904_35855[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33903 === (20))){
var inst_33801 = (state_33902[(7)]);
var inst_33813 = cljs.core.first(inst_33801);
var inst_33814 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33813,(0),null);
var inst_33815 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33813,(1),null);
var state_33902__$1 = (function (){var statearr_33906 = state_33902;
(statearr_33906[(8)] = inst_33814);

return statearr_33906;
})();
if(cljs.core.truth_(inst_33815)){
var statearr_33907_35856 = state_33902__$1;
(statearr_33907_35856[(1)] = (22));

} else {
var statearr_33908_35857 = state_33902__$1;
(statearr_33908_35857[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33903 === (27))){
var inst_33851 = (state_33902[(9)]);
var inst_33846 = (state_33902[(10)]);
var inst_33769 = (state_33902[(11)]);
var inst_33844 = (state_33902[(12)]);
var inst_33851__$1 = cljs.core._nth(inst_33844,inst_33846);
var inst_33852 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33851__$1,inst_33769,done);
var state_33902__$1 = (function (){var statearr_33909 = state_33902;
(statearr_33909[(9)] = inst_33851__$1);

return statearr_33909;
})();
if(cljs.core.truth_(inst_33852)){
var statearr_33910_35861 = state_33902__$1;
(statearr_33910_35861[(1)] = (30));

} else {
var statearr_33911_35862 = state_33902__$1;
(statearr_33911_35862[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33903 === (1))){
var state_33902__$1 = state_33902;
var statearr_33912_35863 = state_33902__$1;
(statearr_33912_35863[(2)] = null);

(statearr_33912_35863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33903 === (24))){
var inst_33801 = (state_33902[(7)]);
var inst_33821 = (state_33902[(2)]);
var inst_33822 = cljs.core.next(inst_33801);
var inst_33779 = inst_33822;
var inst_33780 = null;
var inst_33781 = (0);
var inst_33782 = (0);
var state_33902__$1 = (function (){var statearr_33914 = state_33902;
(statearr_33914[(13)] = inst_33779);

(statearr_33914[(14)] = inst_33782);

(statearr_33914[(15)] = inst_33821);

(statearr_33914[(16)] = inst_33780);

(statearr_33914[(17)] = inst_33781);

return statearr_33914;
})();
var statearr_33915_35864 = state_33902__$1;
(statearr_33915_35864[(2)] = null);

(statearr_33915_35864[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33903 === (39))){
var state_33902__$1 = state_33902;
var statearr_33919_35865 = state_33902__$1;
(statearr_33919_35865[(2)] = null);

(statearr_33919_35865[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33903 === (4))){
var inst_33769 = (state_33902[(11)]);
var inst_33769__$1 = (state_33902[(2)]);
var inst_33770 = (inst_33769__$1 == null);
var state_33902__$1 = (function (){var statearr_33920 = state_33902;
(statearr_33920[(11)] = inst_33769__$1);

return statearr_33920;
})();
if(cljs.core.truth_(inst_33770)){
var statearr_33921_35869 = state_33902__$1;
(statearr_33921_35869[(1)] = (5));

} else {
var statearr_33922_35870 = state_33902__$1;
(statearr_33922_35870[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33903 === (15))){
var inst_33779 = (state_33902[(13)]);
var inst_33782 = (state_33902[(14)]);
var inst_33780 = (state_33902[(16)]);
var inst_33781 = (state_33902[(17)]);
var inst_33797 = (state_33902[(2)]);
var inst_33798 = (inst_33782 + (1));
var tmp33916 = inst_33779;
var tmp33917 = inst_33780;
var tmp33918 = inst_33781;
var inst_33779__$1 = tmp33916;
var inst_33780__$1 = tmp33917;
var inst_33781__$1 = tmp33918;
var inst_33782__$1 = inst_33798;
var state_33902__$1 = (function (){var statearr_33924 = state_33902;
(statearr_33924[(13)] = inst_33779__$1);

(statearr_33924[(14)] = inst_33782__$1);

(statearr_33924[(16)] = inst_33780__$1);

(statearr_33924[(18)] = inst_33797);

(statearr_33924[(17)] = inst_33781__$1);

return statearr_33924;
})();
var statearr_33925_35871 = state_33902__$1;
(statearr_33925_35871[(2)] = null);

(statearr_33925_35871[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33903 === (21))){
var inst_33825 = (state_33902[(2)]);
var state_33902__$1 = state_33902;
var statearr_33929_35872 = state_33902__$1;
(statearr_33929_35872[(2)] = inst_33825);

(statearr_33929_35872[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33903 === (31))){
var inst_33851 = (state_33902[(9)]);
var inst_33855 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33851);
var state_33902__$1 = state_33902;
var statearr_33930_35873 = state_33902__$1;
(statearr_33930_35873[(2)] = inst_33855);

(statearr_33930_35873[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33903 === (32))){
var inst_33846 = (state_33902[(10)]);
var inst_33845 = (state_33902[(19)]);
var inst_33844 = (state_33902[(12)]);
var inst_33843 = (state_33902[(20)]);
var inst_33857 = (state_33902[(2)]);
var inst_33858 = (inst_33846 + (1));
var tmp33926 = inst_33845;
var tmp33927 = inst_33844;
var tmp33928 = inst_33843;
var inst_33843__$1 = tmp33928;
var inst_33844__$1 = tmp33927;
var inst_33845__$1 = tmp33926;
var inst_33846__$1 = inst_33858;
var state_33902__$1 = (function (){var statearr_33931 = state_33902;
(statearr_33931[(21)] = inst_33857);

(statearr_33931[(10)] = inst_33846__$1);

(statearr_33931[(19)] = inst_33845__$1);

(statearr_33931[(12)] = inst_33844__$1);

(statearr_33931[(20)] = inst_33843__$1);

return statearr_33931;
})();
var statearr_33932_35875 = state_33902__$1;
(statearr_33932_35875[(2)] = null);

(statearr_33932_35875[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33903 === (40))){
var inst_33870 = (state_33902[(22)]);
var inst_33874 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33870);
var state_33902__$1 = state_33902;
var statearr_33934_35876 = state_33902__$1;
(statearr_33934_35876[(2)] = inst_33874);

(statearr_33934_35876[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33903 === (33))){
var inst_33861 = (state_33902[(23)]);
var inst_33863 = cljs.core.chunked_seq_QMARK_(inst_33861);
var state_33902__$1 = state_33902;
if(inst_33863){
var statearr_33935_35877 = state_33902__$1;
(statearr_33935_35877[(1)] = (36));

} else {
var statearr_33936_35878 = state_33902__$1;
(statearr_33936_35878[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33903 === (13))){
var inst_33791 = (state_33902[(24)]);
var inst_33794 = cljs.core.async.close_BANG_(inst_33791);
var state_33902__$1 = state_33902;
var statearr_33937_35879 = state_33902__$1;
(statearr_33937_35879[(2)] = inst_33794);

(statearr_33937_35879[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33903 === (22))){
var inst_33814 = (state_33902[(8)]);
var inst_33818 = cljs.core.async.close_BANG_(inst_33814);
var state_33902__$1 = state_33902;
var statearr_33938_35880 = state_33902__$1;
(statearr_33938_35880[(2)] = inst_33818);

(statearr_33938_35880[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33903 === (36))){
var inst_33861 = (state_33902[(23)]);
var inst_33865 = cljs.core.chunk_first(inst_33861);
var inst_33866 = cljs.core.chunk_rest(inst_33861);
var inst_33867 = cljs.core.count(inst_33865);
var inst_33843 = inst_33866;
var inst_33844 = inst_33865;
var inst_33845 = inst_33867;
var inst_33846 = (0);
var state_33902__$1 = (function (){var statearr_33940 = state_33902;
(statearr_33940[(10)] = inst_33846);

(statearr_33940[(19)] = inst_33845);

(statearr_33940[(12)] = inst_33844);

(statearr_33940[(20)] = inst_33843);

return statearr_33940;
})();
var statearr_33941_35885 = state_33902__$1;
(statearr_33941_35885[(2)] = null);

(statearr_33941_35885[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33903 === (41))){
var inst_33861 = (state_33902[(23)]);
var inst_33876 = (state_33902[(2)]);
var inst_33878 = cljs.core.next(inst_33861);
var inst_33843 = inst_33878;
var inst_33844 = null;
var inst_33845 = (0);
var inst_33846 = (0);
var state_33902__$1 = (function (){var statearr_33942 = state_33902;
(statearr_33942[(10)] = inst_33846);

(statearr_33942[(25)] = inst_33876);

(statearr_33942[(19)] = inst_33845);

(statearr_33942[(12)] = inst_33844);

(statearr_33942[(20)] = inst_33843);

return statearr_33942;
})();
var statearr_33943_35888 = state_33902__$1;
(statearr_33943_35888[(2)] = null);

(statearr_33943_35888[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33903 === (43))){
var state_33902__$1 = state_33902;
var statearr_33945_35889 = state_33902__$1;
(statearr_33945_35889[(2)] = null);

(statearr_33945_35889[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33903 === (29))){
var inst_33886 = (state_33902[(2)]);
var state_33902__$1 = state_33902;
var statearr_33946_35890 = state_33902__$1;
(statearr_33946_35890[(2)] = inst_33886);

(statearr_33946_35890[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33903 === (44))){
var inst_33895 = (state_33902[(2)]);
var state_33902__$1 = (function (){var statearr_33947 = state_33902;
(statearr_33947[(26)] = inst_33895);

return statearr_33947;
})();
var statearr_33948_35891 = state_33902__$1;
(statearr_33948_35891[(2)] = null);

(statearr_33948_35891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33903 === (6))){
var inst_33835 = (state_33902[(27)]);
var inst_33834 = cljs.core.deref(cs);
var inst_33835__$1 = cljs.core.keys(inst_33834);
var inst_33836 = cljs.core.count(inst_33835__$1);
var inst_33837 = cljs.core.reset_BANG_(dctr,inst_33836);
var inst_33842 = cljs.core.seq(inst_33835__$1);
var inst_33843 = inst_33842;
var inst_33844 = null;
var inst_33845 = (0);
var inst_33846 = (0);
var state_33902__$1 = (function (){var statearr_33949 = state_33902;
(statearr_33949[(28)] = inst_33837);

(statearr_33949[(10)] = inst_33846);

(statearr_33949[(19)] = inst_33845);

(statearr_33949[(12)] = inst_33844);

(statearr_33949[(27)] = inst_33835__$1);

(statearr_33949[(20)] = inst_33843);

return statearr_33949;
})();
var statearr_33951_35897 = state_33902__$1;
(statearr_33951_35897[(2)] = null);

(statearr_33951_35897[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33903 === (28))){
var inst_33861 = (state_33902[(23)]);
var inst_33843 = (state_33902[(20)]);
var inst_33861__$1 = cljs.core.seq(inst_33843);
var state_33902__$1 = (function (){var statearr_33952 = state_33902;
(statearr_33952[(23)] = inst_33861__$1);

return statearr_33952;
})();
if(inst_33861__$1){
var statearr_33953_35904 = state_33902__$1;
(statearr_33953_35904[(1)] = (33));

} else {
var statearr_33954_35905 = state_33902__$1;
(statearr_33954_35905[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33903 === (25))){
var inst_33846 = (state_33902[(10)]);
var inst_33845 = (state_33902[(19)]);
var inst_33848 = (inst_33846 < inst_33845);
var inst_33849 = inst_33848;
var state_33902__$1 = state_33902;
if(cljs.core.truth_(inst_33849)){
var statearr_33955_35906 = state_33902__$1;
(statearr_33955_35906[(1)] = (27));

} else {
var statearr_33956_35907 = state_33902__$1;
(statearr_33956_35907[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33903 === (34))){
var state_33902__$1 = state_33902;
var statearr_33957_35908 = state_33902__$1;
(statearr_33957_35908[(2)] = null);

(statearr_33957_35908[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33903 === (17))){
var state_33902__$1 = state_33902;
var statearr_33958_35909 = state_33902__$1;
(statearr_33958_35909[(2)] = null);

(statearr_33958_35909[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33903 === (3))){
var inst_33900 = (state_33902[(2)]);
var state_33902__$1 = state_33902;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33902__$1,inst_33900);
} else {
if((state_val_33903 === (12))){
var inst_33830 = (state_33902[(2)]);
var state_33902__$1 = state_33902;
var statearr_33960_35910 = state_33902__$1;
(statearr_33960_35910[(2)] = inst_33830);

(statearr_33960_35910[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33903 === (2))){
var state_33902__$1 = state_33902;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33902__$1,(4),ch);
} else {
if((state_val_33903 === (23))){
var state_33902__$1 = state_33902;
var statearr_33961_35911 = state_33902__$1;
(statearr_33961_35911[(2)] = null);

(statearr_33961_35911[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33903 === (35))){
var inst_33884 = (state_33902[(2)]);
var state_33902__$1 = state_33902;
var statearr_33962_35912 = state_33902__$1;
(statearr_33962_35912[(2)] = inst_33884);

(statearr_33962_35912[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33903 === (19))){
var inst_33801 = (state_33902[(7)]);
var inst_33805 = cljs.core.chunk_first(inst_33801);
var inst_33806 = cljs.core.chunk_rest(inst_33801);
var inst_33807 = cljs.core.count(inst_33805);
var inst_33779 = inst_33806;
var inst_33780 = inst_33805;
var inst_33781 = inst_33807;
var inst_33782 = (0);
var state_33902__$1 = (function (){var statearr_33963 = state_33902;
(statearr_33963[(13)] = inst_33779);

(statearr_33963[(14)] = inst_33782);

(statearr_33963[(16)] = inst_33780);

(statearr_33963[(17)] = inst_33781);

return statearr_33963;
})();
var statearr_33964_35913 = state_33902__$1;
(statearr_33964_35913[(2)] = null);

(statearr_33964_35913[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33903 === (11))){
var inst_33779 = (state_33902[(13)]);
var inst_33801 = (state_33902[(7)]);
var inst_33801__$1 = cljs.core.seq(inst_33779);
var state_33902__$1 = (function (){var statearr_33965 = state_33902;
(statearr_33965[(7)] = inst_33801__$1);

return statearr_33965;
})();
if(inst_33801__$1){
var statearr_33967_35915 = state_33902__$1;
(statearr_33967_35915[(1)] = (16));

} else {
var statearr_33968_35919 = state_33902__$1;
(statearr_33968_35919[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33903 === (9))){
var inst_33832 = (state_33902[(2)]);
var state_33902__$1 = state_33902;
var statearr_33969_35920 = state_33902__$1;
(statearr_33969_35920[(2)] = inst_33832);

(statearr_33969_35920[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33903 === (5))){
var inst_33777 = cljs.core.deref(cs);
var inst_33778 = cljs.core.seq(inst_33777);
var inst_33779 = inst_33778;
var inst_33780 = null;
var inst_33781 = (0);
var inst_33782 = (0);
var state_33902__$1 = (function (){var statearr_33970 = state_33902;
(statearr_33970[(13)] = inst_33779);

(statearr_33970[(14)] = inst_33782);

(statearr_33970[(16)] = inst_33780);

(statearr_33970[(17)] = inst_33781);

return statearr_33970;
})();
var statearr_33971_35921 = state_33902__$1;
(statearr_33971_35921[(2)] = null);

(statearr_33971_35921[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33903 === (14))){
var state_33902__$1 = state_33902;
var statearr_33972_35922 = state_33902__$1;
(statearr_33972_35922[(2)] = null);

(statearr_33972_35922[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33903 === (45))){
var inst_33892 = (state_33902[(2)]);
var state_33902__$1 = state_33902;
var statearr_33975_35923 = state_33902__$1;
(statearr_33975_35923[(2)] = inst_33892);

(statearr_33975_35923[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33903 === (26))){
var inst_33835 = (state_33902[(27)]);
var inst_33888 = (state_33902[(2)]);
var inst_33889 = cljs.core.seq(inst_33835);
var state_33902__$1 = (function (){var statearr_33976 = state_33902;
(statearr_33976[(29)] = inst_33888);

return statearr_33976;
})();
if(inst_33889){
var statearr_33977_35928 = state_33902__$1;
(statearr_33977_35928[(1)] = (42));

} else {
var statearr_33978_35929 = state_33902__$1;
(statearr_33978_35929[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33903 === (16))){
var inst_33801 = (state_33902[(7)]);
var inst_33803 = cljs.core.chunked_seq_QMARK_(inst_33801);
var state_33902__$1 = state_33902;
if(inst_33803){
var statearr_33979_35931 = state_33902__$1;
(statearr_33979_35931[(1)] = (19));

} else {
var statearr_33980_35932 = state_33902__$1;
(statearr_33980_35932[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33903 === (38))){
var inst_33881 = (state_33902[(2)]);
var state_33902__$1 = state_33902;
var statearr_33981_35937 = state_33902__$1;
(statearr_33981_35937[(2)] = inst_33881);

(statearr_33981_35937[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33903 === (30))){
var state_33902__$1 = state_33902;
var statearr_33982_35938 = state_33902__$1;
(statearr_33982_35938[(2)] = null);

(statearr_33982_35938[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33903 === (10))){
var inst_33782 = (state_33902[(14)]);
var inst_33780 = (state_33902[(16)]);
var inst_33790 = cljs.core._nth(inst_33780,inst_33782);
var inst_33791 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33790,(0),null);
var inst_33792 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33790,(1),null);
var state_33902__$1 = (function (){var statearr_33983 = state_33902;
(statearr_33983[(24)] = inst_33791);

return statearr_33983;
})();
if(cljs.core.truth_(inst_33792)){
var statearr_33984_35939 = state_33902__$1;
(statearr_33984_35939[(1)] = (13));

} else {
var statearr_33985_35940 = state_33902__$1;
(statearr_33985_35940[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33903 === (18))){
var inst_33828 = (state_33902[(2)]);
var state_33902__$1 = state_33902;
var statearr_33988_35941 = state_33902__$1;
(statearr_33988_35941[(2)] = inst_33828);

(statearr_33988_35941[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33903 === (42))){
var state_33902__$1 = state_33902;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33902__$1,(45),dchan);
} else {
if((state_val_33903 === (37))){
var inst_33861 = (state_33902[(23)]);
var inst_33769 = (state_33902[(11)]);
var inst_33870 = (state_33902[(22)]);
var inst_33870__$1 = cljs.core.first(inst_33861);
var inst_33871 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33870__$1,inst_33769,done);
var state_33902__$1 = (function (){var statearr_33989 = state_33902;
(statearr_33989[(22)] = inst_33870__$1);

return statearr_33989;
})();
if(cljs.core.truth_(inst_33871)){
var statearr_33990_35942 = state_33902__$1;
(statearr_33990_35942[(1)] = (39));

} else {
var statearr_33991_35943 = state_33902__$1;
(statearr_33991_35943[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33903 === (8))){
var inst_33782 = (state_33902[(14)]);
var inst_33781 = (state_33902[(17)]);
var inst_33784 = (inst_33782 < inst_33781);
var inst_33785 = inst_33784;
var state_33902__$1 = state_33902;
if(cljs.core.truth_(inst_33785)){
var statearr_33992_35944 = state_33902__$1;
(statearr_33992_35944[(1)] = (10));

} else {
var statearr_33993_35945 = state_33902__$1;
(statearr_33993_35945[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__32744__auto__ = null;
var cljs$core$async$mult_$_state_machine__32744__auto____0 = (function (){
var statearr_33994 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33994[(0)] = cljs$core$async$mult_$_state_machine__32744__auto__);

(statearr_33994[(1)] = (1));

return statearr_33994;
});
var cljs$core$async$mult_$_state_machine__32744__auto____1 = (function (state_33902){
while(true){
var ret_value__32745__auto__ = (function (){try{while(true){
var result__32746__auto__ = switch__32743__auto__(state_33902);
if(cljs.core.keyword_identical_QMARK_(result__32746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32746__auto__;
}
break;
}
}catch (e33995){var ex__32747__auto__ = e33995;
var statearr_33996_35947 = state_33902;
(statearr_33996_35947[(2)] = ex__32747__auto__);


if(cljs.core.seq((state_33902[(4)]))){
var statearr_33997_35949 = state_33902;
(statearr_33997_35949[(1)] = cljs.core.first((state_33902[(4)])));

} else {
throw ex__32747__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32745__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35950 = state_33902;
state_33902 = G__35950;
continue;
} else {
return ret_value__32745__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__32744__auto__ = function(state_33902){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__32744__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__32744__auto____1.call(this,state_33902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__32744__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__32744__auto____0;
cljs$core$async$mult_$_state_machine__32744__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__32744__auto____1;
return cljs$core$async$mult_$_state_machine__32744__auto__;
})()
})();
var state__32936__auto__ = (function (){var statearr_33998 = f__32935__auto__();
(statearr_33998[(6)] = c__32934__auto___35854);

return statearr_33998;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32936__auto__);
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
var G__34000 = arguments.length;
switch (G__34000) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_35960 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_35960(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_35963 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_35963(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_35964 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_35964(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_35965 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_35965(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_35966 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_35966(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___35971 = arguments.length;
var i__4737__auto___35972 = (0);
while(true){
if((i__4737__auto___35972 < len__4736__auto___35971)){
args__4742__auto__.push((arguments[i__4737__auto___35972]));

var G__35973 = (i__4737__auto___35972 + (1));
i__4737__auto___35972 = G__35973;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__34026){
var map__34028 = p__34026;
var map__34028__$1 = (((((!((map__34028 == null))))?(((((map__34028.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34028.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34028):map__34028);
var opts = map__34028__$1;
var statearr_34031_35977 = state;
(statearr_34031_35977[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_34033_35978 = state;
(statearr_34033_35978[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_34034_35979 = state;
(statearr_34034_35979[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq34019){
var G__34021 = cljs.core.first(seq34019);
var seq34019__$1 = cljs.core.next(seq34019);
var G__34022 = cljs.core.first(seq34019__$1);
var seq34019__$2 = cljs.core.next(seq34019__$1);
var G__34023 = cljs.core.first(seq34019__$2);
var seq34019__$3 = cljs.core.next(seq34019__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34021,G__34022,G__34023,seq34019__$3);
}));

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
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34048 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34048 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta34049){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta34049 = meta34049;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34048.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34050,meta34049__$1){
var self__ = this;
var _34050__$1 = this;
return (new cljs.core.async.t_cljs$core$async34048(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta34049__$1));
}));

(cljs.core.async.t_cljs$core$async34048.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34050){
var self__ = this;
var _34050__$1 = this;
return self__.meta34049;
}));

(cljs.core.async.t_cljs$core$async34048.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34048.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async34048.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34048.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34048.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34048.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34048.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34048.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34048.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta34049","meta34049",567355150,null)], null);
}));

(cljs.core.async.t_cljs$core$async34048.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34048.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34048");

(cljs.core.async.t_cljs$core$async34048.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async34048");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34048.
 */
cljs.core.async.__GT_t_cljs$core$async34048 = (function cljs$core$async$mix_$___GT_t_cljs$core$async34048(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta34049){
return (new cljs.core.async.t_cljs$core$async34048(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta34049));
});

}

return (new cljs.core.async.t_cljs$core$async34048(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32934__auto___36003 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32935__auto__ = (function (){var switch__32743__auto__ = (function (state_34182){
var state_val_34185 = (state_34182[(1)]);
if((state_val_34185 === (7))){
var inst_34085 = (state_34182[(2)]);
var state_34182__$1 = state_34182;
var statearr_34187_36004 = state_34182__$1;
(statearr_34187_36004[(2)] = inst_34085);

(statearr_34187_36004[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34185 === (20))){
var inst_34099 = (state_34182[(7)]);
var state_34182__$1 = state_34182;
var statearr_34190_36005 = state_34182__$1;
(statearr_34190_36005[(2)] = inst_34099);

(statearr_34190_36005[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34185 === (27))){
var state_34182__$1 = state_34182;
var statearr_34192_36006 = state_34182__$1;
(statearr_34192_36006[(2)] = null);

(statearr_34192_36006[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34185 === (1))){
var inst_34071 = (state_34182[(8)]);
var inst_34071__$1 = calc_state();
var inst_34073 = (inst_34071__$1 == null);
var inst_34074 = cljs.core.not(inst_34073);
var state_34182__$1 = (function (){var statearr_34196 = state_34182;
(statearr_34196[(8)] = inst_34071__$1);

return statearr_34196;
})();
if(inst_34074){
var statearr_34197_36008 = state_34182__$1;
(statearr_34197_36008[(1)] = (2));

} else {
var statearr_34198_36009 = state_34182__$1;
(statearr_34198_36009[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34185 === (24))){
var inst_34135 = (state_34182[(9)]);
var inst_34155 = (state_34182[(10)]);
var inst_34125 = (state_34182[(11)]);
var inst_34155__$1 = (inst_34125.cljs$core$IFn$_invoke$arity$1 ? inst_34125.cljs$core$IFn$_invoke$arity$1(inst_34135) : inst_34125.call(null,inst_34135));
var state_34182__$1 = (function (){var statearr_34200 = state_34182;
(statearr_34200[(10)] = inst_34155__$1);

return statearr_34200;
})();
if(cljs.core.truth_(inst_34155__$1)){
var statearr_34201_36013 = state_34182__$1;
(statearr_34201_36013[(1)] = (29));

} else {
var statearr_34202_36014 = state_34182__$1;
(statearr_34202_36014[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34185 === (4))){
var inst_34088 = (state_34182[(2)]);
var state_34182__$1 = state_34182;
if(cljs.core.truth_(inst_34088)){
var statearr_34206_36021 = state_34182__$1;
(statearr_34206_36021[(1)] = (8));

} else {
var statearr_34207_36022 = state_34182__$1;
(statearr_34207_36022[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34185 === (15))){
var inst_34119 = (state_34182[(2)]);
var state_34182__$1 = state_34182;
if(cljs.core.truth_(inst_34119)){
var statearr_34208_36025 = state_34182__$1;
(statearr_34208_36025[(1)] = (19));

} else {
var statearr_34209_36030 = state_34182__$1;
(statearr_34209_36030[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34185 === (21))){
var inst_34124 = (state_34182[(12)]);
var inst_34124__$1 = (state_34182[(2)]);
var inst_34125 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34124__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34126 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34124__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34128 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34124__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_34182__$1 = (function (){var statearr_34211 = state_34182;
(statearr_34211[(13)] = inst_34126);

(statearr_34211[(12)] = inst_34124__$1);

(statearr_34211[(11)] = inst_34125);

return statearr_34211;
})();
return cljs.core.async.ioc_alts_BANG_(state_34182__$1,(22),inst_34128);
} else {
if((state_val_34185 === (31))){
var inst_34163 = (state_34182[(2)]);
var state_34182__$1 = state_34182;
if(cljs.core.truth_(inst_34163)){
var statearr_34215_36031 = state_34182__$1;
(statearr_34215_36031[(1)] = (32));

} else {
var statearr_34216_36032 = state_34182__$1;
(statearr_34216_36032[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34185 === (32))){
var inst_34134 = (state_34182[(14)]);
var state_34182__$1 = state_34182;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34182__$1,(35),out,inst_34134);
} else {
if((state_val_34185 === (33))){
var inst_34124 = (state_34182[(12)]);
var inst_34099 = inst_34124;
var state_34182__$1 = (function (){var statearr_34218 = state_34182;
(statearr_34218[(7)] = inst_34099);

return statearr_34218;
})();
var statearr_34219_36033 = state_34182__$1;
(statearr_34219_36033[(2)] = null);

(statearr_34219_36033[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34185 === (13))){
var inst_34099 = (state_34182[(7)]);
var inst_34108 = inst_34099.cljs$lang$protocol_mask$partition0$;
var inst_34109 = (inst_34108 & (64));
var inst_34110 = inst_34099.cljs$core$ISeq$;
var inst_34111 = (cljs.core.PROTOCOL_SENTINEL === inst_34110);
var inst_34112 = ((inst_34109) || (inst_34111));
var state_34182__$1 = state_34182;
if(cljs.core.truth_(inst_34112)){
var statearr_34222_36034 = state_34182__$1;
(statearr_34222_36034[(1)] = (16));

} else {
var statearr_34224_36035 = state_34182__$1;
(statearr_34224_36035[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34185 === (22))){
var inst_34135 = (state_34182[(9)]);
var inst_34134 = (state_34182[(14)]);
var inst_34133 = (state_34182[(2)]);
var inst_34134__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34133,(0),null);
var inst_34135__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34133,(1),null);
var inst_34136 = (inst_34134__$1 == null);
var inst_34137 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34135__$1,change);
var inst_34138 = ((inst_34136) || (inst_34137));
var state_34182__$1 = (function (){var statearr_34225 = state_34182;
(statearr_34225[(9)] = inst_34135__$1);

(statearr_34225[(14)] = inst_34134__$1);

return statearr_34225;
})();
if(cljs.core.truth_(inst_34138)){
var statearr_34227_36036 = state_34182__$1;
(statearr_34227_36036[(1)] = (23));

} else {
var statearr_34228_36037 = state_34182__$1;
(statearr_34228_36037[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34185 === (36))){
var inst_34124 = (state_34182[(12)]);
var inst_34099 = inst_34124;
var state_34182__$1 = (function (){var statearr_34229 = state_34182;
(statearr_34229[(7)] = inst_34099);

return statearr_34229;
})();
var statearr_34231_36044 = state_34182__$1;
(statearr_34231_36044[(2)] = null);

(statearr_34231_36044[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34185 === (29))){
var inst_34155 = (state_34182[(10)]);
var state_34182__$1 = state_34182;
var statearr_34235_36046 = state_34182__$1;
(statearr_34235_36046[(2)] = inst_34155);

(statearr_34235_36046[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34185 === (6))){
var state_34182__$1 = state_34182;
var statearr_34237_36047 = state_34182__$1;
(statearr_34237_36047[(2)] = false);

(statearr_34237_36047[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34185 === (28))){
var inst_34150 = (state_34182[(2)]);
var inst_34151 = calc_state();
var inst_34099 = inst_34151;
var state_34182__$1 = (function (){var statearr_34239 = state_34182;
(statearr_34239[(15)] = inst_34150);

(statearr_34239[(7)] = inst_34099);

return statearr_34239;
})();
var statearr_34240_36050 = state_34182__$1;
(statearr_34240_36050[(2)] = null);

(statearr_34240_36050[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34185 === (25))){
var inst_34177 = (state_34182[(2)]);
var state_34182__$1 = state_34182;
var statearr_34243_36051 = state_34182__$1;
(statearr_34243_36051[(2)] = inst_34177);

(statearr_34243_36051[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34185 === (34))){
var inst_34175 = (state_34182[(2)]);
var state_34182__$1 = state_34182;
var statearr_34245_36052 = state_34182__$1;
(statearr_34245_36052[(2)] = inst_34175);

(statearr_34245_36052[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34185 === (17))){
var state_34182__$1 = state_34182;
var statearr_34246_36053 = state_34182__$1;
(statearr_34246_36053[(2)] = false);

(statearr_34246_36053[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34185 === (3))){
var state_34182__$1 = state_34182;
var statearr_34248_36054 = state_34182__$1;
(statearr_34248_36054[(2)] = false);

(statearr_34248_36054[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34185 === (12))){
var inst_34180 = (state_34182[(2)]);
var state_34182__$1 = state_34182;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34182__$1,inst_34180);
} else {
if((state_val_34185 === (2))){
var inst_34071 = (state_34182[(8)]);
var inst_34077 = inst_34071.cljs$lang$protocol_mask$partition0$;
var inst_34078 = (inst_34077 & (64));
var inst_34079 = inst_34071.cljs$core$ISeq$;
var inst_34080 = (cljs.core.PROTOCOL_SENTINEL === inst_34079);
var inst_34081 = ((inst_34078) || (inst_34080));
var state_34182__$1 = state_34182;
if(cljs.core.truth_(inst_34081)){
var statearr_34252_36061 = state_34182__$1;
(statearr_34252_36061[(1)] = (5));

} else {
var statearr_34253_36062 = state_34182__$1;
(statearr_34253_36062[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34185 === (23))){
var inst_34134 = (state_34182[(14)]);
var inst_34144 = (inst_34134 == null);
var state_34182__$1 = state_34182;
if(cljs.core.truth_(inst_34144)){
var statearr_34255_36063 = state_34182__$1;
(statearr_34255_36063[(1)] = (26));

} else {
var statearr_34256_36064 = state_34182__$1;
(statearr_34256_36064[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34185 === (35))){
var inst_34166 = (state_34182[(2)]);
var state_34182__$1 = state_34182;
if(cljs.core.truth_(inst_34166)){
var statearr_34259_36065 = state_34182__$1;
(statearr_34259_36065[(1)] = (36));

} else {
var statearr_34261_36066 = state_34182__$1;
(statearr_34261_36066[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34185 === (19))){
var inst_34099 = (state_34182[(7)]);
var inst_34121 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_34099);
var state_34182__$1 = state_34182;
var statearr_34262_36067 = state_34182__$1;
(statearr_34262_36067[(2)] = inst_34121);

(statearr_34262_36067[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34185 === (11))){
var inst_34099 = (state_34182[(7)]);
var inst_34105 = (inst_34099 == null);
var inst_34106 = cljs.core.not(inst_34105);
var state_34182__$1 = state_34182;
if(inst_34106){
var statearr_34264_36068 = state_34182__$1;
(statearr_34264_36068[(1)] = (13));

} else {
var statearr_34265_36069 = state_34182__$1;
(statearr_34265_36069[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34185 === (9))){
var inst_34071 = (state_34182[(8)]);
var state_34182__$1 = state_34182;
var statearr_34267_36070 = state_34182__$1;
(statearr_34267_36070[(2)] = inst_34071);

(statearr_34267_36070[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34185 === (5))){
var state_34182__$1 = state_34182;
var statearr_34270_36071 = state_34182__$1;
(statearr_34270_36071[(2)] = true);

(statearr_34270_36071[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34185 === (14))){
var state_34182__$1 = state_34182;
var statearr_34271_36072 = state_34182__$1;
(statearr_34271_36072[(2)] = false);

(statearr_34271_36072[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34185 === (26))){
var inst_34135 = (state_34182[(9)]);
var inst_34147 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_34135);
var state_34182__$1 = state_34182;
var statearr_34273_36073 = state_34182__$1;
(statearr_34273_36073[(2)] = inst_34147);

(statearr_34273_36073[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34185 === (16))){
var state_34182__$1 = state_34182;
var statearr_34274_36080 = state_34182__$1;
(statearr_34274_36080[(2)] = true);

(statearr_34274_36080[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34185 === (38))){
var inst_34171 = (state_34182[(2)]);
var state_34182__$1 = state_34182;
var statearr_34278_36081 = state_34182__$1;
(statearr_34278_36081[(2)] = inst_34171);

(statearr_34278_36081[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34185 === (30))){
var inst_34135 = (state_34182[(9)]);
var inst_34126 = (state_34182[(13)]);
var inst_34125 = (state_34182[(11)]);
var inst_34158 = cljs.core.empty_QMARK_(inst_34125);
var inst_34159 = (inst_34126.cljs$core$IFn$_invoke$arity$1 ? inst_34126.cljs$core$IFn$_invoke$arity$1(inst_34135) : inst_34126.call(null,inst_34135));
var inst_34160 = cljs.core.not(inst_34159);
var inst_34161 = ((inst_34158) && (inst_34160));
var state_34182__$1 = state_34182;
var statearr_34280_36082 = state_34182__$1;
(statearr_34280_36082[(2)] = inst_34161);

(statearr_34280_36082[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34185 === (10))){
var inst_34071 = (state_34182[(8)]);
var inst_34093 = (state_34182[(2)]);
var inst_34094 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34093,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34095 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34093,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34097 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34093,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_34099 = inst_34071;
var state_34182__$1 = (function (){var statearr_34283 = state_34182;
(statearr_34283[(16)] = inst_34094);

(statearr_34283[(17)] = inst_34095);

(statearr_34283[(18)] = inst_34097);

(statearr_34283[(7)] = inst_34099);

return statearr_34283;
})();
var statearr_34285_36083 = state_34182__$1;
(statearr_34285_36083[(2)] = null);

(statearr_34285_36083[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34185 === (18))){
var inst_34116 = (state_34182[(2)]);
var state_34182__$1 = state_34182;
var statearr_34286_36084 = state_34182__$1;
(statearr_34286_36084[(2)] = inst_34116);

(statearr_34286_36084[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34185 === (37))){
var state_34182__$1 = state_34182;
var statearr_34288_36085 = state_34182__$1;
(statearr_34288_36085[(2)] = null);

(statearr_34288_36085[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34185 === (8))){
var inst_34071 = (state_34182[(8)]);
var inst_34090 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_34071);
var state_34182__$1 = state_34182;
var statearr_34289_36090 = state_34182__$1;
(statearr_34289_36090[(2)] = inst_34090);

(statearr_34289_36090[(1)] = (10));


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
});
return (function() {
var cljs$core$async$mix_$_state_machine__32744__auto__ = null;
var cljs$core$async$mix_$_state_machine__32744__auto____0 = (function (){
var statearr_34295 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34295[(0)] = cljs$core$async$mix_$_state_machine__32744__auto__);

(statearr_34295[(1)] = (1));

return statearr_34295;
});
var cljs$core$async$mix_$_state_machine__32744__auto____1 = (function (state_34182){
while(true){
var ret_value__32745__auto__ = (function (){try{while(true){
var result__32746__auto__ = switch__32743__auto__(state_34182);
if(cljs.core.keyword_identical_QMARK_(result__32746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32746__auto__;
}
break;
}
}catch (e34297){var ex__32747__auto__ = e34297;
var statearr_34298_36095 = state_34182;
(statearr_34298_36095[(2)] = ex__32747__auto__);


if(cljs.core.seq((state_34182[(4)]))){
var statearr_34299_36096 = state_34182;
(statearr_34299_36096[(1)] = cljs.core.first((state_34182[(4)])));

} else {
throw ex__32747__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32745__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36097 = state_34182;
state_34182 = G__36097;
continue;
} else {
return ret_value__32745__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__32744__auto__ = function(state_34182){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__32744__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__32744__auto____1.call(this,state_34182);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__32744__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__32744__auto____0;
cljs$core$async$mix_$_state_machine__32744__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__32744__auto____1;
return cljs$core$async$mix_$_state_machine__32744__auto__;
})()
})();
var state__32936__auto__ = (function (){var statearr_34311 = f__32935__auto__();
(statearr_34311[(6)] = c__32934__auto___36003);

return statearr_34311;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32936__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_36100 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_36100(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_36101 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_36101(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_36103 = (function() {
var G__36104 = null;
var G__36104__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__36104__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__36104 = function(p,v){
switch(arguments.length){
case 1:
return G__36104__1.call(this,p);
case 2:
return G__36104__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__36104.cljs$core$IFn$_invoke$arity$1 = G__36104__1;
G__36104.cljs$core$IFn$_invoke$arity$2 = G__36104__2;
return G__36104;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__34365 = arguments.length;
switch (G__34365) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_36103(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_36103(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


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
var G__34389 = arguments.length;
switch (G__34389) {
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
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__34381_SHARP_){
if(cljs.core.truth_((p1__34381_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__34381_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__34381_SHARP_.call(null,topic)))){
return p1__34381_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__34381_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34402 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34402 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta34403){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta34403 = meta34403;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34402.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34404,meta34403__$1){
var self__ = this;
var _34404__$1 = this;
return (new cljs.core.async.t_cljs$core$async34402(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta34403__$1));
}));

(cljs.core.async.t_cljs$core$async34402.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34404){
var self__ = this;
var _34404__$1 = this;
return self__.meta34403;
}));

(cljs.core.async.t_cljs$core$async34402.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34402.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async34402.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34402.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async34402.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async34402.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async34402.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async34402.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta34403","meta34403",-156362418,null)], null);
}));

(cljs.core.async.t_cljs$core$async34402.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34402.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34402");

(cljs.core.async.t_cljs$core$async34402.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async34402");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34402.
 */
cljs.core.async.__GT_t_cljs$core$async34402 = (function cljs$core$async$__GT_t_cljs$core$async34402(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34403){
return (new cljs.core.async.t_cljs$core$async34402(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34403));
});

}

return (new cljs.core.async.t_cljs$core$async34402(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32934__auto___36141 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32935__auto__ = (function (){var switch__32743__auto__ = (function (state_34526){
var state_val_34530 = (state_34526[(1)]);
if((state_val_34530 === (7))){
var inst_34515 = (state_34526[(2)]);
var state_34526__$1 = state_34526;
var statearr_34532_36143 = state_34526__$1;
(statearr_34532_36143[(2)] = inst_34515);

(statearr_34532_36143[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34530 === (20))){
var state_34526__$1 = state_34526;
var statearr_34533_36148 = state_34526__$1;
(statearr_34533_36148[(2)] = null);

(statearr_34533_36148[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34530 === (1))){
var state_34526__$1 = state_34526;
var statearr_34538_36150 = state_34526__$1;
(statearr_34538_36150[(2)] = null);

(statearr_34538_36150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34530 === (24))){
var inst_34498 = (state_34526[(7)]);
var inst_34507 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_34498);
var state_34526__$1 = state_34526;
var statearr_34539_36151 = state_34526__$1;
(statearr_34539_36151[(2)] = inst_34507);

(statearr_34539_36151[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34530 === (4))){
var inst_34441 = (state_34526[(8)]);
var inst_34441__$1 = (state_34526[(2)]);
var inst_34443 = (inst_34441__$1 == null);
var state_34526__$1 = (function (){var statearr_34544 = state_34526;
(statearr_34544[(8)] = inst_34441__$1);

return statearr_34544;
})();
if(cljs.core.truth_(inst_34443)){
var statearr_34545_36154 = state_34526__$1;
(statearr_34545_36154[(1)] = (5));

} else {
var statearr_34546_36159 = state_34526__$1;
(statearr_34546_36159[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34530 === (15))){
var inst_34492 = (state_34526[(2)]);
var state_34526__$1 = state_34526;
var statearr_34547_36161 = state_34526__$1;
(statearr_34547_36161[(2)] = inst_34492);

(statearr_34547_36161[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34530 === (21))){
var inst_34512 = (state_34526[(2)]);
var state_34526__$1 = (function (){var statearr_34551 = state_34526;
(statearr_34551[(9)] = inst_34512);

return statearr_34551;
})();
var statearr_34553_36162 = state_34526__$1;
(statearr_34553_36162[(2)] = null);

(statearr_34553_36162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34530 === (13))){
var inst_34471 = (state_34526[(10)]);
var inst_34473 = cljs.core.chunked_seq_QMARK_(inst_34471);
var state_34526__$1 = state_34526;
if(inst_34473){
var statearr_34554_36164 = state_34526__$1;
(statearr_34554_36164[(1)] = (16));

} else {
var statearr_34555_36165 = state_34526__$1;
(statearr_34555_36165[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34530 === (22))){
var inst_34504 = (state_34526[(2)]);
var state_34526__$1 = state_34526;
if(cljs.core.truth_(inst_34504)){
var statearr_34556_36166 = state_34526__$1;
(statearr_34556_36166[(1)] = (23));

} else {
var statearr_34557_36171 = state_34526__$1;
(statearr_34557_36171[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34530 === (6))){
var inst_34498 = (state_34526[(7)]);
var inst_34441 = (state_34526[(8)]);
var inst_34500 = (state_34526[(11)]);
var inst_34498__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_34441) : topic_fn.call(null,inst_34441));
var inst_34499 = cljs.core.deref(mults);
var inst_34500__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34499,inst_34498__$1);
var state_34526__$1 = (function (){var statearr_34558 = state_34526;
(statearr_34558[(7)] = inst_34498__$1);

(statearr_34558[(11)] = inst_34500__$1);

return statearr_34558;
})();
if(cljs.core.truth_(inst_34500__$1)){
var statearr_34559_36173 = state_34526__$1;
(statearr_34559_36173[(1)] = (19));

} else {
var statearr_34560_36174 = state_34526__$1;
(statearr_34560_36174[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34530 === (25))){
var inst_34509 = (state_34526[(2)]);
var state_34526__$1 = state_34526;
var statearr_34561_36175 = state_34526__$1;
(statearr_34561_36175[(2)] = inst_34509);

(statearr_34561_36175[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34530 === (17))){
var inst_34471 = (state_34526[(10)]);
var inst_34482 = cljs.core.first(inst_34471);
var inst_34484 = cljs.core.async.muxch_STAR_(inst_34482);
var inst_34485 = cljs.core.async.close_BANG_(inst_34484);
var inst_34486 = cljs.core.next(inst_34471);
var inst_34454 = inst_34486;
var inst_34455 = null;
var inst_34456 = (0);
var inst_34457 = (0);
var state_34526__$1 = (function (){var statearr_34566 = state_34526;
(statearr_34566[(12)] = inst_34454);

(statearr_34566[(13)] = inst_34457);

(statearr_34566[(14)] = inst_34455);

(statearr_34566[(15)] = inst_34485);

(statearr_34566[(16)] = inst_34456);

return statearr_34566;
})();
var statearr_34567_36180 = state_34526__$1;
(statearr_34567_36180[(2)] = null);

(statearr_34567_36180[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34530 === (3))){
var inst_34517 = (state_34526[(2)]);
var state_34526__$1 = state_34526;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34526__$1,inst_34517);
} else {
if((state_val_34530 === (12))){
var inst_34494 = (state_34526[(2)]);
var state_34526__$1 = state_34526;
var statearr_34568_36183 = state_34526__$1;
(statearr_34568_36183[(2)] = inst_34494);

(statearr_34568_36183[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34530 === (2))){
var state_34526__$1 = state_34526;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34526__$1,(4),ch);
} else {
if((state_val_34530 === (23))){
var state_34526__$1 = state_34526;
var statearr_34570_36184 = state_34526__$1;
(statearr_34570_36184[(2)] = null);

(statearr_34570_36184[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34530 === (19))){
var inst_34441 = (state_34526[(8)]);
var inst_34500 = (state_34526[(11)]);
var inst_34502 = cljs.core.async.muxch_STAR_(inst_34500);
var state_34526__$1 = state_34526;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34526__$1,(22),inst_34502,inst_34441);
} else {
if((state_val_34530 === (11))){
var inst_34454 = (state_34526[(12)]);
var inst_34471 = (state_34526[(10)]);
var inst_34471__$1 = cljs.core.seq(inst_34454);
var state_34526__$1 = (function (){var statearr_34571 = state_34526;
(statearr_34571[(10)] = inst_34471__$1);

return statearr_34571;
})();
if(inst_34471__$1){
var statearr_34572_36187 = state_34526__$1;
(statearr_34572_36187[(1)] = (13));

} else {
var statearr_34573_36188 = state_34526__$1;
(statearr_34573_36188[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34530 === (9))){
var inst_34496 = (state_34526[(2)]);
var state_34526__$1 = state_34526;
var statearr_34574_36190 = state_34526__$1;
(statearr_34574_36190[(2)] = inst_34496);

(statearr_34574_36190[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34530 === (5))){
var inst_34451 = cljs.core.deref(mults);
var inst_34452 = cljs.core.vals(inst_34451);
var inst_34453 = cljs.core.seq(inst_34452);
var inst_34454 = inst_34453;
var inst_34455 = null;
var inst_34456 = (0);
var inst_34457 = (0);
var state_34526__$1 = (function (){var statearr_34575 = state_34526;
(statearr_34575[(12)] = inst_34454);

(statearr_34575[(13)] = inst_34457);

(statearr_34575[(14)] = inst_34455);

(statearr_34575[(16)] = inst_34456);

return statearr_34575;
})();
var statearr_34576_36192 = state_34526__$1;
(statearr_34576_36192[(2)] = null);

(statearr_34576_36192[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34530 === (14))){
var state_34526__$1 = state_34526;
var statearr_34580_36193 = state_34526__$1;
(statearr_34580_36193[(2)] = null);

(statearr_34580_36193[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34530 === (16))){
var inst_34471 = (state_34526[(10)]);
var inst_34475 = cljs.core.chunk_first(inst_34471);
var inst_34477 = cljs.core.chunk_rest(inst_34471);
var inst_34479 = cljs.core.count(inst_34475);
var inst_34454 = inst_34477;
var inst_34455 = inst_34475;
var inst_34456 = inst_34479;
var inst_34457 = (0);
var state_34526__$1 = (function (){var statearr_34581 = state_34526;
(statearr_34581[(12)] = inst_34454);

(statearr_34581[(13)] = inst_34457);

(statearr_34581[(14)] = inst_34455);

(statearr_34581[(16)] = inst_34456);

return statearr_34581;
})();
var statearr_34582_36196 = state_34526__$1;
(statearr_34582_36196[(2)] = null);

(statearr_34582_36196[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34530 === (10))){
var inst_34454 = (state_34526[(12)]);
var inst_34457 = (state_34526[(13)]);
var inst_34455 = (state_34526[(14)]);
var inst_34456 = (state_34526[(16)]);
var inst_34462 = cljs.core._nth(inst_34455,inst_34457);
var inst_34464 = cljs.core.async.muxch_STAR_(inst_34462);
var inst_34465 = cljs.core.async.close_BANG_(inst_34464);
var inst_34466 = (inst_34457 + (1));
var tmp34577 = inst_34454;
var tmp34578 = inst_34455;
var tmp34579 = inst_34456;
var inst_34454__$1 = tmp34577;
var inst_34455__$1 = tmp34578;
var inst_34456__$1 = tmp34579;
var inst_34457__$1 = inst_34466;
var state_34526__$1 = (function (){var statearr_34585 = state_34526;
(statearr_34585[(12)] = inst_34454__$1);

(statearr_34585[(13)] = inst_34457__$1);

(statearr_34585[(14)] = inst_34455__$1);

(statearr_34585[(16)] = inst_34456__$1);

(statearr_34585[(17)] = inst_34465);

return statearr_34585;
})();
var statearr_34586_36199 = state_34526__$1;
(statearr_34586_36199[(2)] = null);

(statearr_34586_36199[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34530 === (18))){
var inst_34489 = (state_34526[(2)]);
var state_34526__$1 = state_34526;
var statearr_34587_36200 = state_34526__$1;
(statearr_34587_36200[(2)] = inst_34489);

(statearr_34587_36200[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34530 === (8))){
var inst_34457 = (state_34526[(13)]);
var inst_34456 = (state_34526[(16)]);
var inst_34459 = (inst_34457 < inst_34456);
var inst_34460 = inst_34459;
var state_34526__$1 = state_34526;
if(cljs.core.truth_(inst_34460)){
var statearr_34588_36202 = state_34526__$1;
(statearr_34588_36202[(1)] = (10));

} else {
var statearr_34589_36203 = state_34526__$1;
(statearr_34589_36203[(1)] = (11));

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
var cljs$core$async$state_machine__32744__auto__ = null;
var cljs$core$async$state_machine__32744__auto____0 = (function (){
var statearr_34590 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34590[(0)] = cljs$core$async$state_machine__32744__auto__);

(statearr_34590[(1)] = (1));

return statearr_34590;
});
var cljs$core$async$state_machine__32744__auto____1 = (function (state_34526){
while(true){
var ret_value__32745__auto__ = (function (){try{while(true){
var result__32746__auto__ = switch__32743__auto__(state_34526);
if(cljs.core.keyword_identical_QMARK_(result__32746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32746__auto__;
}
break;
}
}catch (e34591){var ex__32747__auto__ = e34591;
var statearr_34592_36204 = state_34526;
(statearr_34592_36204[(2)] = ex__32747__auto__);


if(cljs.core.seq((state_34526[(4)]))){
var statearr_34593_36207 = state_34526;
(statearr_34593_36207[(1)] = cljs.core.first((state_34526[(4)])));

} else {
throw ex__32747__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32745__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36212 = state_34526;
state_34526 = G__36212;
continue;
} else {
return ret_value__32745__auto__;
}
break;
}
});
cljs$core$async$state_machine__32744__auto__ = function(state_34526){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32744__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32744__auto____1.call(this,state_34526);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32744__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32744__auto____0;
cljs$core$async$state_machine__32744__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32744__auto____1;
return cljs$core$async$state_machine__32744__auto__;
})()
})();
var state__32936__auto__ = (function (){var statearr_34594 = f__32935__auto__();
(statearr_34594[(6)] = c__32934__auto___36141);

return statearr_34594;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32936__auto__);
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
var G__34596 = arguments.length;
switch (G__34596) {
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
var G__34598 = arguments.length;
switch (G__34598) {
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
var G__34600 = arguments.length;
switch (G__34600) {
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
var c__32934__auto___36259 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32935__auto__ = (function (){var switch__32743__auto__ = (function (state_34645){
var state_val_34646 = (state_34645[(1)]);
if((state_val_34646 === (7))){
var state_34645__$1 = state_34645;
var statearr_34648_36268 = state_34645__$1;
(statearr_34648_36268[(2)] = null);

(statearr_34648_36268[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34646 === (1))){
var state_34645__$1 = state_34645;
var statearr_34650_36273 = state_34645__$1;
(statearr_34650_36273[(2)] = null);

(statearr_34650_36273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34646 === (4))){
var inst_34603 = (state_34645[(7)]);
var inst_34604 = (state_34645[(8)]);
var inst_34606 = (inst_34604 < inst_34603);
var state_34645__$1 = state_34645;
if(cljs.core.truth_(inst_34606)){
var statearr_34651_36279 = state_34645__$1;
(statearr_34651_36279[(1)] = (6));

} else {
var statearr_34652_36280 = state_34645__$1;
(statearr_34652_36280[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34646 === (15))){
var inst_34631 = (state_34645[(9)]);
var inst_34636 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_34631);
var state_34645__$1 = state_34645;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34645__$1,(17),out,inst_34636);
} else {
if((state_val_34646 === (13))){
var inst_34631 = (state_34645[(9)]);
var inst_34631__$1 = (state_34645[(2)]);
var inst_34632 = cljs.core.some(cljs.core.nil_QMARK_,inst_34631__$1);
var state_34645__$1 = (function (){var statearr_34653 = state_34645;
(statearr_34653[(9)] = inst_34631__$1);

return statearr_34653;
})();
if(cljs.core.truth_(inst_34632)){
var statearr_34654_36294 = state_34645__$1;
(statearr_34654_36294[(1)] = (14));

} else {
var statearr_34655_36296 = state_34645__$1;
(statearr_34655_36296[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34646 === (6))){
var state_34645__$1 = state_34645;
var statearr_34656_36302 = state_34645__$1;
(statearr_34656_36302[(2)] = null);

(statearr_34656_36302[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34646 === (17))){
var inst_34638 = (state_34645[(2)]);
var state_34645__$1 = (function (){var statearr_34660 = state_34645;
(statearr_34660[(10)] = inst_34638);

return statearr_34660;
})();
var statearr_34661_36312 = state_34645__$1;
(statearr_34661_36312[(2)] = null);

(statearr_34661_36312[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34646 === (3))){
var inst_34643 = (state_34645[(2)]);
var state_34645__$1 = state_34645;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34645__$1,inst_34643);
} else {
if((state_val_34646 === (12))){
var _ = (function (){var statearr_34662 = state_34645;
(statearr_34662[(4)] = cljs.core.rest((state_34645[(4)])));

return statearr_34662;
})();
var state_34645__$1 = state_34645;
var ex34659 = (state_34645__$1[(2)]);
var statearr_34663_36322 = state_34645__$1;
(statearr_34663_36322[(5)] = ex34659);


if((ex34659 instanceof Object)){
var statearr_34664_36324 = state_34645__$1;
(statearr_34664_36324[(1)] = (11));

(statearr_34664_36324[(5)] = null);

} else {
throw ex34659;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34646 === (2))){
var inst_34602 = cljs.core.reset_BANG_(dctr,cnt);
var inst_34603 = cnt;
var inst_34604 = (0);
var state_34645__$1 = (function (){var statearr_34665 = state_34645;
(statearr_34665[(7)] = inst_34603);

(statearr_34665[(8)] = inst_34604);

(statearr_34665[(11)] = inst_34602);

return statearr_34665;
})();
var statearr_34666_36343 = state_34645__$1;
(statearr_34666_36343[(2)] = null);

(statearr_34666_36343[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34646 === (11))){
var inst_34610 = (state_34645[(2)]);
var inst_34611 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_34645__$1 = (function (){var statearr_34667 = state_34645;
(statearr_34667[(12)] = inst_34610);

return statearr_34667;
})();
var statearr_34668_36344 = state_34645__$1;
(statearr_34668_36344[(2)] = inst_34611);

(statearr_34668_36344[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34646 === (9))){
var inst_34604 = (state_34645[(8)]);
var _ = (function (){var statearr_34670 = state_34645;
(statearr_34670[(4)] = cljs.core.cons((12),(state_34645[(4)])));

return statearr_34670;
})();
var inst_34617 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_34604) : chs__$1.call(null,inst_34604));
var inst_34618 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_34604) : done.call(null,inst_34604));
var inst_34619 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_34617,inst_34618);
var ___$1 = (function (){var statearr_34672 = state_34645;
(statearr_34672[(4)] = cljs.core.rest((state_34645[(4)])));

return statearr_34672;
})();
var state_34645__$1 = state_34645;
var statearr_34673_36352 = state_34645__$1;
(statearr_34673_36352[(2)] = inst_34619);

(statearr_34673_36352[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34646 === (5))){
var inst_34629 = (state_34645[(2)]);
var state_34645__$1 = (function (){var statearr_34674 = state_34645;
(statearr_34674[(13)] = inst_34629);

return statearr_34674;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34645__$1,(13),dchan);
} else {
if((state_val_34646 === (14))){
var inst_34634 = cljs.core.async.close_BANG_(out);
var state_34645__$1 = state_34645;
var statearr_34675_36360 = state_34645__$1;
(statearr_34675_36360[(2)] = inst_34634);

(statearr_34675_36360[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34646 === (16))){
var inst_34641 = (state_34645[(2)]);
var state_34645__$1 = state_34645;
var statearr_34680_36362 = state_34645__$1;
(statearr_34680_36362[(2)] = inst_34641);

(statearr_34680_36362[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34646 === (10))){
var inst_34604 = (state_34645[(8)]);
var inst_34622 = (state_34645[(2)]);
var inst_34623 = (inst_34604 + (1));
var inst_34604__$1 = inst_34623;
var state_34645__$1 = (function (){var statearr_34681 = state_34645;
(statearr_34681[(8)] = inst_34604__$1);

(statearr_34681[(14)] = inst_34622);

return statearr_34681;
})();
var statearr_34682_36378 = state_34645__$1;
(statearr_34682_36378[(2)] = null);

(statearr_34682_36378[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34646 === (8))){
var inst_34627 = (state_34645[(2)]);
var state_34645__$1 = state_34645;
var statearr_34683_36380 = state_34645__$1;
(statearr_34683_36380[(2)] = inst_34627);

(statearr_34683_36380[(1)] = (5));


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
var cljs$core$async$state_machine__32744__auto__ = null;
var cljs$core$async$state_machine__32744__auto____0 = (function (){
var statearr_34685 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34685[(0)] = cljs$core$async$state_machine__32744__auto__);

(statearr_34685[(1)] = (1));

return statearr_34685;
});
var cljs$core$async$state_machine__32744__auto____1 = (function (state_34645){
while(true){
var ret_value__32745__auto__ = (function (){try{while(true){
var result__32746__auto__ = switch__32743__auto__(state_34645);
if(cljs.core.keyword_identical_QMARK_(result__32746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32746__auto__;
}
break;
}
}catch (e34686){var ex__32747__auto__ = e34686;
var statearr_34688_36395 = state_34645;
(statearr_34688_36395[(2)] = ex__32747__auto__);


if(cljs.core.seq((state_34645[(4)]))){
var statearr_34689_36396 = state_34645;
(statearr_34689_36396[(1)] = cljs.core.first((state_34645[(4)])));

} else {
throw ex__32747__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32745__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36398 = state_34645;
state_34645 = G__36398;
continue;
} else {
return ret_value__32745__auto__;
}
break;
}
});
cljs$core$async$state_machine__32744__auto__ = function(state_34645){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32744__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32744__auto____1.call(this,state_34645);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32744__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32744__auto____0;
cljs$core$async$state_machine__32744__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32744__auto____1;
return cljs$core$async$state_machine__32744__auto__;
})()
})();
var state__32936__auto__ = (function (){var statearr_34691 = f__32935__auto__();
(statearr_34691[(6)] = c__32934__auto___36259);

return statearr_34691;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32936__auto__);
}));


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
var G__34697 = arguments.length;
switch (G__34697) {
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
var c__32934__auto___36404 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32935__auto__ = (function (){var switch__32743__auto__ = (function (state_34732){
var state_val_34733 = (state_34732[(1)]);
if((state_val_34733 === (7))){
var inst_34711 = (state_34732[(7)]);
var inst_34712 = (state_34732[(8)]);
var inst_34711__$1 = (state_34732[(2)]);
var inst_34712__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34711__$1,(0),null);
var inst_34713 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34711__$1,(1),null);
var inst_34714 = (inst_34712__$1 == null);
var state_34732__$1 = (function (){var statearr_34741 = state_34732;
(statearr_34741[(7)] = inst_34711__$1);

(statearr_34741[(9)] = inst_34713);

(statearr_34741[(8)] = inst_34712__$1);

return statearr_34741;
})();
if(cljs.core.truth_(inst_34714)){
var statearr_34748_36418 = state_34732__$1;
(statearr_34748_36418[(1)] = (8));

} else {
var statearr_34749_36420 = state_34732__$1;
(statearr_34749_36420[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34733 === (1))){
var inst_34701 = cljs.core.vec(chs);
var inst_34702 = inst_34701;
var state_34732__$1 = (function (){var statearr_34756 = state_34732;
(statearr_34756[(10)] = inst_34702);

return statearr_34756;
})();
var statearr_34757_36432 = state_34732__$1;
(statearr_34757_36432[(2)] = null);

(statearr_34757_36432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34733 === (4))){
var inst_34702 = (state_34732[(10)]);
var state_34732__$1 = state_34732;
return cljs.core.async.ioc_alts_BANG_(state_34732__$1,(7),inst_34702);
} else {
if((state_val_34733 === (6))){
var inst_34728 = (state_34732[(2)]);
var state_34732__$1 = state_34732;
var statearr_34758_36442 = state_34732__$1;
(statearr_34758_36442[(2)] = inst_34728);

(statearr_34758_36442[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34733 === (3))){
var inst_34730 = (state_34732[(2)]);
var state_34732__$1 = state_34732;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34732__$1,inst_34730);
} else {
if((state_val_34733 === (2))){
var inst_34702 = (state_34732[(10)]);
var inst_34704 = cljs.core.count(inst_34702);
var inst_34705 = (inst_34704 > (0));
var state_34732__$1 = state_34732;
if(cljs.core.truth_(inst_34705)){
var statearr_34767_36456 = state_34732__$1;
(statearr_34767_36456[(1)] = (4));

} else {
var statearr_34768_36458 = state_34732__$1;
(statearr_34768_36458[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34733 === (11))){
var inst_34702 = (state_34732[(10)]);
var inst_34721 = (state_34732[(2)]);
var tmp34759 = inst_34702;
var inst_34702__$1 = tmp34759;
var state_34732__$1 = (function (){var statearr_34772 = state_34732;
(statearr_34772[(11)] = inst_34721);

(statearr_34772[(10)] = inst_34702__$1);

return statearr_34772;
})();
var statearr_34773_36470 = state_34732__$1;
(statearr_34773_36470[(2)] = null);

(statearr_34773_36470[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34733 === (9))){
var inst_34712 = (state_34732[(8)]);
var state_34732__$1 = state_34732;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34732__$1,(11),out,inst_34712);
} else {
if((state_val_34733 === (5))){
var inst_34726 = cljs.core.async.close_BANG_(out);
var state_34732__$1 = state_34732;
var statearr_34777_36481 = state_34732__$1;
(statearr_34777_36481[(2)] = inst_34726);

(statearr_34777_36481[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34733 === (10))){
var inst_34724 = (state_34732[(2)]);
var state_34732__$1 = state_34732;
var statearr_34778_36493 = state_34732__$1;
(statearr_34778_36493[(2)] = inst_34724);

(statearr_34778_36493[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34733 === (8))){
var inst_34711 = (state_34732[(7)]);
var inst_34713 = (state_34732[(9)]);
var inst_34712 = (state_34732[(8)]);
var inst_34702 = (state_34732[(10)]);
var inst_34716 = (function (){var cs = inst_34702;
var vec__34707 = inst_34711;
var v = inst_34712;
var c = inst_34713;
return (function (p1__34695_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__34695_SHARP_);
});
})();
var inst_34717 = cljs.core.filterv(inst_34716,inst_34702);
var inst_34702__$1 = inst_34717;
var state_34732__$1 = (function (){var statearr_34779 = state_34732;
(statearr_34779[(10)] = inst_34702__$1);

return statearr_34779;
})();
var statearr_34780_36512 = state_34732__$1;
(statearr_34780_36512[(2)] = null);

(statearr_34780_36512[(1)] = (2));


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
var cljs$core$async$state_machine__32744__auto__ = null;
var cljs$core$async$state_machine__32744__auto____0 = (function (){
var statearr_34782 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34782[(0)] = cljs$core$async$state_machine__32744__auto__);

(statearr_34782[(1)] = (1));

return statearr_34782;
});
var cljs$core$async$state_machine__32744__auto____1 = (function (state_34732){
while(true){
var ret_value__32745__auto__ = (function (){try{while(true){
var result__32746__auto__ = switch__32743__auto__(state_34732);
if(cljs.core.keyword_identical_QMARK_(result__32746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32746__auto__;
}
break;
}
}catch (e34786){var ex__32747__auto__ = e34786;
var statearr_34787_36518 = state_34732;
(statearr_34787_36518[(2)] = ex__32747__auto__);


if(cljs.core.seq((state_34732[(4)]))){
var statearr_34788_36524 = state_34732;
(statearr_34788_36524[(1)] = cljs.core.first((state_34732[(4)])));

} else {
throw ex__32747__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32745__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36531 = state_34732;
state_34732 = G__36531;
continue;
} else {
return ret_value__32745__auto__;
}
break;
}
});
cljs$core$async$state_machine__32744__auto__ = function(state_34732){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32744__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32744__auto____1.call(this,state_34732);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32744__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32744__auto____0;
cljs$core$async$state_machine__32744__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32744__auto____1;
return cljs$core$async$state_machine__32744__auto__;
})()
})();
var state__32936__auto__ = (function (){var statearr_34789 = f__32935__auto__();
(statearr_34789[(6)] = c__32934__auto___36404);

return statearr_34789;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32936__auto__);
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
var G__34791 = arguments.length;
switch (G__34791) {
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
var c__32934__auto___36555 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32935__auto__ = (function (){var switch__32743__auto__ = (function (state_34822){
var state_val_34823 = (state_34822[(1)]);
if((state_val_34823 === (7))){
var inst_34803 = (state_34822[(7)]);
var inst_34803__$1 = (state_34822[(2)]);
var inst_34804 = (inst_34803__$1 == null);
var inst_34805 = cljs.core.not(inst_34804);
var state_34822__$1 = (function (){var statearr_34825 = state_34822;
(statearr_34825[(7)] = inst_34803__$1);

return statearr_34825;
})();
if(inst_34805){
var statearr_34826_36564 = state_34822__$1;
(statearr_34826_36564[(1)] = (8));

} else {
var statearr_34827_36565 = state_34822__$1;
(statearr_34827_36565[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34823 === (1))){
var inst_34796 = (0);
var state_34822__$1 = (function (){var statearr_34828 = state_34822;
(statearr_34828[(8)] = inst_34796);

return statearr_34828;
})();
var statearr_34829_36567 = state_34822__$1;
(statearr_34829_36567[(2)] = null);

(statearr_34829_36567[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34823 === (4))){
var state_34822__$1 = state_34822;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34822__$1,(7),ch);
} else {
if((state_val_34823 === (6))){
var inst_34816 = (state_34822[(2)]);
var state_34822__$1 = state_34822;
var statearr_34830_36568 = state_34822__$1;
(statearr_34830_36568[(2)] = inst_34816);

(statearr_34830_36568[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34823 === (3))){
var inst_34818 = (state_34822[(2)]);
var inst_34819 = cljs.core.async.close_BANG_(out);
var state_34822__$1 = (function (){var statearr_34831 = state_34822;
(statearr_34831[(9)] = inst_34818);

return statearr_34831;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34822__$1,inst_34819);
} else {
if((state_val_34823 === (2))){
var inst_34796 = (state_34822[(8)]);
var inst_34800 = (inst_34796 < n);
var state_34822__$1 = state_34822;
if(cljs.core.truth_(inst_34800)){
var statearr_34832_36572 = state_34822__$1;
(statearr_34832_36572[(1)] = (4));

} else {
var statearr_34833_36573 = state_34822__$1;
(statearr_34833_36573[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34823 === (11))){
var inst_34796 = (state_34822[(8)]);
var inst_34808 = (state_34822[(2)]);
var inst_34809 = (inst_34796 + (1));
var inst_34796__$1 = inst_34809;
var state_34822__$1 = (function (){var statearr_34834 = state_34822;
(statearr_34834[(8)] = inst_34796__$1);

(statearr_34834[(10)] = inst_34808);

return statearr_34834;
})();
var statearr_34835_36578 = state_34822__$1;
(statearr_34835_36578[(2)] = null);

(statearr_34835_36578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34823 === (9))){
var state_34822__$1 = state_34822;
var statearr_34836_36579 = state_34822__$1;
(statearr_34836_36579[(2)] = null);

(statearr_34836_36579[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34823 === (5))){
var state_34822__$1 = state_34822;
var statearr_34839_36581 = state_34822__$1;
(statearr_34839_36581[(2)] = null);

(statearr_34839_36581[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34823 === (10))){
var inst_34813 = (state_34822[(2)]);
var state_34822__$1 = state_34822;
var statearr_34840_36582 = state_34822__$1;
(statearr_34840_36582[(2)] = inst_34813);

(statearr_34840_36582[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34823 === (8))){
var inst_34803 = (state_34822[(7)]);
var state_34822__$1 = state_34822;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34822__$1,(11),out,inst_34803);
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
var cljs$core$async$state_machine__32744__auto__ = null;
var cljs$core$async$state_machine__32744__auto____0 = (function (){
var statearr_34841 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34841[(0)] = cljs$core$async$state_machine__32744__auto__);

(statearr_34841[(1)] = (1));

return statearr_34841;
});
var cljs$core$async$state_machine__32744__auto____1 = (function (state_34822){
while(true){
var ret_value__32745__auto__ = (function (){try{while(true){
var result__32746__auto__ = switch__32743__auto__(state_34822);
if(cljs.core.keyword_identical_QMARK_(result__32746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32746__auto__;
}
break;
}
}catch (e34842){var ex__32747__auto__ = e34842;
var statearr_34844_36591 = state_34822;
(statearr_34844_36591[(2)] = ex__32747__auto__);


if(cljs.core.seq((state_34822[(4)]))){
var statearr_34845_36596 = state_34822;
(statearr_34845_36596[(1)] = cljs.core.first((state_34822[(4)])));

} else {
throw ex__32747__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32745__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36600 = state_34822;
state_34822 = G__36600;
continue;
} else {
return ret_value__32745__auto__;
}
break;
}
});
cljs$core$async$state_machine__32744__auto__ = function(state_34822){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32744__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32744__auto____1.call(this,state_34822);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32744__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32744__auto____0;
cljs$core$async$state_machine__32744__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32744__auto____1;
return cljs$core$async$state_machine__32744__auto__;
})()
})();
var state__32936__auto__ = (function (){var statearr_34850 = f__32935__auto__();
(statearr_34850[(6)] = c__32934__auto___36555);

return statearr_34850;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32936__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34852 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34852 = (function (f,ch,meta34853){
this.f = f;
this.ch = ch;
this.meta34853 = meta34853;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34852.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34854,meta34853__$1){
var self__ = this;
var _34854__$1 = this;
return (new cljs.core.async.t_cljs$core$async34852(self__.f,self__.ch,meta34853__$1));
}));

(cljs.core.async.t_cljs$core$async34852.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34854){
var self__ = this;
var _34854__$1 = this;
return self__.meta34853;
}));

(cljs.core.async.t_cljs$core$async34852.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34852.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34852.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34852.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34852.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34855 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34855 = (function (f,ch,meta34853,_,fn1,meta34856){
this.f = f;
this.ch = ch;
this.meta34853 = meta34853;
this._ = _;
this.fn1 = fn1;
this.meta34856 = meta34856;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34855.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34857,meta34856__$1){
var self__ = this;
var _34857__$1 = this;
return (new cljs.core.async.t_cljs$core$async34855(self__.f,self__.ch,self__.meta34853,self__._,self__.fn1,meta34856__$1));
}));

(cljs.core.async.t_cljs$core$async34855.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34857){
var self__ = this;
var _34857__$1 = this;
return self__.meta34856;
}));

(cljs.core.async.t_cljs$core$async34855.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34855.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async34855.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34855.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__34851_SHARP_){
var G__34858 = (((p1__34851_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__34851_SHARP_) : self__.f.call(null,p1__34851_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__34858) : f1.call(null,G__34858));
});
}));

(cljs.core.async.t_cljs$core$async34855.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34853","meta34853",-2003553805,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34852","cljs.core.async/t_cljs$core$async34852",-1619975083,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34856","meta34856",-1306514341,null)], null);
}));

(cljs.core.async.t_cljs$core$async34855.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34855.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34855");

(cljs.core.async.t_cljs$core$async34855.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async34855");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34855.
 */
cljs.core.async.__GT_t_cljs$core$async34855 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34855(f__$1,ch__$1,meta34853__$1,___$2,fn1__$1,meta34856){
return (new cljs.core.async.t_cljs$core$async34855(f__$1,ch__$1,meta34853__$1,___$2,fn1__$1,meta34856));
});

}

return (new cljs.core.async.t_cljs$core$async34855(self__.f,self__.ch,self__.meta34853,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__34864 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__34864) : self__.f.call(null,G__34864));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async34852.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34852.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async34852.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34853","meta34853",-2003553805,null)], null);
}));

(cljs.core.async.t_cljs$core$async34852.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34852.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34852");

(cljs.core.async.t_cljs$core$async34852.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async34852");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34852.
 */
cljs.core.async.__GT_t_cljs$core$async34852 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34852(f__$1,ch__$1,meta34853){
return (new cljs.core.async.t_cljs$core$async34852(f__$1,ch__$1,meta34853));
});

}

return (new cljs.core.async.t_cljs$core$async34852(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34867 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34867 = (function (f,ch,meta34868){
this.f = f;
this.ch = ch;
this.meta34868 = meta34868;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34867.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34869,meta34868__$1){
var self__ = this;
var _34869__$1 = this;
return (new cljs.core.async.t_cljs$core$async34867(self__.f,self__.ch,meta34868__$1));
}));

(cljs.core.async.t_cljs$core$async34867.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34869){
var self__ = this;
var _34869__$1 = this;
return self__.meta34868;
}));

(cljs.core.async.t_cljs$core$async34867.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34867.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34867.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34867.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34867.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34867.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async34867.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34868","meta34868",-4748272,null)], null);
}));

(cljs.core.async.t_cljs$core$async34867.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34867.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34867");

(cljs.core.async.t_cljs$core$async34867.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async34867");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34867.
 */
cljs.core.async.__GT_t_cljs$core$async34867 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async34867(f__$1,ch__$1,meta34868){
return (new cljs.core.async.t_cljs$core$async34867(f__$1,ch__$1,meta34868));
});

}

return (new cljs.core.async.t_cljs$core$async34867(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34877 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34877 = (function (p,ch,meta34878){
this.p = p;
this.ch = ch;
this.meta34878 = meta34878;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34877.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34879,meta34878__$1){
var self__ = this;
var _34879__$1 = this;
return (new cljs.core.async.t_cljs$core$async34877(self__.p,self__.ch,meta34878__$1));
}));

(cljs.core.async.t_cljs$core$async34877.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34879){
var self__ = this;
var _34879__$1 = this;
return self__.meta34878;
}));

(cljs.core.async.t_cljs$core$async34877.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34877.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34877.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34877.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34877.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34877.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34877.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async34877.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34878","meta34878",-299324894,null)], null);
}));

(cljs.core.async.t_cljs$core$async34877.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34877.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34877");

(cljs.core.async.t_cljs$core$async34877.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async34877");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34877.
 */
cljs.core.async.__GT_t_cljs$core$async34877 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async34877(p__$1,ch__$1,meta34878){
return (new cljs.core.async.t_cljs$core$async34877(p__$1,ch__$1,meta34878));
});

}

return (new cljs.core.async.t_cljs$core$async34877(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__34889 = arguments.length;
switch (G__34889) {
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
var c__32934__auto___36718 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32935__auto__ = (function (){var switch__32743__auto__ = (function (state_34910){
var state_val_34911 = (state_34910[(1)]);
if((state_val_34911 === (7))){
var inst_34906 = (state_34910[(2)]);
var state_34910__$1 = state_34910;
var statearr_34912_36723 = state_34910__$1;
(statearr_34912_36723[(2)] = inst_34906);

(statearr_34912_36723[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34911 === (1))){
var state_34910__$1 = state_34910;
var statearr_34913_36724 = state_34910__$1;
(statearr_34913_36724[(2)] = null);

(statearr_34913_36724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34911 === (4))){
var inst_34892 = (state_34910[(7)]);
var inst_34892__$1 = (state_34910[(2)]);
var inst_34893 = (inst_34892__$1 == null);
var state_34910__$1 = (function (){var statearr_34916 = state_34910;
(statearr_34916[(7)] = inst_34892__$1);

return statearr_34916;
})();
if(cljs.core.truth_(inst_34893)){
var statearr_34917_36726 = state_34910__$1;
(statearr_34917_36726[(1)] = (5));

} else {
var statearr_34918_36727 = state_34910__$1;
(statearr_34918_36727[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34911 === (6))){
var inst_34892 = (state_34910[(7)]);
var inst_34897 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34892) : p.call(null,inst_34892));
var state_34910__$1 = state_34910;
if(cljs.core.truth_(inst_34897)){
var statearr_34919_36728 = state_34910__$1;
(statearr_34919_36728[(1)] = (8));

} else {
var statearr_34920_36729 = state_34910__$1;
(statearr_34920_36729[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34911 === (3))){
var inst_34908 = (state_34910[(2)]);
var state_34910__$1 = state_34910;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34910__$1,inst_34908);
} else {
if((state_val_34911 === (2))){
var state_34910__$1 = state_34910;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34910__$1,(4),ch);
} else {
if((state_val_34911 === (11))){
var inst_34900 = (state_34910[(2)]);
var state_34910__$1 = state_34910;
var statearr_34924_36731 = state_34910__$1;
(statearr_34924_36731[(2)] = inst_34900);

(statearr_34924_36731[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34911 === (9))){
var state_34910__$1 = state_34910;
var statearr_34925_36732 = state_34910__$1;
(statearr_34925_36732[(2)] = null);

(statearr_34925_36732[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34911 === (5))){
var inst_34895 = cljs.core.async.close_BANG_(out);
var state_34910__$1 = state_34910;
var statearr_34926_36733 = state_34910__$1;
(statearr_34926_36733[(2)] = inst_34895);

(statearr_34926_36733[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34911 === (10))){
var inst_34903 = (state_34910[(2)]);
var state_34910__$1 = (function (){var statearr_34927 = state_34910;
(statearr_34927[(8)] = inst_34903);

return statearr_34927;
})();
var statearr_34928_36734 = state_34910__$1;
(statearr_34928_36734[(2)] = null);

(statearr_34928_36734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34911 === (8))){
var inst_34892 = (state_34910[(7)]);
var state_34910__$1 = state_34910;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34910__$1,(11),out,inst_34892);
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
var cljs$core$async$state_machine__32744__auto__ = null;
var cljs$core$async$state_machine__32744__auto____0 = (function (){
var statearr_34929 = [null,null,null,null,null,null,null,null,null];
(statearr_34929[(0)] = cljs$core$async$state_machine__32744__auto__);

(statearr_34929[(1)] = (1));

return statearr_34929;
});
var cljs$core$async$state_machine__32744__auto____1 = (function (state_34910){
while(true){
var ret_value__32745__auto__ = (function (){try{while(true){
var result__32746__auto__ = switch__32743__auto__(state_34910);
if(cljs.core.keyword_identical_QMARK_(result__32746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32746__auto__;
}
break;
}
}catch (e34930){var ex__32747__auto__ = e34930;
var statearr_34931_36739 = state_34910;
(statearr_34931_36739[(2)] = ex__32747__auto__);


if(cljs.core.seq((state_34910[(4)]))){
var statearr_34932_36740 = state_34910;
(statearr_34932_36740[(1)] = cljs.core.first((state_34910[(4)])));

} else {
throw ex__32747__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32745__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36741 = state_34910;
state_34910 = G__36741;
continue;
} else {
return ret_value__32745__auto__;
}
break;
}
});
cljs$core$async$state_machine__32744__auto__ = function(state_34910){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32744__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32744__auto____1.call(this,state_34910);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32744__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32744__auto____0;
cljs$core$async$state_machine__32744__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32744__auto____1;
return cljs$core$async$state_machine__32744__auto__;
})()
})();
var state__32936__auto__ = (function (){var statearr_34933 = f__32935__auto__();
(statearr_34933[(6)] = c__32934__auto___36718);

return statearr_34933;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32936__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__34935 = arguments.length;
switch (G__34935) {
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
var c__32934__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32935__auto__ = (function (){var switch__32743__auto__ = (function (state_34997){
var state_val_34998 = (state_34997[(1)]);
if((state_val_34998 === (7))){
var inst_34993 = (state_34997[(2)]);
var state_34997__$1 = state_34997;
var statearr_34999_36744 = state_34997__$1;
(statearr_34999_36744[(2)] = inst_34993);

(statearr_34999_36744[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34998 === (20))){
var inst_34963 = (state_34997[(7)]);
var inst_34974 = (state_34997[(2)]);
var inst_34975 = cljs.core.next(inst_34963);
var inst_34949 = inst_34975;
var inst_34950 = null;
var inst_34951 = (0);
var inst_34952 = (0);
var state_34997__$1 = (function (){var statearr_35000 = state_34997;
(statearr_35000[(8)] = inst_34951);

(statearr_35000[(9)] = inst_34952);

(statearr_35000[(10)] = inst_34950);

(statearr_35000[(11)] = inst_34949);

(statearr_35000[(12)] = inst_34974);

return statearr_35000;
})();
var statearr_35001_36751 = state_34997__$1;
(statearr_35001_36751[(2)] = null);

(statearr_35001_36751[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34998 === (1))){
var state_34997__$1 = state_34997;
var statearr_35002_36752 = state_34997__$1;
(statearr_35002_36752[(2)] = null);

(statearr_35002_36752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34998 === (4))){
var inst_34938 = (state_34997[(13)]);
var inst_34938__$1 = (state_34997[(2)]);
var inst_34939 = (inst_34938__$1 == null);
var state_34997__$1 = (function (){var statearr_35003 = state_34997;
(statearr_35003[(13)] = inst_34938__$1);

return statearr_35003;
})();
if(cljs.core.truth_(inst_34939)){
var statearr_35004_36757 = state_34997__$1;
(statearr_35004_36757[(1)] = (5));

} else {
var statearr_35005_36758 = state_34997__$1;
(statearr_35005_36758[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34998 === (15))){
var state_34997__$1 = state_34997;
var statearr_35009_36759 = state_34997__$1;
(statearr_35009_36759[(2)] = null);

(statearr_35009_36759[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34998 === (21))){
var state_34997__$1 = state_34997;
var statearr_35010_36760 = state_34997__$1;
(statearr_35010_36760[(2)] = null);

(statearr_35010_36760[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34998 === (13))){
var inst_34951 = (state_34997[(8)]);
var inst_34952 = (state_34997[(9)]);
var inst_34950 = (state_34997[(10)]);
var inst_34949 = (state_34997[(11)]);
var inst_34959 = (state_34997[(2)]);
var inst_34960 = (inst_34952 + (1));
var tmp35006 = inst_34951;
var tmp35007 = inst_34950;
var tmp35008 = inst_34949;
var inst_34949__$1 = tmp35008;
var inst_34950__$1 = tmp35007;
var inst_34951__$1 = tmp35006;
var inst_34952__$1 = inst_34960;
var state_34997__$1 = (function (){var statearr_35012 = state_34997;
(statearr_35012[(8)] = inst_34951__$1);

(statearr_35012[(9)] = inst_34952__$1);

(statearr_35012[(10)] = inst_34950__$1);

(statearr_35012[(14)] = inst_34959);

(statearr_35012[(11)] = inst_34949__$1);

return statearr_35012;
})();
var statearr_35013_36765 = state_34997__$1;
(statearr_35013_36765[(2)] = null);

(statearr_35013_36765[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34998 === (22))){
var state_34997__$1 = state_34997;
var statearr_35014_36766 = state_34997__$1;
(statearr_35014_36766[(2)] = null);

(statearr_35014_36766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34998 === (6))){
var inst_34938 = (state_34997[(13)]);
var inst_34947 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34938) : f.call(null,inst_34938));
var inst_34948 = cljs.core.seq(inst_34947);
var inst_34949 = inst_34948;
var inst_34950 = null;
var inst_34951 = (0);
var inst_34952 = (0);
var state_34997__$1 = (function (){var statearr_35015 = state_34997;
(statearr_35015[(8)] = inst_34951);

(statearr_35015[(9)] = inst_34952);

(statearr_35015[(10)] = inst_34950);

(statearr_35015[(11)] = inst_34949);

return statearr_35015;
})();
var statearr_35016_36768 = state_34997__$1;
(statearr_35016_36768[(2)] = null);

(statearr_35016_36768[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34998 === (17))){
var inst_34963 = (state_34997[(7)]);
var inst_34967 = cljs.core.chunk_first(inst_34963);
var inst_34968 = cljs.core.chunk_rest(inst_34963);
var inst_34969 = cljs.core.count(inst_34967);
var inst_34949 = inst_34968;
var inst_34950 = inst_34967;
var inst_34951 = inst_34969;
var inst_34952 = (0);
var state_34997__$1 = (function (){var statearr_35020 = state_34997;
(statearr_35020[(8)] = inst_34951);

(statearr_35020[(9)] = inst_34952);

(statearr_35020[(10)] = inst_34950);

(statearr_35020[(11)] = inst_34949);

return statearr_35020;
})();
var statearr_35021_36772 = state_34997__$1;
(statearr_35021_36772[(2)] = null);

(statearr_35021_36772[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34998 === (3))){
var inst_34995 = (state_34997[(2)]);
var state_34997__$1 = state_34997;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34997__$1,inst_34995);
} else {
if((state_val_34998 === (12))){
var inst_34983 = (state_34997[(2)]);
var state_34997__$1 = state_34997;
var statearr_35022_36781 = state_34997__$1;
(statearr_35022_36781[(2)] = inst_34983);

(statearr_35022_36781[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34998 === (2))){
var state_34997__$1 = state_34997;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34997__$1,(4),in$);
} else {
if((state_val_34998 === (23))){
var inst_34991 = (state_34997[(2)]);
var state_34997__$1 = state_34997;
var statearr_35023_36788 = state_34997__$1;
(statearr_35023_36788[(2)] = inst_34991);

(statearr_35023_36788[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34998 === (19))){
var inst_34978 = (state_34997[(2)]);
var state_34997__$1 = state_34997;
var statearr_35024_36793 = state_34997__$1;
(statearr_35024_36793[(2)] = inst_34978);

(statearr_35024_36793[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34998 === (11))){
var inst_34949 = (state_34997[(11)]);
var inst_34963 = (state_34997[(7)]);
var inst_34963__$1 = cljs.core.seq(inst_34949);
var state_34997__$1 = (function (){var statearr_35025 = state_34997;
(statearr_35025[(7)] = inst_34963__$1);

return statearr_35025;
})();
if(inst_34963__$1){
var statearr_35027_36794 = state_34997__$1;
(statearr_35027_36794[(1)] = (14));

} else {
var statearr_35031_36799 = state_34997__$1;
(statearr_35031_36799[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34998 === (9))){
var inst_34985 = (state_34997[(2)]);
var inst_34986 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_34997__$1 = (function (){var statearr_35032 = state_34997;
(statearr_35032[(15)] = inst_34985);

return statearr_35032;
})();
if(cljs.core.truth_(inst_34986)){
var statearr_35033_36805 = state_34997__$1;
(statearr_35033_36805[(1)] = (21));

} else {
var statearr_35034_36806 = state_34997__$1;
(statearr_35034_36806[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34998 === (5))){
var inst_34941 = cljs.core.async.close_BANG_(out);
var state_34997__$1 = state_34997;
var statearr_35035_36811 = state_34997__$1;
(statearr_35035_36811[(2)] = inst_34941);

(statearr_35035_36811[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34998 === (14))){
var inst_34963 = (state_34997[(7)]);
var inst_34965 = cljs.core.chunked_seq_QMARK_(inst_34963);
var state_34997__$1 = state_34997;
if(inst_34965){
var statearr_35036_36821 = state_34997__$1;
(statearr_35036_36821[(1)] = (17));

} else {
var statearr_35037_36825 = state_34997__$1;
(statearr_35037_36825[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34998 === (16))){
var inst_34981 = (state_34997[(2)]);
var state_34997__$1 = state_34997;
var statearr_35038_36826 = state_34997__$1;
(statearr_35038_36826[(2)] = inst_34981);

(statearr_35038_36826[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34998 === (10))){
var inst_34952 = (state_34997[(9)]);
var inst_34950 = (state_34997[(10)]);
var inst_34957 = cljs.core._nth(inst_34950,inst_34952);
var state_34997__$1 = state_34997;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34997__$1,(13),out,inst_34957);
} else {
if((state_val_34998 === (18))){
var inst_34963 = (state_34997[(7)]);
var inst_34972 = cljs.core.first(inst_34963);
var state_34997__$1 = state_34997;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34997__$1,(20),out,inst_34972);
} else {
if((state_val_34998 === (8))){
var inst_34951 = (state_34997[(8)]);
var inst_34952 = (state_34997[(9)]);
var inst_34954 = (inst_34952 < inst_34951);
var inst_34955 = inst_34954;
var state_34997__$1 = state_34997;
if(cljs.core.truth_(inst_34955)){
var statearr_35039_36837 = state_34997__$1;
(statearr_35039_36837[(1)] = (10));

} else {
var statearr_35040_36839 = state_34997__$1;
(statearr_35040_36839[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__32744__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__32744__auto____0 = (function (){
var statearr_35041 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35041[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__32744__auto__);

(statearr_35041[(1)] = (1));

return statearr_35041;
});
var cljs$core$async$mapcat_STAR__$_state_machine__32744__auto____1 = (function (state_34997){
while(true){
var ret_value__32745__auto__ = (function (){try{while(true){
var result__32746__auto__ = switch__32743__auto__(state_34997);
if(cljs.core.keyword_identical_QMARK_(result__32746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32746__auto__;
}
break;
}
}catch (e35042){var ex__32747__auto__ = e35042;
var statearr_35043_36851 = state_34997;
(statearr_35043_36851[(2)] = ex__32747__auto__);


if(cljs.core.seq((state_34997[(4)]))){
var statearr_35044_36856 = state_34997;
(statearr_35044_36856[(1)] = cljs.core.first((state_34997[(4)])));

} else {
throw ex__32747__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32745__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36864 = state_34997;
state_34997 = G__36864;
continue;
} else {
return ret_value__32745__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__32744__auto__ = function(state_34997){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__32744__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__32744__auto____1.call(this,state_34997);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__32744__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__32744__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__32744__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__32744__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__32744__auto__;
})()
})();
var state__32936__auto__ = (function (){var statearr_35045 = f__32935__auto__();
(statearr_35045[(6)] = c__32934__auto__);

return statearr_35045;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32936__auto__);
}));

return c__32934__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__35047 = arguments.length;
switch (G__35047) {
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
var G__35057 = arguments.length;
switch (G__35057) {
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
var G__35071 = arguments.length;
switch (G__35071) {
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
var c__32934__auto___36927 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32935__auto__ = (function (){var switch__32743__auto__ = (function (state_35115){
var state_val_35116 = (state_35115[(1)]);
if((state_val_35116 === (7))){
var inst_35110 = (state_35115[(2)]);
var state_35115__$1 = state_35115;
var statearr_35119_36937 = state_35115__$1;
(statearr_35119_36937[(2)] = inst_35110);

(statearr_35119_36937[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35116 === (1))){
var inst_35092 = null;
var state_35115__$1 = (function (){var statearr_35121 = state_35115;
(statearr_35121[(7)] = inst_35092);

return statearr_35121;
})();
var statearr_35122_36944 = state_35115__$1;
(statearr_35122_36944[(2)] = null);

(statearr_35122_36944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35116 === (4))){
var inst_35095 = (state_35115[(8)]);
var inst_35095__$1 = (state_35115[(2)]);
var inst_35096 = (inst_35095__$1 == null);
var inst_35097 = cljs.core.not(inst_35096);
var state_35115__$1 = (function (){var statearr_35123 = state_35115;
(statearr_35123[(8)] = inst_35095__$1);

return statearr_35123;
})();
if(inst_35097){
var statearr_35124_36946 = state_35115__$1;
(statearr_35124_36946[(1)] = (5));

} else {
var statearr_35125_36949 = state_35115__$1;
(statearr_35125_36949[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35116 === (6))){
var state_35115__$1 = state_35115;
var statearr_35126_36951 = state_35115__$1;
(statearr_35126_36951[(2)] = null);

(statearr_35126_36951[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35116 === (3))){
var inst_35112 = (state_35115[(2)]);
var inst_35113 = cljs.core.async.close_BANG_(out);
var state_35115__$1 = (function (){var statearr_35130 = state_35115;
(statearr_35130[(9)] = inst_35112);

return statearr_35130;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35115__$1,inst_35113);
} else {
if((state_val_35116 === (2))){
var state_35115__$1 = state_35115;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35115__$1,(4),ch);
} else {
if((state_val_35116 === (11))){
var inst_35095 = (state_35115[(8)]);
var inst_35104 = (state_35115[(2)]);
var inst_35092 = inst_35095;
var state_35115__$1 = (function (){var statearr_35131 = state_35115;
(statearr_35131[(10)] = inst_35104);

(statearr_35131[(7)] = inst_35092);

return statearr_35131;
})();
var statearr_35132_36956 = state_35115__$1;
(statearr_35132_36956[(2)] = null);

(statearr_35132_36956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35116 === (9))){
var inst_35095 = (state_35115[(8)]);
var state_35115__$1 = state_35115;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35115__$1,(11),out,inst_35095);
} else {
if((state_val_35116 === (5))){
var inst_35095 = (state_35115[(8)]);
var inst_35092 = (state_35115[(7)]);
var inst_35099 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35095,inst_35092);
var state_35115__$1 = state_35115;
if(inst_35099){
var statearr_35134_36957 = state_35115__$1;
(statearr_35134_36957[(1)] = (8));

} else {
var statearr_35135_36958 = state_35115__$1;
(statearr_35135_36958[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35116 === (10))){
var inst_35107 = (state_35115[(2)]);
var state_35115__$1 = state_35115;
var statearr_35136_36959 = state_35115__$1;
(statearr_35136_36959[(2)] = inst_35107);

(statearr_35136_36959[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35116 === (8))){
var inst_35092 = (state_35115[(7)]);
var tmp35133 = inst_35092;
var inst_35092__$1 = tmp35133;
var state_35115__$1 = (function (){var statearr_35137 = state_35115;
(statearr_35137[(7)] = inst_35092__$1);

return statearr_35137;
})();
var statearr_35138_36963 = state_35115__$1;
(statearr_35138_36963[(2)] = null);

(statearr_35138_36963[(1)] = (2));


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
var cljs$core$async$state_machine__32744__auto__ = null;
var cljs$core$async$state_machine__32744__auto____0 = (function (){
var statearr_35139 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35139[(0)] = cljs$core$async$state_machine__32744__auto__);

(statearr_35139[(1)] = (1));

return statearr_35139;
});
var cljs$core$async$state_machine__32744__auto____1 = (function (state_35115){
while(true){
var ret_value__32745__auto__ = (function (){try{while(true){
var result__32746__auto__ = switch__32743__auto__(state_35115);
if(cljs.core.keyword_identical_QMARK_(result__32746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32746__auto__;
}
break;
}
}catch (e35140){var ex__32747__auto__ = e35140;
var statearr_35141_36967 = state_35115;
(statearr_35141_36967[(2)] = ex__32747__auto__);


if(cljs.core.seq((state_35115[(4)]))){
var statearr_35142_36969 = state_35115;
(statearr_35142_36969[(1)] = cljs.core.first((state_35115[(4)])));

} else {
throw ex__32747__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32745__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36974 = state_35115;
state_35115 = G__36974;
continue;
} else {
return ret_value__32745__auto__;
}
break;
}
});
cljs$core$async$state_machine__32744__auto__ = function(state_35115){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32744__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32744__auto____1.call(this,state_35115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32744__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32744__auto____0;
cljs$core$async$state_machine__32744__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32744__auto____1;
return cljs$core$async$state_machine__32744__auto__;
})()
})();
var state__32936__auto__ = (function (){var statearr_35143 = f__32935__auto__();
(statearr_35143[(6)] = c__32934__auto___36927);

return statearr_35143;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32936__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__35145 = arguments.length;
switch (G__35145) {
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
var c__32934__auto___36979 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32935__auto__ = (function (){var switch__32743__auto__ = (function (state_35183){
var state_val_35184 = (state_35183[(1)]);
if((state_val_35184 === (7))){
var inst_35179 = (state_35183[(2)]);
var state_35183__$1 = state_35183;
var statearr_35185_36980 = state_35183__$1;
(statearr_35185_36980[(2)] = inst_35179);

(statearr_35185_36980[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35184 === (1))){
var inst_35146 = (new Array(n));
var inst_35147 = inst_35146;
var inst_35148 = (0);
var state_35183__$1 = (function (){var statearr_35186 = state_35183;
(statearr_35186[(7)] = inst_35148);

(statearr_35186[(8)] = inst_35147);

return statearr_35186;
})();
var statearr_35187_36988 = state_35183__$1;
(statearr_35187_36988[(2)] = null);

(statearr_35187_36988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35184 === (4))){
var inst_35151 = (state_35183[(9)]);
var inst_35151__$1 = (state_35183[(2)]);
var inst_35152 = (inst_35151__$1 == null);
var inst_35153 = cljs.core.not(inst_35152);
var state_35183__$1 = (function (){var statearr_35188 = state_35183;
(statearr_35188[(9)] = inst_35151__$1);

return statearr_35188;
})();
if(inst_35153){
var statearr_35189_36991 = state_35183__$1;
(statearr_35189_36991[(1)] = (5));

} else {
var statearr_35190_36992 = state_35183__$1;
(statearr_35190_36992[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35184 === (15))){
var inst_35173 = (state_35183[(2)]);
var state_35183__$1 = state_35183;
var statearr_35191_36993 = state_35183__$1;
(statearr_35191_36993[(2)] = inst_35173);

(statearr_35191_36993[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35184 === (13))){
var state_35183__$1 = state_35183;
var statearr_35192_36994 = state_35183__$1;
(statearr_35192_36994[(2)] = null);

(statearr_35192_36994[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35184 === (6))){
var inst_35148 = (state_35183[(7)]);
var inst_35169 = (inst_35148 > (0));
var state_35183__$1 = state_35183;
if(cljs.core.truth_(inst_35169)){
var statearr_35193_36995 = state_35183__$1;
(statearr_35193_36995[(1)] = (12));

} else {
var statearr_35194_36997 = state_35183__$1;
(statearr_35194_36997[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35184 === (3))){
var inst_35181 = (state_35183[(2)]);
var state_35183__$1 = state_35183;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35183__$1,inst_35181);
} else {
if((state_val_35184 === (12))){
var inst_35147 = (state_35183[(8)]);
var inst_35171 = cljs.core.vec(inst_35147);
var state_35183__$1 = state_35183;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35183__$1,(15),out,inst_35171);
} else {
if((state_val_35184 === (2))){
var state_35183__$1 = state_35183;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35183__$1,(4),ch);
} else {
if((state_val_35184 === (11))){
var inst_35163 = (state_35183[(2)]);
var inst_35164 = (new Array(n));
var inst_35147 = inst_35164;
var inst_35148 = (0);
var state_35183__$1 = (function (){var statearr_35206 = state_35183;
(statearr_35206[(7)] = inst_35148);

(statearr_35206[(10)] = inst_35163);

(statearr_35206[(8)] = inst_35147);

return statearr_35206;
})();
var statearr_35207_37007 = state_35183__$1;
(statearr_35207_37007[(2)] = null);

(statearr_35207_37007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35184 === (9))){
var inst_35147 = (state_35183[(8)]);
var inst_35161 = cljs.core.vec(inst_35147);
var state_35183__$1 = state_35183;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35183__$1,(11),out,inst_35161);
} else {
if((state_val_35184 === (5))){
var inst_35148 = (state_35183[(7)]);
var inst_35151 = (state_35183[(9)]);
var inst_35156 = (state_35183[(11)]);
var inst_35147 = (state_35183[(8)]);
var inst_35155 = (inst_35147[inst_35148] = inst_35151);
var inst_35156__$1 = (inst_35148 + (1));
var inst_35157 = (inst_35156__$1 < n);
var state_35183__$1 = (function (){var statearr_35208 = state_35183;
(statearr_35208[(12)] = inst_35155);

(statearr_35208[(11)] = inst_35156__$1);

return statearr_35208;
})();
if(cljs.core.truth_(inst_35157)){
var statearr_35209_37014 = state_35183__$1;
(statearr_35209_37014[(1)] = (8));

} else {
var statearr_35210_37015 = state_35183__$1;
(statearr_35210_37015[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35184 === (14))){
var inst_35176 = (state_35183[(2)]);
var inst_35177 = cljs.core.async.close_BANG_(out);
var state_35183__$1 = (function (){var statearr_35212 = state_35183;
(statearr_35212[(13)] = inst_35176);

return statearr_35212;
})();
var statearr_35213_37017 = state_35183__$1;
(statearr_35213_37017[(2)] = inst_35177);

(statearr_35213_37017[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35184 === (10))){
var inst_35167 = (state_35183[(2)]);
var state_35183__$1 = state_35183;
var statearr_35214_37022 = state_35183__$1;
(statearr_35214_37022[(2)] = inst_35167);

(statearr_35214_37022[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35184 === (8))){
var inst_35156 = (state_35183[(11)]);
var inst_35147 = (state_35183[(8)]);
var tmp35211 = inst_35147;
var inst_35147__$1 = tmp35211;
var inst_35148 = inst_35156;
var state_35183__$1 = (function (){var statearr_35215 = state_35183;
(statearr_35215[(7)] = inst_35148);

(statearr_35215[(8)] = inst_35147__$1);

return statearr_35215;
})();
var statearr_35216_37027 = state_35183__$1;
(statearr_35216_37027[(2)] = null);

(statearr_35216_37027[(1)] = (2));


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
var cljs$core$async$state_machine__32744__auto__ = null;
var cljs$core$async$state_machine__32744__auto____0 = (function (){
var statearr_35217 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35217[(0)] = cljs$core$async$state_machine__32744__auto__);

(statearr_35217[(1)] = (1));

return statearr_35217;
});
var cljs$core$async$state_machine__32744__auto____1 = (function (state_35183){
while(true){
var ret_value__32745__auto__ = (function (){try{while(true){
var result__32746__auto__ = switch__32743__auto__(state_35183);
if(cljs.core.keyword_identical_QMARK_(result__32746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32746__auto__;
}
break;
}
}catch (e35218){var ex__32747__auto__ = e35218;
var statearr_35219_37029 = state_35183;
(statearr_35219_37029[(2)] = ex__32747__auto__);


if(cljs.core.seq((state_35183[(4)]))){
var statearr_35220_37030 = state_35183;
(statearr_35220_37030[(1)] = cljs.core.first((state_35183[(4)])));

} else {
throw ex__32747__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32745__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37031 = state_35183;
state_35183 = G__37031;
continue;
} else {
return ret_value__32745__auto__;
}
break;
}
});
cljs$core$async$state_machine__32744__auto__ = function(state_35183){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32744__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32744__auto____1.call(this,state_35183);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32744__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32744__auto____0;
cljs$core$async$state_machine__32744__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32744__auto____1;
return cljs$core$async$state_machine__32744__auto__;
})()
})();
var state__32936__auto__ = (function (){var statearr_35221 = f__32935__auto__();
(statearr_35221[(6)] = c__32934__auto___36979);

return statearr_35221;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32936__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__35223 = arguments.length;
switch (G__35223) {
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
var c__32934__auto___37047 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32935__auto__ = (function (){var switch__32743__auto__ = (function (state_35271){
var state_val_35272 = (state_35271[(1)]);
if((state_val_35272 === (7))){
var inst_35265 = (state_35271[(2)]);
var state_35271__$1 = state_35271;
var statearr_35273_37048 = state_35271__$1;
(statearr_35273_37048[(2)] = inst_35265);

(statearr_35273_37048[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35272 === (1))){
var inst_35226 = [];
var inst_35227 = inst_35226;
var inst_35228 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_35271__$1 = (function (){var statearr_35276 = state_35271;
(statearr_35276[(7)] = inst_35227);

(statearr_35276[(8)] = inst_35228);

return statearr_35276;
})();
var statearr_35278_37052 = state_35271__$1;
(statearr_35278_37052[(2)] = null);

(statearr_35278_37052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35272 === (4))){
var inst_35231 = (state_35271[(9)]);
var inst_35231__$1 = (state_35271[(2)]);
var inst_35232 = (inst_35231__$1 == null);
var inst_35233 = cljs.core.not(inst_35232);
var state_35271__$1 = (function (){var statearr_35279 = state_35271;
(statearr_35279[(9)] = inst_35231__$1);

return statearr_35279;
})();
if(inst_35233){
var statearr_35280_37056 = state_35271__$1;
(statearr_35280_37056[(1)] = (5));

} else {
var statearr_35281_37057 = state_35271__$1;
(statearr_35281_37057[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35272 === (15))){
var inst_35259 = (state_35271[(2)]);
var state_35271__$1 = state_35271;
var statearr_35282_37058 = state_35271__$1;
(statearr_35282_37058[(2)] = inst_35259);

(statearr_35282_37058[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35272 === (13))){
var state_35271__$1 = state_35271;
var statearr_35283_37059 = state_35271__$1;
(statearr_35283_37059[(2)] = null);

(statearr_35283_37059[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35272 === (6))){
var inst_35227 = (state_35271[(7)]);
var inst_35254 = inst_35227.length;
var inst_35255 = (inst_35254 > (0));
var state_35271__$1 = state_35271;
if(cljs.core.truth_(inst_35255)){
var statearr_35284_37060 = state_35271__$1;
(statearr_35284_37060[(1)] = (12));

} else {
var statearr_35285_37061 = state_35271__$1;
(statearr_35285_37061[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35272 === (3))){
var inst_35268 = (state_35271[(2)]);
var state_35271__$1 = state_35271;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35271__$1,inst_35268);
} else {
if((state_val_35272 === (12))){
var inst_35227 = (state_35271[(7)]);
var inst_35257 = cljs.core.vec(inst_35227);
var state_35271__$1 = state_35271;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35271__$1,(15),out,inst_35257);
} else {
if((state_val_35272 === (2))){
var state_35271__$1 = state_35271;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35271__$1,(4),ch);
} else {
if((state_val_35272 === (11))){
var inst_35231 = (state_35271[(9)]);
var inst_35235 = (state_35271[(10)]);
var inst_35247 = (state_35271[(2)]);
var inst_35248 = [];
var inst_35249 = inst_35248.push(inst_35231);
var inst_35227 = inst_35248;
var inst_35228 = inst_35235;
var state_35271__$1 = (function (){var statearr_35286 = state_35271;
(statearr_35286[(7)] = inst_35227);

(statearr_35286[(11)] = inst_35249);

(statearr_35286[(12)] = inst_35247);

(statearr_35286[(8)] = inst_35228);

return statearr_35286;
})();
var statearr_35287_37071 = state_35271__$1;
(statearr_35287_37071[(2)] = null);

(statearr_35287_37071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35272 === (9))){
var inst_35227 = (state_35271[(7)]);
var inst_35245 = cljs.core.vec(inst_35227);
var state_35271__$1 = state_35271;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35271__$1,(11),out,inst_35245);
} else {
if((state_val_35272 === (5))){
var inst_35231 = (state_35271[(9)]);
var inst_35235 = (state_35271[(10)]);
var inst_35228 = (state_35271[(8)]);
var inst_35235__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_35231) : f.call(null,inst_35231));
var inst_35237 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35235__$1,inst_35228);
var inst_35238 = cljs.core.keyword_identical_QMARK_(inst_35228,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_35239 = ((inst_35237) || (inst_35238));
var state_35271__$1 = (function (){var statearr_35288 = state_35271;
(statearr_35288[(10)] = inst_35235__$1);

return statearr_35288;
})();
if(cljs.core.truth_(inst_35239)){
var statearr_35289_37076 = state_35271__$1;
(statearr_35289_37076[(1)] = (8));

} else {
var statearr_35290_37078 = state_35271__$1;
(statearr_35290_37078[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35272 === (14))){
var inst_35262 = (state_35271[(2)]);
var inst_35263 = cljs.core.async.close_BANG_(out);
var state_35271__$1 = (function (){var statearr_35292 = state_35271;
(statearr_35292[(13)] = inst_35262);

return statearr_35292;
})();
var statearr_35293_37079 = state_35271__$1;
(statearr_35293_37079[(2)] = inst_35263);

(statearr_35293_37079[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35272 === (10))){
var inst_35252 = (state_35271[(2)]);
var state_35271__$1 = state_35271;
var statearr_35294_37082 = state_35271__$1;
(statearr_35294_37082[(2)] = inst_35252);

(statearr_35294_37082[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35272 === (8))){
var inst_35227 = (state_35271[(7)]);
var inst_35231 = (state_35271[(9)]);
var inst_35235 = (state_35271[(10)]);
var inst_35242 = inst_35227.push(inst_35231);
var tmp35291 = inst_35227;
var inst_35227__$1 = tmp35291;
var inst_35228 = inst_35235;
var state_35271__$1 = (function (){var statearr_35295 = state_35271;
(statearr_35295[(7)] = inst_35227__$1);

(statearr_35295[(14)] = inst_35242);

(statearr_35295[(8)] = inst_35228);

return statearr_35295;
})();
var statearr_35296_37083 = state_35271__$1;
(statearr_35296_37083[(2)] = null);

(statearr_35296_37083[(1)] = (2));


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
var cljs$core$async$state_machine__32744__auto__ = null;
var cljs$core$async$state_machine__32744__auto____0 = (function (){
var statearr_35300 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35300[(0)] = cljs$core$async$state_machine__32744__auto__);

(statearr_35300[(1)] = (1));

return statearr_35300;
});
var cljs$core$async$state_machine__32744__auto____1 = (function (state_35271){
while(true){
var ret_value__32745__auto__ = (function (){try{while(true){
var result__32746__auto__ = switch__32743__auto__(state_35271);
if(cljs.core.keyword_identical_QMARK_(result__32746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32746__auto__;
}
break;
}
}catch (e35301){var ex__32747__auto__ = e35301;
var statearr_35302_37084 = state_35271;
(statearr_35302_37084[(2)] = ex__32747__auto__);


if(cljs.core.seq((state_35271[(4)]))){
var statearr_35303_37085 = state_35271;
(statearr_35303_37085[(1)] = cljs.core.first((state_35271[(4)])));

} else {
throw ex__32747__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32745__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37086 = state_35271;
state_35271 = G__37086;
continue;
} else {
return ret_value__32745__auto__;
}
break;
}
});
cljs$core$async$state_machine__32744__auto__ = function(state_35271){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32744__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32744__auto____1.call(this,state_35271);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32744__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32744__auto____0;
cljs$core$async$state_machine__32744__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32744__auto____1;
return cljs$core$async$state_machine__32744__auto__;
})()
})();
var state__32936__auto__ = (function (){var statearr_35304 = f__32935__auto__();
(statearr_35304[(6)] = c__32934__auto___37047);

return statearr_35304;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32936__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
