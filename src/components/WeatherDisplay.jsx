import PropTypes from "prop-types";

const WeatherDisplay = ({ data }) => {
  if (!data) return null;
  return (
    <div className="weather-display">
      <h2>Погода в {data.city}</h2>
      <p>Температура: {data.temp}°C</p>
      <p>Описание:{data.description}</p>
      <p>Влажность: {data.humidity}%</p>
    </div>
  );
};

WeatherDisplay.propTypes = {
  data: PropTypes.shape({
    city: PropTypes.string.isRequired,
    temp: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    description: PropTypes.string.isRequired,
    humidity: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      .isRequired,
  }).isRequired,
};

export default WeatherDisplay;
