import React from 'react';
import './Header.css';
import HeaderImg from '../../HeaderImg.png';
import 'animate.css';

export default function Header() {
  return (
    <div className="Header">
      <a href=".">
        <img
          className="header-img animate__animated animate__bounceInDown"
          src={HeaderImg}
          alt="pokedex logo"
        />
      </a>
    </div>
  );
}
