"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{26:function(n,t,e){e.d(t,{Cp:function(){return s},M1:function(){return p},V0:function(){return i},nq:function(){return f},tx:function(){return v}});var r=e(861),c=e(687),a=e.n(c),o="158819e65eb0fbf8513ba7b934c25216",u="https://api.themoviedb.org/3/",s=function(){var n=(0,r.Z)(a().mark((function n(){var t,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(u,"/trending/movie/day?api_key=").concat(o,"&page=1"));case 3:if((t=n.sent).ok){n.next=6;break}throw new Error(t.statusText);case 6:return n.next=8,t.json();case 8:return e=n.sent,n.abrupt("return",e);case 12:n.prev=12,n.t0=n.catch(0),console.log(n.t0);case 15:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(){return n.apply(this,arguments)}}(),i=function(){var n=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t){n.next=2;break}return n.abrupt("return");case 2:return n.prev=2,n.next=5,fetch("".concat(u,"/search/movie?api_key=").concat(o,"&query=").concat(t,"&page=1"));case 5:if((e=n.sent).ok){n.next=8;break}throw new Error(e.statusText);case 8:return n.next=10,e.json();case 10:return r=n.sent,n.abrupt("return",r);case 14:n.prev=14,n.t0=n.catch(2),console.log(n.t0);case 17:case"end":return n.stop()}}),n,null,[[2,14]])})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(u,"/movie/").concat(t,"?api_key=").concat(o,"&language=en-US"));case 3:if((e=n.sent).ok){n.next=6;break}throw new Error(e.statusText);case 6:return n.next=8,e.json();case 8:return r=n.sent,n.abrupt("return",r);case 12:n.prev=12,n.t0=n.catch(0),console.log(n.t0);case 15:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(u,"/movie/").concat(t,"/credits?api_key=").concat(o,"&language=en-US"));case 3:if((e=n.sent).ok){n.next=6;break}throw new Error(e.statusText);case 6:return n.next=8,e.json();case 8:return r=n.sent,n.abrupt("return",r);case 12:n.prev=12,n.t0=n.catch(0),console.log(n.t0);case 15:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(t){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(u,"/movie/").concat(t,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 3:if((e=n.sent).ok){n.next=6;break}throw new Error(e.statusText);case 6:return n.next=8,e.json();case 8:return r=n.sent,n.abrupt("return",r);case 12:n.prev=12,n.t0=n.catch(0),console.log(n.t0);case 15:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(t){return n.apply(this,arguments)}}()},174:function(n,t,e){e.d(t,{O:function(){return v}});var r,c,a=e(689),o=e(168),u=e(87),s=e(934),i=(0,s.Z)(u.rU)(r||(r=(0,o.Z)(["\n    text-decoration: none;\n    color: grey;\n    font-size: 18px;\n    padding: 5px 0;\n\n    &:hover {\n        color: red;\n    }\n    &:focus {\n        color: red;\n    }\n"]))),f=s.Z.li(c||(c=(0,o.Z)(["\n    margin-bottom: 10px;\n"]))),p=e(184),v=function(n){var t=n.movies,e=(0,a.TH)();return(0,p.jsx)("ul",{children:t.map((function(n){var t=n.id,r=n.title;return(0,p.jsx)(i,{to:"/movies/".concat(t),state:{from:e},children:(0,p.jsx)(f,{children:r})},t)}))})}},415:function(n,t,e){e.r(t);var r,c=e(861),a=e(439),o=e(168),u=e(687),s=e.n(u),i=e(791),f=e(26),p=e(174),v=e(934),l=e(184),h=v.Z.h1(r||(r=(0,o.Z)(["\n    margin-bottom: 20px;\n"])));t.default=function(){var n=(0,i.useState)([]),t=(0,a.Z)(n,2),e=t[0],r=t[1],o=(0,i.useState)(""),u=(0,a.Z)(o,2),v=u[0],x=u[1];return(0,i.useEffect)((function(){x(null);var n=function(){var n=(0,c.Z)(s().mark((function n(){return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,f.Cp)().then((function(n){r(n.results)})).catch((function(n){return x(n)}));case 2:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[v]),(0,l.jsxs)("div",{children:[(0,l.jsx)(h,{children:"Trending Today:"}),(0,l.jsx)(p.O,{movies:e})]})}},861:function(n,t,e){function r(n,t,e,r,c,a,o){try{var u=n[a](o),s=u.value}catch(i){return void e(i)}u.done?t(s):Promise.resolve(s).then(r,c)}function c(n){return function(){var t=this,e=arguments;return new Promise((function(c,a){var o=n.apply(t,e);function u(n){r(o,c,a,u,s,"next",n)}function s(n){r(o,c,a,u,s,"throw",n)}u(void 0)}))}}e.d(t,{Z:function(){return c}})}}]);
//# sourceMappingURL=415.d4492816.chunk.js.map