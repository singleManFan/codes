## 用VNode描述真实DOM

```js
// 标签元素
const elementVNode = {
    tag:'div',
    data:{
        style: {
            width: '100px',
            height: '100px',
            backgroundColor: 'red'
        }
    },
    children: [
        {
            tag: 'span',
            data: null
        }
    ]
}

// 文本节点
const textNode = {
    tag: null,
    data: null,
    children: '文本内容',  // 尽可能在保证语义能够说得通的情况下复用属性，会使 VNode 对象更加轻量
}


// 文本节点作为子节点的 div 标签的 VNode 对象
const elementVNode = {
    tag:'div',
    data: null,
    children: {
        tag: null,
        data: null,
        children: '文本内容'
    }
}
```

## 用 VNode 描述抽象内容

> 组件就是抽象内容

```js
<div>
    <MyComponent /> 
</div>

// VNode 描述上面的模板
const elementVNode = {
    tag: 'div',
    data: null,
    children: {
        tag: MyComponent,  // 子节点是组件
        data: null
    }
}

// Fragment
const Fragment = Symbol()
const fragmentVNode = {
    // tag 属性是一个唯一标识
    tag: Fragment,
    data: null,
    // 多个根节点
    children: [
        {
      tag: 'td',
      data: null
        },
        {
        tag: 'td',
        data: null
        },
        {
        tag: 'td',
        data: null
        }
    ]
}
```

## VNode 的种类

- html/svg 标签
- 组件
    - 有状态组件
        - 普通的有状态组件
        - 需要被keepAlive的有状态组件
        - 已经被KeepAlive的有状态组件
    - 函数式组件
- 纯文本
- Fragment
- Portal

## VNodeData

VNodeData 它就是 Vnode 数据，用于对 VNode 的描述。

