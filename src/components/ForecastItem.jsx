import React from 'react'

function ForecastItem({ dt, weather, humidity }) {
  const unixTimestamp = dt;
  const milliseconds = unixTimestamp * 1000;

  const date = new Date(milliseconds);
  const isToday = date.toDateString() === new Date().toDateString();

  const monthDay = date.toLocaleString('default', { month: 'short', day: '2-digit' });

  const { icon } = weather[0];

  return (
    <div className={`forecast-item ${isToday ? 'active' : ''}`}>
      <p>{isToday ? 'today' : monthDay}</p>
      <img alt="forecast weather" className='forecast-item_weather' src={`http://openweathermap.org/img/w/${icon}.png`} />
      <p>Humidity</p>
      <p>{humidity}%</p>
    </div>
  )
}

export default ForecastItem