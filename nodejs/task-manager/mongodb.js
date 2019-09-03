//CRUD create read update delete

const mongodb = require('mongodb')
const MongoClinent = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClinent.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database')
    }

    const db = client.db('databaseName')

    db.collection('users').insertOne({
        name: 'Essa',
        age: 27
    })
})