(this["webpackJsonpportfolio-site"]=this["webpackJsonpportfolio-site"]||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(20)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/react-piano.fc7261b9.jpg"},function(e,t,n){e.exports=n.p+"static/media/metronome.fb77a1ef.jpg"},function(e,t,n){e.exports=n.p+"static/media/flex-quest.ca46dbbe.jpg"},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(8),l=n.n(c),r=n(2),i=n(4),s=n(1),m=n(6),u="Medula One, sans-serif",h="Source Code Pro, sans-serif",d="Mulish, sans-serif",f={dark:"#676565",darker:"#333333",light:"#C4C4C4",lighter:"#DFDFDF",highlight:"rgb(0, 7, 67, 0.4)"},p={light:"#FFFFFF",dark:"#DBD9D9",darker:"#4D4D4D",highlight:"#FF5050",selected:"#0edfff"};n(14);function g(e){var t,n=e.logoChars,c=void 0===n?"":n,l=e.navLinks,s=void 0===l?[]:l,h=e.setBurgerIsOpen,g=void 0===h?function(){}:h,b=Object(a.useState)(!1),y=Object(r.a)(b,2),x=y[0],k=y[1],E=Object(a.useState)(""),v=Object(r.a)(E,2),w=v[0],j=v[1],S=(window.matchMedia("(min-width: 426px)").matches,window.location.pathname.slice(1).replace("%20"," "));""!==S&&"portfolio-site/"!==S||(t=s[0]),s.forEach((function(e){S===e&&(t=e)}));var D=Object(a.useState)(t),O=Object(r.a)(D,2),C=O[0],F=O[1],N={display:"flex",justifyContent:"space-between",alignItems:"center",padding:"45px 32px",height:"64px",position:"relative",boxSizing:"border-box",background:f.dark,width:"100%"},M={color:p.light,fontFamily:u,textDecoration:"none"},T={color:p.light,fontFamily:d,textDecoration:"none",whiteSpace:"nowrap"},I=Object(m.a)(Object(m.a)({},T),{},{color:p.selected}),A={height:"25%",background:f.light};return Object(a.useEffect)((function(){j(x?"burger-selected":"")}),[x]),o.a.createElement("header",{className:"header",style:N},o.a.createElement(i.b,{to:"/",className:"text-logo",style:M,onClick:function(){F(s[0])},onTouchStart:function(){document.querySelector(".text-logo").click()}},c),o.a.createElement("nav",{className:"header-nav",style:{width:"100%",justifyContent:"flex-end"}},s.map((function(e,t){var n=e===C?I:T;return o.a.createElement(i.b,{to:e,className:"nav-link",key:"nav-link-".concat(t),style:n,onClick:function(){F(e)}},e)}))),o.a.createElement("div",{className:"burger ".concat(w),style:{flexDirection:"column",justifyContent:"space-between",width:"75px",height:"53px"},onTouchStart:function(){var e=!x;k(e),g(e)}},o.a.createElement("div",{className:"burger-bar",style:A}),o.a.createElement("div",{className:"burger-bar",style:A}),o.a.createElement("div",{className:"burger-bar",style:A})))}n(15);function b(){var e={display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",background:f.darker,flexGrow:"1"},t={color:p.dark,fontFamily:h,textAlign:"center",cursor:"default"},n={color:p.highlight,fontFamily:h,textAlign:"center",cursor:"default"};return o.a.createElement("section",{className:"home",style:e},o.a.createElement("h1",{className:"heading",style:t},"Alex Sweeney"),o.a.createElement("h2",{className:"subheading",style:n},"front end developer"))}n(16),n(17),n(18),n(19);function y(){console.log("projects - remove cahnge import");var e,t=(e="426px",console.log("get is desktop value",window.matchMedia("(min-width: ".concat(e,")")).matches),window.matchMedia("(min-width: ".concat(e,")")).matches),n=Object(a.useState)(t),c=Object(r.a)(n,2),l=c[0];c[1];return console.log("isDesktop",l),o.a.createElement("section",{className:"projects"})}function x(e){var t=e.links,n=e.show,a=e.handleTouch,c={background:f.lighter,display:"flex",flexDirection:"column",height:"100vh"},l={fontFamily:d,color:p.darker,display:"flex",justifyContent:"center",textDecoration:"none",padding:"32px 0",fontSize:"36px"};function r(e){return e.toLowerCase().replace(" ","-")}return n?o.a.createElement("section",{className:"burger-menu",style:c},t.map((function(e,t){return o.a.createElement(i.b,{to:e,onTouchStart:function(){return a(t=e),void document.querySelector(".burger-menu-link-".concat(r(t))).click();var t},className:"burger-menu-link burger-menu-link-".concat(r(e)),style:l,key:"buger-menu-link-".concat(t)},e)}))):n?void 0:null}function k(){console.log("add projects");var e=["Home","Technical Skills","Projects","Contact"],t=Object(a.useState)(!1),n=Object(r.a)(t,2),c=n[0],l=n[1];return o.a.createElement("section",{className:"app",style:{position:"absolute",width:"100%",minHeight:"100%",minWidth:"250px",display:"flex",flexDirection:"column"}},o.a.createElement("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),o.a.createElement("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossorigin:!0}),o.a.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Medula+One&display=swap",rel:"stylesheet"}),o.a.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Medula+One&display=swap",rel:"stylesheet"}),o.a.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@500&display=swap",rel:"stylesheet"}),o.a.createElement(i.a,null,o.a.createElement(g,{logoChars:"ASWD",navLinks:e,setBurgerIsOpen:l}),o.a.createElement(x,{links:e,show:c,handleTouch:function(e){l(!1)}}),!c&&o.a.createElement(s.c,null,o.a.createElement(s.a,{exact:!0,path:"/",element:o.a.createElement(b,null)}),o.a.createElement(s.a,{exact:!0,path:"/portfolio-site/",element:o.a.createElement(b,null)}),o.a.createElement(s.a,{exact:!0,path:"/Home",element:o.a.createElement(b,null)}),o.a.createElement(s.a,{exact:!0,path:"/Projects",element:o.a.createElement(y,null)}))))}l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(k,null)),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.afc18e9d.chunk.js.map