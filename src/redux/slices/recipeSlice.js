import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://api.edamam.com/search';

export const fetchRecipes = createAsyncThunk(
  'recipes/fetchRecipes',
  async ({ query, from = 0, to = 50 }) => {
    const response = await axios.get(API_URL, {
      params: {
        q: query,
        app_id: 'a5de3521',
        app_key: '28f8a20bd893e2740e68d4bbb349b977',
        from,
        to,
      },
    });
    return response.data.hits;
  }
);

const recipeSlice = createSlice({
  name: 'recipes',
  initialState: {
    recipes: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipes.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.recipes = action.payload;
      })
      .addCase(fetchRecipes.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default recipeSlice.reducer;