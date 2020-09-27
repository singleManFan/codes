require('./test-module.js')
// 模块加载进来后，将会写入缓存

console.log(require.cache)