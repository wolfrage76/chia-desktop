(this["webpackJsonpchia-desktop"]=this["webpackJsonpchia-desktop"]||[]).push([[0],{106:function(e,t,n){},111:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(8),i=n.n(c),l=(n(82),n(32)),o=n.n(l),s=n(44),d=n(30),u=n(63),j=n(150),p=n(141),b=n(151),h=n(153),f=n(157),O=n(152),x=n(155),C=n(70),m=(n(87),n(45)),v=n.n(m);var y=Object(a.createContext)(v.a),g=n(137),k=n(143),w=n(142),S=(n(106),n(2)),L=function(e){return Object(S.jsxs)(g.a,{elevation:3,className:"DashboardCard",style:e.style,children:[Object(S.jsxs)("div",{className:"DashboardCard-padding",children:[Object(S.jsx)(p.a,{variant:"subtitle1",children:e.title}),e.noData?Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(p.a,{variant:"h5",children:Object(S.jsx)(w.a,{})}),Object(S.jsx)(p.a,{variant:"caption",children:"waiting for data..."})]}):e.body]}),!e.noData&&e.items&&e.items.map((function(e,t){return Object(S.jsxs)("div",{className:"DashboardCard-content",children:[Object(S.jsx)(k.a,{className:"DashboardCard-divider",flexItem:!0,variant:"fullWidth"}),Object(S.jsx)("div",{className:"DashboardCard-padding",children:Object(S.jsx)(p.a,{variant:"subtitle2",children:e})})]},t)}))]})};n.p;var D,E=n(144),N=n(145),A=function(e){return Object(S.jsx)(L,{style:{width:300},title:e.name,body:Object(S.jsxs)("div",{style:{color:e.isSync?"#bbfda1":"#fb9294",display:"flex",alignItems:"center"},children:[e.isSync?Object(S.jsx)(E.a,{}):Object(S.jsx)(N.a,{}),Object(S.jsx)(p.a,{variant:"h5",style:{paddingLeft:5},children:e.isSync?"Full Node Synced":"Not Synced"})]}),items:["height: ".concat(e.height),"Estimated Network Space: ".concat(e.networkSpace," PiB")],noData:e.noData})},F=function(e){return Object(S.jsx)(L,{title:e.name,body:Object(S.jsx)("div",{style:{display:"flex",alignItems:"center"},children:Object(S.jsxs)(p.a,{variant:"h5",children:[e.plotCount," Plots"]})}),items:["~ ".concat((101*parseInt(e.plotCount.toString(),10)/1024).toFixed(2)," TB")],noData:e.noData})},I=n(146),P=n(147),B=n(115),M=n(158),R=n(148);function H(){return(H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function T(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function W(e,t){var n=e.title,r=e.titleId,c=T(e,["title","titleId"]);return a.createElement("svg",H({width:"150px",height:"58px",viewBox:"0 0 150 58",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",ref:t,"aria-labelledby":r},c),n?a.createElement("title",{id:r},n):null,D||(D=a.createElement("g",{id:"Community",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},a.createElement("g",{transform:"translate(-189.000000, -1096.000000)",fill:"#3AAC59",fillRule:"nonzero",id:"footer"},a.createElement("g",{transform:"translate(0.000000, 988.000000)"},a.createElement("g",{id:"Group-14",transform:"translate(189.000000, 108.000000)"},a.createElement("g",{id:"chia-logo-(1)"},a.createElement("polygon",{id:"Rectangle-path",points:"90 19 103 19 103 57 90 57"}),a.createElement("g",{id:"Group"},a.createElement("path",{d:"M72.151257,16.1408116 C67.1530726,16.1408116 62.0421788,17.3373768 60.7696927,19.5644928 C60.752514,19.5926522 60.7357542,19.6187101 60.7194134,19.6477101 L60.7194134,3.70443478 L47.3715084,3.70443478 L47.3715084,28.9974783 L47.3715084,29.0407681 C48.6993017,29.6489275 50.0610335,30.3436667 51.4386872,31.1291884 C51.9046089,31.3964928 52.2988827,31.6297536 52.5896648,31.8045942 C52.7723464,31.9142899 52.9546089,32.0244058 53.1368715,32.1378841 C53.1557263,32.1496522 45.5074022,44.0594058 35.0916201,46.5601304 C28.9378492,48.0387101 21.6682961,46.2486957 20.1955307,40.0754783 C20.1339385,39.8195217 20.1,39.5627246 20.0601955,39.3063478 C21.0414804,38.7221449 22.0449721,38.1858551 23.0539106,37.6886522 C25.6030726,36.5778261 27.5484637,35.7452319 28.2846369,35.4627971 C28.349162,35.4388406 28.4145251,35.4140435 28.4786313,35.3905072 C28.4798883,35.3905072 28.4815642,35.390087 28.4824022,35.390087 C28.4832402,35.390087 28.4832402,35.3892464 28.4844972,35.3884058 C34.5620112,33.1844058 39.6632682,32.4236812 39.6632682,32.4236812 C35.0304469,32.0231449 31.052514,32.3459275 27.7236034,33.0053623 C27.7223464,33.0036812 27.7189944,33.0028406 27.7189944,33.0028406 C27.7189944,33.0028406 27.6938547,33.0087246 27.6490223,33.0204928 C24.6347765,33.624029 22.1551676,34.5020145 20.2298883,35.3778986 C21.302514,30.9287101 25.1740223,27.0633043 29.7557263,25.9621449 C30.1583799,25.8654783 30.5664804,25.7906667 30.975838,25.7267826 C31.0935754,25.7087101 31.2108939,25.6927391 31.3290503,25.6771884 C31.647067,25.6338986 31.9667598,25.6002754 32.2885475,25.5742174 C32.3912011,25.5662319 32.4946927,25.5553043 32.5977654,25.5498406 C33.0092179,25.5237826 33.4219274,25.5107536 33.8363128,25.5124348 C33.9175978,25.5128551 33.9988827,25.5174783 34.0801676,25.5178986 C34.423743,25.522942 34.7673184,25.5363913 35.1113128,25.5582464 C35.2328212,25.5658116 35.3539106,25.5737971 35.474581,25.5834638 C35.5952514,25.5931304 35.7159218,25.6044783 35.8361732,25.6158261 C37.8087989,25.8196667 40.2322626,26.3492319 42.9188547,27.2621014 L42.9188547,18.5183913 C41.622486,18.1174348 40.2469274,17.729087 38.8189944,17.3777246 C35.0547486,16.374913 28.5909218,15.3073768 21.521648,17.0293043 C10.1513966,19.8002754 6.92681564,28.2123768 6.92681564,38.4918261 C6.92681564,39.8014493 7.03072626,41.0270145 7.22053073,42.1798696 C4.75223464,43.8147971 2.32793296,45.6922319 0.124441341,47.8348696 C0.124441341,47.8348696 3.40391061,46.3722609 7.73547486,44.4477536 C10.6269553,54.3203623 20.7129888,57.6414928 28.3081006,57.6414928 C36.2287709,57.6414928 41.3136872,55.3803333 47.3715084,51.6006667 L47.3715084,56.3881884 L60.7194134,56.3881884 L60.7194134,32.6397101 C60.7357542,32.6086087 60.752514,32.5779275 60.7696927,32.5459855 L60.7696927,32.1425072 C62.0396648,28.7482464 64.199581,27.8723623 66.6,27.8723623 C69.7726257,27.8723623 71.7548883,30.1255362 71.7548883,33.7059855 L71.7548883,56.3881884 L85.1027933,56.3881884 L85.1027933,29.8615942 C85.1027933,21.5100145 79.8821229,16.1408116 72.151257,16.1408116",id:"Shape"}),a.createElement("path",{d:"M96.2878492,0.385405797 C92.2575419,0.385405797 89.4155028,3.2353913 89.4155028,7.27857971 C89.4155028,11.3217681 92.2575419,14.1713333 96.2878492,14.1713333 C100.318156,14.1713333 103.160615,11.3217681 103.160615,7.27857971 C103.160615,3.2353913 100.318156,0.385405797 96.2878492,0.385405797",id:"Shape"}),a.createElement("path",{d:"M147.390084,34.8672464 L147.406425,34.8672464 L147.392179,17.9400725 L134.028352,17.9400725 L133.955447,20.3462319 C121.065084,12.0413043 112.836034,20.5820145 112.836034,20.5820145 C108.900419,24.1864203 106.61648,29.8771449 106.61648,37.0224928 C106.61648,49.6904493 114.20824,57.2262464 124.077235,57.2262464 C127.776117,57.2262464 131.183799,56.3881884 134.126397,52.3084348 C134.467458,53.2595507 135.226676,55.5883768 135.770531,56.3881884 L149.676955,56.3881884 C147.293296,52.4631014 147.31257,38.8528551 147.390084,34.8672464 M127.193296,46.2516377 C122.865084,46.2516377 119.813128,42.4841594 119.813128,37.138913 C119.813128,31.7936667 122.865084,28.0253478 127.193296,28.0253478 C130.228492,28.0253478 132.634358,29.880087 133.801676,32.830942 L133.801676,41.4460435 C132.634777,44.3968986 130.228492,46.2516377 127.193296,46.2516377",id:"Shape"})))))))))}var G=a.forwardRef(W),J=(n.p,function(e){var t=r.a.useState(null),n=Object(d.a)(t,2),a=n[0],c=n[1],i=function(t){e.onAddClick(t),l()},l=function(){c(null)};return Object(S.jsx)("header",{className:"App-header",children:Object(S.jsxs)(I.a,{children:[Object(S.jsx)(G,{className:"App-logo"}),Object(S.jsx)(p.a,{variant:"h5",children:"Desktop"}),Object(S.jsx)("div",{style:{flex:1}}),Object(S.jsx)(P.a,{"aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){c(e.currentTarget)},startIcon:Object(S.jsx)(R.a,{}),variant:"contained",color:"primary",children:"Add"}),Object(S.jsxs)(B.a,{id:"simple-menu",anchorEl:a,keepMounted:!0,open:Boolean(a),onClose:l,children:[Object(S.jsx)(M.a,{onClick:function(){return i("fullNode")},children:"FullNode"}),Object(S.jsx)(M.a,{onClick:function(){return i("wallet")},children:"Wallet"}),Object(S.jsx)(M.a,{onClick:function(){return i("harvester")},children:"Harvester"}),Object(S.jsx)(M.a,{onClick:function(){return i("chiaExplorer")},children:"ChiaExplorer"})]})]})})}),X=function(e){return Object(S.jsx)(L,{title:e.name,body:Object(S.jsx)(p.a,{variant:"h5",children:Object(S.jsxs)("b",{children:[e.balance," XCH"]})}),items:["height: ".concat(e.height)],noData:e.noData})},z=n(69),U=Object(z.a)({palette:{primary:{main:"#3AAC59"},background:{default:"#171c24",paper:"#171c24"},type:"dark"}}),q=function(){var e=function(e){console.info("using api endpoint",e);var t=v.a.create({baseURL:e,timeout:3e4});return t.interceptors.response.use((function(e){return e}),(function(e){var t;return Promise.reject(new Error(null===e||void 0===e||null===(t=e.response)||void 0===t?void 0:t.data))})),t}(""),t=Object(C.a)(["dashboard"],(function(t){return e.get(t).then((function(e){return e.data}))}),{revalidateOnFocus:!1,revalidateOnReconnect:!1,refreshInterval:1e4}),c=t.data,i=!t.error&&!c,l=function(e){w({open:!0,type:e})},m=r.a.useState({open:!1,type:null}),g=Object(d.a)(m,2),k=g[0],w=g[1],D=r.a.useState(null),E=Object(d.a)(D,2),N=E[0],I=E[1];if(i)return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(J,{onAddClick:l}),Object(S.jsx)(j.a,{})]});var P=c.filter((function(e){return"wallet"===e.type})),B=c.filter((function(e){return"fullNode"===e.type})),M=c.filter((function(e){return"harvester"===e.type})),R=c.filter((function(e){return"summary"===e.type})),H=Object(u.a)(Object(s.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Promise.all([n.e(3),n.e(4)]).then(n.bind(null,174)));case 1:case"end":return e.stop()}}),e)})))),T=function(){var t=Object(s.a)(o.a.mark((function t(n){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(void 0!==n){t.next=2;break}return t.abrupt("return",w({open:!1,type:null}));case 2:return t.prev=2,t.next=5,e.post("/connection/".concat(n.type),n);case 5:w({open:!1,type:null}),t.next=11;break;case 8:return t.prev=8,t.t0=t.catch(2),t.abrupt("return",I("Couldn't add ".concat(n.type,"! ").concat(t.t0)));case 11:case"end":return t.stop()}}),t,null,[[2,8]])})));return function(e){return t.apply(this,arguments)}}(),W=function(e){return Object(S.jsxs)("div",{style:{marginBottom:10},children:[Object(S.jsxs)(p.a,{variant:"body1",children:[e.title,":"]}),Object(S.jsx)("div",{className:"App-row",children:e.children})]})};return Object(S.jsx)(y.Provider,{value:e,children:Object(S.jsxs)(b.a,{theme:U,children:[Object(S.jsx)(O.a,{}),Object(S.jsxs)("div",{children:[Object(S.jsx)(J,{onAddClick:l}),Object(S.jsx)("div",{className:"App-body",children:Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(W,{title:"Summary",children:R.map((function(e,t){return Object(S.jsx)(L,{title:e.name,body:Object(S.jsx)("div",{style:{display:"flex",alignItems:"center"},children:Object(S.jsx)(p.a,{variant:"h5",style:{paddingLeft:5},children:Object(S.jsx)("b",{children:e.data})})})},t)}))}),Object(S.jsx)(W,{title:"Wallets",children:P.map((function(e,t){return Object(S.jsx)(X,{name:e.name,balance:e.balance,height:e.height,noData:e.noData},t)}))}),Object(S.jsx)(W,{title:"FullNodes",children:B.map((function(e,t){return Object(S.jsx)(A,{name:e.name,isSync:e.isSync,height:e.height,networkSpace:e.networkSpace,noData:e.noData},t)}))}),Object(S.jsx)(W,{title:"Harvester",children:M.map((function(e,t){return Object(S.jsx)(F,{name:e.name,plotCount:e.plotCount,noData:e.noData},t)}))})]})})]}),k&&k.open&&Object(S.jsx)(a.Suspense,{fallback:Object(S.jsx)(h.a,{}),children:Object(S.jsx)(H,{open:k.open,type:k.type,toggleOpen:T})}),Object(S.jsx)(f.a,{open:null!==N,autoHideDuration:6e3,onClose:function(){return I(null)},children:Object(S.jsx)(x.a,{severity:"error",children:N})})]})})},K=function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,179)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};i.a.render(Object(S.jsx)(r.a.StrictMode,{children:Object(S.jsx)(q,{})}),document.getElementById("root")),K()},82:function(e,t,n){},87:function(e,t,n){}},[[111,1,2]]]);
//# sourceMappingURL=main.ecceca1b.chunk.js.map