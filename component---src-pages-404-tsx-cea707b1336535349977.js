(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{180:function(e,t,n){"use strict";n.r(t);var a=n(6),c=(n(0),n(187)),r=n(193),i=n(186);t.default=function(){return Object(a.c)(r.a,null,Object(a.c)(i.a,null,Object(a.c)("h1",null,"404: Page not found."),Object(a.c)("p",null,"You've hit the void. ",Object(a.c)(c.a,{to:"/"},"Go back."))))}},184:function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"a",function(){return c}),n.d(t,"c",function(){return r});var a={baseSize:{regular:"16px",large:"18px"},layout:{gutter:"1.5rem",pageWidth:"80rem",headerHeight:"5rem",footerHeight:"4rem"}},c={black:"#111111",white:"#EEEEEE",dark:"#6A4A3C",red:"#CC333F",orange:"#EB6841",yellow:"#EDC951",contra:"#00A0B0"},r={sansSerif:"'Roboto', 'Verdana', 'Ubuntu', sans-serif"}},186:function(e,t,n){"use strict";var a=n(185),c=n(6),r=n(0),i=n(184),l=Object(a.a)("div",{target:"euvlppp0"})("padding:",i.b.layout.gutter," calc((100vw - ",i.b.layout.pageWidth,") / 2);width:100%;"),o=Object(a.a)("div",{target:"euvlppp1"})("padding:0 ",i.b.layout.gutter,";");t.a=function(e){var t=e.children,n=e.className;return Object(c.c)(r.Fragment,null,Object(c.c)(l,null,Object(c.c)(o,{className:n},t)))}},187:function(e,t,n){"use strict";n.d(t,"b",function(){return g});var a=n(6),c=n(0),r=n.n(c),i=n(14),l=n.n(i),o=n(66),s=n.n(o);n.d(t,"a",function(){return s.a});n(188);var u=r.a.createContext({});function b(e){var t=e.staticQueryData,n=e.data,c=e.query,i=e.render,l=n?n.data:t[c]&&t[c].data;return Object(a.c)(r.a.Fragment,null,l&&i(l),!l&&Object(a.c)("div",null,"Loading (StaticQuery)"))}var g=function(e){var t=e.data,n=e.query,c=e.render,r=e.children;return Object(a.c)(u.Consumer,null,function(e){return Object(a.c)(b,{data:t,query:n,render:c||r,staticQueryData:e})})};g.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},188:function(e,t,n){var a;e.exports=(a=n(192))&&a.default||a},190:function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"a",function(){return c});var a={language:{key:"de",name:"Deutsch"}.key,messages:{language:"Deutsch",subtitle:"Mein Faszikel",description:"Persönliche Webseite zu den Themen: Informatik, Progressive Webapplikationen (PWA), Softwareentwicklung und vieles mehr.",keywords:"Informatik, Progressive Webapplikationen, Informatik Schulungen, Experte für Softwareentwicklung, persönlich, engagiert"}},c={language:{key:"en",name:"English"}.key,messages:{language:"Englisch",subtitle:"My fascicle",description:"Personal website about topics like: information technologies, progressive web applications (PWA), software development and much more.",keywords:"computer science, progressive web applications, IT teaching, expert for software development"}}},191:function(e){e.exports={data:{site:{siteMetadata:{title:"r.obin.ch",license:"Robin Bühler - AGPL-3.0",author:{name:"Robin Bühler"}},buildTime:"2019-07-12T23:31:51.555Z"}}}},192:function(e,t,n){"use strict";n.r(t);n(20);var a=n(0),c=n.n(a),r=n(14),i=n.n(r),l=n(91),o=function(e){var t=e.location,n=e.pageResources;return n?c.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json)):null};o.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=o},193:function(e,t,n){"use strict";n(17);var a=n(185),c=n(6),r=n(191),i=n(0),l=n(187),o=(n(194),n(184)),s=n(186),u=Object(a.a)("header",{target:"e1cdpmfv0"})("display:flex;align-items:center;height:",o.b.layout.headerHeight,";background-color:",o.a.dark,";"),b=function(e){var t=e.className,n=e.children;return Object(c.c)(i.Fragment,null,Object(c.c)(u,null,Object(c.c)(s.a,{className:t},n)))},g=n(51),d=Object(g.a)("html{height:100%;font-size:",o.b.baseSize.regular,";font-family:",o.c.sansSerif,";}body{scroll-behavior:smooth;display:flex;min-height:100%;flex-direction:column;color:",o.a.black,";}main,a{color:",o.a.white,";}#___gatsby,#___gatsby > *{display:flex;flex-direction:column;flex-grow:1;}"),f=function(e){var t=e.children;return Object(c.c)(i.Fragment,null,Object(c.c)(c.a,{styles:d}),t)},m=Object(a.a)("main",{target:"eo8lmj10"})("display:flex;flex-direction:column;flex-grow:1;background-color:",o.a.dark,";"),p=function(e){var t=e.children,n=e.className;return Object(c.c)(i.Fragment,null,Object(c.c)(m,{className:n},t))},j=Object(a.a)("footer",{target:"e1njxz4v0"})("position:relative;height:",o.b.layout.footerHeight,";background-color:",o.a.orange,";display:flex;align-items:center;font-size:0.8rem;"),h=Object(a.a)("svg",{target:"e1njxz4v1"})("position:absolute;width:100%;bottom:100%;left:0;polygon{fill:",o.a.orange,";}"),O=function(e){var t=e.className,n=e.children;return Object(c.c)(i.Fragment,null,Object(c.c)(j,{className:t},Object(c.c)(h,{viewBox:"0 -0.01 100 2",className:"topDivider"},Object(c.c)("polygon",{points:"0 2, 80 0, 100 2"})),Object(c.c)(s.a,null,n)))},v=n(189),y=n(190),w=Object(a.a)(l.a,{target:"e1btdlmi0"})("display:block;color:",o.a.white,";font-size:1.5rem;font-weight:600;text-decoration:none;&:hover,&:focus{span{opacity:1;margin-left:0;}}span{opacity:0;margin-left:-1rem;transition:0.5s;}"),k=function(){return Object(c.c)(i.Fragment,null,Object(c.c)("h1",null,Object(c.c)(w,{to:"/"},"r.obin",Object(c.c)("span",null,".ch"))))},x=n(199),E=n.n(x),N=Object(v.e)(function(e){var t=e.intl,n=e.language,a=e.title,r=e.author;return Object(c.c)(i.Fragment,null,Object(c.c)(E.a,{title:t.formatMessage({id:"subtitle"})+" - "+a,meta:[{name:"description",content:t.formatMessage({id:"description"})},{name:"keywords",content:t.formatMessage({id:"keywords"})},{name:"author",content:r},{name:"theme-color",content:o.a.orange}]},Object(c.c)("html",{lang:n})))}),z=Object(a.a)("nav",{target:"e119isdo0"})({name:"70qvj9",styles:"display:flex;align-items:center;"}),F=Object(a.a)("ul",{target:"e119isdo1"})("display:flex;padding:0;margin:0;list-style:none;li{margin-left:",o.b.layout.gutter,";}"),q=function(e){var t=e.className;return Object(c.c)(z,{className:t},Object(c.c)(F,null,Object(c.c)("li",null,"Über mich"),Object(c.c)("li",null,"Projekte"),Object(c.c)("li",null,"Aufnahmen"),Object(c.c)("li",null,"Weblog"),Object(c.c)("li",null,"Sammlung")))},M=Object(a.a)(b,{target:"ehz7okw0"})({name:"gg4vpm",styles:"display:flex;justify-content:space-between;"});t.a=function(e){var t=e.children,n=e.translation,a=void 0===n?y.a:n;return Object(c.c)(l.b,{query:"1634467168",render:function(e){return Object(c.c)(v.c,{locale:a.language,messages:a.messages},Object(c.c)(f,null,Object(c.c)(N,{language:a.language,title:e.site.siteMetadata.title,author:e.site.siteMetadata.author.name}),Object(c.c)(M,null,Object(c.c)(k,null),Object(c.c)(q,null)),Object(c.c)(p,null,t),Object(c.c)(O,null,e.site.siteMetadata.license," - ",Object(c.c)(v.a,{value:new Date(e.site.buildTime)})," ",Object(c.c)(v.b,{value:new Date(e.site.buildTime)}))))},data:r})}},196:function(e,t){},197:function(e,t){},198:function(e,t){}}]);
//# sourceMappingURL=component---src-pages-404-tsx-cea707b1336535349977.js.map