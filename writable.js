const { Writable } = require("stream");

const outStream = new Writable({
    write(chunk, encoding, callback) {
        console.log(chunk.toString());
        callback();
    }
});

// process.stdin 就是标准输入
process.stdin.pipe(outStream);

// process.stdin.on('data', (chunk)=>{
//   outStream.write(chunk)
// })