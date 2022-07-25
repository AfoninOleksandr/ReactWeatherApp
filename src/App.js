import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CityComponent from "./components/CityComponent";
import WeatherComponent from "./components/WeatherInfoComponent";
import { getWeather } from "./api/Api";


export const WeatherIcons = {
    "01d": "/react-weather-app/icons/sunny.svg",
    "01n": "/react-weather-app/icons/night.svg",
    "02d": "/react-weather-app/icons/day.svg",
    "02n": "/react-weather-app/icons/cloudy-night.svg",
    "03d": "/react-weather-app/icons/cloudy.svg",
    "03n": "/react-weather-app/icons/cloudy.svg",
    "04d": "/react-weather-app/icons/perfect-day.svg",
    "04n": "/react-weather-app/icons/cloudy-night.svg",
    "09d": "/react-weather-app/icons/rain.svg",
    "09n": "/react-weather-app/icons/rain-night.svg",
    "10d": "/react-weather-app/icons/rain.svg",
    "10n": "/react-weather-app/icons/rain-night.svg",
    "11d": "/react-weather-app/icons/storm.svg",
    "11n": "/react-weather-app/icons/storm.svg",
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  padding: 60px 30px;
  margin: auto;
  border-radius: 4px;
  box-shadow: 0 3px 6px 0 #555;
  background: white;
  font-family: Roboto;
`;

const AppLabel = styled.span`
  color: black;
  margin: 20px auto;
  font-size: 18px;
  font-weight: bold;
`;
const CloseButton = styled.span`
  padding: 2px 3px;
  background-color: black;
  border-radius: 50%;
  color: white;
  position: absolute;
`;

function App() {
    const [city, setCity] = useState(null);
    const [weather, setWeather] = useState(null);

    useEffect(() => { if (city) fetchWeather(city) }, [city])
    const fetchWeather = async (city) => {
        const resp = await getWeather(city.Key);
        console.log(resp);
        setWeather(resp);
    };
    return (
        <Container>
            <AppLabel>Weather App</AppLabel>
            {city && weather ? (
                <WeatherComponent weather={weather} city={city} />
            ) : (
                    <CityComponent setCity={setCity} fetchWeather={fetchWeather} />
                )}
        </Container>
    );
}

export default App;
