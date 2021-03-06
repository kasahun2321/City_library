const fs = require('fs');
const path = require('path');
const readable = fs.createReadStream(path.join(__dirname, '/test.txt'))
readable.on('data', function (chunk)
{
    console.log(chunk.length)
    // the maximu the chunk have is 65k of byte if it is morethan it print on next line
})