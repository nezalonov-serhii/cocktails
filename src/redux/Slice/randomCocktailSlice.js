import { createSlice } from '@reduxjs/toolkit';
import { fetchRandomCocktails } from 'redux/thunk/cocktailsThunk';

const initialState = {
  randomCocktails: [],
  isLoading: false,
  error: '',
};

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

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
        state.randomCocktails = shuffle(action.payload);
      })
      .addCase(fetchRandomCocktails.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});
