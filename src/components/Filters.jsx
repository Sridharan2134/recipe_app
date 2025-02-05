import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchRecipes } from '../redux/slices/recipeSlice';

const Filters = () => {
  const [mealType, setMealType] = useState('');
  const [diet, setDiet] = useState('');
  const dispatch = useDispatch();

  const handleFilter = (e) => {
    e.preventDefault();
    const query = `${mealType} ${diet}`.trim();
    if (query) {
      dispatch(fetchRecipes({ query }));
    }
  };

  return (
    <form onSubmit={handleFilter} className="filters">
      <select value={mealType} onChange={(e) => setMealType(e.target.value)}>
        <option value="">Select Meal Type</option>
        <option value="breakfast">Breakfast</option>
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
        <option value="snack">Snack</option>
      </select>

      <select value={diet} onChange={(e) => setDiet(e.target.value)}>
        <option value="">Select Diet</option>
        <option value="vegetarian">Vegetarian</option>
        <option value="vegan">Vegan</option>
        <option value="gluten-free">Gluten-Free</option>
        <option value="low-carb">Low-Carb</option>
      </select>

      <button type="submit">Apply Filters</button>
    </form>
  );
};

export default Filters;