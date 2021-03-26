goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___38347 = arguments.length;
var i__4737__auto___38348 = (0);
while(true){
if((i__4737__auto___38348 < len__4736__auto___38347)){
args__4742__auto__.push((arguments[i__4737__auto___38348]));

var G__38349 = (i__4737__auto___38348 + (1));
i__4737__auto___38348 = G__38349;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq38106){
var G__38107 = cljs.core.first(seq38106);
var seq38106__$1 = cljs.core.next(seq38106);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38107,seq38106__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__38112 = cljs.core.seq(sources);
var chunk__38113 = null;
var count__38114 = (0);
var i__38115 = (0);
while(true){
if((i__38115 < count__38114)){
var map__38133 = chunk__38113.cljs$core$IIndexed$_nth$arity$2(null,i__38115);
var map__38133__$1 = (((((!((map__38133 == null))))?(((((map__38133.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38133.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38133):map__38133);
var src = map__38133__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38133__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38133__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38133__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38133__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e38138){var e_38350 = e38138;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_38350);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_38350.message)].join('')));
}

var G__38351 = seq__38112;
var G__38352 = chunk__38113;
var G__38353 = count__38114;
var G__38354 = (i__38115 + (1));
seq__38112 = G__38351;
chunk__38113 = G__38352;
count__38114 = G__38353;
i__38115 = G__38354;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38112);
if(temp__5735__auto__){
var seq__38112__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38112__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38112__$1);
var G__38355 = cljs.core.chunk_rest(seq__38112__$1);
var G__38356 = c__4556__auto__;
var G__38357 = cljs.core.count(c__4556__auto__);
var G__38358 = (0);
seq__38112 = G__38355;
chunk__38113 = G__38356;
count__38114 = G__38357;
i__38115 = G__38358;
continue;
} else {
var map__38139 = cljs.core.first(seq__38112__$1);
var map__38139__$1 = (((((!((map__38139 == null))))?(((((map__38139.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38139.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38139):map__38139);
var src = map__38139__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38139__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38139__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38139__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38139__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e38141){var e_38362 = e38141;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_38362);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_38362.message)].join('')));
}

var G__38364 = cljs.core.next(seq__38112__$1);
var G__38365 = null;
var G__38366 = (0);
var G__38367 = (0);
seq__38112 = G__38364;
chunk__38113 = G__38365;
count__38114 = G__38366;
i__38115 = G__38367;
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
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__38142 = cljs.core.seq(js_requires);
var chunk__38143 = null;
var count__38144 = (0);
var i__38145 = (0);
while(true){
if((i__38145 < count__38144)){
var js_ns = chunk__38143.cljs$core$IIndexed$_nth$arity$2(null,i__38145);
var require_str_38368 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_38368);


var G__38369 = seq__38142;
var G__38370 = chunk__38143;
var G__38371 = count__38144;
var G__38372 = (i__38145 + (1));
seq__38142 = G__38369;
chunk__38143 = G__38370;
count__38144 = G__38371;
i__38145 = G__38372;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38142);
if(temp__5735__auto__){
var seq__38142__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38142__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38142__$1);
var G__38375 = cljs.core.chunk_rest(seq__38142__$1);
var G__38376 = c__4556__auto__;
var G__38377 = cljs.core.count(c__4556__auto__);
var G__38378 = (0);
seq__38142 = G__38375;
chunk__38143 = G__38376;
count__38144 = G__38377;
i__38145 = G__38378;
continue;
} else {
var js_ns = cljs.core.first(seq__38142__$1);
var require_str_38379 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_38379);


var G__38380 = cljs.core.next(seq__38142__$1);
var G__38381 = null;
var G__38382 = (0);
var G__38383 = (0);
seq__38142 = G__38380;
chunk__38143 = G__38381;
count__38144 = G__38382;
i__38145 = G__38383;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__38149){
var map__38150 = p__38149;
var map__38150__$1 = (((((!((map__38150 == null))))?(((((map__38150.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38150.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38150):map__38150);
var msg = map__38150__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38150__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38150__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38152(s__38153){
return (new cljs.core.LazySeq(null,(function (){
var s__38153__$1 = s__38153;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__38153__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__38158 = cljs.core.first(xs__6292__auto__);
var map__38158__$1 = (((((!((map__38158 == null))))?(((((map__38158.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38158.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38158):map__38158);
var src = map__38158__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38158__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38158__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__38153__$1,map__38158,map__38158__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__38150,map__38150__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38152_$_iter__38154(s__38155){
return (new cljs.core.LazySeq(null,((function (s__38153__$1,map__38158,map__38158__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__38150,map__38150__$1,msg,info,reload_info){
return (function (){
var s__38155__$1 = s__38155;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__38155__$1);
if(temp__5735__auto____$1){
var s__38155__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__38155__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__38155__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__38157 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__38156 = (0);
while(true){
if((i__38156 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__38156);
cljs.core.chunk_append(b__38157,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__38384 = (i__38156 + (1));
i__38156 = G__38384;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38157),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38152_$_iter__38154(cljs.core.chunk_rest(s__38155__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38157),null);
}
} else {
var warning = cljs.core.first(s__38155__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38152_$_iter__38154(cljs.core.rest(s__38155__$2)));
}
} else {
return null;
}
break;
}
});})(s__38153__$1,map__38158,map__38158__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__38150,map__38150__$1,msg,info,reload_info))
,null,null));
});})(s__38153__$1,map__38158,map__38158__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__38150,map__38150__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38152(cljs.core.rest(s__38153__$1)));
} else {
var G__38385 = cljs.core.rest(s__38153__$1);
s__38153__$1 = G__38385;
continue;
}
} else {
var G__38386 = cljs.core.rest(s__38153__$1);
s__38153__$1 = G__38386;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__38161_38387 = cljs.core.seq(warnings);
var chunk__38162_38388 = null;
var count__38163_38389 = (0);
var i__38164_38390 = (0);
while(true){
if((i__38164_38390 < count__38163_38389)){
var map__38169_38391 = chunk__38162_38388.cljs$core$IIndexed$_nth$arity$2(null,i__38164_38390);
var map__38169_38392__$1 = (((((!((map__38169_38391 == null))))?(((((map__38169_38391.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38169_38391.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38169_38391):map__38169_38391);
var w_38393 = map__38169_38392__$1;
var msg_38394__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38169_38392__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_38395 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38169_38392__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_38396 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38169_38392__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_38397 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38169_38392__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_38397)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_38395),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_38396),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_38394__$1)].join(''));


var G__38398 = seq__38161_38387;
var G__38399 = chunk__38162_38388;
var G__38400 = count__38163_38389;
var G__38401 = (i__38164_38390 + (1));
seq__38161_38387 = G__38398;
chunk__38162_38388 = G__38399;
count__38163_38389 = G__38400;
i__38164_38390 = G__38401;
continue;
} else {
var temp__5735__auto___38402 = cljs.core.seq(seq__38161_38387);
if(temp__5735__auto___38402){
var seq__38161_38403__$1 = temp__5735__auto___38402;
if(cljs.core.chunked_seq_QMARK_(seq__38161_38403__$1)){
var c__4556__auto___38404 = cljs.core.chunk_first(seq__38161_38403__$1);
var G__38405 = cljs.core.chunk_rest(seq__38161_38403__$1);
var G__38406 = c__4556__auto___38404;
var G__38407 = cljs.core.count(c__4556__auto___38404);
var G__38408 = (0);
seq__38161_38387 = G__38405;
chunk__38162_38388 = G__38406;
count__38163_38389 = G__38407;
i__38164_38390 = G__38408;
continue;
} else {
var map__38172_38409 = cljs.core.first(seq__38161_38403__$1);
var map__38172_38410__$1 = (((((!((map__38172_38409 == null))))?(((((map__38172_38409.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38172_38409.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38172_38409):map__38172_38409);
var w_38411 = map__38172_38410__$1;
var msg_38412__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38172_38410__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_38413 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38172_38410__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_38414 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38172_38410__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_38415 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38172_38410__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_38415)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_38413),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_38414),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_38412__$1)].join(''));


var G__38416 = cljs.core.next(seq__38161_38403__$1);
var G__38417 = null;
var G__38418 = (0);
var G__38419 = (0);
seq__38161_38387 = G__38416;
chunk__38162_38388 = G__38417;
count__38163_38389 = G__38418;
i__38164_38390 = G__38419;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__38148_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__38148_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__38183){
var map__38184 = p__38183;
var map__38184__$1 = (((((!((map__38184 == null))))?(((((map__38184.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38184.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38184):map__38184);
var msg = map__38184__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38184__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__38186 = cljs.core.seq(updates);
var chunk__38188 = null;
var count__38189 = (0);
var i__38190 = (0);
while(true){
if((i__38190 < count__38189)){
var path = chunk__38188.cljs$core$IIndexed$_nth$arity$2(null,i__38190);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__38252_38420 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__38256_38421 = null;
var count__38257_38422 = (0);
var i__38258_38423 = (0);
while(true){
if((i__38258_38423 < count__38257_38422)){
var node_38424 = chunk__38256_38421.cljs$core$IIndexed$_nth$arity$2(null,i__38258_38423);
if(cljs.core.not(node_38424.shadow$old)){
var path_match_38425 = shadow.cljs.devtools.client.browser.match_paths(node_38424.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38425)){
var new_link_38426 = (function (){var G__38272 = node_38424.cloneNode(true);
G__38272.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38425),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38272;
})();
(node_38424.shadow$old = true);

(new_link_38426.onload = ((function (seq__38252_38420,chunk__38256_38421,count__38257_38422,i__38258_38423,seq__38186,chunk__38188,count__38189,i__38190,new_link_38426,path_match_38425,node_38424,path,map__38184,map__38184__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_38424);
});})(seq__38252_38420,chunk__38256_38421,count__38257_38422,i__38258_38423,seq__38186,chunk__38188,count__38189,i__38190,new_link_38426,path_match_38425,node_38424,path,map__38184,map__38184__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38425], 0));

goog.dom.insertSiblingAfter(new_link_38426,node_38424);


var G__38430 = seq__38252_38420;
var G__38431 = chunk__38256_38421;
var G__38432 = count__38257_38422;
var G__38433 = (i__38258_38423 + (1));
seq__38252_38420 = G__38430;
chunk__38256_38421 = G__38431;
count__38257_38422 = G__38432;
i__38258_38423 = G__38433;
continue;
} else {
var G__38435 = seq__38252_38420;
var G__38436 = chunk__38256_38421;
var G__38437 = count__38257_38422;
var G__38438 = (i__38258_38423 + (1));
seq__38252_38420 = G__38435;
chunk__38256_38421 = G__38436;
count__38257_38422 = G__38437;
i__38258_38423 = G__38438;
continue;
}
} else {
var G__38439 = seq__38252_38420;
var G__38440 = chunk__38256_38421;
var G__38441 = count__38257_38422;
var G__38442 = (i__38258_38423 + (1));
seq__38252_38420 = G__38439;
chunk__38256_38421 = G__38440;
count__38257_38422 = G__38441;
i__38258_38423 = G__38442;
continue;
}
} else {
var temp__5735__auto___38443 = cljs.core.seq(seq__38252_38420);
if(temp__5735__auto___38443){
var seq__38252_38444__$1 = temp__5735__auto___38443;
if(cljs.core.chunked_seq_QMARK_(seq__38252_38444__$1)){
var c__4556__auto___38445 = cljs.core.chunk_first(seq__38252_38444__$1);
var G__38446 = cljs.core.chunk_rest(seq__38252_38444__$1);
var G__38447 = c__4556__auto___38445;
var G__38448 = cljs.core.count(c__4556__auto___38445);
var G__38449 = (0);
seq__38252_38420 = G__38446;
chunk__38256_38421 = G__38447;
count__38257_38422 = G__38448;
i__38258_38423 = G__38449;
continue;
} else {
var node_38450 = cljs.core.first(seq__38252_38444__$1);
if(cljs.core.not(node_38450.shadow$old)){
var path_match_38451 = shadow.cljs.devtools.client.browser.match_paths(node_38450.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38451)){
var new_link_38452 = (function (){var G__38274 = node_38450.cloneNode(true);
G__38274.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38451),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38274;
})();
(node_38450.shadow$old = true);

(new_link_38452.onload = ((function (seq__38252_38420,chunk__38256_38421,count__38257_38422,i__38258_38423,seq__38186,chunk__38188,count__38189,i__38190,new_link_38452,path_match_38451,node_38450,seq__38252_38444__$1,temp__5735__auto___38443,path,map__38184,map__38184__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_38450);
});})(seq__38252_38420,chunk__38256_38421,count__38257_38422,i__38258_38423,seq__38186,chunk__38188,count__38189,i__38190,new_link_38452,path_match_38451,node_38450,seq__38252_38444__$1,temp__5735__auto___38443,path,map__38184,map__38184__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38451], 0));

goog.dom.insertSiblingAfter(new_link_38452,node_38450);


var G__38456 = cljs.core.next(seq__38252_38444__$1);
var G__38457 = null;
var G__38458 = (0);
var G__38459 = (0);
seq__38252_38420 = G__38456;
chunk__38256_38421 = G__38457;
count__38257_38422 = G__38458;
i__38258_38423 = G__38459;
continue;
} else {
var G__38460 = cljs.core.next(seq__38252_38444__$1);
var G__38461 = null;
var G__38462 = (0);
var G__38463 = (0);
seq__38252_38420 = G__38460;
chunk__38256_38421 = G__38461;
count__38257_38422 = G__38462;
i__38258_38423 = G__38463;
continue;
}
} else {
var G__38464 = cljs.core.next(seq__38252_38444__$1);
var G__38465 = null;
var G__38466 = (0);
var G__38467 = (0);
seq__38252_38420 = G__38464;
chunk__38256_38421 = G__38465;
count__38257_38422 = G__38466;
i__38258_38423 = G__38467;
continue;
}
}
} else {
}
}
break;
}


var G__38468 = seq__38186;
var G__38469 = chunk__38188;
var G__38470 = count__38189;
var G__38471 = (i__38190 + (1));
seq__38186 = G__38468;
chunk__38188 = G__38469;
count__38189 = G__38470;
i__38190 = G__38471;
continue;
} else {
var G__38472 = seq__38186;
var G__38473 = chunk__38188;
var G__38474 = count__38189;
var G__38475 = (i__38190 + (1));
seq__38186 = G__38472;
chunk__38188 = G__38473;
count__38189 = G__38474;
i__38190 = G__38475;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38186);
if(temp__5735__auto__){
var seq__38186__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38186__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38186__$1);
var G__38476 = cljs.core.chunk_rest(seq__38186__$1);
var G__38477 = c__4556__auto__;
var G__38478 = cljs.core.count(c__4556__auto__);
var G__38479 = (0);
seq__38186 = G__38476;
chunk__38188 = G__38477;
count__38189 = G__38478;
i__38190 = G__38479;
continue;
} else {
var path = cljs.core.first(seq__38186__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__38275_38480 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__38279_38481 = null;
var count__38280_38482 = (0);
var i__38281_38483 = (0);
while(true){
if((i__38281_38483 < count__38280_38482)){
var node_38484 = chunk__38279_38481.cljs$core$IIndexed$_nth$arity$2(null,i__38281_38483);
if(cljs.core.not(node_38484.shadow$old)){
var path_match_38485 = shadow.cljs.devtools.client.browser.match_paths(node_38484.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38485)){
var new_link_38486 = (function (){var G__38287 = node_38484.cloneNode(true);
G__38287.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38485),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38287;
})();
(node_38484.shadow$old = true);

(new_link_38486.onload = ((function (seq__38275_38480,chunk__38279_38481,count__38280_38482,i__38281_38483,seq__38186,chunk__38188,count__38189,i__38190,new_link_38486,path_match_38485,node_38484,path,seq__38186__$1,temp__5735__auto__,map__38184,map__38184__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_38484);
});})(seq__38275_38480,chunk__38279_38481,count__38280_38482,i__38281_38483,seq__38186,chunk__38188,count__38189,i__38190,new_link_38486,path_match_38485,node_38484,path,seq__38186__$1,temp__5735__auto__,map__38184,map__38184__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38485], 0));

goog.dom.insertSiblingAfter(new_link_38486,node_38484);


var G__38487 = seq__38275_38480;
var G__38488 = chunk__38279_38481;
var G__38489 = count__38280_38482;
var G__38490 = (i__38281_38483 + (1));
seq__38275_38480 = G__38487;
chunk__38279_38481 = G__38488;
count__38280_38482 = G__38489;
i__38281_38483 = G__38490;
continue;
} else {
var G__38491 = seq__38275_38480;
var G__38492 = chunk__38279_38481;
var G__38493 = count__38280_38482;
var G__38494 = (i__38281_38483 + (1));
seq__38275_38480 = G__38491;
chunk__38279_38481 = G__38492;
count__38280_38482 = G__38493;
i__38281_38483 = G__38494;
continue;
}
} else {
var G__38498 = seq__38275_38480;
var G__38499 = chunk__38279_38481;
var G__38500 = count__38280_38482;
var G__38501 = (i__38281_38483 + (1));
seq__38275_38480 = G__38498;
chunk__38279_38481 = G__38499;
count__38280_38482 = G__38500;
i__38281_38483 = G__38501;
continue;
}
} else {
var temp__5735__auto___38502__$1 = cljs.core.seq(seq__38275_38480);
if(temp__5735__auto___38502__$1){
var seq__38275_38503__$1 = temp__5735__auto___38502__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38275_38503__$1)){
var c__4556__auto___38504 = cljs.core.chunk_first(seq__38275_38503__$1);
var G__38505 = cljs.core.chunk_rest(seq__38275_38503__$1);
var G__38506 = c__4556__auto___38504;
var G__38507 = cljs.core.count(c__4556__auto___38504);
var G__38508 = (0);
seq__38275_38480 = G__38505;
chunk__38279_38481 = G__38506;
count__38280_38482 = G__38507;
i__38281_38483 = G__38508;
continue;
} else {
var node_38509 = cljs.core.first(seq__38275_38503__$1);
if(cljs.core.not(node_38509.shadow$old)){
var path_match_38510 = shadow.cljs.devtools.client.browser.match_paths(node_38509.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38510)){
var new_link_38511 = (function (){var G__38288 = node_38509.cloneNode(true);
G__38288.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38510),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38288;
})();
(node_38509.shadow$old = true);

(new_link_38511.onload = ((function (seq__38275_38480,chunk__38279_38481,count__38280_38482,i__38281_38483,seq__38186,chunk__38188,count__38189,i__38190,new_link_38511,path_match_38510,node_38509,seq__38275_38503__$1,temp__5735__auto___38502__$1,path,seq__38186__$1,temp__5735__auto__,map__38184,map__38184__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_38509);
});})(seq__38275_38480,chunk__38279_38481,count__38280_38482,i__38281_38483,seq__38186,chunk__38188,count__38189,i__38190,new_link_38511,path_match_38510,node_38509,seq__38275_38503__$1,temp__5735__auto___38502__$1,path,seq__38186__$1,temp__5735__auto__,map__38184,map__38184__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38510], 0));

goog.dom.insertSiblingAfter(new_link_38511,node_38509);


var G__38512 = cljs.core.next(seq__38275_38503__$1);
var G__38513 = null;
var G__38514 = (0);
var G__38515 = (0);
seq__38275_38480 = G__38512;
chunk__38279_38481 = G__38513;
count__38280_38482 = G__38514;
i__38281_38483 = G__38515;
continue;
} else {
var G__38516 = cljs.core.next(seq__38275_38503__$1);
var G__38517 = null;
var G__38518 = (0);
var G__38519 = (0);
seq__38275_38480 = G__38516;
chunk__38279_38481 = G__38517;
count__38280_38482 = G__38518;
i__38281_38483 = G__38519;
continue;
}
} else {
var G__38520 = cljs.core.next(seq__38275_38503__$1);
var G__38521 = null;
var G__38522 = (0);
var G__38523 = (0);
seq__38275_38480 = G__38520;
chunk__38279_38481 = G__38521;
count__38280_38482 = G__38522;
i__38281_38483 = G__38523;
continue;
}
}
} else {
}
}
break;
}


var G__38524 = cljs.core.next(seq__38186__$1);
var G__38525 = null;
var G__38526 = (0);
var G__38527 = (0);
seq__38186 = G__38524;
chunk__38188 = G__38525;
count__38189 = G__38526;
i__38190 = G__38527;
continue;
} else {
var G__38528 = cljs.core.next(seq__38186__$1);
var G__38529 = null;
var G__38530 = (0);
var G__38531 = (0);
seq__38186 = G__38528;
chunk__38188 = G__38529;
count__38189 = G__38530;
i__38190 = G__38531;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__38291){
var map__38292 = p__38291;
var map__38292__$1 = (((((!((map__38292 == null))))?(((((map__38292.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38292.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38292):map__38292);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38292__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__38310){
var map__38311 = p__38310;
var map__38311__$1 = (((((!((map__38311 == null))))?(((((map__38311.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38311.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38311):map__38311);
var _ = map__38311__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38311__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__38313,done,error){
var map__38314 = p__38313;
var map__38314__$1 = (((((!((map__38314 == null))))?(((((map__38314.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38314.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38314):map__38314);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38314__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__38316,done,error){
var map__38317 = p__38316;
var map__38317__$1 = (((((!((map__38317 == null))))?(((((map__38317.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38317.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38317):map__38317);
var msg = map__38317__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38317__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38317__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38317__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__38319){
var map__38320 = p__38319;
var map__38320__$1 = (((((!((map__38320 == null))))?(((((map__38320.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38320.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38320):map__38320);
var src = map__38320__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38320__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__38324 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__38324) : done.call(null,G__38324));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__38325){
var map__38326 = p__38325;
var map__38326__$1 = (((((!((map__38326 == null))))?(((((map__38326.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38326.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38326):map__38326);
var msg__$1 = map__38326__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38326__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e38330){var ex = e38330;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__38333){
var map__38334 = p__38333;
var map__38334__$1 = (((((!((map__38334 == null))))?(((((map__38334.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38334.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38334):map__38334);
var env = map__38334__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38334__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__38336){
var map__38337 = p__38336;
var map__38337__$1 = (((((!((map__38337 == null))))?(((((map__38337.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38337.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38337):map__38337);
var msg = map__38337__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38337__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__38339){
var map__38340 = p__38339;
var map__38340__$1 = (((((!((map__38340 == null))))?(((((map__38340.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38340.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38340):map__38340);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38340__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38340__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__38344){
var map__38345 = p__38344;
var map__38345__$1 = (((((!((map__38345 == null))))?(((((map__38345.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38345.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38345):map__38345);
var svc = map__38345__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38345__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
