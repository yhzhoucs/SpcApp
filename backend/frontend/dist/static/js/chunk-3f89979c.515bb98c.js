(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3f89979c"],{"0d6a":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"show",rawName:"v-show",value:t.showHint,expression:"showHint"}],class:["alert",t.isError?"alert-danger":"alert-success"]},[t._v(t._s(t.hintMsg))])},r=[],o={name:"HintMessage",data:function(){return{showHint:!1,showTime:1500}},props:["isError","hintMsg"],methods:{show:function(){var t=this;t.showHint=!0,setTimeout((function(){t.showHint=!1}),t.showTime)}}},n=o,l=a("2877"),i=Object(l["a"])(n,s,r,!1,null,"88f5cfde",null);e["a"]=i.exports},"335c":function(t,e,a){"use strict";a("b394")},5215:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main-container"},[a("div",{staticClass:"page-header"},[a("ol",{staticClass:"breadcrumb"},[a("li",{staticClass:"breadcrumb-item"},[a("a",{attrs:{href:"javascript: void(0);"},on:{click:t.changeTag}},[a("span",{class:[0===t.currentTag?"current-tag":""]},[t._v("添加测量计划")])])]),a("li",{staticClass:"breadcrumb-item"},[a("a",{attrs:{href:"javascript: void(0);"},on:{click:t.changeTag}},[a("span",{class:[1===t.currentTag?"current-tag":""]},[t._v("管理测量计划")])])])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:1===t.currentTag,expression:"currentTag === 1"}],staticClass:"row gutters"},[a("hint-message",{ref:"top_hint",attrs:{hintMsg:t.hint.message,isError:t.hint.isError}}),a("div",{staticClass:"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"},[a("div",{staticClass:"card"},[t._m(0),a("div",{staticClass:"card-body"},[a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table m-0"},[t._m(1),a("tbody",t._l(t.measurePlans,(function(e,s){return a("tr",{key:s},[a("td",[t._v(t._s(e.id))]),a("td",[t._v(t._s(e.warehouse.name))]),a("td",[t._v(t._s(e.storageCellId))]),a("td",[t._v(t._s(e.product.name))]),a("td",[t._v(t._s(e.batchSize))]),a("td",[t._v(t._s(e.batch))]),a("td",[a("div",{staticClass:"btn-group-sm"},[a("button",{staticClass:"btn btn-danger",on:{click:function(a){return t.deleteMeasurePlan(e.id,s)}}},[t._v("删除")])])])])})),0)])])])])])],1),a("div",{directives:[{name:"show",rawName:"v-show",value:0===t.currentTag,expression:"currentTag === 0"}],staticClass:"row gutters"},[a("div",{staticClass:"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"},[a("div",{staticClass:"card"},[t._m(2),a("div",{staticClass:"card-body"},[a("div",{staticClass:"row gutters"},[a("div",{staticClass:"col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"inputGroupSelect06"}},[t._v("仓库")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.measurePlanInfo.warehouseId,expression:"measurePlanInfo.warehouseId"}],staticClass:"custom-select",attrs:{id:"inputGroupSelect06"},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.measurePlanInfo,"warehouseId",e.target.multiple?a:a[0])},t.loadStorageCells]}},[a("option",{attrs:{value:"default"}},[t._v("选择仓库")]),t._l(t.warehouseAvailable,(function(e,s){return a("option",{key:s,domProps:{value:e.id}},[t._v(t._s(e.name))])}))],2)]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"inputGroupSelect06"}},[t._v("储位")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.measurePlanInfo.storageCellId,expression:"measurePlanInfo.storageCellId"}],staticClass:"custom-select",attrs:{id:"inputGroupSelect07"},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.measurePlanInfo,"storageCellId",e.target.multiple?a:a[0])},t.loadProduct]}},[a("option",{attrs:{value:"default"}},[t._v("选择储位")]),t._l(t.storageCells,(function(e,s){return a("option",{key:s,domProps:{value:e.id}},[t._v(t._s(e.id))])}))],2)])])]),a("div",{staticClass:"row gutters"},[a("div",{staticClass:"col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"inputGroupSelect06"}},[t._v("零件名称")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.measurePlanInfo.productId,expression:"measurePlanInfo.productId"}],staticClass:"custom-select",on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.measurePlanInfo,"productId",e.target.multiple?a:a[0])},t.loadParameters]}},[a("option",{attrs:{value:"default"}},[t._v("选择零件")]),t._l(t.products,(function(e,s){return a("option",{key:s,domProps:{value:e.id}},[t._v(t._s(e.name))])}))],2)])])]),a("div",{staticClass:"row gutters"},[a("div",{staticClass:"col-xl-4 col-lglg-4 col-md-4 col-sm-4 col-12"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"holder"}},[t._v("批容量")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.measurePlanInfo.batchSize,expression:"measurePlanInfo.batchSize"}],staticClass:"form-control",attrs:{type:"text",id:"holder",placeholder:"输入批容量"},domProps:{value:t.measurePlanInfo.batchSize},on:{input:function(e){e.target.composing||t.$set(t.measurePlanInfo,"batchSize",e.target.value)}}})])]),a("div",{staticClass:"col-xl-4 col-lglg-4 col-md-4 col-sm-4 col-12"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"passer"}},[t._v("批数")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.measurePlanInfo.batch,expression:"measurePlanInfo.batch"}],staticClass:"form-control",attrs:{type:"text",id:"passer",placeholder:"输入批数"},domProps:{value:t.measurePlanInfo.batch},on:{input:function(e){e.target.composing||t.$set(t.measurePlanInfo,"batch",e.target.value)}}})])])])])])]),a("div",{staticClass:"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"summary"}},[t._v("批注")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.measurePlanInfo.description,expression:"measurePlanInfo.description"}],staticClass:"form-control",attrs:{id:"summary",rows:"3"},domProps:{value:t.measurePlanInfo.description},on:{input:function(e){e.target.composing||t.$set(t.measurePlanInfo,"description",e.target.value)}}})])])])]),a("div",{staticClass:"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("hint-message",{ref:"hint",attrs:{hintMsg:t.hint.message,isError:t.hint.isError}}),a("button",{staticClass:"btn btn-primary mb-2",attrs:{type:"submit"},on:{click:t.submitMeasurePlan}},[t._v("提交")])],1)])])])])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-header"},[a("div",{staticClass:"title"},[t._v("测量计划列表")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("测量计划编号")]),a("th",[t._v("仓库")]),a("th",[t._v("储位")]),a("th",[t._v("零件")]),a("th",[t._v("批容量")]),a("th",[t._v("批数")]),a("th",[t._v("操作")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-header"},[a("div",{staticClass:"title"},[t._v("基本参数")])])}],o=(a("a434"),a("64dc")),n=a("0d6a"),l={name:"MeasureSchedule",components:{HintMessage:n["a"]},data:function(){return{warehouseAvailable:[],products:[],storageCells:[],measurePlanInfo:{batchSize:null,batch:null,productId:"default",warehouseId:"default",storageCellId:"default",description:""},hint:{message:"",isError:!1},currentTag:0,measurePlans:[]}},methods:{loadStorageCells:function(){var t=this;o["a"].getStorageCells(2,"all",this.measurePlanInfo.warehouseId,(function(e){return t.storageCells=e}))},loadProduct:function(){var t=this;o["a"].getAllProducts((function(e){return t.products=e}),(function(t){return console.log(t)}),(function(t){return console.log(t)}))},submitMeasurePlan:function(){var t=this;o["a"].submitMeasurePlan(this.measurePlanInfo,(function(){t.hint.message="保存成功!",t.hint.isError=!1,t.$refs.hint.show()}),(function(e){t.hint.message=e,t.hint.isError=!0,t.$refs.hint.show()}))},deleteMeasurePlan:function(t,e){var a=this;o["a"].deleteMeasurePlan(t,(function(){a.hint.message="删除成功！",a.hint.isError=!1,a.$refs.top_hint.show(),a.measurePlans.splice(e,1)}),(function(){a.hint.message="删除失败！！",a.hint.isError=!0,a.$refs.top_hint.show()}))},changeTag:function(){var t=this;0===this.currentTag?(this.currentTag=1,o["a"].getMeasurePlans((function(e){return t.measurePlans=e}),(function(t){return console.log(t)}))):this.currentTag=0}},mounted:function(){var t=this;o["a"].getWarehouseInfo((function(e){return t.warehouseAvailable=e}))}},i=l,c=(a("335c"),a("2877")),u=Object(c["a"])(i,s,r,!1,null,"51e0c586",null);e["default"]=u.exports},b394:function(t,e,a){}}]);
//# sourceMappingURL=chunk-3f89979c.515bb98c.js.map