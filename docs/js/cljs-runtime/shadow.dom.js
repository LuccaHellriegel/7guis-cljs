goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_36153 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_36153(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_36163 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_36163(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__35372 = coll;
var G__35373 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__35372,G__35373) : shadow.dom.lazy_native_coll_seq.call(null,G__35372,G__35373));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__35379 = arguments.length;
switch (G__35379) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__35382 = arguments.length;
switch (G__35382) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__35386 = arguments.length;
switch (G__35386) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__35401 = arguments.length;
switch (G__35401) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__35407 = arguments.length;
switch (G__35407) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__35412 = arguments.length;
switch (G__35412) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e35418){if((e35418 instanceof Object)){
var e = e35418;
return console.log("didnt support attachEvent",el,e);
} else {
throw e35418;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__35424 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__35425 = null;
var count__35426 = (0);
var i__35427 = (0);
while(true){
if((i__35427 < count__35426)){
var el = chunk__35425.cljs$core$IIndexed$_nth$arity$2(null,i__35427);
var handler_36214__$1 = ((function (seq__35424,chunk__35425,count__35426,i__35427,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__35424,chunk__35425,count__35426,i__35427,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_36214__$1);


var G__36215 = seq__35424;
var G__36216 = chunk__35425;
var G__36217 = count__35426;
var G__36218 = (i__35427 + (1));
seq__35424 = G__36215;
chunk__35425 = G__36216;
count__35426 = G__36217;
i__35427 = G__36218;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35424);
if(temp__5735__auto__){
var seq__35424__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35424__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35424__$1);
var G__36221 = cljs.core.chunk_rest(seq__35424__$1);
var G__36222 = c__4556__auto__;
var G__36223 = cljs.core.count(c__4556__auto__);
var G__36224 = (0);
seq__35424 = G__36221;
chunk__35425 = G__36222;
count__35426 = G__36223;
i__35427 = G__36224;
continue;
} else {
var el = cljs.core.first(seq__35424__$1);
var handler_36225__$1 = ((function (seq__35424,chunk__35425,count__35426,i__35427,el,seq__35424__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__35424,chunk__35425,count__35426,i__35427,el,seq__35424__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_36225__$1);


var G__36227 = cljs.core.next(seq__35424__$1);
var G__36228 = null;
var G__36229 = (0);
var G__36230 = (0);
seq__35424 = G__36227;
chunk__35425 = G__36228;
count__35426 = G__36229;
i__35427 = G__36230;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__35439 = arguments.length;
switch (G__35439) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__35451 = cljs.core.seq(events);
var chunk__35452 = null;
var count__35453 = (0);
var i__35454 = (0);
while(true){
if((i__35454 < count__35453)){
var vec__35464 = chunk__35452.cljs$core$IIndexed$_nth$arity$2(null,i__35454);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35464,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35464,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__36255 = seq__35451;
var G__36256 = chunk__35452;
var G__36257 = count__35453;
var G__36258 = (i__35454 + (1));
seq__35451 = G__36255;
chunk__35452 = G__36256;
count__35453 = G__36257;
i__35454 = G__36258;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35451);
if(temp__5735__auto__){
var seq__35451__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35451__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35451__$1);
var G__36260 = cljs.core.chunk_rest(seq__35451__$1);
var G__36261 = c__4556__auto__;
var G__36262 = cljs.core.count(c__4556__auto__);
var G__36263 = (0);
seq__35451 = G__36260;
chunk__35452 = G__36261;
count__35453 = G__36262;
i__35454 = G__36263;
continue;
} else {
var vec__35473 = cljs.core.first(seq__35451__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35473,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35473,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__36274 = cljs.core.next(seq__35451__$1);
var G__36275 = null;
var G__36276 = (0);
var G__36277 = (0);
seq__35451 = G__36274;
chunk__35452 = G__36275;
count__35453 = G__36276;
i__35454 = G__36277;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__35477 = cljs.core.seq(styles);
var chunk__35478 = null;
var count__35479 = (0);
var i__35480 = (0);
while(true){
if((i__35480 < count__35479)){
var vec__35491 = chunk__35478.cljs$core$IIndexed$_nth$arity$2(null,i__35480);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35491,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35491,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__36281 = seq__35477;
var G__36282 = chunk__35478;
var G__36283 = count__35479;
var G__36284 = (i__35480 + (1));
seq__35477 = G__36281;
chunk__35478 = G__36282;
count__35479 = G__36283;
i__35480 = G__36284;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35477);
if(temp__5735__auto__){
var seq__35477__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35477__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35477__$1);
var G__36289 = cljs.core.chunk_rest(seq__35477__$1);
var G__36290 = c__4556__auto__;
var G__36291 = cljs.core.count(c__4556__auto__);
var G__36292 = (0);
seq__35477 = G__36289;
chunk__35478 = G__36290;
count__35479 = G__36291;
i__35480 = G__36292;
continue;
} else {
var vec__35495 = cljs.core.first(seq__35477__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35495,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35495,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__36306 = cljs.core.next(seq__35477__$1);
var G__36307 = null;
var G__36308 = (0);
var G__36309 = (0);
seq__35477 = G__36306;
chunk__35478 = G__36307;
count__35479 = G__36308;
i__35480 = G__36309;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__35501_36310 = key;
var G__35501_36311__$1 = (((G__35501_36310 instanceof cljs.core.Keyword))?G__35501_36310.fqn:null);
switch (G__35501_36311__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_36342 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_36342,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_36342,"aria-");
}
})())){
el.setAttribute(ks_36342,value);
} else {
(el[ks_36342] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__35535){
var map__35536 = p__35535;
var map__35536__$1 = (((((!((map__35536 == null))))?(((((map__35536.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35536.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35536):map__35536);
var props = map__35536__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35536__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__35540 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35540,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35540,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35540,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__35543 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__35543,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__35543;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__35547 = arguments.length;
switch (G__35547) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__35559){
var vec__35560 = p__35559;
var seq__35561 = cljs.core.seq(vec__35560);
var first__35562 = cljs.core.first(seq__35561);
var seq__35561__$1 = cljs.core.next(seq__35561);
var nn = first__35562;
var first__35562__$1 = cljs.core.first(seq__35561__$1);
var seq__35561__$2 = cljs.core.next(seq__35561__$1);
var np = first__35562__$1;
var nc = seq__35561__$2;
var node = vec__35560;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35565 = nn;
var G__35566 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__35565,G__35566) : create_fn.call(null,G__35565,G__35566));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35567 = nn;
var G__35568 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__35567,G__35568) : create_fn.call(null,G__35567,G__35568));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__35579 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35579,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35579,(1),null);
var seq__35582_36405 = cljs.core.seq(node_children);
var chunk__35583_36406 = null;
var count__35584_36407 = (0);
var i__35585_36408 = (0);
while(true){
if((i__35585_36408 < count__35584_36407)){
var child_struct_36410 = chunk__35583_36406.cljs$core$IIndexed$_nth$arity$2(null,i__35585_36408);
var children_36412 = shadow.dom.dom_node(child_struct_36410);
if(cljs.core.seq_QMARK_(children_36412)){
var seq__35635_36414 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_36412));
var chunk__35637_36415 = null;
var count__35638_36416 = (0);
var i__35639_36417 = (0);
while(true){
if((i__35639_36417 < count__35638_36416)){
var child_36419 = chunk__35637_36415.cljs$core$IIndexed$_nth$arity$2(null,i__35639_36417);
if(cljs.core.truth_(child_36419)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36419);


var G__36422 = seq__35635_36414;
var G__36423 = chunk__35637_36415;
var G__36424 = count__35638_36416;
var G__36425 = (i__35639_36417 + (1));
seq__35635_36414 = G__36422;
chunk__35637_36415 = G__36423;
count__35638_36416 = G__36424;
i__35639_36417 = G__36425;
continue;
} else {
var G__36428 = seq__35635_36414;
var G__36429 = chunk__35637_36415;
var G__36430 = count__35638_36416;
var G__36431 = (i__35639_36417 + (1));
seq__35635_36414 = G__36428;
chunk__35637_36415 = G__36429;
count__35638_36416 = G__36430;
i__35639_36417 = G__36431;
continue;
}
} else {
var temp__5735__auto___36433 = cljs.core.seq(seq__35635_36414);
if(temp__5735__auto___36433){
var seq__35635_36434__$1 = temp__5735__auto___36433;
if(cljs.core.chunked_seq_QMARK_(seq__35635_36434__$1)){
var c__4556__auto___36435 = cljs.core.chunk_first(seq__35635_36434__$1);
var G__36436 = cljs.core.chunk_rest(seq__35635_36434__$1);
var G__36437 = c__4556__auto___36435;
var G__36438 = cljs.core.count(c__4556__auto___36435);
var G__36439 = (0);
seq__35635_36414 = G__36436;
chunk__35637_36415 = G__36437;
count__35638_36416 = G__36438;
i__35639_36417 = G__36439;
continue;
} else {
var child_36440 = cljs.core.first(seq__35635_36434__$1);
if(cljs.core.truth_(child_36440)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36440);


var G__36443 = cljs.core.next(seq__35635_36434__$1);
var G__36444 = null;
var G__36445 = (0);
var G__36446 = (0);
seq__35635_36414 = G__36443;
chunk__35637_36415 = G__36444;
count__35638_36416 = G__36445;
i__35639_36417 = G__36446;
continue;
} else {
var G__36447 = cljs.core.next(seq__35635_36434__$1);
var G__36448 = null;
var G__36449 = (0);
var G__36450 = (0);
seq__35635_36414 = G__36447;
chunk__35637_36415 = G__36448;
count__35638_36416 = G__36449;
i__35639_36417 = G__36450;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_36412);
}


var G__36451 = seq__35582_36405;
var G__36452 = chunk__35583_36406;
var G__36453 = count__35584_36407;
var G__36454 = (i__35585_36408 + (1));
seq__35582_36405 = G__36451;
chunk__35583_36406 = G__36452;
count__35584_36407 = G__36453;
i__35585_36408 = G__36454;
continue;
} else {
var temp__5735__auto___36455 = cljs.core.seq(seq__35582_36405);
if(temp__5735__auto___36455){
var seq__35582_36457__$1 = temp__5735__auto___36455;
if(cljs.core.chunked_seq_QMARK_(seq__35582_36457__$1)){
var c__4556__auto___36459 = cljs.core.chunk_first(seq__35582_36457__$1);
var G__36460 = cljs.core.chunk_rest(seq__35582_36457__$1);
var G__36461 = c__4556__auto___36459;
var G__36462 = cljs.core.count(c__4556__auto___36459);
var G__36463 = (0);
seq__35582_36405 = G__36460;
chunk__35583_36406 = G__36461;
count__35584_36407 = G__36462;
i__35585_36408 = G__36463;
continue;
} else {
var child_struct_36464 = cljs.core.first(seq__35582_36457__$1);
var children_36465 = shadow.dom.dom_node(child_struct_36464);
if(cljs.core.seq_QMARK_(children_36465)){
var seq__35654_36466 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_36465));
var chunk__35656_36467 = null;
var count__35657_36468 = (0);
var i__35658_36469 = (0);
while(true){
if((i__35658_36469 < count__35657_36468)){
var child_36471 = chunk__35656_36467.cljs$core$IIndexed$_nth$arity$2(null,i__35658_36469);
if(cljs.core.truth_(child_36471)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36471);


var G__36473 = seq__35654_36466;
var G__36474 = chunk__35656_36467;
var G__36475 = count__35657_36468;
var G__36476 = (i__35658_36469 + (1));
seq__35654_36466 = G__36473;
chunk__35656_36467 = G__36474;
count__35657_36468 = G__36475;
i__35658_36469 = G__36476;
continue;
} else {
var G__36477 = seq__35654_36466;
var G__36478 = chunk__35656_36467;
var G__36479 = count__35657_36468;
var G__36480 = (i__35658_36469 + (1));
seq__35654_36466 = G__36477;
chunk__35656_36467 = G__36478;
count__35657_36468 = G__36479;
i__35658_36469 = G__36480;
continue;
}
} else {
var temp__5735__auto___36486__$1 = cljs.core.seq(seq__35654_36466);
if(temp__5735__auto___36486__$1){
var seq__35654_36487__$1 = temp__5735__auto___36486__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35654_36487__$1)){
var c__4556__auto___36488 = cljs.core.chunk_first(seq__35654_36487__$1);
var G__36489 = cljs.core.chunk_rest(seq__35654_36487__$1);
var G__36490 = c__4556__auto___36488;
var G__36491 = cljs.core.count(c__4556__auto___36488);
var G__36492 = (0);
seq__35654_36466 = G__36489;
chunk__35656_36467 = G__36490;
count__35657_36468 = G__36491;
i__35658_36469 = G__36492;
continue;
} else {
var child_36498 = cljs.core.first(seq__35654_36487__$1);
if(cljs.core.truth_(child_36498)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36498);


var G__36499 = cljs.core.next(seq__35654_36487__$1);
var G__36500 = null;
var G__36501 = (0);
var G__36502 = (0);
seq__35654_36466 = G__36499;
chunk__35656_36467 = G__36500;
count__35657_36468 = G__36501;
i__35658_36469 = G__36502;
continue;
} else {
var G__36503 = cljs.core.next(seq__35654_36487__$1);
var G__36504 = null;
var G__36505 = (0);
var G__36506 = (0);
seq__35654_36466 = G__36503;
chunk__35656_36467 = G__36504;
count__35657_36468 = G__36505;
i__35658_36469 = G__36506;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_36465);
}


var G__36508 = cljs.core.next(seq__35582_36457__$1);
var G__36509 = null;
var G__36510 = (0);
var G__36511 = (0);
seq__35582_36405 = G__36508;
chunk__35583_36406 = G__36509;
count__35584_36407 = G__36510;
i__35585_36408 = G__36511;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__35689 = cljs.core.seq(node);
var chunk__35690 = null;
var count__35691 = (0);
var i__35692 = (0);
while(true){
if((i__35692 < count__35691)){
var n = chunk__35690.cljs$core$IIndexed$_nth$arity$2(null,i__35692);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__36536 = seq__35689;
var G__36537 = chunk__35690;
var G__36538 = count__35691;
var G__36539 = (i__35692 + (1));
seq__35689 = G__36536;
chunk__35690 = G__36537;
count__35691 = G__36538;
i__35692 = G__36539;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35689);
if(temp__5735__auto__){
var seq__35689__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35689__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35689__$1);
var G__36547 = cljs.core.chunk_rest(seq__35689__$1);
var G__36548 = c__4556__auto__;
var G__36549 = cljs.core.count(c__4556__auto__);
var G__36550 = (0);
seq__35689 = G__36547;
chunk__35690 = G__36548;
count__35691 = G__36549;
i__35692 = G__36550;
continue;
} else {
var n = cljs.core.first(seq__35689__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__36551 = cljs.core.next(seq__35689__$1);
var G__36552 = null;
var G__36553 = (0);
var G__36554 = (0);
seq__35689 = G__36551;
chunk__35690 = G__36552;
count__35691 = G__36553;
i__35692 = G__36554;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__35703 = arguments.length;
switch (G__35703) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__35709 = arguments.length;
switch (G__35709) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__35723 = arguments.length;
switch (G__35723) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36583 = arguments.length;
var i__4737__auto___36584 = (0);
while(true){
if((i__4737__auto___36584 < len__4736__auto___36583)){
args__4742__auto__.push((arguments[i__4737__auto___36584]));

var G__36585 = (i__4737__auto___36584 + (1));
i__4737__auto___36584 = G__36585;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__35751_36586 = cljs.core.seq(nodes);
var chunk__35752_36587 = null;
var count__35753_36588 = (0);
var i__35754_36589 = (0);
while(true){
if((i__35754_36589 < count__35753_36588)){
var node_36590 = chunk__35752_36587.cljs$core$IIndexed$_nth$arity$2(null,i__35754_36589);
fragment.appendChild(shadow.dom._to_dom(node_36590));


var G__36592 = seq__35751_36586;
var G__36593 = chunk__35752_36587;
var G__36594 = count__35753_36588;
var G__36595 = (i__35754_36589 + (1));
seq__35751_36586 = G__36592;
chunk__35752_36587 = G__36593;
count__35753_36588 = G__36594;
i__35754_36589 = G__36595;
continue;
} else {
var temp__5735__auto___36597 = cljs.core.seq(seq__35751_36586);
if(temp__5735__auto___36597){
var seq__35751_36598__$1 = temp__5735__auto___36597;
if(cljs.core.chunked_seq_QMARK_(seq__35751_36598__$1)){
var c__4556__auto___36599 = cljs.core.chunk_first(seq__35751_36598__$1);
var G__36601 = cljs.core.chunk_rest(seq__35751_36598__$1);
var G__36602 = c__4556__auto___36599;
var G__36603 = cljs.core.count(c__4556__auto___36599);
var G__36604 = (0);
seq__35751_36586 = G__36601;
chunk__35752_36587 = G__36602;
count__35753_36588 = G__36603;
i__35754_36589 = G__36604;
continue;
} else {
var node_36606 = cljs.core.first(seq__35751_36598__$1);
fragment.appendChild(shadow.dom._to_dom(node_36606));


var G__36607 = cljs.core.next(seq__35751_36598__$1);
var G__36608 = null;
var G__36609 = (0);
var G__36610 = (0);
seq__35751_36586 = G__36607;
chunk__35752_36587 = G__36608;
count__35753_36588 = G__36609;
i__35754_36589 = G__36610;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq35748){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35748));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__35770_36611 = cljs.core.seq(scripts);
var chunk__35771_36612 = null;
var count__35772_36613 = (0);
var i__35773_36614 = (0);
while(true){
if((i__35773_36614 < count__35772_36613)){
var vec__35786_36616 = chunk__35771_36612.cljs$core$IIndexed$_nth$arity$2(null,i__35773_36614);
var script_tag_36617 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35786_36616,(0),null);
var script_body_36618 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35786_36616,(1),null);
eval(script_body_36618);


var G__36622 = seq__35770_36611;
var G__36623 = chunk__35771_36612;
var G__36624 = count__35772_36613;
var G__36625 = (i__35773_36614 + (1));
seq__35770_36611 = G__36622;
chunk__35771_36612 = G__36623;
count__35772_36613 = G__36624;
i__35773_36614 = G__36625;
continue;
} else {
var temp__5735__auto___36626 = cljs.core.seq(seq__35770_36611);
if(temp__5735__auto___36626){
var seq__35770_36627__$1 = temp__5735__auto___36626;
if(cljs.core.chunked_seq_QMARK_(seq__35770_36627__$1)){
var c__4556__auto___36628 = cljs.core.chunk_first(seq__35770_36627__$1);
var G__36629 = cljs.core.chunk_rest(seq__35770_36627__$1);
var G__36630 = c__4556__auto___36628;
var G__36631 = cljs.core.count(c__4556__auto___36628);
var G__36632 = (0);
seq__35770_36611 = G__36629;
chunk__35771_36612 = G__36630;
count__35772_36613 = G__36631;
i__35773_36614 = G__36632;
continue;
} else {
var vec__35796_36633 = cljs.core.first(seq__35770_36627__$1);
var script_tag_36634 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35796_36633,(0),null);
var script_body_36635 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35796_36633,(1),null);
eval(script_body_36635);


var G__36636 = cljs.core.next(seq__35770_36627__$1);
var G__36637 = null;
var G__36638 = (0);
var G__36639 = (0);
seq__35770_36611 = G__36636;
chunk__35771_36612 = G__36637;
count__35772_36613 = G__36638;
i__35773_36614 = G__36639;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__35804){
var vec__35805 = p__35804;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35805,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35805,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__35814 = arguments.length;
switch (G__35814) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__35825 = cljs.core.seq(style_keys);
var chunk__35826 = null;
var count__35827 = (0);
var i__35828 = (0);
while(true){
if((i__35828 < count__35827)){
var it = chunk__35826.cljs$core$IIndexed$_nth$arity$2(null,i__35828);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__36661 = seq__35825;
var G__36662 = chunk__35826;
var G__36663 = count__35827;
var G__36664 = (i__35828 + (1));
seq__35825 = G__36661;
chunk__35826 = G__36662;
count__35827 = G__36663;
i__35828 = G__36664;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35825);
if(temp__5735__auto__){
var seq__35825__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35825__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35825__$1);
var G__36669 = cljs.core.chunk_rest(seq__35825__$1);
var G__36670 = c__4556__auto__;
var G__36671 = cljs.core.count(c__4556__auto__);
var G__36672 = (0);
seq__35825 = G__36669;
chunk__35826 = G__36670;
count__35827 = G__36671;
i__35828 = G__36672;
continue;
} else {
var it = cljs.core.first(seq__35825__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__36679 = cljs.core.next(seq__35825__$1);
var G__36680 = null;
var G__36681 = (0);
var G__36682 = (0);
seq__35825 = G__36679;
chunk__35826 = G__36680;
count__35827 = G__36681;
i__35828 = G__36682;
continue;
}
} else {
return null;
}
}
break;
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
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k35832,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__35839 = k35832;
var G__35839__$1 = (((G__35839 instanceof cljs.core.Keyword))?G__35839.fqn:null);
switch (G__35839__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35832,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__35847){
var vec__35851 = p__35847;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35851,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35851,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35831){
var self__ = this;
var G__35831__$1 = this;
return (new cljs.core.RecordIter((0),G__35831__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35833,other35834){
var self__ = this;
var this35833__$1 = this;
return (((!((other35834 == null)))) && ((this35833__$1.constructor === other35834.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35833__$1.x,other35834.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35833__$1.y,other35834.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35833__$1.__extmap,other35834.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__35831){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__35866 = cljs.core.keyword_identical_QMARK_;
var expr__35867 = k__4388__auto__;
if(cljs.core.truth_((pred__35866.cljs$core$IFn$_invoke$arity$2 ? pred__35866.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__35867) : pred__35866.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__35867)))){
return (new shadow.dom.Coordinate(G__35831,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35866.cljs$core$IFn$_invoke$arity$2 ? pred__35866.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__35867) : pred__35866.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__35867)))){
return (new shadow.dom.Coordinate(self__.x,G__35831,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__35831),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__35831){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__35831,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__35838){
var extmap__4419__auto__ = (function (){var G__35874 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35838,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__35838)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35874);
} else {
return G__35874;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__35838),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__35838),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
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
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k35882,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__35892 = k35882;
var G__35892__$1 = (((G__35892 instanceof cljs.core.Keyword))?G__35892.fqn:null);
switch (G__35892__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35882,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__35896){
var vec__35898 = p__35896;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35898,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35898,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Size{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35881){
var self__ = this;
var G__35881__$1 = this;
return (new cljs.core.RecordIter((0),G__35881__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35883,other35884){
var self__ = this;
var this35883__$1 = this;
return (((!((other35884 == null)))) && ((this35883__$1.constructor === other35884.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35883__$1.w,other35884.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35883__$1.h,other35884.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35883__$1.__extmap,other35884.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__35881){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__35916 = cljs.core.keyword_identical_QMARK_;
var expr__35917 = k__4388__auto__;
if(cljs.core.truth_((pred__35916.cljs$core$IFn$_invoke$arity$2 ? pred__35916.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__35917) : pred__35916.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__35917)))){
return (new shadow.dom.Size(G__35881,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35916.cljs$core$IFn$_invoke$arity$2 ? pred__35916.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__35917) : pred__35916.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__35917)))){
return (new shadow.dom.Size(self__.w,G__35881,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__35881),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__35881){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__35881,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__35886){
var extmap__4419__auto__ = (function (){var G__35930 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35886,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__35886)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35930);
} else {
return G__35930;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__35886),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__35886),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4610__auto__ = opts;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4611__auto__)){
var G__36763 = (i + (1));
var G__36764 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__36763;
ret = G__36764;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__35956){
var vec__35957 = p__35956;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35957,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35957,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__35962 = arguments.length;
switch (G__35962) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__36769 = ps;
var G__36770 = (i + (1));
el__$1 = G__36769;
i = G__36770;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__35980 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35980,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35980,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35980,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__35983_36795 = cljs.core.seq(props);
var chunk__35984_36796 = null;
var count__35985_36797 = (0);
var i__35986_36798 = (0);
while(true){
if((i__35986_36798 < count__35985_36797)){
var vec__35994_36800 = chunk__35984_36796.cljs$core$IIndexed$_nth$arity$2(null,i__35986_36798);
var k_36801 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35994_36800,(0),null);
var v_36802 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35994_36800,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_36801);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36801),v_36802);


var G__36807 = seq__35983_36795;
var G__36808 = chunk__35984_36796;
var G__36809 = count__35985_36797;
var G__36810 = (i__35986_36798 + (1));
seq__35983_36795 = G__36807;
chunk__35984_36796 = G__36808;
count__35985_36797 = G__36809;
i__35986_36798 = G__36810;
continue;
} else {
var temp__5735__auto___36812 = cljs.core.seq(seq__35983_36795);
if(temp__5735__auto___36812){
var seq__35983_36813__$1 = temp__5735__auto___36812;
if(cljs.core.chunked_seq_QMARK_(seq__35983_36813__$1)){
var c__4556__auto___36814 = cljs.core.chunk_first(seq__35983_36813__$1);
var G__36817 = cljs.core.chunk_rest(seq__35983_36813__$1);
var G__36818 = c__4556__auto___36814;
var G__36819 = cljs.core.count(c__4556__auto___36814);
var G__36820 = (0);
seq__35983_36795 = G__36817;
chunk__35984_36796 = G__36818;
count__35985_36797 = G__36819;
i__35986_36798 = G__36820;
continue;
} else {
var vec__35997_36822 = cljs.core.first(seq__35983_36813__$1);
var k_36823 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35997_36822,(0),null);
var v_36824 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35997_36822,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_36823);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36823),v_36824);


var G__36827 = cljs.core.next(seq__35983_36813__$1);
var G__36828 = null;
var G__36829 = (0);
var G__36830 = (0);
seq__35983_36795 = G__36827;
chunk__35984_36796 = G__36828;
count__35985_36797 = G__36829;
i__35986_36798 = G__36830;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__36010 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36010,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36010,(1),null);
var seq__36015_36833 = cljs.core.seq(node_children);
var chunk__36017_36834 = null;
var count__36018_36835 = (0);
var i__36019_36836 = (0);
while(true){
if((i__36019_36836 < count__36018_36835)){
var child_struct_36838 = chunk__36017_36834.cljs$core$IIndexed$_nth$arity$2(null,i__36019_36836);
if((!((child_struct_36838 == null)))){
if(typeof child_struct_36838 === 'string'){
var text_36840 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36840),child_struct_36838].join(''));
} else {
var children_36841 = shadow.dom.svg_node(child_struct_36838);
if(cljs.core.seq_QMARK_(children_36841)){
var seq__36055_36842 = cljs.core.seq(children_36841);
var chunk__36057_36843 = null;
var count__36058_36844 = (0);
var i__36059_36845 = (0);
while(true){
if((i__36059_36845 < count__36058_36844)){
var child_36846 = chunk__36057_36843.cljs$core$IIndexed$_nth$arity$2(null,i__36059_36845);
if(cljs.core.truth_(child_36846)){
node.appendChild(child_36846);


var G__36847 = seq__36055_36842;
var G__36848 = chunk__36057_36843;
var G__36849 = count__36058_36844;
var G__36850 = (i__36059_36845 + (1));
seq__36055_36842 = G__36847;
chunk__36057_36843 = G__36848;
count__36058_36844 = G__36849;
i__36059_36845 = G__36850;
continue;
} else {
var G__36852 = seq__36055_36842;
var G__36853 = chunk__36057_36843;
var G__36854 = count__36058_36844;
var G__36855 = (i__36059_36845 + (1));
seq__36055_36842 = G__36852;
chunk__36057_36843 = G__36853;
count__36058_36844 = G__36854;
i__36059_36845 = G__36855;
continue;
}
} else {
var temp__5735__auto___36857 = cljs.core.seq(seq__36055_36842);
if(temp__5735__auto___36857){
var seq__36055_36858__$1 = temp__5735__auto___36857;
if(cljs.core.chunked_seq_QMARK_(seq__36055_36858__$1)){
var c__4556__auto___36859 = cljs.core.chunk_first(seq__36055_36858__$1);
var G__36860 = cljs.core.chunk_rest(seq__36055_36858__$1);
var G__36861 = c__4556__auto___36859;
var G__36862 = cljs.core.count(c__4556__auto___36859);
var G__36863 = (0);
seq__36055_36842 = G__36860;
chunk__36057_36843 = G__36861;
count__36058_36844 = G__36862;
i__36059_36845 = G__36863;
continue;
} else {
var child_36865 = cljs.core.first(seq__36055_36858__$1);
if(cljs.core.truth_(child_36865)){
node.appendChild(child_36865);


var G__36866 = cljs.core.next(seq__36055_36858__$1);
var G__36867 = null;
var G__36868 = (0);
var G__36869 = (0);
seq__36055_36842 = G__36866;
chunk__36057_36843 = G__36867;
count__36058_36844 = G__36868;
i__36059_36845 = G__36869;
continue;
} else {
var G__36870 = cljs.core.next(seq__36055_36858__$1);
var G__36871 = null;
var G__36872 = (0);
var G__36873 = (0);
seq__36055_36842 = G__36870;
chunk__36057_36843 = G__36871;
count__36058_36844 = G__36872;
i__36059_36845 = G__36873;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36841);
}
}


var G__36875 = seq__36015_36833;
var G__36876 = chunk__36017_36834;
var G__36877 = count__36018_36835;
var G__36878 = (i__36019_36836 + (1));
seq__36015_36833 = G__36875;
chunk__36017_36834 = G__36876;
count__36018_36835 = G__36877;
i__36019_36836 = G__36878;
continue;
} else {
var G__36879 = seq__36015_36833;
var G__36880 = chunk__36017_36834;
var G__36881 = count__36018_36835;
var G__36882 = (i__36019_36836 + (1));
seq__36015_36833 = G__36879;
chunk__36017_36834 = G__36880;
count__36018_36835 = G__36881;
i__36019_36836 = G__36882;
continue;
}
} else {
var temp__5735__auto___36883 = cljs.core.seq(seq__36015_36833);
if(temp__5735__auto___36883){
var seq__36015_36887__$1 = temp__5735__auto___36883;
if(cljs.core.chunked_seq_QMARK_(seq__36015_36887__$1)){
var c__4556__auto___36888 = cljs.core.chunk_first(seq__36015_36887__$1);
var G__36889 = cljs.core.chunk_rest(seq__36015_36887__$1);
var G__36890 = c__4556__auto___36888;
var G__36891 = cljs.core.count(c__4556__auto___36888);
var G__36892 = (0);
seq__36015_36833 = G__36889;
chunk__36017_36834 = G__36890;
count__36018_36835 = G__36891;
i__36019_36836 = G__36892;
continue;
} else {
var child_struct_36893 = cljs.core.first(seq__36015_36887__$1);
if((!((child_struct_36893 == null)))){
if(typeof child_struct_36893 === 'string'){
var text_36895 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36895),child_struct_36893].join(''));
} else {
var children_36896 = shadow.dom.svg_node(child_struct_36893);
if(cljs.core.seq_QMARK_(children_36896)){
var seq__36074_36897 = cljs.core.seq(children_36896);
var chunk__36076_36898 = null;
var count__36077_36899 = (0);
var i__36078_36900 = (0);
while(true){
if((i__36078_36900 < count__36077_36899)){
var child_36901 = chunk__36076_36898.cljs$core$IIndexed$_nth$arity$2(null,i__36078_36900);
if(cljs.core.truth_(child_36901)){
node.appendChild(child_36901);


var G__36902 = seq__36074_36897;
var G__36903 = chunk__36076_36898;
var G__36904 = count__36077_36899;
var G__36905 = (i__36078_36900 + (1));
seq__36074_36897 = G__36902;
chunk__36076_36898 = G__36903;
count__36077_36899 = G__36904;
i__36078_36900 = G__36905;
continue;
} else {
var G__36906 = seq__36074_36897;
var G__36907 = chunk__36076_36898;
var G__36908 = count__36077_36899;
var G__36909 = (i__36078_36900 + (1));
seq__36074_36897 = G__36906;
chunk__36076_36898 = G__36907;
count__36077_36899 = G__36908;
i__36078_36900 = G__36909;
continue;
}
} else {
var temp__5735__auto___36910__$1 = cljs.core.seq(seq__36074_36897);
if(temp__5735__auto___36910__$1){
var seq__36074_36911__$1 = temp__5735__auto___36910__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36074_36911__$1)){
var c__4556__auto___36913 = cljs.core.chunk_first(seq__36074_36911__$1);
var G__36914 = cljs.core.chunk_rest(seq__36074_36911__$1);
var G__36915 = c__4556__auto___36913;
var G__36916 = cljs.core.count(c__4556__auto___36913);
var G__36917 = (0);
seq__36074_36897 = G__36914;
chunk__36076_36898 = G__36915;
count__36077_36899 = G__36916;
i__36078_36900 = G__36917;
continue;
} else {
var child_36918 = cljs.core.first(seq__36074_36911__$1);
if(cljs.core.truth_(child_36918)){
node.appendChild(child_36918);


var G__36919 = cljs.core.next(seq__36074_36911__$1);
var G__36920 = null;
var G__36921 = (0);
var G__36922 = (0);
seq__36074_36897 = G__36919;
chunk__36076_36898 = G__36920;
count__36077_36899 = G__36921;
i__36078_36900 = G__36922;
continue;
} else {
var G__36923 = cljs.core.next(seq__36074_36911__$1);
var G__36924 = null;
var G__36925 = (0);
var G__36926 = (0);
seq__36074_36897 = G__36923;
chunk__36076_36898 = G__36924;
count__36077_36899 = G__36925;
i__36078_36900 = G__36926;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36896);
}
}


var G__36928 = cljs.core.next(seq__36015_36887__$1);
var G__36929 = null;
var G__36930 = (0);
var G__36931 = (0);
seq__36015_36833 = G__36928;
chunk__36017_36834 = G__36929;
count__36018_36835 = G__36930;
i__36019_36836 = G__36931;
continue;
} else {
var G__36932 = cljs.core.next(seq__36015_36887__$1);
var G__36933 = null;
var G__36934 = (0);
var G__36935 = (0);
seq__36015_36833 = G__36932;
chunk__36017_36834 = G__36933;
count__36018_36835 = G__36934;
i__36019_36836 = G__36935;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36947 = arguments.length;
var i__4737__auto___36948 = (0);
while(true){
if((i__4737__auto___36948 < len__4736__auto___36947)){
args__4742__auto__.push((arguments[i__4737__auto___36948]));

var G__36950 = (i__4737__auto___36948 + (1));
i__4737__auto___36948 = G__36950;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq36098){
var G__36099 = cljs.core.first(seq36098);
var seq36098__$1 = cljs.core.next(seq36098);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36099,seq36098__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__36105 = arguments.length;
switch (G__36105) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4115__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4115__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4115__auto__;
}
})())){
var c__32934__auto___36964 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32935__auto__ = (function (){var switch__32743__auto__ = (function (state_36121){
var state_val_36122 = (state_36121[(1)]);
if((state_val_36122 === (1))){
var state_36121__$1 = state_36121;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36121__$1,(2),once_or_cleanup);
} else {
if((state_val_36122 === (2))){
var inst_36118 = (state_36121[(2)]);
var inst_36119 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_36121__$1 = (function (){var statearr_36124 = state_36121;
(statearr_36124[(7)] = inst_36118);

return statearr_36124;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36121__$1,inst_36119);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__32744__auto__ = null;
var shadow$dom$state_machine__32744__auto____0 = (function (){
var statearr_36125 = [null,null,null,null,null,null,null,null];
(statearr_36125[(0)] = shadow$dom$state_machine__32744__auto__);

(statearr_36125[(1)] = (1));

return statearr_36125;
});
var shadow$dom$state_machine__32744__auto____1 = (function (state_36121){
while(true){
var ret_value__32745__auto__ = (function (){try{while(true){
var result__32746__auto__ = switch__32743__auto__(state_36121);
if(cljs.core.keyword_identical_QMARK_(result__32746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32746__auto__;
}
break;
}
}catch (e36126){var ex__32747__auto__ = e36126;
var statearr_36127_36973 = state_36121;
(statearr_36127_36973[(2)] = ex__32747__auto__);


if(cljs.core.seq((state_36121[(4)]))){
var statearr_36128_36976 = state_36121;
(statearr_36128_36976[(1)] = cljs.core.first((state_36121[(4)])));

} else {
throw ex__32747__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32745__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36977 = state_36121;
state_36121 = G__36977;
continue;
} else {
return ret_value__32745__auto__;
}
break;
}
});
shadow$dom$state_machine__32744__auto__ = function(state_36121){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__32744__auto____0.call(this);
case 1:
return shadow$dom$state_machine__32744__auto____1.call(this,state_36121);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__32744__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__32744__auto____0;
shadow$dom$state_machine__32744__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__32744__auto____1;
return shadow$dom$state_machine__32744__auto__;
})()
})();
var state__32936__auto__ = (function (){var statearr_36130 = f__32935__auto__();
(statearr_36130[(6)] = c__32934__auto___36964);

return statearr_36130;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32936__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
