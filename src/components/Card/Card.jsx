import React from 'react';
import './Card.css';

export default function Card({ name }) {
  return (
    <div className="Card">
      <p>{name}</p>
    </div>
  );
}
