const http = require('http')
const [url, port] = ['127.0.0.1', 3000]

const computation = () => {
    let sum = 0;
    console.info('计算开始');
    console.time('计算耗时');

    for (let i = 0; i < 1e10; ++i) {
        sum += i
    }

    console.info('计算结束')
    console.timeEnd('计算耗时');
    return sum;
}

const server = http.createServer((req, res) => {
    if (req.url == '/compute') {
        const sum = computation();

        res.end(`Sum is ${sum}`);
    }

    res.end('ok')
})

// 每次请求等待时间 计算耗时: 12374.650ms

server.listen(port, url, () => {
    console.log(`server started at http://${url}:${port}`)
})