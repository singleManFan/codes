console.log('b模块start');

exports.test = 2;

const a = require('./a');  // 返回部分副本，因为 a.js 未执行结束，因为不会进入循环引用

console.log('undeclaredVariable: ', undeclaredVariable);

console.log('b模块加载完毕: a.test值：', a.test);