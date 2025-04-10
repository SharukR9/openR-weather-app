import { useState } from "react";
import "./SearchBar.css"; // Assuming you have this CSS file

const SearchBar = ({ setWeatherData }) => {
  const [city, setCity] = useState("");
  const [error, setError] = useState("");
  const API_KEY = "your_api_key"; // Replace with your actual API key

  const fetchWeatherData = async () => {
    if (!city.trim()) {
      setError("Please enter a city name");
      return;
    }

    try {
      setError("");
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      
      if (!response.ok) {
        throw new Error("City not found");
      }
      
      const data = await response.json();
      setWeatherData(data);
    } catch (err) {
      setError(err.message);
      setWeatherData(null);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent form submission default behavior
      fetchWeatherData();
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyPress={handleKeyPress}
        className="search-input"
      />
      <button onClick={fetchWeatherData} className="search-button">
        Search
      </button>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default SearchBar;
