function cipher(str) {
  try {
    const crypto = require("crypto");
    // const cipher = crypto.createCipher('des-ecb','123456');

    // 兼容其他语言
    const cipher = crypto.createCipheriv("des-ecb", "12345678", "");

    /**
     * update方法
     * 第一个参数代表加密的数据
     * 第二个参数代表传入数据的格式，可以是'utf8','ascii','latin1',
     * 第三个参数代表加密数据的输出格式，可以是'latin1','base64' 或者 'hex'。没有执行则返回Buffer
     */
    let encrypted = cipher.update(str, "utf8", "hex");

    /*
     * final方法，返回任何加密的内容
     * 参数可以是 latin1, 'base64' 或者 'hex'，没有指定返回 Buffer
     */
    encrypted += cipher.final("hex");

    return encrypted;
  } catch (e) {
    console.log("加密失败");

    return e.message || e;
  }
}

function decipher(encrypted) {
  try {
    const crypto = require("crypto");
    // 同种 key 12345678
    const decipher = crypto.createDecipheriv("des-ecb", "12345678", "");
    let decrypted = decipher.update(encrypted, "hex", "utf8");
    decrypted += decipher.final("utf8");
    return decrypted;
  } catch (e) {
    console.log("解密失败");
    return e.message || e;
  }
}

const res = decipher(cipher("hello world !!!"));
console.log(res);
