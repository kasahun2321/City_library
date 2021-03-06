var buf = Buffer.alloc(18); // allocate a Buffer with 8 bytes
console.log(buf);
var buf = Buffer.allocUnsafe(18); //allocated 8 bytes Buffer with random data
console.log(buf);
var buf = Buffer.allocUnsafe(20).fill(); // fill buffer with 0
console.log(buf);
var buf = Buffer.from('Hello Node.js Black Edition'); // create Buffer of 5 bytes and fill it
console.log(buf);
var buf = new Buffer('Hello Node.js Black Edition', 'utf8'); //deprecated
console.log(buf);
// 48 65 6c 6c 6f stored internally in binary but displayed as hex in CLI
console.log(buf[0]); // 108 (Charset)
console.log(buf.toString()); // Hello
console.log(buf.toJSON());
// {type: 'Buffer', data = [72, 101, 108, 108, 111 ] } Unicode characterset
buf.write('wo'); // overwrite data in the buffer without changing its size
console.log(buf.toString()); // wollo
buf.write('abebebesobela');
console.log(buf.toString()); //
let sc=buf.slice(12, 32)
console.log(buf.toString() + sc); //

// You can copy a part of a buffer into another pre-allocated buffer like this:
var buffer = new Buffer('this is the string in my buffer');
console.log(buffer.toString()); //
var targetBuffer = new Buffer(10);
var targetStart = 0,
sourceStart = 10,
sourceEnd = 20;
buffer.copy(targetBuffer,0,12 , sourceEnd);
console.log(buffer.toString());
console.log(targetBuffer.toString());
