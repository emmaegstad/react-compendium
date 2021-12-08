import React from 'react';
import './Card.css';

export default function Card({ name, image }) {
  return (
    <div className="Card">
      <img className="poke-image" src={image} alt={name} />
      <p>{name}</p>
    </div>
  );
}
