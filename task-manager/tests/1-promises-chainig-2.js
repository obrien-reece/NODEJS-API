require("../src/db/mongoose")
const Task = require("../src/models/task")

// Task.findByIdAndDelete('60d0720e6ebe53d8207a9428').then((usertask) => {
//     console.log(usertask);
//     return Task.countDocuments({ completion: false })
// }).then((tasks) => {
//     console.log(tasks);
// }).catch((e) => {
//     console.log(e);
// })

const deleteAndCount = async (id) => {
    await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completion: false })
    return count
}

deleteAndCount('60d0d5373551ed166b001e25').then((count) => {
    console.log(count);
}).catch((e) => {
    console.log(e);
})

