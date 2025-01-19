import { useState } from "react";
import PropTypes from "prop-types";

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handlerSubmit = (e) => {
    e.preventDefault();

    if (city.trim()) {
      onSearch(city);

      setCity("");
    }
  };
  return (
    <form onSubmit={handlerSubmit} className="search-bar">
      <input
        type="text"
        placeholder="Введите название города"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button type="submit">Искать</button>
    </form>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
