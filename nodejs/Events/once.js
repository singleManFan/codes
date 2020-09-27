const { EventEmitter } = require("events")
const proxy = new EventEmitter;

proxy.once('我很帅', function () {
    console.log('once: 我很帅！');
});

proxy.on('我很帅', function () {
    console.log('on: 我很帅！');
});


proxy.emit('我很帅');
proxy.emit('我很帅');
proxy.emit('我很帅');