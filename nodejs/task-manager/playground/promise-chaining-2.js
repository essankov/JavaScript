require('../src/db/mongoose')

const Task = require('../src/models/task')

Task.findByIdAndDelete('5da7b091a2ed9b9d12dd0012').then((task) => {
    console.log(task)
    return Task.countDocuments({ completed: false })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})