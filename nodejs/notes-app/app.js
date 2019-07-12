const getNotes = require('./notes.js')
const color = require('chalk')

const msg = getNotes()
console.log(msg)


console.log(color.green("Success!"))