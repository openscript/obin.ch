(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{183:function(e,t,a){"use strict";a.r(t);var n=a(6),c=(a(0),a(194),a(190)),i=a(189),r=a(233),l=a(193);Object(i.d)([].concat(r));var o=function(e){var t=e.children;return Object(n.c)(l.a,{children:t,translation:c.a})},s=a(200),u=a(186);t.default=function(){return Object(n.c)(o,null,Object(n.c)(s.a,null),Object(n.c)(u.a,null,Object(n.c)("p",null,"Welcome :)")))}},184:function(e,t,a){"use strict";a.d(t,"b",function(){return n}),a.d(t,"a",function(){return c}),a.d(t,"c",function(){return i});var n={baseSize:{regular:"16px",large:"18px"},layout:{gutter:"1.5rem",pageWidth:"80rem",headerHeight:"5rem",footerHeight:"4rem"}},c={black:"#111111",white:"#EEEEEE",dark:"#6A4A3C",red:"#CC333F",orange:"#EB6841",yellow:"#EDC951",contra:"#00A0B0"},i={sansSerif:"'Roboto', 'Verdana', 'Ubuntu', sans-serif"}},186:function(e,t,a){"use strict";var n=a(185),c=a(6),i=a(0),r=a(184),l=Object(n.a)("div",{target:"euvlppp0"})("padding:",r.b.layout.gutter," calc((100vw - ",r.b.layout.pageWidth,") / 2);width:100%;"),o=Object(n.a)("div",{target:"euvlppp1"})("padding:0 ",r.b.layout.gutter,";");t.a=function(e){var t=e.children,a=e.className;return Object(c.c)(i.Fragment,null,Object(c.c)(l,null,Object(c.c)(o,{className:a},t)))}},187:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var n=a(6),c=a(0),i=a.n(c),r=a(14),l=a.n(r),o=a(66),s=a.n(o);a.d(t,"a",function(){return s.a});a(188);var u=i.a.createContext({});function b(e){var t=e.staticQueryData,a=e.data,c=e.query,r=e.render,l=a?a.data:t[c]&&t[c].data;return Object(n.c)(i.a.Fragment,null,l&&r(l),!l&&Object(n.c)("div",null,"Loading (StaticQuery)"))}var d=function(e){var t=e.data,a=e.query,c=e.render,i=e.children;return Object(n.c)(u.Consumer,null,function(e){return Object(n.c)(b,{data:t,query:a,render:c||i,staticQueryData:e})})};d.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},188:function(e,t,a){var n;e.exports=(n=a(192))&&n.default||n},190:function(e,t,a){"use strict";a.d(t,"b",function(){return n}),a.d(t,"a",function(){return c});var n={language:{key:"de",name:"Deutsch"}.key,messages:{language:"Deutsch",subtitle:"Mein Faszikel",description:"Persönliche Webseite zu den Themen: Informatik, Progressive Webapplikationen (PWA), Softwareentwicklung und vieles mehr.",keywords:"Informatik, Progressive Webapplikationen, Informatik Schulungen, Experte für Softwareentwicklung, persönlich, engagiert"}},c={language:{key:"en",name:"English"}.key,messages:{language:"Englisch",subtitle:"My fascicle",description:"Personal website about topics like: information technologies, progressive web applications (PWA), software development and much more.",keywords:"computer science, progressive web applications, IT teaching, expert for software development"}}},191:function(e){e.exports={data:{site:{siteMetadata:{title:"r.obin.ch",license:"Robin Bühler - AGPL-3.0",author:{name:"Robin Bühler"}},buildTime:"2019-07-12T23:31:51.555Z"}}}},192:function(e,t,a){"use strict";a.r(t);a(20);var n=a(0),c=a.n(n),i=a(14),r=a.n(i),l=a(91),o=function(e){var t=e.location,a=e.pageResources;return a?c.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null};o.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},t.default=o},193:function(e,t,a){"use strict";a(17);var n=a(185),c=a(6),i=a(191),r=a(0),l=a(187),o=(a(194),a(184)),s=a(186),u=Object(n.a)("header",{target:"e1cdpmfv0"})("display:flex;align-items:center;height:",o.b.layout.headerHeight,";background-color:",o.a.dark,";"),b=function(e){var t=e.className,a=e.children;return Object(c.c)(r.Fragment,null,Object(c.c)(u,null,Object(c.c)(s.a,{className:t},a)))},d=a(51),g=Object(d.a)("html{height:100%;font-size:",o.b.baseSize.regular,";font-family:",o.c.sansSerif,";}body{scroll-behavior:smooth;display:flex;min-height:100%;flex-direction:column;color:",o.a.black,";}main,a{color:",o.a.white,";}#___gatsby,#___gatsby > *{display:flex;flex-direction:column;flex-grow:1;}"),m=function(e){var t=e.children;return Object(c.c)(r.Fragment,null,Object(c.c)(c.a,{styles:g}),t)},f=Object(n.a)("main",{target:"eo8lmj10"})("display:flex;flex-direction:column;flex-grow:1;background-color:",o.a.dark,";"),p=function(e){var t=e.children,a=e.className;return Object(c.c)(r.Fragment,null,Object(c.c)(f,{className:a},t))},j=Object(n.a)("footer",{target:"e1njxz4v0"})("position:relative;height:",o.b.layout.footerHeight,";background-color:",o.a.orange,";display:flex;align-items:center;font-size:0.8rem;"),h=Object(n.a)("svg",{target:"e1njxz4v1"})("position:absolute;width:100%;bottom:100%;left:0;polygon{fill:",o.a.orange,";}"),O=function(e){var t=e.className,a=e.children;return Object(c.c)(r.Fragment,null,Object(c.c)(j,{className:t},Object(c.c)(h,{viewBox:"0 -0.01 100 2",className:"topDivider"},Object(c.c)("polygon",{points:"0 2, 80 0, 100 2"})),Object(c.c)(s.a,null,a)))},v=a(189),y=a(190),w=Object(n.a)(l.a,{target:"e1btdlmi0"})("display:block;color:",o.a.white,";font-size:1.5rem;font-weight:600;text-decoration:none;&:hover,&:focus{span{opacity:1;margin-left:0;}}span{opacity:0;margin-left:-1rem;transition:0.5s;}"),k=function(){return Object(c.c)(r.Fragment,null,Object(c.c)("h1",null,Object(c.c)(w,{to:"/"},"r.obin",Object(c.c)("span",null,".ch"))))},x=a(199),N=a.n(x),D=Object(v.e)(function(e){var t=e.intl,a=e.language,n=e.title,i=e.author;return Object(c.c)(r.Fragment,null,Object(c.c)(N.a,{title:t.formatMessage({id:"subtitle"})+" - "+n,meta:[{name:"description",content:t.formatMessage({id:"description"})},{name:"keywords",content:t.formatMessage({id:"keywords"})},{name:"author",content:i},{name:"theme-color",content:o.a.orange}]},Object(c.c)("html",{lang:a})))}),z=Object(n.a)("nav",{target:"e119isdo0"})({name:"70qvj9",styles:"display:flex;align-items:center;"}),E=Object(n.a)("ul",{target:"e119isdo1"})("display:flex;padding:0;margin:0;list-style:none;li{margin-left:",o.b.layout.gutter,";}"),F=function(e){var t=e.className;return Object(c.c)(z,{className:t},Object(c.c)(E,null,Object(c.c)("li",null,"Über mich"),Object(c.c)("li",null,"Projekte"),Object(c.c)("li",null,"Aufnahmen"),Object(c.c)("li",null,"Weblog"),Object(c.c)("li",null,"Sammlung")))},q=Object(n.a)(b,{target:"ehz7okw0"})({name:"gg4vpm",styles:"display:flex;justify-content:space-between;"});t.a=function(e){var t=e.children,a=e.translation,n=void 0===a?y.a:a;return Object(c.c)(l.b,{query:"1634467168",render:function(e){return Object(c.c)(v.c,{locale:n.language,messages:n.messages},Object(c.c)(m,null,Object(c.c)(D,{language:n.language,title:e.site.siteMetadata.title,author:e.site.siteMetadata.author.name}),Object(c.c)(q,null,Object(c.c)(k,null),Object(c.c)(F,null)),Object(c.c)(p,null,t),Object(c.c)(O,null,e.site.siteMetadata.license," - ",Object(c.c)(v.a,{value:new Date(e.site.buildTime)})," ",Object(c.c)(v.b,{value:new Date(e.site.buildTime)}))))},data:i})}},196:function(e,t){},197:function(e,t){},198:function(e,t){},200:function(e,t,a){"use strict";var n=a(185),c=a(6),i=(a(0),a(184)),r=Object(n.a)("div",{target:"eiy97bz0"})("position:relative;min-height:20rem;height:50vh;background-color:",i.a.white,";color:",i.a.black,";overflow:hidden;"),l=Object(n.a)("svg",{target:"eiy97bz1"})("position:absolute;margin:0 -1px;&.topDivider{top:0;left:0;}&.bottomDivider{bottom:0;left:0;}polygon{fill:",i.a.dark,";}");t.a=function(e){var t=e.className;return Object(c.c)(r,{className:t},Object(c.c)(l,{viewBox:"0 0 100 2",className:"topDivider"},Object(c.c)("polygon",{points:"0 0, 100 0, 100 2, 20 0, 0 2"})),Object(c.c)("div",null,"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio animi doloribus possimus voluptas deserunt magnam. Dolore non culpa fugiat in commodi facere expedita blanditiis deleniti odio, veniam exercitationem ab ipsam."),Object(c.c)(l,{viewBox:"0 0 100 2",className:"bottomDivider"},Object(c.c)("polygon",{points:"0 0, 80 2, 100 0, 100 2, 0 100"})))}}}]);
//# sourceMappingURL=component---src-pages-index-en-tsx-1610cb4c3da3ccdc678e.js.map