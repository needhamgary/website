"use strict";(self.webpackChunk_sern_website=self.webpackChunk_sern_website||[]).push([[4429],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),u=s(n),f=i,m=u["".concat(p,".").concat(f)]||u[f]||c[f]||l;return n?r.createElement(m,o(o({ref:t},d),{},{components:n})):r.createElement(m,o({ref:t},d))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,o=new Array(l);o[0]=u;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},624:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>a,toc:()=>s});var r=n(7462),i=(n(7294),n(3905));const l={id:"Controller",title:"Interface: Controller",sidebar_label:"Controller",sidebar_position:0,custom_edit_url:null},o=void 0,a={unversionedId:"api/interfaces/Controller",id:"api/interfaces/Controller",title:"Interface: Controller",description:"Properties",source:"@site/docs/api/interfaces/Controller.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/Controller",permalink:"/docs/api/interfaces/Controller",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"Controller",title:"Interface: Controller",sidebar_label:"Controller",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"ControlPlugin",permalink:"/docs/api/interfaces/ControlPlugin"},next:{title:"Dependencies",permalink:"/docs/api/interfaces/Dependencies"}},p={},s=[{value:"Properties",id:"properties",level:2},{value:"next",id:"next",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Returns",id:"returns",level:5},{value:"Defined in",id:"defined-in",level:4},{value:"stop",id:"stop",level:3},{value:"Type declaration",id:"type-declaration-1",level:4},{value:"Returns",id:"returns-1",level:5},{value:"Defined in",id:"defined-in-1",level:4}],d={toc:s};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"next"},"next"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"next"),": () => ",(0,i.kt)("inlineCode",{parentName:"p"},"Ok"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,i.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,i.kt)("p",null,"\u25b8 (): ",(0,i.kt)("inlineCode",{parentName:"p"},"Ok"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,i.kt)("h5",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Ok"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sern-handler/handler/blob/33f1446/src/types/plugin.ts#L25"},"src/types/plugin.ts:25")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"stop"},"stop"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"stop"),": () => ",(0,i.kt)("inlineCode",{parentName:"p"},"Err"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,i.kt)("h4",{id:"type-declaration-1"},"Type declaration"),(0,i.kt)("p",null,"\u25b8 (): ",(0,i.kt)("inlineCode",{parentName:"p"},"Err"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,i.kt)("h5",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Err"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sern-handler/handler/blob/33f1446/src/types/plugin.ts#L26"},"src/types/plugin.ts:26")))}c.isMDXComponent=!0}}]);