const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiZXNzYW5rIiwiYSI6ImNqeXdsNThyMjExY2Qzbm1reGY2cGJiNGYifQ.pe99x2fG5RLl46h-eC134A'
    
    request({ url : url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to geolocation service!', undefined)
        } else if (response.body.features.length === 0) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
    })
}


module.exports = geocode