import PropTypes from "prop-types";

const WeatherCard = ({ weatherData }) => {
  if (!weatherData) return null;

  const { name, main, weather } = weatherData;
  // eslint-disable-next-line react/prop-types
  const weatherCondition = weather[0]?.main || "Unknown";

  return (
    <div className="weather-report">
      <h2>Weather in {name}</h2>
      <p>Temperature: {main.temp} °C</p>
      <p>Humidity: {main.humidity}%</p>
      <p>Condition: {weatherCondition.toLowerCase()}</p>
    </div>
  );
};

WeatherCard.propTypes = {
  weatherData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    main: PropTypes.shape({
      temp: PropTypes.number.isRequired,
      humidity: PropTypes.number.isRequired,
    }).isRequired,
    weather: PropTypes.arrayOf(
      PropTypes.shape({
        description: PropTypes.string.isRequired,
      })
    ).isRequired,
  }),
};

export default WeatherCard;
