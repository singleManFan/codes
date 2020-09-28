function tag(strings, ...values) {
  //   console.log(strings);
  //   console.log(values);  values 可作为分隔符
  return strings.reduce(function (s, v, idx) {
    return s + (idx > 0 ? values[idx - 1] : "") + v;
  }, "");
}

var desc = "awesome";
var text = tag`Everything is ${desc}!`;
console.log(text);
