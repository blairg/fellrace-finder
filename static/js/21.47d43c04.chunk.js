(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{1683:function(e,n,t){"use strict";t.r(n);var a=t(186),r=t(233),c=t.n(r),s=t(234),o=t(43),i=t(44),l=t(47),u=t(45),p=t(48),d=t(0),h=t.n(d),f=t(46),m=t(232),g=t(79),b=t.n(g),v=t(25),R=t(1391),y=t.n(R),E=t(71),k=t.n(E),C=t(1341),O=t.n(C),x=t(1344),S=t.n(x),w=t(327),j=t.n(w),P=t(1426),N=t.n(P),T=t(304),L=t.n(T),D=t(262),I=t.n(D),B=t(278),q=t.n(B),M=t(279),z=t.n(M),F=t(328),A=t.n(F),J=t(1430),Y=t.n(J),K=t(1432),U=t.n(K),G=t(281),$=t.n(G),H=t(242),W=t.n(H),_=t(39),Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return function(n){n({type:_.b,payload:e})}},V=function(e){function n(e){var t;return Object(o.a)(this,n),(t=Object(l.a)(this,Object(u.a)(n).call(this,e))).handleDrawerOpen=function(){t.props.dispatchMenuToggleAction(!0)},t.handleDrawerClose=function(){t.props.dispatchMenuToggleAction(!1)},t}return Object(p.a)(n,e),Object(i.a)(n,[{key:"render",value:function(){var e=this.props,n=e.classes,t=e.theme,a=e.runnerOnClick,r=e.raceOnClick,c=e.menuReducer.menuOpen;return h.a.createElement("div",{className:n.root},h.a.createElement(k.a,null),h.a.createElement(O.a,{position:"fixed",className:b()(n.appBar,Object(m.a)({},n.appBarShift,c))},h.a.createElement(S.a,{disableGutters:c},h.a.createElement(L.a,{color:"inherit","aria-label":"Open drawer",onClick:this.handleDrawerOpen,className:b()(n.menuButton,c&&n.hide)},h.a.createElement(I.a,null)))),h.a.createElement(y.a,{className:n.drawer,variant:"persistent",anchor:"left",open:c,classes:{paper:n.drawerPaper}},h.a.createElement("div",{className:n.drawerHeader},h.a.createElement(L.a,{onClick:this.handleDrawerClose},"ltr"===t.direction?h.a.createElement(q.a,null):h.a.createElement(z.a,null))),h.a.createElement(N.a,null),h.a.createElement(j.a,null,h.a.createElement(A.a,{button:!0,key:"Runner",onClick:a},h.a.createElement(Y.a,null,h.a.createElement($.a,null)),h.a.createElement(U.a,{primary:"Runner"})),h.a.createElement(A.a,{button:!0,key:"Race",onClick:r},h.a.createElement(Y.a,null,h.a.createElement(W.a,null)),h.a.createElement(U.a,{primary:"Race"})))))}}]),n}(h.a.Component),X=Object(f.b)(function(e){return Object(a.a)({},e)},function(e){return{dispatchMenuToggleAction:function(n){return e(Q(n))}}})(Object(v.withStyles)(function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(240,"px)"),marginLeft:240,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginLeft:12,marginRight:20},hide:{display:"none"},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},drawerHeader:Object(a.a)({display:"flex",alignItems:"center",padding:"0 8px"},e.mixins.toolbar,{justifyContent:"flex-end"}),content:{flexGrow:1,padding:3*e.spacing.unit,transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-240},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0}}},{withTheme:!0})(h.a.memo(V))),Z=t(329),ee=t(333),ne=t(334),te=t.n(ne),ae=(t(335),t(42)),re=t.n(ae),ce=t(10),se=t(53),oe=t(54),ie=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return function(n){n({type:oe.a,payload:e})}},le=t(1443),ue=t.n(le);var pe=Object(v.withStyles)(function(e){return{}})(function(){return h.a.createElement("span",null,h.a.createElement("br",null),h.a.createElement(ue.a,null),h.a.createElement("br",null),h.a.createElement(ue.a,{color:"secondary",variant:"query"}),h.a.createElement("br",null),h.a.createElement(ue.a,null))}),de=t(171),he=t.n(de),fe=t(176),me=t.n(fe);var ge=Object(v.withStyles)(function(e){return{noRaces:{marginRight:"10px",marginLeft:"10px",marginTop:"5px",marginBottom:"5px"}}})(function(e){var n=e.classes;return h.a.createElement(he.a,{className:n.noRaces},h.a.createElement(me.a,{variant:"subheading"},"No race results found for this runner!"))}),be=t(1445),ve=t.n(be),Re=t(1465),ye=t(226),Ee=new Re.AllHtmlEntities;function ke(e,n,t){return Ce.apply(this,arguments)}function Ce(){return(Ce=Object(s.a)(c.a.mark(function e(n,t,a){var r,s;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.join("$$"),s=null,e.next=4,ve.a.get("".concat("https://fellrace-finder-server.herokuapp.com","/runner/").concat(r,"/").concat(t,"/").concat(a)).then(function(e){return s=e.data}).catch(function(e){console.log(e)});case 4:return e.abrupt("return",s);case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}function Oe(e,n){return xe.apply(this,arguments)}function xe(){return(xe=Object(s.a)(c.a.mark(function e(n,t){var a,r,s;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.join("$$"),r=t.replace("/","**"),r=Ee.encode(r),s=null,e.next=6,ve.a.get("".concat("https://fellrace-finder-server.herokuapp.com","/runnerByRace/").concat(a,"/").concat(r)).then(function(e){return s=e.data}).catch(function(e){console.log(e)});case 6:return e.abrupt("return",s);case 7:case"end":return e.stop()}},e)}))).apply(this,arguments)}function Se(e){var n="runnersList".concat(e),t=Object(ye.b)(n);if(t)return{options:t};var a="".concat("https://fellrace-finder-server.herokuapp.com","/autocomplete/runner/").concat(e.toLowerCase());return fetch(a).then(function(e){return e.json()}).then(function(e){var t=[];return e.items.map(function(e){var n=!1;return t.map(function(t){return e.display===t.display&&(n=!0,!0)}),n||t.push(e),n}),Object(ye.g)({key:n,value:t}),{options:t}})}function we(e){var n="raceSearch".concat(e),t=Object(ye.b)(n);if(t)return{options:t};var a="".concat("https://fellrace-finder-server.herokuapp.com","/autocomplete/race/").concat(e.toLowerCase());return fetch(a).then(function(e){return e.json()}).then(function(e){var t=[];return console.log(e),e.map(function(e){var n=!1;return t.map(function(t){return e.display===t.display&&(n=!0,!0)}),n||t.push(e),n}),Object(ye.g)({key:n,value:t}),{options:t}})}function je(e){return Pe.apply(this,arguments)}function Pe(){return(Pe=Object(s.a)(c.a.mark(function e(n){var t,a;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat("https://fellrace-finder-server.herokuapp.com","/race/byNames/").concat(n),a=null,e.next=4,ve.a.get(t).then(function(e){return a=e.data}).catch(function(e){console.log(e)});case 4:return e.abrupt("return",a);case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}function Ne(e){var n=e.split(" ").map(function(e){return"".concat(e.charAt(0).toUpperCase()).concat(e.slice(1)," ")}),t="";return n.map(function(e){return t="".concat(t).concat(e)}),t}var Te=h.a.lazy(function(){return t.e(5).then(t.bind(null,1670))}),Le=h.a.lazy(function(){return t.e(4).then(t.bind(null,1671))}),De=h.a.lazy(function(){return t.e(6).then(t.bind(null,1672))}),Ie=h.a.lazy(function(){return t.e(17).then(t.bind(null,1673))}),Be=h.a.lazy(function(){return Promise.all([t.e(16),t.e(28)]).then(t.bind(null,1674))}),qe=h.a.lazy(function(){return Promise.all([t.e(0),t.e(3)]).then(t.bind(null,1675))}),Me=h.a.lazy(function(){return Promise.all([t.e(11),t.e(27)]).then(t.bind(null,1676))}),ze=h.a.lazy(function(){return Promise.all([t.e(14),t.e(25)]).then(t.bind(null,1677))}),Fe=h.a.lazy(function(){return t.e(20).then(t.bind(null,1678))}),Ae=function(e){return{searchField:{paddingBottom:"5px",paddingLeft:"5px",paddingRight:"5px",marginTop:"-5px",zIndex:"2"},search:{position:"sticky",backgroundColor:"white",zIndex:"2 !important",borderBottom:"1px solid #CCCCCC",top:"40px",paddingTop:"40px",borderTop:"1px solid #CCCCCC",paddingBottom:"2px"},progress:{margin:2*e.spacing.unit}}},Je="chosenRunners",Ye=0,Ke=function(e){function n(e){var t;return Object(o.a)(this,n),(t=Object(l.a)(this,Object(u.a)(n).call(this,e))).componentDidMount=function(){window.addEventListener("scroll",t.onScroll,!1);var e=Object(ye.a)(Je);e&&(t.props.dispatchChosenRunners(e),t.onChange(e)),Z.animateScroll.scrollTo(0)},t.componentWillUnmount=function(){window.removeEventListener("scroll",t.onScroll,!1)},t.shouldComponentUpdate=function(e,n){return!te.a.isEqual(t.props.classes,e.classes)||(!te.a.isEqual(t.props.dispatchChosenRace,e.dispatchChosenRace)||(!te.a.isEqual(t.props.dispatchChosenRunners,e.dispatchChosenRunners)||(!te.a.isEqual(t.props.dispatchEndIndex,e.dispatchEndIndex)||(!te.a.isEqual(t.props.dispatchLoadMoreProgress,e.dispatchLoadMoreProgress)||(!te.a.isEqual(t.props.dispatchLoadingProgress,e.dispatchLoadingProgress)||(!te.a.isEqual(t.props.dispatchRunnerDetails,e.dispatchRunnerDetails)||(!te.a.isEqual(t.props.dispatchSticky,e.dispatchSticky)||(!te.a.isEqual(t.props.menuReducer,e.menuReducer)||(!te.a.isEqual(t.props.raceReducer,e.raceReducer)||(!te.a.isEqual(t.props.runnerReducer,e.runnerReducer)||(!te.a.isEqual(t.props.scrollReducer,e.scrollReducer)||!te.a.isEqual(t.props.searchReducer,e.searchReducer))))))))))))},t.buildClearButton=function(){return h.a.createElement(d.Suspense,{fallback:h.a.createElement(re.a,{className:Ae.prototypeprogress})},h.a.createElement(De,{onClick:t.clearClick}))},t.onScroll=function(){window.scrollY>=165&&!t.props.scrollReducer.sticky?t.props.dispatchSticky(!0):window.scrollY<165&&t.props.scrollReducer.sticky&&t.props.dispatchSticky(!1)},t.scrollToTop=function(){Z.animateScroll.scrollTo(170)},t.performSearch=function(){var e=Object(s.a)(c.a.mark(function e(n){var a,r,s,o;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=19;break}if(t.props.dispatchLoadingProgress(!0),t.props.dispatchRunnerDetails(null),t.props.dispatchChosenRace(""),a=t.props.searchReducer.endIndex,r="getRunner".concat(n).replace(" ",""),s=Object(ye.b)(r)){e.next=14;break}return e.next=10,ke(n,Ye,a);case 10:o=e.sent,Object(ye.g)({key:r,value:JSON.stringify(o)}),e.next=16;break;case 14:o=JSON.parse(s),Object(ye.e)(r);case 16:t.props.dispatchRunnerDetails(o),t.props.dispatchLoadingProgress(!1),t.scrollToTop();case 19:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}(),t.searchForRunners=function(){var e=Object(s.a)(c.a.mark(function e(n,t){var a,r,s,o;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n&&n.length>0)){e.next=16;break}if(a=[],n.map(function(e){a.push(e.display)}),r="getRunners".concat(a.join("")).concat(Ye).concat(t).replace(" ",""),s=Object(ye.b)(r)){e.next=13;break}return e.next=8,ke(a,Ye,t);case 8:return o=e.sent,Object(ye.g)({key:r,value:JSON.stringify(o)}),e.abrupt("return",o);case 13:o=JSON.parse(s),Object(ye.e)(r);case 15:return e.abrupt("return",o);case 16:return e.abrupt("return",null);case 17:case"end":return e.stop()}},e)}));return function(n,t){return e.apply(this,arguments)}}(),t.searchForRunnersByRace=function(){var e=Object(s.a)(c.a.mark(function e(n,t){var a,r,s,o;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n&&n.length>0)){e.next=16;break}if(a=[],n.map(function(e){a.push(e.display)}),r="getRunnersByRace".concat(a.join("")).concat(t).replace(" ",""),s=Object(ye.b)(r)){e.next=13;break}return e.next=8,Oe(a,t);case 8:return o=e.sent,Object(ye.g)({key:r,value:JSON.stringify(o)}),e.abrupt("return",o);case 13:o=JSON.parse(s),Object(ye.e)(r);case 15:return e.abrupt("return",o);case 16:return e.abrupt("return",null);case 17:case"end":return e.stop()}},e)}));return function(n,t){return e.apply(this,arguments)}}(),t.handleClick=function(){var e=Object(s.a)(c.a.mark(function e(n){var a;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),""===(a=t.searchRunnerRef.value.trim())){e.next=8;break}if(Ne(a)===t.state.runnerName){e.next=6;break}return e.next=6,t.performSearch(a);case 6:e.next=9;break;case 8:t.clearClick();case 9:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}(),t.clearClick=function(){t.props.dispatchLoadingProgress(!0),t.props.dispatchRunnerDetails(null),t.props.dispatchSticky(!1),t.props.dispatchChosenRunners([]),t.props.dispatchChosenRace(""),t.props.dispatchEndIndex(0),Object(ye.d)(Je),Object(ye.c)(),t.props.dispatchLoadingProgress(!1),Z.animateScroll.scrollToTop()},t.scrollToTopClick=function(e){e.preventDefault(),Z.animateScroll.scrollToTop()},t.scrollToBottomClick=function(e){e.preventDefault(),Z.animateScroll.scrollToBottom()},t.loadingProgress=function(){return h.a.createElement(pe,null)},t.noResultsFound=function(){return h.a.createElement(ge,null)},t.buildRaceResult=function(e){var n,t=e;return t&&t.length>0&&(t=t[0]),t.raceInfo&&(n=h.a.createElement(d.Suspense,{fallback:h.a.createElement(re.a,{className:Ae.progress})},h.a.createElement(qe,{raceInfo:t.raceInfo}))),h.a.createElement("div",{key:t.id},h.a.createElement("br",null),h.a.createElement(d.Suspense,{fallback:h.a.createElement(re.a,{className:Ae.progress})},h.a.createElement(Ie,{race:t})),n,h.a.createElement(d.Suspense,{fallback:h.a.createElement(re.a,{className:Ae.progress})},h.a.createElement(Be,{runner:t.runner})))},t.loadMoreOnClick=function(){var e=Object(s.a)(c.a.mark(function e(n){var a;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),a=t.props.searchReducer.chosenRunners,t.props.dispatchLoadMoreProgress(!0),e.next=5,t.onChange(a);case 5:t.props.dispatchLoadMoreProgress(!1);case 6:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}(),t.calculateNextEndIndex=function(e){var n=t.props.runnerReducer.runnerDetails,a=t.props.searchReducer,r=a.endIndex,c=a.chosenRunners;return 0===r?10:e.length===c.length?r+10>n.overallStats.noOfRaces?n.overallStats.noOfRaces:r+10:10},t.onChange=function(){var e=Object(s.a)(c.a.mark(function e(n){var a,r,s,o,i,l,u;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.props.runnerReducer.runnersDetails,r=t.props.searchReducer,s=r.chosenRunners,o=r.chosenRace,i=r.endIndex,!(n.length>0)){e.next=16;break}return t.props.dispatchLoadingProgress(!0),l=t.calculateNextEndIndex(n),e.next=7,t.searchForRunners(n,l);case 7:u=e.sent,te.a.isEqual(s,n)||t.props.dispatchChosenRunners(n),te.a.isEqual(a,u)||t.props.dispatchRunnerDetails(u),i!==l&&t.props.dispatchEndIndex(l),""!==o&&t.props.dispatchChosenRace(""),Object(ye.f)({key:Je,value:n}),t.props.dispatchLoadingProgress(!1),e.next=17;break;case 16:t.clearClick();case 17:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}(),t.fetchRunnerByRace=function(){var e=Object(s.a)(c.a.mark(function e(n,a){var r,s,o,i,l;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.props.runnerReducer.runnersDetails,s=t.props.searchReducer,o=s.chosenRace,i=s.chosenRunners,!(n.length>0)){e.next=13;break}return e.next=5,t.searchForRunnersByRace(n,a);case 5:l=e.sent,a!==o&&t.props.dispatchChosenRace(a),te.a.isEqual(n,i)||t.props.dispatchChosenRunners(n),te.a.isEqual(r,l)||t.props.dispatchRunnerDetails(l),Object(ye.f)({key:Je,value:n}),t.props.dispatchLoadingProgress(!1),e.next=14;break;case 13:t.clearClick();case 14:case"end":return e.stop()}},e)}));return function(n,t){return e.apply(this,arguments)}}(),t.fetchRunners=function(){var e=Object(s.a)(c.a.mark(function e(n,a){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("searching - ",n),t.props.dispatchLoadingProgress(!0),n||a(null,{options:[]}),!(n.length>2)){e.next=11;break}return e.t0=a,e.next=7,Se(n);case 7:e.t1=e.sent,(0,e.t0)(null,e.t1),e.next=12;break;case 11:a(null,{options:[]});case 12:t.props.dispatchLoadingProgress(!1);case 13:case"end":return e.stop()}},e)}));return function(n,t){return e.apply(this,arguments)}}(),t.debouncedFetchRunners=te.a.debounce(t.fetchRunners,100),t.getRunners=function(e,n){if(!e||e.length<4)return n(null,{options:[]});t.debouncedFetchRunners(e,n)},t.handleChooseRaceChange=function(){var e=Object(s.a)(c.a.mark(function e(n){var a,r,s,o;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.props.searchReducer,r=a.chosenRunners,s=a.endIndex,o=n.target.value,t.props.dispatchLoadingProgress(!0),0!==s&&t.props.dispatchEndIndex(0),"all"!==o){e.next=9;break}return e.next=7,t.onChange(r);case 7:e.next=11;break;case 9:return e.next=11,t.fetchRunnerByRace(r,o);case 11:t.scrollToTop();case 12:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}(),t.populateOverallStats=function(){var e=t.props.runnerReducer.runnerDetails;return e.overallStats?h.a.createElement(d.Suspense,{fallback:h.a.createElement(re.a,{className:Ae.progress})},h.a.createElement(ze,{overallStats:e.overallStats})):null},t.buildChosenRaceList=function(e,n){var a=[];e||(e="");var r=e.split("||");return r.length>1?r.map(function(e){for(var t=0;t<n.length;t++)n[t].name===e&&a.push(n[t])}):n&&(a=n),a.length>1&&(a=a.sort(function(e,n){return new Date(n.dateTime)-new Date(e.dateTime)})),a.map(function(e){return t.buildRaceResult(e)})},t.searchRunnerRef=h.a.createRef(),t}return Object(p.a)(n,e),Object(i.a)(n,[{key:"render",value:function(){var e,n,t,a,r,c,s,o,i,l=this,u=this.props.classes,p=u.progress,f=u.searchField,m=u.search,g=this.props.searchReducer,b=g.loadingProgress,v=g.chosenRunners,R=g.chosenRace,y=g.loadMoreLoading,E=this.props.runnerReducer.runnerDetails,k=this.props.scrollReducer.sticky,C=k?m:"",O=this.props.searchReducer.endIndex;if(b&&(a=this.loadingProgress()),null!=E&&E.races&&E.races.length>0){e=this.buildClearButton(),n=this.populateOverallStats();var x=E.races;0===O&&(O=10),""===R?(t=x.map(function(e){return l.buildRaceResult(e)}),E.overallStats.noOfRaces>O&&(s=h.a.createElement(d.Suspense,{fallback:h.a.createElement(re.a,{className:p})},h.a.createElement(Fe,{onClick:this.loadMoreOnClick})))):(t=this.buildChosenRaceList(R,E.races)).length>O&&(s=h.a.createElement(d.Suspense,{fallback:h.a.createElement(re.a,{className:p})},h.a.createElement(Fe,{onClick:this.loadMoreOnClick}))),c=h.a.createElement(d.Suspense,{fallback:h.a.createElement(re.a,{className:p})},h.a.createElement(Me,{raceNames:E.raceNames,chosenRace:R,onChange:this.handleChooseRaceChange})),y?(o=this.loadingProgress(),s=null,Z.animateScroll.scrollMore(250)):(i=h.a.createElement(d.Suspense,{fallback:h.a.createElement(re.a,{className:p})},h.a.createElement(Le,{onClick:this.scrollToBottomClick})),k&&(r=h.a.createElement(d.Suspense,{fallback:h.a.createElement(re.a,{className:p})},h.a.createElement(Te,{onClick:this.scrollToTopClick}))))}else null!=E&&0===E.races.length&&(t=this.noResultsFound());return h.a.createElement(h.a.Fragment,null,h.a.createElement("div",{className:C},h.a.createElement(ee.a,{cacheOptions:!0,defaultOptions:!0,className:f,valueKey:"original",labelKey:"display",matchProp:"any",name:"runner-search-field",onChange:this.onChange,loadOptions:this.getRunners,placeholder:"Search Runner",noResultsText:"No runners found",value:v,multi:!0,ignoreAccents:!1}),c,e),i,a,n,t,o,s,r)}}]),n}(d.Component),Ue=Object(f.b)(function(e){return Object(a.a)({},e)},function(e){return{dispatchLoadingProgress:function(n){return e(function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return function(n){n({type:ce.e,payload:e})}}(n))},dispatchRunnerDetails:function(n){return e(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return function(n){n({type:se.a,payload:e})}}(n))},dispatchSticky:function(n){return e(ie(n))},dispatchChosenRunners:function(n){return e(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return function(n){n({type:ce.c,payload:e})}}(n))},dispatchChosenRace:function(n){return e(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return function(n){n({type:ce.b,payload:e})}}(n))},dispatchEndIndex:function(n){return e(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return function(n){n({type:ce.d,payload:e})}}(n))},dispatchLoadMoreProgress:function(n){return e(function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return function(n){n({type:ce.g,payload:e})}}(n))}}})(Object(v.withStyles)(Ae)(h.a.memo(Ke))),Ge=t(227),$e=t.n(Ge),He=t(228),We=t.n(He),_e=t(229),Qe=t.n(_e),Ve=t(204),Xe=t.n(Ve),Ze=t(55),en=h.a.lazy(function(){return t.e(5).then(t.bind(null,1670))}),nn=h.a.lazy(function(){return t.e(4).then(t.bind(null,1671))}),tn=h.a.lazy(function(){return Promise.all([t.e(0),t.e(3)]).then(t.bind(null,1675))}),an=h.a.lazy(function(){return t.e(6).then(t.bind(null,1672))}),rn=h.a.lazy(function(){return t.e(12).then(t.bind(null,347))}),cn=h.a.lazy(function(){return t.e(19).then(t.bind(null,1679))}),sn=h.a.lazy(function(){return Promise.all([t.e(0),t.e(1),t.e(18)]).then(t.bind(null,1680))}),on=h.a.lazy(function(){return Promise.all([t.e(2),t.e(23)]).then(t.bind(null,1681))}),ln=h.a.lazy(function(){return Promise.all([t.e(2),t.e(15)]).then(t.bind(null,1682))}),un=function(e){return{searchField:{paddingBottom:"5px",paddingLeft:"5px",paddingRight:"5px",marginTop:"-5px",zIndex:"2"},search:{position:"sticky",backgroundColor:"white",zIndex:"2 !important",borderBottom:"1px solid #CCCCCC",top:"40px",paddingTop:"40px",borderTop:"1px solid #CCCCCC",paddingBottom:"2px"},progress:{margin:2*e.spacing.unit},expansionPanel:{marginTop:"5px",marginBottom:"15px"}}},pn="chosenRaces",dn="directionsDestinationKey",hn="origin",fn=function(e){function n(e){var t;return Object(o.a)(this,n),(t=Object(l.a)(this,Object(u.a)(n).call(this,e))).componentDidMount=function(){window.addEventListener("scroll",t.onScroll,!1);var e=Object(ye.a)(pn);e&&(t.props.dispatchLoadingProgress(!0),t.props.dispatchChosenRace(e),t.onChange(e),t.props.dispatchLoadingProgress(!1)),Z.animateScroll.scrollTo(0)},t.componentWillUnmount=function(){window.removeEventListener("scroll",t.onScroll,!1)},t.shouldComponentUpdate=function(e,n){return!te.a.isEqual(t.props.classes,e.classes)||(!te.a.isEqual(t.props.dispatchChosenRace,e.dispatchChosenRace)||(!te.a.isEqual(t.props.dispatchLoadingProgress,e.dispatchLoadingProgress)||(!te.a.isEqual(t.props.dispatchRaceDetails,e.dispatchRaceDetails)||(!te.a.isEqual(t.props.dispatchSticky,e.dispatchSticky)||(!te.a.isEqual(t.props.menuReducer,e.menuReducer)||(!te.a.isEqual(t.props.raceReducer,e.raceReducer)||(!te.a.isEqual(t.props.scrollReducer,e.scrollReducer)||!te.a.isEqual(t.props.searchReducer,e.searchReducer))))))))},t.buildClearButton=function(){return h.a.createElement(d.Suspense,{fallback:h.a.createElement(re.a,{className:un.prototypeprogress})},h.a.createElement(an,{onClick:t.clearClick}))},t.onScroll=function(){window.scrollY>=165&&!t.props.scrollReducer.sticky?t.props.dispatchSticky(!0):window.scrollY<165&&t.props.scrollReducer.sticky&&t.props.dispatchSticky(!1)},t.scrollToTop=function(){Z.animateScroll.scrollTo(170)},t.loadingProgress=function(){return h.a.createElement(pe,null)},t.noResultsFound=function(){return h.a.createElement(ge,null)},t.scrollToTopClick=function(e){e.preventDefault(),Z.animateScroll.scrollToTop()},t.scrollToBottomClick=function(e){e.preventDefault(),Z.animateScroll.scrollToBottom()},t.onChange=function(){var e=Object(s.a)(c.a.mark(function e(n){var a,r,s;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.props.raceReducer.raceDetails,r=t.props.searchReducer.chosenRaces,!(n.length>1)){e.next=6;break}return t.props.dispatchChosenRace(r),t.props.dispatchLoadingProgress(!1),e.abrupt("return");case 6:if(1!==n.length){e.next=17;break}return t.props.dispatchLoadingProgress(!0),e.next=10,t.searchForRaces(n);case 10:s=e.sent,te.a.isEqual(r,n)||t.props.dispatchChosenRace(n),te.a.isEqual(a,s)||t.props.dispatchRaceDetails(s),Object(ye.f)({key:pn,value:n}),t.props.dispatchLoadingProgress(!1),e.next=18;break;case 17:t.clearClick();case 18:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}(),t.fetchRaces=function(){var e=Object(s.a)(c.a.mark(function e(n,a){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("searching - ",n),t.props.dispatchLoadingProgress(!0),n||a(null,{options:[]}),!(n.length>2)){e.next=11;break}return e.t0=a,e.next=7,we(n);case 7:e.t1=e.sent,(0,e.t0)(null,e.t1),e.next=12;break;case 11:a(null,{options:[]});case 12:t.props.dispatchLoadingProgress(!1);case 13:case"end":return e.stop()}},e)}));return function(n,t){return e.apply(this,arguments)}}(),t.debouncedFetchRaces=te.a.debounce(t.fetchRaces,200),t.getRaces=function(e,n){if(!e||e.length<3)return n(null,{options:[]});t.debouncedFetchRaces(e,n)},t.searchForRaces=function(){var e=Object(s.a)(c.a.mark(function e(n){var t,a,r;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=14;break}if(t="getRaces".concat(n[0].display).replace(" ",""),a=Object(ye.b)(t)){e.next=11;break}return e.next=6,je(n[0].original);case 6:return r=e.sent,Object(ye.g)({key:t,value:JSON.stringify(r)}),e.abrupt("return",r);case 11:r=JSON.parse(a),Object(ye.e)(t);case 13:return e.abrupt("return",r);case 14:return e.abrupt("return",null);case 15:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}(),t.clearClick=function(){t.props.dispatchLoadingProgress(!0),t.props.dispatchSticky(!1),t.props.dispatchRaceDetails(null),t.props.dispatchChosenRace(null),Object(ye.d)(pn),Object(ye.e)(dn),t.props.dispatchLoadingProgress(!1),Z.animateScroll.scrollToTop()},t.buildRaceInfo=function(e){var n;return e&&(e._latitude>0&&delete e._latitude,n=h.a.createElement(d.Suspense,{fallback:h.a.createElement(re.a,{className:un.progress})},h.a.createElement(tn,{raceInfo:e}))),h.a.createElement("div",{key:e.id},n)},t.buildResultCategories=function(e,n){var t;return e&&(t=h.a.createElement(d.Suspense,{fallback:h.a.createElement(re.a,{className:n.progress})},h.a.createElement(rn,{categoryRecords:e}))),h.a.createElement(h.a.Fragment,null,h.a.createElement($e.a,{key:e.length,className:n.expansionPanel},h.a.createElement(We.a,{expandIcon:h.a.createElement(Xe.a,null)},h.a.createElement(me.a,{className:n.heading},h.a.createElement("b",null,"Overall"))),h.a.createElement(Qe.a,null,t)))},t.buildYearResultCategories=function(e){var n;return e&&(n=h.a.createElement(d.Suspense,{fallback:h.a.createElement(re.a,{className:un.progress})},h.a.createElement(cn,{races:e}),h.a.createElement("br",null),h.a.createElement("br",null),h.a.createElement("br",null),h.a.createElement("br",null))),n},t.buildYearPerformanceGraph=function(e,n){var t=e.map(function(e){if(e.performance>0)return["".concat(e.year),"".concat(e.performance,"%")]}).filter(function(e){return void 0!==e});return h.a.createElement(d.Suspense,{fallback:h.a.createElement(re.a,{className:n})},h.a.createElement(sn,{raceData:t}))},t.buildDownwardArrow=function(e){return h.a.createElement(d.Suspense,{fallback:h.a.createElement(re.a,{className:e})},h.a.createElement(nn,{onClick:t.scrollToBottomClick}))},t.buildMapComponent=function(e,n){var t,a=Object(ye.b)(hn);if(!a&&navigator.geolocation){navigator.geolocation.getCurrentPosition(function(e){t={lat:e.coords.latitude,lng:e.coords.longitude},Object(ye.g)({key:hn,value:JSON.stringify(t)})})}else t=JSON.parse(a);return h.a.createElement(d.Suspense,{fallback:h.a.createElement(re.a,{className:n})},h.a.createElement(on,{destination:e,origin:t}))},t.buildSameDayRaces=function(e,n){return e&&0!==e.length?h.a.createElement(d.Suspense,{fallback:h.a.createElement(re.a,{className:n})},h.a.createElement(ln,{races:e})):null},t.searchRaceRef=h.a.createRef(),t}return Object(p.a)(n,e),Object(i.a)(n,[{key:"render",value:function(){var e,n,t,a,r,c,s,o,i,l,u=this.props.classes,p=u.progress,f=u.searchField,m=u.search,g=this.props.searchReducer,b=g.loadingRaceProgress,v=g.chosenRaces,R=this.props.raceReducer.raceDetails,y=this.props.scrollReducer.sticky,E=y?m:"";if(b&&(n=this.loadingProgress()),v&&v.length>0&&(e=this.buildClearButton()),R){t=this.buildRaceInfo(R.raceInfo),a=this.buildResultCategories(R.categoryRecords,this.props.classes),s=this.buildYearResultCategories(R.races),o=this.buildYearPerformanceGraph(R.races,p);var k={lat:R.properties.latitude,lng:R.properties.longitude};i=this.buildMapComponent(k,p),c=this.buildDownwardArrow(p),l=this.buildSameDayRaces(R.racesSameDay,p)}return y&&(r=h.a.createElement(d.Suspense,{fallback:h.a.createElement(re.a,{className:p})},h.a.createElement(en,{onClick:this.scrollToTopClick}))),h.a.createElement(h.a.Fragment,null,h.a.createElement("div",{className:E},h.a.createElement(ee.a,{cacheOptions:!0,defaultOptions:!0,className:f,valueKey:"original",labelKey:"display",matchProp:"any",name:"race-search-field",onChange:this.onChange,loadOptions:this.getRaces,placeholder:"Search Race",noResultsText:"No race found",value:v,multi:!0,ignoreAccents:!1}),e),n,t,i,l,o,a,s,c,r)}}]),n}(d.Component),mn=Object(f.b)(function(e){return Object(a.a)({},e)},function(e){return{dispatchLoadingProgress:function(n){return e(function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return function(n){n({type:ce.f,payload:e})}}(n))},dispatchChosenRace:function(n){return e(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return function(n){n({type:ce.a,payload:e})}}(n))},dispatchRaceDetails:function(n){return e(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return function(n){n({type:Ze.a,payload:e})}}(n))},dispatchSticky:function(n){return e(ie(n))}}})(Object(v.withStyles)(un)(h.a.memo(fn))),gn="Main-menuoption",bn=function(e){function n(e){var t;return Object(o.a)(this,n),(t=Object(l.a)(this,Object(u.a)(n).call(this,e))).raceOnClick=function(){var e=Object(s.a)(c.a.mark(function e(n){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),Object(ye.f)({key:gn,value:"race"}),t.props.dispatchMenuAction({race:!0,runner:!1}),t.props.dispatchMenuToggleAction(!1);case 4:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}(),t.runnerOnClick=function(){var e=Object(s.a)(c.a.mark(function e(n){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),Object(ye.f)({key:gn,value:"runner"}),t.props.dispatchMenuAction({race:!1,runner:!0}),t.props.dispatchMenuToggleAction(!1);case 4:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}(),t}return Object(p.a)(n,e),Object(i.a)(n,[{key:"componentWillMount",value:function(){var e=Object(ye.a)(gn);e&&("race"===e?this.props.dispatchMenuAction({race:!0,runner:!1}):this.props.dispatchMenuAction({race:!1,runner:!0}),this.props.dispatchMenuToggleAction(!1))}},{key:"render",value:function(){var e,n=this.props.menuReducer,t=n.race,a=n.runner,r=!1;return e=t?h.a.createElement(mn,null):h.a.createElement(Ue,null),(t||a)&&(r=!0),h.a.createElement(h.a.Fragment,null,h.a.createElement(X,{raceOnClick:this.raceOnClick,runnerOnClick:this.runnerOnClick,closeMenu:r}),e)}}]),n}(d.PureComponent);n.default=Object(f.b)(function(e){return Object(a.a)({},e)},function(e){return{dispatchMenuAction:function(n){return e(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return function(n){n({type:_.a,payload:e})}}(n))},dispatchMenuToggleAction:function(n){return e(Q(n))}}})(bn)},226:function(e,n,t){"use strict";function a(e){var n=e.key,t=e.value;"null"!==t&&sessionStorage.setItem(n,JSON.stringify(t))}function r(e){var n=sessionStorage.getItem(e);return n?JSON.parse(n):n}function c(e){e&&sessionStorage.removeItem(e)}function s(){sessionStorage.clear()}function o(e){var n=e.key,t=e.value;"null"!==t&&localStorage.setItem(n,JSON.stringify(t))}function i(e){var n=localStorage.getItem(e);return n?JSON.parse(n):n}function l(e){e&&localStorage.removeItem(e)}t.d(n,"g",function(){return a}),t.d(n,"b",function(){return r}),t.d(n,"e",function(){return c}),t.d(n,"c",function(){return s}),t.d(n,"f",function(){return o}),t.d(n,"a",function(){return i}),t.d(n,"d",function(){return l})}}]);
//# sourceMappingURL=21.47d43c04.chunk.js.map