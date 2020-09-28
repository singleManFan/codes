const b1 = Buffer.from('10')
const b2 = Buffer.from('10', 'utf8')
const b3 = Buffer.from([10])
const b4 = Buffer.from(b3)

console.log(b1, b2, b3, b4)

const buf = Buffer.from('hello world', 'ascii');
console.log(buf.toString('hex'));