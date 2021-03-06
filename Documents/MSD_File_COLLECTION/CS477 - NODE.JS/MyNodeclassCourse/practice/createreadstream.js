
const fs = require('fs');
const readable = fs.createReadStream('test.txt', { highWaterMark: 1024 });
const writable = fs.createWriteStream('test.txt')
readable.on('data', function (chunk) {
    writable.write(chunk)
    console.log(chunk)
})