import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // <-- Updated to useNavigate
import './SearchBar.css';

function SearchBar() {
  const [isFocused, setIsFocused] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate(); // <-- Initialize useNavigate

  const cities = ["Tel Aviv", "Tokyo", "London", "New York", "Paris"];

  const handleCityClick = (city) => {
    setSearchValue(city);
    setIsFocused(false); // Hide the dropdown after selecting a city

    if (city.toLowerCase() === 'tel aviv') {
      navigate('/tel-aviv'); // <-- Redirect to Tel Aviv page
    }
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Where do you want to go today?"
        className="search-bar-input"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setTimeout(() => setIsFocused(false), 200)} // Delay to allow clicking on dropdown
      />
      {isFocused && (
        <div className="city-dropdown">
          {cities.map((city, index) => (
            <div
              key={index}
              className="city-option"
              onMouseDown={() => handleCityClick(city)} // Use onMouseDown to prevent blur from hiding dropdown too early
            >
              {city}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchBar;