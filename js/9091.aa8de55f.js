"use strict";(self["webpackChunkdemo"]=self["webpackChunkdemo"]||[]).push([[9091],{9091:function(e,r,s){s.r(r),s.d(r,{default:function(){return p}});var t=function(){var e=this,r=e._self._c;return r("div",[r("back-button"),r("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,"status-icon":"",rules:e.rules,"label-width":"80px"}},[r("h3",{staticClass:"login-title"},[e._v("修改密码")]),r("el-form-item",{attrs:{label:"密码",prop:"pass"}},[r("el-input",{attrs:{autocomplete:"off",placeholder:"请输入旧密码"},model:{value:e.ruleForm.pass,callback:function(r){e.$set(e.ruleForm,"pass",r)},expression:"ruleForm.pass"}})],1),r("el-form-item",{attrs:{label:"新密码",prop:"newpassword"}},[r("el-input",{attrs:{autocomplete:"off",placeholder:"请确认新密码"},model:{value:e.ruleForm.newpassword,callback:function(r){e.$set(e.ruleForm,"newpassword",r)},expression:"ruleForm.newpassword"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(r){return e.submitForm("ruleForm")}}},[e._v("确认")]),r("el-button",{on:{click:function(r){return e.resetForm("ruleForm")}}},[e._v("重置")])],1)],1)],1)},o=[],l=s(1502),a=s(1684),u=s(1120),n={data(){var e=(e,r,s)=>{""===r?s(new Error("请输入密码")):(""!==this.ruleForm.checkPass&&this.$refs.ruleForm.validateField("checkPass"),s())},r=(e,r,s)=>{""===r?s(new Error("请再次输入密码")):r==this.ruleForm.pass?s(new Error("两次输入密码一致!")):s()};return{ruleForm:{pass:"",newpassword:""},rules:{pass:[{required:!0,validator:e,trigger:"blur"}],newpassword:[{required:!0,validator:r,trigger:"blur"}]}}},methods:{submitForm(e){const r=this.ruleForm;console.log(r,2354),this.$refs.ruleForm.validate((e=>{e&&(0,l.fZ)({access_token:this.$store.state.token,password:r.pass,new_password:r.newpassword}).then((e=>{console.log(e,123),this.$message.success("修改成功"),localStorage.removeItem("userToken"),a.Z.commit("LOGIN_OUT",null),setTimeout((()=>{u.Z.replace({path:"/login",query:{redirect:u.Z.currentRoute.fullPath}})}),1e3)}))}))},resetForm(e){this.$refs[e].resetFields()}}},i=n,m=s(1001),c=(0,m.Z)(i,t,o,!1,null,null,null),p=c.exports}}]);
//# sourceMappingURL=9091.aa8de55f.js.map