const mongoose = require('mongoose')
const bcrypt = require("bcryptjs")
const validator = require("validator")
const jwt = require("jsonwebtoken")

const userSchema = new mongoose.Schema({
    password: {
        type: String,
        trim: true,
        required: true,
        minLength: 6,
        validate(value){
            if(value.toLowerCase().includes('password')){
                throw new Error("Password cannot contain password")
            }
        }
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Email is Invalid")
            }
        }
    },
    age: {
        type: Number,
        required: true,
        default: 10,
        validate(value){
            if(value < 0){
                throw new Error("Age chosen is not eigible")
            }
        }
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
})

userSchema.methods.toJSON = function () {
    const user = this

    const userObject = user.toObject()

    delete userObject.password
    delete userObject.tokens

    return userObject
}

userSchema.methods.generateAuthToken = async function () {
    const user = this

    const token = jwt.sign({ _id: user._id.toString() }, "thisismysecret")

    user.tokens = user.tokens.concat({ token: token })

    await user.save()

    return token
}

userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({ email: email })

    if (!user) {
        throw new Error("Unable to login")
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch){

        throw new Error("Unable to login")
    }

    return user
}

userSchema.pre('save', async function (next) {
    const user = this

    if(user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }

    next()
})

const User = mongoose.model('User', userSchema)

module.exports = User