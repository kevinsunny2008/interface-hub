_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[100],{ATwu:function(e,t,n){"use strict";var c=n("284h"),r=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=r(n("pVnL")),o=r(n("lSNA")),a=r(n("J4zp")),i=c(n("q1tI")),l=r(n("V/uB")),u=r(n("0G8d")),d=r(n("xddM")),f=r(n("ESPI")),j=r(n("Z/ur")),p=r(n("J84W")),b=r(n("sKbD")),m=r(n("72Ab")),x=r(n("kbBi")),O=r(n("8XRh")),h=r(n("TSYQ")),g=n("vgIT"),y=r(n("zu02")),v=r(n("Sm4I")),w=n("vCXI"),E=function(e,t){var n={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&t.indexOf(c)<0&&(n[c]=e[c]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(c=Object.getOwnPropertySymbols(e);r<c.length;r++)t.indexOf(c[r])<0&&Object.prototype.propertyIsEnumerable.call(e,c[r])&&(n[c[r]]=e[c[r]])}return n},I={success:p.default,info:m.default,error:x.default,warning:b.default},T={success:u.default,info:f.default,error:j.default,warning:d.default},N=function(e){var t,n=e.description,c=e.prefixCls,r=e.message,u=e.banner,d=e.className,f=void 0===d?"":d,j=e.style,p=e.onMouseEnter,b=e.onMouseLeave,m=e.onClick,x=e.afterClose,v=e.showIcon,N=e.closable,S=e.closeText,C=e.action,D=E(e,["description","prefixCls","message","banner","className","style","onMouseEnter","onMouseLeave","onClick","afterClose","showIcon","closable","closeText","action"]),_=i.useState(!1),P=(0,a.default)(_,2),W=P[0],M=P[1],k=i.useRef(),R=i.useContext(g.ConfigContext),q=R.getPrefixCls,A=R.direction,L=q("alert",c),J=function(e){var t;M(!0),null===(t=D.onClose)||void 0===t||t.call(D,e)},V=!!S||N,B=function(){var e=D.type;return void 0!==e?e:u?"warning":"info"}(),U=!(!u||void 0!==v)||v,X=(0,h.default)(L,"".concat(L,"-").concat(B),(t={},(0,o.default)(t,"".concat(L,"-with-description"),!!n),(0,o.default)(t,"".concat(L,"-no-icon"),!U),(0,o.default)(t,"".concat(L,"-banner"),!!u),(0,o.default)(t,"".concat(L,"-rtl"),"rtl"===A),t),f),H=(0,y.default)(D);return i.createElement(O.default,{visible:!W,motionName:"".concat(L,"-motion"),motionAppear:!1,motionEnter:!1,onLeaveStart:function(e){return{maxHeight:e.offsetHeight}},onLeaveEnd:x},(function(e){var t=e.className,c=e.style;return i.createElement("div",(0,s.default)({ref:k,"data-show":!W,className:(0,h.default)(X,t),style:(0,s.default)((0,s.default)({},j),c),onMouseEnter:p,onMouseLeave:b,onClick:m,role:"alert"},H),U?function(){var e=D.icon,t=(n?T:I)[B]||null;return e?(0,w.replaceElement)(e,i.createElement("span",{className:"".concat(L,"-icon")},e),(function(){return{className:(0,h.default)("".concat(L,"-icon"),(0,o.default)({},e.props.className,e.props.className))}})):i.createElement(t,{className:"".concat(L,"-icon")})}():null,i.createElement("div",{className:"".concat(L,"-content")},i.createElement("div",{className:"".concat(L,"-message")},r),i.createElement("div",{className:"".concat(L,"-description")},n)),C?i.createElement("div",{className:"".concat(L,"-action")},C):null,V?i.createElement("button",{type:"button",onClick:J,className:"".concat(L,"-close-icon"),tabIndex:0},S?i.createElement("span",{className:"".concat(L,"-close-text")},S):i.createElement(l.default,null)):null)}))};N.ErrorBoundary=v.default;var S=N;t.default=S},PHEG:function(e,t,n){"use strict";n.r(t);var c=n("nKUr"),r=n("9xET"),s=n.n(r),o=n("ZPTe"),a=n.n(o),i=n("N9UN"),l=n.n(i),u=n("UIqZ"),d=n.n(u),f=n("1OyB"),j=n("vuIU"),p=n("Ji7U"),b=n("md7G"),m=n("foSv"),x=n("ATwu"),O=n.n(x),h=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)(O.a,{message:"Warning text",banner:!0}),Object(c.jsx)(O.a,{message:"Very long warning text warning text text text text text text text",banner:!0,closable:!0}),Object(c.jsx)(O.a,{showIcon:!1,message:"Warning text without icon",banner:!0}),Object(c.jsx)(O.a,{type:"error",message:"Error text",banner:!0})]})},g=function(){return Object(c.jsx)(O.a,{message:"Success Text",type:"success"})},y=function(e){console.log(e,"I was closed.")},v=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)(O.a,{message:"Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text",type:"warning",closable:!0,onClose:y}),Object(c.jsx)(O.a,{message:"Error Text",description:"Error Description Error Description Error Description Error Description Error Description Error Description",type:"error",closable:!0,onClose:y})]})},w=function(){return Object(c.jsx)(O.a,{message:"Info Text",type:"info",closeText:"Close Now"})},E=n("q1tI"),I=n("Pbn2"),T=n.n(I),N=Object(c.jsx)(T.a,{type:"smile"}),S=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)(O.a,{icon:N,message:"showIcon = false",type:"success"}),Object(c.jsx)(O.a,{icon:N,message:"Success Tips",type:"success",showIcon:!0}),Object(c.jsx)(O.a,{icon:N,message:"Informational Notes",type:"info",showIcon:!0}),Object(c.jsx)(O.a,{icon:N,message:"Warning",type:"warning",showIcon:!0}),Object(c.jsx)(O.a,{icon:N,message:"Error",type:"error",showIcon:!0}),Object(c.jsx)(O.a,{icon:N,message:"Success Tips",description:"Detailed description and advices about successful copywriting.",type:"success",showIcon:!0}),Object(c.jsx)(O.a,{icon:N,message:"Informational Notes",description:"Additional description and informations about copywriting.",type:"info",showIcon:!0}),Object(c.jsx)(O.a,{icon:N,message:"Warning",description:"This is a warning notice about copywriting.",type:"warning",showIcon:!0}),Object(c.jsx)(O.a,{icon:N,message:"Error",description:"This is an error message about copywriting.",type:"error",showIcon:!0})]})},C=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)(O.a,{message:"Success Text",description:"Success Description Success Description Success Description",type:"success"}),Object(c.jsx)(O.a,{message:"Info Text",description:"Info Description Info Description Info Description Info Description",type:"info"}),Object(c.jsx)(O.a,{message:"Warning Text",description:"Warning Description Warning Description Warning Description Warning Description",type:"warning"}),Object(c.jsx)(O.a,{message:"Error Text",description:"Error Description Error Description Error Description Error Description",type:"error"})]})},D=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)(O.a,{message:"Success Tips",type:"success",showIcon:!0}),Object(c.jsx)(O.a,{message:"Informational Notes",type:"info",showIcon:!0}),Object(c.jsx)(O.a,{message:"Warning",type:"warning",showIcon:!0}),Object(c.jsx)(O.a,{message:"Error",type:"error",showIcon:!0}),Object(c.jsx)(O.a,{message:"Success Tips",description:"Detailed description and advices about successful copywriting.",type:"success",showIcon:!0}),Object(c.jsx)(O.a,{message:"Informational Notes",description:"Additional description and informations about copywriting.",type:"info",showIcon:!0}),Object(c.jsx)(O.a,{message:"Warning",description:"This is a warning notice about copywriting.",type:"warning",showIcon:!0}),Object(c.jsx)(O.a,{message:"Error",description:"This is an error message about copywriting.",type:"error",showIcon:!0})]})},_=n("JX7q"),P=n("rePB");function W(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,c=Object(m.a)(e);if(t){var r=Object(m.a)(this).constructor;n=Reflect.construct(c,arguments,r)}else n=c.apply(this,arguments);return Object(b.a)(this,n)}}var M=function(e){Object(p.a)(n,e);var t=W(n);function n(){var e;Object(f.a)(this,n);for(var c=arguments.length,r=new Array(c),s=0;s<c;s++)r[s]=arguments[s];return e=t.call.apply(t,[this].concat(r)),Object(P.a)(Object(_.a)(e),"state",{visible:!0}),Object(P.a)(Object(_.a)(e),"handleClose",(function(){e.setState({visible:!1})})),e}return Object(j.a)(n,[{key:"render",value:function(){return Object(c.jsxs)("div",{children:[this.state.visible?Object(c.jsx)(O.a,{message:"Alert Message Text",type:"success",closable:!0,afterClose:this.handleClose}):null,Object(c.jsx)("p",{children:"placeholder text here"})]})}}]),n}(E.Component),k=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)(O.a,{message:"Success Text",type:"success"}),Object(c.jsx)(O.a,{message:"Info Text",type:"info"}),Object(c.jsx)(O.a,{message:"Warning Text",type:"warning"}),Object(c.jsx)(O.a,{message:"Error Text",type:"error"})]})};function R(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,c=Object(m.a)(e);if(t){var r=Object(m.a)(this).constructor;n=Reflect.construct(c,arguments,r)}else n=c.apply(this,arguments);return Object(b.a)(this,n)}}var q=function(e){Object(p.a)(n,e);var t=R(n);function n(){return Object(f.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(c.jsx)(s.a,{gutter:16,id:"components-alert-demo",children:Object(c.jsx)(a.a,{lg:24,md:24,children:Object(c.jsxs)(l.a,{bodyStyle:{padding:0},children:[Object(c.jsx)("div",{className:"p-4",children:Object(c.jsx)(g,{})}),Object(c.jsx)(d.a,{orientation:"left",children:Object(c.jsx)("small",{children:"Banner"})}),Object(c.jsx)("div",{className:"p-4",children:Object(c.jsx)(h,{})}),Object(c.jsx)(d.a,{orientation:"left",children:Object(c.jsx)("small",{children:"Closable"})}),Object(c.jsx)("div",{className:"p-4",children:Object(c.jsx)(v,{})}),Object(c.jsx)(d.a,{orientation:"left",children:Object(c.jsx)("small",{children:"Close text"})}),Object(c.jsx)("div",{className:"p-4",children:Object(c.jsx)(w,{})}),Object(c.jsx)(d.a,{orientation:"left",children:Object(c.jsx)("small",{children:"Custom icon"})}),Object(c.jsx)("div",{className:"p-4",children:Object(c.jsx)(S,{})}),Object(c.jsx)(d.a,{orientation:"left",children:Object(c.jsx)("small",{children:"Description"})}),Object(c.jsx)("div",{className:"p-4",children:Object(c.jsx)(C,{})}),Object(c.jsx)(d.a,{orientation:"left",children:Object(c.jsx)("small",{children:"Icon"})}),Object(c.jsx)("div",{className:"p-4",children:Object(c.jsx)(D,{})}),Object(c.jsx)(d.a,{orientation:"left",children:Object(c.jsx)("small",{children:"Smooth closed"})}),Object(c.jsx)("div",{className:"p-4",children:Object(c.jsx)(M,{})}),Object(c.jsx)(d.a,{orientation:"left",children:Object(c.jsx)("small",{children:"Style"})}),Object(c.jsx)("div",{className:"p-4",children:Object(c.jsx)(k,{})})]})})})}}]),n}(E.Component);t.default=function(){return Object(c.jsx)(q,{})}},Pbn2:function(e,t,n){"use strict";var c=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n("m4nH")),s=function(){return(0,r.default)(!1,"Icon","Empty Icon"),null};t.default=s},SjMD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/feedback/alert",function(){return n("PHEG")}])},Sm4I:function(e,t,n){"use strict";var c=n("284h"),r=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=r(n("lwsE")),o=r(n("W8MJ")),a=r(n("7W2i")),i=r(n("LQ03")),l=c(n("q1tI")),u=r(n("ATwu")),d=function(e){(0,a.default)(n,e);var t=(0,i.default)(n);function n(){var e;return(0,s.default)(this,n),(e=t.apply(this,arguments)).state={error:void 0,info:{componentStack:""}},e}return(0,o.default)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({error:e,info:t})}},{key:"render",value:function(){var e=this.props,t=e.message,n=e.description,c=e.children,r=this.state,s=r.error,o=r.info,a=o&&o.componentStack?o.componentStack:null,i="undefined"===typeof t?(s||"").toString():t,d="undefined"===typeof n?a:n;return s?l.createElement(u.default,{type:"error",message:i,description:l.createElement("pre",null,d)}):c}}]),n}(l.Component);t.default=d},UIqZ:function(e,t,n){"use strict";var c=n("284h"),r=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=r(n("pVnL")),o=r(n("lSNA")),a=c(n("q1tI")),i=r(n("TSYQ")),l=n("vgIT"),u=function(e,t){var n={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&t.indexOf(c)<0&&(n[c]=e[c]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(c=Object.getOwnPropertySymbols(e);r<c.length;r++)t.indexOf(c[r])<0&&Object.prototype.propertyIsEnumerable.call(e,c[r])&&(n[c[r]]=e[c[r]])}return n},d=function(e){return a.createElement(l.ConfigConsumer,null,(function(t){var n,c=t.getPrefixCls,r=t.direction,l=e.prefixCls,d=e.type,f=void 0===d?"horizontal":d,j=e.orientation,p=void 0===j?"center":j,b=e.className,m=e.children,x=e.dashed,O=e.plain,h=u(e,["prefixCls","type","orientation","className","children","dashed","plain"]),g=c("divider",l),y=p.length>0?"-".concat(p):p,v=!!m,w=(0,i.default)(g,"".concat(g,"-").concat(f),(n={},(0,o.default)(n,"".concat(g,"-with-text"),v),(0,o.default)(n,"".concat(g,"-with-text").concat(y),v),(0,o.default)(n,"".concat(g,"-dashed"),!!x),(0,o.default)(n,"".concat(g,"-plain"),!!O),(0,o.default)(n,"".concat(g,"-rtl"),"rtl"===r),n),b);return a.createElement("div",(0,s.default)({className:w},h,{role:"separator"}),m&&a.createElement("span",{className:"".concat(g,"-inner-text")},m))}))};t.default=d},vCXI:function(e,t,n){"use strict";var c=n("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.replaceElement=o,t.cloneElement=function(e,t){return o(e,e,t)},t.isValidElement=void 0;var r=c(n("q1tI")),s=r.isValidElement;function o(e,t,n){return s(e)?r.cloneElement(e,"function"===typeof n?n(e.props||{}):n):t}t.isValidElement=s},zu02:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Object.keys(e).reduce((function(t,n){return"data-"!==n.substr(0,5)&&"aria-"!==n.substr(0,5)&&"role"!==n||"data-__"===n.substr(0,7)||(t[n]=e[n]),t}),{})}}},[["SjMD",0,1,2,3,4,5,6,7]]]);