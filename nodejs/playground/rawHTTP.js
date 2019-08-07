const https = require('https')

const url = 'https://api.darksky.net/forecast/6bfb1637b76b9b867bc55fe19d9c6c07/23,45'

const request = https.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString()
       console.log(chunk) 
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on('error', (error) => {
    console.log('An error', error)
})

request.end()