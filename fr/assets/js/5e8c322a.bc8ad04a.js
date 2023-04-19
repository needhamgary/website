"use strict";(self.webpackChunk_sern_website=self.webpackChunk_sern_website||[]).push([[7597],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||i;return n?r.createElement(h,l(l({ref:t},d),{},{components:n})):r.createElement(h,l({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7926:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={id:"index",title:"@sern/handler",sidebar_label:"Readme",sidebar_position:0,custom_edit_url:null},l=void 0,o={unversionedId:"api/index",id:"api/index",title:"@sern/handler",description:"Handlers. Redefined.",source:"@site/docs/api/index.md",sourceDirName:"api",slug:"/api/",permalink:"/fr/docs/api/",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"index",title:"@sern/handler",sidebar_label:"Readme",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",next:{title:"Exports",permalink:"/fr/docs/api/modules"}},s={},p=[{value:"Why?",id:"why",level:2},{value:"\ud83d\udc40 Quick Look",id:"-quick-look",level:2},{value:"\ud83d\udcdc Installation",id:"-installation",level:2},{value:"\ud83d\udc76 Basic Usage",id:"-basic-usage",level:2},{value:"\ud83e\udd16 Bots Using sern",id:"-bots-using-sern",level:2},{value:"\ud83d\udcbb CLI",id:"-cli",level:2},{value:"\ud83d\udd17 Links",id:"-links",level:2},{value:"\ud83d\udc4b Contribute",id:"-contribute",level:2}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://raw.githubusercontent.com/sern-handler/.github/main/banner.png",width:"900px"})),(0,a.kt)("h1",{align:"center"},"Handlers. Redefined."),(0,a.kt)("h4",{align:"center"},"A complete, customizable, typesafe, & reactive framework for discord bots"),(0,a.kt)("div",{align:"center",styles:"margin-top: 10px"},(0,a.kt)("img",{src:"https://img.shields.io/badge/open-source-brightgreen"}),(0,a.kt)("a",{href:"https://www.npmjs.com/package/@sern/handler"},(0,a.kt)("img",{src:"https://img.shields.io/npm/v/@sern/handler?maxAge=3600",alt:"NPM version"})),(0,a.kt)("a",{href:"https://www.npmjs.com/package/@sern/handler"},(0,a.kt)("img",{src:"https://img.shields.io/npm/dt/@sern/handler?maxAge=3600",alt:"NPM downloads"})),(0,a.kt)("a",{href:"https://opensource.org/licenses/MIT"},(0,a.kt)("img",{src:"https://img.shields.io/badge/license-MIT-brightgreen",alt:"License MIT"})),(0,a.kt)("a",{href:"https://sern.dev"},(0,a.kt)("img",{alt:"docs.rs",src:"https://img.shields.io/docsrs/docs"})),(0,a.kt)("img",{alt:"Lines of code",src:"https://img.shields.io/badge/total%20lines-2k-blue"})),(0,a.kt)("h2",{id:"why"},"Why?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Most handlers don't support discord.js 14.7+"),(0,a.kt)("li",{parentName:"ul"},"Customizable, composable commands"),(0,a.kt)("li",{parentName:"ul"},"Plug and play or customize to your liking"),(0,a.kt)("li",{parentName:"ul"},"Embraces reactive programming for consistent and reliable backend"),(0,a.kt)("li",{parentName:"ul"},"Customizable logger, error handling, and more"),(0,a.kt)("li",{parentName:"ul"},"Active development and growing ",(0,a.kt)("a",{parentName:"li",href:"https://sern.dev/discord"},"community"))),(0,a.kt)("h2",{id:"-quick-look"},"\ud83d\udc40 Quick Look"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Support for discord.js v14 and all interactions"),(0,a.kt)("li",{parentName:"ul"},"Hybrid commands"),(0,a.kt)("li",{parentName:"ul"},"Lightweight and customizable"),(0,a.kt)("li",{parentName:"ul"},"ESM, CommonJS and TypeScript support"),(0,a.kt)("li",{parentName:"ul"},"A powerful CLI and awesome community-made plugins")),(0,a.kt)("h2",{id:"-installation"},"\ud83d\udcdc Installation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npm install @sern/handler\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"yarn add @sern/handler\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add @sern/handler\n")),(0,a.kt)("h2",{id:"-basic-usage"},"\ud83d\udc76 Basic Usage"),(0,a.kt)("details",{open:!0},(0,a.kt)("summary",null,"ping.ts"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export default commandModule({\n  type: CommandType.Slash,\n  //Installed plugin to publish to discord api and allow access to owners only.\n  plugins: [publish(), ownerOnly()],\n  description: 'A ping pong command',\n  execute(ctx) {\n    ctx.reply('Hello owner of the bot');\n  }\n});\n"))),(0,a.kt)("details",{open:!0},(0,a.kt)("summary",null,"modal.ts"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export default commandModule({\n    type: CommandType.Modal,\n    //Installed a plugin to make sure modal fields pass a validation.\n    plugins : [\n        assertFields({\n            fields: { \n                name: /^([^0-9]*)$/ \n            },\n            failure: (errors, modal) => modal.reply('your submission did not pass the validations')\n        })\n    ],\n    execute : (modal) => {\n        modal.reply('thanks for the submission!');\n    }\n})\n"))),(0,a.kt)("details",{open:!0},(0,a.kt)("summary",null,"index.ts"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { Client, GatewayIntentBits } from 'discord.js';\nimport { Sern, single, type Dependencies } from '@sern/handler';\n\n//client has been declared previously\n\ninterface MyDependencies extends Dependencies {\n    '@sern/client': Singleton<Client>;\n}\nexport const useContainer = Sern.makeDependencies<MyDependencies>({\n    build: root => root\n        .add({ '@sern/client': single(() => client)  })\n});\n\n//View docs for all options\nSern.init({\n    defaultPrefix: '!', // removing defaultPrefix will shut down text commands\n    commands: 'src/commands',\n    // events: 'src/events' (optional),\n    containerConfig : {\n        get: useContainer\n    }\n});\n\nclient.login(\"YOUR_BOT_TOKEN_HERE\");\n"))),(0,a.kt)("h2",{id:"-bots-using-sern"},"\ud83e\udd16 Bots Using sern"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/sern-handler/sern-community"},"Community Bot"),", the community bot for our ",(0,a.kt)("a",{parentName:"li",href:"https://sern.dev/discord"},"discord server"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/SrIzan10/vinci"},"Vinci"),", the bot for Mara Turing."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/baskbotml/bask"},"Bask"),", Listen your favorite artists on Discord."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/SrIzan10/ava"},"ava"),", A discord bot that plays KNGI and Gensokyo Radio."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/murayamabot/murayama"},"Murayama"),", :pepega:"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/needhamgary/Protector"},"Protector (WIP)"),", Just a simple bot to help enhance a private minecraft server.")),(0,a.kt)("h2",{id:"-cli"},"\ud83d\udcbb CLI"),(0,a.kt)("p",null,"It is ",(0,a.kt)("strong",{parentName:"p"},"highly encouraged")," to use the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/sern-handler/cli"},"command line interface")," for your project. Don't forget to view it."),(0,a.kt)("h2",{id:"-links"},"\ud83d\udd17 Links"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://sern.dev"},"Official Documentation and Guide")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://sern.dev/discord"},"Support Server"))),(0,a.kt)("h2",{id:"-contribute"},"\ud83d\udc4b Contribute"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Read our contribution ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/sern-handler/handler/blob/main/.github/CONTRIBUTING.md"},"guidelines")," carefully"),(0,a.kt)("li",{parentName:"ul"},"Pull up on ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/sern-handler/handler/issues"},"issues")," and report bugs"),(0,a.kt)("li",{parentName:"ul"},"All kinds of contributions are welcomed.")))}u.isMDXComponent=!0}}]);