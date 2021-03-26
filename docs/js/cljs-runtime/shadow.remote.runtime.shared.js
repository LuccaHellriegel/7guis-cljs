goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__33188,res){
var map__33189 = p__33188;
var map__33189__$1 = (((((!((map__33189 == null))))?(((((map__33189.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33189.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33189):map__33189);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33189__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33189__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__33204 = res;
var G__33204__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33204,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__33204);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33204__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__33204__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__33206 = arguments.length;
switch (G__33206) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__33208,msg,handlers,timeout_after_ms){
var map__33209 = p__33208;
var map__33209__$1 = (((((!((map__33209 == null))))?(((((map__33209.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33209.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33209):map__33209);
var runtime = map__33209__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33209__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___33525 = arguments.length;
var i__4737__auto___33527 = (0);
while(true){
if((i__4737__auto___33527 < len__4736__auto___33525)){
args__4742__auto__.push((arguments[i__4737__auto___33527]));

var G__33529 = (i__4737__auto___33527 + (1));
i__4737__auto___33527 = G__33529;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__33227,ev,args){
var map__33228 = p__33227;
var map__33228__$1 = (((((!((map__33228 == null))))?(((((map__33228.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33228.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33228):map__33228);
var runtime = map__33228__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33228__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__33231 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__33234 = null;
var count__33235 = (0);
var i__33236 = (0);
while(true){
if((i__33236 < count__33235)){
var ext = chunk__33234.cljs$core$IIndexed$_nth$arity$2(null,i__33236);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__33535 = seq__33231;
var G__33536 = chunk__33234;
var G__33537 = count__33235;
var G__33538 = (i__33236 + (1));
seq__33231 = G__33535;
chunk__33234 = G__33536;
count__33235 = G__33537;
i__33236 = G__33538;
continue;
} else {
var G__33539 = seq__33231;
var G__33540 = chunk__33234;
var G__33541 = count__33235;
var G__33542 = (i__33236 + (1));
seq__33231 = G__33539;
chunk__33234 = G__33540;
count__33235 = G__33541;
i__33236 = G__33542;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33231);
if(temp__5735__auto__){
var seq__33231__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33231__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33231__$1);
var G__33544 = cljs.core.chunk_rest(seq__33231__$1);
var G__33545 = c__4556__auto__;
var G__33546 = cljs.core.count(c__4556__auto__);
var G__33547 = (0);
seq__33231 = G__33544;
chunk__33234 = G__33545;
count__33235 = G__33546;
i__33236 = G__33547;
continue;
} else {
var ext = cljs.core.first(seq__33231__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__33550 = cljs.core.next(seq__33231__$1);
var G__33551 = null;
var G__33552 = (0);
var G__33553 = (0);
seq__33231 = G__33550;
chunk__33234 = G__33551;
count__33235 = G__33552;
i__33236 = G__33553;
continue;
} else {
var G__33554 = cljs.core.next(seq__33231__$1);
var G__33555 = null;
var G__33556 = (0);
var G__33557 = (0);
seq__33231 = G__33554;
chunk__33234 = G__33555;
count__33235 = G__33556;
i__33236 = G__33557;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq33218){
var G__33219 = cljs.core.first(seq33218);
var seq33218__$1 = cljs.core.next(seq33218);
var G__33220 = cljs.core.first(seq33218__$1);
var seq33218__$2 = cljs.core.next(seq33218__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33219,G__33220,seq33218__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__33296,p__33297){
var map__33298 = p__33296;
var map__33298__$1 = (((((!((map__33298 == null))))?(((((map__33298.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33298.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33298):map__33298);
var runtime = map__33298__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33298__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__33299 = p__33297;
var map__33299__$1 = (((((!((map__33299 == null))))?(((((map__33299.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33299.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33299):map__33299);
var msg = map__33299__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33299__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__33323 = cljs.core.deref(state_ref);
var map__33323__$1 = (((((!((map__33323 == null))))?(((((map__33323.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33323.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33323):map__33323);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33323__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33323__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__33325){
var map__33326 = p__33325;
var map__33326__$1 = (((((!((map__33326 == null))))?(((((map__33326.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33326.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33326):map__33326);
var runtime = map__33326__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33326__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4126__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__33329,msg){
var map__33330 = p__33329;
var map__33330__$1 = (((((!((map__33330 == null))))?(((((map__33330.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33330.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33330):map__33330);
var runtime = map__33330__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33330__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__33343,key,p__33344){
var map__33345 = p__33343;
var map__33345__$1 = (((((!((map__33345 == null))))?(((((map__33345.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33345.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33345):map__33345);
var state = map__33345__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33345__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__33350 = p__33344;
var map__33350__$1 = (((((!((map__33350 == null))))?(((((map__33350.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33350.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33350):map__33350);
var spec = map__33350__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33350__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__33377,key,spec){
var map__33379 = p__33377;
var map__33379__$1 = (((((!((map__33379 == null))))?(((((map__33379.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33379.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33379):map__33379);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33379__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__33382_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__33382_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__33383_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__33383_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__33384_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__33384_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__33385_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__33385_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__33386_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__33386_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__33397,key){
var map__33398 = p__33397;
var map__33398__$1 = (((((!((map__33398 == null))))?(((((map__33398.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33398.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33398):map__33398);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33398__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__33411,msg){
var map__33413 = p__33411;
var map__33413__$1 = (((((!((map__33413 == null))))?(((((map__33413.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33413.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33413):map__33413);
var runtime = map__33413__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33413__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__33430,p__33431){
var map__33432 = p__33430;
var map__33432__$1 = (((((!((map__33432 == null))))?(((((map__33432.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33432.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33432):map__33432);
var runtime = map__33432__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33432__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__33433 = p__33431;
var map__33433__$1 = (((((!((map__33433 == null))))?(((((map__33433.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33433.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33433):map__33433);
var msg = map__33433__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33433__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33433__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__33444 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__33446 = null;
var count__33447 = (0);
var i__33448 = (0);
while(true){
if((i__33448 < count__33447)){
var map__33476 = chunk__33446.cljs$core$IIndexed$_nth$arity$2(null,i__33448);
var map__33476__$1 = (((((!((map__33476 == null))))?(((((map__33476.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33476.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33476):map__33476);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33476__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__33614 = seq__33444;
var G__33615 = chunk__33446;
var G__33616 = count__33447;
var G__33617 = (i__33448 + (1));
seq__33444 = G__33614;
chunk__33446 = G__33615;
count__33447 = G__33616;
i__33448 = G__33617;
continue;
} else {
var G__33619 = seq__33444;
var G__33620 = chunk__33446;
var G__33621 = count__33447;
var G__33622 = (i__33448 + (1));
seq__33444 = G__33619;
chunk__33446 = G__33620;
count__33447 = G__33621;
i__33448 = G__33622;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33444);
if(temp__5735__auto__){
var seq__33444__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33444__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33444__$1);
var G__33625 = cljs.core.chunk_rest(seq__33444__$1);
var G__33626 = c__4556__auto__;
var G__33627 = cljs.core.count(c__4556__auto__);
var G__33628 = (0);
seq__33444 = G__33625;
chunk__33446 = G__33626;
count__33447 = G__33627;
i__33448 = G__33628;
continue;
} else {
var map__33504 = cljs.core.first(seq__33444__$1);
var map__33504__$1 = (((((!((map__33504 == null))))?(((((map__33504.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33504.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33504):map__33504);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33504__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__33630 = cljs.core.next(seq__33444__$1);
var G__33631 = null;
var G__33632 = (0);
var G__33633 = (0);
seq__33444 = G__33630;
chunk__33446 = G__33631;
count__33447 = G__33632;
i__33448 = G__33633;
continue;
} else {
var G__33636 = cljs.core.next(seq__33444__$1);
var G__33637 = null;
var G__33638 = (0);
var G__33639 = (0);
seq__33444 = G__33636;
chunk__33446 = G__33637;
count__33447 = G__33638;
i__33448 = G__33639;
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

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
