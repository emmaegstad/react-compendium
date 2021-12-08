import React from 'react';
import './Main.css';
import Card from '../Card/Card';

export default function Main({ pokemon }) {
  return (
    <div className="Main">
      {pokemon.map((poke) => (
        <Card key={poke.id} name={poke.pokemon} image={poke.url_image} />
      ))}
    </div>
  );
}
