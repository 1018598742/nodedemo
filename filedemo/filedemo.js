'use strict';

var fs = require('fs');

// fs.readFile('sample.txt','utf-8',function (err,data) {
//     if (err){
//         console.log(err);
//     }else {
//         console.log(data)
//     }
// })

// fs.readFile('123456.png',function (err,data) {
//     if (err){
//         console.log(err);
//     }else {
//         console.log(data);
//         console.log(data.length + ' bytes');
//     }
// })

// var data = 'Hello, Node,js!';
// fs.writeFile('output.txt',data,function (err) {
//     if (err){
//         console.log(err);
//     }else {
//         console.log('ok.')
//     }
// });

// fs.stat('sample.txt',function (err,stat) {
//     if (err){
//         console.log(err);
//     }else {
//         console.log('isFile:'+stat.isFile())
//         console.log('isDirectory:'+stat.isDirectory())
//         if (stat.isFile()){
//             console.log('size:'+stat.size);
//             console.log('birth time:'+stat.birthtime);
//             console.log('modified time:'+stat.mtime)
//         }
//     }
//
// });


//打开一个流；
// var rs = fs.createReadStream('sample.txt', 'utf-8');
//
// rs.on('data', function (chunk) {
//     console.log('DATA:')
//     console.log(chunk)
// })
//
// rs.on('end', function () {
//     console.log('END');
// })
//
// rs.on('error',function (err) {
//     console.log("ERROR:"+err);
// })


// var ws1 = fs.createWriteStream('output1.txt', 'utf-8');
// ws1.write('使用Stream写入文本数据...\n');
// ws1.write('END.');
// ws1.end();
//
// var ws2 = fs.createWriteStream('output2.txt');
// ws2.write(Buffer.from('使用Stream写入二进制数据...\n', 'utf-8'));
// ws2.write(Buffer.from('END.', 'utf-8'));
// ws2.end();


var rs = fs.createReadStream('sample.txt');
var ws = fs.createWriteStream('copied.txt');
rs.pipe(ws);
