(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c82a4"],{"545d":function(t,o,e){"use strict";e.r(o);var a=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"main-container"},[t._m(0),e("div",{staticClass:"row gutters"},[e("div",{staticClass:"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("div",{staticClass:"row gutters"},[e("div",{staticClass:"col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12"},[e("div",{staticClass:"form-group"},[e("label",{staticClass:"label"},[t._v("入库日期")]),e("div",{staticClass:"custom-date-input"},[e("v-date-picker",{scopedSlots:t._u([{key:"default",fn:function(o){o.inputValue;var a=o.togglePopover;return[e("div",{staticClass:"flex items-center"},[e("button",{staticClass:"icon-calendar",on:{click:function(t){return a()}}}),e("input",{staticClass:"bg-white text-gray-700 w-full py-1 px-2 appearance-none border rounded-r focus:outline-none focus:border-blue-500",attrs:{readonly:""},domProps:{value:t.putInForm.inputDate}})])]}}]),model:{value:t.putInForm.inputDate,callback:function(o){t.$set(t.putInForm,"inputDate",o)},expression:"putInForm.inputDate"}})],1)])])]),e("div",{staticClass:"row gutters"},[e("div",{staticClass:"col-xl-4 col-lglg-4 col-md-4 col-sm-4 col-12"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"seller"}},[t._v("供货商")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.putInForm.seller,expression:"putInForm.seller"}],staticClass:"form-control",attrs:{type:"text",id:"seller",placeholder:"输入供货商名称"},domProps:{value:t.putInForm.seller},on:{input:function(o){o.target.composing||t.$set(t.putInForm,"seller",o.target.value)}}})])]),e("div",{staticClass:"col-xl-4 col-lglg-4 col-md-4 col-sm-4 col-12"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"qualityChecker"}},[t._v("质检员")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.putInForm.qualityChecker,expression:"putInForm.qualityChecker"}],staticClass:"form-control",attrs:{type:"text",id:"qualityChecker",placeholder:"输入全名"},domProps:{value:t.putInForm.qualityChecker},on:{input:function(o){o.target.composing||t.$set(t.putInForm,"qualityChecker",o.target.value)}}})])]),e("div",{staticClass:"col-xl-4 col-lglg-4 col-md-4 col-sm-4 col-12"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"holder"}},[t._v("保管员")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.putInForm.holder,expression:"putInForm.holder"}],staticClass:"form-control",attrs:{type:"text",id:"holder",placeholder:"输入全名"},domProps:{value:t.putInForm.holder},on:{input:function(o){o.target.composing||t.$set(t.putInForm,"holder",o.target.value)}}})])])]),e("div",{staticClass:"row gutters"},[e("div",{staticClass:"col-xl-4 col-lglg-4 col-md-4 col-sm-4 col-12"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"passer"}},[t._v("经手人")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.putInForm.passer,expression:"putInForm.passer"}],staticClass:"form-control",attrs:{type:"text",id:"passer",placeholder:"输入全名"},domProps:{value:t.putInForm.passer},on:{input:function(o){o.target.composing||t.$set(t.putInForm,"passer",o.target.value)}}})])]),e("div",{staticClass:"col-xl-4 col-lglg-4 col-md-4 col-sm-4 col-12"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"manager"}},[t._v("主管")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.putInForm.manager,expression:"putInForm.manager"}],staticClass:"form-control",attrs:{type:"text",id:"manager",placeholder:"输入全名"},domProps:{value:t.putInForm.manager},on:{input:function(o){o.target.composing||t.$set(t.putInForm,"manager",o.target.value)}}})])]),e("div",{staticClass:"col-xl-4 col-lglg-4 col-md-4 col-sm-4 col-12"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"accountant"}},[t._v("会计")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.putInForm.accountant,expression:"putInForm.accountant"}],staticClass:"form-control",attrs:{type:"text",id:"accountant",placeholder:"输入全名"},domProps:{value:t.putInForm.accountant},on:{input:function(o){o.target.composing||t.$set(t.putInForm,"accountant",o.target.value)}}})])])])])])]),e("div",{staticClass:"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body",attrs:{id:"itemList"}},[t._l(t.putInForm.parameters,(function(o,a){return e("div",{key:a,staticClass:"row gutters"},[e("div",{staticClass:"col-xl-1 col-lglg-1 col-md-1 col-sm-1 col-12"},[e("div",{staticClass:"form-group"},[e("label",[t._v("编号")]),e("input",{staticClass:"form-control",staticStyle:{"text-align":"center"},attrs:{type:"text",readonly:""},domProps:{value:a+1}})])]),e("div",{staticClass:"col-xl-2 col-lglg-2 col-md-2 col-sm-2 col-12"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"compName"}},[t._v("零件名称")]),e("select",{directives:[{name:"model",rawName:"v-model",value:o.index,expression:"para.index"}],staticClass:"custom-select",attrs:{id:"compName"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var o="_value"in t?t._value:t.value;return o}));t.$set(o,"index",e.target.multiple?a:a[0])}}},t._l(t.products,(function(o,a){return e("option",{key:a,domProps:{value:o.id}},[t._v(t._s(o.name))])})),0)])]),e("div",{staticClass:"col-xl-2 col-lglg-2 col-md-2 col-sm-2 col-12"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"model"}},[t._v("规格")]),e("input",{directives:[{name:"model",rawName:"v-model",value:o.model,expression:"para.model"}],staticClass:"form-control",attrs:{type:"text",id:"model",value:"I型"},domProps:{value:o.model},on:{input:function(e){e.target.composing||t.$set(o,"model",e.target.value)}}})])]),e("div",{staticClass:"col-xl-1 col-lglg-1 col-md-1 col-sm-1 col-12"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"unit"}},[t._v("单位")]),e("input",{directives:[{name:"model",rawName:"v-model",value:o.unit,expression:"para.unit"}],staticClass:"form-control",attrs:{type:"text",id:"unit",value:"个"},domProps:{value:o.unit},on:{input:function(e){e.target.composing||t.$set(o,"unit",e.target.value)}}})])]),e("div",{staticClass:"col-xl-1 col-lglg-1 col-md-1 col-sm-1 col-12"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"quantity"}},[t._v("数量")]),e("input",{directives:[{name:"model",rawName:"v-model",value:o.quantity,expression:"para.quantity"}],staticClass:"form-control",attrs:{type:"text",id:"quantity",value:"100"},domProps:{value:o.quantity},on:{input:function(e){e.target.composing||t.$set(o,"quantity",e.target.value)}}})])]),e("div",{staticClass:"col-xl-1 col-lglg-1 col-md-1 col-sm-1 col-12"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"price"}},[t._v("单价")]),e("input",{directives:[{name:"model",rawName:"v-model",value:o.price,expression:"para.price"}],staticClass:"form-control",attrs:{type:"text",id:"price",value:"40"},domProps:{value:o.price},on:{input:function(e){e.target.composing||t.$set(o,"price",e.target.value)}}})])]),e("div",{staticClass:"col-xl-1 col-lglg-1 col-md-1 col-sm-1 col-12"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"totalPrice"}},[t._v("总价")]),e("input",{directives:[{name:"model",rawName:"v-model",value:o.totalPrice,expression:"para.totalPrice"}],staticClass:"form-control",attrs:{type:"text",id:"totalPrice",value:"4000"},domProps:{value:o.totalPrice},on:{input:function(e){e.target.composing||t.$set(o,"totalPrice",e.target.value)}}})])]),e("div",{staticClass:"col-xl-2 col-lglg-2 col-md-2 col-sm-2 col-12"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"comment"}},[t._v("备注")]),e("input",{directives:[{name:"model",rawName:"v-model",value:o.comment,expression:"para.comment"}],staticClass:"form-control",attrs:{type:"text",id:"comment",value:"良品率98.70%"},domProps:{value:o.comment},on:{input:function(e){e.target.composing||t.$set(o,"comment",e.target.value)}}})])]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.putInForm.parameters.length>1,expression:"putInForm.parameters.length > 1"}],staticClass:"col-x1-1 col-lg-1 col-md-1 col-sm-1 col-12"},[e("div",[e("div",{staticClass:"form-group"},[e("br"),e("button",{staticClass:"btn btn-danger icon-delete",on:{click:function(o){return t.remove(a)}}})])])])])})),e("button",{staticClass:"btn btn-primary",attrs:{id:"addItem",type:"button"},on:{click:function(o){return t.addItem()}}},[t._v("增加一项")])],2)])]),e("div",{staticClass:"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"summary"}},[t._v("批注")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.putInForm.totalcomment,expression:"putInForm.totalcomment"}],staticClass:"form-control",attrs:{id:"summary",rows:"3"},domProps:{value:t.putInForm.totalcomment},on:{input:function(o){o.target.composing||t.$set(t.putInForm,"totalcomment",o.target.value)}}})])])])]),e("div",{staticClass:"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("div",{staticClass:"custom-control custom-switch"},[e("input",{staticClass:"custom-control-input",attrs:{type:"checkbox",checked:"",id:"customSwitch3"},on:{click:function(o){return t.distribute()}}}),e("label",{staticClass:"custom-control-label",attrs:{for:"customSwitch3"}},[t._v("自动分配储位")])]),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.putInForm.autodistribute,expression:"!putInForm.autodistribute"}],staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.putInForm.storeid,expression:"putInForm.storeid"}],staticClass:"form-control",attrs:{type:"text",id:"store",placeholder:"请手动输入仓库号"},domProps:{value:t.putInForm.storeid},on:{input:function(o){o.target.composing||t.$set(t.putInForm,"storeid",o.target.value)}}})])])])]),e("div",{staticClass:"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("button",{staticClass:"btn btn-primary mb-2",attrs:{type:"submit"},on:{click:function(o){return t.submitPutInForm()}}},[t._v("提交")])])])])])])},s=[function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"page-header"},[e("div",{staticClass:"page-header"},[e("h4",[t._v("入库单")])])])}],l=(e("a434"),e("bc3a")),r=e.n(l),i={submitPutInForm:function(t){r.a.post("/api/warehouse/submitPutInForm",t).then((function(t){"success"===t.data.status&&console.log(t)})).catch((function(t){console.log(t.data.errorMsg)}))}},c=i,n=e("64dc"),u={name:"PutInForm",data:function(){return{products:[],putInForm:{inputDate:new Date,seller:"",qualityChecker:"",holder:"",passer:"",manager:"",accountant:"",totalcomment:"",autodistribute:"true",storeid:[],parameters:[{index:"",model:"",unit:"",quantity:"",price:"",totalPrice:"",comment:""}]}}},methods:{getEmptyParameter:function(){return{index:"",model:"",unit:"",quantity:"",price:"",totalPrice:"",comment:""}},addItem:function(){this.putInForm.parameters.push(this.getEmptyParameter())},remove:function(t){this.putInForm.parameters.splice(t,1)},distribute:function(){this.putInForm.autodistribute=!this.putInForm.autodistribute,this.putInForm.storeid=[]},submitPutInForm:function(){c.submitPutInForm(this.putInForm)}},mounted:function(){var t=this;n["a"].getAllProducts((function(o){return t.products=o}),(function(t){return console.log(t)}),(function(t){return console.log(t)}))}},m=u,d=e("2877"),p=Object(d["a"])(m,a,s,!1,null,"653102dd",null);o["default"]=p.exports}}]);
//# sourceMappingURL=chunk-2d0c82a4.ba91057d.js.map