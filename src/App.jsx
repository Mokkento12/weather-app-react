import { useState } from "react";
import SearchBar from "./components/SearchBar.jsx";
import WeatherDisplay from "./components/WeatherDisplay.jsx";
import "./style.css";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);

  const handleSearch = async (city) => {
    console.log(`Ищем погоду в ${city}`);

    const apiKey = "d6f2689e6eaf6785ebf5e4883c8ad7bc";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=ru&appid=${apiKey}`;

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Город не найден");
      }

      const data = await response.json();

      const formatedData = {
        city: data.name,
        temp: data.main.temp,
        description: data.weather[0].description,
        humidity: data.main.humidity,
      };

      setWeatherData(formatedData);
    } catch (error) {
      console.error(error.message);
      alert("Не удалось получить данные. Проверьте название города.");
    }
  };

  return (
    <div className="app">
      <h1>Прогноз погоды</h1>

      <SearchBar onSearch={handleSearch} />

      {weatherData && <WeatherDisplay data={weatherData} />}
    </div>
  );
};

export default App;
