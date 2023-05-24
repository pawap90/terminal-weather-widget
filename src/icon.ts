import chalk from 'chalk';

const palette = {
    yellow: '#e5d988',
    white: '#e3d5cc',
    gray: '#bad5cc',
    lightBlue: '#6dd5cc'
}

const chalkHex = {
    yellow: chalk.hex(palette.yellow),
    white: chalk.hex(palette.white),
    gray: chalk.hex(palette.gray),
    lightBlue: chalk.hex(palette.lightBlue)
}

const clear = chalkHex.yellow(`
    \\ | /
  '-.´ \`.-'
-==|     |==-
  .-'._.'-.
    / | \\
`);

const cloudy = chalkHex.yellow(`
    \\ | /
  '-.´ \`.`) +
chalkHex.white(`__\n`) +
chalkHex.yellow(`-==|  `) + chalkHex.white(`_(   )_\n   _`) +
chalkHex.yellow(`'`) + 
chalkHex.white(`(  ,    )_
  (_______,___ )
`);

const overcast = chalkHex.white(`
      ___
    _(   )_
 _(  ,     )_
(_______,___ )
`);

const fog = chalkHex.white(`
      ___
    _(   )_
 _(  ,     )_
(________,____)
`) +
chalkHex.gray(` ~~ ~~~ ~~~ ~~
   ~~ ~~ ~~
`);

const drizzle = chalkHex.white(`
      ___
    _(   )_
 _(  ,     )_
(_______,___ )
`) + chalkHex.lightBlue(` ´ ´ ´ ´ ´ ´
    ´ ´ ´
`);

const freezingDrizzle = chalkHex.white(`
      ___
    _(   )_
 _(  ,     )_
(_______,___ )
`) + chalkHex.lightBlue(` * * * * * *
    * * *
`);

const rain = chalkHex.white(`
      ___
    _(   )_
 _(  ,     )_
(_______,___ )
`) + chalkHex.lightBlue(` / / / / / /
    / / /
`);

const freezingRain = chalkHex.white(`
      ___
    _(   )_
 _(  ,     )_
(_______,___ )
`) + chalkHex.lightBlue(` */ */ */ */ 
  */ */ */
`);

const snow = chalkHex.lightBlue(`    .      .
    _\\/  \\/_
     _\\/\\/_ 
 _\\_\\_\\/\\/_/_/_
  / /_/\\/\\_\\ \\
     _/\\/\\_
     /\\  /\\
    '      '
`);

const thunderstorm = chalkHex.white(`      ____
    _(    )__
 _(  ,       )_
(_______,_____ )`) + chalkHex.lightBlue(`
  /`)+ chalkHex.yellow(` _/ _/`) + chalkHex.lightBlue(` / / 
 / `)+ chalkHex.yellow(`/__/`) + chalkHex.lightBlue(`  /\n`) 
+ chalkHex.yellow(`  //
 /´`);

export const icon: Record<string, string> = {
    clear,
    cloudy,
    overcast,
    fog,
    drizzle,
    freezingDrizzle,
    rain,
    freezingRain,
    snow,
    thunderstorm
};