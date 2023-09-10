import React from 'react';
import './App.css';

import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Footer from './components/Footer';
import RandomRecipes from './components/Random';

function App() {
  return (
    <>
      <Header />
      <SearchBar />
      <RandomRecipes />
      <Footer />
    </>
  );
}

export default App;
