## Weather App #

## Installation

- Run npm install to install the dependencies.
- Go to ```www.forecast.io``` to register for a new account and get your key for accessing the weather data
- create a new file at the root of your project with name ``key.js`` create a new ``const key = 'your key'`` and export your key with ```module.exports.key = key;```

## Running the app
To run the app, follow the following steps:
- open your terminal and navigate to the project directory
- run the command ```node app.js -a 'Your address or zip code'``` or ```node app-promise.js -a 'Your address or zip code'```
- The temperature for the current address will be displayed in your terminal.

## NOTE
Make sure you are connected to internet