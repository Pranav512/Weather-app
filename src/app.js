
import imgTemp from './images/thermometer.png';
import imgHumnidity from './images/humidity.png';
import imgWind from './images/wind.png';
import Grafik from './grafik';

const App = () => {

    return (

        <div className="show-weather">
            <header>
                <div>
                    <h4 id="city_name">City Name </h4>
                    <img id="weather_icon" src="" alt="" />
                </div>

                <div id="currectTime"></div>


                <div className="mainWeather">
                    <div><img className="icons" src={imgTemp} alt="" /><span id="city_temperature" ></span>  °C</div>
                    <div><img className="icons" src={imgHumnidity} alt="" /> <span id="city_humidity"></span> %</div>
                    <div><img className="icons" src={imgWind} alt="" /> <span id="city_wind"></span> km/h</div>
                </div>
            </header>
            
            <Grafik/>
        </div>

    );
};


export default App;