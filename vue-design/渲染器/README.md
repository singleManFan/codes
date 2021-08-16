渲染器就是将 Virtual DOM 渲染成特定平台下真实 DOM 的工具(render函数)。

渲染器的工作流程分为两个阶段：

- mount：直接将新的 VNode 挂在成全新的 DOM
- patch: 如果旧的 VNode 存在，进行对比，视图以最小的资源开销完成 DOM 的更新。

```js
function render(vnode, container) {
    const prevNode = container.value
    if(prevNode === null) {
        if(vnode){
            // prevNode 为旧的vnode
            mount(vnode,container)
            // 更新旧的vnode
            container.vnode = vnode
        }
    } else {
        // patch
        if(vnode) {
            // 旧的 vnode 存在,打补丁
            patch(prevVNode, vnode, container)
            container.vnode = vnode
        }else{
            // 没有新的vnode，则删除节点
            container.removeChild(prevVNode.el)
            container.vnode = null
        }
    }
}
```

## 渲染器的职责

- 控制部分组件生命周期钩子的调用
- 多端渲染的桥梁
- 与异步渲染有直接关系：组件的挂载不能同步进行
- 包含最核心的 Diff 算法

## mount函数

```js
 function mount(vnode, container) {
  const { flags } = vnode
  if (flags & VNodeFlags.ELEMENT) {
    // 挂载普通标签
    mountElement(vnode, container)
  } else if (flags & VNodeFlags.COMPONENT) {
    // 挂载组件
    mountComponent(vnode, container)
  } else if (flags & VNodeFlags.TEXT) {
    // 挂载纯文本
    mountText(vnode, container)
  } else if (flags & VNodeFlags.FRAGMENT) {
    // 挂载 Fragment
    mountFragment(vnode, container)
  } else if (flags & VNodeFlags.PORTAL) {
    // 挂载 Portal
    mountPortal(vnode, container)
  }
}

function mountElement(vnode, container) {
    // 兼容svg
  const isSVG = vnode.flags & VNodeFlags.ELEMENT_SVG
  const el = isSVG
    ? document.createElementNS('http://www.w3.org/2000/svg', vnode.tag)
    : document.createElement(vnode.tag)
  vnode.el = el
   // 拿到 VNodeData
  const data = vnode.data
  if (data) {
    // 如果 VNodeData 存在，则遍历之
    for(let key in data) {
      // key 可能是 class、style、on 等等
      switch(key) {
        case 'style':
          // 如果 key 的值是 style，说明是内联样式，逐个将样式规则应用到 el
          for(let k in data.style) {
            el.style[k] = data.style[k]
          }
        break
        case 'class':
        el.className = data[key]
        break
        default:
          break
        break
      }
    }
  }
   // 递归挂载子节点
   // 拿到 children 和 childFlags
  const childFlags = vnode.childFlags
  const children = vnode.children
  // 检测如果没有子节点则无需递归挂载
  if (childFlags !== ChildrenFlags.NO_CHILDREN) {
    if (childFlags & ChildrenFlags.SINGLE_VNODE) {
      // 如果是单个子节点则调用 mount 函数挂载
      mount(children, el)
    } else if (childFlags & ChildrenFlags.MULTIPLE_VNODES) {
      // 如果是单多个子节点则遍历并调用 mount 函数挂载
      for (let i = 0; i < children.length; i++) {
        mount(children[i], el)
      }
    }
  container.appendChild(el)
}
```