import React, { useEffect, useState } from "react";
import {dot} from "dotenv";


function Weather() {
  const [weatherData, setWeatherData] = useState({
    cityName: "",
    temp: "",
    wind: "",
    humidity: "",
    icon: "",
    condition : "",
    sunrise: "",
    sunset: "",
  });
  const [city, setCity] = useState("");

  async function getWeatherData(cityName) {
    const API_KEY = 'd00f3da445dc15db21e1c2f379e3b8ae'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`;
    console.log(url);

    try {
      const response = await fetch(url);

      if (!response.ok) {
        return;
      }

      const data = await response.json();
      console.log(data);
      setWeatherData({
        cityName: data.name,
        temp: Math.round(data.main.temp),
        wind: data.wind.speed,
        humidity: data.main.humidity,
        icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
        condition: data.weather[0].main,
        sunrise: new Date(data.sys.sunrise * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), // Without seconds
        sunset: new Date(data.sys.sunset * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),  // Without seconds
      });

      console.log(weatherData);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getWeatherData("bhopal");
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-center text-2xl font-bold mb-6">Weather App</h2>
        <div className="mb-6 flex">
          <input
            type="text"
            placeholder="Enter city name"
            onChange={(e) => setCity(e.target.value) }
            className="w-full p-3 rounded-l-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
          onClick={() => getWeatherData(city)}
          className="bg-blue-500 p-3 rounded-r-md text-white hover:bg-blue-600 focus:outline-none">
            Search
          </button>
        </div>
        <div className="text-center mb-6">
          <h3 className="text-xl font-semibold mb-2">{weatherData.cityName}</h3>
          <img
            src={weatherData.icon}
            alt="Weather Icon"
            className="mx-auto mb-4"
          />
          <h3 className="text-4xl font-semibold">{Math.round(weatherData.temp)}°C</h3>
          <p className="text-gray-400">{weatherData.condition}</p>
        </div>
        <div className="flex justify-between text-sm text-gray-400 mb-4">
          <div>
            <p>Wind</p>
            <p className="text-white">{weatherData.wind} km/h</p>
          </div>
          <div>
            <p>Humidity</p>
            <p className="text-white">{weatherData.humidity}%</p>
          </div>
        </div>
        <div className="flex justify-between text-sm text-gray-400">
          <div>
            <p>Sunrise</p>
            <p className="text-white">{weatherData.sunrise}</p>
          </div>
          <div>
            <p>Sunset</p>
            <p className="text-white">{weatherData.sunset}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
