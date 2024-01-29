const path = require('path')

console.log(path.sep)

const fileParh = path.join('/content/', 'subfolder', 'test.txt')
console.log(fileParh)


const base = path.basename(fileParh)
console.log(base)

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)
