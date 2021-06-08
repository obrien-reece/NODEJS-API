const fs = require('fs')
const chalk = require('chalk')

//LoadNotes
const loadNotes = function() {
    try{
        const loadAllNotes = fs.readFileSync('notes.json')
        const cleanNotes = loadAllNotes.toString()
        return JSON.parse(cleanNotes)
    }catch(e){
        return []
    }
}

//Add Notes Command
const addNotes = (title, body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.find((note) => note.title === title)
    if(!duplicateNotes){
    notes.push({
        title:title,
        body:body
    })

    saveNotes(notes)
    console.log(chalk.green.italic.inverse("Success"))
    }else{
        console.log(chalk.red.bold.inverse("Note Title Taken"))    
    }
}

//Remove Notes Command
const removeNotes = (title) => {

    const notes = loadNotes()

    const notesToKeep = notes.filter((note) => note.title !== title)
    
    debugger

    if(notes.length > notesToKeep.length){
        console.log(chalk.inverse.bold.green("Note removed"));
        saveNotes(notesToKeep)
    }else{
        console.log(chalk.inverse.bold.red("No note found with such a title"));
    }
    

}

//Read Notes Command
const readNotes = (title) => {

    const notes = loadNotes()

    const findNote = notes.find((findNote) => findNote.title === title);

    // console.log(chalk.inverse.red('Notes Title'))

    if(findNote){
        console.log(chalk.red.inverse("The Note title is " + chalk.green.bold(findNote.title)))
        console.log(chalk.blue(findNote.body))
    }else{
        console.log(chalk.red.bold.inverse("NO SUCH TITLE FOUND"))
    }

}

//List Notes Command
const listNotes = () => {

const notes = loadNotes()
notes.forEach((note) => {
    console.log(chalk.red.inverse.bold(note.title))
    console.log(chalk.green.bold.inverse(note.body))
});
}

//SaveNotes
const saveNotes = function(notes) {
    const saveNotes = JSON.stringify(notes)
    fs.writeFileSync("notes.json", saveNotes)
}

module.exports = {
    addNotes: addNotes,
    readNotes: readNotes,
    listNotes: listNotes,
    removeNotes: removeNotes
}