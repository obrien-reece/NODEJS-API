const path = require("path")
const express = require('express')

console.log(__dirname);
console.log(path.join(__dirname, "../public"));

const app = express()

const publicDirectoryPath = path.join(__dirname, "../public")

app.set('view engine', 'hbs')
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index')
})

app.get('/help', (req, res) => {
    res.send([{
        name: `Evance O'brien`,
        skillset: `Dark Arts`
    },{
        name: `Sandrah Agizah`,
        skillset: `Assasins`
    }])
})

app.get('/about', (req, res) => {
    res.send("<h1><strong>This is the about page title</strong></h1>")
})

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