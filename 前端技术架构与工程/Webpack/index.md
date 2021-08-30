## webpack构建流程
- 初始化流程
- 编译构建流程
- 输出流程

## 运行流程

webpack 的运行流程是一个串行的过程，它的工作流程就是将各个插件串联起来，在运行过程中会广播事件，插件只需要监听它所关心的事件，就能加入到这条webpakc机制中，去改变webpack的运作，使得整个系统扩展性良好。

从启动到结束会依次执行以下三大步骤：

- 初始化流程: 从配置文件和 Shell 语句中读取与合并参数，并初始化需要使用的插件和配置插件等执行环境所需要的参数
- 编译构建阶段：从Entry发出，针对每个 Module 串行调用对应的 Loader 去翻译文件内容，再找到该 Module 依赖的 Module，递归地进行编译处理。
- 输出流程：对编译后的 Module 组合成 Chunk，把 Chunk 转换成文件，输出到文件系统。

```js
// 初始化compiler，不执行具体任务，只是进行一些调度工作
class Compiler extends Tapble {
    constructor(context) {
        super();
        this.hooks = {
            beforeCompile: new AsyncSeriesHook(["params"]),
            compile: new SyncHook(["params"]),
            afterCompile: new AsyncSeriesHook(["compilation"]),
            make: new AsyncParallelHook(["compilation"]),
            entryOption: new SyncBailHook(["context", "entry"])
            // 定义了很多不同类型的钩子
        }
    }
}

function webpack(options) {
  var compiler = new Compiler();
  ...// 检查options,若watch字段为true,则开启watch线程
  return compiler;
}
```

## 构建编译流程

```js
// 根据配置中的 entry 找出所有入口文件
module.exports = {
  entry: './src/file.js'
}
```
- compile 开始编译
- make 从入口点分析模块及其依赖的模块，创建这些模块对象
- build-module 构建模块
- seal 封装构建结果
- emit 把各个chunk输出到结果文件

### compile 编译

执行了run方法后，首先会触发compile，主要构建一个compilation对象，改对象是编译阶段的主要执行者，主要会依次下述流程：执行模块创建、依赖收集、分块、打包等主要任务的对象

## emit 钩子

```js
output: {
    path: path.resolve(__dirname, 'build'),
        filename: '[name].js'
}
```

在 Compiler 开始生成文件前，钩子 emit 会被执行，这是我们修改最终文件的最后一个机会，从而webpack整个打包过程结束。




