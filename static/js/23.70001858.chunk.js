(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{236:function(e,n,t){"use strict";function a(e){var n=e.key,t=e.value;"null"!==t&&sessionStorage.setItem(n,JSON.stringify(t))}function r(e){var n=sessionStorage.getItem(e);return n?JSON.parse(n):n}function c(e){e&&sessionStorage.removeItem(e)}function s(){sessionStorage.clear()}function o(e){var n=e.key,t=e.value;"null"!==t&&localStorage.setItem(n,JSON.stringify(t))}function i(e){var n=localStorage.getItem(e);return n?JSON.parse(n):n}function l(e){e&&localStorage.removeItem(e)}t.d(n,"g",function(){return a}),t.d(n,"b",function(){return r}),t.d(n,"e",function(){return c}),t.d(n,"c",function(){return s}),t.d(n,"f",function(){return o}),t.d(n,"a",function(){return i}),t.d(n,"d",function(){return l})},6037:function(e,n,t){"use strict";t.r(n);var a=t(189),r=t(230),c=t.n(r),s=t(231),o=t(45),i=t(46),l=t(49),u=t(47),p=t(50),d=t(0),h=t.n(d),f=t(48),m=t(44),g=t.n(m),b=t(252),v=t(81),y=t.n(v),R=t(25),E=t(5671),k=t.n(E),O=t(74),C=t.n(O),x=t(5647),w=t.n(x),S=t(5650),j=t.n(S),N=t(361),P=t.n(N),T=t(5703),D=t.n(T),L=t(351),I=t.n(L),M=t(279),B=t.n(M),q=t(284),z=t.n(q),A=t(285),F=t.n(A),J=t(362),Y=t.n(J),K=t(5707),U=t.n(K),G=t(5709),$=t.n(G),H=t(287),W=t.n(H),_=t(288),Q=t.n(_),V=t(289),X=t.n(V),Z=t(40),ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return function(n){n({type:Z.b,payload:e})}},ne=function(e){function n(e){var t;return Object(o.a)(this,n),(t=Object(l.a)(this,Object(u.a)(n).call(this,e))).handleDrawerOpen=function(){t.props.dispatchMenuToggleAction(!0)},t.handleDrawerClose=function(){t.props.dispatchMenuToggleAction(!1)},t}return Object(p.a)(n,e),Object(i.a)(n,[{key:"render",value:function(){var e=this.props,n=e.classes,t=e.theme,a=e.runnerOnClick,r=e.raceOnClick,c=e.calendarOnClick,s=e.menuReducer.menuOpen;return h.a.createElement("div",{className:n.root},h.a.createElement(C.a,null),h.a.createElement(w.a,{position:"fixed",className:y()(n.appBar,Object(b.a)({},n.appBarShift,s))},h.a.createElement(j.a,{disableGutters:s},h.a.createElement(I.a,{color:"inherit","aria-label":"Open drawer",onClick:this.handleDrawerOpen,className:y()(n.menuButton,s&&n.hide)},h.a.createElement(B.a,null)))),h.a.createElement(k.a,{className:n.drawer,variant:"persistent",anchor:"left",open:s,classes:{paper:n.drawerPaper}},h.a.createElement("div",{className:n.drawerHeader},h.a.createElement(I.a,{onClick:this.handleDrawerClose},"ltr"===t.direction?h.a.createElement(z.a,null):h.a.createElement(F.a,null))),h.a.createElement(D.a,null),h.a.createElement(P.a,null,h.a.createElement(Y.a,{button:!0,key:"Runner",onClick:a},h.a.createElement(U.a,null,h.a.createElement(W.a,null)),h.a.createElement($.a,{primary:"Runner"})),h.a.createElement(Y.a,{button:!0,key:"Race",onClick:r},h.a.createElement(U.a,null,h.a.createElement(Q.a,null)),h.a.createElement($.a,{primary:"Race"})),h.a.createElement(Y.a,{button:!0,key:"Calendar",onClick:c},h.a.createElement(U.a,null,h.a.createElement(X.a,null)),h.a.createElement($.a,{primary:"Calendar"})))))}}]),n}(h.a.Component),te=Object(f.b)(function(e){return Object(a.a)({},e)},function(e){return{dispatchMenuToggleAction:function(n){return e(ee(n))}}})(Object(R.withStyles)(function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(240,"px)"),marginLeft:240,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginLeft:12,marginRight:20},hide:{display:"none"},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},drawerHeader:Object(a.a)({display:"flex",alignItems:"center",padding:"0 8px"},e.mixins.toolbar,{justifyContent:"flex-end"}),content:{flexGrow:1,padding:3*e.spacing.unit,transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-240},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0}}},{withTheme:!0})(h.a.memo(ne))),ae=t(363),re=t(367),ce=t(368),se=t.n(ce),oe=(t(369),t(10)),ie=t(55),le=t(56),ue=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return function(n){n({type:le.a,payload:e})}},pe=t(5720),de=t.n(pe);var he=Object(R.withStyles)(function(e){return{}})(function(){return h.a.createElement("span",null,h.a.createElement("br",null),h.a.createElement(de.a,null),h.a.createElement("br",null),h.a.createElement(de.a,{color:"secondary",variant:"query"}),h.a.createElement("br",null),h.a.createElement(de.a,null))}),fe=t(174),me=t.n(fe),ge=t(180),be=t.n(ge);var ve=Object(R.withStyles)(function(e){return{noRaces:{marginRight:"10px",marginLeft:"10px",marginTop:"5px",marginBottom:"5px"}}})(function(e){var n=e.classes;return h.a.createElement(me.a,{className:n.noRaces},h.a.createElement(be.a,{variant:"subheading"},"No race results found for this runner!"))}),ye=t(370),Re=t.n(ye),Ee=t(5741),ke=t(236),Oe=new Ee.AllHtmlEntities;function Ce(e,n,t){return xe.apply(this,arguments)}function xe(){return(xe=Object(s.a)(c.a.mark(function e(n,t,a){var r,s;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.join("$$"),s=null,e.next=4,Re.a.get("".concat("https://fellracefinder.xyz","/runner/").concat(r,"/").concat(t,"/").concat(a)).then(function(e){return s=e.data}).catch(function(e){console.log(e)});case 4:return e.abrupt("return",s);case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}function we(e,n){return Se.apply(this,arguments)}function Se(){return(Se=Object(s.a)(c.a.mark(function e(n,t){var a,r,s;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.join("$$"),r=t.replace("/","**"),r=Oe.encode(r),s=null,e.next=6,Re.a.get("".concat("https://fellracefinder.xyz","/runnerByRace/").concat(a,"/").concat(r)).then(function(e){return s=e.data}).catch(function(e){console.log(e)});case 6:return e.abrupt("return",s);case 7:case"end":return e.stop()}},e)}))).apply(this,arguments)}function je(e){var n="runnersList".concat(e),t=Object(ke.b)(n);if(t)return{options:t};var a="".concat("https://fellracefinder.xyz","/autocomplete/runner/").concat(e.toLowerCase());return fetch(a).then(function(e){return e.json()}).then(function(e){var t=[];return e.items.map(function(e){var n=!1;return t.map(function(t){return e.display===t.display&&(n=!0,!0)}),n||t.push(e),n}),Object(ke.g)({key:n,value:t}),{options:t}})}function Ne(e){var n="raceSearch".concat(e),t=Object(ke.b)(n);if(t)return{options:t};var a="".concat("https://fellracefinder.xyz","/autocomplete/race/").concat(e.toLowerCase());return fetch(a).then(function(e){return e.json()}).then(function(e){var t=[];return console.log(e),e.map(function(e){var n=!1;return t.map(function(t){return e.display===t.display&&(n=!0,!0)}),n||t.push(e),n}),Object(ke.g)({key:n,value:t}),{options:t}})}function Pe(e){return Te.apply(this,arguments)}function Te(){return(Te=Object(s.a)(c.a.mark(function e(n){var t,a;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat("https://fellracefinder.xyz","/race/byNames/").concat(n),a=null,e.next=4,Re.a.get(t).then(function(e){return a=e.data}).catch(function(e){console.log(e)});case 4:return e.abrupt("return",a);case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}function De(e){var n=e.split(" ").map(function(e){return"".concat(e.charAt(0).toUpperCase()).concat(e.slice(1)," ")}),t="";return n.map(function(e){return t="".concat(t).concat(e)}),t}var Le=h.a.lazy(function(){return t.e(6).then(t.bind(null,6024))}),Ie=h.a.lazy(function(){return t.e(5).then(t.bind(null,6025))}),Me=h.a.lazy(function(){return t.e(7).then(t.bind(null,6026))}),Be=h.a.lazy(function(){return t.e(19).then(t.bind(null,6027))}),qe=h.a.lazy(function(){return Promise.all([t.e(18),t.e(31)]).then(t.bind(null,6028))}),ze=h.a.lazy(function(){return Promise.all([t.e(0),t.e(4)]).then(t.bind(null,6029))}),Ae=h.a.lazy(function(){return Promise.all([t.e(13),t.e(30)]).then(t.bind(null,6030))}),Fe=h.a.lazy(function(){return Promise.all([t.e(16),t.e(27)]).then(t.bind(null,6031))}),Je=h.a.lazy(function(){return t.e(22).then(t.bind(null,6032))}),Ye=function(e){return{searchField:{paddingBottom:"5px",paddingLeft:"5px",paddingRight:"5px",marginTop:"-5px",zIndex:"2"},search:{position:"sticky",backgroundColor:"white",zIndex:"2 !important",borderBottom:"1px solid #CCCCCC",top:"40px",paddingTop:"40px",borderTop:"1px solid #CCCCCC",paddingBottom:"2px"},progress:{margin:2*e.spacing.unit}}},Ke="chosenRunners",Ue=0,Ge=function(e){function n(e){var t;return Object(o.a)(this,n),(t=Object(l.a)(this,Object(u.a)(n).call(this,e))).componentDidMount=function(){window.addEventListener("scroll",t.onScroll,!1);var e=Object(ke.a)(Ke);e&&(t.props.dispatchChosenRunners(e),t.onChange(e)),ae.animateScroll.scrollTo(0)},t.componentWillUnmount=function(){window.removeEventListener("scroll",t.onScroll,!1)},t.shouldComponentUpdate=function(e,n){return!se.a.isEqual(t.props.classes,e.classes)||(!se.a.isEqual(t.props.dispatchChosenRace,e.dispatchChosenRace)||(!se.a.isEqual(t.props.dispatchChosenRunners,e.dispatchChosenRunners)||(!se.a.isEqual(t.props.dispatchEndIndex,e.dispatchEndIndex)||(!se.a.isEqual(t.props.dispatchLoadMoreProgress,e.dispatchLoadMoreProgress)||(!se.a.isEqual(t.props.dispatchLoadingProgress,e.dispatchLoadingProgress)||(!se.a.isEqual(t.props.dispatchRunnerDetails,e.dispatchRunnerDetails)||(!se.a.isEqual(t.props.dispatchSticky,e.dispatchSticky)||(!se.a.isEqual(t.props.menuReducer,e.menuReducer)||(!se.a.isEqual(t.props.raceReducer,e.raceReducer)||(!se.a.isEqual(t.props.runnerReducer,e.runnerReducer)||(!se.a.isEqual(t.props.scrollReducer,e.scrollReducer)||!se.a.isEqual(t.props.searchReducer,e.searchReducer))))))))))))},t.buildClearButton=function(){return h.a.createElement(d.Suspense,{fallback:h.a.createElement(g.a,{className:Ye.prototypeprogress})},h.a.createElement(Me,{onClick:t.clearClick}))},t.onScroll=function(){window.scrollY>=165&&!t.props.scrollReducer.sticky?t.props.dispatchSticky(!0):window.scrollY<165&&t.props.scrollReducer.sticky&&t.props.dispatchSticky(!1)},t.scrollToTop=function(){ae.animateScroll.scrollTo(170)},t.performSearch=function(){var e=Object(s.a)(c.a.mark(function e(n){var a,r,s,o;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=19;break}if(t.props.dispatchLoadingProgress(!0),t.props.dispatchRunnerDetails(null),t.props.dispatchChosenRace(""),a=t.props.searchReducer.endIndex,r="getRunner".concat(n).replace(" ",""),s=Object(ke.b)(r)){e.next=14;break}return e.next=10,Ce(n,Ue,a);case 10:o=e.sent,Object(ke.g)({key:r,value:JSON.stringify(o)}),e.next=16;break;case 14:o=JSON.parse(s),Object(ke.e)(r);case 16:t.props.dispatchRunnerDetails(o),t.props.dispatchLoadingProgress(!1),t.scrollToTop();case 19:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}(),t.searchForRunners=function(){var e=Object(s.a)(c.a.mark(function e(n,t){var a,r,s,o;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n&&n.length>0)){e.next=16;break}if(a=[],n.map(function(e){a.push(e.display)}),r="getRunners".concat(a.join("")).concat(Ue).concat(t).replace(" ",""),s=Object(ke.b)(r)){e.next=13;break}return e.next=8,Ce(a,Ue,t);case 8:return o=e.sent,Object(ke.g)({key:r,value:JSON.stringify(o)}),e.abrupt("return",o);case 13:o=JSON.parse(s),Object(ke.e)(r);case 15:return e.abrupt("return",o);case 16:return e.abrupt("return",null);case 17:case"end":return e.stop()}},e)}));return function(n,t){return e.apply(this,arguments)}}(),t.searchForRunnersByRace=function(){var e=Object(s.a)(c.a.mark(function e(n,t){var a,r,s,o;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n&&n.length>0)){e.next=16;break}if(a=[],n.map(function(e){a.push(e.display)}),r="getRunnersByRace".concat(a.join("")).concat(t).replace(" ",""),s=Object(ke.b)(r)){e.next=13;break}return e.next=8,we(a,t);case 8:return o=e.sent,Object(ke.g)({key:r,value:JSON.stringify(o)}),e.abrupt("return",o);case 13:o=JSON.parse(s),Object(ke.e)(r);case 15:return e.abrupt("return",o);case 16:return e.abrupt("return",null);case 17:case"end":return e.stop()}},e)}));return function(n,t){return e.apply(this,arguments)}}(),t.handleClick=function(){var e=Object(s.a)(c.a.mark(function e(n){var a;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),""===(a=t.searchRunnerRef.value.trim())){e.next=8;break}if(De(a)===t.state.runnerName){e.next=6;break}return e.next=6,t.performSearch(a);case 6:e.next=9;break;case 8:t.clearClick();case 9:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}(),t.clearClick=function(){t.props.dispatchLoadingProgress(!0),t.props.dispatchRunnerDetails(null),t.props.dispatchSticky(!1),t.props.dispatchChosenRunners([]),t.props.dispatchChosenRace(""),t.props.dispatchEndIndex(0),Object(ke.d)(Ke),Object(ke.c)(),t.props.dispatchLoadingProgress(!1),ae.animateScroll.scrollToTop()},t.scrollToTopClick=function(e){e.preventDefault(),ae.animateScroll.scrollToTop()},t.scrollToBottomClick=function(e){e.preventDefault(),ae.animateScroll.scrollToBottom()},t.loadingProgress=function(){return h.a.createElement(he,null)},t.noResultsFound=function(){return h.a.createElement(ve,null)},t.buildRaceResult=function(e){var n,t=e;return t&&t.length>0&&(t=t[0]),t.raceInfo&&(n=h.a.createElement(d.Suspense,{fallback:h.a.createElement(g.a,{className:Ye.progress})},h.a.createElement(ze,{raceInfo:t.raceInfo}))),h.a.createElement("div",{key:t.id},h.a.createElement("br",null),h.a.createElement(d.Suspense,{fallback:h.a.createElement(g.a,{className:Ye.progress})},h.a.createElement(Be,{race:t})),n,h.a.createElement(d.Suspense,{fallback:h.a.createElement(g.a,{className:Ye.progress})},h.a.createElement(qe,{runner:t.runner})))},t.loadMoreOnClick=function(){var e=Object(s.a)(c.a.mark(function e(n){var a;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),a=t.props.searchReducer.chosenRunners,t.props.dispatchLoadMoreProgress(!0),e.next=5,t.onChange(a);case 5:t.props.dispatchLoadMoreProgress(!1);case 6:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}(),t.calculateNextEndIndex=function(e){var n=t.props.runnerReducer.runnerDetails,a=t.props.searchReducer,r=a.endIndex,c=a.chosenRunners;return 0===r?10:e.length===c.length?r+10>n.overallStats.noOfRaces?n.overallStats.noOfRaces:r+10:10},t.onChange=function(){var e=Object(s.a)(c.a.mark(function e(n){var a,r,s,o,i,l,u;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.props.runnerReducer.runnersDetails,r=t.props.searchReducer,s=r.chosenRunners,o=r.chosenRace,i=r.endIndex,!(n.length>0)){e.next=16;break}return t.props.dispatchLoadingProgress(!0),l=t.calculateNextEndIndex(n),e.next=7,t.searchForRunners(n,l);case 7:u=e.sent,se.a.isEqual(s,n)||t.props.dispatchChosenRunners(n),se.a.isEqual(a,u)||t.props.dispatchRunnerDetails(u),i!==l&&t.props.dispatchEndIndex(l),""!==o&&t.props.dispatchChosenRace(""),Object(ke.f)({key:Ke,value:n}),t.props.dispatchLoadingProgress(!1),e.next=17;break;case 16:t.clearClick();case 17:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}(),t.fetchRunnerByRace=function(){var e=Object(s.a)(c.a.mark(function e(n,a){var r,s,o,i,l;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.props.runnerReducer.runnersDetails,s=t.props.searchReducer,o=s.chosenRace,i=s.chosenRunners,!(n.length>0)){e.next=13;break}return e.next=5,t.searchForRunnersByRace(n,a);case 5:l=e.sent,a!==o&&t.props.dispatchChosenRace(a),se.a.isEqual(n,i)||t.props.dispatchChosenRunners(n),se.a.isEqual(r,l)||t.props.dispatchRunnerDetails(l),Object(ke.f)({key:Ke,value:n}),t.props.dispatchLoadingProgress(!1),e.next=14;break;case 13:t.clearClick();case 14:case"end":return e.stop()}},e)}));return function(n,t){return e.apply(this,arguments)}}(),t.fetchRunners=function(){var e=Object(s.a)(c.a.mark(function e(n,a){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("searching - ",n),t.props.dispatchLoadingProgress(!0),n||a(null,{options:[]}),!(n.length>2)){e.next=11;break}return e.t0=a,e.next=7,je(n);case 7:e.t1=e.sent,(0,e.t0)(null,e.t1),e.next=12;break;case 11:a(null,{options:[]});case 12:t.props.dispatchLoadingProgress(!1);case 13:case"end":return e.stop()}},e)}));return function(n,t){return e.apply(this,arguments)}}(),t.debouncedFetchRunners=se.a.debounce(t.fetchRunners,100),t.getRunners=function(e,n){if(!e||e.length<4)return n(null,{options:[]});t.debouncedFetchRunners(e,n)},t.handleChooseRaceChange=function(){var e=Object(s.a)(c.a.mark(function e(n){var a,r,s,o;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.props.searchReducer,r=a.chosenRunners,s=a.endIndex,o=n.target.value,t.props.dispatchLoadingProgress(!0),0!==s&&t.props.dispatchEndIndex(0),"all"!==o){e.next=9;break}return e.next=7,t.onChange(r);case 7:e.next=11;break;case 9:return e.next=11,t.fetchRunnerByRace(r,o);case 11:t.scrollToTop();case 12:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}(),t.populateOverallStats=function(){var e=t.props.runnerReducer.runnerDetails;return e.overallStats?h.a.createElement(d.Suspense,{fallback:h.a.createElement(g.a,{className:Ye.progress})},h.a.createElement(Fe,{overallStats:e.overallStats})):null},t.buildChosenRaceList=function(e,n){var a=[];e||(e="");var r=e.split("||");return r.length>1?r.map(function(e){for(var t=0;t<n.length;t++)n[t].name===e&&a.push(n[t])}):n&&(a=n),a.length>1&&(a=a.sort(function(e,n){return new Date(n.dateTime)-new Date(e.dateTime)})),a.map(function(e){return t.buildRaceResult(e)})},t.searchRunnerRef=h.a.createRef(),t}return Object(p.a)(n,e),Object(i.a)(n,[{key:"render",value:function(){var e,n,t,a,r,c,s,o,i,l=this,u=this.props.classes,p=u.progress,f=u.searchField,m=u.search,b=this.props.searchReducer,v=b.loadingProgress,y=b.chosenRunners,R=b.chosenRace,E=b.loadMoreLoading,k=this.props.runnerReducer.runnerDetails,O=this.props.scrollReducer.sticky,C=O?m:"",x=this.props.searchReducer.endIndex;if(v&&(a=this.loadingProgress()),null!=k&&k.races&&k.races.length>0){e=this.buildClearButton(),n=this.populateOverallStats();var w=k.races;0===x&&(x=10),""===R?(t=w.map(function(e){return l.buildRaceResult(e)}),k.overallStats.noOfRaces>x&&(s=h.a.createElement(d.Suspense,{fallback:h.a.createElement(g.a,{className:p})},h.a.createElement(Je,{onClick:this.loadMoreOnClick})))):(t=this.buildChosenRaceList(R,k.races)).length>x&&(s=h.a.createElement(d.Suspense,{fallback:h.a.createElement(g.a,{className:p})},h.a.createElement(Je,{onClick:this.loadMoreOnClick}))),c=h.a.createElement(d.Suspense,{fallback:h.a.createElement(g.a,{className:p})},h.a.createElement(Ae,{raceNames:k.raceNames,chosenRace:R,onChange:this.handleChooseRaceChange})),E?(o=this.loadingProgress(),s=null,ae.animateScroll.scrollMore(250)):(i=h.a.createElement(d.Suspense,{fallback:h.a.createElement(g.a,{className:p})},h.a.createElement(Ie,{onClick:this.scrollToBottomClick})),O&&(r=h.a.createElement(d.Suspense,{fallback:h.a.createElement(g.a,{className:p})},h.a.createElement(Le,{onClick:this.scrollToTopClick}))))}else null!=k&&0===k.races.length&&(t=this.noResultsFound());return h.a.createElement(h.a.Fragment,null,h.a.createElement("div",{className:C},h.a.createElement(re.a,{cacheOptions:!0,defaultOptions:!0,className:f,valueKey:"original",labelKey:"display",matchProp:"any",name:"runner-search-field",onChange:this.onChange,loadOptions:this.getRunners,placeholder:"Search Runner",noResultsText:"No runners found",value:y,multi:!0,ignoreAccents:!1}),c,e),i,a,n,t,o,s,r)}}]),n}(d.Component),$e=Object(f.b)(function(e){return Object(a.a)({},e)},function(e){return{dispatchLoadingProgress:function(n){return e(function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return function(n){n({type:oe.e,payload:e})}}(n))},dispatchRunnerDetails:function(n){return e(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return function(n){n({type:ie.a,payload:e})}}(n))},dispatchSticky:function(n){return e(ue(n))},dispatchChosenRunners:function(n){return e(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return function(n){n({type:oe.c,payload:e})}}(n))},dispatchChosenRace:function(n){return e(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return function(n){n({type:oe.b,payload:e})}}(n))},dispatchEndIndex:function(n){return e(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return function(n){n({type:oe.d,payload:e})}}(n))},dispatchLoadMoreProgress:function(n){return e(function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return function(n){n({type:oe.g,payload:e})}}(n))}}})(Object(R.withStyles)(Ye)(h.a.memo(Ge))),He=t(58),We=t(237),_e=t.n(We),Qe=t(238),Ve=t.n(Qe),Xe=t(239),Ze=t.n(Xe),en=t(207),nn=t.n(en),tn=t(41),an=h.a.lazy(function(){return t.e(6).then(t.bind(null,6024))}),rn=h.a.lazy(function(){return t.e(5).then(t.bind(null,6025))}),cn=h.a.lazy(function(){return Promise.all([t.e(0),t.e(4)]).then(t.bind(null,6029))}),sn=h.a.lazy(function(){return t.e(7).then(t.bind(null,6026))}),on=h.a.lazy(function(){return t.e(14).then(t.bind(null,409))}),ln=h.a.lazy(function(){return t.e(21).then(t.bind(null,6033))}),un=h.a.lazy(function(){return Promise.all([t.e(0),t.e(2),t.e(20)]).then(t.bind(null,6034))}),pn=h.a.lazy(function(){return Promise.all([t.e(1),t.e(3),t.e(25)]).then(t.bind(null,6035))}),dn=h.a.lazy(function(){return Promise.all([t.e(1),t.e(3),t.e(17)]).then(t.bind(null,6036))}),hn=function(e){return{searchField:{paddingBottom:"5px",paddingLeft:"5px",paddingRight:"5px",marginTop:"-5px",zIndex:"2"},search:{position:"sticky",backgroundColor:"white",zIndex:"2 !important",borderBottom:"1px solid #CCCCCC",top:"40px",paddingTop:"40px",borderTop:"1px solid #CCCCCC",paddingBottom:"2px"},progress:{margin:2*e.spacing.unit},expansionPanel:{marginTop:"5px",marginBottom:"15px"}}},fn="chosenRaces",mn="directionsDestinationKey",gn="origin",bn=function(e){function n(e){var t;return Object(o.a)(this,n),(t=Object(l.a)(this,Object(u.a)(n).call(this,e))).getOrigin=function(){var e,n=Object(ke.b)(gn);if(!n&&navigator.geolocation){var a=Object(He.a)(t);navigator.geolocation.getCurrentPosition(function(n){e={lat:n.coords.latitude,lng:n.coords.longitude},Object(ke.g)({key:gn,value:JSON.stringify(e)}),a.props.dispatchOrigin(e)})}else e=JSON.parse(n),t.props.dispatchOrigin(e)},t.componentDidMount=function(){window.addEventListener("scroll",t.onScroll,!1);var e=Object(ke.a)(fn);e&&(t.props.dispatchLoadingProgress(!0),t.props.dispatchChosenRace(e),t.onChange(e),t.props.dispatchLoadingProgress(!1)),t.getOrigin(),ae.animateScroll.scrollTo(0)},t.componentWillUnmount=function(){window.removeEventListener("scroll",t.onScroll,!1)},t.shouldComponentUpdate=function(e,n){return!se.a.isEqual(t.props.classes,e.classes)||(!se.a.isEqual(t.props.dispatchChosenRace,e.dispatchChosenRace)||(!se.a.isEqual(t.props.dispatchLoadingProgress,e.dispatchLoadingProgress)||(!se.a.isEqual(t.props.dispatchRaceDetails,e.dispatchRaceDetails)||(!se.a.isEqual(t.props.dispatchSticky,e.dispatchSticky)||(!se.a.isEqual(t.props.menuReducer,e.menuReducer)||(!se.a.isEqual(t.props.raceReducer,e.raceReducer)||(!se.a.isEqual(t.props.scrollReducer,e.scrollReducer)||!se.a.isEqual(t.props.searchReducer,e.searchReducer))))))))},t.buildClearButton=function(){return h.a.createElement(d.Suspense,{fallback:h.a.createElement(g.a,{className:hn.prototypeprogress})},h.a.createElement(sn,{onClick:t.clearClick}))},t.onScroll=function(){window.scrollY>=165&&!t.props.scrollReducer.sticky?t.props.dispatchSticky(!0):window.scrollY<165&&t.props.scrollReducer.sticky&&t.props.dispatchSticky(!1)},t.scrollToTop=function(){ae.animateScroll.scrollTo(170)},t.loadingProgress=function(){return h.a.createElement(he,null)},t.noResultsFound=function(){return h.a.createElement(ve,null)},t.scrollToTopClick=function(e){e.preventDefault(),ae.animateScroll.scrollToTop()},t.scrollToBottomClick=function(e){e.preventDefault(),ae.animateScroll.scrollToBottom()},t.onChange=function(){var e=Object(s.a)(c.a.mark(function e(n){var a,r,s;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.props.raceReducer.raceDetails,r=t.props.searchReducer.chosenRaces,!(n.length>1)){e.next=6;break}return t.props.dispatchChosenRace(r),t.props.dispatchLoadingProgress(!1),e.abrupt("return");case 6:if(1!==n.length){e.next=17;break}return t.props.dispatchLoadingProgress(!0),e.next=10,t.searchForRaces(n);case 10:s=e.sent,se.a.isEqual(r,n)||t.props.dispatchChosenRace(n),se.a.isEqual(a,s)||t.props.dispatchRaceDetails(s),Object(ke.f)({key:fn,value:n}),t.props.dispatchLoadingProgress(!1),e.next=18;break;case 17:t.clearClick();case 18:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}(),t.fetchRaces=function(){var e=Object(s.a)(c.a.mark(function e(n,a){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("searching - ",n),t.props.dispatchLoadingProgress(!0),n||a(null,{options:[]}),!(n.length>2)){e.next=11;break}return e.t0=a,e.next=7,Ne(n);case 7:e.t1=e.sent,(0,e.t0)(null,e.t1),e.next=12;break;case 11:a(null,{options:[]});case 12:t.props.dispatchLoadingProgress(!1);case 13:case"end":return e.stop()}},e)}));return function(n,t){return e.apply(this,arguments)}}(),t.debouncedFetchRaces=se.a.debounce(t.fetchRaces,200),t.getRaces=function(e,n){if(!e||e.length<3)return n(null,{options:[]});t.debouncedFetchRaces(e,n)},t.searchForRaces=function(){var e=Object(s.a)(c.a.mark(function e(n){var t,a,r;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=14;break}if(t="getRaces".concat(n[0].display).replace(" ",""),a=Object(ke.b)(t)){e.next=11;break}return e.next=6,Pe(n[0].original);case 6:return r=e.sent,Object(ke.g)({key:t,value:JSON.stringify(r)}),e.abrupt("return",r);case 11:r=JSON.parse(a),Object(ke.e)(t);case 13:return e.abrupt("return",r);case 14:return e.abrupt("return",null);case 15:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}(),t.clearClick=function(){t.props.dispatchLoadingProgress(!0),t.props.dispatchSticky(!1),t.props.dispatchRaceDetails(null),t.props.dispatchChosenRace(null),Object(ke.d)(fn),Object(ke.e)(mn),t.props.dispatchLoadingProgress(!1),ae.animateScroll.scrollToTop()},t.buildRaceInfo=function(e){var n;return e&&(e._latitude>0&&delete e._latitude,n=h.a.createElement(d.Suspense,{fallback:h.a.createElement(g.a,{className:hn.progress})},h.a.createElement(cn,{raceInfo:e}))),h.a.createElement("div",{key:e.id},n)},t.buildResultCategories=function(e,n){var t;return e&&(t=h.a.createElement(d.Suspense,{fallback:h.a.createElement(g.a,{className:n.progress})},h.a.createElement(on,{categoryRecords:e}))),h.a.createElement(h.a.Fragment,null,h.a.createElement(_e.a,{key:e.length,className:n.expansionPanel},h.a.createElement(Ve.a,{expandIcon:h.a.createElement(nn.a,null)},h.a.createElement(be.a,{className:n.heading},h.a.createElement("b",null,"Overall"))),h.a.createElement(Ze.a,null,t)))},t.buildYearResultCategories=function(e){var n;return e&&(n=h.a.createElement(d.Suspense,{fallback:h.a.createElement(g.a,{className:hn.progress})},h.a.createElement(ln,{races:e}),h.a.createElement("br",null),h.a.createElement("br",null),h.a.createElement("br",null),h.a.createElement("br",null))),n},t.buildYearPerformanceGraph=function(e,n){var t=e.map(function(e){if(e.performance>0)return["".concat(e.year),"".concat(e.performance,"%")]}).filter(function(e){return void 0!==e});return h.a.createElement(d.Suspense,{fallback:h.a.createElement(g.a,{className:n})},h.a.createElement(un,{raceData:t}))},t.buildDownwardArrow=function(e){return h.a.createElement(d.Suspense,{fallback:h.a.createElement(g.a,{className:e})},h.a.createElement(rn,{onClick:t.scrollToBottomClick}))},t.buildMapComponent=function(e,n,t){return h.a.createElement(d.Suspense,{fallback:h.a.createElement(g.a,{className:t})},h.a.createElement(pn,{destination:n,origin:e}))},t.buildSameDayRaces=function(e,n,t,a){return parseInt(n[0].date.substring(6,10))<(new Date).getFullYear()||!t||0===t.length?null:h.a.createElement(d.Suspense,{fallback:h.a.createElement(g.a,{className:a})},h.a.createElement(dn,{origin:e,races:t}))},t.searchRaceRef=h.a.createRef(),t}return Object(p.a)(n,e),Object(i.a)(n,[{key:"render",value:function(){var e,n,t,a,r,c,s,o,i,l,u=this.props.classes,p=u.progress,f=u.searchField,m=u.search,b=this.props.searchReducer,v=b.loadingRaceProgress,y=b.chosenRaces,R=this.props.raceReducer,E=R.raceDetails,k=R.origin,O=this.props.scrollReducer.sticky,C=O?m:"";if(v&&(n=this.loadingProgress()),y&&y.length>0&&(e=this.buildClearButton()),E&&(t=this.buildRaceInfo(E.raceInfo),a=this.buildResultCategories(E.categoryRecords,this.props.classes),s=this.buildYearResultCategories(E.races),o=this.buildYearPerformanceGraph(E.races,p),c=this.buildDownwardArrow(p),k&&(l=this.buildSameDayRaces(k,E.races,E.racesSameDay,p)),k&&E.properties&&E.properties.latitude&&0!==E.properties.latitude)){var x={lat:E.properties.latitude,lng:E.properties.longitude};i=this.buildMapComponent(k,x,p)}return O&&(r=h.a.createElement(d.Suspense,{fallback:h.a.createElement(g.a,{className:p})},h.a.createElement(an,{onClick:this.scrollToTopClick}))),h.a.createElement(h.a.Fragment,null,h.a.createElement("div",{className:C},h.a.createElement(re.a,{cacheOptions:!0,defaultOptions:!0,className:f,valueKey:"original",labelKey:"display",matchProp:"any",name:"race-search-field",onChange:this.onChange,loadOptions:this.getRaces,placeholder:"Search Race",noResultsText:"No race found",value:y,multi:!0,ignoreAccents:!1}),e),n,t,i,l,o,a,s,c,r)}}]),n}(d.Component),vn=Object(f.b)(function(e){return Object(a.a)({},e)},function(e){return{dispatchLoadingProgress:function(n){return e(function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return function(n){n({type:oe.f,payload:e})}}(n))},dispatchChosenRace:function(n){return e(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return function(n){n({type:oe.a,payload:e})}}(n))},dispatchRaceDetails:function(n){return e(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return function(n){n({type:tn.a,payload:e})}}(n))},dispatchSticky:function(n){return e(ue(n))},dispatchOrigin:function(n){return e(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return function(n){n({type:tn.b,payload:e})}}(n))}}})(Object(R.withStyles)(hn)(h.a.memo(bn))),yn=t(57);function Rn(){return En.apply(this,arguments)}function En(){return(En=Object(s.a)(c.a.mark(function e(){var n;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=null,e.next=3,Re.a.get("".concat("https://fellracefinder.xyz","/calendarEvents")).then(function(e){var t=function(e){var n=Date.parse(e);return isNaN(n)};n=[];for(var a=0;a<e.data.length;a++)if(!t(e.data[a].start)&&!t(e.data[a].end)){var r=new Date(Date.parse(e.data[a].start)),c=new Date(Date.parse(e.data[a].end));n.push({id:e.data[a].id,title:e.data[a].title,start:r,end:c,short:e.data[a].short,medium:e.data[a].medium,long:e.data[a].long,url:e.data[a].url})}return n}).catch(function(e){console.log(e)});case 3:return e.abrupt("return",n);case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}var kn=h.a.lazy(function(){return Promise.all([t.e(0),t.e(1),t.e(12),t.e(29)]).then(t.bind(null,6023))}),On="Main-menuoption",Cn=function(e){function n(e){var t;return Object(o.a)(this,n),(t=Object(l.a)(this,Object(u.a)(n).call(this,e))).raceOnClick=function(){var e=Object(s.a)(c.a.mark(function e(n){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),Object(ke.f)({key:On,value:"race"}),t.props.dispatchMenuAction({race:!0,runner:!1,calendar:!1}),t.props.dispatchMenuToggleAction(!1);case 4:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}(),t.runnerOnClick=function(){var e=Object(s.a)(c.a.mark(function e(n){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),Object(ke.f)({key:On,value:"runner"}),t.props.dispatchMenuAction({race:!1,runner:!0,calendar:!1}),t.props.dispatchMenuToggleAction(!1);case 4:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}(),t.calendarOnClick=function(){var e=Object(s.a)(c.a.mark(function e(n){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),Object(ke.f)({key:On,value:"calendar"}),t.props.dispatchMenuAction({race:!1,runner:!1,calendar:!0}),t.props.dispatchMenuToggleAction(!1);case 4:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}(),t}return Object(p.a)(n,e),Object(i.a)(n,[{key:"componentWillMount",value:function(){var e=Object(ke.a)(On);e&&("race"===e&&this.props.dispatchMenuAction({race:!0,runner:!1,calendar:!1}),"runner"===e&&this.props.dispatchMenuAction({race:!1,runner:!0,calendar:!1}),"calendar"===e&&this.props.dispatchMenuAction({race:!1,runner:!1,calendar:!0}),this.props.dispatchMenuToggleAction(!1))}},{key:"componentDidMount",value:function(){var e=Object(s.a)(c.a.mark(function e(){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=this.props,e.next=3,Rn();case 3:e.t1=e.sent,e.t0.dispatchCalendarEventsAction.call(e.t0,e.t1);case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e,n=this.props.menuReducer,t=n.race,a=n.runner,r=n.calendar,c=this.props.calendarReducer.events,s=!1;return t||r||!a||(e=h.a.createElement($e,null)),!t||r||a||(e=h.a.createElement(vn,null)),c&&!t&&r&&!a&&(e=h.a.createElement(d.Suspense,{fallback:h.a.createElement(g.a,null)},h.a.createElement(kn,{events:c}))),(t||a||r)&&(s=!0),h.a.createElement(h.a.Fragment,null,h.a.createElement(te,{raceOnClick:this.raceOnClick,runnerOnClick:this.runnerOnClick,calendarOnClick:this.calendarOnClick,closeMenu:s}),e)}}]),n}(d.PureComponent);n.default=Object(f.b)(function(e){return Object(a.a)({},e)},function(e){return{dispatchMenuAction:function(n){return e(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return function(n){n({type:Z.a,payload:e})}}(n))},dispatchMenuToggleAction:function(n){return e(ee(n))},dispatchCalendarEventsAction:function(n){return e(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return function(n){n({type:yn.a,payload:e})}}(n))}}})(Cn)}}]);
//# sourceMappingURL=23.70001858.chunk.js.map