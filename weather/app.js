const request = require("request")
const chalk = require('chalk')


// for scientific
// const url = 'http://api.weatherstack.com/current?access_key=13b5e5c13be19948d516ac2c69dead86&query=37.8267,122.4233&units=s'
// for farhenheit
const url = 'http://api.weatherstack.com/current?access_key=13b5e5c13be19948d516ac2c69dead86&query=37.8267,122.4233&units=f'
for metric 


const url = 'http://api.weatherstack.com/current?access_key=13b5e5c13be19948d516ac2c69dead86&query=37.8267,122.4233'

request({ url:url, json:true }, (error, response) => {
    // const data = JSON.parse(response.body)
    // console.log(response.body.current);
    console.log(chalk.green("Its ") +
               chalk.red(response.body.current.weather_descriptions[0]) +
               chalk.green(". It is currently " + 
               chalk.red(response.body.current.temperature) + 
               " degrees. It feels like " + 
               chalk.red(response.body.current.feelslike) + " degrees"));
})

// const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoidGhhdGJveXJlZWNlIiwiYSI6ImNrcG9oYmloYjAyd3AydnFxNjBxaTJoNDgifQ.yfAdMhYBtriEhHIeak5j4A&limit=1"

// request({ url:url, json:true }, (error, response) => {
//     const longitude = response.body.features[0].center[0]
//     console.log(longitude);
//     const latitude = response.body.features[0].center[1]
//     console.log(latitude);    
//     // console.log(latitude, longitude);
// })