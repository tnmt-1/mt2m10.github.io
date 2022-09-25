"use strict";(self.webpackChunkmt_2_m_10_github_io=self.webpackChunkmt_2_m_10_github_io||[]).push([[1970],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),i=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=i(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=i(n),d=r,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var i=2;i<o;i++)l[i]=n[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8956:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var a=n(7462),r=(n(7294),n(3905));const o={title:"AWS SDK for PHP \u3092\u4f7f\u3063\u3066\u30e1\u30fc\u30eb\u9001\u4fe1",summary:"Amazon SES \u3092\u521d\u3081\u3066\u4f7f\u3063\u305f\u306e\u3067\u30e1\u30e2\u3002",date:new Date("2022-01-08T05:26:00.000Z"),categories:"Tech",tags:["php","aws"]},l=void 0,s={permalink:"/en/blog/2022/01/08/_aws-ses-for-php",source:"@site/blog/2022-01-08_aws-ses-for-php.md",title:"AWS SDK for PHP \u3092\u4f7f\u3063\u3066\u30e1\u30fc\u30eb\u9001\u4fe1",description:"Amazon SES \u3092\u521d\u3081\u3066\u4f7f\u3063\u305f\u306e\u3067\u30e1\u30e2\u3002",date:"2022-01-08T05:26:00.000Z",formattedDate:"January 8, 2022",tags:[{label:"php",permalink:"/en/blog/tags/php"},{label:"aws",permalink:"/en/blog/tags/aws"}],readingTime:1.265,hasTruncateMarker:!1,authors:[],frontMatter:{title:"AWS SDK for PHP \u3092\u4f7f\u3063\u3066\u30e1\u30fc\u30eb\u9001\u4fe1",summary:"Amazon SES \u3092\u521d\u3081\u3066\u4f7f\u3063\u305f\u306e\u3067\u30e1\u30e2\u3002",date:"2022-01-08T05:26:00.000Z",categories:"Tech",tags:["php","aws"]},prevItem:{title:"AfterShokz\u306eOPENCOMM\u3092\u8cfc\u5165",permalink:"/en/blog/2022/01/15/_aftershokz-opencomm"},nextItem:{title:"\u306f\u3066\u306a\u30d6\u30ed\u30b0\u30ab\u30fc\u30c9\u3092\u4f7f\u3063\u3066\u30ab\u30fc\u30c9\u578b\u306e\u30ea\u30f3\u30af\u3092\u8cbc\u308b",permalink:"/en/blog/2022/01/04/_hatena-blog-card"}},p={authorsImageUrls:[]},i=[{value:"\u524d\u63d0",id:"\u524d\u63d0",level:3},{value:"\u30b3\u30fc\u30c9",id:"\u30b3\u30fc\u30c9",level:3},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:3}],c={toc:i};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Amazon SES \u3092\u521d\u3081\u3066\u4f7f\u3063\u305f\u306e\u3067\u30e1\u30e2\u3002\nregion\u304c",(0,r.kt)("inlineCode",{parentName:"p"},"Asia Pacific (Tokyo)"),"\u306e\u5834\u5408\u306f\u5236\u9650\u304c\u3042\u308b\u307f\u305f\u3044\u306a\u306e\u3067\u6ce8\u610f\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u6700\u5927\u9001\u4fe1\u91cf"),(0,r.kt)("th",{parentName:"tr",align:null},"1\u65e5\u3042\u305f\u308a\u306e\u9001\u4fe1\u5272\u308a\u5f53\u3066"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1\u79d2\u3042\u305f\u308a1\u901a"),(0,r.kt)("td",{parentName:"tr",align:null},"24\u6642\u9593\u3042\u305f\u308a200\u901a")))),(0,r.kt)("h3",{id:"\u524d\u63d0"},"\u524d\u63d0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://aws.amazon.com/jp/sdk-for-php/"},"AWS SDK for PHP"),"\u304c\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u6e08\u307f\u3067\u3042\u308b\u3053\u3068",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/sdk-for-php/v3/developer-guide/getting-started_installation.html"},"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u65b9\u6cd5")))),(0,r.kt)("li",{parentName:"ul"},"Amazon SES \u3067Verified\u6e08\u307f\u306e\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u304c\u3042\u308b\u3053\u3068")),(0,r.kt)("h3",{id:"\u30b3\u30fc\u30c9"},"\u30b3\u30fc\u30c9"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"<?php\nrequire 'vendor/autoload.php';\n\n$client = new \\Aws\\Ses\\SesClient([\n    'version' => 'latest',\n    'region' => 'ap-northeast-1',\n    'credentials' => [\n        'key'    => 'hogehoge',\n        'secret' => 'fugafuga',\n    ],\n]);\n\n$from = 'from@example.com'; // Amazon SES\u3067Verified\u3057\u305f\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\n$to = 'to@example.com';\n$charset = 'UTF-8';\n$subject = '\u4ef6\u540d';\n$body = '\u672c\u6587';\n\n$result = $client->sendEmail([\n    'Destination' => [\n        'ToAddresses' => [$to],\n    ],\n    'ReplyToAddresses' => [$from],\n    'Source' => $from,\n    'Message' => [\n        'Body' => [\n            'Text' => [\n                'Charset' => $charset,\n                'Data' => $body,\n            ],\n        ],\n        'Subject' => [\n            'Charset' => $charset,\n            'Data' => $subject,\n        ],\n    ],\n]);\n\n// \u9001\u4fe1ID\n$messageId = $result['MessageId'];\necho \"Email send. Message ID: {$messageId}\\n\" ;\n")),(0,r.kt)("p",null,"HTML\u5f62\u5f0f\u3067\u9001\u4fe1\u3057\u305f\u3044\u5834\u5408\u306f\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"Text"),"\u3092",(0,r.kt)("inlineCode",{parentName:"p"},"Html"),"\u306b\u3059\u308c\u3070OK\u3002"),(0,r.kt)("h3",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-Aws.Ses.SesClient.html"},"Class Aws\\Ses\\SesClient ","|"," AWS SDK for PHP v3")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://officekaizen.tech/doku.php/aws/ses/aws-sdk%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%A6%E3%83%A1%E3%83%BC%E3%83%AB%E9%80%81%E4%BF%A1%E3%83%86%E3%82%B9%E3%83%88?s%5B%5D=ses"},"aws:ses:aws-sdk\u3092\u4f7f\u3063\u3066\u30e1\u30fc\u30eb\u9001\u4fe1\u30c6\u30b9\u30c8"))))}m.isMDXComponent=!0}}]);