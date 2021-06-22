const express = require("express")
const Task = require("../models/task")
const router = new express.Router()


router.post('/tasks', async (req, res) => {
    console.log(req.body);

    const task = new Task(req.body)
    
    try{
        await task.save()
        res.send(task)
    }catch(e) {
        res.sendStatus(400).send(e)
    }
})

router.get("/tasks", async (req, res) => {

    try{
        const findTasks = await Task.find({})
        res.send(findTasks)
        console.log(findTasks);
    }catch(e) {
        res.status(500).send(e)
    }
})

router.get("/tasks/:id", async (req, res) => {
    console.log(req.params);

    const _id = req.params.id
    try{
        const findTaskByID = await Task.findById({ _id })
        res.send(findTaskByID)
        
    }catch(e) {
        res.status(500).send(e)
    }
})

router.patch('/tasks/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['completion', 'task', 'taskNO']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }


    try{
        const _id = req.params.id
        const updateTaskByID = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true})
        if (!updateTaskByID) {
            return res.status(404).send()
        }
        res.send(updateTaskByID)
    }catch(e) {
        res.status(500).send(e)
    }
})

router.delete('/tasks/:id', async (req, res) => {
    try{
        const deleteTask = await Task.findByIdAndDelete(req.params.id)
        if(!deleteTask){
            return res.status(404).send({ error: "No task found with that ID" })
        }
        res.send(deleteTask)
    }catch(e) {
        res.status(500).send(e)
    }
})

module.exports = router