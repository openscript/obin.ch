(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{184:function(e,t,n){"use strict";n.r(t);var a=n(6),i=(n(0),n(206)),r=n(205),o=n(197);t.default=function(){return Object(a.c)(i.a,null,Object(a.c)(r.a,null),Object(a.c)(o.a,null,Object(a.c)("h2",null,"Blog")))}},195:function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"a",function(){return i}),n.d(t,"c",function(){return r});var a={baseSize:{regular:"16px",large:"18px"},layout:{gutter:"1.5rem",pageWidth:"80rem",headerHeight:"5rem",footerHeight:"4rem"}},i={black:"#111111",white:"#EEEEEE",dark:"#6A4A3C",red:"#CC333F",orange:"#EB6841",yellow:"#EDC951",contra:"#00A0B0"},r={sansSerif:"'Roboto', 'Verdana', 'Ubuntu', sans-serif"}},196:function(e,t,n){"use strict";n.d(t,"b",function(){return g});var a=n(6),i=n(0),r=n.n(i),o=n(13),c=n.n(o),l=n(66),s=n.n(l);n.d(t,"a",function(){return s.a});n(199);var u=r.a.createContext({});function d(e){var t=e.staticQueryData,n=e.data,i=e.query,o=e.render,c=n?n.data:t[i]&&t[i].data;return Object(a.c)(r.a.Fragment,null,c&&o(c),!c&&Object(a.c)("div",null,"Loading (StaticQuery)"))}var g=function(e){var t=e.data,n=e.query,i=e.render,r=e.children;return Object(a.c)(u.Consumer,null,function(e){return Object(a.c)(d,{data:t,query:n,render:i||r,staticQueryData:e})})};g.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},197:function(e,t,n){"use strict";var a=n(194),i=n(6),r=n(0),o=n(195),c=Object(a.a)("div",{target:"euvlppp0"})("padding:",o.b.layout.gutter," calc((100vw - ",o.b.layout.pageWidth,") / 2);width:100%;"),l=Object(a.a)("div",{target:"euvlppp1"})("padding:0 ",o.b.layout.gutter,";");t.a=function(e){var t=e.children,n=e.className;return Object(i.c)(r.Fragment,null,Object(i.c)(c,null,Object(i.c)(l,{className:n},t)))}},199:function(e,t,n){var a;e.exports=(a=n(202))&&a.default||a},200:function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"a",function(){return i});var a={language:{key:"de",name:"Deutsch"}.key,messages:{language:"Deutsch",subtitle:"Mein Faszikel",description:"Persönliche Webseite zu den Themen: Informatik, Progressive Webapplikationen (PWA), Softwareentwicklung und vieles mehr.",keywords:"Informatik, Progressive Webapplikationen, Informatik Schulungen, Experte für Softwareentwicklung, persönlich, engagiert","navigation.about":"Über mich","navigation.projects":"Projekte","navigation.recordings":"Aufnahmen","navigation.blog":"Blog","navigation.collection":"Sammlung"}},i={language:{key:"en",name:"English"}.key,messages:{language:"Englisch",subtitle:"My fascicle",description:"Personal website about topics like: information technologies, progressive web applications (PWA), software development and much more.",keywords:"computer science, progressive web applications, IT teaching, expert for software development","navigation.about":"About me","navigation.projects":"Projects","navigation.recordings":"Recordings","navigation.blog":"Blog","navigation.collection":"Collection"}}},201:function(e){e.exports={data:{site:{siteMetadata:{title:"r.obin.ch",license:"Robin Bühler - AGPL-3.0",author:{name:"Robin Bühler"}},buildTime:"2019-07-13T20:47:32.419Z"}}}},202:function(e,t,n){"use strict";n.r(t);n(20);var a=n(0),i=n.n(a),r=n(13),o=n.n(r),c=n(91),l=function(e){var t=e.location,n=e.pageResources;return n?i.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json)):null};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},203:function(e,t,n){"use strict";n(17);var a=n(194),i=n(6),r=n(201),o=n(0),c=n(196),l=(n(204),n(195)),s=n(197),u=Object(a.a)("header",{target:"e1cdpmfv0"})("display:flex;align-items:center;height:",l.b.layout.headerHeight,";background-color:",l.a.dark,";"),d=function(e){var t=e.className,n=e.children;return Object(i.c)(o.Fragment,null,Object(i.c)(u,null,Object(i.c)(s.a,{className:t},n)))},g=n(48),b=Object(g.a)("html{height:100%;font-size:",l.b.baseSize.regular,";font-family:",l.c.sansSerif,";}body{scroll-behavior:smooth;display:flex;min-height:100%;flex-direction:column;color:",l.a.black,";}main,a{color:",l.a.white,";}#___gatsby,#___gatsby > *{display:flex;flex-direction:column;flex-grow:1;}"),m=function(e){var t=e.children;return Object(i.c)(o.Fragment,null,Object(i.c)(i.a,{styles:b}),t)},p=Object(a.a)("main",{target:"eo8lmj10"})("display:flex;flex-direction:column;flex-grow:1;background-color:",l.a.dark,";padding-bottom:",l.b.layout.gutter,";"),v=function(e){var t=e.children,n=e.className;return Object(i.c)(o.Fragment,null,Object(i.c)(p,{className:n},t))},h=Object(a.a)("footer",{target:"e1njxz4v0"})("position:relative;height:",l.b.layout.footerHeight,";background-color:",l.a.orange,";display:flex;align-items:center;font-size:0.8rem;"),f=Object(a.a)("svg",{target:"e1njxz4v1"})("pointer-events:none;position:absolute;width:100%;bottom:100%;left:0;polygon{fill:",l.a.orange,";}"),j=function(e){var t=e.className,n=e.children;return Object(i.c)(o.Fragment,null,Object(i.c)(h,{className:t},Object(i.c)(f,{viewBox:"0 -0.01 100 2",className:"topDivider"},Object(i.c)("polygon",{points:"0 2, 80 0, 100 2"})),Object(i.c)(s.a,null,n)))},O=n(198),y=n(200),k=Object(a.a)(c.a,{target:"e1btdlmi0"})("display:block;color:",l.a.white,";font-size:1.5rem;font-weight:600;text-decoration:none;&:hover,&:focus{span{opacity:1;margin-left:0;}}span{opacity:0;margin-left:-1rem;transition:0.5s;}"),w=function(){return Object(i.c)(o.Fragment,null,Object(i.c)("h1",null,Object(i.c)(k,{to:"/"},"r.obin",Object(i.c)("span",null,".ch"))))},M=n(211),x=n.n(M),S=Object(O.f)(function(e){var t=e.intl,n=e.language,a=e.title,r=e.author;return Object(i.c)(o.Fragment,null,Object(i.c)(x.a,{title:t.formatMessage({id:"subtitle"})+" - "+a,meta:[{name:"description",content:t.formatMessage({id:"description"})},{name:"keywords",content:t.formatMessage({id:"keywords"})},{name:"author",content:r}]},Object(i.c)("html",{lang:n})))}),T=Object(a.a)("nav",{target:"esdts7j0"})({name:"70qvj9",styles:"display:flex;align-items:center;"}),N=Object(a.a)("ul",{target:"esdts7j1"})({name:"1eunmgp",styles:"display:flex;padding:0;margin:0;list-style:none;"}),z=function(e){var t=e.className,n=e.children;return Object(i.c)(T,null,Object(i.c)(N,{className:t},n))},J=Object(a.a)("li",{target:"e119isdo0"})("margin-left:calc(",l.b.layout.gutter," / 2);a{display:block;text-decoration:none;padding:calc(",l.b.layout.gutter," / 2);background-color:rgba(255,255,255,0.1);outline:2px solid transparent;&:hover{outline:2px solid ",l.a.white,";}}"),D=function(e){var t=e.className;return Object(i.c)(z,{className:t},Object(i.c)(J,null,Object(i.c)(c.a,{to:"/about"},Object(i.c)(O.b,{id:"navigation.about"}))),Object(i.c)(J,null,Object(i.c)(c.a,{to:"/projects"},Object(i.c)(O.b,{id:"navigation.projects"}))),Object(i.c)(J,null,Object(i.c)(c.a,{to:"/recordings"},Object(i.c)(O.b,{id:"navigation.recordings"}))),Object(i.c)(J,null,Object(i.c)(c.a,{to:"/blog"},Object(i.c)(O.b,{id:"navigation.blog"}))),Object(i.c)(J,null,Object(i.c)(c.a,{to:"/collection"},Object(i.c)(O.b,{id:"navigation.collection"}))))},E=Object(a.a)(d,{target:"ehz7okw0"})({name:"gg4vpm",styles:"display:flex;justify-content:space-between;"});t.a=function(e){var t=e.children,n=e.translation,a=void 0===n?y.a:n;return Object(i.c)(c.b,{query:"1634467168",render:function(e){return Object(i.c)(O.d,{locale:a.language,messages:a.messages},Object(i.c)(m,null,Object(i.c)(S,{language:a.language,title:e.site.siteMetadata.title,author:e.site.siteMetadata.author.name}),Object(i.c)(E,null,Object(i.c)(w,null),Object(i.c)(D,null)),Object(i.c)(v,null,t),Object(i.c)(j,null,e.site.siteMetadata.license," - ",Object(i.c)(O.a,{value:new Date(e.site.buildTime)})," ",Object(i.c)(O.c,{value:new Date(e.site.buildTime)}))))},data:r})}},205:function(e,t,n){"use strict";var a=n(194),i=n(6),r=(n(0),n(195)),o=Object(a.a)("div",{target:"eiy97bz0"})("position:relative;min-height:20rem;height:50vh;background-color:",r.a.white,";color:",r.a.black,";overflow:hidden;"),c=Object(a.a)("svg",{target:"eiy97bz1"})("pointer-events:none;position:absolute;margin:0 -1px;&.topDivider{top:0;left:0;}&.bottomDivider{bottom:0;left:0;}polygon{fill:",r.a.dark,";}");t.a=function(e){var t=e.className;return Object(i.c)(o,{className:t},Object(i.c)(c,{viewBox:"0 0 100 2",className:"topDivider"},Object(i.c)("polygon",{points:"0 0, 100 0, 100 2, 20 0, 0 2"})),Object(i.c)("div",null,"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio animi doloribus possimus voluptas deserunt magnam. Dolore non culpa fugiat in commodi facere expedita blanditiis deleniti odio, veniam exercitationem ab ipsam."),Object(i.c)(c,{viewBox:"0 0 100 2",className:"bottomDivider"},Object(i.c)("polygon",{points:"0 0, 80 2, 100 0, 100 2, 0 100"})))}},206:function(e,t,n){"use strict";var a=n(6),i=(n(0),n(204),n(198)),r=n(207),o=n(200),c=n(203);Object(i.e)([].concat(r));t.a=function(e){var t=e.children;return Object(a.c)(c.a,{children:t,translation:o.b})}},207:function(e,t,n){n(19),e.exports=function(){"use strict";return[{locale:"de",pluralRuleFunction:function(e,t){var n=!String(e).split(".")[1];return t?"other":1==e&&n?"one":"other"},fields:{year:{displayName:"Jahr",relative:{0:"dieses Jahr",1:"nächstes Jahr","-1":"letztes Jahr"},relativeTime:{future:{one:"in {0} Jahr",other:"in {0} Jahren"},past:{one:"vor {0} Jahr",other:"vor {0} Jahren"}}},"year-short":{displayName:"Jahr",relative:{0:"dieses Jahr",1:"nächstes Jahr","-1":"letztes Jahr"},relativeTime:{future:{one:"in {0} Jahr",other:"in {0} Jahren"},past:{one:"vor {0} Jahr",other:"vor {0} Jahren"}}},month:{displayName:"Monat",relative:{0:"diesen Monat",1:"nächsten Monat","-1":"letzten Monat"},relativeTime:{future:{one:"in {0} Monat",other:"in {0} Monaten"},past:{one:"vor {0} Monat",other:"vor {0} Monaten"}}},"month-short":{displayName:"Monat",relative:{0:"diesen Monat",1:"nächsten Monat","-1":"letzten Monat"},relativeTime:{future:{one:"in {0} Monat",other:"in {0} Monaten"},past:{one:"vor {0} Monat",other:"vor {0} Monaten"}}},day:{displayName:"Tag",relative:{0:"heute",1:"morgen",2:"übermorgen","-2":"vorgestern","-1":"gestern"},relativeTime:{future:{one:"in {0} Tag",other:"in {0} Tagen"},past:{one:"vor {0} Tag",other:"vor {0} Tagen"}}},"day-short":{displayName:"Tag",relative:{0:"heute",1:"morgen",2:"übermorgen","-2":"vorgestern","-1":"gestern"},relativeTime:{future:{one:"in {0} Tag",other:"in {0} Tagen"},past:{one:"vor {0} Tag",other:"vor {0} Tagen"}}},hour:{displayName:"Stunde",relative:{0:"in dieser Stunde"},relativeTime:{future:{one:"in {0} Stunde",other:"in {0} Stunden"},past:{one:"vor {0} Stunde",other:"vor {0} Stunden"}}},"hour-short":{displayName:"Std.",relative:{0:"in dieser Stunde"},relativeTime:{future:{one:"in {0} Std.",other:"in {0} Std."},past:{one:"vor {0} Std.",other:"vor {0} Std."}}},minute:{displayName:"Minute",relative:{0:"in dieser Minute"},relativeTime:{future:{one:"in {0} Minute",other:"in {0} Minuten"},past:{one:"vor {0} Minute",other:"vor {0} Minuten"}}},"minute-short":{displayName:"Min.",relative:{0:"in dieser Minute"},relativeTime:{future:{one:"in {0} Min.",other:"in {0} Min."},past:{one:"vor {0} Min.",other:"vor {0} Min."}}},second:{displayName:"Sekunde",relative:{0:"jetzt"},relativeTime:{future:{one:"in {0} Sekunde",other:"in {0} Sekunden"},past:{one:"vor {0} Sekunde",other:"vor {0} Sekunden"}}},"second-short":{displayName:"Sek.",relative:{0:"jetzt"},relativeTime:{future:{one:"in {0} Sek.",other:"in {0} Sek."},past:{one:"vor {0} Sek.",other:"vor {0} Sek."}}}}},{locale:"de-AT",parentLocale:"de"},{locale:"de-BE",parentLocale:"de"},{locale:"de-CH",parentLocale:"de"},{locale:"de-IT",parentLocale:"de"},{locale:"de-LI",parentLocale:"de"},{locale:"de-LU",parentLocale:"de"}]}()},208:function(e,t){},209:function(e,t){},210:function(e,t){}}]);
//# sourceMappingURL=component---src-pages-blog-en-tsx-f0ba1145922ce5cd2292.js.map