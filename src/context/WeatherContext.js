import { createContext, useState, useEffect } from 'react'


const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [location, setLocation] = useState();
  const [weatherToday, setWeatherToday] = useState();
  const [weatherData, setWeatherData] = useState([]);


  const fetchWeather = async () => {

    const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${location.lat}&lon=${location.lng}&units=metric&exclude=current,minutely,hourly,alerts&appid=SECRET_API_KEY`);
    const data = await response.json();

    setWeatherData(data.daily);
    setWeatherToday(weatherData[0])
    setIsLoading(false);
  }


  return (
    <WeatherContext.Provider
      value={{
        weatherToday,
        weatherData,
        isLoading,
        location,
        setLocation, 
        fetchWeather
      }}
    >
      {children}
    </WeatherContext.Provider>
  )
}



export default WeatherContext;