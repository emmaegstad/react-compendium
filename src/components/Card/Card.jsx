import React from 'react';
import './Card.css';

export default function Card({ name, image, type1, hp, defense }) {
  return (
    <div className="Card">
      <p className="name">{name}</p>
      <img className="poke-image animate__animated animate__zoomIn" src={image} alt={name} />
      <div className="details">
        <p>HP: {hp}</p>
        <p>Defense: {defense}</p>
        <p>Type: {type1}</p>
      </div>
    </div>
  );
}
