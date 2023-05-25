import { format } from "./layout";
import { getCurrentWeather } from "./weather";

getCurrentWeather(-34.6037, -58.3816, 'America/Argentina/Buenos_Aires').then((weatherInfo) => {
    console.log(format(weatherInfo));
});