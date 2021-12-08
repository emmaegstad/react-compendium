import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import Main from './components/Main/Main';
import { getPokemon } from './services/pokemon';
import Background from './background.png';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPokemon(query);
      setPokemon(data.results);
      setLoading(false);
    };
    if (loading) {
      fetchData();
    }
  }, [loading, query]);

  return (
    <div className="App">
      <Header />
      {loading && <span className="loader"></span>}
      {!loading && (
        <>
          <Search query={query} setQuery={setQuery} setLoading={setLoading} />
          <Main pokemon={pokemon} />
        </>
      )}
    </div>
  );
}

export default App;
