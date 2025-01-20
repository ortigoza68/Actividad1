import React from "react";
import "../styles/SearchBar.css";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Buscar libros..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar__input"
      />
      <button className="search-bar__button">
        <span role="img" aria-label="lupa">
          <p>buscar</p>
        </span>
      </button>
    </div>
  );
};

export default SearchBar;