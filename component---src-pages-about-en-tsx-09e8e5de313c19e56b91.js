(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{216:function(e,t,a){"use strict";a.r(t);var n=a(5),c=(a(0),a(235)),i=a(236),r=a(231);t.default=function(){return Object(n.c)(c.a,null,Object(n.c)(i.a,null),Object(n.c)(r.a,null,Object(n.c)("h2",null,"About me")))}},229:function(e,t,a){"use strict";a.d(t,"b",function(){return n}),a.d(t,"a",function(){return c}),a.d(t,"c",function(){return i});var n={baseSize:{regular:"16px",large:"18px"},layout:{gutter:"1.5rem",pageWidth:"80rem",headerHeight:"5rem",footerHeight:"4rem"}},c={black:"#111111",white:"#EEEEEE",dark:"#6A4A3C",red:"#CC333F",orange:"#EB6841",yellow:"#EDC951",contra:"#00A0B0"},i={sansSerif:"'Roboto', 'Verdana', 'Ubuntu', sans-serif"}},230:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var n=a(5),c=a(0),i=a.n(c),r=a(1),o=a.n(r),l=a(73),s=a.n(l);a.d(t,"a",function(){return s.a});a(232);var u=i.a.createContext({});function b(e){var t=e.staticQueryData,a=e.data,c=e.query,r=e.render,o=a?a.data:t[c]&&t[c].data;return Object(n.c)(i.a.Fragment,null,o&&r(o),!o&&Object(n.c)("div",null,"Loading (StaticQuery)"))}var d=function(e){var t=e.data,a=e.query,c=e.render,i=e.children;return Object(n.c)(u.Consumer,null,function(e){return Object(n.c)(b,{data:t,query:a,render:c||i,staticQueryData:e})})};d.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},231:function(e,t,a){"use strict";var n=a(228),c=a(5),i=a(0),r=a(229),o=Object(n.a)("div",{target:"euvlppp0"})("padding:",r.b.layout.gutter," calc((100vw - ",r.b.layout.pageWidth,") / 2);width:100%;"),l=Object(n.a)("div",{target:"euvlppp1"})("padding:0 ",r.b.layout.gutter,";");t.a=function(e){var t=e.children,a=e.className;return Object(c.c)(i.Fragment,null,Object(c.c)(o,null,Object(c.c)(l,{className:a},t)))}},232:function(e,t,a){var n;e.exports=(n=a(234))&&n.default||n},233:function(e){e.exports={data:{site:{siteMetadata:{title:"r.obin.ch",license:"Robin Bühler - AGPL-3.0",author:{name:"Robin Bühler"}},buildTime:"2019-07-14T11:32:15.833Z"}}}},234:function(e,t,a){"use strict";a.r(t);a(21);var n=a(0),c=a.n(n),i=a(1),r=a.n(i),o=a(99),l=function(e){var t=e.location,a=e.pageResources;return a?c.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null};l.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},t.default=l},235:function(e,t,a){"use strict";a(15);var n=a(228),c=a(5),i=a(233),r=a(0),o=a(230),l=(a(237),a(229)),s=a(231),u=Object(n.a)("header",{target:"e1cdpmfv0"})("display:flex;align-items:center;height:",l.b.layout.headerHeight,";background-color:",l.a.dark,";"),b=function(e){var t=e.className,a=e.children;return Object(c.c)(r.Fragment,null,Object(c.c)(u,null,Object(c.c)(s.a,{className:t},a)))},d=a(56),g=Object(d.a)("html{height:100%;font-size:",l.b.baseSize.regular,";font-family:",l.c.sansSerif,";}body{scroll-behavior:smooth;display:flex;min-height:100%;flex-direction:column;color:",l.a.black,";}main,a{color:",l.a.white,";}#___gatsby,#___gatsby > *{display:flex;flex-direction:column;flex-grow:1;}"),m=function(e){var t=e.children;return Object(c.c)(r.Fragment,null,Object(c.c)(c.a,{styles:g}),t)},j=Object(n.a)("main",{target:"eo8lmj10"})("display:flex;flex-direction:column;flex-grow:1;background-color:",l.a.dark,";padding-bottom:",l.b.layout.gutter,";"),p=function(e){var t=e.children,a=e.className;return Object(c.c)(r.Fragment,null,Object(c.c)(j,{className:a},t))},O=Object(n.a)("footer",{target:"e1njxz4v0"})("position:relative;height:",l.b.layout.footerHeight,";background-color:",l.a.orange,";display:flex;align-items:center;font-size:0.8rem;"),f=Object(n.a)("svg",{target:"e1njxz4v1"})("pointer-events:none;position:absolute;width:100%;bottom:100%;left:0;polygon{fill:",l.a.orange,";}"),v=function(e){var t=e.className,a=e.children;return Object(c.c)(r.Fragment,null,Object(c.c)(O,{className:t},Object(c.c)(f,{viewBox:"0 -0.01 100 2",className:"topDivider"},Object(c.c)("polygon",{points:"0 2, 80 0, 100 2"})),Object(c.c)(s.a,null,a)))},h=a(74),y=Object(n.a)(o.a,{target:"e1btdlmi0"})("display:block;color:",l.a.white,";font-size:1.5rem;font-weight:600;text-decoration:none;&:hover,&:focus{span{opacity:1;margin-left:0;}}span{opacity:0;margin-left:-1rem;transition:0.5s;}"),x=function(){return Object(c.c)(r.Fragment,null,Object(c.c)("h1",null,Object(c.c)(y,{to:"/"},"r.obin",Object(c.c)("span",null,".ch"))))},w=a(238),k=a.n(w),N=Object(h.f)(function(e){var t=e.intl,a=e.language,n=e.title,i=e.author;return Object(c.c)(r.Fragment,null,Object(c.c)(k.a,{title:t.formatMessage({id:"subtitle"})+" - "+n,meta:[{name:"description",content:t.formatMessage({id:"description"})},{name:"keywords",content:t.formatMessage({id:"keywords"})},{name:"author",content:i}]},Object(c.c)("html",{lang:a})))}),D=Object(n.a)("nav",{target:"esdts7j0"})({name:"70qvj9",styles:"display:flex;align-items:center;"}),z=Object(n.a)("ul",{target:"esdts7j1"})({name:"1eunmgp",styles:"display:flex;padding:0;margin:0;list-style:none;"}),q=function(e){var t=e.className,a=e.children;return Object(c.c)(D,null,Object(c.c)(z,{className:t},a))},E=Object(n.a)("li",{target:"e119isdo0"})("margin-left:calc(",l.b.layout.gutter," / 2);a{display:block;text-decoration:none;padding:calc(",l.b.layout.gutter," / 2);background-color:rgba(255,255,255,0.1);outline:2px solid transparent;&:hover{outline:2px solid ",l.a.white,";}}"),F=function(e){var t=e.className;return Object(c.c)(q,{className:t},Object(c.c)(E,null,Object(c.c)(o.a,{to:"/about"},Object(c.c)(h.b,{id:"navigation.about"}))),Object(c.c)(E,null,Object(c.c)(o.a,{to:"/projects"},Object(c.c)(h.b,{id:"navigation.projects"}))),Object(c.c)(E,null,Object(c.c)(o.a,{to:"/recordings"},Object(c.c)(h.b,{id:"navigation.recordings"}))),Object(c.c)(E,null,Object(c.c)(o.a,{to:"/blog"},Object(c.c)(h.b,{id:"navigation.blog"}))),Object(c.c)(E,null,Object(c.c)(o.a,{to:"/collection"},Object(c.c)(h.b,{id:"navigation.collection"}))))},R=a(100),B=Object(n.a)(b,{target:"ehz7okw0"})({name:"gg4vpm",styles:"display:flex;justify-content:space-between;"});t.a=function(e){var t=e.children,a=r.useContext(R.a);return Object(c.c)(o.b,{query:"3450679258",render:function(e){return Object(c.c)(m,null,Object(c.c)(N,{language:a.langKey,title:e.site.siteMetadata.title,author:e.site.siteMetadata.author.name}),Object(c.c)(B,null,Object(c.c)(x,null),Object(c.c)(F,null)),Object(c.c)(p,null,t),Object(c.c)(v,null,e.site.siteMetadata.license," - ",Object(c.c)(h.a,{value:new Date(e.site.buildTime)})," ",Object(c.c)(h.c,{value:new Date(e.site.buildTime)})))},data:i})}},236:function(e,t,a){"use strict";var n=a(228),c=a(5),i=(a(0),a(229)),r=Object(n.a)("div",{target:"eiy97bz0"})("position:relative;min-height:20rem;height:50vh;background-color:",i.a.white,";color:",i.a.black,";overflow:hidden;"),o=Object(n.a)("svg",{target:"eiy97bz1"})("pointer-events:none;position:absolute;margin:0 -1px;&.topDivider{top:0;left:0;}&.bottomDivider{bottom:0;left:0;}polygon{fill:",i.a.dark,";}");t.a=function(e){var t=e.className;return Object(c.c)(r,{className:t},Object(c.c)(o,{viewBox:"0 0 100 2",className:"topDivider"},Object(c.c)("polygon",{points:"0 0, 100 0, 100 2, 20 0, 0 2"})),Object(c.c)("div",null,"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio animi doloribus possimus voluptas deserunt magnam. Dolore non culpa fugiat in commodi facere expedita blanditiis deleniti odio, veniam exercitationem ab ipsam."),Object(c.c)(o,{viewBox:"0 0 100 2",className:"bottomDivider"},Object(c.c)("polygon",{points:"0 0, 80 2, 100 0, 100 2, 0 100"})))}}}]);
//# sourceMappingURL=component---src-pages-about-en-tsx-09e8e5de313c19e56b91.js.map