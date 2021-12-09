import React from 'react';
import './Main.css';
import Card from '../Card/Card';
import Background from '../../background.png';

export default function Main({ pokemon, loading, setLoading, currentPage, setCurrentPage }) {
  const handleNextPage = () => {
    setCurrentPage((prevState) => ++prevState);
    setLoading(true);
  };

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
      <button className="next" onClick={handleNextPage}>
        NEXT
      </button>
    </div>
  );
}
