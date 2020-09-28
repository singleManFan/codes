const events = require("evnets");
const emitter = new events.EventEmitter();
const test = () => console.log("test");

// 内部循环引用
emitter.on("test", function () {
    test();
    // 死循环
  emitter.emit("test");
});

emitter.emit("test");
