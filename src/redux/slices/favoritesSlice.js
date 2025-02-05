import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: [],
  reducers: {
    addToFavorites: (state, action) => {
      const recipe = action.payload;
      // Check if the recipe is already in favorites
      if (!state.some((fav) => fav.uri === recipe.uri)) {
        state.push(recipe);
      }
    },
    removeFromFavorites: (state, action) => {
      return state.filter((recipe) => recipe.uri !== action.payload.uri);
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;