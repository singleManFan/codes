const events = require("events");
const emitter = new events.EventEmitter();

// setImmediate()和process.nextTick()切换异步模式
emitter.on("test", function () {
  setImmediate(() => {
    console.log(111);
  });
});
emitter.emit("test");
console.log(222);
