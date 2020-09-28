const crypto = require('crypto')
const [key, iv, algorithm, encoding, cipherEncoding] = [
    "c123456789",
    '',
    'aes-128-ecb',
    'utf8',
    'base64'
]

const handleKey = key => {
    const bytes = Buffer.alloc(16) // 初始化实例，00填充
    console.log(bytes);
    bytes.fill(key, 0, 10);
    console.log(bytes);

    return bytes;
}

let cipher = crypto.createCipheriv(algorithm, handleKey(key), iv);
let crypted = cipher.update('帆', encoding, cipherEncoding);
crypted += cipher.final(cipherEncoding)

console.log(crypted)