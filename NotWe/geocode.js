const request = require("request")

const geocode = (address, callback) => {
    const geocodeUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?access_token=pk.eyJ1IjoidGhhdGJveXJlZWNlIiwiYSI6ImNrcG9oYmloYjAyd3AydnFxNjBxaTJoNDgifQ.yfAdMhYBtriEhHIeak5j4A&limit=1"

    request({url:geocodeUrl, json:true}, (error, response) => {
        if(error){
            callback("Unable to access the internet")
        }else if(response.body.features === 0){
            callback("Unable to find the specified location")
        }else{
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode