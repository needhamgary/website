"use strict";(self.webpackChunk_sern_website=self.webpackChunk_sern_website||[]).push([[7597],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,h=u["".concat(s,".").concat(m)]||u[m]||p[m]||i;return n?r.createElement(h,l(l({ref:t},c),{},{components:n})):r.createElement(h,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7926:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const i={id:"index",title:"@sern/handler",sidebar_label:"Readme",sidebar_position:0,custom_edit_url:null},l=void 0,o={unversionedId:"api/index",id:"api/index",title:"@sern/handler",description:"Handlers. Redefined.",source:"@site/docs/api/index.md",sourceDirName:"api",slug:"/api/",permalink:"/docs/api/",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"index",title:"@sern/handler",sidebar_label:"Readme",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",next:{title:"Exports",permalink:"/docs/api/modules"}},s={},d=[{value:"\ud83d\udcdc Installation",id:"-installation",level:2},{value:"\ud83d\udc40 Quick Look",id:"-quick-look",level:2},{value:"\ud83d\udc76 Basic Usage",id:"-basic-usage",level:2},{value:"<code> index.js (CommonJS)</code>",id:"-indexjs-commonjs",level:4},{value:"<code> ping.js (CommonJS)</code>",id:"-pingjs-commonjs",level:4},{value:"\ud83d\udcbb CLI",id:"-cli",level:2},{value:"\ud83d\udd17 Links",id:"-links",level:2},{value:"\ud83d\udc4b Contribute",id:"-contribute",level:2},{value:"\ud83d\ude88 Roadmap",id:"-roadmap",level:2}],c={toc:d};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://raw.githubusercontent.com/sern-handler/.github/main/banner.png",width:"900px"})),(0,a.kt)("h1",{align:"center"},"Handlers. Redefined."),(0,a.kt)("h4",{align:"center"},"A customizable, batteries-included, powerful discord.js framework to streamline bot development."),(0,a.kt)("div",{align:"center",styles:"margin-top: 10px"},(0,a.kt)("img",{src:"https://img.shields.io/badge/open-source-brightgreen"}),(0,a.kt)("a",{href:"https://www.npmjs.com/package/@sern/handler"},(0,a.kt)("img",{src:"https://img.shields.io/npm/v/@sern/handler?maxAge=3600",alt:"NPM version"})),(0,a.kt)("a",{href:"https://www.npmjs.com/package/@sern/handler"},(0,a.kt)("img",{src:"https://img.shields.io/npm/dt/@sern/handler?maxAge=3600",alt:"NPM downloads"})),(0,a.kt)("a",{href:"https://opensource.org/licenses/MIT"},(0,a.kt)("img",{src:"https://img.shields.io/badge/license-MIT-brightgreen",alt:"License MIT"})),(0,a.kt)("a",{href:"https://sern-handler.js.org"},(0,a.kt)("img",{alt:"docs.rs",src:"https://img.shields.io/docsrs/docs"})),(0,a.kt)("img",{alt:"Lines of code",src:"https://img.shields.io/badge/total%20lines-2k-blue"})),(0,a.kt)("h2",{id:"-installation"},"\ud83d\udcdc Installation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npm install @sern/handler\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"yarn add @sern/handler\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add @sern/handler\n")),(0,a.kt)("h2",{id:"-quick-look"},"\ud83d\udc40 Quick Look"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Support for discord.js v14 and all interactions"),(0,a.kt)("li",{parentName:"ul"},"Hybrid commands"),(0,a.kt)("li",{parentName:"ul"},"lightweight and customizable"),(0,a.kt)("li",{parentName:"ul"},"ESM, CommonJS and TypeScript support"),(0,a.kt)("li",{parentName:"ul"},"A powerful cli and awesome community-made plugins")),(0,a.kt)("h2",{id:"-basic-usage"},"\ud83d\udc76 Basic Usage"),(0,a.kt)("h4",{id:"-indexjs-commonjs"},(0,a.kt)("inlineCode",{parentName:"h4"}," index.js (CommonJS)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// Import the discord.js Client and GatewayIntentBits\nconst { Client, GatewayIntentBits } = require('discord.js');\n\n// Import Sern namespace\nconst { Sern } = require('@sern/handler');\n\n// Our configuration file\nconst { defaultPrefix, token } = require('./config.json');\n\nconst client = new Client({\n  intents: [\n    GatewayIntentBits.Guilds,\n    GatewayIntentBits.GuildMembers,\n    GatewayIntentBits.GuildMessages\n  ]\n});\n\nSern.init({\n  client,   \n  defaultPrefix,   \n  commands : 'src/commands',\n});\n\nclient.login(token);\n")),(0,a.kt)("h4",{id:"-pingjs-commonjs"},(0,a.kt)("inlineCode",{parentName:"h4"}," ping.js (CommonJS)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const { CommandType, commandModule } = require('@sern/handler');\n\nexports.default = commandModule({\n  name: 'ping',\n  description: 'A ping pong command',\n  type: CommandType.Slash,\n  execute(ctx) {\n    ctx.reply('pong!');\n  }\n});\n")),(0,a.kt)("p",null,"See our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/sern-handler/templates"},"templates")," for TypeScript examples and more"),(0,a.kt)("h2",{id:"-cli"},"\ud83d\udcbb CLI"),(0,a.kt)("p",null,"It is ",(0,a.kt)("strong",{parentName:"p"},"highly encouraged")," to use the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/sern-handler/cli"},"command line interface")," for your project. Don't forget to view it."),(0,a.kt)("h2",{id:"-links"},"\ud83d\udd17 Links"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://sern-handler.js.org"},"Official Documentation and Guide")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://discord.com/invite/mmyCTnYtbF"},"Support Server"))),(0,a.kt)("h2",{id:"-contribute"},"\ud83d\udc4b Contribute"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Read our contribution ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/sern-handler/handler"},"guidelines")," carefully"),(0,a.kt)("li",{parentName:"ul"},"Pull up on ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/sern-handler/handler/issues"},"issues")," and report bugs"),(0,a.kt)("li",{parentName:"ul"},"All kinds of contributions are welcomed.")),(0,a.kt)("h2",{id:"-roadmap"},"\ud83d\ude88 Roadmap"),(0,a.kt)("p",null,"You can check our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/sern-handler/roadmap"},"roadmap")," to see what's going to be added or patched in the future."))}p.isMDXComponent=!0}}]);