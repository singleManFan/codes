// 保证职责单一，只关注输入输出
const sass = require('node-sass');
module.exports = function (source) { 
    return sass(source);
    return source
}


