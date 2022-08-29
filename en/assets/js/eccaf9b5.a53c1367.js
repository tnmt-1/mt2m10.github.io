"use strict";(self.webpackChunkmt_2_m_10_github_io=self.webpackChunkmt_2_m_10_github_io||[]).push([[1353],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>y});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),c=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=c(a),y=n,f=s["".concat(p,".").concat(y)]||s[y]||m[y]||o;return a?r.createElement(f,i(i({ref:t},u),{},{components:a})):r.createElement(f,i({ref:t},u))}));function y(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},4776:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const o={title:"Amazon API Gateway\u3067\u30d0\u30a4\u30ca\u30ea\u30c7\u30fc\u30bf\u3092\u8fd4\u3059",summary:"API Gateway\u3092\u4f7f\u3063\u3066\u30d0\u30a4\u30ca\u30ea\u30c7\u30fc\u30bf\u3092\u8fd4\u5374\u3067\u304d\u308b\u3088\u3046\u306b\u3057\u307e\u3057\u305f\u3002",date:new Date("2021-10-19T11:54:00.000Z"),categories:"Tech",tags:["aws","apigateway"]},i=void 0,l={permalink:"/en/2021/10/19/_retrun-binary-data-in-aws-api-gateway",source:"@site/blog/2021-10-19_retrun-binary-data-in-aws-api-gateway.md",title:"Amazon API Gateway\u3067\u30d0\u30a4\u30ca\u30ea\u30c7\u30fc\u30bf\u3092\u8fd4\u3059",description:"API Gateway \u3092\u4f7f\u3063\u3066\u30d0\u30a4\u30ca\u30ea\u30c7\u30fc\u30bf\u3092\u8fd4\u5374\u3059\u308b\u5834\u5408\u3001\u8a2d\u5b9a\u304c\u5fc5\u8981\u3060\u3063\u305f\u306e\u3067\u30e1\u30e2\u3057\u3068\u304f\u3002",date:"2021-10-19T11:54:00.000Z",formattedDate:"October 19, 2021",tags:[{label:"aws",permalink:"/en/tags/aws"},{label:"apigateway",permalink:"/en/tags/apigateway"}],readingTime:1.215,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Amazon API Gateway\u3067\u30d0\u30a4\u30ca\u30ea\u30c7\u30fc\u30bf\u3092\u8fd4\u3059",summary:"API Gateway\u3092\u4f7f\u3063\u3066\u30d0\u30a4\u30ca\u30ea\u30c7\u30fc\u30bf\u3092\u8fd4\u5374\u3067\u304d\u308b\u3088\u3046\u306b\u3057\u307e\u3057\u305f\u3002",date:"2021-10-19T11:54:00.000Z",categories:"Tech",tags:["aws","apigateway"]},prevItem:{title:"\u30b5\u30d6\u30d6\u30e9\u30f3\u30c9\u3084MVNO\u306e\u901a\u4fe1\u6599\u91d1\u6bd4\u8f03",permalink:"/en/2021/10/24/_comparison-of-smartphone-communication-charges"},nextItem:{title:"Linux\u3067\u30e6\u30cb\u30c3\u30c8\u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u3063\u3066\u81ea\u52d5\u8d77\u52d5\u3055\u305b\u308b",permalink:"/en/2021/10/14/_linux-unit"}},p={authorsImageUrls:[]},c=[{value:"\u56f0\u3063\u3066\u308b\u3053\u3068",id:"\u56f0\u3063\u3066\u308b\u3053\u3068",level:3},{value:"\u3084\u3063\u305f\u3053\u3068",id:"\u3084\u3063\u305f\u3053\u3068",level:3}],u={toc:c};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"API Gateway \u3092\u4f7f\u3063\u3066\u30d0\u30a4\u30ca\u30ea\u30c7\u30fc\u30bf\u3092\u8fd4\u5374\u3059\u308b\u5834\u5408\u3001\u8a2d\u5b9a\u304c\u5fc5\u8981\u3060\u3063\u305f\u306e\u3067\u30e1\u30e2\u3057\u3068\u304f\u3002"),(0,n.kt)("h3",{id:"\u56f0\u3063\u3066\u308b\u3053\u3068"},"\u56f0\u3063\u3066\u308b\u3053\u3068"),(0,n.kt)("p",null,"\u753b\u50cf\u304c\u8868\u793a\u3055\u308c\u306a\u3044\u3002"),(0,n.kt)("p",null,"\u7d30\u304b\u3044\u3053\u3068\u66f8\u304f\u306e\u304c\u3081\u3093\u3069\u3046\u306a\u306e\u3067\u56f3\u306b\u3057\u307e\u3057\u305f\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://i.gyazo.com/7b088e7b34c6a0634e27394e132bd8f6.png",alt:"occurrence.png"})),(0,n.kt)("h3",{id:"\u3084\u3063\u305f\u3053\u3068"},"\u3084\u3063\u305f\u3053\u3068"),(0,n.kt)("p",null,"API Gateway\u306e\u8a2d\u5b9a\u3067\u30d0\u30a4\u30ca\u30ea\u30e1\u30c7\u30a3\u30a2\u30bf\u30a4\u30d7\u306b ",(0,n.kt)("inlineCode",{parentName:"p"},"text/html")," \u3092\u8a2d\u5b9a"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://aws.amazon.com/jp/premiumsupport/knowledge-center/api-gateway-binary-data-lambda/"},"Lambda\u30d7\u30ed\u30ad\u30b7\u7d71\u5408\u3092\u4f7f\u7528\u3057\u3066\u3001\u30d0\u30a4\u30ca\u30ea\u30c7\u30fc\u30bf\u3092\u51e6\u7406\u3059\u308bAPI Gateway API\u3092\u8a2d\u5b9a\u3059\u308b\u306b\u306f\u3069\u3046\u3059\u308c\u3070\u3088\u3044\u3067\u3059\u304b\uff1f")," \u306b\u3088\u308b\u3068\u3001\u30d6\u30e9\u30a6\u30b6\u304b\u3089\u9001\u4fe1\u3057\u3066\u308bAccept\u30d8\u30c3\u30c0\u30fc\u306e\u30c7\u30d5\u30a9\u30eb\u30c8\u304c ",(0,n.kt)("inlineCode",{parentName:"p"},"text/html")," \u3089\u3057\u3044\u306e\u3067\u3001\u30d0\u30a4\u30ca\u30ea\u30e1\u30c7\u30a3\u30a2\u30bf\u30a4\u30d7\u3068\u3057\u3066\u8ffd\u52a0\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u3089\u3057\u3044\u3002"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u6ce8: \u30a6\u30a7\u30d6\u30d6\u30e9\u30a6\u30b6\u306f\u8907\u6570\u306e\u5024\u3092\u542b\u3080 Accept \u30d8\u30c3\u30c0\u30fc\u3092\u81ea\u52d5\u7684\u306b\u9001\u4fe1\u3057\u307e\u3059\u3002\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u3001\u6700\u521d\u306e\u5024\u306f\u5e38\u306b html/text \u3067\u3059\u3002API Gateway \u306f\u6700\u521d\u306e\u5024\u306e\u307f\u3092\u53c2\u7167\u3059\u308b\u306e\u3067\u3001text/html \u3092\u30d0\u30a4\u30ca\u30ea\u30e1\u30c7\u30a3\u30a2\u30bf\u30a4\u30d7\u3068\u3057\u3066 API \u306b\u8ffd\u52a0\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u305d\u3046\u3067\u306a\u3044\u3068\u3001\u6b21\u306e\u30a8\u30e9\u30fc\u30e1\u30c3\u30bb\u30fc\u30b8\u304c\u8868\u793a\u3055\u308c\u307e\u3059")))}m.isMDXComponent=!0}}]);