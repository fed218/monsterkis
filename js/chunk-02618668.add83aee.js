(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-02618668"],{"08dc":function(t,a,i){t.exports=i.p+"img/G_18.897a0d6b.png"},"0ce1":function(t,a,i){t.exports=i.p+"img/G_12.e55ea658.png"},3334:function(t,a,i){t.exports=i.p+"img/G_0.73cb75ad.png"},"3e51":function(t,a,i){"use strict";i.r(a);var s=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("nav",{staticClass:"bg-info",attrs:{"aria-label":"breadcrumb"}},[s("div",{staticClass:"container"},[s("ol",{staticClass:"breadcrumb"},[s("router-link",{staticClass:"breadcrumb-item",attrs:{to:"/"}},[t._v("首頁")]),s("li",{staticClass:"breadcrumb-item active"},[t._v("時刻表查詢")])],1)])]),s("section",{staticClass:"container my-5"},[s("div",{staticClass:"form-inline mb-4"},[s("div",{staticClass:"form-group ml-auto"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.filter,expression:"filter"}],staticClass:"form-control mr-2",on:{change:function(a){var i=Array.prototype.filter.call(a.target.options,function(t){return t.selected}).map(function(t){var a="_value"in t?t._value:t.value;return a});t.filter=a.target.multiple?i:i[0]}}},[s("option",{attrs:{value:"",disabled:""}},[t._v("------ 快速選單 ------")]),t._l(t.titleArray,function(a){return s("option",{key:a,domProps:{value:a}},[t._v(t._s(a))])}),s("option",{attrs:{value:"",disabled:""}},[t._v("-----------------------")]),s("option",{attrs:{value:""}},[t._v("All Movies")])],2)])]),s("h2",{staticClass:"text-primary title-time"},[t._v("時刻表查詢")]),t._l(t.filterArray,function(a){return s("div",{key:a.id,staticClass:"row mt-4"},[s("div",{staticClass:"col-md-4"},[s("div",{staticClass:"card border-0 text-center"},[s("div",{staticClass:"card-body"},[s("a",{attrs:{href:"#"}},[s("img",{staticClass:"w-75 img-fluid img-shadow",attrs:{src:a.imageUrl},on:{click:function(i){return i.preventDefault(),t.goMovie(a.id)}}})]),s("ul",{staticClass:"list-group"},[s("li",{staticClass:"list-group-item border-0 pl-0 mt-3"},[s("a",{attrs:{href:"#"},on:{click:function(i){return i.preventDefault(),t.goMovie(a.id)}}},[s("h5",{staticClass:"card-title text-primary"},[t._v(t._s(a.title))])])]),s("li",{staticClass:"list-group-item border-0 pl-0"},[s("span",[t._v("上映日期:  ")]),t._v("\n                "+t._s(a.released)+"\n              ")]),s("li",{staticClass:"list-group-item border-0 pl-0"},[s("span",[t._v("片長:  ")]),t._v("\n                "+t._s(a.length)+" 分\n              ")]),s("li",{staticClass:"list-group-item border-0 pl-0"},[s("span",[t._v("分級:  ")]),"普遍級"===a.grading?s("img",{staticStyle:{weight:"35px",height:"35px"},attrs:{src:i("3334")}}):t._e(),"保護級"===a.grading?s("img",{staticStyle:{weight:"35px",height:"35px"},attrs:{src:i("c4e0")}}):t._e(),"輔12級"===a.grading?s("img",{staticStyle:{weight:"35px",height:"35px"},attrs:{src:i("0ce1")}}):t._e(),"輔15級"===a.grading?s("img",{staticStyle:{weight:"35px",height:"35px"},attrs:{src:i("7dcc")}}):t._e(),"輔18級"===a.grading?s("img",{staticStyle:{weight:"35px",height:"35px"},attrs:{src:i("08dc")}}):t._e()])])])])]),s("div",{staticClass:"col-md-8 mt-3 mb-5"},[s("div",{staticClass:"pl-3 py-2 mb-3 bg-primary text-light"},[t._v("1廳 :  "+t._s(a.title))]),s("ul",{staticClass:"nav nav-tabs mb-3",attrs:{id:"tabs-tab",role:"tablist"}},[s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-item nav-link active",attrs:{id:"tabs-home-tab","data-toggle":"tab",href:"#today"+a.id}},[t._v(t._s(t.today))])]),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{id:"tabs-profile-tab","data-toggle":"tab",href:"#tomorrow"+a.id}},[t._v(t._s(t.tomorrow))])]),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{id:"tabs-profile-tab","data-toggle":"tab",href:"#date3"+a.id}},[t._v(t._s(t.date3))])])]),s("div",{staticClass:"tab-content mb-5",attrs:{id:"tabs-tabContent"}},[s("div",{staticClass:"tab-pane fade show active",attrs:{id:"today"+a.id}},t._l(a.eventime,function(a){return s("span",{key:a,staticClass:"px-3 border-right"},[t._v(t._s(a))])}),0),s("div",{staticClass:"tab-pane fade",attrs:{id:"tomorrow"+a.id}},t._l(a.oddtime,function(a){return s("span",{key:a,staticClass:"px-3 border-right"},[t._v(t._s(a))])}),0),s("div",{staticClass:"tab-pane fade",attrs:{id:"date3"+a.id}},t._l(a.eventime,function(a){return s("span",{key:a,staticClass:"px-3 border-right"},[t._v("\n              "+t._s(a)+"\n            ")])}),0)]),s("div",{staticClass:"pl-3 py-2 mb-3 bg-primary text-light"},[t._v("2廳 :  "+t._s(a.title))]),s("ul",{staticClass:"nav nav-tabs mb-3",attrs:{id:"tabs-tab",role:"tablist"}},[s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-item nav-link active",attrs:{id:"tabs-home-tab","data-toggle":"tab",href:"#today"+a.id+"2"}},[t._v(t._s(t.today))])]),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{id:"tabs-profile-tab","data-toggle":"tab",href:"#tomorrow"+a.id+"2"}},[t._v(t._s(t.tomorrow))])]),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{id:"tabs-profile-tab","data-toggle":"tab",href:"#date3"+a.id+"2"}},[t._v(t._s(t.date3))])])]),s("div",{staticClass:"tab-content mb-5",attrs:{id:"tabs-tabContent"}},[s("div",{staticClass:"tab-pane fade show active",attrs:{id:"today"+a.id+"2"}},t._l(a.oddtime,function(a){return s("span",{key:a,staticClass:"px-3 border-right"},[t._v(t._s(a))])}),0),s("div",{staticClass:"tab-pane fade",attrs:{id:"tomorrow"+a.id+"2"}},t._l(a.eventime,function(a){return s("span",{key:a,staticClass:"px-3 border-right"},[t._v("\n              "+t._s(a)+"\n            ")])}),0),s("div",{staticClass:"tab-pane fade",attrs:{id:"date3"+a.id+"2"}},t._l(a.oddtime,function(a){return s("span",{key:a,staticClass:"px-3 border-right"},[t._v("\n              "+t._s(a)+"\n            ")])}),0)]),s("div",{staticClass:"pl-3 py-2 mb-3 bg-primary text-light"},[t._v("3廳 :  "+t._s(a.title))]),s("ul",{staticClass:"nav nav-tabs mb-3",attrs:{id:"tabs-tab",role:"tablist"}},[s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-item nav-link active",attrs:{id:"tabs-home-tab","data-toggle":"tab",href:"#today"+a.id+"3"}},[t._v(t._s(t.today))])]),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{id:"tabs-profile-tab","data-toggle":"tab",href:"#tomorrow"+a.id+"3"}},[t._v(t._s(t.tomorrow))])]),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{id:"tabs-profile-tab","data-toggle":"tab",href:"#date3"+a.id+"3"}},[t._v(t._s(t.date3))])])]),s("div",{staticClass:"tab-content mb-5",attrs:{id:"tabs-tabContent"}},[s("div",{staticClass:"tab-pane fade show active",attrs:{id:"today"+a.id+"3"}},t._l(a.eventime,function(a){return s("span",{key:a,staticClass:"px-3 border-right"},[t._v(t._s(a))])}),0),s("div",{staticClass:"tab-pane fade",attrs:{id:"tomorrow"+a.id+"3"}},t._l(a.oddtime,function(a){return s("span",{key:a,staticClass:"px-3 border-right"},[t._v("\n              "+t._s(a)+"\n            ")])}),0),s("div",{staticClass:"tab-pane fade",attrs:{id:"date3"+a.id+"3"}},t._l(a.eventime,function(a){return s("span",{key:a,staticClass:"px-3 border-right"},[t._v(t._s(a))])}),0)])])])})],2)])},e=[],r=(i("4917"),i("ac6a"),{data:function(){return{products:[],titleArray:[],filter:"",date:[],today:"",tomorrow:"",date3:"",isLoading:!1}},methods:{getdate:function(){var t=this;t.date=[];for(var a=Date.now(),i="",s=0;s<3;s+=1){var e=new Date(a);i=e.getMonth()<=8?e.getDate()<=9?"0".concat(e.getMonth()+1,"-0").concat(e.getDate()):"0".concat(e.getMonth()+1,"-").concat(e.getDate()):e.getDate()<=9?"".concat(e.getMonth()+1,"-0").concat(e.getDate()):"".concat(e.getMonth()+1,"-").concat(e.getDate()),t.date.push(i),i="",a+=864e5}t.today=t.date[0],t.tomorrow=t.date[1],t.date3=t.date[2]},getProducts:function(){this.$store.dispatch("updateLoading",!0);var t="".concat("https://vue-course-api.hexschool.io","/api/").concat("fed218","/products/all"),a=this;this.$http.get(t).then(function(t){a.$store.dispatch("updateLoading",!1);var i=t.data.products;i.forEach(function(t){"電影"===t.category&&"1"===t.is_enabled&&a.products.push(t)}),a.products.forEach(function(t){a.titleArray.push(t.title)})})},goMovie:function(t){this.$router.push("/movie/".concat(t))}},computed:{filterArray:function(){var t=this;return t.products.filter(function(a){return a.title.match(t.filter)})}},created:function(){this.getProducts(),this.getdate()}}),n=r,o=(i("4f70"),i("2877")),l=Object(o["a"])(n,s,e,!1,null,null,null);a["default"]=l.exports},"45b8":function(t,a,i){},4917:function(t,a,i){"use strict";var s=i("cb7c"),e=i("9def"),r=i("0390"),n=i("5f1b");i("214f")("match",1,function(t,a,i,o){return[function(i){var s=t(this),e=void 0==i?void 0:i[a];return void 0!==e?e.call(i,s):new RegExp(i)[a](String(s))},function(t){var a=o(i,t,this);if(a.done)return a.value;var l=s(t),c=String(this);if(!l.global)return n(l,c);var d=l.unicode;l.lastIndex=0;var v,u=[],p=0;while(null!==(v=n(l,c))){var g=String(v[0]);u[p]=g,""===g&&(l.lastIndex=r(c,e(l.lastIndex),d)),p++}return 0===p?null:u}]})},"4f70":function(t,a,i){"use strict";var s=i("45b8"),e=i.n(s);e.a},"7dcc":function(t,a,i){t.exports=i.p+"img/G_15.6d7a5ae5.png"},c4e0:function(t,a,i){t.exports=i.p+"img/G_6.1d50f438.png"}}]);
//# sourceMappingURL=chunk-02618668.add83aee.js.map