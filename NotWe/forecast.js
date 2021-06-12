const request = require("request")
const chalk = require("chalk")

const forecast = (latitude, longitude, callback) => {
    
    const forecastUrl = 'http://api.weatherstack.com/current?access_key=13b5e5c13be19948d516ac2c69dead86&query=' + latitude + ',' + longitude + '&units=f'

    request({url:forecastUrl, json:true}, (error, response) => {
        if(error){
            callback("Unable to connect to the internet")
        }else if(response.body.error){
            callback("Cannot find the specified location")
        }else{
            callback(undefined, 
                "Its currently " + 
                chalk.green.bold.italic(response.body.current.observation_time) +
                ", the temperature outside is " 
                + chalk.green.bold.italic(response.body.current.temperature) +
                " degrees I can desribe the weather as " + 
                chalk.green.bold.italic(response.body.current.weather_descriptions[0]) +
                ". I am in " + chalk.green.bold.italic(response.body.location.name + 
                " situated in " + 
                response.body.location.country)    
            )
        }
    })
}

module.exports = forecast

