// Web 上最常用的是小端表示法
var littleEndian = (function () {
  var buffer = new ArrayBuffer(2);
  new DataView(buffer).setInt16(0, 256, true); //第三个参数表示通知 DataView 要使用哪种大小端配置来操作
  return new Int16Array(buffer)[0] === 256;
})();
