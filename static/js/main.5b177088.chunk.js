(this["webpackJsonpportfolio-site"]=this["webpackJsonpportfolio-site"]||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports=n(21)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/react-piano.fc7261b9.jpg"},function(e,t,n){e.exports=n.p+"static/media/metronome.fb77a1ef.jpg"},function(e,t,n){e.exports=n.p+"static/media/flex-quest.ca46dbbe.jpg"},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),c=n(8),o=n.n(c),r=n(2),i=n(4),s=n(1),u=n(6),m="Medula One, sans-serif",d="Source Code Pro, sans-serif",f="Mulish, sans-serif",h={dark:"#676565",darker:"#333333",light:"#C4C4C4",lighter:"#DFDFDF",highlight:"rgb(0, 7, 67, 0.4)"},p={light:"#FFFFFF",dark:"#DBD9D9",darker:"#4D4D4D",highlight:"#FF5050",selected:"#0edfff"};n(15);function g(e){var t,n=e.logoChars,c=void 0===n?"":n,o=e.navLinks,s=void 0===o?[]:o,d=e.setBurgerIsOpen,g=void 0===d?function(){}:d,b=Object(a.useState)(!1),y=Object(r.a)(b,2),x=y[0],k=y[1],E=Object(a.useState)(""),v=Object(r.a)(E,2),w=v[0],j=v[1],S=(window.matchMedia("(min-width: 426px)").matches,window.location.pathname.slice(1).replace("%20"," "));""!==S&&"portfolio-site/"!==S||(t=s[0]),s.forEach((function(e){S===e&&(t=e)}));var D=Object(a.useState)(t),O=Object(r.a)(D,2),C=O[0],F=O[1],N={display:"flex",justifyContent:"space-between",alignItems:"center",padding:"45px 32px",height:"64px",position:"relative",boxSizing:"border-box",background:h.dark,width:"100%"},M={color:p.light,fontFamily:m,textDecoration:"none"},I={color:p.light,fontFamily:f,textDecoration:"none",whiteSpace:"nowrap"},T=Object(u.a)(Object(u.a)({},I),{},{color:p.selected}),A={height:"25%",background:h.light};return Object(a.useEffect)((function(){j(x?"burger-selected":"")}),[x]),l.a.createElement("header",{className:"header",style:N},l.a.createElement(i.b,{to:"/",className:"text-logo",style:M,onClick:function(){F(s[0])},onTouchStart:function(){document.querySelector(".text-logo").click()}},c),l.a.createElement("nav",{className:"header-nav",style:{width:"100%",justifyContent:"flex-end"}},s.map((function(e,t){var n=e===C?T:I;return l.a.createElement(i.b,{to:e,className:"nav-link",key:"nav-link-".concat(t),style:n,onClick:function(){F(e)}},e)}))),l.a.createElement("div",{className:"burger ".concat(w),style:{flexDirection:"column",justifyContent:"space-between",width:"75px",height:"53px"},onTouchStart:function(){var e=!x;k(e),g(e)}},l.a.createElement("div",{className:"burger-bar",style:A}),l.a.createElement("div",{className:"burger-bar",style:A}),l.a.createElement("div",{className:"burger-bar",style:A})))}n(16);function b(){var e={display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",background:h.darker,flexGrow:"1"},t={color:p.dark,fontFamily:d,textAlign:"center",cursor:"default"},n={color:p.highlight,fontFamily:d,textAlign:"center",cursor:"default"};return l.a.createElement("section",{className:"home",style:e},l.a.createElement("h1",{className:"heading",style:t},"Alex Sweeney"),l.a.createElement("h2",{className:"subheading",style:n},"front end developer"))}n(17),n(18),n(19);var y=n(9);n(20);function x(){console.log("projects - mute styles");var e,t=Object(y.useState)((e="426px",window.matchMedia("(min-width: ".concat(e,")")).matches)),n=Object(r.a)(t,2),a=n[0],c=(n[1],{background:h.darker,display:"flex",flexDirection:"column",alignItems:"center",flexGrow:"1",padding:a?"2em":"1em"});return l.a.createElement("section",{className:"projects",style:c})}function k(e){var t=e.links,n=e.show,a=e.handleTouch,c={background:h.lighter,display:"flex",flexDirection:"column",height:"100vh"},o={fontFamily:f,color:p.darker,display:"flex",justifyContent:"center",textDecoration:"none",padding:"32px 0",fontSize:"36px"};function r(e){return e.toLowerCase().replace(" ","-")}return n?l.a.createElement("section",{className:"burger-menu",style:c},t.map((function(e,t){return l.a.createElement(i.b,{to:e,onTouchStart:function(){return a(t=e),void document.querySelector(".burger-menu-link-".concat(r(t))).click();var t},className:"burger-menu-link burger-menu-link-".concat(r(e)),style:o,key:"buger-menu-link-".concat(t)},e)}))):n?void 0:null}function E(){console.log("add projects");var e=["Home","Technical Skills","Projects","Contact"],t=Object(a.useState)(!1),n=Object(r.a)(t,2),c=n[0],o=n[1];return l.a.createElement("section",{className:"app",style:{position:"absolute",width:"100%",minHeight:"100%",minWidth:"250px",display:"flex",flexDirection:"column"}},l.a.createElement("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),l.a.createElement("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossorigin:!0}),l.a.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Medula+One&display=swap",rel:"stylesheet"}),l.a.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Medula+One&display=swap",rel:"stylesheet"}),l.a.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@500&display=swap",rel:"stylesheet"}),l.a.createElement(i.a,null,l.a.createElement(g,{logoChars:"ASWD",navLinks:e,setBurgerIsOpen:o}),l.a.createElement(k,{links:e,show:c,handleTouch:function(e){o(!1)}}),!c&&l.a.createElement(s.c,null,l.a.createElement(s.a,{exact:!0,path:"/",element:l.a.createElement(b,null)}),l.a.createElement(s.a,{exact:!0,path:"/portfolio-site/",element:l.a.createElement(b,null)}),l.a.createElement(s.a,{exact:!0,path:"/Home",element:l.a.createElement(b,null)}),l.a.createElement(s.a,{exact:!0,path:"/Projects",element:l.a.createElement(x,null)}))))}o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(E,null)),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.5b177088.chunk.js.map