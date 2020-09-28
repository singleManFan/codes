var buf = new ArrayBuffer(2);

var view8 = new Uint8Array(buf);
var view16 = new Uint16Array(buf); // 2个字节为一个元素

// 两个视图间相互影响
view16[0] = 3085;
// 0000110100001100
console.log(buf);
console.log(view8[0]);
console.log(view8[1]);
// 小端
console.log(view8[0].toString(16));
console.log(view8[1].toString(16));

var tmp = view8[0];
view8[0] = view8[1];
view8[1] = tmp;

console.log(view16[0]);
