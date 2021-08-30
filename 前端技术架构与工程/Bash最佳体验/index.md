前端工程化离不开bash的使用,但bash不熟练很容易导致系统的严重性错误，尝试用node代替bash。

## node执行bash脚本，初级方案: child_process API

```js
const {exec} = require('child_process')

// 异步执行
exec("ls -la",(error,stdout,stderr) => {
    if(error) {
        console.log(`error: ${error.message}`)
        return
    }
    if(stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
})
```

## shelljs

```js
const shell = require('shelljs');

shell.rm('-rf', 'out/Release');
shell.cp('-R', 'stuff/', 'out/Release');
```