const mongoose = require('mongoose')

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

module.exports = Task