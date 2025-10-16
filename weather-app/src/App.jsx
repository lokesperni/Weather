import React, { useState } from "react";
import "./App.css";

function App() {
  const [weather, setWeather] = useState(null);
  const [input, setInput] = useState("");
  const [unit, setUnit] = useState("metric");
  const [darkMode, setDarkMode] = useState(false);

  const API_KEY = "1014179c10b01b69f5ac0d5216d9cfc9";

  async function handleWeather() {
    if (!input) return alert("Please enter a city name.");
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${API_KEY}&units=${unit}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.cod === 200) {
        setWeather(data);
      } else {
        alert("City not found. Please try again.");
        setWeather(null);
      }
    } catch (error) {
      alert("Failed to fetch weather data.");
      setWeather(null);
    }
  }

  const temperatureUnit = unit === "metric" ? "°C" : "°F";

  return (
    <div className={`app ${darkMode ? "dark" : "light"}`}>
      <div className="container">
        <header className="header">
          <h1>🌤 Weather App</h1>
          <div className="toggles">
            <button onClick={() => setUnit(unit === "metric" ? "imperial" : "metric")}>
              {unit === "metric" ? "Show °F" : "Show °C"}
            </button>
            <button onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
            </button>
          </div>
        </header>

        <div className="search-box">
          <input
            type="text"
            placeholder="Enter city name"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleWeather()}
          />
          <button onClick={handleWeather}>Search</button>
        </div>

        {weather && (
          <div className="weather-card">
            <h2>{weather.name}, {weather.sys.country}</h2>
            <p><strong>🌡 Temperature:</strong> {weather.main.temp} {temperatureUnit}</p>
            <p><strong>☁️ Condition:</strong> {weather.weather[0].description}</p>
            <p><strong>💨 Wind:</strong> {weather.wind.speed} m/s</p>
            <p><strong>💧 Humidity:</strong> {weather.main.humidity}%</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
