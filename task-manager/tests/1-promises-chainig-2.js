require("../src/db/mongoose")
const Task = require("../src/models/task")

Task.findByIdAndDelete('60d0720e6ebe53d8207a9428').then((usertask) => {
    console.log(usertask);
    return Task.countDocuments({ completion: false })
}).then((tasks) => {
    console.log(tasks);
}).catch((e) => {
    console.log(e);
})

