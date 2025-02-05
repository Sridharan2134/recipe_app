import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchRecipes } from '../redux/slices/recipeSlice';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      dispatch(fetchRecipes({ query }));
    }
  };

  return (
    <form onSubmit={handleSearch} className="search-bar">
      <input
        type="text"
        placeholder="Search for recipes..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;