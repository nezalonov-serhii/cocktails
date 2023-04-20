import axios from 'axios';

export const getRandomCocktails = async () => {
  try {
    const randomCocktailsPromise = [];

    for (let i = 0; i < 9; i++) {
      randomCocktailsPromise.push(
        axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
      );
    }

    const promAll = await Promise.all(randomCocktailsPromise);
    return promAll.map(el => {
      return el.data.drinks[0];
    });
  } catch (error) {
    return Promise.reject(error.message);
  }
};
