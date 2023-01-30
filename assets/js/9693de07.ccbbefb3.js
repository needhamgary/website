"use strict";(self.webpackChunk_sern_website=self.webpackChunk_sern_website||[]).push([[9248],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>f});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=r.createContext({}),p=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(o.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(t),f=i,m=u["".concat(o,".").concat(f)]||u[f]||c[f]||a;return t?r.createElement(m,l(l({ref:n},d),{},{components:t})):r.createElement(m,l({ref:n},d))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=u;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var p=2;p<a;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9909:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=t(7462),i=(t(7294),t(3905));const a={id:"Dependencies",title:"Interface: Dependencies",sidebar_label:"Dependencies",sidebar_position:0,custom_edit_url:null},l=void 0,s={unversionedId:"api/interfaces/Dependencies",id:"api/interfaces/Dependencies",title:"Interface: Dependencies",description:"Properties",source:"@site/docs/api/interfaces/Dependencies.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/Dependencies",permalink:"/docs/api/interfaces/Dependencies",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"Dependencies",title:"Interface: Dependencies",sidebar_label:"Dependencies",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Controller",permalink:"/docs/api/interfaces/Controller"},next:{title:"DependencyConfiguration",permalink:"/docs/api/interfaces/DependencyConfiguration"}},o={},p=[{value:"Properties",id:"properties",level:2},{value:"@sern/client",id:"sernclient",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"@sern/emitter",id:"sernemitter",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"@sern/errors",id:"sernerrors",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"@sern/logger",id:"sernlogger",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"@sern/modules",id:"sernmodules",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"@sern/store",id:"sernstore",level:3},{value:"Defined in",id:"defined-in-5",level:4}],d={toc:p};function c(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"sernclient"},"@sern/client"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"@sern/client"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules#singleton"},(0,i.kt)("inlineCode",{parentName:"a"},"Singleton")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"__module"),">"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sern-handler/handler/blob/33f1446/src/types/handler.ts#L40"},"src/types/handler.ts:40")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"sernemitter"},"@sern/emitter"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"@sern/emitter"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules#singleton"},(0,i.kt)("inlineCode",{parentName:"a"},"Singleton")),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/SernEmitter"},(0,i.kt)("inlineCode",{parentName:"a"},"SernEmitter")),">"),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sern-handler/handler/blob/33f1446/src/types/handler.ts#L42"},"src/types/handler.ts:42")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"sernerrors"},"@sern/errors"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"@sern/errors"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules#singleton"},(0,i.kt)("inlineCode",{parentName:"a"},"Singleton")),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/ErrorHandling"},(0,i.kt)("inlineCode",{parentName:"a"},"ErrorHandling")),">"),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sern-handler/handler/blob/33f1446/src/types/handler.ts#L45"},"src/types/handler.ts:45")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"sernlogger"},"@sern/logger"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"@sern/logger"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules#singleton"},(0,i.kt)("inlineCode",{parentName:"a"},"Singleton")),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/Logging"},(0,i.kt)("inlineCode",{parentName:"a"},"Logging")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"unknown"),">",">"),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sern-handler/handler/blob/33f1446/src/types/handler.ts#L41"},"src/types/handler.ts:41")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"sernmodules"},"@sern/modules"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"@sern/modules"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules#singleton"},(0,i.kt)("inlineCode",{parentName:"a"},"Singleton")),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/ModuleManager"},(0,i.kt)("inlineCode",{parentName:"a"},"ModuleManager")),">"),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sern-handler/handler/blob/33f1446/src/types/handler.ts#L44"},"src/types/handler.ts:44")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"sernstore"},"@sern/store"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"@sern/store"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules#singleton"},(0,i.kt)("inlineCode",{parentName:"a"},"Singleton")),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/ModuleStore"},(0,i.kt)("inlineCode",{parentName:"a"},"ModuleStore")),">"),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sern-handler/handler/blob/33f1446/src/types/handler.ts#L43"},"src/types/handler.ts:43")))}c.isMDXComponent=!0}}]);