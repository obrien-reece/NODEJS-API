const request = require("request")

const geocode = (address, callback) => {
    const geocodeUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/" +encodeURIComponent(address)+ ".json?access_token=pk.eyJ1IjoidGhhdGJveXJlZWNlIiwiYSI6ImNrcG9oYmloYjAyd3AydnFxNjBxaTJoNDgifQ.yfAdMhYBtriEhHIeak5j4A&limit=1"

    request({url:geocodeUrl, json:true}, (error,response) => {

        if(error){
            callback("Unable to connect to the internet", undefined)
        }else if(response.body.features.length === 0){
            callback("Unable to find location". undefined)
        }else{
            callback(undefined, {
            longitude: response.body.features[0].center[0], 
            latitude: response.body.features[0].center[1],
            location: response.body.features[0].place_name  
            })
        }
    })

}

module.exports = geocode