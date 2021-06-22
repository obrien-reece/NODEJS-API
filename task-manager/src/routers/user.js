const express = require("express")
const router = new express.Router()
const User = require('../models/user')

router.post('/users', async (req, res) => {
    const user = new User(req.body)

    try{
        await user.save()
        res.status(201).send(user)
    }catch(e) {
        res.status(400).send(e)
    }
})

router.post("/users/login", async (req, res) => {

    try{
        
    const user = await User.findByCredentials(req.body.email, req.body.password)
    res.send(user)

    }catch(e) {
        res.status(404).send()
    }
})

router.get("/users", async (req, res) => {

    try{
        const usersFound = await User.find({  })
        res.send(usersFound)        
    }catch(e) {
        res.status(500).send(e)
    }
})

router.get("/users/:id", async (req, res) => {
    console.log(req.params);

    const _id = req.params.id
    
    try{
        const userFindByID = await User.findById(_id)
        res.send(userFindByID)
    }catch(e) {
        res.sendStatus(500).send(e)
    }
})

router.patch('/users/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'email','password','age']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
    if(!isValidOperation){
        return res.status(404).send({ error: "Invalid update field" })
    }

    try{
        const _id = req.params.id

        const updateUser = await User.findById(_id)

        updates.forEach((update) => updateUser[update] = req.body[update]);

        await updateUser.save()

        // const updateUser = await User.findByIdAndUpdate(_id, req.body, { new: true, runValidators: true })

        if(!updateUser){
            return res.status(404).send()
        }
        res.send(updateUser)
    }catch(e) {
        res.status(500).send()
    }
})

router.delete('/users/:id', async (req, res) => {
    try{
       
        const userDelete = await User.findByIdAndDelete(req.params.id)

        if (!userDelete) {
            return res.status(404).send("Error")
        }

        res.send(userDelete)
    }catch(e) {
        res.status(500).send(e)
    }
})


module.exports = router