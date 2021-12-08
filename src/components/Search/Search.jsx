import React from 'react';
import './Search.css';

export default function Search({ query, setQuery, setLoading }) {
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
      <button className="search-submit" onClick={() => setLoading(true)}>
        <img src={process.env.PUBLIC_URL + '/assets/pokeball.png'} />
      </button>
    </div>
  );
}
