import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromFavorites } from '../redux/slices/favoritesSlice';

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  const handleRemoveFavorite = (recipe) => {
    dispatch(removeFromFavorites(recipe));
  };

  return (
    <div className="favorites">
      <h2>Your Favorites</h2>
      {favorites.length === 0 ? (
        <p>No favorites added yet.</p>
      ) : (
        <div className="favorites-list">
          {favorites.map((recipe) => (
            <div key={recipe.uri} className="favorite-card">
              <img src={recipe.image} alt={recipe.label} />
              <h3>{recipe.label}</h3>
              <button onClick={() => handleRemoveFavorite(recipe)}>Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;