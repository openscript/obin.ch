(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{214:function(e,t,a){"use strict";a.r(t);var n=a(5),c=(a(0),a(230)),r=a(235),i=a(231);t.default=function(){return Object(n.c)(r.a,null,Object(n.c)(i.a,null,Object(n.c)("h1",null,"404: Page not found."),Object(n.c)("p",null,"You've hit the void. ",Object(n.c)(c.a,{to:"/"},"Go back."))))}},229:function(e,t,a){"use strict";a.d(t,"b",function(){return n}),a.d(t,"a",function(){return c}),a.d(t,"c",function(){return r});var n={baseSize:{regular:"16px",large:"18px"},layout:{gutter:"1.5rem",pageWidth:"80rem",headerHeight:"5rem",footerHeight:"4rem"}},c={black:"#111111",white:"#EEEEEE",dark:"#6A4A3C",red:"#CC333F",orange:"#EB6841",yellow:"#EDC951",contra:"#00A0B0"},r={sansSerif:"'Roboto', 'Verdana', 'Ubuntu', sans-serif"}},230:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var n=a(5),c=a(0),r=a.n(c),i=a(1),l=a.n(i),o=a(73),u=a.n(o);a.d(t,"a",function(){return u.a});a(232);var s=r.a.createContext({});function b(e){var t=e.staticQueryData,a=e.data,c=e.query,i=e.render,l=a?a.data:t[c]&&t[c].data;return Object(n.c)(r.a.Fragment,null,l&&i(l),!l&&Object(n.c)("div",null,"Loading (StaticQuery)"))}var d=function(e){var t=e.data,a=e.query,c=e.render,r=e.children;return Object(n.c)(s.Consumer,null,function(e){return Object(n.c)(b,{data:t,query:a,render:c||r,staticQueryData:e})})};d.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},231:function(e,t,a){"use strict";var n=a(228),c=a(5),r=a(0),i=a(229),l=Object(n.a)("div",{target:"euvlppp0"})("padding:",i.b.layout.gutter," calc((100vw - ",i.b.layout.pageWidth,") / 2);width:100%;"),o=Object(n.a)("div",{target:"euvlppp1"})("padding:0 ",i.b.layout.gutter,";");t.a=function(e){var t=e.children,a=e.className;return Object(c.c)(r.Fragment,null,Object(c.c)(l,null,Object(c.c)(o,{className:a},t)))}},232:function(e,t,a){var n;e.exports=(n=a(234))&&n.default||n},233:function(e){e.exports={data:{site:{siteMetadata:{title:"r.obin.ch",license:"Robin Bühler - AGPL-3.0",author:{name:"Robin Bühler"}},buildTime:"2019-07-14T11:32:15.833Z"}}}},234:function(e,t,a){"use strict";a.r(t);a(21);var n=a(0),c=a.n(n),r=a(1),i=a.n(r),l=a(99),o=function(e){var t=e.location,a=e.pageResources;return a?c.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null};o.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=o},235:function(e,t,a){"use strict";a(15);var n=a(228),c=a(5),r=a(233),i=a(0),l=a(230),o=(a(237),a(229)),u=a(231),s=Object(n.a)("header",{target:"e1cdpmfv0"})("display:flex;align-items:center;height:",o.b.layout.headerHeight,";background-color:",o.a.dark,";"),b=function(e){var t=e.className,a=e.children;return Object(c.c)(i.Fragment,null,Object(c.c)(s,null,Object(c.c)(u.a,{className:t},a)))},d=a(56),g=Object(d.a)("html{height:100%;font-size:",o.b.baseSize.regular,";font-family:",o.c.sansSerif,";}body{scroll-behavior:smooth;display:flex;min-height:100%;flex-direction:column;color:",o.a.black,";}main,a{color:",o.a.white,";}#___gatsby,#___gatsby > *{display:flex;flex-direction:column;flex-grow:1;}"),j=function(e){var t=e.children;return Object(c.c)(i.Fragment,null,Object(c.c)(c.a,{styles:g}),t)},O=Object(n.a)("main",{target:"eo8lmj10"})("display:flex;flex-direction:column;flex-grow:1;background-color:",o.a.dark,";padding-bottom:",o.b.layout.gutter,";"),f=function(e){var t=e.children,a=e.className;return Object(c.c)(i.Fragment,null,Object(c.c)(O,{className:a},t))},m=Object(n.a)("footer",{target:"e1njxz4v0"})("position:relative;height:",o.b.layout.footerHeight,";background-color:",o.a.orange,";display:flex;align-items:center;font-size:0.8rem;"),p=Object(n.a)("svg",{target:"e1njxz4v1"})("pointer-events:none;position:absolute;width:100%;bottom:100%;left:0;polygon{fill:",o.a.orange,";}"),h=function(e){var t=e.className,a=e.children;return Object(c.c)(i.Fragment,null,Object(c.c)(m,{className:t},Object(c.c)(p,{viewBox:"0 -0.01 100 2",className:"topDivider"},Object(c.c)("polygon",{points:"0 2, 80 0, 100 2"})),Object(c.c)(u.a,null,a)))},v=a(74),y=Object(n.a)(l.a,{target:"e1btdlmi0"})("display:block;color:",o.a.white,";font-size:1.5rem;font-weight:600;text-decoration:none;&:hover,&:focus{span{opacity:1;margin-left:0;}}span{opacity:0;margin-left:-1rem;transition:0.5s;}"),x=function(){return Object(c.c)(i.Fragment,null,Object(c.c)("h1",null,Object(c.c)(y,{to:"/"},"r.obin",Object(c.c)("span",null,".ch"))))},w=a(238),k=a.n(w),N=Object(v.f)(function(e){var t=e.intl,a=e.language,n=e.title,r=e.author;return Object(c.c)(i.Fragment,null,Object(c.c)(k.a,{title:t.formatMessage({id:"subtitle"})+" - "+n,meta:[{name:"description",content:t.formatMessage({id:"description"})},{name:"keywords",content:t.formatMessage({id:"keywords"})},{name:"author",content:r}]},Object(c.c)("html",{lang:a})))}),q=Object(n.a)("nav",{target:"esdts7j0"})({name:"70qvj9",styles:"display:flex;align-items:center;"}),E=Object(n.a)("ul",{target:"esdts7j1"})({name:"1eunmgp",styles:"display:flex;padding:0;margin:0;list-style:none;"}),F=function(e){var t=e.className,a=e.children;return Object(c.c)(q,null,Object(c.c)(E,{className:t},a))},z=Object(n.a)("li",{target:"e119isdo0"})("margin-left:calc(",o.b.layout.gutter," / 2);a{display:block;text-decoration:none;padding:calc(",o.b.layout.gutter," / 2);background-color:rgba(255,255,255,0.1);outline:2px solid transparent;&:hover{outline:2px solid ",o.a.white,";}}"),R=function(e){var t=e.className;return Object(c.c)(F,{className:t},Object(c.c)(z,null,Object(c.c)(l.a,{to:"/about"},Object(c.c)(v.b,{id:"navigation.about"}))),Object(c.c)(z,null,Object(c.c)(l.a,{to:"/projects"},Object(c.c)(v.b,{id:"navigation.projects"}))),Object(c.c)(z,null,Object(c.c)(l.a,{to:"/recordings"},Object(c.c)(v.b,{id:"navigation.recordings"}))),Object(c.c)(z,null,Object(c.c)(l.a,{to:"/blog"},Object(c.c)(v.b,{id:"navigation.blog"}))),Object(c.c)(z,null,Object(c.c)(l.a,{to:"/collection"},Object(c.c)(v.b,{id:"navigation.collection"}))))},C=a(100),M=Object(n.a)(b,{target:"ehz7okw0"})({name:"gg4vpm",styles:"display:flex;justify-content:space-between;"});t.a=function(e){var t=e.children,a=i.useContext(C.a);return Object(c.c)(l.b,{query:"3450679258",render:function(e){return Object(c.c)(j,null,Object(c.c)(N,{language:a.langKey,title:e.site.siteMetadata.title,author:e.site.siteMetadata.author.name}),Object(c.c)(M,null,Object(c.c)(x,null),Object(c.c)(R,null)),Object(c.c)(f,null,t),Object(c.c)(h,null,e.site.siteMetadata.license," - ",Object(c.c)(v.a,{value:new Date(e.site.buildTime)})," ",Object(c.c)(v.c,{value:new Date(e.site.buildTime)})))},data:r})}}}]);
//# sourceMappingURL=component---src-pages-404-tsx-1913daf0511e3232354c.js.map