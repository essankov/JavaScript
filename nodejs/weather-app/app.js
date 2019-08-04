const request = require('request')

const url = 'https://api.darksky.net/forecast/6bfb1637b76b9b867bc55fe19d9c6c07/39.1155,94.6268?'

request({ url: url, json: true }, (error, response) => {
   console.log(response.body.daily.data[0].summary + ` It is currently ${response.body.currently.temperature} degrees out. There is a ${response.body.currently.precipProbability}% chance of rain.`)
   
})

const geoCodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZXNzYW5rIiwiYSI6ImNqeXdsNThyMjExY2Qzbm1reGY2cGJiNGYifQ.pe99x2fG5RLl46h-eC134A'
request({ url: geoCodeURL, json: true}, (error, response) => {
    const latitude = response.body.features[0].center[1]
    const longitude = response.body.features[0].center[0]

    console.log(latitude, longitude)
})