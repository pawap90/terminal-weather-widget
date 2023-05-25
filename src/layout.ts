import { TableUserConfig, getBorderCharacters, table } from 'table';
import type { WeatherInfo } from './weather';

export function format(weatherInfo: WeatherInfo): string {
    const tableData = [
        [formatDate(weatherInfo.time), ''],
        [weatherInfo.icon, formatWeatherData(weatherInfo)]
    ];

    const config: TableUserConfig = {
        columns: [
            { alignment: 'left', width: 20 },
            {
                alignment: 'left',
                paddingLeft: 4,
                width: 16,
                verticalAlignment: 'middle',
                wrapWord: true
            }
        ],
        spanningCells: [
            { col: 0, row: 0, colSpan: 2, alignment: 'center' },
            {
                col: 0,
                row: 1,
                rowSpan: 1,
                verticalAlignment: 'middle',
                paddingLeft: 3
            }
        ],
        border: getBorderCharacters('norc')
    };

    return table(tableData, config);
}

function formatWeatherData(weatherInfo: WeatherInfo) {
    return (
        `${weatherInfo.temperature}°C\n` +
        `${weatherInfo.description}\n\n` +
        `Wind ${weatherInfo.wind.icon}\n` +
        `${weatherInfo.wind.speed} km/h `
    );
}

/**
 * Format date.
 * E.g: Wed, May 24, 2023, 08:20 PM
 */
function formatDate(date: Date): string {
    return date.toLocaleString('en-US', {
        weekday: 'short',
        day: '2-digit',
        month: 'short',
        year: 'numeric'
    });
}
