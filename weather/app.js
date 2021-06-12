const chalk = require('chalk')
const request = require("request")
const yargs = require('yargs')
const forecast = require("./utils/forecast")
const geocode = require("./utils/geocode")



//USING THE YARGS COMMAND TO GET THE LOCATION FROM THE USER INSTEAD OF THE PROCESS.ARGV
// yargs.command({
//     command: "add",
//     describe: "add Location",
//     builder: {
//         title:{
//             demandOption: true,
//             type: "string",
//         }
//     },
//     handler: function(argv) {
//         console.log("Test", argv);

//         // const locations = argv.title
//         // console.log(locations);
//     }
// })

// const locations = yargs.argv.title
// console.log(locations);
// console.log(process.argv);


// yargs.parse()




const address = process.argv[2]

if(!address){
    console.log("Please insert a location");
}else{
geocode(address, (error, {longitude, latitude, location} ={}) => {
    if(error){
       return console.log(error);
    }

    forecast(latitude,longitude, (error, forecastData) => {
        if(error){
           return console.log(error);
        }
        console.log(location);
        console.log(forecastData);
    })
})
}
// gets  ordered food when
// food is ready
// const getFood = function() {
//     console.log('3. thank you, I have reaceived my food!');
    //    console.log("Vi Editor was used");
//   }
  

//   // receives a function that will be called 
//   // when 1 second ellapses
//   // prepares  the ordered food
//   const prepareFood = function (food, callback) {
    
//     // built-in javascript funtion
//     // delays exution of console.log expression 
//     // for one second
//     setTimeout(function() {
      
//       console.log('2. dear customer your '+ food + ' is ready!');
      
//       // this  is a callback function
//       // will be called at the right time when
//       // our food is ready
//       callback();
      
//     }, 1000);
    
//   }
  
//   // receives needed food
//   // orders specified food
//   const orderFood = function (food) {
    
//     console.log('1. I need ' + food);
    
//     prepareFood(food, getFood);
    
//   }
  
//   orderFood('1 Burger and 1 piece Chicken'); // lets order our food here
// for scientific
// const url = 'http://api.weatherstack.com/current?access_key=13b5e5c13be19948d516ac2c69dead86&query=37.8267,122.4233&units=s'
// for farhenheit
// const url = 'http://api.weatherstack.com/current?access_key=13b5e5c13be19948d516ac2c69dead86&query=37.8267,122.4233&units=f'
// for metric 
// const url = 'http://api.weatherstack.com/current?access_key=13b5e5c13be19948d516ac2c69dead86&query=37.8267,122.4233'

// const coordinatesUrl = (coordinates, callback) => {
//     const url = 'http://api.weatherstack.com/current?access_key=13b5e5c13be19948d516ac2c69dead86&query=' + coordinates
    
//     request({ url:url,json:true },(error,response) => {
//         if(error){
//             callback("Network Down")
//         }else if(response.body.error){
//             callback("Wrong coordinates")
//         }else{
//             callback({
//                 feelslike: response.body.current.feelslike,
//                 description: response.body.current.weather_descriptions[0],
//                 temperature: response.body.current.temperature,
//             })
//         }
//     })
// }

// coordinatesUrl("37.8267,-122.4233", (error,data) => {
//     console.log("Error", error);
//     console.log("Data", data);
// })

// request({ url:url, json:true }, (error, response) => {
//     if(error){

//         console.log("Unable to connect to weather services!");

//     } else if(response.body.error) {

//         console.log("Unable to find location");
        
//     } else {

//     // const data = JSON.parse(response.body)
//     // console.log(response.body.current);
//     console.log(chalk.green("Its ") +
//                chalk.red(response.body.current.weather_descriptions[0]) +
//                chalk.green(". It is currently " + 
//                chalk.red(response.body.current.temperature) + 
//                " degrees. It feels like " + 
//                chalk.red(response.body.current.feelslike) + " degrees"));

//     }
// })

// const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/123455.json?access_token=pk.eyJ1IjoidGhhdGJveXJlZWNlIiwiYSI6ImNrcG9oYmloYjAyd3AydnFxNjBxaTJoNDgifQ.yfAdMhYBtriEhHIeak5j4A&limit=1"

// request({ url:url, json:true }, (error, response) => {
//     if(error){
//         console.log("Unable to reach services");
//     }else if(response.body.features.length === 0){
//         console.log("Unable to find location...try another search");
//     }else{
//         const longitude = response.body.features[0].center[0]
//         console.log(longitude);
//         const latitude = response.body.features[0].center[1]
//         console.log(latitude);    
//         // console.log(latitude, longitude);
//     }
// })
