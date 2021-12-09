import React from 'react';
import './Header.css';
import HeaderImg from '../../HeaderImg.png';

export default function Header() {
  return (
    <div className="Header">
      {/* <h1>My Pokédex</h1> */}
      <img className="header-img" src={HeaderImg} alt="pokedex logo" />
    </div>
  );
}
