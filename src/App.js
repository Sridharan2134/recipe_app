import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';
import Favorites from './components/Favorites';
import SearchBar from './components/SearchBar';
import Filters from './components/Filters';
import './App.css';

const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/" className='home'>Home</Link>
        <Link to="/favorites" className='fav'>Favorites</Link>
      </nav>
      <SearchBar />
      <Filters />
      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/recipe/:recipeId" element={<RecipeDetail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </Router>
  );
};

export default App;