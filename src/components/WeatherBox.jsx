import { useContext } from "react";
import CurrentDateTime from "../components/CurrentDateTime";
import WeatherContext from '../context/WeatherContext';

import Forecast from './Forecast'
import Temperature from "./Temperature";

const WeatherBox = () => {

  const { weatherData, isLoading } = useContext(WeatherContext)

  if (isLoading) return <p>Loading...</p>;

  const weatherToday = weatherData[0];
  const { description, icon } = weatherToday.weather[0];
  const { humidity, wind_speed } = weatherToday;

  return (
    <div className="weatherbox">
      <CurrentDateTime />

      <div className="flex">
        <div className="weather-title">
          <div className="weather-title_header">
            <img alt="weather" src={`http://openweathermap.org/img/w/${icon}.png`} />
            <div className='weather-title_header__temp'>{weatherToday.temp.day}
              <span className="weather-title_header__temp-symbol">°C</span>
            </div>

          </div>
          <p className="weather-title_description">{description}</p>
          <div className="weather-title_footer">
            <div className="weather-title_footer_detail">
              <h5>Humidity</h5>
              <p>{humidity}%</p>
            </div>
            <div className="weather-title_footer_detail">
              <h5>Wind speed</h5>
              <p>{wind_speed} km/j</p>
            </div>
          </div>
        </div>

        <Temperature {...weatherToday.temp} />
      </div>

      <Forecast />

    </div>
  )
}

export default WeatherBox;