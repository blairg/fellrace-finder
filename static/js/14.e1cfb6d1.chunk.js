(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{181:function(e,a,t){"use strict";var r=t(1);Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"default",{enumerable:!0,get:function(){return n.default}});var n=r(t(182))},182:function(e,a,t){"use strict";var r=t(1);Object.defineProperty(a,"__esModule",{value:!0}),a.default=a.styles=void 0;var n=r(t(3)),o=r(t(7)),l=r(t(0)),s=(r(t(2)),r(t(79))),u=r(t(170)),c=r(t(40)),d={root:{overflow:"hidden"}};function i(e){var a=e.classes,t=e.className,r=e.raised,c=(0,o.default)(e,["classes","className","raised"]);return l.default.createElement(u.default,(0,n.default)({className:(0,s.default)(a.root,t),elevation:r?8:1},c))}a.styles=d,i.propTypes={},i.defaultProps={raised:!1};var f=(0,c.default)(d,{name:"MuiCard"})(i);a.default=f},183:function(e,a,t){"use strict";var r=t(1);Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"default",{enumerable:!0,get:function(){return n.default}});var n=r(t(184))},184:function(e,a,t){"use strict";var r=t(1);Object.defineProperty(a,"__esModule",{value:!0}),a.default=a.styles=void 0;var n=r(t(3)),o=r(t(7)),l=r(t(0)),s=(r(t(2)),r(t(79))),u=r(t(40)),c=function(e){return{root:e.mixins.gutters({paddingTop:16,paddingBottom:16,"&:last-child":{paddingBottom:24}})}};function d(e){var a=e.classes,t=e.className,r=e.component,u=(0,o.default)(e,["classes","className","component"]);return l.default.createElement(r,(0,n.default)({className:(0,s.default)(a.root,t)},u))}a.styles=c,d.propTypes={},d.defaultProps={component:"div"};var i=(0,u.default)(c,{name:"MuiCardContent"})(d);a.default=i},290:function(e,a,t){"use strict";t.r(a);var r=t(176),n=t(0),o=t.n(n),l=t(25),s=t(181),u=t.n(s),c=t(183),d=t.n(c),i=t(167),f=t.n(i),m=t(169),p=t.n(m),v={marginRight:"10px",marginLeft:"5px",marginTop:"5px",marginBottom:"5px"},y={root:Object(r.a)({flexGrow:1},v),overallCard:Object(r.a)({},v,{"&:hover":{boxShadow:"0px 0px 9px #50AE55"}})},_=function(e,a){for(var t=[],r=[],n=0;n<e.length;n++){var l=e[n];r=[];for(var s=0;s<l._records.length;s++){var c=l._records[s],i="".concat(c._runnerName).concat(c._time).concat(c._year);r.push(o.a.createElement(f.a,{key:i,variant:"subheading"},o.a.createElement("b",null,s+1,".")," ",c._runnerName," (",c._club,") - ",c._time," (",c._year,")"))}t.push(o.a.createElement(u.a,{key:l._name,className:a.overallCard},o.a.createElement(d.a,null,o.a.createElement(f.a,{variant:"subheading"},o.a.createElement("b",null,"Category:")," ",l._name),r)))}return t};a.default=Object(l.withStyles)(y)(o.a.memo(function(e){var a=e.classes,t=e.categoryRecords;return o.a.createElement("div",{key:t._name,className:a.root},o.a.createElement(p.a,{className:a.root,container:!0},o.a.createElement(p.a,{item:!0,xs:!0},_(t,a))))}))}}]);
//# sourceMappingURL=14.e1cfb6d1.chunk.js.map