_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[97],{"+xaq":function(e,t,n){"use strict";n.d(t,"b",(function(){return x}));var r=n("vgIT"),c=n.n(r),a=n("rePB"),s=n("nKUr"),i=n("q1tI"),l=n("nOHt"),o=n.n(l);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var j,b=Object(i.createContext)(),m=b.Provider;o.a.events.on("routeChangeComplete",(function(){return document.querySelector(".workspace > .ant-layout").scrollTop=0}));var p=function(e){delete e.mobile,delete e.optionDrawer,delete e.mobileDrawer,localStorage.setItem("settings",JSON.stringify(e))},h=function(e,t){switch(t.type){case"fullscreen":var n=document.querySelector("#__next"),r=document.webkitIsFullScreen||document.mozFullScreen||!1;return n.requestFullScreen=n.requestFullScreen||n.webkitRequestFullScreen||n.mozRequestFullScreen||function(){return!1},document.cancelFullScreen=document.cancelFullScreen||document.webkitCancelFullScreen||document.mozCancelFullScreen||function(){return!1},r?document.cancelFullScreen():n.requestFullScreen(),u(u({},e),{},{fullscreen:!r});case"boxed":var c=u(u({},e),{},{boxed:!e.boxed});return p(c),c;case"sidebarTheme":var a=u(u({},e),{},{darkSidebar:!e.darkSidebar});return p(a),a;case"sidebarPopup":var s=u(u({},e),{},{sidebarPopup:!e.sidebarPopup});return p(s),s;case"sidebarIcons":if(e.collapsed)return u({},e);var i=u(u({},e),{},{sidebarIcons:!e.sidebarIcons});return p(i),i;case"collapse":var l=e.collapsed,o=e.sidebarIcons;l||(o=!0);var d=u(u({},e),{},{collapsed:!e.collapsed,sidebarIcons:o});return p(d),d;case"weak":var b=e.weakColor,m=e.darkSidebar;!b&&m&&(m=!1);var h=u(u({},e),{},{weakColor:!e.weakColor,darkSidebar:m});return p(h),h;case"direction":var x="rtl"===e.direction?"ltr":"rtl",O=u(u({},e),{},{direction:x});return p(O),O;case"mobile":return u(u({},e),{},{mobile:!j.matches});case"options":return u(u({},e),{},{optionDrawer:!e.optionDrawer});case"mobileDrawer":return u(u({},e),{},{mobileDrawer:!e.mobileDrawer});case"setup":var f=JSON.parse(localStorage.getItem("settings"));return u(u({},e),{},{mobile:!j.matches},f);default:return e}};t.a=function(e){var t=Object(i.useReducer)(h,{name:"One",mobile:!1,boxed:!1,darkSidebar:!1,sidebarPopup:!1,sidebarIcons:!0,collapsed:!1,weakColor:!1,optionDrawer:!1,mobileDrawer:!1,fullscreen:!1,direction:"ltr"}),n=t[0],r=t[1];Object(i.useEffect)((function(){return(j=window.matchMedia("(min-width: 992px)")).addListener(a),r({type:"setup"}),function(){return j.removeListener(a)}}),[]);var a=function(){r({type:"mobile"})};return Object(s.jsx)(c.a,{direction:n.direction,children:Object(s.jsx)(m,{value:[n,r],children:e.children})})};var x=function(){return Object(i.useContext)(b)}},FWZJ:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"e",(function(){return o})),n.d(t,"b",(function(){return d})),n.d(t,"d",(function(){return u})),n.d(t,"c",(function(){return j})),n.d(t,"f",(function(){return m}));var r=n("o0o1"),c=n.n(r),a=n("HaE+"),s=n("nKUr"),i={"01d":"/weather/day.svg","02d":"/weather/cloudy-day-1.svg","03d":"/weather/cloudy-day-2.svg","04d":"/weather/cloudy-day-3.svg","09d":"/weather/rainy-4.svg","10d":"/weather/rainy-1.svg","11d":"/weather/thunder.svg","13d":"/weather/snowy-3.svg","50d":"/weather/cloudy-day-3.svg","01n":"/weather/night.svg","02n":"/weather/cloudy-night-1.svg","03n":"/weather/cloudy-night-2.svg","04n":"/weather/cloudy-night-3.svg","09n":"/weather/rainy-4.svg","10n":"/weather/rainy-5.svg","11n":"/weather/thunder.svg","13n":"/weather/snowy-5.svg","50n":"/weather/cloudy-day-3.svg"};function l(e){return e.charAt(0).toUpperCase()+e.slice(1)}function o(e){return e.toLowerCase()}function d(e){var t=parseFloat(e);return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(t)}function u(e,t){var n=i[e];return Object(s.jsx)("span",{style:{background:"none, url(".concat(n,") no-repeat"),backgroundSize:"contain",width:"".concat(t,"px"),height:"".concat(t,"px"),display:"inline-block"}})}function j(e,t,n){return b.apply(this,arguments)}function b(){return(b=Object(a.a)(c.a.mark((function e(t,n,r){var a,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=void 0,e.prev=1,e.next=4,fetch("//api.openweathermap.org/data/2.5/forecast?q=".concat(t,",").concat(n,"&appid=").concat("YOUR_WEATHER_API_KEY","&cnt=").concat(r,"&units=metric")).then((function(e){if(e.ok)return e;throw Error("Request rejected with status ".concat(e.status))})).catch(console.error);case 4:if(void 0===(s=e.sent)){e.next=9;break}return e.next=8,s.json();case 8:a=e.sent;case 9:return e.abrupt("return",a);case 12:return e.prev=12,e.t0=e.catch(1),e.abrupt("return","");case 15:case"end":return e.stop()}}),e,null,[[1,12]])})))).apply(this,arguments)}function m(e){return Object.keys(e).reduce((function(t,n){var r,c=e[n],a="object"===typeof c?m(c):c;return t[(r=n,r.toLowerCase().replace(/[-_]+/g," ").replace(/[^\w\s]/g,"").replace(/ (.)/g,(function(e){return e.toUpperCase()})).replace(/ /g,""))]=a,t}),{})}},UIqZ:function(e,t,n){"use strict";var r=n("284h"),c=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=c(n("pVnL")),s=c(n("lSNA")),i=r(n("q1tI")),l=c(n("TSYQ")),o=n("vgIT"),d=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(r=Object.getOwnPropertySymbols(e);c<r.length;c++)t.indexOf(r[c])<0&&Object.prototype.propertyIsEnumerable.call(e,r[c])&&(n[r[c]]=e[r[c]])}return n},u=function(e){return i.createElement(o.ConfigConsumer,null,(function(t){var n,r=t.getPrefixCls,c=t.direction,o=e.prefixCls,u=e.type,j=void 0===u?"horizontal":u,b=e.orientation,m=void 0===b?"center":b,p=e.className,h=e.children,x=e.dashed,O=e.plain,f=d(e,["prefixCls","type","orientation","className","children","dashed","plain"]),y=r("divider",o),w=m.length>0?"-".concat(m):m,v=!!h,g=(0,l.default)(y,"".concat(y,"-").concat(j),(n={},(0,s.default)(n,"".concat(y,"-with-text"),v),(0,s.default)(n,"".concat(y,"-with-text").concat(w),v),(0,s.default)(n,"".concat(y,"-dashed"),!!x),(0,s.default)(n,"".concat(y,"-plain"),!!O),(0,s.default)(n,"".concat(y,"-rtl"),"rtl"===c),n),p);return i.createElement("div",(0,a.default)({className:g},f,{role:"separator"}),h&&i.createElement("span",{className:"".concat(y,"-inner-text")},h))}))};t.default=u},rZDb:function(e,t,n){"use strict";n.r(t);var r=n("nKUr"),c=n("4IMT"),a=n.n(c),s=n("N9UN"),i=n.n(s),l=n("UIqZ"),o=n.n(l),d=n("9xET"),u=n.n(d),j=n("ZPTe"),b=n.n(j),m=n("ODXe"),p=n("vOnD"),h=[{title:"Maintanance",subtitle:"Monthly web updates for http://www.themeforest.net",price:250,quantity:1},{title:"Recurring Bill (Hosting)",subtitle:"Monthly dedicated VPN web hosting (1 Jan - 30 Jan, 2014)",price:652.87,quantity:3},{title:"Recurring Bill (Domain)",subtitle:"2 year domain name purchase",price:239,quantity:3},{title:"Web design",subtitle:"PSD to HTML Conversion (3 pages)",price:958,quantity:1}],x=n("FWZJ"),O=n("+xaq"),f=function(){var e=Object(O.b)(),t=Object(m.a)(e,1)[0],n=function(){return h.reduce((function(e,t){return e+t.quantity*t.price}),0)},c=function(){return 15*n()/100};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(i.a,{className:"shadow-sm text-monospace",bodyStyle:{padding:0},bordered:!1,children:[Object(r.jsx)("div",{className:"bg-dark text-light rounded-top p-5",children:Object(r.jsxs)("div",{className:"p-5",children:[Object(r.jsx)("h1",{className:"text-white",children:"Envato"}),Object(r.jsxs)(u.a,{type:"flex",justify:"space-between",children:[Object(r.jsxs)(b.a,{children:[Object(r.jsxs)("ul",{className:"list-unstyled",children:[Object(r.jsx)("li",{children:"Apple Inc"}),Object(r.jsx)("li",{children:"Austin Walker"}),Object(r.jsx)("li",{children:"austin.walker94@example.com"})]}),Object(r.jsxs)("ul",{className:"list-unstyled",children:[Object(r.jsx)("li",{children:"4783 Blue Island Ave"}),Object(r.jsx)("li",{children:"Ljan terrasse 346"}),Object(r.jsx)("li",{children:"Vear"}),Object(r.jsx)("li",{children:"Rogaland"}),Object(r.jsx)("li",{children:"3095"}),Object(r.jsx)("li",{children:"United States of America"})]}),Object(r.jsxs)("ul",{className:"list-unstyled",children:[Object(r.jsx)("li",{children:"Invoice #45789"}),Object(r.jsx)("li",{children:"November 05, 2019"})]})]}),Object(r.jsxs)(b.a,{className:"text-right",children:[Object(r.jsxs)("ul",{className:"list-unstyled",children:[Object(r.jsx)("li",{children:"Amazon AWS"}),Object(r.jsx)("li",{children:"Francine Miles"}),Object(r.jsx)("li",{children:"frank.miles98@example.com"})]}),Object(r.jsxs)("ul",{className:"list-unstyled",children:[Object(r.jsx)("li",{children:"1033 W Sherman Dr"}),Object(r.jsx)("li",{children:"798 Mariana Isle"}),Object(r.jsx)("li",{children:"Lake Maegan"}),Object(r.jsx)("li",{children:"Wyoming"}),Object(r.jsx)("li",{children:"00 263"}),Object(r.jsx)("li",{children:"South Africa"})]})]})]})]})}),Object(r.jsx)("div",{className:"p-5",children:Object(r.jsxs)("div",{className:"p-5",children:[Object(r.jsx)(o.a,{className:"m-0"}),Object(r.jsxs)(u.a,{type:"flex",justify:"space-between",className:"py-2 text-muted",children:[Object(r.jsx)("div",{children:Object(r.jsx)("small",{children:"Description"})}),Object(r.jsx)("div",{className:"".concat("rtl"===t.direction?"text-left":"text-right"),children:Object(r.jsx)("small",{children:"Amount"})})]}),Object(r.jsx)(o.a,{className:"m-0"}),h.map((function(e,n){return Object(r.jsxs)("div",{children:[Object(r.jsxs)(u.a,{type:"flex",justify:"space-between",align:"middle",className:"py-4",children:[Object(r.jsxs)("div",{className:"".concat("rtl"===t.direction?"ml-auto":"mr-auto"),children:[Object(r.jsx)("span",{children:e.title}),Object(r.jsxs)(y,{className:"text-muted",children:[e.subtitle,e.quantity&&Object(r.jsxs)("span",{children:["\xa0*\xa0",e.quantity]})]})]}),Object(r.jsx)("div",{className:"".concat("rtl"===t.direction?"text-left":"text-right"),children:Object(r.jsx)("span",{children:Object(x.b)(e.price*e.quantity)})})]}),Object(r.jsx)(o.a,{className:"m-0"})]},n)})),Object(r.jsx)(o.a,{className:"m-0"}),Object(r.jsx)(u.a,{children:Object(r.jsxs)(w,{className:"".concat("rtl"===t.direction?"mr-auto":"ml-auto"),children:[Object(r.jsxs)(u.a,{type:"flex",justify:"space-between",align:"middle",className:"py-4",children:[Object(r.jsx)("small",{className:"".concat("rtl"===t.direction?"ml-auto":"mr-auto"," text-muted"),children:"Subtotal"}),Object(r.jsx)("span",{className:"".concat("rtl"===t.direction?"text-left":"text-right"),children:Object(x.b)(n())})]}),Object(r.jsx)(o.a,{className:"m-0"}),Object(r.jsxs)(u.a,{type:"flex",justify:"space-between",align:"middle",className:"py-4",children:[Object(r.jsx)("small",{className:"".concat("rtl"===t.direction?"ml-auto":"mr-auto"," text-muted"),children:"Tax"}),Object(r.jsxs)("span",{children:[Object(r.jsxs)("small",{className:"text-muted",children:["@ ",15,"% - "]}),Object(r.jsx)("span",{children:Object(x.b)(c())})]})]}),Object(r.jsx)(o.a,{className:"m-0"}),Object(r.jsxs)(u.a,{type:"flex",justify:"space-between",align:"middle",className:"py-4",children:[Object(r.jsx)("small",{className:"".concat("rtl"===t.direction?"ml-auto":"mr-auto"," text-muted"),children:"Discount"}),Object(r.jsxs)("span",{children:[Object(r.jsx)("small",{className:"text-muted",children:"0% off - "}),Object(r.jsx)("span",{children:Object(x.b)(0)})]})]}),Object(r.jsx)(o.a,{className:"m-0 bg-primary"}),Object(r.jsxs)(u.a,{type:"flex",justify:"space-between",align:"middle",className:"py-4",children:[Object(r.jsx)("small",{className:"".concat("rtl"===t.direction?"ml-auto":"mr-auto"," text-muted"),children:"Total"}),Object(r.jsx)("strong",{children:Object(x.b)(n()+c())})]}),Object(r.jsx)(o.a,{className:"m-0 bg-primary"})]})})]})})]}),Object(r.jsx)("div",{className:"my-5 text-center",children:Object(r.jsx)(a.a,{type:"primary",className:"px-5",children:"Pay Now"})})]})},y=Object(p.c)("small").withConfig({displayName:"Invoice___StyledSmall",componentId:"sc-iealgm-0"})(["display:block;"]),w=Object(p.c)("div").withConfig({displayName:"Invoice___StyledDiv",componentId:"sc-iealgm-1"})(["display:block;width:100%;max-width:400px;"]);t.default=function(){return Object(r.jsx)(f,{})}},wojo:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/extras/invoice",function(){return n("rZDb")}])}},[["wojo",0,1,2,3,4,5,6,7,8,13,16]]]);