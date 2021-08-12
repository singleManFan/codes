```js
const STATUS_PENDING = Symbol('pending')
const STATUS_RESOLVE = Symbol('resolved')
const STATUS_REJECTED = Symbol('rejected')

function MyPrmoise(executor) {
    const that = this
    that.data = null
    that.status = STATUS_PENDING

    that.onResolvedCallback = []
    that.onRejectedCallback = []

    function resolve(value) {
        if(that.status != STATUS_PENDING) {
            return 
        }

        that.data = value
        this.status = STATUS_RESOLVE

        for(let cb of that.onResolvedCallback){
            cb(that.data)
        }
    }

    function reject(error) {
        if(that.status != STATUS_PENDING) {
            return 
        }

        this.data = error
        this.status = STATUS_REJECTED
        for(let cb of that.onRejectedCallback){
            cb(that.data)
        }
    }

    try {
        // 将resolve,reject传递给用户执行
        executor(resolve,reject)
    }catch(error) {
        // 用户代码本身问题，抛出异常
        reject(error)
    }
}

MyPromise.prototype.then = function(onfulfilled,onrejected) {
    const that = this

    // 格式化参数
    onfulfilled = typeof onfulfilled ===  'function' ? onfulfilled : v => v
    onrejected = typeof onrejected === 'function' ? onrejected : reason => reason

    // 用户改变了状态
    if(that.status === STATUS_RESOLVE) {
        return new MyPromsie((resolve,reject) => {
            try {
                const val = onfulfilled(that.data)
                if(val instanceof MyPromise) {
                    val.then(resolve,reject)
                }else{
                    resolve(val)
                }
            } catch (e) {
                reject(e)
            }
        })
    }

    if(that.status === STATUS_REJECTED) {
        return new MyPromise((resolve,reject) => {
            try {
                const val = onrejected(that.data)
                if(val instanceof MyPromise) {
                    val.then(resolve,reject)
                }else{
                    resolve(val)
                }
            } catch(e){
                reject(e)
            }
        })
    }

    if(that.status === STATUS_PENDING) {
        return new MyPromise((resolve,reject) => {
            that.onResolvedCallback.push(() => {
                try {
                    const value = onfulfilled(that.data)
                    if(value instanceof MyPromise) {
                        value.then(resolve,reject)
                    }else{
                        resolve(value)
                    }
                } catch (e) {
                    reject(e)
                }
            })

            that.onRjectedCallback.push(function(){
                try {
                    const value = onrejected(that.data)
                    if(value instanceof MyPromise) {
                        value.then(resolve,reject)
                    }else{
                        resolve(value)
                    }
                } catch (e) {
                    reject(e)
                }
            })
        })
    }
}

MyPromise.prototype.catch = (onrejected) {
    return this.then(null,onrejected)
}
```