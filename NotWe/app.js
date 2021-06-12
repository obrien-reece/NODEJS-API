const geocode = require("./geocode")
const forecast = require("./forecast")
const fs = require("fs");
const yargs = require("yargs");

const address = process.argv[2]

if(!address){
    return console.log("Please type a location");
}

geocode(address, (error, data) => {
    if(error){
        return console.log(error);
    }

    console.log(data);
    // const geoData = JSON.stringify(data)
    // fs.writeFileSync("geodata.json", geoData)

    forecast(data.latitude, data.longitude, (error, forecastData) => {
        if(error){
            return console.log(error);
        }

        console.log(forecastData);
        // const foreData = JSON.stringify(forecastData)
        // fs.writeFileSync("weatherdata.json", foreData)
    })
})