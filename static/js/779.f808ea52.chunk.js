"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[779],{26:function(n,t,e){e.d(t,{Cp:function(){return s},M1:function(){return f},V0:function(){return i},nq:function(){return p},tx:function(){return h}});var r=e(861),c=e(687),a=e.n(c),o="158819e65eb0fbf8513ba7b934c25216",u="https://api.themoviedb.org/3/",s=function(){var n=(0,r.Z)(a().mark((function n(){var t,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(u,"/trending/movie/day?api_key=").concat(o,"&page=1"));case 3:if((t=n.sent).ok){n.next=6;break}throw new Error(t.statusText);case 6:return n.next=8,t.json();case 8:return e=n.sent,n.abrupt("return",e);case 12:n.prev=12,n.t0=n.catch(0),console.log(n.t0);case 15:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(){return n.apply(this,arguments)}}(),i=function(){var n=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t){n.next=2;break}return n.abrupt("return");case 2:return n.prev=2,n.next=5,fetch("".concat(u,"/search/movie?api_key=").concat(o,"&query=").concat(t,"&page=1"));case 5:if((e=n.sent).ok){n.next=8;break}throw new Error(e.statusText);case 8:return n.next=10,e.json();case 10:return r=n.sent,n.abrupt("return",r);case 14:n.prev=14,n.t0=n.catch(2),console.log(n.t0);case 17:case"end":return n.stop()}}),n,null,[[2,14]])})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(u,"/movie/").concat(t,"?api_key=").concat(o,"&language=en-US"));case 3:if((e=n.sent).ok){n.next=6;break}throw new Error(e.statusText);case 6:return n.next=8,e.json();case 8:return r=n.sent,n.abrupt("return",r);case 12:n.prev=12,n.t0=n.catch(0),console.log(n.t0);case 15:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(u,"/movie/").concat(t,"/credits?api_key=").concat(o,"&language=en-US"));case 3:if((e=n.sent).ok){n.next=6;break}throw new Error(e.statusText);case 6:return n.next=8,e.json();case 8:return r=n.sent,n.abrupt("return",r);case 12:n.prev=12,n.t0=n.catch(0),console.log(n.t0);case 15:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(u,"/movie/").concat(t,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 3:if((e=n.sent).ok){n.next=6;break}throw new Error(e.statusText);case 6:return n.next=8,e.json();case 8:return r=n.sent,n.abrupt("return",r);case 12:n.prev=12,n.t0=n.catch(0),console.log(n.t0);case 15:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(t){return n.apply(this,arguments)}}()},779:function(n,t,e){e.r(t),e.d(t,{default:function(){return g}});var r,c,a,o,u=e(861),s=e(439),i=e(687),p=e.n(i),f=e(689),h=e(791),l=e(26),v=e(168),x=e(934),d=x.Z.div(r||(r=(0,v.Z)(["\n    padding: 20px 0 20px 25px;\n"]))),w=x.Z.div(c||(c=(0,v.Z)(["\n    max-width: 700px;\n    margin-bottom: 15px;\n"]))),k=x.Z.h3(a||(a=(0,v.Z)(["\n    font-size: 20px;\n    margin-bottom: 10px;\n    color: red;\n"]))),m=x.Z.p(o||(o=(0,v.Z)(["\n    font-size: 16px;\n    color: grey;\n"]))),b=e(184),g=function(){var n=(0,f.UO)().id,t=(0,h.useState)({}),e=(0,s.Z)(t,2),r=e[0],c=e[1],a=(0,h.useState)(""),o=(0,s.Z)(a,2),i=o[0],v=o[1];return(0,h.useEffect)((function(){v(null);var t=function(){var t=(0,u.Z)(p().mark((function t(){return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,l.tx)(n).then((function(n){return c(n)})).catch((function(n){return v(n)}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[n,i]),(0,b.jsx)(d,{children:r.results?r.results.map((function(n){return(0,b.jsxs)(w,{children:[(0,b.jsx)(k,{children:n.author}),(0,b.jsx)(m,{children:n.content})]},n.id)})):(0,b.jsx)("h3",{children:"Sorry, there is no content"})})}},861:function(n,t,e){function r(n,t,e,r,c,a,o){try{var u=n[a](o),s=u.value}catch(i){return void e(i)}u.done?t(s):Promise.resolve(s).then(r,c)}function c(n){return function(){var t=this,e=arguments;return new Promise((function(c,a){var o=n.apply(t,e);function u(n){r(o,c,a,u,s,"next",n)}function s(n){r(o,c,a,u,s,"throw",n)}u(void 0)}))}}e.d(t,{Z:function(){return c}})}}]);
//# sourceMappingURL=779.f808ea52.chunk.js.map