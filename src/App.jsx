import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import "./styles/App.css";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);

  // Dynamically set background based on weather conditions
  useEffect(() => {
    const root = document.documentElement;

    if (!weatherData) {
      root.style.setProperty("--background-image", "url('/assets/default.jpg')");
    } else {
      const weatherCondition = weatherData.weather[0].main;

      switch (weatherCondition) {
        case "Rain":
          root.style.setProperty("--background-image", "url('/assets/rainy.jpg')");
          break;
        case "Clear":
          root.style.setProperty("--background-image", "url('/assets/clear.jpg')");
          break;
        case "Clouds":
          root.style.setProperty("--background-image", "url('/assets/cloudy.jpg')");
          break;
        case "Snow":
          root.style.setProperty("--background-image", "url('/assets/snow.jpg')");
          break;
        default:
          root.style.setProperty("--background-image", "url('/assets/default.jpg')");
      }
    }
  }, [weatherData]);

  return (
    <div className="App">
      <img src="/assets/logo.png" alt="Logo" className="logo" />
      <h1>RS OpenWeather App</h1>
      <SearchBar setWeatherData={setWeatherData} />
      <WeatherCard weatherData={weatherData} />
    </div>
  );
};

export default App;
