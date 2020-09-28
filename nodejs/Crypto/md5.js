const crypto = require("crypto");
const md5 = (str) => {
  return crypto.createHash("md5").update(str, "utf8").digest("hex");
};

console.log(md5("123456789")); // 默认输出32位字符
