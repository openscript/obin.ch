(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{225:function(e,t,a){"use strict";a.r(t);var n=a(1),c=(a(0),a(236)),i=a(237),o=a(232);t.default=function(){return Object(n.c)(c.a,null,Object(n.c)(i.a,null),Object(n.c)(o.a,null,Object(n.c)("h2",null,"Projekte")))}},231:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(1),c=a(0),i=a.n(c),o=a(74),l=a.n(o);a.d(t,"a",function(){return l.a});a(233);var r=i.a.createContext({});function s(e){var t=e.staticQueryData,a=e.data,c=e.query,o=e.render,l=a?a.data:t[c]&&t[c].data;return Object(n.c)(i.a.Fragment,null,l&&o(l),!l&&Object(n.c)("div",null,"Loading (StaticQuery)"))}var u=function(e){var t=e.data,a=e.query,c=e.render,i=e.children;return Object(n.c)(r.Consumer,null,function(e){return Object(n.c)(s,{data:t,query:a,render:c||i,staticQueryData:e})})}},232:function(e,t,a){"use strict";var n=a(230),c=a(1),i=a(0),o=a(52),l=Object(n.a)("div",{target:"euvlppp0"})("padding:",o.b.layout.gutter," calc((100vw - ",o.b.layout.pageWidth,") / 2);width:100%;"),r=Object(n.a)("div",{target:"euvlppp1"})("padding:0 ",o.b.layout.gutter,";");t.a=function(e){var t=e.children,a=e.className;return Object(c.c)(i.Fragment,null,Object(c.c)(l,null,Object(c.c)(r,{className:a},t)))}},233:function(e,t,a){var n;e.exports=(n=a(235))&&n.default||n},234:function(e){e.exports={data:{site:{siteMetadata:{title:"r.obin.ch",license:"Robin Bühler - AGPL-3.0",author:{name:"Robin Bühler"}},buildTime:"2019-07-14T14:36:59.323Z"}}}},235:function(e,t,a){"use strict";a.r(t);a(22);var n=a(0),c=a.n(n),i=a(101);t.default=function(e){var t=e.location,a=e.pageResources;return a?c.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null}},236:function(e,t,a){"use strict";a(14);var n=a(230),c=a(1),i=a(234),o=a(0),l=a(231),r=(a(238),a(52)),s=a(232),u=Object(n.a)("header",{target:"e1cdpmfv0"})("display:flex;align-items:center;height:",r.b.layout.headerHeight,";background-color:",r.a.dark,";"),b=function(e){var t=e.className,a=e.children;return Object(c.c)(o.Fragment,null,Object(c.c)(u,null,Object(c.c)(s.a,{className:t},a)))},d=Object(n.a)("main",{target:"eo8lmj10"})("display:flex;flex-direction:column;flex-grow:1;background-color:",r.a.dark,";padding-bottom:",r.b.layout.gutter,";"),g=function(e){var t=e.children,a=e.className;return Object(c.c)(o.Fragment,null,Object(c.c)(d,{className:a},t))},j=Object(n.a)("footer",{target:"e1njxz4v0"})("position:relative;height:",r.b.layout.footerHeight,";background-color:",r.a.orange,";display:flex;align-items:center;font-size:0.8rem;"),m=Object(n.a)("svg",{target:"e1njxz4v1"})("pointer-events:none;position:absolute;width:100%;bottom:100%;left:0;polygon{fill:",r.a.orange,";}"),O=function(e){var t=e.className,a=e.children;return Object(c.c)(o.Fragment,null,Object(c.c)(j,{className:t},Object(c.c)(m,{viewBox:"0 -0.01 100 2",className:"topDivider"},Object(c.c)("polygon",{points:"0 2, 80 0, 100 2"})),Object(c.c)(s.a,null,a)))},p=a(75),v=Object(n.a)(l.a,{target:"e1btdlmi0"})("display:block;color:",r.a.white,";font-size:1.5rem;font-weight:600;text-decoration:none;&:hover,&:focus{span{opacity:1;margin-left:0;}}span{opacity:0;margin-left:-1rem;transition:0.5s;}"),f=function(){return Object(c.c)(o.Fragment,null,Object(c.c)("h1",null,Object(c.c)(v,{to:"/"},"r.obin",Object(c.c)("span",null,".ch"))))},h=a(239),y=a.n(h),w=Object(p.f)(function(e){var t=e.intl,a=e.language,n=e.title,i=e.author;return Object(c.c)(o.Fragment,null,Object(c.c)(y.a,{title:t.formatMessage({id:"subtitle"})+" - "+n,meta:[{name:"description",content:t.formatMessage({id:"description"})},{name:"keywords",content:t.formatMessage({id:"keywords"})},{name:"author",content:i}]},Object(c.c)("html",{lang:a})))}),x=Object(n.a)("nav",{target:"esdts7j0"})({name:"70qvj9",styles:"display:flex;align-items:center;"}),k=Object(n.a)("ul",{target:"esdts7j1"})({name:"1eunmgp",styles:"display:flex;padding:0;margin:0;list-style:none;"}),N=function(e){var t=e.className,a=e.children;return Object(c.c)(x,null,Object(c.c)(k,{className:t},a))},D=Object(n.a)("li",{target:"e119isdo0"})("margin-left:calc(",r.b.layout.gutter," / 2);a{display:block;text-decoration:none;padding:calc(",r.b.layout.gutter," / 2);background-color:rgba(255,255,255,0.1);outline:2px solid transparent;&:hover{outline:2px solid ",r.a.white,";}}"),F=function(e){var t=e.className;return Object(c.c)(N,{className:t},Object(c.c)(D,null,Object(c.c)(l.a,{to:"/about"},Object(c.c)(p.b,{id:"navigation.about"}))),Object(c.c)(D,null,Object(c.c)(l.a,{to:"/projects"},Object(c.c)(p.b,{id:"navigation.projects"}))),Object(c.c)(D,null,Object(c.c)(l.a,{to:"/recordings"},Object(c.c)(p.b,{id:"navigation.recordings"}))),Object(c.c)(D,null,Object(c.c)(l.a,{to:"/blog"},Object(c.c)(p.b,{id:"navigation.blog"}))),Object(c.c)(D,null,Object(c.c)(l.a,{to:"/collection"},Object(c.c)(p.b,{id:"navigation.collection"}))))},z=a(102),M=Object(n.a)(b,{target:"ehz7okw0"})({name:"gg4vpm",styles:"display:flex;justify-content:space-between;"});t.a=function(e){var t=e.children,a=o.useContext(z.a);return Object(c.c)(l.b,{query:"3450679258",render:function(e){return Object(c.c)(o.Fragment,null,Object(c.c)(w,{language:a.langKey,title:e.site.siteMetadata.title,author:e.site.siteMetadata.author.name}),Object(c.c)(M,null,Object(c.c)(f,null),Object(c.c)(F,null)),Object(c.c)(g,null,t),Object(c.c)(O,null,e.site.siteMetadata.license," - ",Object(c.c)(p.a,{value:new Date(e.site.buildTime)})," ",Object(c.c)(p.c,{value:new Date(e.site.buildTime)})))},data:i})}},237:function(e,t,a){"use strict";var n=a(230),c=a(1),i=(a(0),a(52)),o=Object(n.a)("div",{target:"eiy97bz0"})("position:relative;min-height:20rem;height:50vh;background-color:",i.a.white,";color:",i.a.black,";overflow:hidden;"),l=Object(n.a)("svg",{target:"eiy97bz1"})("pointer-events:none;position:absolute;margin:0 -1px;&.topDivider{top:0;left:0;}&.bottomDivider{bottom:0;left:0;}polygon{fill:",i.a.dark,";}");t.a=function(e){var t=e.className;return Object(c.c)(o,{className:t},Object(c.c)(l,{viewBox:"0 0 100 2",className:"topDivider"},Object(c.c)("polygon",{points:"0 0, 100 0, 100 2, 20 0, 0 2"})),Object(c.c)("div",null,"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio animi doloribus possimus voluptas deserunt magnam. Dolore non culpa fugiat in commodi facere expedita blanditiis deleniti odio, veniam exercitationem ab ipsam."),Object(c.c)(l,{viewBox:"0 0 100 2",className:"bottomDivider"},Object(c.c)("polygon",{points:"0 0, 80 2, 100 0, 100 2, 0 100"})))}}}]);
//# sourceMappingURL=component---src-pages-projects-de-tsx-3c2a10087f2078fb6bcc.js.map