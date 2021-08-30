## 错误信息

1. 发生了什么错误：逻辑错误、数据错误、网络错误、语法错误等
2. 出现的时间段
3. 影响了多少用户，报错事件数\ip\设备信息
4. 出现错误的页面是哪些
5. 错误的原因,错误堆栈，行列，sourceMap
6. 怎么定位解决问题，收集系统信息

## 架构层次 & 系统设计

> 获取最终错误定位

1. 搜集上报端
    - 处理不同类型错误的搜集工作
        - JS错误
            1. SyntaxError
            2. TypeError
            3. ReferenceError
            4. RangeError
        - 网络错误
            1. ResourceError
            2. HttpError
        - 「Promise错误」
        - 资源错误
    - 搜集错误
        - try/catch
            - 常规运行时错误可以捕获
            - 语法错误不能捕获
            - 异步错误不能捕获 
        - window.onerror
            - 语法错误不能捕获
            - 异步错误可以捕获
            - 常规运行时错误可以捕获 
            - 资源错误不能捕获
        - new Image单独捕获即可
        - window.addEventListener
        - unhandledrejection
        - Vue.config.errorHandler
        - componentDidCatch
    - 跨域问题
        - 后端配置Access-Control-Allow-Origin、前端script加crossorigin。
    - 上报接口
        - 防止阻塞页面渲染，影响用户体验
        - 图片上报不仅不用插入dom，只要在js中new Image就能发起请求，而且还没有阻塞问题，在没有js的浏览器环境中也能通过img标签正常打点。
        - 1x1透明gif，透明图片不影响本身页面效果，像素少。
            - 可跨域
            - 不会携带cookie
            - 不需要服务器返回数据
    - 先缓存错误，动态挂载skd避免阻塞渲染
2. 采集聚合端
    - 日志服务器
        - 错误标识
        - 错误过滤
        - 错误接收
        - 错误存储
3. 可视化析端
4. 监控告警端


