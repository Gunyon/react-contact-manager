(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,a){e.exports=a(40)},29:function(e,t,a){},37:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),o=a.n(c),l=(a(29),a(6)),s=a(7),i=a(9),m=a(8),u=a(10),p=a(42),h=a(44),d=a(43),f=a(3),b=a.n(f),v=a(11),E=a(22),y=a(16),j=a(12),N=r.a.createContext(),O=N.Provider,C=N.Consumer,g=function(e,t){var a=t.type,n=t.payload;switch(a){case"DELETE_CONTACT":return Object(y.a)({},e,{contacts:e.contacts.filter(function(e){return e.id!==n})});case"ADD_CONTACT":return Object(y.a)({},e,{contacts:[n].concat(Object(E.a)(e.contacts))});case"UPDATE_CONTACT":return Object(y.a)({},e,{contacts:e.contacts.map(function(e){return e.id===n.id?n:e})});default:return e}},k=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={contacts:[],dispatch:function(e){a.setState(function(t){return g(t,e)})}},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(v.a)(b.a.mark(function e(){var t,a;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/users");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,this.setState({contacts:a});case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(O,{value:this.state},this.props.children)}}]),t}(n.Component),w=C,x=a(41),S=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={showContactInfo:!1},a.onShowClick=function(){a.setState(function(e){return{showContactInfo:!e.showContactInfo}})},a.onDeleteClick=function(){var e=Object(v.a)(b.a.mark(function e(t,a){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.a)("https://jsonplaceholder.typicode.com/users/".concat(t),{method:"DELETE"});case 2:200===e.sent.status&&a({type:"DELETE_CONTACT",payload:t});case 4:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}(),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.contact,a=t.id,n=t.name,c=t.email,o=t.phone,l=this.state.showContactInfo;return r.a.createElement(w,null,function(t){var s=t.dispatch;return r.a.createElement("div",{className:"card card-body mb-3"},r.a.createElement("h4",null,n," ",r.a.createElement("i",{onClick:e.onShowClick,className:"fas fa-sort-down",style:{cursor:"pointer"}}),r.a.createElement("i",{className:"fas fa-times",style:{cursor:"pointer",float:"right",color:"red"},onClick:e.onDeleteClick.bind(e,a,s)})," ",r.a.createElement(x.a,{to:"contact/edit/".concat(a)},r.a.createElement("i",{className:"fas fa-edit",style:{float:"right",cursor:"pointer",marginRight:"1rem"}}))),l?r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},"Email: ",c),r.a.createElement("li",{className:"list-group-item"},"Phone: ",o)):null)})}}]),t}(n.Component),T=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(w,null,function(e){var t=e.contacts;return r.a.createElement(n.Fragment,null,r.a.createElement("h1",{className:"display-4 mb-2"},r.a.createElement("span",{className:"text-danger"},"Contact")," list"),t.map(function(e){return r.a.createElement(S,{key:e.id,contact:e})}))})}}]),t}(n.Component),A=a(13),D=a(20),P=a.n(D);function F(e){var t=e.label,a=e.name,n=e.value,c=e.placeholder,o=e.type,l=e.onChange,s=e.error;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:a},t),r.a.createElement("input",{type:o,name:a,className:P()("form-control form-control-lg",{"is-invalid":s}),placeholder:c,value:n,onChange:l}),s&&r.a.createElement("div",{className:"invalid-feedback"},s))}F.defaultProps={placeholder:"",type:"text",onChange:function(){}};var q=F,_=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",errors:{}},a.handleFormControls=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(A.a)({},n,r))},a.onSubmit=function(){var e=Object(v.a)(b.a.mark(function e(t,n){var r,c,o,l,s,i;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r=a.state,c=r.name,o=r.email,l=r.phone,""!==c){e.next=5;break}return a.setState({errors:{name:"Name is required"}}),e.abrupt("return");case 5:if(""!==o){e.next=8;break}return a.setState({errors:{email:"Email is required"}}),e.abrupt("return");case 8:if(""!==l){e.next=11;break}return a.setState({errors:{phone:"Phone is required"}}),e.abrupt("return");case 11:return e.next=13,Object(j.a)("https://jsonplaceholder.typicode.com/users",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:c,email:o,phone:l})});case 13:return s=e.sent,e.next=16,s.json();case 16:i=e.sent,t({type:"ADD_CONTACT",payload:i}),a.setState({name:"",email:"",phone:"",errors:{}}),a.props.history.push("/");case 20:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}(),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.email,c=t.phone,o=t.errors;return r.a.createElement(w,null,function(t){var l=t.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Add contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,l)},r.a.createElement(q,{label:"Name",name:"name",placeholder:"Enter name...",value:a,onChange:e.handleFormControls,error:o.name}),r.a.createElement(q,{label:"Email",name:"email",type:"email",placeholder:"Enter email...",value:n,onChange:e.handleFormControls,error:o.email}),r.a.createElement(q,{label:"Phone",name:"phone",placeholder:"Enter phone...",value:c,onChange:e.handleFormControls,error:o.phone}),r.a.createElement("input",{type:"submit",value:"Add contact",className:"btn btn-block btn-light"}))))})}}]),t}(n.Component),I=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",errors:{}},a.handleFormControls=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(A.a)({},n,r))},a.onSubmit=function(){var e=Object(v.a)(b.a.mark(function e(t,n){var r,c,o,l,s,i,m;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r=a.state,c=r.name,o=r.email,l=r.phone,""!==c){e.next=5;break}return a.setState({errors:{name:"Name is required"}}),e.abrupt("return");case 5:if(""!==o){e.next=8;break}return a.setState({errors:{email:"Email is required"}}),e.abrupt("return");case 8:if(""!==l){e.next=11;break}return a.setState({errors:{phone:"Phone is required"}}),e.abrupt("return");case 11:return s=a.props.match.params.id,e.next=14,Object(j.a)("https://jsonplaceholder.typicode.com/users/".concat(s),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:c,email:o,phone:l})});case 14:return i=e.sent,e.next=17,i.json();case 17:m=e.sent,console.log(m),t({type:"UPDATE_CONTACT",payload:m}),a.setState({name:"",email:"",phone:"",errors:{}}),a.props.history.push("/");case 22:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}(),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(v.a)(b.a.mark(function e(){var t,a,n,r,c,o;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,e.next=3,Object(j.a)("https://jsonplaceholder.typicode.com/users/".concat(t));case 3:return a=e.sent,e.next=6,a.json();case 6:n=e.sent,r=n.name,c=n.email,o=n.phone,this.setState({name:r,email:c,phone:o});case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.email,c=t.phone,o=t.errors;return r.a.createElement(w,null,function(t){var l=t.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Edit contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,l)},r.a.createElement(q,{label:"Name",name:"name",placeholder:"Enter name...",value:a,onChange:e.handleFormControls,error:o.name}),r.a.createElement(q,{label:"Email",name:"email",type:"email",placeholder:"Enter email...",value:n,onChange:e.handleFormControls,error:o.email}),r.a.createElement(q,{label:"Phone",name:"phone",placeholder:"Enter phone...",value:c,onChange:e.handleFormControls,error:o.phone}),r.a.createElement("input",{type:"submit",value:"Update contact",className:"btn btn-block btn-light"}))))})}}]),t}(n.Component);function J(e){var t=e.branding;return r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{href:"/",className:"navbar-brand"},t),r.a.createElement("div",null,r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(x.a,{to:"/",className:"nav-link"},r.a.createElement("i",{className:"fas fa-home"})," Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(x.a,{to:"/contact/add",className:"nav-link"},r.a.createElement("i",{className:"fas fa-plus"})," Add")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(x.a,{to:"/about",className:"nav-link"},r.a.createElement("i",{className:"fas fa-question"})," About"))))))}J.defaultProps={branding:"My app"};var U=J;function L(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},"About contact manager"),r.a.createElement("p",{className:"lead"},"Simple app to manage contacts"),r.a.createElement("p",{className:"text-secondary"},"Version 1.0.0"))}var M=function(){return r.a.createElement("div",{className:"text-center"},r.a.createElement("h1",{className:"display-4"},r.a.createElement("span",{className:"text-danger"},"404")," Page not found"),r.a.createElement("p",{className:"lead"},"Sorry, that page does not exist"))},B=(a(35),a(37),function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(k,null,r.a.createElement(p.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(U,{branding:"Contact manager"}),r.a.createElement("div",{className:"container"},r.a.createElement(h.a,null,r.a.createElement(d.a,{exact:!0,path:"/",component:T}),r.a.createElement(d.a,{exact:!0,path:"/contact/add/",component:_}),r.a.createElement(d.a,{exact:!0,path:"/contact/edit/:id",component:I}),r.a.createElement(d.a,{exact:!0,path:"/about/",component:L}),r.a.createElement(d.a,{component:M}))))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[23,2,1]]]);
//# sourceMappingURL=main.ce0410af.chunk.js.map