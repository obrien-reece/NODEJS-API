const express = require('express')
require("./db/mongoose")
const User = require('./models/user')
const Task = require('./models/task')

const app =express()
const port = process.env.PORT || 3000

app.use(express.json())



app.post('/users', async (req, res) => {
    const user = new User(req.body)

    try{
        await user.save()
        res.status(201).send(user)
    }catch(e) {
        res.status(400).send(e)
    }
})

app.get("/users", async (req, res) => {

    try{
        const usersFound = await User.find({  })
        res.send(usersFound)        
    }catch(e) {
        res.status(500).send(e)
    }
})

app.get("/users/:id", async (req, res) => {
    console.log(req.params);

    const _id = req.params.id
    
    try{
        const userFindByID = await User.findById(_id)
        res.send(userFindByID)
    }catch(e) {
        res.sendStatus(500).send(e)
    }
})



app.post('/tasks', async (req, res) => {
    console.log(req.body);

    const task = new Task(req.body)
    
    try{
        await task.save()
        res.send(task)
    }catch(e) {
        res.sendStatus(400).send(e)
    }
})

app.get("/tasks", async (req, res) => {

    try{
        const findTasks = await Task.find({})
        res.send(findTasks)
        console.log(findTasks);
    }catch(e) {
        res.status(500).send(e)
    }
})

app.get("/tasks/:id", async (req, res) => {
    console.log(req.params);

    const _id = req.params.id
    try{
        const findTaskByID = await Task.findById({ _id })
        res.send(findTaskByID)
        
    }catch(e) {
        res.status(500).send(e)
    }
})

app.listen(port, () => {
    console.log("Server is running on " + port);
})