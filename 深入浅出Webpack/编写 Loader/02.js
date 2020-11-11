const loaderUtils = require('laoder-utils')
module.exports = function (sources) { 
    const options = loaderUtils.getOptions(this);
    return sources;
}