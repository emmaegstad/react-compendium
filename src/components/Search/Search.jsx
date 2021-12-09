import React from 'react';
import './Search.css';

export default function Search({
  query,
  setQuery,
  setLoading,
  types,
  selectedType,
  setSelectedType,
}) {
  return (
    <div className="Search">
      <input
        className="search-input"
        type="text"
        placeholder="Find Pokemon"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <select
        className="search-select"
        value={selectedType}
        onChange={(e) => setSelectedType(e.target.value)}
      >
        <option value="all">All</option>
        {types.map((type) => {
          return (
            <option key={type} value={type}>
              {type}
            </option>
          );
        })}
      </select>
      <button className="search-submit" onClick={() => setLoading(true)}>
        <img src={process.env.PUBLIC_URL + '/assets/pokeball.png'} />
      </button>
    </div>
  );
}
