(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-02e916e5"],{"0e5f":function(t,a,s){"use strict";var i=s("4c5e"),n=s.n(i);n.a},"4c5e":function(t,a,s){},cc30:function(t,a,s){"use strict";s.r(a);var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"dashboard"},[s("nav",{staticClass:"navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow"},[s("a",{staticClass:"navbar-brand col-sm-3 col-md-2 mr-0",attrs:{href:"#"}},[t._v("MK Cinemas 後台管理系統")]),s("input",{staticClass:"form-control form-control-dark w-100",attrs:{type:"text",placeholder:"Search","aria-label":"Search"}}),s("ul",{staticClass:"navbar-nav px-3"},[s("li",{staticClass:"nav-item text-nowrap"},[s("a",{staticClass:"nav-link",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.signout(a)}}},[t._v("登出")])])])]),s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row"},[s("nav",{staticClass:"col-md-2 d-none d-md-block bg-light sidebar"},[s("div",{staticClass:"sidebar-sticky"},[s("h6",{staticClass:"sidebar-heading d-flex justify-content-between\n             align-items-center px-3 mt-4 text-muted"},[t._v("管理員")]),s("ul",{staticClass:"nav flex-column"},[s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{href:"#",to:"/admin/products","active-class":"active"}},[s("i",{staticClass:"fa fa-shopping-bag",attrs:{"aria-hidden":"true"}}),t._v("\n                產品列表\n              ")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{href:"#",to:"/admin/orders","active-class":"active"}},[s("i",{staticClass:"fa fa-list-alt",attrs:{"aria-hidden":"true"}}),t._v("\n                訂單列表\n              ")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{href:"#",to:"/admin/coupons","active-class":"active"}},[s("i",{staticClass:"fa fa-ticket-alt"}),t._v("\n                優惠券\n              ")])],1)])])]),s("main",{staticClass:"col-md-9 ml-sm-auto col-lg-10 px-4",attrs:{role:"main"}},[s("router-view")],1)])])])},n=[],e={data:function(){return{}},methods:{signout:function(){var t="".concat("https://vue-course-api.hexschool.io","/logout"),a=this;this.$http.post(t).then(function(t){console.log(t.data),t.data.success&&a.$router.push("/login")})}}},c=e,l=(s("0e5f"),s("2877")),r=Object(l["a"])(c,i,n,!1,null,"1d9b8a03",null);a["default"]=r.exports}}]);
//# sourceMappingURL=chunk-02e916e5.80745476.js.map