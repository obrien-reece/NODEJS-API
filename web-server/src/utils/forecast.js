const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=13b5e5c13be19948d516ac2c69dead86&query=' + latitude +',' + longitude + '&units=m'

    request({ url, json: true }, (error,response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, 
                "I'ts " +
                response.body.current.weather_descriptions + 
                '. It is currently ' + 
                response.body.current.temperature + 
                ' degress out')
        }
    })
}

module.exports = forecast