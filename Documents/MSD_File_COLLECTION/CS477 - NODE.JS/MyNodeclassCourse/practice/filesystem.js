const fs = require('fs');
 console.log(__dirname)
const data = fs.readFile(__dirname + '/test.txt', 'utf8', function (err, text) {
    
        console.log(text)
    
})

// fs.writeFile('test.txt', 'Hello World! 222', function (err) {
//     if (err) throw err;
//     console.log('Done');
// });


fs.readFile('test.txt', 'utf8', function(err, data) {
    if (err) throw err;
    console.log(data);
});