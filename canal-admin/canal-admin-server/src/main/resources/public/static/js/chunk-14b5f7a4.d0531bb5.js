(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-14b5f7a4"],{"11e9":function(t,e,n){var r=n("52a7"),a=n("4630"),i=n("6821"),o=n("6a99"),l=n("69a8"),s=n("c69a"),c=Object.getOwnPropertyDescriptor;e.f=n("9e1e")?c:function(t,e){if(t=i(t),e=o(e,!0),s)try{return c(t,e)}catch(n){}if(l(t,e))return a(!r.f.call(t,e),t[e])}},"1ca3":function(t,e,n){"use strict";var r=n("c002"),a=n.n(r);a.a},"333d":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pagination-container",class:{hidden:t.hidden}},[n("el-pagination",t._b({attrs:{background:t.background,"current-page":t.currentPage,"page-size":t.pageSize,layout:t.layout,"page-sizes":t.pageSizes,total:t.total},on:{"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e},"update:pageSize":function(e){t.pageSize=e},"update:page-size":function(e){t.pageSize=e},"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}},"el-pagination",t.$attrs,!1))],1)},a=[];n("c5f6");Math.easeInOutQuad=function(t,e,n,r){return t/=r/2,t<1?n/2*t*t+e:(t--,-n/2*(t*(t-2)-1)+e)};var i=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();function o(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}function l(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function s(t,e,n){var r=l(),a=t-r,s=20,c=0;e="undefined"===typeof e?500:e;var u=function t(){c+=s;var l=Math.easeInOutQuad(c,r,a,e);o(l),c<e?i(t):n&&"function"===typeof n&&n()};u()}var c={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(t){this.$emit("update:page",t)}},pageSize:{get:function(){return this.limit},set:function(t){this.$emit("update:limit",t)}}},methods:{handleSizeChange:function(t){this.$emit("pagination",{page:this.currentPage,limit:t}),this.autoScroll&&s(0,800)},handleCurrentChange:function(t){this.$emit("pagination",{page:t,limit:this.pageSize}),this.autoScroll&&s(0,800)}}},u=c,d=(n("1ca3"),n("2877")),f=Object(d["a"])(u,r,a,!1,null,"cebf2f0c",null);e["a"]=f.exports},"5dbc":function(t,e,n){var r=n("d3f4"),a=n("8b97").set;t.exports=function(t,e,n){var i,o=e.constructor;return o!==n&&"function"==typeof o&&(i=o.prototype)!==n.prototype&&r(i)&&a&&a(t,i),t}},"8b97":function(t,e,n){var r=n("d3f4"),a=n("cb7c"),i=function(t,e){if(a(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{r=n("9b43")(Function.call,n("11e9").f(Object.prototype,"__proto__").set,2),r(t,[]),e=!(t instanceof Array)}catch(a){e=!0}return function(t,n){return i(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:i}},9093:function(t,e,n){var r=n("ce10"),a=n("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,a)}},"9f66":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("div",{staticClass:"filter-container"},[n("el-select",{staticClass:"filter-item",attrs:{placeholder:"所属集群"},model:{value:t.listQuery.clusterId,callback:function(e){t.$set(t.listQuery,"clusterId",e)},expression:"listQuery.clusterId"}},[n("el-option",{key:"",attrs:{label:"所属集群",value:""}}),t._v(" "),n("el-option",{key:"-1",attrs:{label:"单机",value:"-1"}}),t._v(" "),t._l(t.canalClusters,function(t){return n("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})],2),t._v(" "),n("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"Server IP"},model:{value:t.listQuery.ip,callback:function(e){t.$set(t.listQuery,"ip",e)},expression:"listQuery.ip"}}),t._v(" "),n("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search",plain:""},on:{click:function(e){return t.queryData()}}},[t._v("查询")]),t._v(" "),n("el-button",{staticClass:"filter-item",attrs:{type:"primary"},on:{click:function(e){return t.handleCreate()}}},[t._v("新建Server")]),t._v(" "),n("el-button",{staticClass:"filter-item",attrs:{type:"info"},on:{click:function(e){return t.fetchData()}}},[t._v("刷新列表")])],1),t._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{data:t.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{label:"所属集群","min-width":"200",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[null!==e.row.canalCluster?n("span",[t._v("\n          "+t._s(e.row.canalCluster.name)+"\n        ")]):n("span",[t._v("\n          -\n        ")])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"Server 名称","min-width":"200",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.name)+"\n      ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"Server IP","min-width":"200",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.ip))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"admin 端口","min-width":"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.adminPort)+"\n      ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"tcp 端口","min-width":"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.tcpPort)+"\n      ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"metric 端口","min-width":"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.metricPort)+"\n      ")]}}])}),t._v(" "),n("el-table-column",{attrs:{"class-name":"status-col",label:"状态","min-width":"150",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-tag",{attrs:{type:t._f("statusFilter")(e.row.status)}},[t._v(t._s(t._f("statusLabel")(e.row.status)))])]}}])}),t._v(" "),n("el-table-column",{attrs:{align:"center",prop:"created_at",label:"操作","min-width":"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-dropdown",{attrs:{trigger:"click"}},[n("el-button",{attrs:{type:"primary",size:"mini"}},[t._v("\n            操作"),n("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),t._v(" "),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",{nativeOn:{click:function(n){return t.handleConfig(e.row)}}},[t._v("配置")]),t._v(" "),n("el-dropdown-item",{nativeOn:{click:function(n){return t.handleUpdate(e.row)}}},[t._v("修改")]),t._v(" "),n("el-dropdown-item",{nativeOn:{click:function(n){return t.handleDelete(e.row)}}},[t._v("删除")]),t._v(" "),n("el-dropdown-item",{nativeOn:{click:function(n){return t.handleStart(e.row)}}},[t._v("启动")]),t._v(" "),n("el-dropdown-item",{nativeOn:{click:function(n){return t.handleStop(e.row)}}},[t._v("停止")]),t._v(" "),n("el-dropdown-item",{nativeOn:{click:function(n){return t.handleInstances(e.row)}}},[t._v("实例")]),t._v(" "),n("el-dropdown-item",{nativeOn:{click:function(n){return t.handleLog(e.row)}}},[t._v("日志")])],1)],1)]}}])})],1),t._v(" "),n("pagination",{directives:[{name:"show",rawName:"v-show",value:t.count>0,expression:"count>0"}],attrs:{total:t.count,page:t.listQuery.page,limit:t.listQuery.size},on:{"update:page":function(e){return t.$set(t.listQuery,"page",e)},"update:limit":function(e){return t.$set(t.listQuery,"size",e)},pagination:function(e){return t.fetchData()}}}),t._v(" "),n("el-dialog",{attrs:{visible:t.dialogFormVisible,title:t.textMap[t.dialogStatus],width:"600px"},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[n("el-form",{ref:"dataForm",staticStyle:{width:"400px","margin-left":"30px"},attrs:{rules:t.rules,model:t.nodeModel,"label-position":"left","label-width":"120px"}},[n("el-form-item",{attrs:{label:"所属集群",prop:"clusterId"}},["create"===t.dialogStatus?n("el-select",{attrs:{placeholder:"选择所属集群"},model:{value:t.nodeModel.clusterId,callback:function(e){t.$set(t.nodeModel,"clusterId",e)},expression:"nodeModel.clusterId"}},[n("el-option",{key:"",attrs:{label:"单机",value:""}}),t._v(" "),t._l(t.canalClusters,function(t){return n("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})],2):n("el-select",{attrs:{placeholder:"选择所属集群",disabled:"disabled"},model:{value:t.nodeModel.clusterId,callback:function(e){t.$set(t.nodeModel,"clusterId",e)},expression:"nodeModel.clusterId"}},[n("el-option",{key:"",attrs:{label:"单机",value:""}}),t._v(" "),t._l(t.canalClusters,function(t){return n("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})],2)],1),t._v(" "),n("el-form-item",{attrs:{label:"Server 名称",prop:"name"}},[n("el-input",{model:{value:t.nodeModel.name,callback:function(e){t.$set(t.nodeModel,"name",e)},expression:"nodeModel.name"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"Server IP",prop:"ip"}},[n("el-input",{model:{value:t.nodeModel.ip,callback:function(e){t.$set(t.nodeModel,"ip",e)},expression:"nodeModel.ip"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"admin 端口",prop:"adminPort"}},[n("el-input",{attrs:{placeholder:"11110",type:"number"},model:{value:t.nodeModel.adminPort,callback:function(e){t.$set(t.nodeModel,"adminPort",e)},expression:"nodeModel.adminPort"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"tcp 端口",prop:"tcpPort"}},[n("el-input",{attrs:{placeholder:"11111",type:"number"},model:{value:t.nodeModel.tcpPort,callback:function(e){t.$set(t.nodeModel,"tcpPort",e)},expression:"nodeModel.tcpPort"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"metric 端口",prop:"metricPort"}},[n("el-input",{attrs:{placeholder:"11112",type:"number"},model:{value:t.nodeModel.metricPort,callback:function(e){t.$set(t.nodeModel,"metricPort",e)},expression:"nodeModel.metricPort"}})],1)],1),t._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取消")]),t._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.dataOperation()}}},[t._v("确定")])],1)],1),t._v(" "),n("el-dialog",{attrs:{visible:t.dialogInstances,title:"实例列表",width:"800px"},on:{"update:visible":function(e){t.dialogInstances=e}}},[n("div",{staticClass:"filter-container"},[n("el-button",{staticClass:"filter-item",attrs:{type:"info"},on:{click:function(e){return t.activeInstances()}}},[t._v("刷新列表")])],1),t._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading2,expression:"listLoading2"}],attrs:{data:t.instanceList,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{label:"Instance 名称","min-width":"200",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n          "+t._s(e.row.name)+"\n        ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"状态","min-width":"200",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-tag",{attrs:{type:t._f("statusFilter")(e.row.runningStatus)}},[t._v(t._s(t._f("statusLabel")(e.row.runningStatus)))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"操作","min-width":"200",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-dropdown",{attrs:{trigger:"click"}},[n("el-button",{attrs:{type:"primary",size:"mini"}},[t._v("\n              操作"),n("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),t._v(" "),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",{nativeOn:{click:function(n){return t.handleStartInstance(e.row)}}},[t._v("启动")]),t._v(" "),n("el-dropdown-item",{nativeOn:{click:function(n){return t.handleStopInstance(e.row)}}},[t._v("停止")])],1)],1)]}}])})],1)],1)],1)},a=[],i=(n("c5f6"),n("c6ed")),o=n("f546"),l=n("d631"),s=n("333d"),c={components:{Pagination:s["a"]},filters:{statusFilter:function(t){var e={1:"success",0:"gray","-1":"danger"};return e[t]},statusLabel:function(t){var e={1:"启动",0:"停止","-1":"断开"};return e[t]}},data:function(){return{list:null,instanceList:null,listLoading:!0,listLoading2:!0,serverIdTmp:null,canalClusters:[],count:0,listQuery:{name:"",ip:"",clusterId:null,page:1,size:20},dialogFormVisible:!1,dialogInstances:!1,textMap:{create:"新建Server信息",update:"修改Server信息"},nodeModel:{id:void 0,clusterId:null,name:null,ip:null,adminPort:11110,tcpPort:11111,metricPort:11112},rules:{name:[{required:!0,message:"Server 名称不能为空",trigger:"change"}],ip:[{required:!0,message:"Server IP不能为空",trigger:"change"}],adminPort:[{required:!0,message:"Server admin端口不能为空",trigger:"change"}]},dialogStatus:"create"}},created:function(){var t=this;if(Object(l["c"])().then(function(e){t.canalClusters=e.data}),this.$route.query.clusterId)try{this.listQuery.clusterId=Number(this.$route.query.clusterId)}catch(e){console.log(e)}this.fetchData()},methods:{fetchData:function(){var t=this;this.listLoading=!0,Object(i["c"])(this.listQuery).then(function(e){t.list=e.data.items,t.count=e.data.count}).finally(function(){t.listLoading=!1})},queryData:function(){this.listQuery.page=1,this.fetchData()},resetModel:function(){this.nodeModel={id:void 0,clusterId:null,name:null,ip:null,adminPort:null,tcpPort:null,metricPort:null}},handleCreate:function(){var t=this;this.resetModel(),this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick(function(){t.$refs["dataForm"].clearValidate()})},handleInstances:function(t){this.serverIdTmp=t.id,this.activeInstances()},activeInstances:function(){var t=this;this.listLoading2=!0,this.dialogInstances=!0,Object(o["d"])(this.serverIdTmp).then(function(e){t.instanceList=e.data}).finally(function(){t.listLoading2=!1})},dataOperation:function(){var t=this;this.$refs["dataForm"].validate(function(e){e&&("create"===t.dialogStatus&&Object(i["a"])(t.nodeModel).then(function(e){t.operationRes(e)}),"update"===t.dialogStatus&&Object(i["g"])(t.nodeModel).then(function(e){t.operationRes(e)}))})},operationRes:function(t){"success"===t.data?(this.fetchData(),this.dialogFormVisible=!1,this.$message({message:this.textMap[this.dialogStatus]+"成功",type:"success"})):this.$message({message:this.textMap[this.dialogStatus]+"失败",type:"error"})},handleConfig:function(t){this.$router.push("/canalServer/nodeServer/config?serverId="+t.id)},handleUpdate:function(t){var e=this;this.resetModel(),this.nodeModel=Object.assign({},t),this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick(function(){e.$refs["dataForm"].clearValidate()})},handleDelete:function(t){var e=this;this.$confirm("删除Server信息会导致节点服务停止","确定删除Server信息",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(i["b"])(t.id).then(function(t){"success"===t.data?(e.fetchData(),e.$message({message:"删除Server信息成功",type:"success"})):e.$message({message:"删除Server信息失败",type:"error"})})})},handleStart:function(t){var e=this;"0"===t.status?this.$confirm("启动Server服务","确定启动Server服务",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(i["e"])(t.id).then(function(t){t.data?(e.fetchData(),e.$message({message:"启动成功",type:"success"})):e.$message({message:"启动Server服务出现异常",type:"error"})})}):this.$message({message:"当前Server不是停止状态，无法启动",type:"error"})},handleStop:function(t){var e=this;"1"===t.status?this.$confirm("停止 Server 服务","确定停止Server服务",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(i["f"])(t.id).then(function(t){t.data?(e.fetchData(),e.$message({message:"停止成功",type:"success"})):e.$message({message:"停止Server服务出现异常",type:"error"})})}):this.$message({message:"当前Server不是启动状态，无法停止",type:"error"})},handleLog:function(t){this.$router.push("nodeServer/log?id="+t.id)},handleStartInstance:function(t){var e=this;"0"===t.runningStatus?this.$confirm("启动Instance服务","确定启动Instance服务",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(o["h"])(t.id,e.serverIdTmp).then(function(t){t.data?(e.activeInstances(),e.$message({message:"启动成功, 稍后请刷新列表查看状态",type:"success"})):e.$message({message:"启动Instance服务出现异常",type:"error"})})}):this.$message({message:"当前Instance不是停止状态，无法启动",type:"error"})},handleStopInstance:function(t){var e=this;"1"===t.runningStatus?this.$confirm("集群模式下停止实例其它主机将会抢占执行该实例","停止 Instance 服务",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(o["i"])(t.id,e.serverIdTmp).then(function(t){t.data?(e.activeInstances(),e.$message({message:"停止成功, 稍后请刷新列表查看状态",type:"success"})):e.$message({message:"停止Instance服务出现异常",type:"error"})})}):this.$message({message:"当前Instance不是运行状态，无法停止",type:"error"})}}},u=c,d=n("2877"),f=Object(d["a"])(u,r,a,!1,null,null,null);e["default"]=f.exports},aa77:function(t,e,n){var r=n("5ca1"),a=n("be13"),i=n("79e5"),o=n("fdef"),l="["+o+"]",s="​",c=RegExp("^"+l+l+"*"),u=RegExp(l+l+"*$"),d=function(t,e,n){var a={},l=i(function(){return!!o[t]()||s[t]()!=s}),c=a[t]=l?e(f):o[t];n&&(a[n]=c),r(r.P+r.F*l,"String",a)},f=d.trim=function(t,e){return t=String(a(t)),1&e&&(t=t.replace(c,"")),2&e&&(t=t.replace(u,"")),t};t.exports=d},c002:function(t,e,n){},c5f6:function(t,e,n){"use strict";var r=n("7726"),a=n("69a8"),i=n("2d95"),o=n("5dbc"),l=n("6a99"),s=n("79e5"),c=n("9093").f,u=n("11e9").f,d=n("86cc").f,f=n("aa77").trim,p="Number",m=r[p],g=m,h=m.prototype,v=i(n("2aeb")(h))==p,b="trim"in String.prototype,_=function(t){var e=l(t,!1);if("string"==typeof e&&e.length>2){e=b?e.trim():f(e,3);var n,r,a,i=e.charCodeAt(0);if(43===i||45===i){if(n=e.charCodeAt(2),88===n||120===n)return NaN}else if(48===i){switch(e.charCodeAt(1)){case 66:case 98:r=2,a=49;break;case 79:case 111:r=8,a=55;break;default:return+e}for(var o,s=e.slice(2),c=0,u=s.length;c<u;c++)if(o=s.charCodeAt(c),o<48||o>a)return NaN;return parseInt(s,r)}}return+e};if(!m(" 0o1")||!m("0b1")||m("+0x1")){m=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof m&&(v?s(function(){h.valueOf.call(n)}):i(n)!=p)?o(new g(_(e)),n,m):_(e)};for(var y,w=n("9e1e")?c(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),S=0;w.length>S;S++)a(g,y=w[S])&&!a(m,y)&&d(m,y,u(g,y));m.prototype=h,h.constructor=m,n("2aba")(r,p,m)}},c6ed:function(t,e,n){"use strict";n.d(e,"c",function(){return a}),n.d(e,"a",function(){return i}),n.d(e,"g",function(){return o}),n.d(e,"b",function(){return l}),n.d(e,"e",function(){return s}),n.d(e,"f",function(){return c}),n.d(e,"d",function(){return u});var r=n("b775");function a(t){return Object(r["a"])({url:"/nodeServers",method:"get",params:t})}function i(t){return Object(r["a"])({url:"/nodeServer",method:"post",data:t})}function o(t){return Object(r["a"])({url:"/nodeServer",method:"put",data:t})}function l(t){return Object(r["a"])({url:"/nodeServer/"+t,method:"delete"})}function s(t){return Object(r["a"])({url:"/nodeServer/start/"+t,method:"put"})}function c(t){return Object(r["a"])({url:"/nodeServer/stop/"+t,method:"put"})}function u(t){return Object(r["a"])({url:"/nodeServer/log/"+t,method:"get"})}},d631:function(t,e,n){"use strict";n.d(e,"c",function(){return a}),n.d(e,"a",function(){return i}),n.d(e,"e",function(){return o}),n.d(e,"b",function(){return l}),n.d(e,"d",function(){return s});var r=n("b775");function a(t){return Object(r["a"])({url:"/canal/clusters",method:"get",params:t})}function i(t){return Object(r["a"])({url:"/canal/cluster",method:"post",data:t})}function o(t){return Object(r["a"])({url:"/canal/cluster",method:"put",data:t})}function l(t){return Object(r["a"])({url:"/canal/cluster/"+t,method:"delete"})}function s(){return Object(r["a"])({url:"/canal/clustersAndServers",method:"get"})}},f546:function(t,e,n){"use strict";n.d(e,"e",function(){return a}),n.d(e,"b",function(){return i}),n.d(e,"j",function(){return o}),n.d(e,"a",function(){return l}),n.d(e,"c",function(){return s}),n.d(e,"h",function(){return c}),n.d(e,"i",function(){return u}),n.d(e,"f",function(){return d}),n.d(e,"g",function(){return f}),n.d(e,"d",function(){return p});var r=n("b775");function a(t){return Object(r["a"])({url:"/canal/instances",method:"get",params:t})}function i(t){return Object(r["a"])({url:"/canal/instance/"+t,method:"get"})}function o(t){return Object(r["a"])({url:"/canal/instance",method:"put",data:t})}function l(t){return Object(r["a"])({url:"/canal/instance",method:"post",data:t})}function s(t){return Object(r["a"])({url:"/canal/instance/"+t,method:"delete"})}function c(t,e){return Object(r["a"])({url:"/canal/instance/start/"+t+"/"+e,method:"put"})}function u(t,e){return Object(r["a"])({url:"/canal/instance/stop/"+t+"/"+e,method:"put"})}function d(t,e){return Object(r["a"])({url:"/canal/instance/log/"+t+"/"+e,method:"get"})}function f(t,e){return Object(r["a"])({url:"/canal/instance/status/"+t+"?option="+e,method:"put"})}function p(t){return Object(r["a"])({url:"/canal/active/instances/"+t,method:"get"})}},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);