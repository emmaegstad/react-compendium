import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import Main from './components/Main/Main';

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <Main />
    </div>
  );
}

export default App;
