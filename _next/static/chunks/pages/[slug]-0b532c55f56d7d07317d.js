_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[4],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=s,t.useAmp=function(){return s(i.default.useContext(o.AmpStateContext))};var r,i=(r=n("q1tI"))&&r.__esModule?r:{default:r},o=n("lwAK");function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,i=void 0!==r&&r,o=e.hasQuery,s=void 0!==o&&o;return n||i&&s}},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=d,t.default=void 0;var r,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var o=r?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(n,i,o):n[i]=e[i]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),o=(r=n("Xuae"))&&r.__esModule?r:{default:r},s=n("lwAK"),c=n("FYa8"),a=n("/0+H");function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function u(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var h=["name","httpEquiv","charSet","itemProp"];function j(e,t){return e.reduce((function(e,t){var n=i.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(u,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(i){var o=!0,s=!1;if(i.key&&"number"!==typeof i.key&&i.key.indexOf("$")>0){s=!0;var c=i.key.slice(i.key.indexOf("$")+1);e.has(c)?o=!1:e.add(c)}switch(i.type){case"title":case"base":t.has(i.type)?o=!1:t.add(i.type);break;case"meta":for(var a=0,l=h.length;a<l;a++){var d=h[a];if(i.props.hasOwnProperty(d))if("charSet"===d)n.has(d)?o=!1:n.add(d);else{var u=i.props[d],j=r[d]||new Set;"name"===d&&s||!j.has(u)?(j.add(u),r[d]=j):o=!1}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return i.default.cloneElement(e,{key:n})}))}function b(e){var t=e.children,n=(0,i.useContext)(s.AmpStateContext),r=(0,i.useContext)(c.HeadManagerContext);return i.default.createElement(o.default,{reduceComponentsToState:j,headManager:r,inAmpMode:(0,a.isInAmpMode)(n)},t)}b.rewind=function(){};var m=b;t.default=m},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var i=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=i},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},Qetd:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},RIqP:function(e,t,n){var r=n("Ijbi"),i=n("EbDI"),o=n("ZhPi"),s=n("Bnag");e.exports=function(e){return r(e)||i(e)||o(e)||s()}},SksO:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},W8MJ:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},WD4f:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[slug]",function(){return n("eL0V")}])},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),i=n("lwsE"),o=n("W8MJ"),s=(n("PJYZ"),n("7W2i")),c=n("a1gu"),a=n("Nsbk");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=a(e);if(t){var i=a(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var d=n("q1tI"),u=function(e){s(n,e);var t=l(n);function n(e){var o;return i(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(d.Component);t.default=u},ZhPi:function(e,t,n){var r=n("WkPL");e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},a1gu:function(e,t,n){var r=n("cDf5"),i=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?i(e):t}},aIN1:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("nKUr");function i(){return Object(r.jsxs)("footer",{children:[Object(r.jsxs)("p",{children:["Made by ",Object(r.jsx)("a",{href:"/",children:"Louie Christie"})]}),Object(r.jsx)("p",{children:Object(r.jsx)("a",{href:"https://help.github.com/articles/github-privacy-statement/#information-from-website-browsers",children:"privacy statement"})})]})}},cDf5:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},eL0V:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return a})),n.d(t,"default",(function(){return l}));var r=n("nKUr"),i=(n("q1tI"),n("tXcZ")),o=n("aIN1");function s(){return Object(r.jsxs)("main",{className:"page-container",style:{maxWidth:640},children:[Object(r.jsx)("p",{children:"A always thought this bit of video from Tony Robbins was good at illustrating time management."}),Object(r.jsxs)("figure",{className:"hero",children:[Object(r.jsx)("div",{className:"iframe-container",children:Object(r.jsx)("iframe",{src:"https://www.youtube.com/embed/10zNZD8tIKY?start=591&end=621&rel=0",frameBorder:0,allow:"autoplay; encrypted-media",allowFullScreen:!0})}),Object(r.jsx)("figcaption",{children:"- Would you rather spend your time at a burger stand or in Fiji?"})]}),Object(r.jsx)("p",{children:"The main takeaway from Robbins: time management is actually all about using emotion, focus on some goal in the future that will make you happy."}),Object(r.jsxs)("p",{children:["The rest of the video is delightfully cheesy 1980s, and"," ",Object(r.jsx)("a",{href:"https://www.youtube.com/embed/10zNZD8tIKY?start=11&end=19&rel=0",children:"Robbins at times"})," ","looks like 80\u2019s"," ",Object(r.jsx)("a",{href:"https://upload.wikimedia.org/wikipedia/en/5/52/American-psycho-patrick-bateman.jpg",children:"Christian Bale in American Psycho"}),"."]}),Object(r.jsx)("div",{className:"box-shadow",children:Object(r.jsxs)("p",{children:[Object(r.jsx)("strong",{children:"Warning \u26a0\ufe0f"}),": Tony Robbins does not have all the answers, a lot of self-help is bollocks."]})}),Object(r.jsxs)("sub",{children:["(A guy a knew spent a lot of money on"," ",Object(r.jsx)("a",{href:"https://www.netflix.com/title/80102204",children:"Robbin's conferences"}),", and later topped himself.)"]}),Object(r.jsx)("p",{children:"But I always thought Robbins\u2019s time management stuff was good, and his investment advice."}),Object(r.jsx)("h2",{children:"Also on time management"}),Object(r.jsxs)("p",{children:["I see the NHS are recommending the time matrix thing, as created by President Eisenhower and publicised in the book The Seven Habits of Highly Effective People - focus on the things that are"," ",Object(r.jsx)("a",{href:"https://www.nhs.uk/conditions/stress-anxiety-depression/time-management-tips/",children:"not urgent but important"})," ","- so that's not self help bollocks."]}),Object(r.jsxs)("figure",{className:"embed column",children:[Object(r.jsx)("div",{className:"image-container",children:Object(r.jsx)("a",{href:"https://commons.wikimedia.org/wiki/File:MerrillCoveyMatrix.png#/media/File:MerrillCoveyMatrix.png",children:Object(r.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/3/32/MerrillCoveyMatrix.png",alt:"MerrillCoveyMatrix.png",style:{width:"300px"}})})}),Object(r.jsxs)("figcaption",{children:["- From"," ",Object(r.jsx)("a",{href:"https://commons.wikimedia.org/w/index.php?curid=2135450",children:"Wikipedia"})]})]}),Object(r.jsx)("div",{style:{margin:"2em"},children:Object(r.jsx)("a",{className:"link-box",href:"https://www.nhs.uk/conditions/stress-anxiety-depression/feel-better-and-happy/",children:Object(r.jsx)("aside",{className:"box-shadow column",style:{margin:"0 auto"},children:Object(r.jsxs)("figure",{children:["6 NHS tips to help you be happier:",Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:"1. Manage your stress levels."}),Object(r.jsx)("li",{children:"2. Enjoy yourself."}),Object(r.jsx)("li",{children:"3. Boost your self-esteem."}),Object(r.jsx)("li",{children:"4. Have a healthy lifestyle."}),Object(r.jsx)("li",{children:"5. Talk and share."}),Object(r.jsx)("li",{children:"6. Build your resilience."})]}),Object(r.jsx)("figcaption",{children:Object(r.jsxs)("a",{href:"https://www.nhs.uk/conditions/stress-anxiety-depression/feel-better-and-happy/",children:["National Health Service UK",Object(r.jsx)("br",{}),"(accessed 2019-12-09.)"]})})]})})})}),Object(r.jsx)("h2",{children:"Time Management: And Now In 3D"}),Object(r.jsx)("p",{children:"My new take on time management - part art exhibit, part science project, part Ikea furniture with scribbles on."}),Object(r.jsxs)("figure",{className:"embed",children:[Object(r.jsx)("div",{className:"image-container",children:Object(r.jsx)("img",{className:"three-d",sizes:"(max-width: 1920px) 100vw, 1920px",srcSet:" ../../time-management-cube-by-louie-christie-2018_me7fst_c_scale,w_320.jpg          320w, ../../images/time-management-cube-by-louie-christie-2018_me7fst_c_scale,w_1307.jpg 1307w, ../../images/time-management-cube-by-louie-christie-2018_me7fst_c_scale,w_1920.jpg 1920w ",src:"../../images/time-management-cube-by-louie-christie-2018_me7fst_c_scale,w_1920.jpg",alt:"Hessian cube box with post-it notes on it. A post-it note says win-win at the corner of 3 axis: good for me (not bad for me), good for others (not bad for others), good in the future, good now. That's four dimensions?... \ud83e\udd14. I'm not sure how it breaks time and space.",title:"Hessian cube box with post-it notes on it. A post-it note says win-win at the corner of 3 axis: good for me (not bad for me), good for others (not bad for others), good in the future, good now. That's four dimensions?... \ud83e\udd14. I'm not sure how it breaks time and space."})}),Object(r.jsxs)("figcaption",{className:"box-shadow",children:[Object(r.jsxs)("h3",{children:["Time Management Cube ",Object(r.jsx)("br",{}),"- Louie Christie ",Object(r.jsx)("br",{}),"(2018, Croydon",Object(r.jsx)("sup",{children:"*"}),")"]}),Object(r.jsx)("p",{children:"A Hessian cube box with post-it notes on it. A post-it note says win-win at the corner of 3 axis:"}),Object(r.jsxs)("ol",{children:[Object(r.jsx)("li",{children:"good for me (not bad for me),"}),Object(r.jsx)("li",{children:"good for others (not bad for others),"}),Object(r.jsx)("li",{children:"good in the future (not bad in the future),"}),Object(r.jsx)("li",{children:"good now (not bad now)."})]}),Object(r.jsx)("p",{children:"That's four dimensions?... I'm not sure how it breaks time and space."})]})]}),Object(r.jsx)("p",{children:"Prior art influences also include: the Tal Ben-Shahar Positive Psychology course at Harvard University (which may or may not be freely available online.)"}),Object(r.jsx)("h2",{children:"Footnotes"}),Object(r.jsx)("p",{children:Object(r.jsx)("sub",{children:"[*] Croydon - shithole and street art capital."})})]})}function c(){return Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:"iframe-container",children:Object(r.jsx)("iframe",{src:"//fast.wistia.net/embed/iframe/n54m1lmixt?playerColor=bb6b29&version=v1&videoHeight=315&videoWidth=560&volumeControl=true",allowFullScreen:!0})}),Object(r.jsxs)("cite",{children:['Sponsored by "REMOTE"'," ",Object(r.jsx)("a",{href:"https://basecamp.com/books/remote?wvideo=n54m1lmixt",children:"more info"})," ",Object(r.jsx)("a",{href:"https://amzn.to/2XFcgb9",children:"[Ad] Buy it"})]}),Object(r.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[Object(r.jsxs)("blockquote",{className:"twitter-tweet",children:[Object(r.jsxs)("p",{lang:"en",dir:"ltr",children:["Coronavirus discount! I just got REMOTE WORK audiobook for free:",Object(r.jsx)("a",{href:"https://t.co/F35zZ5P1RT",children:"https://t.co/F35zZ5P1RT"}),Object(r.jsx)("a",{href:"https://t.co/ZvZ7CH4Xs6",children:"https://t.co/ZvZ7CH4Xs6"})]}),"\u2014 Louie Christie (@louiechristie)",Object(r.jsx)("a",{href:"https://twitter.com/louiechristie/status/1238045934069653504?ref_src=twsrc%5Etfw",children:"March 12, 2020"})]}),Object(r.jsx)("script",{async:!0,src:"https://platform.twitter.com/widgets.js",charSet:"utf-8"})]}),Object(r.jsxs)("div",{className:"cta",children:[Object(r.jsx)("p",{children:Object(r.jsx)("a",{href:"https://amzn.to/2XFcgb9",children:"[Ad] Buy REMOTE book on Amazon.co.uk"})}),Object(r.jsx)("p",{children:Object(r.jsx)("iframe",{className:"amazonAdContainer",marginWidth:0,marginHeight:0,scrolling:"no",frameBorder:0,src:"//ws-eu.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=GB&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=louiechristie-21&language=en_GB&marketplace=amazon&region=GB&placement=0091954673&asins=0091954673&linkId=44f2c06c0b601a6db5b71ca04cbb8377&show_border=true&link_opens_in_new_window=false"})})]})]})}var a=!0;function l(e){var t=e.errors,n=e.meme;if(t)return Object(r.jsx)("div",{title:"Error",children:Object(r.jsxs)("p",{children:[Object(r.jsx)("span",{style:{color:"red"},children:"Error:"})," ",t]})});var a=n.url,l=n.title,d=n.image,u=n.width,h=n.height,j=n.alt,b=n.caption,m=n.cite,f=n.youtube,p=n.bbc,x=n.footnotes,O=n.customHTML,g=l,y="meme | louiechristie.com";if(f){var w=f.end-f.start,v=Math.round(w/60)||"",_=w%60;g="".concat(l," | video [").concat(v?v+" mins":_+" sec","]")}return b&&(y="".concat(b," | ").concat(y)),O&&"remote-working"===a?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(i.a,{title:g,description:y,image:d}),Object(r.jsx)(c,{}),Object(r.jsx)(o.a,{})]}):O&&"time-management"===a?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(i.a,{title:g,description:y,image:d}),Object(r.jsx)(s,{}),Object(r.jsx)(o.a,{})]}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(i.a,{title:g,description:y,image:d}),Object(r.jsxs)("div",{className:"meme-container",children:[Object(r.jsx)("h1",{className:"meme-title",children:l}),Object(r.jsxs)("div",{className:"meme-inner",children:[!f&&!p&&Object(r.jsxs)("figure",{className:"meme-fig",children:[Object(r.jsx)("img",{src:d,alt:j,width:u||void 0,height:h||void 0}),b&&Object(r.jsx)("figcaption",{className:"meme-fig-caption",children:Object(r.jsx)("blockquote",{children:b})})]}),f&&Object(r.jsxs)("figure",{className:"youtube",children:[Object(r.jsx)("div",{className:"iframe-container",children:Object(r.jsx)("iframe",{src:"https://www.youtube.com/embed/".concat(f.v,"?start=").concat(f.start,"&amp;end=").concat(f.end,"&amp;rel=0"),frameBorder:"0",allowFullScreen:!0})}),b&&Object(r.jsxs)("div",{className:m?"quote":"",children:[Object(r.jsx)("blockquote",{children:b}),m&&Object(r.jsxs)("cite",{children:[" - ",m," "]})]})]}),p&&Object(r.jsxs)("figure",{className:"meme-fig",children:[Object(r.jsxs)("a",{href:p.link,children:[Object(r.jsx)("img",{src:d,alt:j,width:u||void 0,height:h||void 0}),Object(r.jsx)("p",{children:"Watch video [2 mins]"})]}),b&&Object(r.jsx)("figcaption",{className:"meme-fig-caption",children:Object(r.jsx)("blockquote",{children:Object(r.jsx)("p",{children:b})})})]})]})]}),x&&Object(r.jsxs)("section",{className:"footnotes-container",children:[Object(r.jsx)("h5",{children:"Footnotes"}),Object(r.jsx)("ol",{className:"footnotes",children:x.map((function(e,t){var n=t+1;return Object(r.jsxs)("li",{className:"footnote",children:[e.text||null,"\xa0",e.link&&Object(r.jsxs)("a",{className:"ref",href:e.link||void 0,children:["[",n,"]"]})]},e.text||t)}))})]}),Object(r.jsx)(o.a,{})]})}},g4pe:function(e,t,n){e.exports=n("8Kt/")},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var i=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=i},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},rePB:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},tXcZ:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("nKUr"),i=n("rePB"),o=n("g4pe"),s=n.n(o);function c(e){var t=e.title,n=void 0===t?"memes | louiechristie.com":t,o=e.description,c=void 0===o?"... (Internet, slang) Something, usually humorous, which is copied and circulated online with slight adaptations, including quizzes, basic pictures, video templates etc.":o,a=e.image,l=void 0===a?"/images/lc-icon.svg":a;return Object(r.jsxs)("div",{children:[Object(r.jsxs)(s.a,{children:[Object(r.jsx)("title",{children:n}),Object(r.jsx)("meta",{name:"description",content:c}),Object(r.jsx)("meta",{property:"og:image",content:l}),Object(r.jsx)("meta",{property:"og:description",content:c}),Object(r.jsx)("meta",{property:"og:type",content:"website"}),Object(r.jsx)("meta",{property:"twitter:title",content:n}),Object(r.jsx)("meta",{name:"twitter:description",content:c}),Object(r.jsx)("meta",{property:"twitter:card",content:"summary"}),Object(r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),Object(r.jsx)("link",Object(i.a)({href:"https://fonts.googleapis.com/css?family=Roboto+Mono:700|Roboto:400,900&display=swap",rel:"stylesheet"},"rel","preload")),Object(r.jsx)("meta",{name:"monetization",content:"$ilp.gatehub.net/484331722"})]}),Object(r.jsx)("header",{children:Object(r.jsxs)("nav",{children:[Object(r.jsx)("div",{id:"home-button",children:Object(r.jsx)("a",{href:"/",children:Object(r.jsx)("img",{src:"/images/lc-icon.svg",width:"40",height:"40",alt:"louiechristie.com icon, L C initials handwritten",role:"img"})})}),Object(r.jsxs)("div",{id:"hamnav",children:[Object(r.jsx)("label",{htmlFor:"hamburger",children:"\u2630"}),Object(r.jsx)("input",{type:"checkbox",id:"hamburger"}),Object(r.jsxs)("div",{id:"hamitems",children:[Object(r.jsx)("a",{href:"/",children:"home"})," ",Object(r.jsx)("a",{href:"/adventure/",children:"adventure"}),Object(r.jsx)("a",{href:"/blog/",children:"blog"}),Object(r.jsx)("a",{href:"https://comedy.louiechristie.com",children:"comedy"}),Object(r.jsx)("a",{href:"/#experiments",children:"experiments"}),Object(r.jsx)("a",{href:"/#tech-talks",children:"talks"}),Object(r.jsx)("a",{href:"/intro-to-web-dev-course/",children:"tutorials"}),Object(r.jsx)("a",{href:"/memes/",className:"active",children:"memes"}),Object(r.jsx)("a",{href:"/#profiles",children:"profiles"}),Object(r.jsx)("a",{href:"/#about",children:"about"}),Object(r.jsx)("a",{href:"/blog/contact/",children:"contact"})]})]})]})})]})}}},[["WD4f",0,1]]]);