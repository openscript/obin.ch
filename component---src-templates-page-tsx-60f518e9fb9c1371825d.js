(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{148:function(n,e,t){"use strict";t.r(e),t.d(e,"query",function(){return c});var r=t(9),a=(t(0),t(159)),i=t(156),o=t(162);e.default=function(n){var e=n.data;return Object(r.d)(o.a,null,Object(r.d)(a.a,null,Object(r.d)(i.a,null,Object(r.d)("h1",null,e.markdownRemark.frontmatter.title),Object(r.d)("div",{dangerouslySetInnerHTML:{__html:e.markdownRemark.html}}))))};var c="1366676620"},153:function(n,e,t){"use strict";t.d(e,"b",function(){return r}),t.d(e,"d",function(){return a}),t.d(e,"a",function(){return i}),t.d(e,"f",function(){return o}),t.d(e,"c",function(){return c}),t.d(e,"e",function(){return d});var r={brand:"#663399",lilac:"#9d7cbf",accent:"#ffb238",success:"#37b635",warning:"#ec1818",ui:{bright:"#e0d6eb",light:"#f5f3f7",whisper:"#fbfafc"},code:"#fcf6f0",gray:{dark:"hsla(270, 17.119554496%, 0%, 0.92)",copy:"hsla(270, 15.797828016000002%, 0%, 0.88)",calm:"rgba(0, 0, 0, 0.54)"},white:"#fff",black:"#000"},a={sansSerif:'-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif',serif:'Georgia, "Times New Roman", Times, serif',monospace:'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace, monospace'},i={xs:0,sm:576,md:768,lg:992,xl:1200},o={md:720,lg:960,xl:1140},c={fontSize:{regular:16,large:18},headingSizes:{h1:2.441,h2:1.953,h3:1.563,h4:1.25},lineHeight:{regular:1.45,heading:1.2},containerPadding:1.5},d={header:60}},155:function(n,e,t){"use strict";t.d(e,"b",function(){return u});var r=t(9),a=t(0),i=t.n(a),o=t(4),c=t.n(o),d=t(36),l=t.n(d);t.d(e,"a",function(){return l.a});t(158);var s=i.a.createContext({}),u=function(n){return Object(r.d)(s.Consumer,null,function(e){return n.data||e[n.query]&&e[n.query].data?(n.render||n.children)(n.data?n.data.data:e[n.query].data):Object(r.d)("div",null,"Loading (StaticQuery)")})};u.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},156:function(n,e,t){"use strict";var r=t(154),a=t(9),i=(t(0),t(153)),o=t(157),c=Object(r.a)("div",{target:"e1c6zxln0"})("position:relative;margin-left:auto;margin-right:auto;width:auto;max-width:",Object(o.a)(i.f.lg),"em;");e.a=function(n){var e=n.children,t=n.className;return Object(a.d)(c,{className:t},e)}},157:function(n,e,t){"use strict";t.d(e,"a",function(){return a});var r=t(153),a=function(n){return n/r.c.fontSize.regular}},158:function(n,e,t){var r;n.exports=(r=t(161))&&r.default||r},159:function(n,e,t){"use strict";var r=t(154),a=t(9),i=(t(0),t(153)),o=Object(r.a)("div",{target:"e20rco30"})("display:block;flex:1;position:relative;padding:",i.c.containerPadding,"rem;margin-bottom:3rem;");e.a=function(n){var e=n.children,t=n.className;return Object(a.d)(o,{className:t},e)}},160:function(n){n.exports={data:{site:{siteMetadata:{title:"r.obin.ch",description:"A starter kit for TypeScript-based Gatsby projects with sensible defaults."}}}}},161:function(n,e,t){"use strict";t.r(e);t(58);var r=t(0),a=t.n(r),i=t(4),o=t.n(i),c=t(59),d=t(2),l=function(n){var e=n.location,t=d.default.getResourcesForPathnameSync(e.pathname);return t?a.a.createElement(c.a,Object.assign({location:e,pageResources:t},t.json)):null};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=l},162:function(n,e,t){"use strict";var r=t(9),a=t(160),i=t(0),o=t(163),c=t.n(o),d=t(155),l=(t(164),t(153)),s=t(157),u="\n  html {\n    box-sizing: border-box;\n  }\n\n  *,\n  *::before,\n  *::after {\n    box-sizing: inherit;\n  }\n\n  html {\n    font-size: "+l.c.fontSize.regular+"px !important;\n    line-height: "+l.c.lineHeight.regular+" !important;\n  }\n\n  body {\n    width: 100%;\n    overflow-x: hidden;\n    overflow-y: scroll;\n    font-family: "+l.d.sansSerif+";\n    color: "+l.b.black+";\n    background-color: "+l.b.white+";\n    -webkit-text-size-adjust: 100%;\n    -ms-text-size-adjust: 100%;\n  }\n\n  a {\n    color: "+l.b.brand+";\n    text-decoration: none;\n\n    &:hover,\n    &:focus {\n      text-decoration: underline;\n    }\n  }\n\n  img {\n    max-width: 100%;\n    object-fit: contain;\n    position: relative;\n  }\n\n  figure {\n    margin: 2rem 0;\n  }\n\n  figcaption {\n    font-size: 80%;\n  }\n\n  table {\n    width: 100%;\n    margin-bottom: 1rem;\n    border: 1px solid "+l.b.ui.light+";\n    font-size: 85%;\n    border-collapse: collapse;\n  }\n\n  td,\n  th {\n    padding: .25rem .5rem;\n    border: 1px solid "+l.b.ui.light+";\n  }\n\n  th {\n    text-align: left;\n  }\n\n  tbody {\n    tr {\n      &:nth-of-type(odd) {\n        td {\n          background-color: "+l.b.ui.whisper+";\n        }\n        tr {\n          background-color: "+l.b.ui.whisper+";\n        }\n      }\n    }\n  }\n\n  h1, h2, h3, h4, h5, h6 {\n    margin-top: 1.414rem;\n    margin-bottom: .5rem;\n    color: "+l.b.black+";\n    font-weight: 600;\n    line-height: "+l.c.lineHeight.heading+";\n    text-rendering: optimizeLegibility;\n  }\n\n  h1 {\n    margin-top: 0;\n    font-size: "+l.c.headingSizes.h1+"rem;\n  }\n\n  h2 {\n    font-size: "+l.c.headingSizes.h2+"rem;\n  }\n\n  h3 {\n    font-size: "+l.c.headingSizes.h3+"rem;\n  }\n\n  h4, h5, h6 {\n    font-size: "+l.c.headingSizes.h4+"rem;\n  }\n\n  p {\n    margin-top: 0;\n    margin-bottom: 1rem;\n  }\n\n  strong {\n    color: "+l.b.black+";\n  }\n\n  ul,\n  ol,\n  dl {\n    margin-top: 0;\n    margin-bottom: 1rem;\n  }\n\n  dt {\n    font-weight: bold;\n  }\n\n  dd {\n    margin-bottom: .5rem;\n  }\n\n  hr {\n    position: relative;\n    margin: 1.5rem 0;\n    border: 0;\n    border-top: 1px solid "+l.b.ui.light+";\n  }\n\n  blockquote {\n    margin: .8rem 0;\n    padding: .5rem 1rem;\n    border-left: .25rem solid "+l.b.ui.light+";\n    color: "+l.b.gray.calm+";\n\n    p {\n      &:last-child {\n        margin-bottom: 0;\n      }\n    }\n\n    @media (min-width: "+Object(s.a)(l.a.md)+"em) {\n      padding-right: 5rem;\n      padding-left: 1.25rem;\n    }\n  }\n",b=t(154),m=t(165),f=t(156),h=Object(b.a)("header",{target:"e14yya1q0"})("height:",l.e.header,"px;padding:0 ",l.c.containerPadding,"rem;background-color:",l.b.brand,";color:",Object(m.a)(.5,l.b.white),";"),g=Object(b.a)(f.a,{target:"e14yya1q1"})({name:"voneje",styles:"display:flex;flex-direction:row;align-items:center;height:100%;"}),p=Object(b.a)(d.a,{target:"e14yya1q2"})("color:",l.b.white,";font-size:1.5rem;font-weight:600;&:hover,&:focus{text-decoration:none;}"),y=function(n){var e=n.title;return Object(r.d)(h,null,Object(r.d)(g,null,Object(r.d)(p,{to:"/"},e)))},j=Object(b.a)("div",{target:"e17su9850"})({name:"zf0iqh",styles:"display:flex;flex-direction:column;min-height:100vh;"}),v=function(n){var e=n.children,t=n.className;return Object(r.d)(i.Fragment,null,Object(r.d)(r.a,{styles:function(){return Object(r.c)(u)}}),Object(r.d)(j,{className:t},e))},x=Object(b.a)("main",{target:"e1qy7fsr0"})({name:"b95f0i",styles:"display:flex;flex-direction:column;flex:1;"}),O=function(n){var e=n.children,t=n.className;return Object(r.d)(x,{className:t},e)};e.a=function(n){var e=n.children;return Object(r.d)(d.b,{query:"991718019",render:function(n){return Object(r.d)(v,null,Object(r.d)(c.a,{title:n.site.siteMetadata.title,meta:[{name:"description",content:n.site.siteMetadata.description},{name:"keywords",content:"gatsbyjs, gatsby, javascript, sample, something"}]}),Object(r.d)(y,{title:n.site.siteMetadata.title}),Object(r.d)(O,null,e))},data:a})}}}]);
//# sourceMappingURL=component---src-templates-page-tsx-60f518e9fb9c1371825d.js.map