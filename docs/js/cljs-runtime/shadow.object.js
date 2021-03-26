goog.provide('shadow.object');
shadow.object.console_friendly = shadow.util.console_friendly;
shadow.object.log = shadow.util.log;
shadow.object.debug = shadow.util.log;
shadow.object.info = shadow.util.log;
shadow.object.warn = shadow.util.log;
shadow.object.error = shadow.util.log;
shadow.object.obj_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
shadow.object.next_id = (function shadow$object$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(shadow.object.obj_id,cljs.core.inc);
});
shadow.object.object_defs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.behavior_fns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.instances = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.instance_parent = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.instance_children = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.events = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.define_event = (function shadow$object$define_event(event_name,desc,args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.events,cljs.core.assoc,event_name,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),event_name,new cljs.core.Keyword(null,"description","description",-1428560544),desc,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
});
shadow.object.unmunge = (function shadow$object$unmunge(s){
return clojure.string.replace(clojure.string.replace(s,/_DOT_/,"."),/_/,"-");
});
shadow.object.define_event(new cljs.core.Keyword(null,"init","init",-1875481434),"object initialization",cljs.core.PersistentVector.EMPTY);
shadow.object.define_event(new cljs.core.Keyword(null,"destroy","destroy",-843660405),"object descruction",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cause","cause",231901252),"cause of destruction, :parent means the parent was destroyed, :direct is default"], null)], null));
shadow.object.define_event(new cljs.core.Keyword("dom","init","dom/init",-1875647652),"called after the dom was created but has not entered the document yet",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dom","dom",-1236537922),"the dom that was created"], null)], null));
shadow.object.define_event(new cljs.core.Keyword("dom","entered","dom/entered",506699596),"should be called whenever a dom node is added to the document, since that\n   is not in control of this library its up to you to call this\n   use (so/notify-tree! your-obj :dom/entered) to notify the node and every child you created",cljs.core.PersistentVector.EMPTY);
shadow.object.define_event(new cljs.core.Keyword(null,"bind-children-update","bind-children-update",-1610690160),"need to rethink this",cljs.core.PersistentVector.EMPTY);

/**
 * @interface
 */
shadow.object.IObject = function(){};

var shadow$object$IObject$_id$dyn_37399 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.object._id[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.object._id["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IObject.-id",this$);
}
}
});
shadow.object._id = (function shadow$object$_id(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_id$arity$1 == null)))))){
return this$.shadow$object$IObject$_id$arity$1(this$);
} else {
return shadow$object$IObject$_id$dyn_37399(this$);
}
});

var shadow$object$IObject$_type$dyn_37400 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.object._type[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.object._type["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IObject.-type",this$);
}
}
});
shadow.object._type = (function shadow$object$_type(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_type$arity$1 == null)))))){
return this$.shadow$object$IObject$_type$arity$1(this$);
} else {
return shadow$object$IObject$_type$dyn_37400(this$);
}
});

var shadow$object$IObject$_data$dyn_37401 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.object._data[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.object._data["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IObject.-data",this$);
}
}
});
shadow.object._data = (function shadow$object$_data(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_data$arity$1 == null)))))){
return this$.shadow$object$IObject$_data$arity$1(this$);
} else {
return shadow$object$IObject$_data$dyn_37401(this$);
}
});

var shadow$object$IObject$_update$dyn_37402 = (function (this$,update_fn){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.object._update[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,update_fn) : m__4429__auto__.call(null,this$,update_fn));
} else {
var m__4426__auto__ = (shadow.object._update["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(this$,update_fn) : m__4426__auto__.call(null,this$,update_fn));
} else {
throw cljs.core.missing_protocol("IObject.-update",this$);
}
}
});
/**
 * update and notify watches
 */
shadow.object._update = (function shadow$object$_update(this$,update_fn){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_update$arity$2 == null)))))){
return this$.shadow$object$IObject$_update$arity$2(this$,update_fn);
} else {
return shadow$object$IObject$_update$dyn_37402(this$,update_fn);
}
});

var shadow$object$IObject$_destroy_BANG_$dyn_37403 = (function (this$,cause){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.object._destroy_BANG_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,cause) : m__4429__auto__.call(null,this$,cause));
} else {
var m__4426__auto__ = (shadow.object._destroy_BANG_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(this$,cause) : m__4426__auto__.call(null,this$,cause));
} else {
throw cljs.core.missing_protocol("IObject.-destroy!",this$);
}
}
});
shadow.object._destroy_BANG_ = (function shadow$object$_destroy_BANG_(this$,cause){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_destroy_BANG_$arity$2 == null)))))){
return this$.shadow$object$IObject$_destroy_BANG_$arity$2(this$,cause);
} else {
return shadow$object$IObject$_destroy_BANG_$dyn_37403(this$,cause);
}
});

shadow.object.get_type = (function shadow$object$get_type(this$){
return shadow.object._type(this$);
});
shadow.object.get_type_attr = (function shadow$object$get_type_attr(var_args){
var G__36278 = arguments.length;
switch (G__36278) {
case 2:
return shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2 = (function (oref,key){
if((oref == null)){
return null;
} else {
var type_id = (((oref instanceof cljs.core.Keyword))?oref:shadow.object._type(oref));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.object_defs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type_id,key], null));
}
}));

(shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$3 = (function (oref,key,default$){
if((oref == null)){
return default$;
} else {
var type_id = (((oref instanceof cljs.core.Keyword))?oref:shadow.object._type(oref));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(shadow.object.object_defs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type_id,key], null),default$);
}
}));

(shadow.object.get_type_attr.cljs$lang$maxFixedArity = 3);

shadow.object.get_dom = (function shadow$object$get_dom(oref){
return new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(oref);
});
goog.exportSymbol('shadow.object.get_dom', shadow.object.get_dom);
shadow.object.get_by_id = (function shadow$object$get_by_id(id){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instances),id);
});
goog.exportSymbol('shadow.object.get_by_id', shadow.object.get_by_id);
shadow.object.get_from_dom = (function shadow$object$get_from_dom(dom){
var oid = shadow.dom.data(dom,new cljs.core.Keyword(null,"oid","oid",-768692334));
if(cljs.core.truth_(oid)){
return shadow.object.get_by_id(parseInt(oid,(10)));
} else {
return null;
}
});
goog.exportSymbol('shadow.object.get_from_dom', shadow.object.get_from_dom);
shadow.object.is_object_QMARK_ = (function shadow$object$is_object_QMARK_(obj_or_dom){
var or__4126__auto__ = (((!((obj_or_dom == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === obj_or_dom.shadow$object$IObject$))))?true:(((!obj_or_dom.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return shadow.object.get_from_dom(obj_or_dom);
}
});
shadow.object.equal_QMARK_ = (function shadow$object$equal_QMARK_(obj,obj_or_dom){
if((((!((obj == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === obj.shadow$object$IObject$))))?true:(((!obj.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj))){
} else {
throw (new Error(["Assert failed: ","can only test objects","\n","(satisfies? IObject obj)"].join('')));
}

if((((!((obj_or_dom == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === obj_or_dom.shadow$object$IObject$))))?true:(((!obj_or_dom.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom))){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.object._id(obj),shadow.object._id(obj_or_dom));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.object._id(obj),(function (){var temp__5735__auto__ = shadow.dom.data(obj_or_dom,new cljs.core.Keyword(null,"oid","oid",-768692334));
if(cljs.core.truth_(temp__5735__auto__)){
var oid = temp__5735__auto__;
return parseInt(oid,(10));
} else {
return null;
}
})());
}
});
shadow.object.get_parent = (function shadow$object$get_parent(oref){
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instance_parent),shadow.object._id(oref));
if(cljs.core.truth_(temp__5735__auto__)){
var parent_id = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instances),parent_id);
} else {
return null;
}
});
goog.exportSymbol('shadow.object.get_parent', shadow.object.get_parent);
shadow.object.get_parent_of_type = (function shadow$object$get_parent_of_type(oref,parent_type){
var parent = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(oref);
while(true){
if(cljs.core.truth_(parent)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.object._type(parent),parent_type)){
return parent;
} else {
var G__37417 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(parent);
parent = G__37417;
continue;
}
} else {
return null;
}
break;
}
});
goog.exportSymbol('shadow.object.get_parent_of_type', shadow.object.get_parent_of_type);
shadow.object.get_children = (function shadow$object$get_children(parent){
var parent_id = shadow.object._id(parent);
var child_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(shadow.object.instance_children),parent_id,cljs.core.PersistentVector.EMPTY);
var instances = cljs.core.deref(shadow.object.instances);
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36544_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(instances,p1__36544_SHARP_);
}),child_ids));
});
goog.exportSymbol('shadow.object.get_children', shadow.object.get_children);
shadow.object.tree_seq = (function shadow$object$tree_seq(var_args){
var G__36563 = arguments.length;
switch (G__36563) {
case 1:
return shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('shadow.object.tree_seq', shadow.object.tree_seq);

(shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$1 = (function (root){
return shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$2(root,(function (node){
return true;
}));
}));

(shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$2 = (function (root,branch_QMARK_){
return cljs.core.tree_seq(branch_QMARK_,shadow.object.get_children,root);
}));

(shadow.object.tree_seq.cljs$lang$maxFixedArity = 2);

shadow.object.get_children_of_type = (function shadow$object$get_children_of_type(oref,type){
var type_kw = (((type instanceof cljs.core.Keyword))?type:shadow.object._type(type));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__36569_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type_kw,shadow.object._type(p1__36569_SHARP_));
}),shadow.object.get_children(oref));
});
/**
 * basically (get-children (:parent this))
 */
shadow.object.get_siblings = (function shadow$object$get_siblings(p__36645){
var map__36648 = p__36645;
var map__36648__$1 = (((((!((map__36648 == null))))?(((((map__36648.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36648.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36648):map__36648);
var oref = map__36648__$1;
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36648__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
if(cljs.core.truth_(parent)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("object has no parent, thus has no siblings",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"oref","oref",-1547494840),oref], null));
}

return shadow.object.get_children(parent);
});
/**
 * returns set of all siblings of a common type
 */
shadow.object.get_siblings_of_type = (function shadow$object$get_siblings_of_type(var_args){
var G__36687 = arguments.length;
switch (G__36687) {
case 1:
return shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$1 = (function (oref){
return shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$2(oref,oref);
}));

(shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$2 = (function (oref,type){
var type_kw = (((type instanceof cljs.core.Keyword))?type:shadow.object._type(type));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__36667_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type_kw,shadow.object._type(p1__36667_SHARP_));
}),shadow.object.get_siblings(oref));
}));

(shadow.object.get_siblings_of_type.cljs$lang$maxFixedArity = 2);

shadow.object.get_collection_item = (function shadow$object$get_collection_item(oref){
var item_key = new cljs.core.Keyword("shadow.object","coll-item-key","shadow.object/coll-item-key",1888444366).cljs$core$IFn$_invoke$arity$1(oref);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(oref,item_key);
});
/**
 * find the object that contains this dom node
 */
shadow.object.find_containing_object = (function shadow$object$find_containing_object(dom){
while(true){
var temp__5733__auto__ = shadow.object.get_from_dom(dom);
if(cljs.core.truth_(temp__5733__auto__)){
var obj = temp__5733__auto__;
return obj;
} else {
var temp__5735__auto__ = dom.parentElement;
if(cljs.core.truth_(temp__5735__auto__)){
var parent = temp__5735__auto__;
var G__37420 = parent;
dom = G__37420;
continue;
} else {
return null;
}
}
break;
}
});
shadow.object.notify_BANG_ = (function shadow$object$notify_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___37421 = arguments.length;
var i__4737__auto___37422 = (0);
while(true){
if((i__4737__auto___37422 < len__4736__auto___37421)){
args__4742__auto__.push((arguments[i__4737__auto___37422]));

var G__37423 = (i__4737__auto___37422 + (1));
i__4737__auto___37422 = G__37423;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,ev,args){
var temp__5735__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),ev], null));
if(cljs.core.truth_(temp__5735__auto__)){
var reactions_to_trigger = temp__5735__auto__;
var seq__36719 = cljs.core.seq(reactions_to_trigger);
var chunk__36720 = null;
var count__36721 = (0);
var i__36722 = (0);
while(true){
if((i__36722 < count__36721)){
var rfn = chunk__36720.cljs$core$IIndexed$_nth$arity$2(null,i__36722);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(rfn,cljs.core.cons(oref,args));


var G__37424 = seq__36719;
var G__37425 = chunk__36720;
var G__37426 = count__36721;
var G__37427 = (i__36722 + (1));
seq__36719 = G__37424;
chunk__36720 = G__37425;
count__36721 = G__37426;
i__36722 = G__37427;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__36719);
if(temp__5735__auto____$1){
var seq__36719__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__36719__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__36719__$1);
var G__37428 = cljs.core.chunk_rest(seq__36719__$1);
var G__37429 = c__4556__auto__;
var G__37430 = cljs.core.count(c__4556__auto__);
var G__37431 = (0);
seq__36719 = G__37428;
chunk__36720 = G__37429;
count__36721 = G__37430;
i__36722 = G__37431;
continue;
} else {
var rfn = cljs.core.first(seq__36719__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(rfn,cljs.core.cons(oref,args));


var G__37432 = cljs.core.next(seq__36719__$1);
var G__37433 = null;
var G__37434 = (0);
var G__37435 = (0);
seq__36719 = G__37432;
chunk__36720 = G__37433;
count__36721 = G__37434;
i__36722 = G__37435;
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

(shadow.object.notify_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.object.notify_BANG_.cljs$lang$applyTo = (function (seq36690){
var G__36691 = cljs.core.first(seq36690);
var seq36690__$1 = cljs.core.next(seq36690);
var G__36692 = cljs.core.first(seq36690__$1);
var seq36690__$2 = cljs.core.next(seq36690__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36691,G__36692,seq36690__$2);
}));

shadow.object.do_notify_tree = (function shadow$object$do_notify_tree(current_obj,ev,notify_fn){
var seq__36735_37438 = cljs.core.seq(shadow.object.get_children(current_obj));
var chunk__36736_37439 = null;
var count__36737_37440 = (0);
var i__36738_37441 = (0);
while(true){
if((i__36738_37441 < count__36737_37440)){
var child_37442 = chunk__36736_37439.cljs$core$IIndexed$_nth$arity$2(null,i__36738_37441);
(shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3 ? shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3(child_37442,ev,notify_fn) : shadow.object.do_notify_tree.call(null,child_37442,ev,notify_fn));


var G__37443 = seq__36735_37438;
var G__37444 = chunk__36736_37439;
var G__37445 = count__36737_37440;
var G__37446 = (i__36738_37441 + (1));
seq__36735_37438 = G__37443;
chunk__36736_37439 = G__37444;
count__36737_37440 = G__37445;
i__36738_37441 = G__37446;
continue;
} else {
var temp__5735__auto___37447 = cljs.core.seq(seq__36735_37438);
if(temp__5735__auto___37447){
var seq__36735_37448__$1 = temp__5735__auto___37447;
if(cljs.core.chunked_seq_QMARK_(seq__36735_37448__$1)){
var c__4556__auto___37449 = cljs.core.chunk_first(seq__36735_37448__$1);
var G__37450 = cljs.core.chunk_rest(seq__36735_37448__$1);
var G__37451 = c__4556__auto___37449;
var G__37452 = cljs.core.count(c__4556__auto___37449);
var G__37453 = (0);
seq__36735_37438 = G__37450;
chunk__36736_37439 = G__37451;
count__36737_37440 = G__37452;
i__36738_37441 = G__37453;
continue;
} else {
var child_37454 = cljs.core.first(seq__36735_37448__$1);
(shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3 ? shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3(child_37454,ev,notify_fn) : shadow.object.do_notify_tree.call(null,child_37454,ev,notify_fn));


var G__37455 = cljs.core.next(seq__36735_37448__$1);
var G__37456 = null;
var G__37457 = (0);
var G__37458 = (0);
seq__36735_37438 = G__37455;
chunk__36736_37439 = G__37456;
count__36737_37440 = G__37457;
i__36738_37441 = G__37458;
continue;
}
} else {
}
}
break;
}

return (notify_fn.cljs$core$IFn$_invoke$arity$1 ? notify_fn.cljs$core$IFn$_invoke$arity$1(current_obj) : notify_fn.call(null,current_obj));
});
shadow.object.notify_tree_BANG_ = (function shadow$object$notify_tree_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___37459 = arguments.length;
var i__4737__auto___37460 = (0);
while(true){
if((i__4737__auto___37460 < len__4736__auto___37459)){
args__4742__auto__.push((arguments[i__4737__auto___37460]));

var G__37461 = (i__4737__auto___37460 + (1));
i__4737__auto___37460 = G__37461;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return shadow.object.notify_tree_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(shadow.object.notify_tree_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,ev,args){
var notify_fn = (function (obj){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(shadow.object.notify_BANG_,obj,ev,args);
});
return shadow.object.do_notify_tree(oref,ev,notify_fn);
}));

(shadow.object.notify_tree_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.object.notify_tree_BANG_.cljs$lang$applyTo = (function (seq36773){
var G__36774 = cljs.core.first(seq36773);
var seq36773__$1 = cljs.core.next(seq36773);
var G__36775 = cljs.core.first(seq36773__$1);
var seq36773__$2 = cljs.core.next(seq36773__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36774,G__36775,seq36773__$2);
}));

shadow.object.notify_down_BANG_ = shadow.object.notify_tree_BANG_;
shadow.object.notify_up_BANG_ = (function shadow$object$notify_up_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___37462 = arguments.length;
var i__4737__auto___37463 = (0);
while(true){
if((i__4737__auto___37463 < len__4736__auto___37462)){
args__4742__auto__.push((arguments[i__4737__auto___37463]));

var G__37465 = (i__4737__auto___37463 + (1));
i__4737__auto___37463 = G__37465;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return shadow.object.notify_up_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(shadow.object.notify_up_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,ev,args){
var current = shadow.object.get_parent(oref);
while(true){
if(cljs.core.truth_(current)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(shadow.object.notify_BANG_,current,ev,args);

var G__37467 = shadow.object.get_parent(current);
current = G__37467;
continue;
} else {
return null;
}
break;
}
}));

(shadow.object.notify_up_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.object.notify_up_BANG_.cljs$lang$applyTo = (function (seq36884){
var G__36885 = cljs.core.first(seq36884);
var seq36884__$1 = cljs.core.next(seq36884);
var G__36886 = cljs.core.first(seq36884__$1);
var seq36884__$2 = cljs.core.next(seq36884__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36885,G__36886,seq36884__$2);
}));

shadow.object.update_BANG_ = (function shadow$object$update_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___37468 = arguments.length;
var i__4737__auto___37469 = (0);
while(true){
if((i__4737__auto___37469 < len__4736__auto___37468)){
args__4742__auto__.push((arguments[i__4737__auto___37469]));

var G__37470 = (i__4737__auto___37469 + (1));
i__4737__auto___37469 = G__37470;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,update_fn,args){
if(cljs.core.fn_QMARK_(update_fn)){
} else {
throw ["update! expects a fn as second arg, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([update_fn], 0))].join('');
}

var id = shadow.object._id(oref);
var data = shadow.object._data(oref);
var work_fn = (function (data__$1){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(update_fn,data__$1,args);
});
return shadow.object._update(oref,work_fn);
}));

(shadow.object.update_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.object.update_BANG_.cljs$lang$applyTo = (function (seq36938){
var G__36939 = cljs.core.first(seq36938);
var seq36938__$1 = cljs.core.next(seq36938);
var G__36940 = cljs.core.first(seq36938__$1);
var seq36938__$2 = cljs.core.next(seq36938__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36939,G__36940,seq36938__$2);
}));

shadow.object.return_value = (function shadow$object$return_value(oref,return_value){
return shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","return-value","shadow.object/return-value",1397593360),return_value], 0));
});
shadow.object.set_parent_BANG_ = (function shadow$object$set_parent_BANG_(child,parent){
var child_id = shadow.object._id(child);
var parent_id = shadow.object._id(parent);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.instance_parent,cljs.core.assoc,child_id,parent_id);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(shadow.object.instance_children,(function (x){
var current = cljs.core.get.cljs$core$IFn$_invoke$arity$3(x,parent_id,cljs.core.PersistentHashSet.EMPTY);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(x,parent_id,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current,child_id));
}));

return true;
});
shadow.object.dom_destroy = (function shadow$object$dom_destroy(this$,cause){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cause,new cljs.core.Keyword(null,"parent","parent",-878878779))){
return shadow.dom.remove(new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(this$));
} else {
var temp__5733__auto__ = shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword("dom","remove","dom/remove",-131527420));
if(cljs.core.truth_(temp__5733__auto__)){
var custom_remove = temp__5733__auto__;
var G__36965 = this$;
var G__36966 = new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(this$);
return (custom_remove.cljs$core$IFn$_invoke$arity$2 ? custom_remove.cljs$core$IFn$_invoke$arity$2(G__36965,G__36966) : custom_remove.call(null,G__36965,G__36966));
} else {
return shadow.dom.remove(new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(this$));
}
}
});
shadow.object.destroy_BANG_ = (function shadow$object$destroy_BANG_(var_args){
var G__36975 = arguments.length;
switch (G__36975) {
case 1:
return shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (oref){
return shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.Keyword(null,"direct","direct",-1775717856));
}));

(shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (oref,cause){
return shadow.object._destroy_BANG_(oref,cause);
}));

(shadow.object.destroy_BANG_.cljs$lang$maxFixedArity = 2);

shadow.object.bind_dom_events = (function shadow$object$bind_dom_events(oref,dom,dom_events){
if((cljs.core.rem(cljs.core.count(dom_events),(2)) === (0))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("object defined invalid event",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"object-type","object-type",-1889869015),shadow.object._type(oref),new cljs.core.Keyword("dom","events","dom/events",1793437527),dom_events], null));
}

var seq__36981 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),dom_events));
var chunk__36982 = null;
var count__36983 = (0);
var i__36984 = (0);
while(true){
if((i__36984 < count__36983)){
var vec__37008 = chunk__36982.cljs$core$IIndexed$_nth$arity$2(null,i__36984);
var ev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37008,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37008,(1),null);
var ev_def = vec__37008;
if((handler == null)){
throw ["ev with nil handler ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev], 0))].join('');
} else {
}

var handler_37477__$1 = (((handler instanceof cljs.core.Keyword))?((function (seq__36981,chunk__36982,count__36983,i__36984,vec__37008,ev,handler,ev_def){
return (function (this$,e,el){
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,handler,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,el], 0));
});})(seq__36981,chunk__36982,count__36983,i__36984,vec__37008,ev,handler,ev_def))
:handler);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(dom,ev,((function (seq__36981,chunk__36982,count__36983,i__36984,handler_37477__$1,vec__37008,ev,handler,ev_def){
return (function shadow$object$bind_dom_events_$_dom_event_handler(e,el){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("A",el.tagName)){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);
} else {
}

return (handler_37477__$1.cljs$core$IFn$_invoke$arity$3 ? handler_37477__$1.cljs$core$IFn$_invoke$arity$3(oref,e,el) : handler_37477__$1.call(null,oref,e,el));
});})(seq__36981,chunk__36982,count__36983,i__36984,handler_37477__$1,vec__37008,ev,handler,ev_def))
);


var G__37481 = seq__36981;
var G__37482 = chunk__36982;
var G__37483 = count__36983;
var G__37484 = (i__36984 + (1));
seq__36981 = G__37481;
chunk__36982 = G__37482;
count__36983 = G__37483;
i__36984 = G__37484;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36981);
if(temp__5735__auto__){
var seq__36981__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36981__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__36981__$1);
var G__37487 = cljs.core.chunk_rest(seq__36981__$1);
var G__37488 = c__4556__auto__;
var G__37489 = cljs.core.count(c__4556__auto__);
var G__37490 = (0);
seq__36981 = G__37487;
chunk__36982 = G__37488;
count__36983 = G__37489;
i__36984 = G__37490;
continue;
} else {
var vec__37024 = cljs.core.first(seq__36981__$1);
var ev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37024,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37024,(1),null);
var ev_def = vec__37024;
if((handler == null)){
throw ["ev with nil handler ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev], 0))].join('');
} else {
}

var handler_37494__$1 = (((handler instanceof cljs.core.Keyword))?((function (seq__36981,chunk__36982,count__36983,i__36984,vec__37024,ev,handler,ev_def,seq__36981__$1,temp__5735__auto__){
return (function (this$,e,el){
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,handler,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,el], 0));
});})(seq__36981,chunk__36982,count__36983,i__36984,vec__37024,ev,handler,ev_def,seq__36981__$1,temp__5735__auto__))
:handler);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(dom,ev,((function (seq__36981,chunk__36982,count__36983,i__36984,handler_37494__$1,vec__37024,ev,handler,ev_def,seq__36981__$1,temp__5735__auto__){
return (function shadow$object$bind_dom_events_$_dom_event_handler(e,el){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("A",el.tagName)){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);
} else {
}

return (handler_37494__$1.cljs$core$IFn$_invoke$arity$3 ? handler_37494__$1.cljs$core$IFn$_invoke$arity$3(oref,e,el) : handler_37494__$1.call(null,oref,e,el));
});})(seq__36981,chunk__36982,count__36983,i__36984,handler_37494__$1,vec__37024,ev,handler,ev_def,seq__36981__$1,temp__5735__auto__))
);


var G__37497 = cljs.core.next(seq__36981__$1);
var G__37498 = null;
var G__37499 = (0);
var G__37500 = (0);
seq__36981 = G__37497;
chunk__36982 = G__37498;
count__36983 = G__37499;
i__36984 = G__37500;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.object.reaction_merge = (function shadow$object$reaction_merge(result,p__37036){
var vec__37038 = p__37036;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37038,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37038,(1),null);
if(cljs.core.truth_((function (){var and__4115__auto__ = event;
if(cljs.core.truth_(and__4115__auto__)){
return handler;
} else {
return and__4115__auto__;
}
})())){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid reaction",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null));
}

var current = cljs.core.get.cljs$core$IFn$_invoke$arity$3(result,event,cljs.core.List.EMPTY);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,event,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current,handler));
});
shadow.object.merge_reactions = (function shadow$object$merge_reactions(result,behavior){
if(cljs.core.sequential_QMARK_(behavior)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("behaviors must be vectors",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"behavior","behavior",1202392908),behavior], null));
}

if(cljs.core.even_QMARK_(cljs.core.count(behavior))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid behavior",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"behavior","behavior",1202392908),behavior], null));
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(shadow.object.reaction_merge,result,cljs.core.reverse(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),behavior)));
});
shadow.object.merge_behaviors = (function shadow$object$merge_behaviors(result,behavior){
if(cljs.core.sequential_QMARK_(behavior)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633)], null),shadow.object.merge_reactions,behavior);
} else {
if(cljs.core.map_QMARK_(behavior)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633)], null),shadow.object.merge_reactions,new cljs.core.Keyword(null,"on","on",173873944).cljs$core$IFn$_invoke$arity$2(behavior,cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"watch","watch",380988277)], null),(function (watches){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(watches,new cljs.core.Keyword(null,"watch","watch",380988277).cljs$core$IFn$_invoke$arity$2(behavior,cljs.core.PersistentVector.EMPTY));
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","events","dom/events",1793437527)], null),(function (default$){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(default$,new cljs.core.Keyword("dom","events","dom/events",1793437527).cljs$core$IFn$_invoke$arity$2(behavior,cljs.core.PersistentVector.EMPTY)));
}));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("behavior not understood",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"behavior","behavior",1202392908),behavior], null));

}
}
});
shadow.object.define = (function shadow$object$define(var_args){
var args__4742__auto__ = [];
var len__4736__auto___37511 = arguments.length;
var i__4737__auto___37512 = (0);
while(true){
if((i__4737__auto___37512 < len__4736__auto___37511)){
args__4742__auto__.push((arguments[i__4737__auto___37512]));

var G__37513 = (i__4737__auto___37512 + (1));
i__4737__auto___37512 = G__37513;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.object.define.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.object.define.cljs$core$IFn$_invoke$arity$variadic = (function (id,args){
if((id instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("object id needs to be a keyword",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
}

if(cljs.core.even_QMARK_(cljs.core.count(args))){
} else {
throw ["invalid object definition ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)," args: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0))].join('');
}

if(cljs.core.contains_QMARK_(cljs.core.deref(shadow.object.object_defs),id)){
console.warn(["object already defined ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''));
} else {
}

try{var odef = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,args);
var reactions = shadow.object.merge_reactions(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"on","on",173873944).cljs$core$IFn$_invoke$arity$2(odef,cljs.core.PersistentVector.EMPTY));
var odef__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(odef,new cljs.core.Keyword("shadow.object","id","shadow.object/id",-647954841),id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),reactions], 0));
var odef__$2 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(shadow.object.merge_behaviors,odef__$1,cljs.core.reverse(new cljs.core.Keyword(null,"behaviors","behaviors",120724909).cljs$core$IFn$_invoke$arity$2(odef__$1,cljs.core.PersistentVector.EMPTY)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.object_defs,cljs.core.assoc,id,odef__$2);

return odef__$2;
}catch (e37081){if((e37081 instanceof Object)){
var e = e37081;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("failed to define object",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
} else {
throw e37081;

}
}}));

(shadow.object.define.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.object.define.cljs$lang$applyTo = (function (seq37070){
var G__37072 = cljs.core.first(seq37070);
var seq37070__$1 = cljs.core.next(seq37070);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37072,seq37070__$1);
}));

shadow.object.merge_defaults = (function shadow$object$merge_defaults(data,type){
var defaults = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.object_defs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,new cljs.core.Keyword(null,"defaults","defaults",976027214)], null));
if((defaults == null)){
return data;
} else {
if(cljs.core.map_QMARK_(defaults)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([defaults,data], 0));
} else {
if(cljs.core.fn_QMARK_(defaults)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(defaults.cljs$core$IFn$_invoke$arity$0 ? defaults.cljs$core$IFn$_invoke$arity$0() : defaults.call(null)),data], 0));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid object defaults",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"defaults","defaults",976027214),defaults,new cljs.core.Keyword(null,"type","type",1174270348),type], null));

}
}
}
});
shadow.object.make_dom = (function shadow$object$make_dom(var_args){
var G__37091 = arguments.length;
switch (G__37091) {
case 3:
return shadow.object.make_dom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.object.make_dom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.make_dom.cljs$core$IFn$_invoke$arity$3 = (function (oref,dom_key,events_key){
return shadow.object.make_dom.cljs$core$IFn$_invoke$arity$4(oref,dom_key,events_key,null);
}));

(shadow.object.make_dom.cljs$core$IFn$_invoke$arity$4 = (function (oref,dom_key,events_key,value){
var dom_fn = (((dom_key instanceof cljs.core.Keyword))?shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2(oref,dom_key):dom_key);
var events = (((events_key instanceof cljs.core.Keyword))?shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$3(oref,events_key,cljs.core.PersistentVector.EMPTY):events_key);
var dom = (function (){var G__37094 = (dom_fn.cljs$core$IFn$_invoke$arity$2 ? dom_fn.cljs$core$IFn$_invoke$arity$2(oref,value) : dom_fn.call(null,oref,value));
return (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(G__37094) : shadow.dom.build.call(null,G__37094));
})();
shadow.object.bind_dom_events(oref,dom,events);

return dom;
}));

(shadow.object.make_dom.cljs$lang$maxFixedArity = 4);

shadow.object.alive_QMARK_ = (function shadow$object$alive_QMARK_(obj){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.object.instances),shadow.object._id(obj));
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
shadow.object.Watch = (function (key,handler,__meta,__extmap,__hash){
this.key = key;
this.handler = handler;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.object.Watch.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.object.Watch.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k37096,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__37100 = k37096;
var G__37100__$1 = (((G__37100 instanceof cljs.core.Keyword))?G__37100.fqn:null);
switch (G__37100__$1) {
case "key":
return self__.key;

break;
case "handler":
return self__.handler;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k37096,else__4383__auto__);

}
}));

(shadow.object.Watch.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__37106){
var vec__37108 = p__37106;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37108,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37108,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.object.Watch.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.object.Watch{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"key","key",-1516042587),self__.key],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"handler","handler",-195596612),self__.handler],null))], null),self__.__extmap));
}));

(shadow.object.Watch.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37095){
var self__ = this;
var G__37095__$1 = this;
return (new cljs.core.RecordIter((0),G__37095__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"handler","handler",-195596612)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.object.Watch.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.object.Watch.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.object.Watch(self__.key,self__.handler,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.object.Watch.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.object.Watch.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-17677043 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.object.Watch.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this37097,other37098){
var self__ = this;
var this37097__$1 = this;
return (((!((other37098 == null)))) && ((this37097__$1.constructor === other37098.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37097__$1.key,other37098.key)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37097__$1.handler,other37098.handler)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37097__$1.__extmap,other37098.__extmap)));
}));

(shadow.object.Watch.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),null,new cljs.core.Keyword(null,"handler","handler",-195596612),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.object.Watch(self__.key,self__.handler,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.object.Watch.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__37095){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__37116 = cljs.core.keyword_identical_QMARK_;
var expr__37117 = k__4388__auto__;
if(cljs.core.truth_((pred__37116.cljs$core$IFn$_invoke$arity$2 ? pred__37116.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"key","key",-1516042587),expr__37117) : pred__37116.call(null,new cljs.core.Keyword(null,"key","key",-1516042587),expr__37117)))){
return (new shadow.object.Watch(G__37095,self__.handler,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__37116.cljs$core$IFn$_invoke$arity$2 ? pred__37116.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"handler","handler",-195596612),expr__37117) : pred__37116.call(null,new cljs.core.Keyword(null,"handler","handler",-195596612),expr__37117)))){
return (new shadow.object.Watch(self__.key,G__37095,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.object.Watch(self__.key,self__.handler,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__37095),null));
}
}
}));

(shadow.object.Watch.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"key","key",-1516042587),self__.key,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"handler","handler",-195596612),self__.handler,null))], null),self__.__extmap));
}));

(shadow.object.Watch.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__37095){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.object.Watch(self__.key,self__.handler,G__37095,self__.__extmap,self__.__hash));
}));

(shadow.object.Watch.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.object.Watch.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"handler","handler",1444934915,null)], null);
}));

(shadow.object.Watch.cljs$lang$type = true);

(shadow.object.Watch.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.object/Watch",null,(1),null));
}));

(shadow.object.Watch.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.object/Watch");
}));

/**
 * Positional factory function for shadow.object/Watch.
 */
shadow.object.__GT_Watch = (function shadow$object$__GT_Watch(key,handler){
return (new shadow.object.Watch(key,handler,null,null,null));
});

/**
 * Factory function for shadow.object/Watch, taking a map of keywords to field values.
 */
shadow.object.map__GT_Watch = (function shadow$object$map__GT_Watch(G__37099){
var extmap__4419__auto__ = (function (){var G__37123 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__37099,new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"handler","handler",-195596612)], 0));
if(cljs.core.record_QMARK_(G__37099)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__37123);
} else {
return G__37123;
}
})();
return (new shadow.object.Watch(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(G__37099),new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(G__37099),null,cljs.core.not_empty(extmap__4419__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IEquiv}
 * @implements {shadow.object.IObject}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {shadow.dom.SVGElement}
 * @implements {cljs.core.ILookup}
*/
shadow.object.ObjectRef = (function (id,type,data,watches,result_chan){
this.id = id;
this.type = type;
this.data = data;
this.watches = watches;
this.result_chan = result_chan;
this.cljs$lang$protocol_mask$partition0$ = 2149613824;
this.cljs$lang$protocol_mask$partition1$ = 2;
});
(shadow.object.ObjectRef.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.object.ObjectRef.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (this$,handler){
var self__ = this;
var this$__$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.result_chan,handler);
}));

(shadow.object.ObjectRef.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0));
}));

(shadow.object.ObjectRef.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parent","parent",-878878779),k)){
return shadow.object.get_parent(this$__$1);
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.data,k);
}
}));

(shadow.object.ObjectRef.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,d){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parent","parent",-878878779),k)){
return shadow.object.get_parent(this$__$1);
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.data,k,d);
}
}));

(shadow.object.ObjectRef.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core._write(writer,["#<ObjectRef {:id ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.id),", :type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.type),"}>"].join(''));
}));

(shadow.object.ObjectRef.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.object.ObjectRef.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(self__.data);
}));

(shadow.object.ObjectRef.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return (((other instanceof shadow.object.ObjectRef)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.shadow$object$IObject$_id$arity$1(null),other.shadow$object$IObject$_id$arity$1(null))));
}));

(shadow.object.ObjectRef.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.object.ObjectRef.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(self__.data);
}));

(shadow.object.ObjectRef.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
throw (new Error("who be calling?"));
}));

(shadow.object.ObjectRef.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return (self__.watches = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.watches,(new shadow.object.Watch(key,f,null,null,null))));
}));

(shadow.object.ObjectRef.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return (self__.watches = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__37124_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(p1__37124_SHARP_));
}),self__.watches));
}));

(shadow.object.ObjectRef.prototype.shadow$object$IObject$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.object.ObjectRef.prototype.shadow$object$IObject$_id$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.id;
}));

(shadow.object.ObjectRef.prototype.shadow$object$IObject$_type$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.type;
}));

(shadow.object.ObjectRef.prototype.shadow$object$IObject$_data$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.data;
}));

(shadow.object.ObjectRef.prototype.shadow$object$IObject$_update$arity$2 = (function (this$,update_fn){
var self__ = this;
var this$__$1 = this;
var old = self__.data;
var new$ = (update_fn.cljs$core$IFn$_invoke$arity$1 ? update_fn.cljs$core$IFn$_invoke$arity$1(self__.data) : update_fn.call(null,self__.data));
(self__.data = new$);

var seq__37134 = cljs.core.seq(self__.watches);
var chunk__37135 = null;
var count__37136 = (0);
var i__37137 = (0);
while(true){
if((i__37137 < count__37136)){
var map__37142 = chunk__37135.cljs$core$IIndexed$_nth$arity$2(null,i__37137);
var map__37142__$1 = (((((!((map__37142 == null))))?(((((map__37142.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37142.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37142):map__37142);
var watch = map__37142__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37142__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37142__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
if(shadow.object.alive_QMARK_(this$__$1)){
(handler.cljs$core$IFn$_invoke$arity$4 ? handler.cljs$core$IFn$_invoke$arity$4(key,this$__$1,old,new$) : handler.call(null,key,this$__$1,old,new$));
} else {
}


var G__37570 = seq__37134;
var G__37571 = chunk__37135;
var G__37572 = count__37136;
var G__37573 = (i__37137 + (1));
seq__37134 = G__37570;
chunk__37135 = G__37571;
count__37136 = G__37572;
i__37137 = G__37573;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37134);
if(temp__5735__auto__){
var seq__37134__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37134__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37134__$1);
var G__37576 = cljs.core.chunk_rest(seq__37134__$1);
var G__37577 = c__4556__auto__;
var G__37578 = cljs.core.count(c__4556__auto__);
var G__37579 = (0);
seq__37134 = G__37576;
chunk__37135 = G__37577;
count__37136 = G__37578;
i__37137 = G__37579;
continue;
} else {
var map__37147 = cljs.core.first(seq__37134__$1);
var map__37147__$1 = (((((!((map__37147 == null))))?(((((map__37147.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37147.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37147):map__37147);
var watch = map__37147__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37147__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37147__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
if(shadow.object.alive_QMARK_(this$__$1)){
(handler.cljs$core$IFn$_invoke$arity$4 ? handler.cljs$core$IFn$_invoke$arity$4(key,this$__$1,old,new$) : handler.call(null,key,this$__$1,old,new$));
} else {
}


var G__37585 = cljs.core.next(seq__37134__$1);
var G__37586 = null;
var G__37587 = (0);
var G__37588 = (0);
seq__37134 = G__37585;
chunk__37135 = G__37586;
count__37136 = G__37587;
i__37137 = G__37588;
continue;
}
} else {
return null;
}
}
break;
}
}));

(shadow.object.ObjectRef.prototype.shadow$object$IObject$_destroy_BANG_$arity$2 = (function (this$,cause){
var self__ = this;
var this$__$1 = this;
var parent_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instance_parent),self__.id);
var seq__37152_37589 = cljs.core.seq(shadow.object.get_children(this$__$1));
var chunk__37153_37590 = null;
var count__37154_37591 = (0);
var i__37155_37592 = (0);
while(true){
if((i__37155_37592 < count__37154_37591)){
var child_37593 = chunk__37153_37590.cljs$core$IIndexed$_nth$arity$2(null,i__37155_37592);
shadow.object._destroy_BANG_(child_37593,new cljs.core.Keyword(null,"parent","parent",-878878779));


var G__37594 = seq__37152_37589;
var G__37595 = chunk__37153_37590;
var G__37596 = count__37154_37591;
var G__37597 = (i__37155_37592 + (1));
seq__37152_37589 = G__37594;
chunk__37153_37590 = G__37595;
count__37154_37591 = G__37596;
i__37155_37592 = G__37597;
continue;
} else {
var temp__5735__auto___37598 = cljs.core.seq(seq__37152_37589);
if(temp__5735__auto___37598){
var seq__37152_37599__$1 = temp__5735__auto___37598;
if(cljs.core.chunked_seq_QMARK_(seq__37152_37599__$1)){
var c__4556__auto___37606 = cljs.core.chunk_first(seq__37152_37599__$1);
var G__37607 = cljs.core.chunk_rest(seq__37152_37599__$1);
var G__37608 = c__4556__auto___37606;
var G__37609 = cljs.core.count(c__4556__auto___37606);
var G__37610 = (0);
seq__37152_37589 = G__37607;
chunk__37153_37590 = G__37608;
count__37154_37591 = G__37609;
i__37155_37592 = G__37610;
continue;
} else {
var child_37612 = cljs.core.first(seq__37152_37599__$1);
shadow.object._destroy_BANG_(child_37612,new cljs.core.Keyword(null,"parent","parent",-878878779));


var G__37613 = cljs.core.next(seq__37152_37599__$1);
var G__37614 = null;
var G__37615 = (0);
var G__37616 = (0);
seq__37152_37589 = G__37613;
chunk__37153_37590 = G__37614;
count__37154_37591 = G__37615;
i__37155_37592 = G__37616;
continue;
}
} else {
}
}
break;
}

shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$__$1,new cljs.core.Keyword(null,"destroy","destroy",-843660405),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cause], 0));

shadow.object.dom_destroy(this$__$1,cause);

var return_value_37617 = new cljs.core.Keyword("shadow.object","return-value","shadow.object/return-value",1397593360).cljs$core$IFn$_invoke$arity$1(this$__$1);
if((return_value_37617 == null)){
} else {
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.result_chan,return_value_37617);
}

cljs.core.async.close_BANG_(self__.result_chan);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(shadow.object.instances,cljs.core.dissoc,self__.id);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(shadow.object.instance_parent,cljs.core.dissoc,self__.id);

if(cljs.core.truth_(parent_id)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(shadow.object.instance_children,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [parent_id], null),cljs.core.disj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.id], 0));
} else {
return null;
}
}));

(shadow.object.ObjectRef.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.data;
}));

(shadow.object.ObjectRef.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.with_meta(new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"result-chan","result-chan",3070926,null)], null);
}));

(shadow.object.ObjectRef.cljs$lang$type = true);

(shadow.object.ObjectRef.cljs$lang$ctorStr = "shadow.object/ObjectRef");

(shadow.object.ObjectRef.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.object/ObjectRef");
}));

/**
 * Positional factory function for shadow.object/ObjectRef.
 */
shadow.object.__GT_ObjectRef = (function shadow$object$__GT_ObjectRef(id,type,data,watches,result_chan){
return (new shadow.object.ObjectRef(id,type,data,watches,result_chan));
});

shadow.object.add_reaction_BANG_ = (function shadow$object$add_reaction_BANG_(var_args){
var G__37169 = arguments.length;
switch (G__37169) {
case 3:
return shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (oref,ev,handler_fn){
return shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev,handler_fn], null));
}));

(shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (oref,list){
return shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.update_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633)], null),shadow.object.merge_reactions,list], 0));
}));

(shadow.object.add_reaction_BANG_.cljs$lang$maxFixedArity = 3);

shadow.object.bind_change = (function shadow$object$bind_change(var_args){
var G__37174 = arguments.length;
switch (G__37174) {
case 3:
return shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.object.bind_change.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3 = (function (oref,attr,callback){
return shadow.object.bind_change.cljs$core$IFn$_invoke$arity$4(oref,attr,callback,cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("bind-change"));
}));

(shadow.object.bind_change.cljs$core$IFn$_invoke$arity$4 = (function (oref,attr,callback,watch_key){
if((((!((oref == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === oref.shadow$object$IObject$))))?true:(((!oref.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,oref):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,oref))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("binding currently only supports shadow objects, other atoms might leak, may add later",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oref","oref",-1547494840),oref,new cljs.core.Keyword(null,"attr","attr",-604132353),attr], null));
}

var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
return cljs.core.add_watch(oref,watch_key,(function shadow$object$bind_change_watch(_,___$1,old,new$){
var ov = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old,attr__$1);
var nv = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new$,attr__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ov,nv)){
return null;
} else {
return (callback.cljs$core$IFn$_invoke$arity$2 ? callback.cljs$core$IFn$_invoke$arity$2(ov,nv) : callback.call(null,ov,nv));
}
}));
}));

(shadow.object.bind_change.cljs$lang$maxFixedArity = 4);

shadow.object.dom_enter = (function shadow$object$dom_enter(parent,child){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(parent,child);

if(cljs.core.truth_(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1(parent))){
return shadow.object.notify_tree_BANG_(child,new cljs.core.Keyword("dom","entered","dom/entered",506699596));
} else {
return null;
}
});
shadow.object.create = (function shadow$object$create(var_args){
var args__4742__auto__ = [];
var len__4736__auto___37650 = arguments.length;
var i__4737__auto___37651 = (0);
while(true){
if((i__4737__auto___37651 < len__4736__auto___37650)){
args__4742__auto__.push((arguments[i__4737__auto___37651]));

var G__37652 = (i__4737__auto___37651 + (1));
i__4737__auto___37651 = G__37652;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return shadow.object.create.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(shadow.object.create.cljs$core$IFn$_invoke$arity$variadic = (function (type,args,node_children){
if(cljs.core.contains_QMARK_(cljs.core.deref(shadow.object.object_defs),type)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["cannot create unknown child type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
}

if(cljs.core.map_QMARK_(args)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("so/create second arg must be a map",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"args","args",1315556576),args], null));
}

var oid = shadow.object.next_id();
var parent = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(args);
var result_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var odef = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.object_defs),type);
var obj = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(shadow.object.merge_defaults(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(args,new cljs.core.Keyword("shadow.object","object-id","shadow.object/object-id",-685993804),oid,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),cljs.core.get.cljs$core$IFn$_invoke$arity$3(odef,new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),cljs.core.PersistentArrayMap.EMPTY)], 0)),type),new cljs.core.Keyword(null,"parent","parent",-878878779),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dom","dom",-1236537922)], 0));
var oref = (new shadow.object.ObjectRef(oid,type,obj,cljs.core.PersistentVector.EMPTY,result_chan));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.instances,cljs.core.assoc,oid,oref);

if(cljs.core.truth_(parent)){
shadow.object.set_parent_BANG_(oref,parent);
} else {
}

shadow.object.notify_BANG_(oref,new cljs.core.Keyword(null,"init","init",-1875481434));

var dom_events_37658 = new cljs.core.Keyword("dom","events","dom/events",1793437527).cljs$core$IFn$_invoke$arity$2(odef,cljs.core.PersistentVector.EMPTY);
var temp__5733__auto___37660 = new cljs.core.Keyword(null,"dom","dom",-1236537922).cljs$core$IFn$_invoke$arity$1(args);
if(cljs.core.truth_(temp__5733__auto___37660)){
var dom_37662 = temp__5733__auto___37660;
shadow.dom.set_data(dom_37662,new cljs.core.Keyword(null,"oid","oid",-768692334),oid);

shadow.object.bind_dom_events(oref,dom_37662,dom_events_37658);

shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311),dom_37662], 0));

shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,new cljs.core.Keyword("dom","init","dom/init",-1875647652),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dom_37662], 0));
} else {
var temp__5735__auto___37663 = new cljs.core.Keyword(null,"dom","dom",-1236537922).cljs$core$IFn$_invoke$arity$1(odef);
if(cljs.core.truth_(temp__5735__auto___37663)){
var dom_fn_37665 = temp__5735__auto___37663;
var dom_37666 = (function (){var G__37190 = (dom_fn_37665.cljs$core$IFn$_invoke$arity$2 ? dom_fn_37665.cljs$core$IFn$_invoke$arity$2(oref,node_children) : dom_fn_37665.call(null,oref,node_children));
return (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(G__37190) : shadow.dom.build.call(null,G__37190));
})();
shadow.dom.set_data(dom_37666,new cljs.core.Keyword(null,"oid","oid",-768692334),oid);

shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311),dom_37666], 0));

shadow.object.bind_dom_events(oref,dom_37666,dom_events_37658);

shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,new cljs.core.Keyword("dom","init","dom/init",-1875647652),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dom_37666], 0));
} else {
}
}

var temp__5735__auto___37676 = new cljs.core.Keyword(null,"watch","watch",380988277).cljs$core$IFn$_invoke$arity$1(odef);
if(cljs.core.truth_(temp__5735__auto___37676)){
var watches_37677 = temp__5735__auto___37676;
var seq__37191_37678 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),watches_37677));
var chunk__37192_37679 = null;
var count__37193_37680 = (0);
var i__37194_37681 = (0);
while(true){
if((i__37194_37681 < count__37193_37680)){
var vec__37207_37682 = chunk__37192_37679.cljs$core$IIndexed$_nth$arity$2(null,i__37194_37681);
var attr_37683 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37207_37682,(0),null);
var handler_37684 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37207_37682,(1),null);
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr_37683,((function (seq__37191_37678,chunk__37192_37679,count__37193_37680,i__37194_37681,vec__37207_37682,attr_37683,handler_37684,watches_37677,temp__5735__auto___37676,oid,parent,result_chan,odef,obj,oref){
return (function (old,new$){
return (handler_37684.cljs$core$IFn$_invoke$arity$3 ? handler_37684.cljs$core$IFn$_invoke$arity$3(oref,old,new$) : handler_37684.call(null,oref,old,new$));
});})(seq__37191_37678,chunk__37192_37679,count__37193_37680,i__37194_37681,vec__37207_37682,attr_37683,handler_37684,watches_37677,temp__5735__auto___37676,oid,parent,result_chan,odef,obj,oref))
);


var G__37686 = seq__37191_37678;
var G__37687 = chunk__37192_37679;
var G__37688 = count__37193_37680;
var G__37689 = (i__37194_37681 + (1));
seq__37191_37678 = G__37686;
chunk__37192_37679 = G__37687;
count__37193_37680 = G__37688;
i__37194_37681 = G__37689;
continue;
} else {
var temp__5735__auto___37693__$1 = cljs.core.seq(seq__37191_37678);
if(temp__5735__auto___37693__$1){
var seq__37191_37695__$1 = temp__5735__auto___37693__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37191_37695__$1)){
var c__4556__auto___37697 = cljs.core.chunk_first(seq__37191_37695__$1);
var G__37698 = cljs.core.chunk_rest(seq__37191_37695__$1);
var G__37699 = c__4556__auto___37697;
var G__37700 = cljs.core.count(c__4556__auto___37697);
var G__37701 = (0);
seq__37191_37678 = G__37698;
chunk__37192_37679 = G__37699;
count__37193_37680 = G__37700;
i__37194_37681 = G__37701;
continue;
} else {
var vec__37213_37703 = cljs.core.first(seq__37191_37695__$1);
var attr_37704 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37213_37703,(0),null);
var handler_37705 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37213_37703,(1),null);
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr_37704,((function (seq__37191_37678,chunk__37192_37679,count__37193_37680,i__37194_37681,vec__37213_37703,attr_37704,handler_37705,seq__37191_37695__$1,temp__5735__auto___37693__$1,watches_37677,temp__5735__auto___37676,oid,parent,result_chan,odef,obj,oref){
return (function (old,new$){
return (handler_37705.cljs$core$IFn$_invoke$arity$3 ? handler_37705.cljs$core$IFn$_invoke$arity$3(oref,old,new$) : handler_37705.call(null,oref,old,new$));
});})(seq__37191_37678,chunk__37192_37679,count__37193_37680,i__37194_37681,vec__37213_37703,attr_37704,handler_37705,seq__37191_37695__$1,temp__5735__auto___37693__$1,watches_37677,temp__5735__auto___37676,oid,parent,result_chan,odef,obj,oref))
);


var G__37706 = cljs.core.next(seq__37191_37695__$1);
var G__37707 = null;
var G__37708 = (0);
var G__37709 = (0);
seq__37191_37678 = G__37706;
chunk__37192_37679 = G__37707;
count__37193_37680 = G__37708;
i__37194_37681 = G__37709;
continue;
}
} else {
}
}
break;
}
} else {
}

return oref;
}));

(shadow.object.create.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.object.create.cljs$lang$applyTo = (function (seq37182){
var G__37184 = cljs.core.first(seq37182);
var seq37182__$1 = cljs.core.next(seq37182);
var G__37185 = cljs.core.first(seq37182__$1);
var seq37182__$2 = cljs.core.next(seq37182__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37184,G__37185,seq37182__$2);
}));

/**
 * [oref attr node-gen] produces a node via (node-gen new-value)
 * watches obj for changes and replaces the generated node on change (node-gen defaults to str)
 * 
 *   only use if the node has no attached behavior like clicks, use bind with an extra object for those
 */
shadow.object.bind_simple = (function shadow$object$bind_simple(var_args){
var G__37228 = arguments.length;
switch (G__37228) {
case 2:
return shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$2 = (function (oref,attr){
return shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$3(oref,attr,cljs.core.str);
}));

(shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$3 = (function (oref,attr,node_gen){
var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
var node_get = (function (p1__37223_SHARP_){
var G__37232 = (node_gen.cljs$core$IFn$_invoke$arity$1 ? node_gen.cljs$core$IFn$_invoke$arity$1(p1__37223_SHARP_) : node_gen.call(null,p1__37223_SHARP_));
return (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(G__37232) : shadow.dom.build.call(null,G__37232));
});
var node = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(node_get(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(oref,attr__$1)));
var bind_key = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("bind");
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr__$1,(function (old,new$){
var new_node = node_get(new$);
var current_node = cljs.core.deref(node);
shadow.dom.replace_node(current_node,new_node);

return cljs.core.reset_BANG_(node,new_node);
}));

return cljs.core.deref(node);
}));

(shadow.object.bind_simple.cljs$lang$maxFixedArity = 3);

/**
 * bind the given attribute a child item
 *   the item will be recreated whenever the value changes (old one will be destroyed)
 */
shadow.object.bind = (function shadow$object$bind(oref,attr,item_type,item_key,item_attrs){
var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
var curval = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(oref,attr__$1);
var make_child_fn = (function (value){
return shadow.object.create(item_type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([item_attrs,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"parent","parent",-878878779),oref,item_key,value])], 0)));
});
var child = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(make_child_fn(curval));
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr__$1,(function (old,new$){
var new_child = make_child_fn(new$);
var current_node = cljs.core.deref(child);
shadow.dom.replace_node(current_node,new_child);

shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(child));

cljs.core.reset_BANG_(child,new_child);

return (shadow.object.notify_down_BANG_.cljs$core$IFn$_invoke$arity$2 ? shadow.object.notify_down_BANG_.cljs$core$IFn$_invoke$arity$2(new_child,new cljs.core.Keyword("dom","entered","dom/entered",506699596)) : shadow.object.notify_down_BANG_.call(null,new_child,new cljs.core.Keyword("dom","entered","dom/entered",506699596)));
}));

return cljs.core.deref(child);
});
shadow.object.coll_destroy_children = (function shadow$object$coll_destroy_children(children,c,diff){
var seq__37242_37729 = cljs.core.seq(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(children,(c + diff),c));
var chunk__37243_37730 = null;
var count__37244_37731 = (0);
var i__37245_37732 = (0);
while(true){
if((i__37245_37732 < count__37244_37731)){
var obj_37735 = chunk__37243_37730.cljs$core$IIndexed$_nth$arity$2(null,i__37245_37732);
var obj_37736__$1 = shadow.object.get_from_dom(obj_37735);
shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(obj_37736__$1);


var G__37737 = seq__37242_37729;
var G__37738 = chunk__37243_37730;
var G__37739 = count__37244_37731;
var G__37740 = (i__37245_37732 + (1));
seq__37242_37729 = G__37737;
chunk__37243_37730 = G__37738;
count__37244_37731 = G__37739;
i__37245_37732 = G__37740;
continue;
} else {
var temp__5735__auto___37743 = cljs.core.seq(seq__37242_37729);
if(temp__5735__auto___37743){
var seq__37242_37744__$1 = temp__5735__auto___37743;
if(cljs.core.chunked_seq_QMARK_(seq__37242_37744__$1)){
var c__4556__auto___37749 = cljs.core.chunk_first(seq__37242_37744__$1);
var G__37750 = cljs.core.chunk_rest(seq__37242_37744__$1);
var G__37751 = c__4556__auto___37749;
var G__37752 = cljs.core.count(c__4556__auto___37749);
var G__37753 = (0);
seq__37242_37729 = G__37750;
chunk__37243_37730 = G__37751;
count__37244_37731 = G__37752;
i__37245_37732 = G__37753;
continue;
} else {
var obj_37759 = cljs.core.first(seq__37242_37744__$1);
var obj_37760__$1 = shadow.object.get_from_dom(obj_37759);
shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(obj_37760__$1);


var G__37761 = cljs.core.next(seq__37242_37744__$1);
var G__37762 = null;
var G__37763 = (0);
var G__37764 = (0);
seq__37242_37729 = G__37761;
chunk__37243_37730 = G__37762;
count__37244_37731 = G__37763;
i__37245_37732 = G__37764;
continue;
}
} else {
}
}
break;
}

return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(children,(0),(c + diff));
});
shadow.object.bind_children = (function shadow$object$bind_children(var_args){
var G__37263 = arguments.length;
switch (G__37263) {
case 5:
return shadow.object.bind_children.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return shadow.object.bind_children.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.bind_children.cljs$core$IFn$_invoke$arity$5 = (function (node,parent,attr,item_type,item_key){
return shadow.object.bind_children.cljs$core$IFn$_invoke$arity$6(node,parent,attr,item_type,item_key,(function (p1__37259_SHARP_){
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,p1__37259_SHARP_);
}));
}));

(shadow.object.bind_children.cljs$core$IFn$_invoke$arity$6 = (function (node,parent,attr,item_type,item_key,coll_transform){
var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
var update_children = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
var coll_dom = (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(node) : shadow.dom.build.call(null,node));
var make_item_fn = (function (p__37285){
var vec__37287 = p__37285;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37287,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37287,(1),null);
var obj = shadow.object.create(item_type,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"parent","parent",-878878779),parent,new cljs.core.Keyword("shadow.object","coll-path","shadow.object/coll-path",1583850048),attr__$1,new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616),key,new cljs.core.Keyword("shadow.object","coll-item-key","shadow.object/coll-item-key",1888444366),item_key,item_key,val]));
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(obj,item_key,(function (old,new$){
var parent_key = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(attr__$1,new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616).cljs$core$IFn$_invoke$arity$1(obj));
(shadow.object.log.cljs$core$IFn$_invoke$arity$6 ? shadow.object.log.cljs$core$IFn$_invoke$arity$6("direct child update",parent,obj,key,parent_key,new$) : shadow.object.log.call(null,"direct child update",parent,obj,key,parent_key,new$));

cljs.core.reset_BANG_(update_children,false);

shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(parent,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([parent_key,new$], 0));

return cljs.core.reset_BANG_(update_children,true);
}));

return obj;
});
var seq__37295_37784 = cljs.core.seq((function (){var G__37305 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parent,attr__$1);
return (coll_transform.cljs$core$IFn$_invoke$arity$1 ? coll_transform.cljs$core$IFn$_invoke$arity$1(G__37305) : coll_transform.call(null,G__37305));
})());
var chunk__37296_37785 = null;
var count__37297_37786 = (0);
var i__37298_37787 = (0);
while(true){
if((i__37298_37787 < count__37297_37786)){
var item_37788 = chunk__37296_37785.cljs$core$IIndexed$_nth$arity$2(null,i__37298_37787);
shadow.object.dom_enter(coll_dom,make_item_fn(item_37788));


var G__37789 = seq__37295_37784;
var G__37790 = chunk__37296_37785;
var G__37791 = count__37297_37786;
var G__37792 = (i__37298_37787 + (1));
seq__37295_37784 = G__37789;
chunk__37296_37785 = G__37790;
count__37297_37786 = G__37791;
i__37298_37787 = G__37792;
continue;
} else {
var temp__5735__auto___37795 = cljs.core.seq(seq__37295_37784);
if(temp__5735__auto___37795){
var seq__37295_37796__$1 = temp__5735__auto___37795;
if(cljs.core.chunked_seq_QMARK_(seq__37295_37796__$1)){
var c__4556__auto___37797 = cljs.core.chunk_first(seq__37295_37796__$1);
var G__37798 = cljs.core.chunk_rest(seq__37295_37796__$1);
var G__37799 = c__4556__auto___37797;
var G__37800 = cljs.core.count(c__4556__auto___37797);
var G__37801 = (0);
seq__37295_37784 = G__37798;
chunk__37296_37785 = G__37799;
count__37297_37786 = G__37800;
i__37298_37787 = G__37801;
continue;
} else {
var item_37804 = cljs.core.first(seq__37295_37796__$1);
shadow.object.dom_enter(coll_dom,make_item_fn(item_37804));


var G__37805 = cljs.core.next(seq__37295_37796__$1);
var G__37806 = null;
var G__37807 = (0);
var G__37808 = (0);
seq__37295_37784 = G__37805;
chunk__37296_37785 = G__37806;
count__37297_37786 = G__37807;
i__37298_37787 = G__37808;
continue;
}
} else {
}
}
break;
}

shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(parent,attr__$1,(function shadow$object$bind_children_watch(old,new$){
if(cljs.core.truth_(cljs.core.deref(update_children))){
var children = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,shadow.dom.children(coll_dom));
var new_coll = cljs.core.vec((coll_transform.cljs$core$IFn$_invoke$arity$1 ? coll_transform.cljs$core$IFn$_invoke$arity$1(new$) : coll_transform.call(null,new$)));
var count_children = cljs.core.count(children);
var count_new = cljs.core.count(new$);
var diff = (count_new - count_children);
var children__$1 = (((diff < (0)))?shadow.object.coll_destroy_children(children,count_children,diff):children);
var count_children__$1 = (function (){var x__4217__auto__ = count_new;
var y__4218__auto__ = count_children;
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
var n__4613__auto___37813 = count_children__$1;
var idx_37814 = (0);
while(true){
if((idx_37814 < n__4613__auto___37813)){
var cn_37815 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,idx_37814);
var cc_37816 = shadow.object.get_from_dom(cn_37815);
var ckey_37817 = new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616).cljs$core$IFn$_invoke$arity$1(cc_37816);
var cval_37818 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cc_37816,item_key);
var vec__37328_37819 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new_coll,idx_37814);
var nkey_37820 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37328_37819,(0),null);
var nval_37821 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37328_37819,(1),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ckey_37817,nkey_37820)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cval_37818,nval_37821)))){
} else {
var new_obj_37827 = make_item_fn(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nkey_37820,nval_37821], null));
shadow.dom.replace_node(cn_37815,new_obj_37827);

shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(cc_37816);

shadow.object.notify_tree_BANG_(new_obj_37827,new cljs.core.Keyword("dom","entered","dom/entered",506699596));
}

var G__37829 = (idx_37814 + (1));
idx_37814 = G__37829;
continue;
} else {
}
break;
}

if((diff > (0))){
var seq__37334_37830 = cljs.core.seq(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(new_coll,count_children__$1,count_new));
var chunk__37335_37831 = null;
var count__37336_37832 = (0);
var i__37337_37833 = (0);
while(true){
if((i__37337_37833 < count__37336_37832)){
var item_37835 = chunk__37335_37831.cljs$core$IIndexed$_nth$arity$2(null,i__37337_37833);
shadow.object.dom_enter(coll_dom,make_item_fn(item_37835));


var G__37836 = seq__37334_37830;
var G__37837 = chunk__37335_37831;
var G__37838 = count__37336_37832;
var G__37839 = (i__37337_37833 + (1));
seq__37334_37830 = G__37836;
chunk__37335_37831 = G__37837;
count__37336_37832 = G__37838;
i__37337_37833 = G__37839;
continue;
} else {
var temp__5735__auto___37840 = cljs.core.seq(seq__37334_37830);
if(temp__5735__auto___37840){
var seq__37334_37841__$1 = temp__5735__auto___37840;
if(cljs.core.chunked_seq_QMARK_(seq__37334_37841__$1)){
var c__4556__auto___37842 = cljs.core.chunk_first(seq__37334_37841__$1);
var G__37843 = cljs.core.chunk_rest(seq__37334_37841__$1);
var G__37844 = c__4556__auto___37842;
var G__37845 = cljs.core.count(c__4556__auto___37842);
var G__37846 = (0);
seq__37334_37830 = G__37843;
chunk__37335_37831 = G__37844;
count__37336_37832 = G__37845;
i__37337_37833 = G__37846;
continue;
} else {
var item_37847 = cljs.core.first(seq__37334_37841__$1);
shadow.object.dom_enter(coll_dom,make_item_fn(item_37847));


var G__37849 = cljs.core.next(seq__37334_37841__$1);
var G__37850 = null;
var G__37851 = (0);
var G__37852 = (0);
seq__37334_37830 = G__37849;
chunk__37335_37831 = G__37850;
count__37336_37832 = G__37851;
i__37337_37833 = G__37852;
continue;
}
} else {
}
}
break;
}
} else {
}

return shadow.object.notify_BANG_(parent,new cljs.core.Keyword(null,"bind-children-update","bind-children-update",-1610690160));
} else {
return null;
}
}));

return coll_dom;
}));

(shadow.object.bind_children.cljs$lang$maxFixedArity = 6);

shadow.object.remove_in_parent_BANG_ = (function shadow$object$remove_in_parent_BANG_(oref){
var parent = shadow.object.get_parent(oref);
var key = new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616).cljs$core$IFn$_invoke$arity$1(oref);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.Keyword("shadow.object","coll-item-key","shadow.object/coll-item-key",1888444366).cljs$core$IFn$_invoke$arity$1(oref));
var path = new cljs.core.Keyword("shadow.object","coll-path","shadow.object/coll-path",1583850048).cljs$core$IFn$_invoke$arity$1(oref);
if(cljs.core.truth_((function (){var and__4115__auto__ = key;
if(cljs.core.truth_(and__4115__auto__)){
return path;
} else {
return and__4115__auto__;
}
})())){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("remove-in-parent! should only be called from items created via so/bind-children",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"oref","oref",-1547494840),oref], null));
}

var coll = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parent,path);
var new_coll = shadow.util.remove_item_from_coll(coll,key,value);
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(parent,new cljs.core.Keyword("bind","update","bind/update",1048601733),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path,new_coll], 0));
});
shadow.object.inspect_BANG_ = (function shadow$object$inspect_BANG_(oref){
var G__37348 = "inspect!";
var G__37349 = shadow.object._id(oref);
var G__37350 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.object._type(oref));
var G__37351 = cljs.core.clj__GT_js(cljs.core.deref(shadow.object._data(oref)));
return (shadow.object.info.cljs$core$IFn$_invoke$arity$4 ? shadow.object.info.cljs$core$IFn$_invoke$arity$4(G__37348,G__37349,G__37350,G__37351) : shadow.object.info.call(null,G__37348,G__37349,G__37350,G__37351));
});
shadow.object.dump_BANG_ = (function shadow$object$dump_BANG_(){
(shadow.object.info.cljs$core$IFn$_invoke$arity$1 ? shadow.object.info.cljs$core$IFn$_invoke$arity$1("--------------- LIVE OBJECTS ------------") : shadow.object.info.call(null,"--------------- LIVE OBJECTS ------------"));

var seq__37353_37855 = cljs.core.seq(cljs.core.seq(cljs.core.deref(shadow.object.instances)));
var chunk__37354_37856 = null;
var count__37355_37857 = (0);
var i__37356_37858 = (0);
while(true){
if((i__37356_37858 < count__37355_37857)){
var vec__37373_37860 = chunk__37354_37856.cljs$core$IIndexed$_nth$arity$2(null,i__37356_37858);
var id_37861 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37373_37860,(0),null);
var oref_37862 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37373_37860,(1),null);
var G__37376_37864 = "dump";
var G__37377_37865 = id_37861;
var G__37378_37866 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.object._type(oref_37862)], 0));
var G__37379_37867 = cljs.core.deref(shadow.object._data(oref_37862));
(shadow.object.info.cljs$core$IFn$_invoke$arity$4 ? shadow.object.info.cljs$core$IFn$_invoke$arity$4(G__37376_37864,G__37377_37865,G__37378_37866,G__37379_37867) : shadow.object.info.call(null,G__37376_37864,G__37377_37865,G__37378_37866,G__37379_37867));


var G__37869 = seq__37353_37855;
var G__37870 = chunk__37354_37856;
var G__37871 = count__37355_37857;
var G__37872 = (i__37356_37858 + (1));
seq__37353_37855 = G__37869;
chunk__37354_37856 = G__37870;
count__37355_37857 = G__37871;
i__37356_37858 = G__37872;
continue;
} else {
var temp__5735__auto___37876 = cljs.core.seq(seq__37353_37855);
if(temp__5735__auto___37876){
var seq__37353_37877__$1 = temp__5735__auto___37876;
if(cljs.core.chunked_seq_QMARK_(seq__37353_37877__$1)){
var c__4556__auto___37878 = cljs.core.chunk_first(seq__37353_37877__$1);
var G__37879 = cljs.core.chunk_rest(seq__37353_37877__$1);
var G__37880 = c__4556__auto___37878;
var G__37881 = cljs.core.count(c__4556__auto___37878);
var G__37882 = (0);
seq__37353_37855 = G__37879;
chunk__37354_37856 = G__37880;
count__37355_37857 = G__37881;
i__37356_37858 = G__37882;
continue;
} else {
var vec__37380_37883 = cljs.core.first(seq__37353_37877__$1);
var id_37884 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37380_37883,(0),null);
var oref_37885 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37380_37883,(1),null);
var G__37383_37886 = "dump";
var G__37384_37887 = id_37884;
var G__37385_37888 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.object._type(oref_37885)], 0));
var G__37386_37889 = cljs.core.deref(shadow.object._data(oref_37885));
(shadow.object.info.cljs$core$IFn$_invoke$arity$4 ? shadow.object.info.cljs$core$IFn$_invoke$arity$4(G__37383_37886,G__37384_37887,G__37385_37888,G__37386_37889) : shadow.object.info.call(null,G__37383_37886,G__37384_37887,G__37385_37888,G__37386_37889));


var G__37892 = cljs.core.next(seq__37353_37877__$1);
var G__37893 = null;
var G__37894 = (0);
var G__37895 = (0);
seq__37353_37855 = G__37892;
chunk__37354_37856 = G__37893;
count__37355_37857 = G__37894;
i__37356_37858 = G__37895;
continue;
}
} else {
}
}
break;
}

return (shadow.object.info.cljs$core$IFn$_invoke$arity$1 ? shadow.object.info.cljs$core$IFn$_invoke$arity$1("--------------- //LIVE OBJECTS ------------") : shadow.object.info.call(null,"--------------- //LIVE OBJECTS ------------"));
});
goog.exportSymbol('shadow.object.dump_BANG_', shadow.object.dump_BANG_);

//# sourceMappingURL=shadow.object.js.map
