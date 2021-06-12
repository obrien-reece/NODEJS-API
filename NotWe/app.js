const geocode = require("./geocode")

geocode("Nairobi", (error, data) => {
    console.log("Success", data);
    console.log("Error", error);
})