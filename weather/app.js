const request = require("request")
const chalk = require('chalk')

/*
for scientific
const url = 'http://api.weatherstack.com/current?access_key=13b5e5c13be19948d516ac2c69dead86&query=37.8267,122.4233&units=s'
for farhenheit
const url = 'http://api.weatherstack.com/current?access_key=13b5e5c13be19948d516ac2c69dead86&query=37.8267,122.4233&units=f'
for metric 
*/

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