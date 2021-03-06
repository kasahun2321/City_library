function sayhi() {
console.log('hi')
} function sayhello() {
    console.log('hello')
} function sayholla() {
    console.log('holaa')
}

setImmediate(sayhello)//check queue
setTimeout(sayhi, 1);//on  timer quee
process.nextTick(sayholla)//  out of lib uv 
console.log(__dirname)// showes the current folder

console.log('done')