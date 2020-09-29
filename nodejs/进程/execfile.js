const spawn = require('child_process').spawn;
const child = spawn('echo', ['简单的命令行交互'])
child.stdout.pipe(process.stdout)