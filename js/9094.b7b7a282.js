"use strict";(self["webpackChunkdemo"]=self["webpackChunkdemo"]||[]).push([[9094],{9094:function(t,e,n){n.r(e),n.d(e,{default:function(){return f}});var r=function(){var t=this,e=t._self._c;return e("div",{staticStyle:{height:"750px"}},[e("el-button",{staticStyle:{"margin-left":"16px"},attrs:{type:"primary"},on:{click:function(e){t.drawer=!0}}},[t._v(" 修改 ")]),e("el-drawer",{attrs:{title:"制度修改",visible:t.drawer,"before-close":t.handleClose},on:{"update:visible":function(e){t.drawer=e}}},[e("el-form",{ref:"FormData",attrs:{model:t.FormData,"label-width":"80px"}},[e("el-form-item",{attrs:{label:"工作制度",prop:"profile"}},[e("el-input",{attrs:{autosize:{minRows:2,maxRows:10},type:"textarea"},model:{value:t.FormData.profile,callback:function(e){t.$set(t.FormData,"profile",e)},expression:"FormData.profile"}})],1),e("el-form-item",{attrs:{label:"人员制度",prop:"system"}},[e("el-input",{attrs:{autosize:{minRows:2,maxRows:10},type:"textarea"},model:{value:t.FormData.system,callback:function(e){t.$set(t.FormData,"system",e)},expression:"FormData.system"}})],1),e("span",{staticStyle:{color:"red","padding-left":"90px"}},[t._v("*每一条请以句号结尾")]),e("el-form-item",[e("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("修改")])],1)],1)],1),e("div",{staticClass:"block"},[e("el-timeline",[e("el-timeline-item",{attrs:{timestamp:t.lists.time,placement:"top"}},[e("strong",[t._v("社区工作制度")]),t._l(t.profilelist,(function(n,r){return e("div",[e("el-card",[t._v(" "+t._s(n)+" ")])],1)})),e("strong",[t._v("社区工作人员管理制度")]),t._l(t.systemlist,(function(n,r){return e("div",[e("el-card",[t._v(" "+t._s(n)+" ")])],1)}))],2)],1)],1)],1)},s=[],i=n(1502),o=n(5809),a={data(){return{drawer:!1,direction:"rtl",FormData:{profile:"",system:""},lists:[],profilelist:[],systemlist:[]}},mounted(){this.getList()},methods:{handleClose(t){this.$confirm("确认关闭？").then((e=>{t()})).catch((t=>{}))},onSubmit(){const t=this.FormData;(0,i.Bw)({access_token:this.$store.state.token,profile:t.profile,system:t.system}).then((t=>{this.$message.success("更新成功"),this.getList()}))},getList(){(0,i.Xi)({access_token:this.$store.state.token}).then((t=>{this.total=t.total,this.FormData=t,this.profilelist=t.profile.split("。"),this.systemlist=t.system.split("。"),this.lists.time=(0,o.Zs)(t.updated_at)}))}}},u=a,l=n(1001),c=(0,l.Z)(u,r,s,!1,null,null,null),f=c.exports},5809:function(t,e,n){n.d(e,{Hl:function(){return f},IT:function(){return l},J8:function(){return d},Kw:function(){return m},Ms:function(){return i},Q6:function(){return u},U_:function(){return r},WO:function(){return p},Wm:function(){return g},XE:function(){return c},Zs:function(){return h},eg:function(){return o},h7:function(){return s},hm:function(){return a}});n(7658);function r(t){return""==t?void 0:t}function s(t){return t.replace(/^(.{3})(?:\w+)(.{4})$/,"$1**$2")}function i(t){return 0==t?"女":"男"}function o(t){return 0==t?"否":"是"}function a(t){return 0==t?"自建房":1==t?"独立楼宇":2==t?"小区":void 0}function u(t){return 0==t?"公寓":1==t?"住宅":2==t?"商住两用":3==t?"商用":void 0}function l(t){return 0==t?"未婚":"已婚"}function c(t){return 0==t?"否":"是"}function f(t){return 0==t?"非党员":"党员"}function m(t){return 0==t?"否":"是"}function d(t){var e,n,r,s=0,i=t;if(!i)return s;var o=/(^\d{15}$)|(^\d{17}([0-9]|X)$)/;if(o.test(i)){if(15==i.length){var a=i.substring(6,12);e="19"+a.substring(0,2),n=a.substring(2,4),r=a.substring(4,6)}else 18==i.length&&(e=i.substring(6,10),n=i.substring(10,12),r=i.substring(12,14));var u=new Date,l=u.getMonth()+1,c=u.getDate();s=u.getFullYear()-e;return(l<n||l==n&&c<r)&&s--,s}return""}function p(t){var e=t;return parseInt(e.substr(16,1))%2==1?"男":"女"}function g(t){const e=s(t.tel),n=s(t.haoma),r={user:t.user,region:t.region,tel:e,haoma:n,address:t.address};return r}function h(t,e){let n=t.toString().length<13?new Date(1e3*t):new Date(t),r=n.getFullYear(),s=n.getMonth()+1,i=n.getDate(),o=n.getHours()<10?`0${n.getHours()}`:n.getHours(),a=n.getMinutes()<10?`0${n.getMinutes()}`:n.getMinutes(),u=n.getSeconds()<10?`0${n.getSeconds()}`:n.getSeconds();return e=e||"Y-M-D H:m:s",e=e.indexOf("Y")>-1?e.replace("Y",r):e,e=e.indexOf("M")>-1?e.replace("M",s):e,e=e.indexOf("D")>-1?e.replace("D",i):e,e=e.indexOf("H")>-1?e.replace("H",o):e,e=e.indexOf("h")>-1?e.replace("h",o>12?o-12:o):e,e=e.indexOf("m")>-1?e.replace("m",a):e,e=e.indexOf("s")>-1?e.replace("s",u):e,e}}}]);
//# sourceMappingURL=9094.b7b7a282.js.map