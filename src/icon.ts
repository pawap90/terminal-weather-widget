import { palette } from "./color";

const clear = palette.yellow(`    \\ | /
  '-.´ \`.-'
-==|     |==-
  .-'._.'-.
    / | \\
`);

const cloudy =
    palette.yellow(`    \\ | /
  '-.´ \`.`) +
    palette.white(`__\n`) +
    palette.yellow(`-==|  `) +
    palette.white(`_(   )_\n   _`) +
    palette.yellow(`'`) +
    palette.white(`(  ,    )_
  (_______,___ )
`);

const overcast = palette.white(`      ___
    _(   )_
 _(  ,     )_
(_______,___ )
`);

const fog =
    palette.white(`      ___
    _(   )_
 _(  ,     )_
(________,____)
`) +
    palette.gray(` ~~ ~~~ ~~~ ~~
   ~~ ~~ ~~
`);

const drizzle =
    palette.white(`      ___
    _(   )_
 _(  ,     )_
(_______,___ )
`) +
    palette.lightBlue(` ´ ´ ´ ´ ´ ´
    ´ ´ ´
`);

const freezingDrizzle =
    palette.white(`      ___
    _(   )_
 _(  ,     )_
(_______,___ )
`) +
    palette.lightBlue(` * * * * * *
    * * *
`);

const rain =
    palette.white(`      ___
    _(   )_
 _(  ,     )_
(_______,___ )
`) +
    palette.lightBlue(` / / / / / /
    / / /
`);

const freezingRain =
    palette.white(`      ___
    _(   )_
 _(  ,     )_
(_______,___ )
`) +
    palette.lightBlue(` */ */ */ */ 
  */ */ */
`);

const snow = palette.lightBlue(`    .      .
    _\\/  \\/_
     _\\/\\/_ 
 _\\_\\_\\/\\/_/_/_
  / /_/\\/\\_\\ \\
     _/\\/\\_
     /\\  /\\
    '      '
`);

const thunderstorm =
    palette.white(`      ____
    _(    )__
 _(  ,       )_
(_______,_____ )`) +
    palette.lightBlue(`
  /`) +
    palette.yellow(` _/ _/`) +
    palette.lightBlue(` / / 
 / `) +
    palette.yellow(`/__/`) +
    palette.lightBlue(`  /\n`) +
    palette.yellow(`  //
 /´`);

export const icon = {
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
