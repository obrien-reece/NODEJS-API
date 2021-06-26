const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
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
        default: 1
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
}, {
    timestamps: true
})

const Task = mongoose.model("Task", taskSchema)

module.exports = Task