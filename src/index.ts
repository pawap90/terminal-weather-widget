#! /usr/bin/env node

import { format } from './layout';
import { getCurrentWeather } from './weather';
import { Command } from 'commander';
const program = new Command();

const options = {
    lat: -34.6037,
    lon: -58.3816,
    timezone: 'America/Argentina/Buenos_Aires'
};

program
    .argument('[lat]', 'latitude', options.lat)
    .argument('[lon]', 'longitude', options.lon)
    .argument('[timezone]', 'timezone', options.timezone)
    .action((lat, lon, timezone) => {
        if (lat) options.lat = lat as number;
        if (lon) options.lon = lon as number;
        if (timezone) options.timezone = timezone as string;
    });

program.parse(process.argv);

(async () => {
    const weatherInfo = await getCurrentWeather(
        options.lat,
        options.lon,
        options.timezone
    );
    console.log(format(weatherInfo));
})();