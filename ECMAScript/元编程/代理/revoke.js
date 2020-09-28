// 可取消的代理
var obj = { a: 1 },
  handlers = {
    get(target, key, context) {
      console.log("accessing: ", key);
      return target[key];
    },
  },
  { proxy: pobj, revoke: prevoke } = Proxy.revocable(obj, handlers);

pobj.a;

prevoke();

pobj.a; // TypeError
