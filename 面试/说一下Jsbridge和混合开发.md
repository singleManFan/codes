## jsbridge 和 Hybrid app

jsbridge 是随着 Hybrid App 的流行而产生的一种技术，Hybrid app 又称混合App，即同时使用了前端web技术和原生native技术进行开发的移动应用。jsbridge 是实现两端通信的机制。

## Native -> web

```js
function nativeCallback(data) {
    // todo
}
```
native直接执行js函数传递数据给web

## js -> Native

- 自定义协议，native 拦截 iframe src 请求，通过 query 参数调用 native 函数。
- 注入全局变量对象，这个对象拥有调用 native 的能力。

## 双向通信

实现 jssdk，维护js回调函数的映射,sdk 包含 web 端和原生端的映射关系。
