const path = require('path')
const express = require('express')

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

app.set('view engine', 'hbs')
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Essa Alkhamees'
    })
})

app.get('/about', (req, res) =>{
    res.render('about', {
        title: 'About Me',
        name: 'Essa Alkhamees'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'Here is the help page!'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        city: 'Kansas City',
        latitude: 39.0997222,
        longitude: -94.5783333
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})