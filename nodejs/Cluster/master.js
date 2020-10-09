const fork = require("child_process").fork;
const cpus = require("os").cups();
const server = require("net").createServer().listen(3000);

for (let i = 0; i < cpus.length; ++i) {
  const worker = fork("worker.js");
  worker.send("server", server);
  console.log(
    "worker process created, pid: %s ppid: %s",
    worker.pid,
    process.pid
  );
}
