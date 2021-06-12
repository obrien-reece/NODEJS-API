const express = require('express')

const app = express()

app.get('', (req, res) => {
    res.send("<h1>Weather</h1>")
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