import React from 'react';
import './Card.css';

export default function Card({ name, image, type1, hp, defense }) {
  return (
    <div className="Card">
      <img className="poke-image" src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="details">
        <p>HP: {hp}</p>
        <p>Defense: {defense}</p>
        <p>Type: {type1}</p>
      </div>
    </div>
  );
}
