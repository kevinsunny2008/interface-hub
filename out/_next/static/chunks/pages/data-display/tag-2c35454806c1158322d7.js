_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[75],{EQeY:function(e,t,n){"use strict";var c=n("284h"),r=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n("lSNA")),l=r(n("pVnL")),o=r(n("J4zp")),i=c(n("q1tI")),s=r(n("TSYQ")),u=r(n("BGR+")),f=r(n("V/uB")),d=r(n("QG2g")),j=n("vgIT"),b=n("dANV"),h=r(n("ev5A")),p=function(e,t){var n={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&t.indexOf(c)<0&&(n[c]=e[c]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(c=Object.getOwnPropertySymbols(e);r<c.length;r++)t.indexOf(c[r])<0&&Object.prototype.propertyIsEnumerable.call(e,c[r])&&(n[c[r]]=e[c[r]])}return n},O=new RegExp("^(".concat(b.PresetColorTypes.join("|"),")(-inverse)?$")),v=new RegExp("^(".concat(b.PresetStatusColorTypes.join("|"),")$")),y=function(e,t){var n,c=e.prefixCls,r=e.className,d=e.style,b=e.children,y=e.icon,g=e.color,x=e.onClose,m=e.closeIcon,C=e.closable,P=void 0!==C&&C,w=p(e,["prefixCls","className","style","children","icon","color","onClose","closeIcon","closable"]),k=i.useContext(j.ConfigContext),R=k.getPrefixCls,S=k.direction,T=i.useState(!0),N=(0,o.default)(T,2),E=N[0],I=N[1];i.useEffect((function(){"visible"in w&&I(w.visible)}),[w.visible]);var _=function(){return!!g&&(O.test(g)||v.test(g))},D=(0,l.default)({backgroundColor:g&&!_()?g:void 0},d),V=_(),M=R("tag",c),q=(0,s.default)(M,(n={},(0,a.default)(n,"".concat(M,"-").concat(g),V),(0,a.default)(n,"".concat(M,"-has-color"),g&&!V),(0,a.default)(n,"".concat(M,"-hidden"),!E),(0,a.default)(n,"".concat(M,"-rtl"),"rtl"===S),n),r),A=function(e){e.stopPropagation(),x&&x(e),e.defaultPrevented||"visible"in w||I(!1)},B="onClick"in w||b&&"a"===b.type,Q=(0,u.default)(w,["visible"]),U=y||null,z=U?i.createElement(i.Fragment,null,U,i.createElement("span",null,b)):b,J=i.createElement("span",(0,l.default)({},Q,{ref:t,className:q,style:D}),z,P?m?i.createElement("span",{className:"".concat(M,"-close-icon"),onClick:A},m):i.createElement(f.default,{className:"".concat(M,"-close-icon"),onClick:A}):null);return B?i.createElement(h.default,null,J):J},g=i.forwardRef(y);g.displayName="Tag",g.CheckableTag=d.default;var x=g;t.default=x},FixV:function(e,t,n){"use strict";n.r(t);var c=n("nKUr"),r=n("N9UN"),a=n.n(r),l=n("UIqZ"),o=n.n(l),i=n("1OyB"),s=n("vuIU"),u=n("Ji7U"),f=n("md7G"),d=n("foSv"),j=n("EQeY"),b=n.n(j);function h(e){console.log(e)}function p(e){e.preventDefault(),console.log("Clicked! But prevent default.")}var O=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)(b.a,{children:"Tag 1"}),Object(c.jsx)(b.a,{children:Object(c.jsx)("a",{href:"https://github.com/ant-design/ant-design/issues/1862",children:"Link"})}),Object(c.jsx)(b.a,{closable:!0,onClose:h,children:"Tag 2"}),Object(c.jsx)(b.a,{closable:!0,onClose:p,children:"Prevent Default"})]})},v=n("JX7q"),y=n("rePB"),g=n("q1tI");function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){Object(y.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function C(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,c=Object(d.a)(e);if(t){var r=Object(d.a)(this).constructor;n=Reflect.construct(c,arguments,r)}else n=c.apply(this,arguments);return Object(f.a)(this,n)}}var P=b.a.CheckableTag,w=function(e){Object(u.a)(n,e);var t=C(n);function n(){var e;Object(i.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return e=t.call.apply(t,[this].concat(r)),Object(y.a)(Object(v.a)(e),"state",{checked:!0}),Object(y.a)(Object(v.a)(e),"handleChange",(function(t){e.setState({checked:t})})),e}return Object(s.a)(n,[{key:"render",value:function(){return Object(c.jsx)(P,m(m({},this.props),{},{checked:this.state.checked,onChange:this.handleChange}))}}]),n}(g.Component),k=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)(w,{children:"Tag1"}),Object(c.jsx)(w,{children:"Tag2"}),Object(c.jsx)(w,{children:"Tag3"})]})},R=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("p",{style:{marginBottom:16},children:"Presets:"}),Object(c.jsxs)("div",{children:[Object(c.jsx)(b.a,{color:"magenta",children:"magenta"}),Object(c.jsx)(b.a,{color:"red",children:"red"}),Object(c.jsx)(b.a,{color:"volcano",children:"volcano"}),Object(c.jsx)(b.a,{color:"orange",children:"orange"}),Object(c.jsx)(b.a,{color:"gold",children:"gold"}),Object(c.jsx)(b.a,{color:"lime",children:"lime"}),Object(c.jsx)(b.a,{color:"green",children:"green"}),Object(c.jsx)(b.a,{color:"cyan",children:"cyan"}),Object(c.jsx)(b.a,{color:"blue",children:"blue"}),Object(c.jsx)(b.a,{color:"geekblue",children:"geekblue"}),Object(c.jsx)(b.a,{color:"purple",children:"purple"})]}),Object(c.jsx)("p",{style:{margin:"16px 0"},children:"Custom:"}),Object(c.jsxs)("div",{children:[Object(c.jsx)(b.a,{color:"#f50",children:"#f50"}),Object(c.jsx)(b.a,{color:"#2db7f5",children:"#2db7f5"}),Object(c.jsx)(b.a,{color:"#87d068",children:"#87d068"}),Object(c.jsx)(b.a,{color:"#108ee9",children:"#108ee9"})]})]})},S=n("Pbn2"),T=n.n(S),N=n("iJl9"),E=n.n(N),I=n("d1El"),_=n.n(I),D=n("KQm4");function V(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,c=Object(d.a)(e);if(t){var r=Object(d.a)(this).constructor;n=Reflect.construct(c,arguments,r)}else n=c.apply(this,arguments);return Object(f.a)(this,n)}}var M=function(e){Object(u.a)(n,e);var t=V(n);function n(){var e;Object(i.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return e=t.call.apply(t,[this].concat(r)),Object(y.a)(Object(v.a)(e),"state",{tags:["Unremovable","Tag 2","Tag 3"],inputVisible:!1,inputValue:""}),Object(y.a)(Object(v.a)(e),"handleClose",(function(t){var n=e.state.tags.filter((function(e){return e!==t}));console.log(n),e.setState({tags:n})})),Object(y.a)(Object(v.a)(e),"showInput",(function(){e.setState({inputVisible:!0},(function(){return e.input.focus()}))})),Object(y.a)(Object(v.a)(e),"handleInputChange",(function(t){e.setState({inputValue:t.target.value})})),Object(y.a)(Object(v.a)(e),"handleInputConfirm",(function(){var t=e.state,n=t.inputValue,c=t.tags;n&&-1===c.indexOf(n)&&(c=[].concat(Object(D.a)(c),[n])),console.log(c),e.setState({tags:c,inputVisible:!1,inputValue:""})})),Object(y.a)(Object(v.a)(e),"saveInputRef",(function(t){return e.input=t})),e}return Object(s.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.tags,r=t.inputVisible,a=t.inputValue;return Object(c.jsxs)("div",{children:[n.map((function(t,n){var r=t.length>20,a=Object(c.jsx)(b.a,{closable:0!==n,afterClose:function(){return e.handleClose(t)},children:r?"".concat(t.slice(0,20),"..."):t},t);return r?Object(c.jsx)(_.a,{title:t,children:a},t):a})),r&&Object(c.jsx)(E.a,{ref:this.saveInputRef,type:"text",size:"small",style:{width:78},value:a,onChange:this.handleInputChange,onBlur:this.handleInputConfirm,onPressEnter:this.handleInputConfirm}),!r&&Object(c.jsxs)(b.a,{onClick:this.showInput,style:{background:"#fff",borderStyle:"dashed"},children:[Object(c.jsx)(T.a,{type:"plus"})," New Tag"]})]})}}]),n}(g.Component),q=n("4IMT"),A=n.n(q);function B(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,c=Object(d.a)(e);if(t){var r=Object(d.a)(this).constructor;n=Reflect.construct(c,arguments,r)}else n=c.apply(this,arguments);return Object(f.a)(this,n)}}var Q=function(e){Object(u.a)(n,e);var t=B(n);function n(){var e;Object(i.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return e=t.call.apply(t,[this].concat(r)),Object(y.a)(Object(v.a)(e),"state",{visible:!0}),e}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return Object(c.jsxs)("div",{children:[Object(c.jsx)(b.a,{closable:!0,visible:this.state.visible,onClose:function(){return e.setState({visible:!1})},children:"Movies"}),Object(c.jsx)("br",{}),Object(c.jsx)(A.a,{size:"small",onClick:function(){return e.setState({visible:!e.state.visible})},children:"Toggle"})]})}}]),n}(g.Component);function U(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,c=Object(d.a)(e);if(t){var r=Object(d.a)(this).constructor;n=Reflect.construct(c,arguments,r)}else n=c.apply(this,arguments);return Object(f.a)(this,n)}}var z=b.a.CheckableTag,J=["Movies","Books","Music","Sports"],Y=function(e){Object(u.a)(n,e);var t=U(n);function n(){var e;Object(i.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return e=t.call.apply(t,[this].concat(r)),Object(y.a)(Object(v.a)(e),"state",{selectedTags:[]}),e}return Object(s.a)(n,[{key:"handleChange",value:function(e,t){var n=this.state.selectedTags,c=t?[].concat(Object(D.a)(n),[e]):n.filter((function(t){return t!==e}));console.log("You are interested in: ",c),this.setState({selectedTags:c})}},{key:"render",value:function(){var e=this,t=this.state.selectedTags;return Object(c.jsxs)("div",{children:[Object(c.jsx)("h6",{style:{marginRight:8,display:"inline"},children:"Categories:"}),J.map((function(n){return Object(c.jsx)(z,{checked:t.indexOf(n)>-1,onChange:function(t){return e.handleChange(n,t)},children:n},n)}))]})}}]),n}(g.Component);function L(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,c=Object(d.a)(e);if(t){var r=Object(d.a)(this).constructor;n=Reflect.construct(c,arguments,r)}else n=c.apply(this,arguments);return Object(f.a)(this,n)}}var X=function(e){Object(u.a)(n,e);var t=L(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(c.jsxs)(a.a,{bodyStyle:{padding:0},id:"components-button-demo",children:[Object(c.jsx)(o.a,{orientation:"left",children:Object(c.jsx)("small",{children:"Basic"})}),Object(c.jsx)("div",{className:"p-4",children:Object(c.jsx)(O,{})}),Object(c.jsx)(o.a,{orientation:"left",children:Object(c.jsx)("small",{children:"Checkable"})}),Object(c.jsx)("div",{className:"p-4",children:Object(c.jsx)(k,{})}),Object(c.jsx)(o.a,{orientation:"left",children:Object(c.jsx)("small",{children:"Colorful"})}),Object(c.jsx)("div",{className:"p-4",children:Object(c.jsx)(R,{})}),Object(c.jsx)(o.a,{orientation:"left",children:Object(c.jsx)("small",{children:"Control"})}),Object(c.jsx)("div",{className:"p-4",children:Object(c.jsx)(M,{})}),Object(c.jsx)(o.a,{orientation:"left",children:Object(c.jsx)("small",{children:"Controlled"})}),Object(c.jsx)("div",{className:"p-4",children:Object(c.jsx)(Q,{})}),Object(c.jsx)(o.a,{orientation:"left",children:Object(c.jsx)("small",{children:"Hot tags"})}),Object(c.jsx)("div",{className:"p-4",children:Object(c.jsx)(Y,{})})]})}}]),n}(g.Component);t.default=function(){return Object(c.jsx)(X,{})}},Pbn2:function(e,t,n){"use strict";var c=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n("m4nH")),a=function(){return(0,r.default)(!1,"Icon","Empty Icon"),null};t.default=a},QG2g:function(e,t,n){"use strict";var c=n("284h"),r=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n("pVnL")),l=r(n("lSNA")),o=c(n("q1tI")),i=r(n("TSYQ")),s=n("vgIT"),u=function(e,t){var n={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&t.indexOf(c)<0&&(n[c]=e[c]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(c=Object.getOwnPropertySymbols(e);r<c.length;r++)t.indexOf(c[r])<0&&Object.prototype.propertyIsEnumerable.call(e,c[r])&&(n[c[r]]=e[c[r]])}return n},f=function(e){var t,n=e.prefixCls,c=e.className,r=e.checked,f=e.onChange,d=e.onClick,j=u(e,["prefixCls","className","checked","onChange","onClick"]),b=(0,o.useContext(s.ConfigContext).getPrefixCls)("tag",n),h=(0,i.default)(b,(t={},(0,l.default)(t,"".concat(b,"-checkable"),!0),(0,l.default)(t,"".concat(b,"-checkable-checked"),r),t),c);return o.createElement("span",(0,a.default)({},j,{className:h,onClick:function(e){f&&f(!r),d&&d(e)}}))};t.default=f},UIqZ:function(e,t,n){"use strict";var c=n("284h"),r=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n("pVnL")),l=r(n("lSNA")),o=c(n("q1tI")),i=r(n("TSYQ")),s=n("vgIT"),u=function(e,t){var n={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&t.indexOf(c)<0&&(n[c]=e[c]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(c=Object.getOwnPropertySymbols(e);r<c.length;r++)t.indexOf(c[r])<0&&Object.prototype.propertyIsEnumerable.call(e,c[r])&&(n[c[r]]=e[c[r]])}return n},f=function(e){return o.createElement(s.ConfigConsumer,null,(function(t){var n,c=t.getPrefixCls,r=t.direction,s=e.prefixCls,f=e.type,d=void 0===f?"horizontal":f,j=e.orientation,b=void 0===j?"center":j,h=e.className,p=e.children,O=e.dashed,v=e.plain,y=u(e,["prefixCls","type","orientation","className","children","dashed","plain"]),g=c("divider",s),x=b.length>0?"-".concat(b):b,m=!!p,C=(0,i.default)(g,"".concat(g,"-").concat(d),(n={},(0,l.default)(n,"".concat(g,"-with-text"),m),(0,l.default)(n,"".concat(g,"-with-text").concat(x),m),(0,l.default)(n,"".concat(g,"-dashed"),!!O),(0,l.default)(n,"".concat(g,"-plain"),!!v),(0,l.default)(n,"".concat(g,"-rtl"),"rtl"===r),n),h);return o.createElement("div",(0,a.default)({className:C},y,{role:"separator"}),p&&o.createElement("span",{className:"".concat(g,"-inner-text")},p))}))};t.default=f},apAg:function(e,t,n){"use strict";var c=n("TqRt"),r=n("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n("q1tI")),l=c(n("bsht")),o=c(n("KQxl")),i=function(e,t){return a.createElement(o.default,Object.assign({},e,{ref:t,icon:l.default}))};i.displayName="SearchOutlined";var s=a.forwardRef(i);t.default=s},bsht:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"}}]},name:"search",theme:"outlined"}},sAXi:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/data-display/tag",function(){return n("FixV")}])},w6Tc:function(e,t,n){"use strict";var c;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=(c=n("apAg"))&&c.__esModule?c:{default:c};t.default=r,e.exports=r}},[["sAXi",0,1,2,3,4,5,6,7,8,9,14]]]);