const path = require("path")
const express = require('express')
const app = express()
const hbs = require("hbs")
const forecast = require("./utils/forecast")
const geocode = require("./utils/geocode")


console.log(__dirname);
console.log(path.join(__dirname, "../public"));

//paths to directoties
const publicDirectoryPath = path.join(__dirname, "../public")
const viewsPath = path.join(__dirname, "../templates/views")
const partialsPath = path.join(__dirname, "../templates/partials")

app.use(express.static(publicDirectoryPath))

//set the directory for the views and setup handlebare engine
app.set('views', viewsPath)
app.set('view engine', 'hbs')
hbs.registerPartials(partialsPath)

//using the handlebars templating to serve up dynamic pages
app.get('', (req, res) => {
    res.render('index', {
        title: "This is the Index Page",
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
        title: 'This is the Help page',
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
    if (!req.query.address) {
        return res.send({
            error: 'You must provide an address!'
        })
    }

    geocode(req.query.address, (error,geocodedata) => {
        if (error) {
            return res.send({ error })
        }
        // res.send({
        //     geocodedata,
        //     address: req.query.address
        // })

        forecast(geocodedata.latitude, geocodedata.longitude, (error, forecastData) => {
            if (error) {
                return res.send({ error })
            }

            res.send({
                forecast: forecastData,
                geo: geocodedata.location
                // address: req.query.address
            })
        })
    })
})


app.get('/help/*', (req,res) => {
    // res.send("Help article not found")
    res.render("404", {
        title: "Unknown help page Url",
        error: "Help article not found",
        name: "Help page unknown footer"
    })
})

app.get('*', (req, res) => {
    // res.send("My 404 Page")
    res.render('404', {
        title: "Unknown Url",
        error: "Page not found",
        name: "Unknown url page found"
    })
})

app.listen(3000, () => {
    console.log("Server is up on port 3000");
})