import { icon } from './icon';

export type WeatherInfo = {
    time: Date;
    temperature: number;
    code: number;
    icon: string;
    emoji: string;
    description: string;
    wind: {
        speed: number;
        direction: number;
        icon: string;
    };
};

export async function getCurrentWeather(
    lat: number,
    lon: number,
    timezone: string = 'GMT'
): Promise<WeatherInfo> {
    const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&timezone=${timezone}`
    );
    const data = await response.json();

    const { temperature, time, windspeed, winddirection, weathercode } =
        data.current_weather;

    const { description, icon, emoji } =
        weatherCodeData.find((wd) => wd.code == weathercode) ??
        weatherDataNotFound;

    const weatherInfo: WeatherInfo = {
        temperature,
        time: new Date(time),
        code: weathercode,
        icon,
        emoji,
        description,
        wind: {
            speed: windspeed,
            direction: winddirection,
            icon: getWindDirectionIcon(winddirection)
        }
    };

    return weatherInfo;
}

type Direction =
    | 'north'
    | 'northEast'
    | 'east'
    | 'southEast'
    | 'south'
    | 'southWest'
    | 'west'
    | 'northWest';

type WindDirection = Record<
    Direction,
    {
        icon: string;
        degrees: { from: number; to: number }[];
    }
>;

const windDirectionData: WindDirection = {
    north: {
        icon: '↑',
        degrees: [
            { from: 0, to: 22.5 },
            { from: 337.5, to: 360 }
        ]
    },
    northEast: {
        icon: '↗',
        degrees: [{ from: 22.5, to: 67.5 }]
    },
    east: {
        icon: '→',
        degrees: [{ from: 67.5, to: 112.5 }]
    },
    southEast: {
        icon: '↘',
        degrees: [{ from: 112.5, to: 157.5 }]
    },
    south: {
        icon: '↓',
        degrees: [{ from: 157.5, to: 202.5 }]
    },
    southWest: {
        icon: '↙',
        degrees: [{ from: 202.5, to: 247.5 }]
    },
    west: {
        icon: '←',

        degrees: [{ from: 247.5, to: 292.5 }]
    },
    northWest: {
        icon: '↖',
        degrees: [{ from: 292.5, to: 337.5 }]
    }
};

function getWindDirectionIcon(windDirection: number): string {
    const result = Object.values(windDirectionData).find((d) => {
        return d.degrees.some((degrees) => {
            return windDirection >= degrees.from && windDirection <= degrees.to;
        });
    });

    return result?.icon ?? '';
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
        description: 'Light drizzle',
        emoji: '🌧️',
        icon: icon.drizzle
    },
    {
        code: 53,
        description: 'Moderate drizzle',
        emoji: '🌧️',
        icon: icon.drizzle
    },
    {
        code: 55,
        description: 'Dense drizzle',
        emoji: '🌧️',
        icon: icon.drizzle
    },
    {
        code: 56,
        description: 'Light freezing drizzle',
        emoji: '🌧️❄️',
        icon: icon.freezingDrizzle
    },
    {
        code: 57,
        description: 'Dense freezing drizzle',
        emoji: '🌧️❄️',
        icon: icon.freezingDrizzle
    },
    {
        code: 61,
        description: 'Slight rain',
        emoji: '💦',
        icon: icon.rain
    },
    {
        code: 63,
        description: 'Moderate rain',
        emoji: '💦',
        icon: icon.rain
    },
    {
        code: 65,
        description: 'Heavy rain',
        emoji: '💦',
        icon: icon.rain
    },
    {
        code: 66,
        description: 'Light freezing rain',
        emoji: '💦❄️',
        icon: icon.freezingRain
    },
    {
        code: 67,
        description: 'Heavy freezing rain',
        emoji: '💦❄️',
        icon: icon.freezingRain
    },
    {
        code: 71,
        description: 'Slight snow fall',
        emoji: '❄️',
        icon: icon.snow
    },
    {
        code: 73,
        description: 'Moderate snow fall',
        emoji: '❄️',
        icon: icon.snow
    },
    {
        code: 75,
        description: 'Heavy snow fall',
        emoji: '❄️',
        icon: icon.snow
    },
    { code: 77, description: 'Snow grains', emoji: '❄️', icon: icon.snow },
    {
        code: 80,
        description: 'Slight rain showers',
        emoji: '☔',
        icon: icon.rain
    },
    {
        code: 81,
        description: 'Moderate rain showers',
        emoji: '☔',
        icon: icon.rain
    },
    {
        code: 82,
        description: 'Violent rain showers',
        emoji: '☔',
        icon: icon.rain
    },
    {
        code: 85,
        description: 'Slight snow showers',
        emoji: '❄️☔',
        icon: icon.snow
    },
    {
        code: 86,
        description: 'Heavy snow showers',
        emoji: '❄️☔',
        icon: icon.snow
    },
    {
        code: 95,
        description: 'Thunderstorm ',
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
    icon: '',
    emoji: ''
};
