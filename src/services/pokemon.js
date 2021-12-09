export async function getPokemon(query, order, selectedType, currentPage) {
  const params = new URLSearchParams();
  params.set('pokemon', query);
  params.set('direction', order);
  params.set('sort', 'pokemon');

  if (selectedType !== 'all') {
    params.set('type', selectedType);
  }

  params.set('page', currentPage);

  const response = await fetch(
    `https://pokedex-alchemy.herokuapp.com/api/pokedex?${params.toString()}`
  );
  const data = await response.json();
  return data;
}

export async function getTypes() {
  const response = await fetch('https://pokedex-alchemy.herokuapp.com/api/pokedex/types');
  const data = await response.json();
  return data.map((item) => item.type);
}
