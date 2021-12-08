import React from 'react';
import './Main.css';
import Card from '../Card/Card';
import Background from '../../background.png';

export default function Main({ pokemon }) {
  return (
    <div className="Main" style={{ backgroundImage: `url(${Background})` }}>
      {pokemon.map((poke) => (
        <Card
          key={poke.id}
          name={poke.pokemon}
          image={poke.url_image}
          hp={poke.hp}
          defense={poke.defense}
          type1={poke.type_1}
        />
      ))}
    </div>
  );
}
