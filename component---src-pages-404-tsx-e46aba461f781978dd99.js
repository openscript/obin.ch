(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{181:function(e,t,a){"use strict";a.r(t);var n=a(6),r=(a(0),a(186)),c=a(199),i=a(200),o=a(191);t.default=function(){return Object(n.c)(o.a,null,Object(n.c)(c.a,null,Object(n.c)(i.a,null,Object(n.c)("h1",null,"404: Page not found."),Object(n.c)("p",null,"You've hit the void. ",Object(n.c)(r.a,{to:"/"},"Go back.")))))}},184:function(e,t,a){"use strict";a.d(t,"b",function(){return n}),a.d(t,"a",function(){return r}),a.d(t,"c",function(){return c});var n={baseSize:{regular:"16px",large:"18px"},layout:{gutter:"1.5rem",pageWidth:"80rem",headerHeight:"8rem",footerHeight:"5rem"}},r={white:"#EEEEEE",dark:"#6A4A3C",red:"#CC333F",orange:"#EB6841",yellow:"#EDC951",contra:"#00A0B0"},c={sansSerif:"'Roboto', 'Verdana', 'Ubuntu', sans-serif"}},186:function(e,t,a){"use strict";a.d(t,"b",function(){return b});var n=a(6),r=a(0),c=a.n(r),i=a(14),o=a.n(i),l=a(66),s=a.n(l);a.d(t,"a",function(){return s.a});a(187);var u=c.a.createContext({});function d(e){var t=e.staticQueryData,a=e.data,r=e.query,i=e.render,o=a?a.data:t[r]&&t[r].data;return Object(n.c)(c.a.Fragment,null,o&&i(o),!o&&Object(n.c)("div",null,"Loading (StaticQuery)"))}var b=function(e){var t=e.data,a=e.query,r=e.render,c=e.children;return Object(n.c)(u.Consumer,null,function(e){return Object(n.c)(d,{data:t,query:a,render:r||c,staticQueryData:e})})};b.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},187:function(e,t,a){var n;e.exports=(n=a(190))&&n.default||n},188:function(e,t,a){"use strict";a.d(t,"b",function(){return n}),a.d(t,"a",function(){return r});var n={language:{key:"de",name:"Deutsch"}.key,messages:{name:"Deutsch"}},r={language:{key:"en",name:"English"}.key,messages:{name:"Englisch"}}},189:function(e){e.exports={data:{site:{siteMetadata:{title:"r.obin.ch",description:"Eine persönliche Webseite.",keywords:"blog, experiments, software, teaching, traveling, photos",license:"Robin Bühler - AGPL-3.0"},buildTime:"2019-07-12T14:50:50.422Z"}}}},190:function(e,t,a){"use strict";a.r(t);a(20);var n=a(0),r=a.n(n),c=a(14),i=a.n(c),o=a(91),l=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=l},191:function(e,t,a){"use strict";var n=a(6),r=a(189),c=a(0),i=a(194),o=a.n(i),l=a(186),s=(a(192),a(185)),u=a(184),d=Object(s.a)("header",{target:"e1cdpmfv0"})("position:relative;height:",u.b.layout.headerHeight,";background-color:",u.a.dark,";"),b=Object(s.a)(l.a,{target:"e1cdpmfv1"})({name:"r6zb1u",styles:"color:white;font-size:1.5rem;font-weight:600;&:hover,&:focus{text-decoration:none;}"}),g=function(e){var t=e.title;return Object(n.c)(c.Fragment,null,Object(n.c)(d,null,Object(n.c)(b,{to:"/"},t)))},f=a(51),m=Object(f.a)("html{height:100%;font-size:",u.b.baseSize.regular,";font-family:",u.c.sansSerif,";}body{display:flex;min-height:100%;flex-direction:column;}#___gatsby,#___gatsby > *{display:flex;flex-direction:column;flex-grow:1;}header,footer{padding:",u.b.layout.gutter," calc((100vw - ",u.b.layout.pageWidth,") / 2);}"),h=function(e){var t=e.children;return Object(n.c)(c.Fragment,null,Object(n.c)(n.a,{styles:m}),t)},j=Object(s.a)("main",{target:"eo8lmj10"})("display:flex;flex-direction:column;flex-grow:1;background-color:",u.a.dark,";"),p=function(e){var t=e.children,a=e.className;return Object(n.c)(c.Fragment,null,Object(n.c)(j,{className:a},t))},O=Object(s.a)("footer",{target:"e1njxz4v0"})("height:",u.b.layout.footerHeight,";background-color:",u.a.orange,";display:flex;align-items:center;"),v=Object(s.a)("svg",{target:"e1njxz4v1"})("width:100%;background-color:",u.a.orange,";polygon{fill:",u.a.dark,";}"),y=function(e){var t=e.className,a=e.children;return Object(n.c)(c.Fragment,null,Object(n.c)(v,{viewBox:"0 0 100 2",className:"topDivider"},Object(n.c)("polygon",{points:"0 0, 100 0, 100 2, 80 0, 0 2"})),Object(n.c)(O,{className:t},a))},w=a(193),k=a(188);t.a=function(e){var t=e.children,a=e.translation,c=void 0===a?k.a:a;return Object(n.c)(l.b,{query:"278654265",render:function(e){return Object(n.c)(w.a,{locale:c.language,messages:c.messages},Object(n.c)(h,null,Object(n.c)(o.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:e.site.siteMetadata.description},{name:"keywords",content:e.site.siteMetadata.keywords}]},Object(n.c)("html",{lang:c.language})),Object(n.c)(g,{title:e.site.siteMetadata.title}),Object(n.c)(p,null,t),Object(n.c)(y,null,e.site.siteMetadata.license," - ",new Date(e.site.buildTime).toISOString())))},data:r})}},196:function(e,t){},197:function(e,t){},198:function(e,t){},199:function(e,t,a){"use strict";var n=a(185),r=a(6),c=(a(0),Object(n.a)("div",{target:"e1dc9ufa0"})({name:"bk2lmt",styles:"display:block;flex:1;position:relative;margin-bottom:3rem;"}));t.a=function(e){var t=e.children,a=e.className;return Object(r.c)(c,{className:a},t)}},200:function(e,t,a){"use strict";var n=a(185),r=a(6),c=(a(0),Object(n.a)("div",{target:"e1ybanhq0"})({name:"1dsfeos",styles:"position:relative;margin-left:auto;margin-right:auto;width:auto;"}));t.a=function(e){var t=e.children,a=e.className;return Object(r.c)(c,{className:a},t)}}}]);
//# sourceMappingURL=component---src-pages-404-tsx-e46aba461f781978dd99.js.map