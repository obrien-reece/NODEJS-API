const mongoose = require('mongoose')
const validator = require("validator")
const connectionUrl = 'mongodb://127.0.0.1:27017/task-manager-api'

mongoose.connect(connectionUrl, { 
    useUnifiedTopology: true,
    useNewUrlParser: true 
})

const User = mongoose.model('User', {
    password: {
        type: String,
        trim: true,
        required: true,
        minLength: 6,
        validate(value){
            if(value.toLowerCase().includes('password')){
                throw new Error("Password cannot contain password")
            }
        }
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Email is Invalid")
            }
        }
    },
    age: {
        type: Number,
        required: true,
        default: 10,
        validate(value){
            if(value < 0){
                throw new Error("Age chosen is not eigible")
            }
        }
    }
})

// const me = new User({
//     name: "Evance O'Brien",
//     email: "INDeche.evans.o@gmail.com",
//     age: 23,
//     password: '4      3'
// })

// me.save().then((result) => {
//     console.log(me);
// }).catch((error) => {
//     console.log("Error", error);
// })

const Task = mongoose.model("Task", {
    task: {
        type: String,
        required: true,
        trim: true
    },
    completion: {
       type: Boolean,
       default: false
    },
    taskNO: {
        type: Number,
        trim:true,
        required: true
    }
})

const task = new Task({
    task: "Coding NodeJS",
    competion: true,
    taskNO: 2
})

task.save().then(() => {
    console.log(task);
}).catch((error) => {
    console.log(error);
})

