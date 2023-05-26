#! /usr/bin/env node

import { format } from './layout';
import { getCurrentWeather } from './weather';
import { Command } from 'commander';
const program = new Command();

const options = {
    lat: -34.6037,
    lon: -58.3816,
    timezone: 'America/Argentina/Buenos_Aires',
    updateInterval: 5
};

program
    .name('weather')
    .argument('[lat]', 'latitude', options.lat)
    .argument('[lon]', 'longitude', options.lon)
    .argument('[timezone]', 'timezone', options.timezone)
    .argument('[updateInterval]', 'updateInterval', options.updateInterval)
    .action((lat, lon, timezone, updateInterval) => {
        if (lat) options.lat = lat as number;
        if (lon) options.lon = lon as number;
        if (timezone) options.timezone = timezone as string;
        if (updateInterval) options.updateInterval = updateInterval as number;
    });

program.parse(process.argv);

printUpdatedWeather();

if (options.updateInterval < 1)
    throw new Error('[updateInterval] must be at least 1 minute');

setInterval(printUpdatedWeather, options.updateInterval * 60 * 1000);

function printUpdatedWeather() {
    getCurrentWeather(options.lat, options.lon, options.timezone)
        .then((weatherInfo) => {
            console.clear();
            console.log(format(weatherInfo));
        })
        .catch((err) => console.error(err));
}
