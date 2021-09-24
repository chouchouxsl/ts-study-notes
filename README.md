{  
 // ...  
 "compilerOptions": {  
 "incremental": true, // TS 编译器在第一次编译之后会生成一个存储编译信息的文件，第二次编译会在第一次的基础上进行增量编译，可以提高编译的速度  
 "tsBuildInfoFile": "./buildFile", // 增量编译文件的存储位置  
 "diagnostics": true, // 打印诊断信息  
 "target": "ES5", // 目标语言的版本
"module": "CommonJS", // 生成代码的模板标准  
 "outFile": "./app.js", // 将多个相互依赖的文件生成一个文件，可以用在 AMD 模块中，即开启时应设置"module": "AMD",  
 "lib": ["DOM", "ES2015", "ScriptHost", "ES2019.Array"], // TS 需要引用的库，即声明文件，es5 默认引用 dom、es5、scripthost,如需要使用 es 的高级版本特性，通常都需要配置，如 es8 的数组新特性需要引入"ES2019.Array",
"allowJS": true, // 允许编译器编译 JS，JSX 文件  
 "checkJs": true, // 允许在 JS 文件中报错，通常与 allowJS 一起使用  
 "outDir": "./dist", // 指定输出目录  
 "rootDir": "./", // 指定输出文件目录(用于输出)，用于控制输出目录结构  
 "declaration": true, // 生成声明文件，开启后会自动生成声明文件  
 "declarationDir": "./file", // 指定生成声明文件存放目录  
 "emitDeclarationOnly": true, // 只生成声明文件，而不会生成 js 文件  
 "sourceMap": true, // 生成目标文件的 sourceMap 文件
"inlineSourceMap": true, // 生成目标文件的 inline SourceMap，inline SourceMap 会包含在生成的 js 文件中  
 "declarationMap": true, // 为声明文件生成 sourceMap  
 "typeRoots": [], // 声明文件目录，默认时 node_modules/@types  
 "types": [], // 加载的声明文件包  
 "removeComments":true, // 删除注释  
 "noEmit": true, // 不输出文件,即编译后不会生成任何 js 文件  
 "noEmitOnError": true, // 发送错误时不输出任何文件  
 "noEmitHelpers": true, // 不生成 helper 函数，减小体积，需要额外安装，常配合 importHelpers 一起使用  
 "importHelpers": true, // 通过 tslib 引入 helper 函数，文件必须是模块  
 "downlevelIteration": true, // 降级遍历器实现，如果目标源是 es3/5，那么遍历器会有降级的实现  
 "strict": true, // 开启所有严格的类型检查  
 "alwaysStrict": true, // 在代码中注入'use strict'  
 "noImplicitAny": true, // 不允许隐式的 any 类型  
 "strictNullChecks": true, // 不允许把 null、undefined 赋值给其他类型的变量  
 "strictFunctionTypes": true, // 不允许函数参数双向协变  
 "strictPropertyInitialization": true, // 类的实例属性必须初始化  
 "strictBindCallApply": true, // 严格的 bind/call/apply 检查  
 "noImplicitThis": true, // 不允许 this 有隐式的 any 类型  
 "noUnusedLocals": true, // 检查只声明、未使用的局部变量(只提示不报错)  
 "noUnusedParameters": true, // 检查未使用的函数参数(只提示不报错)  
 "noFallthroughCasesInSwitch": true, // 防止 switch 语句贯穿(即如果没有 break 语句后面不会执行)  
 "noImplicitReturns": true, //每个分支都会有返回值  
 "esModuleInterop": true, // 允许 export=导出，由 import from 导入  
 "allowUmdGlobalAccess": true, // 允许在模块中全局变量的方式访问 umd 模块  
 "moduleResolution": "node", // 模块解析策略，ts 默认用 node 的解析策略，即相对的方式导入
"baseUrl": "./", // 解析非相对模块的基地址，默认是当前目录  
 "paths": { // 路径映射，相对于 baseUrl  
 // 如使用 jq 时不想使用默认版本，而需要手动指定版本，可进行如下配置  
 "jquery": ["node_modules/jquery/dist/jquery.min.js"]  
 },  
 "rootDirs": ["src","out"], // 将多个目录放在一个虚拟目录下，用于运行时，即编译后引入文件的位置可能发生变化，这也设置可以虚拟 src 和 out 在同一个目录下，不用再去改变路径也不会报错  
 "listEmittedFiles": true, // 打印输出文件  
 "listFiles": true// 打印编译的文件(包括引用的声明文件)  
 }
}

{
"compilerOptions": {

    /* 基本选项 */
    "target": "es5",                       // 指定 ECMAScript 目标版本: 'ES3' (default), 'ES5', 'ES6'/'ES2015', 'ES2016', 'ES2017', or 'ESNEXT'
    "module": "commonjs",                  // 指定使用模块: 'commonjs', 'amd', 'system', 'umd' or 'es2015'
    "lib": [],                             // 指定要包含在编译中的库文件
    "allowJs": true,                       // 允许编译 javascript 文件
    "checkJs": true,                       // 报告 javascript 文件中的错误
    "jsx": "preserve",                     // 指定 jsx 代码的生成: 'preserve', 'react-native', or 'react'
    "declaration": true,                   // 生成相应的 '.d.ts' 文件
    "sourceMap": true,                     // 生成相应的 '.map' 文件
    "outFile": "./",                       // 将输出文件合并为一个文件
    "outDir": "./",                        // 指定输出目录
    "rootDir": "./",                       // 用来控制输出目录结构 --outDir.
    "removeComments": true,                // 删除编译后的所有的注释
    "noEmit": true,                        // 不生成输出文件
    "importHelpers": true,                 // 从 tslib 导入辅助工具函数
    "isolatedModules": true,               // 将每个文件做为单独的模块 （与 'ts.transpileModule' 类似）.

    /* 严格的类型检查选项 */
    "strict": true,                        // 启用所有严格类型检查选项
    "noImplicitAny": true,                 // 在表达式和声明上有隐含的 any类型时报错
    "strictNullChecks": true,              // 启用严格的 null 检查
    "noImplicitThis": true,                // 当 this 表达式值为 any 类型的时候，生成一个错误
    "alwaysStrict": true,                  // 以严格模式检查每个模块，并在每个文件里加入 'use strict'

    /* 额外的检查 */
    "noUnusedLocals": true,                // 有未使用的变量时，抛出错误
    "noUnusedParameters": true,            // 有未使用的参数时，抛出错误
    "noImplicitReturns": true,             // 并不是所有函数里的代码都有返回值时，抛出错误
    "noFallthroughCasesInSwitch": true,    // 报告 switch 语句的 fallthrough 错误。（即，不允许 switch 的 case 语句贯穿）

    /* 模块解析选项 */
    "moduleResolution": "node",            // 选择模块解析策略： 'node' (Node.js) or 'classic' (TypeScript pre-1.6)
    "baseUrl": "./",                       // 用于解析非相对模块名称的基目录
    "paths": {},                           // 模块名到基于 baseUrl 的路径映射的列表
    "rootDirs": [],                        // 根文件夹列表，其组合内容表示项目运行时的结构内容
    "typeRoots": [],                       // 包含类型声明的文件列表
    "types": [],                           // 需要包含的类型声明文件名列表
    "allowSyntheticDefaultImports": true,  // 允许从没有设置默认导出的模块中默认导入。

    /* Source Map Options */
    "sourceRoot": "./",                    // 指定调试器应该找到 TypeScript 文件而不是源文件的位置
    "mapRoot": "./",                       // 指定调试器应该找到映射文件而不是生成文件的位置
    "inlineSourceMap": true,               // 生成单个 soucemaps 文件，而不是将 sourcemaps 生成不同的文件
    "inlineSources": true,                 // 将代码与 sourcemaps 生成到一个文件中，要求同时设置了 --inlineSourceMap 或 --sourceMap 属性

    /* 其他选项 */
    "experimentalDecorators": true,        // 启用装饰器
    "emitDecoratorMetadata": true          // 为装饰器提供元数据的支持

}
}
