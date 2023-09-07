let {readFileSync, writeFileSync} = require('fs')

console.log('start')
let first = readFileSync('./content/first.txt', 'utf-8')
let second = readFileSync('./content/second.txt', 'utf-8')
console.log(first, second)

writeFileSync('./content/text-sync.txt', `this is the content: ${first} ${second}`, {flag: 'a'})
console.log('done with this task')
console.log('starting the next one')
