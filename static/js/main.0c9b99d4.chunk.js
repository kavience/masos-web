(this["webpackJsonpmacos-web-desktop"]=this["webpackJsonpmacos-web-desktop"]||[]).push([[0],[,,,,,,,,,function(A,e,g){},,function(A,e,g){},function(A,e,g){},function(A,e,g){"use strict";g.r(e);var c=g(1),a=g.n(c),i=g(4),t=g.n(i),B=(g(9),g.p+"static/media/apple.61bf5a8f.svg"),n=g.p+"static/media/volume.56f4c2e1.svg",Q=g.p+"static/media/battery.3ccd19ed.svg",s=g.p+"static/media/wifi.bac7d425.svg",I=g(3),o=g(0),E=function(A){var e=Object(c.useState)(),g=Object(I.a)(e,2),a=g[0],i=g[1],t=Object(c.useState)(new Date),B=Object(I.a)(t,2),n=B[0],Q=B[1];return Object(c.useEffect)((function(){var A=setInterval((function(){return Q(new Date)}),1e3);return function(){clearInterval(A)}}),[]),Object(c.useEffect)((function(){var e,g=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][n.getDay()],c=n.getHours(),a=n.getMinutes(),t=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][n.getMonth()],B=n.getDate().toLocaleString(),Q=c<12?"AM":"PM";1===a.toLocaleString().length&&(a="0"+a),c>12&&(c-=12),e=void 0!==A.onlyTime&&null!==A.onlyTime?c+":"+a+" "+Q:void 0!==A.onlyDay&&null!==A.onlyDay?g+" "+t+" "+B:g+" "+t+" "+B+" "+c+":"+a+" "+Q,i(e)}),[n,A.onlyTime,A.onlyDay]),Object(o.jsx)("span",{children:a})};function r(){return Object(o.jsxs)("div",{className:"header",children:[Object(o.jsxs)("div",{className:"header-left",children:[Object(o.jsx)("div",{className:"header-left_action header-left_logo",children:Object(o.jsx)("img",{src:B,alt:"apple"})}),Object(o.jsx)("div",{className:"header-left_action header-left_finder",children:"Finder"}),Object(o.jsx)("div",{className:"header-left_action",children:"File"}),Object(o.jsx)("div",{className:"header-left_action",children:"Edit"}),Object(o.jsx)("div",{className:"header-left_action",children:"View"}),Object(o.jsx)("div",{className:"header-left_action",children:"Go"}),Object(o.jsx)("div",{className:"header-left_action",children:"Window"}),Object(o.jsx)("div",{className:"header-left_action",children:"Help"})]}),Object(o.jsxs)("div",{className:"header-right",children:[Object(o.jsx)("div",{className:"header-right_action header-right_battery",children:Object(o.jsx)("img",{src:Q,alt:""})}),Object(o.jsx)("div",{className:"header-right_action",children:Object(o.jsx)("img",{src:s,alt:""})}),Object(o.jsx)("div",{className:"header-right_action",children:Object(o.jsx)("img",{src:n,alt:""})}),Object(o.jsx)("div",{className:"header-right_action header-right_siri",children:Object(o.jsx)("img",{src:"data:image/png;base64,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",alt:""})}),Object(o.jsx)("div",{className:"header-right_action header-right_clock",children:Object(o.jsx)(E,{})})]})]})}var O=g.p+"static/media/37_finder.9125b329.png",d=g.p+"static/media/45_facetime.6942c72c.png",w=g.p+"static/media/63_appstore.e3e52ca2.png",C=g.p+"static/media/15_safari.e6c609a1.png",l=g.p+"static/media/23_notes.1c0b888b.png",j=g.p+"static/media/18_preview.6e85ea24.png",h=g.p+"static/media/24_music.7a9a4c25.png",m=g.p+"static/media/10_siri.5cc8cec1.png",D=g.p+"static/media/07_terminal.433a3dc6.png",v=g.p+"static/media/56_calculator.51fa378c.png",M=g.p+"static/media/28_maps.2871b50e.png",x=g.p+"static/media/29_mail.98b0529e.png",k=g.p+"static/media/04_tv+.9a3b3abd.png",R=g.p+"static/media/50_contacts.b3704a9a.png",p=g.p+"static/media/chrome.bca174ee.png",H=(g(11),[{name:"App Store",logo:w},{name:"Finder",logo:O},{name:"Face Time",logo:d},{name:"Safari",logo:C},{name:"Notes",logo:l},{name:"Preview",logo:j},{name:"Siri",logo:m}]),f=[{name:"Music",logo:h},{name:"Terminal",logo:D},{name:"Google Chrome",logo:p},{name:"Calculator",logo:v},{name:"Map",logo:M},{name:"Music",logo:h}],G=[{name:"Mail",logo:x},{name:"Tv",logo:k},{name:"Contacts",logo:R},{name:"Trash",logo:"data:image/png;base64,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"}],N=function(){return Object(o.jsx)("div",{className:"footer",children:Object(o.jsx)("div",{className:"footer-apps",children:Object(o.jsxs)(o.Fragment,{children:[H.map((function(A){return Object(o.jsx)("div",{className:"footer-apps_item",title:A.name,children:Object(o.jsx)("img",{src:A.logo,alt:""})})})),Object(o.jsx)("div",{className:"divider"}),f.map((function(A){return Object(o.jsx)("div",{className:"footer-apps_item",title:A.name,children:Object(o.jsx)("img",{src:A.logo,alt:""})})})),Object(o.jsx)("div",{className:"divider"}),G.map((function(A){return Object(o.jsx)("div",{className:"footer-apps_item",title:A.name,children:Object(o.jsx)("img",{src:A.logo,alt:""})})}))]})})})};g(12);var b=function(){return Object(o.jsxs)("div",{className:"app",children:[Object(o.jsx)(r,{}),Object(o.jsx)(N,{})]})},F=function(A){A&&A instanceof Function&&g.e(3).then(g.bind(null,14)).then((function(e){var g=e.getCLS,c=e.getFID,a=e.getFCP,i=e.getLCP,t=e.getTTFB;g(A),c(A),a(A),i(A),t(A)}))};t.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(b,{})}),document.getElementById("root")),F()}],[[13,1,2]]]);
//# sourceMappingURL=main.0c9b99d4.chunk.js.map