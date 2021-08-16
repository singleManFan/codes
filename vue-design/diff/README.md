## 什么是核心的 Diff 算法？

- 旧的children为多个子节点
    - 新的children是单个子节点
        - 将旧的多个子节点移除，将新的单个子节点添加
    - 新的children没有子节点
        - 将旧的多个子节点宜春
    - 新的children有多个子节点
        - 核心的diff，同层级比较

## 基本算法

移除所有旧的子节点，添加所有新的子节点。

```js
function patchChildren(
  prevChildFlags,
  nextChildFlags,
  prevChildren,
  nextChildren,
  container
) {
  switch (prevChildFlags) {
    // 省略...

    // 旧的 children 中有多个子节点
    default:
      switch (nextChildFlags) {
        case ChildrenFlags.SINGLE_VNODE:
          // 省略...
        case ChildrenFlags.NO_CHILDREN:
          // 省略...
        default:
            //  通过遍历旧的 children，将新旧 children 中相同位置的节点拿出作为一对新旧vnode，并调用patch函数更新之。
           // 获取公共长度，取新旧 children 长度较小的那一个
          const prevLen = prevChildren.length
          const nextLen = nextChildren.length
          const commonLength = prevLen > nextLen ? nextLen : prevLen
          for (let i = 0; i < commonLength; i++) {
            patch(prevChildren[i], nextChildren[i], container)
          }
          // 如果 nextLen > prevLen，将多出来的元素添加
          if (nextLen > prevLen) {
            for (let i = commonLength; i < nextLen; i++) {
              mount(nextChildren[i], container)
            }
          } else if (prevLen > nextLen) {
            // 如果 prevLen > nextLen，将多出来的元素移除
            for (let i = commonLength; i < prevLen; i++) {
              container.removeChild(prevChildren[i].el)
            }
          }
          break
      }
      break
  }
}
```

## inferno

前缀节点和后缀节点