import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../redux/slices/favoritesSlice';

const RecipeDetail = () => {
  const { recipeId } = useParams();
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes.recipes);
  const favorites = useSelector((state) => state.favorites);

  const recipe = recipes.find((r) => r.recipe.uri === `http://www.edamam.com/ontologies/edamam.owl#recipe_${recipeId}`);

  if (!recipe) {
    return <p>Recipe not found!</p>;
  }

  const { label, image, source, url, ingredients, totalTime, yield: servings } = recipe.recipe;

  // Check if the recipe is already in favorites
  const isFavorite = favorites.some((fav) => fav.uri === recipe.recipe.uri);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(recipe.recipe));
    } else {
      dispatch(addToFavorites(recipe.recipe));
    }
  };

  return (
    <div className="recipe-detail">
      <h1>{label}</h1>
      <img src={image} alt={label} className="recipe-image" />
      <p>Source: <a href={url} target="_blank" rel="noopener noreferrer">{source}</a></p>
      <p>Preparation Time: {totalTime} minutes</p>
      <p>Servings: {servings}</p>

      <button onClick={handleToggleFavorite}>
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>

      <h2>Ingredients</h2>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient.text}</li>
        ))}
      </ul>

      <h2>Instructions</h2>
      <p>For detailed instructions, visit the <a href={url} target="_blank" rel="noopener noreferrer">original recipe</a>.</p>
    </div>
  );
};

export default RecipeDetail;