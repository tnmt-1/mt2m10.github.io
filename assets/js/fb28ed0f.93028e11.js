"use strict";(self.webpackChunkmt_2_m_10_github_io=self.webpackChunkmt_2_m_10_github_io||[]).push([[7959],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var s=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,s,a=function(e,t){if(null==e)return{};var n,s,a={},o=Object.keys(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=s.createContext({}),c=function(e){var t=s.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=c(e.components);return s.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},p=s.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=c(n),h=a,y=p["".concat(l,".").concat(h)]||p[h]||u[h]||o;return n?s.createElement(y,r(r({ref:t},m),{},{components:n})):s.createElement(y,r({ref:t},m))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,r[1]=i;for(var c=2;c<o;c++)r[c]=n[c];return s.createElement.apply(null,r)}return s.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1336:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var s=n(7462),a=(n(7294),n(3905));const o={title:"SQLAlchemy\u306eSession\u3068in_transaction\u3092\u8abf\u3079\u305f",date:new Date("2022-09-11T07:41:00.000Z"),authors:"mt2m10",tags:["Python","SQLAlchemy"]},r=void 0,i={permalink:"/2022/09/11/_1",source:"@site/blog/2022-09-11_1.md",title:"SQLAlchemy\u306eSession\u3068in_transaction\u3092\u8abf\u3079\u305f",description:"SQLAlchemy \u3067\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u7ba1\u7406\u3092\u3059\u308b\u306b\u3042\u305f\u308a\u3001SQLAlchemy \u3067\u3042\u3064\u304b\u3046 Session \u306b\u3064\u3044\u3066\u7406\u89e3\u3059\u308b\u5fc5\u8981\u304c\u3042\u3063\u305f\u306e\u3067\u691c\u8a3c\u3057\u307e\u3057\u305f\u3002\u307e\u305f\u3001SQLAlchemy 1.4 Documentation\u306b\u66f8\u3044\u3066\u3042\u3063\u305fintransaction\u306e\u6319\u52d5\u3092\u78ba\u8a8d\u3057\u305f\u304b\u3063\u305f\u306e\u3067\u3001\u3064\u3044\u3067\u306b\u52d5\u4f5c\u691c\u8a3c\u3057\u307e\u3057\u305f\u3002",date:"2022-09-11T07:41:00.000Z",formattedDate:"2022\u5e749\u670811\u65e5",tags:[{label:"Python",permalink:"/tags/python"},{label:"SQLAlchemy",permalink:"/tags/sql-alchemy"}],readingTime:1.895,hasTruncateMarker:!1,authors:[{name:"mt2m10",title:"Maintainer of blog",url:"https://twitter.com/mt2m10",imageURL:"./assets/profile.png",key:"mt2m10"}],frontMatter:{title:"SQLAlchemy\u306eSession\u3068in_transaction\u3092\u8abf\u3079\u305f",date:"2022-09-11T07:41:00.000Z",authors:"mt2m10",tags:["Python","SQLAlchemy"]},nextItem:{title:"pyenv\u3067\u306einstall\u4e2d\u306b\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3059\u308b\u3068\u304d\u306b\u5bfe\u51e6\u3057\u305f\u3053\u3068",permalink:"/2022/09/06/_1"}},l={authorsImageUrls:[n(6238).Z]},c=[{value:"\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9",id:"\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9",level:2},{value:"\u691c\u8a3c\u5185\u5bb9",id:"\u691c\u8a3c\u5185\u5bb9",level:2},{value:"\u691c\u8a3c\u74b0\u5883",id:"\u691c\u8a3c\u74b0\u5883",level:2},{value:"\u7d50\u679c",id:"\u7d50\u679c",level:2}],m={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,s.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"SQLAlchemy \u3067\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u7ba1\u7406\u3092\u3059\u308b\u306b\u3042\u305f\u308a\u3001SQLAlchemy \u3067\u3042\u3064\u304b\u3046 Session \u306b\u3064\u3044\u3066\u7406\u89e3\u3059\u308b\u5fc5\u8981\u304c\u3042\u3063\u305f\u306e\u3067\u691c\u8a3c\u3057\u307e\u3057\u305f\u3002\u307e\u305f\u3001",(0,a.kt)("a",{parentName:"p",href:"https://docs.sqlalchemy.org/en/14/orm/session_transaction.html#migrating-from-the-subtransaction-pattern"},"SQLAlchemy 1.4 Documentation"),"\u306b\u66f8\u3044\u3066\u3042\u3063\u305f",(0,a.kt)("inlineCode",{parentName:"p"},"in_transaction"),"\u306e\u6319\u52d5\u3092\u78ba\u8a8d\u3057\u305f\u304b\u3063\u305f\u306e\u3067\u3001\u3064\u3044\u3067\u306b\u52d5\u4f5c\u691c\u8a3c\u3057\u307e\u3057\u305f\u3002"),(0,a.kt)("h2",{id:"\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9"},"\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mt2m10/session-check-code-in-SQLAlchemy"},"https://github.com/mt2m10/session-check-code-in-SQLAlchemy")),(0,a.kt)("h2",{id:"\u691c\u8a3c\u5185\u5bb9"},"\u691c\u8a3c\u5185\u5bb9"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"sessionmaker"),"\u3068",(0,a.kt)("inlineCode",{parentName:"li"},"scoped_session"),"\u306e Session \u751f\u6210\u306e\u9055\u3044"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"in_transaction"),"\u306e\u6319\u52d5")),(0,a.kt)("h2",{id:"\u691c\u8a3c\u74b0\u5883"},"\u691c\u8a3c\u74b0\u5883"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Windows 11"),(0,a.kt)("li",{parentName:"ul"},"WSL2 (Ubuntu)")),(0,a.kt)("h2",{id:"\u7d50\u679c"},"\u7d50\u679c"),(0,a.kt)("p",null,"SQLite \u3092\u4f7f\u3063\u3066\u78ba\u8a8d\u3057\u307e\u3057\u305f\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"(session-check-code-in-SQLAlchemy) mah@DESKTOP-TQ41EI2:~/dev/session-check-code-in-SQLAlchemy$ python main.py\n------------------------------------\nmain \u958b\u59cb\n------------------------------------\n\n\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u306e\u78ba\u8a8d\n[$<sqlalchemy.orm.session.Session object at 0x7f0e284e5330>] transaction status: False\n[$<sqlalchemy.orm.session.Session object at 0x7f0e284e6920>] transaction status: False\n\n[$<sqlalchemy.orm.session.Session object at 0x7f0e284e5330>] transaction\u958b\u59cb\n[$<sqlalchemy.orm.session.Session object at 0x7f0e284e5330>] \u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u3092\u958b\u59cb\u3057\u307e\u3059\n\n\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u306e\u78ba\u8a8d\n[$<sqlalchemy.orm.session.Session object at 0x7f0e284e5330>] transaction status: True\n[$<sqlalchemy.orm.session.Session object at 0x7f0e284e6920>] transaction status: False\n\n[$<sqlalchemy.orm.session.Session object at 0x7f0e284e6920>] transaction\u958b\u59cb\n[$<sqlalchemy.orm.session.Session object at 0x7f0e284e6920>] \u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u3092\u958b\u59cb\u3057\u307e\u3059\n\n\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u306e\u78ba\u8a8d\n[$<sqlalchemy.orm.session.Session object at 0x7f0e284e5330>] transaction status: True\n[$<sqlalchemy.orm.session.Session object at 0x7f0e284e6920>] transaction status: True\n\n------------------------------------\nmain \u7d42\u4e86\n------------------------------------\n\n------------------------------------\nmain \u958b\u59cb\n------------------------------------\n\n\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u306e\u78ba\u8a8d\n[$<sqlalchemy.orm.session.Session object at 0x7f0e284e5600>] transaction status: False\n[$<sqlalchemy.orm.session.Session object at 0x7f0e284e5600>] transaction status: False\n\n[$<sqlalchemy.orm.session.Session object at 0x7f0e284e5600>] transaction\u958b\u59cb\n[$<sqlalchemy.orm.session.Session object at 0x7f0e284e5600>] \u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u3092\u958b\u59cb\u3057\u307e\u3059\n\n\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u306e\u78ba\u8a8d\n[$<sqlalchemy.orm.session.Session object at 0x7f0e284e5600>] transaction status: True\n[$<sqlalchemy.orm.session.Session object at 0x7f0e284e5600>] transaction status: True\n\n[$<sqlalchemy.orm.session.Session object at 0x7f0e284e5600>] transaction\u958b\u59cb\n[$<sqlalchemy.orm.session.Session object at 0x7f0e284e5600>] \u65e2\u306b\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u304c\u958b\u59cb\u3055\u308c\u3066\u307e\u3059\n\n\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u306e\u78ba\u8a8d\n[$<sqlalchemy.orm.session.Session object at 0x7f0e284e5600>] transaction status: True\n[$<sqlalchemy.orm.session.Session object at 0x7f0e284e5600>] transaction status: True\n\n------------------------------------\nmain \u7d42\u4e86\n------------------------------------\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"sessionmaker"),"\u306f\u3001",(0,a.kt)("inlineCode",{parentName:"li"},"sessionmaker()()"),"\u306e\u305f\u3073\u306b\u65b0\u3057\u3044\u30bb\u30c3\u30b7\u30e7\u30f3\u3092\u751f\u6210\u3059\u308b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"scoped_session"),"\u306f\u3001\u8907\u6570\u56de\u30bb\u30c3\u30b7\u30e7\u30f3\u751f\u6210\u3057\u3066\u3082\u540c\u3058\u30bb\u30c3\u30b7\u30e7\u30f3\u304c\u8fd4\u3063\u3066\u304f\u308b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"in_transaction"),"\u306f\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u4e2d\u306a\u3089",(0,a.kt)("inlineCode",{parentName:"li"},"True"),"\u3001\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u5916\u306a\u3089",(0,a.kt)("inlineCode",{parentName:"li"},"False"),"\u304c\u8fd4\u3063\u3066\u304f\u308b")))}u.isMDXComponent=!0},6238:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/profile-143ffae64c386e6365cb1a94094a6d17.png"}}]);