(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d212c60"],{aa9c:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"main-container"},[t._m(0),e("div",{staticClass:"row gutters"},[e("div",{staticClass:"col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12"},[e("div",{staticClass:"card h-100"},[e("div",{staticClass:"card-body"},[e("div",{staticClass:"account-settings"},[e("UserDetail"),t._m(1)],1)])])]),e("div",{staticClass:"col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12"},[e("div",{staticClass:"card h-100"},[e("AccountForm")],1)])])])},r=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"page-header"},[e("ol",{staticClass:"breadcrumb"},[e("li",{staticClass:"breadcrumb-item"},[t._v("账户设置")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"about"},[e("h5",[t._v("About")]),e("p",[t._v("用户")])])}],i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"user-profile"},[e("div",{staticClass:"user-avatar"},[e("img",{attrs:{src:t.user.avatar}})]),e("h5",{staticClass:"user-name"},[t._v(t._s(t.user.username))]),e("h6",{staticClass:"user-email"},[t._v(t._s(t.user.email))])])},l=[],o={name:"UserDetail",computed:{user:function(){return this.$store.getters["user/currentUser"]}}},n=o,c=e("2877"),u=Object(c["a"])(n,i,l,!1,null,"64892f94",null),d=u.exports,m=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"card-body"},[e("div",{staticClass:"row gutters"},[t._m(0),e("div",{staticClass:"col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"fullName"}},[t._v("全名")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.userOnSetting.fullname,expression:"userOnSetting.fullname"}],staticClass:"form-control",attrs:{type:"text",id:"fullName",placeholder:"输入全名"},domProps:{value:t.userOnSetting.fullname},on:{input:function(s){s.target.composing||t.$set(t.userOnSetting,"fullname",s.target.value)}}})])]),e("div",{staticClass:"col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"eMail"}},[t._v("Email")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.userOnSetting.email,expression:"userOnSetting.email"}],staticClass:"form-control",attrs:{type:"email",id:"eMail",placeholder:"输入电子邮件"},domProps:{value:t.userOnSetting.email},on:{input:function(s){s.target.composing||t.$set(t.userOnSetting,"email",s.target.value)}}})])]),e("div",{staticClass:"col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"phone"}},[t._v("电话")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.userOnSetting.phone,expression:"userOnSetting.phone"}],staticClass:"form-control",attrs:{type:"text",id:"phone",placeholder:"输入电话号码"},domProps:{value:t.userOnSetting.phone},on:{input:function(s){s.target.composing||t.$set(t.userOnSetting,"phone",s.target.value)}}})])]),e("div",{staticClass:"col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"website"}},[t._v("工号")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.userOnSetting.workId,expression:"userOnSetting.workId"}],staticClass:"form-control",attrs:{type:"url",id:"website",placeholder:"输入工号"},domProps:{value:t.userOnSetting.workId},on:{input:function(s){s.target.composing||t.$set(t.userOnSetting,"workId",s.target.value)}}})])])]),e("div",{staticClass:"row gutters"},[e("div",{staticClass:"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"},[e("div",{staticClass:"text-right"},[e("button",{staticClass:"btn btn-secondary",attrs:{type:"button",id:"reset",name:"submit"},on:{click:t.reset}},[t._v("还原")]),t._v(" "),e("button",{staticClass:"btn btn-primary",attrs:{type:"button",id:"update",name:"submit"},on:{click:t.update}},[t._v("更新")])])])]),e("div",{staticClass:"row gutters"},[t._m(1),e("div",{staticClass:"col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12"},[e("div",{staticClass:"form-group"},[e("label",[t._v("原密码")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.rawPwd,expression:"rawPwd"}],staticClass:"form-control",attrs:{type:"password"},domProps:{value:t.rawPwd},on:{input:function(s){s.target.composing||(t.rawPwd=s.target.value)}}})])]),e("div",{staticClass:"col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12"},[e("div",{staticClass:"form-group"},[e("label",[t._v("新密码")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.newPwd,expression:"newPwd"}],staticClass:"form-control",attrs:{type:"password"},domProps:{value:t.newPwd},on:{input:function(s){s.target.composing||(t.newPwd=s.target.value)}}})])])]),e("div",{staticClass:"row gutters"},[e("div",{staticClass:"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"},[e("div",{staticClass:"text-right"},[e("button",{staticClass:"btn btn-primary",attrs:{type:"button",name:"submit"},on:{click:t.modifyPwd}},[t._v("提交")])])])]),e("HintMessage",{ref:"hint",attrs:{isError:t.hintMsg.isError,hintMsg:t.hintMsg.text}})],1)},v=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"},[e("h6",{staticClass:"mb-2 text-primary"},[t._v("个人信息")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"},[e("h6",{staticClass:"mt-3 mb-2 text-primary"},[t._v("修改密码")])])}],g=e("0d6a"),p=e("279c"),h=e.n(p),f={name:"AccountForm",components:{HintMessage:g["a"]},data:function(){return{userOnSetting:JSON.parse(JSON.stringify(this.$store.getters["user/currentUser"])),hintMsg:{isError:!1,text:""},rawPwd:"",newPwd:""}},computed:{user:function(){return this.$store.getters["user/currentUser"]}},methods:{reset:function(){this.userOnSetting=JSON.parse(JSON.stringify(this.user))},update:function(){var t=this;this.$store.dispatch("user/updateUserInfo",this.userOnSetting).then((function(){t.userOnSetting=JSON.parse(JSON.stringify(t.user)),t.hintMsg.isError=!1,t.hintMsg.text="修改成功！",t.$refs.hint.show()})).catch((function(s){t.hintMsg.isError=!0,t.hintMsg.text=s,t.$refs.hint.show()}))},modifyPwd:function(){var t=this,s=h.a.genSaltSync(10),e=h.a.hashSync(this.rawPwd,s),a=h.a.hashSync(this.newPwd,s);this.$store.dispatch("user/modifyPwd",{rawPwdHash:e,newPwdHash:a}).then((function(){t.$store.dispatch("user/logout"),t.$router.push("/Login")})).catch((function(s){t.hintMsg.isError=!0,t.hintMsg.text=s,t.$refs.error.show()}))}}},w=f,C=Object(c["a"])(w,m,v,!1,null,"1c68f275",null),b=C.exports,_={name:"AccountSettings",components:{AccountForm:b,UserDetail:d}},x=_,S=Object(c["a"])(x,a,r,!1,null,"1f60b252",null);s["default"]=S.exports}}]);
//# sourceMappingURL=chunk-2d212c60.3ead8a92.js.map