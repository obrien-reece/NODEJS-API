const { describe } = require("yargs");
const yargs = require("yargs")
const notes = require("./notes")

yargs.command({
    command: "add",
    builder:{
        title:{
            type: "string",
            demandOption: true            
        },
        body:{
            type: "string",
            demandOption: true            
        }        
    },
    handler:(argv) => {
        notes.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: "remove",
    builder:{
        title:{
            type: "string",
            demandOption: true            
        },
        body:{
            type: "string",                   
        }        
    },
    handler:(argv) => {
        notes.removeNote(argv.title, argv.body)
    }
})

yargs.command({
    command: "list",
    builder:{
        title:{
            type: "string",
            // demandOption: true            
        },
        body:{
            type: "string",
            // demandOption: true            
        }        
    },
    handler:(argv) => {
        notes.listNote(argv.title, argv.body)
    }
})

yargs.command({
    command: "read",
    builder:{
        title:{
            type: "string",
            demandOption: true            
        },
        body:{
            type: "string",
            // demandOption: true            
        }        
    },
    handler:(argv) => {
        notes.readNote(argv.title, argv.body)
    }
})
yargs.parse()