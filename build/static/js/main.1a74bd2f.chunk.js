(this.webpackJsonpcotd=this.webpackJsonpcotd||[]).push([[0],{29:function(e,t,a){e.exports=a(55)},54:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(13),i=a(57),c=a(58),o=a(59),l=a(3),u=a(4),h=a(5),m=a(6);function p(e){return(e/100).toLocaleString("en-US",{style:"currency",currency:"USD"})}function d(e){return e[Math.floor(Math.random()*e.length)]}function f(){var e=["adorable","beautiful","clean","drab","elegant","fancy","glamorous","handsome","long","magnificent","old-fashioned","plain","quaint","sparkling","ugliest","unsightly","angry","bewildered","clumsy","defeated","embarrassed","fierce","grumpy","helpless","itchy","jealous","lazy","mysterious","nervous","obnoxious","panicky","repulsive","scary","thoughtless","uptight","worried"];return"".concat(d(e),"-").concat(d(e),"-").concat(d(["women","men","children","teeth","feet","people","leaves","mice","geese","halves","knives","wives","lives","elves","loaves","potatoes","tomatoes","cacti","foci","fungi","nuclei","syllabuses","analyses","diagnoses","oases","theses","crises","phenomena","criteria","data"]))}var v=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).myInput=r.a.createRef(),e.goToStore=function(t){t.preventDefault();var a=e.myInput.current.value;e.props.history.push("/store/".concat(a))},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("form",{className:"store-selector",onSubmit:this.goToStore},r.a.createElement("h2",null,"Please Enter A Store"),r.a.createElement("input",{type:"text",ref:this.myInput,required:!0,placeholder:"Enter a store name",defaultValue:f()}),r.a.createElement("button",{type:"submit"},"Visit Store"))}}]),a}(r.a.Component),g=a(9),b=function(e){return r.a.createElement("header",{className:"top"},r.a.createElement("h1",null,"Catch",r.a.createElement("span",{className:"ofThe"},r.a.createElement("span",{className:"of"},"of"),r.a.createElement("span",{className:"the"},"the")),"Day"),r.a.createElement("h3",{className:"tagline"},r.a.createElement("span",null,e.tagline)))},y=a(12),E=a.n(y),O=a(19),j=a(14),k=a(10),w=a.n(k),S=(a(38),function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).nameRef=r.a.createRef(),e.priceRef=r.a.createRef(),e.statusRef=r.a.createRef(),e.descRef=r.a.createRef(),e.imageRef=r.a.createRef(),e.createFish=function(t){t.preventDefault();var a={name:e.nameRef.current.value,price:parseFloat(e.priceRef.current.value),status:e.statusRef.current.value,desc:e.descRef.current.value,image:e.imageRef.current.value};e.props.addFish(a),t.currentTarget.reset()},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("form",{className:"fish-edit",onSubmit:this.createFish},r.a.createElement("input",{name:"name",type:"text",ref:this.nameRef,placeholder:"Name"}),r.a.createElement("input",{name:"price",type:"text",ref:this.priceRef,placeholder:"Price"}),r.a.createElement("select",{name:"status",type:"text",ref:this.statusRef},r.a.createElement("option",{value:"available"},"Fresh!"),r.a.createElement("option",{value:"unavailable"},"Sold Out!")),r.a.createElement("textarea",{name:"desc",ref:this.descRef,placeholder:"Desc"}),r.a.createElement("input",{name:"image",type:"text",ref:this.imageRef,placeholder:"Image"}),r.a.createElement("button",{type:"submit"},"+ Add Fish"))}}]),a}(r.a.Component)),F=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).handleChange=function(t){var a=Object(g.a)({},e.props.fish,{[t.currentTarget.name]:t.currentTarget.value});e.props.editFish(e.props.index,a)},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"fish-edit"},r.a.createElement("input",{name:"name",type:"text",value:this.props.fish.name,onChange:this.handleChange}),r.a.createElement("input",{name:"price",type:"text",value:this.props.fish.price,onChange:this.handleChange}),r.a.createElement("select",{name:"status",value:this.props.fish.status,onChange:this.handleChange},r.a.createElement("option",{value:"available"},"Fresh!"),r.a.createElement("option",{value:"unavailable"},"Sold Out!")),r.a.createElement("textarea",{name:"desc",value:this.props.fish.desc,onChange:this.handleChange}),r.a.createElement("input",{name:"image",value:this.props.fish.image,onChange:this.handleChange}),r.a.createElement("button",{onClick:function(){e.props.deleteFish(e.props.index)}},"Remove Fish"))}}]),a}(r.a.Component),C=function(e){return r.a.createElement("nav",{className:"login"},r.a.createElement("h2",null,"Inventory Login"),r.a.createElement("p",null,"Log in to manage your sites's inventory"),r.a.createElement("button",{className:"github",onClick:function(){return e.authenticate("Github")}},"Log in with Github"),r.a.createElement("button",{className:"facebook",onClick:function(){return e.authenticate("Facebook")}},"Log in with Facebook"))},x=a(27),N=a.n(x),R=(a(40),w.a.initializeApp({apiKey:"AIzaSyAPQRaDu42iFL5Hr0hd_dQo2qP3_VB4lKg",authDomain:"catch-of-the-day-vj.firebaseapp.com",databaseURL:"https://catch-of-the-day-vj.firebaseio.com",projectId:"catch-of-the-day-vj",storageBucket:"catch-of-the-day-vj.appspot.com",messagingSenderId:"170590098148",appId:"1:170590098148:web:120ff6e4ab1733cc20d2f1",measurementId:"G-GNL0V0PVL9"})),I=N.a.createClass(R.database()),T=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={uid:null,owner:null},e.authHandler=function(){var t=Object(O.a)(E.a.mark((function t(a){var n,r;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,I.fetch(e.props.storeId,{context:Object(j.a)(e)});case 2:if(n=t.sent,r=a.user?a.user:a,console.log(n),n.owner){t.next=8;break}return t.next=8,I.post("".concat(e.props.storeId,"/owner"),{data:r.uid});case 8:e.setState({uid:r.uid,owner:n.owner||a.uid});case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.authenticate=function(t){var a=new(w.a.auth["".concat(t,"AuthProvider")]);R.auth().signInWithPopup(a).then(e.authHandler)},e.logout=Object(O.a)(E.a.mark((function t(){return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.a.auth().signOut();case 2:e.setState({uid:null});case 3:case"end":return t.stop()}}),t)}))),e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;w.a.auth().onAuthStateChanged((function(t){t&&e.authHandler(t)}))}},{key:"render",value:function(){var e=this,t=r.a.createElement("button",{onClick:this.logout},"Log out!");return this.state.uid?this.state.uid!==this.state.owner?r.a.createElement("div",null,r.a.createElement("p",null,"You are not the owner!"),t):r.a.createElement("div",{className:"inventory"},r.a.createElement("h2",null,"Inventory !"),t,Object.keys(this.props.fishes).map((function(t){return r.a.createElement(F,{key:t,index:t,fish:e.props.fishes[t],editFish:e.props.editFish,deleteFish:e.props.deleteFish})})),r.a.createElement(S,{addFish:this.props.addFish}),r.a.createElement("button",{onClick:this.props.loadSampleFishes},"Load Sample Fishes!!!")):r.a.createElement(C,{authenticate:this.authenticate})}}]),a}(r.a.Component),A=a(11),L=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).renderOrder=function(t){var a=e.props.fishes[t],n=e.props.order[t],s=a&&"available"===a.status,i={classNames:"order",key:t,timeout:{enter:500,exit:500}};return a?s?r.a.createElement(A.CSSTransition,i,r.a.createElement("li",{key:t},r.a.createElement("span",null,r.a.createElement(A.TransitionGroup,{className:"count",component:"span"},r.a.createElement(A.CSSTransition,{classNames:"count",key:n,timeout:{enter:500,exit:500}},r.a.createElement("span",null,n," "))),"lbs ",a.name,p(n*a.price),r.a.createElement("button",{onClick:function(){e.props.deleteOrder(t)}},"\xd7")))):r.a.createElement(A.CSSTransition,i,r.a.createElement("li",{key:t},"Sorry ! ",a?a.name:"fish"," is not available!")):null},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=Object.keys(this.props.order),a=t.reduce((function(t,a){var n=e.props.fishes[a],r=e.props.order[a];return n&&"available"===n.status?t+r*n.price:t}),0);return r.a.createElement("div",{className:"order-wrap"},r.a.createElement("h2",null,"Order"),r.a.createElement(A.TransitionGroup,{component:"ul",className:"order"},t.map(this.renderOrder)),r.a.createElement("div",{className:"total"},r.a.createElement("strong",null,p(a))))}}]),a}(r.a.Component),D=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=this.props.details,a=t.name,n=t.image,s=t.price,i=t.desc,c="available"===t.status;return r.a.createElement("li",{className:"menu-fish"},r.a.createElement("img",{src:n,alt:a}),r.a.createElement("h3",{className:"fish-name"},a,r.a.createElement("span",{className:"price"},p(s))),r.a.createElement("p",null,i),r.a.createElement("button",{disabled:!c,onClick:function(){return e.props.addToOrder(e.props.index)}},c?"Add To Cart":"Sold Out!!"))}}]),a}(r.a.Component),P={fish1:{name:"Pacific Halibut",image:"/images/hali.jpg",desc:"Everyone\u2019s favorite white fish. We will cut it to the size you need and ship it.",price:1724,status:"available"},fish2:{name:"Lobster",image:"/images/lobster.jpg",desc:"These tender, mouth-watering beauties are a fantastic hit at any dinner party.",price:3200,status:"available"},fish3:{name:"Sea Scallops",image:"/images/scallops.jpg",desc:"Big, sweet and tender. True dry-pack scallops from the icey waters of Alaska. About 8-10 per pound",price:1684,status:"unavailable"},fish4:{name:"Mahi Mahi",image:"/images/mahi.jpg",desc:"Lean flesh with a mild, sweet flavor profile, moderately firm texture and large, moist flakes. ",price:1129,status:"available"},fish5:{name:"King Crab",image:"/images/crab.jpg",desc:"Crack these open and enjoy them plain or with one of our cocktail sauces",price:4234,status:"available"},fish6:{name:"Atlantic Salmon",image:"/images/salmon.jpg",desc:"This flaky, oily salmon is truly the king of the sea. Bake it, grill it, broil it...as good as it gets!",price:1453,status:"available"},fish7:{name:"Oysters",image:"/images/oysters.jpg",desc:"A soft plump oyster with a sweet salty flavor and a clean finish.",price:2543,status:"available"},fish8:{name:"Mussels",image:"/images/mussels.jpg",desc:"The best mussels from the Pacific Northwest with a full-flavored and complex taste.",price:425,status:"available"},fish9:{name:"Jumbo Prawns",image:"/images/prawns.jpg",desc:"With 21-25 two bite prawns in each pound, these sweet morsels are perfect for shish-kabobs.",price:2250,status:"available"}},M=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={fishes:{},order:{}},e.addFish=function(t){var a=Object(g.a)({},e.state.fishes);a["fish".concat(Date.now())]=t,e.setState({fishes:a})},e.editFish=function(t,a){var n=Object(g.a)({},e.state.fishes);n[t]=a,e.setState({fishes:n})},e.deleteFish=function(t){var a=Object(g.a)({},e.state.fishes);a[t]=null,e.setState({fishes:a})},e.loadSampleFishes=function(){e.setState({fishes:P})},e.addToOrder=function(t){var a=Object(g.a)({},e.state.order);a[t]=a[t]+1||1,e.setState({order:a})},e.deleteOrder=function(t){var a=Object(g.a)({},e.state.order);delete a[t],e.setState({order:a})},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params,t=localStorage.getItem(e.storeId);t&&this.setState({order:JSON.parse(t)}),this.ref=I.syncState("".concat(e.storeId,"/fishes"),{context:this,state:"fishes"})}},{key:"componentDidUpdate",value:function(){localStorage.setItem(this.props.match.params.storeId,JSON.stringify(this.state.order))}},{key:"componentWillUnmount",value:function(){I.removeBinding(this.ref)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"catch-of-the-day"},r.a.createElement("div",{className:"menu"},r.a.createElement(b,{tagline:"Fresh Seafood Market"}),r.a.createElement("ul",null,Object.keys(this.state.fishes).map((function(t){return r.a.createElement(D,{key:t,details:e.state.fishes[t],index:t,addToOrder:e.addToOrder})})))),r.a.createElement(L,{fishes:this.state.fishes,order:this.state.order,deleteOrder:this.deleteOrder}),r.a.createElement(T,{addFish:this.addFish,editFish:this.editFish,deleteFish:this.deleteFish,loadSampleFishes:this.loadSampleFishes,fishes:this.state.fishes,storeId:this.props.match.params.storeId}))}}]),a}(r.a.Component),G=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Not Found !!!"))},B=function(){return r.a.createElement(i.a,null,r.a.createElement(c.a,null,r.a.createElement(o.a,{exact:!0,path:"/",component:v}),r.a.createElement(o.a,{path:"/store/:storeId",component:M}),r.a.createElement(o.a,{component:G})))};a(54);Object(s.render)(r.a.createElement(B,null),document.querySelector("#main"))}},[[29,1,2]]]);
//# sourceMappingURL=main.1a74bd2f.chunk.js.map