const chalk = require('chalk')
const request = require("request")
const yargs = require('yargs')


const geocode = (callback) => {
    const geocodeUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/Nairobi.json?access_token=pk.eyJ1IjoidGhhdGJveXJlZWNlIiwiYSI6ImNrcG9oYmloYjAyd3AydnFxNjBxaTJoNDgifQ.yfAdMhYBtriEhHIeak5j4A&limit=1"

    request({url:geocodeUrl, json:true}, (error,response, var1) => {

        if(error){
            callback("Unable to connect to the internet", undefined)
        }else if(response.body.features.length === 0){
            callback("Unable to find location", undefined)
        }else{
            callback(undefined, {
            longitude: response.body.features[0].center[0], 
            })
        }
    })

}
geocode((error, var1) => {
    if(error){
        return console.log(error);
    }
    console.log(var1);
})