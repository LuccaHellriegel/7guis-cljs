goog.provide('devtools.formatters.templating');
devtools.formatters.templating.mark_as_group_BANG_ = (function devtools$formatters$templating$mark_as_group_BANG_(value){
var x29533_29679 = value;
(x29533_29679.devtools$protocols$IGroup$ = cljs.core.PROTOCOL_SENTINEL);


return value;
});
devtools.formatters.templating.group_QMARK_ = (function devtools$formatters$templating$group_QMARK_(value){
if((!((value == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$IGroup$)))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(devtools.protocols.IGroup,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(devtools.protocols.IGroup,value);
}
});
devtools.formatters.templating.mark_as_template_BANG_ = (function devtools$formatters$templating$mark_as_template_BANG_(value){
var x29540_29680 = value;
(x29540_29680.devtools$protocols$ITemplate$ = cljs.core.PROTOCOL_SENTINEL);


return value;
});
devtools.formatters.templating.template_QMARK_ = (function devtools$formatters$templating$template_QMARK_(value){
if((!((value == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ITemplate$)))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(devtools.protocols.ITemplate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(devtools.protocols.ITemplate,value);
}
});
devtools.formatters.templating.mark_as_surrogate_BANG_ = (function devtools$formatters$templating$mark_as_surrogate_BANG_(value){
var x29544_29682 = value;
(x29544_29682.devtools$protocols$ISurrogate$ = cljs.core.PROTOCOL_SENTINEL);


return value;
});
devtools.formatters.templating.surrogate_QMARK_ = (function devtools$formatters$templating$surrogate_QMARK_(value){
if((!((value == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ISurrogate$)))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(devtools.protocols.ISurrogate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(devtools.protocols.ISurrogate,value);
}
});
devtools.formatters.templating.reference_QMARK_ = (function devtools$formatters$templating$reference_QMARK_(value){
return ((devtools.formatters.templating.group_QMARK_(value)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((value[(0)]),"object")));
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29683 = arguments.length;
var i__4737__auto___29684 = (0);
while(true){
if((i__4737__auto___29684 < len__4736__auto___29683)){
args__4742__auto__.push((arguments[i__4737__auto___29684]));

var G__29686 = (i__4737__auto___29684 + (1));
i__4737__auto___29684 = G__29686;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_([]);
var seq__29560_29687 = cljs.core.seq(items);
var chunk__29561_29688 = null;
var count__29562_29689 = (0);
var i__29563_29690 = (0);
while(true){
if((i__29563_29690 < count__29562_29689)){
var item_29693 = chunk__29561_29688.cljs$core$IIndexed$_nth$arity$2(null,i__29563_29690);
if((!((item_29693 == null)))){
if(cljs.core.coll_QMARK_(item_29693)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_(cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(item_29693)));
} else {
group.push(devtools.formatters.helpers.pref(item_29693));
}
} else {
}


var G__29697 = seq__29560_29687;
var G__29698 = chunk__29561_29688;
var G__29699 = count__29562_29689;
var G__29700 = (i__29563_29690 + (1));
seq__29560_29687 = G__29697;
chunk__29561_29688 = G__29698;
count__29562_29689 = G__29699;
i__29563_29690 = G__29700;
continue;
} else {
var temp__5735__auto___29701 = cljs.core.seq(seq__29560_29687);
if(temp__5735__auto___29701){
var seq__29560_29702__$1 = temp__5735__auto___29701;
if(cljs.core.chunked_seq_QMARK_(seq__29560_29702__$1)){
var c__4556__auto___29705 = cljs.core.chunk_first(seq__29560_29702__$1);
var G__29706 = cljs.core.chunk_rest(seq__29560_29702__$1);
var G__29707 = c__4556__auto___29705;
var G__29708 = cljs.core.count(c__4556__auto___29705);
var G__29709 = (0);
seq__29560_29687 = G__29706;
chunk__29561_29688 = G__29707;
count__29562_29689 = G__29708;
i__29563_29690 = G__29709;
continue;
} else {
var item_29710 = cljs.core.first(seq__29560_29702__$1);
if((!((item_29710 == null)))){
if(cljs.core.coll_QMARK_(item_29710)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_(cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(item_29710)));
} else {
group.push(devtools.formatters.helpers.pref(item_29710));
}
} else {
}


var G__29713 = cljs.core.next(seq__29560_29702__$1);
var G__29714 = null;
var G__29715 = (0);
var G__29716 = (0);
seq__29560_29687 = G__29713;
chunk__29561_29688 = G__29714;
count__29562_29689 = G__29715;
i__29563_29690 = G__29716;
continue;
}
} else {
}
}
break;
}

return group;
}));

(devtools.formatters.templating.make_group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq29554){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29554));
}));

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29719 = arguments.length;
var i__4737__auto___29721 = (0);
while(true){
if((i__4737__auto___29721 < len__4736__auto___29719)){
args__4742__auto__.push((arguments[i__4737__auto___29721]));

var G__29722 = (i__4737__auto___29721 + (1));
i__4737__auto___29721 = G__29722;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref(tag);
var style__$1 = devtools.formatters.helpers.pref(style);
var template = devtools.formatters.templating.mark_as_template_BANG_([tag__$1,((cljs.core.empty_QMARK_(style__$1))?({}):({"style": style__$1}))]);
var seq__29585_29726 = cljs.core.seq(children);
var chunk__29586_29727 = null;
var count__29587_29728 = (0);
var i__29588_29729 = (0);
while(true){
if((i__29588_29729 < count__29587_29728)){
var child_29732 = chunk__29586_29727.cljs$core$IIndexed$_nth$arity$2(null,i__29588_29729);
if((!((child_29732 == null)))){
if(cljs.core.coll_QMARK_(child_29732)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_(cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(devtools.formatters.helpers.pref,child_29732))));
} else {
var temp__5733__auto___29736 = devtools.formatters.helpers.pref(child_29732);
if(cljs.core.truth_(temp__5733__auto___29736)){
var child_value_29737 = temp__5733__auto___29736;
template.push(child_value_29737);
} else {
}
}
} else {
}


var G__29738 = seq__29585_29726;
var G__29739 = chunk__29586_29727;
var G__29740 = count__29587_29728;
var G__29741 = (i__29588_29729 + (1));
seq__29585_29726 = G__29738;
chunk__29586_29727 = G__29739;
count__29587_29728 = G__29740;
i__29588_29729 = G__29741;
continue;
} else {
var temp__5735__auto___29742 = cljs.core.seq(seq__29585_29726);
if(temp__5735__auto___29742){
var seq__29585_29743__$1 = temp__5735__auto___29742;
if(cljs.core.chunked_seq_QMARK_(seq__29585_29743__$1)){
var c__4556__auto___29744 = cljs.core.chunk_first(seq__29585_29743__$1);
var G__29745 = cljs.core.chunk_rest(seq__29585_29743__$1);
var G__29746 = c__4556__auto___29744;
var G__29747 = cljs.core.count(c__4556__auto___29744);
var G__29748 = (0);
seq__29585_29726 = G__29745;
chunk__29586_29727 = G__29746;
count__29587_29728 = G__29747;
i__29588_29729 = G__29748;
continue;
} else {
var child_29749 = cljs.core.first(seq__29585_29743__$1);
if((!((child_29749 == null)))){
if(cljs.core.coll_QMARK_(child_29749)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_(cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(devtools.formatters.helpers.pref,child_29749))));
} else {
var temp__5733__auto___29751 = devtools.formatters.helpers.pref(child_29749);
if(cljs.core.truth_(temp__5733__auto___29751)){
var child_value_29752 = temp__5733__auto___29751;
template.push(child_value_29752);
} else {
}
}
} else {
}


var G__29753 = cljs.core.next(seq__29585_29743__$1);
var G__29754 = null;
var G__29755 = (0);
var G__29756 = (0);
seq__29585_29726 = G__29753;
chunk__29586_29727 = G__29754;
count__29587_29728 = G__29755;
i__29588_29729 = G__29756;
continue;
}
} else {
}
}
break;
}

return template;
}));

(devtools.formatters.templating.make_template.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq29581){
var G__29582 = cljs.core.first(seq29581);
var seq29581__$1 = cljs.core.next(seq29581);
var G__29583 = cljs.core.first(seq29581__$1);
var seq29581__$2 = cljs.core.next(seq29581__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29582,G__29583,seq29581__$2);
}));

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29761 = arguments.length;
var i__4737__auto___29762 = (0);
while(true){
if((i__4737__auto___29762 < len__4736__auto___29761)){
args__4742__auto__.push((arguments[i__4737__auto___29762]));

var G__29769 = (i__4737__auto___29762 + (1));
i__4737__auto___29762 = G__29769;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_((template["concat"]).apply(template,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.into_array,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(devtools.formatters.helpers.pref,templates)))));
}));

(devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq29597){
var G__29598 = cljs.core.first(seq29597);
var seq29597__$1 = cljs.core.next(seq29597);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29598,seq29597__$1);
}));

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29780 = arguments.length;
var i__4737__auto___29782 = (0);
while(true){
if((i__4737__auto___29782 < len__4736__auto___29780)){
args__4742__auto__.push((arguments[i__4737__auto___29782]));

var G__29783 = (i__4737__auto___29782 + (1));
i__4737__auto___29782 = G__29783;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(template,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0));
}));

(devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq29600){
var G__29601 = cljs.core.first(seq29600);
var seq29600__$1 = cljs.core.next(seq29600);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29601,seq29600__$1);
}));

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var G__29603 = arguments.length;
switch (G__29603) {
case 1:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1 = (function (object){
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2(object,null);
}));

(devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2 = (function (object,header){
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3(object,header,null);
}));

(devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3 = (function (object,header,body){
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4(object,header,body,(0));
}));

(devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4 = (function (object,header,body,start_index){
return devtools.formatters.templating.mark_as_surrogate_BANG_((function (){var obj29607 = ({"target":object,"header":header,"body":body,"startIndex":(function (){var or__4126__auto__ = start_index;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})()});
return obj29607;
})());
}));

(devtools.formatters.templating.make_surrogate.cljs$lang$maxFixedArity = 4);

devtools.formatters.templating.get_surrogate_target = (function devtools$formatters$templating$get_surrogate_target(surrogate){
if(devtools.formatters.templating.surrogate_QMARK_(surrogate)){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["target"]);
});
devtools.formatters.templating.get_surrogate_header = (function devtools$formatters$templating$get_surrogate_header(surrogate){
if(devtools.formatters.templating.surrogate_QMARK_(surrogate)){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["header"]);
});
devtools.formatters.templating.get_surrogate_body = (function devtools$formatters$templating$get_surrogate_body(surrogate){
if(devtools.formatters.templating.surrogate_QMARK_(surrogate)){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["body"]);
});
devtools.formatters.templating.get_surrogate_start_index = (function devtools$formatters$templating$get_surrogate_start_index(surrogate){
if(devtools.formatters.templating.surrogate_QMARK_(surrogate)){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["startIndex"]);
});
devtools.formatters.templating.make_reference = (function devtools$formatters$templating$make_reference(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29817 = arguments.length;
var i__4737__auto___29818 = (0);
while(true){
if((i__4737__auto___29818 < len__4736__auto___29817)){
args__4742__auto__.push((arguments[i__4737__auto___29818]));

var G__29819 = (i__4737__auto___29818 + (1));
i__4737__auto___29818 = G__29819;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__29618){
var vec__29620 = p__29618;
var state_override_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29620,(0),null);
if((((state_override_fn == null)) || (cljs.core.fn_QMARK_(state_override_fn)))){
} else {
throw (new Error("Assert failed: (or (nil? state-override-fn) (fn? state-override-fn))"));
}

if((object == null)){
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"nil-style","nil-style",-1505044832),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"nil-label","nil-label",-587789203)], 0));
} else {
var sub_state = (((!((state_override_fn == null))))?(function (){var G__29623 = devtools.formatters.state.get_current_state();
return (state_override_fn.cljs$core$IFn$_invoke$arity$1 ? state_override_fn.cljs$core$IFn$_invoke$arity$1(G__29623) : state_override_fn.call(null,G__29623));
})():devtools.formatters.state.get_current_state());
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["object",({"object": object, "config": sub_state})], 0));
}
}));

(devtools.formatters.templating.make_reference.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq29614){
var G__29615 = cljs.core.first(seq29614);
var seq29614__$1 = cljs.core.next(seq29614);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29615,seq29614__$1);
}));

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR__orig_val__29624 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_level_STAR__temp_val__29625 = (1);
(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__29625);

try{return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([markup], 0));
}finally {(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__29624);
}});
devtools.formatters.templating.add_stack_separators = (function devtools$formatters$templating$add_stack_separators(stack){
return cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("-------------",stack);
});
devtools.formatters.templating.replace_fns_with_markers = (function devtools$formatters$templating$replace_fns_with_markers(stack){
var f = (function (v){
if(cljs.core.fn_QMARK_(v)){
return "##fn##";
} else {
return v;
}
});
return clojure.walk.prewalk(f,stack);
});
devtools.formatters.templating.pprint_render_calls = (function devtools$formatters$templating$pprint_render_calls(stack){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(devtools.util.pprint_str,stack);
});
devtools.formatters.templating.pprint_render_stack = (function devtools$formatters$templating$pprint_render_stack(stack){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",devtools.formatters.templating.add_stack_separators(devtools.formatters.templating.pprint_render_calls(devtools.formatters.templating.replace_fns_with_markers(cljs.core.reverse(stack)))));
});
devtools.formatters.templating.pprint_render_path = (function devtools$formatters$templating$pprint_render_path(path){
return devtools.util.pprint_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0));
});
devtools.formatters.templating.assert_markup_error = (function devtools$formatters$templating$assert_markup_error(msg){
throw (new Error(["Assert failed: ",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),"\n","Render path: ",devtools.formatters.templating.pprint_render_path(devtools.formatters.templating._STAR_current_render_path_STAR_),"\n","Render stack:\n",devtools.formatters.templating.pprint_render_stack(devtools.formatters.templating._STAR_current_render_stack_STAR_)].join(''),"\n","false"].join('')));

});
devtools.formatters.templating.surrogate_markup_QMARK_ = (function devtools$formatters$templating$surrogate_markup_QMARK_(markup){
return ((cljs.core.sequential_QMARK_(markup)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(markup),"surrogate")));
});
devtools.formatters.templating.render_special = (function devtools$formatters$templating$render_special(name,args){
var G__29635 = name;
switch (G__29635) {
case "surrogate":
var obj = cljs.core.first(args);
var converted_args = cljs.core.map.cljs$core$IFn$_invoke$arity$2(devtools.formatters.templating.render_json_ml_STAR_,cljs.core.rest(args));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.formatters.templating.make_surrogate,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj], null),converted_args));

break;
case "reference":
var obj = cljs.core.first(args);
var converted_obj = ((devtools.formatters.templating.surrogate_markup_QMARK_(obj))?(devtools.formatters.templating.render_json_ml_STAR_.cljs$core$IFn$_invoke$arity$1 ? devtools.formatters.templating.render_json_ml_STAR_.cljs$core$IFn$_invoke$arity$1(obj) : devtools.formatters.templating.render_json_ml_STAR_.call(null,obj)):obj);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.formatters.templating.make_reference,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [converted_obj], null),cljs.core.rest(args)));

break;
default:
return devtools.formatters.templating.assert_markup_error(["no matching special tag name: '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"'"].join(''));

}
});
devtools.formatters.templating.emptyish_QMARK_ = (function devtools$formatters$templating$emptyish_QMARK_(v){
if(((cljs.core.seqable_QMARK_(v)) || (cljs.core.array_QMARK_(v)) || (typeof v === 'string'))){
return cljs.core.empty_QMARK_(v);
} else {
return false;
}
});
devtools.formatters.templating.render_subtree = (function devtools$formatters$templating$render_subtree(tag,children){
var vec__29638 = tag;
var html_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29638,(0),null);
var style = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29638,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.cljs$core$IFn$_invoke$arity$2(devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if((!(cljs.core.sequential_QMARK_(markup)))){
return markup;
} else {
var _STAR_current_render_path_STAR__orig_val__29644 = devtools.formatters.templating._STAR_current_render_path_STAR_;
var _STAR_current_render_path_STAR__temp_val__29645 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(devtools.formatters.templating._STAR_current_render_path_STAR_,cljs.core.first(markup));
(devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR__temp_val__29645);

try{var tag = devtools.formatters.helpers.pref(cljs.core.first(markup));
if(typeof tag === 'string'){
return devtools.formatters.templating.render_special(tag,cljs.core.rest(markup));
} else {
if(cljs.core.sequential_QMARK_(tag)){
return devtools.formatters.templating.render_subtree(tag,cljs.core.rest(markup));
} else {
return devtools.formatters.templating.assert_markup_error(["invalid json-ml markup at ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.print_preview(markup)),":"].join(''));

}
}
}finally {(devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR__orig_val__29644);
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR__orig_val__29657 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR__orig_val__29658 = devtools.formatters.templating._STAR_current_render_path_STAR_;
var _STAR_current_render_stack_STAR__temp_val__29659 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);
var _STAR_current_render_path_STAR__temp_val__29660 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");
(devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR__temp_val__29659);

(devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR__temp_val__29660);

try{return devtools.formatters.templating.render_json_ml_STAR_(markup);
}finally {(devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR__orig_val__29658);

(devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR__orig_val__29657);
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error(["Assert failed: ",["result of markup rendering must be a template,\n","resolved to ",devtools.util.pprint_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0)),"initial value: ",devtools.util.pprint_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([initial_value], 0))].join(''),"\n","false"].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_(value)){
var G__29849 = initial_value;
var G__29850 = (value.cljs$core$IFn$_invoke$arity$0 ? value.cljs$core$IFn$_invoke$arity$0() : value.call(null));
initial_value = G__29849;
value = G__29850;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__29851 = initial_value;
var G__29852 = devtools.formatters.helpers.pref(value);
initial_value = G__29851;
value = G__29852;
continue;
} else {
if(cljs.core.sequential_QMARK_(value)){
var G__29853 = initial_value;
var G__29854 = devtools.formatters.templating.render_json_ml(value);
initial_value = G__29853;
value = G__29854;
continue;
} else {
if(devtools.formatters.templating.template_QMARK_(value)){
return value;
} else {
if(devtools.formatters.templating.surrogate_QMARK_(value)){
return value;
} else {
if(devtools.formatters.templating.reference_QMARK_(value)){
return value;
} else {
return devtools.formatters.templating.assert_failed_markup_rendering.call(null,initial_value,value);

}
}
}
}
}
}
break;
}
});
devtools.formatters.templating.render_markup = (function devtools$formatters$templating$render_markup(value){
return devtools.formatters.templating.render_markup_STAR_(value,value);
});

//# sourceMappingURL=devtools.formatters.templating.js.map
