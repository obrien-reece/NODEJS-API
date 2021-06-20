const mongoose = require('mongoose')
const connectionUrl = 'mongodb://127.0.0.1:27017/task-manager-api'

mongoose.connect(connectionUrl, { 
    useUnifiedTopology: true,
    useNewUrlParser: true 
})

const User = mongoose.model('User', {
    name: {
        type: String
    },
    age: {
        type: Number
    }
})

const Task = mongoose.model("Task", {
    task: {
        type: String
    },
    completion: {
       type: String
    },
    taskNO: {
        type: Number
    }
})

const task = new Task({
    task: "Coding NodeJS",
    competion: "Halfway Done",
    taskNO: 2
})

task.save().then(() => {
    console.log(task);
}).catch((error) => {
    console.log(error);
})

// const me = new User({
//     name: "Evance O'Brien",
//     age: 23
// })

// me.save().then((result) => {
//     console.log(me);
// }).catch((error) => {
//     console.log("Error", error);
// })