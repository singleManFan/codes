const events = require("events");
const emitter = new events.EventEmitter();
const fs = require("fs");
const status = {};

const select = function (file, filename, cb) {
  emitter.once(file, cb);

  if (status[file] === undefined) {
    status[file] = "ready";
  }

  if (status[file] === "ready") {
    status[file] = "pending";
    fs.readFile(file, function (err, result) {
      emitter.emit(file, err, result.toString());
      status[file] = "ready";

      setTimeout(function () {
        delete status[file]; // 清除内存占用
      }, 1000);
    });
  }
};
for (let i = 1; i <= 11; i++) {
  if (i % 2 === 0) {
    select(`./tmp/a.txt`, "a 文件", function (err, result) {
      console.log("err: ", err, "result: ", result);
    });
  } else {
    select(`./tmp/b.txt`, "b 文件", function (err, result) {
      console.log("err: ", err, "result: ", result);
    });
  }
}
