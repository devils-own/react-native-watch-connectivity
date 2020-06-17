/*! For license information please see 22.22da89c7.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{123:function(e,t,a){"use strict";var n=a(0),r=a(36);t.a=function(){return Object(n.useContext)(r.a)}},124:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var c=typeof n;if("string"===c||"number"===c)e.push(n);else if(Array.isArray(n)&&n.length){var l=r.apply(null,n);l&&e.push(l)}else if("object"===c)for(var s in n)a.call(n,s)&&n[s]&&e.push(s)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},125:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(123);function r(e){const{siteConfig:t}=Object(n.a)(),{baseUrl:a="/"}=t||{};if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?a+e.slice(1):a+e}},126:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(18),l=a(127),s=a(33),o=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};t.a=function(e){var{isNavLink:t}=e,a=o(e,["isNavLink"]);const{to:i,href:u}=a,d=i||u,h=Object(l.a)(d),f=Object(n.useRef)(!1),m=t?c.c:c.b,b=s.a.canUseIntersectionObserver;let v;return Object(n.useEffect)(()=>(!b&&h&&window.docusaurus.prefetch(d),()=>{b&&v&&v.disconnect()}),[d,b,h]),d&&h&&!d.startsWith("#")?r.a.createElement(m,Object.assign({},a,{onMouseEnter:()=>{f.current||(window.docusaurus.preload(d),f.current=!0)},innerRef:e=>{var t,a;b&&e&&h&&(t=e,a=()=>{window.docusaurus.prefetch(d)},v=new window.IntersectionObserver(e=>{e.forEach(e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(v.unobserve(t),v.disconnect(),a())})}),v.observe(t))},to:d})):r.a.createElement("a",Object.assign({href:d},!h&&{target:"_blank",rel:"noopener noreferrer"},a))}},127:function(e,t,a){"use strict";function n(e){return!1===/^(https?:|\/\/|mailto:|tel:)/.test(e)}a.d(t,"a",(function(){return n}))},128:function(e,t,a){"use strict";var n=a(0),r=a(129);t.a=function(){return Object(n.useContext)(r.a)}},129:function(e,t,a){"use strict";var n=a(0);const r=a.n(n).a.createContext({isDarkTheme:!1,setLightTheme:()=>{},setDarkTheme:()=>{}});t.a=r},130:function(e,t,a){"use strict";var n=a(18);a.d(t,"a",(function(){return n.d})),a.d(t,"b",(function(){return n.e}))},131:function(e,t,a){"use strict";var n=a(0),r=a(33);const c=()=>({scrollX:r.a.canUseDOM?window.pageXOffset:0,scrollY:r.a.canUseDOM?window.pageYOffset:0});t.a=(e,t=[])=>{const[a,r]=Object(n.useState)(c()),l=()=>{const t=c();r(t),e&&e(t)};return Object(n.useEffect)(()=>(window.addEventListener("scroll",l),()=>window.removeEventListener("scroll",l,{passive:!0})),t),a}},132:function(e,t,a){"use strict";var n=a(0);t.a=function(e=!0){Object(n.useEffect)(()=>(document.body.style.overflow=e?"hidden":"visible",()=>{document.body.style.overflow="visible"}),[e])}},133:function(e,t,a){"use strict";var n=a(123),r=a(128),c=a(125),l=a(127);t.a=()=>{const{siteConfig:{themeConfig:{navbar:{logo:e={}}={}}}={}}=Object(n.a)(),{isDarkTheme:t}=Object(r.a)(),a=Object(c.a)(e.href||"/");let s={};e.target?s={target:e.target}:Object(l.a)(a)||(s={rel:"noopener noreferrer",target:"_blank"});const o=e.srcDark&&t?e.srcDark:e.src;return{logoLink:a,logoLinkProps:s,logoImageUrl:Object(c.a)(o),logoAlt:e.alt}}},135:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),c=a(0),l=h(c),s=h(a(124)),o=h(a(8)),i=h(a(136)),u=h(a(137)),d=a(138);function h(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handleClick=a.handleClick.bind(a),a.handleTouchStart=a.handleTouchStart.bind(a),a.handleTouchMove=a.handleTouchMove.bind(a),a.handleTouchEnd=a.handleTouchEnd.bind(a),a.handleFocus=a.handleFocus.bind(a),a.handleBlur=a.handleBlur.bind(a),a.previouslyChecked=!(!e.checked&&!e.defaultChecked),a.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var a=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:a})}},{key:"handleTouchStart",value:function(e){this.startX=(0,d.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,d.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var a=(0,d.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>a?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<a&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var a=this.props.icons;return a?void 0===a[e]?t.defaultProps.icons[e]:a[e]:null}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,r=(t.icons,function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["className","icons"])),c=(0,s.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},a);return l.default.createElement("div",{className:c,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},l.default.createElement("div",{className:"react-toggle-track"},l.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),l.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),l.default.createElement("div",{className:"react-toggle-thumb"}),l.default.createElement("input",n({},r,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(c.PureComponent);t.default=f,f.displayName="Toggle",f.defaultProps={icons:{checked:l.default.createElement(i.default,null),unchecked:l.default.createElement(u.default,null)}},f.propTypes={checked:o.default.bool,disabled:o.default.bool,defaultChecked:o.default.bool,onChange:o.default.func,onFocus:o.default.func,onBlur:o.default.func,className:o.default.string,name:o.default.string,value:o.default.string,id:o.default.string,"aria-labelledby":o.default.string,"aria-label":o.default.string,icons:o.default.oneOfType([o.default.bool,o.default.shape({checked:o.default.node,unchecked:o.default.node})])}},136:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},c.default.createElement("title",null,"switch-check"),c.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},137:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},c.default.createElement("title",null,"switch-x"),c.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},138:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var a=t[0];return{x:a.clientX,y:a.clientY}}var n=e.pageX;if(void 0!==n)return{x:n,y:e.pageY}}return{x:0,y:0}}},139:function(e,t,a){"use strict";var n=a(2),r=a(0),c=a.n(r),l=a(124),s=a.n(l),o=a(126),i=a(123),u=a(125),d=a(94),h=a.n(d);function f({to:e,href:t,label:a,prependBaseUrlToHref:r,...l}){const s=Object(u.a)(e),i=Object(u.a)(t,!0);return c.a.createElement(o.a,Object(n.a)({className:"footer__link-item"},t?{target:"_blank",rel:"noopener noreferrer",href:r?i:t}:{to:s},l),a)}const m=({url:e,alt:t})=>c.a.createElement("img",{className:"footer__logo",alt:t,src:e});t.a=function(){const e=Object(i.a)(),{siteConfig:t={}}=e,{themeConfig:a={}}=t,{footer:n}=a,{copyright:r,links:l=[],logo:o={}}=n||{},d=Object(u.a)(o.src);return n?c.a.createElement("footer",{className:s()("footer",{"footer--dark":"dark"===n.style})},c.a.createElement("div",{className:"container"},l&&l.length>0&&c.a.createElement("div",{className:"row footer__links"},l.map((e,t)=>c.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?c.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?c.a.createElement("ul",{className:"footer__items"},e.items.map((e,t)=>e.html?c.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):c.a.createElement("li",{key:e.href||e.to,className:"footer__item"},c.a.createElement(f,e)))):null))),(o||r)&&c.a.createElement("div",{className:"text--center"},o&&o.src&&c.a.createElement("div",{className:"margin-bottom--sm"},o.href?c.a.createElement("a",{href:o.href,target:"_blank",rel:"noopener noreferrer",className:h.a.footerLogoLink},c.a.createElement(m,{alt:o.alt,url:d})):c.a.createElement(m,{alt:o.alt,url:d})),c.a.createElement("div",{dangerouslySetInnerHTML:{__html:r}})))):null}},140:function(e,t,a){"use strict";var n=a(2),r=a(0),c=a.n(r),l=a(124),s=a.n(l),o=a(126),i=a(123),u=a(125),d=()=>null,h=a(135),f=a.n(h),m=a(92),b=a.n(m);const v=()=>c.a.createElement("span",{className:s()(b.a.toggle,b.a.moon)}),p=()=>c.a.createElement("span",{className:s()(b.a.toggle,b.a.sun)});var g=function(e){const{isClient:t}=Object(i.a)();return c.a.createElement(f.a,Object(n.a)({disabled:!t,icons:{checked:c.a.createElement(v,null),unchecked:c.a.createElement(p,null)}},e))},k=a(128),_=a(130);var E=function(e){const[t,a]=Object(r.useState)(e);return Object(r.useEffect)(()=>{const e=()=>a(window.location.hash);return window.addEventListener("hashchange",e),()=>window.removeEventListener("hashchange",e)},[]),[t,a]},O=a(131);var y=e=>{const[t,a]=Object(r.useState)(!0),[n,c]=Object(r.useState)(!1),[l,s]=Object(r.useState)(0),[o,i]=Object(r.useState)(0),u=Object(r.useCallback)(e=>{null!==e&&i(e.getBoundingClientRect().height)},[]),d=Object(_.b)(),[h,f]=E(d.hash);return Object(O.a)(({scrollY:t})=>{if(!e)return;if(0===t&&a(!0),t<o)return;if(n)return c(!1),a(!1),void s(t);const r=document.documentElement.scrollHeight-o,i=window.innerHeight;l&&t>=l?a(!1):t+i<r&&a(!0),s(t)},[l,o]),Object(r.useEffect)(()=>{e&&(a(!0),f(d.hash))},[d]),Object(r.useEffect)(()=>{e&&h&&c(!0)},[h]),{navbarRef:u,isNavbarVisible:t}},j=a(132),w=a(133),N=a(93),C=a.n(N);function T({activeBasePath:e,activeBaseRegex:t,to:a,href:r,label:l,activeClassName:s="navbar__link--active",prependBaseUrlToHref:i,...d}){const h=Object(u.a)(a),f=Object(u.a)(e),m=Object(u.a)(r,!0);return c.a.createElement(o.a,Object(n.a)({},r?{target:"_blank",rel:"noopener noreferrer",href:i?m:r}:{isNavLink:!0,activeClassName:s,to:h,...e||t?{isActive:(e,a)=>t?new RegExp(t).test(a.pathname):a.pathname.startsWith(f)}:null},d),l)}function x({items:e,position:t,className:a,...r}){const l=(e,t=!1)=>s()({"navbar__item navbar__link":!t,dropdown__link:t},e);return e?c.a.createElement("div",{className:s()("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===t,"dropdown--right":"right"===t})},c.a.createElement(T,Object(n.a)({className:l(a)},r,{onClick:e=>e.preventDefault(),onKeyDown:e=>{"Enter"===e.key&&e.target.parentNode.classList.toggle("dropdown--show")}}),r.label),c.a.createElement("ul",{className:"dropdown__menu"},e.map(({className:e,...t},a)=>c.a.createElement("li",{key:a},c.a.createElement(T,Object(n.a)({activeClassName:"dropdown__link--active",className:l(e,!0)},t)))))):c.a.createElement(T,Object(n.a)({className:l(a)},r))}function S({items:e,position:t,className:a,...r}){const l=(e,t=!1)=>s()("menu__link",{"menu__link--sublist":t},e);return e?c.a.createElement("li",{className:"menu__list-item"},c.a.createElement(T,Object(n.a)({className:l(a,!0)},r),r.label),c.a.createElement("ul",{className:"menu__list"},e.map(({className:e,...t},a)=>c.a.createElement("li",{className:"menu__list-item",key:a},c.a.createElement(T,Object(n.a)({activeClassName:"menu__link--active",className:l(e)},t,{onClick:r.onClick})))))):c.a.createElement("li",{className:"menu__list-item"},c.a.createElement(T,Object(n.a)({className:l(a)},r)))}t.a=function(){const{siteConfig:{themeConfig:{navbar:{title:e,links:t=[],hideOnScroll:a=!1}={},disableDarkMode:l=!1}},isClient:u}=Object(i.a)(),[h,f]=Object(r.useState)(!1),[m,b]=Object(r.useState)(!1),{isDarkTheme:v,setLightTheme:p,setDarkTheme:_}=Object(k.a)(),{navbarRef:E,isNavbarVisible:O}=y(a),{logoLink:N,logoLinkProps:T,logoImageUrl:L,logoAlt:M}=Object(w.a)();Object(j.a)(h);const P=Object(r.useCallback)(()=>{f(!0)},[f]),D=Object(r.useCallback)(()=>{f(!1)},[f]),B=Object(r.useCallback)(e=>e.target.checked?_():p(),[p,_]);return c.a.createElement("nav",{ref:E,className:s()("navbar","navbar--light","navbar--fixed-top",{"navbar-sidebar--show":h,[C.a.navbarHideable]:a,[C.a.navbarHidden]:!O})},c.a.createElement("div",{className:"navbar__inner"},c.a.createElement("div",{className:"navbar__items"},null!=t&&0!==t.length&&c.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:P,onKeyDown:P},c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},c.a.createElement("title",null,"Menu"),c.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),c.a.createElement(o.a,Object(n.a)({className:"navbar__brand",to:N},T),null!=L&&c.a.createElement("img",{key:u,className:"navbar__logo",src:L,alt:M}),null!=e&&c.a.createElement("strong",{className:s()("navbar__title",{[C.a.hideLogoText]:m})},e)),t.filter(e=>"left"===e.position).map((e,t)=>c.a.createElement(x,Object(n.a)({},e,{key:t})))),c.a.createElement("div",{className:"navbar__items navbar__items--right"},t.filter(e=>"right"===e.position).map((e,t)=>c.a.createElement(x,Object(n.a)({},e,{key:t}))),!l&&c.a.createElement(g,{className:C.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:v,onChange:B}),c.a.createElement(d,{handleSearchBarToggle:b,isSearchBarExpanded:m}))),c.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:D}),c.a.createElement("div",{className:"navbar-sidebar"},c.a.createElement("div",{className:"navbar-sidebar__brand"},c.a.createElement(o.a,Object(n.a)({className:"navbar__brand",onClick:D,to:N},T),null!=L&&c.a.createElement("img",{key:u,className:"navbar__logo",src:L,alt:M}),null!=e&&c.a.createElement("strong",{className:"navbar__title"},e)),!l&&h&&c.a.createElement(g,{"aria-label":"Dark mode toggle in sidebar",checked:v,onChange:B})),c.a.createElement("div",{className:"navbar-sidebar__items"},c.a.createElement("div",{className:"menu"},c.a.createElement("ul",{className:"menu__list"},t.map((e,t)=>c.a.createElement(S,Object(n.a)({},e,{onClick:D,key:t}))))))))}}}]);