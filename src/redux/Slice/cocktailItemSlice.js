import { createSlice } from '@reduxjs/toolkit';
import { fetchCocktails } from 'redux/thunk/cocktailsThunk';

const initialState = {
  cocktail: {},
  isLoading: false,
  isAlcoholic: false,
  error: '',
};

export const cocktailItemsSlice = createSlice({
  name: 'randomCocktail',
  initialState,
  reducers: {
    isAlcoholic(state, action) {
      if (action.payload === 'Alcoholic') {
        state.isAlcoholic = true;
      } else {
        state.isAlcoholic = false;
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCocktails.pending, (state, action) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(fetchCocktails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cocktail = action.payload;
      })
      .addCase(fetchCocktails.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});
