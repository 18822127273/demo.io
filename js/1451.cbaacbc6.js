"use strict";(self["webpackChunkdemo"]=self["webpackChunkdemo"]||[]).push([[1451],{1451:function(e,r,a){a.r(r),a.d(r,{default:function(){return u}});var t=function(){var e=this,r=e._self._c;return r("div",{staticClass:"commadds"},[r("div",{staticClass:"commadd_centers"},[r("back-button"),r("div",{staticClass:"commadd_content"},[r("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"姓名",prop:"name"}},[r("el-input",{attrs:{width:"100px"},model:{value:e.ruleForm.name,callback:function(r){e.$set(e.ruleForm,"name",r)},expression:"ruleForm.name"}})],1),r("el-form-item",{attrs:{label:"曾用名",prop:"name_used_before"}},[r("el-input",{model:{value:e.ruleForm.name_used_before,callback:function(r){e.$set(e.ruleForm,"name_used_before",r)},expression:"ruleForm.name_used_before"}})],1),r("el-form-item",{attrs:{label:"身份证号",prop:"id_card"}},[r("el-input",{model:{value:e.ruleForm.id_card,callback:function(r){e.$set(e.ruleForm,"id_card",r)},expression:"ruleForm.id_card"}})],1),r("el-form-item",{attrs:{label:"标签",prop:"tags"}},[r("el-checkbox-group",{model:{value:e.ruleForm.tags,callback:function(r){e.$set(e.ruleForm,"tags",r)},expression:"ruleForm.tags"}},[r("el-checkbox",{attrs:{label:"社区矫正",name:"tags"}}),r("el-checkbox",{attrs:{label:"吸毒",name:"tags"}}),r("el-checkbox",{attrs:{label:"残疾人",name:"tags"}}),r("el-checkbox",{attrs:{label:"安置帮教",name:"tags"}}),r("el-checkbox",{attrs:{label:"矛盾冲突人员",name:"tags"}})],1)],1),r("el-form-item",{attrs:{label:"是否党员",prop:"is_party"}},[r("el-switch",{attrs:{"active-value":"1","inactive-value":"0"},model:{value:e.ruleForm.is_party,callback:function(r){e.$set(e.ruleForm,"is_party",r)},expression:"ruleForm.is_party"}})],1),r("el-form-item",{attrs:{label:"省",prop:"native_place_province_id"}},[r("el-select",{attrs:{placeholder:"请选择"},on:{change:function(r){return e.getdataone()}},model:{value:e.ruleForm.native_place_province_id,callback:function(r){e.$set(e.ruleForm,"native_place_province_id",r)},expression:"ruleForm.native_place_province_id"}},e._l(e.table,(function(e){return r("el-option",{key:e.id,attrs:{label:e.region_name,value:e.id}})})),1)],1),r("el-form-item",{attrs:{label:"市",prop:""}},[r("el-select",{attrs:{placeholder:"请选择"},on:{change:function(r){return e.getdatatwo()}},model:{value:e.value,callback:function(r){e.value=r},expression:"value"}},e._l(e.lasttable,(function(e){return r("el-option",{key:e.id,attrs:{label:e.region_name,value:e.id}})})),1)],1),r("el-form-item",{attrs:{label:"区",prop:"native_place_id"}},[r("el-select",{attrs:{placeholder:"请选择"},model:{value:e.ruleForm.native_place_id,callback:function(r){e.$set(e.ruleForm,"native_place_id",r)},expression:"ruleForm.native_place_id"}},e._l(e.finaltable,(function(e){return r("el-option",{key:e.id,attrs:{label:e.region_name,value:e.id}})})),1)],1),r("el-form-item",{attrs:{label:"行业",prop:"profession"}},[r("el-input",{model:{value:e.ruleForm.profession,callback:function(r){e.$set(e.ruleForm,"profession",r)},expression:"ruleForm.profession"}})],1),r("el-form-item",{attrs:{label:"身份证地址",prop:"id_card_address"}},[r("el-input",{model:{value:e.ruleForm.id_card_address,callback:function(r){e.$set(e.ruleForm,"id_card_address",r)},expression:"ruleForm.id_card_address"}})],1),r("el-form-item",{attrs:{label:"所在小区",prop:"residential_quarters_address\t"}},[r("el-input",{model:{value:e.ruleForm.residential_quarters_address,callback:function(r){e.$set(e.ruleForm,"residential_quarters_address",r)},expression:"ruleForm.residential_quarters_address\t"}})],1),r("el-form-item",{attrs:{label:"所在单位",prop:"company"}},[r("el-input",{model:{value:e.ruleForm.company,callback:function(r){e.$set(e.ruleForm,"company",r)},expression:"ruleForm.company"}})],1),r("el-form-item",{attrs:{label:"工作单位地址",prop:"company_address"}},[r("el-input",{model:{value:e.ruleForm.company_address,callback:function(r){e.$set(e.ruleForm,"company_address",r)},expression:"ruleForm.company_address"}})],1),r("el-form-item",{attrs:{label:"出生地址",prop:"birth_address"}},[r("el-input",{model:{value:e.ruleForm.birth_address,callback:function(r){e.$set(e.ruleForm,"birth_address",r)},expression:"ruleForm.birth_address"}})],1),r("el-form-item",{attrs:{label:"学历",prop:"education"}},[r("el-select",{attrs:{placeholder:"请选择"},model:{value:e.ruleForm.education,callback:function(r){e.$set(e.ruleForm,"education",r)},expression:"ruleForm.education"}},[r("el-option",{attrs:{label:"小学",value:"0"}}),r("el-option",{attrs:{label:"初中",value:"1"}}),r("el-option",{attrs:{label:"高中",value:"2"}}),r("el-option",{attrs:{label:"大学",value:"3"}}),r("el-option",{attrs:{label:"硕士研究生",value:"4"}}),r("el-option",{attrs:{label:"博士研究生",value:"5"}})],1)],1),r("el-form-item",{attrs:{label:"婚姻状况",prop:"marital_status"}},[r("el-select",{attrs:{placeholder:"政治面貌"},model:{value:e.ruleForm.marital_status,callback:function(r){e.$set(e.ruleForm,"marital_status",r)},expression:"ruleForm.marital_status"}},[r("el-option",{attrs:{label:"未婚",value:"0"}}),r("el-option",{attrs:{label:"已婚",value:"1"}})],1)],1),r("el-form-item",{attrs:{label:"宗教信仰",prop:"religion"}},[r("el-input",{model:{value:e.ruleForm.religion,callback:function(r){e.$set(e.ruleForm,"religion",r)},expression:"ruleForm.religion"}})],1),r("el-form-item",{attrs:{label:"是否常住人口",prop:"is_resident"}},[r("el-switch",{attrs:{"active-value":"1","inactive-value":"0"},model:{value:e.ruleForm.is_resident,callback:function(r){e.$set(e.ruleForm,"is_resident",r)},expression:"ruleForm.is_resident"}})],1),r("el-form-item",[r("el-button",{attrs:{plain:!0,type:"primary"},on:{click:function(r){return e.submitForm("ruleForm")}}},[e._v("立即创建")]),r("el-button",{on:{click:function(r){return e.resetForm("ruleForm")}}},[e._v("重置")])],1)],1)],1)],1)])},l=[],s=a(1502),o={data(){return{radio:1,ruleForm:{name:"",name_used_before:"",id_card:"",address:"",desc:"",tags:[],gender:"",is_party:!1,native_place_id:"",profession:"",id_card_address:"",native_place_province_id:"",residential_quarters_address:"",company:"",company_address:"",birth_address:"",education:"",marital_status:"",religion:"",is_resident:!1},value:"",table:[],lasttable:[],finaltable:[],rules:{name:[{required:!0,message:"请输入名字",trigger:"blur"}],id_card:[{required:!0,message:"请输入身份证号",trigger:"blur"},{min:18,max:18,message:"长度在 18个字符",trigger:"blur"}]}}},mounted(){this.getdata()},methods:{getdataone(){(0,s.KM)({parent_id:this.ruleForm.native_place_province_id}).then((e=>{this.value=[],this.ruleForm.native_place_id=[],this.lasttable=e}))},getdatatwo(){(0,s.KM)({parent_id:this.value}).then((e=>{this.finaltable=e}))},getdata(){(0,s.KM)({parent_id:1}).then((e=>{this.table=e}))},submitForm(e){const r=this.ruleForm,a=this.ruleForm.tags.toString();this.$refs[e].validate((e=>{if(!e)return!1;{(0,s.Ue)({access_token:this.$store.state.token,name:r.name,name_used_before:r.name_used_before,id_card:r.id_card,address:r.address,gender:r.gender,desc:r.desc,tags:a,is_party:r.is_party,native_place_province_id:r.native_place_province_id,native_place_id:r.native_place_id,profession:r.profession,id_card_address:r.id_card_address,residential_quarters_address:r.residential_quarters_address,company:r.company,company_address:r.company_address,birth_address:r.birth_address,education:r.education,marital_status:r.marital_status,religion:r.religion,is_resident:r.is_resident}).then((e=>{})),this.$message({message:"添加成功",type:"success"});let e=!1;this.$emit("changeMsg",e)}}))},resetForm(e){this.$refs[e].resetFields()}}},i=o,n=a(1001),d=(0,n.Z)(i,t,l,!1,null,null,null),u=d.exports}}]);
//# sourceMappingURL=1451.cbaacbc6.js.map