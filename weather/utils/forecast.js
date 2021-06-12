const request = require("request")
const chalk = require('chalk')

const forecast = (latitude,longitude,callback) => {

    const forecastUrl = 'http://api.weatherstack.com/current?access_key=13b5e5c13be19948d516ac2c69dead86&query=' + latitude + ',' + longitude + '&units=f'

    request({ forecastUrl, json:true }, (error,{ body }) => {

        if(error){
            callback("Unable to connect to internet", undefined)
        }else if(body.error){
            callback("Unable to find specified location", undefined)
        }else{
            callback(undefined,"Its " +
                           body.current.weather_descriptions[0] +
                           ". It is currently " + 
                           body.current.temperature + 
                           " degrees. It feels like " + 
                           body.current.feelslike + " degrees")
        }
    })
}

module.exports = forecast