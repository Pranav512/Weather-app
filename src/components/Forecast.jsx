import { useContext } from "react";
import WeatherContext from '../context/WeatherContext';
import ForecastItem from './ForecastItem';


function Forecast() {

  const { weatherData, isLoading } = useContext(WeatherContext);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div  className="forecast">
      {weatherData.map(weather => <ForecastItem key={weather.dt} {...weather} />)}
    </div>
  )
}

export default Forecast