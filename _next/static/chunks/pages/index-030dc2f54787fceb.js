(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(4369)}])},1551:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,u=[],a=!0,l=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(u.push(n.value),!t||u.length!==t);a=!0);}catch(i){l=!0,o=i}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return u}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u,a=(u=r(7294))&&u.__esModule?u:{default:u},l=r(1003),i=r(880),c=r(9246);function f(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s={};function d(e,t,r,n){if(e&&l.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;s[t+"%"+r+(o?"%"+o:"")]=!0}}var p=a.default.forwardRef((function(e,t){var r,n=e.legacyBehavior,u=void 0===n?!0!==Boolean(!1):n,p=e.href,y=e.as,v=e.children,h=e.prefetch,b=e.passHref,m=e.replace,g=e.shallow,j=e.scroll,w=e.locale,E=e.onClick,_=e.onMouseEnter,O=f(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter"]);r=v,u&&"string"===typeof r&&(r=a.default.createElement("a",null,r));var x,M=!1!==h,C=i.useRouter(),S=a.default.useMemo((function(){var e=o(l.resolveHref(C,p,!0),2),t=e[0],r=e[1];return{href:t,as:y?l.resolveHref(C,y):r||t}}),[C,p,y]),k=S.href,A=S.as,I=a.default.useRef(k),L=a.default.useRef(A);u&&(x=a.default.Children.only(r));var R=u?x&&"object"===typeof x&&x.ref:t,N=o(c.useIntersection({rootMargin:"200px"}),3),P=N[0],U=N[1],T=N[2],B=a.default.useCallback((function(e){L.current===A&&I.current===k||(T(),L.current=A,I.current=k),P(e),R&&("function"===typeof R?R(e):"object"===typeof R&&(R.current=e))}),[A,R,k,T,P]);a.default.useEffect((function(){var e=U&&M&&l.isLocalURL(k),t="undefined"!==typeof w?w:C&&C.locale,r=s[k+"%"+A+(t?"%"+t:"")];e&&!r&&d(C,k,A,{locale:t})}),[A,k,U,w,M,C]);var H={ref:B,onClick:function(e){u||"function"!==typeof E||E(e),u&&x.props&&"function"===typeof x.props.onClick&&x.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,u,a,i){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(r))&&(e.preventDefault(),t[o?"replace":"push"](r,n,{shallow:u,locale:i,scroll:a}))}(e,C,k,A,m,g,j,w)},onMouseEnter:function(e){u||"function"!==typeof _||_(e),u&&x.props&&"function"===typeof x.props.onMouseEnter&&x.props.onMouseEnter(e),l.isLocalURL(k)&&d(C,k,A,{priority:!0})}};if(!u||b||"a"===x.type&&!("href"in x.props)){var K="undefined"!==typeof w?w:C&&C.locale,D=C&&C.isLocaleDomain&&l.getDomainLocale(A,K,C&&C.locales,C&&C.domainLocales);H.href=D||l.addBasePath(l.addLocale(A,K,C&&C.defaultLocale))}return u?a.default.cloneElement(x,H):a.default.createElement("a",Object.assign({},O,H),r)}));t.default=p,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,u=[],a=!0,l=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(u.push(n.value),!t||u.length!==t);a=!0);}catch(i){l=!0,o=i}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return u}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,n=e.disabled||!l,f=u.useRef(),s=o(u.useState(!1),2),d=s[0],p=s[1],y=o(u.useState(t?t.current:null),2),v=y[0],h=y[1],b=u.useCallback((function(e){f.current&&(f.current(),f.current=void 0),n||d||e&&e.tagName&&(f.current=function(e,t,r){var n=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=c.find((function(e){return e.root===r.root&&e.margin===r.margin}));n?t=i.get(n):(t=i.get(r),c.push(r));if(t)return t;var o=new Map,u=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return i.set(r,t={id:r,observer:u,elements:o}),t}(r),o=n.id,u=n.observer,a=n.elements;return a.set(e,t),u.observe(e),function(){if(a.delete(e),u.unobserve(e),0===a.size){u.disconnect(),i.delete(o);var t=c.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&c.splice(t,1)}}}(e,(function(e){return e&&p(e)}),{root:v,rootMargin:r}))}),[n,v,r,d]),m=u.useCallback((function(){p(!1)}),[]);return u.useEffect((function(){if(!l&&!d){var e=a.requestIdleCallback((function(){return p(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[d]),u.useEffect((function(){t&&h(t.current)}),[t]),[b,d,m]};var u=r(7294),a=r(4686),l="undefined"!==typeof IntersectionObserver;var i=new Map,c=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},4369:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return a},default:function(){return l}});var n=r(5893),o=r(1664),u=r.n(o),a=!0;function l(e){var t=e.blog,r={marginBottom:"20px"};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("main",{children:t.map((function(e){return(0,n.jsxs)("div",{style:r,children:[(0,n.jsx)("small",{children:(0,n.jsx)("time",{datestring:e.publishedAt,children:e.publishedAt})}),(0,n.jsx)("div",{children:(0,n.jsx)(u(),{href:"/posts/".concat(e.id),children:(0,n.jsx)("a",{children:e.title})})})]},e.id)}))})})}},1664:function(e,t,r){e.exports=r(1551)}},function(e){e.O(0,[774,888,179],(function(){return t=5557,e(e.s=t);var t}));var t=e.O();_N_E=t}]);