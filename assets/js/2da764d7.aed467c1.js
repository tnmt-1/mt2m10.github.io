"use strict";(self.webpackChunkmt_2_m_10_github_io=self.webpackChunkmt_2_m_10_github_io||[]).push([[5391],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},p=Object.keys(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),c=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,p=e.originalType,i=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=c(a),d=n,h=u["".concat(i,".").concat(d)]||u[d]||s[d]||p;return a?r.createElement(h,o(o({ref:t},m),{},{components:a})):r.createElement(h,o({ref:t},m))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=a.length,o=new Array(p);o[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<p;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9166:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>s,frontMatter:()=>p,metadata:()=>l,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const p={title:"Amazon Linux 2 + Apache + Codeigniter4 \u3067\u306eWeb\u30b5\u30fc\u30d0\u69cb\u7bc9",summary:"Amazon Linux 2 \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306b Apache HTTP Server \u3068 PHP8 \u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3066Web\u30b5\u30fc\u30d0\u3092\u69cb\u7bc9\u3057\u307e\u3059\u3002",date:new Date("2021-09-15T01:00:00.000Z"),categories:"Tech",tags:["aws","apache","codeigniter4"]},o=void 0,l={permalink:"/2021/09/15/_build-webserver",source:"@site/blog/2021-09-15_build-webserver.md",title:"Amazon Linux 2 + Apache + Codeigniter4 \u3067\u306eWeb\u30b5\u30fc\u30d0\u69cb\u7bc9",description:"Amazon Linux 2 \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306b Apache HTTP Server \u3068 PHP8 \u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3066Web\u30b5\u30fc\u30d0\u3092\u69cb\u7bc9\u3057\u307e\u3059\u3002",date:"2021-09-15T01:00:00.000Z",formattedDate:"September 15, 2021",tags:[{label:"aws",permalink:"/tags/aws"},{label:"apache",permalink:"/tags/apache"},{label:"codeigniter4",permalink:"/tags/codeigniter-4"}],readingTime:2.64,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Amazon Linux 2 + Apache + Codeigniter4 \u3067\u306eWeb\u30b5\u30fc\u30d0\u69cb\u7bc9",summary:"Amazon Linux 2 \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306b Apache HTTP Server \u3068 PHP8 \u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3066Web\u30b5\u30fc\u30d0\u3092\u69cb\u7bc9\u3057\u307e\u3059\u3002",date:"2021-09-15T01:00:00.000Z",categories:"Tech",tags:["aws","apache","codeigniter4"]},prevItem:{title:"Dark Mode Switch \u3067\u30c0\u30fc\u30af\u30e2\u30fc\u30c9\u5bfe\u5fdc",permalink:"/2021/09/19/_darkmode"},nextItem:{title:"anyenv\u304b\u3089nodenv\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b",permalink:"/2021/04/26/_node-install"}},i={authorsImageUrls:[]},c=[{value:"\u74b0\u5883",id:"\u74b0\u5883",level:3},{value:"\u624b\u9806",id:"\u624b\u9806",level:3},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:3}],m={toc:c};function s(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Amazon Linux 2 \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306b Apache HTTP Server \u3068 PHP8 \u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3066Web\u30b5\u30fc\u30d0\u3092\u69cb\u7bc9\u3057\u307e\u3059\u3002\nCodeigniter4\u306e\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u3092\u5229\u7528\u3057\u305f\u304b\u3063\u305f\u306e\u3067\u3001\u305d\u308c\u7528\u306b\u5c11\u3057\u30a2\u30ec\u30f3\u30b8\u3057\u3066\u3044\u307e\u3059\u3002"),(0,n.kt)("h3",{id:"\u74b0\u5883"},"\u74b0\u5883"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Amazon Linux 2 (EC2)"),(0,n.kt)("li",{parentName:"ul"},"PHP 8.0.8"),(0,n.kt)("li",{parentName:"ul"},"Apache HTTP Server 2.4"),(0,n.kt)("li",{parentName:"ul"},"Codeigniter 4")),(0,n.kt)("h3",{id:"\u624b\u9806"},"\u624b\u9806"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"PHP 8 \u3068Apache HTTP Server \u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"$ sudo amazon-linux-extras enable php8.0\n$ sudo yum install -y httpd php php-devel php-mysqlnd php-mbstring php-gd php-xml php-opcache php-pecl-zip php-pear php-intl mod_ssl\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Apache HTTP Server \u3092\u6709\u52b9\u5316 + \u8d77\u52d5"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"$ sudo systemctl enable httpd\n$ sudo systemctl start httpd\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u30d5\u30a1\u30a4\u30eb\u306e\u8a31\u53ef\u8a2d\u5b9a\nec2-user \u3092 apache \u30b0\u30eb\u30fc\u30d7\u306b\u8ffd\u52a0\u3057\u3001apache \u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306e\u6240\u6709\u6a29\u3092 /var/www \u30b0\u30eb\u30fc\u30d7\u306b\u4ed8\u4e0e\u3057\u3001\u30b0\u30eb\u30fc\u30d7\u3078\u306e\u66f8\u304d\u8fbc\u307f\u6a29\u9650\u3092\u5272\u308a\u5f53\u3066\u307e\u3059\u3002"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"$ sudo usermod -a -G apache ec2-user\n$ exit\n")),(0,n.kt)("p",{parentName:"li"},"\u518d\u30ed\u30b0\u30a4\u30f3\u3057\u3066\u3001\u30b0\u30eb\u30fc\u30d7\u304c\u9069\u7528\u3055\u308c\u3066\u3044\u308b\u304b\u78ba\u8a8d\u3059\u308b\u3002"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"$ groups\n")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"/var/www")," \u914d\u4e0b\u306e\u30b0\u30eb\u30fc\u30d7\u3068\u6240\u6709\u6a29\u3092\u5909\u66f4\u3059\u308b\u3002"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"$ sudo chown -R ec2-user:apache /var/www\n$ sudo chmod 2775 /var/www && find /var/www -type d -exec $ sudo chmod 2775 {} \\;\n$ find /var/www -type f -exec sudo chmod 0664 {} \\;\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"(\u30aa\u30d7\u30b7\u30e7\u30f3) Composer \u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\n\u500b\u4eba\u7684\u306b Composer \u3092\u4f7f\u3044\u305f\u304b\u3063\u305f\u306e\u3067\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3066\u3044\u307e\u3059\u3002"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"$ sudo su -\n\n# php -r \"copy('https://getcomposer.org/installer', 'composer-setup.php');\"\n# php -r \"if (hash_file('sha384', 'composer-setup.php') === '756890a4488ce9024fc62c56153228907f1545c228516cbf63f885e036d37e9a59d27d63f46af1d4d07ee0f76181c7d3') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;\"\n# php composer-setup.php\n# php -r \"unlink('composer-setup.php');\"\n# mv composer.phar /usr/local/bin/composer\n# chmod 777 /usr/local/bin/composer\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"SSL/TLS \u306e\u8a2d\u5b9a\n\u81ea\u5df1\u7f72\u540d\u306e\u30c7\u30b8\u30bf\u30eb\u8a3c\u660e\u66f8\u3092\u4f7f\u7528\u3057\u3066\u3001Amazon Linux 2 \u3067 TLS \u3092\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3057\u3066\u304d\u307e\u3059\u3002"),(0,n.kt)("p",{parentName:"li"},"\u30b5\u30fc\u30d0\u30fc\u30db\u30b9\u30c8\u7528\u306e\u81ea\u5df1\u7f72\u540d X.509 \u8a3c\u660e\u66f8\u3068\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u30ad\u30fc\u3092\u751f\u6210\u3059\u308b\u305f\u3081\u306e\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u5229\u7528\u3057\u3066\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3057\u307e\u3059\u3002\n\u4f5c\u6210\u3055\u308c\u305f ",(0,n.kt)("inlineCode",{parentName:"p"},"localhost.crt")," \u306b\u306f\u8a3c\u660e\u66f8\u3068\u30ad\u30fc\u306e\u4e21\u65b9\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"# cd /etc/pki/tls/certs\n# ./make-dummy-cert localhost.crt\n")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"/etc/httpd/conf.d/ssl.conf ")," \u3092\u7de8\u96c6\u3057\u307e\u3059\u3002"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},'DocumentRoot "/var/www/html/public"')," \u3092\u8ffd\u52a0"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"SSLCertificateKeyFile /etc/pki/tls/private/localhost.key")," \u3092\u30b3\u30e1\u30f3\u30c8\u30a2\u30a6\u30c8")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"/etc/httpd/conf.d/vhost.conf")," \u3092\u65b0\u898f\u8ffd\u52a0\u3057\u307e\u3059\uff08",(0,n.kt)("inlineCode",{parentName:"p"},"vhost.conf")," \u3068\u3044\u3046\u30d5\u30a1\u30a4\u30eb\u540d\u3067\u306a\u304f\u3066\u3082OK\uff09\u3002"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-conf"},'<Directory "/var/www/html">\n    AllowOverride All\n</Directory>\n\n<VirtualHost *:80>\n    DocumentRoot "/var/www/html/public"\n</VirtualHost>\n')),(0,n.kt)("p",{parentName:"li"},"\u5b8c\u4e86\u3057\u305f\u3089 ",(0,n.kt)("inlineCode",{parentName:"p"},"Apache HTTP Server")," \u3092\u518d\u8d77\u52d5\u3057\u307e\u3059\u3002"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"# systemctl restart httpd\n# exit\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Codeigniter \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"$ cd /var/www/\n$ composer create-project codeigniter4/appstarter html\n")))),(0,n.kt)("h3",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/ja_jp/AWSEC2/latest/UserGuide/ec2-lamp-amazon-linux-2.html"},"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb: Amazon Linux 2 \u306b LAMP \u30a6\u30a7\u30d6\u30b5\u30fc\u30d0\u30fc\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/ja_jp/AWSEC2/latest/UserGuide/SSL-on-amazon-linux-2.html"},"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb: Amazon Linux 2 \u306b SSL/TLS \u3092\u8a2d\u5b9a\u3059\u308b")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://e-kamo.net/amazon-linux-extras-php8-available"},"Amazon Linux 2 \u306e Extras Library \u306b PHP8.0 \u767b\u5834"))))}s.isMDXComponent=!0}}]);