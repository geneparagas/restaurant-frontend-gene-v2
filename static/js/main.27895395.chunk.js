(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{262:function(e,t,a){e.exports=a(523)},267:function(e,t,a){},523:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(256),o=a.n(c),i=(a(267),a(6)),l=a(7),s=a(9),m=a(8),u=a(10),d=a(526),p=a(528),h=a(524),f=a(269),v=a(525),E=function(){return r.a.createElement("nav",{className:"nav-wrapper grey darken-3"},r.a.createElement("div",{className:"container"},r.a.createElement(f.a,{to:"/restaurant-frontend-gene-v2",className:"brand-logo"},"Restaurant-app"),r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(v.a,{className:"btn red pulse",to:"/restaurant-frontend-gene-v2/create"},"Add Collection")))))},g=function(e){var t=e.project;return r.a.createElement("div",{className:"card z-depth-1 project-summary"},r.a.createElement("div",{className:"card-content grey-text text-darken-3"},r.a.createElement("h6",null,t.restaurant),r.a.createElement("p",{className:"grey-text"},t.time)))},b=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={searchString:"",searchTime:"",searchDay:""},a.handleChange=function(e){a.setState({searchString:e.target.value})},a.handleTime=function(e){a.setState({searchTime:e.target.value})},a.handleDay=function(e){a.setState({searchDay:e.target.value})},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.restaurants,t=this.props.time,a=this.props.day,n=this.state.searchString.trim().toLowerCase();n.length>0&&(e=e.filter(function(e){return e.restaurant.toLowerCase().match(n)}));var c=this.state.searchTime.trim().toLowerCase(),o=this.state.searchDay.trim().toLowerCase(),i=o+c;return(c.length>0||o.length>0)&&(e=e.filter(function(e){return e.selecttime.toLowerCase().match(i)})),r.a.createElement("div",{className:"project-list"},r.a.createElement("div",{className:"input-field"},r.a.createElement("div",{className:"white-text"},r.a.createElement("h4",{className:"remove-margin-bottom red-text lighten-1"},"Restaurants")),r.a.createElement("div",{className:"input-field"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s4"},r.a.createElement("input",{type:"text",className:"white-text placeholder-white",value:this.state.searchString,onChange:this.handleChange,placeholder:"Search Name"})),r.a.createElement("div",{className:"col s4"},r.a.createElement("select",{onChange:this.handleDay,className:"browser-default"},r.a.createElement("option",{value:""},"Select Day"),a&&a.map(function(e){return r.a.createElement("option",{key:e.id,value:e.name},e.name)}))),r.a.createElement("div",{className:"col s4"},r.a.createElement("select",{onChange:this.handleTime,className:"browser-default"},r.a.createElement("option",{value:""},"Select Time"),t&&t.map(function(e){return r.a.createElement("option",{key:e.id,value:e.name},e.name)})))))),e&&e.map(function(e){return r.a.createElement(g,{project:e,key:e.id})}))}}]),t}(n.Component),y=function(e){var t=e.project,a=e.displayfavorites;return r.a.createElement("div",{className:"card z-depth-1 project-summary"},r.a.createElement("div",{className:"card-content grey-text text-darken-3"},r.a.createElement("span",{className:"card-title remove-margin-bottom"},t.collection," ",r.a.createElement("div",{className:"btn pink lighten-1 right"},"see details")),r.a.createElement("ul",{className:"browser-default"},a&&a.filter(function(e){return e.name===t.collection||e.collectId===t.collectId}).map(function(e){return r.a.createElement("li",{className:"remove-margin-bottom grey-text text-darken-3",key:e.id},r.a.createElement("h6",null,e.restaurant))}))))},N=function(e){var t=e.collections,a=e.displayfavorites;return r.a.createElement("div",{className:"project-list section"},t&&t.map(function(e){return r.a.createElement(f.a,{to:"/restaurant-frontend-gene-v2/project/"+e.id,key:e.id},r.a.createElement(y,{project:e,key:e.id,displayfavorites:a}))}))},j=a(13),O=a(29),C=a(18),S=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.restaurants,t=this.props.collections,a=this.props.displayfavorites,n=this.props.time,c=this.props.day;return r.a.createElement("div",{className:"dashboard container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 m6"},r.a.createElement(b,{restaurants:e,time:n,day:c})),r.a.createElement("div",{className:"col s12 m5 offset-m1"},r.a.createElement("div",{className:"white-text"},r.a.createElement("h4",{className:"remove-margin-bottom teal-text darken-2"},"Collections ",r.a.createElement(f.a,{className:"btn-floating btn pulse",to:"/restaurant-frontend-gene-v2/create"},r.a.createElement("i",{className:"material-icons"},"add")))),r.a.createElement(N,{collections:t,displayfavorites:a}))))}}]),t}(n.Component),w=Object(C.d)(Object(j.b)(function(e){return{restaurants:e.firestore.ordered.restaurants,collections:e.firestore.ordered.collections,displayfavorites:e.firestore.ordered.displayfavorites,time:e.firestore.ordered.time,day:e.firestore.ordered.day}}),Object(O.firestoreConnect)([{collection:"restaurants"},{collection:"collections"},{collection:"displayfavorites"},{collection:"time"},{collection:"day"}]))(S),R=a(23),k=a(56),T=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={restaurant:a.props.project.restaurant,time:a.props.project.time,collectId:a.props.collection,restaurantid:a.props.project.id,updateId:a.props.collection,name:a.props.name,pick:"true"},a.handleChange=function(e){a.setState(Object(R.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.addFav(a.state)},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"card z-depth-1 project-summary"},r.a.createElement("div",{className:"card-content grey-text text-darken-3"},r.a.createElement("div",{className:"row remove-margin-bottom"},r.a.createElement("div",{className:"col s10"},r.a.createElement("span",{className:"card-title "},this.props.project.restaurant),r.a.createElement("p",{className:"grey-text"},this.props.project.time)),r.a.createElement("div",{className:"col s2"},r.a.createElement("button",{className:"btn waves-effect waves-light right",onClick:this.handleSubmit},"Add")))))}}]),t}(n.Component),A=Object(j.b)(null,function(e){return{addFav:function(t){return e(function(e){return function(t,a,n){var r=n.getFirestore,c=e.collectId,o=e.restaurantid,i=e.pick,l=r();l.collection("collections").doc(c).collection("favorite").add(Object(k.a)({},e)).then(function(){t({type:"ADD_FAVORITE_SUCCESS"})}).catch(function(e){t({type:"ADD_FAVORITE_ERROR"},e)}),l.collection("displayfavorites").doc(o).set(Object(k.a)({},e)).then(function(){t({type:"ADD_FAVORITE_SUCCESS"})}).catch(function(e){t({type:"ADD_FAVORITE_ERROR"},e)}),l.collection("restaurants").doc(o).update({pick:i}).then(function(){t({type:"UPDATE_RESTAURANT_SUCCESS"})}).catch(function(e){t({type:"UPDATE_RESTAURANT_ERROR"},e)})}}(t))}}})(T),D=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={searchString:"",searchTime:"",searchDay:""},a.handleChange=function(e){a.setState({searchString:e.target.value})},a.handleTime=function(e){a.setState({searchTime:e.target.value})},a.handleDay=function(e){a.setState({searchDay:e.target.value})},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.time,t=this.props.day,a=this.props.restaurants,n=this.state.searchString.trim().toLowerCase();n.length>0&&(a=a.filter(function(e){return e.restaurant.toLowerCase().match(n)}));var c=this.state.searchTime.trim().toLowerCase(),o=this.state.searchDay.trim().toLowerCase(),i=o+c;(c.length>0||o.length>0)&&(a=a.filter(function(e){return e.selecttime.toLowerCase().match(i)}));var l=this.props.collection,s=this.props.name;return r.a.createElement("div",{className:"project-list section"},r.a.createElement("div",{className:"input-field"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s6"},r.a.createElement("input",{type:"text",className:"placeholder-white white-text",value:this.state.searchString,onChange:this.handleChange,placeholder:"Search Name"})),r.a.createElement("div",{className:"col s3"},r.a.createElement("select",{onChange:this.handleDay,className:"browser-default"},r.a.createElement("option",{value:""},"Select Day"),t&&t.map(function(e){return r.a.createElement("option",{key:e.id,value:e.name},e.name)}))),r.a.createElement("div",{className:"col s3"},r.a.createElement("select",{onChange:this.handleTime,className:"browser-default"},r.a.createElement("option",{value:""},"Select Time"),e&&e.map(function(e){return r.a.createElement("option",{key:e.id,value:e.name},e.name)}))))),a&&a.filter(function(e){return"true"!==e.pick}).map(function(e){return r.a.createElement(A,{project:e,key:e.id,name:s,collection:l})}))}}]),t}(n.Component),_=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={restaurantid:a.props.project.id,collectId:a.props.project.collectId,updateId:a.props.project.restaurantid,pick:"false"},a.handleChange=function(e){a.setState(Object(R.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.removeFav(a.state)},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"card z-depth-0 project-summary"},r.a.createElement("div",{className:"card-content grey-text text-darken-3"},r.a.createElement("div",{className:"row remove-margin-bottom"},r.a.createElement("div",{className:"col s10"},r.a.createElement("span",{className:"card-title "},this.props.project.restaurant),r.a.createElement("p",{className:"grey-text"},this.props.project.time)),r.a.createElement("div",{className:"col s2 remove-padding"},r.a.createElement("button",{className:"btn pink lighten-1 right",onClick:this.handleSubmit},"remove")))))}}]),t}(n.Component),x=Object(j.b)(null,function(e){return{removeFav:function(t){return e(function(e){return function(t,a,n){var r=n.getFirestore,c=e.restaurantid,o=e.collectId,i=e.updateId,l=e.pick,s=r();s.collection("collections").doc(o).collection("favorite").doc(c).delete().then(function(){console.log("Document successfully deleted!")}).catch(function(e){console.error("Error removing document: ",e)}),s.collection("restaurants").doc(i).update({pick:l}).then(function(){t({type:"UPDATE_RESTAURANT_SUCCESS"})}).catch(function(e){t({type:"UPDATE_RESTAURANT_ERROR"},e)}),s.collection("displayfavorites").doc(i).delete().then(function(){console.log("Document successfully deleted!")}).catch(function(e){console.error("Error removing document: ",e)}),s.collection("restaurants").doc(i).update({pick:l}).then(function(){t({type:"UPDATE_RESTAURANT_SUCCESS"})}).catch(function(e){t({type:"UPDATE_RESTAURANT_ERROR"},e)})}}(t))}}})(_),U=function(e){var t=e.favorites,a=e.restaurants;return r.a.createElement("div",{className:"project-list section"},t&&t.map(function(e){return r.a.createElement(x,{project:e,key:e.id,restaurants:a})}))},I=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={collectId:a.props.collection},a.handleChange=function(e){a.setState(Object(R.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.updateCollection(a.state),a.state.shown=!1},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"toggle",value:function(){this.setState({shown:!this.state.shown})}},{key:"render",value:function(){var e={display:this.state.shown?"block":"none"};return r.a.createElement("div",null,r.a.createElement("div",{className:"col left margin-left-10"},r.a.createElement("div",{className:"btn-floating btn-small waves-effect waves-light cyan pulse",onClick:this.toggle.bind(this)},r.a.createElement("i",{className:"material-icons"},"edit"))),r.a.createElement("div",{className:"col s6"},r.a.createElement("div",{style:e},r.a.createElement("form",{className:"white",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"row remove-margin"},r.a.createElement("div",{className:"input-field remove-margin col"},r.a.createElement("input",{type:"text",id:"collection",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field remove-margin col"},r.a.createElement("button",{className:"btn blue lighten-1"},"Update")))))))}}]),t}(n.Component),F=Object(j.b)(null,function(e){return{updateCollection:function(t){return e(function(e){return function(t,a,n){var r=n.getFirestore,c=e.collectId;r().collection("collections").doc(c).update(Object(k.a)({},e)).then(function(){t({type:"UPDATE_COLLECTION_SUCCESS"})}).catch(function(e){t({type:"UPDATE_COLLECTION_ERROR"},e)})}}(t))}}})(I),L=Object(C.d)(Object(j.b)(function(e,t){console.log(e);var a=t.match.params.id,n=e.firestore.data.collections;return{project:n?n[a]:null,restaurants:e.firestore.ordered.restaurants,favorites:e.firestore.ordered.favorite,time:e.firestore.ordered.time,day:e.firestore.ordered.day,displayfavorites:e.firestore.ordered.displayfavorites}}),Object(O.firestoreConnect)(function(e){return[{collection:"restaurants"},{collection:"collections"},{collection:"time"},{collection:"day"},{collection:"displayfavorites"},{collection:"collections",doc:e.match.params.id,subcollections:[{collection:"favorite"}],storeAs:"favorite"}]}))(function(e){var t=e.project,a=e.restaurants,n=e.favorites,c=e.match.params.id,o=e.time,i=e.day,l=e.displayfavorites;return t?r.a.createElement("div",{className:"container section project-details"},r.a.createElement("div",{className:"card z-depth-0"},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-title left"},t.collection),r.a.createElement(F,{name:t.collection,collection:c}),r.a.createElement(f.a,{className:"waves-effect waves-light right btn green",to:"/restaurant-frontend-gene-v2/Send-email/"+c},"Share ",r.a.createElement("i",{className:"material-icons right"},"send"))),r.a.createElement("div",{className:"card-content"},r.a.createElement(U,{favorites:n,collection:c,restaurants:a})),r.a.createElement("div",{className:"card-action pink lighten-1 grey-text"},r.a.createElement("div",{className:"col s12"},r.a.createElement("h5",{className:"remove-margin white-text"},"Add to Favorites")),r.a.createElement(D,{restaurants:a,collection:c,name:t.collection,favorites:n,time:o,day:i,displayfavorites:l})))):r.a.createElement("div",{className:"container center"},r.a.createElement("div",{className:"progress"},r.a.createElement("div",{className:"indeterminate"})))}),P=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={collection:""},a.handleChange=function(e){a.setState(Object(R.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.createCollection(a.state),a.props.history.push("/restaurant-frontend-gene-v2/")},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("form",{className:"white form-add-styles",onSubmit:this.handleSubmit},r.a.createElement("h5",{className:"grey-text text-darken-3 padding-bottom"},"Create a New Collection"),r.a.createElement("div",{className:"input-field"},r.a.createElement("input",{type:"text",id:"collection",onChange:this.handleChange,required:!0}),r.a.createElement("label",{htmlFor:"collection"},"Collection Title")),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1"},"Create"))))}}]),t}(n.Component),z=Object(j.b)(null,function(e){return{createCollection:function(t){return e(function(e){return function(t,a,n){(0,n.getFirestore)().collection("collections").add(Object(k.a)({},e)).then(function(){t({type:"CREATE_COLECTION_SUCCESS"})}).catch(function(e){t({type:"CREATE_COLECTION_ERROR"},e)})}}(t))}}})(P),V=a(166),W=a.n(V),B=a(259),J=a(26),M=a(260),q=a.n(M),Q=a(527),K=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this))).handleChange=function(e){a.setState(Object(R.a)({},e.target.id,e.target.value))},a.renderRedirect=function(){if(a.state.redirect)return r.a.createElement(Q.a,{to:"/restaurant-frontend-gene-v2/project/"+a.props.userid})},a.state={email:"",collection:e.collectionName,message:"",link:e.userid,redirect:!1},a.handleChange=a.handleChange.bind(Object(J.a)(Object(J.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(J.a)(Object(J.a)(a))),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"handleSubmit",value:function(){var e=Object(B.a)(W.a.mark(function e(t){var a,n,r,c,o;return W.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),this.setState({redirect:!0}),a=this.state,n=a.email,r=a.collection,c=a.message,o=a.link,e.next=5,q.a.post("/api/form",{email:n,collection:r,message:c,link:o});case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},this.renderRedirect(),r.a.createElement("form",{className:"white form-add-styles",onSubmit:this.handleSubmit},r.a.createElement("h5",{className:"grey-text text-darken-3 padding-bottom"},"Share to a Friend"),r.a.createElement("div",{className:"input-field"},r.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange,required:!0}),r.a.createElement("label",{htmlFor:"email"},"Email")),r.a.createElement("div",{className:"input-field"},r.a.createElement("textarea",{id:"message",className:"materialize-textarea",onChange:this.handleChange}),r.a.createElement("label",{htmlFor:"email"},"Message")),r.a.createElement("div",{className:"project-list section"}),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1"},"Submit"))))}}]),t}(n.Component),Y=Object(C.d)(Object(j.b)(function(e,t){var a=t.match.params.userid,n=e.firestore.data.collections;return{project:n?n[a]:null,favorites:e.firestore.ordered.favorite}}),Object(O.firestoreConnect)(function(e){return[{collection:"collections"},{collection:"collections",doc:e.match.params.userid,subcollections:[{collection:"favorite"}],storeAs:"favorite"}]}))(function(e){var t=e.project,a=e.match.params.userid;return t?r.a.createElement(K,{collectionName:t.collection,userid:a}):r.a.createElement("div",{className:"container center"},r.a.createElement("div",{className:"progress"},r.a.createElement("div",{className:"indeterminate"})))}),$=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(E,null),r.a.createElement(p.a,null,r.a.createElement(h.a,{exact:!0,path:"/restaurant-frontend-gene-v2",component:w}),r.a.createElement(h.a,{path:"/restaurant-frontend-gene-v2/project/:id",component:L}),r.a.createElement(h.a,{path:"/restaurant-frontend-gene-v2/addfavorite/:id",component:A}),r.a.createElement(h.a,{path:"/restaurant-frontend-gene-v2/create",component:z}),r.a.createElement(h.a,{path:"/restaurant-frontend-gene-v2/Send-email/:userid",component:Y}))))}}]),t}(n.Component),G=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function H(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var X={projects:[{id:"1",restaurant:"The Cheesecake Factory",time:"Mon-Thu 11 am - 11 pm / Fri-Sat 11 am - 12:30 am / Sun 10 am - 11 pm"},{id:"2",restaurant:"Kushi Tsuru",time:"Mon-Sun 11:30 am - 9 pm"},{id:"3",restaurant:"Osakaya Restaurant",time:"Mon-Thu, Sun 11:30 am - 9 pm / Fri-Sat 11:30 am - 9:30 pm"}]},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X;switch((arguments.length>1?arguments[1]:void 0).type){case"CREATE_COLECTION_SUCCESS":return console.log("create project success"),e;case"CREATE_COLECTION_ERROR":return console.log("create project error"),e;case"UPDATE_COLLECTION_SUCCESS":return console.log("update collection success"),e;case"UPDATE_COLLECTION_ERROR":return console.log("update collection error"),e;case"ADD_FAVORITE_SUCCESS":return console.log("update favorite success"),e;case"ADD_FAVORITE_ERROR":return console.log("update favorite error"),e;case"UPDATE_RESTAURANT_SUCCESS":return console.log("update restaurant success"),e;case"UPDATE_RESTAURANT_ERROR":return console.log("update restaurant error"),e;default:return e}},ee=a(73),te=Object(C.c)({project:Z,firestore:ee.firestoreReducer}),ae=a(261),ne=a(167),re=a.n(ne);a(516),a(521);re.a.initializeApp({apiKey:"AIzaSyCpD7fTV5BkmQ7bBEJbzQFvq86Wroe-kJY",authDomain:"restaurant-gene.firebaseapp.com",databaseURL:"https://restaurant-gene.firebaseio.com",projectId:"restaurant-gene",storageBucket:"restaurant-gene.appspot.com",messagingSenderId:"134885247151"});var ce=re.a,oe=Object(C.e)(te,Object(C.d)(Object(C.a)(ae.a.withExtraArgument({getFirebase:O.getFirebase,getFirestore:ee.getFirestore})),Object(O.reactReduxFirebase)(ce),Object(ee.reduxFirestore)(ce)));o.a.render(r.a.createElement(j.a,{store:oe},r.a.createElement($,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/restaurant-frontend-gene-v2",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/restaurant-frontend-gene-v2","/service-worker.js");G?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):H(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):H(e)})}}()}},[[262,2,1]]]);
//# sourceMappingURL=main.27895395.chunk.js.map