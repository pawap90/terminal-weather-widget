import { TableUserConfig, getBorderCharacters, table } from 'table';
import type { ForecastInfo, WeatherInfo } from './weather';
import { palette } from './color';

export function format(forecast: ForecastInfo[]): string;
export function format(weatherInfo: WeatherInfo): string;
export function format(data: WeatherInfo | ForecastInfo[]): string {
    if (isWeatherInfo(data)) {
        const tableData = [
            [formatDate(data.time), ''],
            [data.icon, formatWeatherData(data)]
        ];

        const config: TableUserConfig = {
            columns: [
                { alignment: 'left', width: 20 },
                {
                    alignment: 'left',
                    paddingLeft: 4,
                    paddingRight: 4,
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
    else {
        const tableData = [];

        for (const forecast of data) {
            tableData.push([
                `${formatDate(forecast.time)}\n${forecast.description}`,
                 forecast.icon,
                `${palette.yellow.inverse(`${forecast.temperatureMax}°C`)}\n${forecast.temperatureMin}°C`,
            ]);
        }
    
        return table(tableData, {
            border: getBorderCharacters('norc'),
            header: { content: palette.pink('Forecast') },
            columnDefault: { verticalAlignment: 'middle', paddingLeft: 3, paddingRight: 3 },
            drawHorizontalLine: () => true,
            drawVerticalLine: () => false,

        });
    }
}


function isWeatherInfo(data: WeatherInfo | ForecastInfo[]): data is WeatherInfo {
    return data.hasOwnProperty('temperature');
}

function formatWeatherData(weatherInfo: WeatherInfo) {
    return (
        palette.pink.inverse(` ${weatherInfo.temperature}°C .\n`) +
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
    return palette.gray(
        date.toLocaleString('en-US', {
            weekday: 'long',
            day: '2-digit',
            month: 'short',
            year: 'numeric'
        })
    );
}
