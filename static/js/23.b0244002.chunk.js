(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{237:function(e,n,t){"use strict";function a(e){var n=e.key,t=e.value;"null"!==t&&sessionStorage.setItem(n,JSON.stringify(t))}function r(e){var n=sessionStorage.getItem(e);return n?JSON.parse(n):n}function c(e){e&&sessionStorage.removeItem(e)}function s(){sessionStorage.clear()}function o(e){var n=e.key,t=e.value;"null"!==t&&localStorage.setItem(n,JSON.stringify(t))}function i(e){var n=localStorage.getItem(e);return n?JSON.parse(n):n}function l(e){e&&localStorage.removeItem(e)}t.d(n,"g",function(){return a}),t.d(n,"b",function(){return r}),t.d(n,"e",function(){return c}),t.d(n,"c",function(){return s}),t.d(n,"f",function(){return o}),t.d(n,"a",function(){return i}),t.d(n,"d",function(){return l})},6035:function(e,n,t){"use strict";t.r(n);var a=t(189),r=t(231),c=t.n(r),s=t(232),o=t(45),i=t(46),l=t(49),u=t(47),p=t(50),d=t(0),h=t.n(d),f=t(48),m=t(44),g=t.n(m),b=t(230),v=t(81),y=t.n(v),R=t(24),E=t(5671),k=t.n(E),O=t(74),x=t.n(O),C=t(5654),w=t.n(C),j=t(5657),S=t.n(j),N=t(362),P=t.n(N),T=t(5703),D=t.n(T),L=t(355),I=t.n(L),M=t(280),B=t.n(M),q=t(285),z=t.n(q),A=t(286),F=t.n(A),J=t(363),U=t.n(J),Y=t(5707),K=t.n(Y),G=t(5709),W=t.n(G),$=t(288),H=t.n($),_=t(289),Q=t.n(_),V=t(290),X=t.n(V),Z=t(278),ee=t.n(Z);var ne=Object(R.withStyles)(function(e){var n;return{onlineUserCountContainer:(n={position:"relative",top:"-7px",left:"82%"},Object(b.a)(n,"@media (min-width:375px)",{left:"68%"}),Object(b.a)(n,"@media (min-width:401px)",{left:"71%"}),Object(b.a)(n,"@media (min-width:750px)",{left:"78%"}),Object(b.a)(n,"@media (min-width:1000px)",{left:"83%"}),Object(b.a)(n,"@media (min-width:1025px)",{left:"88%"}),Object(b.a)(n,"@media (max-width:400px)",{left:"64%"}),Object(b.a)(n,"@media (max-width:375px)",{left:"60%"}),Object(b.a)(n,"@media (max-width:350px)",{left:"74%"}),Object(b.a)(n,"@media (max-width:320px)",{left:"61%"}),n),onlineUserCount:{position:"absolute",marginLeft:"-3px"},peopleIcon:{position:"absolute",marginLeft:"8px",marginTop:"-4px"}}})(h.a.memo(function(e){var n=e.classes,t=e.count;return h.a.createElement("div",{className:n.onlineUserCountContainer},h.a.createElement("span",{title:"9 users online",className:n.onlineUserCount},t,"\xa0"),h.a.createElement(ee.a,{variant:"fab",color:"secondary",className:n.peopleIcon}))})),te=t(32),ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return function(n){n({type:te.c,payload:e})}},re=function(e){function n(e){var t;return Object(o.a)(this,n),(t=Object(l.a)(this,Object(u.a)(n).call(this,e))).handleDrawerOpen=function(){t.props.dispatchMenuToggleAction(!0)},t.handleDrawerClose=function(){t.props.dispatchMenuToggleAction(!1)},t.ws=new WebSocket("ws://localhost:5556/"),t}return Object(p.a)(n,e),Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.ws.onopen=function(){console.log("connected")},this.ws.onmessage=function(n){var t=JSON.parse(n.data);console.log(t),e.props.dispatchMenuNumLoggedInAction(t)},this.ws.onclose=function(){console.log("disconnected")}}},{key:"render",value:function(){var e=this.props,n=e.classes,t=e.theme,a=e.runnerOnClick,r=e.raceOnClick,c=e.calendarOnClick,s=e.menuReducer,o=s.menuOpen,i=s.count,l=i>1?h.a.createElement(ne,{count:i}):null;return h.a.createElement("div",{className:n.root},h.a.createElement(x.a,null),h.a.createElement(w.a,{position:"fixed",className:y()(n.appBar,Object(b.a)({},n.appBarShift,o))},h.a.createElement(S.a,{disableGutters:o},h.a.createElement(I.a,{color:"inherit","aria-label":"Open drawer",onClick:this.handleDrawerOpen,className:y()(n.menuButton,o&&n.hide)},h.a.createElement(B.a,null)),l)),h.a.createElement(k.a,{className:n.drawer,variant:"persistent",anchor:"left",open:o,classes:{paper:n.drawerPaper}},h.a.createElement("div",{className:n.drawerHeader},h.a.createElement(I.a,{onClick:this.handleDrawerClose},"ltr"===t.direction?h.a.createElement(z.a,null):h.a.createElement(F.a,null))),h.a.createElement(D.a,null),h.a.createElement(P.a,null,h.a.createElement(U.a,{button:!0,key:"Runner",onClick:a},h.a.createElement(K.a,null,h.a.createElement(H.a,null)),h.a.createElement(W.a,{primary:"Runner"})),h.a.createElement(U.a,{button:!0,key:"Race",onClick:r},h.a.createElement(K.a,null,h.a.createElement(Q.a,null)),h.a.createElement(W.a,{primary:"Race"})),h.a.createElement(U.a,{button:!0,key:"Calendar",onClick:c},h.a.createElement(K.a,null,h.a.createElement(X.a,null)),h.a.createElement(W.a,{primary:"Calendar"})))))}}]),n}(h.a.Component),ce=Object(f.b)(function(e){return Object(a.a)({},e)},function(e){return{dispatchMenuToggleAction:function(n){return e(ae(n))},dispatchMenuNumLoggedInAction:function(n){return e(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return function(n){n({type:te.b,payload:e})}}(n))}}})(Object(R.withStyles)(function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(240,"px)"),marginLeft:240,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginLeft:12,marginRight:20},hide:{display:"none"},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},drawerHeader:Object(a.a)({display:"flex",alignItems:"center",padding:"0 8px"},e.mixins.toolbar,{justifyContent:"flex-end"}),content:{flexGrow:1,padding:3*e.spacing.unit,transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-240},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0}}},{withTheme:!0})(h.a.memo(re))),se=t(364),oe=t(368),ie=t(369),le=t.n(ie),ue=(t(370),t(11)),pe=t(55),de=t(56),he=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return function(n){n({type:de.a,payload:e})}},fe=t(5720),me=t.n(fe);var ge=Object(R.withStyles)(function(e){return{}})(function(){return h.a.createElement("span",null,h.a.createElement("br",null),h.a.createElement(me.a,null),h.a.createElement("br",null),h.a.createElement(me.a,{color:"secondary",variant:"query"}),h.a.createElement("br",null),h.a.createElement(me.a,null))}),be=t(174),ve=t.n(be),ye=t(180),Re=t.n(ye);var Ee=Object(R.withStyles)(function(e){return{noRaces:{marginRight:"10px",marginLeft:"10px",marginTop:"5px",marginBottom:"5px"}}})(function(e){var n=e.classes;return h.a.createElement(ve.a,{className:n.noRaces},h.a.createElement(Re.a,{variant:"subheading"},"No race results found for this runner!"))}),ke=t(371),Oe=t.n(ke),xe=t(5740),Ce=t(237),we=new xe.AllHtmlEntities;function je(e,n,t){return Se.apply(this,arguments)}function Se(){return(Se=Object(s.a)(c.a.mark(function e(n,t,a){var r,s;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.join("$$"),s=null,e.next=4,Oe.a.get("".concat("https://www.fellracefinder.xyz","/runner/").concat(r,"/").concat(t,"/").concat(a)).then(function(e){return s=e.data}).catch(function(e){console.log(e)});case 4:return e.abrupt("return",s);case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}function Ne(e,n){return Pe.apply(this,arguments)}function Pe(){return(Pe=Object(s.a)(c.a.mark(function e(n,t){var a,r,s;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.join("$$"),r=t.replace("/","**"),r=we.encode(r),s=null,e.next=6,Oe.a.get("".concat("https://www.fellracefinder.xyz","/runnerByRace/").concat(a,"/").concat(r)).then(function(e){return s=e.data}).catch(function(e){console.log(e)});case 6:return e.abrupt("return",s);case 7:case"end":return e.stop()}},e)}))).apply(this,arguments)}function Te(e){var n="runnersList".concat(e),t=Object(Ce.b)(n);if(t)return{options:t};var a="".concat("https://www.fellracefinder.xyz","/autocomplete/runner/").concat(e.toLowerCase());return fetch(a).then(function(e){return e.json()}).then(function(e){var t=[];return e.items.map(function(e){var n=!1;return t.map(function(t){return e.display===t.display&&(n=!0,!0)}),n||t.push(e),n}),Object(Ce.g)({key:n,value:t}),{options:t}})}function De(e){var n="raceSearch".concat(e),t=Object(Ce.b)(n);if(t)return{options:t};var a="".concat("https://www.fellracefinder.xyz","/autocomplete/race/").concat(e.toLowerCase());return fetch(a).then(function(e){return e.json()}).then(function(e){var t=[];return console.log(e),e.map(function(e){var n=!1;return t.map(function(t){return e.display===t.display&&(n=!0,!0)}),n||t.push(e),n}),Object(Ce.g)({key:n,value:t}),{options:t}})}function Le(e){return Ie.apply(this,arguments)}function Ie(){return(Ie=Object(s.a)(c.a.mark(function e(n){var t,a;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat("https://www.fellracefinder.xyz","/race/byNames/").concat(n),a=null,e.next=4,Oe.a.get(t).then(function(e){return a=e.data}).catch(function(e){console.log(e)});case 4:return e.abrupt("return",a);case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}function Me(e){var n=e.split(" ").map(function(e){return"".concat(e.charAt(0).toUpperCase()).concat(e.slice(1)," ")}),t="";return n.map(function(e){return t="".concat(t).concat(e)}),t}var Be=h.a.lazy(function(){return t.e(6).then(t.bind(null,6022))}),qe=h.a.lazy(function(){return t.e(5).then(t.bind(null,6023))}),ze=h.a.lazy(function(){return t.e(7).then(t.bind(null,6024))}),Ae=h.a.lazy(function(){return t.e(19).then(t.bind(null,6025))}),Fe=h.a.lazy(function(){return Promise.all([t.e(18),t.e(31)]).then(t.bind(null,6026))}),Je=h.a.lazy(function(){return Promise.all([t.e(0),t.e(4)]).then(t.bind(null,6027))}),Ue=h.a.lazy(function(){return Promise.all([t.e(13),t.e(30)]).then(t.bind(null,6028))}),Ye=h.a.lazy(function(){return Promise.all([t.e(16),t.e(27)]).then(t.bind(null,6029))}),Ke=h.a.lazy(function(){return t.e(22).then(t.bind(null,6030))}),Ge=function(e){return{searchField:{paddingBottom:"5px",paddingLeft:"5px",paddingRight:"5px",marginTop:"-5px",zIndex:"2"},search:{position:"sticky",backgroundColor:"white",zIndex:"2 !important",borderBottom:"1px solid #CCCCCC",top:"40px",paddingTop:"40px",borderTop:"1px solid #CCCCCC",paddingBottom:"2px"},progress:{margin:2*e.spacing.unit}}},We="chosenRunners",$e=0,He=function(e){function n(e){var t;return Object(o.a)(this,n),(t=Object(l.a)(this,Object(u.a)(n).call(this,e))).componentDidMount=function(){window.addEventListener("scroll",t.onScroll,!1);var e=Object(Ce.a)(We);e&&(t.props.dispatchChosenRunners(e),t.onChange(e)),se.animateScroll.scrollTo(0)},t.componentWillUnmount=function(){window.removeEventListener("scroll",t.onScroll,!1)},t.shouldComponentUpdate=function(e,n){return!le.a.isEqual(t.props.classes,e.classes)||(!le.a.isEqual(t.props.dispatchChosenRace,e.dispatchChosenRace)||(!le.a.isEqual(t.props.dispatchChosenRunners,e.dispatchChosenRunners)||(!le.a.isEqual(t.props.dispatchEndIndex,e.dispatchEndIndex)||(!le.a.isEqual(t.props.dispatchLoadMoreProgress,e.dispatchLoadMoreProgress)||(!le.a.isEqual(t.props.dispatchLoadingProgress,e.dispatchLoadingProgress)||(!le.a.isEqual(t.props.dispatchRunnerDetails,e.dispatchRunnerDetails)||(!le.a.isEqual(t.props.dispatchSticky,e.dispatchSticky)||(!le.a.isEqual(t.props.menuReducer,e.menuReducer)||(!le.a.isEqual(t.props.raceReducer,e.raceReducer)||(!le.a.isEqual(t.props.runnerReducer,e.runnerReducer)||(!le.a.isEqual(t.props.scrollReducer,e.scrollReducer)||!le.a.isEqual(t.props.searchReducer,e.searchReducer))))))))))))},t.buildClearButton=function(){return h.a.createElement(d.Suspense,{fallback:h.a.createElement(g.a,{className:Ge.prototypeprogress})},h.a.createElement(ze,{onClick:t.clearClick}))},t.onScroll=function(){window.scrollY>=165&&!t.props.scrollReducer.sticky?t.props.dispatchSticky(!0):window.scrollY<165&&t.props.scrollReducer.sticky&&t.props.dispatchSticky(!1)},t.scrollToTop=function(){se.animateScroll.scrollTo(170)},t.performSearch=function(){var e=Object(s.a)(c.a.mark(function e(n){var a,r,s,o;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=19;break}if(t.props.dispatchLoadingProgress(!0),t.props.dispatchRunnerDetails(null),t.props.dispatchChosenRace(""),a=t.props.searchReducer.endIndex,r="getRunner".concat(n).replace(" ",""),s=Object(Ce.b)(r)){e.next=14;break}return e.next=10,je(n,$e,a);case 10:o=e.sent,Object(Ce.g)({key:r,value:JSON.stringify(o)}),e.next=16;break;case 14:o=JSON.parse(s),Object(Ce.e)(r);case 16:t.props.dispatchRunnerDetails(o),t.props.dispatchLoadingProgress(!1),t.scrollToTop();case 19:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}(),t.searchForRunners=function(){var e=Object(s.a)(c.a.mark(function e(n,t){var a,r,s,o;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n&&n.length>0)){e.next=16;break}if(a=[],n.map(function(e){a.push(e.display)}),r="getRunners".concat(a.join("")).concat($e).concat(t).replace(" ",""),s=Object(Ce.b)(r)){e.next=13;break}return e.next=8,je(a,$e,t);case 8:return o=e.sent,Object(Ce.g)({key:r,value:JSON.stringify(o)}),e.abrupt("return",o);case 13:o=JSON.parse(s),Object(Ce.e)(r);case 15:return e.abrupt("return",o);case 16:return e.abrupt("return",null);case 17:case"end":return e.stop()}},e)}));return function(n,t){return e.apply(this,arguments)}}(),t.searchForRunnersByRace=function(){var e=Object(s.a)(c.a.mark(function e(n,t){var a,r,s,o;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n&&n.length>0)){e.next=16;break}if(a=[],n.map(function(e){a.push(e.display)}),r="getRunnersByRace".concat(a.join("")).concat(t).replace(" ",""),s=Object(Ce.b)(r)){e.next=13;break}return e.next=8,Ne(a,t);case 8:return o=e.sent,Object(Ce.g)({key:r,value:JSON.stringify(o)}),e.abrupt("return",o);case 13:o=JSON.parse(s),Object(Ce.e)(r);case 15:return e.abrupt("return",o);case 16:return e.abrupt("return",null);case 17:case"end":return e.stop()}},e)}));return function(n,t){return e.apply(this,arguments)}}(),t.handleClick=function(){var e=Object(s.a)(c.a.mark(function e(n){var a;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),""===(a=t.searchRunnerRef.value.trim())){e.next=8;break}if(Me(a)===t.state.runnerName){e.next=6;break}return e.next=6,t.performSearch(a);case 6:e.next=9;break;case 8:t.clearClick();case 9:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}(),t.clearClick=function(){t.props.dispatchLoadingProgress(!0),t.props.dispatchRunnerDetails(null),t.props.dispatchSticky(!1),t.props.dispatchChosenRunners([]),t.props.dispatchChosenRace(""),t.props.dispatchEndIndex(0),Object(Ce.d)(We),Object(Ce.c)(),t.props.dispatchLoadingProgress(!1),se.animateScroll.scrollToTop()},t.scrollToTopClick=function(e){e.preventDefault(),se.animateScroll.scrollToTop()},t.scrollToBottomClick=function(e){e.preventDefault(),se.animateScroll.scrollToBottom()},t.loadingProgress=function(){return h.a.createElement(ge,null)},t.noResultsFound=function(){return h.a.createElement(Ee,null)},t.buildRaceResult=function(e){var n,t=e;return t&&t.length>0&&(t=t[0]),t.raceInfo&&(n=h.a.createElement(d.Suspense,{fallback:h.a.createElement(g.a,{className:Ge.progress})},h.a.createElement(Je,{raceInfo:t.raceInfo}))),h.a.createElement("div",{key:t.id},h.a.createElement("br",null),h.a.createElement(d.Suspense,{fallback:h.a.createElement(g.a,{className:Ge.progress})},h.a.createElement(Ae,{race:t})),n,h.a.createElement(d.Suspense,{fallback:h.a.createElement(g.a,{className:Ge.progress})},h.a.createElement(Fe,{runner:t.runner})))},t.loadMoreOnClick=function(){var e=Object(s.a)(c.a.mark(function e(n){var a;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),a=t.props.searchReducer.chosenRunners,t.props.dispatchLoadMoreProgress(!0),e.next=5,t.onChange(a);case 5:t.props.dispatchLoadMoreProgress(!1);case 6:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}(),t.calculateNextEndIndex=function(e){var n=t.props.runnerReducer.runnerDetails,a=t.props.searchReducer,r=a.endIndex,c=a.chosenRunners;return 0===r?10:e.length===c.length?r+10>n.overallStats.noOfRaces?n.overallStats.noOfRaces:r+10:10},t.onChange=function(){var e=Object(s.a)(c.a.mark(function e(n){var a,r,s,o,i,l,u;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.props.runnerReducer.runnersDetails,r=t.props.searchReducer,s=r.chosenRunners,o=r.chosenRace,i=r.endIndex,!(n.length>0)){e.next=16;break}return t.props.dispatchLoadingProgress(!0),l=t.calculateNextEndIndex(n),e.next=7,t.searchForRunners(n,l);case 7:u=e.sent,le.a.isEqual(s,n)||t.props.dispatchChosenRunners(n),le.a.isEqual(a,u)||t.props.dispatchRunnerDetails(u),i!==l&&t.props.dispatchEndIndex(l),""!==o&&t.props.dispatchChosenRace(""),Object(Ce.f)({key:We,value:n}),t.props.dispatchLoadingProgress(!1),e.next=17;break;case 16:t.clearClick();case 17:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}(),t.fetchRunnerByRace=function(){var e=Object(s.a)(c.a.mark(function e(n,a){var r,s,o,i,l;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.props.runnerReducer.runnersDetails,s=t.props.searchReducer,o=s.chosenRace,i=s.chosenRunners,!(n.length>0)){e.next=13;break}return e.next=5,t.searchForRunnersByRace(n,a);case 5:l=e.sent,a!==o&&t.props.dispatchChosenRace(a),le.a.isEqual(n,i)||t.props.dispatchChosenRunners(n),le.a.isEqual(r,l)||t.props.dispatchRunnerDetails(l),Object(Ce.f)({key:We,value:n}),t.props.dispatchLoadingProgress(!1),e.next=14;break;case 13:t.clearClick();case 14:case"end":return e.stop()}},e)}));return function(n,t){return e.apply(this,arguments)}}(),t.fetchRunners=function(){var e=Object(s.a)(c.a.mark(function e(n,a){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("searching - ",n),t.props.dispatchLoadingProgress(!0),n||a(null,{options:[]}),!(n.length>2)){e.next=11;break}return e.t0=a,e.next=7,Te(n);case 7:e.t1=e.sent,(0,e.t0)(null,e.t1),e.next=12;break;case 11:a(null,{options:[]});case 12:t.props.dispatchLoadingProgress(!1);case 13:case"end":return e.stop()}},e)}));return function(n,t){return e.apply(this,arguments)}}(),t.debouncedFetchRunners=le.a.debounce(t.fetchRunners,100),t.getRunners=function(e,n){if(!e||e.length<4)return n(null,{options:[]});t.debouncedFetchRunners(e,n)},t.handleChooseRaceChange=function(){var e=Object(s.a)(c.a.mark(function e(n){var a,r,s,o;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.props.searchReducer,r=a.chosenRunners,s=a.endIndex,o=n.target.value,t.props.dispatchLoadingProgress(!0),0!==s&&t.props.dispatchEndIndex(0),"all"!==o){e.next=9;break}return e.next=7,t.onChange(r);case 7:e.next=11;break;case 9:return e.next=11,t.fetchRunnerByRace(r,o);case 11:t.scrollToTop();case 12:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}(),t.populateOverallStats=function(){var e=t.props.runnerReducer.runnerDetails;return e.overallStats?h.a.createElement(d.Suspense,{fallback:h.a.createElement(g.a,{className:Ge.progress})},h.a.createElement(Ye,{overallStats:e.overallStats})):null},t.buildChosenRaceList=function(e,n){var a=[];e||(e="");var r=e.split("||");return r.length>1?r.map(function(e){for(var t=0;t<n.length;t++)n[t].name===e&&a.push(n[t])}):n&&(a=n),a.length>1&&(a=a.sort(function(e,n){return new Date(n.dateTime)-new Date(e.dateTime)})),a.map(function(e){return t.buildRaceResult(e)})},t.searchRunnerRef=h.a.createRef(),t}return Object(p.a)(n,e),Object(i.a)(n,[{key:"render",value:function(){var e,n,t,a,r,c,s,o,i,l=this,u=this.props.classes,p=u.progress,f=u.searchField,m=u.search,b=this.props.searchReducer,v=b.loadingProgress,y=b.chosenRunners,R=b.chosenRace,E=b.loadMoreLoading,k=this.props.runnerReducer.runnerDetails,O=this.props.scrollReducer.sticky,x=O?m:"",C=this.props.searchReducer.endIndex;if(v&&(a=this.loadingProgress()),null!=k&&k.races&&k.races.length>0){e=this.buildClearButton(),n=this.populateOverallStats();var w=k.races;0===C&&(C=10),""===R?(t=w.map(function(e){return l.buildRaceResult(e)}),k.overallStats.noOfRaces>C&&(s=h.a.createElement(d.Suspense,{fallback:h.a.createElement(g.a,{className:p})},h.a.createElement(Ke,{onClick:this.loadMoreOnClick})))):(t=this.buildChosenRaceList(R,k.races)).length>C&&(s=h.a.createElement(d.Suspense,{fallback:h.a.createElement(g.a,{className:p})},h.a.createElement(Ke,{onClick:this.loadMoreOnClick}))),c=h.a.createElement(d.Suspense,{fallback:h.a.createElement(g.a,{className:p})},h.a.createElement(Ue,{raceNames:k.raceNames,chosenRace:R,onChange:this.handleChooseRaceChange})),E?(o=this.loadingProgress(),s=null,se.animateScroll.scrollMore(250)):(i=h.a.createElement(d.Suspense,{fallback:h.a.createElement(g.a,{className:p})},h.a.createElement(qe,{onClick:this.scrollToBottomClick})),O&&(r=h.a.createElement(d.Suspense,{fallback:h.a.createElement(g.a,{className:p})},h.a.createElement(Be,{onClick:this.scrollToTopClick}))))}else null!=k&&0===k.races.length&&(t=this.noResultsFound());return h.a.createElement(h.a.Fragment,null,h.a.createElement("div",{className:x},h.a.createElement(oe.a,{cacheOptions:!0,defaultOptions:!0,className:f,valueKey:"original",labelKey:"display",matchProp:"any",name:"runner-search-field",onChange:this.onChange,loadOptions:this.getRunners,placeholder:"Search Runner",noResultsText:"No runners found",value:y,multi:!0,ignoreAccents:!1}),c,e),i,a,n,t,o,s,r)}}]),n}(d.Component),_e=Object(f.b)(function(e){return Object(a.a)({},e)},function(e){return{dispatchLoadingProgress:function(n){return e(function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return function(n){n({type:ue.e,payload:e})}}(n))},dispatchRunnerDetails:function(n){return e(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return function(n){n({type:pe.a,payload:e})}}(n))},dispatchSticky:function(n){return e(he(n))},dispatchChosenRunners:function(n){return e(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return function(n){n({type:ue.c,payload:e})}}(n))},dispatchChosenRace:function(n){return e(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return function(n){n({type:ue.b,payload:e})}}(n))},dispatchEndIndex:function(n){return e(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return function(n){n({type:ue.d,payload:e})}}(n))},dispatchLoadMoreProgress:function(n){return e(function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return function(n){n({type:ue.g,payload:e})}}(n))}}})(Object(R.withStyles)(Ge)(h.a.memo(He))),Qe=t(58),Ve=t(238),Xe=t.n(Ve),Ze=t(239),en=t.n(Ze),nn=t(240),tn=t.n(nn),an=t(208),rn=t.n(an),cn=t(41),sn=h.a.lazy(function(){return t.e(6).then(t.bind(null,6022))}),on=h.a.lazy(function(){return t.e(5).then(t.bind(null,6023))}),ln=h.a.lazy(function(){return Promise.all([t.e(0),t.e(4)]).then(t.bind(null,6027))}),un=h.a.lazy(function(){return t.e(7).then(t.bind(null,6024))}),pn=h.a.lazy(function(){return t.e(14).then(t.bind(null,410))}),dn=h.a.lazy(function(){return t.e(21).then(t.bind(null,6031))}),hn=h.a.lazy(function(){return Promise.all([t.e(0),t.e(2),t.e(20)]).then(t.bind(null,6032))}),fn=h.a.lazy(function(){return Promise.all([t.e(1),t.e(3),t.e(25)]).then(t.bind(null,6033))}),mn=h.a.lazy(function(){return Promise.all([t.e(1),t.e(3),t.e(17)]).then(t.bind(null,6034))}),gn=function(e){return{searchField:{paddingBottom:"5px",paddingLeft:"5px",paddingRight:"5px",marginTop:"-5px",zIndex:"2"},search:{position:"sticky",backgroundColor:"white",zIndex:"2 !important",borderBottom:"1px solid #CCCCCC",top:"40px",paddingTop:"40px",borderTop:"1px solid #CCCCCC",paddingBottom:"2px"},progress:{margin:2*e.spacing.unit},expansionPanel:{marginTop:"5px",marginBottom:"15px"}}},bn="chosenRaces",vn="directionsDestinationKey",yn="origin",Rn=function(e){function n(e){var t;return Object(o.a)(this,n),(t=Object(l.a)(this,Object(u.a)(n).call(this,e))).getOrigin=function(){var e,n=Object(Ce.b)(yn);if(!n&&navigator.geolocation){var a=Object(Qe.a)(t);navigator.geolocation.getCurrentPosition(function(n){e={lat:n.coords.latitude,lng:n.coords.longitude},Object(Ce.g)({key:yn,value:JSON.stringify(e)}),a.props.dispatchOrigin(e)})}else e=JSON.parse(n),t.props.dispatchOrigin(e)},t.componentDidMount=function(){window.addEventListener("scroll",t.onScroll,!1);var e=Object(Ce.a)(bn);e&&(t.props.dispatchLoadingProgress(!0),t.props.dispatchChosenRace(e),t.onChange(e),t.props.dispatchLoadingProgress(!1)),t.getOrigin(),se.animateScroll.scrollTo(0)},t.componentWillUnmount=function(){window.removeEventListener("scroll",t.onScroll,!1)},t.shouldComponentUpdate=function(e,n){return!le.a.isEqual(t.props.classes,e.classes)||(!le.a.isEqual(t.props.dispatchChosenRace,e.dispatchChosenRace)||(!le.a.isEqual(t.props.dispatchLoadingProgress,e.dispatchLoadingProgress)||(!le.a.isEqual(t.props.dispatchRaceDetails,e.dispatchRaceDetails)||(!le.a.isEqual(t.props.dispatchSticky,e.dispatchSticky)||(!le.a.isEqual(t.props.menuReducer,e.menuReducer)||(!le.a.isEqual(t.props.raceReducer,e.raceReducer)||(!le.a.isEqual(t.props.scrollReducer,e.scrollReducer)||!le.a.isEqual(t.props.searchReducer,e.searchReducer))))))))},t.buildClearButton=function(){return h.a.createElement(d.Suspense,{fallback:h.a.createElement(g.a,{className:gn.prototypeprogress})},h.a.createElement(un,{onClick:t.clearClick}))},t.onScroll=function(){window.scrollY>=165&&!t.props.scrollReducer.sticky?t.props.dispatchSticky(!0):window.scrollY<165&&t.props.scrollReducer.sticky&&t.props.dispatchSticky(!1)},t.scrollToTop=function(){se.animateScroll.scrollTo(170)},t.loadingProgress=function(){return h.a.createElement(ge,null)},t.noResultsFound=function(){return h.a.createElement(Ee,null)},t.scrollToTopClick=function(e){e.preventDefault(),se.animateScroll.scrollToTop()},t.scrollToBottomClick=function(e){e.preventDefault(),se.animateScroll.scrollToBottom()},t.onChange=function(){var e=Object(s.a)(c.a.mark(function e(n){var a,r,s;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.props.raceReducer.raceDetails,r=t.props.searchReducer.chosenRaces,!(n.length>1)){e.next=6;break}return t.props.dispatchChosenRace(r),t.props.dispatchLoadingProgress(!1),e.abrupt("return");case 6:if(1!==n.length){e.next=17;break}return t.props.dispatchLoadingProgress(!0),e.next=10,t.searchForRaces(n);case 10:s=e.sent,le.a.isEqual(r,n)||t.props.dispatchChosenRace(n),le.a.isEqual(a,s)||t.props.dispatchRaceDetails(s),Object(Ce.f)({key:bn,value:n}),t.props.dispatchLoadingProgress(!1),e.next=18;break;case 17:t.clearClick();case 18:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}(),t.fetchRaces=function(){var e=Object(s.a)(c.a.mark(function e(n,a){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("searching - ",n),t.props.dispatchLoadingProgress(!0),n||a(null,{options:[]}),!(n.length>2)){e.next=11;break}return e.t0=a,e.next=7,De(n);case 7:e.t1=e.sent,(0,e.t0)(null,e.t1),e.next=12;break;case 11:a(null,{options:[]});case 12:t.props.dispatchLoadingProgress(!1);case 13:case"end":return e.stop()}},e)}));return function(n,t){return e.apply(this,arguments)}}(),t.debouncedFetchRaces=le.a.debounce(t.fetchRaces,200),t.getRaces=function(e,n){if(!e||e.length<3)return n(null,{options:[]});t.debouncedFetchRaces(e,n)},t.searchForRaces=function(){var e=Object(s.a)(c.a.mark(function e(n){var t,a,r;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=14;break}if(t="getRaces".concat(n[0].display).replace(" ",""),a=Object(Ce.b)(t)){e.next=11;break}return e.next=6,Le(n[0].original);case 6:return r=e.sent,Object(Ce.g)({key:t,value:JSON.stringify(r)}),e.abrupt("return",r);case 11:r=JSON.parse(a),Object(Ce.e)(t);case 13:return e.abrupt("return",r);case 14:return e.abrupt("return",null);case 15:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}(),t.clearClick=function(){t.props.dispatchLoadingProgress(!0),t.props.dispatchSticky(!1),t.props.dispatchRaceDetails(null),t.props.dispatchChosenRace(null),Object(Ce.d)(bn),Object(Ce.e)(vn),t.props.dispatchLoadingProgress(!1),se.animateScroll.scrollToTop()},t.buildRaceInfo=function(e){var n;return e&&(e._latitude>0&&delete e._latitude,n=h.a.createElement(d.Suspense,{fallback:h.a.createElement(g.a,{className:gn.progress})},h.a.createElement(ln,{raceInfo:e}))),h.a.createElement("div",{key:e.id},n)},t.buildResultCategories=function(e,n){var t;return e&&(t=h.a.createElement(d.Suspense,{fallback:h.a.createElement(g.a,{className:n.progress})},h.a.createElement(pn,{categoryRecords:e}))),h.a.createElement(h.a.Fragment,null,h.a.createElement(Xe.a,{key:e.length,className:n.expansionPanel},h.a.createElement(en.a,{expandIcon:h.a.createElement(rn.a,null)},h.a.createElement(Re.a,{className:n.heading},h.a.createElement("b",null,"Overall"))),h.a.createElement(tn.a,null,t)))},t.buildYearResultCategories=function(e){var n;return e&&(n=h.a.createElement(d.Suspense,{fallback:h.a.createElement(g.a,{className:gn.progress})},h.a.createElement(dn,{races:e}),h.a.createElement("br",null),h.a.createElement("br",null),h.a.createElement("br",null),h.a.createElement("br",null))),n},t.buildYearPerformanceGraph=function(e,n){var t=e.map(function(e){if(e.performance>0)return["".concat(e.year),"".concat(e.performance,"%")]}).filter(function(e){return void 0!==e});return h.a.createElement(d.Suspense,{fallback:h.a.createElement(g.a,{className:n})},h.a.createElement(hn,{raceData:t}))},t.buildDownwardArrow=function(e){return h.a.createElement(d.Suspense,{fallback:h.a.createElement(g.a,{className:e})},h.a.createElement(on,{onClick:t.scrollToBottomClick}))},t.buildMapComponent=function(e,n,t){return h.a.createElement(d.Suspense,{fallback:h.a.createElement(g.a,{className:t})},h.a.createElement(fn,{destination:n,origin:e}))},t.buildSameDayRaces=function(e,n,t,a){return parseInt(n[0].date.substring(6,10))<(new Date).getFullYear()||!t||0===t.length?null:h.a.createElement(d.Suspense,{fallback:h.a.createElement(g.a,{className:a})},h.a.createElement(mn,{origin:e,races:t}))},t.searchRaceRef=h.a.createRef(),t}return Object(p.a)(n,e),Object(i.a)(n,[{key:"render",value:function(){var e,n,t,a,r,c,s,o,i,l,u=this.props.classes,p=u.progress,f=u.searchField,m=u.search,b=this.props.searchReducer,v=b.loadingRaceProgress,y=b.chosenRaces,R=this.props.raceReducer,E=R.raceDetails,k=R.origin,O=this.props.scrollReducer.sticky,x=O?m:"";if(v&&(n=this.loadingProgress()),y&&y.length>0&&(e=this.buildClearButton()),E&&(t=this.buildRaceInfo(E.raceInfo),a=this.buildResultCategories(E.categoryRecords,this.props.classes),s=this.buildYearResultCategories(E.races),o=this.buildYearPerformanceGraph(E.races,p),c=this.buildDownwardArrow(p),k&&(l=this.buildSameDayRaces(k,E.races,E.racesSameDay,p)),k&&E.properties&&E.properties.latitude&&0!==E.properties.latitude)){var C={lat:E.properties.latitude,lng:E.properties.longitude};i=this.buildMapComponent(k,C,p)}return O&&(r=h.a.createElement(d.Suspense,{fallback:h.a.createElement(g.a,{className:p})},h.a.createElement(sn,{onClick:this.scrollToTopClick}))),h.a.createElement(h.a.Fragment,null,h.a.createElement("div",{className:x},h.a.createElement(oe.a,{cacheOptions:!0,defaultOptions:!0,className:f,valueKey:"original",labelKey:"display",matchProp:"any",name:"race-search-field",onChange:this.onChange,loadOptions:this.getRaces,placeholder:"Search Race",noResultsText:"No race found",value:y,multi:!0,ignoreAccents:!1}),e),n,t,i,l,o,a,s,c,r)}}]),n}(d.Component),En=Object(f.b)(function(e){return Object(a.a)({},e)},function(e){return{dispatchLoadingProgress:function(n){return e(function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return function(n){n({type:ue.f,payload:e})}}(n))},dispatchChosenRace:function(n){return e(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return function(n){n({type:ue.a,payload:e})}}(n))},dispatchRaceDetails:function(n){return e(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return function(n){n({type:cn.a,payload:e})}}(n))},dispatchSticky:function(n){return e(he(n))},dispatchOrigin:function(n){return e(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return function(n){n({type:cn.b,payload:e})}}(n))}}})(Object(R.withStyles)(gn)(h.a.memo(Rn))),kn=t(57);function On(){return xn.apply(this,arguments)}function xn(){return(xn=Object(s.a)(c.a.mark(function e(){var n;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=null,e.next=3,Oe.a.get("".concat("https://www.fellracefinder.xyz","/calendarEvents")).then(function(e){var t=function(e){var n=Date.parse(e);return isNaN(n)};n=[];for(var a=0;a<e.data.length;a++)if(!t(e.data[a].start)&&!t(e.data[a].end)){var r=new Date(Date.parse(e.data[a].start)),c=new Date(Date.parse(e.data[a].end));n.push({id:e.data[a].id,title:e.data[a].title,start:r,end:c,short:e.data[a].short,medium:e.data[a].medium,long:e.data[a].long,url:e.data[a].url})}return n}).catch(function(e){console.log(e)});case 3:return e.abrupt("return",n);case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}var Cn=h.a.lazy(function(){return Promise.all([t.e(0),t.e(1),t.e(12),t.e(29)]).then(t.bind(null,6021))}),wn="Main-menuoption",jn=function(e){function n(e){var t;return Object(o.a)(this,n),(t=Object(l.a)(this,Object(u.a)(n).call(this,e))).raceOnClick=function(){var e=Object(s.a)(c.a.mark(function e(n){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),Object(Ce.f)({key:wn,value:"race"}),t.props.dispatchMenuAction({race:!0,runner:!1,calendar:!1}),t.props.dispatchMenuToggleAction(!1);case 4:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}(),t.runnerOnClick=function(){var e=Object(s.a)(c.a.mark(function e(n){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),Object(Ce.f)({key:wn,value:"runner"}),t.props.dispatchMenuAction({race:!1,runner:!0,calendar:!1}),t.props.dispatchMenuToggleAction(!1);case 4:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}(),t.calendarOnClick=function(){var e=Object(s.a)(c.a.mark(function e(n){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),Object(Ce.f)({key:wn,value:"calendar"}),t.props.dispatchMenuAction({race:!1,runner:!1,calendar:!0}),t.props.dispatchMenuToggleAction(!1);case 4:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}(),t}return Object(p.a)(n,e),Object(i.a)(n,[{key:"componentWillMount",value:function(){var e=Object(Ce.a)(wn);e&&("race"===e&&this.props.dispatchMenuAction({race:!0,runner:!1,calendar:!1}),"runner"===e&&this.props.dispatchMenuAction({race:!1,runner:!0,calendar:!1}),"calendar"===e&&this.props.dispatchMenuAction({race:!1,runner:!1,calendar:!0}),this.props.dispatchMenuToggleAction(!1))}},{key:"componentDidMount",value:function(){var e=Object(s.a)(c.a.mark(function e(){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=this.props,e.next=3,On();case 3:e.t1=e.sent,e.t0.dispatchCalendarEventsAction.call(e.t0,e.t1);case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e,n=this.props.menuReducer,t=n.race,a=n.runner,r=n.calendar,c=this.props.calendarReducer.events,s=!1;return t||r||!a||(e=h.a.createElement(_e,null)),!t||r||a||(e=h.a.createElement(En,null)),c&&!t&&r&&!a&&(e=h.a.createElement(d.Suspense,{fallback:h.a.createElement(g.a,null)},h.a.createElement(Cn,{events:c}))),(t||a||r)&&(s=!0),h.a.createElement(h.a.Fragment,null,h.a.createElement(ce,{raceOnClick:this.raceOnClick,runnerOnClick:this.runnerOnClick,calendarOnClick:this.calendarOnClick,closeMenu:s}),e)}}]),n}(d.PureComponent);n.default=Object(f.b)(function(e){return Object(a.a)({},e)},function(e){return{dispatchMenuAction:function(n){return e(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return function(n){n({type:te.a,payload:e})}}(n))},dispatchMenuToggleAction:function(n){return e(ae(n))},dispatchCalendarEventsAction:function(n){return e(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return function(n){n({type:kn.a,payload:e})}}(n))}}})(jn)}}]);
//# sourceMappingURL=23.b0244002.chunk.js.map