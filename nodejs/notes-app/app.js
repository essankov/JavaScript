const getNotes = require('./notes.js')
const color = require('chalk')
const yargs = require('yargs')

yargs.version('1.1.0')

//create add command
yargs.command(
    {
    command: 'add',
    describe: 'Add a new note',
    handler: function(){
        console.log('Adding a new note!')}
    })

//create remove command
yargs.command(
    {
    command: 'remove',
    describe: 'Remove a note',
    handler: function(){
        console.log('Removing a note!')}
    })

//create list command
yargs.command(
    {
    command: 'list',
    describe: 'List your note',
    handler: function(){
        console.log('Listing out all notes!')}
    })

//create read command
yargs.command(
    {
    command: 'read',
    describe: 'Read a note',
    handler: function(){
        console.log('Reading a note!')}
    })


console.log(yargs.argv)