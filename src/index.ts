#! /usr/bin/env node

import { Controller } from './controller';
import { format } from './layout';
import { getCurrentWeather, getForecast } from './weather';
import arg from 'arg';

const options = {
    lat: -34.6037,
    lon: -58.3816,
    timezone: 'America/Argentina/Buenos_Aires',
    updateInterval: 5
};

const args = arg({
    '--lat': Number,
    '--lon': Number,
    '--timezone': String,
    '--updateInterval': Number,
    '-u': '--updateInterval',
    '-l': '--lat',
    '-o': '--lon',
    '-t': '--timezone'
});

options.lat = args['--lat'] || options.lat;
options.lon = args['--lon'] || options.lon;
options.timezone = args['--timezone'] || options.timezone;
options.updateInterval = args['--updateInterval'] || options.updateInterval;

let state: 'weather' | 'forecast' | undefined;

printUpdatedWeather();

if (options.updateInterval < 1)
    throw new Error('[updateInterval] must be at least 1 minute');

setInterval(printUpdatedWeather, options.updateInterval * 60 * 1000);

new Controller()
    .on('f', printForecast)
    .on('w', printUpdatedWeather)
    .on('q', () => process.exit())
    .build();

function printUpdatedWeather() {
    if (state == 'weather') return;

    getCurrentWeather(options.lat, options.lon, options.timezone)
        .then((weatherInfo) => {
            console.clear();
            console.log(format(weatherInfo));
            printController();
        })
        .catch((err) => console.error(err));
    state = 'weather';
}

function printForecast() {
    if (state == 'forecast') return;

    getForecast(options.lat, options.lon, options.timezone)
        .then((forecastInfo) => {
            console.clear();
            console.log(format(forecastInfo));
            printController();
        })
        .catch((err) => console.error(err));
    state = 'forecast';
}

function printController() {
    console.log('[F] Forecast | [W] Weather | [Q] Quit');
}
