import { configureStore } from '@reduxjs/toolkit';
import { randomCocktailsSlice } from './Slice/randomCocktailSlice';
import { cocktailItemsSlice } from './Slice/cocktailItemSlice';

export const store = configureStore({
  reducer: {
    cocktailsRandom: randomCocktailsSlice.reducer,
    cocktailById: cocktailItemsSlice.reducer,
  },
});
