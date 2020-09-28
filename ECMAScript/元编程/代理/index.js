var obj = { a: 1 },
  handlers = {
    // trap
    get(target, key, context) {
      console.log("accessing: ", key);
      return Reflect.get(target, key, context); // 同名转发
    },
  };
pobj = new Proxy(obj, handlers);

pobj.a;
