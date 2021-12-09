import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import Main from './components/Main/Main';
import { getPokemon, getTypes } from './services/pokemon';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState('all');
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');
  const [order, setOrder] = useState('asc');

  useEffect(() => {
    let timer;
    const fetchData = async () => {
      const data = await getPokemon(query, order, selectedType);
      setPokemon(data.results);
      timer = setTimeout(() => {
        setLoading(false);
      }, 1000);
    };
    if (loading) {
      fetchData();
    }
    return () => {
      clearInterval(timer);
    };
  }, [loading, query, selectedType, order]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTypes();
      setTypes(data);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <Header />
      {loading && <span className="loader"></span>}
      {!loading && (
        <>
          <Search
            query={query}
            setQuery={setQuery}
            setLoading={setLoading}
            types={types}
            selectedType={selectedType}
            setSelectedType={setSelectedType}
            order={order}
            setOrder={setOrder}
          />
          <Main pokemon={pokemon} />
        </>
      )}
    </div>
  );
}

export default App;
