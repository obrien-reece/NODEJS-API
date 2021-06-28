const express = require("express")
const Task = require("../models/task")
const auth = require("../middleware/auth")
const router = new express.Router()


router.post('/tasks', auth, async (req, res) => {
    // console.log(req.body);

    // const task = new Task(req.body)
    
    try{

        const task = new Task({
            ...req.body,
            owner: req.user._id
        })

        await task.save()

        res.status(201).send(task)

    }catch(e) {
        res.sendStatus(400).send(e)
    }
})


//GET tasks?completion=true
//GET tasks?limit=2&skip=0
//GET tasks?sortBy=createdAt_desc
router.get("/tasks", auth, async (req, res) => {

    const match = {}
    const sort = {}    

    if(req.query.completion){
        match.completion = req.query.completion === "true"
    }

    if(req.query.sortBy){
        const parts = req.query.sortBy.split("_")
        sort[parts[0]] = parts[1] === 'desc' ? -1:1
    }

    try{
        // const findTasks = await Task.find({ owner: req.user._id})
        await req.user.populate({
            path: 'tasks',
            match: match,
            options: {
                limit: parseInt(req.query.limit),
                skip: parseInt(req.query.skip),
                sort: sort
                // sort: {
                //     createdAt: -1
                //     completion: -1
                // }
            }
        }).execPopulate()
        res.send(req.user.tasks)
        // console.log(req.user.tasks);
    }catch(e) {
        res.status(500).send(e)
    }
})

router.get("/tasks/:id", auth, async (req, res) => {

    try{
        const _id = req.params.id
        const task = await Task.findOne({ _id, owner: req.user._id })

        if(!task) {
            return res.status(404).send()
        }

        res.send(task)
        
    }catch(e) {
        res.status(500).send(e)
    }
})

router.patch('/tasks/:id', auth, async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['completion', 'task', 'taskNO']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }


    try{
        const _id = req.params.id

        const task = await Task.findOne({ _id, owner: req.user._id })

        if (!task) {
            return res.status(404).send()
        }

        updates.forEach((update) => task[update] = req.body[update]);

        await task.save()
        
        res.send(task)

    }catch(e) {
        res.status(500).send(e)
    }
})

router.delete('/tasks/:id', auth, async (req, res) => {
    try{

        const task = await Task.findOneAndDelete({ _id: req.params.id, owner: req.user._id })

        if(!task){
            return res.status(404).send({ error: "No task found with that ID" })
        }

        res.send(task)

    }catch(e) {
        res.status(500).send(e)
    }
})

module.exports = router