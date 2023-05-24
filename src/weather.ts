import { icon } from './icon';
type WatherInfo = {
    temperature: number;
    time: Date;
    windSpeed: number;
    windDirection: number;
    code: number;
    icon: string;
    description: string;
};

export async function getCurrentWeather(
    lat: number,
    lon: number
): Promise<WatherInfo> {
    const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
    );
    const data = await response.json();

    const { temperature, time, windspeed, winddirection, weathercode } =
        data.current_weather;

    const { description, icon } =
        weatherCodeData.find((wd) => wd.code == weathercode) ??
        weatherDataNotFound;

    const weatherInfo: WatherInfo = {
        temperature,
        time: new Date(time),
        windSpeed: windspeed,
        windDirection: winddirection,
        code: weathercode,
        icon,
        description
    };

    return weatherInfo;
}

/**
 * Weather code data based on WMO.
 * As documented here: https://open-meteo.com/en/docs
 */
const weatherCodeData = [
    { code: 0, description: 'Clear sky', emoji: '☀️', icon: icon.clear },
    { code: 1, description: 'Mainly clear', emoji: '🌤️', icon: icon.cloudy },
    { code: 2, description: 'Partly cloudy', emoji: '🌥️', icon: icon.cloudy },
    { code: 3, description: 'Overcast', emoji: '☁️', icon: icon.overcast },
    { code: 45, description: 'Fog', emoji: '🌫️', icon: icon.fog },
    {
        code: 48,
        description: 'Depositing rime fog',
        emoji: '🌫️',
        icon: icon.fog
    },
    {
        code: 51,
        description: 'Drizzle: Light intensity',
        emoji: '🌧️',
        icon: icon.drizzle
    },
    {
        code: 53,
        description: 'Drizzle: Moderate intensity',
        emoji: '🌧️',
        icon: icon.drizzle
    },
    {
        code: 55,
        description: 'Drizzle: Dense intensity',
        emoji: '🌧️',
        icon: icon.drizzle
    },
    {
        code: 56,
        description: 'Freezing Drizzle: Light intensity',
        emoji: '🌧️❄️',
        icon: icon.freezingDrizzle
    },
    {
        code: 57,
        description: 'Freezing Drizzle: Dense intensity',
        emoji: '🌧️❄️',
        icon: icon.freezingDrizzle
    },
    {
        code: 61,
        description: 'Rain: Slight intensity',
        emoji: '💦',
        icon: icon.rain
    },
    {
        code: 63,
        description: 'Rain: Moderate intensity',
        emoji: '💦',
        icon: icon.rain
    },
    {
        code: 65,
        description: 'Rain: Heavy intensity',
        emoji: '💦',
        icon: icon.rain
    },
    {
        code: 66,
        description: 'Freezing Rain: Light intensity',
        emoji: '💦❄️',
        icon: icon.freezingRain
    },
    {
        code: 67,
        description: 'Freezing Rain: Heavy intensity',
        emoji: '💦❄️',
        icon: icon.freezingRain
    },
    {
        code: 71,
        description: 'Snow fall: Slight intensity',
        emoji: '❄️',
        icon: icon.snow
    },
    {
        code: 73,
        description: 'Snow fall: Moderate intensity',
        emoji: '❄️',
        icon: icon.snow
    },
    {
        code: 75,
        description: 'Snow fall: Heavy intensity',
        emoji: '❄️',
        icon: icon.snow
    },
    { code: 77, description: 'Snow grains', emoji: '❄️', icon: icon.snow },
    {
        code: 80,
        description: 'Rain showers: Slight intensity',
        emoji: '☔',
        icon: icon.rain
    },
    {
        code: 81,
        description: 'Rain showers: Moderate intensity',
        emoji: '☔',
        icon: icon.rain
    },
    {
        code: 82,
        description: 'Rain showers: Violent intensity',
        emoji: '☔',
        icon: icon.rain
    },
    {
        code: 85,
        description: 'Snow showers: Slight intensity',
        emoji: '❄️☔',
        icon: icon.snow
    },
    {
        code: 86,
        description: 'Snow showers: Heavy intensity',
        emoji: '❄️☔',
        icon: icon.snow
    },
    {
        code: 95,
        description: 'Thunderstorm: Slight or moderate',
        emoji: '⛈️',
        icon: icon.thunderstorm
    },
    {
        code: 96,
        description: 'Thunderstorm with slight hail',
        emoji: '⛈️🌨️',
        icon: icon.thunderstorm
    },
    {
        code: 99,
        description: 'Thunderstorm with heavy hail',
        emoji: '⛈️🌨️',
        icon: icon.thunderstorm
    }
];

const weatherDataNotFound = {
    description: 'Not found',
    icon: ''
};
