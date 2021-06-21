require("../src/db/mongoose")
const { findByIdAndUpdate, countDocuments } = require("../src/models/user");
const User = require("../src/models/user")
const Task = require("../src/models/user")

// User.findByIdAndUpdate('60d072186ebe53d8207a942a', { age: 11 }).then((user) => {
//     console.log(user);

//     return User.countDocuments({ age: 11 })
// }).then((users) => {
//     console.log(users);
// }).catch((e) => {
//     console.log(e);
// })

const updateAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age: age })
    const count = await User.countDocuments({ age: age })
    return count
}

updateAndCount('60d072186ebe53d8207a942a', 12).then((count) => {
    console.log(count);
}).catch((e) => {
    console.log(e);
})
