import React, { useEffect, useState } from 'react';
import './BannerNews.css';

import { FaCloud, FaCloudSun, FaCloudMoon, FaCloudRain, FaCloudShowersHeavy, FaCloudBolt, FaSun, FaMoon } from "react-icons/fa6";

// nuvens dispersas, nublado, céu limpo, chuva leve, chuva moderada, chuva forte

function BannerNews() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const weather = localStorage.getItem('weather');
    if (weather) {
      setWeatherData(JSON.parse(weather));
    }
  }, []);

  if (!weatherData) {
    return <div>Carregando...</div>;
  }

  const {
    weather: [{ description }],
    main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
    wind: { speed, deg },
    clouds: { all: cloudiness },
    name
  } = weatherData;

  const roundedTemp = Math.floor(temp);

  return (
    <div className='container_banner_news'>
      <div className='box_temp'>
        <p>{roundedTemp}°C</p>
      </div>
      <p>Clima: {description}</p>
      <p>Sensação Térmica: {feels_like}°C</p>
      <p>Temperatura Mínima: {temp_min}°C</p>
      <p>Temperatura Máxima: {temp_max}°C</p>
      <p>Umidade: {humidity}%</p>
      <p>Vento: {speed} m/s, Direção: {deg}°</p>
      <p>Nuvens: {cloudiness}%</p>
    </div>
  );
}

export default BannerNews;
