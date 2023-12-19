# TypeScript简介
**实际上TS做的工作就是 JS + 类型检查 + 代码提示**
## 什么是TypeScript
<img src="/imgs/supermap/intro/typescript/typescript.png" class="float-left pr-5" >
<br>

- TypeScript 是 JavaScript 的一个超集，支持 ECMAScript 6 标准（[ES6教程](https://www.runoob.com/w3cnote/es6-tutorial.html)）。
- TypeScript 由微软开发的自由和开源的编程语言。
- TypeScript 设计目标是开发大型应用，它可以编译成纯 JavaScript，编译出来的 JavaScript 可以运行在任何浏览器上。
<br>
<br>

## 为什么要使用TypeScript
使用TypeScript并不会提高软件性能，因为TypeScript最终会被编译成JavaScript，TypeScript的运行速度完全取决于JavaScript。  
但使用TypeScript可以提高开发效率，TypeScript可以减少bug，提高代码的可读性，可维护性，可维护性。  
这主要归功于TypeScript的类型系统,它允许开发者在开发阶段发现错误，并且其类型标注将由IDE捕获从而带来更多类型提示。
:::tip
面对大型项目，使用TypeScript可以大大减少稀奇古怪的bug，做到事出有因,快速排查。
:::
## TypeScript的缺点
1. 学习成本高,对新手不友好，尤其是对于JS都写不好的新手
2. 类型系统的引入，会导致代码量增加，你需要像开发第三方库一样去思考代码的编写
3. 由于最终会被编译为JavaScript,所以会引入类型检查和编译器，如果你使用的某些库不支持TS，那将是一场类型灾难。

:::danger
- 在某些必要的情况下，可以忽略Typescript对某些文件的类型检查，以免崩溃在build阶段.
- 在某些必要的情况下，可以为某些文件添加.d.ts文件，以提供类型定义。
- 在某些特殊的情况下，不建议使用TypeScript,例如你使用的开发包，大部分都不支持TS。
:::