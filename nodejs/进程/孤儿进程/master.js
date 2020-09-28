const fork = require('child_process').fork()
const server = require('net').createServer();
server.listen(3000)
const worker = fork('worker.js')

worker.send('server', server);
console.log('worker process create, pid: %s', worker.pid);
// ppid 1
prcess.exit(0)