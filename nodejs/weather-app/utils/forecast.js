const request = require('request')


// const url = 'https://api.darksky.net/forecast/6bfb1637b76b9b867bc55fe19d9c6c07/39.1155,94.6268?'

// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to weather service!')
//     } else if (response.body.error) {
//         console.log('Unable to find location')
//     } else {
//         console.log(response.body.daily.data[0].summary + ` It is currently ${response.body.currently.temperature} degrees out. There is a ${response.body.currently.precipProbability}% chance of rain.`)
//     }   
// })


const forecast = (latitude, longitude, callback) => {
   const url = 'https://api.darksky.net/forecast/6bfb1637b76b9b867bc55fe19d9c6c07/' + latitude + ',' + longitude
   
   request({ url : url, json : true}, (error, response) => {
       if (error) {
           callback('Unable to connect to weather service!', undefined)
       } else if (response.body.error) {
           callback('Unable to find location', undefined)
       } else {
           callback(undefined, response.body.daily.data[0].summary + ` It is currently ${response.body.currently.temperature} degrees out. There is a ${response.body.currently.precipProbability}% chance of rain.`)
       }
   })
}


module.exports = forecast