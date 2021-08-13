> 组件的本质是virtual DOM

Virtual DOM 渲染成真实DOM的过程，叫做 patch,为何组件要直接产出 html 变成产出 Virtual DOM 呢？其原因是 Virtual DOM 带来了分层设计，它对渲染过程的抽象，使得框架可以渲染到 Web 以外的平台，以及能够实现 SSR 等。

## Virtual DOM 的表示

```js
// vdom
const elementVnode = {
    tag: 'div'
}

// component
class MyComponent {
    render () {
        return {
            tag: 'div'
        }
    }
}

const componentVnode = {
    tag: MyComponent
}

// 渲染器 => patch
function render(vnode,container) {
    if(typeof vnode.tag === 'string') {
        mountElement(vnode,container)
    }else{
        // 适配组件
        mountComponent(vnode,container)
    }
}

function mountElement(vnode,container) {
    // 创建元素
    const el = document.createElement(vnode.tag)
    // 添加到容器
    container.appendChild(el)
}

function mountComponet(vnode,container) {
    // 创建组件实例
    const instance = new vnode.tag()
    // 获取组件的虚拟dom
    instance.$vnode = instance.render()
    // 挂载
    mountElement(instance.$vnode,container)
}
```

## 组件的种类

- 函数式组件
    - 是一个纯函数
    - 没有自身状态，只接收外部数据
    - 产出 VNode 的方式：单纯的函数调用
- 类组件
    - 可以被实例化
    - 有自身状态
    - 产出 VNode 的方式：需要实例化，然后调用 render 函数
