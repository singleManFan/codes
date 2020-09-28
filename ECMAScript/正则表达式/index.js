console.log(/∮/.test("∮-clef"));
// 匹配只有一个字符 ,标准 BMP 模式，会匹配2个字符
console.log(/^.-clef/.test("∮-clef"));
console.log(/^.-clef/u.test("∮-clef"));

// es6 before
var snowman = "\u2603";
console.log(snowman);

// 码点转义
var gclef = "\u{1D11E}";
console.log(gclef);
