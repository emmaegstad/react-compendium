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
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    let timer;
    const fetchData = async () => {
      const data = await getPokemon(query, order, selectedType, currentPage);
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
  }, [loading, query, selectedType, order, currentPage]);

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
      {loading && (
        <div className="loading-container animate__animated animate__pulse">
          <span className="loader">Loading...</span>
        </div>
      )}
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
          <Main
            pokemon={pokemon}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            loading={loading}
            setLoading={setLoading}
          />
        </>
      )}
    </div>
  );
}

export default App;
