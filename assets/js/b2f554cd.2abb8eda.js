"use strict";(self.webpackChunk_sern_website=self.webpackChunk_sern_website||[]).push([[1477],{10:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"2.5.0","metadata":{"permalink":"/blog/2.5.0","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-01-12-mdx-blog-post.md","source":"@site/blog/2023-01-12-mdx-blog-post.md","title":"Release 2.5.0","description":"2.5 Release","date":"2023-01-12T00:00:00.000Z","formattedDate":"January 12, 2023","tags":[{"label":"release","permalink":"/blog/tags/release"}],"readingTime":0.895,"hasTruncateMarker":false,"authors":[{"name":"jacoobes","title":"Head Dev","url":"https://github.com/jacoobes","imageURL":"https://github.com/jacoobes.png","key":"jacoobes"}],"frontMatter":{"slug":"2.5.0","title":"Release 2.5.0","authors":["jacoobes"],"tags":["release"]},"nextItem":{"title":"Release 2.0.0","permalink":"/blog/2.0.0"}},"content":"## 2.5 Release\\n\\n### Join our [discord](https://sern.dev/discord) <br />\\n- Thank you for using sern in your projects. It\'s only going to get better!\\n- I apologize for the sudden small breaking change. After this update, there won\'t be any for a while.\\nWow! We\'re increasing our semantic versioning by `+0.3.9` <br />\\nWhat does this mean?\\n### Breaking changes\\n- [controller](../docs/api/modules#controller) parameter for plugins has been removed\\n    - You\'ll need to import it instead\\n    - This **breaks** old [CommandPlugin](../docs/api/interfaces/CommandPlugin), but **not** old [EventPlugin](../docs/api/interfaces/EventPlugin)\\n### Deprecations\\n- [CommandPlugin](../docs/api/interfaces/CommandPlugin) and [EventPlugin](../docs/api/interfaces/EventPlugin) have been renamed [InitPlugin](../docs/api/interfaces/InitPlugin) and [ControlPlugin](../docs/api/interfaces/ControlPlugin)\\n\\n### Reason\\n- The naming of plugins was getting too complex. For example, plugin naming evolved into CommandModuleCommandPlugin, CommandModuleEventPlugin and more.\\n- I realize that this affects all plugins. I have updated all [plugins](https://github.com/sern-handler/awesome-plugins/pull/68) to match these changes\\n- The old way of declaring plugins has been deprecated in favor of newer functions that facilitate and ease typings\\n  - [CommandControlPlugin](../docs/api/modules#commandcontrolplugin)\\n  - [CommandInitPlugin](../docs/api/modules#commandinitplugin)\\n  - [EventControlPlugin](../docs/api/modules#eventcontrolplugin)\\n  - [EventInitPlugin](../docs/api/modules#eventinitplugin)\\n  - [DiscordEventControlPlugin](../docs/api/modules#discordeventcontrolplugin)\\n This will probably be the last breaking change in a while. Thanks for using sern!"},{"id":"2.0.0","metadata":{"permalink":"/blog/2.0.0","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2022-12-13-mdx-blog-post.md","source":"@site/blog/2022-12-13-mdx-blog-post.md","title":"Release 2.0.0","description":"2.0 Release","date":"2022-12-13T00:00:00.000Z","formattedDate":"December 13, 2022","tags":[{"label":"release","permalink":"/blog/tags/release"}],"readingTime":3.63,"hasTruncateMarker":false,"authors":[{"name":"jacoobes","title":"Head Dev","url":"https://github.com/jacoobes","imageURL":"https://github.com/jacoobes.png","key":"jacoobes"}],"frontMatter":{"slug":"2.0.0","title":"Release 2.0.0","authors":["jacoobes"],"tags":["release"]},"prevItem":{"title":"Release 2.5.0","permalink":"/blog/2.5.0"},"nextItem":{"title":"How to get started with sern!","permalink":"/blog/getting-started"}},"content":"## 2.0 Release\\nJoin our [discord](https://sern.dev/discord)! <br />\\nWow! We\'re finally increasing our semantic versioning by +`1.7.9.` <br />\\nWhat does this mean?\\n\\n### Plugin Support for Event Modules\\nYou can now use plugins for event modules. Previous version would throw an error if the \\n`plugins` field was populated.\\n\\n```typescript \\nexport function commandPlTest() : SernEmitterPlugin {\\n    return {\\n        type: PluginType.Command,\\n        execute: ({ mod}, controller) => {\\n            if(mod.name === \'module.register\') {\\n                console.log(\'Event Module created correctly\')\\n                return controller.next()\\n            }\\n            console.log(\'event name is wrong\')\\n            return controller.stop()\\n        }\\n    }\\n}\\n```\\nApplying this plugin to some `eventModule`: \\n```typescript\\nexport default eventModule({\\n    name: \'error\',\\n    type: EventType.Sern,\\n    plugins: [commandPlTest()],\\n    execute(m) {\\n        console.log(m)\\n    },\\n})\\n```\\n## Dependency Injection and Decoupling\\n\\nThe powerful npm package `iti` decouples sern even more.\\nDecoupling data structures with the Inversion of Control pattern separates data from logic, which will help speed production\\nand make sern even more customizable than before.\\n\\n### How do I start?\\n```typescript title=\\"src/index.ts\\"\\n//With typescript, you can customize / augment your typings.\\ninterface MyDependencies extends Dependencies {\\n    \'@sern/client\' : Singleton<Client>;\\n    \'@sern/logger\' : Singleton<DefaultLogging>\\n}\\n\\nexport const useContainer = Sern.makeDependencies<MyDependencies>({\\n//  exclude: new Set([\'@sern/logger\']), don\'t autofill optional dependencies\\n    build: root => root\\n        .add({ \'@sern/client\': single(client)  }) \\n        .add({ \'@sern/logger\': single(new DefaultLogging()) })\\n});\\n\\nSern.init({\\n    defaultPrefix: \'!\', // removing defaultPrefix will shut down text commands\\n    commands: \'src/commands\',\\n    // events: \'src/events\' (optional),\\n    containerConfig : {\\n        get: useContainer //pass in your dependency getter here\\n    }\\n});\\n\\n```\\nUsing the `Sern#makeDependencies` function, inject your dependencies. \\nWe\'ll use specific dependencies that are created with the `@sern/keyword`\\nkey.\\nUsing typescript to display all `keywords` and what they represent:\\n```typescript\\nexport interface Dependencies {\\n    \'@sern/client\': Singleton<EventEmitter>; //Discord Client\\n    \'@sern/logger\'?: Singleton<Logging>; //Logger\\n    \'@sern/emitter\': Singleton<SernEmitter>; //SernEmitter\\n    \'@sern/store\' : Singleton<ModuleStore>; //Stores all Command Modules\\n    \'@sern/modules\' : Singleton<ModuleManager>; //Manages Modules\\n    \'@sern/errors\': Singleton<ErrorHandling>; //A Lifetime / Crash Handler\\n}\\n```\\n:::danger\\nSern#addExternal has been deprecated and removed in favor of Sern#makeDependencies\\n:::\\nAt the moment,  one optional dependency, `@sern/logger`, exists. If not added explicitly,\\nwe\'ll **autofill** with a [DefaultLogger](https://sern.dev/docs/api/classes/defaultlogging).\\n\\n:::tip\\nIf you don\'t  want a logger, add it to the\\n`exclude` field while composing dependencies.\\n:::\\n\\nUse your generated dependency getter `useContainer` (use whatever name you want), access them\\nfrom anywhere.\\n:::note\\nthe function [useContainerRaw](https://sern.dev/docs/api/modules#usecontainerraw) is provided for direct access to dependencies and the internal\\ndata structure. Use this wisely as no guarantees are made and crashes can happen.\\n:::\\n\\nThe `build` field follows [createContainer](https://itijs.org/docs/quick-start#usage) function call.\\n\\n## New CommandTypes\\n2.0 includes all the new role select menus. `CommandType.MenuSelect` has been renamed into\\n`CommandType.StringSelect`. The remaining SelectMenus are\\n`CommandType.RoleSelect`, `CommandType.ChannelSelect`, `CommandType.UserSelect`, `CommandType.MentionableSelect`\\n```typescript title=\\"commands/roleselect.ts\\"\\nexport default commandModule({\\n    type: CommandType.RoleSelect,\\n    execute(ctx) {\\n        ctx.reply(\'role select\')\\n    },\\n})\\n```\\nIn addition, commandModules with ContextMenus have been renamed.\\n```diff\\n- CommandType.MenuUser, CommandType.MenuMsg \\n+ CommandType.CtxUser, CommandType.CtxMsg\\n```\\n## Typings Simplification\\nPre 2.0: \\n<img src=\\"https://cdn.discordapp.com/attachments/820348341358952550/1038577974829666386/image.png\\" />\\n<br/> <br/> <br/>\\nPost 2.0:\\n<br/>\\n<img src=\\"https://cdn.discordapp.com/attachments/820348341358952550/1052623728489550015/image.png\\" />\\n\\nCommandPlugin<T\\\\> and EventPlugin<T\\\\> typings have also been static\'ified, transformed from types to interfaces\\n## Breaking Changes\\n<img src=\\"https://img.srizan.ml/Discord_z8Sn1UBfEe.png\\" />\\n<br />\\nAll deprecation warnings from previous versions have taken effect, and are removed in 2.0.\\n\\n```diff\\n- type Module = EventModule | CommandModule\\n+ type AnyModule = EventModule | CommandModule\\n\\n-export type SpreadParams<T extends (...args: never) => unknown> = (\\n-    args: Parameters<T>[number],\\n- ) => unknown;\\n```\\nOverride type has been removed due to redundancy\\n```diff\\n- discord.js : 14.5\\n+ discord.js : 14.7\\n\\n-typescript:  4.7\\n+ typescript:  4.9\\n```\\n```diff\\n+ interface Wrapper {\\n+    readonly defaultPrefix?: string;\\n+    readonly commands: string;\\n+    readonly events?: string;\\n+    readonly containerConfig : {\\n+        get: (...keys: (keyof Dependencies)[]) => unknown[];\\n+    }\\n+}\\n\\n- interface Wrapper {\\n-    readonly client: Client;\\n-    readonly sernEmitter?: SernEmitter;\\n-    readonly defaultPrefix?: string;\\n-    readonly commands: string;\\n-    readonly events?:\\n-        | string\\n-        | { mod: EventModule; absPath: string }[]\\n-        | (() => { mod: EventModule; absPath: string }[]);\\n-}\\n```\\n```diff\\n+ DefaultLogger\\n+ DefaultModuleManager\\n+ SernEmitter\\n+ DefaultErrorHandling\\n+ type Singleton<T> = () => T\\n+ type Transient<T> = () => () => T; \\n+ type LogPayload<T = unknown> = { message: T }\\n+ export const single = <T>() => T\\n+ export const many = <T>() => () => T\\n```\\nIncluding the previous section, some names to symbols and data structures were altered to\\nbe better represented. view [changelog](/404.html)\\n\\n## Context refactoring\\nThe context data structure has been internally altered to represent its dynamics better."},{"id":"getting-started","metadata":{"permalink":"/blog/getting-started","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2022-09-30-mdx-blog-post.md","source":"@site/blog/2022-09-30-mdx-blog-post.md","title":"How to get started with sern!","description":"Hello everyone!","date":"2022-09-30T00:00:00.000Z","formattedDate":"September 30, 2022","tags":[{"label":"guides","permalink":"/blog/tags/guides"}],"readingTime":1.31,"hasTruncateMarker":false,"authors":[{"name":"Sr Izan","title":"Contributor","url":"https://github.com/SrIzan10","imageURL":"https://github.com/SrIzan10.png","key":"Sr Izan"}],"frontMatter":{"slug":"getting-started","title":"How to get started with sern!","authors":["Sr Izan"],"tags":["guides"]},"prevItem":{"title":"Release 2.0.0","permalink":"/blog/2.0.0"},"nextItem":{"title":"Release 1.2.0","permalink":"/blog/1.2.0"}},"content":"## Hello everyone!\\n\\nI\'m Sr Izan, your fellow user and contributor.\\n\\nToday I\'m going to show you how to get started with sern and all its cool features.\\n\\n### Step 1: Install the CLI.\\n\\nInstall the CLI:\\n```\\nnpm i -g @sern/cli\\n```\\nand then run\\n```\\nsern init\\n```\\n:::tip\\nYou can also run `sern init -y` if you want to use the default options.\\n:::\\n\\nThe CLI is written in Typescript and open-sourced on [Github](https://github.com/sern-handler/cli). (thanks [evo](https://github.com/EvolutionX-10)!)\\n\\n### Step 2: Have some way to store secrets.\\n\\nNormally you\'d need a way to store secrets, and the best way to do that is by installing another package: `dotenv`\\n\\njust `npm i dotenv` in the project folder and add `require(\'dotenv\').config()` to your import section. Then, when you login, `process.env.TOKEN` (or however you have it named on your `.env` file) should do the trick.\\n\\n:::caution\\nIf you\'re using ESM, configure dotenv with `import \'dotenv/config\'` instead of `require(\'dotenv\').config()`.\\n:::\\n\\n### And... that\'s it?\\n\\nYes, that\'s it. Here\'s a little FAQ to get you started. You can also join the [Discord](https://sern-handler.js.org/discord) for any problems.\\n\\n### Extra: Video tutorial!\\n\\n<video width=\\"400\\" controls>\\n  <source src=\\"https://srizan.s-ul.eu/wtJBVsZU\\" type=\\"video/mp4\\" />\\n</video>\\n\\n## FAQ\\n\\n**Q**: How do I publish a slash command?  \\n**A**: Install the publish extension. Little video:  \\n<video width=\\"400\\" controls>\\n  <source src=\\"https://srizan.s-ul.eu/uHzPhfcS\\" type=\\"video/mp4\\" />\\n</video>\\n\\n**Q**: Any snippet VSCode extension?  \\n**A**: Yeah, just search `sern Snippets` made by a verified publisher called Sr Izan (haha yeah me funny!)  \\n\\n**Q**: HEEEELLLPPPP!!!!  \\n**A**: Hey, don\'t panic! We\'re here to help so, join the [Discord](https://sern-handler.js.org/discord). We\'re trying to get to 100 members!"},{"id":"1.2.0","metadata":{"permalink":"/blog/1.2.0","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2022-09-28-mdx-blog-post.md","source":"@site/blog/2022-09-28-mdx-blog-post.md","title":"Release 1.2.0","description":"Class-based modules","date":"2022-09-28T00:00:00.000Z","formattedDate":"September 28, 2022","tags":[{"label":"release","permalink":"/blog/tags/release"}],"readingTime":1.71,"hasTruncateMarker":false,"authors":[{"name":"jacoobes","title":"Head Dev","url":"https://github.com/jacoobes","imageURL":"https://github.com/jacoobes.png","key":"jacoobes"}],"frontMatter":{"slug":"1.2.0","title":"Release 1.2.0","authors":["jacoobes"],"tags":["release"]},"prevItem":{"title":"How to get started with sern!","permalink":"/blog/getting-started"}},"content":"## Class-based modules\\n\\nToday we\'re announcing the ability to create class based modules!\\nTo get started, install\\n```\\nnpm install @sern/handler@latest\\n```\\n\\nQuick List of changes!\\n- [Class based modules](#class-based-modules)\\n- [Deprecation Warnings](#deprecation-warnings)\\n- [Dependencies update](#dependencies-update)\\n\\n\\n### Class based modules\\nIncorporate class based modules into your project instead of the traditional `commandModule` or `eventModule`\\nExtend the new [CommandExecutable](docs/api/classes/CommandExecutable) or [EventExecutable](docs/api/classes/EventExecutable)\\n```ts title=\\"commands/meaning-of-life.ts\\"\\nimport { CommandType, CommandExecutable, type Args, type Context } from \'@sern/handler\';\\nimport { publish } from \'../plugins/publish.js\';\\nimport { serendipityOnly } from \'../plugins/serendipityOnly.js\';\\n\\nexport default class extends CommandExecutable<CommandType.Both> {\\n    type = CommandType.Both as const;\\n    description = \'What is the meaning of life?\'\\n    override onEvent = [\\n        serendipityOnly()\\n    ];\\n    override plugins = [\\n        publish(),\\n    ];\\n    // highlight-next-line\\n    execute = async (ctx: Context, args: Args) => {\\n        await ctx.reply(\'42\')\\n    };\\n}\\n```\\n:::caution\\n\\nexecute must not be a method of the class. It should be as above, a property on the class!\\n\\n:::\\n\\n```ts title=\\"events/guildMemberAdd.ts\\"\\nimport { CommandType, EventExecutable, type EventType } from \'@sern/handler\';\\nimport type { GuildMember } from \'discord.js\'\\n\\nexport default class extends EventExecutable<EventType.Discord> {\\n    type = EventType.Discord as const;\\n    // highlight-next-line\\n    execute = (member: GuildMember) => {\\n        console.log(member)\\n    };\\n}\\n```\\nNow, you might ask **why** this feature was added. <br /> Simply put, to give flexibility to the developers.\\nI believe that you should build your own structures however you might like and customize to your liking.\\nIn addition, **decorators now unofficially work with modules!**\\nFeel free to use TypeScript experimental decorators to augment and customize your classes.  \\n\\n### Deprecation Warnings\\nThe next update will bring sern v2 with some important features. Here are some things to watch out for.\\n\\n- [Wrapper#client](docs/api/interfaces/Wrapper) will be deprecated\\n- [Wrapper#sernEmitter](docs/api/interfaces/Wrapper) will be deprecated\\n  - a SernEmitter will be automatically created once Sern#init is called\\n- The option to pass in a function or array for [Wrapper#events](docs/api/interfaces/Wrapper) will be deprecated. Only strings are accepted.\\n- [Sern#addExternal](docs/api/classes/SernEmitter) will be deprecated in favor of a better way.\\n\\n### Dependencies Update\\n- TypeScript has been updated to 4.8.3\\n- Discord.js has been upgraded to 14.5"}]}')}}]);