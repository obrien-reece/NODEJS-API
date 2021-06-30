const express = require('express')
require("./db/mongoose")
const userRouter = require('./routers/user')
const taskRouter = require("./routers/task")

const app = express()
const port = process.env.PORT || 3000

const multer = require('multer')
const upload = multer({
    dest: 'images',
    limits: {
        fileSize: 1000000
    },
    fileFilter(req, file, callback) {
        // if(!file.originalname.endsWith('.pdf')){
            if(!file.originalname.match(/\.(doc|docx)$/)){
            return callback(new Error("Please upload a word document"))
        }

        callback(undefined, true)
    }
})

app.post("/upload", upload.single('upload'), (req, res) => {
    res.send()
}, (error, req, res,next) => {
    res.status(400).send({ error: error.message })
})

// app.use((req, res, next) => {
//     console.log(req.method, req.path);
//     next()
// })

// app.use((req, res, next) => {
//     if(req.method === 'GET' || 'POST' || 'PATCH', 'DELETE') {
//         res.status(503).send("Server is under maintanance")
//     }
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log("Server is running on " + port);
})

// const Task = require("./models/task")
// const User = require("./models/user")

// const main = async () => {
//     // const task = await Task.findById('60d5978f7ab647765d0ff12e')
//     // await task.populate('owner').execPopulate()
//     // console.log(task.owner);

//     const user = await User.findById('60d596bf624c1a741099625b')
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks)
// }

// main()

