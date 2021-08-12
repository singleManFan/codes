不同：

- useEffect 是异步执行的，useLayoutEffect是同步执行的
- useEffect 的执行时机是浏览器渲染后执行，而 useLayouEffect 的执行时机是浏览器把内容真正渲染到界面之前，和componentDidMount等价。

ssr:

useLayoutEffect 不支持ssr

使用技巧：

1. 优先使用 useEffect，因为它是异步执行的，不会阻塞渲染。
2. 会影响到渲染的操作尽量放到 useLayoutEffect 中去，避免出现闪烁问题。
3. useLayoutEffect 同步调用会阻塞渲染。
4. 在服务端渲染的时候会有一个 waring，因为它可能导致首屏实际内容和服务端渲染出来的内容不一致。

