"use strict";(self.webpackChunk_sern_website=self.webpackChunk_sern_website||[]).push([[7750],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),g=o,f=d["".concat(l,".").concat(g)]||d[g]||p[g]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4355:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:7},a="Good to know",s={unversionedId:"guide/walkthrough/good-to-know",id:"guide/walkthrough/good-to-know",title:"Good to know",description:"sern.config.json",source:"@site/docs/guide/walkthrough/good-to-know.md",sourceDirName:"guide/walkthrough",slug:"/guide/walkthrough/good-to-know",permalink:"/fr/docs/guide/walkthrough/good-to-know",draft:!1,editUrl:"https://github.com/sern-handler/website/edit/main/docs/guide/walkthrough/good-to-know.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"The SernEmitter class",permalink:"/fr/docs/guide/walkthrough/sern-emitter"},next:{title:"Conclusion",permalink:"/fr/docs/guide/walkthrough/conclusion"}},l={},c=[{value:"sern.config.json",id:"sernconfigjson",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"good-to-know"},"Good to know"),(0,o.kt)("h2",{id:"sernconfigjson"},"sern.config.json"),(0,o.kt)("p",null,"A sern.config.json, although not necessary, allows your project to communicate with our cli."),(0,o.kt)("p",null,"For example, when installing typescript plugins, the language property is necessary to install from our\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/sern-handler/awesome-plugins"},"open source repository"),". ",(0,o.kt)("br",null)),(0,o.kt)("p",null,"Using the cli and running ",(0,o.kt)("inlineCode",{parentName:"p"},"sern init --sync")," on pre-existing projects should install this json file in the root directory given.\nOr, if this is a brand-new project, ",(0,o.kt)("inlineCode",{parentName:"p"},"sern init")," automatically installs it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "language": "typescript",\n  "paths": {\n    "base": "src",\n    "commands": "commands"\n  }\n}\n')))}p.isMDXComponent=!0}}]);