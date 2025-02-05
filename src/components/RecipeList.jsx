import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const RecipeList = () => {
  const navigate = useNavigate();
  const { recipes, status, error } = useSelector((state) => state.recipes);

  const handleRecipeClick = (recipeId) => {
    // Navigate to the recipe details page
    navigate(`/recipe/${recipeId}`);
  };

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;

  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div
          key={recipe.recipe.uri}
          className="recipe-card"
          onClick={() => handleRecipeClick(recipe.recipe.uri.split('_')[1])} // Extract recipe ID from URI
        >
          <img src={recipe.recipe.image} alt={recipe.recipe.label} />
          <h3>{recipe.recipe.label}</h3>
          <p>{recipe.recipe.source}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;