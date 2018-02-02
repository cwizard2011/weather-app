const request = require('request')

const getWeather = (lat, lng, callback) => {
  request({
    url:`https://api.darksky.net/forecast/${key}/${lat},${lng}`,
    json: true
  }, (error, response, body) => {
    if (error) {
      callback('Unable.connect to Forecast.io server')
    } else if (response.statusCode === 400) {
      callback('Unable to fetch weather.')
    } else if (response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    }
  });
};

module.exports.getWeather = getWeather;
