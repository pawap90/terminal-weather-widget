import chalk from 'chalk';

// https://lospec.com/palette-list/clement-8
const colors = {
    yellow: '#fff982',
    white: '#ffffff',
    gray: '#63ffba',
    lightBlue: '#639bff',
    pink: '#ff79ae'
};

export const palette: Record<keyof typeof colors, chalk.Chalk> = Object.assign(
    {},
    ...Object.entries(colors).map(([key, value]) => {
        return { [key]: chalk.hex(value) };
    })
);
