const path = require("path")
const express = require('express')
const app = express()


console.log(__dirname);
console.log(path.join(__dirname, "../public"));

const publicDirectoryPath = path.join(__dirname, "../public")
app.use(express.static(publicDirectoryPath))

//set the directory for the views
app.set('views', path.join(__dirname, "../views"))
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
        titleabout: "This is the about page",
        nameabout: "Evance O'Brien"
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