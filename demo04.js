const fs = require('fs');
const stream = require('stream');
const events = require('events');
const s = fs.createReadStream('./big_file.txt')

console.log(s)

console.log(stream.Readable.prototype);

console.log(events.EventEmitter.prototype);