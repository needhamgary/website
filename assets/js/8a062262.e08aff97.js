"use strict";(self.webpackChunk_sern_website=self.webpackChunk_sern_website||[]).push([[4252],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),o=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=o(e.components);return r.createElement(d.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=o(n),m=a,k=c["".concat(d,".").concat(m)]||c[m]||u[m]||i;return n?r.createElement(k,l(l({ref:t},s),{},{components:n})):r.createElement(k,l({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p[c]="string"==typeof e?e:a,l[1]=p;for(var o=2;o<i;o++)l[o]=n[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3817:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>o});var r=n(7462),a=(n(7294),n(3905));const i={id:"DiscordEventPlugin",title:"Interface: DiscordEventPlugin<T>",sidebar_label:"DiscordEventPlugin",sidebar_position:0,custom_edit_url:null},l=void 0,p={unversionedId:"api/interfaces/DiscordEventPlugin",id:"api/interfaces/DiscordEventPlugin",title:"Interface: DiscordEventPlugin<T>",description:"Type parameters",source:"@site/docs/api/interfaces/DiscordEventPlugin.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/DiscordEventPlugin",permalink:"/docs/api/interfaces/DiscordEventPlugin",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"DiscordEventPlugin",title:"Interface: DiscordEventPlugin<T>",sidebar_label:"DiscordEventPlugin",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"DiscordEventCommand",permalink:"/docs/api/interfaces/DiscordEventCommand"},next:{title:"Disposable",permalink:"/docs/api/interfaces/Disposable"}},d={},o=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"description",id:"description",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"execute",id:"execute",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Parameters",id:"parameters",level:5},{value:"Returns",id:"returns",level:5},{value:"Defined in",id:"defined-in-1",level:4},{value:"name",id:"name",level:3},{value:"Overrides",id:"overrides",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"type",id:"type",level:3},{value:"Overrides",id:"overrides-1",level:4},{value:"Defined in",id:"defined-in-3",level:4}],s={toc:o},c="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"T")),(0,a.kt)("td",{parentName:"tr",align:"left"},"extends keyof ",(0,a.kt)("inlineCode",{parentName:"td"},"ClientEvents")," = keyof ",(0,a.kt)("inlineCode",{parentName:"td"},"ClientEvents"))))),(0,a.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/docs/api/interfaces/Plugin"},(0,a.kt)("inlineCode",{parentName:"a"},"Plugin"))),(0,a.kt)("p",{parentName:"li"},"\u21b3 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"DiscordEventPlugin"))))),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"description"},"description"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"description"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Deprecated"))),(0,a.kt)("p",null,"will be removed in the next update"),(0,a.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api/interfaces/Plugin"},"Plugin"),".",(0,a.kt)("a",{parentName:"p",href:"/docs/api/interfaces/Plugin#description"},"description")),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/sern-handler/handler/blob/3daacfc/src/handler/plugins/plugin.ts#L33"},"src/handler/plugins/plugin.ts:33")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"execute"},"execute"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"execute"),": (",(0,a.kt)("inlineCode",{parentName:"p"},"args"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"ClientEvents"),"[",(0,a.kt)("inlineCode",{parentName:"p"},"T"),"]",", ",(0,a.kt)("inlineCode",{parentName:"p"},"controller"),": ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/interfaces/Controller"},(0,a.kt)("inlineCode",{parentName:"a"},"Controller")),") => ",(0,a.kt)("inlineCode",{parentName:"p"},"Awaitable"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"Result"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"void"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"void"),">",">"),(0,a.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,a.kt)("p",null,"\u25b8 (",(0,a.kt)("inlineCode",{parentName:"p"},"args"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"controller"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"Awaitable"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"Result"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"void"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"void"),">",">"),(0,a.kt)("h5",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"args")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"ClientEvents"),"[",(0,a.kt)("inlineCode",{parentName:"td"},"T"),"]")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"controller")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/docs/api/interfaces/Controller"},(0,a.kt)("inlineCode",{parentName:"a"},"Controller")))))),(0,a.kt)("h5",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Awaitable"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"Result"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"void"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"void"),">",">"),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/sern-handler/handler/blob/3daacfc/src/handler/plugins/plugin.ts#L105"},"src/handler/plugins/plugin.ts:105")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"name"},"name"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"name"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"T")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Deprecated"))),(0,a.kt)("p",null,"will be removed in the next update"),(0,a.kt)("h4",{id:"overrides"},"Overrides"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api/interfaces/Plugin"},"Plugin"),".",(0,a.kt)("a",{parentName:"p",href:"/docs/api/interfaces/Plugin#name"},"name")),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/sern-handler/handler/blob/3daacfc/src/handler/plugins/plugin.ts#L103"},"src/handler/plugins/plugin.ts:103")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"type"},"type"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"type"),": ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/enums/PluginType#event"},(0,a.kt)("inlineCode",{parentName:"a"},"Event"))),(0,a.kt)("h4",{id:"overrides-1"},"Overrides"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api/interfaces/Plugin"},"Plugin"),".",(0,a.kt)("a",{parentName:"p",href:"/docs/api/interfaces/Plugin#type"},"type")),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/sern-handler/handler/blob/3daacfc/src/handler/plugins/plugin.ts#L104"},"src/handler/plugins/plugin.ts:104")))}u.isMDXComponent=!0}}]);