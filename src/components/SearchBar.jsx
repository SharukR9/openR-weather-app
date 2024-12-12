import PropTypes from "prop-types";
import { useState } from "react";
import axios from "axios";

const SearchBar = ({ setWeatherData }) => {
  const [city, setCity] = useState("");

  const handleSearch = async () => {
    if (city.trim() === "") {
      alert("Please enter a city name.");
      return;
    }

    try {
      const apiKey = "73a4f3ad4ddbcfde205c287cbc7b11f6"; // Replace with your OpenWeather API key
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
      );
      setWeatherData(response.data);
    } catch {
      alert("City not found. Please try again.");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

SearchBar.propTypes = {
  setWeatherData: PropTypes.func.isRequired,
};

export default SearchBar;
