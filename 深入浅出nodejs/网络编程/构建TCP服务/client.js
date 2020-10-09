var net = require("net");
var client = net.connect({ port: 8124 }, function () {
  console.log("client connected");
  client.write("帆");
});

client.on("data", function (data) {
  console.log(data.toString());
  client.end();
});

client.on("end", function () {
  console.log("client disconnected");
});
