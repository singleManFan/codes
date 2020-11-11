module.exports = function (source) { 
    var callback = this.async()
    someAsyncOperation(source, function (err, result, sourceMaps, ast) { 
        // 通过 callback 返回异步执行后的结果
        callback(err, result, sourceMaps, ast);
    })
}