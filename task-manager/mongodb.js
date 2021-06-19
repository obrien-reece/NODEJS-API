const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const ObjectID = mongodb.ObjectID

//de structure
// const { MongoClient, ObjectID } = require('mongodb')

//ypo can set your own od to be inserted
// const id = new ObjectID()
// console.log(id);
// console.log(id.getTimestamp());

const connectionUrl = "mongodb://127.0.0.1/27017"
const databaseName = "robo3t"

MongoClient.connect(connectionUrl, { useUnifiedTopology:true }, (error, client) => {
    if(error){
        return console.log("Unable to establish connection");
    }

    const db = client.db(databaseName)

    //Find only one record
    db.collection('robo3tusers').findOne({ name: "Dororo" }, (error, result) => {
        if(error){
            return console.log("Error");
        }
        console.log(result);
    })

    //find many records
    db.collection('robo3tusers')


    //find by id
    // db.collection('robo3tusers').findOne({ _id: ObjectID("60ce1d297ee5e552800f3fa1") }, (error, result) => {
    //     if(error){
    //         return console.log("Error");
    //     }
    //     console.log(result);
    // })

    // db.collection('robo3tusers').insertMany([
    //     {
    //         name: "Dororo",
    //         skill: "Companion",
    //         age: 12,
    //         Anime: "Dororo"
    //     },{
    //         name: "Captain Meliodas",
    //         skill: "Raw Power",
    //         age: 12,
    //         Anime: "The Seven Deadly Sins"
    //     },{
    //         name: "Riuk",
    //         skill: "Magical Power",
    //         age: "Infinite",
    //         Anime: "Death Note"
    //     }
    // ], (error, result) => {
    //     if(error){
    //         return console.log("There was an error...please try again");
    //     }
    //     console.log(result.ops);
    // })
})