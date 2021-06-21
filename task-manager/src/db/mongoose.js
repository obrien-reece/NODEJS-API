const mongoose = require('mongoose')

const connectionUrl = 'mongodb://127.0.0.1:27017/task-manager-api'

mongoose.connect(connectionUrl, { 
    useUnifiedTopology: true,
    useNewUrlParser: true 
})

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


