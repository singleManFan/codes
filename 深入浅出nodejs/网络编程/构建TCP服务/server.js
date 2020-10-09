var net = require("net");

var server = net.createServer(function (socket) {
  // socket.setNoDelay(true)
  socket.on("data", function (data) {
    // write 会触发另一端的data事件
    socket.write("你好" + data);
  });

  socket.on("end", function () {
    console.log("连接断开");
  });
});

server.listen("/tmp/echo.sock", function () {
  console.log("server bound");
});
