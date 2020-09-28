const events = require("events");
const emitter = new events.EventEmitter();

// 捕获错误，避免程序意外退出
emitter.on("error", function (err) {
  console.error(err);
});

emitter.emit("error", new Error("This is a error"));

console.log("test");
