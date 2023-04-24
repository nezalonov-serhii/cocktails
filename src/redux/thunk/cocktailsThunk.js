import { createAsyncThunk } from '@reduxjs/toolkit';
import { cocktailBuId } from 'services/fetchCocktailBuId';
import { getRandomCocktails } from 'services/fetchRandomCocktails';

export const fetchCocktails = createAsyncThunk(
  'cocktails/fetchCocktail',
  async id => {
    return await cocktailBuId(id);
  }
);

export const fetchRandomCocktails = createAsyncThunk(
  'cocktails/fetchRandom',
  async () => {
    return await getRandomCocktails();
  }
);
