const fs = require("fs")
const chalk = require("chalk")

const loadNotes = () => {
    try {
        const loadAllNotes = fs.readFileSync('notes.json')    
        const dataClean = loadAllNotes.toString()
        return JSON.parse(dataClean)
    } catch (error) {
        return []    
    }
    
}

const addNote = (title, body) => {
    const notes = loadNotes()
    
    const duplicateNotes = notes.find((duplicateNotes) => duplicateNotes.title === title)

    if(!duplicateNotes){
    notes.push({
        title: title,
        body: body
    })

    saveNotes(notes)
    console.log(chalk.green.bold.inverse.italic("Note added successfully"));
}else{
    console.log(chalk.green.bold.inverse.italic("A similar note title exists"));
}
    
}

const removeNote = (title) => {
    const notes = loadNotes()

    const notesToKeep = notes.filter((note) => note.title !== title)

    if(notes.length > notesToKeep.length){
        saveNotes(notesToKeep)
        console.log(chalk.green.bold.inverse.italic("Note removed successfully"));
    }else{
        console.log(chalk.green.bold.inverse.italic("No such title exists"));
    }
}

const listNote = (title) => {
    const notes = loadNotes()

    notes.forEach((note) => {
        console.log("Title",note.title);
        console.log("Body", note.body);
    });

}

const readNote = (title) => {
    const notes = loadNotes()

    const readNotes = notes.find((readNotes) => readNotes.title = title)
    
    if(readNotes){
    console.log(readNotes.title);
    console.log(readNotes.body);
    }else{
        console.log(chalk.red.inverse("No such title"));
    }
}

const saveNotes = (notes) => {
    const saveNotes = JSON.stringify(notes)
    fs.writeFileSync("notes.json", saveNotes)
}



module.exports = {
    readNote : readNote,
    addNote: addNote,
    removeNote: removeNote,
    listNote: listNote
}