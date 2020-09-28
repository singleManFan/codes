// 扩展原生类
class MyCoolArray extends Array {
  first() {
    return this[0];
  }
  last() {
    return this[this.length - 1];
  }
}

var a = new MyCoolArray(1, 2, 3);

// console.log(a.first());
// console.log(a.last());
// console.log(a);

class Oops extends Error {
  constructor(reason) {
    super();
    this.oops = reason;
  }
}

var ouch = new Oops("I messed up!");
throw ouch;
