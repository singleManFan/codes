## templete或jsx为什么不直接编译成VNode

我们将可公用、灵活、复杂的逻辑封装成函数，并交给运行时，这能够大大降低编译器的书写难度，甚至经过编译器生成的代码也具有一定的可读性。

## h函数

```js
// 运行时调用h函数集合，动态参数
function h(tag, data = null, children = null) {
    let flags = null
    if(typeof tag === 'string') {
        // 适配 html 和 svg
        flags = tag === 'svg' ? VNodeFlags.ELEMENT_SVG : VNodeFlags.ELEMENT_HTML
    } else if (tag === Fragment) {
        flags = VNodeFlags.FRAGMENT
    } else if (tag === Portal) {
        flags = VNodeFlags.PORTAL
        tag = data && data.target
    } else {
        // 兼容 Vue2 的对象式组件
        if(tag !== null && typeof tag === 'object') {
            flags = tag.functional
            ? VNodeFlags.COMPONENT_FUNCTIONAL       // 函数式组件
            : VNodeFlags.COMPONENT_STATEFUL_NORMAL  // 有状态组件
        } else if (typeof tag === 'function') {
        // Vue3 的类组件
        flags = tag.prototype && tag.prototype.render
            ? VNodeFlags.COMPONENT_STATEFUL_NORMAL  // 有状态组件
            : VNodeFlags.COMPONENT_FUNCTIONAL       // 函数式组件
        }
    }

    // 返回 VNode
    return {
        flags,
        _isVNode: true, // 区分对象是否为VNode
        flags: VNodeFlags.ELEMENT_HTML,
        tag: 'h1',
        data: null,
        children:null,
        childFlags: ChildrenFlags.NO_CHILDREN,
        el: null  // 组件挂在后的真实dom元素
    }
}
```