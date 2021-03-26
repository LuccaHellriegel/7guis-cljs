goog.provide('seven_guis_cljs.core');
seven_guis_cljs.core.click_count = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
seven_guis_cljs.core.counter_field = (function seven_guis_cljs$core$counter_field(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(seven_guis_cljs.core.click_count),new cljs.core.Keyword(null,"readOnly","readOnly",-1749118317),true], null)], null);
});
seven_guis_cljs.core.count_button = (function seven_guis_cljs$core$count_button(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Count",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(seven_guis_cljs.core.click_count,cljs.core.inc);
})], null)], null);
});
seven_guis_cljs.core.counter_gui = (function seven_guis_cljs$core$counter_gui(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [seven_guis_cljs.core.counter_field], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [seven_guis_cljs.core.count_button], null)], null);
});
seven_guis_cljs.core.event__GT_target_value = (function seven_guis_cljs$core$event__GT_target_value(e){
return e.target.value;
});
seven_guis_cljs.core.celsius_value = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
seven_guis_cljs.core.fahrenheit_value = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
seven_guis_cljs.core.fahrenheit__GT_celsius = (function seven_guis_cljs$core$fahrenheit__GT_celsius(f){
return ((f - (32)) * ((5) / (9)));
});
seven_guis_cljs.core.celsius__GT_fahrenheit = (function seven_guis_cljs$core$celsius__GT_fahrenheit(c){
return ((c * ((9) / (5))) + (32));
});
seven_guis_cljs.core.parse_converter_input = (function seven_guis_cljs$core$parse_converter_input(input){
var n = parseFloat(input);
var valid = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(input,cljs.core.str.cljs$core$IFn$_invoke$arity$1(n));
if(valid){
return n;
} else {
return null;
}
});
seven_guis_cljs.core.change_celsius = (function seven_guis_cljs$core$change_celsius(val){
var n = seven_guis_cljs.core.parse_converter_input(val);
if(cljs.core.truth_(n)){
var G__36218 = cljs.core.reset_BANG_(seven_guis_cljs.core.fahrenheit_value,seven_guis_cljs.core.celsius__GT_fahrenheit(n));
var fexpr__36217 = cljs.core.reset_BANG_(seven_guis_cljs.core.celsius_value,n);
return (fexpr__36217.cljs$core$IFn$_invoke$arity$1 ? fexpr__36217.cljs$core$IFn$_invoke$arity$1(G__36218) : fexpr__36217.call(null,G__36218));
} else {
return cljs.core.reset_BANG_(seven_guis_cljs.core.celsius_value,val);
}
});
seven_guis_cljs.core.celsius_field = (function seven_guis_cljs$core$celsius_field(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(seven_guis_cljs.core.celsius_value),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__36219_SHARP_){
return seven_guis_cljs.core.change_celsius(seven_guis_cljs.core.event__GT_target_value(p1__36219_SHARP_));
})], null)], null)], null);
});
seven_guis_cljs.core.change_fahrenheit = (function seven_guis_cljs$core$change_fahrenheit(val){
var n = seven_guis_cljs.core.parse_converter_input(val);
if(cljs.core.truth_(n)){
var G__36221 = cljs.core.reset_BANG_(seven_guis_cljs.core.celsius_value,seven_guis_cljs.core.fahrenheit__GT_celsius(n));
var fexpr__36220 = cljs.core.reset_BANG_(seven_guis_cljs.core.fahrenheit_value,n);
return (fexpr__36220.cljs$core$IFn$_invoke$arity$1 ? fexpr__36220.cljs$core$IFn$_invoke$arity$1(G__36221) : fexpr__36220.call(null,G__36221));
} else {
return cljs.core.reset_BANG_(seven_guis_cljs.core.fahrenheit_value,val);
}
});
seven_guis_cljs.core.fahrenheit_field = (function seven_guis_cljs$core$fahrenheit_field(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(seven_guis_cljs.core.fahrenheit_value),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__36222_SHARP_){
return seven_guis_cljs.core.change_fahrenheit(seven_guis_cljs.core.event__GT_target_value(p1__36222_SHARP_));
})], null)], null)], null);
});
seven_guis_cljs.core.temp_converter_gui = (function seven_guis_cljs$core$temp_converter_gui(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [seven_guis_cljs.core.celsius_field], null),"Celsius =",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [seven_guis_cljs.core.fahrenheit_field], null),"Fahrenheit"], null);
});
seven_guis_cljs.core.one_way_flight = "one-way flight";
seven_guis_cljs.core.return_flight = "return flight";
seven_guis_cljs.core.flight_type = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(seven_guis_cljs.core.one_way_flight);
seven_guis_cljs.core.flight_type_select = (function seven_guis_cljs$core$flight_type_select(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__36223_SHARP_){
return cljs.core.reset_BANG_(seven_guis_cljs.core.flight_type,seven_guis_cljs.core.event__GT_target_value(p1__36223_SHARP_));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),seven_guis_cljs.core.one_way_flight], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),seven_guis_cljs.core.return_flight], null)], null);
});
seven_guis_cljs.core.red_background_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"red"], null);
seven_guis_cljs.core.start_value = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("27.03.2014");
seven_guis_cljs.core.return_value = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("27.03.2014");
seven_guis_cljs.core.has_point = (function seven_guis_cljs$core$has_point(s,pos){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(s,pos),".");
});
seven_guis_cljs.core.has_date_points = (function seven_guis_cljs$core$has_date_points(s){
return ((seven_guis_cljs.core.has_point(s,(2))) && (seven_guis_cljs.core.has_point(s,(5))));
});
seven_guis_cljs.core.has_date_length = (function seven_guis_cljs$core$has_date_length(s){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s.length,(10));
});
seven_guis_cljs.core.str_is_int = (function seven_guis_cljs$core$str_is_int(c){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,cljs.core.str.cljs$core$IFn$_invoke$arity$1(parseInt(c)));
});
seven_guis_cljs.core.date_num_pos = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(3),(4),(6),(7),(8),(9)], null);
seven_guis_cljs.core.has_date_nums = (function seven_guis_cljs$core$has_date_nums(s){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__36224_SHARP_,p2__36225_SHARP_){
var and__4115__auto__ = p1__36224_SHARP_;
if(cljs.core.truth_(and__4115__auto__)){
return seven_guis_cljs.core.str_is_int(cljs.core.get.cljs$core$IFn$_invoke$arity$2(s,p2__36225_SHARP_));
} else {
return and__4115__auto__;
}
}),true,seven_guis_cljs.core.date_num_pos);
});
seven_guis_cljs.core.valid_date_str = (function seven_guis_cljs$core$valid_date_str(s){
if(seven_guis_cljs.core.has_date_length(s)){
if(seven_guis_cljs.core.has_date_points(s)){
return seven_guis_cljs.core.has_date_nums(s);
} else {
return false;
}
} else {
return false;
}
});
seven_guis_cljs.core.date_str_to_int = (function seven_guis_cljs$core$date_str_to_int(s){
return parseInt(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36226_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(s,p1__36226_SHARP_);
}),seven_guis_cljs.core.date_num_pos)));
});
seven_guis_cljs.core.return_strictly_before_start = (function seven_guis_cljs$core$return_strictly_before_start(start,return$){
return (seven_guis_cljs.core.date_str_to_int(start) > seven_guis_cljs.core.date_str_to_int(return$));
});
seven_guis_cljs.core.start_field = (function seven_guis_cljs$core$start_field(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(seven_guis_cljs.core.start_value),new cljs.core.Keyword(null,"style","style",-496642736),((cljs.core.not(seven_guis_cljs.core.valid_date_str(cljs.core.deref(seven_guis_cljs.core.start_value))))?seven_guis_cljs.core.red_background_style:null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__36227_SHARP_){
return cljs.core.reset_BANG_(seven_guis_cljs.core.start_value,seven_guis_cljs.core.event__GT_target_value(p1__36227_SHARP_));
})], null)], null);
});
seven_guis_cljs.core.is_one_way_flight = (function seven_guis_cljs$core$is_one_way_flight(){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(seven_guis_cljs.core.flight_type),seven_guis_cljs.core.one_way_flight);
});
seven_guis_cljs.core.return_field = (function seven_guis_cljs$core$return_field(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(seven_guis_cljs.core.return_value),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),seven_guis_cljs.core.is_one_way_flight(),new cljs.core.Keyword(null,"style","style",-496642736),((cljs.core.not(seven_guis_cljs.core.valid_date_str(cljs.core.deref(seven_guis_cljs.core.return_value))))?seven_guis_cljs.core.red_background_style:null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__36228_SHARP_){
return cljs.core.reset_BANG_(seven_guis_cljs.core.return_value,seven_guis_cljs.core.event__GT_target_value(p1__36228_SHARP_));
})], null)], null);
});
seven_guis_cljs.core.book_message = (function seven_guis_cljs$core$book_message(flight,dates){
var G__36229 = flight;
switch (G__36229) {
case "one-way flight":
return ["You have booked a ",seven_guis_cljs.core.one_way_flight," on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(dates)),"."].join('');

break;
case "return flight":
return ["You have booked a flight on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(dates))," and a return flight on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"return","return",-1891502105).cljs$core$IFn$_invoke$arity$1(dates)),"."].join('');

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36229)].join('')));

}
});
seven_guis_cljs.core.book_button = (function seven_guis_cljs$core$book_button(){
var out = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(out,seven_guis_cljs.core.book_message(cljs.core.deref(seven_guis_cljs.core.flight_type),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),cljs.core.deref(seven_guis_cljs.core.start_value),new cljs.core.Keyword(null,"return","return",-1891502105),cljs.core.deref(seven_guis_cljs.core.return_value)], null)));
}),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),((cljs.core.not(seven_guis_cljs.core.valid_date_str(cljs.core.deref(seven_guis_cljs.core.start_value)))) || ((((!(seven_guis_cljs.core.is_one_way_flight()))) && (((cljs.core.not(seven_guis_cljs.core.valid_date_str(cljs.core.deref(seven_guis_cljs.core.return_value)))) || (seven_guis_cljs.core.return_strictly_before_start(cljs.core.deref(seven_guis_cljs.core.start_value),cljs.core.deref(seven_guis_cljs.core.return_value))))))))], null),"Book"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.deref(out)], null)], null);
});
});
seven_guis_cljs.core.flight_booker_gui = (function seven_guis_cljs$core$flight_booker_gui(){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [seven_guis_cljs.core.flight_type_select], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [seven_guis_cljs.core.start_field], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [seven_guis_cljs.core.return_field], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [seven_guis_cljs.core.book_button], null)], null);
});
seven_guis_cljs.core.home_page = (function seven_guis_cljs$core$home_page(){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u","u",-1156634785),"Counter"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [seven_guis_cljs.core.counter_gui], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u","u",-1156634785),"Temperature Converter"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [seven_guis_cljs.core.temp_converter_gui], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u","u",-1156634785),"Flight Booker"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [seven_guis_cljs.core.flight_booker_gui], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)], null);
});
seven_guis_cljs.core.mount_root = (function seven_guis_cljs$core$mount_root(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [seven_guis_cljs.core.home_page], null),document.getElementById("app"));
});
seven_guis_cljs.core.init_BANG_ = (function seven_guis_cljs$core$init_BANG_(){
return seven_guis_cljs.core.mount_root();
});
goog.exportSymbol('seven_guis_cljs.core.init_BANG_', seven_guis_cljs.core.init_BANG_);

//# sourceMappingURL=seven_guis_cljs.core.js.map
