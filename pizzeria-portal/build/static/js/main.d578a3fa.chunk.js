(this["webpackJsonppizzeria-portal"]=this["webpackJsonppizzeria-portal"]||[]).push([[0],{102:function(e,t,a){e.exports={loginForm:"Login_loginForm__2xQaY",buttonBlock:"Login_buttonBlock__9yTqa",loginBackground:"Login_loginBackground__3t6Qz"}},103:function(e,t,a){e.exports={component:"Waiter_component__yunIX",row:"Waiter_row__3Vsy8"}},162:function(e,t,a){},163:function(e,t,a){},164:function(e,t,a){},165:function(e,t,a){},272:function(e,t,a){},273:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a(0),r=a.n(c),i=a(12),o=a.n(i),s=a(31),l=a(312),j=a(55),d=a.n(j),u=function(){return Object(n.jsxs)("nav",{className:d.a.component,children:[Object(n.jsx)(l.a,{className:d.a.link,component:s.c,exact:!0,to:"".concat("/panel","/"),activeClassName:"active",children:"Logo to hompage"}),Object(n.jsx)(l.a,{className:d.a.link,component:s.c,to:"".concat("/panel","/login"),activeClassName:"active",children:"Login"}),Object(n.jsx)(l.a,{className:d.a.link,component:s.c,to:"".concat("/panel","/table"),activeClassName:"active",children:"Table"}),Object(n.jsx)(l.a,{className:d.a.link,component:s.c,to:"".concat("/panel","/waiter"),activeClassName:"active",children:"Waiter"}),Object(n.jsx)(l.a,{className:d.a.link,component:s.c,to:"".concat("/panel","/kitchen"),activeClassName:"active",children:"Kitchen"})]})},b=a(315),h=a(317),p=a(316),O=function(e){var t=e.children;return Object(n.jsxs)("div",{children:[Object(n.jsx)(b.a,{children:Object(n.jsx)(p.a,{maxWidth:"lg",children:Object(n.jsx)(h.a,{disableGutters:!0,children:Object(n.jsx)(u,{})})})}),Object(n.jsxs)(p.a,{maxWidth:"lg",children:[Object(n.jsx)(h.a,{}),t]})]})},x=a(19),m=a(77),f=a(89),g=a(90),v=a(78),y=a(99),k=a(98),w=a(318),_=a(279),S=a(171),C=a(331),T=a(319),N=a(102),E=a.n(N),F=function(e){Object(y.a)(a,e);var t=Object(k.a)(a);function a(e){var n;return Object(f.a)(this,a),(n=t.call(this,e)).state={username:"",password:"",authflag:1},n.handleChange=n.handleChange.bind(Object(v.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(v.a)(n)),n}return Object(g.a)(a,[{key:"handleChange",value:function(e){this.setState({username:e.state.username,password:e.state.password})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.history.push("/panel")}},{key:"render",value:function(){var e=this;return Object(n.jsx)("div",{children:Object(n.jsx)(w.a,{container:!0,spacing:0,justify:"center",direction:"row",children:Object(n.jsx)(w.a,{item:!0,children:Object(n.jsx)(w.a,{container:!0,direction:"column",justify:"center",spacing:2,className:E.a.loginForm,children:Object(n.jsxs)(_.a,{variant:"elevation",elevation:2,className:E.a.loginBackground,children:[Object(n.jsx)(w.a,{item:!0,children:Object(n.jsx)(S.a,{component:"h1",variant:"h5",children:"Sign in"})}),Object(n.jsx)(w.a,{item:!0,children:Object(n.jsx)("form",{onSubmit:this.handleSubmit,children:Object(n.jsxs)(w.a,{container:!0,direction:"column",spacing:2,children:[Object(n.jsx)(w.a,{item:!0,children:Object(n.jsx)(C.a,{type:"email",placeholder:"Email",fullWidth:!0,name:"username",variant:"outlined",value:this.state.username,onChange:function(t){return e.setState(Object(m.a)({},t.target.name,t.target.value))},required:!0,autoFocus:!0})}),Object(n.jsx)(w.a,{item:!0,children:Object(n.jsx)(C.a,{type:"password",placeholder:"Password",fullWidth:!0,name:"password",variant:"outlined",value:this.state.password,onChange:function(t){return e.setState(Object(m.a)({},t.target.name,t.target.value))},required:!0})}),Object(n.jsx)(w.a,{item:!0,children:Object(n.jsx)(l.a,{variant:"contained",color:"primary",type:"submit",className:E.a.buttonBlock,children:"Submit"})})]})})}),Object(n.jsx)(w.a,{item:!0,children:Object(n.jsx)(T.a,{href:"#",variant:"body2",children:"Forgot Password?"})})]})})})})})}}]),a}(r.a.Component),z=a(67),P=a(322),R=a(332),B=a(325),D=a(321),H=a(326),I=a(328),A=a(324),L=a(329),W=a(327),M=a(323),U=a(157),q=a.n(U),K=a(156),G=a.n(K),J=a(334),Q=a(320),V=function(){var e=Object(c.useState)(!1),t=Object(z.a)(e,2),a=t[0],r=t[1];return Object(n.jsx)(Q.a,{control:Object(n.jsx)(J.a,{checked:a,onChange:function(){r(!a)},name:"prepared"}),label:"DONE"})},X=a(37),Y=a(14),$=a(70),Z=a.n($),ee=a(91),te=a(45),ae=a.n(te),ne={url:"//"+window.location.hostname+("localhost"===window.location.hostname?":3131":""),table:"table",products:"products",order:"order",booking:"booking",dishes:"dishes",event:"event",dateStartParamKey:"date_gte",dateEndParamKey:"date_lte",notRepeatParam:"repeat=false",repeatParam:"repeat_ne=false"},ce=function(e){return"app/".concat("dishes","/").concat(e)},re=ce("FETCH_START"),ie=ce("FETCH_SUCCESS"),oe=ce("FETCH_ERROR"),se=function(e){return{payload:e,type:ie}},le=function(e){return{payload:e,type:oe}};var je=Object(P.a)({root:{"& > *":{borderBottom:"unset"}}});function de(e,t,a,n,c){return{dish:e,orderNumber:t,clientType:a,status:n,price:c,history:[{date:"2020-01-05",customerId:"11091700",amount:1}]}}function ue(e){var t=e.row,a=r.a.useState(!1),i=Object(z.a)(a,2),o=i[0],s=i[1],l=je(),j=Object(X.c)(),d=Object(X.d)((function(e){return e.dishes.data}));return d&&console.log(d),Object(c.useEffect)((function(){j(function(){var e=Object(ee.a)(Z.a.mark((function e(t){var a;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({payload:void 0,type:re}),e.next=4,ae.a.get("".concat(ne.url,"/api/").concat(ne.dishes));case 4:a=e.sent,t(se(a.data)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),t(le(e.t0.message||!0));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())}),[]),Object(n.jsxs)(r.a.Fragment,{children:[Object(n.jsxs)(M.a,{className:l.root,children:[Object(n.jsx)(A.a,{children:Object(n.jsx)(D.a,{"aria-label":"expand row",size:"small",onClick:function(){return s(!o)},children:o?Object(n.jsx)(G.a,{}):Object(n.jsx)(q.a,{})})}),Object(n.jsx)(A.a,{component:"th",scope:"row",children:t.dish}),Object(n.jsx)(A.a,{align:"right",children:t.orderNumber}),Object(n.jsx)(A.a,{align:"right",children:t.clientType}),Object(n.jsx)(A.a,{align:"right",children:t.status}),Object(n.jsx)(A.a,{align:"right",children:t.price})]}),Object(n.jsx)(M.a,{children:Object(n.jsx)(A.a,{style:{paddingBottom:0,paddingTop:0},colSpan:6,children:Object(n.jsx)(B.a,{in:o,timeout:"auto",unmountOnExit:!0,children:Object(n.jsxs)(R.a,{margin:1,children:[Object(n.jsx)(S.a,{variant:"h6",gutterBottom:!0,component:"div",children:"History"}),Object(n.jsxs)(H.a,{size:"small","aria-label":"purchases",children:[Object(n.jsx)(W.a,{children:Object(n.jsxs)(M.a,{children:[Object(n.jsx)(A.a,{children:"Date"}),Object(n.jsx)(A.a,{children:"Customer"}),Object(n.jsx)(A.a,{align:"right",children:"Amount"}),Object(n.jsx)(A.a,{align:"right",children:"Total price ($)"})]})}),Object(n.jsx)(I.a,{children:t.history.map((function(e){return Object(n.jsxs)(M.a,{children:[Object(n.jsx)(A.a,{component:"th",scope:"row",children:e.date}),Object(n.jsx)(A.a,{children:e.customerId}),Object(n.jsx)(A.a,{align:"right",children:e.amount}),Object(n.jsx)(A.a,{align:"right",children:Math.round(e.amount*t.price*100)/100})]},e.date)}))})]})]})})})})]})}var be=[de("Pizza 1",159,"IN",Object(n.jsx)(V,{}),3.99),de("Pizza 1",159,"IN",Object(n.jsx)(V,{}),3.99),de("Pizza 1",159,"IN",Object(n.jsx)(V,{}),3.99),de("Pizza 1",159,"IN",Object(n.jsx)(V,{}),3.99),de("Pizza 1",159,"IN",Object(n.jsx)(V,{}),3.99)];function he(){return Object(n.jsx)(L.a,{component:_.a,children:Object(n.jsxs)(H.a,{"aria-label":"collapsible table",children:[Object(n.jsx)(W.a,{children:Object(n.jsxs)(M.a,{children:[Object(n.jsx)(A.a,{}),Object(n.jsx)(A.a,{children:"Dish"}),Object(n.jsx)(A.a,{align:"right",children:"Order number"}),Object(n.jsx)(A.a,{align:"right",children:"Client type(In/Out)"}),Object(n.jsx)(A.a,{align:"right",children:"Status"}),Object(n.jsx)(A.a,{align:"right",children:"Price"})]})}),Object(n.jsx)(I.a,{children:be.map((function(e){return Object(n.jsx)(ue,{row:e},e.name)}))})]})})}var pe=a(46),Oe=a.n(pe),xe=a(120),me=a(159),fe=a.n(me),ge=(a(211),function(e){return e.toISOString().slice(0,10)}),ve=function(e,t){var a=new Date(e);return a.setDate(a.getDate()+t),a},ye=function(e){return Math.floor(e)%24+":"+(e%1*60+"").padStart(2,"0")},ke=function(e){var t=e.split(":");return parseInt(t[0])+parseInt(t[1])/60},we=a(158),_e=a(121),Se=function(e){return"app/".concat("bookings","/").concat(e)},Ce=Se("FETCH_START"),Te=Se("FETCH_SUCCESS"),Ne=Se("FETCH_ERROR"),Ee=function(e){return{payload:e,type:Te}},Fe=function(e){return{payload:e,type:Ne}};var ze=function(){var e=Object(c.useState)(new Date),t=Object(z.a)(e,2),a=t[0],r=t[1],i=Object(X.c)(),o=Object(X.d)((function(e){return t=e,n=ge(a),t.bookings.data[n];var t,n}));Object(c.useEffect)((function(){i(function(){var e=Object(ee.a)(Z.a.mark((function e(t,a){var n,c,r,i,o,s,l,j,d,u,b,h,p,O,x,m,f;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({payload:void 0,type:Ce}),e.next=4,ae.a.get("".concat(ne.url,"/api/").concat(ne.booking));case 4:return n=e.sent,e.next=7,ae.a.get("".concat(ne.url,"/api/").concat(ne.event));case 7:c=e.sent,r=c.data.filter((function(e){return!1===e.repeat})),i=[].concat(Object(_e.a)(n.data),Object(_e.a)(r)),o=c.data.filter((function(e){return"daily"===e.repeat})),s=Object(we.a)(o);try{for(s.s();!(l=s.n()).done;)for(j=l.value,d=ge(new Date),u=0;u<14;u++)for(b=ge(ve(d,u)),i.push(Object(Y.a)(Object(Y.a)({},j),{},{date:b})),h=ke(j.hour),p=h;p<h+j.duration;p+=.5)i.push(Object(Y.a)(Object(Y.a)({},j),{},{hour:ye(p),date:b}))}catch(a){s.e(a)}finally{s.f()}for(O={},x=ge(new Date),m=function(e){var t=ge(ve(x,e));O[t]={};for(var a=function(e){O[t][e]=i.filter((function(a){return a.date===t&&a.hour===ye(e)}))},n=12;n<20;n+=.5)a(n)},f=0;f<14;f++)m(f);t(Ee(O)),e.next=23;break;case 20:e.prev=20,e.t0=e.catch(0),t(Fe(e.t0.message||!0));case 23:case"end":return e.stop()}}),e,null,[[0,20]])})));return function(t,a){return e.apply(this,arguments)}}())}),[]);var j=function(e,t){var a=o[t].find((function(t){return t.table===e}));return a?Object(n.jsxs)(l.a,{component:s.b,to:"".concat("/panel","/table/booking/").concat(a.id),children:[Object(n.jsx)(xe.a,{}),"Booked "]}):Object(n.jsxs)(l.a,{component:s.b,to:"".concat("/panel","/table/booking/new"),children:[Object(n.jsx)(xe.b,{}),"Free"]})};return Object(n.jsxs)("div",{className:Oe.a.component,children:[Object(n.jsx)("div",{className:Oe.a.datepicker,children:Object(n.jsx)(fe.a,{selected:a,onChange:function(e){r(e)}})}),Object(n.jsx)(_.a,{children:Object(n.jsxs)(H.a,{children:[Object(n.jsx)(W.a,{component:"thead",children:Object(n.jsxs)(M.a,{className:Oe.a.tableRow,children:[Object(n.jsx)(A.a,{component:"td",className:Oe.a.table,children:"Hours"}),Object(n.jsx)(A.a,{component:"td",className:Oe.a.table,children:"Table 1 "}),Object(n.jsx)(A.a,{component:"td",className:Oe.a.table,children:"Table 2 "}),Object(n.jsx)(A.a,{component:"td",className:Oe.a.table,children:"Table 3 "})]})}),o?Object(n.jsx)(I.a,{children:Object.keys(o).map((function(e){return Object(n.jsxs)(M.a,{children:[Object(n.jsx)(A.a,{component:"td",children:ye(e)}),[1,2,3].map((function(t){return Object(n.jsx)(A.a,{children:j(t,e)},t)}))]},e)}))}):null]})})]})},Pe=a(103),Re=a.n(Pe),Be=function(e){Object(y.a)(a,e);var t=Object(k.a)(a);function a(){return Object(f.a)(this,a),t.apply(this,arguments)}return Object(g.a)(a,[{key:"componentDidMount",value:function(){(0,this.props.fetchTables)()}},{key:"renderStatus",value:function(e,t,a){var n=this.props.changeTableStatus;switch(t){case"free":n(e,t="thinking",a=a);break;case"thinking":n(e,t="ordered",a=a);break;case"ordered":n(e,t="prepared",a=a);break;case"prepared":n(e,t="delivered",a=a);break;case"delivered":n(e,t="paid",a=a);break;case"paid":break;default:return null}}},{key:"renderActions",value:function(e){var t=this,a=e.id,c=e.status,r=e.order;switch(c){case"free":return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(l.a,{onClick:function(){return t.renderStatus(a,c,r)},children:"thinking"}),Object(n.jsx)(l.a,{onClick:function(){return t.renderStatus(a,c,r)},children:"new order"})]});case"thinking":return Object(n.jsx)(l.a,{onClick:function(){return t.renderStatus(a,c,r)},children:"new order"});case"ordered":return Object(n.jsx)(l.a,{onClick:function(){return t.renderStatus(a,c,r)},children:"prepared"});case"prepared":return Object(n.jsx)(l.a,{onClick:function(){return t.renderStatus(a,c,r)},children:"delivered"});case"delivered":return Object(n.jsx)(l.a,{onClick:function(){return t.renderStatus(a,c,r)},children:"paid"});case"paid":return Object(n.jsx)(l.a,{onClick:function(){return t.renderStatus(a,c,r)},children:"free"});default:return null}}},{key:"render",value:function(){var e=this,t=this.props,a=t.loading,c=a.active,r=a.error,i=t.tables;t.changeTableStatus;return c||!i.length?Object(n.jsx)(_.a,{className:Re.a.component,children:Object(n.jsx)("p",{children:"Loading..."})}):r?Object(n.jsxs)(_.a,{className:Re.a.component,children:[Object(n.jsx)("p",{children:"Error! Details:"}),Object(n.jsx)("pre",{children:r})]}):Object(n.jsx)(_.a,{className:Re.a.component,children:Object(n.jsxs)(H.a,{children:[Object(n.jsx)(W.a,{children:Object(n.jsxs)(M.a,{children:[Object(n.jsx)(A.a,{children:"Table"}),Object(n.jsx)(A.a,{children:"Status"}),Object(n.jsx)(A.a,{children:"Order"}),Object(n.jsx)(A.a,{children:"Action"})]})}),Object(n.jsx)(I.a,{children:i.map((function(t){return Object(n.jsxs)(M.a,{children:[Object(n.jsx)(A.a,{component:"th",scope:"row",children:t.id}),Object(n.jsx)(A.a,{children:t.status}),Object(n.jsx)(A.a,{children:t.order&&Object(n.jsx)(l.a,{to:"".concat("/panel","/waiter/order/").concat(t.order),children:t.order})}),Object(n.jsx)(A.a,{children:e.renderActions(t)})]},t.id)}))})]})})}}]),a}(r.a.Component),De=function(e){return"app/".concat("tables","/").concat(e)},He=De("FETCH_START"),Ie=De("FETCH_SUCCESS"),Ae=De("FETCH_ERROR"),Le=De("CHANGE_TABLE_STATUS"),We=function(e){return{payload:e,type:Ae}},Me=function(){return function(e,t){var a;e({payload:a,type:He}),ae.a.get("".concat(ne.url,"/api/").concat(ne.table)).then((function(t){e(function(e){return{payload:e,type:Ie}}(t.data))})).catch((function(t){e(We(t.message||!0))}))}},Ue=function(e,t,a){return function(n,c){ae.a.put("".concat(ne.url,"/api/").concat(ne.table,"/").concat(e),{status:t,order:a}).then((function(e){n({payload:e.data,type:Le})})).catch((function(e){n(We(e.message||!0))}))}};var qe=Object(X.b)((function(e){return{tables:(a=e,a.tables.data),loading:(t=e,t.tables.loading)};var t,a}),(function(e){return{fetchTables:function(){return e(Me())},changeTableStatus:function(t,a,n){return e(Ue(t,a,n))}}}))(Be),Ke=a(162),Ge=a.n(Ke),Je=function(){return Object(n.jsx)("div",{className:Ge.a.component,children:Object(n.jsx)("h2",{children:"Homepage view"})})},Qe=a(163),Ve=a.n(Qe),Xe=function(){return Object(n.jsx)("div",{className:Ve.a.component,children:Object(n.jsx)("h2",{children:"Booking"})})},Ye=a(164),$e=a.n(Ye),Ze=function(){return Object(n.jsx)("div",{className:$e.a.component,children:Object(n.jsx)("h2",{children:"Event"})})},et=a(165),tt=a.n(et),at=function(){return Object(n.jsx)("div",{className:tt.a.component,children:Object(n.jsx)("h2",{children:"Order"})})},nt=a(333),ct=a(168),rt=a(330),it=a(50),ot=a(166),st=a(167),lt={tables:{data:{},loading:{active:!1,error:!1}},bookings:{data:{},loading:{active:!1,error:!1}},dishes:{data:{},loading:{active:!1,error:!1}}},jt={tables:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case Le:var a=e.data.map((function(e){return e.id===t.payload.id?t.payload:e}));return Object(Y.a)(Object(Y.a)({},e),{},{data:a});case He:return Object(Y.a)(Object(Y.a)({},e),{},{loading:{active:!0,error:!1}});case Ie:return Object(Y.a)(Object(Y.a)({},e),{},{loading:{active:!1,error:!1},data:t.payload});case Ae:return Object(Y.a)(Object(Y.a)({},e),{},{loading:{active:!1,error:t.payload}});default:return e}},bookings:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case Ce:return Object(Y.a)(Object(Y.a)({},e),{},{loading:{active:!0,error:!1}});case Te:return Object(Y.a)(Object(Y.a)({},e),{},{loading:{active:!1,error:!1},data:t.payload});case Ne:return Object(Y.a)(Object(Y.a)({},e),{},{loading:{active:!1,error:t.payload}});default:return e}},dishes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case re:return Object(Y.a)(Object(Y.a)({},e),{},{loading:{active:!0,error:!1}});case ie:return Object(Y.a)(Object(Y.a)({},e),{},{loading:{active:!1,error:!1},data:t.payload});case oe:return Object(Y.a)(Object(Y.a)({},e),{},{loading:{active:!1,error:t.payload}});default:return e}}};Object.keys(lt).forEach((function(e){"undefined"==typeof jt[e]&&(jt[e]=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return e})}));var dt=Object(it.combineReducers)(jt),ut=Object(it.createStore)(dt,lt,Object(st.composeWithDevTools)(Object(it.applyMiddleware)(ot.a))),bt=Object(ct.a)({palette:{primary:{main:"#115293"},secondary:{main:"#11cb5f"}}}),ht=function(){return Object(n.jsx)(X.a,{store:ut,children:Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(s.a,{children:Object(n.jsx)(nt.b,{injectFirst:!0,children:Object(n.jsx)(rt.a,{theme:bt,children:Object(n.jsx)(O,{children:Object(n.jsxs)(x.c,{children:[Object(n.jsx)(x.a,{exact:!0,path:"/panel/",component:Je}),Object(n.jsx)(x.a,{exact:!0,path:"/panel/login",component:F}),Object(n.jsx)(x.a,{exact:!0,path:"/panel/kitchen",component:he}),Object(n.jsx)(x.a,{exact:!0,path:"/panel/table",component:ze}),Object(n.jsx)(x.a,{exact:!0,path:"".concat("/panel","/table/booking/:id"),component:Xe}),Object(n.jsx)(x.a,{exact:!0,path:"".concat("/panel","/table/booking/new"),component:Xe}),Object(n.jsx)(x.a,{exact:!0,path:"".concat("/panel","/table/events/:id"),component:Ze}),Object(n.jsx)(x.a,{exact:!0,path:"".concat("/panel","/table/events/new"),component:Ze}),Object(n.jsx)(x.a,{exact:!0,path:"".concat("/panel","/waiter"),component:qe}),Object(n.jsx)(x.a,{exact:!0,path:"".concat("/panel","/waiter/order/:id"),component:at}),Object(n.jsx)(x.a,{exact:!0,path:"".concat("/panel","/waiter/order/new"),component:at})]})})})})})})})},pt=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,336)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),r(e),i(e)}))};a(272);o.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(ht,{})}),document.getElementById("root")),pt()},46:function(e,t,a){e.exports={component:"Table_component__3ksTr",datepicker:"Table_datepicker__1zfRU",hour:"Table_hour__2t70B",table:"Table_table__3nAlq",link:"Table_link__2Vmd-"}},55:function(e,t,a){e.exports={component:"PageNav_component__1Hmfn",link:"PageNav_link__354b3"}}},[[273,1,2]]]);
//# sourceMappingURL=main.d578a3fa.chunk.js.map