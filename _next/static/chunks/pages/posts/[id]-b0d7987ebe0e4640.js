(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[646],{3798:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/[id]",function(){return n(887)}])},887:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return c},default:function(){return u}});var r=n(5893),i=n(2962),a=n(3726),o=n.n(a),c=!0;function u(e){var t=e.blog,n=o()(t.body).split("\u3002")[0];return(0,r.jsxs)("main",{children:[(0,r.jsx)(i.PB,{title:"".concat(t.title),description:n}),(0,r.jsx)("h1",{children:t.title}),(0,r.jsx)("small",{children:(0,r.jsx)("time",{datestring:t.publishedAt,children:t.publishedAt})}),(0,r.jsx)("article",{dangerouslySetInnerHTML:{__html:"".concat(t.body)}})]})}},3726:function(e,t,n){"use strict";var r;!function(i){if("function"!==typeof a){var a=function(e){return e};a.nonNative=!0}const o=a("plaintext"),c=a("html"),u=a("comment"),s=/<(\w*)>/g,f=/<\/?([^\s\/>]+)/;function l(e,t,n){return d(e=e||"",_(t=t||[],n=n||""))}function _(e,t){return{allowable_tags:e=function(e){let t=new Set;if("string"===typeof e){let n;for(;n=s.exec(e);)t.add(n[1])}else a.nonNative||"function"!==typeof e[a.iterator]?"function"===typeof e.forEach&&e.forEach(t.add,t):t=new Set(e);return t}(e),tag_replacement:t,state:o,tag_buffer:"",depth:0,in_quote_char:""}}function d(e,t){if("string"!=typeof e)throw new TypeError("'html' parameter must be a string");let n=t.allowable_tags,r=t.tag_replacement,i=t.state,a=t.tag_buffer,s=t.depth,f=t.in_quote_char,l="";for(let _=0,d=e.length;_<d;_++){let t=e[_];if(i===o)if("<"===t)i=c,a+=t;else l+=t;else if(i===c)switch(t){case"<":if(f)break;s++;break;case">":if(f)break;if(s){s--;break}f="",i=o,a+=">",n.has(h(a))?l+=a:l+=r,a="";break;case'"':case"'":f=t===f?"":f||t,a+=t;break;case"-":"<!-"===a&&(i=u),a+=t;break;case" ":case"\n":if("<"===a){i=o,l+="< ",a="";break}a+=t;break;default:a+=t}else if(i===u)if(">"===t)"--"==a.slice(-2)&&(i=o),a="";else a+=t}return t.state=i,t.tag_buffer=a,t.depth=s,t.in_quote_char=f,l}function h(e){let t=f.exec(e);return t?t[1].toLowerCase():null}l.init_streaming_mode=function(e,t){let n=_(e=e||[],t=t||"");return function(e){return d(e||"",n)}},void 0===(r=function(){return l}.call(t,n,t,e))||(e.exports=r)}()}},function(e){e.O(0,[774,888,179],(function(){return t=3798,e(e.s=t);var t}));var t=e.O();_N_E=t}]);