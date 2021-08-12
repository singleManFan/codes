## Vue3的七大亮点

1. 性能比2.想快到1.2~2倍

### diff算法的优化

在vue2中，虚拟dom是全量比较的，在vue3中，增加了静态标记PatchFlag。在创建vnode的时候，会根据vnode的内容是否可以变化，为其添加静态标记PatchFlag。diff的时候，只会比较PatchFlag的变化。根据静态标记的类型来确定对比部分。

### rebder阶段的静态提升

在vue2中，一旦检测到数据变化，就会re-render组件，所有vnode都会重新创建一遍，形成新的vdom树。

在vue3中，对于不参与更新的vnode，会做静态提升，只会被创建一次，在re-render时直接复用。

### 事件侦听缓存

在vue2中，我们写`@click="onClick"`也是被当做动态属性，diff的时候也要对比。

但我们知道它是不会变的，所以在创建vnode节点，这部分不会被静态标记。

### 减少创建组件实例的开销

在vue2.x每创建一个组件实例，都是通过defineProperty中定义。这部分操作还是挺费时的，在vue3.0中基于Proxy，减少了创建组件实例的性能开销。

## Composition API

以功能为单位的代码组织方式，同时它可以让代码更易重用。

## 更好的TS支持

vue2不适合使用ts,原因在于vue2的Option API风格，options是个简单对象，而ts是一种类型系统，面向对象的语法，两者有点不匹配。

在vue3中，量身打造了defineComponent函数，使组件在ts下，更好的利用参数类型推断。

## vite

`npm run dev`无需编译，import发起文件请求，实时请求实时编译，代理服务器针对单个文件进行编译并返回。

## Fragment 和 Suspense

teleport 指定插槽的渲染位置

