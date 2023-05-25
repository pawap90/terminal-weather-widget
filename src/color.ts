import chalk from 'chalk';

// https://lospec.com/palette-list/sobeachy8
const colors = {
    yellow:'#fff982',
    white:'#ffffff',
    gray:'#63ffba',
    lightBlue:'#639bff',
    pink: '#ff79ae'
};

export const palette: Record<(keyof typeof colors), chalk.Chalk> = {
    yellow: chalk.hex(colors.yellow),
    white: chalk.hex(colors.white),
    gray: chalk.hex(colors.gray),
    lightBlue: chalk.hex(colors.lightBlue),
    pink: chalk.hex(colors.pink)
};