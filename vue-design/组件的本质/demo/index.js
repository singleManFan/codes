import { h, init } from 'snabbdom'

const patch = init([])

// h 函数用来创建 VNode，组件的产出是 VNode
const MyComponent = props => {
    return h('h1', props.title)
}

const vnode = MyComponent({ title: 'hello world' })

console.log(vnode)

// 渲染成真实 dom
patch(document.getElementById('app'), vnode)