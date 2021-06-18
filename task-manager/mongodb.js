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
    
    const db = client.db(databaseName)
    
    //insert one user

    /*
    db.collection('users').insertOne({
        name: "Evance",
        age: 27
    }, (error, result) => {
        if(error){
        return console.log("Unable to insert user");
        }
        console.log(result.ops);
    })
    */


    //Insert many users

    db.collection('users').insertMany([
        {
            name: "Evance O'Brien",
            age: 34
        },{
            name: 'Reeece Indeche',
            age: 45
        }
    ], (error, result) => {
        if(error){
        return console.log("Unable to insert documents");
        }

        console.log(result.ops);
    })
})