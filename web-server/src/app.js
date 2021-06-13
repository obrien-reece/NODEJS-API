const path = require("path")
const express = require('express')
const app = express()

console.log(__dirname);
console.log(path.join(__dirname, "../public"));

//public directory
const publicDirectoryPath = path.join(__dirname, "../public")
//views directory
const viewsPath = path.join(__dirname, "../views")
app.use(express.static(publicDirectoryPath))

//set the directory for the views and setup handlebare engine
app.set('views', viewsPath)
app.set('view engine', 'hbs')

//using the handlebars templating to serve up dynamic pages
app.get('', (req, res) => {
    res.render('index', {
        title: "My name is: ",
        name: `Evance O'Brien`
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: "This is the about page",
        name: "Evance O'Brien"
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        message: 'Am done creating the help message template',
        name: "Distress call from O'Brien Reece"
    })
})

//serving up static pages that do not require changing
app.get('/help', (req, res) => {
    res.send([{
        name: `Evance O'brien`,
        skillset: `Dark Arts`
    },{
        name: `Sandrah Agizah`,
        skillset: `Assasins`
    }])
})

//serving up static pages that do not require changing
app.get('/about', (req, res) => {
    res.send("<h1><strong>This is the about page title</strong></h1>")
})

//serving up static pages that do not require changing
app.get('/weather', (req, res) => {
    res.send([{
        forecast: `It's partly cloudy at the moment`
    },{
        location: `Nairobi Kenya`
    }])
})

app.listen(3000, () => {
    console.log("Server is up on port 3000");
})