(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-58d3d1a9"],{"08dc":function(t,a,s){t.exports=s.p+"img/G_18.897a0d6b.png"},"0ce1":function(t,a,s){t.exports=s.p+"img/G_12.e55ea658.png"},3334:function(t,a,s){t.exports=s.p+"img/G_0.73cb75ad.png"},"75d5":function(t,a,s){"use strict";var i=s("980d"),e=s.n(i);e.a},"7dcc":function(t,a,s){t.exports=s.p+"img/G_15.6d7a5ae5.png"},"980d":function(t,a,s){},c4e0:function(t,a,s){t.exports=s.p+"img/G_6.1d50f438.png"},def6:function(t,a,s){"use strict";s.r(a);var i=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",[i("nav",{staticClass:"bg-info",attrs:{"aria-label":"breadcrumb"}},[i("div",{staticClass:"container"},[i("ol",{staticClass:"breadcrumb"},[i("router-link",{staticClass:"breadcrumb-item",attrs:{to:"/"}},[t._v("首頁")]),i("router-link",{staticClass:"breadcrumb-item",attrs:{to:"/movies"}},[t._v("電影介紹")]),i("li",{staticClass:"breadcrumb-item active"},[t._v(t._s(t.product.title))])],1)])]),i("section",{staticClass:"container my-5"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-lg-4"},[i("div",{staticClass:"card border-0 text-center"},[i("div",{staticClass:"card-body"},[i("img",{staticClass:"img-fluid",attrs:{src:t.product.imageUrl}}),i("ul",{staticClass:"list-group"},[i("li",{staticClass:"list-group-item border-0 pl-0 mt-3"},[i("h5",{staticClass:"card-title text-primary"},[t._v(t._s(t.product.title))]),"1"===t.product.is_enabled?i("a",{staticClass:"btn btn-primary btn-sm",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.openModal(a)}}},[t._v("快速訂票")]):t._e()]),i("li",{staticClass:"list-group-item border-0 pl-0"},[i("span",[t._v("導演:  ")]),t._v("\n                "+t._s(t.product.director)+"\n              ")]),i("li",{staticClass:"list-group-item border-0 pl-0"},[i("span",[t._v("演員:  ")]),t._v("\n                "+t._s(t.product.actor)+"\n              ")]),i("li",{staticClass:"list-group-item border-0 pl-0"},[i("span",[t._v("上映日期:  ")]),t._v("\n                "+t._s(t.product.released)+"\n              ")]),i("li",{staticClass:"list-group-item border-0 pl-0"},[i("span",[t._v("片長:  ")]),t._v("\n                "+t._s(t.product.length)+" 分\n              ")]),i("li",{staticClass:"list-group-item border-0 pl-0"},[i("span",[t._v("分級:  ")]),"普遍級"===t.product.grading?i("img",{staticStyle:{weight:"35px",height:"35px"},attrs:{src:s("3334")}}):t._e(),"保護級"===t.product.grading?i("img",{staticStyle:{weight:"35px",height:"35px"},attrs:{src:s("c4e0")}}):t._e(),"輔12級"===t.product.grading?i("img",{staticStyle:{weight:"35px",height:"35px"},attrs:{src:s("0ce1")}}):t._e(),"輔15級"===t.product.grading?i("img",{staticStyle:{weight:"35px",height:"35px"},attrs:{src:s("7dcc")}}):t._e(),"輔18級"===t.product.grading?i("img",{staticStyle:{weight:"35px",height:"35px"},attrs:{src:s("08dc")}}):t._e()])])])])]),i("div",{staticClass:"col-lg-8"},[i("div",{staticClass:"mt-3 pb-3 border-bottom"},[i("h4",{staticClass:"text-primary"},[t._v("電影簡介")]),i("p",{staticClass:"mt-4"},[t._v(t._s(t.product.content))])]),i("div",{staticClass:"embed-responsive embed-responsive-16by9 mt-5"},[i("iframe",{staticClass:"embed-responsive-item",attrs:{src:"https://www.youtube.com/embed/"+t.product.youTube,allowfullscreen:""}})])])])]),i("div",{staticClass:"modal fade",attrs:{id:"ticketModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[i("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[i("div",{staticClass:"modal-content"},[t._m(0),i("div",{staticClass:"modal-body"},[i("div",{staticClass:"mb-3"},[i("h4",{staticClass:"font-weight-bold text-primary"},[t._v("片名： "+t._s(t.product.title))])]),i("div",{staticClass:"d-flex align-items-baseline"},[i("form",{staticClass:"form-inline mr-5"},[i("div",{staticClass:"form-group"},[i("select",{directives:[{name:"model",rawName:"v-model",value:t.product.count,expression:"product.count"}],staticClass:"form-control",on:{change:function(a){var s=Array.prototype.filter.call(a.target.options,function(t){return t.selected}).map(function(t){var a="_value"in t?t._value:t.value;return a});t.$set(t.product,"count",a.target.multiple?s:s[0])}}},t._l(10,function(a){return i("option",{key:a,domProps:{value:a}},[t._v("\n                    選購 "+t._s(a)+" "+t._s(t.product.unit)+"\n                  ")])}),0)])]),i("div",{staticClass:"text-muted"},[i("span",[t._v("小計")]),i("strong",[t._v(" "+t._s(t.product.count*t.product.price))]),t._v(" 元\n            ")])])]),i("div",{staticClass:"modal-footer"},[i("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),i("button",{staticClass:"btn btn-primary",attrs:{type:"button",disabled:t.loadingItem===t.product.id},on:{click:function(a){return a.preventDefault(),t.addtoCart(t.product.id,t.product.count)}}},[t._v("\n            確認\n            "),t.loadingItem==t.product.id?i("i",{staticClass:"fas fa-spinner fa-pulse"}):t._e()])])])])])])},e=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"modal-header bg-primary text-white"},[s("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v("快速訂票")]),s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],r=s("1157"),o=s.n(r),c={data:function(){return{movieId:"",product:[]}},methods:{getProduct:function(){this.$store.dispatch("updateLoading",!0);var t=this,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("fed218","/product/").concat(t.movieId);this.$http.get(a).then(function(a){t.$store.dispatch("updateLoading",!1),console.log(a.data),t.product=a.data.product})},openModal:function(){o()("#ticketModal").modal("show")},addtoCart:function(t,a){var s=this;this.$store.dispatch("addtoCart",{id:t,num:a}).then(function(){return s.$store.dispatch("getCarts")}).then(function(){o()("#ticketModal").modal("hide")})}},computed:{loadingItem:function(){return this.$store.state.AddCar.loadingItem}},created:function(){this.movieId=this.$route.params.movieId,this.getProduct()}},d=c,n=(s("75d5"),s("2877")),l=Object(n["a"])(d,i,e,!1,null,"79c1f225",null);a["default"]=l.exports}}]);
//# sourceMappingURL=chunk-58d3d1a9.b7cf70aa.js.map