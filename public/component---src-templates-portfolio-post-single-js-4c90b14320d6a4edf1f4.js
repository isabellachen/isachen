(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{Ljpg:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),i=n("Wbzz");t.a=function(e){var t=e.previous,n=e.next;return a.a.createElement("div",{className:"blog_single-nav mb-4"},a.a.createElement("div",{className:"blog_single-next "+(t&&"blog_single-previous_chevron")},t&&a.a.createElement(i.a,{to:t.frontmatter.path},""+t.frontmatter.title)),a.a.createElement("div",{className:"blog_single-next "+(n&&"blog_single-next_chevron")},n&&a.a.createElement(i.a,{to:n.frontmatter.path},""+n.frontmatter.title)))}},jMq3:function(e,t,n){"use strict";n.r(t),n.d(t,"query",(function(){return f}));n("Ll4R");var r=n("q1tI"),a=n.n(r),i=n("9eSz"),o=n.n(i),l=n("7oih");n("pJf4"),n("q8oJ"),n("YbXK"),n("cFtU"),n("m210"),n("4DPX"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("E5k/");function c(e){return function(e){if(Array.isArray(e))return u(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function s(e){var t=e.children,n=e.gap,i=e.minWidth,o=void 0===i?500:i,l=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["children","gap","minWidth"]),u=Object(r.useRef)(),s=Object(r.useState)(3),m=s[0],f=s[1],d=c(Array(m)).map((function(){return[]}));!function(e,t){e.forEach((function(e,n){return t[n%t.length].push(e)}))}(t,d);var p=Object(r.useCallback)((function(){f(Math.ceil(u.current.offsetWidth/o))}),[o]);return Object(r.useEffect)(p,[]),Object(r.useEffect)((function(){return window.addEventListener("resize",p),function(){window.removeEventListener("resize",p)}}),[p]),a.a.createElement("div",Object.assign({"data-uk-lightbox":!0,className:"masonry",ref:u,gap:n},l),c(Array(m)).map((function(e,t){return a.a.createElement("div",{className:"masonry-col",key:t,gap:n},d[t])})))}var m=n("Ljpg"),f=(t.default=function(e){var t=e.data,n=e.pageContext,r=n.next,i=n.previous,c=t.markdownRemark.frontmatter,u=c.title,f=c.projectLink,d=c.showMasonry,p=t.markdownRemark.html,g=t.allFile.edges.filter((function(e){var t=e.node,n=t&&t.childImageSharp,r=n&&n.fluid.src,a=r&&r.match(/featured/);return null!==n&&!a})).map((function(e){var t=e.node;return console.log(t.childImageSharp.fluid),t.childImageSharp.fluid}));return a.a.createElement(l.a,null,a.a.createElement("div",{className:"portfolio_single mb-4"},a.a.createElement("div",{className:"portfolio_single-title"},a.a.createElement("h1",{className:"accent-heading"},u),a.a.createElement("a",{className:"portfolio_single-button",href:f},"Visit Website")),a.a.createElement("div",{dangerouslySetInnerHTML:{__html:p}}),d&&a.a.createElement(s,null,g.map((function(e,t){return a.a.createElement("a",{key:t,className:"image-link-wrapper",href:e.src},a.a.createElement(o.a,{fluid:e}))})))),a.a.createElement(m.a,{next:r,previous:i}))},"547530938")}}]);
//# sourceMappingURL=component---src-templates-portfolio-post-single-js-4c90b14320d6a4edf1f4.js.map