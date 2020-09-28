// 类型数组是为了结构化访问二进制数据
var buf = new ArrayBuffer(32); // 32字节长度0填充
console.log(buf.byteLength);

// buf 本身不具有交互性

var arr = new Uint16Array(buf); //  创建视图,将256位 buf 映射为 16个无符号整型元素
arr.length;
