(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{1431:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(25),l=t(1412),m=t.n(l),o=t(1416),s=t.n(o),u=t(1408),i=t.n(u),p=t(1414),E=t.n(p),y=t(1410),h=t.n(y),f=t(169),g=t.n(f),k=t(236),b=t.n(k),v=t(237),d=t.n(v),x=t(238),S=t.n(x),w=t(170),N=t.n(w),A=t(193),D=t.n(A),J=t(178),M=t.n(J),P=t(45),j=t.n(P),B=r.a.lazy(function(){return t.e(19).then(t.bind(null,1419))}),O=r.a.lazy(function(){return Promise.all([t.e(0),t.e(6),t.e(16)]).then(t.bind(null,1420))}),T=r.a.lazy(function(){return Promise.all([t.e(0),t.e(6),t.e(17)]).then(t.bind(null,1421))}),Y=Object(c.withStyles)(function(e){return{root:{backgroundColor:"#7A27A0",color:e.palette.common.white}}})(i.a),z=function(e){return{root:{width:"98%",marginLeft:"5px",marginRight:"5px",marginTop:3*e.spacing.unit,overflowX:"auto"},table:{minWidth:700},expansionPanel:{marginTop:"5px",marginBottom:"15px"},progress:{margin:2*e.spacing.unit}}},F=function(e){var a=[];return e.map(function(e){var t=function(){var e=[];return e.push("January"),e.push("February"),e.push("March"),e.push("April"),e.push("May"),e.push("June"),e.push("July"),e.push("August"),e.push("September"),e.push("October"),e.push("November"),e.push("December"),e}(),n=function(){for(var e=[],a=0;a<12;a++)e.push(r.a.createElement(i.a,{key:a,numeric:!0},"0"));return e}(),c="year-"+e.year.toString()+"-"+(0).toString(),l=r.a.createElement(i.a,{key:c,numeric:!0},e.year),m=0;if(e.months&&e.months.length>0)for(var o=0;o<e.months.length;o++){var s=e.months[o],u=Object.keys(s)[0],p=t.indexOf(u);if(p>-1){var E="year-"+e.year.toString()+"-month"+u,y="".concat(s[u]);m+=parseInt(y,10),n[p]=r.a.createElement(i.a,{key:E,numeric:!0},y)}}var f=r.a.createElement(i.a,{key:"total-".concat(c),numeric:!0},m),g=e.year.toString()+"-"+(0).toString();n.unshift(f),n.unshift(l),a.push(r.a.createElement(h.a,{key:g},n))}),a};a.default=Object(c.withStyles)(z)(r.a.memo(function(e){var a=e.overallStats,t=e.classes,c=F(a.racesByYear);return r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{className:t.expansionPanel},r.a.createElement(d.a,{expandIcon:r.a.createElement(D.a,null)},r.a.createElement(N.a,{className:t.heading},"Show number of races by year and month")),r.a.createElement(S.a,null,r.a.createElement(M.a,{container:!0},r.a.createElement(M.a,{item:!0,xs:12},r.a.createElement(n.Suspense,{fallback:r.a.createElement(j.a,{className:z.progress})},r.a.createElement(B,{overallStats:a}))),r.a.createElement(M.a,{item:!0,xs:12},r.a.createElement(g.a,{className:t.root},r.a.createElement(m.a,{className:t.table},r.a.createElement(E.a,null,r.a.createElement(h.a,{key:"header"},r.a.createElement(Y,{key:"year"}),r.a.createElement(Y,{key:"total",numeric:!0},"Total"),r.a.createElement(Y,{key:"jan",numeric:!0},"Jan"),r.a.createElement(Y,{key:"feb",numeric:!0},"Feb"),r.a.createElement(Y,{key:"mar",numeric:!0},"Mar"),r.a.createElement(Y,{key:"apr",numeric:!0},"Apr"),r.a.createElement(Y,{key:"may",numeric:!0},"May"),r.a.createElement(Y,{key:"jun",numeric:!0},"Jun"),r.a.createElement(Y,{key:"jul",numeric:!0},"Jul"),r.a.createElement(Y,{key:"aug",numeric:!0},"Aug"),r.a.createElement(Y,{key:"sep",numeric:!0},"Sep"),r.a.createElement(Y,{key:"oct",numeric:!0},"Oct"),r.a.createElement(Y,{key:"nov",numeric:!0},"Nov"),r.a.createElement(Y,{key:"dec",numeric:!0},"Dec"))),r.a.createElement(s.a,null,c))))))),r.a.createElement(b.a,{className:t.expansionPanel},r.a.createElement(d.a,{expandIcon:r.a.createElement(D.a,null)},r.a.createElement(N.a,{className:t.heading},"Show performance graphs")),r.a.createElement(S.a,null,r.a.createElement(M.a,{container:!0},r.a.createElement(M.a,{item:!0,xs:12},r.a.createElement(n.Suspense,{fallback:r.a.createElement(j.a,{className:z.progress})},r.a.createElement(T,{overallRaceData:a.overallRaceData}))),r.a.createElement(M.a,{item:!0,xs:12},r.a.createElement(n.Suspense,{fallback:r.a.createElement(j.a,{className:z.progress})},r.a.createElement(O,{performanceData:a.performanceByMonthData,title:"Average Performance By Month",xTitle:"Year/Month"}))),r.a.createElement(M.a,{item:!0,xs:12},r.a.createElement(n.Suspense,{fallback:r.a.createElement(j.a,{className:z.progress})},r.a.createElement(O,{performanceData:a.performanceByYearData,title:"Average Performance By Year",xTitle:"Year"})))))))}))}}]);
//# sourceMappingURL=18.77dd5f92.chunk.js.map