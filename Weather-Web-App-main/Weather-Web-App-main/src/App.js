import React, { useState } from 'react';

import { fetchWeather } from './api/fetchWeather';
import './App.css';

const App = () => {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});
    
    const search = async (e) => {
        if(e.key === 'Enter') {
            const data = await fetchWeather(query);

            setWeather(data);
            setQuery('');
            
        }
    }

    return (
        <center>
        <div className="main-container">
       
            
            <input src="" type="text"className="search"placeholder="Enter City.."value={query}onChange={(e) => setQuery(e.target.value)}onKeyPress={search}/>
           
            

            
            
            
            {weather.main && (
                <div className="city">
                    <h2 className="city-name">Weather in 
                        <span> {weather.name}</span>
                        <sup>{weather.sys.country}</sup>
                    </h2>
                    <div className="city-temp">
                        {Math.round(weather.main.temp)}
                        <sup>&deg;C</sup>
                    </div>

                    <div className="info">
                        <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
                        <p>{weather.weather[0].description}</p>
                    </div>

                    <div className="city-wind">Wind Speed: {Math.round(weather.wind.speed)} Km/h
                        {/* <sup>km/h</sup> */}
                         
                    </div>

                    <div className="humidity">Humidity: {Math.round(weather.main.humidity)}%
               
                         
                    </div>

                    <div className="pressure">Pressure: {Math.round(weather.main.pressure)} hPa
                       
                         
                    </div>
                    

                    
                </div>
            )}
        </div>
        </center>
    );
}

export default App;