1. 本地DNS缓存
2. 系统DNS缓存
3. hosts文件
4. 本地域名服务器
5. 根域名服务器
6. 返回ip地址到浏览器
7. tcp三次握手
8. http request
9. http response
10. 解析 html
11. cssdom和dom

## 构建dom模型

1. 转换： 浏览器从磁盘或网络读取 HTML 的原始字节，并根据文件的指定编码 UTF-8 将它们转换成各个字符。
2. 令牌化：字符串转W3C令牌，`<html></html>`
3. 词法分析：发出的令牌转换成定义其属性和规则的对象
4. DOM构建，最终输出文档对象模型

