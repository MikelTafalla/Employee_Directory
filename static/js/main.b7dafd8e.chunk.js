(this.webpackJsonpemployee_directory=this.webpackJsonpemployee_directory||[]).push([[0],{18:function(e,t,a){e.exports=a(44)},23:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(11),o=a.n(s);a(23),a(24);var l=function(){return n.a.createElement("div",{className:"jumbotron jumbotron-fluid header"},n.a.createElement("div",{className:"container"},n.a.createElement("h1",{className:"display-4"},"Employee Directory"),n.a.createElement("p",{className:"lead"},"See all our employees.",n.a.createElement("br",null),"You may reorganized the table by name, phone, email, country where office is located, ",n.a.createElement("br",null),"or filter specific employees by their names")))},c=a(12),i=a(13),f=a(14),m=a(17),u=a(16),d=(a(25),a(15)),h=a.n(d),p=function(){return h.a.get("https://randomuser.me/api/?results=10")};var w=function(e){return n.a.createElement("table",{className:"table"},n.a.createElement("thead",{className:"thead-dark"},n.a.createElement("tr",null,n.a.createElement("th",{scope:"col"},"Photo"),n.a.createElement("th",{scope:"col"},"Name",n.a.createElement("span",{onClick:e.handleSort},n.a.createElement("i",{id:"name",className:e.class}))),n.a.createElement("th",{scope:"col"},"Phone",n.a.createElement("span",{onClick:e.handleSort},n.a.createElement("i",{id:"phone",className:e.class}))),n.a.createElement("th",{scope:"col"},"Email",n.a.createElement("span",{onClick:e.handleSort},n.a.createElement("i",{id:"email",className:e.class}))),n.a.createElement("th",{scope:"col"},"Country of Office",n.a.createElement("span",{onClick:e.handleSort},n.a.createElement("i",{id:"country",className:e.class}))))),n.a.createElement("tbody",null,e.users.map((function(e){return n.a.createElement("tr",{key:e.email},n.a.createElement("td",null,n.a.createElement("img",{src:e.picture.medium,alt:"employeePhoto"})),n.a.createElement("td",null,e.name.first," ",e.name.last),n.a.createElement("td",null,e.phone),n.a.createElement("td",null,e.email),n.a.createElement("td",null,e.location.country))}))))};a(43);var E=function(e){return n.a.createElement("nav",{className:"navbar navbar-collapse bg-dark"},n.a.createElement("input",{onChange:e.handleChange,className:"form-control mr-sm-2",type:"text",placeholder:"Look Me Up","aria-label":"Search",name:"search",value:e.search}))},v=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={search:"",className:"fa fa-fw fa-sort up",originalUsers:[],filteredUsers:[]},e.usersArr=function(){p().then((function(t){return e.setState({originalUsers:t.data.results,filteredUsers:t.data.results})})).catch((function(e){return console.log(e)}))},e.handleChange=function(t){var a=t.target,r=a.name,n=a.value;if(e.setState(Object(c.a)({},r,n)),""===n)e.setState({filteredUsers:e.state.originalUsers});else if(""!==n){var s=e.state.originalUsers.filter((function(e){return e.name.first.toLowerCase().startsWith(n.toLowerCase())||e.name.last.toLowerCase().startsWith(n.toLowerCase())||"".concat(e.name.first," ").concat(e.name.last).toLowerCase().startsWith(n.toLowerCase())}));e.setState({filteredUsers:s})}},e.className=function(t){"fa fa-fw fa-sort up"===t?e.setState({className:"fa fa-fw fa-sort down"}):"fa fa-fw fa-sort down"===t&&e.setState({className:"fa fa-fw fa-sort up"})},e.handleSort=function(t){var a=t.target,r=a.className,n=a.id;if("fa fa-fw fa-sort up"===r&&"name"===n){var s=e.state.filteredUsers.sort((function(e,t){return e.name.first.toLowerCase()>t.name.first.toLowerCase()?1:-1}));e.className(r),e.setState({filteredUsers:s})}else if("fa fa-fw fa-sort down"===r&&"name"===n){var o=e.state.filteredUsers.sort((function(e,t){return e.name.first.toLowerCase()<t.name.first.toLowerCase()?1:-1}));e.className(r),e.setState({filteredUsers:o})}else if("fa fa-fw fa-sort up"===r&&"phone"===n){var l=e.state.filteredUsers.sort((function(e,t){return e.phone>t.phone?1:-1}));e.className(r),e.setState({filteredUsers:l})}else if("fa fa-fw fa-sort down"===r&&"phone"===n){var c=e.state.filteredUsers.sort((function(e,t){return e.phone<t.phone?1:-1}));e.className(r),e.setState({filteredUsers:c})}else if("fa fa-fw fa-sort up"===r&&"email"===n){var i=e.state.filteredUsers.sort((function(e,t){return e.email>t.email?1:-1}));e.className(r),e.setState({filteredUsers:i})}else if("fa fa-fw fa-sort down"===r&&"email"===n){var f=e.state.filteredUsers.sort((function(e,t){return e.email<t.email?1:-1}));e.className(r),e.setState({filteredUsers:f})}else if("fa fa-fw fa-sort up"===r&&"country"===n){var m=e.state.filteredUsers.sort((function(e,t){return e.location.country.toLowerCase()>t.location.country.toLowerCase()?1:-1}));e.className(r),e.setState({filteredUsers:m})}else if("fa fa-fw fa-sort down"===r&&"country"===n){var u=e.state.filteredUsers.sort((function(e,t){return e.location.country.toLowerCase()<t.location.country.toLowerCase()?1:-1}));e.className(r),e.setState({filteredUsers:u})}},e}return Object(f.a)(a,[{key:"componentDidMount",value:function(){this.usersArr()}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(E,{search:this.state.search,handleChange:this.handleChange}),n.a.createElement(w,{users:this.state.filteredUsers,handleSort:this.handleSort,class:this.state.className}))}}]),a}(n.a.Component);var y=function(){return n.a.createElement("div",null,n.a.createElement(l,null),n.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.b7dafd8e.chunk.js.map