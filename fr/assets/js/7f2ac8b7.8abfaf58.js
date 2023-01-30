"use strict";(self.webpackChunk_sern_website=self.webpackChunk_sern_website||[]).push([[3247],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>s});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),s=a,f=u["".concat(p,".").concat(s)]||u[s]||m[s]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5106:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const i={id:"AutocompleteCommand",title:"Interface: AutocompleteCommand",sidebar_label:"AutocompleteCommand",sidebar_position:0,custom_edit_url:null},o=void 0,l={unversionedId:"api/interfaces/AutocompleteCommand",id:"api/interfaces/AutocompleteCommand",title:"Interface: AutocompleteCommand",description:"Hierarchy",source:"@site/docs/api/interfaces/AutocompleteCommand.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/AutocompleteCommand",permalink:"/fr/docs/api/interfaces/AutocompleteCommand",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"AutocompleteCommand",title:"Interface: AutocompleteCommand",sidebar_label:"AutocompleteCommand",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"SernEmitter",permalink:"/fr/docs/api/classes/SernEmitter"},next:{title:"AutocompletePlugin",permalink:"/fr/docs/api/interfaces/AutocompletePlugin"}},p={},d=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"execute",id:"execute",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Parameters",id:"parameters",level:5},{value:"Returns",id:"returns",level:5},{value:"Overrides",id:"overrides",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"onEvent",id:"onevent",level:3},{value:"Overrides",id:"overrides-1",level:4},{value:"Defined in",id:"defined-in-1",level:4}],c={toc:d};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"Omit"),"<",(0,a.kt)("a",{parentName:"p",href:"/fr/docs/api/interfaces/Module"},(0,a.kt)("inlineCode",{parentName:"a"},"Module")),", ",(0,a.kt)("inlineCode",{parentName:"p"},'"name"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"type"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"plugins"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"description"'),">"),(0,a.kt)("p",{parentName:"li"},"\u21b3 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"AutocompleteCommand"))))),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"execute"},"execute"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"execute"),": (",(0,a.kt)("inlineCode",{parentName:"p"},"ctx"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"AutocompleteInteraction"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"CacheType"),">",") => ",(0,a.kt)("inlineCode",{parentName:"p"},"unknown")),(0,a.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,a.kt)("p",null,"\u25b8 (",(0,a.kt)("inlineCode",{parentName:"p"},"ctx"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"unknown")),(0,a.kt)("h5",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"ctx")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"AutocompleteInteraction"),"<",(0,a.kt)("inlineCode",{parentName:"td"},"CacheType"),">")))),(0,a.kt)("h5",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"unknown")),(0,a.kt)("h4",{id:"overrides"},"Overrides"),(0,a.kt)("p",null,"Omit.execute"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/sern-handler/handler/blob/33f1446/src/types/module.ts#L111"},"src/types/module.ts:111")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"onevent"},"onEvent"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"onEvent"),": ",(0,a.kt)("a",{parentName:"p",href:"/fr/docs/api/interfaces/ControlPlugin"},(0,a.kt)("inlineCode",{parentName:"a"},"ControlPlugin")),"<",(0,a.kt)("inlineCode",{parentName:"p"},"any"),"[]",">","[]"),(0,a.kt)("h4",{id:"overrides-1"},"Overrides"),(0,a.kt)("p",null,"Omit.onEvent"),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/sern-handler/handler/blob/33f1446/src/types/module.ts#L110"},"src/types/module.ts:110")))}m.isMDXComponent=!0}}]);