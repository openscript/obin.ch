(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{182:function(e,t,n){"use strict";n.r(t);var a=n(6),r=(n(0),n(194),n(189)),i=n(232),o=n(190),c=n(193);Object(r.d)([].concat(i));var l=function(e){var t=e.children;return Object(a.c)(c.a,{children:t,translation:o.b})},s=n(200),u=n(186);t.default=function(){return Object(a.c)(l,null,Object(a.c)(s.a,null),Object(a.c)(u.a,null,Object(a.c)("p",null,"Willkommen :)")))}},184:function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"a",function(){return r}),n.d(t,"c",function(){return i});var a={baseSize:{regular:"16px",large:"18px"},layout:{gutter:"1.5rem",pageWidth:"80rem",headerHeight:"8rem",footerHeight:"5rem"}},r={black:"#111111",white:"#EEEEEE",dark:"#6A4A3C",red:"#CC333F",orange:"#EB6841",yellow:"#EDC951",contra:"#00A0B0"},i={sansSerif:"'Roboto', 'Verdana', 'Ubuntu', sans-serif"}},186:function(e,t,n){"use strict";var a=n(185),r=n(6),i=n(0),o=n(184),c=Object(a.a)("div",{target:"euvlppp0"})("padding:",o.b.layout.gutter," calc((100vw - ",o.b.layout.pageWidth,") / 2);"),l=Object(a.a)("div",{target:"euvlppp1"})("padding:0 ",o.b.layout.gutter,";");t.a=function(e){var t=e.children,n=e.className;return Object(r.c)(i.Fragment,null,Object(r.c)(c,{className:n},Object(r.c)(l,null,t)))}},187:function(e,t,n){"use strict";n.d(t,"b",function(){return m});var a=n(6),r=n(0),i=n.n(r),o=n(14),c=n.n(o),l=n(66),s=n.n(l);n.d(t,"a",function(){return s.a});n(188);var u=i.a.createContext({});function d(e){var t=e.staticQueryData,n=e.data,r=e.query,o=e.render,c=n?n.data:t[r]&&t[r].data;return Object(a.c)(i.a.Fragment,null,c&&o(c),!c&&Object(a.c)("div",null,"Loading (StaticQuery)"))}var m=function(e){var t=e.data,n=e.query,r=e.render,i=e.children;return Object(a.c)(u.Consumer,null,function(e){return Object(a.c)(d,{data:t,query:n,render:r||i,staticQueryData:e})})};m.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},188:function(e,t,n){var a;e.exports=(a=n(192))&&a.default||a},190:function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"a",function(){return r});var a={language:{key:"de",name:"Deutsch"}.key,messages:{language:"Deutsch",subtitle:"Mein Faszikel",description:"Persönliche Webseite zu den Themen: Informatik, Progressive Webapplikationen (PWA), Softwareentwicklung und vieles mehr.",keywords:"Informatik, Progressive Webapplikationen, Informatik Schulungen, Experte für Softwareentwicklung, persönlich, engagiert"}},r={language:{key:"en",name:"English"}.key,messages:{language:"Englisch",subtitle:"My fascicle",description:"Personal website about topics like: information technologies, progressive web applications (PWA), software development and much more.",keywords:"computer science, progressive web applications, IT teaching, expert for software development"}}},191:function(e){e.exports={data:{site:{siteMetadata:{title:"r.obin.ch",license:"Robin Bühler - AGPL-3.0",author:{name:"Robin Bühler"}},buildTime:"2019-07-12T21:45:38.938Z"}}}},192:function(e,t,n){"use strict";n.r(t);n(20);var a=n(0),r=n.n(a),i=n(14),o=n.n(i),c=n(91),l=function(e){var t=e.location,n=e.pageResources;return n?r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json)):null};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},193:function(e,t,n){"use strict";n(17);var a=n(6),r=n(191),i=n(0),o=n(187),c=(n(194),n(185)),l=n(184),s=n(186),u=Object(c.a)("header",{target:"e1cdpmfv0"})("display:flex;align-items:center;height:",l.b.layout.headerHeight,";background-color:",l.a.dark,";"),d=function(e){var t=e.children;return Object(a.c)(i.Fragment,null,Object(a.c)(u,null,Object(a.c)(s.a,null,t)))},m=n(51),g=Object(m.a)("html{height:100%;font-size:",l.b.baseSize.regular,";font-family:",l.c.sansSerif,";}body{display:flex;min-height:100%;flex-direction:column;color:",l.a.black,";}main,a{color:",l.a.white,";}#___gatsby,#___gatsby > *{display:flex;flex-direction:column;flex-grow:1;}"),h=function(e){var t=e.children;return Object(a.c)(i.Fragment,null,Object(a.c)(a.a,{styles:g}),t)},b=Object(c.a)("main",{target:"eo8lmj10"})("display:flex;flex-direction:column;flex-grow:1;background-color:",l.a.dark,";"),p=function(e){var t=e.children,n=e.className;return Object(a.c)(i.Fragment,null,Object(a.c)(b,{className:n},t))},v=Object(c.a)("footer",{target:"e1njxz4v0"})("position:relative;height:",l.b.layout.footerHeight,";background-color:",l.a.orange,";display:flex;align-items:center;font-size:0.8rem;"),f=Object(c.a)("svg",{target:"e1njxz4v1"})("position:absolute;width:100%;bottom:100%;left:0;polygon{fill:",l.a.orange,";}"),j=function(e){var t=e.className,n=e.children;return Object(a.c)(i.Fragment,null,Object(a.c)(v,{className:t},Object(a.c)(f,{viewBox:"0 0 100 2",className:"topDivider"},Object(a.c)("polygon",{points:"0 2, 80 0, 100 2"})),Object(a.c)(s.a,null,n)))},y=n(189),O=n(190),k=Object(c.a)(o.a,{target:"e1btdlmi0"})({name:"ixtk0y",styles:"color:white;font-size:1.5rem;font-weight:600;text-decoration:none;&:hover,&:focus{span{opacity:1;margin-left:0;}}span{opacity:0;margin-left:-1rem;transition:0.5s;}"}),M=function(){return Object(a.c)(i.Fragment,null,Object(a.c)("h1",null,Object(a.c)(k,{to:"/"},"r.obin",Object(a.c)("span",null,".ch"))))},w=n(199),T=n.n(w),S=Object(y.e)(function(e){var t=e.intl,n=e.language,r=e.title,o=e.author;return Object(a.c)(i.Fragment,null,Object(a.c)(T.a,{title:t.formatMessage({id:"subtitle"})+" - "+r,meta:[{name:"description",content:t.formatMessage({id:"description"})},{name:"keywords",content:t.formatMessage({id:"keywords"})},{name:"author",content:o}]},Object(a.c)("html",{lang:n})))});t.a=function(e){var t=e.children,n=e.translation,i=void 0===n?O.a:n;return Object(a.c)(o.b,{query:"1634467168",render:function(e){return Object(a.c)(y.c,{locale:i.language,messages:i.messages},Object(a.c)(h,null,Object(a.c)(S,{language:i.language,title:e.site.siteMetadata.title,author:e.site.siteMetadata.author.name}),Object(a.c)(d,null,Object(a.c)(M,null)),Object(a.c)(p,null,t),Object(a.c)(j,null,e.site.siteMetadata.license," - ",Object(a.c)(y.a,{value:new Date(e.site.buildTime)})," ",Object(a.c)(y.b,{value:new Date(e.site.buildTime)}))))},data:r})}},196:function(e,t){},197:function(e,t){},198:function(e,t){},200:function(e,t,n){"use strict";var a=n(185),r=n(6),i=(n(0),n(184)),o=Object(a.a)("div",{target:"eiy97bz0"})("position:relative;min-height:20rem;height:50vh;background-color:",i.a.white,";color:",i.a.black,";"),c=Object(a.a)("svg",{target:"eiy97bz1"})("position:absolute;width:100%;&.topDivider{top:0;left:0;}&.bottomDivider{bottom:0;left:0;}polygon{fill:",i.a.dark,";}");t.a=function(e){var t=e.className;return Object(r.c)(o,{className:t},Object(r.c)(c,{viewBox:"0 0 100 2",className:"topDivider"},Object(r.c)("polygon",{points:"0 0, 100 0, 100 2, 20 0, 0 2"})),Object(r.c)("div",null,"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio animi doloribus possimus voluptas deserunt magnam. Dolore non culpa fugiat in commodi facere expedita blanditiis deleniti odio, veniam exercitationem ab ipsam."),Object(r.c)(c,{viewBox:"0 0 100 2",className:"bottomDivider"},Object(r.c)("polygon",{points:"0 0, 80 2, 100 0, 100 2, 0 100"})))}},232:function(e,t,n){n(19),e.exports=function(){"use strict";return[{locale:"de",pluralRuleFunction:function(e,t){var n=!String(e).split(".")[1];return t?"other":1==e&&n?"one":"other"},fields:{year:{displayName:"Jahr",relative:{0:"dieses Jahr",1:"nächstes Jahr","-1":"letztes Jahr"},relativeTime:{future:{one:"in {0} Jahr",other:"in {0} Jahren"},past:{one:"vor {0} Jahr",other:"vor {0} Jahren"}}},"year-short":{displayName:"Jahr",relative:{0:"dieses Jahr",1:"nächstes Jahr","-1":"letztes Jahr"},relativeTime:{future:{one:"in {0} Jahr",other:"in {0} Jahren"},past:{one:"vor {0} Jahr",other:"vor {0} Jahren"}}},month:{displayName:"Monat",relative:{0:"diesen Monat",1:"nächsten Monat","-1":"letzten Monat"},relativeTime:{future:{one:"in {0} Monat",other:"in {0} Monaten"},past:{one:"vor {0} Monat",other:"vor {0} Monaten"}}},"month-short":{displayName:"Monat",relative:{0:"diesen Monat",1:"nächsten Monat","-1":"letzten Monat"},relativeTime:{future:{one:"in {0} Monat",other:"in {0} Monaten"},past:{one:"vor {0} Monat",other:"vor {0} Monaten"}}},day:{displayName:"Tag",relative:{0:"heute",1:"morgen",2:"übermorgen","-2":"vorgestern","-1":"gestern"},relativeTime:{future:{one:"in {0} Tag",other:"in {0} Tagen"},past:{one:"vor {0} Tag",other:"vor {0} Tagen"}}},"day-short":{displayName:"Tag",relative:{0:"heute",1:"morgen",2:"übermorgen","-2":"vorgestern","-1":"gestern"},relativeTime:{future:{one:"in {0} Tag",other:"in {0} Tagen"},past:{one:"vor {0} Tag",other:"vor {0} Tagen"}}},hour:{displayName:"Stunde",relative:{0:"in dieser Stunde"},relativeTime:{future:{one:"in {0} Stunde",other:"in {0} Stunden"},past:{one:"vor {0} Stunde",other:"vor {0} Stunden"}}},"hour-short":{displayName:"Std.",relative:{0:"in dieser Stunde"},relativeTime:{future:{one:"in {0} Std.",other:"in {0} Std."},past:{one:"vor {0} Std.",other:"vor {0} Std."}}},minute:{displayName:"Minute",relative:{0:"in dieser Minute"},relativeTime:{future:{one:"in {0} Minute",other:"in {0} Minuten"},past:{one:"vor {0} Minute",other:"vor {0} Minuten"}}},"minute-short":{displayName:"Min.",relative:{0:"in dieser Minute"},relativeTime:{future:{one:"in {0} Min.",other:"in {0} Min."},past:{one:"vor {0} Min.",other:"vor {0} Min."}}},second:{displayName:"Sekunde",relative:{0:"jetzt"},relativeTime:{future:{one:"in {0} Sekunde",other:"in {0} Sekunden"},past:{one:"vor {0} Sekunde",other:"vor {0} Sekunden"}}},"second-short":{displayName:"Sek.",relative:{0:"jetzt"},relativeTime:{future:{one:"in {0} Sek.",other:"in {0} Sek."},past:{one:"vor {0} Sek.",other:"vor {0} Sek."}}}}},{locale:"de-AT",parentLocale:"de"},{locale:"de-BE",parentLocale:"de"},{locale:"de-CH",parentLocale:"de"},{locale:"de-IT",parentLocale:"de"},{locale:"de-LI",parentLocale:"de"},{locale:"de-LU",parentLocale:"de"}]}()}}]);
//# sourceMappingURL=component---src-pages-index-de-tsx-4d451f48a481897a1d66.js.map