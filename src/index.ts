import { getCurrentWeather } from "./weather";

// print current weather info
getCurrentWeather(-34.6037, -58.3816).then((weatherInfo) => {
    console.log(weatherInfo.icon);
    console.log(weatherInfo.code);
    console.log(weatherInfo.description);
    console.log(weatherInfo.temperature);
    console.log(weatherInfo.time);
    console.log(weatherInfo.windDirection);
    console.log(weatherInfo.windSpeed);
});
