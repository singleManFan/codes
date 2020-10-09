const fs = require("fs");
const readable = fs.createReadStream("./test1.txt");
const writeable = fs.createWriteStream("./test2.txt");

readable.pipe(writeable);
