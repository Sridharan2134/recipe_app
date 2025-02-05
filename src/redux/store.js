import { configureStore } from '@reduxjs/toolkit';
import recipeReducer from './slices/recipeSlice';
import favoritesReducer from './slices/favoritesSlice';

export const store = configureStore({
  reducer: {
    recipes: recipeReducer,
    favorites: favoritesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable the serializable state check
    }),
});
