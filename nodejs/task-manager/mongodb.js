//CRUD create read update delete

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database')
    }

    const db = client.db('databaseName')

    // db.collection('users').findOne({ _id: new ObjectID("5d71b98625f1b310aa05898e") }, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to fetch')
    //     }

    //     console.log(user)
    // })

    // db.collection('users').find({ age: 27 }).toArray((error, users) => {
    //     console.log(users)

    // })

    db.collection('tasks').findOne({ _id: new ObjectID("5d71bceba1b66a1128283d7e") }, (error, task) => {
        if (error) {
            console.log('Unable to fetch')
        }

        console.log(task)
    })

    db.collection('tasks').find({completed: true}).toArray((error, task) => {
        console.log(task)
    })

}) 