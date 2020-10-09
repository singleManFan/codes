const http = require("http");
const server = http.createServer((req, res) => {
  res.end("I am worker, pid: " + process.pid + ", ppid: " + process.ppid);
});

let worker;
// 第二个参数 sendHandle 就是句柄，可以是 TCP套接字、TCP服务器、UDP套接字等
process.on("message", function (message, sendHandle) {
  if (message === "server") {
    worker = sendHandle;
    worker.on("connection", function (socket) {
      // socket 是 server 实例
      server.emit("connection", socket);
    });
  }
});
