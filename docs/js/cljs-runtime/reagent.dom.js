goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__38738 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__38739 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__38739);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__38742 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__38743 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__38743);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__38742);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__38738);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__38752 = arguments.length;
switch (G__38752) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__38757 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38757,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38757,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__38772_38801 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__38773_38802 = null;
var count__38774_38803 = (0);
var i__38775_38804 = (0);
while(true){
if((i__38775_38804 < count__38774_38803)){
var vec__38784_38805 = chunk__38773_38802.cljs$core$IIndexed$_nth$arity$2(null,i__38775_38804);
var container_38806 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38784_38805,(0),null);
var comp_38807 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38784_38805,(1),null);
reagent.dom.re_render_component(comp_38807,container_38806);


var G__38808 = seq__38772_38801;
var G__38809 = chunk__38773_38802;
var G__38810 = count__38774_38803;
var G__38811 = (i__38775_38804 + (1));
seq__38772_38801 = G__38808;
chunk__38773_38802 = G__38809;
count__38774_38803 = G__38810;
i__38775_38804 = G__38811;
continue;
} else {
var temp__5735__auto___38812 = cljs.core.seq(seq__38772_38801);
if(temp__5735__auto___38812){
var seq__38772_38813__$1 = temp__5735__auto___38812;
if(cljs.core.chunked_seq_QMARK_(seq__38772_38813__$1)){
var c__4556__auto___38815 = cljs.core.chunk_first(seq__38772_38813__$1);
var G__38816 = cljs.core.chunk_rest(seq__38772_38813__$1);
var G__38817 = c__4556__auto___38815;
var G__38818 = cljs.core.count(c__4556__auto___38815);
var G__38819 = (0);
seq__38772_38801 = G__38816;
chunk__38773_38802 = G__38817;
count__38774_38803 = G__38818;
i__38775_38804 = G__38819;
continue;
} else {
var vec__38789_38821 = cljs.core.first(seq__38772_38813__$1);
var container_38822 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38789_38821,(0),null);
var comp_38823 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38789_38821,(1),null);
reagent.dom.re_render_component(comp_38823,container_38822);


var G__38824 = cljs.core.next(seq__38772_38813__$1);
var G__38825 = null;
var G__38826 = (0);
var G__38827 = (0);
seq__38772_38801 = G__38824;
chunk__38773_38802 = G__38825;
count__38774_38803 = G__38826;
i__38775_38804 = G__38827;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
