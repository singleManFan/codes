// 创建父子进程间通信的三种方式；

// 子进程的stdio和当前进程的stdio之间建立管道链接 
// const spawn = require('child_process').spawn;
// const child = spawn('ls')

// child.stdout.pipe(process.stdout) // 建立管道链接
// console.log(process.pid, child.pid)

// 父子之间公用 stdio
// const exec = require('child_process').exec;

// exec(`node -v`, (error, stdout, stderr) => {
//     console.log({ error, stdout, stderr })
// })

// const execFile = require('child_process').execFile;

// execFile(`node`, ['-v'], (error, stdout, stderr) => {
//     console.log(error, stdout, stderr)
// })

const fork = require('child_process').fork;
fork('./worker.js') // fork 一个新的子进程

