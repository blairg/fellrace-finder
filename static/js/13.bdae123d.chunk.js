(window.webpackJsonp=window.webpackJsonp||[]).push([[13,14],{171:function(e,t,n){"use strict";var a=n(1);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=a(n(174))},174:function(e,t,n){"use strict";var a=n(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var r=a(n(18)),i=a(n(7)),s=a(n(3)),o=a(n(0)),l=(a(n(2)),a(n(79))),c=a(n(40)),u=n(82),d=(a(n(175)),[0,8,16,24,32,40]),f=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];var m=function(e){return(0,s.default)({container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return d.forEach(function(e,a){0!==a&&(n["spacing-".concat(t,"-").concat(e)]={margin:-e/2,width:"calc(100% + ".concat(e,"px)"),"& > $item":{padding:e/2}})}),n}(0,"xs"),u.keys.reduce(function(t,n){return function(e,t,n){var a={};f.forEach(function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var r="".concat(Math.round(e/12*1e7)/1e5,"%");a[t]={flexBasis:r,flexGrow:0,maxWidth:r}}else a[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else a[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}}),"xs"===n?(0,s.default)(e,a):e[t.breakpoints.up(n)]=a}(t,e,n),t},{}))};function p(e){var t,n=e.alignContent,a=e.alignItems,c=e.classes,u=e.className,d=e.component,f=e.container,m=e.direction,x=e.item,g=e.justify,v=e.lg,y=e.md,b=e.sm,w=e.spacing,h=e.wrap,j=e.xl,_=e.xs,C=e.zeroMinWidth,P=(0,i.default)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),M=(0,l.default)((t={},(0,r.default)(t,c.container,f),(0,r.default)(t,c.item,x),(0,r.default)(t,c.zeroMinWidth,C),(0,r.default)(t,c["spacing-xs-".concat(String(w))],f&&0!==w),(0,r.default)(t,c["direction-xs-".concat(String(m))],m!==p.defaultProps.direction),(0,r.default)(t,c["wrap-xs-".concat(String(h))],h!==p.defaultProps.wrap),(0,r.default)(t,c["align-items-xs-".concat(String(a))],a!==p.defaultProps.alignItems),(0,r.default)(t,c["align-content-xs-".concat(String(n))],n!==p.defaultProps.alignContent),(0,r.default)(t,c["justify-xs-".concat(String(g))],g!==p.defaultProps.justify),(0,r.default)(t,c["grid-xs-".concat(String(_))],!1!==_),(0,r.default)(t,c["grid-sm-".concat(String(b))],!1!==b),(0,r.default)(t,c["grid-md-".concat(String(y))],!1!==y),(0,r.default)(t,c["grid-lg-".concat(String(v))],!1!==v),(0,r.default)(t,c["grid-xl-".concat(String(j))],!1!==j),t),u);return o.default.createElement(d,(0,s.default)({className:M},P))}t.styles=m,p.propTypes={},p.defaultProps={alignContent:"stretch",alignItems:"stretch",component:"div",container:!1,direction:"row",item:!1,justify:"flex-start",lg:!1,md:!1,sm:!1,spacing:0,wrap:"wrap",xl:!1,xs:!1,zeroMinWidth:!1};var x=(0,c.default)(m,{name:"MuiGrid"})(p);t.default=x},175:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(e){return function(){return null}};t.default=a},180:function(e,t,n){"use strict";var a=n(1);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=a(n(183))},181:function(e,t,n){"use strict";var a=n(1);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=a(n(184))},183:function(e,t,n){"use strict";var a=n(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var r=a(n(3)),i=a(n(7)),s=a(n(0)),o=(a(n(2)),a(n(79))),l=a(n(168)),c=a(n(40)),u={root:{overflow:"hidden"}};function d(e){var t=e.classes,n=e.className,a=e.raised,c=(0,i.default)(e,["classes","className","raised"]);return s.default.createElement(l.default,(0,r.default)({className:(0,o.default)(t.root,n),elevation:a?8:1},c))}t.styles=u,d.propTypes={},d.defaultProps={raised:!1};var f=(0,c.default)(u,{name:"MuiCard"})(d);t.default=f},184:function(e,t,n){"use strict";var a=n(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var r=a(n(3)),i=a(n(7)),s=a(n(0)),o=(a(n(2)),a(n(79))),l=a(n(40)),c=function(e){return{root:e.mixins.gutters({paddingTop:16,paddingBottom:16,"&:last-child":{paddingBottom:24}})}};function u(e){var t=e.classes,n=e.className,a=e.component,l=(0,i.default)(e,["classes","className","component"]);return s.default.createElement(a,(0,r.default)({className:(0,o.default)(t.root,n)},l))}t.styles=c,u.propTypes={},u.defaultProps={component:"div"};var d=(0,l.default)(c,{name:"MuiCardContent"})(u);t.default=d},288:function(e,t,n){"use strict";n.r(t);var a=n(176),r=n(0),i=n.n(r),s=n(25),o=n(180),l=n.n(o),c=n(181),u=n.n(c),d=n(170),f=n.n(d),m=n(171),p=n.n(m),x={marginRight:"10px",marginLeft:"5px",marginTop:"5px",marginBottom:"5px"},g={root:Object(a.a)({flexGrow:1},x),overallCard:Object(a.a)({},x,{"&:hover":{boxShadow:"0px 0px 9px #50AE55"}})},v=function(e,t){for(var n=[],a=[],r=0;r<e.length;r++){var s=e[r];a=[];for(var o=0;o<s._records.length;o++){var c=s._records[o],d="".concat(c._runnerName).concat(c._time).concat(c._year);a.push(i.a.createElement(f.a,{key:d,variant:"subheading"},i.a.createElement("b",null,o+1,".")," ",c._runnerName," (",c._club,") - ",c._time," (",c._year,")"))}n.push(i.a.createElement(l.a,{key:s._name,className:t.overallCard},i.a.createElement(u.a,null,i.a.createElement(f.a,{variant:"subheading"},i.a.createElement("b",null,"Category:")," ",s._name),a)))}return n};t.default=Object(s.withStyles)(g)(i.a.memo(function(e){var t=e.classes,n=e.categoryRecords;return i.a.createElement("div",{key:n._name,className:t.root},i.a.createElement(p.a,{className:t.root,container:!0},i.a.createElement(p.a,{item:!0,xs:!0},v(n,t))))}))}}]);
//# sourceMappingURL=13.bdae123d.chunk.js.map