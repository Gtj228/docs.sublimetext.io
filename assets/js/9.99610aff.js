(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{362:function(t,r,s){},434:function(t,r,s){"use strict";s(362)},453:function(t,r,s){"use strict";s.r(r);s(97),s(9);var n={props:{showTitle:{type:Boolean,default:!1},user:{type:String,require:!0},repo:{type:String,require:!0}},data:function(){return{contributors:[]}},mounted:function(){this.getContributors()},methods:{getContributors:function(){var t=this;s(416);var r=this.user,n=this.repo,o="https://api.github.com/repos/".concat(r,"/").concat(n,"/contributors");fetch(o).then((function(t){return t.json()})).then((function(r){t.contributors=r}))}}},o=(s(434),s(18)),i=Object(o.a)(n,(function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("div",{staticClass:"contributors-wrapper"},[t.showTitle?s("h3",{staticClass:"contributors-title"},[t._v("\n    "+t._s(t.repo)+"\n    "),s("GitHubLink",{attrs:{repo:t.user+"/"+t.repo}})],1):t._e(),t._v(" "),s("ul",{staticClass:"contributors-list"},t._l(t.contributors,(function(r,n){return s("li",{key:n,staticClass:"contributors-item"},[s("a",{attrs:{href:r.html_url}},[s("img",{staticClass:"avatar",attrs:{src:r.avatar_url,alt:r.login}}),t._v(" "),s("a",{staticClass:"name"},[t._v(t._s(r.login))])])])})),0)])}),[],!1,null,"ba1e5676",null);r.default=i.exports}}]);