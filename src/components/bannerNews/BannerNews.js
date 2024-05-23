import React, { useEffect, useState } from 'react';
import moment from 'moment-timezone';
import './BannerNews.css';

import { FaCloud, FaCloudSun, FaCloudMoon, FaCloudRain, FaCloudShowersHeavy, FaCloudBolt, FaSun, FaMoon } from "react-icons/fa6";

function BannerNews() {
  const [weatherData, setWeatherData] = useState(null);

  const getWeather = async () => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=Joinville&units=metric&appid=fac10a74a804d851c82efe78bb6fa468&lang=pt_br`;
      const response = await fetch(url);
      const data = await response.json();
      localStorage.setItem('weather', JSON.stringify(data));
      setWeatherData(data);
    } catch (error) {
      console.error('Failed to fetch weather data:', error);
    }
  }

  useEffect(() => {
    const weather = localStorage.getItem('weather');
    if (weather) {
      setWeatherData(JSON.parse(weather));
    } else {
      getWeather();
    }
  }, []);

  if (!weatherData) {
    return <div>Carregando...</div>;
  }

  const {
    weather: [{ description }],
    main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
    wind: { speed, deg },
    clouds: { all: cloudiness }
  } = weatherData;

  const roundedTemp = Math.floor(temp);

  const now = moment().tz('America/Sao_Paulo');
  const hour = now.hour();

  const isDaytime = hour >= 6 && hour < 18;

  return (
    <div className='container_banner_news'>
      <div className='box_temp'>
        <p>{roundedTemp}°C</p>
      </div>
      <div className='icon_weather'>
        {isDaytime && description === 'céu limpo' && <FaSun />}
        {!isDaytime && description === 'céu limpo' && <FaMoon />}
        {isDaytime && description === 'algumas nuvens' && <FaCloudSun />}
        {!isDaytime && description === 'algumas nuvens' && <FaCloudMoon />}
        {description === 'nuvens dispersas' && <FaCloud />}
        {description === 'chuva leve' && <FaCloudRain />}
        {description === 'chuva moderada' && <FaCloudShowersHeavy />}
        {description === 'trovoada' && <FaCloudBolt />}
      </div>
      <div className='box_details'>
        <p>Clima: {description}</p>
        <p>Sensação Térmica: {Math.floor(feels_like)}°C</p>
        <p>Temperatura Mínima: {Math.floor(temp_min)}°C</p>
        <p>Temperatura Máxima: {Math.floor(temp_max)}°C</p>
        <p>Umidade: {humidity}%</p>
        <p>Vento: {speed} m/s, Direção: {deg}°</p>
        <p>Nuvens: {cloudiness}%</p>
      </div>
    </div>
  );
}

export default BannerNews;
