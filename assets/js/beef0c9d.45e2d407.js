"use strict";(self.webpackChunk_sern_website=self.webpackChunk_sern_website||[]).push([[2255],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=r.createContext({}),u=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=u(n),m=i,h=c["".concat(d,".").concat(m)]||c[m]||p[m]||l;return n?r.createElement(h,a(a({ref:t},s),{},{components:n})):r.createElement(h,a({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,a=new Array(l);a[0]=c;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var u=2;u<l;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2672:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=n(7462),i=(n(7294),n(3905));const l={id:"SernError",title:"Enumeration: SernError",sidebar_label:"SernError",sidebar_position:0,custom_edit_url:null},a=void 0,o={unversionedId:"api/enums/SernError",id:"api/enums/SernError",title:"Enumeration: SernError",description:"Enumeration Members",source:"@site/docs/api/enums/SernError.md",sourceDirName:"api/enums",slug:"/api/enums/SernError",permalink:"/docs/api/enums/SernError",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"SernError",title:"Enumeration: SernError",sidebar_label:"SernError",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"PluginType",permalink:"/docs/api/enums/PluginType"},next:{title:"CommandExecutable",permalink:"/docs/api/classes/CommandExecutable"}},d={},u=[{value:"Enumeration Members",id:"enumeration-members",level:2},{value:"InvalidModuleType",id:"invalidmoduletype",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"MismatchEvent",id:"mismatchevent",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"MismatchModule",id:"mismatchmodule",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"MissingRequired",id:"missingrequired",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"NotSupportedInteraction",id:"notsupportedinteraction",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"NotSupportedYet",id:"notsupportedyet",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"PluginFailure",id:"pluginfailure",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"UndefinedModule",id:"undefinedmodule",level:3},{value:"Defined in",id:"defined-in-7",level:4}],s={toc:u};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"enumeration-members"},"Enumeration Members"),(0,i.kt)("h3",{id:"invalidmoduletype"},"InvalidModuleType"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"InvalidModuleType")," = ",(0,i.kt)("inlineCode",{parentName:"p"},'"Detected an unknown module type"')),(0,i.kt)("p",null,"Throws when registering an invalid module.\nThis means it is undefined or an invalid command type was provided"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sern-handler/handler/blob/33f1446/src/handler/structures/errors.ts#L9"},"src/handler/structures/errors.ts:9")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"mismatchevent"},"MismatchEvent"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"MismatchEvent")," = ",(0,i.kt)("inlineCode",{parentName:"p"},'"You cannot use message when an interaction fired or vice versa"')),(0,i.kt)("p",null,"A crash that occurs when accessing an invalid property of Context"),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sern-handler/handler/blob/33f1446/src/handler/structures/errors.ts#L29"},"src/handler/structures/errors.ts:29")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"mismatchmodule"},"MismatchModule"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"MismatchModule")," = ",(0,i.kt)("inlineCode",{parentName:"p"},'"A module type mismatched with event emitted!"')),(0,i.kt)("p",null,"Attempted to lookup module in command module store. Nothing was found!"),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sern-handler/handler/blob/33f1446/src/handler/structures/errors.ts#L17"},"src/handler/structures/errors.ts:17")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"missingrequired"},"MissingRequired"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"MissingRequired")," = ",(0,i.kt)("inlineCode",{parentName:"p"},'"@sern/client is required but was not found"')),(0,i.kt)("p",null,"Required Dependency not found"),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sern-handler/handler/blob/33f1446/src/handler/structures/errors.ts#L37"},"src/handler/structures/errors.ts:37")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"notsupportedinteraction"},"NotSupportedInteraction"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"NotSupportedInteraction")," = ",(0,i.kt)("inlineCode",{parentName:"p"},'"This interaction is not supported."')),(0,i.kt)("p",null,"Unsupported interaction at this moment."),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sern-handler/handler/blob/33f1446/src/handler/structures/errors.ts#L21"},"src/handler/structures/errors.ts:21")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"notsupportedyet"},"NotSupportedYet"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"NotSupportedYet")," = ",(0,i.kt)("inlineCode",{parentName:"p"},'"This feature is not supported yet"')),(0,i.kt)("p",null,"Unsupported feature attempted to access at this time"),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sern-handler/handler/blob/33f1446/src/handler/structures/errors.ts#L33"},"src/handler/structures/errors.ts:33")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"pluginfailure"},"PluginFailure"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"PluginFailure")," = ",(0,i.kt)("inlineCode",{parentName:"p"},'"A plugin failed to call controller.next()"')),(0,i.kt)("p",null,"One plugin called ",(0,i.kt)("inlineCode",{parentName:"p"},"controller.stop()")," (end command execution / loading)"),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sern-handler/handler/blob/33f1446/src/handler/structures/errors.ts#L25"},"src/handler/structures/errors.ts:25")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"undefinedmodule"},"UndefinedModule"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"UndefinedModule")," = ",(0,i.kt)("inlineCode",{parentName:"p"},'"A module could not be detected"')),(0,i.kt)("p",null,"Attempted to lookup module in command module store. Nothing was found!"),(0,i.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sern-handler/handler/blob/33f1446/src/handler/structures/errors.ts#L13"},"src/handler/structures/errors.ts:13")))}p.isMDXComponent=!0}}]);