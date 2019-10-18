require('../src/db/mongoose')

const Task = require('../src/models/task')

// Task.findByIdAndDelete('5da7b091a2ed9b9d12dd0012').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('5da7b080a2ed9b9d12dd0011').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})