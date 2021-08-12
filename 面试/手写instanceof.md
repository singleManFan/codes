instanceof是通过原型链来进行判断的，所以只要不断地通过访问`__proto__`，就可以拿到实例的原型，直到null

```js
function myInstanceof(left,right) {
    // 构造函数的原型
    const proto = right.prototype
    // 实例的原型
    left = left.__proto__

    while(left){
        if(left === proto) {
            return true
        }

        left = left.__proto__
    }

    return false
}
```