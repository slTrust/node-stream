const fs = require('fs')
const stream = fs.createWriteStream('./big_file.txt')
for (let i = 0; i < 1000000; i++) {
    stream.write(`这是第${i}行内容，我们需要很多内容，要不停的写文件啊啊啊啊啊啊啊回车\n`)
}
stream.end() // 别忘了关闭 stream
console.log('done')