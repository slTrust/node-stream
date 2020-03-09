const fs = require("fs");
const zlib = require("zlib");
const file = process.argv[2]; // 文件路径

fs.createReadStream(file) // 创建流 一点一点的读
    .pipe(zlib.createGzip()) // 每次读就传给 gzip 压缩
    .pipe(fs.createWriteStream(file + ".gz")); // 将压缩后的 gzip流 传给一个可写的流