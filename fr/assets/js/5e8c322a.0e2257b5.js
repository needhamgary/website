"use strict";(self.webpackChunk_sern_website=self.webpackChunk_sern_website||[]).push([[7597],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),d=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=d(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=d(t),m=a,g=u["".concat(s,".").concat(m)]||u[m]||c[m]||i;return t?r.createElement(g,l(l({ref:n},p),{},{components:t})):r.createElement(g,l({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=u;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var d=2;d<i;d++)l[d]=t[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7926:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=t(7462),a=(t(7294),t(3905));const i={id:"index",title:"@sern/handler",sidebar_label:"Readme",sidebar_position:0,custom_edit_url:null},l=void 0,o={unversionedId:"api/index",id:"api/index",title:"@sern/handler",description:"Handlers. Redefined.",source:"@site/docs/api/index.md",sourceDirName:"api",slug:"/api/",permalink:"/fr/docs/api/",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"index",title:"@sern/handler",sidebar_label:"Readme",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",next:{title:"Exports",permalink:"/fr/docs/api/modules"}},s={},d=[{value:"\ud83d\udcdc Installation",id:"-installation",level:2},{value:"Why?",id:"why",level:2},{value:"\ud83d\udc40 Quick Look",id:"-quick-look",level:2},{value:"\ud83d\udc76 Basic Usage",id:"-basic-usage",level:2},{value:"<code> index.js (CommonJS)</code>",id:"-indexjs-commonjs",level:4},{value:"<code> ping.js (CommonJS)</code>",id:"-pingjs-commonjs",level:4},{value:"\ud83d\udcbb CLI",id:"-cli",level:2},{value:"\ud83d\udd17 Links",id:"-links",level:2},{value:"\ud83d\udc4b Contribute",id:"-contribute",level:2},{value:"\ud83d\ude88 Roadmap",id:"-roadmap",level:2}],p={toc:d};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://raw.githubusercontent.com/sern-handler/.github/main/banner.png",width:"900px"})),(0,a.kt)("h1",{align:"center"},"Handlers. Redefined."),(0,a.kt)("h4",{align:"center"},"A customizable, batteries-included, powerful discord.js framework to streamline bot development."),(0,a.kt)("div",{align:"center",styles:"margin-top: 10px"},(0,a.kt)("img",{src:"https://img.shields.io/badge/open-source-brightgreen"}),(0,a.kt)("a",{href:"https://www.npmjs.com/package/@sern/handler"},(0,a.kt)("img",{src:"https://img.shields.io/npm/v/@sern/handler?maxAge=3600",alt:"NPM version"})),(0,a.kt)("a",{href:"https://www.npmjs.com/package/@sern/handler"},(0,a.kt)("img",{src:"https://img.shields.io/npm/dt/@sern/handler?maxAge=3600",alt:"NPM downloads"})),(0,a.kt)("a",{href:"https://opensource.org/licenses/MIT"},(0,a.kt)("img",{src:"https://img.shields.io/badge/license-MIT-brightgreen",alt:"License MIT"})),(0,a.kt)("a",{href:"https://sern.dev"},(0,a.kt)("img",{alt:"docs.rs",src:"https://img.shields.io/docsrs/docs"})),(0,a.kt)("img",{alt:"Lines of code",src:"https://img.shields.io/badge/total%20lines-2k-blue"})),(0,a.kt)("h2",{id:"-installation"},"\ud83d\udcdc Installation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npm install @sern/handler\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"yarn add @sern/handler\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add @sern/handler\n")),(0,a.kt)("h2",{id:"why"},"Why?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Most handlers don't support discord.js 14.7+"),(0,a.kt)("li",{parentName:"ul"},"Customizable commands"),(0,a.kt)("li",{parentName:"ul"},"Plug and play or customize to your liking"),(0,a.kt)("li",{parentName:"ul"},"Embraces reactive programming for consistent and reliable backend"),(0,a.kt)("li",{parentName:"ul"},"Customizable logger, error handling, and more"),(0,a.kt)("li",{parentName:"ul"},"Active development and growing ",(0,a.kt)("a",{parentName:"li",href:"https://sern.dev/discord"},"community"))),(0,a.kt)("h2",{id:"-quick-look"},"\ud83d\udc40 Quick Look"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Support for discord.js v14 and all interactions"),(0,a.kt)("li",{parentName:"ul"},"Hybrid commands"),(0,a.kt)("li",{parentName:"ul"},"Lightweight and customizable"),(0,a.kt)("li",{parentName:"ul"},"ESM, CommonJS and TypeScript support"),(0,a.kt)("li",{parentName:"ul"},"A powerful CLI and awesome community-made plugins")),(0,a.kt)("h2",{id:"-basic-usage"},"\ud83d\udc76 Basic Usage"),(0,a.kt)("h4",{id:"-indexjs-commonjs"},(0,a.kt)("inlineCode",{parentName:"h4"}," index.js (CommonJS)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// Import the discord.js Client and GatewayIntentBits\nconst { Client, GatewayIntentBits } = require('discord.js');\n\n// Import Sern namespace\nconst { Sern } = require('@sern/handler');\n\n// Our configuration file\nconst { defaultPrefix, token } = require('./config.json');\n\nconst client = new Client({\n  intents: [\n    GatewayIntentBits.Guilds,\n    GatewayIntentBits.GuildMembers,\n    GatewayIntentBits.GuildMessages\n  ]\n});\nexport const useContainer = Sern.makeDependencies({\n    build: root => root\n        .add({ '@sern/client': single(client)  })\n        .add({ '@sern/logger': single(new DefaultLogging()) })\n});\n\n//View docs for all options\nSern.init({\n    defaultPrefix: '!', // removing defaultPrefix will shut down text commands\n    commands: 'src/commands',\n    // events: 'src/events' (optional),\n    containerConfig : {\n        get: useContainer\n    }\n});\n\nclient.login(token);\n")),(0,a.kt)("h4",{id:"-pingjs-commonjs"},(0,a.kt)("inlineCode",{parentName:"h4"}," ping.js (CommonJS)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const { CommandType, commandModule } = require('@sern/handler');\n\nexports.default = commandModule({\n  name: 'ping',\n  description: 'A ping pong command',\n  type: CommandType.Slash,\n  execute(ctx) {\n    ctx.reply('pong!');\n  }\n});\n")),(0,a.kt)("p",null,"See our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/sern-handler/templates"},"templates")," for TypeScript examples and more."),(0,a.kt)("h2",{id:"-cli"},"\ud83d\udcbb CLI"),(0,a.kt)("p",null,"It is ",(0,a.kt)("strong",{parentName:"p"},"highly encouraged")," to use the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/sern-handler/cli"},"command line interface")," for your project. Don't forget to view it."),(0,a.kt)("h2",{id:"-links"},"\ud83d\udd17 Links"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://sern.dev"},"Official Documentation and Guide")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://sern.dev/discord"},"Support Server"))),(0,a.kt)("h2",{id:"-contribute"},"\ud83d\udc4b Contribute"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Read our contribution ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/sern-handler/handler/blob/main/.github/CONTRIBUTING.md"},"guidelines")," carefully"),(0,a.kt)("li",{parentName:"ul"},"Pull up on ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/sern-handler/handler/issues"},"issues")," and report bugs"),(0,a.kt)("li",{parentName:"ul"},"All kinds of contributions are welcomed.")),(0,a.kt)("h2",{id:"-roadmap"},"\ud83d\ude88 Roadmap"),(0,a.kt)("p",null,"You can check our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/sern-handler/roadmap"},"roadmap")," to see what's going to be added or patched in the future."))}c.isMDXComponent=!0}}]);