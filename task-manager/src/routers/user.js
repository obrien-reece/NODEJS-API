const express = require("express")
const multer = require('multer')
const User = require('../models/user')
const auth = require("../middleware/auth")
const router = new express.Router()

router.post('/users', async (req, res) => {
    const user = new User(req.body)

    try{
        const token = await user.generateAuthToken()
        await user.save()
        res.status(201).send({ user, token })
    }catch(e) {
        res.status(400).send(e)
    }
})

router.post("/users/login", async (req, res) => {

    try{
        
    const user = await User.findByCredentials(req.body.email, req.body.password)
    const token = await user.generateAuthToken()
    res.send({ user, token }) 

    }catch(e) {
        res.status(404).send()
    }
})

router.post("/users/logout", auth, async (req, res) => {
    try{
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token
        })

        await req.user.save()

        res.send()
    }catch(e) {

        res.status(500).send()
    }
})

router.post('/users/logoutAll', auth, async (req, res) => {
    try {
        req.user.tokens = []
        await req.user.save()
        res.send()
    } catch (e) {
        res.status(500).send()
    }
})
router.get("/users/me", auth, async (req, res) => {
    res.send(req.user)
})

/*we do not need to find the user by ID anymore as this will be a breach of security, 
we shall use the auth middleware instead*/

/*router.get("/users/:id", async (req, res) => {
    console.log(req.params);

    const _id = req.params.id
    
    try{
        const userFindByID = await User.findById(_id)
        res.send(userFindByID)
    }catch(e) {
        res.sendStatus(500).send(e)
    }
})*/

router.patch('/users/me', auth, async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'email','password','age']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
    if(!isValidOperation){
        return res.status(404).send({ error: "Invalid update field" })
    }

    try{

        updates.forEach((update) => req.user[update] = req.body[update]);

        await req.user.save()
        res.send(req.user)
    }catch(e) {
        res.status(500).send()
    }
})

router.delete('/users/me', auth, async (req, res) => {
    try{
       
        // const userDelete = await User.findByIdAndDelete(req.user._id)

        // if (!userDelete) {
        //     return res.status(404).send("Error")
        // }
        await req.user.remove()

        res.send(req.user)

    }catch(e) {
        res.status(500).send(e)
    }
})

const upload = multer({
    // dest: 'avatars',
    limits: {
        fileSize: 1000000
    },
    fileFilter(req, file, callback) {
        if(!file.originalname.match(/\.(jpg|jpeg|png)$/)){
            callback(new Error("Please upload an image"))
        }

        callback(undefined, true)
    }    
})

router.post("/users/me/avatar", auth,  upload.single('avatar'), async (req, res) => {
    req.user.avatar = req.file.buffer

    await req.user.save()
    res.send()
},(error, req, res, next) => {
    res.status(400).send({ Error: error.message})
})

router.delete("/users/me/avatar", auth, async (req, res) => {

        req.user.avatar = undefined
        await req.user.save()
        res.send()
})

router.get("/users/me/:id/avatar", async(req, res) => {

try{
    const user = await User.findById(req.params.id)

    if(!user || !user.avatar) {
        throw new Error()
    }

    res.set("Content-Type", "image/jpg")
    res.send(user.avatar)
}catch(e) {
    res.send(e)
}
})

module.exports = router