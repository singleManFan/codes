const fs = require('fs')

var after = function (times, callback) {
    var count = 0; results = {};
    return function (key, value) {
        results[key] = value;
        count++;
        if (count === times) {
            callback(results)
        }
    }
}

var done = after(3, console.log)

fs.readFile('./a.txt', 'utf8', function (err, res) {
    done("a", res)
})

fs.readFile('./b.txt', 'utf8', function (err, res) {
    done("b", res)
})

fs.readFile('./c.txt', 'utf8', function (err, res) {
    done("c", res)
})




