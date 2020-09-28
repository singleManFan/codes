const spawn = require('child_process').spawn;

function startDaemon() {
    const daemon = spawn('node', ['daemon.js'], {
        cwd: '.',
        detached: true,  // setsid , 父进程退出后，子进程不会被影响
        stdio: 'ignore',
    });

    console.log('守护进程开启 父进程 pid: %s, 守护进程 pid: %s', process.pid, daemon.pid);
    daemon.unref();
}

startDaemon()