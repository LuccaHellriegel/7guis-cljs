goog.provide('devtools.format');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

var devtools$format$IDevtoolsFormat$_header$dyn_27928 = (function (value){
var x__4428__auto__ = (((value == null))?null:value);
var m__4429__auto__ = (devtools.format._header[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4429__auto__.call(null,value));
} else {
var m__4426__auto__ = (devtools.format._header["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4426__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-header",value);
}
}
});
devtools.format._header = (function devtools$format$_header(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_header$dyn_27928(value);
}
});

var devtools$format$IDevtoolsFormat$_has_body$dyn_27930 = (function (value){
var x__4428__auto__ = (((value == null))?null:value);
var m__4429__auto__ = (devtools.format._has_body[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4429__auto__.call(null,value));
} else {
var m__4426__auto__ = (devtools.format._has_body["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4426__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-has-body",value);
}
}
});
devtools.format._has_body = (function devtools$format$_has_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_has_body$dyn_27930(value);
}
});

var devtools$format$IDevtoolsFormat$_body$dyn_27932 = (function (value){
var x__4428__auto__ = (((value == null))?null:value);
var m__4429__auto__ = (devtools.format._body[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4429__auto__.call(null,value));
} else {
var m__4426__auto__ = (devtools.format._body["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4426__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-body",value);
}
}
});
devtools.format._body = (function devtools$format$_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_body$dyn_27932(value);
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
(devtools.format._STAR_setup_done_STAR_ = true);

devtools.format.make_template_fn = (function (){var temp__5733__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5733__auto__)){
var o27723 = temp__5733__auto__;
var temp__5733__auto____$1 = (o27723["formatters"]);
if(cljs.core.truth_(temp__5733__auto____$1)){
var o27724 = temp__5733__auto____$1;
var temp__5733__auto____$2 = (o27724["templating"]);
if(cljs.core.truth_(temp__5733__auto____$2)){
var o27725 = temp__5733__auto____$2;
return (o27725["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__5733__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5733__auto__)){
var o27731 = temp__5733__auto__;
var temp__5733__auto____$1 = (o27731["formatters"]);
if(cljs.core.truth_(temp__5733__auto____$1)){
var o27732 = temp__5733__auto____$1;
var temp__5733__auto____$2 = (o27732["templating"]);
if(cljs.core.truth_(temp__5733__auto____$2)){
var o27733 = temp__5733__auto____$2;
return (o27733["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__5733__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5733__auto__)){
var o27735 = temp__5733__auto__;
var temp__5733__auto____$1 = (o27735["formatters"]);
if(cljs.core.truth_(temp__5733__auto____$1)){
var o27736 = temp__5733__auto____$1;
var temp__5733__auto____$2 = (o27736["templating"]);
if(cljs.core.truth_(temp__5733__auto____$2)){
var o27737 = temp__5733__auto____$2;
return (o27737["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__5733__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5733__auto__)){
var o27758 = temp__5733__auto__;
var temp__5733__auto____$1 = (o27758["formatters"]);
if(cljs.core.truth_(temp__5733__auto____$1)){
var o27759 = temp__5733__auto____$1;
var temp__5733__auto____$2 = (o27759["templating"]);
if(cljs.core.truth_(temp__5733__auto____$2)){
var o27760 = temp__5733__auto____$2;
return (o27760["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__5733__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5733__auto__)){
var o27764 = temp__5733__auto__;
var temp__5733__auto____$1 = (o27764["formatters"]);
if(cljs.core.truth_(temp__5733__auto____$1)){
var o27765 = temp__5733__auto____$1;
var temp__5733__auto____$2 = (o27765["templating"]);
if(cljs.core.truth_(temp__5733__auto____$2)){
var o27766 = temp__5733__auto____$2;
return (o27766["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__5733__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5733__auto__)){
var o27768 = temp__5733__auto__;
var temp__5733__auto____$1 = (o27768["formatters"]);
if(cljs.core.truth_(temp__5733__auto____$1)){
var o27769 = temp__5733__auto____$1;
var temp__5733__auto____$2 = (o27769["markup"]);
if(cljs.core.truth_(temp__5733__auto____$2)){
var o27770 = temp__5733__auto____$2;
return (o27770["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__5733__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5733__auto__)){
var o27771 = temp__5733__auto__;
var temp__5733__auto____$1 = (o27771["formatters"]);
if(cljs.core.truth_(temp__5733__auto____$1)){
var o27772 = temp__5733__auto____$1;
var temp__5733__auto____$2 = (o27772["markup"]);
if(cljs.core.truth_(temp__5733__auto____$2)){
var o27773 = temp__5733__auto____$2;
return (o27773["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27955 = arguments.length;
var i__4737__auto___27956 = (0);
while(true){
if((i__4737__auto___27956 < len__4736__auto___27955)){
args__4742__auto__.push((arguments[i__4737__auto___27956]));

var G__27957 = (i__4737__auto___27956 + (1));
i__4737__auto___27956 = G__27957;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.render_markup_fn,args);
}));

(devtools.format.render_markup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.render_markup.cljs$lang$applyTo = (function (seq27791){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27791));
}));

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27959 = arguments.length;
var i__4737__auto___27960 = (0);
while(true){
if((i__4737__auto___27960 < len__4736__auto___27959)){
args__4742__auto__.push((arguments[i__4737__auto___27960]));

var G__27961 = (i__4737__auto___27960 + (1));
i__4737__auto___27960 = G__27961;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_template_fn,args);
}));

(devtools.format.make_template.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_template.cljs$lang$applyTo = (function (seq27792){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27792));
}));

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27966 = arguments.length;
var i__4737__auto___27967 = (0);
while(true){
if((i__4737__auto___27967 < len__4736__auto___27966)){
args__4742__auto__.push((arguments[i__4737__auto___27967]));

var G__27968 = (i__4737__auto___27967 + (1));
i__4737__auto___27967 = G__27968;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_group_fn,args);
}));

(devtools.format.make_group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_group.cljs$lang$applyTo = (function (seq27802){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27802));
}));

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27969 = arguments.length;
var i__4737__auto___27970 = (0);
while(true){
if((i__4737__auto___27970 < len__4736__auto___27969)){
args__4742__auto__.push((arguments[i__4737__auto___27970]));

var G__27971 = (i__4737__auto___27970 + (1));
i__4737__auto___27970 = G__27971;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_surrogate_fn,args);
}));

(devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq27804){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27804));
}));

devtools.format.template = (function devtools$format$template(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27973 = arguments.length;
var i__4737__auto___27974 = (0);
while(true){
if((i__4737__auto___27974 < len__4736__auto___27973)){
args__4742__auto__.push((arguments[i__4737__auto___27974]));

var G__27975 = (i__4737__auto___27974 + (1));
i__4737__auto___27974 = G__27975;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_template_fn,args);
}));

(devtools.format.template.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.template.cljs$lang$applyTo = (function (seq27854){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27854));
}));

devtools.format.group = (function devtools$format$group(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27977 = arguments.length;
var i__4737__auto___27978 = (0);
while(true){
if((i__4737__auto___27978 < len__4736__auto___27977)){
args__4742__auto__.push((arguments[i__4737__auto___27978]));

var G__27980 = (i__4737__auto___27978 + (1));
i__4737__auto___27978 = G__27980;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_group_fn,args);
}));

(devtools.format.group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.group.cljs$lang$applyTo = (function (seq27869){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27869));
}));

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27981 = arguments.length;
var i__4737__auto___27983 = (0);
while(true){
if((i__4737__auto___27983 < len__4736__auto___27981)){
args__4742__auto__.push((arguments[i__4737__auto___27983]));

var G__27984 = (i__4737__auto___27983 + (1));
i__4737__auto___27983 = G__27984;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_surrogate_fn,args);
}));

(devtools.format.surrogate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.surrogate.cljs$lang$applyTo = (function (seq27871){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27871));
}));

devtools.format.reference = (function devtools$format$reference(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27985 = arguments.length;
var i__4737__auto___27986 = (0);
while(true){
if((i__4737__auto___27986 < len__4736__auto___27985)){
args__4742__auto__.push((arguments[i__4737__auto___27986]));

var G__27987 = (i__4737__auto___27986 + (1));
i__4737__auto___27986 = G__27987;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__27903){
var vec__27904 = p__27903;
var state_override = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27904,(0),null);
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,(function (p1__27897_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__27897_SHARP_,state_override], 0));
})], null));
}));

(devtools.format.reference.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.format.reference.cljs$lang$applyTo = (function (seq27898){
var G__27899 = cljs.core.first(seq27898);
var seq27898__$1 = cljs.core.next(seq27898);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27899,seq27898__$1);
}));

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_();

var G__27912 = new cljs.core.Keyword(null,"ol","ol",932524051);
var G__27913 = new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615);
var G__27914 = (function (){var G__27915 = new cljs.core.Keyword(null,"li","li",723558921);
var G__27916 = new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955);
var G__27917 = (devtools.format.make_reference_fn.cljs$core$IFn$_invoke$arity$1 ? devtools.format.make_reference_fn.cljs$core$IFn$_invoke$arity$1(target) : devtools.format.make_reference_fn.call(null,target));
return (devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3 ? devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3(G__27915,G__27916,G__27917) : devtools.format.make_template_fn.call(null,G__27915,G__27916,G__27917));
})();
return (devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3 ? devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3(G__27912,G__27913,G__27914) : devtools.format.make_template_fn.call(null,G__27912,G__27913,G__27914));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27997 = arguments.length;
var i__4737__auto___27999 = (0);
while(true){
if((i__4737__auto___27999 < len__4736__auto___27997)){
args__4742__auto__.push((arguments[i__4737__auto___27999]));

var G__28000 = (i__4737__auto___27999 + (1));
i__4737__auto___27999 = G__28000;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format._LT_header_GT__fn,args)], 0));
}));

(devtools.format.build_header.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.build_header.cljs$lang$applyTo = (function (seq27918){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27918));
}));

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__4742__auto__ = [];
var len__4736__auto___28001 = arguments.length;
var i__4737__auto___28003 = (0);
while(true){
if((i__4737__auto___28003 < len__4736__auto___28001)){
args__4742__auto__.push((arguments[i__4737__auto___28003]));

var G__28004 = (i__4737__auto___28003 + (1));
i__4737__auto___28003 = G__28004;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_();

var args = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format._LT_standard_body_GT__fn,args)], 0));
}));

(devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq27925){
var G__27926 = cljs.core.first(seq27925);
var seq27925__$1 = cljs.core.next(seq27925);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27926,seq27925__$1);
}));


//# sourceMappingURL=devtools.format.js.map
