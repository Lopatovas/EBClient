(this.webpackJsonpebclient=this.webpackJsonpebclient||[]).push([[0],{23:function(e,t,a){e.exports=a(35)},28:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(20),i=a.n(l),c=(a(28),a(11)),o=a(12),s=(a(29),a(2)),u=a(3),m=a(5),d=a(4),b=a(9),h=a(6);function p(e){var t=e.cardHeader,a=e.cardDescription,n=e.buttonTitle,l=e.id;return r.a.createElement("div",{className:"shadow-lg p-3 bg-white rounded card mb-2"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},t),r.a.createElement("p",{className:"card-text"},a),r.a.createElement(c.b,{className:"btn btn-light",to:"/EBClient/Library/".concat(l)},n)))}p.defaultProps={cardHeader:"",cardDescription:"",buttonTitle:""};var g=p,v=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={loggedIn:!1},a.handleLogOut=a.handleLogOut.bind(Object(b.a)(a)),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.setState({loggedIn:localStorage.getItem("isUser")})}},{key:"handleLogOut",value:function(){localStorage.removeItem("isUser"),this.props.history.push("/EBClient/Login")}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement(g,{cardHeader:"Amazing library v1.0",cardDescription:"Best ever",buttonTitle:"Lego",id:"1"}),r.a.createElement(g,{cardHeader:"Amazing library v2.0",cardDescription:"Best ever",buttonTitle:"Lego",id:"2"}),r.a.createElement(g,{cardHeader:"Amazing library v3.0",cardDescription:"Best ever",buttonTitle:"Lego",id:"3"}))}}]),t}(r.a.Component);function E(e){var t=e.children,a=e.callBack,n=e.submitText;return r.a.createElement("form",{className:"shadow-lg p-3 mb-5 bg-white rounded"},t,r.a.createElement("button",{onClick:function(e){!function(e){e.preventDefault(),a()}(e)},type:"button",className:"btn btn-light"},n))}E.defaultProps={children:[],submitText:"Submit"};var f=E;function O(e){var t=e.labelText,a=e.id,n=e.children;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:a},t),n)}O.defaultProps={labelText:"",id:""};var j=O,k=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).submitForm=a.submitForm.bind(Object(b.a)(a)),a.state={},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"submitForm",value:function(){this.props.history.push("/EBClient/Login")}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement(f,{callBack:this.submitForm},r.a.createElement(j,{labelText:"Name",id:"nameField"},r.a.createElement("input",{type:"text",className:"form-control",id:"nameField",placeholder:"Bob"})),r.a.createElement(j,{labelText:"Email",id:"emailField"},r.a.createElement("input",{type:"email",className:"form-control",id:"emailField",placeholder:"name@example.com"})),r.a.createElement(j,{labelText:"Password",id:"passwordField"},r.a.createElement("input",{type:"password",className:"form-control",id:"passwordField",placeholder:""}))))}}]),t}(r.a.Component),y=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).submitForm=a.submitForm.bind(Object(b.a)(a)),a.state={},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"submitForm",value:function(){var e=this.props.history;localStorage.setItem("isUser","yes"),e.push("/EBClient/")}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement(f,{callBack:this.submitForm},r.a.createElement(j,{labelText:"Email",id:"emailField"},r.a.createElement("input",{type:"email",className:"form-control",id:"emailField",placeholder:"name@example.com"})),r.a.createElement(j,{labelText:"Password",id:"passwordField"},r.a.createElement("input",{type:"password",className:"form-control",id:"passwordField",placeholder:""}))))}}]),t}(r.a.Component),N=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,"In BookDetails"))}}]),t}(r.a.Component),L=function(){function e(t){Object(s.a)(this,e),this.user=t}return Object(u.a)(e,[{key:"getNavLoggedOut",value:function(){return[{name:"Home",url:"/EBClient/"},{name:"Register",url:"/EBClient/Register"},{name:"Login",url:"/EBClient/Login"}]}},{key:"getNavLoggedInUser",value:function(e){return[{name:"Home",url:"/"},{name:"Log Out",url:"/EBClient/",action:function(){e()}},{name:"My Account",url:"/EBClient/User/".concat(this.user.id)}]}},{key:"getNavigation",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){};return this.user?this.getNavLoggedInUser(e):this.getNavLoggedOut()}}]),e}();function w(e){var t=e.routes;return r.a.createElement("div",{className:"shadow-sm mb-5 bg-white rounded"},r.a.createElement("ul",{className:"nav flex-row justify-content-center"},t.map((function(e,t){return r.a.createElement("li",{className:"nav-item",key:t},e.action?r.a.createElement("a",{className:"nav-link",href:"/",onClick:function(t){t.preventDefault(),e.action(t)}},"Log out"):r.a.createElement(c.b,{className:"nav-link",to:e.url},e.name))}))))}w.defaultProps={routes:[]};var B=w;function C(e){var t=e.title,a=e.description,n=e.facts,l=e.buttonTitle,i=e.id;return r.a.createElement("div",{className:"flex-fill shadow-lg p-3 bg-white rounded card m-2"},r.a.createElement("img",{src:"https://thumbs-prod.si-cdn.com/T_txo7Wkgu6aPjd6a8thp1kDL2s=/420x240/https://public-media.si-cdn.com/filer/91/91/91910c23-cae4-46f8-b7c9-e2b22b8c1710/lostbook.jpg",className:"card-img-top",alt:"..."}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},t),r.a.createElement("p",{className:"card-text"},a)),r.a.createElement("ul",{className:"list-group list-group-flush"},n.map((function(e,t){return r.a.createElement("li",{className:"list-group-item",key:t},e)}))),r.a.createElement("div",{className:"card-body"},r.a.createElement(c.b,{className:"btn btn-light",to:"/EBClient/Book/".concat(i)},l)))}C.defaultProps={title:"",description:"",facts:[],buttonTitle:""};var T=C,x=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,localStorage.getItem("isUser")?r.a.createElement(B,{routes:L.SIGNED_IN}):r.a.createElement(B,{routes:L.DEFAULT}),r.a.createElement("div",{className:"container d-flex"},r.a.createElement(T,{id:"5",title:"The book of Amazing vol.1",description:"Yeah, pretty good",buttonTitle:"Let's check it out!"}),r.a.createElement(T,{id:"5",title:"The book of Amazing vol.2",description:"vol.1 was better...",buttonTitle:"Let's check it out!"}),r.a.createElement(T,{id:"5",title:"The book of Amazing vol.2",description:"vol.1 was better...",buttonTitle:"Let's check it out!"}),r.a.createElement(T,{id:"5",title:"The book of Amazing vol.2",description:"vol.1 was better...",buttonTitle:"Let's check it out!"}),r.a.createElement(T,{id:"5",title:"The book of Amazing vol.2",description:"vol.1 was better...",buttonTitle:"Let's check it out!"})))}}]),t}(r.a.Component),I=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"handleSubmit",value:function(){this.props.history.push("/EBClient/Message/".concat("2","}"))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("button",{onClick:function(t){e.handleSubmit(t)},type:"button",className:"btn btn-light"},"Send message"))}}]),t}(r.a.Component),F=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,"In Message page"))}}]),t}(r.a.Component),S=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={loggedIn:!1},a.handleLogOut=a.handleLogOut.bind(Object(b.a)(a)),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.setState({loggedIn:localStorage.getItem("isUser")})}},{key:"componentDidUpdate",value:function(){var e=this.state.loggedIn,t=localStorage.getItem("isUser");t!==e&&this.setState({loggedIn:t})}},{key:"handleLogOut",value:function(){localStorage.removeItem("isUser"),this.props.history.push("/Login")}},{key:"render",value:function(){var e=this.props.children;return r.a.createElement("div",null,r.a.createElement(B,{routes:new L(this.state.loggedIn).getNavigation(this.handleLogOut)}),e)}}]),t}(r.a.Component),D=Object(o.f)(S);var U=function(){return r.a.createElement("div",null,r.a.createElement(c.a,null,r.a.createElement(o.c,null,r.a.createElement(D,null,r.a.createElement(o.a,{exact:!0,path:"/EBClient/",component:v}),r.a.createElement(o.a,{path:"/EBClient/Register",component:k}),r.a.createElement(o.a,{path:"/EBClient/Login",component:y}),r.a.createElement(o.a,{path:"/EBClient/Book/:id",component:N}),r.a.createElement(o.a,{path:"/EBClient/Library/:id",component:x}),r.a.createElement(o.a,{path:"/EBClient/User/:id",component:I}),r.a.createElement(o.a,{path:"/EBClient/Message/:id",component:F})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[23,1,2]]]);
//# sourceMappingURL=main.e591274b.chunk.js.map