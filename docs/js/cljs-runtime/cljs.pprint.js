goog.provide('cljs.pprint');
cljs.pprint.print = (function cljs$pprint$print(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29441 = arguments.length;
var i__4737__auto___29442 = (0);
while(true){
if((i__4737__auto___29442 < len__4736__auto___29441)){
args__4742__auto__.push((arguments[i__4737__auto___29442]));

var G__29443 = (i__4737__auto___29442 + (1));
i__4737__auto___29442 = G__29443;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,more));
}));

(cljs.pprint.print.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.pprint.print.cljs$lang$applyTo = (function (seq27432){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27432));
}));

cljs.pprint.println = (function cljs$pprint$println(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29444 = arguments.length;
var i__4737__auto___29445 = (0);
while(true){
if((i__4737__auto___29445 < len__4736__auto___29444)){
args__4742__auto__.push((arguments[i__4737__auto___29445]));

var G__29446 = (i__4737__auto___29445 + (1));
i__4737__auto___29445 = G__29446;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic = (function (more){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.pprint.print,more);

return cljs.core._write(cljs.core._STAR_out_STAR_,"\n");
}));

(cljs.pprint.println.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.pprint.println.cljs$lang$applyTo = (function (seq27446){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27446));
}));

cljs.pprint.print_char = (function cljs$pprint$print_char(c){
return cljs.core._write(cljs.core._STAR_out_STAR_,(function (){var pred__27455 = cljs.core._EQ_;
var expr__27456 = c;
if(cljs.core.truth_((function (){var G__27458 = "\b";
var G__27459 = expr__27456;
return (pred__27455.cljs$core$IFn$_invoke$arity$2 ? pred__27455.cljs$core$IFn$_invoke$arity$2(G__27458,G__27459) : pred__27455.call(null,G__27458,G__27459));
})())){
return "\\backspace";
} else {
if(cljs.core.truth_((function (){var G__27460 = " ";
var G__27461 = expr__27456;
return (pred__27455.cljs$core$IFn$_invoke$arity$2 ? pred__27455.cljs$core$IFn$_invoke$arity$2(G__27460,G__27461) : pred__27455.call(null,G__27460,G__27461));
})())){
return "\\space";
} else {
if(cljs.core.truth_((function (){var G__27464 = "\t";
var G__27465 = expr__27456;
return (pred__27455.cljs$core$IFn$_invoke$arity$2 ? pred__27455.cljs$core$IFn$_invoke$arity$2(G__27464,G__27465) : pred__27455.call(null,G__27464,G__27465));
})())){
return "\\tab";
} else {
if(cljs.core.truth_((function (){var G__27466 = "\n";
var G__27467 = expr__27456;
return (pred__27455.cljs$core$IFn$_invoke$arity$2 ? pred__27455.cljs$core$IFn$_invoke$arity$2(G__27466,G__27467) : pred__27455.call(null,G__27466,G__27467));
})())){
return "\\newline";
} else {
if(cljs.core.truth_((function (){var G__27468 = "\f";
var G__27469 = expr__27456;
return (pred__27455.cljs$core$IFn$_invoke$arity$2 ? pred__27455.cljs$core$IFn$_invoke$arity$2(G__27468,G__27469) : pred__27455.call(null,G__27468,G__27469));
})())){
return "\\formfeed";
} else {
if(cljs.core.truth_((function (){var G__27470 = "\r";
var G__27471 = expr__27456;
return (pred__27455.cljs$core$IFn$_invoke$arity$2 ? pred__27455.cljs$core$IFn$_invoke$arity$2(G__27470,G__27471) : pred__27455.call(null,G__27470,G__27471));
})())){
return "\\return";
} else {
if(cljs.core.truth_((function (){var G__27472 = "\"";
var G__27473 = expr__27456;
return (pred__27455.cljs$core$IFn$_invoke$arity$2 ? pred__27455.cljs$core$IFn$_invoke$arity$2(G__27472,G__27473) : pred__27455.call(null,G__27472,G__27473));
})())){
return "\\\"";
} else {
if(cljs.core.truth_((function (){var G__27476 = "\\";
var G__27477 = expr__27456;
return (pred__27455.cljs$core$IFn$_invoke$arity$2 ? pred__27455.cljs$core$IFn$_invoke$arity$2(G__27476,G__27477) : pred__27455.call(null,G__27476,G__27477));
})())){
return "\\\\";
} else {
return ["\\",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join('');
}
}
}
}
}
}
}
}
})());
});
cljs.pprint.pr = (function cljs$pprint$pr(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29447 = arguments.length;
var i__4737__auto___29448 = (0);
while(true){
if((i__4737__auto___29448 < len__4736__auto___29447)){
args__4742__auto__.push((arguments[i__4737__auto___29448]));

var G__29452 = (i__4737__auto___29448 + (1));
i__4737__auto___29448 = G__29452;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,more));
}));

(cljs.pprint.pr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.pprint.pr.cljs$lang$applyTo = (function (seq27484){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27484));
}));

cljs.pprint.prn = (function cljs$pprint$prn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29455 = arguments.length;
var i__4737__auto___29456 = (0);
while(true){
if((i__4737__auto___29456 < len__4736__auto___29455)){
args__4742__auto__.push((arguments[i__4737__auto___29456]));

var G__29457 = (i__4737__auto___29456 + (1));
i__4737__auto___29456 = G__29457;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic = (function (more){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.pprint.pr,more);

return cljs.core._write(cljs.core._STAR_out_STAR_,"\n");
}));

(cljs.pprint.prn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.pprint.prn.cljs$lang$applyTo = (function (seq27493){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27493));
}));

/**
 * Returns true if n is an float.
 */
cljs.pprint.float_QMARK_ = (function cljs$pprint$float_QMARK_(n){
return ((typeof n === 'number') && ((!(isNaN(n)))) && ((!((n === Infinity)))) && ((!((parseFloat(n) === parseInt(n,(10)))))));
});
/**
 * Convert char to int
 */
cljs.pprint.char_code = (function cljs$pprint$char_code(c){
if(typeof c === 'number'){
return c;
} else {
if(((typeof c === 'string') && ((c.length === (1))))){
return c.charCodeAt((0));
} else {
throw (new Error("Argument to char must be a character or number"));

}
}
});
cljs.pprint.map_passing_context = (function cljs$pprint$map_passing_context(func,initial_context,lis){
var context = initial_context;
var lis__$1 = lis;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(lis__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,context], null);
} else {
var this$ = cljs.core.first(lis__$1);
var remainder = cljs.core.next(lis__$1);
var vec__27526 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,context], null));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27526,(0),null);
var new_context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27526,(1),null);
var G__29461 = new_context;
var G__29462 = remainder;
var G__29463 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result);
context = G__29461;
lis__$1 = G__29462;
acc = G__29463;
continue;
}
break;
}
});
cljs.pprint.consume = (function cljs$pprint$consume(func,initial_context){
var context = initial_context;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__27537 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [context], null));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27537,(0),null);
var new_context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27537,(1),null);
if(cljs.core.not(result)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,new_context], null);
} else {
var G__29464 = new_context;
var G__29465 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result);
context = G__29464;
acc = G__29465;
continue;
}
break;
}
});
cljs.pprint.consume_while = (function cljs$pprint$consume_while(func,initial_context){
var context = initial_context;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__27559 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [context], null));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27559,(0),null);
var continue$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27559,(1),null);
var new_context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27559,(2),null);
if(cljs.core.not(continue$)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,context], null);
} else {
var G__29466 = new_context;
var G__29467 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result);
context = G__29466;
acc = G__29467;
continue;
}
break;
}
});
cljs.pprint.unzip_map = (function cljs$pprint$unzip_map(m){

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function cljs$pprint$unzip_map_$_iter__27606(s__27607){
return (new cljs.core.LazySeq(null,(function (){
var s__27607__$1 = s__27607;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__27607__$1);
if(temp__5735__auto__){
var s__27607__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27607__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__27607__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__27611 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__27610 = (0);
while(true){
if((i__27610 < size__4528__auto__)){
var vec__27617 = cljs.core._nth(c__4527__auto__,i__27610);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27617,(0),null);
var vec__27620 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27617,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27620,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27620,(1),null);
cljs.core.chunk_append(b__27611,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v1], null));

var G__29469 = (i__27610 + (1));
i__27610 = G__29469;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27611),cljs$pprint$unzip_map_$_iter__27606(cljs.core.chunk_rest(s__27607__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27611),null);
}
} else {
var vec__27623 = cljs.core.first(s__27607__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27623,(0),null);
var vec__27626 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27623,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27626,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27626,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v1], null),cljs$pprint$unzip_map_$_iter__27606(cljs.core.rest(s__27607__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(m);
})()),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function cljs$pprint$unzip_map_$_iter__27629(s__27630){
return (new cljs.core.LazySeq(null,(function (){
var s__27630__$1 = s__27630;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__27630__$1);
if(temp__5735__auto__){
var s__27630__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27630__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__27630__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__27632 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__27631 = (0);
while(true){
if((i__27631 < size__4528__auto__)){
var vec__27633 = cljs.core._nth(c__4527__auto__,i__27631);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27633,(0),null);
var vec__27636 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27633,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27636,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27636,(1),null);
cljs.core.chunk_append(b__27632,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v2], null));

var G__29470 = (i__27631 + (1));
i__27631 = G__29470;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27632),cljs$pprint$unzip_map_$_iter__27629(cljs.core.chunk_rest(s__27630__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27632),null);
}
} else {
var vec__27645 = cljs.core.first(s__27630__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27645,(0),null);
var vec__27648 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27645,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27648,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27648,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v2], null),cljs$pprint$unzip_map_$_iter__27629(cljs.core.rest(s__27630__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(m);
})())], null);
});
cljs.pprint.tuple_map = (function cljs$pprint$tuple_map(m,v1){

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function cljs$pprint$tuple_map_$_iter__27662(s__27663){
return (new cljs.core.LazySeq(null,(function (){
var s__27663__$1 = s__27663;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__27663__$1);
if(temp__5735__auto__){
var s__27663__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27663__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__27663__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__27665 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__27664 = (0);
while(true){
if((i__27664 < size__4528__auto__)){
var vec__27666 = cljs.core._nth(c__4527__auto__,i__27664);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27666,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27666,(1),null);
cljs.core.chunk_append(b__27665,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v1], null)], null));

var G__29473 = (i__27664 + (1));
i__27664 = G__29473;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27665),cljs$pprint$tuple_map_$_iter__27662(cljs.core.chunk_rest(s__27663__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27665),null);
}
} else {
var vec__27669 = cljs.core.first(s__27663__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27669,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27669,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v1], null)], null),cljs$pprint$tuple_map_$_iter__27662(cljs.core.rest(s__27663__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(m);
})());
});
cljs.pprint.rtrim = (function cljs$pprint$rtrim(s,c){

var len = cljs.core.count(s);
if((((len > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(cljs.core.count(s) - (1))),c)))){
var n = (len - (1));
while(true){
if((n < (0))){
return "";
} else {
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,n),c)))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(n + (1)));
} else {
var G__29477 = (n - (1));
n = G__29477;
continue;

}
}
break;
}
} else {
return s;
}
});
cljs.pprint.ltrim = (function cljs$pprint$ltrim(s,c){

var len = cljs.core.count(s);
if((((len > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(0)),c)))){
var n = (0);
while(true){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,len)) || ((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,n),c)))))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,n);
} else {
var G__29478 = (n + (1));
n = G__29478;
continue;
}
break;
}
} else {
return s;
}
});
cljs.pprint.prefix_count = (function cljs$pprint$prefix_count(aseq,val){

var test = ((cljs.core.coll_QMARK_(val))?cljs.core.set(val):cljs.core.PersistentHashSet.createAsIfByAssoc([val]));
var pos = (0);
while(true){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pos,cljs.core.count(aseq))) || (cljs.core.not((function (){var G__27687 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(aseq,pos);
return (test.cljs$core$IFn$_invoke$arity$1 ? test.cljs$core$IFn$_invoke$arity$1(G__27687) : test.call(null,G__27687));
})())))){
return pos;
} else {
var G__29479 = (pos + (1));
pos = G__29479;
continue;
}
break;
}
});

/**
 * @interface
 */
cljs.pprint.IPrettyFlush = function(){};

var cljs$pprint$IPrettyFlush$_ppflush$dyn_29480 = (function (pp){
var x__4428__auto__ = (((pp == null))?null:pp);
var m__4429__auto__ = (cljs.pprint._ppflush[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(pp) : m__4429__auto__.call(null,pp));
} else {
var m__4426__auto__ = (cljs.pprint._ppflush["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(pp) : m__4426__auto__.call(null,pp));
} else {
throw cljs.core.missing_protocol("IPrettyFlush.-ppflush",pp);
}
}
});
cljs.pprint._ppflush = (function cljs$pprint$_ppflush(pp){
if((((!((pp == null)))) && ((!((pp.cljs$pprint$IPrettyFlush$_ppflush$arity$1 == null)))))){
return pp.cljs$pprint$IPrettyFlush$_ppflush$arity$1(pp);
} else {
return cljs$pprint$IPrettyFlush$_ppflush$dyn_29480(pp);
}
});

cljs.pprint._STAR_default_page_width_STAR_ = (72);
cljs.pprint.get_field = (function cljs$pprint$get_field(this$,sym){
var G__27694 = cljs.core.deref(cljs.core.deref(this$));
return (sym.cljs$core$IFn$_invoke$arity$1 ? sym.cljs$core$IFn$_invoke$arity$1(G__27694) : sym.call(null,G__27694));
});
cljs.pprint.set_field = (function cljs$pprint$set_field(this$,sym,new_val){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,sym,new_val);
});
cljs.pprint.get_column = (function cljs$pprint$get_column(this$){
return cljs.pprint.get_field(this$,new cljs.core.Keyword(null,"cur","cur",1153190599));
});
cljs.pprint.get_line = (function cljs$pprint$get_line(this$){
return cljs.pprint.get_field(this$,new cljs.core.Keyword(null,"line","line",212345235));
});
cljs.pprint.get_max_column = (function cljs$pprint$get_max_column(this$){
return cljs.pprint.get_field(this$,new cljs.core.Keyword(null,"max","max",61366548));
});
cljs.pprint.set_max_column = (function cljs$pprint$set_max_column(this$,new_max){
cljs.pprint.set_field(this$,new cljs.core.Keyword(null,"max","max",61366548),new_max);

return null;
});
cljs.pprint.get_writer = (function cljs$pprint$get_writer(this$){
return cljs.pprint.get_field(this$,new cljs.core.Keyword(null,"base","base",185279322));
});
cljs.pprint.c_write_char = (function cljs$pprint$c_write_char(this$,c){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,"\n")){
cljs.pprint.set_field(this$,new cljs.core.Keyword(null,"cur","cur",1153190599),(0));

cljs.pprint.set_field(this$,new cljs.core.Keyword(null,"line","line",212345235),(cljs.pprint.get_field(this$,new cljs.core.Keyword(null,"line","line",212345235)) + (1)));
} else {
cljs.pprint.set_field(this$,new cljs.core.Keyword(null,"cur","cur",1153190599),(cljs.pprint.get_field(this$,new cljs.core.Keyword(null,"cur","cur",1153190599)) + (1)));
}

return cljs.core._write(cljs.pprint.get_field(this$,new cljs.core.Keyword(null,"base","base",185279322)),c);
});
cljs.pprint.column_writer = (function cljs$pprint$column_writer(var_args){
var G__27711 = arguments.length;
switch (G__27711) {
case 1:
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$1 = (function (writer){
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2(writer,cljs.pprint._STAR_default_page_width_STAR_);
}));

(cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2 = (function (writer,max_columns){
var fields = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"max","max",61366548),max_columns,new cljs.core.Keyword(null,"cur","cur",1153190599),(0),new cljs.core.Keyword(null,"line","line",212345235),(0),new cljs.core.Keyword(null,"base","base",185279322),writer], null));
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint27713 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint27713 = (function (writer,max_columns,fields,meta27714){
this.writer = writer;
this.max_columns = max_columns;
this.fields = fields;
this.meta27714 = meta27714;
this.cljs$lang$protocol_mask$partition0$ = 1074167808;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.pprint.t_cljs$pprint27713.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27715,meta27714__$1){
var self__ = this;
var _27715__$1 = this;
return (new cljs.pprint.t_cljs$pprint27713(self__.writer,self__.max_columns,self__.fields,meta27714__$1));
}));

(cljs.pprint.t_cljs$pprint27713.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27715){
var self__ = this;
var _27715__$1 = this;
return self__.meta27714;
}));

(cljs.pprint.t_cljs$pprint27713.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.fields;
}));

(cljs.pprint.t_cljs$pprint27713.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
}));

(cljs.pprint.t_cljs$pprint27713.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__27716 = cljs.core._EQ_;
var expr__27717 = cljs.core.type(x);
if(cljs.core.truth_((pred__27716.cljs$core$IFn$_invoke$arity$2 ? pred__27716.cljs$core$IFn$_invoke$arity$2(String,expr__27717) : pred__27716.call(null,String,expr__27717)))){
var s = x;
var nl = s.lastIndexOf("\n");
if((nl < (0))){
cljs.pprint.set_field(this$__$1,new cljs.core.Keyword(null,"cur","cur",1153190599),(cljs.pprint.get_field(this$__$1,new cljs.core.Keyword(null,"cur","cur",1153190599)) + cljs.core.count(s)));
} else {
cljs.pprint.set_field(this$__$1,new cljs.core.Keyword(null,"cur","cur",1153190599),((cljs.core.count(s) - nl) - (1)));

cljs.pprint.set_field(this$__$1,new cljs.core.Keyword(null,"line","line",212345235),(cljs.pprint.get_field(this$__$1,new cljs.core.Keyword(null,"line","line",212345235)) + cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__27709_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__27709_SHARP_,"\n");
}),s))));
}

return cljs.core._write(cljs.pprint.get_field(this$__$1,new cljs.core.Keyword(null,"base","base",185279322)),s);
} else {
if(cljs.core.truth_((pred__27716.cljs$core$IFn$_invoke$arity$2 ? pred__27716.cljs$core$IFn$_invoke$arity$2(Number,expr__27717) : pred__27716.call(null,Number,expr__27717)))){
return cljs.pprint.c_write_char(this$__$1,x);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__27717)].join('')));
}
}
}));

(cljs.pprint.t_cljs$pprint27713.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"max-columns","max-columns",-912112507,null),new cljs.core.Symbol(null,"fields","fields",-291534703,null),new cljs.core.Symbol(null,"meta27714","meta27714",-166175811,null)], null);
}));

(cljs.pprint.t_cljs$pprint27713.cljs$lang$type = true);

(cljs.pprint.t_cljs$pprint27713.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint27713");

(cljs.pprint.t_cljs$pprint27713.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.pprint/t_cljs$pprint27713");
}));

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint27713.
 */
cljs.pprint.__GT_t_cljs$pprint27713 = (function cljs$pprint$__GT_t_cljs$pprint27713(writer__$1,max_columns__$1,fields__$1,meta27714){
return (new cljs.pprint.t_cljs$pprint27713(writer__$1,max_columns__$1,fields__$1,meta27714));
});

}

return (new cljs.pprint.t_cljs$pprint27713(writer,max_columns,fields,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.pprint.column_writer.cljs$lang$maxFixedArity = 2);


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
cljs.pprint.logical_block = (function (parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback,__meta,__extmap,__hash){
this.parent = parent;
this.section = section;
this.start_col = start_col;
this.indent = indent;
this.done_nl = done_nl;
this.intra_block_nl = intra_block_nl;
this.prefix = prefix;
this.per_line_prefix = per_line_prefix;
this.suffix = suffix;
this.logical_block_callback = logical_block_callback;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cljs.pprint.logical_block.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(cljs.pprint.logical_block.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k27727,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__27748 = k27727;
var G__27748__$1 = (((G__27748 instanceof cljs.core.Keyword))?G__27748.fqn:null);
switch (G__27748__$1) {
case "parent":
return self__.parent;

break;
case "section":
return self__.section;

break;
case "start-col":
return self__.start_col;

break;
case "indent":
return self__.indent;

break;
case "done-nl":
return self__.done_nl;

break;
case "intra-block-nl":
return self__.intra_block_nl;

break;
case "prefix":
return self__.prefix;

break;
case "per-line-prefix":
return self__.per_line_prefix;

break;
case "suffix":
return self__.suffix;

break;
case "logical-block-callback":
return self__.logical_block_callback;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27727,else__4383__auto__);

}
}));

(cljs.pprint.logical_block.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__27751){
var vec__27752 = p__27751;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27752,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27752,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(cljs.pprint.logical_block.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#cljs.pprint.logical-block{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"section","section",-300141526),self__.section],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-col","start-col",668080143),self__.start_col],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"indent","indent",-148200125),self__.indent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),self__.done_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),self__.intra_block_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prefix","prefix",-265908465),self__.prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),self__.per_line_prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"suffix","suffix",367373057),self__.suffix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194),self__.logical_block_callback],null))], null),self__.__extmap));
}));

(cljs.pprint.logical_block.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27726){
var self__ = this;
var G__27726__$1 = this;
return (new cljs.core.RecordIter((0),G__27726__$1,10,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.Keyword(null,"start-col","start-col",668080143),new cljs.core.Keyword(null,"indent","indent",-148200125),new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),new cljs.core.Keyword(null,"suffix","suffix",367373057),new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(cljs.pprint.logical_block.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(cljs.pprint.logical_block.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,self__.__hash));
}));

(cljs.pprint.logical_block.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (10 + cljs.core.count(self__.__extmap));
}));

(cljs.pprint.logical_block.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (1977012399 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(cljs.pprint.logical_block.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27728,other27729){
var self__ = this;
var this27728__$1 = this;
return (((!((other27729 == null)))) && ((this27728__$1.constructor === other27729.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27728__$1.parent,other27729.parent)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27728__$1.section,other27729.section)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27728__$1.start_col,other27729.start_col)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27728__$1.indent,other27729.indent)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27728__$1.done_nl,other27729.done_nl)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27728__$1.intra_block_nl,other27729.intra_block_nl)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27728__$1.prefix,other27729.prefix)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27728__$1.per_line_prefix,other27729.per_line_prefix)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27728__$1.suffix,other27729.suffix)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27728__$1.logical_block_callback,other27729.logical_block_callback)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27728__$1.__extmap,other27729.__extmap)));
}));

(cljs.pprint.logical_block.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"suffix","suffix",367373057),null,new cljs.core.Keyword(null,"indent","indent",-148200125),null,new cljs.core.Keyword(null,"parent","parent",-878878779),null,new cljs.core.Keyword(null,"section","section",-300141526),null,new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),null,new cljs.core.Keyword(null,"start-col","start-col",668080143),null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),null,new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),null,new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194),null,new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(cljs.pprint.logical_block.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__27726){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__27782 = cljs.core.keyword_identical_QMARK_;
var expr__27783 = k__4388__auto__;
if(cljs.core.truth_((pred__27782.cljs$core$IFn$_invoke$arity$2 ? pred__27782.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parent","parent",-878878779),expr__27783) : pred__27782.call(null,new cljs.core.Keyword(null,"parent","parent",-878878779),expr__27783)))){
return (new cljs.pprint.logical_block(G__27726,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__27782.cljs$core$IFn$_invoke$arity$2 ? pred__27782.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"section","section",-300141526),expr__27783) : pred__27782.call(null,new cljs.core.Keyword(null,"section","section",-300141526),expr__27783)))){
return (new cljs.pprint.logical_block(self__.parent,G__27726,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__27782.cljs$core$IFn$_invoke$arity$2 ? pred__27782.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"start-col","start-col",668080143),expr__27783) : pred__27782.call(null,new cljs.core.Keyword(null,"start-col","start-col",668080143),expr__27783)))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,G__27726,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__27782.cljs$core$IFn$_invoke$arity$2 ? pred__27782.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"indent","indent",-148200125),expr__27783) : pred__27782.call(null,new cljs.core.Keyword(null,"indent","indent",-148200125),expr__27783)))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,G__27726,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__27782.cljs$core$IFn$_invoke$arity$2 ? pred__27782.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),expr__27783) : pred__27782.call(null,new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),expr__27783)))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,G__27726,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__27782.cljs$core$IFn$_invoke$arity$2 ? pred__27782.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),expr__27783) : pred__27782.call(null,new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),expr__27783)))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,G__27726,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__27782.cljs$core$IFn$_invoke$arity$2 ? pred__27782.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"prefix","prefix",-265908465),expr__27783) : pred__27782.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),expr__27783)))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,G__27726,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__27782.cljs$core$IFn$_invoke$arity$2 ? pred__27782.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),expr__27783) : pred__27782.call(null,new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),expr__27783)))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,G__27726,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__27782.cljs$core$IFn$_invoke$arity$2 ? pred__27782.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"suffix","suffix",367373057),expr__27783) : pred__27782.call(null,new cljs.core.Keyword(null,"suffix","suffix",367373057),expr__27783)))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,G__27726,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__27782.cljs$core$IFn$_invoke$arity$2 ? pred__27782.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194),expr__27783) : pred__27782.call(null,new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194),expr__27783)))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,G__27726,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__27726),null));
}
}
}
}
}
}
}
}
}
}
}));

(cljs.pprint.logical_block.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"section","section",-300141526),self__.section,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start-col","start-col",668080143),self__.start_col,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"indent","indent",-148200125),self__.indent,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),self__.done_nl,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),self__.intra_block_nl,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"prefix","prefix",-265908465),self__.prefix,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),self__.per_line_prefix,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"suffix","suffix",367373057),self__.suffix,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194),self__.logical_block_callback,null))], null),self__.__extmap));
}));

(cljs.pprint.logical_block.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__27726){
var self__ = this;
var this__4379__auto____$1 = this;
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,G__27726,self__.__extmap,self__.__hash));
}));

(cljs.pprint.logical_block.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(cljs.pprint.logical_block.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.Symbol(null,"section","section",1340390001,null),new cljs.core.Symbol(null,"start-col","start-col",-1986355626,null),new cljs.core.Symbol(null,"indent","indent",1492331402,null),new cljs.core.Symbol(null,"done-nl","done-nl",1259507187,null),new cljs.core.Symbol(null,"intra-block-nl","intra-block-nl",-845608894,null),new cljs.core.Symbol(null,"prefix","prefix",1374623062,null),new cljs.core.Symbol(null,"per-line-prefix","per-line-prefix",-1807493956,null),new cljs.core.Symbol(null,"suffix","suffix",2007904584,null),new cljs.core.Symbol(null,"logical-block-callback","logical-block-callback",-1041744575,null)], null);
}));

(cljs.pprint.logical_block.cljs$lang$type = true);

(cljs.pprint.logical_block.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"cljs.pprint/logical-block",null,(1),null));
}));

(cljs.pprint.logical_block.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"cljs.pprint/logical-block");
}));

/**
 * Positional factory function for cljs.pprint/logical-block.
 */
cljs.pprint.__GT_logical_block = (function cljs$pprint$__GT_logical_block(parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback){
return (new cljs.pprint.logical_block(parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback,null,null,null));
});

/**
 * Factory function for cljs.pprint/logical-block, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_logical_block = (function cljs$pprint$map__GT_logical_block(G__27738){
var extmap__4419__auto__ = (function (){var G__27798 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__27738,new cljs.core.Keyword(null,"parent","parent",-878878779),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.Keyword(null,"start-col","start-col",668080143),new cljs.core.Keyword(null,"indent","indent",-148200125),new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),new cljs.core.Keyword(null,"suffix","suffix",367373057),new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194)], 0));
if(cljs.core.record_QMARK_(G__27738)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__27798);
} else {
return G__27798;
}
})();
return (new cljs.pprint.logical_block(new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(G__27738),new cljs.core.Keyword(null,"section","section",-300141526).cljs$core$IFn$_invoke$arity$1(G__27738),new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(G__27738),new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(G__27738),new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(G__27738),new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875).cljs$core$IFn$_invoke$arity$1(G__27738),new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(G__27738),new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813).cljs$core$IFn$_invoke$arity$1(G__27738),new cljs.core.Keyword(null,"suffix","suffix",367373057).cljs$core$IFn$_invoke$arity$1(G__27738),new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(G__27738),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

cljs.pprint.ancestor_QMARK_ = (function cljs$pprint$ancestor_QMARK_(parent,child){
var child__$1 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(child);
while(true){
if((child__$1 == null)){
return false;
} else {
if((parent === child__$1)){
return true;
} else {
var G__29510 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(child__$1);
child__$1 = G__29510;
continue;

}
}
break;
}
});
cljs.pprint.buffer_length = (function cljs$pprint$buffer_length(l){
var l__$1 = cljs.core.seq(l);
if(l__$1){
return (new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(cljs.core.last(l__$1)) - new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(cljs.core.first(l__$1)));
} else {
return (0);
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
cljs.pprint.buffer_blob = (function (type_tag,data,trailing_white_space,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.data = data;
this.trailing_white_space = trailing_white_space;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cljs.pprint.buffer_blob.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k27809,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__27824 = k27809;
var G__27824__$1 = (((G__27824 instanceof cljs.core.Keyword))?G__27824.fqn:null);
switch (G__27824__$1) {
case "type-tag":
return self__.type_tag;

break;
case "data":
return self__.data;

break;
case "trailing-white-space":
return self__.trailing_white_space;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27809,else__4383__auto__);

}
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__27826){
var vec__27828 = p__27826;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27828,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27828,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#cljs.pprint.buffer-blob{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),self__.trailing_white_space],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27808){
var self__ = this;
var G__27808__$1 = this;
return (new cljs.core.RecordIter((0),G__27808__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (1809113693 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27810,other27811){
var self__ = this;
var this27810__$1 = this;
return (((!((other27811 == null)))) && ((this27810__$1.constructor === other27811.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27810__$1.type_tag,other27811.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27810__$1.data,other27811.data)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27810__$1.trailing_white_space,other27811.trailing_white_space)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27810__$1.start_pos,other27811.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27810__$1.end_pos,other27811.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27810__$1.__extmap,other27811.__extmap)));
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__27808){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__27872 = cljs.core.keyword_identical_QMARK_;
var expr__27873 = k__4388__auto__;
if(cljs.core.truth_((pred__27872.cljs$core$IFn$_invoke$arity$2 ? pred__27872.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__27873) : pred__27872.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__27873)))){
return (new cljs.pprint.buffer_blob(G__27808,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__27872.cljs$core$IFn$_invoke$arity$2 ? pred__27872.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"data","data",-232669377),expr__27873) : pred__27872.call(null,new cljs.core.Keyword(null,"data","data",-232669377),expr__27873)))){
return (new cljs.pprint.buffer_blob(self__.type_tag,G__27808,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__27872.cljs$core$IFn$_invoke$arity$2 ? pred__27872.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),expr__27873) : pred__27872.call(null,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),expr__27873)))){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,G__27808,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__27872.cljs$core$IFn$_invoke$arity$2 ? pred__27872.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__27873) : pred__27872.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__27873)))){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,G__27808,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__27872.cljs$core$IFn$_invoke$arity$2 ? pred__27872.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__27873) : pred__27872.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__27873)))){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,G__27808,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__27808),null));
}
}
}
}
}
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"data","data",-232669377),self__.data,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),self__.trailing_white_space,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos,null))], null),self__.__extmap));
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__27808){
var self__ = this;
var this__4379__auto____$1 = this;
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,G__27808,self__.__extmap,self__.__hash));
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(cljs.pprint.buffer_blob.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"trailing-white-space","trailing-white-space",-1158428773,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
}));

(cljs.pprint.buffer_blob.cljs$lang$type = true);

(cljs.pprint.buffer_blob.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"cljs.pprint/buffer-blob",null,(1),null));
}));

(cljs.pprint.buffer_blob.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"cljs.pprint/buffer-blob");
}));

/**
 * Positional factory function for cljs.pprint/buffer-blob.
 */
cljs.pprint.__GT_buffer_blob = (function cljs$pprint$__GT_buffer_blob(type_tag,data,trailing_white_space,start_pos,end_pos){
return (new cljs.pprint.buffer_blob(type_tag,data,trailing_white_space,start_pos,end_pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/buffer-blob, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_buffer_blob = (function cljs$pprint$map__GT_buffer_blob(G__27816){
var extmap__4419__auto__ = (function (){var G__27884 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__27816,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], 0));
if(cljs.core.record_QMARK_(G__27816)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__27884);
} else {
return G__27884;
}
})();
return (new cljs.pprint.buffer_blob(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__27816),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__27816),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(G__27816),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__27816),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__27816),null,cljs.core.not_empty(extmap__4419__auto__),null));
});


cljs.pprint.make_buffer_blob = (function cljs$pprint$make_buffer_blob(data,trailing_white_space,start_pos,end_pos){
return (new cljs.pprint.buffer_blob(new cljs.core.Keyword(null,"buffer-blob","buffer-blob",-1830112173),data,trailing_white_space,start_pos,end_pos,null,null,null));
});

cljs.pprint.buffer_blob_QMARK_ = (function cljs$pprint$buffer_blob_QMARK_(x__27293__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__27293__auto__),new cljs.core.Keyword(null,"buffer-blob","buffer-blob",-1830112173));
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
cljs.pprint.nl_t = (function (type_tag,type,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.type = type;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cljs.pprint.nl_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(cljs.pprint.nl_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k27891,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__27901 = k27891;
var G__27901__$1 = (((G__27901 instanceof cljs.core.Keyword))?G__27901.fqn:null);
switch (G__27901__$1) {
case "type-tag":
return self__.type_tag;

break;
case "type":
return self__.type;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27891,else__4383__auto__);

}
}));

(cljs.pprint.nl_t.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__27907){
var vec__27908 = p__27907;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27908,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27908,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(cljs.pprint.nl_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#cljs.pprint.nl-t{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
}));

(cljs.pprint.nl_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27890){
var self__ = this;
var G__27890__$1 = this;
return (new cljs.core.RecordIter((0),G__27890__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(cljs.pprint.nl_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(cljs.pprint.nl_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
}));

(cljs.pprint.nl_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
}));

(cljs.pprint.nl_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1640656800 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(cljs.pprint.nl_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27892,other27893){
var self__ = this;
var this27892__$1 = this;
return (((!((other27893 == null)))) && ((this27892__$1.constructor === other27893.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27892__$1.type_tag,other27893.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27892__$1.type,other27893.type)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27892__$1.logical_block,other27893.logical_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27892__$1.start_pos,other27893.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27892__$1.end_pos,other27893.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27892__$1.__extmap,other27893.__extmap)));
}));

(cljs.pprint.nl_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"type","type",1174270348),null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(cljs.pprint.nl_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__27890){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__27934 = cljs.core.keyword_identical_QMARK_;
var expr__27935 = k__4388__auto__;
if(cljs.core.truth_((pred__27934.cljs$core$IFn$_invoke$arity$2 ? pred__27934.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__27935) : pred__27934.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__27935)))){
return (new cljs.pprint.nl_t(G__27890,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__27934.cljs$core$IFn$_invoke$arity$2 ? pred__27934.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348),expr__27935) : pred__27934.call(null,new cljs.core.Keyword(null,"type","type",1174270348),expr__27935)))){
return (new cljs.pprint.nl_t(self__.type_tag,G__27890,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__27934.cljs$core$IFn$_invoke$arity$2 ? pred__27934.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),expr__27935) : pred__27934.call(null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),expr__27935)))){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,G__27890,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__27934.cljs$core$IFn$_invoke$arity$2 ? pred__27934.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__27935) : pred__27934.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__27935)))){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,G__27890,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__27934.cljs$core$IFn$_invoke$arity$2 ? pred__27934.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__27935) : pred__27934.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__27935)))){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,G__27890,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__27890),null));
}
}
}
}
}
}));

(cljs.pprint.nl_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type","type",1174270348),self__.type,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos,null))], null),self__.__extmap));
}));

(cljs.pprint.nl_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__27890){
var self__ = this;
var this__4379__auto____$1 = this;
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,G__27890,self__.__extmap,self__.__hash));
}));

(cljs.pprint.nl_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(cljs.pprint.nl_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"logical-block","logical-block",1059508963,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
}));

(cljs.pprint.nl_t.cljs$lang$type = true);

(cljs.pprint.nl_t.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"cljs.pprint/nl-t",null,(1),null));
}));

(cljs.pprint.nl_t.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"cljs.pprint/nl-t");
}));

/**
 * Positional factory function for cljs.pprint/nl-t.
 */
cljs.pprint.__GT_nl_t = (function cljs$pprint$__GT_nl_t(type_tag,type,logical_block,start_pos,end_pos){
return (new cljs.pprint.nl_t(type_tag,type,logical_block,start_pos,end_pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/nl-t, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_nl_t = (function cljs$pprint$map__GT_nl_t(G__27895){
var extmap__4419__auto__ = (function (){var G__27943 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__27895,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], 0));
if(cljs.core.record_QMARK_(G__27895)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__27943);
} else {
return G__27943;
}
})();
return (new cljs.pprint.nl_t(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__27895),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__27895),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(G__27895),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__27895),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__27895),null,cljs.core.not_empty(extmap__4419__auto__),null));
});


cljs.pprint.make_nl_t = (function cljs$pprint$make_nl_t(type,logical_block,start_pos,end_pos){
return (new cljs.pprint.nl_t(new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114),type,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.nl_t_QMARK_ = (function cljs$pprint$nl_t_QMARK_(x__27293__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__27293__auto__),new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114));
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
cljs.pprint.start_block_t = (function (type_tag,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cljs.pprint.start_block_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(cljs.pprint.start_block_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k27951,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__27958 = k27951;
var G__27958__$1 = (((G__27958 instanceof cljs.core.Keyword))?G__27958.fqn:null);
switch (G__27958__$1) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27951,else__4383__auto__);

}
}));

(cljs.pprint.start_block_t.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__27962){
var vec__27963 = p__27962;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27963,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27963,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(cljs.pprint.start_block_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#cljs.pprint.start-block-t{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
}));

(cljs.pprint.start_block_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27950){
var self__ = this;
var G__27950__$1 = this;
return (new cljs.core.RecordIter((0),G__27950__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(cljs.pprint.start_block_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(cljs.pprint.start_block_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
}));

(cljs.pprint.start_block_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
}));

(cljs.pprint.start_block_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-414877272 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(cljs.pprint.start_block_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27952,other27953){
var self__ = this;
var this27952__$1 = this;
return (((!((other27953 == null)))) && ((this27952__$1.constructor === other27953.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27952__$1.type_tag,other27953.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27952__$1.logical_block,other27953.logical_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27952__$1.start_pos,other27953.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27952__$1.end_pos,other27953.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27952__$1.__extmap,other27953.__extmap)));
}));

(cljs.pprint.start_block_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(cljs.pprint.start_block_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__27950){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__27988 = cljs.core.keyword_identical_QMARK_;
var expr__27989 = k__4388__auto__;
if(cljs.core.truth_((pred__27988.cljs$core$IFn$_invoke$arity$2 ? pred__27988.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__27989) : pred__27988.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__27989)))){
return (new cljs.pprint.start_block_t(G__27950,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__27988.cljs$core$IFn$_invoke$arity$2 ? pred__27988.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),expr__27989) : pred__27988.call(null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),expr__27989)))){
return (new cljs.pprint.start_block_t(self__.type_tag,G__27950,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__27988.cljs$core$IFn$_invoke$arity$2 ? pred__27988.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__27989) : pred__27988.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__27989)))){
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,G__27950,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__27988.cljs$core$IFn$_invoke$arity$2 ? pred__27988.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__27989) : pred__27988.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__27989)))){
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,G__27950,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__27950),null));
}
}
}
}
}));

(cljs.pprint.start_block_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos,null))], null),self__.__extmap));
}));

(cljs.pprint.start_block_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__27950){
var self__ = this;
var this__4379__auto____$1 = this;
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,G__27950,self__.__extmap,self__.__hash));
}));

(cljs.pprint.start_block_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(cljs.pprint.start_block_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"logical-block","logical-block",1059508963,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
}));

(cljs.pprint.start_block_t.cljs$lang$type = true);

(cljs.pprint.start_block_t.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"cljs.pprint/start-block-t",null,(1),null));
}));

(cljs.pprint.start_block_t.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"cljs.pprint/start-block-t");
}));

/**
 * Positional factory function for cljs.pprint/start-block-t.
 */
cljs.pprint.__GT_start_block_t = (function cljs$pprint$__GT_start_block_t(type_tag,logical_block,start_pos,end_pos){
return (new cljs.pprint.start_block_t(type_tag,logical_block,start_pos,end_pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/start-block-t, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_start_block_t = (function cljs$pprint$map__GT_start_block_t(G__27954){
var extmap__4419__auto__ = (function (){var G__28002 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__27954,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], 0));
if(cljs.core.record_QMARK_(G__27954)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__28002);
} else {
return G__28002;
}
})();
return (new cljs.pprint.start_block_t(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__27954),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(G__27954),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__27954),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__27954),null,cljs.core.not_empty(extmap__4419__auto__),null));
});


cljs.pprint.make_start_block_t = (function cljs$pprint$make_start_block_t(logical_block,start_pos,end_pos){
return (new cljs.pprint.start_block_t(new cljs.core.Keyword(null,"start-block-t","start-block-t",-373430594),logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.start_block_t_QMARK_ = (function cljs$pprint$start_block_t_QMARK_(x__27293__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__27293__auto__),new cljs.core.Keyword(null,"start-block-t","start-block-t",-373430594));
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
cljs.pprint.end_block_t = (function (type_tag,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cljs.pprint.end_block_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(cljs.pprint.end_block_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k28010,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__28014 = k28010;
var G__28014__$1 = (((G__28014 instanceof cljs.core.Keyword))?G__28014.fqn:null);
switch (G__28014__$1) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k28010,else__4383__auto__);

}
}));

(cljs.pprint.end_block_t.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__28020){
var vec__28021 = p__28020;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28021,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28021,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(cljs.pprint.end_block_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#cljs.pprint.end-block-t{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
}));

(cljs.pprint.end_block_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28009){
var self__ = this;
var G__28009__$1 = this;
return (new cljs.core.RecordIter((0),G__28009__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(cljs.pprint.end_block_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(cljs.pprint.end_block_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
}));

(cljs.pprint.end_block_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
}));

(cljs.pprint.end_block_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (1365867980 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(cljs.pprint.end_block_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this28011,other28012){
var self__ = this;
var this28011__$1 = this;
return (((!((other28012 == null)))) && ((this28011__$1.constructor === other28012.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28011__$1.type_tag,other28012.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28011__$1.logical_block,other28012.logical_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28011__$1.start_pos,other28012.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28011__$1.end_pos,other28012.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28011__$1.__extmap,other28012.__extmap)));
}));

(cljs.pprint.end_block_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(cljs.pprint.end_block_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__28009){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__28031 = cljs.core.keyword_identical_QMARK_;
var expr__28032 = k__4388__auto__;
if(cljs.core.truth_((pred__28031.cljs$core$IFn$_invoke$arity$2 ? pred__28031.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__28032) : pred__28031.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__28032)))){
return (new cljs.pprint.end_block_t(G__28009,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28031.cljs$core$IFn$_invoke$arity$2 ? pred__28031.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),expr__28032) : pred__28031.call(null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),expr__28032)))){
return (new cljs.pprint.end_block_t(self__.type_tag,G__28009,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28031.cljs$core$IFn$_invoke$arity$2 ? pred__28031.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__28032) : pred__28031.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__28032)))){
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,G__28009,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28031.cljs$core$IFn$_invoke$arity$2 ? pred__28031.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__28032) : pred__28031.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__28032)))){
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,G__28009,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__28009),null));
}
}
}
}
}));

(cljs.pprint.end_block_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos,null))], null),self__.__extmap));
}));

(cljs.pprint.end_block_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__28009){
var self__ = this;
var this__4379__auto____$1 = this;
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,G__28009,self__.__extmap,self__.__hash));
}));

(cljs.pprint.end_block_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(cljs.pprint.end_block_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"logical-block","logical-block",1059508963,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
}));

(cljs.pprint.end_block_t.cljs$lang$type = true);

(cljs.pprint.end_block_t.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"cljs.pprint/end-block-t",null,(1),null));
}));

(cljs.pprint.end_block_t.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"cljs.pprint/end-block-t");
}));

/**
 * Positional factory function for cljs.pprint/end-block-t.
 */
cljs.pprint.__GT_end_block_t = (function cljs$pprint$__GT_end_block_t(type_tag,logical_block,start_pos,end_pos){
return (new cljs.pprint.end_block_t(type_tag,logical_block,start_pos,end_pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/end-block-t, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_end_block_t = (function cljs$pprint$map__GT_end_block_t(G__28013){
var extmap__4419__auto__ = (function (){var G__28050 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__28013,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], 0));
if(cljs.core.record_QMARK_(G__28013)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__28050);
} else {
return G__28050;
}
})();
return (new cljs.pprint.end_block_t(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__28013),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(G__28013),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__28013),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__28013),null,cljs.core.not_empty(extmap__4419__auto__),null));
});


cljs.pprint.make_end_block_t = (function cljs$pprint$make_end_block_t(logical_block,start_pos,end_pos){
return (new cljs.pprint.end_block_t(new cljs.core.Keyword(null,"end-block-t","end-block-t",1544648735),logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.end_block_t_QMARK_ = (function cljs$pprint$end_block_t_QMARK_(x__27293__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__27293__auto__),new cljs.core.Keyword(null,"end-block-t","end-block-t",1544648735));
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
cljs.pprint.indent_t = (function (type_tag,logical_block,relative_to,offset,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.relative_to = relative_to;
this.offset = offset;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cljs.pprint.indent_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(cljs.pprint.indent_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k28055,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__28064 = k28055;
var G__28064__$1 = (((G__28064 instanceof cljs.core.Keyword))?G__28064.fqn:null);
switch (G__28064__$1) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "relative-to":
return self__.relative_to;

break;
case "offset":
return self__.offset;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k28055,else__4383__auto__);

}
}));

(cljs.pprint.indent_t.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__28068){
var vec__28072 = p__28068;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28072,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28072,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(cljs.pprint.indent_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#cljs.pprint.indent-t{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),self__.relative_to],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"offset","offset",296498311),self__.offset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
}));

(cljs.pprint.indent_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28054){
var self__ = this;
var G__28054__$1 = this;
return (new cljs.core.RecordIter((0),G__28054__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(cljs.pprint.indent_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(cljs.pprint.indent_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
}));

(cljs.pprint.indent_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (6 + cljs.core.count(self__.__extmap));
}));

(cljs.pprint.indent_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1602780238 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(cljs.pprint.indent_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this28056,other28057){
var self__ = this;
var this28056__$1 = this;
return (((!((other28057 == null)))) && ((this28056__$1.constructor === other28057.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28056__$1.type_tag,other28057.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28056__$1.logical_block,other28057.logical_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28056__$1.relative_to,other28057.relative_to)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28056__$1.offset,other28057.offset)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28056__$1.start_pos,other28057.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28056__$1.end_pos,other28057.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28056__$1.__extmap,other28057.__extmap)));
}));

(cljs.pprint.indent_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"offset","offset",296498311),null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(cljs.pprint.indent_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__28054){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__28082 = cljs.core.keyword_identical_QMARK_;
var expr__28083 = k__4388__auto__;
if(cljs.core.truth_((pred__28082.cljs$core$IFn$_invoke$arity$2 ? pred__28082.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__28083) : pred__28082.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__28083)))){
return (new cljs.pprint.indent_t(G__28054,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28082.cljs$core$IFn$_invoke$arity$2 ? pred__28082.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),expr__28083) : pred__28082.call(null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),expr__28083)))){
return (new cljs.pprint.indent_t(self__.type_tag,G__28054,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28082.cljs$core$IFn$_invoke$arity$2 ? pred__28082.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),expr__28083) : pred__28082.call(null,new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),expr__28083)))){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,G__28054,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28082.cljs$core$IFn$_invoke$arity$2 ? pred__28082.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"offset","offset",296498311),expr__28083) : pred__28082.call(null,new cljs.core.Keyword(null,"offset","offset",296498311),expr__28083)))){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,G__28054,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28082.cljs$core$IFn$_invoke$arity$2 ? pred__28082.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__28083) : pred__28082.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__28083)))){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,G__28054,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28082.cljs$core$IFn$_invoke$arity$2 ? pred__28082.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__28083) : pred__28082.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__28083)))){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,G__28054,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__28054),null));
}
}
}
}
}
}
}));

(cljs.pprint.indent_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),self__.relative_to,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"offset","offset",296498311),self__.offset,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos,null))], null),self__.__extmap));
}));

(cljs.pprint.indent_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__28054){
var self__ = this;
var this__4379__auto____$1 = this;
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,G__28054,self__.__extmap,self__.__hash));
}));

(cljs.pprint.indent_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(cljs.pprint.indent_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"logical-block","logical-block",1059508963,null),new cljs.core.Symbol(null,"relative-to","relative-to",1170431476,null),new cljs.core.Symbol(null,"offset","offset",1937029838,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
}));

(cljs.pprint.indent_t.cljs$lang$type = true);

(cljs.pprint.indent_t.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"cljs.pprint/indent-t",null,(1),null));
}));

(cljs.pprint.indent_t.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"cljs.pprint/indent-t");
}));

/**
 * Positional factory function for cljs.pprint/indent-t.
 */
cljs.pprint.__GT_indent_t = (function cljs$pprint$__GT_indent_t(type_tag,logical_block,relative_to,offset,start_pos,end_pos){
return (new cljs.pprint.indent_t(type_tag,logical_block,relative_to,offset,start_pos,end_pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/indent-t, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_indent_t = (function cljs$pprint$map__GT_indent_t(G__28058){
var extmap__4419__auto__ = (function (){var G__28092 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__28058,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], 0));
if(cljs.core.record_QMARK_(G__28058)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__28092);
} else {
return G__28092;
}
})();
return (new cljs.pprint.indent_t(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__28058),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(G__28058),new cljs.core.Keyword(null,"relative-to","relative-to",-470100051).cljs$core$IFn$_invoke$arity$1(G__28058),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(G__28058),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__28058),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__28058),null,cljs.core.not_empty(extmap__4419__auto__),null));
});


cljs.pprint.make_indent_t = (function cljs$pprint$make_indent_t(logical_block,relative_to,offset,start_pos,end_pos){
return (new cljs.pprint.indent_t(new cljs.core.Keyword(null,"indent-t","indent-t",528318969),logical_block,relative_to,offset,start_pos,end_pos,null,null,null));
});

cljs.pprint.indent_t_QMARK_ = (function cljs$pprint$indent_t_QMARK_(x__27293__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__27293__auto__),new cljs.core.Keyword(null,"indent-t","indent-t",528318969));
});
cljs.pprint.pp_newline = (function cljs$pprint$pp_newline(){
return "\n";
});
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.write_token !== 'undefined')){
} else {
cljs.pprint.write_token = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__28099 = cljs.core.get_global_hierarchy;
return (fexpr__28099.cljs$core$IFn$_invoke$arity$0 ? fexpr__28099.cljs$core$IFn$_invoke$arity$0() : fexpr__28099.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","write-token"),(function (p1__28096_SHARP_,p2__28095_SHARP_){
return new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(p2__28095_SHARP_);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"start-block-t","start-block-t",-373430594),(function (this$,token){
var temp__5735__auto___29627 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5735__auto___29627)){
var cb_29628 = temp__5735__auto___29627;
(cb_29628.cljs$core$IFn$_invoke$arity$1 ? cb_29628.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"start","start",-355208981)) : cb_29628.call(null,new cljs.core.Keyword(null,"start","start",-355208981)));
} else {
}

var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(token);
var temp__5735__auto___29629 = new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core.truth_(temp__5735__auto___29629)){
var prefix_29630 = temp__5735__auto___29629;
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix_29630);
} else {
}

var col = cljs.pprint.get_column(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
cljs.core.reset_BANG_(new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(lb),col);

return cljs.core.reset_BANG_(new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(lb),col);
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"end-block-t","end-block-t",1544648735),(function (this$,token){
var temp__5735__auto___29632 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5735__auto___29632)){
var cb_29633 = temp__5735__auto___29632;
(cb_29633.cljs$core$IFn$_invoke$arity$1 ? cb_29633.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"end","end",-268185958)) : cb_29633.call(null,new cljs.core.Keyword(null,"end","end",-268185958)));
} else {
}

var temp__5735__auto__ = new cljs.core.Keyword(null,"suffix","suffix",367373057).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(token));
if(cljs.core.truth_(temp__5735__auto__)){
var suffix = temp__5735__auto__;
return cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),suffix);
} else {
return null;
}
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"indent-t","indent-t",528318969),(function (this$,token){
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(token);
return cljs.core.reset_BANG_(new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(lb),(new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(token) + (function (){var pred__28110 = cljs.core._EQ_;
var expr__28111 = new cljs.core.Keyword(null,"relative-to","relative-to",-470100051).cljs$core$IFn$_invoke$arity$1(token);
if(cljs.core.truth_((pred__28110.cljs$core$IFn$_invoke$arity$2 ? pred__28110.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"block","block",664686210),expr__28111) : pred__28110.call(null,new cljs.core.Keyword(null,"block","block",664686210),expr__28111)))){
return cljs.core.deref(new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(lb));
} else {
if(cljs.core.truth_((pred__28110.cljs$core$IFn$_invoke$arity$2 ? pred__28110.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"current","current",-1088038603),expr__28111) : pred__28110.call(null,new cljs.core.Keyword(null,"current","current",-1088038603),expr__28111)))){
return cljs.pprint.get_column(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__28111)].join('')));
}
}
})()));
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"buffer-blob","buffer-blob",-1830112173),(function (this$,token){
return cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(token));
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114),(function (this$,token){
if(cljs.core.truth_((function (){var or__4126__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"mandatory","mandatory",542802336));
if(or__4126__auto__){
return or__4126__auto__;
} else {
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"fill","fill",883462889))))){
return cljs.core.deref(new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(token)));
} else {
return false;
}
}
})())){
(cljs.pprint.emit_nl.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.emit_nl.cljs$core$IFn$_invoke$arity$2(this$,token) : cljs.pprint.emit_nl.call(null,this$,token));
} else {
var temp__5733__auto___29636 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5733__auto___29636)){
var tws_29637 = temp__5733__auto___29636;
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_29637);
} else {
}
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null);
}));
cljs.pprint.write_tokens = (function cljs$pprint$write_tokens(this$,tokens,force_trailing_whitespace){
var seq__28114 = cljs.core.seq(tokens);
var chunk__28115 = null;
var count__28116 = (0);
var i__28117 = (0);
while(true){
if((i__28117 < count__28116)){
var token = chunk__28115.cljs$core$IIndexed$_nth$arity$2(null,i__28117);
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114))))){
var temp__5733__auto___29641 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5733__auto___29641)){
var tws_29642 = temp__5733__auto___29641;
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_29642);
} else {
}
} else {
}

cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2(this$,token);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(token));

var tws_29643 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_((function (){var and__4115__auto__ = force_trailing_whitespace;
if(cljs.core.truth_(and__4115__auto__)){
return tws_29643;
} else {
return and__4115__auto__;
}
})())){
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_29643);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null);
} else {
}


var G__29646 = seq__28114;
var G__29647 = chunk__28115;
var G__29648 = count__28116;
var G__29649 = (i__28117 + (1));
seq__28114 = G__29646;
chunk__28115 = G__29647;
count__28116 = G__29648;
i__28117 = G__29649;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__28114);
if(temp__5735__auto__){
var seq__28114__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28114__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__28114__$1);
var G__29650 = cljs.core.chunk_rest(seq__28114__$1);
var G__29651 = c__4556__auto__;
var G__29652 = cljs.core.count(c__4556__auto__);
var G__29653 = (0);
seq__28114 = G__29650;
chunk__28115 = G__29651;
count__28116 = G__29652;
i__28117 = G__29653;
continue;
} else {
var token = cljs.core.first(seq__28114__$1);
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114))))){
var temp__5733__auto___29654 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5733__auto___29654)){
var tws_29655 = temp__5733__auto___29654;
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_29655);
} else {
}
} else {
}

cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2(this$,token);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(token));

var tws_29656 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_((function (){var and__4115__auto__ = force_trailing_whitespace;
if(cljs.core.truth_(and__4115__auto__)){
return tws_29656;
} else {
return and__4115__auto__;
}
})())){
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_29656);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null);
} else {
}


var G__29661 = cljs.core.next(seq__28114__$1);
var G__29662 = null;
var G__29663 = (0);
var G__29664 = (0);
seq__28114 = G__29661;
chunk__28115 = G__29662;
count__28116 = G__29663;
i__28117 = G__29664;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.pprint.tokens_fit_QMARK_ = (function cljs$pprint$tokens_fit_QMARK_(this$,tokens){
var maxcol = cljs.pprint.get_max_column(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
return (((maxcol == null)) || (((cljs.pprint.get_column(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)))) + cljs.pprint.buffer_length(tokens)) < maxcol)));
});
cljs.pprint.linear_nl_QMARK_ = (function cljs$pprint$linear_nl_QMARK_(this$,lb,section){
var or__4126__auto__ = cljs.core.deref(new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(lb));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (!(cljs.pprint.tokens_fit_QMARK_(this$,section)));
}
});
cljs.pprint.miser_nl_QMARK_ = (function cljs$pprint$miser_nl_QMARK_(this$,lb,section){
var miser_width = cljs.pprint.get_miser_width(this$);
var maxcol = cljs.pprint.get_max_column(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
var and__4115__auto__ = miser_width;
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = maxcol;
if(cljs.core.truth_(and__4115__auto____$1)){
if((cljs.core.deref(new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(lb)) >= (maxcol - miser_width))){
return cljs.pprint.linear_nl_QMARK_(this$,lb,section);
} else {
return false;
}
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
});
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.emit_nl_QMARK_ !== 'undefined')){
} else {
cljs.pprint.emit_nl_QMARK_ = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__28127 = cljs.core.get_global_hierarchy;
return (fexpr__28127.cljs$core$IFn$_invoke$arity$0 ? fexpr__28127.cljs$core$IFn$_invoke$arity$0() : fexpr__28127.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","emit-nl?"),(function (t,_,___$1,___$2){
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(t);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"linear","linear",872268697),(function (newl,this$,section,_){
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(newl);
return cljs.pprint.linear_nl_QMARK_(this$,lb,section);
}));
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"miser","miser",-556060186),(function (newl,this$,section,_){
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(newl);
return cljs.pprint.miser_nl_QMARK_(this$,lb,section);
}));
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"fill","fill",883462889),(function (newl,this$,section,subsection){
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(newl);
var or__4126__auto__ = cljs.core.deref(new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875).cljs$core$IFn$_invoke$arity$1(lb));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = (!(cljs.pprint.tokens_fit_QMARK_(this$,subsection)));
if(or__4126__auto____$1){
return or__4126__auto____$1;
} else {
return cljs.pprint.miser_nl_QMARK_(this$,lb,section);
}
}
}));
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"mandatory","mandatory",542802336),(function (_,___$1,___$2,___$3){
return true;
}));
cljs.pprint.get_section = (function cljs$pprint$get_section(buffer){
var nl = cljs.core.first(buffer);
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(nl);
var section = cljs.core.seq(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__28130_SHARP_){
return (!(((cljs.pprint.nl_t_QMARK_(p1__28130_SHARP_)) && (cljs.pprint.ancestor_QMARK_(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(p1__28130_SHARP_),lb)))));
}),cljs.core.next(buffer)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [section,cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((cljs.core.count(section) + (1)),buffer))], null);
});
cljs.pprint.get_sub_section = (function cljs$pprint$get_sub_section(buffer){
var nl = cljs.core.first(buffer);
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(nl);
var section = cljs.core.seq(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__28133_SHARP_){
var nl_lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(p1__28133_SHARP_);
return (!(((cljs.pprint.nl_t_QMARK_(p1__28133_SHARP_)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nl_lb,lb)) || (cljs.pprint.ancestor_QMARK_(nl_lb,lb)))))));
}),cljs.core.next(buffer)));
return section;
});
cljs.pprint.update_nl_state = (function cljs$pprint$update_nl_state(lb){
cljs.core.reset_BANG_(new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875).cljs$core$IFn$_invoke$arity$1(lb),true);

cljs.core.reset_BANG_(new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(lb),true);

var lb__$1 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(lb);
while(true){
if(cljs.core.truth_(lb__$1)){
cljs.core.reset_BANG_(new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(lb__$1),true);

cljs.core.reset_BANG_(new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875).cljs$core$IFn$_invoke$arity$1(lb__$1),true);

var G__29685 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(lb__$1);
lb__$1 = G__29685;
continue;
} else {
return null;
}
break;
}
});
cljs.pprint.emit_nl = (function cljs$pprint$emit_nl(this$,nl){
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.pprint.pp_newline());

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null);

var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(nl);
var prefix = new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813).cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core.truth_(prefix)){
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix);
} else {
}

var istr_29694 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((cljs.core.deref(new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(lb)) - cljs.core.count(prefix))," "));
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),istr_29694);

return cljs.pprint.update_nl_state(lb);
});
cljs.pprint.split_at_newline = (function cljs$pprint$split_at_newline(tokens){
var pre = cljs.core.seq(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__28139_SHARP_){
return (!(cljs.pprint.nl_t_QMARK_(p1__28139_SHARP_)));
}),tokens));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pre,cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(cljs.core.count(pre),tokens))], null);
});
cljs.pprint.write_token_string = (function cljs$pprint$write_token_string(this$,tokens){
var vec__28145 = cljs.pprint.split_at_newline(tokens);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28145,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28145,(1),null);
if(cljs.core.truth_(a)){
cljs.pprint.write_tokens(this$,a,false);
} else {
}

if(cljs.core.truth_(b)){
var vec__28148 = cljs.pprint.get_section(b);
var section = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28148,(0),null);
var remainder = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28148,(1),null);
var newl = cljs.core.first(b);
var do_nl = cljs.pprint.emit_nl_QMARK_.cljs$core$IFn$_invoke$arity$4(newl,this$,section,cljs.pprint.get_sub_section(b));
var result = (cljs.core.truth_(do_nl)?(function (){
cljs.pprint.emit_nl(this$,newl);

return cljs.core.next(b);
})()
:b);
var long_section = (!(cljs.pprint.tokens_fit_QMARK_(this$,result)));
var result__$1 = ((long_section)?(function (){var rem2 = (cljs.pprint.write_token_string.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.write_token_string.cljs$core$IFn$_invoke$arity$2(this$,section) : cljs.pprint.write_token_string.call(null,this$,section));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rem2,section)){
cljs.pprint.write_tokens(this$,section,false);

return remainder;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(rem2,remainder));
}
})():result);
return result__$1;
} else {
return null;
}
});
cljs.pprint.write_line = (function cljs$pprint$write_line(this$){
var buffer = new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
while(true){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"buffer","buffer",617295198),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,buffer));

if((!(cljs.pprint.tokens_fit_QMARK_(this$,buffer)))){
var new_buffer = cljs.pprint.write_token_string(this$,buffer);
if((!((buffer === new_buffer)))){
var G__29735 = new_buffer;
buffer = G__29735;
continue;
} else {
return null;
}
} else {
return null;
}
break;
}
});
cljs.pprint.add_to_buffer = (function cljs$pprint$add_to_buffer(this$,token){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"buffer","buffer",617295198),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),token));

if((!(cljs.pprint.tokens_fit_QMARK_(this$,new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))))))){
return cljs.pprint.write_line(this$);
} else {
return null;
}
});
cljs.pprint.write_buffered_output = (function cljs$pprint$write_buffered_output(this$){
cljs.pprint.write_line(this$);

var temp__5733__auto__ = new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5733__auto__)){
var buf = temp__5733__auto__;
cljs.pprint.write_tokens(this$,buf,true);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"buffer","buffer",617295198),cljs.core.PersistentVector.EMPTY);
} else {
return null;
}
});
cljs.pprint.write_white_space = (function cljs$pprint$write_white_space(this$){
var temp__5735__auto__ = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5735__auto__)){
var tws = temp__5735__auto__;
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null);
} else {
return null;
}
});
cljs.pprint.write_initial_lines = (function cljs$pprint$write_initial_lines(this$,s){
var lines = clojure.string.split.cljs$core$IFn$_invoke$arity$3(s,"\n",(-1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(lines),(1))){
return s;
} else {
var prefix = new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)))));
var l = cljs.core.first(lines);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"buffering","buffering",-876713613),new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))))){
var oldpos_29767 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var newpos_29768 = (oldpos_29767 + cljs.core.count(l));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos_29768);

cljs.pprint.add_to_buffer(this$,cljs.pprint.make_buffer_blob(l,null,oldpos_29767,newpos_29768));

cljs.pprint.write_buffered_output(this$);
} else {
cljs.pprint.write_white_space(this$);

cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),l);
}

cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),"\n");

var seq__28160_29771 = cljs.core.seq(cljs.core.next(cljs.core.butlast(lines)));
var chunk__28161_29772 = null;
var count__28162_29773 = (0);
var i__28163_29774 = (0);
while(true){
if((i__28163_29774 < count__28162_29773)){
var l_29779__$1 = chunk__28161_29772.cljs$core$IIndexed$_nth$arity$2(null,i__28163_29774);
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),l_29779__$1);

cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.pprint.pp_newline());

if(cljs.core.truth_(prefix)){
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix);
} else {
}


var G__29786 = seq__28160_29771;
var G__29787 = chunk__28161_29772;
var G__29788 = count__28162_29773;
var G__29789 = (i__28163_29774 + (1));
seq__28160_29771 = G__29786;
chunk__28161_29772 = G__29787;
count__28162_29773 = G__29788;
i__28163_29774 = G__29789;
continue;
} else {
var temp__5735__auto___29793 = cljs.core.seq(seq__28160_29771);
if(temp__5735__auto___29793){
var seq__28160_29794__$1 = temp__5735__auto___29793;
if(cljs.core.chunked_seq_QMARK_(seq__28160_29794__$1)){
var c__4556__auto___29795 = cljs.core.chunk_first(seq__28160_29794__$1);
var G__29797 = cljs.core.chunk_rest(seq__28160_29794__$1);
var G__29798 = c__4556__auto___29795;
var G__29799 = cljs.core.count(c__4556__auto___29795);
var G__29800 = (0);
seq__28160_29771 = G__29797;
chunk__28161_29772 = G__29798;
count__28162_29773 = G__29799;
i__28163_29774 = G__29800;
continue;
} else {
var l_29807__$1 = cljs.core.first(seq__28160_29794__$1);
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),l_29807__$1);

cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.pprint.pp_newline());

if(cljs.core.truth_(prefix)){
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix);
} else {
}


var G__29811 = cljs.core.next(seq__28160_29794__$1);
var G__29812 = null;
var G__29813 = (0);
var G__29814 = (0);
seq__28160_29771 = G__29811;
chunk__28161_29772 = G__29812;
count__28162_29773 = G__29813;
i__28163_29774 = G__29814;
continue;
}
} else {
}
}
break;
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"buffering","buffering",-876713613),new cljs.core.Keyword(null,"writing","writing",-1486865108));

return cljs.core.last(lines);
}
});
cljs.pprint.p_write_char = (function cljs$pprint$p_write_char(this$,c){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),new cljs.core.Keyword(null,"writing","writing",-1486865108))){
cljs.pprint.write_white_space(this$);

return cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),c);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,"\n")){
return cljs.pprint.write_initial_lines(this$,"\n");
} else {
var oldpos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var newpos = (oldpos + (1));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos);

return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_buffer_blob(cljs.core.char$(c),null,oldpos,newpos));
}
}
});
cljs.pprint.pretty_writer = (function cljs$pprint$pretty_writer(writer,max_columns,miser_width){
var lb = (new cljs.pprint.logical_block(null,null,cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),null,null,null,null,null,null,null));
var fields = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776),new cljs.core.Keyword(null,"miser-width","miser-width",-1310049437),new cljs.core.Keyword(null,"buffer-block","buffer-block",-10937307),new cljs.core.Keyword(null,"pretty-writer","pretty-writer",-1222834267),new cljs.core.Keyword(null,"sections","sections",-886710106),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"base","base",185279322),new cljs.core.Keyword(null,"buffer-level","buffer-level",928864731),new cljs.core.Keyword(null,"buffer","buffer",617295198)],[lb,miser_width,lb,true,null,new cljs.core.Keyword(null,"writing","writing",-1486865108),(0),null,cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2(writer,max_columns),(1),cljs.core.PersistentVector.EMPTY]));
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint28177 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.pprint.IPrettyFlush}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint28177 = (function (writer,max_columns,miser_width,lb,fields,meta28178){
this.writer = writer;
this.max_columns = max_columns;
this.miser_width = miser_width;
this.lb = lb;
this.fields = fields;
this.meta28178 = meta28178;
this.cljs$lang$protocol_mask$partition0$ = 1074167808;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.pprint.t_cljs$pprint28177.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28179,meta28178__$1){
var self__ = this;
var _28179__$1 = this;
return (new cljs.pprint.t_cljs$pprint28177(self__.writer,self__.max_columns,self__.miser_width,self__.lb,self__.fields,meta28178__$1));
}));

(cljs.pprint.t_cljs$pprint28177.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28179){
var self__ = this;
var _28179__$1 = this;
return self__.meta28178;
}));

(cljs.pprint.t_cljs$pprint28177.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.fields;
}));

(cljs.pprint.t_cljs$pprint28177.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__28187 = cljs.core._EQ_;
var expr__28188 = cljs.core.type(x);
if(cljs.core.truth_((pred__28187.cljs$core$IFn$_invoke$arity$2 ? pred__28187.cljs$core$IFn$_invoke$arity$2(String,expr__28188) : pred__28187.call(null,String,expr__28188)))){
var s0 = cljs.pprint.write_initial_lines(this$__$1,x);
var s = clojure.string.replace_first(s0,/\s+$/,"");
var white_space = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s0,((s).length));
var mode = new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"writing","writing",-1486865108))){
cljs.pprint.write_white_space(this$__$1);

cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1))),s);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$__$1),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),white_space);
} else {
var oldpos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1)));
var newpos = (oldpos + cljs.core.count(s0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$__$1),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos);

return cljs.pprint.add_to_buffer(this$__$1,cljs.pprint.make_buffer_blob(s,white_space,oldpos,newpos));
}
} else {
if(cljs.core.truth_((pred__28187.cljs$core$IFn$_invoke$arity$2 ? pred__28187.cljs$core$IFn$_invoke$arity$2(Number,expr__28188) : pred__28187.call(null,Number,expr__28188)))){
return cljs.pprint.p_write_char(this$__$1,x);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__28188)].join('')));
}
}
}));

(cljs.pprint.t_cljs$pprint28177.prototype.cljs$core$IWriter$_flush$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
this$__$1.cljs$pprint$IPrettyFlush$_ppflush$arity$1(null);

return cljs.core._flush(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1))));
}));

(cljs.pprint.t_cljs$pprint28177.prototype.cljs$pprint$IPrettyFlush$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.pprint.t_cljs$pprint28177.prototype.cljs$pprint$IPrettyFlush$_ppflush$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1))),new cljs.core.Keyword(null,"buffering","buffering",-876713613))){
cljs.pprint.write_tokens(this$__$1,new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1))),true);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$__$1),cljs.core.assoc,new cljs.core.Keyword(null,"buffer","buffer",617295198),cljs.core.PersistentVector.EMPTY);
} else {
return cljs.pprint.write_white_space(this$__$1);
}
}));

(cljs.pprint.t_cljs$pprint28177.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"max-columns","max-columns",-912112507,null),new cljs.core.Symbol(null,"miser-width","miser-width",330482090,null),new cljs.core.Symbol(null,"lb","lb",950310490,null),new cljs.core.Symbol(null,"fields","fields",-291534703,null),new cljs.core.Symbol(null,"meta28178","meta28178",-465607914,null)], null);
}));

(cljs.pprint.t_cljs$pprint28177.cljs$lang$type = true);

(cljs.pprint.t_cljs$pprint28177.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint28177");

(cljs.pprint.t_cljs$pprint28177.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.pprint/t_cljs$pprint28177");
}));

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint28177.
 */
cljs.pprint.__GT_t_cljs$pprint28177 = (function cljs$pprint$pretty_writer_$___GT_t_cljs$pprint28177(writer__$1,max_columns__$1,miser_width__$1,lb__$1,fields__$1,meta28178){
return (new cljs.pprint.t_cljs$pprint28177(writer__$1,max_columns__$1,miser_width__$1,lb__$1,fields__$1,meta28178));
});

}

return (new cljs.pprint.t_cljs$pprint28177(writer,max_columns,miser_width,lb,fields,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.pprint.start_block = (function cljs$pprint$start_block(this$,prefix,per_line_prefix,suffix){
var lb = (new cljs.pprint.logical_block(new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),null,cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),prefix,per_line_prefix,suffix,null,null,null,null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776),lb);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),new cljs.core.Keyword(null,"writing","writing",-1486865108))){
cljs.pprint.write_white_space(this$);

var temp__5735__auto___29834 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5735__auto___29834)){
var cb_29835 = temp__5735__auto___29834;
(cb_29835.cljs$core$IFn$_invoke$arity$1 ? cb_29835.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"start","start",-355208981)) : cb_29835.call(null,new cljs.core.Keyword(null,"start","start",-355208981)));
} else {
}

if(cljs.core.truth_(prefix)){
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix);
} else {
}

var col = cljs.pprint.get_column(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
cljs.core.reset_BANG_(lb.start_col,col);

return cljs.core.reset_BANG_(lb.indent,col);
} else {
var oldpos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var newpos = (oldpos + (cljs.core.truth_(prefix)?cljs.core.count(prefix):(0)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos);

return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_start_block_t(lb,oldpos,newpos));
}
});
cljs.pprint.end_block = (function cljs$pprint$end_block(this$){
var lb = new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var suffix = new cljs.core.Keyword(null,"suffix","suffix",367373057).cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),new cljs.core.Keyword(null,"writing","writing",-1486865108))){
cljs.pprint.write_white_space(this$);

if(cljs.core.truth_(suffix)){
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),suffix);
} else {
}

var temp__5735__auto___29843 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5735__auto___29843)){
var cb_29846 = temp__5735__auto___29843;
(cb_29846.cljs$core$IFn$_invoke$arity$1 ? cb_29846.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"end","end",-268185958)) : cb_29846.call(null,new cljs.core.Keyword(null,"end","end",-268185958)));
} else {
}
} else {
var oldpos_29847 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var newpos_29848 = (oldpos_29847 + (cljs.core.truth_(suffix)?cljs.core.count(suffix):(0)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos_29848);

cljs.pprint.add_to_buffer(this$,cljs.pprint.make_end_block_t(lb,oldpos_29847,newpos_29848));
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776),new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(lb));
});
cljs.pprint.nl = (function cljs$pprint$nl(this$,type){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"buffering","buffering",-876713613));

var pos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_nl_t(type,new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),pos,pos));
});
cljs.pprint.indent = (function cljs$pprint$indent(this$,relative_to,offset){
var lb = new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),new cljs.core.Keyword(null,"writing","writing",-1486865108))){
cljs.pprint.write_white_space(this$);

return cljs.core.reset_BANG_(new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(lb),(offset + (function (){var pred__28203 = cljs.core._EQ_;
var expr__28204 = relative_to;
if(cljs.core.truth_((pred__28203.cljs$core$IFn$_invoke$arity$2 ? pred__28203.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"block","block",664686210),expr__28204) : pred__28203.call(null,new cljs.core.Keyword(null,"block","block",664686210),expr__28204)))){
return cljs.core.deref(new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(lb));
} else {
if(cljs.core.truth_((pred__28203.cljs$core$IFn$_invoke$arity$2 ? pred__28203.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"current","current",-1088038603),expr__28204) : pred__28203.call(null,new cljs.core.Keyword(null,"current","current",-1088038603),expr__28204)))){
return cljs.pprint.get_column(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__28204)].join('')));
}
}
})()));
} else {
var pos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_indent_t(lb,relative_to,offset,pos,pos));
}
});
cljs.pprint.get_miser_width = (function cljs$pprint$get_miser_width(this$){
return new cljs.core.Keyword(null,"miser-width","miser-width",-1310049437).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
});
/**
 * Bind to true if you want write to use pretty printing
 */
cljs.pprint._STAR_print_pretty_STAR_ = true;
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint._STAR_print_pprint_dispatch_STAR_ !== 'undefined')){
} else {
/**
 * The pretty print dispatch function. Use with-pprint-dispatch or
 * set-pprint-dispatch to modify.
 */
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = null;
}
/**
 * Pretty printing will try to avoid anything going beyond this column.
 * Set it to nil to have pprint let the line be arbitrarily long. This will ignore all
 * non-mandatory newlines.
 */
cljs.pprint._STAR_print_right_margin_STAR_ = (72);
/**
 * The column at which to enter miser style. Depending on the dispatch table,
 * miser style add newlines in more places to try to keep lines short allowing for further
 * levels of nesting.
 */
cljs.pprint._STAR_print_miser_width_STAR_ = (40);
/**
 * Maximum number of lines to print in a pretty print instance (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_lines_STAR_ = null;
/**
 * Mark circular structures (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_circle_STAR_ = null;
/**
 * Mark repeated structures rather than repeat them (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_shared_STAR_ = null;
/**
 * Don't print namespaces with symbols. This is particularly useful when
 * pretty printing the results of macro expansions
 */
cljs.pprint._STAR_print_suppress_namespaces_STAR_ = null;
/**
 * Print a radix specifier in front of integers and rationals. If *print-base* is 2, 8,
 * or 16, then the radix specifier used is #b, #o, or #x, respectively. Otherwise the
 * radix specifier is in the form #XXr where XX is the decimal value of *print-base* 
 */
cljs.pprint._STAR_print_radix_STAR_ = null;
/**
 * The base to use for printing integers and rationals.
 */
cljs.pprint._STAR_print_base_STAR_ = (10);
cljs.pprint._STAR_current_level_STAR_ = (0);
cljs.pprint._STAR_current_length_STAR_ = null;
cljs.pprint.table_ize = (function cljs$pprint$table_ize(t,m){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__28206_SHARP_){
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(t,cljs.core.key(p1__28206_SHARP_));
if(cljs.core.truth_(temp__5735__auto__)){
var v = temp__5735__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,cljs.core.val(p1__28206_SHARP_)], null);
} else {
return null;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m], 0)));
});
/**
 * Return true iff x is a PrettyWriter
 */
cljs.pprint.pretty_writer_QMARK_ = (function cljs$pprint$pretty_writer_QMARK_(x){
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IDeref$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x))){
return new cljs.core.Keyword(null,"pretty-writer","pretty-writer",-1222834267).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(x)));
} else {
return false;
}
});
/**
 * Wrap base-writer in a PrettyWriter with the specified right-margin and miser-width
 */
cljs.pprint.make_pretty_writer = (function cljs$pprint$make_pretty_writer(base_writer,right_margin,miser_width){
return cljs.pprint.pretty_writer(base_writer,right_margin,miser_width);
});
/**
 * Write an object to *out* subject to the current bindings of the printer control
 * variables. Use the kw-args argument to override individual variables for this call (and
 * any recursive calls).
 * 
 * *out* must be a PrettyWriter if pretty printing is enabled. This is the responsibility
 * of the caller.
 * 
 * This method is primarily intended for use by pretty print dispatch functions that
 * already know that the pretty printer will have set up their environment appropriately.
 * Normal library clients should use the standard "write" interface. 
 */
cljs.pprint.write_out = (function cljs$pprint$write_out(object){
var length_reached = (function (){var and__4115__auto__ = cljs.pprint._STAR_current_length_STAR_;
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = cljs.core._STAR_print_length_STAR_;
if(cljs.core.truth_(and__4115__auto____$1)){
return (cljs.pprint._STAR_current_length_STAR_ >= cljs.core._STAR_print_length_STAR_);
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
})();
if(cljs.core.not(cljs.pprint._STAR_print_pretty_STAR_)){
cljs.pprint.pr.call(null,object);
} else {
if(cljs.core.truth_(length_reached)){
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
} else {
if(cljs.core.truth_(cljs.pprint._STAR_current_length_STAR_)){
(cljs.pprint._STAR_current_length_STAR_ = (cljs.pprint._STAR_current_length_STAR_ + (1)));
} else {
}

cljs.pprint._STAR_print_pprint_dispatch_STAR_.call(null,object);
}
}

return length_reached;
});
/**
 * Write an object subject to the current bindings of the printer control variables.
 * Use the kw-args argument to override individual variables for this call (and any
 * recursive calls). Returns the string result if :stream is nil or nil otherwise.
 * 
 * The following keyword arguments can be passed with values:
 *   Keyword              Meaning                              Default value
 *   :stream              Writer for output or nil             true (indicates *out*)
 *   :base                Base to use for writing rationals    Current value of *print-base*
 *   :circle*             If true, mark circular structures    Current value of *print-circle*
 *   :length              Maximum elements to show in sublists Current value of *print-length*
 *   :level               Maximum depth                        Current value of *print-level*
 *   :lines*              Maximum lines of output              Current value of *print-lines*
 *   :miser-width         Width to enter miser mode            Current value of *print-miser-width*
 *   :dispatch            The pretty print dispatch function   Current value of *print-pprint-dispatch*
 *   :pretty              If true, do pretty printing          Current value of *print-pretty*
 *   :radix               If true, prepend a radix specifier   Current value of *print-radix*
 *   :readably*           If true, print readably              Current value of *print-readably*
 *   :right-margin        The column for the right margin      Current value of *print-right-margin*
 *   :suppress-namespaces If true, no namespaces in symbols    Current value of *print-suppress-namespaces*
 * 
 *   * = not yet supported
 */
cljs.pprint.write = (function cljs$pprint$write(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29866 = arguments.length;
var i__4737__auto___29867 = (0);
while(true){
if((i__4737__auto___29867 < len__4736__auto___29866)){
args__4742__auto__.push((arguments[i__4737__auto___29867]));

var G__29868 = (i__4737__auto___29867 + (1));
i__4737__auto___29867 = G__29868;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic = (function (object,kw_args){
var options = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stream","stream",1534941648),true], null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,kw_args)], 0));
var _STAR_print_base_STAR__orig_val__28216 = cljs.pprint._STAR_print_base_STAR_;
var _STAR_print_circle_STAR__orig_val__28217 = cljs.pprint._STAR_print_circle_STAR_;
var _STAR_print_length_STAR__orig_val__28218 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__28219 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_lines_STAR__orig_val__28220 = cljs.pprint._STAR_print_lines_STAR_;
var _STAR_print_miser_width_STAR__orig_val__28221 = cljs.pprint._STAR_print_miser_width_STAR_;
var _STAR_print_pprint_dispatch_STAR__orig_val__28222 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
var _STAR_print_pretty_STAR__orig_val__28223 = cljs.pprint._STAR_print_pretty_STAR_;
var _STAR_print_radix_STAR__orig_val__28224 = cljs.pprint._STAR_print_radix_STAR_;
var _STAR_print_readably_STAR__orig_val__28225 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_right_margin_STAR__orig_val__28226 = cljs.pprint._STAR_print_right_margin_STAR_;
var _STAR_print_suppress_namespaces_STAR__orig_val__28227 = cljs.pprint._STAR_print_suppress_namespaces_STAR_;
var _STAR_print_base_STAR__temp_val__28228 = new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_base_STAR_);
var _STAR_print_circle_STAR__temp_val__28229 = new cljs.core.Keyword(null,"circle","circle",1903212362).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_circle_STAR_);
var _STAR_print_length_STAR__temp_val__28230 = new cljs.core.Keyword(null,"length","length",588987862).cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_length_STAR_);
var _STAR_print_level_STAR__temp_val__28231 = new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_level_STAR_);
var _STAR_print_lines_STAR__temp_val__28232 = new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_lines_STAR_);
var _STAR_print_miser_width_STAR__temp_val__28233 = new cljs.core.Keyword(null,"miser-width","miser-width",-1310049437).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_miser_width_STAR_);
var _STAR_print_pprint_dispatch_STAR__temp_val__28234 = new cljs.core.Keyword(null,"dispatch","dispatch",1319337009).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_pprint_dispatch_STAR_);
var _STAR_print_pretty_STAR__temp_val__28235 = new cljs.core.Keyword(null,"pretty","pretty",-1916372486).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_pretty_STAR_);
var _STAR_print_radix_STAR__temp_val__28236 = new cljs.core.Keyword(null,"radix","radix",857016463).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_radix_STAR_);
var _STAR_print_readably_STAR__temp_val__28237 = new cljs.core.Keyword(null,"readably","readably",1129599760).cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_readably_STAR_);
var _STAR_print_right_margin_STAR__temp_val__28238 = new cljs.core.Keyword(null,"right-margin","right-margin",-810413306).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_right_margin_STAR_);
var _STAR_print_suppress_namespaces_STAR__temp_val__28239 = new cljs.core.Keyword(null,"suppress-namespaces","suppress-namespaces",2130686956).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_suppress_namespaces_STAR_);
(cljs.pprint._STAR_print_base_STAR_ = _STAR_print_base_STAR__temp_val__28228);

(cljs.pprint._STAR_print_circle_STAR_ = _STAR_print_circle_STAR__temp_val__28229);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__28230);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__28231);

(cljs.pprint._STAR_print_lines_STAR_ = _STAR_print_lines_STAR__temp_val__28232);

(cljs.pprint._STAR_print_miser_width_STAR_ = _STAR_print_miser_width_STAR__temp_val__28233);

(cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR__temp_val__28234);

(cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR__temp_val__28235);

(cljs.pprint._STAR_print_radix_STAR_ = _STAR_print_radix_STAR__temp_val__28236);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__28237);

(cljs.pprint._STAR_print_right_margin_STAR_ = _STAR_print_right_margin_STAR__temp_val__28238);

(cljs.pprint._STAR_print_suppress_namespaces_STAR_ = _STAR_print_suppress_namespaces_STAR__temp_val__28239);

try{try{var sb = (new goog.string.StringBuffer());
var optval = ((cljs.core.contains_QMARK_(options,new cljs.core.Keyword(null,"stream","stream",1534941648)))?new cljs.core.Keyword(null,"stream","stream",1534941648).cljs$core$IFn$_invoke$arity$1(options):true);
var base_writer = ((((optval === true) || ((optval == null))))?(new cljs.core.StringBufferWriter(sb)):optval);
if(cljs.core.truth_(cljs.pprint._STAR_print_pretty_STAR_)){
var base_writer__27240__auto___29872 = base_writer;
var new_writer__27241__auto___29873 = cljs.core.not(cljs.pprint.pretty_writer_QMARK_(base_writer__27240__auto___29872));
var _STAR_out_STAR__orig_val__28245_29874 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__28246_29875 = ((new_writer__27241__auto___29873)?cljs.pprint.make_pretty_writer(base_writer__27240__auto___29872,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_):base_writer__27240__auto___29872);
(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__28246_29875);

try{cljs.pprint.write_out(object);

cljs.pprint._ppflush(cljs.core._STAR_out_STAR_);
}finally {(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__28245_29874);
}} else {
var _STAR_out_STAR__orig_val__28247_29876 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__28248_29877 = base_writer;
(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__28248_29877);

try{cljs.pprint.pr.call(null,object);
}finally {(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__28247_29876);
}}

if(optval === true){
cljs.core.string_print(cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb));
} else {
}

if((optval == null)){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb);
} else {
return null;
}
}finally {}}finally {(cljs.pprint._STAR_print_suppress_namespaces_STAR_ = _STAR_print_suppress_namespaces_STAR__orig_val__28227);

(cljs.pprint._STAR_print_right_margin_STAR_ = _STAR_print_right_margin_STAR__orig_val__28226);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__28225);

(cljs.pprint._STAR_print_radix_STAR_ = _STAR_print_radix_STAR__orig_val__28224);

(cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR__orig_val__28223);

(cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR__orig_val__28222);

(cljs.pprint._STAR_print_miser_width_STAR_ = _STAR_print_miser_width_STAR__orig_val__28221);

(cljs.pprint._STAR_print_lines_STAR_ = _STAR_print_lines_STAR__orig_val__28220);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__28219);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__28218);

(cljs.pprint._STAR_print_circle_STAR_ = _STAR_print_circle_STAR__orig_val__28217);

(cljs.pprint._STAR_print_base_STAR_ = _STAR_print_base_STAR__orig_val__28216);
}}));

(cljs.pprint.write.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.pprint.write.cljs$lang$applyTo = (function (seq28214){
var G__28215 = cljs.core.first(seq28214);
var seq28214__$1 = cljs.core.next(seq28214);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28215,seq28214__$1);
}));

cljs.pprint.pprint = (function cljs$pprint$pprint(var_args){
var G__28255 = arguments.length;
switch (G__28255) {
case 1:
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1 = (function (object){
var sb = (new goog.string.StringBuffer());
var _STAR_out_STAR__orig_val__28256 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__28257 = (new cljs.core.StringBufferWriter(sb));
(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__28257);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2(object,cljs.core._STAR_out_STAR_);

return cljs.core.string_print(cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb));
}finally {(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__28256);
}}));

(cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2 = (function (object,writer){
var base_writer__27240__auto__ = writer;
var new_writer__27241__auto__ = cljs.core.not(cljs.pprint.pretty_writer_QMARK_(base_writer__27240__auto__));
var _STAR_out_STAR__orig_val__28258 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__28259 = ((new_writer__27241__auto__)?cljs.pprint.make_pretty_writer(base_writer__27240__auto__,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_):base_writer__27240__auto__);
(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__28259);

try{var _STAR_print_pretty_STAR__orig_val__28260_29883 = cljs.pprint._STAR_print_pretty_STAR_;
var _STAR_print_pretty_STAR__temp_val__28261_29884 = true;
(cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR__temp_val__28261_29884);

try{cljs.pprint.write_out(object);
}finally {(cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR__orig_val__28260_29883);
}
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.pprint.get_column(cljs.core._STAR_out_STAR_))))){
cljs.core._write(cljs.core._STAR_out_STAR_,"\n");
} else {
}

return cljs.pprint._ppflush(cljs.core._STAR_out_STAR_);
}finally {(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__28258);
}}));

(cljs.pprint.pprint.cljs$lang$maxFixedArity = 2);

cljs.pprint.set_pprint_dispatch = (function cljs$pprint$set_pprint_dispatch(function$){
(cljs.pprint._STAR_print_pprint_dispatch_STAR_ = function$);

return null;
});
cljs.pprint.check_enumerated_arg = (function cljs$pprint$check_enumerated_arg(arg,choices){
if(cljs.core.not((choices.cljs$core$IFn$_invoke$arity$1 ? choices.cljs$core$IFn$_invoke$arity$1(arg) : choices.call(null,arg)))){
throw (new Error(["Bad argument: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg),". It must be one of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(choices)].join('')));
} else {
return null;
}
});
cljs.pprint.level_exceeded = (function cljs$pprint$level_exceeded(){
var and__4115__auto__ = cljs.core._STAR_print_level_STAR_;
if(cljs.core.truth_(and__4115__auto__)){
return (cljs.pprint._STAR_current_level_STAR_ >= cljs.core._STAR_print_level_STAR_);
} else {
return and__4115__auto__;
}
});
/**
 * Print a conditional newline to a pretty printing stream. kind specifies if the
 *   newline is :linear, :miser, :fill, or :mandatory.
 * 
 *   This function is intended for use when writing custom dispatch functions.
 * 
 *   Output is sent to *out* which must be a pretty printing writer.
 */
cljs.pprint.pprint_newline = (function cljs$pprint$pprint_newline(kind){
cljs.pprint.check_enumerated_arg(kind,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mandatory","mandatory",542802336),null,new cljs.core.Keyword(null,"miser","miser",-556060186),null,new cljs.core.Keyword(null,"fill","fill",883462889),null,new cljs.core.Keyword(null,"linear","linear",872268697),null], null), null));

return cljs.pprint.nl(cljs.core._STAR_out_STAR_,kind);
});
/**
 * Create an indent at this point in the pretty printing stream. This defines how
 * following lines are indented. relative-to can be either :block or :current depending
 * whether the indent should be computed relative to the start of the logical block or
 * the current column position. n is an offset.
 * 
 * This function is intended for use when writing custom dispatch functions.
 * 
 * Output is sent to *out* which must be a pretty printing writer.
 */
cljs.pprint.pprint_indent = (function cljs$pprint$pprint_indent(relative_to,n){
cljs.pprint.check_enumerated_arg(relative_to,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"block","block",664686210),null,new cljs.core.Keyword(null,"current","current",-1088038603),null], null), null));

return cljs.pprint.indent(cljs.core._STAR_out_STAR_,relative_to,n);
});
/**
 * Tab at this point in the pretty printing stream. kind specifies whether the tab
 * is :line, :section, :line-relative, or :section-relative.
 * 
 * Colnum and colinc specify the target column and the increment to move the target
 * forward if the output is already past the original target.
 * 
 * This function is intended for use when writing custom dispatch functions.
 * 
 * Output is sent to *out* which must be a pretty printing writer.
 * 
 * THIS FUNCTION IS NOT YET IMPLEMENTED.
 */
cljs.pprint.pprint_tab = (function cljs$pprint$pprint_tab(kind,colnum,colinc){
cljs.pprint.check_enumerated_arg(kind,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"section","section",-300141526),null,new cljs.core.Keyword(null,"line","line",212345235),null,new cljs.core.Keyword(null,"line-relative","line-relative",1149548219),null,new cljs.core.Keyword(null,"section-relative","section-relative",-658298724),null], null), null));

throw (new Error("pprint-tab is not yet implemented"));
});
/**
 * An implementation of a Common Lisp compatible format function. cl-format formats its
 * arguments to an output stream or string based on the format control string given. It
 * supports sophisticated formatting of structured data.
 * 
 * Writer satisfies IWriter, true to output via *print-fn* or nil to output
 * to a string, format-in is the format control string and the remaining arguments
 * are the data to be formatted.
 * 
 * The format control string is a string to be output with embedded 'format directives'
 * describing how to format the various arguments passed in.
 * 
 * If writer is nil, cl-format returns the formatted result string. Otherwise, cl-format
 * returns nil.
 * 
 * For example:
 *  (let [results [46 38 22]]
 *      (cl-format true "There ~[are~;is~:;are~]~:* ~d result~:p: ~{~d~^, ~}~%"
 *                 (count results) results))
 * 
 * Prints via *print-fn*:
 *  There are 3 results: 46, 38, 22
 * 
 * Detailed documentation on format control strings is available in the "Common Lisp the
 * Language, 2nd edition", Chapter 22 (available online at:
 * http://www.cs.cmu.edu/afs/cs.cmu.edu/project/ai-repository/ai/html/cltl/clm/node200.html#SECTION002633000000000000000)
 * and in the Common Lisp HyperSpec at
 * http://www.lispworks.com/documentation/HyperSpec/Body/22_c.htm
 */
cljs.pprint.cl_format = (function cljs$pprint$cl_format(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29890 = arguments.length;
var i__4737__auto___29891 = (0);
while(true){
if((i__4737__auto___29891 < len__4736__auto___29890)){
args__4742__auto__.push((arguments[i__4737__auto___29891]));

var G__29892 = (i__4737__auto___29891 + (1));
i__4737__auto___29891 = G__29892;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic = (function (writer,format_in,args){
var compiled_format = ((typeof format_in === 'string')?cljs.pprint.compile_format(format_in):format_in);
var navigator = cljs.pprint.init_navigator(args);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3(writer,compiled_format,navigator);
}));

(cljs.pprint.cl_format.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs.pprint.cl_format.cljs$lang$applyTo = (function (seq28269){
var G__28270 = cljs.core.first(seq28269);
var seq28269__$1 = cljs.core.next(seq28269);
var G__28271 = cljs.core.first(seq28269__$1);
var seq28269__$2 = cljs.core.next(seq28269__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28270,G__28271,seq28269__$2);
}));

cljs.pprint._STAR_format_str_STAR_ = null;
cljs.pprint.format_error = (function cljs$pprint$format_error(message,offset){
var full_message = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(message),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint._STAR_format_str_STAR_),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(offset," "))),"^","\n"].join('');
throw Error(full_message);
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
cljs.pprint.arg_navigator = (function (seq,rest,pos,__meta,__extmap,__hash){
this.seq = seq;
this.rest = rest;
this.pos = pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cljs.pprint.arg_navigator.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k28277,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__28288 = k28277;
var G__28288__$1 = (((G__28288 instanceof cljs.core.Keyword))?G__28288.fqn:null);
switch (G__28288__$1) {
case "seq":
return self__.seq;

break;
case "rest":
return self__.rest;

break;
case "pos":
return self__.pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k28277,else__4383__auto__);

}
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__28293){
var vec__28294 = p__28293;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28294,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28294,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#cljs.pprint.arg-navigator{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"seq","seq",-1817803783),self__.seq],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rest","rest",-1241696419),self__.rest],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pos","pos",-864607220),self__.pos],null))], null),self__.__extmap));
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28276){
var self__ = this;
var G__28276__$1 = this;
return (new cljs.core.RecordIter((0),G__28276__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"seq","seq",-1817803783),new cljs.core.Keyword(null,"rest","rest",-1241696419),new cljs.core.Keyword(null,"pos","pos",-864607220)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,self__.__extmap,self__.__hash));
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-402038447 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this28278,other28279){
var self__ = this;
var this28278__$1 = this;
return (((!((other28279 == null)))) && ((this28278__$1.constructor === other28279.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28278__$1.seq,other28279.seq)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28278__$1.rest,other28279.rest)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28278__$1.pos,other28279.pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28278__$1.__extmap,other28279.__extmap)));
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pos","pos",-864607220),null,new cljs.core.Keyword(null,"seq","seq",-1817803783),null,new cljs.core.Keyword(null,"rest","rest",-1241696419),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__28276){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__28310 = cljs.core.keyword_identical_QMARK_;
var expr__28311 = k__4388__auto__;
if(cljs.core.truth_((pred__28310.cljs$core$IFn$_invoke$arity$2 ? pred__28310.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"seq","seq",-1817803783),expr__28311) : pred__28310.call(null,new cljs.core.Keyword(null,"seq","seq",-1817803783),expr__28311)))){
return (new cljs.pprint.arg_navigator(G__28276,self__.rest,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28310.cljs$core$IFn$_invoke$arity$2 ? pred__28310.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rest","rest",-1241696419),expr__28311) : pred__28310.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419),expr__28311)))){
return (new cljs.pprint.arg_navigator(self__.seq,G__28276,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28310.cljs$core$IFn$_invoke$arity$2 ? pred__28310.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pos","pos",-864607220),expr__28311) : pred__28310.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220),expr__28311)))){
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,G__28276,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__28276),null));
}
}
}
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"seq","seq",-1817803783),self__.seq,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"rest","rest",-1241696419),self__.rest,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"pos","pos",-864607220),self__.pos,null))], null),self__.__extmap));
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__28276){
var self__ = this;
var this__4379__auto____$1 = this;
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,G__28276,self__.__extmap,self__.__hash));
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(cljs.pprint.arg_navigator.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.Symbol(null,"rest","rest",398835108,null),new cljs.core.Symbol(null,"pos","pos",775924307,null)], null);
}));

(cljs.pprint.arg_navigator.cljs$lang$type = true);

(cljs.pprint.arg_navigator.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"cljs.pprint/arg-navigator",null,(1),null));
}));

(cljs.pprint.arg_navigator.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"cljs.pprint/arg-navigator");
}));

/**
 * Positional factory function for cljs.pprint/arg-navigator.
 */
cljs.pprint.__GT_arg_navigator = (function cljs$pprint$__GT_arg_navigator(seq,rest,pos){
return (new cljs.pprint.arg_navigator(seq,rest,pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/arg-navigator, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_arg_navigator = (function cljs$pprint$map__GT_arg_navigator(G__28283){
var extmap__4419__auto__ = (function (){var G__28319 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__28283,new cljs.core.Keyword(null,"seq","seq",-1817803783),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"rest","rest",-1241696419),new cljs.core.Keyword(null,"pos","pos",-864607220)], 0));
if(cljs.core.record_QMARK_(G__28283)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__28319);
} else {
return G__28319;
}
})();
return (new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(G__28283),new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(G__28283),new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(G__28283),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

/**
 * Create a new arg-navigator from the sequence with the position set to 0
 */
cljs.pprint.init_navigator = (function cljs$pprint$init_navigator(s){
var s__$1 = cljs.core.seq(s);
return (new cljs.pprint.arg_navigator(s__$1,s__$1,(0),null,null,null));
});
cljs.pprint.next_arg = (function cljs$pprint$next_arg(navigator){
var rst = new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator);
if(cljs.core.truth_(rst)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(rst),(new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.next(rst),(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator) + (1)),null,null,null))], null);
} else {
throw Error("Not enough arguments for format definition");
}
});
cljs.pprint.next_arg_or_nil = (function cljs$pprint$next_arg_or_nil(navigator){
var rst = new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator);
if(cljs.core.truth_(rst)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(rst),(new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.next(rst),(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator) + (1)),null,null,null))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,navigator], null);
}
});
cljs.pprint.get_format_arg = (function cljs$pprint$get_format_arg(navigator){
var vec__28322 = cljs.pprint.next_arg(navigator);
var raw_format = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28322,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28322,(1),null);
var compiled_format = ((typeof raw_format === 'string')?cljs.pprint.compile_format(raw_format):raw_format);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [compiled_format,navigator__$1], null);
});
cljs.pprint.absolute_reposition = (function cljs$pprint$absolute_reposition(navigator,position){
if((position >= new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator))){
var G__28325 = navigator;
var G__28326 = (new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator) - position);
return (cljs.pprint.relative_reposition.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.relative_reposition.cljs$core$IFn$_invoke$arity$2(G__28325,G__28326) : cljs.pprint.relative_reposition.call(null,G__28325,G__28326));
} else {
return (new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(position,new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(navigator)),position,null,null,null));
}
});
cljs.pprint.relative_reposition = (function cljs$pprint$relative_reposition(navigator,position){
var newpos = (new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator) + position);
if((position < (0))){
return cljs.pprint.absolute_reposition(navigator,newpos);
} else {
return (new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(position,new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator)),newpos,null,null,null));
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
cljs.pprint.compiled_directive = (function (func,def,params,offset,__meta,__extmap,__hash){
this.func = func;
this.def = def;
this.params = params;
this.offset = offset;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cljs.pprint.compiled_directive.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k28328,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__28332 = k28328;
var G__28332__$1 = (((G__28332 instanceof cljs.core.Keyword))?G__28332.fqn:null);
switch (G__28332__$1) {
case "func":
return self__.func;

break;
case "def":
return self__.def;

break;
case "params":
return self__.params;

break;
case "offset":
return self__.offset;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k28328,else__4383__auto__);

}
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__28333){
var vec__28334 = p__28333;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28334,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28334,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#cljs.pprint.compiled-directive{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"func","func",-238706040),self__.func],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"def","def",-1043430536),self__.def],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"offset","offset",296498311),self__.offset],null))], null),self__.__extmap));
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28327){
var self__ = this;
var G__28327__$1 = this;
return (new cljs.core.RecordIter((0),G__28327__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"func","func",-238706040),new cljs.core.Keyword(null,"def","def",-1043430536),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"offset","offset",296498311)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,self__.__extmap,self__.__hash));
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-829256337 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this28329,other28330){
var self__ = this;
var this28329__$1 = this;
return (((!((other28330 == null)))) && ((this28329__$1.constructor === other28330.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28329__$1.func,other28330.func)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28329__$1.def,other28330.def)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28329__$1.params,other28330.params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28329__$1.offset,other28330.offset)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28329__$1.__extmap,other28330.__extmap)));
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"offset","offset",296498311),null,new cljs.core.Keyword(null,"func","func",-238706040),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"def","def",-1043430536),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__28327){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__28345 = cljs.core.keyword_identical_QMARK_;
var expr__28346 = k__4388__auto__;
if(cljs.core.truth_((pred__28345.cljs$core$IFn$_invoke$arity$2 ? pred__28345.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"func","func",-238706040),expr__28346) : pred__28345.call(null,new cljs.core.Keyword(null,"func","func",-238706040),expr__28346)))){
return (new cljs.pprint.compiled_directive(G__28327,self__.def,self__.params,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28345.cljs$core$IFn$_invoke$arity$2 ? pred__28345.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"def","def",-1043430536),expr__28346) : pred__28345.call(null,new cljs.core.Keyword(null,"def","def",-1043430536),expr__28346)))){
return (new cljs.pprint.compiled_directive(self__.func,G__28327,self__.params,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28345.cljs$core$IFn$_invoke$arity$2 ? pred__28345.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),expr__28346) : pred__28345.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__28346)))){
return (new cljs.pprint.compiled_directive(self__.func,self__.def,G__28327,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28345.cljs$core$IFn$_invoke$arity$2 ? pred__28345.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"offset","offset",296498311),expr__28346) : pred__28345.call(null,new cljs.core.Keyword(null,"offset","offset",296498311),expr__28346)))){
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,G__28327,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__28327),null));
}
}
}
}
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"func","func",-238706040),self__.func,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"def","def",-1043430536),self__.def,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"params","params",710516235),self__.params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"offset","offset",296498311),self__.offset,null))], null),self__.__extmap));
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__28327){
var self__ = this;
var this__4379__auto____$1 = this;
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,G__28327,self__.__extmap,self__.__hash));
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(cljs.pprint.compiled_directive.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"func","func",1401825487,null),new cljs.core.Symbol(null,"def","def",597100991,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"offset","offset",1937029838,null)], null);
}));

(cljs.pprint.compiled_directive.cljs$lang$type = true);

(cljs.pprint.compiled_directive.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"cljs.pprint/compiled-directive",null,(1),null));
}));

(cljs.pprint.compiled_directive.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"cljs.pprint/compiled-directive");
}));

/**
 * Positional factory function for cljs.pprint/compiled-directive.
 */
cljs.pprint.__GT_compiled_directive = (function cljs$pprint$__GT_compiled_directive(func,def,params,offset){
return (new cljs.pprint.compiled_directive(func,def,params,offset,null,null,null));
});

/**
 * Factory function for cljs.pprint/compiled-directive, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_compiled_directive = (function cljs$pprint$map__GT_compiled_directive(G__28331){
var extmap__4419__auto__ = (function (){var G__28348 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__28331,new cljs.core.Keyword(null,"func","func",-238706040),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"def","def",-1043430536),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"offset","offset",296498311)], 0));
if(cljs.core.record_QMARK_(G__28331)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__28348);
} else {
return G__28348;
}
})();
return (new cljs.pprint.compiled_directive(new cljs.core.Keyword(null,"func","func",-238706040).cljs$core$IFn$_invoke$arity$1(G__28331),new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(G__28331),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__28331),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(G__28331),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

cljs.pprint.realize_parameter = (function cljs$pprint$realize_parameter(p__28354,navigator){
var vec__28355 = p__28354;
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28355,(0),null);
var vec__28358 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28355,(1),null);
var raw_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28358,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28358,(1),null);
var vec__28364 = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),param))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_val,navigator], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(raw_val,new cljs.core.Keyword(null,"parameter-from-args","parameter-from-args",-758446196)))?cljs.pprint.next_arg(navigator):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(raw_val,new cljs.core.Keyword(null,"remaining-arg-count","remaining-arg-count",-1216589335)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count(new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator)),navigator], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_val,navigator], null)
)));
var real_param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28364,(0),null);
var new_navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28364,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [real_param,offset], null)], null),new_navigator], null);
});
cljs.pprint.realize_parameter_list = (function cljs$pprint$realize_parameter_list(parameter_map,navigator){
var vec__28367 = cljs.pprint.map_passing_context(cljs.pprint.realize_parameter,navigator,parameter_map);
var pairs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28367,(0),null);
var new_navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28367,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,pairs),new_navigator], null);
});
cljs.pprint.special_radix_markers = new cljs.core.PersistentArrayMap(null, 3, [(2),"#b",(8),"#o",(16),"#x"], null);
cljs.pprint.format_simple_number = (function cljs$pprint$format_simple_number(n){
if(cljs.core.integer_QMARK_(n)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.pprint._STAR_print_base_STAR_,(10))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),(cljs.core.truth_(cljs.pprint._STAR_print_radix_STAR_)?".":null)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.pprint._STAR_print_radix_STAR_)?(function (){var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.special_radix_markers,cljs.pprint._STAR_print_base_STAR_);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint._STAR_print_base_STAR_),"r"].join('');
}
})():null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint.opt_base_str(cljs.pprint._STAR_print_base_STAR_,n))].join('');
}
} else {
return null;

}
});
cljs.pprint.format_ascii = (function cljs$pprint$format_ascii(print_func,params,arg_navigator,offsets){
var vec__28375 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28375,(0),null);
var arg_navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28375,(1),null);
var base_output = (function (){var or__4126__auto__ = cljs.pprint.format_simple_number(arg);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (print_func.cljs$core$IFn$_invoke$arity$1 ? print_func.cljs$core$IFn$_invoke$arity$1(arg) : print_func.call(null,arg));
}
})();
var base_width = base_output.length;
var min_width = (base_width + new cljs.core.Keyword(null,"minpad","minpad",323570901).cljs$core$IFn$_invoke$arity$1(params));
var width = (((min_width >= new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params)))?min_width:(min_width + ((cljs.core.quot(((new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params) - min_width) - (1)),new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params)) + (1)) * new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params))));
var chars = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((width - base_width),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)));
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chars),cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_output)].join('')], 0));
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_output),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chars)].join('')], 0));
}

return arg_navigator__$1;
});
/**
 * returns true if a number is actually an integer (that is, has no fractional part)
 */
cljs.pprint.integral_QMARK_ = (function cljs$pprint$integral_QMARK_(x){
if(cljs.core.integer_QMARK_(x)){
return true;
} else {
if(cljs.pprint.float_QMARK_(x)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,Math.floor(x));
} else {
return false;

}
}
});
/**
 * Return the list of remainders (essentially the 'digits') of val in the given base
 */
cljs.pprint.remainders = (function cljs$pprint$remainders(base,val){
return cljs.core.reverse(cljs.core.first(cljs.pprint.consume((function (p1__28382_SHARP_){
if((p1__28382_SHARP_ > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rem(p1__28382_SHARP_,base),cljs.core.quot(p1__28382_SHARP_,base)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null);
}
}),val)));
});
/**
 * Return val as a string in the given base
 */
cljs.pprint.base_str = (function cljs$pprint$base_str(base,val){
if((val === (0))){
return "0";
} else {
var xlated_val = val
;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__28383_SHARP_){
if((p1__28383_SHARP_ < (10))){
return cljs.core.char$((cljs.pprint.char_code("0") + p1__28383_SHARP_));
} else {
return cljs.core.char$((cljs.pprint.char_code("a") + (p1__28383_SHARP_ - (10))));
}
}),cljs.pprint.remainders(base,val)));
}
});
cljs.pprint.javascript_base_formats = new cljs.core.PersistentArrayMap(null, 3, [(8),"%o",(10),"%d",(16),"%x"], null);
/**
 * Return val as a string in the given base. No cljs format, so no improved performance.
 */
cljs.pprint.opt_base_str = (function cljs$pprint$opt_base_str(base,val){
return cljs.pprint.base_str(base,val);
});
cljs.pprint.group_by_STAR_ = (function cljs$pprint$group_by_STAR_(unit,lis){
return cljs.core.reverse(cljs.core.first(cljs.pprint.consume((function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(cljs.core.reverse(cljs.core.take.cljs$core$IFn$_invoke$arity$2(unit,x))),cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(unit,x))], null);
}),cljs.core.reverse(lis))));
});
cljs.pprint.format_integer = (function cljs$pprint$format_integer(base,params,arg_navigator,offsets){
var vec__28388 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28388,(0),null);
var arg_navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28388,(1),null);
if(cljs.pprint.integral_QMARK_(arg)){
var neg_29939 = (arg < (0));
var pos_arg_29940 = ((neg_29939)?(- arg):arg);
var raw_str_29941 = cljs.pprint.opt_base_str(base,pos_arg_29940);
var group_str_29942 = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?(function (){var groups = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__28387_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,p1__28387_SHARP_);
}),cljs.pprint.group_by_STAR_(new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083).cljs$core$IFn$_invoke$arity$1(params),raw_str_29941));
var commas = cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(groups),new cljs.core.Keyword(null,"commachar","commachar",652859327).cljs$core$IFn$_invoke$arity$1(params));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.next(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(commas,groups)));
})():raw_str_29941);
var signed_str_29943 = ((neg_29939)?["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_str_29942)].join(''):(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?["+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_str_29942)].join(''):group_str_29942
));
var padded_str_29944 = (((signed_str_29943.length < new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params) - signed_str_29943.length),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(signed_str_29943)].join(''):signed_str_29943);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([padded_str_29944], 0));
} else {
cljs.pprint.format_ascii(cljs.core.print_str,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"colinc","colinc",-584873385),(1),new cljs.core.Keyword(null,"minpad","minpad",323570901),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"at","at",1476951349),true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),null);
}

return arg_navigator__$1;
});
cljs.pprint.english_cardinal_units = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, ["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"], null);
cljs.pprint.english_ordinal_units = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, ["zeroth","first","second","third","fourth","fifth","sixth","seventh","eighth","ninth","tenth","eleventh","twelfth","thirteenth","fourteenth","fifteenth","sixteenth","seventeenth","eighteenth","nineteenth"], null);
cljs.pprint.english_cardinal_tens = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"], null);
cljs.pprint.english_ordinal_tens = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","","twentieth","thirtieth","fortieth","fiftieth","sixtieth","seventieth","eightieth","ninetieth"], null);
cljs.pprint.english_scale_numbers = new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","thousand","million","billion","trillion","quadrillion","quintillion","sextillion","septillion","octillion","nonillion","decillion","undecillion","duodecillion","tredecillion","quattuordecillion","quindecillion","sexdecillion","septendecillion","octodecillion","novemdecillion","vigintillion"], null);
/**
 * Convert a number less than 1000 to a cardinal english string
 */
cljs.pprint.format_simple_cardinal = (function cljs$pprint$format_simple_cardinal(num){
var hundreds = cljs.core.quot(num,(100));
var tens = cljs.core.rem(num,(100));
return [(((hundreds > (0)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,hundreds))," hundred"].join(''):null),(((((hundreds > (0))) && ((tens > (0)))))?" ":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((tens > (0)))?(((tens < (20)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,tens):(function (){var ten_digit = cljs.core.quot(tens,(10));
var unit_digit = cljs.core.rem(tens,(10));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((ten_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_tens,ten_digit):null)),(((((ten_digit > (0))) && ((unit_digit > (0)))))?"-":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((unit_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,unit_digit):null))].join('');
})()):null))].join('');
});
/**
 * Take a sequence of parts, add scale numbers (e.g., million) and combine into a string
 *   offset is a factor of 10^3 to multiply by
 */
cljs.pprint.add_english_scales = (function cljs$pprint$add_english_scales(parts,offset){
var cnt = cljs.core.count(parts);
var acc = cljs.core.PersistentVector.EMPTY;
var pos = (cnt - (1));
var this$ = cljs.core.first(parts);
var remainder = cljs.core.next(parts);
while(true){
if((remainder == null)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(", ",acc))),(((((!(cljs.core.empty_QMARK_(this$)))) && ((!(cljs.core.empty_QMARK_(acc))))))?", ":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$),(((((!(cljs.core.empty_QMARK_(this$)))) && (((pos + offset) > (0)))))?[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_scale_numbers,(pos + offset)))].join(''):null)].join('');
} else {
var G__29949 = ((cljs.core.empty_QMARK_(this$))?acc:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_scale_numbers,(pos + offset)))].join('')));
var G__29950 = (pos - (1));
var G__29951 = cljs.core.first(remainder);
var G__29952 = cljs.core.next(remainder);
acc = G__29949;
pos = G__29950;
this$ = G__29951;
remainder = G__29952;
continue;
}
break;
}
});
cljs.pprint.format_cardinal_english = (function cljs$pprint$format_cardinal_english(params,navigator,offsets){
var vec__28407 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28407,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28407,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),arg)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["zero"], 0));
} else {
var abs_arg_29953 = (((arg < (0)))?(- arg):arg);
var parts_29954 = cljs.pprint.remainders((1000),abs_arg_29953);
if((cljs.core.count(parts_29954) <= cljs.core.count(cljs.pprint.english_scale_numbers))){
var parts_strs_29955 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.pprint.format_simple_cardinal,parts_29954);
var full_str_29956 = cljs.pprint.add_english_scales(parts_strs_29955,(0));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[(((arg < (0)))?"minus ":null),full_str_29956].join('')], 0));
} else {
cljs.pprint.format_integer((10),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530)," ",new cljs.core.Keyword(null,"commachar","commachar",652859327),",",new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(3),new cljs.core.Keyword(null,"colon","colon",-965200945),true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530),(0),new cljs.core.Keyword(null,"commachar","commachar",652859327),(0),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(0)], null));
}
}

return navigator__$1;
});
/**
 * Convert a number less than 1000 to a ordinal english string
 *   Note this should only be used for the last one in the sequence
 */
cljs.pprint.format_simple_ordinal = (function cljs$pprint$format_simple_ordinal(num){
var hundreds = cljs.core.quot(num,(100));
var tens = cljs.core.rem(num,(100));
return [(((hundreds > (0)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,hundreds))," hundred"].join(''):null),(((((hundreds > (0))) && ((tens > (0)))))?" ":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((tens > (0)))?(((tens < (20)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_ordinal_units,tens):(function (){var ten_digit = cljs.core.quot(tens,(10));
var unit_digit = cljs.core.rem(tens,(10));
if((((ten_digit > (0))) && ((!((unit_digit > (0))))))){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_ordinal_tens,ten_digit);
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((ten_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_tens,ten_digit):null)),(((((ten_digit > (0))) && ((unit_digit > (0)))))?"-":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((unit_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_ordinal_units,unit_digit):null))].join('');
}
})()):(((hundreds > (0)))?"th":null)))].join('');
});
cljs.pprint.format_ordinal_english = (function cljs$pprint$format_ordinal_english(params,navigator,offsets){
var vec__28417 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28417,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28417,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),arg)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["zeroth"], 0));
} else {
var abs_arg_29958 = (((arg < (0)))?(- arg):arg);
var parts_29959 = cljs.pprint.remainders((1000),abs_arg_29958);
if((cljs.core.count(parts_29959) <= cljs.core.count(cljs.pprint.english_scale_numbers))){
var parts_strs_29961 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.pprint.format_simple_cardinal,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(parts_29959));
var head_str_29962 = cljs.pprint.add_english_scales(parts_strs_29961,(1));
var tail_str_29963 = cljs.pprint.format_simple_ordinal(cljs.core.last(parts_29959));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[(((arg < (0)))?"minus ":null),(((((!(cljs.core.empty_QMARK_(head_str_29962)))) && ((!(cljs.core.empty_QMARK_(tail_str_29963))))))?[head_str_29962,", ",tail_str_29963].join(''):(((!(cljs.core.empty_QMARK_(head_str_29962))))?[head_str_29962,"th"].join(''):tail_str_29963
))].join('')], 0));
} else {
cljs.pprint.format_integer((10),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530)," ",new cljs.core.Keyword(null,"commachar","commachar",652859327),",",new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(3),new cljs.core.Keyword(null,"colon","colon",-965200945),true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530),(0),new cljs.core.Keyword(null,"commachar","commachar",652859327),(0),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(0)], null));

var low_two_digits_29969 = cljs.core.rem(arg,(100));
var not_teens_29970 = ((((11) < low_two_digits_29969)) || (((19) > low_two_digits_29969)));
var low_digit_29971 = cljs.core.rem(low_two_digits_29969,(10));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(((((low_digit_29971 === (1))) && (not_teens_29970)))?"st":(((((low_digit_29971 === (2))) && (not_teens_29970)))?"nd":(((((low_digit_29971 === (3))) && (not_teens_29970)))?"rd":"th"
)))], 0));
}
}

return navigator__$1;
});
cljs.pprint.old_roman_table = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["I","II","III","IIII","V","VI","VII","VIII","VIIII"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","XX","XXX","XXXX","L","LX","LXX","LXXX","LXXXX"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C","CC","CCC","CCCC","D","DC","DCC","DCCC","DCCCC"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M","MM","MMM"], null)], null);
cljs.pprint.new_roman_table = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["I","II","III","IV","V","VI","VII","VIII","IX"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","XX","XXX","XL","L","LX","LXX","LXXX","XC"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C","CC","CCC","CD","D","DC","DCC","DCCC","CM"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M","MM","MMM"], null)], null);
/**
 * Format a roman numeral using the specified look-up table
 */
cljs.pprint.format_roman = (function cljs$pprint$format_roman(table,params,navigator,offsets){
var vec__28424 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28424,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28424,(1),null);
if(((typeof arg === 'number') && ((arg > (0))) && ((arg < (4000))))){
var digits_29973 = cljs.pprint.remainders((10),arg);
var acc_29974 = cljs.core.PersistentVector.EMPTY;
var pos_29975 = (cljs.core.count(digits_29973) - (1));
var digits_29976__$1 = digits_29973;
while(true){
if(cljs.core.empty_QMARK_(digits_29976__$1)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,acc_29974)], 0));
} else {
var digit_29977 = cljs.core.first(digits_29976__$1);
var G__29978 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),digit_29977))?acc_29974:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc_29974,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(table,pos_29975),(digit_29977 - (1)))));
var G__29979 = (pos_29975 - (1));
var G__29980 = cljs.core.next(digits_29976__$1);
acc_29974 = G__29978;
pos_29975 = G__29979;
digits_29976__$1 = G__29980;
continue;
}
break;
}
} else {
cljs.pprint.format_integer((10),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530)," ",new cljs.core.Keyword(null,"commachar","commachar",652859327),",",new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(3),new cljs.core.Keyword(null,"colon","colon",-965200945),true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530),(0),new cljs.core.Keyword(null,"commachar","commachar",652859327),(0),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(0)], null));
}

return navigator__$1;
});
cljs.pprint.format_old_roman = (function cljs$pprint$format_old_roman(params,navigator,offsets){
return cljs.pprint.format_roman(cljs.pprint.old_roman_table,params,navigator,offsets);
});
cljs.pprint.format_new_roman = (function cljs$pprint$format_new_roman(params,navigator,offsets){
return cljs.pprint.format_roman(cljs.pprint.new_roman_table,params,navigator,offsets);
});
cljs.pprint.special_chars = new cljs.core.PersistentArrayMap(null, 5, [(8),"Backspace",(9),"Tab",(10),"Newline",(13),"Return",(32),"Space"], null);
cljs.pprint.pretty_character = (function cljs$pprint$pretty_character(params,navigator,offsets){
var vec__28433 = cljs.pprint.next_arg(navigator);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28433,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28433,(1),null);
var as_int = cljs.pprint.char_code(c);
var base_char = (as_int & (127));
var meta = (as_int & (128));
var special = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.special_chars,base_char);
if((meta > (0))){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Meta-"], 0));
} else {
}

cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(special)?special:(((base_char < (32)))?["Control-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.char$((base_char + (64))))].join(''):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(base_char,(127)))?"Control-?":cljs.core.char$(base_char)
)))], 0));

return navigator__$1;
});
cljs.pprint.readable_character = (function cljs$pprint$readable_character(params,navigator,offsets){
var vec__28437 = cljs.pprint.next_arg(navigator);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28437,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28437,(1),null);
var pred__28442_29991 = cljs.core._EQ_;
var expr__28443_29992 = new cljs.core.Keyword(null,"char-format","char-format",-1016499218).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_((function (){var G__28446 = "o";
var G__28447 = expr__28443_29992;
return (pred__28442_29991.cljs$core$IFn$_invoke$arity$2 ? pred__28442_29991.cljs$core$IFn$_invoke$arity$2(G__28446,G__28447) : pred__28442_29991.call(null,G__28446,G__28447));
})())){
cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(true,"\\o~3, '0o",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.pprint.char_code(c)], 0));
} else {
if(cljs.core.truth_((function (){var G__28448 = "u";
var G__28449 = expr__28443_29992;
return (pred__28442_29991.cljs$core$IFn$_invoke$arity$2 ? pred__28442_29991.cljs$core$IFn$_invoke$arity$2(G__28448,G__28449) : pred__28442_29991.call(null,G__28448,G__28449));
})())){
cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(true,"\\u~4, '0x",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.pprint.char_code(c)], 0));
} else {
if(cljs.core.truth_((pred__28442_29991.cljs$core$IFn$_invoke$arity$2 ? pred__28442_29991.cljs$core$IFn$_invoke$arity$2(null,expr__28443_29992) : pred__28442_29991.call(null,null,expr__28443_29992)))){
cljs.pprint.print_char(c);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__28443_29992)].join('')));
}
}
}

return navigator__$1;
});
cljs.pprint.plain_character = (function cljs$pprint$plain_character(params,navigator,offsets){
var vec__28452 = cljs.pprint.next_arg(navigator);
var char$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28452,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28452,(1),null);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([char$], 0));

return navigator__$1;
});
cljs.pprint.abort_QMARK_ = (function cljs$pprint$abort_QMARK_(context){
var token = cljs.core.first(context);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),token)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"colon-up-arrow","colon-up-arrow",244853007),token)));
});
cljs.pprint.execute_sub_format = (function cljs$pprint$execute_sub_format(format,args,base_args){
return cljs.core.second(cljs.pprint.map_passing_context((function (element,context){
if(cljs.pprint.abort_QMARK_(context)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,context], null);
} else {
var vec__28460 = cljs.pprint.realize_parameter_list(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(element),context);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28460,(0),null);
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28460,(1),null);
var vec__28463 = cljs.pprint.unzip_map(params);
var params__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28463,(0),null);
var offsets = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28463,(1),null);
var params__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params__$1,new cljs.core.Keyword(null,"base-args","base-args",-1268706822),base_args);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"func","func",-238706040).cljs$core$IFn$_invoke$arity$1(element),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [params__$2,args__$1,offsets], null))], null);
}
}),args,format));
});
/**
 * Produce string parts for the mantissa (normalize 1-9) and exponent
 */
cljs.pprint.float_parts_base = (function cljs$pprint$float_parts_base(f){
var s = clojure.string.lower_case(cljs.core.str.cljs$core$IFn$_invoke$arity$1(f));
var exploc = s.indexOf("e");
var dotloc = s.indexOf(".");
if((exploc < (0))){
if((dotloc < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,cljs.core.str.cljs$core$IFn$_invoke$arity$1((((s).length) - (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),dotloc),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(dotloc + (1)))].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1((dotloc - (1)))], null);
}
} else {
if((dotloc < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),exploc),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(exploc + (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(1)),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(2),exploc)].join(''),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(exploc + (1)))], null);
}
}
});
/**
 * Take care of leading and trailing zeros in decomposed floats
 */
cljs.pprint.float_parts = (function cljs$pprint$float_parts(f){
var vec__28472 = cljs.pprint.float_parts_base(f);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28472,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28472,(1),null);
var m1 = cljs.pprint.rtrim(m,"0");
var m2 = cljs.pprint.ltrim(m1,"0");
var delta = (cljs.core.count(m1) - cljs.core.count(m2));
var e__$1 = (((((cljs.core.count(e) > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(e,(0)),"+"))))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(e,(1)):e);
if(cljs.core.empty_QMARK_(m2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0",(0)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m2,(parseInt(e__$1,(10)) - delta)], null);
}
});
/**
 * Assumption: The input string consists of one or more decimal digits,
 *   and no other characters. Return a string containing one or more
 *   decimal digits containing a decimal number one larger than the input
 *   string. The output string will always be the same length as the input
 *   string, or one character longer.
 */
cljs.pprint.inc_s = (function cljs$pprint$inc_s(s){
var len_1 = (cljs.core.count(s) - (1));
var i = (len_1 | (0));
while(true){
if((i < (0))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,"1",cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((len_1 + (1)),"0"));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("9",s.charAt(i))){
var G__30007 = (i - (1));
i = G__30007;
continue;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.str,cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),i),cljs.core.char$((cljs.pprint.char_code(s.charAt(i)) + (1))),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((len_1 - i),"0"));

}
}
break;
}
});
cljs.pprint.round_str = (function cljs$pprint$round_str(m,e,d,w){
if(cljs.core.truth_((function (){var or__4126__auto__ = d;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return w;
}
})())){
var len = cljs.core.count(m);
var w__$1 = (cljs.core.truth_(w)?(function (){var x__4214__auto__ = (2);
var y__4215__auto__ = w;
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})():(0));
var round_pos = (cljs.core.truth_(d)?((e + d) + (1)):(((e >= (0)))?(function (){var x__4214__auto__ = (e + (1));
var y__4215__auto__ = (w__$1 - (1));
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})():(w__$1 + e)
));
var vec__28479 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(round_pos,(0)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [["0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),(e + (1)),(1),(len + (1))], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,round_pos,len], null));
var m1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28479,(0),null);
var e1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28479,(1),null);
var round_pos__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28479,(2),null);
var len__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28479,(3),null);
if(cljs.core.truth_(round_pos__$1)){
if((round_pos__$1 < (0))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0",(0),false], null);
} else {
if((len__$1 > round_pos__$1)){
var round_char = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m1,round_pos__$1);
var result = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(m1,(0),round_pos__$1);
if((cljs.pprint.char_code(round_char) >= cljs.pprint.char_code("5"))){
var round_up_result = cljs.pprint.inc_s(result);
var expanded = (cljs.core.count(round_up_result) > ((result).length));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((expanded)?cljs.core.subs.cljs$core$IFn$_invoke$arity$3(round_up_result,(0),(cljs.core.count(round_up_result) - (1))):round_up_result),e1,expanded], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,e1,false], null);
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
});
cljs.pprint.expand_fixed = (function cljs$pprint$expand_fixed(m,e,d){
var vec__28488 = (((e < (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((- e) - (1)),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),(-1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e], null));
var m1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28488,(0),null);
var e1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28488,(1),null);
var len = cljs.core.count(m1);
var target_len = (cljs.core.truth_(d)?((e1 + d) + (1)):(e1 + (1)));
if((len < target_len)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(m1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((target_len - len),"0")))].join('');
} else {
return m1;
}
});
/**
 * Insert the decimal point at the right spot in the number to match an exponent
 */
cljs.pprint.insert_decimal = (function cljs$pprint$insert_decimal(m,e){
if((e < (0))){
return [".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join('');
} else {
var loc = (e + (1));
return [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(m,(0),loc),".",cljs.core.subs.cljs$core$IFn$_invoke$arity$2(m,loc)].join('');
}
});
cljs.pprint.get_fixed = (function cljs$pprint$get_fixed(m,e,d){
return cljs.pprint.insert_decimal(cljs.pprint.expand_fixed(m,e,d),e);
});
/**
 * Insert the decimal point at the right spot in the number to match an exponent
 */
cljs.pprint.insert_scaled_decimal = (function cljs$pprint$insert_scaled_decimal(m,k){
if((k < (0))){
return [".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join('');
} else {
return [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(m,(0),k),".",cljs.core.subs.cljs$core$IFn$_invoke$arity$2(m,k)].join('');
}
});
cljs.pprint.convert_ratio = (function cljs$pprint$convert_ratio(x){
return x;
});
cljs.pprint.fixed_float = (function cljs$pprint$fixed_float(params,navigator,offsets){
var w = new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(params);
var d = new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(params);
var vec__28510 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28510,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28510,(1),null);
var vec__28513 = (((arg < (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-",(- arg)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["+",arg], null));
var sign = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28513,(0),null);
var abs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28513,(1),null);
var abs__$1 = cljs.pprint.convert_ratio(abs);
var vec__28516 = cljs.pprint.float_parts(abs__$1);
var mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28516,(0),null);
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28516,(1),null);
var scaled_exp = (exp + new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(params));
var add_sign = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (arg < (0));
}
})();
var append_zero = ((cljs.core.not(d)) && (((cljs.core.count(mantissa) - (1)) <= scaled_exp)));
var vec__28519 = cljs.pprint.round_str(mantissa,scaled_exp,d,(cljs.core.truth_(w)?(w - (cljs.core.truth_(add_sign)?(1):(0))):null));
var rounded_mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28519,(0),null);
var scaled_exp__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28519,(1),null);
var expanded = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28519,(2),null);
var fixed_repr = cljs.pprint.get_fixed(rounded_mantissa,(cljs.core.truth_(expanded)?(scaled_exp__$1 + (1)):scaled_exp__$1),d);
var fixed_repr__$1 = (cljs.core.truth_((function (){var and__4115__auto__ = w;
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = d;
if(cljs.core.truth_(and__4115__auto____$1)){
return (((d >= (1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fixed_repr.charAt((0)),"0")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fixed_repr.charAt((1)),".")) && ((((fixed_repr).length) > (w - (cljs.core.truth_(add_sign)?(1):(0))))));
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
})())?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(fixed_repr,(1)):fixed_repr);
var prepend_zero = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(fixed_repr__$1),".");
if(cljs.core.truth_(w)){
var len_30027 = ((fixed_repr__$1).length);
var signed_len_30028 = (cljs.core.truth_(add_sign)?(len_30027 + (1)):len_30027);
var prepend_zero_30029__$1 = ((prepend_zero) && ((!((signed_len_30028 >= w)))));
var append_zero_30030__$1 = ((append_zero) && ((!((signed_len_30028 >= w)))));
var full_len_30031 = ((((prepend_zero_30029__$1) || (append_zero_30030__$1)))?(signed_len_30028 + (1)):signed_len_30028);
if(cljs.core.truth_((((full_len_30031 > w))?new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params):false))){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(w,new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params)))], 0));
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((w - full_len_30031),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign)?sign:null)),((prepend_zero_30029__$1)?"0":null),fixed_repr__$1,((append_zero_30030__$1)?"0":null)].join('')], 0));
}
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign)?sign:null)),((prepend_zero)?"0":null),fixed_repr__$1,((append_zero)?"0":null)].join('')], 0));
}

return navigator__$1;
});
cljs.pprint.exponential_float = (function cljs$pprint$exponential_float(params,navigator,offset){
var vec__28547 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28547,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28547,(1),null);
var arg__$1 = cljs.pprint.convert_ratio(arg);
var G__28553_30041 = cljs.pprint.float_parts((((arg__$1 < (0)))?(- arg__$1):arg__$1));
var vec__28554_30042 = G__28553_30041;
var mantissa_30043 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28554_30042,(0),null);
var exp_30044 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28554_30042,(1),null);
var G__28553_30045__$1 = G__28553_30041;
while(true){
var vec__28557_30046 = G__28553_30045__$1;
var mantissa_30047__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28557_30046,(0),null);
var exp_30048__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28557_30046,(1),null);
var w_30049 = new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(params);
var d_30050 = new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(params);
var e_30051 = new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(params);
var k_30052 = new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(params);
var expchar_30053 = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"exponentchar","exponentchar",1986664222).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "E";
}
})();
var add_sign_30054 = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (arg__$1 < (0));
}
})();
var prepend_zero_30055 = (k_30052 <= (0));
var scaled_exp_30056 = (exp_30048__$1 - (k_30052 - (1)));
var scaled_exp_str_30057 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.abs(scaled_exp_30056));
var scaled_exp_str_30058__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(expchar_30053),(((scaled_exp_30056 < (0)))?"-":"+"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(e_30051)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((e_30051 - ((scaled_exp_str_30057).length)),"0")):null)),scaled_exp_str_30057].join('');
var exp_width_30059 = ((scaled_exp_str_30058__$1).length);
var base_mantissa_width_30060 = cljs.core.count(mantissa_30047__$1);
var scaled_mantissa_30061 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((- k_30052),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mantissa_30047__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(d_30050)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((d_30050 - (base_mantissa_width_30060 - (1))) - (((k_30052 < (0)))?(- k_30052):(0))),"0")):null))].join('');
var w_mantissa_30062 = (cljs.core.truth_(w_30049)?(w_30049 - exp_width_30059):null);
var vec__28561_30063 = cljs.pprint.round_str(scaled_mantissa_30061,(0),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k_30052,(0)))?(d_30050 - (1)):(((k_30052 > (0)))?d_30050:(((k_30052 < (0)))?(d_30050 - (1)):null))),(cljs.core.truth_(w_mantissa_30062)?(w_mantissa_30062 - (cljs.core.truth_(add_sign_30054)?(1):(0))):null));
var rounded_mantissa_30064 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28561_30063,(0),null);
var __30065 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28561_30063,(1),null);
var incr_exp_30066 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28561_30063,(2),null);
var full_mantissa_30067 = cljs.pprint.insert_scaled_decimal(rounded_mantissa_30064,k_30052);
var append_zero_30068 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k_30052,cljs.core.count(rounded_mantissa_30064))) && ((d_30050 == null)));
if(cljs.core.not(incr_exp_30066)){
if(cljs.core.truth_(w_30049)){
var len_30078 = (((full_mantissa_30067).length) + exp_width_30059);
var signed_len_30079 = (cljs.core.truth_(add_sign_30054)?(len_30078 + (1)):len_30078);
var prepend_zero_30080__$1 = ((prepend_zero_30055) && ((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(signed_len_30079,w_30049)))));
var full_len_30081 = ((prepend_zero_30080__$1)?(signed_len_30079 + (1)):signed_len_30079);
var append_zero_30082__$1 = ((append_zero_30068) && ((full_len_30081 < w_30049)));
if(cljs.core.truth_((function (){var and__4115__auto__ = (function (){var or__4126__auto__ = (full_len_30081 > w_30049);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var and__4115__auto__ = e_30051;
if(cljs.core.truth_(and__4115__auto__)){
return ((exp_width_30059 - (2)) > e_30051);
} else {
return and__4115__auto__;
}
}
})();
if(cljs.core.truth_(and__4115__auto__)){
return new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__4115__auto__;
}
})())){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(w_30049,new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params)))], 0));
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((w_30049 - full_len_30081) - ((append_zero_30082__$1)?(1):(0))),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)))),(cljs.core.truth_(add_sign_30054)?(((arg__$1 < (0)))?"-":"+"):null),((prepend_zero_30080__$1)?"0":null),full_mantissa_30067,((append_zero_30082__$1)?"0":null),scaled_exp_str_30058__$1].join('')], 0));
}
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[(cljs.core.truth_(add_sign_30054)?(((arg__$1 < (0)))?"-":"+"):null),((prepend_zero_30055)?"0":null),full_mantissa_30067,((append_zero_30068)?"0":null),scaled_exp_str_30058__$1].join('')], 0));
}
} else {
var G__30089 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rounded_mantissa_30064,(exp_30048__$1 + (1))], null);
G__28553_30045__$1 = G__30089;
continue;
}
break;
}

return navigator__$1;
});
cljs.pprint.general_float = (function cljs$pprint$general_float(params,navigator,offsets){
var vec__28583 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28583,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28583,(1),null);
var arg__$1 = cljs.pprint.convert_ratio(arg);
var vec__28586 = cljs.pprint.float_parts((((arg__$1 < (0)))?(- arg__$1):arg__$1));
var mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28586,(0),null);
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28586,(1),null);
var w = new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(params);
var d = new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(params);
var e = new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(params);
var n = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg__$1,0.0))?(0):(exp + (1)));
var ee = (cljs.core.truth_(e)?(e + (2)):(4));
var ww = (cljs.core.truth_(w)?(w - ee):null);
var d__$1 = (cljs.core.truth_(d)?d:(function (){var x__4214__auto__ = cljs.core.count(mantissa);
var y__4215__auto__ = (function (){var x__4217__auto__ = n;
var y__4218__auto__ = (7);
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})());
var dd = (d__$1 - n);
if(((((0) <= dd)) && ((dd <= d__$1)))){
var navigator__$1 = cljs.pprint.fixed_float(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"w","w",354169001),ww,new cljs.core.Keyword(null,"d","d",1972142424),dd,new cljs.core.Keyword(null,"k","k",-2146297393),(0),new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106),new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"at","at",1476951349),new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params)], null),navigator,offsets);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(ee," "))], 0));

return navigator__$1;
} else {
return cljs.pprint.exponential_float(params,navigator,offsets);
}
});
cljs.pprint.dollar_float = (function cljs$pprint$dollar_float(params,navigator,offsets){
var vec__28593 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28593,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28593,(1),null);
var vec__28596 = cljs.pprint.float_parts(Math.abs(arg));
var mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28596,(0),null);
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28596,(1),null);
var d = new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(params);
var n = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(params);
var w = new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(params);
var add_sign = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (arg < (0));
}
})();
var vec__28599 = cljs.pprint.round_str(mantissa,exp,d,null);
var rounded_mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28599,(0),null);
var scaled_exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28599,(1),null);
var expanded = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28599,(2),null);
var fixed_repr = cljs.pprint.get_fixed(rounded_mantissa,(cljs.core.truth_(expanded)?(scaled_exp + (1)):scaled_exp),d);
var full_repr = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((n - fixed_repr.indexOf(".")),"0"))),fixed_repr].join('');
var full_len = (((full_repr).length) + (cljs.core.truth_(add_sign)?(1):(0)));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[(cljs.core.truth_((function (){var and__4115__auto__ = new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__4115__auto__)){
return add_sign;
} else {
return and__4115__auto__;
}
})())?(((arg < (0)))?"-":"+"):null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((w - full_len),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)))),(cljs.core.truth_(((cljs.core.not(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params)))?add_sign:false))?(((arg < (0)))?"-":"+"):null),full_repr].join('')], 0));

return navigator__$1;
});
cljs.pprint.choice_conditional = (function cljs$pprint$choice_conditional(params,arg_navigator,offsets){
var arg = new cljs.core.Keyword(null,"selector","selector",762528866).cljs$core$IFn$_invoke$arity$1(params);
var vec__28610 = (cljs.core.truth_(arg)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg,arg_navigator], null):cljs.pprint.next_arg(arg_navigator));
var arg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28610,(0),null);
var navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28610,(1),null);
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
var clause = (((((arg__$1 < (0))) || ((arg__$1 >= cljs.core.count(clauses)))))?cljs.core.first(new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(params)):cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clauses,arg__$1));
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format(clause,navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
} else {
return navigator;
}
});
cljs.pprint.boolean_conditional = (function cljs$pprint$boolean_conditional(params,arg_navigator,offsets){
var vec__28617 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28617,(0),null);
var navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28617,(1),null);
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
var clause = (cljs.core.truth_(arg)?cljs.core.second(clauses):cljs.core.first(clauses));
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format(clause,navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
} else {
return navigator;
}
});
cljs.pprint.check_arg_conditional = (function cljs$pprint$check_arg_conditional(params,arg_navigator,offsets){
var vec__28624 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28624,(0),null);
var navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28624,(1),null);
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
var clause = (cljs.core.truth_(arg)?cljs.core.first(clauses):null);
if(cljs.core.truth_(arg)){
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format(clause,arg_navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
} else {
return arg_navigator;
}
} else {
return navigator;
}
});
cljs.pprint.iterate_sublist = (function cljs$pprint$iterate_sublist(params,navigator,offsets){
var max_count = new cljs.core.Keyword(null,"max-iterations","max-iterations",2021275563).cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
var vec__28631 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28631,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28631,(1),null);
var vec__28634 = cljs.pprint.next_arg(navigator__$1);
var arg_list = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28634,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28634,(1),null);
var args = cljs.pprint.init_navigator(arg_list);
var count = (0);
var args__$1 = args;
var last_pos = ((-1) | (0));
while(true){
if(((cljs.core.not(max_count)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(args__$1),last_pos)) && ((count > (1))))){
throw Error("%{ construct not consuming any arguments: Infinite loop!");
} else {
}

if(cljs.core.truth_((function (){var or__4126__auto__ = ((cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(args__$1))) && (((cljs.core.not(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))))));
if(or__4126__auto__){
return or__4126__auto__;
} else {
var and__4115__auto__ = max_count;
if(cljs.core.truth_(and__4115__auto__)){
return (count >= max_count);
} else {
return and__4115__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format(clause,args__$1,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),cljs.core.first(iter_result))){
return navigator__$2;
} else {
var G__30113 = (count + (1));
var G__30114 = iter_result;
var G__30115 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(args__$1);
count = G__30113;
args__$1 = G__30114;
last_pos = G__30115;
continue;
}
}
break;
}
});
cljs.pprint.iterate_list_of_sublists = (function cljs$pprint$iterate_list_of_sublists(params,navigator,offsets){
var max_count = new cljs.core.Keyword(null,"max-iterations","max-iterations",2021275563).cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
var vec__28656 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28656,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28656,(1),null);
var vec__28659 = cljs.pprint.next_arg(navigator__$1);
var arg_list = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28659,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28659,(1),null);
var count = (0);
var arg_list__$1 = arg_list;
while(true){
if(cljs.core.truth_((function (){var or__4126__auto__ = ((cljs.core.empty_QMARK_(arg_list__$1)) && (((cljs.core.not(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))))));
if(or__4126__auto__){
return or__4126__auto__;
} else {
var and__4115__auto__ = max_count;
if(cljs.core.truth_(and__4115__auto__)){
return (count >= max_count);
} else {
return and__4115__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format(clause,cljs.pprint.init_navigator(cljs.core.first(arg_list__$1)),cljs.pprint.init_navigator(cljs.core.next(arg_list__$1)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"colon-up-arrow","colon-up-arrow",244853007),cljs.core.first(iter_result))){
return navigator__$2;
} else {
var G__30116 = (count + (1));
var G__30117 = cljs.core.next(arg_list__$1);
count = G__30116;
arg_list__$1 = G__30117;
continue;
}
}
break;
}
});
cljs.pprint.iterate_main_list = (function cljs$pprint$iterate_main_list(params,navigator,offsets){
var max_count = new cljs.core.Keyword(null,"max-iterations","max-iterations",2021275563).cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
var vec__28700 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28700,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28700,(1),null);
var count = (0);
var navigator__$2 = navigator__$1;
var last_pos = ((-1) | (0));
while(true){
if(((cljs.core.not(max_count)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator__$2),last_pos)) && ((count > (1))))){
throw Error("%@{ construct not consuming any arguments: Infinite loop!");
} else {
}

if(cljs.core.truth_((function (){var or__4126__auto__ = ((cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator__$2))) && (((cljs.core.not(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))))));
if(or__4126__auto__){
return or__4126__auto__;
} else {
var and__4115__auto__ = max_count;
if(cljs.core.truth_(and__4115__auto__)){
return (count >= max_count);
} else {
return and__4115__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format(clause,navigator__$2,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),cljs.core.first(iter_result))){
return cljs.core.second(iter_result);
} else {
var G__30118 = (count + (1));
var G__30119 = iter_result;
var G__30120 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator__$2);
count = G__30118;
navigator__$2 = G__30119;
last_pos = G__30120;
continue;
}
}
break;
}
});
cljs.pprint.iterate_main_sublists = (function cljs$pprint$iterate_main_sublists(params,navigator,offsets){
var max_count = new cljs.core.Keyword(null,"max-iterations","max-iterations",2021275563).cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
var vec__28705 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28705,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28705,(1),null);
var count = (0);
var navigator__$2 = navigator__$1;
while(true){
if(cljs.core.truth_((function (){var or__4126__auto__ = ((cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator__$2))) && (((cljs.core.not(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))))));
if(or__4126__auto__){
return or__4126__auto__;
} else {
var and__4115__auto__ = max_count;
if(cljs.core.truth_(and__4115__auto__)){
return (count >= max_count);
} else {
return and__4115__auto__;
}
}
})())){
return navigator__$2;
} else {
var vec__28719 = cljs.pprint.next_arg_or_nil(navigator__$2);
var sublist = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28719,(0),null);
var navigator__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28719,(1),null);
var iter_result = cljs.pprint.execute_sub_format(clause,cljs.pprint.init_navigator(sublist),navigator__$3);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"colon-up-arrow","colon-up-arrow",244853007),cljs.core.first(iter_result))){
return navigator__$3;
} else {
var G__30121 = (count + (1));
var G__30122 = navigator__$3;
count = G__30121;
navigator__$2 = G__30122;
continue;
}
}
break;
}
});
cljs.pprint.logical_block_or_justify = (function cljs$pprint$logical_block_or_justify(params,navigator,offsets){
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))){
return cljs.pprint.format_logical_block(params,navigator,offsets);
} else {
return cljs.pprint.justify_clauses(params,navigator,offsets);
}
});
cljs.pprint.render_clauses = (function cljs$pprint$render_clauses(clauses,navigator,base_navigator){
var clauses__$1 = clauses;
var acc = cljs.core.PersistentVector.EMPTY;
var navigator__$1 = navigator;
while(true){
if(cljs.core.empty_QMARK_(clauses__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,navigator__$1], null);
} else {
var clause = cljs.core.first(clauses__$1);
var vec__28728 = (function (){var sb = (new goog.string.StringBuffer());
var _STAR_out_STAR__orig_val__28731 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__28732 = (new cljs.core.StringBufferWriter(sb));
(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__28732);

try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.execute_sub_format(clause,navigator__$1,base_navigator),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)], null);
}finally {(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__28731);
}})();
var iter_result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28728,(0),null);
var result_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28728,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),cljs.core.first(iter_result))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,cljs.core.second(iter_result)], null);
} else {
var G__30123 = cljs.core.next(clauses__$1);
var G__30124 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result_str);
var G__30125 = iter_result;
clauses__$1 = G__30123;
acc = G__30124;
navigator__$1 = G__30125;
continue;
}
}
break;
}
});
cljs.pprint.justify_clauses = (function cljs$pprint$justify_clauses(params,navigator,offsets){
var vec__28734 = (function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(temp__5735__auto__)){
var else$ = temp__5735__auto__;
return cljs.pprint.render_clauses(else$,navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
} else {
return null;
}
})();
var vec__28737 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28734,(0),null);
var eol_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28737,(0),null);
var new_navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28734,(1),null);
var navigator__$1 = (function (){var or__4126__auto__ = new_navigator;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return navigator;
}
})();
var vec__28740 = (function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"else-params","else-params",-832171646).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(temp__5735__auto__)){
var p = temp__5735__auto__;
return cljs.pprint.realize_parameter_list(p,navigator__$1);
} else {
return null;
}
})();
var else_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28740,(0),null);
var new_navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28740,(1),null);
var navigator__$2 = (function (){var or__4126__auto__ = new_navigator__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return navigator__$1;
}
})();
var min_remaining = (function (){var or__4126__auto__ = cljs.core.first(new cljs.core.Keyword(null,"min-remaining","min-remaining",962687677).cljs$core$IFn$_invoke$arity$1(else_params));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})();
var max_columns = (function (){var or__4126__auto__ = cljs.core.first(new cljs.core.Keyword(null,"max-columns","max-columns",1742323262).cljs$core$IFn$_invoke$arity$1(else_params));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.pprint.get_max_column(cljs.core._STAR_out_STAR_);
}
})();
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
var vec__28743 = cljs.pprint.render_clauses(clauses,navigator__$2,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
var strs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28743,(0),null);
var navigator__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28743,(1),null);
var slots = (function (){var x__4214__auto__ = (1);
var y__4215__auto__ = (((cljs.core.count(strs) - (1)) + (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?(1):(0))) + (cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?(1):(0)));
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})();
var chars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,strs));
var mincol = new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params);
var minpad = new cljs.core.Keyword(null,"minpad","minpad",323570901).cljs$core$IFn$_invoke$arity$1(params);
var colinc = new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params);
var minout = (chars + (slots * minpad));
var result_columns = (((minout <= mincol))?mincol:(mincol + (colinc * ((1) + cljs.core.quot(((minout - mincol) - (1)),colinc)))));
var total_pad = (result_columns - chars);
var pad = (function (){var x__4214__auto__ = minpad;
var y__4215__auto__ = cljs.core.quot(total_pad,slots);
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})();
var extra_pad = (total_pad - (pad * slots));
var pad_str = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(pad,new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)));
if(cljs.core.truth_((function (){var and__4115__auto__ = eol_str;
if(cljs.core.truth_(and__4115__auto__)){
return (((cljs.pprint.get_column(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(cljs.core._STAR_out_STAR_)))) + min_remaining) + result_columns) > max_columns);
} else {
return and__4115__auto__;
}
})())){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([eol_str], 0));
} else {
}

var slots_30132__$1 = slots;
var extra_pad_30133__$1 = extra_pad;
var strs_30134__$1 = strs;
var pad_only_30135 = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(strs_30134__$1),(1))) && (cljs.core.not(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))));
}
})();
while(true){
if(cljs.core.seq(strs_30134__$1)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.not(pad_only_30135))?cljs.core.first(strs_30134__$1):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var or__4126__auto__ = pad_only_30135;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = cljs.core.next(strs_30134__$1);
if(or__4126__auto____$1){
return or__4126__auto____$1;
} else {
return new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
}
}
})())?pad_str:null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((extra_pad_30133__$1 > (0)))?new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params):null))].join('')], 0));

var G__30136 = (slots_30132__$1 - (1));
var G__30137 = (extra_pad_30133__$1 - (1));
var G__30138 = (cljs.core.truth_(pad_only_30135)?strs_30134__$1:cljs.core.next(strs_30134__$1));
var G__30139 = false;
slots_30132__$1 = G__30136;
extra_pad_30133__$1 = G__30137;
strs_30134__$1 = G__30138;
pad_only_30135 = G__30139;
continue;
} else {
}
break;
}

return navigator__$3;
});
/**
 * Returns a proxy that wraps writer, converting all characters to lower case
 */
cljs.pprint.downcase_writer = (function cljs$pprint$downcase_writer(writer){
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint28750 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint28750 = (function (writer,meta28751){
this.writer = writer;
this.meta28751 = meta28751;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.pprint.t_cljs$pprint28750.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28752,meta28751__$1){
var self__ = this;
var _28752__$1 = this;
return (new cljs.pprint.t_cljs$pprint28750(self__.writer,meta28751__$1));
}));

(cljs.pprint.t_cljs$pprint28750.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28752){
var self__ = this;
var _28752__$1 = this;
return self__.meta28751;
}));

(cljs.pprint.t_cljs$pprint28750.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
}));

(cljs.pprint.t_cljs$pprint28750.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__28755 = cljs.core._EQ_;
var expr__28756 = cljs.core.type(x);
if(cljs.core.truth_((pred__28755.cljs$core$IFn$_invoke$arity$2 ? pred__28755.cljs$core$IFn$_invoke$arity$2(String,expr__28756) : pred__28755.call(null,String,expr__28756)))){
var s = x;
return cljs.core._write(self__.writer,clojure.string.lower_case(s));
} else {
if(cljs.core.truth_((pred__28755.cljs$core$IFn$_invoke$arity$2 ? pred__28755.cljs$core$IFn$_invoke$arity$2(Number,expr__28756) : pred__28755.call(null,Number,expr__28756)))){
var c = x;
return cljs.core._write(self__.writer,clojure.string.lower_case(cljs.core.char$(c)));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__28756)].join('')));
}
}
}));

(cljs.pprint.t_cljs$pprint28750.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"meta28751","meta28751",-150561567,null)], null);
}));

(cljs.pprint.t_cljs$pprint28750.cljs$lang$type = true);

(cljs.pprint.t_cljs$pprint28750.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint28750");

(cljs.pprint.t_cljs$pprint28750.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.pprint/t_cljs$pprint28750");
}));

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint28750.
 */
cljs.pprint.__GT_t_cljs$pprint28750 = (function cljs$pprint$downcase_writer_$___GT_t_cljs$pprint28750(writer__$1,meta28751){
return (new cljs.pprint.t_cljs$pprint28750(writer__$1,meta28751));
});

}

return (new cljs.pprint.t_cljs$pprint28750(writer,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a proxy that wraps writer, converting all characters to upper case
 */
cljs.pprint.upcase_writer = (function cljs$pprint$upcase_writer(writer){
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint28758 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint28758 = (function (writer,meta28759){
this.writer = writer;
this.meta28759 = meta28759;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.pprint.t_cljs$pprint28758.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28760,meta28759__$1){
var self__ = this;
var _28760__$1 = this;
return (new cljs.pprint.t_cljs$pprint28758(self__.writer,meta28759__$1));
}));

(cljs.pprint.t_cljs$pprint28758.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28760){
var self__ = this;
var _28760__$1 = this;
return self__.meta28759;
}));

(cljs.pprint.t_cljs$pprint28758.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
}));

(cljs.pprint.t_cljs$pprint28758.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__28769 = cljs.core._EQ_;
var expr__28770 = cljs.core.type(x);
if(cljs.core.truth_((pred__28769.cljs$core$IFn$_invoke$arity$2 ? pred__28769.cljs$core$IFn$_invoke$arity$2(String,expr__28770) : pred__28769.call(null,String,expr__28770)))){
var s = x;
return cljs.core._write(self__.writer,clojure.string.upper_case(s));
} else {
if(cljs.core.truth_((pred__28769.cljs$core$IFn$_invoke$arity$2 ? pred__28769.cljs$core$IFn$_invoke$arity$2(Number,expr__28770) : pred__28769.call(null,Number,expr__28770)))){
var c = x;
return cljs.core._write(self__.writer,clojure.string.upper_case(cljs.core.char$(c)));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__28770)].join('')));
}
}
}));

(cljs.pprint.t_cljs$pprint28758.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"meta28759","meta28759",-685215842,null)], null);
}));

(cljs.pprint.t_cljs$pprint28758.cljs$lang$type = true);

(cljs.pprint.t_cljs$pprint28758.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint28758");

(cljs.pprint.t_cljs$pprint28758.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.pprint/t_cljs$pprint28758");
}));

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint28758.
 */
cljs.pprint.__GT_t_cljs$pprint28758 = (function cljs$pprint$upcase_writer_$___GT_t_cljs$pprint28758(writer__$1,meta28759){
return (new cljs.pprint.t_cljs$pprint28758(writer__$1,meta28759));
});

}

return (new cljs.pprint.t_cljs$pprint28758(writer,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Capitalizes the words in a string. If first? is false, don't capitalize the
 *                                    first character of the string even if it's a letter.
 */
cljs.pprint.capitalize_string = (function cljs$pprint$capitalize_string(s,first_QMARK_){
var f = cljs.core.first(s);
var s__$1 = (cljs.core.truth_((function (){var and__4115__auto__ = first_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = f;
if(cljs.core.truth_(and__4115__auto____$1)){
return goog.string.isUnicodeChar(f);
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
})())?[clojure.string.upper_case(f),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1))].join(''):s);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.first(cljs.pprint.consume((function (s__$2){
if(cljs.core.empty_QMARK_(s__$2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null);
} else {
var m = RegExp("\\W\\w","g").exec(s__$2);
var offset = (function (){var and__4115__auto__ = m;
if(cljs.core.truth_(and__4115__auto__)){
return (m.index + (1));
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(offset)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s__$2,(0),offset),clojure.string.upper_case(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s__$2,offset))].join(''),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s__$2,(offset + (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$2,null], null);
}
}
}),s__$1)));
});
/**
 * Returns a proxy that wraps writer, capitalizing all words
 */
cljs.pprint.capitalize_word_writer = (function cljs$pprint$capitalize_word_writer(writer){
var last_was_whitespace_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint28799 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint28799 = (function (writer,last_was_whitespace_QMARK_,meta28800){
this.writer = writer;
this.last_was_whitespace_QMARK_ = last_was_whitespace_QMARK_;
this.meta28800 = meta28800;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.pprint.t_cljs$pprint28799.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28801,meta28800__$1){
var self__ = this;
var _28801__$1 = this;
return (new cljs.pprint.t_cljs$pprint28799(self__.writer,self__.last_was_whitespace_QMARK_,meta28800__$1));
}));

(cljs.pprint.t_cljs$pprint28799.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28801){
var self__ = this;
var _28801__$1 = this;
return self__.meta28800;
}));

(cljs.pprint.t_cljs$pprint28799.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
}));

(cljs.pprint.t_cljs$pprint28799.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__28806 = cljs.core._EQ_;
var expr__28807 = cljs.core.type(x);
if(cljs.core.truth_((pred__28806.cljs$core$IFn$_invoke$arity$2 ? pred__28806.cljs$core$IFn$_invoke$arity$2(String,expr__28807) : pred__28806.call(null,String,expr__28807)))){
var s = x;
cljs.core._write(self__.writer,cljs.pprint.capitalize_string(s.toLowerCase(),cljs.core.deref(self__.last_was_whitespace_QMARK_)));

if((s.length > (0))){
return cljs.core.reset_BANG_(self__.last_was_whitespace_QMARK_,goog.string.isEmptyOrWhitespace(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(cljs.core.count(s) - (1)))));
} else {
return null;
}
} else {
if(cljs.core.truth_((pred__28806.cljs$core$IFn$_invoke$arity$2 ? pred__28806.cljs$core$IFn$_invoke$arity$2(Number,expr__28807) : pred__28806.call(null,Number,expr__28807)))){
var c = cljs.core.char$(x);
var mod_c = (cljs.core.truth_(cljs.core.deref(self__.last_was_whitespace_QMARK_))?clojure.string.upper_case(c):c);
cljs.core._write(self__.writer,mod_c);

return cljs.core.reset_BANG_(self__.last_was_whitespace_QMARK_,goog.string.isEmptyOrWhitespace(c));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__28807)].join('')));
}
}
}));

(cljs.pprint.t_cljs$pprint28799.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"last-was-whitespace?","last-was-whitespace?",-1073928093,null),new cljs.core.Symbol(null,"meta28800","meta28800",1584933770,null)], null);
}));

(cljs.pprint.t_cljs$pprint28799.cljs$lang$type = true);

(cljs.pprint.t_cljs$pprint28799.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint28799");

(cljs.pprint.t_cljs$pprint28799.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.pprint/t_cljs$pprint28799");
}));

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint28799.
 */
cljs.pprint.__GT_t_cljs$pprint28799 = (function cljs$pprint$capitalize_word_writer_$___GT_t_cljs$pprint28799(writer__$1,last_was_whitespace_QMARK___$1,meta28800){
return (new cljs.pprint.t_cljs$pprint28799(writer__$1,last_was_whitespace_QMARK___$1,meta28800));
});

}

return (new cljs.pprint.t_cljs$pprint28799(writer,last_was_whitespace_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a proxy that wraps writer, capitalizing the first word
 */
cljs.pprint.init_cap_writer = (function cljs$pprint$init_cap_writer(writer){
var capped = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint28827 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint28827 = (function (writer,capped,meta28828){
this.writer = writer;
this.capped = capped;
this.meta28828 = meta28828;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.pprint.t_cljs$pprint28827.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28829,meta28828__$1){
var self__ = this;
var _28829__$1 = this;
return (new cljs.pprint.t_cljs$pprint28827(self__.writer,self__.capped,meta28828__$1));
}));

(cljs.pprint.t_cljs$pprint28827.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28829){
var self__ = this;
var _28829__$1 = this;
return self__.meta28828;
}));

(cljs.pprint.t_cljs$pprint28827.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
}));

(cljs.pprint.t_cljs$pprint28827.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__28838 = cljs.core._EQ_;
var expr__28839 = cljs.core.type(x);
if(cljs.core.truth_((pred__28838.cljs$core$IFn$_invoke$arity$2 ? pred__28838.cljs$core$IFn$_invoke$arity$2(String,expr__28839) : pred__28838.call(null,String,expr__28839)))){
var s = clojure.string.lower_case(x);
if(cljs.core.not(cljs.core.deref(self__.capped))){
var m = RegExp("\\S","g").exec(s);
var offset = (function (){var and__4115__auto__ = m;
if(cljs.core.truth_(and__4115__auto__)){
return m.index;
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(offset)){
cljs.core._write(self__.writer,[cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),offset),clojure.string.upper_case(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,offset)),clojure.string.lower_case(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(offset + (1))))].join(''));

return cljs.core.reset_BANG_(self__.capped,true);
} else {
return cljs.core._write(self__.writer,s);
}
} else {
return cljs.core._write(self__.writer,clojure.string.lower_case(s));
}
} else {
if(cljs.core.truth_((pred__28838.cljs$core$IFn$_invoke$arity$2 ? pred__28838.cljs$core$IFn$_invoke$arity$2(Number,expr__28839) : pred__28838.call(null,Number,expr__28839)))){
var c = cljs.core.char$(x);
if(cljs.core.truth_(((cljs.core.not(cljs.core.deref(self__.capped)))?goog.string.isUnicodeChar(c):false))){
cljs.core.reset_BANG_(self__.capped,true);

return cljs.core._write(self__.writer,clojure.string.upper_case(c));
} else {
return cljs.core._write(self__.writer,clojure.string.lower_case(c));
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__28839)].join('')));
}
}
}));

(cljs.pprint.t_cljs$pprint28827.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"capped","capped",-1650988402,null),new cljs.core.Symbol(null,"meta28828","meta28828",-1062711851,null)], null);
}));

(cljs.pprint.t_cljs$pprint28827.cljs$lang$type = true);

(cljs.pprint.t_cljs$pprint28827.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint28827");

(cljs.pprint.t_cljs$pprint28827.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.pprint/t_cljs$pprint28827");
}));

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint28827.
 */
cljs.pprint.__GT_t_cljs$pprint28827 = (function cljs$pprint$init_cap_writer_$___GT_t_cljs$pprint28827(writer__$1,capped__$1,meta28828){
return (new cljs.pprint.t_cljs$pprint28827(writer__$1,capped__$1,meta28828));
});

}

return (new cljs.pprint.t_cljs$pprint28827(writer,capped,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.pprint.modify_case = (function cljs$pprint$modify_case(make_writer,params,navigator,offsets){
var clause = cljs.core.first(new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
var _STAR_out_STAR__orig_val__28844 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__28845 = (make_writer.cljs$core$IFn$_invoke$arity$1 ? make_writer.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_out_STAR_) : make_writer.call(null,cljs.core._STAR_out_STAR_));
(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__28845);

try{return cljs.pprint.execute_sub_format(clause,navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
}finally {(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__28844);
}});
/**
 * Returns the IWriter passed in wrapped in a pretty writer proxy, unless it's
 * already a pretty writer. Generally, it is unnecessary to call this function, since pprint,
 * write, and cl-format all call it if they need to. However if you want the state to be
 * preserved across calls, you will want to wrap them with this.
 * 
 * For example, when you want to generate column-aware output with multiple calls to cl-format,
 * do it like in this example:
 * 
 *  (defn print-table [aseq column-width]
 *    (binding [*out* (get-pretty-writer *out*)]
 *      (doseq [row aseq]
 *        (doseq [col row]
 *          (cl-format true "~4D~7,vT" col column-width))
 *        (prn))))
 * 
 * Now when you run:
 * 
 *  user> (print-table (map #(vector % (* % %) (* % % %)) (range 1 11)) 8)
 * 
 * It prints a table of squares and cubes for the numbers from 1 to 10:
 * 
 *     1      1       1
 *     2      4       8
 *     3      9      27
 *     4     16      64
 *     5     25     125
 *     6     36     216
 *     7     49     343
 *     8     64     512
 *     9     81     729
 *    10    100    1000
 */
cljs.pprint.get_pretty_writer = (function cljs$pprint$get_pretty_writer(writer){
if(cljs.core.truth_(cljs.pprint.pretty_writer_QMARK_(writer))){
return writer;
} else {
return cljs.pprint.pretty_writer(writer,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_);
}
});
/**
 * Make a newline if *out* is not already at the beginning of the line. If *out* is
 * not a pretty writer (which keeps track of columns), this function always outputs a newline.
 */
cljs.pprint.fresh_line = (function cljs$pprint$fresh_line(){
if((((!((cljs.core._STAR_out_STAR_ == null))))?(((((cljs.core._STAR_out_STAR_.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === cljs.core._STAR_out_STAR_.cljs$core$IDeref$))))?true:(((!cljs.core._STAR_out_STAR_.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,cljs.core._STAR_out_STAR_):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,cljs.core._STAR_out_STAR_))){
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.pprint.get_column(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(cljs.core._STAR_out_STAR_)))))))){
return cljs.pprint.prn();
} else {
return null;
}
} else {
return cljs.pprint.prn();
}
});
cljs.pprint.absolute_tabulation = (function cljs$pprint$absolute_tabulation(params,navigator,offsets){
var colnum_30203 = new cljs.core.Keyword(null,"colnum","colnum",2023796854).cljs$core$IFn$_invoke$arity$1(params);
var colinc_30204 = new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params);
var current_30205 = cljs.pprint.get_column(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(cljs.core._STAR_out_STAR_))));
var space_count_30206 = (((current_30205 < colnum_30203))?(colnum_30203 - current_30205):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(colinc_30204,(0)))?(0):(colinc_30204 - cljs.core.rem((current_30205 - colnum_30203),colinc_30204))
));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(space_count_30206," "))], 0));

return navigator;
});
cljs.pprint.relative_tabulation = (function cljs$pprint$relative_tabulation(params,navigator,offsets){
var colrel_30207 = new cljs.core.Keyword(null,"colnum","colnum",2023796854).cljs$core$IFn$_invoke$arity$1(params);
var colinc_30208 = new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params);
var start_col_30209 = (colrel_30207 + cljs.pprint.get_column(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(cljs.core._STAR_out_STAR_)))));
var offset_30210 = (((colinc_30208 > (0)))?cljs.core.rem(start_col_30209,colinc_30208):(0));
var space_count_30211 = (colrel_30207 + ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),offset_30210))?(0):(colinc_30208 - offset_30210)));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(space_count_30211," "))], 0));

return navigator;
});
cljs.pprint.format_logical_block = (function cljs$pprint$format_logical_block(params,navigator,offsets){
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
var clause_count = cljs.core.count(clauses);
var prefix = (((clause_count > (1)))?new cljs.core.Keyword(null,"string","string",-1989541586).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.first(clauses)))):(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?"(":null));
var body = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clauses,(((clause_count > (1)))?(1):(0)));
var suffix = (((clause_count > (2)))?new cljs.core.Keyword(null,"string","string",-1989541586).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clauses,(2))))):(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?")":null));
var vec__28848 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28848,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28848,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__28851_30217 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__28852_30218 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__28853_30219 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__28854_30220 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__28853_30219);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__28854_30220);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,prefix,null,suffix);

cljs.pprint.execute_sub_format(body,cljs.pprint.init_navigator(arg),new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__28852_30218);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__28851_30217);
}}


return navigator__$1;
});
cljs.pprint.set_indent = (function cljs$pprint$set_indent(params,navigator,offsets){
var relative_to = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.Keyword(null,"current","current",-1088038603):new cljs.core.Keyword(null,"block","block",664686210));
cljs.pprint.pprint_indent(relative_to,new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(params));

return navigator;
});
cljs.pprint.conditional_newline = (function cljs$pprint$conditional_newline(params,navigator,offsets){
var kind = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.Keyword(null,"mandatory","mandatory",542802336):new cljs.core.Keyword(null,"fill","fill",883462889)):(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.Keyword(null,"miser","miser",-556060186):new cljs.core.Keyword(null,"linear","linear",872268697)));
cljs.pprint.pprint_newline(kind);

return navigator;
});
cljs.pprint.directive_table = cljs.core.PersistentHashMap.fromArrays(["A","S","D","B","O","X","R","P","C","F","E","G","$","%","&","|","~","\n","T","*","?","(",")","[",";","]","{","}","<",">","^","W","_","I"],[new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"A",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"colinc","colinc",-584873385),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"minpad","minpad",323570901),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__28856_SHARP_,p2__28857_SHARP_,p3__28858_SHARP_){
return cljs.pprint.format_ascii(cljs.core.print_str,p1__28856_SHARP_,p2__28857_SHARP_,p3__28858_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"S",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"colinc","colinc",-584873385),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"minpad","minpad",323570901),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__28860_SHARP_,p2__28861_SHARP_,p3__28862_SHARP_){
return cljs.pprint.format_ascii(cljs.core.pr_str,p1__28860_SHARP_,p2__28861_SHARP_,p3__28862_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"D",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__28863_SHARP_,p2__28864_SHARP_,p3__28865_SHARP_){
return cljs.pprint.format_integer((10),p1__28863_SHARP_,p2__28864_SHARP_,p3__28865_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"B",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__28867_SHARP_,p2__28868_SHARP_,p3__28869_SHARP_){
return cljs.pprint.format_integer((2),p1__28867_SHARP_,p2__28868_SHARP_,p3__28869_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"O",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__28870_SHARP_,p2__28871_SHARP_,p3__28872_SHARP_){
return cljs.pprint.format_integer((8),p1__28870_SHARP_,p2__28871_SHARP_,p3__28872_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"X",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__28873_SHARP_,p2__28874_SHARP_,p3__28875_SHARP_){
return cljs.pprint.format_integer((16),p1__28873_SHARP_,p2__28874_SHARP_,p3__28875_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"R",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(5),[new cljs.core.Keyword(null,"base","base",185279322),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_(cljs.core.first(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(params)))){
return (function (p1__28876_SHARP_,p2__28877_SHARP_,p3__28878_SHARP_){
return cljs.pprint.format_integer(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(p1__28876_SHARP_),p1__28876_SHARP_,p2__28877_SHARP_,p3__28878_SHARP_);
});
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__4115__auto__)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__4115__auto__;
}
})())){
return (function (p1__28879_SHARP_,p2__28880_SHARP_,p3__28882_SHARP_){
return cljs.pprint.format_old_roman(p1__28879_SHARP_,p2__28880_SHARP_,p3__28882_SHARP_);
});
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__28884_SHARP_,p2__28885_SHARP_,p3__28886_SHARP_){
return cljs.pprint.format_new_roman(p1__28884_SHARP_,p2__28885_SHARP_,p3__28886_SHARP_);
});
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__28887_SHARP_,p2__28888_SHARP_,p3__28889_SHARP_){
return cljs.pprint.format_ordinal_english(p1__28887_SHARP_,p2__28888_SHARP_,p3__28889_SHARP_);
});
} else {
return (function (p1__28891_SHARP_,p2__28892_SHARP_,p3__28893_SHARP_){
return cljs.pprint.format_cardinal_english(p1__28891_SHARP_,p2__28892_SHARP_,p3__28893_SHARP_);
});

}
}
}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"P",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,navigator,offsets){
var navigator__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.pprint.relative_reposition(navigator,(-1)):navigator);
var strs = (cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params__$1))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["y","ies"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","s"], null));
var vec__28911 = cljs.pprint.next_arg(navigator__$1);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28911,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28911,(1),null);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg,(1)))?cljs.core.first(strs):cljs.core.second(strs))], 0));

return navigator__$2;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"C",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"char-format","char-format",-1016499218),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.pretty_character;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.readable_character;
} else {
return cljs.pprint.plain_character;

}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"F",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(5),[new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.fixed_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"E",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(7),[new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"exponentchar","exponentchar",1986664222),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.exponential_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"G",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(7),[new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"exponentchar","exponentchar",1986664222),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.general_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"$",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),Number], null),new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.dollar_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"%",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n__4613__auto___30256 = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(params__$1);
var i_30257 = (0);
while(true){
if((i_30257 < n__4613__auto___30256)){
cljs.pprint.prn();

var G__30258 = (i_30257 + (1));
i_30257 = G__30258;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"&",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pretty","pretty",-1916372486),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var cnt_30259 = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(params__$1);
if((cnt_30259 > (0))){
cljs.pprint.fresh_line();
} else {
}

var n__4613__auto___30261 = (cnt_30259 - (1));
var i_30263 = (0);
while(true){
if((i_30263 < n__4613__auto___30261)){
cljs.pprint.prn();

var G__30265 = (i_30263 + (1));
i_30263 = G__30265;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"|",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n__4613__auto___30266 = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(params__$1);
var i_30267 = (0);
while(true){
if((i_30267 < n__4613__auto___30266)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\f"], 0));

var G__30268 = (i_30267 + (1));
i_30267 = G__30268;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"~",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(params__$1);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,"~"))], 0));

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"\n",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params__$1))){
cljs.pprint.prn();
} else {
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"T",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(2),[new cljs.core.Keyword(null,"colnum","colnum",2023796854),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"colinc","colinc",-584873385),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"pretty","pretty",-1916372486),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__28894_SHARP_,p2__28895_SHARP_,p3__28896_SHARP_){
return cljs.pprint.relative_tabulation(p1__28894_SHARP_,p2__28895_SHARP_,p3__28896_SHARP_);
});
} else {
return (function (p1__28897_SHARP_,p2__28898_SHARP_,p3__28899_SHARP_){
return cljs.pprint.absolute_tabulation(p1__28897_SHARP_,p2__28898_SHARP_,p3__28899_SHARP_);
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"*",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,navigator,offsets){
var n = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(params__$1);
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params__$1))){
return cljs.pprint.absolute_reposition(navigator,n);
} else {
return cljs.pprint.relative_reposition(navigator,(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params__$1))?(- n):n));
}
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"?",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return (function (params__$1,navigator,offsets){
var vec__28920 = cljs.pprint.get_format_arg(navigator);
var subformat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28920,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28920,(1),null);
return cljs.pprint.execute_sub_format(subformat,navigator__$1,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params__$1));
});
} else {
return (function (params__$1,navigator,offsets){
var vec__28925 = cljs.pprint.get_format_arg(navigator);
var subformat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28925,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28925,(1),null);
var vec__28929 = cljs.pprint.next_arg(navigator__$1);
var subargs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28929,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28929,(1),null);
var sub_navigator = cljs.pprint.init_navigator(subargs);
cljs.pprint.execute_sub_format(subformat,sub_navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params__$1));

return navigator__$2;
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"(",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"right","right",-452581833),")",new cljs.core.Keyword(null,"allows-separator","allows-separator",-818967742),null,new cljs.core.Keyword(null,"else","else",-1508377146),null], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
var mod_case_writer = (cljs.core.truth_((function (){var and__4115__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__4115__auto__)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__4115__auto__;
}
})())?cljs.pprint.upcase_writer:(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?cljs.pprint.capitalize_word_writer:(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?cljs.pprint.init_cap_writer:cljs.pprint.downcase_writer
)));
return (function (p1__28900_SHARP_,p2__28901_SHARP_,p3__28902_SHARP_){
return cljs.pprint.modify_case(mod_case_writer,p1__28900_SHARP_,p2__28901_SHARP_,p3__28902_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),")",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"[",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"selector","selector",762528866),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"right","right",-452581833),"]",new cljs.core.Keyword(null,"allows-separator","allows-separator",-818967742),true,new cljs.core.Keyword(null,"else","else",-1508377146),new cljs.core.Keyword(null,"last","last",1105735132)], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.boolean_conditional;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.check_arg_conditional;
} else {
return cljs.pprint.choice_conditional;

}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),";",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(2),[new cljs.core.Keyword(null,"min-remaining","min-remaining",962687677),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"max-columns","max-columns",1742323262),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",-965200945),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"separator","separator",-1628749125),true], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"]",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"{",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"max-iterations","max-iterations",2021275563),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"right","right",-452581833),"}",new cljs.core.Keyword(null,"allows-separator","allows-separator",-818967742),false], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_((function (){var and__4115__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__4115__auto__)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__4115__auto__;
}
})())){
return cljs.pprint.iterate_main_sublists;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.iterate_list_of_sublists;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.iterate_main_list;
} else {
return cljs.pprint.iterate_sublist;

}
}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"}",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",-965200945),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"<",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"colinc","colinc",-584873385),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"minpad","minpad",323570901),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null,new cljs.core.Keyword(null,"pretty","pretty",-1916372486),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"right","right",-452581833),">",new cljs.core.Keyword(null,"allows-separator","allows-separator",-818967742),true,new cljs.core.Keyword(null,"else","else",-1508377146),new cljs.core.Keyword(null,"first","first",-644103046)], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.logical_block_or_justify;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),">",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",-965200945),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"^",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(3),[new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",-965200945),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,navigator,offsets){
var arg1 = new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(params__$1);
var arg2 = new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(params__$1);
var arg3 = new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(params__$1);
var exit = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params__$1))?new cljs.core.Keyword(null,"colon-up-arrow","colon-up-arrow",244853007):new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333));
if(cljs.core.truth_((function (){var and__4115__auto__ = arg1;
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = arg2;
if(cljs.core.truth_(and__4115__auto____$1)){
return arg3;
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
})())){
if((((arg1 <= arg2)) && ((arg2 <= arg3)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = arg1;
if(cljs.core.truth_(and__4115__auto__)){
return arg2;
} else {
return and__4115__auto__;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg1,arg2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if(cljs.core.truth_(arg1)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg1,(0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if((cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params__$1))):cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}

}
}
}
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"W",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null,new cljs.core.Keyword(null,"pretty","pretty",-1916372486),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
}
})())){
var bindings = cljs.core.concat.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),null,new cljs.core.Keyword(null,"length","length",588987862),null], null):cljs.core.PersistentVector.EMPTY),(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pretty","pretty",-1916372486),true], null):cljs.core.PersistentVector.EMPTY));
return (function (params__$1,navigator,offsets){
var vec__28959 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28959,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28959,(1),null);
if(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.pprint.write,arg,bindings))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),navigator__$1], null);
} else {
return navigator__$1;
}
});
} else {
return (function (params__$1,navigator,offsets){
var vec__28966 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28966,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28966,(1),null);
if(cljs.core.truth_(cljs.pprint.write_out(arg))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),navigator__$1], null);
} else {
return navigator__$1;
}
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"_",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.conditional_newline;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"I",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",-965200945),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.set_indent;
})], null)]);
cljs.pprint.param_pattern = /^([vV]|#|('.)|([+-]?\d+)|(?=,))/;
cljs.pprint.special_params = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remaining-arg-count","remaining-arg-count",-1216589335),null,new cljs.core.Keyword(null,"parameter-from-args","parameter-from-args",-758446196),null], null), null);
cljs.pprint.extract_param = (function cljs$pprint$extract_param(p__28981){
var vec__28984 = p__28981;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28984,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28984,(1),null);
var saw_comma = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28984,(2),null);
var m = (new RegExp(cljs.pprint.param_pattern.source,"g"));
var param = m.exec(s);
if(cljs.core.truth_(param)){
var token_str = cljs.core.first(param);
var remainder = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,m.lastIndex);
var new_offset = (offset + m.lastIndex);
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(",",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(remainder,(0)))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token_str,offset], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [remainder,new_offset,false], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token_str,offset], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(remainder,(1)),(new_offset + (1)),true], null)], null);
}
} else {
if(cljs.core.truth_(saw_comma)){
return cljs.pprint.format_error("Badly formed parameters in format directive",offset);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset], null)], null);
}
}
});
cljs.pprint.extract_params = (function cljs$pprint$extract_params(s,offset){
return cljs.pprint.consume(cljs.pprint.extract_param,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset,false], null));
});
/**
 * Translate the string representation of a param to the internalized
 *                                    representation
 */
cljs.pprint.translate_param = (function cljs$pprint$translate_param(p__28997){
var vec__28998 = p__28997;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28998,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28998,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(0)))?null:((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(1))) && (cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["V",null,"v",null], null), null),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(0))))))?new cljs.core.Keyword(null,"parameter-from-args","parameter-from-args",-758446196):((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(0))))))?new cljs.core.Keyword(null,"remaining-arg-count","remaining-arg-count",-1216589335):((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(2))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("'",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(0))))))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(1)):parseInt(p,(10))
)))),offset], null);
});
cljs.pprint.flag_defs = new cljs.core.PersistentArrayMap(null, 2, [":",new cljs.core.Keyword(null,"colon","colon",-965200945),"@",new cljs.core.Keyword(null,"at","at",1476951349)], null);
cljs.pprint.extract_flags = (function cljs$pprint$extract_flags(s,offset){
return cljs.pprint.consume((function (p__29008){
var vec__29009 = p__29008;
var s__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29009,(0),null);
var offset__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29009,(1),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29009,(2),null);
if(cljs.core.empty_QMARK_(s__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$1,offset__$1,flags], null)], null);
} else {
var flag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.flag_defs,cljs.core.first(s__$1));
if(cljs.core.truth_(flag)){
if(cljs.core.contains_QMARK_(flags,flag)){
return cljs.pprint.format_error(["Flag \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(s__$1)),"\" appears more than once in a directive"].join(''),offset__$1);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s__$1,(1)),(offset__$1 + (1)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(flags,flag,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,offset__$1], null))], null)], null);
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$1,offset__$1,flags], null)], null);
}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset,cljs.core.PersistentArrayMap.EMPTY], null));
});
cljs.pprint.check_flags = (function cljs$pprint$check_flags(def,flags){
var allowed = new cljs.core.Keyword(null,"flags","flags",1775418075).cljs$core$IFn$_invoke$arity$1(def);
if(cljs.core.truth_(((cljs.core.not(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(allowed)))?new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(flags):false))){
cljs.pprint.format_error(["\"@\" is an illegal flag for format directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def)),"\""].join(''),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(flags),(1)));
} else {
}

if(cljs.core.truth_(((cljs.core.not(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(allowed)))?new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(flags):false))){
cljs.pprint.format_error(["\":\" is an illegal flag for format directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def)),"\""].join(''),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(flags),(1)));
} else {
}

if(cljs.core.truth_(((cljs.core.not(new cljs.core.Keyword(null,"both","both",-393648840).cljs$core$IFn$_invoke$arity$1(allowed)))?(function (){var and__4115__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(flags);
if(cljs.core.truth_(and__4115__auto__)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__4115__auto__;
}
})():false))){
return cljs.pprint.format_error(["Cannot combine \"@\" and \":\" flags for format directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def)),"\""].join(''),(function (){var x__4217__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(flags),(1));
var y__4218__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(flags),(1));
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})());
} else {
return null;
}
});
/**
 * Takes a directive definition and the list of actual parameters and
 * a map of flags and returns a map of the parameters and flags with defaults
 * filled in. We check to make sure that there are the right types and number
 * of parameters as well.
 */
cljs.pprint.map_params = (function cljs$pprint$map_params(def,params,flags,offset){
cljs.pprint.check_flags(def,flags);

if((cljs.core.count(params) > cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def)))){
cljs.pprint.format_error(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"Too many parameters for directive \"~C\": ~D~:* ~[were~;was~:;were~] specified but only ~D~:* ~[are~;is~:;are~] allowed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def),cljs.core.count(params),cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def))], 0)),cljs.core.second(cljs.core.first(params)));
} else {
}

cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__29031_SHARP_,p2__29032_SHARP_){
var val = cljs.core.first(p1__29031_SHARP_);
if((!((((val == null)) || (cljs.core.contains_QMARK_(cljs.pprint.special_params,val)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(cljs.core.second(p2__29032_SHARP_)),cljs.core.type(val))))))){
return cljs.pprint.format_error(["Parameter ",cljs.core.name(cljs.core.first(p2__29032_SHARP_))," has bad type in directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def)),"\": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(val))].join(''),cljs.core.second(p1__29031_SHARP_));
} else {
return null;
}
}),params,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def)));

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.reverse((function (){var iter__4529__auto__ = (function cljs$pprint$map_params_$_iter__29041(s__29042){
return (new cljs.core.LazySeq(null,(function (){
var s__29042__$1 = s__29042;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__29042__$1);
if(temp__5735__auto__){
var s__29042__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29042__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__29042__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__29044 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__29043 = (0);
while(true){
if((i__29043 < size__4528__auto__)){
var vec__29049 = cljs.core._nth(c__4527__auto__,i__29043);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29049,(0),null);
var vec__29052 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29049,(1),null);
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29052,(0),null);
cljs.core.chunk_append(b__29044,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$,offset], null)], null));

var G__30351 = (i__29043 + (1));
i__29043 = G__30351;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29044),cljs$pprint$map_params_$_iter__29041(cljs.core.chunk_rest(s__29042__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29044),null);
}
} else {
var vec__29055 = cljs.core.first(s__29042__$2);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29055,(0),null);
var vec__29058 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29055,(1),null);
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29058,(0),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$,offset], null)], null),cljs$pprint$map_params_$_iter__29041(cljs.core.rest(s__29042__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def));
})())),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__29033_SHARP_,p2__29034_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc,p1__29033_SHARP_,p2__29034_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__29035_SHARP_){
return cljs.core.first(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__29035_SHARP_,(1)));
}),cljs.core.zipmap(cljs.core.keys(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def)),params))),flags], 0));
});
cljs.pprint.compile_directive = (function cljs$pprint$compile_directive(s,offset){
var vec__29073 = cljs.pprint.extract_params(s,offset);
var raw_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29073,(0),null);
var vec__29076 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29073,(1),null);
var rest = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29076,(0),null);
var offset__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29076,(1),null);
var vec__29079 = cljs.pprint.extract_flags(rest,offset__$1);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29079,(0),null);
var vec__29082 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29079,(1),null);
var rest__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29082,(0),null);
var offset__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29082,(1),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29082,(2),null);
var directive = cljs.core.first(rest__$1);
var def = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.directive_table,clojure.string.upper_case(directive));
var params = (cljs.core.truth_(def)?cljs.pprint.map_params(def,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.pprint.translate_param,raw_params),flags,offset__$2):null);
if(cljs.core.not(directive)){
cljs.pprint.format_error("Format string ended in the middle of a directive",offset__$2);
} else {
}

if(cljs.core.not(def)){
cljs.pprint.format_error(["Directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(directive),"\" is undefined"].join(''),offset__$2);
} else {
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.pprint.compiled_directive((function (){var fexpr__29085 = new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656).cljs$core$IFn$_invoke$arity$1(def);
return (fexpr__29085.cljs$core$IFn$_invoke$arity$2 ? fexpr__29085.cljs$core$IFn$_invoke$arity$2(params,offset__$2) : fexpr__29085.call(null,params,offset__$2));
})(),def,params,offset__$2,null,null,null)),(function (){var remainder = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(rest__$1,(1));
var offset__$3 = (offset__$2 + (1));
var trim_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\n",new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def))) && (cljs.core.not(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))));
var trim_count = ((trim_QMARK_)?cljs.pprint.prefix_count(remainder,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ","\t"], null)):(0));
var remainder__$1 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(remainder,trim_count);
var offset__$4 = (offset__$3 + trim_count);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [remainder__$1,offset__$4], null);
})()], null);
});
cljs.pprint.compile_raw_string = (function cljs$pprint$compile_raw_string(s,offset){
return (new cljs.pprint.compiled_directive((function (_,a,___$1){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s], 0));

return a;
}),null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"string","string",-1989541586),s], null),offset,null,null,null));
});
cljs.pprint.right_bracket = (function cljs$pprint$right_bracket(this$){
return new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$)));
});
cljs.pprint.separator_QMARK_ = (function cljs$pprint$separator_QMARK_(this$){
return new cljs.core.Keyword(null,"separator","separator",-1628749125).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$)));
});
cljs.pprint.else_separator_QMARK_ = (function cljs$pprint$else_separator_QMARK_(this$){
var and__4115__auto__ = new cljs.core.Keyword(null,"separator","separator",-1628749125).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$)));
if(cljs.core.truth_(and__4115__auto__)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(this$));
} else {
return and__4115__auto__;
}
});
cljs.pprint.process_bracket = (function cljs$pprint$process_bracket(this$,remainder){
var vec__29094 = cljs.pprint.collect_clauses(new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$)),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(this$),remainder);
var subex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29094,(0),null);
var remainder__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29094,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.pprint.compiled_directive(new cljs.core.Keyword(null,"func","func",-238706040).cljs$core$IFn$_invoke$arity$1(this$),new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(this$),cljs.pprint.tuple_map(subex,new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(this$))], 0)),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(this$),null,null,null)),remainder__$1], null);
});
cljs.pprint.process_clause = (function cljs$pprint$process_clause(bracket_info,offset,remainder){
return cljs.pprint.consume((function (remainder__$1){
if(cljs.core.empty_QMARK_(remainder__$1)){
return cljs.pprint.format_error("No closing bracket found.",offset);
} else {
var this$ = cljs.core.first(remainder__$1);
var remainder__$2 = cljs.core.next(remainder__$1);
if(cljs.core.truth_(cljs.pprint.right_bracket(this$))){
return cljs.pprint.process_bracket(this$,remainder__$2);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(bracket_info),new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"right-bracket","right-bracket",951856080),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(this$),null,remainder__$2], null)], null);
} else {
if(cljs.core.truth_(cljs.pprint.else_separator_QMARK_(this$))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"else","else",-1508377146),null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(this$),remainder__$2], null)], null);
} else {
if(cljs.core.truth_(cljs.pprint.separator_QMARK_(this$))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"separator","separator",-1628749125),null,null,remainder__$2], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,remainder__$2], null);

}
}
}
}
}
}),remainder);
});
cljs.pprint.collect_clauses = (function cljs$pprint$collect_clauses(bracket_info,offset,remainder){
return cljs.core.second(cljs.pprint.consume((function (p__29101){
var vec__29102 = p__29101;
var clause_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29102,(0),null);
var saw_else = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29102,(1),null);
var remainder__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29102,(2),null);
var vec__29105 = cljs.pprint.process_clause(bracket_info,offset,remainder__$1);
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29105,(0),null);
var vec__29108 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29105,(1),null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29108,(0),null);
var right_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29108,(1),null);
var else_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29108,(2),null);
var remainder__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29108,(3),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"right-bracket","right-bracket",951856080))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause_map,cljs.core.PersistentArrayMap.createAsIfByAssoc([(cljs.core.truth_(saw_else)?new cljs.core.Keyword(null,"else","else",-1508377146):new cljs.core.Keyword(null,"clauses","clauses",1454841241)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),new cljs.core.Keyword(null,"right-params","right-params",-1790676237),right_params])], 0)),remainder__$2], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"else","else",-1508377146))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(clause_map))){
return cljs.pprint.format_error("Two else clauses (\"~:;\") inside bracket construction.",offset);
} else {
if(cljs.core.not(new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(bracket_info))){
return cljs.pprint.format_error("An else clause (\"~:;\") is in a bracket type that doesn't support it.",offset);
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"first","first",-644103046),new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(bracket_info))) && (cljs.core.seq(new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(clause_map))))){
return cljs.pprint.format_error("The else clause (\"~:;\") is only allowed in the first position for this directive.",offset);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"first","first",-644103046),new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(bracket_info))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause_map,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"else","else",-1508377146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),new cljs.core.Keyword(null,"else-params","else-params",-832171646),else_params], null)], 0)),false,remainder__$2], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause_map,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null)], null)], 0)),true,remainder__$2], null)], null);
}

}
}
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"separator","separator",-1628749125))){
if(cljs.core.truth_(saw_else)){
return cljs.pprint.format_error("A plain clause (with \"~;\") follows an else clause (\"~:;\") inside bracket construction.",offset);
} else {
if(cljs.core.not(new cljs.core.Keyword(null,"allows-separator","allows-separator",-818967742).cljs$core$IFn$_invoke$arity$1(bracket_info))){
return cljs.pprint.format_error("A separator (\"~;\") is in a bracket type that doesn't support it.",offset);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause_map,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null)], null)], 0)),false,remainder__$2], null)], null);

}
}
} else {
return null;
}
}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),cljs.core.PersistentVector.EMPTY], null),false,remainder], null)));
});
/**
 * Take a linearly compiled format and process the bracket directives to give it
 * the appropriate tree structure
 */
cljs.pprint.process_nesting = (function cljs$pprint$process_nesting(format){
return cljs.core.first(cljs.pprint.consume((function (remainder){
var this$ = cljs.core.first(remainder);
var remainder__$1 = cljs.core.next(remainder);
var bracket = new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$));
if(cljs.core.truth_(new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(bracket))){
return cljs.pprint.process_bracket(this$,remainder__$1);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,remainder__$1], null);
}
}),format));
});
/**
 * Compiles format-str into a compiled format which can be used as an argument
 * to cl-format just like a plain format string. Use this function for improved
 * performance when you're using the same format string repeatedly
 */
cljs.pprint.compile_format = (function cljs$pprint$compile_format(format_str){
var _STAR_format_str_STAR__orig_val__29113 = cljs.pprint._STAR_format_str_STAR_;
var _STAR_format_str_STAR__temp_val__29114 = format_str;
(cljs.pprint._STAR_format_str_STAR_ = _STAR_format_str_STAR__temp_val__29114);

try{return cljs.pprint.process_nesting(cljs.core.first(cljs.pprint.consume((function (p__29115){
var vec__29116 = p__29115;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29116,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29116,(1),null);
if(cljs.core.empty_QMARK_(s)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,s], null);
} else {
var tilde = s.indexOf("~");
if((tilde < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.compile_raw_string(s,offset),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",(offset + s.length)], null)], null);
} else {
if((tilde === (0))){
return cljs.pprint.compile_directive(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1)),(offset + (1)));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.compile_raw_string(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),tilde),offset),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,tilde),(tilde + offset)], null)], null);

}
}
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [format_str,(0)], null))));
}finally {(cljs.pprint._STAR_format_str_STAR_ = _STAR_format_str_STAR__orig_val__29113);
}});
/**
 * determine whether a given compiled format has any directives that depend on the
 * column number or pretty printing
 */
cljs.pprint.needs_pretty = (function cljs$pprint$needs_pretty(format){
var format__$1 = format;
while(true){
if(cljs.core.empty_QMARK_(format__$1)){
return false;
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"pretty","pretty",-1916372486).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"flags","flags",1775418075).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(cljs.core.first(format__$1))));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = cljs.core.some(cljs.pprint.needs_pretty,cljs.core.first(new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.first(format__$1)))));
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return cljs.core.some(cljs.pprint.needs_pretty,cljs.core.first(new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.first(format__$1)))));
}
}
})())){
return true;
} else {
var G__30393 = cljs.core.next(format__$1);
format__$1 = G__30393;
continue;
}
}
break;
}
});
/**
 * Executes the format with the arguments.
 */
cljs.pprint.execute_format = (function cljs$pprint$execute_format(var_args){
var G__29129 = arguments.length;
switch (G__29129) {
case 3:
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3 = (function (stream,format,args){
var sb = (new goog.string.StringBuffer());
var real_stream = ((((cljs.core.not(stream)) || (stream === true)))?(new cljs.core.StringBufferWriter(sb)):stream);
var wrapped_stream = ((((cljs.pprint.needs_pretty(format)) && (cljs.core.not(cljs.pprint.pretty_writer_QMARK_(real_stream)))))?cljs.pprint.get_pretty_writer(real_stream):real_stream);
var _STAR_out_STAR__orig_val__29134 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__29135 = wrapped_stream;
(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__29135);

try{try{cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(format,args);
}finally {if((!((real_stream === wrapped_stream)))){
cljs.core._flush(wrapped_stream);
} else {
}
}
if(cljs.core.not(stream)){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb);
} else {
if(stream === true){
return cljs.core.string_print(cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb));
} else {
return null;

}
}
}finally {(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__29134);
}}));

(cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2 = (function (format,args){
cljs.pprint.map_passing_context((function (element,context){
if(cljs.pprint.abort_QMARK_(context)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,context], null);
} else {
var vec__29137 = cljs.pprint.realize_parameter_list(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(element),context);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29137,(0),null);
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29137,(1),null);
var vec__29140 = cljs.pprint.unzip_map(params);
var params__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29140,(0),null);
var offsets = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29140,(1),null);
var params__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params__$1,new cljs.core.Keyword(null,"base-args","base-args",-1268706822),args__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"func","func",-238706040).cljs$core$IFn$_invoke$arity$1(element),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [params__$2,args__$1,offsets], null))], null);
}
}),args,format);

return null;
}));

(cljs.pprint.execute_format.cljs$lang$maxFixedArity = 3);

cljs.pprint.cached_compile = cljs.core.memoize(cljs.pprint.compile_format);
/**
 * Installs a function as a new method of multimethod associated with dispatch-value. 
 */
cljs.pprint.use_method = (function cljs$pprint$use_method(multifn,dispatch_val,func){
return cljs.core._add_method(multifn,dispatch_val,func);
});
cljs.pprint.reader_macros = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Symbol(null,"quote","quote",1377916282,null),"'",new cljs.core.Symbol(null,"var","var",870848730,null),"#'",new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),"@",new cljs.core.Symbol("clojure.core","unquote","clojure.core/unquote",843087510,null),"~",new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",1901963335,null),"@",new cljs.core.Symbol("cljs.core","unquote","cljs.core/unquote",1013085760,null),"~"], null);
cljs.pprint.pprint_reader_macro = (function cljs$pprint$pprint_reader_macro(alis){
var macro_char = (function (){var G__29147 = cljs.core.first(alis);
return (cljs.pprint.reader_macros.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.reader_macros.cljs$core$IFn$_invoke$arity$1(G__29147) : cljs.pprint.reader_macros.call(null,G__29147));
})();
if(cljs.core.truth_((function (){var and__4115__auto__ = macro_char;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(alis));
} else {
return and__4115__auto__;
}
})())){
cljs.core._write(cljs.core._STAR_out_STAR_,macro_char);

cljs.pprint.write_out(cljs.core.second(alis));

return true;
} else {
return null;
}
});
cljs.pprint.pprint_simple_list = (function cljs$pprint$pprint_simple_list(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__29149_30408 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__29150_30409 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__29151_30410 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__29152_30411 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__29151_30410);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__29152_30411);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

var length_count29155_30412 = (0);
var alis_30413__$1 = cljs.core.seq(alis);
while(true){
if(((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count29155_30412 < cljs.core._STAR_print_length_STAR_)))){
if(alis_30413__$1){
cljs.pprint.write_out(cljs.core.first(alis_30413__$1));

if(cljs.core.next(alis_30413__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",872268697));

var G__30414 = (length_count29155_30412 + (1));
var G__30415 = cljs.core.next(alis_30413__$1);
length_count29155_30412 = G__30414;
alis_30413__$1 = G__30415;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__29150_30409);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__29149_30408);
}}

return null;
});
cljs.pprint.pprint_list = (function cljs$pprint$pprint_list(alis){
if(cljs.core.not(cljs.pprint.pprint_reader_macro(alis))){
return cljs.pprint.pprint_simple_list(alis);
} else {
return null;
}
});
cljs.pprint.pprint_vector = (function cljs$pprint$pprint_vector(avec){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__29162_30416 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__29163_30417 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__29165_30418 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__29166_30419 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__29165_30418);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__29166_30419);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"[",null,"]");

var length_count29167_30422 = (0);
var aseq_30423 = cljs.core.seq(avec);
while(true){
if(((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count29167_30422 < cljs.core._STAR_print_length_STAR_)))){
if(aseq_30423){
cljs.pprint.write_out(cljs.core.first(aseq_30423));

if(cljs.core.next(aseq_30423)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",872268697));

var G__30426 = (length_count29167_30422 + (1));
var G__30427 = cljs.core.next(aseq_30423);
length_count29167_30422 = G__30426;
aseq_30423 = G__30427;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__29163_30417);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__29162_30416);
}}

return null;
});
cljs.pprint.pprint_array = (function (){var format_in__27391__auto__ = "~<[~;~@{~w~^, ~:_~}~;]~:>";
var cf__27392__auto__ = ((typeof format_in__27391__auto__ === 'string')?cljs.pprint.cached_compile(format_in__27391__auto__):format_in__27391__auto__);
return (function() { 
var G__30429__delegate = function (args__27393__auto__){
var navigator__27394__auto__ = cljs.pprint.init_navigator(args__27393__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27392__auto__,navigator__27394__auto__);
};
var G__30429 = function (var_args){
var args__27393__auto__ = null;
if (arguments.length > 0) {
var G__30439__i = 0, G__30439__a = new Array(arguments.length -  0);
while (G__30439__i < G__30439__a.length) {G__30439__a[G__30439__i] = arguments[G__30439__i + 0]; ++G__30439__i;}
  args__27393__auto__ = new cljs.core.IndexedSeq(G__30439__a,0,null);
} 
return G__30429__delegate.call(this,args__27393__auto__);};
G__30429.cljs$lang$maxFixedArity = 0;
G__30429.cljs$lang$applyTo = (function (arglist__30441){
var args__27393__auto__ = cljs.core.seq(arglist__30441);
return G__30429__delegate(args__27393__auto__);
});
G__30429.cljs$core$IFn$_invoke$arity$variadic = G__30429__delegate;
return G__30429;
})()
;
})();
cljs.pprint.pprint_map = (function cljs$pprint$pprint_map(amap){
var vec__29173 = (((!(cljs.core.record_QMARK_(amap))))?(function (){var fexpr__29180 = new cljs.core.Var(function(){return cljs.core.lift_ns;},new cljs.core.Symbol("cljs.core","lift-ns","cljs.core/lift-ns",463499081,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"lift-ns","lift-ns",602311926,null),"cljs/core.cljs",15,1,10307,10307,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null)], null)),"Returns [lifted-ns lifted-map] or nil if m can't be lifted.",(cljs.core.truth_(cljs.core.lift_ns)?cljs.core.lift_ns.cljs$lang$test:null)]));
return (fexpr__29180.cljs$core$IFn$_invoke$arity$1 ? fexpr__29180.cljs$core$IFn$_invoke$arity$1(amap) : fexpr__29180.call(null,amap));
})():null);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29173,(0),null);
var lift_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29173,(1),null);
var amap__$1 = (function (){var or__4126__auto__ = lift_map;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return amap;
}
})();
var prefix = (cljs.core.truth_(ns)?["#:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"{"].join(''):"{");
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__29184_30453 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__29185_30454 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__29186_30455 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__29187_30456 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__29186_30455);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__29187_30456);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,prefix,null,"}");

var length_count29190_30459 = (0);
var aseq_30460 = cljs.core.seq(amap__$1);
while(true){
if(((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count29190_30459 < cljs.core._STAR_print_length_STAR_)))){
if(aseq_30460){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__29191_30462 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__29192_30463 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__29193_30464 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__29194_30465 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__29193_30464);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__29194_30465);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);

cljs.pprint.write_out(cljs.core.ffirst(aseq_30460));

cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",872268697));

(cljs.pprint._STAR_current_length_STAR_ = (0));

cljs.pprint.write_out(cljs.core.fnext(cljs.core.first(aseq_30460)));

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__29192_30463);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__29191_30462);
}}


if(cljs.core.next(aseq_30460)){
cljs.core._write(cljs.core._STAR_out_STAR_,", ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",872268697));

var G__30468 = (length_count29190_30459 + (1));
var G__30469 = cljs.core.next(aseq_30460);
length_count29190_30459 = G__30468;
aseq_30460 = G__30469;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__29185_30454);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__29184_30453);
}}

return null;
});
cljs.pprint.pprint_simple_default = (function cljs$pprint$pprint_simple_default(obj){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([obj], 0)));
});
cljs.pprint.pprint_set = (function (){var format_in__27391__auto__ = "~<#{~;~@{~w~^ ~:_~}~;}~:>";
var cf__27392__auto__ = ((typeof format_in__27391__auto__ === 'string')?cljs.pprint.cached_compile(format_in__27391__auto__):format_in__27391__auto__);
return (function() { 
var G__30472__delegate = function (args__27393__auto__){
var navigator__27394__auto__ = cljs.pprint.init_navigator(args__27393__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27392__auto__,navigator__27394__auto__);
};
var G__30472 = function (var_args){
var args__27393__auto__ = null;
if (arguments.length > 0) {
var G__30473__i = 0, G__30473__a = new Array(arguments.length -  0);
while (G__30473__i < G__30473__a.length) {G__30473__a[G__30473__i] = arguments[G__30473__i + 0]; ++G__30473__i;}
  args__27393__auto__ = new cljs.core.IndexedSeq(G__30473__a,0,null);
} 
return G__30472__delegate.call(this,args__27393__auto__);};
G__30472.cljs$lang$maxFixedArity = 0;
G__30472.cljs$lang$applyTo = (function (arglist__30474){
var args__27393__auto__ = cljs.core.seq(arglist__30474);
return G__30472__delegate(args__27393__auto__);
});
G__30472.cljs$core$IFn$_invoke$arity$variadic = G__30472__delegate;
return G__30472;
})()
;
})();
cljs.pprint.type_map = new cljs.core.PersistentArrayMap(null, 2, ["core$future_call","Future","core$promise","Promise"], null);
/**
 * Map ugly type names to something simpler
 */
cljs.pprint.map_ref_type = (function cljs$pprint$map_ref_type(name){
var or__4126__auto__ = (function (){var temp__5735__auto__ = cljs.core.re_find(/^[^$]+\$[^$]+/,name);
if(cljs.core.truth_(temp__5735__auto__)){
var match = temp__5735__auto__;
return (cljs.pprint.type_map.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.type_map.cljs$core$IFn$_invoke$arity$1(match) : cljs.pprint.type_map.call(null,match));
} else {
return null;
}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return name;
}
});
cljs.pprint.pprint_ideref = (function cljs$pprint$pprint_ideref(o){
var prefix = ["#<",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint.map_ref_type(cljs.core.type(o).name)),"@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.getUid(o)),": "].join('');
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__29201_30483 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__29202_30484 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__29203_30485 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__29204_30486 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__29203_30485);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__29204_30486);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,prefix,null,">");

cljs.pprint.pprint_indent(new cljs.core.Keyword(null,"block","block",664686210),(- (((prefix).length) - (2))));

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",872268697));

cljs.pprint.write_out((((((((!((o == null))))?(((((o.cljs$lang$protocol_mask$partition1$ & (1))) || ((cljs.core.PROTOCOL_SENTINEL === o.cljs$core$IPending$))))?true:(((!o.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IPending,o):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IPending,o)))?(!(cljs.core._realized_QMARK_(o))):false))?new cljs.core.Keyword(null,"not-delivered","not-delivered",1599158697):cljs.core.deref(o)));

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__29202_30484);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__29201_30483);
}}

return null;
});
cljs.pprint.pprint_pqueue = (function (){var format_in__27391__auto__ = "~<<-(~;~@{~w~^ ~_~}~;)-<~:>";
var cf__27392__auto__ = ((typeof format_in__27391__auto__ === 'string')?cljs.pprint.cached_compile(format_in__27391__auto__):format_in__27391__auto__);
return (function() { 
var G__30490__delegate = function (args__27393__auto__){
var navigator__27394__auto__ = cljs.pprint.init_navigator(args__27393__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27392__auto__,navigator__27394__auto__);
};
var G__30490 = function (var_args){
var args__27393__auto__ = null;
if (arguments.length > 0) {
var G__30495__i = 0, G__30495__a = new Array(arguments.length -  0);
while (G__30495__i < G__30495__a.length) {G__30495__a[G__30495__i] = arguments[G__30495__i + 0]; ++G__30495__i;}
  args__27393__auto__ = new cljs.core.IndexedSeq(G__30495__a,0,null);
} 
return G__30490__delegate.call(this,args__27393__auto__);};
G__30490.cljs$lang$maxFixedArity = 0;
G__30490.cljs$lang$applyTo = (function (arglist__30496){
var args__27393__auto__ = cljs.core.seq(arglist__30496);
return G__30490__delegate(args__27393__auto__);
});
G__30490.cljs$core$IFn$_invoke$arity$variadic = G__30490__delegate;
return G__30490;
})()
;
})();
cljs.pprint.type_dispatcher = (function cljs$pprint$type_dispatcher(obj){
if((obj instanceof cljs.core.PersistentQueue)){
return new cljs.core.Keyword(null,"queue","queue",1455835879);
} else {
if((((!((obj == null))))?(((((obj.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$IDeref$))))?true:(((!obj.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,obj):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,obj))){
return new cljs.core.Keyword(null,"deref","deref",-145586795);
} else {
if((obj instanceof cljs.core.Symbol)){
return new cljs.core.Keyword(null,"symbol","symbol",-1038572696);
} else {
if(cljs.core.seq_QMARK_(obj)){
return new cljs.core.Keyword(null,"list","list",765357683);
} else {
if(cljs.core.map_QMARK_(obj)){
return new cljs.core.Keyword(null,"map","map",1371690461);
} else {
if(cljs.core.vector_QMARK_(obj)){
return new cljs.core.Keyword(null,"vector","vector",1902966158);
} else {
if(cljs.core.set_QMARK_(obj)){
return new cljs.core.Keyword(null,"set","set",304602554);
} else {
if((obj == null)){
return null;
} else {
return new cljs.core.Keyword(null,"default","default",-1987822328);

}
}
}
}
}
}
}
}
});
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.simple_dispatch !== 'undefined')){
} else {
/**
 * The pretty print dispatch function for simple data structure format.
 */
cljs.pprint.simple_dispatch = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__29226 = cljs.core.get_global_hierarchy;
return (fexpr__29226.cljs$core$IFn$_invoke$arity$0 ? fexpr__29226.cljs$core$IFn$_invoke$arity$0() : fexpr__29226.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","simple-dispatch"),cljs.pprint.type_dispatcher,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
cljs.pprint.use_method(cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"list","list",765357683),cljs.pprint.pprint_list);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"vector","vector",1902966158),cljs.pprint.pprint_vector);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"map","map",1371690461),cljs.pprint.pprint_map);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"set","set",304602554),cljs.pprint.pprint_set);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,null,(function (){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0)));
}));
cljs.pprint.use_method(cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),cljs.pprint.pprint_simple_default);
cljs.pprint.set_pprint_dispatch(cljs.pprint.simple_dispatch);
/**
 * Figure out which kind of brackets to use
 */
cljs.pprint.brackets = (function cljs$pprint$brackets(form){
if(cljs.core.vector_QMARK_(form)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[","]"], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(",")"], null);
}
});
/**
 * Pretty print a single reference (import, use, etc.) from a namespace decl
 */
cljs.pprint.pprint_ns_reference = (function cljs$pprint$pprint_ns_reference(reference){
if(cljs.core.sequential_QMARK_(reference)){
var vec__29229 = cljs.pprint.brackets(reference);
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29229,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29229,(1),null);
var vec__29232 = reference;
var seq__29233 = cljs.core.seq(vec__29232);
var first__29234 = cljs.core.first(seq__29233);
var seq__29233__$1 = cljs.core.next(seq__29233);
var keyw = first__29234;
var args = seq__29233__$1;
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__29235_30511 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__29236_30512 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__29237_30513 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__29238_30514 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__29237_30513);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__29238_30514);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,start,null,end);

(function (){var format_in__27391__auto__ = "~w~:i";
var cf__27392__auto__ = ((typeof format_in__27391__auto__ === 'string')?cljs.pprint.cached_compile(format_in__27391__auto__):format_in__27391__auto__);
return (function() { 
var G__30516__delegate = function (args__27393__auto__){
var navigator__27394__auto__ = cljs.pprint.init_navigator(args__27393__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27392__auto__,navigator__27394__auto__);
};
var G__30516 = function (var_args){
var args__27393__auto__ = null;
if (arguments.length > 0) {
var G__30518__i = 0, G__30518__a = new Array(arguments.length -  0);
while (G__30518__i < G__30518__a.length) {G__30518__a[G__30518__i] = arguments[G__30518__i + 0]; ++G__30518__i;}
  args__27393__auto__ = new cljs.core.IndexedSeq(G__30518__a,0,null);
} 
return G__30516__delegate.call(this,args__27393__auto__);};
G__30516.cljs$lang$maxFixedArity = 0;
G__30516.cljs$lang$applyTo = (function (arglist__30519){
var args__27393__auto__ = cljs.core.seq(arglist__30519);
return G__30516__delegate(args__27393__auto__);
});
G__30516.cljs$core$IFn$_invoke$arity$variadic = G__30516__delegate;
return G__30516;
})()
;
})()(keyw);

var args_30520__$1 = args;
while(true){
if(cljs.core.seq(args_30520__$1)){
(function (){var format_in__27391__auto__ = " ";
var cf__27392__auto__ = ((typeof format_in__27391__auto__ === 'string')?cljs.pprint.cached_compile(format_in__27391__auto__):format_in__27391__auto__);
return ((function (args_30520__$1,format_in__27391__auto__,cf__27392__auto__,_STAR_current_level_STAR__orig_val__29235_30511,_STAR_current_length_STAR__orig_val__29236_30512,_STAR_current_level_STAR__temp_val__29237_30513,_STAR_current_length_STAR__temp_val__29238_30514,vec__29229,start,end,vec__29232,seq__29233,first__29234,seq__29233__$1,keyw,args){
return (function() { 
var G__30521__delegate = function (args__27393__auto__){
var navigator__27394__auto__ = cljs.pprint.init_navigator(args__27393__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27392__auto__,navigator__27394__auto__);
};
var G__30521 = function (var_args){
var args__27393__auto__ = null;
if (arguments.length > 0) {
var G__30523__i = 0, G__30523__a = new Array(arguments.length -  0);
while (G__30523__i < G__30523__a.length) {G__30523__a[G__30523__i] = arguments[G__30523__i + 0]; ++G__30523__i;}
  args__27393__auto__ = new cljs.core.IndexedSeq(G__30523__a,0,null);
} 
return G__30521__delegate.call(this,args__27393__auto__);};
G__30521.cljs$lang$maxFixedArity = 0;
G__30521.cljs$lang$applyTo = (function (arglist__30524){
var args__27393__auto__ = cljs.core.seq(arglist__30524);
return G__30521__delegate(args__27393__auto__);
});
G__30521.cljs$core$IFn$_invoke$arity$variadic = G__30521__delegate;
return G__30521;
})()
;
;})(args_30520__$1,format_in__27391__auto__,cf__27392__auto__,_STAR_current_level_STAR__orig_val__29235_30511,_STAR_current_length_STAR__orig_val__29236_30512,_STAR_current_level_STAR__temp_val__29237_30513,_STAR_current_length_STAR__temp_val__29238_30514,vec__29229,start,end,vec__29232,seq__29233,first__29234,seq__29233__$1,keyw,args))
})()();

var arg_30525 = cljs.core.first(args_30520__$1);
if(cljs.core.sequential_QMARK_(arg_30525)){
var vec__29241_30526 = cljs.pprint.brackets(arg_30525);
var start_30527__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29241_30526,(0),null);
var end_30528__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29241_30526,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__29246_30529 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__29247_30530 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__29248_30531 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__29249_30532 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__29248_30531);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__29249_30532);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,start_30527__$1,null,end_30528__$1);

if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(arg_30525),(3))) && ((cljs.core.second(arg_30525) instanceof cljs.core.Keyword)))){
var vec__29251_30533 = arg_30525;
var ns_30534 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29251_30533,(0),null);
var kw_30535 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29251_30533,(1),null);
var lis_30536 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29251_30533,(2),null);
(function (){var format_in__27391__auto__ = "~w ~w ";
var cf__27392__auto__ = ((typeof format_in__27391__auto__ === 'string')?cljs.pprint.cached_compile(format_in__27391__auto__):format_in__27391__auto__);
return ((function (args_30520__$1,format_in__27391__auto__,cf__27392__auto__,vec__29251_30533,ns_30534,kw_30535,lis_30536,_STAR_current_level_STAR__orig_val__29246_30529,_STAR_current_length_STAR__orig_val__29247_30530,_STAR_current_level_STAR__temp_val__29248_30531,_STAR_current_length_STAR__temp_val__29249_30532,vec__29241_30526,start_30527__$1,end_30528__$1,arg_30525,_STAR_current_level_STAR__orig_val__29235_30511,_STAR_current_length_STAR__orig_val__29236_30512,_STAR_current_level_STAR__temp_val__29237_30513,_STAR_current_length_STAR__temp_val__29238_30514,vec__29229,start,end,vec__29232,seq__29233,first__29234,seq__29233__$1,keyw,args){
return (function() { 
var G__30538__delegate = function (args__27393__auto__){
var navigator__27394__auto__ = cljs.pprint.init_navigator(args__27393__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27392__auto__,navigator__27394__auto__);
};
var G__30538 = function (var_args){
var args__27393__auto__ = null;
if (arguments.length > 0) {
var G__30540__i = 0, G__30540__a = new Array(arguments.length -  0);
while (G__30540__i < G__30540__a.length) {G__30540__a[G__30540__i] = arguments[G__30540__i + 0]; ++G__30540__i;}
  args__27393__auto__ = new cljs.core.IndexedSeq(G__30540__a,0,null);
} 
return G__30538__delegate.call(this,args__27393__auto__);};
G__30538.cljs$lang$maxFixedArity = 0;
G__30538.cljs$lang$applyTo = (function (arglist__30541){
var args__27393__auto__ = cljs.core.seq(arglist__30541);
return G__30538__delegate(args__27393__auto__);
});
G__30538.cljs$core$IFn$_invoke$arity$variadic = G__30538__delegate;
return G__30538;
})()
;
;})(args_30520__$1,format_in__27391__auto__,cf__27392__auto__,vec__29251_30533,ns_30534,kw_30535,lis_30536,_STAR_current_level_STAR__orig_val__29246_30529,_STAR_current_length_STAR__orig_val__29247_30530,_STAR_current_level_STAR__temp_val__29248_30531,_STAR_current_length_STAR__temp_val__29249_30532,vec__29241_30526,start_30527__$1,end_30528__$1,arg_30525,_STAR_current_level_STAR__orig_val__29235_30511,_STAR_current_length_STAR__orig_val__29236_30512,_STAR_current_level_STAR__temp_val__29237_30513,_STAR_current_length_STAR__temp_val__29238_30514,vec__29229,start,end,vec__29232,seq__29233,first__29234,seq__29233__$1,keyw,args))
})()(ns_30534,kw_30535);

if(cljs.core.sequential_QMARK_(lis_30536)){
(function (){var format_in__27391__auto__ = ((cljs.core.vector_QMARK_(lis_30536))?"~<[~;~@{~w~^ ~:_~}~;]~:>":"~<(~;~@{~w~^ ~:_~}~;)~:>");
var cf__27392__auto__ = ((typeof format_in__27391__auto__ === 'string')?cljs.pprint.cached_compile(format_in__27391__auto__):format_in__27391__auto__);
return ((function (args_30520__$1,format_in__27391__auto__,cf__27392__auto__,vec__29251_30533,ns_30534,kw_30535,lis_30536,_STAR_current_level_STAR__orig_val__29246_30529,_STAR_current_length_STAR__orig_val__29247_30530,_STAR_current_level_STAR__temp_val__29248_30531,_STAR_current_length_STAR__temp_val__29249_30532,vec__29241_30526,start_30527__$1,end_30528__$1,arg_30525,_STAR_current_level_STAR__orig_val__29235_30511,_STAR_current_length_STAR__orig_val__29236_30512,_STAR_current_level_STAR__temp_val__29237_30513,_STAR_current_length_STAR__temp_val__29238_30514,vec__29229,start,end,vec__29232,seq__29233,first__29234,seq__29233__$1,keyw,args){
return (function() { 
var G__30545__delegate = function (args__27393__auto__){
var navigator__27394__auto__ = cljs.pprint.init_navigator(args__27393__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27392__auto__,navigator__27394__auto__);
};
var G__30545 = function (var_args){
var args__27393__auto__ = null;
if (arguments.length > 0) {
var G__30546__i = 0, G__30546__a = new Array(arguments.length -  0);
while (G__30546__i < G__30546__a.length) {G__30546__a[G__30546__i] = arguments[G__30546__i + 0]; ++G__30546__i;}
  args__27393__auto__ = new cljs.core.IndexedSeq(G__30546__a,0,null);
} 
return G__30545__delegate.call(this,args__27393__auto__);};
G__30545.cljs$lang$maxFixedArity = 0;
G__30545.cljs$lang$applyTo = (function (arglist__30547){
var args__27393__auto__ = cljs.core.seq(arglist__30547);
return G__30545__delegate(args__27393__auto__);
});
G__30545.cljs$core$IFn$_invoke$arity$variadic = G__30545__delegate;
return G__30545;
})()
;
;})(args_30520__$1,format_in__27391__auto__,cf__27392__auto__,vec__29251_30533,ns_30534,kw_30535,lis_30536,_STAR_current_level_STAR__orig_val__29246_30529,_STAR_current_length_STAR__orig_val__29247_30530,_STAR_current_level_STAR__temp_val__29248_30531,_STAR_current_length_STAR__temp_val__29249_30532,vec__29241_30526,start_30527__$1,end_30528__$1,arg_30525,_STAR_current_level_STAR__orig_val__29235_30511,_STAR_current_length_STAR__orig_val__29236_30512,_STAR_current_level_STAR__temp_val__29237_30513,_STAR_current_length_STAR__temp_val__29238_30514,vec__29229,start,end,vec__29232,seq__29233,first__29234,seq__29233__$1,keyw,args))
})()(lis_30536);
} else {
cljs.pprint.write_out(lis_30536);
}
} else {
cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var format_in__27391__auto__ = "~w ~:i~@{~w~^ ~:_~}";
var cf__27392__auto__ = ((typeof format_in__27391__auto__ === 'string')?cljs.pprint.cached_compile(format_in__27391__auto__):format_in__27391__auto__);
return ((function (args_30520__$1,format_in__27391__auto__,cf__27392__auto__,_STAR_current_level_STAR__orig_val__29246_30529,_STAR_current_length_STAR__orig_val__29247_30530,_STAR_current_level_STAR__temp_val__29248_30531,_STAR_current_length_STAR__temp_val__29249_30532,vec__29241_30526,start_30527__$1,end_30528__$1,arg_30525,_STAR_current_level_STAR__orig_val__29235_30511,_STAR_current_length_STAR__orig_val__29236_30512,_STAR_current_level_STAR__temp_val__29237_30513,_STAR_current_length_STAR__temp_val__29238_30514,vec__29229,start,end,vec__29232,seq__29233,first__29234,seq__29233__$1,keyw,args){
return (function() { 
var G__30548__delegate = function (args__27393__auto__){
var navigator__27394__auto__ = cljs.pprint.init_navigator(args__27393__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27392__auto__,navigator__27394__auto__);
};
var G__30548 = function (var_args){
var args__27393__auto__ = null;
if (arguments.length > 0) {
var G__30550__i = 0, G__30550__a = new Array(arguments.length -  0);
while (G__30550__i < G__30550__a.length) {G__30550__a[G__30550__i] = arguments[G__30550__i + 0]; ++G__30550__i;}
  args__27393__auto__ = new cljs.core.IndexedSeq(G__30550__a,0,null);
} 
return G__30548__delegate.call(this,args__27393__auto__);};
G__30548.cljs$lang$maxFixedArity = 0;
G__30548.cljs$lang$applyTo = (function (arglist__30551){
var args__27393__auto__ = cljs.core.seq(arglist__30551);
return G__30548__delegate(args__27393__auto__);
});
G__30548.cljs$core$IFn$_invoke$arity$variadic = G__30548__delegate;
return G__30548;
})()
;
;})(args_30520__$1,format_in__27391__auto__,cf__27392__auto__,_STAR_current_level_STAR__orig_val__29246_30529,_STAR_current_length_STAR__orig_val__29247_30530,_STAR_current_level_STAR__temp_val__29248_30531,_STAR_current_length_STAR__temp_val__29249_30532,vec__29241_30526,start_30527__$1,end_30528__$1,arg_30525,_STAR_current_level_STAR__orig_val__29235_30511,_STAR_current_length_STAR__orig_val__29236_30512,_STAR_current_level_STAR__temp_val__29237_30513,_STAR_current_length_STAR__temp_val__29238_30514,vec__29229,start,end,vec__29232,seq__29233,first__29234,seq__29233__$1,keyw,args))
})(),arg_30525);
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__29247_30530);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__29246_30529);
}}


if(cljs.core.next(args_30520__$1)){
(function (){var format_in__27391__auto__ = "~_";
var cf__27392__auto__ = ((typeof format_in__27391__auto__ === 'string')?cljs.pprint.cached_compile(format_in__27391__auto__):format_in__27391__auto__);
return ((function (args_30520__$1,format_in__27391__auto__,cf__27392__auto__,vec__29241_30526,start_30527__$1,end_30528__$1,arg_30525,_STAR_current_level_STAR__orig_val__29235_30511,_STAR_current_length_STAR__orig_val__29236_30512,_STAR_current_level_STAR__temp_val__29237_30513,_STAR_current_length_STAR__temp_val__29238_30514,vec__29229,start,end,vec__29232,seq__29233,first__29234,seq__29233__$1,keyw,args){
return (function() { 
var G__30553__delegate = function (args__27393__auto__){
var navigator__27394__auto__ = cljs.pprint.init_navigator(args__27393__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27392__auto__,navigator__27394__auto__);
};
var G__30553 = function (var_args){
var args__27393__auto__ = null;
if (arguments.length > 0) {
var G__30554__i = 0, G__30554__a = new Array(arguments.length -  0);
while (G__30554__i < G__30554__a.length) {G__30554__a[G__30554__i] = arguments[G__30554__i + 0]; ++G__30554__i;}
  args__27393__auto__ = new cljs.core.IndexedSeq(G__30554__a,0,null);
} 
return G__30553__delegate.call(this,args__27393__auto__);};
G__30553.cljs$lang$maxFixedArity = 0;
G__30553.cljs$lang$applyTo = (function (arglist__30555){
var args__27393__auto__ = cljs.core.seq(arglist__30555);
return G__30553__delegate(args__27393__auto__);
});
G__30553.cljs$core$IFn$_invoke$arity$variadic = G__30553__delegate;
return G__30553;
})()
;
;})(args_30520__$1,format_in__27391__auto__,cf__27392__auto__,vec__29241_30526,start_30527__$1,end_30528__$1,arg_30525,_STAR_current_level_STAR__orig_val__29235_30511,_STAR_current_length_STAR__orig_val__29236_30512,_STAR_current_level_STAR__temp_val__29237_30513,_STAR_current_length_STAR__temp_val__29238_30514,vec__29229,start,end,vec__29232,seq__29233,first__29234,seq__29233__$1,keyw,args))
})()();
} else {
}
} else {
cljs.pprint.write_out(arg_30525);

if(cljs.core.next(args_30520__$1)){
(function (){var format_in__27391__auto__ = "~:_";
var cf__27392__auto__ = ((typeof format_in__27391__auto__ === 'string')?cljs.pprint.cached_compile(format_in__27391__auto__):format_in__27391__auto__);
return ((function (args_30520__$1,format_in__27391__auto__,cf__27392__auto__,arg_30525,_STAR_current_level_STAR__orig_val__29235_30511,_STAR_current_length_STAR__orig_val__29236_30512,_STAR_current_level_STAR__temp_val__29237_30513,_STAR_current_length_STAR__temp_val__29238_30514,vec__29229,start,end,vec__29232,seq__29233,first__29234,seq__29233__$1,keyw,args){
return (function() { 
var G__30556__delegate = function (args__27393__auto__){
var navigator__27394__auto__ = cljs.pprint.init_navigator(args__27393__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27392__auto__,navigator__27394__auto__);
};
var G__30556 = function (var_args){
var args__27393__auto__ = null;
if (arguments.length > 0) {
var G__30557__i = 0, G__30557__a = new Array(arguments.length -  0);
while (G__30557__i < G__30557__a.length) {G__30557__a[G__30557__i] = arguments[G__30557__i + 0]; ++G__30557__i;}
  args__27393__auto__ = new cljs.core.IndexedSeq(G__30557__a,0,null);
} 
return G__30556__delegate.call(this,args__27393__auto__);};
G__30556.cljs$lang$maxFixedArity = 0;
G__30556.cljs$lang$applyTo = (function (arglist__30558){
var args__27393__auto__ = cljs.core.seq(arglist__30558);
return G__30556__delegate(args__27393__auto__);
});
G__30556.cljs$core$IFn$_invoke$arity$variadic = G__30556__delegate;
return G__30556;
})()
;
;})(args_30520__$1,format_in__27391__auto__,cf__27392__auto__,arg_30525,_STAR_current_level_STAR__orig_val__29235_30511,_STAR_current_length_STAR__orig_val__29236_30512,_STAR_current_level_STAR__temp_val__29237_30513,_STAR_current_length_STAR__temp_val__29238_30514,vec__29229,start,end,vec__29232,seq__29233,first__29234,seq__29233__$1,keyw,args))
})()();
} else {
}
}

var G__30559 = cljs.core.next(args_30520__$1);
args_30520__$1 = G__30559;
continue;
} else {
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__29236_30512);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__29235_30511);
}}

return null;
} else {
return cljs.pprint.write_out(reference);
}
});
/**
 * The pretty print dispatch chunk for the ns macro
 */
cljs.pprint.pprint_ns = (function cljs$pprint$pprint_ns(alis){
if(cljs.core.next(alis)){
var vec__29264 = alis;
var seq__29265 = cljs.core.seq(vec__29264);
var first__29266 = cljs.core.first(seq__29265);
var seq__29265__$1 = cljs.core.next(seq__29265);
var ns_sym = first__29266;
var first__29266__$1 = cljs.core.first(seq__29265__$1);
var seq__29265__$2 = cljs.core.next(seq__29265__$1);
var ns_name = first__29266__$1;
var stuff = seq__29265__$2;
var vec__29267 = ((typeof cljs.core.first(stuff) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff),cljs.core.next(stuff)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff], null));
var doc_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29267,(0),null);
var stuff__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29267,(1),null);
var vec__29270 = ((cljs.core.map_QMARK_(cljs.core.first(stuff__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff__$1),cljs.core.next(stuff__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff__$1], null));
var attr_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29270,(0),null);
var references = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29270,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__29275_30562 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__29276_30563 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__29277_30564 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__29278_30565 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__29277_30564);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__29278_30565);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

(function (){var format_in__27391__auto__ = "~w ~1I~@_~w";
var cf__27392__auto__ = ((typeof format_in__27391__auto__ === 'string')?cljs.pprint.cached_compile(format_in__27391__auto__):format_in__27391__auto__);
return (function() { 
var G__30566__delegate = function (args__27393__auto__){
var navigator__27394__auto__ = cljs.pprint.init_navigator(args__27393__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27392__auto__,navigator__27394__auto__);
};
var G__30566 = function (var_args){
var args__27393__auto__ = null;
if (arguments.length > 0) {
var G__30568__i = 0, G__30568__a = new Array(arguments.length -  0);
while (G__30568__i < G__30568__a.length) {G__30568__a[G__30568__i] = arguments[G__30568__i + 0]; ++G__30568__i;}
  args__27393__auto__ = new cljs.core.IndexedSeq(G__30568__a,0,null);
} 
return G__30566__delegate.call(this,args__27393__auto__);};
G__30566.cljs$lang$maxFixedArity = 0;
G__30566.cljs$lang$applyTo = (function (arglist__30569){
var args__27393__auto__ = cljs.core.seq(arglist__30569);
return G__30566__delegate(args__27393__auto__);
});
G__30566.cljs$core$IFn$_invoke$arity$variadic = G__30566__delegate;
return G__30566;
})()
;
})()(ns_sym,ns_name);

if(cljs.core.truth_((function (){var or__4126__auto__ = doc_str;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = attr_map;
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return cljs.core.seq(references);
}
}
})())){
(function (){var format_in__27391__auto__ = "~@:_";
var cf__27392__auto__ = ((typeof format_in__27391__auto__ === 'string')?cljs.pprint.cached_compile(format_in__27391__auto__):format_in__27391__auto__);
return (function() { 
var G__30570__delegate = function (args__27393__auto__){
var navigator__27394__auto__ = cljs.pprint.init_navigator(args__27393__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27392__auto__,navigator__27394__auto__);
};
var G__30570 = function (var_args){
var args__27393__auto__ = null;
if (arguments.length > 0) {
var G__30571__i = 0, G__30571__a = new Array(arguments.length -  0);
while (G__30571__i < G__30571__a.length) {G__30571__a[G__30571__i] = arguments[G__30571__i + 0]; ++G__30571__i;}
  args__27393__auto__ = new cljs.core.IndexedSeq(G__30571__a,0,null);
} 
return G__30570__delegate.call(this,args__27393__auto__);};
G__30570.cljs$lang$maxFixedArity = 0;
G__30570.cljs$lang$applyTo = (function (arglist__30572){
var args__27393__auto__ = cljs.core.seq(arglist__30572);
return G__30570__delegate(args__27393__auto__);
});
G__30570.cljs$core$IFn$_invoke$arity$variadic = G__30570__delegate;
return G__30570;
})()
;
})()();
} else {
}

if(cljs.core.truth_(doc_str)){
cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(true,"\"~a\"~:[~;~:@_~]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([doc_str,(function (){var or__4126__auto__ = attr_map;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.seq(references);
}
})()], 0));
} else {
}

if(cljs.core.truth_(attr_map)){
(function (){var format_in__27391__auto__ = "~w~:[~;~:@_~]";
var cf__27392__auto__ = ((typeof format_in__27391__auto__ === 'string')?cljs.pprint.cached_compile(format_in__27391__auto__):format_in__27391__auto__);
return (function() { 
var G__30573__delegate = function (args__27393__auto__){
var navigator__27394__auto__ = cljs.pprint.init_navigator(args__27393__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27392__auto__,navigator__27394__auto__);
};
var G__30573 = function (var_args){
var args__27393__auto__ = null;
if (arguments.length > 0) {
var G__30574__i = 0, G__30574__a = new Array(arguments.length -  0);
while (G__30574__i < G__30574__a.length) {G__30574__a[G__30574__i] = arguments[G__30574__i + 0]; ++G__30574__i;}
  args__27393__auto__ = new cljs.core.IndexedSeq(G__30574__a,0,null);
} 
return G__30573__delegate.call(this,args__27393__auto__);};
G__30573.cljs$lang$maxFixedArity = 0;
G__30573.cljs$lang$applyTo = (function (arglist__30575){
var args__27393__auto__ = cljs.core.seq(arglist__30575);
return G__30573__delegate(args__27393__auto__);
});
G__30573.cljs$core$IFn$_invoke$arity$variadic = G__30573__delegate;
return G__30573;
})()
;
})()(attr_map,cljs.core.seq(references));
} else {
}

var references_30576__$1 = references;
while(true){
cljs.pprint.pprint_ns_reference(cljs.core.first(references_30576__$1));

var temp__5735__auto___30577 = cljs.core.next(references_30576__$1);
if(temp__5735__auto___30577){
var references_30578__$2 = temp__5735__auto___30577;
cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",872268697));

var G__30579 = references_30578__$2;
references_30576__$1 = G__30579;
continue;
} else {
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__29276_30563);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__29275_30562);
}}

return null;
} else {
return cljs.pprint.write_out(alis);
}
});
cljs.pprint.pprint_hold_first = (function (){var format_in__27391__auto__ = "~:<~w~^ ~@_~w~^ ~_~@{~w~^ ~_~}~:>";
var cf__27392__auto__ = ((typeof format_in__27391__auto__ === 'string')?cljs.pprint.cached_compile(format_in__27391__auto__):format_in__27391__auto__);
return (function() { 
var G__30580__delegate = function (args__27393__auto__){
var navigator__27394__auto__ = cljs.pprint.init_navigator(args__27393__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27392__auto__,navigator__27394__auto__);
};
var G__30580 = function (var_args){
var args__27393__auto__ = null;
if (arguments.length > 0) {
var G__30581__i = 0, G__30581__a = new Array(arguments.length -  0);
while (G__30581__i < G__30581__a.length) {G__30581__a[G__30581__i] = arguments[G__30581__i + 0]; ++G__30581__i;}
  args__27393__auto__ = new cljs.core.IndexedSeq(G__30581__a,0,null);
} 
return G__30580__delegate.call(this,args__27393__auto__);};
G__30580.cljs$lang$maxFixedArity = 0;
G__30580.cljs$lang$applyTo = (function (arglist__30582){
var args__27393__auto__ = cljs.core.seq(arglist__30582);
return G__30580__delegate(args__27393__auto__);
});
G__30580.cljs$core$IFn$_invoke$arity$variadic = G__30580__delegate;
return G__30580;
})()
;
})();
cljs.pprint.single_defn = (function cljs$pprint$single_defn(alis,has_doc_str_QMARK_){
if(cljs.core.seq(alis)){
if(cljs.core.truth_(has_doc_str_QMARK_)){
(function (){var format_in__27391__auto__ = " ~_";
var cf__27392__auto__ = ((typeof format_in__27391__auto__ === 'string')?cljs.pprint.cached_compile(format_in__27391__auto__):format_in__27391__auto__);
return (function() { 
var G__30583__delegate = function (args__27393__auto__){
var navigator__27394__auto__ = cljs.pprint.init_navigator(args__27393__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27392__auto__,navigator__27394__auto__);
};
var G__30583 = function (var_args){
var args__27393__auto__ = null;
if (arguments.length > 0) {
var G__30584__i = 0, G__30584__a = new Array(arguments.length -  0);
while (G__30584__i < G__30584__a.length) {G__30584__a[G__30584__i] = arguments[G__30584__i + 0]; ++G__30584__i;}
  args__27393__auto__ = new cljs.core.IndexedSeq(G__30584__a,0,null);
} 
return G__30583__delegate.call(this,args__27393__auto__);};
G__30583.cljs$lang$maxFixedArity = 0;
G__30583.cljs$lang$applyTo = (function (arglist__30585){
var args__27393__auto__ = cljs.core.seq(arglist__30585);
return G__30583__delegate(args__27393__auto__);
});
G__30583.cljs$core$IFn$_invoke$arity$variadic = G__30583__delegate;
return G__30583;
})()
;
})()();
} else {
(function (){var format_in__27391__auto__ = " ~@_";
var cf__27392__auto__ = ((typeof format_in__27391__auto__ === 'string')?cljs.pprint.cached_compile(format_in__27391__auto__):format_in__27391__auto__);
return (function() { 
var G__30586__delegate = function (args__27393__auto__){
var navigator__27394__auto__ = cljs.pprint.init_navigator(args__27393__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27392__auto__,navigator__27394__auto__);
};
var G__30586 = function (var_args){
var args__27393__auto__ = null;
if (arguments.length > 0) {
var G__30587__i = 0, G__30587__a = new Array(arguments.length -  0);
while (G__30587__i < G__30587__a.length) {G__30587__a[G__30587__i] = arguments[G__30587__i + 0]; ++G__30587__i;}
  args__27393__auto__ = new cljs.core.IndexedSeq(G__30587__a,0,null);
} 
return G__30586__delegate.call(this,args__27393__auto__);};
G__30586.cljs$lang$maxFixedArity = 0;
G__30586.cljs$lang$applyTo = (function (arglist__30588){
var args__27393__auto__ = cljs.core.seq(arglist__30588);
return G__30586__delegate(args__27393__auto__);
});
G__30586.cljs$core$IFn$_invoke$arity$variadic = G__30586__delegate;
return G__30586;
})()
;
})()();
}

return (function (){var format_in__27391__auto__ = "~{~w~^ ~_~}";
var cf__27392__auto__ = ((typeof format_in__27391__auto__ === 'string')?cljs.pprint.cached_compile(format_in__27391__auto__):format_in__27391__auto__);
return (function() { 
var G__30589__delegate = function (args__27393__auto__){
var navigator__27394__auto__ = cljs.pprint.init_navigator(args__27393__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27392__auto__,navigator__27394__auto__);
};
var G__30589 = function (var_args){
var args__27393__auto__ = null;
if (arguments.length > 0) {
var G__30590__i = 0, G__30590__a = new Array(arguments.length -  0);
while (G__30590__i < G__30590__a.length) {G__30590__a[G__30590__i] = arguments[G__30590__i + 0]; ++G__30590__i;}
  args__27393__auto__ = new cljs.core.IndexedSeq(G__30590__a,0,null);
} 
return G__30589__delegate.call(this,args__27393__auto__);};
G__30589.cljs$lang$maxFixedArity = 0;
G__30589.cljs$lang$applyTo = (function (arglist__30591){
var args__27393__auto__ = cljs.core.seq(arglist__30591);
return G__30589__delegate(args__27393__auto__);
});
G__30589.cljs$core$IFn$_invoke$arity$variadic = G__30589__delegate;
return G__30589;
})()
;
})()(alis);
} else {
return null;
}
});
cljs.pprint.multi_defn = (function cljs$pprint$multi_defn(alis,has_doc_str_QMARK_){
if(cljs.core.seq(alis)){
return (function (){var format_in__27391__auto__ = " ~_~{~w~^ ~_~}";
var cf__27392__auto__ = ((typeof format_in__27391__auto__ === 'string')?cljs.pprint.cached_compile(format_in__27391__auto__):format_in__27391__auto__);
return (function() { 
var G__30592__delegate = function (args__27393__auto__){
var navigator__27394__auto__ = cljs.pprint.init_navigator(args__27393__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27392__auto__,navigator__27394__auto__);
};
var G__30592 = function (var_args){
var args__27393__auto__ = null;
if (arguments.length > 0) {
var G__30593__i = 0, G__30593__a = new Array(arguments.length -  0);
while (G__30593__i < G__30593__a.length) {G__30593__a[G__30593__i] = arguments[G__30593__i + 0]; ++G__30593__i;}
  args__27393__auto__ = new cljs.core.IndexedSeq(G__30593__a,0,null);
} 
return G__30592__delegate.call(this,args__27393__auto__);};
G__30592.cljs$lang$maxFixedArity = 0;
G__30592.cljs$lang$applyTo = (function (arglist__30594){
var args__27393__auto__ = cljs.core.seq(arglist__30594);
return G__30592__delegate(args__27393__auto__);
});
G__30592.cljs$core$IFn$_invoke$arity$variadic = G__30592__delegate;
return G__30592;
})()
;
})()(alis);
} else {
return null;
}
});
cljs.pprint.pprint_defn = (function cljs$pprint$pprint_defn(alis){
if(cljs.core.next(alis)){
var vec__29288 = alis;
var seq__29289 = cljs.core.seq(vec__29288);
var first__29290 = cljs.core.first(seq__29289);
var seq__29289__$1 = cljs.core.next(seq__29289);
var defn_sym = first__29290;
var first__29290__$1 = cljs.core.first(seq__29289__$1);
var seq__29289__$2 = cljs.core.next(seq__29289__$1);
var defn_name = first__29290__$1;
var stuff = seq__29289__$2;
var vec__29291 = ((typeof cljs.core.first(stuff) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff),cljs.core.next(stuff)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff], null));
var doc_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29291,(0),null);
var stuff__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29291,(1),null);
var vec__29294 = ((cljs.core.map_QMARK_(cljs.core.first(stuff__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff__$1),cljs.core.next(stuff__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff__$1], null));
var attr_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29294,(0),null);
var stuff__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29294,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__29298_30597 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__29299_30598 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__29300_30599 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__29301_30600 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__29300_30599);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__29301_30600);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

(function (){var format_in__27391__auto__ = "~w ~1I~@_~w";
var cf__27392__auto__ = ((typeof format_in__27391__auto__ === 'string')?cljs.pprint.cached_compile(format_in__27391__auto__):format_in__27391__auto__);
return (function() { 
var G__30601__delegate = function (args__27393__auto__){
var navigator__27394__auto__ = cljs.pprint.init_navigator(args__27393__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27392__auto__,navigator__27394__auto__);
};
var G__30601 = function (var_args){
var args__27393__auto__ = null;
if (arguments.length > 0) {
var G__30602__i = 0, G__30602__a = new Array(arguments.length -  0);
while (G__30602__i < G__30602__a.length) {G__30602__a[G__30602__i] = arguments[G__30602__i + 0]; ++G__30602__i;}
  args__27393__auto__ = new cljs.core.IndexedSeq(G__30602__a,0,null);
} 
return G__30601__delegate.call(this,args__27393__auto__);};
G__30601.cljs$lang$maxFixedArity = 0;
G__30601.cljs$lang$applyTo = (function (arglist__30603){
var args__27393__auto__ = cljs.core.seq(arglist__30603);
return G__30601__delegate(args__27393__auto__);
});
G__30601.cljs$core$IFn$_invoke$arity$variadic = G__30601__delegate;
return G__30601;
})()
;
})()(defn_sym,defn_name);

if(cljs.core.truth_(doc_str)){
(function (){var format_in__27391__auto__ = " ~_~w";
var cf__27392__auto__ = ((typeof format_in__27391__auto__ === 'string')?cljs.pprint.cached_compile(format_in__27391__auto__):format_in__27391__auto__);
return (function() { 
var G__30608__delegate = function (args__27393__auto__){
var navigator__27394__auto__ = cljs.pprint.init_navigator(args__27393__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27392__auto__,navigator__27394__auto__);
};
var G__30608 = function (var_args){
var args__27393__auto__ = null;
if (arguments.length > 0) {
var G__30609__i = 0, G__30609__a = new Array(arguments.length -  0);
while (G__30609__i < G__30609__a.length) {G__30609__a[G__30609__i] = arguments[G__30609__i + 0]; ++G__30609__i;}
  args__27393__auto__ = new cljs.core.IndexedSeq(G__30609__a,0,null);
} 
return G__30608__delegate.call(this,args__27393__auto__);};
G__30608.cljs$lang$maxFixedArity = 0;
G__30608.cljs$lang$applyTo = (function (arglist__30610){
var args__27393__auto__ = cljs.core.seq(arglist__30610);
return G__30608__delegate(args__27393__auto__);
});
G__30608.cljs$core$IFn$_invoke$arity$variadic = G__30608__delegate;
return G__30608;
})()
;
})()(doc_str);
} else {
}

if(cljs.core.truth_(attr_map)){
(function (){var format_in__27391__auto__ = " ~_~w";
var cf__27392__auto__ = ((typeof format_in__27391__auto__ === 'string')?cljs.pprint.cached_compile(format_in__27391__auto__):format_in__27391__auto__);
return (function() { 
var G__30611__delegate = function (args__27393__auto__){
var navigator__27394__auto__ = cljs.pprint.init_navigator(args__27393__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27392__auto__,navigator__27394__auto__);
};
var G__30611 = function (var_args){
var args__27393__auto__ = null;
if (arguments.length > 0) {
var G__30612__i = 0, G__30612__a = new Array(arguments.length -  0);
while (G__30612__i < G__30612__a.length) {G__30612__a[G__30612__i] = arguments[G__30612__i + 0]; ++G__30612__i;}
  args__27393__auto__ = new cljs.core.IndexedSeq(G__30612__a,0,null);
} 
return G__30611__delegate.call(this,args__27393__auto__);};
G__30611.cljs$lang$maxFixedArity = 0;
G__30611.cljs$lang$applyTo = (function (arglist__30613){
var args__27393__auto__ = cljs.core.seq(arglist__30613);
return G__30611__delegate(args__27393__auto__);
});
G__30611.cljs$core$IFn$_invoke$arity$variadic = G__30611__delegate;
return G__30611;
})()
;
})()(attr_map);
} else {
}

if(cljs.core.vector_QMARK_(cljs.core.first(stuff__$2))){
cljs.pprint.single_defn(stuff__$2,(function (){var or__4126__auto__ = doc_str;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return attr_map;
}
})());
} else {
cljs.pprint.multi_defn(stuff__$2,(function (){var or__4126__auto__ = doc_str;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return attr_map;
}
})());

}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__29299_30598);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__29298_30597);
}}

return null;
} else {
return cljs.pprint.pprint_simple_code_list(alis);
}
});
cljs.pprint.pprint_binding_form = (function cljs$pprint$pprint_binding_form(binding_vec){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__29306_30614 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__29307_30615 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__29308_30616 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__29309_30617 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__29308_30616);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__29309_30617);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"[",null,"]");

var length_count29310_30618 = (0);
var binding_30619 = binding_vec;
while(true){
if(((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count29310_30618 < cljs.core._STAR_print_length_STAR_)))){
if(cljs.core.seq(binding_30619)){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__29311_30620 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__29312_30621 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__29313_30622 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__29314_30623 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__29313_30622);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__29314_30623);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out(cljs.core.first(binding_30619));

if(cljs.core.next(binding_30619)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"miser","miser",-556060186));

cljs.pprint.write_out(cljs.core.second(binding_30619));
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__29312_30621);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__29311_30620);
}}


if(cljs.core.next(cljs.core.rest(binding_30619))){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",872268697));

var G__30640 = (length_count29310_30618 + (1));
var G__30641 = cljs.core.next(cljs.core.rest(binding_30619));
length_count29310_30618 = G__30640;
binding_30619 = G__30641;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__29307_30615);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__29306_30614);
}}

return null;
});
cljs.pprint.pprint_let = (function cljs$pprint$pprint_let(alis){
var base_sym = cljs.core.first(alis);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__29319_30642 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__29320_30643 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__29321_30644 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__29322_30645 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__29321_30644);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__29322_30645);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

if(((cljs.core.next(alis)) && (cljs.core.vector_QMARK_(cljs.core.second(alis))))){
(function (){var format_in__27391__auto__ = "~w ~1I~@_";
var cf__27392__auto__ = ((typeof format_in__27391__auto__ === 'string')?cljs.pprint.cached_compile(format_in__27391__auto__):format_in__27391__auto__);
return (function() { 
var G__30647__delegate = function (args__27393__auto__){
var navigator__27394__auto__ = cljs.pprint.init_navigator(args__27393__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27392__auto__,navigator__27394__auto__);
};
var G__30647 = function (var_args){
var args__27393__auto__ = null;
if (arguments.length > 0) {
var G__30648__i = 0, G__30648__a = new Array(arguments.length -  0);
while (G__30648__i < G__30648__a.length) {G__30648__a[G__30648__i] = arguments[G__30648__i + 0]; ++G__30648__i;}
  args__27393__auto__ = new cljs.core.IndexedSeq(G__30648__a,0,null);
} 
return G__30647__delegate.call(this,args__27393__auto__);};
G__30647.cljs$lang$maxFixedArity = 0;
G__30647.cljs$lang$applyTo = (function (arglist__30649){
var args__27393__auto__ = cljs.core.seq(arglist__30649);
return G__30647__delegate(args__27393__auto__);
});
G__30647.cljs$core$IFn$_invoke$arity$variadic = G__30647__delegate;
return G__30647;
})()
;
})()(base_sym);

cljs.pprint.pprint_binding_form(cljs.core.second(alis));

(function (){var format_in__27391__auto__ = " ~_~{~w~^ ~_~}";
var cf__27392__auto__ = ((typeof format_in__27391__auto__ === 'string')?cljs.pprint.cached_compile(format_in__27391__auto__):format_in__27391__auto__);
return (function() { 
var G__30651__delegate = function (args__27393__auto__){
var navigator__27394__auto__ = cljs.pprint.init_navigator(args__27393__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27392__auto__,navigator__27394__auto__);
};
var G__30651 = function (var_args){
var args__27393__auto__ = null;
if (arguments.length > 0) {
var G__30652__i = 0, G__30652__a = new Array(arguments.length -  0);
while (G__30652__i < G__30652__a.length) {G__30652__a[G__30652__i] = arguments[G__30652__i + 0]; ++G__30652__i;}
  args__27393__auto__ = new cljs.core.IndexedSeq(G__30652__a,0,null);
} 
return G__30651__delegate.call(this,args__27393__auto__);};
G__30651.cljs$lang$maxFixedArity = 0;
G__30651.cljs$lang$applyTo = (function (arglist__30653){
var args__27393__auto__ = cljs.core.seq(arglist__30653);
return G__30651__delegate(args__27393__auto__);
});
G__30651.cljs$core$IFn$_invoke$arity$variadic = G__30651__delegate;
return G__30651;
})()
;
})()(cljs.core.next(cljs.core.rest(alis)));
} else {
cljs.pprint.pprint_simple_code_list(alis);
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__29320_30643);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__29319_30642);
}}

return null;
});
cljs.pprint.pprint_if = (function (){var format_in__27391__auto__ = "~:<~1I~w~^ ~@_~w~@{ ~_~w~}~:>";
var cf__27392__auto__ = ((typeof format_in__27391__auto__ === 'string')?cljs.pprint.cached_compile(format_in__27391__auto__):format_in__27391__auto__);
return (function() { 
var G__30654__delegate = function (args__27393__auto__){
var navigator__27394__auto__ = cljs.pprint.init_navigator(args__27393__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27392__auto__,navigator__27394__auto__);
};
var G__30654 = function (var_args){
var args__27393__auto__ = null;
if (arguments.length > 0) {
var G__30656__i = 0, G__30656__a = new Array(arguments.length -  0);
while (G__30656__i < G__30656__a.length) {G__30656__a[G__30656__i] = arguments[G__30656__i + 0]; ++G__30656__i;}
  args__27393__auto__ = new cljs.core.IndexedSeq(G__30656__a,0,null);
} 
return G__30654__delegate.call(this,args__27393__auto__);};
G__30654.cljs$lang$maxFixedArity = 0;
G__30654.cljs$lang$applyTo = (function (arglist__30657){
var args__27393__auto__ = cljs.core.seq(arglist__30657);
return G__30654__delegate(args__27393__auto__);
});
G__30654.cljs$core$IFn$_invoke$arity$variadic = G__30654__delegate;
return G__30654;
})()
;
})();
cljs.pprint.pprint_cond = (function cljs$pprint$pprint_cond(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__29329_30658 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__29330_30659 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__29331_30660 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__29332_30661 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__29331_30660);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__29332_30661);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent(new cljs.core.Keyword(null,"block","block",664686210),(1));

cljs.pprint.write_out(cljs.core.first(alis));

if(cljs.core.next(alis)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",872268697));

var length_count29335_30662 = (0);
var alis_30663__$1 = cljs.core.next(alis);
while(true){
if(((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count29335_30662 < cljs.core._STAR_print_length_STAR_)))){
if(alis_30663__$1){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__29336_30664 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__29337_30665 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__29338_30666 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__29339_30667 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__29338_30666);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__29339_30667);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out(cljs.core.first(alis_30663__$1));

if(cljs.core.next(alis_30663__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"miser","miser",-556060186));

cljs.pprint.write_out(cljs.core.second(alis_30663__$1));
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__29337_30665);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__29336_30664);
}}


if(cljs.core.next(cljs.core.rest(alis_30663__$1))){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",872268697));

var G__30669 = (length_count29335_30662 + (1));
var G__30670 = cljs.core.next(cljs.core.rest(alis_30663__$1));
length_count29335_30662 = G__30669;
alis_30663__$1 = G__30670;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__29330_30659);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__29329_30658);
}}

return null;
});
cljs.pprint.pprint_condp = (function cljs$pprint$pprint_condp(alis){
if((cljs.core.count(alis) > (3))){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__29343_30671 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__29344_30672 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__29345_30673 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__29346_30674 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__29345_30673);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__29346_30674);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent(new cljs.core.Keyword(null,"block","block",664686210),(1));

cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var format_in__27391__auto__ = "~w ~@_~w ~@_~w ~_";
var cf__27392__auto__ = ((typeof format_in__27391__auto__ === 'string')?cljs.pprint.cached_compile(format_in__27391__auto__):format_in__27391__auto__);
return (function() { 
var G__30675__delegate = function (args__27393__auto__){
var navigator__27394__auto__ = cljs.pprint.init_navigator(args__27393__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27392__auto__,navigator__27394__auto__);
};
var G__30675 = function (var_args){
var args__27393__auto__ = null;
if (arguments.length > 0) {
var G__30676__i = 0, G__30676__a = new Array(arguments.length -  0);
while (G__30676__i < G__30676__a.length) {G__30676__a[G__30676__i] = arguments[G__30676__i + 0]; ++G__30676__i;}
  args__27393__auto__ = new cljs.core.IndexedSeq(G__30676__a,0,null);
} 
return G__30675__delegate.call(this,args__27393__auto__);};
G__30675.cljs$lang$maxFixedArity = 0;
G__30675.cljs$lang$applyTo = (function (arglist__30677){
var args__27393__auto__ = cljs.core.seq(arglist__30677);
return G__30675__delegate(args__27393__auto__);
});
G__30675.cljs$core$IFn$_invoke$arity$variadic = G__30675__delegate;
return G__30675;
})()
;
})(),alis);

var length_count29348_30678 = (0);
var alis_30679__$1 = cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((3),alis));
while(true){
if(((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count29348_30678 < cljs.core._STAR_print_length_STAR_)))){
if(alis_30679__$1){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__29349_30681 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__29350_30682 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__29351_30683 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__29352_30684 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__29351_30683);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__29352_30684);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out(cljs.core.first(alis_30679__$1));

if(cljs.core.next(alis_30679__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"miser","miser",-556060186));

cljs.pprint.write_out(cljs.core.second(alis_30679__$1));
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__29350_30682);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__29349_30681);
}}


if(cljs.core.next(cljs.core.rest(alis_30679__$1))){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",872268697));

var G__30689 = (length_count29348_30678 + (1));
var G__30690 = cljs.core.next(cljs.core.rest(alis_30679__$1));
length_count29348_30678 = G__30689;
alis_30679__$1 = G__30690;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__29344_30672);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__29343_30671);
}}

return null;
} else {
return cljs.pprint.pprint_simple_code_list(alis);
}
});
cljs.pprint._STAR_symbol_map_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.pprint.pprint_anon_func = (function cljs$pprint$pprint_anon_func(alis){
var args = cljs.core.second(alis);
var nlis = cljs.core.first(cljs.core.rest(cljs.core.rest(alis)));
if(cljs.core.vector_QMARK_(args)){
var _STAR_symbol_map_STAR__orig_val__29356 = cljs.pprint._STAR_symbol_map_STAR_;
var _STAR_symbol_map_STAR__temp_val__29357 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(args)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(args),"%"]):cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__29354_SHARP_,p2__29355_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__29354_SHARP_,["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__29355_SHARP_)].join('')],null));
}),args,cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(cljs.core.count(args) + (1))))));
(cljs.pprint._STAR_symbol_map_STAR_ = _STAR_symbol_map_STAR__temp_val__29357);

try{return (function (){var format_in__27391__auto__ = "~<#(~;~@{~w~^ ~_~}~;)~:>";
var cf__27392__auto__ = ((typeof format_in__27391__auto__ === 'string')?cljs.pprint.cached_compile(format_in__27391__auto__):format_in__27391__auto__);
return (function() { 
var G__30691__delegate = function (args__27393__auto__){
var navigator__27394__auto__ = cljs.pprint.init_navigator(args__27393__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27392__auto__,navigator__27394__auto__);
};
var G__30691 = function (var_args){
var args__27393__auto__ = null;
if (arguments.length > 0) {
var G__30692__i = 0, G__30692__a = new Array(arguments.length -  0);
while (G__30692__i < G__30692__a.length) {G__30692__a[G__30692__i] = arguments[G__30692__i + 0]; ++G__30692__i;}
  args__27393__auto__ = new cljs.core.IndexedSeq(G__30692__a,0,null);
} 
return G__30691__delegate.call(this,args__27393__auto__);};
G__30691.cljs$lang$maxFixedArity = 0;
G__30691.cljs$lang$applyTo = (function (arglist__30693){
var args__27393__auto__ = cljs.core.seq(arglist__30693);
return G__30691__delegate(args__27393__auto__);
});
G__30691.cljs$core$IFn$_invoke$arity$variadic = G__30691__delegate;
return G__30691;
})()
;
})()(nlis);
}finally {(cljs.pprint._STAR_symbol_map_STAR_ = _STAR_symbol_map_STAR__orig_val__29356);
}} else {
return cljs.pprint.pprint_simple_code_list(alis);
}
});
cljs.pprint.pprint_simple_code_list = (function cljs$pprint$pprint_simple_code_list(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__29362_30695 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__29363_30696 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__29364_30697 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__29365_30698 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__29364_30697);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__29365_30698);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent(new cljs.core.Keyword(null,"block","block",664686210),(1));

var length_count29366_30700 = (0);
var alis_30701__$1 = cljs.core.seq(alis);
while(true){
if(((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count29366_30700 < cljs.core._STAR_print_length_STAR_)))){
if(alis_30701__$1){
cljs.pprint.write_out(cljs.core.first(alis_30701__$1));

if(cljs.core.next(alis_30701__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",872268697));

var G__30703 = (length_count29366_30700 + (1));
var G__30704 = cljs.core.next(alis_30701__$1);
length_count29366_30700 = G__30703;
alis_30701__$1 = G__30704;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__29363_30696);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__29362_30695);
}}

return null;
});
cljs.pprint.two_forms = (function cljs$pprint$two_forms(amap){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var iter__4529__auto__ = (function cljs$pprint$two_forms_$_iter__29368(s__29369){
return (new cljs.core.LazySeq(null,(function (){
var s__29369__$1 = s__29369;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__29369__$1);
if(temp__5735__auto__){
var s__29369__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29369__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__29369__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__29371 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__29370 = (0);
while(true){
if((i__29370 < size__4528__auto__)){
var x = cljs.core._nth(c__4527__auto__,i__29370);
cljs.core.chunk_append(b__29371,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.first(x))),cljs.core.second(x)], null)], null));

var G__30708 = (i__29370 + (1));
i__29370 = G__30708;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29371),cljs$pprint$two_forms_$_iter__29368(cljs.core.chunk_rest(s__29369__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29371),null);
}
} else {
var x = cljs.core.first(s__29369__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.first(x))),cljs.core.second(x)], null)], null),cljs$pprint$two_forms_$_iter__29368(cljs.core.rest(s__29369__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(amap);
})()], 0)));
});
cljs.pprint.add_core_ns = (function cljs$pprint$add_core_ns(amap){
var core = "clojure.core";
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29373_SHARP_){
var vec__29377 = p1__29373_SHARP_;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29377,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29377,(1),null);
if(cljs.core.not((function (){var or__4126__auto__ = cljs.core.namespace(s);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.special_symbol_QMARK_(s);
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(core,cljs.core.name(s)),f], null);
} else {
return p1__29373_SHARP_;
}
}),amap));
});
cljs.pprint._STAR_code_table_STAR_ = cljs.pprint.two_forms(cljs.pprint.add_core_ns(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.Symbol(null,"when-first","when-first",821699168,null),new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"condp","condp",1054325175,null),new cljs.core.Symbol(null,"..","..",-300507420,null),new cljs.core.Symbol(null,"defmacro","defmacro",2054157304,null),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"loop","loop",1244978678,null),new cljs.core.Symbol(null,"struct","struct",325972931,null),new cljs.core.Symbol(null,"doseq","doseq",221164135,null),new cljs.core.Symbol(null,"if-not","if-not",-265415609,null),new cljs.core.Symbol(null,"when-not","when-not",-1223136340,null),new cljs.core.Symbol(null,"def","def",597100991,null),new cljs.core.Symbol(null,"when","when",1064114221,null),new cljs.core.Symbol(null,"with-open","with-open",172119667,null),new cljs.core.Symbol(null,"with-local-vars","with-local-vars",837642072,null),new cljs.core.Symbol(null,"defonce","defonce",-1681484013,null),new cljs.core.Symbol(null,"when-let","when-let",-1383043480,null),new cljs.core.Symbol(null,"ns","ns",2082130287,null),new cljs.core.Symbol(null,"dotimes","dotimes",-818708397,null),new cljs.core.Symbol(null,"cond","cond",1606708055,null),new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"defn-","defn-",1097765044,null),new cljs.core.Symbol(null,"locking","locking",1542862874,null),new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"if-let","if-let",1803593690,null),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Symbol(null,"struct-map","struct-map",-1387540878,null)],[cljs.pprint.pprint_hold_first,cljs.pprint.pprint_anon_func,cljs.pprint.pprint_let,cljs.pprint.pprint_if,cljs.pprint.pprint_condp,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_defn,cljs.pprint.pprint_defn,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_if,cljs.pprint.pprint_if,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_if,cljs.pprint.pprint_let,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_ns,cljs.pprint.pprint_let,cljs.pprint.pprint_cond,cljs.pprint.pprint_let,cljs.pprint.pprint_defn,cljs.pprint.pprint_defn,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first])));
cljs.pprint.pprint_code_list = (function cljs$pprint$pprint_code_list(alis){
if(cljs.core.not(cljs.pprint.pprint_reader_macro(alis))){
var temp__5733__auto__ = cljs.pprint._STAR_code_table_STAR_.call(null,cljs.core.first(alis));
if(cljs.core.truth_(temp__5733__auto__)){
var special_form = temp__5733__auto__;
return (special_form.cljs$core$IFn$_invoke$arity$1 ? special_form.cljs$core$IFn$_invoke$arity$1(alis) : special_form.call(null,alis));
} else {
return cljs.pprint.pprint_simple_code_list(alis);
}
} else {
return null;
}
});
cljs.pprint.pprint_code_symbol = (function cljs$pprint$pprint_code_symbol(sym){
var temp__5733__auto__ = (sym.cljs$core$IFn$_invoke$arity$1 ? sym.cljs$core$IFn$_invoke$arity$1(cljs.pprint._STAR_symbol_map_STAR_) : sym.call(null,cljs.pprint._STAR_symbol_map_STAR_));
if(cljs.core.truth_(temp__5733__auto__)){
var arg_num = temp__5733__auto__;
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arg_num], 0));
} else {
if(cljs.core.truth_(cljs.pprint._STAR_print_suppress_namespaces_STAR_)){
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.name(sym)], 0));
} else {
return cljs.pprint.pr.call(null,sym);
}
}
});
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.code_dispatch !== 'undefined')){
} else {
/**
 * The pretty print dispatch function for pretty printing Clojure code.
 */
cljs.pprint.code_dispatch = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__29384 = cljs.core.get_global_hierarchy;
return (fexpr__29384.cljs$core$IFn$_invoke$arity$0 ? fexpr__29384.cljs$core$IFn$_invoke$arity$0() : fexpr__29384.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","code-dispatch"),cljs.pprint.type_dispatcher,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
cljs.pprint.use_method(cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"list","list",765357683),cljs.pprint.pprint_code_list);
cljs.pprint.use_method(cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),cljs.pprint.pprint_code_symbol);
cljs.pprint.use_method(cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"vector","vector",1902966158),cljs.pprint.pprint_vector);
cljs.pprint.use_method(cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"map","map",1371690461),cljs.pprint.pprint_map);
cljs.pprint.use_method(cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"set","set",304602554),cljs.pprint.pprint_set);
cljs.pprint.use_method(cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"queue","queue",1455835879),cljs.pprint.pprint_pqueue);
cljs.pprint.use_method(cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"deref","deref",-145586795),cljs.pprint.pprint_ideref);
cljs.pprint.use_method(cljs.pprint.code_dispatch,null,cljs.pprint.pr);
cljs.pprint.use_method(cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),cljs.pprint.pprint_simple_default);
cljs.pprint.set_pprint_dispatch(cljs.pprint.simple_dispatch);
cljs.pprint.add_padding = (function cljs$pprint$add_padding(width,s){
var padding = (function (){var x__4214__auto__ = (0);
var y__4215__auto__ = (width - cljs.core.count(s));
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(padding," ")),s);
});
/**
 * Prints a collection of maps in a textual table. Prints table headings
 * ks, and then a line of output for each row, corresponding to the keys
 * in ks. If ks are not specified, use the keys of the first item in rows.
 */
cljs.pprint.print_table = (function cljs$pprint$print_table(var_args){
var G__29393 = arguments.length;
switch (G__29393) {
case 2:
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2 = (function (ks,rows){
if(cljs.core.seq(rows)){
var widths = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (k){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max,((cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)).length),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29386_SHARP_){
return ((cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__29386_SHARP_,k))).length);
}),rows));
}),ks);
var spacers = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29387_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(p1__29387_SHARP_,"-"));
}),widths);
var fmt_row = (function (leader,divider,trailer,row){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(leader),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(divider,(function (){var iter__4529__auto__ = (function cljs$pprint$iter__29406(s__29407){
return (new cljs.core.LazySeq(null,(function (){
var s__29407__$1 = s__29407;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__29407__$1);
if(temp__5735__auto__){
var s__29407__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29407__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__29407__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__29409 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__29408 = (0);
while(true){
if((i__29408 < size__4528__auto__)){
var vec__29410 = cljs.core._nth(c__4527__auto__,i__29408);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29410,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29410,(1),null);
cljs.core.chunk_append(b__29409,cljs.pprint.add_padding(width,cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)));

var G__30727 = (i__29408 + (1));
i__29408 = G__30727;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29409),cljs$pprint$iter__29406(cljs.core.chunk_rest(s__29407__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29409),null);
}
} else {
var vec__29415 = cljs.core.first(s__29407__$2);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29415,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29415,(1),null);
return cljs.core.cons(cljs.pprint.add_padding(width,cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)),cljs$pprint$iter__29406(cljs.core.rest(s__29407__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29389_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,p1__29389_SHARP_);
}),ks),widths));
})()))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(trailer)].join('');
});
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fmt_row("| "," | "," |",cljs.core.zipmap(ks,ks))], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fmt_row("|-","-+-","-|",cljs.core.zipmap(ks,spacers))], 0));

var seq__29420 = cljs.core.seq(rows);
var chunk__29421 = null;
var count__29422 = (0);
var i__29423 = (0);
while(true){
if((i__29423 < count__29422)){
var row = chunk__29421.cljs$core$IIndexed$_nth$arity$2(null,i__29423);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fmt_row("| "," | "," |",row)], 0));


var G__30729 = seq__29420;
var G__30730 = chunk__29421;
var G__30731 = count__29422;
var G__30732 = (i__29423 + (1));
seq__29420 = G__30729;
chunk__29421 = G__30730;
count__29422 = G__30731;
i__29423 = G__30732;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__29420);
if(temp__5735__auto__){
var seq__29420__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29420__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__29420__$1);
var G__30733 = cljs.core.chunk_rest(seq__29420__$1);
var G__30734 = c__4556__auto__;
var G__30735 = cljs.core.count(c__4556__auto__);
var G__30736 = (0);
seq__29420 = G__30733;
chunk__29421 = G__30734;
count__29422 = G__30735;
i__29423 = G__30736;
continue;
} else {
var row = cljs.core.first(seq__29420__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fmt_row("| "," | "," |",row)], 0));


var G__30739 = cljs.core.next(seq__29420__$1);
var G__30740 = null;
var G__30741 = (0);
var G__30742 = (0);
seq__29420 = G__30739;
chunk__29421 = G__30740;
count__29422 = G__30741;
i__29423 = G__30742;
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
}));

(cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$1 = (function (rows){
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(cljs.core.first(rows)),rows);
}));

(cljs.pprint.print_table.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=cljs.pprint.js.map
