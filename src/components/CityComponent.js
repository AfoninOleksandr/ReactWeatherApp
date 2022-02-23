import styled from "styled-components";
import React, { useEffect } from "react";
import { getLocations } from "../api/Api";

const SearchBox = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 20px;
  border: black solid 1px;
  border-radius: 2px;

  & input {
    padding: 10px;
    font-size: 16px;
    border: none;
    outline: none;
    font-family: Roboto;
    font-weight: bold;
  }
  & button {
    background-color: black;
    font-size: 16px;
    padding: 0 10px;
    color: white;
    border: none;
    outline: none;
    cursor: pointer;
    font-family: Roboto;
    font-weight: bold;
  }
`;
const ChooseCityLabel = styled.span`
  color: black;
  margin: 10px auto;
  font-size: 18px;
  font-weight: bold;
`;
const WelcomeWeatherLogo = styled.img`
  width: 140px;
  height: 140px;
  margin: 40px auto;
`;
const CityComponent = (props) => {
    const { setCity } = props;
    const fetchApi = async event => {
        event.preventDefault();
        const city = event.target.elements.city.value;
        const response = await getLocations(city);
        console.log(response);
        setCity(response[0]);
    }
    return (
    <>
      <WelcomeWeatherLogo src={"/react-weather-app/icons/perfect-day.svg"} />
      <ChooseCityLabel>Input your City Name</ChooseCityLabel>
      <SearchBox onSubmit={fetchApi}>
        <input name="city"
          placeholder="City"
        />
        <button type={"submit"}>Search</button>
      </SearchBox>
    </>
  );
};
export default CityComponent;
