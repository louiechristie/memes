_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{"/EDR":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("23aj")}])},"23aj":function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n("nKUr"),c=n("YFqc"),o=n.n(c),i=n("tXcZ"),a=n("aIN1"),s=n("eSOj"),l=!0;function u(e){var t=e.memes;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(i.a,{title:"Memes | louiechristie.com",description:"'... (Internet, slang) Something, usually humorous, which is copied and circulated online with slight adaptations, including quizzes, basic pictures, video templates etc. - Wiktionary'",image:"/images/lc-icon.svg"}),Object(r.jsxs)("div",{className:"memes-container",children:[Object(r.jsxs)("blockquote",{className:"meme-definition",cite:"https://en.wiktionary.org/wiki/meme",children:[Object(r.jsxs)("p",{children:[Object(r.jsx)("strong",{children:"Meme"})," ... (Internet, slang) Something, usually humorous, which is copied and circulated online with slight adaptations, including quizzes, basic pictures, video templates etc."]}),Object(r.jsx)("cite",{children:"- Wiktionary, 2020"})]}),Object(r.jsx)("ul",{className:"memes-list",children:t.map((function(e){return Object(r.jsx)(o.a,{href:"".concat("/memes","/").concat(e.url),children:Object(r.jsx)("a",{children:Object(r.jsxs)("li",{className:"box-shadow",children:[Object(r.jsx)("img",{src:e.image,alt:e.alt}),Object(r.jsx)("h2",{children:Object(s.a)(e)})]})})},e.url)}))})]}),Object(r.jsx)(a.a,{})]})}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),c=n("284h");t.__esModule=!0,t.default=void 0;var o=c(n("q1tI")),i=n("elyg"),a=n("nOHt"),s=n("vNVm"),l={};function u(e,t,n,r){if(e&&(0,i.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var c=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(c?"%"+c:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,n=(0,a.useRouter)(),c=n&&n.pathname||"/",f=o.default.useMemo((function(){var t=(0,i.resolveHref)(c,e.href,!0),n=r(t,2),o=n[0],a=n[1];return{href:o,as:e.as?(0,i.resolveHref)(c,e.as):a||o}}),[c,e.href,e.as]),d=f.href,p=f.as,h=e.children,m=e.replace,v=e.shallow,j=e.scroll,b=e.locale;"string"===typeof h&&(h=o.default.createElement("a",null,h));var g=o.Children.only(h),y=g&&"object"===typeof g&&g.ref,w=(0,s.useIntersection)({rootMargin:"200px"}),O=r(w,2),_=O[0],x=O[1],E=o.default.useCallback((function(e){_(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,_]);(0,o.useEffect)((function(){var e=x&&t&&(0,i.isLocalURL)(d),r="undefined"!==typeof b?b:n&&n.locale,c=l[d+"%"+p+(r?"%"+r:"")];e&&!c&&u(n,d,p,{locale:r})}),[p,d,x,b,t,n]);var N={ref:E,onClick:function(e){g.props&&"function"===typeof g.props.onClick&&g.props.onClick(e),e.defaultPrevented||function(e,t,n,r,c,o,a,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(n))&&(e.preventDefault(),null==a&&(a=r.indexOf("#")<0),t[c?"replace":"push"](n,r,{shallow:o,locale:s,scroll:a}).then((function(e){e&&a&&document.body.focus()})))}(e,n,d,p,m,v,j,b)},onMouseEnter:function(e){(0,i.isLocalURL)(d)&&(g.props&&"function"===typeof g.props.onMouseEnter&&g.props.onMouseEnter(e),u(n,d,p,{priority:!0}))}};if(e.passHref||"a"===g.type&&!("href"in g.props)){var M="undefined"!==typeof b?b:n&&n.locale,k=(0,i.getDomainLocale)(p,M,n&&n.locales,n&&n.domainLocales);N.href=k||(0,i.addBasePath)((0,i.addLocale)(p,M,n&&n.defaultLocale))}return o.default.cloneElement(g,N)};t.default=f},vNVm:function(e,t,n){"use strict";var r=n("J4zp"),c=n("TqRt");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,c=(0,o.useRef)(),l=(0,o.useState)(!1),u=r(l,2),f=u[0],d=u[1],p=(0,o.useCallback)((function(e){c.current&&(c.current(),c.current=void 0),n||f||e&&e.tagName&&(c.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=s.get(t);if(n)return n;var r=new Map,c=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return s.set(t,n={id:t,observer:c,elements:r}),n}(n),c=r.id,o=r.observer,i=r.elements;return i.set(e,t),o.observe(e),function(){i.delete(e),o.unobserve(e),0===i.size&&(o.disconnect(),s.delete(c))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return(0,o.useEffect)((function(){a||f||(0,i.default)((function(){return d(!0)}))}),[f]),[p,f]};var o=n("q1tI"),i=c(n("0G5g")),a="undefined"!==typeof IntersectionObserver;var s=new Map}},[["/EDR",0,1,2,3]]]);