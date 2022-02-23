const API_KEY = 'YXhoQYhAAYhy9XOR9vx7iRR842juLRAE'; 
const API_HOST = 'http://dataservice.accuweather.com/';
const API_VERSION = 'v1';

const LocationApiUrl = (city) => `${API_HOST}locations/${API_VERSION}/cities/search?apikey=${API_KEY}&q=${city}`;

const WeatherApiUrl = key => `${API_HOST}forecasts/${API_VERSION}/daily/1day/${key}?apikey=${API_KEY}`;

export function getLocations(city) {
  return fetch(LocationApiUrl(city)).then(response => response.json());
}
export function getWeather(key) {
  return fetch(WeatherApiUrl(key))
    .then(response => response.json());
}
