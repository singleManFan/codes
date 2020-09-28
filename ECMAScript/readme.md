### 值与类型

- 字符串
- 数字
- 布尔型
- null 和 undefined
- 对象
- 符号

Unicode 字符范围从 0x0000 到 0xFFFF,这组字符称为 BMP，在 BMP 集合之外还有很多其他扩展 Unicode 字符，范围直到 0x10FFFF，这些符号通常是 astral symbol。

### 异步流程控制

Promise 不是对回调的替代，Promise 在回调代码和将要执行这个任务的异步代码之间提供了一种可靠的中间机制来管理回调。

### 大小端

将 buf 映射为数组是按照运行 JS 的平台的大小端设置的。

大小端的意思是多字节数字中的低字节(前面 16 位中的 8 位)位于这个数字字节表示中的右侧还是左侧。

### TypedArray

二进制数组由三类对象组成。

(1) ArrayBuffer 对象：代表内存之中有一段二进制数据，可以通过“视图”进行操作。“视图”部署了数组接口，这意味着，可以用数组的方法操作内存。

(2) TypedArray 视图: 共包含 9 中类型的视图。Uint8Array\Int16Array\Float32Array 等等

(3) DataView 视图：可以自定义复合格式的视图，比如第一个字节是 Unit8,第二个字节是 Unit16，此外还可以自定义字节序。

总结： ArrayBuffer 表示原始二进制数据，TypedArray 用来读写简单类型的二进制数据，DataView 用来读写复杂类型的二进制数据。
