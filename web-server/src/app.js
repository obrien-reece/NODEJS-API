const express = require('express')

const app = express()

app.get('', (req, res) => {
    res.send("Hello Express!")
})

app.get('/help', (req, res) => {
    res.send("Help Page")
})

app.get('/about', (req, res) => {
    res.send("This is the about page")
})

app.get('/weather', (req, res) => {
    res.send("This is the weather page")
})

app.listen(3000, () => {
    console.log("Server is up on port 3000");
})