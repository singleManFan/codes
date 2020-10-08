const { EventEmitter } = require("events")
const util = require("util");

var Promise = function () {
    EventEmitter.call(this)
}

util.inherits(Promise, EventEmitter);

Promise.prototype.then = function (fulfilledHanlder, errorHandler, progressHandler) {
    if (typeof fulfilledHandler === 'function') {
        this.once('success', fulfilledHanlder)
    }

    if (typeof errorHandler === 'function') {
        this.once('error', errorHandler)
    }

    if (typeof progressHandler === 'function') {
        this.once('progress', progressHandler)
    }

    return this;
}

var Deferred = function () {
    this.state = 'unfulfilled';
    this.promise = new Promise();
}

Deferred.prototype.resolve = function (obj) {
    this.state = 'fulfilled';
    this.promise.emit('success', obj);
}

Deferred.prototype.reject = function (err) {
    this.state = 'failed';
    this.promise.emit('error', err)
}

Deferred.prototype.progress = function (data) {
    this.promise.emit('promise', data)
}