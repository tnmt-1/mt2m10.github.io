"use strict";(self.webpackChunkmt_2_m_10_github_io=self.webpackChunkmt_2_m_10_github_io||[]).push([[3447],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),l=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(t),d=a,y=m["".concat(o,".").concat(d)]||m[d]||u[d]||i;return t?r.createElement(y,p(p({ref:n},c),{},{components:t})):r.createElement(y,p({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,p=new Array(i);p[0]=m;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,p[1]=s;for(var l=2;l<i;l++)p[l]=t[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3570:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>p,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=t(7462),a=(t(7294),t(3905));const i={title:"Linux\u3067\u30e6\u30cb\u30c3\u30c8\u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u3063\u3066\u81ea\u52d5\u8d77\u52d5\u3055\u305b\u308b",summary:"PHP\u306e\u30d3\u30eb\u30c8\u30a4\u30f3\u30b5\u30fc\u30d0\u3068Node.js Express \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u7528\u306e\u30d3\u30eb\u30c8\u30a4\u30f3\u30b5\u30fc\u30d0\u306e\u30e6\u30cb\u30c3\u30c8\u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u6210\u3057\u3066\u81ea\u52d5\u8d77\u52d5\u3067\u304d\u308b\u3088\u3046\u306b\u3057\u307e\u3057\u305f\u3002",date:new Date("2021-10-14T13:05:00.000Z"),categories:"Tech",tags:["Linux","\u30e6\u30cb\u30c3\u30c8\u30d5\u30a1\u30a4\u30eb"]},p=void 0,s={permalink:"/blog/2021/10/14/_linux-unit",source:"@site/blog/2021-10-14_linux-unit.md",title:"Linux\u3067\u30e6\u30cb\u30c3\u30c8\u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u3063\u3066\u81ea\u52d5\u8d77\u52d5\u3055\u305b\u308b",description:"PHP\u306e\u30d3\u30eb\u30c8\u30a4\u30f3\u30b5\u30fc\u30d0\u3068Node.js Express \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u7528\u306e\u30d3\u30eb\u30c8\u30a4\u30f3\u30b5\u30fc\u30d0\u306e\u30e6\u30cb\u30c3\u30c8\u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u6210\u3057\u3066\u81ea\u52d5\u8d77\u52d5\u3067\u304d\u308b\u3088\u3046\u306b\u3057\u307e\u3057\u305f\u3002",date:"2021-10-14T13:05:00.000Z",formattedDate:"2021\u5e7410\u670814\u65e5",tags:[{label:"Linux",permalink:"/blog/tags/linux"},{label:"\u30e6\u30cb\u30c3\u30c8\u30d5\u30a1\u30a4\u30eb",permalink:"/blog/tags/\u30e6\u30cb\u30c3\u30c8\u30d5\u30a1\u30a4\u30eb"}],readingTime:2.195,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Linux\u3067\u30e6\u30cb\u30c3\u30c8\u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u3063\u3066\u81ea\u52d5\u8d77\u52d5\u3055\u305b\u308b",summary:"PHP\u306e\u30d3\u30eb\u30c8\u30a4\u30f3\u30b5\u30fc\u30d0\u3068Node.js Express \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u7528\u306e\u30d3\u30eb\u30c8\u30a4\u30f3\u30b5\u30fc\u30d0\u306e\u30e6\u30cb\u30c3\u30c8\u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u6210\u3057\u3066\u81ea\u52d5\u8d77\u52d5\u3067\u304d\u308b\u3088\u3046\u306b\u3057\u307e\u3057\u305f\u3002",date:"2021-10-14T13:05:00.000Z",categories:"Tech",tags:["Linux","\u30e6\u30cb\u30c3\u30c8\u30d5\u30a1\u30a4\u30eb"]},prevItem:{title:"Amazon API Gateway\u3067\u30d0\u30a4\u30ca\u30ea\u30c7\u30fc\u30bf\u3092\u8fd4\u3059",permalink:"/blog/2021/10/19/_retrun-binary-data-in-aws-api-gateway"},nextItem:{title:"PeerCast\u6c11\u3068\u9ebb\u96c0",permalink:"/blog/2021/10/04/_mahjong"}},o={authorsImageUrls:[]},l=[],c={toc:l};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"PHP\u306e\u30d3\u30eb\u30c8\u30a4\u30f3\u30b5\u30fc\u30d0\u3068Node.js Express \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u7528\u306e\u30d3\u30eb\u30c8\u30a4\u30f3\u30b5\u30fc\u30d0\u306e\u30e6\u30cb\u30c3\u30c8\u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u6210\u3057\u3066\u81ea\u52d5\u8d77\u52d5\u3067\u304d\u308b\u3088\u3046\u306b\u3057\u307e\u3057\u305f\u3002\n\u51dd\u3063\u305f\u3053\u3068\u3092\u3057\u306a\u3044\u306e\u3067\u3042\u308c\u3070\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"service")," \u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u6210\u3059\u308b\u3060\u3051\u3067OK\u306a\u306e\u3067\u7c21\u5358\u3067\u3059\u3002"),(0,a.kt)("p",null,"\u5b9f\u884c\u3055\u305b\u308b\u30b3\u30de\u30f3\u30c9\u306f\u4ee5\u4e0b\u3067\u3059\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"PHP",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"php -S 0.0.0.0:8000 public/index.php -t public")))),(0,a.kt)("li",{parentName:"ul"},"Node.js",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"node ./bin/www"))))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"service")," \u30d5\u30a1\u30a4\u30eb\u306b\u66f8\u304f\u3068\u304d\u306f\u3001 ",(0,a.kt)("inlineCode",{parentName:"p"},"php")," \u30b3\u30de\u30f3\u30c9\u3084 ",(0,a.kt)("inlineCode",{parentName:"p"},"node")," \u30b3\u30de\u30f3\u30c9\u3092\u30d5\u30eb\u30d1\u30b9\u3067\u66f8\u304f\u3068\u78ba\u5b9f\u306b\u52d5\u304f\u306e\u3067\u3001\u30d1\u30b9\u3092\u78ba\u8a8d\u3057\u3066\u304a\u304d\u307e\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ which php\n/usr/bin/php\n$ which node\n~/.nvm/versions/node/v16.11.1/bin/node\n")),(0,a.kt)("p",null,"\u78ba\u8a8d\u3057\u305f\u3089\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"service")," \u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u308a\u307e\u3059\u3002\u30d5\u30a1\u30a4\u30eb\u540d\u306f\u306a\u3093\u3067\u3082OK\u3067\u3059\u3002\u3053\u3053\u3067\u306f",(0,a.kt)("inlineCode",{parentName:"p"},"php.service"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"nodejs.service"),"\u3068\u3057\u307e\u3059\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"/etc/systemd/system/php.service"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"[Unit]\nDescription = serve php\n\n[Service]\nExecStart = /usr/bin/php -S 0.0.0.0:8000 public/index.php -t public\nRestart = always\nType = simple\nWorkingDirectory = /home/ec2-user/php-app\nUser = ec2-user\nGroup = ec2-user\n\n[Install]\nWantedBy = multi-user.target\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"/etc/systemd/system/nodejs.service"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"[Unit]\nDescription = serve nodejs\n\n[Service]\nExecStart = /home/ec2-user/.nvm/versions/node/v16.11.1/bin/node ./bin/www\nRestart = always\nType = simple\nWorkingDirectory = /home/ec2-user/nodejs-app\nUser = ec2-user\nGroup = ec2-user\n\n[Install]\nWantedBy = multi-user.target\n")))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"WorkingDirectory")," \u306b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30eb\u30fc\u30c8\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u3092\u6307\u5b9a\u3057\u3066 ",(0,a.kt)("inlineCode",{parentName:"p"},"ExecStart")," \u306b\u30b3\u30de\u30f3\u30c9\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002\u4ed6\u306e\u9805\u76ee\u306b\u3064\u3044\u3066\u306f\u8aac\u660e\u3067\u304d\u306a\u3044\u306e\u3067\u5404\u3005\u3067\u8abf\u3079\u3066\u304f\u3060\u3055\u3044\u3002"),(0,a.kt)("p",null,"\u305d\u308c\u3067\u306f\u3001\u30d3\u30eb\u30c8\u30a4\u30f3\u30b5\u30fc\u30d0\u3092\u8d77\u52d5\u3057\u307e\u3057\u3087\u3046"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ sudo systemctl start php\n$ sudo systemctl start nodejs\n")),(0,a.kt)("p",null,"\u958b\u59cb\u3057\u305f\u3089\u72b6\u614b\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u306a\u3063\u3066\u3044\u308c\u3070OK\u3067\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ sudo systemctl status php\n\u25cf php.service - serve php\n   Loaded: loaded (/etc/systemd/system/php.service; enabled; vendor preset: disabled)\n   Active: active (running) since Thu 2021-10-14 01:30:20 UTC; 1h 8min ago\n Main PID: 10612 (php)\n   CGroup: /system.slice/php.service\n           \u2514\u250010612 /usr/bin/php -S 0.0.0.0:8000 public/index.php -t public\n\n$ sudo systemctl status nodejs\n\u25cf nodejs.service - serve nodejs\n   Loaded: loaded (/etc/systemd/system/nodejs.service; enabled; vendor preset: disabled)\n   Active: active (running) since Thu 2021-10-14 02:16:43 UTC; 23min ago\n Main PID: 8875 (node)\n   CGroup: /system.slice/nodejs.service\n           \u2514\u25008875 /home/ec2-user/.nvm/versions/node/v16.11.1/bin/node ./bin/www\n")),(0,a.kt)("p",null,"\u81ea\u52d5\u8d77\u52d5\u306e\u8a2d\u5b9a\u3092\u3059\u308b\u5834\u5408\u306f\u3001\u4ee5\u4e0b\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ sudo systemctl enable php\n$ sudo systemctl enable nodejs\n")))}u.isMDXComponent=!0}}]);