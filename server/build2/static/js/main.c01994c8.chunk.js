(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{104:function(e,t,a){},147:function(e,t,a){},148:function(e,t,a){},149:function(e,t,a){},150:function(e,t,a){},151:function(e,t,a){},152:function(e,t,a){},153:function(e,t,a){},154:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),c=a(68),r=a.n(c),i=a(4),l=a.n(i),u=a(6),j=a(2),o=(a(76),a(0));function b(){return Object(o.jsxs)("div",{className:"header",children:[Object(o.jsx)("div",{className:"headerTitles",children:Object(o.jsx)("span",{className:"headerTitleLg",children:"BANK"})}),Object(o.jsx)("img",{className:"headerImg",src:"https://images1.ynet.co.il/picserver5/crop_images/2020/04/02/9887566/9887566_0_45_980_552_0_large.jpg",alt:""})]})}a(78);var d=a(7);function O(e){var t=e.cost;return Object(o.jsxs)("div",{className:"cost",children:[Object(o.jsx)(d.b,{to:"/cost/".concat(t._id),className:"link",children:Object(o.jsx)("span",{className:"costTitle",children:t.description})}),Object(o.jsxs)("span",{children:[Object(o.jsx)("br",{}),new Date(t.createdAt).toDateString()]}),Object(o.jsxs)("p",{children:["user: ",t.username]}),Object(o.jsx)("br",{}),Object(o.jsxs)("p",{children:["category: ",t.category]}),Object(o.jsx)("br",{}),Object(o.jsxs)("p",{children:["sum: ",t.sum]}),Object(o.jsx)("br",{}),Object(o.jsx)(d.b,{to:"/cost/".concat(t._id),className:"link",children:"\u05e6\u05e4\u05d4 \u05d1\u05e4\u05e2\u05d5\u05dc\u05d4"}),Object(o.jsx)("hr",{})]})}a(84);function p(e){var t=e.costs;return Object(o.jsx)("div",{className:"costs",children:t.map((function(e){return Object(o.jsx)(O,{cost:e})}))})}a(85);var h=a(46),x=function(e,t){switch(t.type){case"LOGIN_START":return{user:null,isFetching:!0,error:!1};case"LOGIN_SUCCESS":return{user:t.payload,isFetching:!1,error:!1};case"LOGIN_FAILURE":return{user:null,isFetching:!1,error:!0};case"UPDATE_START":return Object(h.a)(Object(h.a)({},e),{},{isFetching:!0});case"UPDATE_SUCCESS":return{user:t.payload,isFetching:!1,error:!1};case"UPDATE_FAILURE":return{user:e.user,isFetching:!1,error:!0};case"LOGOUT":return{user:null,isFetching:!1,error:!1};default:return e}},m={user:JSON.parse(localStorage.getItem("user"))||null,isFetching:!1,error:!1},v=Object(n.createContext)(m),g=function(e){var t=e.children,a=Object(n.useReducer)(x,m),s=Object(j.a)(a,2),c=s[0],r=s[1];return Object(n.useEffect)((function(){localStorage.setItem("user",JSON.stringify(c.user))}),[c.user]),Object(o.jsx)(v.Provider,{value:{user:c.user,isFetching:c.isFetching,error:c.error,dispatch:r},children:t})},f=a(70),y=a.n(f).a.create({baseURL:""}),N=a(3);function S(){var e=Object(n.useContext)(v).user,t=Object(n.useState)([]),a=Object(j.a)(t,2),s=a[0],c=a[1],r=Object(n.useState)(),i=Object(j.a)(r,2),d=i[0],O=i[1],h=Object(n.useState)(""),x=Object(j.a)(h,2),m=x[0],g=x[1],f=Object(n.useState)(""),S=Object(j.a)(f,2),C=S[0],w=S[1],_=Object(n.useState)(""),I=Object(j.a)(_,2),T=I[0],k=I[1],E=(Object(N.f)(),function(){var t=Object(u.a)(l.a.mark((function t(a){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),console.log(T),t.next=4,y.get("/costs?user=".concat(e.username,"&category=").concat(m,"&month=").concat(T,"&year=").concat(C));case 4:n=t.sent,O(n.data.sum),console.log(n.data.costs),c(n.data.costs);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());return Object(n.useEffect)((function(){(function(){var t=Object(u.a)(l.a.mark((function t(){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null!==e){t.next=4;break}window.location.replace("/login"),t.next=7;break;case 4:return t.next=6,y.get("/costs?user=".concat(e.username));case 6:a=t.sent;case 7:O(a.data.sum),c(a.data.costs);case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]),Object(o.jsxs)("div",{children:[Object(o.jsx)(b,{}),Object(o.jsx)("div",{}),Object(o.jsxs)("div",{className:"home",children:[Object(o.jsx)(p,{costs:s}),Object(o.jsxs)("div",{children:["TOTAL COSTS :",d]}),Object(o.jsxs)("form",{className:"settingsForm",onSubmit:E,children:[Object(o.jsx)("label",{children:"category"}),Object(o.jsx)("input",{type:"category",onChange:function(e){return g(e.target.value)}}),Object(o.jsx)("label",{children:"year"}),Object(o.jsx)("input",{type:"date.year",onChange:function(e){return w(e.target.value)}}),Object(o.jsx)("label",{children:"month"}),Object(o.jsxs)("select",{id:"drp1",onChange:function(e){return k(e.target.value)},children:[Object(o.jsx)("option",{value:"Jan",children:"January"}),Object(o.jsx)("option",{value:"Feb",children:"February"}),Object(o.jsx)("option",{value:"Mar",children:"March"}),Object(o.jsx)("option",{value:"Apr",children:"April"}),Object(o.jsx)("option",{value:"May",children:"May"}),Object(o.jsx)("option",{value:"Jun",children:"June"}),Object(o.jsx)("option",{value:"Jul",children:"July"}),Object(o.jsx)("option",{value:"Aug",children:"August"}),Object(o.jsx)("option",{value:"Sep",children:"September"}),Object(o.jsx)("option",{value:"Oct",children:"October"}),Object(o.jsx)("option",{value:"Nov",children:"November"}),Object(o.jsx)("option",{value:"Dec",children:"December"})]}),Object(o.jsx)("button",{className:"settingsSubmit",type:"submit",children:"Update"})]})]})]})}a(104),a(105);function C(){var e=Object(n.useContext)(v),t=e.user,a=e.dispatch;return Object(o.jsx)("div",{className:"navbar navbar-expand-md navbar-dark fixed-top ",children:Object(o.jsxs)("div",{class:"container-fluid",children:[Object(o.jsx)("div",{class:"navbar-brand",children:Object(o.jsx)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarCollapse","aria-controls":"navbarCollapse","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{class:"navbar-toggler-icon"})})}),Object(o.jsxs)("div",{class:"collapse navbar-collapse",id:"navbarCollapse",children:[Object(o.jsxs)("ul",{class:"navbar-nav me-auto mb-2 mb-md-0",children:[Object(o.jsx)("li",{class:"nav-item",children:Object(o.jsx)(d.b,{className:"nav-link active",to:"/",children:"HOME"})}),Object(o.jsx)("li",{class:"nav-item ",children:Object(o.jsx)(d.b,{className:"nav-link active",to:"/about",children:"ABOUT"})}),Object(o.jsx)("li",{class:"nav-item ",children:Object(o.jsx)(d.b,{className:"nav-link active",to:"/write",children:"WRITE"})}),Object(o.jsx)("li",{class:"nav-item ",onClick:function(){a({type:"LOGOUT"})},children:Object(o.jsx)(d.b,{className:"nav-link active",to:"/write",children:t&&"LOGOUT"})})]}),t?Object(o.jsx)(d.b,{className:"nav-link active",to:"/settings",children:"profile"}):Object(o.jsxs)("ul",{class:"navbar-nav me-auto mb-2 mb-md-0",children:[Object(o.jsx)("li",{class:"nav-item ",children:Object(o.jsx)(d.b,{className:"nav-link active",to:"/login",children:"LOGIN"})}),Object(o.jsx)("li",{class:"nav-item ",children:Object(o.jsx)(d.b,{className:"nav-link active ",to:"/register",children:"REGISTER"})})]})]})]})})}a(147);function w(){var e=Object(N.f)().pathname.split("/")[2],t=Object(n.useState)({}),a=Object(j.a)(t,2),s=a[0],c=a[1],r=Object(n.useContext)(v).user,i=Object(n.useState)(0),b=Object(j.a)(i,2),O=b[0],p=b[1],h=Object(n.useState)(""),x=Object(j.a)(h,2),m=x[0],g=x[1],f=Object(n.useState)(""),S=Object(j.a)(f,2),C=S[0],w=S[1],_=Object(n.useState)(!1),I=Object(j.a)(_,2),T=I[0],k=I[1];Object(n.useEffect)((function(){(function(){var t=Object(u.a)(l.a.mark((function t(){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.get("/costs/"+e);case 2:a=t.sent,c(a.data),p(a.data.sum),g(a.data.description),w(a.data.category);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e]);var E=function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.delete("/costs/".concat(s._id),{data:{username:r.username}});case 3:window.location.replace("/"),e.next=8;break;case 6:e.prev=6,e.t0=e.catch(0);case 8:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.put("/costs/".concat(s._id),{username:r.username,description:m,sum:O,category:C});case 3:k(!1),e.next=8;break;case 6:e.prev=6,e.t0=e.catch(0);case 8:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();return Object(o.jsx)("div",{className:"singleCost",children:Object(o.jsxs)("div",{className:"singleCostWrapper",children:[T?Object(o.jsx)("input",{type:"number",value:O,className:"singleCostsumInput",autoFocus:!0,onChange:function(e){return p(e.target.value)}}):Object(o.jsxs)("h1",{className:"singleCostTitle",children:[O,s.username===(null===r||void 0===r?void 0:r.username)&&Object(o.jsxs)("div",{className:"singleCostEdit",children:[Object(o.jsx)("i",{className:"singleCostIcon far fa-edit",onClick:function(){return k(!0)}}),Object(o.jsx)("i",{className:"singleCostIcon far fa-trash-alt",onClick:E})]})]}),Object(o.jsxs)("div",{className:"singleCostInfo",children:[Object(o.jsxs)("span",{className:"singleCostAuthor",children:["Author:",Object(o.jsx)(d.b,{to:"/?users=".concat(s.username),className:"link",children:Object(o.jsxs)("b",{children:[" ",s.username]})})]}),Object(o.jsx)("span",{className:"singleCostDate",children:new Date(s.createdAt).toDateString()})]}),T?Object(o.jsx)("input",{type:"text",value:m,className:"singleCostdescriptionInput",autoFocus:!0,onChange:function(e){return g(e.target.value)}}):Object(o.jsx)("p",{className:"singleCostdescription",children:m}),T&&Object(o.jsx)("button",{className:"singleCostButton",onClick:A,children:"Update"})]})})}a(148);function _(){return Object(o.jsx)("div",{className:"single",children:Object(o.jsx)(w,{})})}a(149);function I(){return Object(o.jsxs)("div",{className:"sidebar",children:[Object(o.jsxs)("div",{className:"sidebarItem",children:[Object(o.jsx)("span",{className:"sidebarTitle",children:"ABOUT "}),Object(o.jsx)("p",{children:"yosef shaul, shilo sharabi"})]}),Object(o.jsxs)("div",{className:"sidebarItem",children:[Object(o.jsx)("span",{className:"sidebarTitle",children:"FOLLOW"}),Object(o.jsx)("div",{className:"sidebarSocial"})]})]})}a(150);function T(){var e=Object(n.useState)(0),t=Object(j.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)(""),r=Object(j.a)(c,2),i=r[0],b=r[1],d=Object(n.useState)(""),O=Object(j.a)(d,2),p=O[0],h=O[1],x=Object(n.useContext)(v).user,m=function(){var e=Object(u.a)(l.a.mark((function e(t){var n,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={username:x.username,sum:a,description:i,category:p},e.prev=2,e.next=5,y.post("/costs",n);case 5:s=e.sent,window.location.replace("/cost/"+s.data._id),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),window.alert("you need to add: sum ,description");case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(o.jsx)("div",{className:"container-fluid",children:Object(o.jsx)("div",{className:"write",children:Object(o.jsxs)("form",{className:"writeForm",onSubmit:m,children:[Object(o.jsxs)("div",{style:{textAlign:"center"},children:[Object(o.jsx)("input",{type:"number",placeholder:"sum",className:"writeInput",autoFocus:!0,onChange:function(e){return s(e.target.value)}}),Object(o.jsx)("input",{type:"text",placeholder:"description",className:"writeInput",autoFocus:!0,onChange:function(e){return b(e.target.value)}}),Object(o.jsx)("input",{type:"text",placeholder:"category",className:"writeInput",autoFocus:!0,onChange:function(e){return h(e.target.value)}})]}),Object(o.jsx)("button",{className:"writeSubmit",type:"submit",children:"Publish"})]})})})}a(151);function k(){var e=Object(n.useState)(""),t=Object(j.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)(""),r=Object(j.a)(c,2),i=r[0],b=r[1],d=Object(n.useState)(""),O=Object(j.a)(d,2),p=O[0],h=O[1],x=Object(n.useState)(""),m=Object(j.a)(x,2),g=(m[0],m[1]),f=Object(n.useState)(""),N=Object(j.a)(f,2),S=(N[0],N[1]),C=Object(n.useState)(""),w=Object(j.a)(C,2),_=(w[0],w[1]),I=Object(n.useState)(""),T=Object(j.a)(I,2),k=(T[0],T[1]),E=Object(n.useState)(!1),A=Object(j.a)(E,2),F=A[0],U=A[1],L=Object(n.useContext)(v),D=L.user,R=L.dispatch,P=function(){var e=Object(u.a)(l.a.mark((function e(t){var n,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),R({type:"UPDATE_START"}),n={userId:D._id,username:a,email:i,password:p},e.prev=3,e.next=6,y.put("/users/"+D._id,n);case 6:s=e.sent,U(!0),R({type:"UPDATE_SUCCESS",payload:s.data}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),R({type:"UPDATE_FAILURE"});case 14:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(o.jsx)("div",{className:"settings",children:Object(o.jsxs)("div",{className:"settingsWrapper",children:[Object(o.jsx)("div",{className:"settingsTitle"}),Object(o.jsxs)("form",{className:"settingsForm",onSubmit:P,children:[Object(o.jsx)("label",{children:"Username"}),Object(o.jsx)("input",{type:"text",placeholder:D.username,onChange:function(e){return s(e.target.value)}}),Object(o.jsx)("label",{children:"Email"}),Object(o.jsx)("input",{type:"email",placeholder:D.email,onChange:function(e){return b(e.target.value)}}),Object(o.jsx)("label",{children:"Password"}),Object(o.jsx)("input",{type:"password",onChange:function(e){return h(e.target.value)}}),Object(o.jsx)("label",{children:"first_name"}),Object(o.jsx)("input",{type:"first_name",placeholder:D.first_name,onChange:function(e){return g(e.target.value)}}),Object(o.jsx)("label",{children:"last_name"}),Object(o.jsx)("input",{type:"last_name",placeholder:D.last_name,onChange:function(e){return S(e.target.value)}}),Object(o.jsx)("label",{children:"marital_status"}),Object(o.jsx)("input",{type:"marital_status",placeholder:D.marital_status,onChange:function(e){return _(e.target.value)}}),Object(o.jsx)("label",{children:"birthday"}),Object(o.jsx)("input",{type:"date",placeholder:D.birthday,onChange:function(e){return k(e.target.value)}}),Object(o.jsx)("button",{className:"settingsSubmit",type:"submit",children:"Update"}),F&&Object(o.jsx)("span",{style:{color:"green",textAlign:"center",marginTop:"20px"},children:"Profile has been updated..."})]})]})})}a(152);function E(){var e=Object(n.useRef)(),t=Object(n.useRef)(),a=Object(n.useContext)(v),s=a.dispatch,c=a.isFetching,r=function(){var a=Object(u.a)(l.a.mark((function a(n){var c;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n.preventDefault(),s({type:"LOGIN_START"}),a.prev=2,a.next=5,y.post("/auth/login",{username:e.current.value,password:t.current.value});case 5:c=a.sent,s({type:"LOGIN_SUCCESS",payload:c.data}),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(2),s({type:"LOGIN_FAILURE"});case 12:case"end":return a.stop()}}),a,null,[[2,9]])})));return function(e){return a.apply(this,arguments)}}();return Object(o.jsxs)("div",{className:"login",children:[Object(o.jsx)("span",{className:"loginTitle",children:"Login"}),Object(o.jsxs)("form",{className:"loginForm",onSubmit:r,children:[Object(o.jsx)("label",{children:"Username"}),Object(o.jsx)("input",{type:"text",className:"loginInput",placeholder:"Enter your username...",ref:e}),Object(o.jsx)("label",{children:"Password"}),Object(o.jsx)("input",{type:"password",className:"loginInput",placeholder:"Enter your password...",ref:t}),Object(o.jsx)("button",{className:"loginButton",type:"submit",disabled:c,children:"Login"})]})]})}a(153);function A(){var e=Object(n.useState)(""),t=Object(j.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)(""),r=Object(j.a)(c,2),i=r[0],b=r[1],d=Object(n.useState)(""),O=Object(j.a)(d,2),p=O[0],h=O[1],x=Object(n.useState)(""),m=Object(j.a)(x,2),v=m[0],g=m[1],f=Object(n.useState)(""),N=Object(j.a)(f,2),S=N[0],C=N[1],w=Object(n.useState)(""),_=Object(j.a)(w,2),I=_[0],T=_[1],k=Object(n.useState)(""),E=Object(j.a)(k,2),A=E[0],F=E[1],U=Object(n.useState)(!1),L=Object(j.a)(U,2),D=L[0],R=L[1],P=function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),R(!1),e.prev=2,e.next=5,y.post("/auth/register",{username:a,email:i,password:p,first_name:v,last_name:S,marital_status:I,birthday:A});case 5:e.sent.data&&window.location.replace("/login"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),R(!0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(o.jsxs)("div",{className:"register",children:[Object(o.jsx)("span",{className:"registerTitle",children:"Register"}),Object(o.jsxs)("form",{className:"registerForm",onSubmit:P,children:[Object(o.jsx)("label",{children:"Username"}),Object(o.jsx)("input",{type:"text",className:"registerInput",placeholder:"Enter your username...",onChange:function(e){return s(e.target.value)}}),Object(o.jsx)("label",{children:"Email"}),Object(o.jsx)("input",{type:"email",className:"registerInput",placeholder:"Enter your email...",onChange:function(e){return b(e.target.value)}}),Object(o.jsx)("label",{children:"Password"}),Object(o.jsx)("input",{type:"password",className:"registerInput",placeholder:"Enter your password...",onChange:function(e){return h(e.target.value)}}),Object(o.jsx)("label",{children:"first_name"}),Object(o.jsx)("input",{type:"text",className:"registerInput",placeholder:"Enter your first_name...",onChange:function(e){return g(e.target.value)}}),Object(o.jsx)("label",{children:"last_name"}),Object(o.jsx)("input",{type:"text",className:"registerInput",placeholder:"Enter your last_name...",onChange:function(e){return C(e.target.value)}}),Object(o.jsx)("label",{children:"marital_status"}),Object(o.jsx)("input",{type:"text",className:"registerInput",placeholder:"Enter your marital_status...",onChange:function(e){return T(e.target.value)}}),Object(o.jsx)("label",{children:"birthday"}),Object(o.jsx)("input",{type:"Date",className:"registerInput",placeholder:"Enter your birthday...",onChange:function(e){return F(e.target.value)}}),Object(o.jsx)("button",{className:"registerButton",type:"submit",children:"Register"})]}),D&&Object(o.jsx)("span",{style:{color:"red",marginTop:"10px"},children:"Something went wrong!"})]})}var F=function(){var e=Object(n.useContext)(v).user;return Object(o.jsxs)(d.a,{children:[Object(o.jsx)(C,{}),Object(o.jsxs)(N.c,{children:[Object(o.jsx)(N.a,{exact:!0,path:"/",children:Object(o.jsx)(S,{})}),Object(o.jsx)(N.a,{exact:!0,path:"/about",children:Object(o.jsx)(I,{})}),Object(o.jsx)(N.a,{path:"/register",children:e?Object(o.jsx)(S,{}):Object(o.jsx)(A,{})}),Object(o.jsx)(N.a,{path:"/login",children:e?Object(o.jsx)(S,{}):Object(o.jsx)(E,{})}),Object(o.jsx)(N.a,{path:"/write",children:e?Object(o.jsx)(T,{}):Object(o.jsx)(E,{})}),Object(o.jsx)(N.a,{path:"/settings",children:e?Object(o.jsx)(k,{}):Object(o.jsx)(E,{})}),Object(o.jsx)(N.a,{path:"/cost/:costId",children:Object(o.jsx)(_,{})})]})]})};r.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(g,{children:Object(o.jsx)(F,{})})}),document.getElementById("root"))},76:function(e,t,a){},78:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){}},[[154,1,2]]]);
//# sourceMappingURL=main.c01994c8.chunk.js.map