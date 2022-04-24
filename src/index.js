import React from 'react';
import reactDom from 'react-dom';
import './index.css';
import Chart from 'chart.js/auto';
import getData from './fetch';
import App from './app';
import GetCity from './getCity';



function CityWeather() {
    return (
        <div className="main-content">
            <GetCity />
            <App />
        </div>
    );
}

reactDom.render(<CityWeather />, document.getElementById('root'));
getData();



let today = new Date();
let dd = today.getDate();
let mm = today.getMonth();
let yyyy = today.getFullYear();
let time = today.getHours() + ":" + today.getMinutes();
const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
today = dd + ' ' + monthNames[mm] + ' ' + yyyy;

document.getElementById("currectTime").innerHTML = today + " " + time;


let get_city = document.getElementById('search_city');

function city() {

    let search_btn = document.getElementById('search');
    let find_location_btn = document.getElementById('findLocation');

    let city_name = document.getElementById("city_name");
    let city_temperature = document.getElementById("city_temperature");
    let city_humidity = document.getElementById("city_humidity");
    let city_wind = document.getElementById("city_wind");
    let city_weather_icon = document.getElementById("weather_icon");

    let city = document.getElementById("getCity");


    function grafik(cityName) {

        fetch('https://api.openweathermap.org/data/2.5/forecast?units=metric&q=' + cityName + '&appid=14394b7a4926df4344a0c0be821e5b89')
            .then(response => response.json())
            .then(function (response) {

                let data1 = response.list[1].main.temp;
                let data2 = response.list[2].main.temp;
                let data3 = response.list[3].main.temp;
                let data4 = response.list[4].main.temp;
                let data5 = response.list[5].main.temp;
                let data6 = response.list[6].main.temp;
                let data7 = response.list[7].main.temp;


                const labels = [
                    (dd + 1) + " " + monthNames[mm],
                    (dd + 2) + " " + monthNames[mm],
                    (dd + 3) + " " + monthNames[mm],
                    (dd + 4) + " " + monthNames[mm],
                    (dd + 5) + " " + monthNames[mm],
                    (dd + 6) + " " + monthNames[mm],
                    (dd + 7) + " " + monthNames[mm],
                ];

                const data = {
                    labels: labels,
                    datasets: [{
                        label: 'Days in City Weather',
                        backgroundColor: 'rgb(240 248 255)',
                        borderColor: 'rgb(240 248 255)',
                        data: [data1, data2, data3, data4, data5, data6, data7]
                    }]
                };
                const config = {
                    type: 'line',
                    data: data,
                    options: {}
                };
                const myChart = new Chart(
                    document.getElementById('myChart'),
                    config
                );

            })




    }


    search_btn.addEventListener("click", () => {

        const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=' + get_city.value + '&appid=14394b7a4926df4344a0c0be821e5b89';
        function search() {
            fetch(baseUrl)
                .then(response => response.json())
                .then(function (response) {
                    city_name.innerHTML = response.name;
                    city_temperature.innerHTML = response.main.temp;
                    city_humidity.innerHTML = response.main.humidity;
                    city_wind.innerHTML = response.wind.speed;
                    city_weather_icon.src = "http://openweathermap.org/img/wn/" + response.weather[0].icon + ".png";

                })
        }

        search();
        city.style.display = "none";
        grafik(get_city.value);

    });
    get_city.addEventListener("keypress", function (event) {

        if (event.keyCode === 13) {
            event.preventDefault();
            search_btn.click();
        }
    });
    find_location_btn.addEventListener("click", () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition)
        } else {
            console.log("Geolocation is not supported by this browser.");
        }

        function showPosition(position) {
            const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&lat=' + position.coords.latitude + '&lon=' + position.coords.longitude + '&appid=14394b7a4926df4344a0c0be821e5b89';

            function find() {
                fetch(baseUrl)
                    .then(response => response.json())
                    .then(function (response) {

                        city_name.innerHTML = response.name;
                        city_temperature.innerHTML = response.main.temp;
                        city_humidity.innerHTML = response.main.humidity;
                        city_wind.innerHTML = response.wind.speed;
                        city_weather_icon.src = "http://openweathermap.org/img/wn/" + response.weather[0].icon + ".png";
                        grafik(response.name);
                    })
            }

            find();
        }
        city.style.display = "none";
        
    });

}
city();