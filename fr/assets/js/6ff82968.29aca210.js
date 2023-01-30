"use strict";(self.webpackChunk_sern_website=self.webpackChunk_sern_website||[]).push([[3462],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),o=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=o(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),u=o(n),f=a,c=u["".concat(p,".").concat(f)]||u[f]||m[f]||i;return n?r.createElement(c,l(l({ref:t},s),{},{components:n})):r.createElement(c,l({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d.mdxType="string"==typeof e?e:a,l[1]=d;for(var o=2;o<i;o++)l[o]=n[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9096:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>o});var r=n(7462),a=(n(7294),n(3905));const i={id:"TextCommand",title:"Interface: TextCommand",sidebar_label:"TextCommand",sidebar_position:0,custom_edit_url:null},l=void 0,d={unversionedId:"api/interfaces/TextCommand",id:"api/interfaces/TextCommand",title:"Interface: TextCommand",description:"Hierarchy",source:"@site/docs/api/interfaces/TextCommand.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/TextCommand",permalink:"/fr/docs/api/interfaces/TextCommand",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"TextCommand",title:"Interface: TextCommand",sidebar_label:"TextCommand",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"StringSelectCommand",permalink:"/fr/docs/api/interfaces/StringSelectCommand"},next:{title:"UserSelectCommand",permalink:"/fr/docs/api/interfaces/UserSelectCommand"}},p={},o=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"alias",id:"alias",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"description",id:"description",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"execute",id:"execute",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Parameters",id:"parameters",level:5},{value:"Returns",id:"returns",level:5},{value:"Overrides",id:"overrides",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"name",id:"name",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"onEvent",id:"onevent",level:3},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"plugins",id:"plugins",level:3},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"type",id:"type",level:3},{value:"Overrides",id:"overrides-1",level:4},{value:"Defined in",id:"defined-in-6",level:4}],s={toc:o};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/fr/docs/api/interfaces/Module"},(0,a.kt)("inlineCode",{parentName:"a"},"Module"))),(0,a.kt)("p",{parentName:"li"},"\u21b3 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"TextCommand"))))),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"alias"},"alias"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"alias"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/sern-handler/handler/blob/33f1446/src/types/module.ts#L44"},"src/types/module.ts:44")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"description"},"description"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"description"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/fr/docs/api/interfaces/Module"},"Module"),".",(0,a.kt)("a",{parentName:"p",href:"/fr/docs/api/interfaces/Module#description"},"description")),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/sern-handler/handler/blob/33f1446/src/types/module.ts#L38"},"src/types/module.ts:38")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"execute"},"execute"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"execute"),": (",(0,a.kt)("inlineCode",{parentName:"p"},"ctx"),": ",(0,a.kt)("a",{parentName:"p",href:"/fr/docs/api/classes/Context"},(0,a.kt)("inlineCode",{parentName:"a"},"Context")),", ",(0,a.kt)("inlineCode",{parentName:"p"},"args"),": [",(0,a.kt)("inlineCode",{parentName:"p"},'"text"'),", ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"[]]) => ",(0,a.kt)("inlineCode",{parentName:"p"},"unknown")),(0,a.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,a.kt)("p",null,"\u25b8 (",(0,a.kt)("inlineCode",{parentName:"p"},"ctx"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"args"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"unknown")),(0,a.kt)("h5",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"ctx")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/fr/docs/api/classes/Context"},(0,a.kt)("inlineCode",{parentName:"a"},"Context")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"args")),(0,a.kt)("td",{parentName:"tr",align:"left"},"[",(0,a.kt)("inlineCode",{parentName:"td"},'"text"'),", ",(0,a.kt)("inlineCode",{parentName:"td"},"string"),"[]]")))),(0,a.kt)("h5",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"unknown")),(0,a.kt)("h4",{id:"overrides"},"Overrides"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/fr/docs/api/interfaces/Module"},"Module"),".",(0,a.kt)("a",{parentName:"p",href:"/fr/docs/api/interfaces/Module#execute"},"execute")),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/sern-handler/handler/blob/33f1446/src/types/module.ts#L45"},"src/types/module.ts:45")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"name"},"name"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"name"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/fr/docs/api/interfaces/Module"},"Module"),".",(0,a.kt)("a",{parentName:"p",href:"/fr/docs/api/interfaces/Module#name"},"name")),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/sern-handler/handler/blob/33f1446/src/types/module.ts#L35"},"src/types/module.ts:35")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"onevent"},"onEvent"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"onEvent"),": ",(0,a.kt)("a",{parentName:"p",href:"/fr/docs/api/interfaces/ControlPlugin"},(0,a.kt)("inlineCode",{parentName:"a"},"ControlPlugin")),"<",(0,a.kt)("inlineCode",{parentName:"p"},"any"),"[]",">","[]"),(0,a.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/fr/docs/api/interfaces/Module"},"Module"),".",(0,a.kt)("a",{parentName:"p",href:"/fr/docs/api/interfaces/Module#onevent"},"onEvent")),(0,a.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/sern-handler/handler/blob/33f1446/src/types/module.ts#L36"},"src/types/module.ts:36")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"plugins"},"plugins"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"plugins"),": ",(0,a.kt)("a",{parentName:"p",href:"/fr/docs/api/interfaces/InitPlugin"},(0,a.kt)("inlineCode",{parentName:"a"},"InitPlugin")),"<",(0,a.kt)("inlineCode",{parentName:"p"},"any"),"[]",">","[]"),(0,a.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/fr/docs/api/interfaces/Module"},"Module"),".",(0,a.kt)("a",{parentName:"p",href:"/fr/docs/api/interfaces/Module#plugins"},"plugins")),(0,a.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/sern-handler/handler/blob/33f1446/src/types/module.ts#L37"},"src/types/module.ts:37")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"type"},"type"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"type"),": ",(0,a.kt)("a",{parentName:"p",href:"/fr/docs/api/enums/CommandType#text"},(0,a.kt)("inlineCode",{parentName:"a"},"Text"))),(0,a.kt)("h4",{id:"overrides-1"},"Overrides"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/fr/docs/api/interfaces/Module"},"Module"),".",(0,a.kt)("a",{parentName:"p",href:"/fr/docs/api/interfaces/Module#type"},"type")),(0,a.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/sern-handler/handler/blob/33f1446/src/types/module.ts#L43"},"src/types/module.ts:43")))}m.isMDXComponent=!0}}]);