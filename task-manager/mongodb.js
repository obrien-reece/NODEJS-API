const mongodb = require('mongodb')
const mongoClient = mongodb.MongoClient

const connectionUrl = "mongodb://127.0.0.1:27017"
const databaseName = "task-manager"

/*Current Server Discovery and Monitoring engine is deprecated, and will be 
removed in a future version. To use the new Server Discover and Monitoring engine, 
pass option { useUnifiedTopology: true } to the MongoClient constructor.
(Use `node --trace-warnings ...` to show where the warning was created)*/

//am being told to remove the { useNewUrlParser: true } object and replace with { useUnifiedTopology: true } 
mongoClient.connect(connectionUrl, { useUnifiedTopology: true }, (error, client) => {
    if(error){
        return console.log("Unable to connect to database");
    }
    console.log('Connected correctly');
})