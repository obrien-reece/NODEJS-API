require("../src/db/mongoose")
const User = require("../src/models/user")
const Task = require("../src/models/user")

User.findByIdAndUpdate('60d072186ebe53d8207a942a', { age: 11 }).then((user) => {
    console.log(user);

    return User.countDocuments({ age: 11 })
}).then((users) => {
    console.log(users);
}).catch((e) => {
    console.log(e);
})

