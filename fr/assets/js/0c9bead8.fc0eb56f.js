"use strict";(self.webpackChunk_sern_website=self.webpackChunk_sern_website||[]).push([[1388],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),m=i,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return t?r.createElement(g,a(a({ref:n},p),{},{components:t})):r.createElement(g,a({ref:n},p))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1311:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=t(7462),i=(t(7294),t(3905));const o={sidebar_position:7},a=void 0,l={unversionedId:"guide/walkthrough/dependency-injection",id:"guide/walkthrough/dependency-injection",title:"dependency-injection",description:"Since version 2.0.0, dependency injection, thanks to iti, is a feature to customize your bot's utilities and structures.",source:"@site/docs/guide/walkthrough/dependency-injection.md",sourceDirName:"guide/walkthrough",slug:"/guide/walkthrough/dependency-injection",permalink:"/fr/docs/guide/walkthrough/dependency-injection",draft:!1,editUrl:"https://github.com/sern-handler/website/edit/main/docs/guide/walkthrough/dependency-injection.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"The SernEmitter class",permalink:"/fr/docs/guide/walkthrough/sern-emitter"},next:{title:"Good to know",permalink:"/fr/docs/guide/walkthrough/good-to-know"}},s={},c=[{value:"Adding dependencies to root",id:"adding-dependencies-to-root",level:2}],p={toc:c};function d(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Since version 2.0.0, dependency injection, thanks to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/molszanski/iti"},"iti"),", is a feature to customize your bot's utilities and structures."),(0,i.kt)("p",null,"Minimal setup for any project."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const client = new Client({\n    ...options\n})\nSern.makeDependencies<MyDependencies>({\n    build: root => \n        root.add({ \n            '@sern/client': single(() => client)\n        })\n})\n\n")),(0,i.kt)("p",null,"For any typescript project, you'll need to add an interface to get intellisense and typings."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"interface MyDependencies extends Dependencies {\n    '@sern/client': Singleton<Client>\n}\n")),(0,i.kt)("p",null,"Full Dependency Injection setup"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const client = new Client({\n    ...options\n})\n\ninterface MyDependencies extends Dependencies {\n    '@sern/client': Singleton<Client>\n}\n\nexport const useContainer = Sern.makeDependencies<MyDependencies>({\n    build: root => \n        root.add({ \n            '@sern/client': single(() => client)\n        })\n})\n\n")),(0,i.kt)("p",null,"Everything else is handled. However, you may want customize things."),(0,i.kt)("h2",{id:"adding-dependencies-to-root"},"Adding dependencies to root"),(0,i.kt)("p",null,"Each sern built dependency must implement its contracts."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@sern/logger"),": Log data. ",(0,i.kt)("a",{parentName:"li",href:"../../api/interfaces/Logging"},"Logging")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@sern/errors"),": Handling errors and lifetime. ",(0,i.kt)("a",{parentName:"li",href:"../../api/interfaces/ErrorHandling"},"ErrorHandling")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@sern/modules"),": Managing all command modules. ",(0,i.kt)("a",{parentName:"li",href:"../../api/interfaces/ModuleManager"},"ModuleManager")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@sern/emitter"),": is the key to emit events and occurences in a project. ",(0,i.kt)("a",{parentName:"li",href:"../../api/classes/SernEmitter"},"SernEmitter"))),(0,i.kt)("p",null," You may also add disposers so that when the application crashes, the targeted dependency calls that function."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export const useContainer = Sern.makeDependencies<MyDependencies>({\n   build: root => \n       root.add({ \n           '@sern/client': single(() => client)\n       })\n       .addDisposer({ '@sern/client': client => client.destroy() })\n})\n\n")))}d.isMDXComponent=!0}}]);