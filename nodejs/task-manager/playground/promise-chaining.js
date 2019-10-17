require('../src/db/mongoose')

const User = require('../src/models/user')

User.findByIdAndUpdate('5da12a4f0d02ce7cd3ce4b68', { age: 1 }).then((user) => {
    console.log(user)
    return User.countDocuments({ age: 1})
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})