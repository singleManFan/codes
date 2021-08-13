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
    children: '文本内容',
}


```