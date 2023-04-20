import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getRandomCocktails } from 'services/fetchRandomCocktails';

const initialState = {
  randomCocktails: [],
  isLoading: false,
  error: '',
};

export const fetchRandomCocktails = createAsyncThunk(
  'cocktails/fetchRandom',
  async () => {
    return await getRandomCocktails();
  }
);

export const randomCocktailsSlice = createSlice({
  name: 'randomCocktail',
  initialState,
  reducers: {},
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
