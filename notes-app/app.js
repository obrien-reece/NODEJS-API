const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

//Add Notes
yargs.command({
    command: "Add",
    describe: "Add Note",
    builder: {
        title: {
            describe: "Note Title",
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: "Note Body",
            demandOption: true,
            type: 'string'
        }        
    },
    handler: function(argv) {
        notes.addNotes(argv.title, argv.body)
    }
})


//Remove Notes
yargs.command({
    command: "Remove",
    describe: "Remove Note",
    builder: {
        title: {
            describe: "Note Title",
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: "Note Body",
            // demandOption: true,
            type: 'string'
        }        
    },
    handler: function(argv) {
        notes.removeNotes(argv.title)
    }
})


//List Notes
yargs.command({
    command: "List",
    describe: "List Notes",
    builder: {
        title: {
            describe: "Note Title",
            // demandOption: true,
            type: 'string'
        },
        body: {
            describe: "Note Body",
            // demandOption: true,
            type: 'string'
        }        
    },
    handler: function(argv) {
        notes.listNotes(argv.title)
    }
})


//Read Notes
yargs.command({
    command: "Read",
    describe: "Read Note",
    builder: {
        title: {
            describe: "Note Title",
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: "Note Body",
            // demandOption: true,
            type: 'string'
        }        
    },
    handler: function(argv) {
        notes.readNotes(argv.title)
    }
})


yargs.parse()