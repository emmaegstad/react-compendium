import React from 'react';
import './Main.css';
import Card from '../Card/Card';
import { getPokemon } from '../../services/pokemon';

export default function Main({ pokemon }) {
  return (
    <div className="Main">
      {pokemon.map((poke) => (
        <Card key={poke.id} name={poke.pokemon} />
      ))}
    </div>
  );
}
