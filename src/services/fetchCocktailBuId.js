import axios from 'axios';

export const cocktailBuId = async ({ id }) => {
  try {
    const cocktail = await axios.get(
      `http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    );

    return cocktail.data.drinks[0];
  } catch (error) {
    return Promise.reject(error.message);
  }
};
