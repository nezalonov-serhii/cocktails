import { createSlice } from '@reduxjs/toolkit';
import { fetchRandomCocktails } from 'redux/thunk/cocktailsThunk';

const initialState = {
  randomCocktails: [],
  isLoading: false,
  error: '',
};

export const randomCocktailsSlice = createSlice({
  name: 'randomCocktail',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchRandomCocktails.pending, (state, action) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(fetchRandomCocktails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.randomCocktails = action.payload;
      })
      .addCase(fetchRandomCocktails.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});
