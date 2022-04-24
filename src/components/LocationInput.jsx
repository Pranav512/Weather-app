import React from 'react'
import WeatherContext from '../context/WeatherContext'
import { useContext, useEffect } from "react";

function LocationInput() {
  const { setLocation, location, fetchWeather } = useContext(WeatherContext);

  // set success handler for getting user position
  useEffect(() => {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    navigator.geolocation.getCurrentPosition(onPositionReceived, (err) => { }, options)
  }, [])

  useEffect(() => {
    if(location)
      fetchWeather();
 }, [location]);

  const onPositionReceived = async (pos) => {
    const crds = pos.coords;
    await setLocation({lat: crds.latitude, lng: crds.longitude});
  }

  return (
    <form id="frmCity" className="frmCity">
      <label htmlFor="city" className="city-label">Your city: </label>
      <input className="city-input" type="text" name="city" placeholder="London"  />
    </form>
  )
}

export default LocationInput