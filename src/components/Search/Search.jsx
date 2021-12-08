import React from 'react';
import './Search.css';

export default function Search() {
  return (
    <div className="Search">
      <input className="search-input" type="text" placeholder="Search pokemon" />
      <button className="search-submit">
        <img src={process.env.PUBLIC_URL + '/assets/pokeball.png'} />
      </button>
    </div>
  );
}
