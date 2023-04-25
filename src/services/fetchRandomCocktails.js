import axios from 'axios';

export const getRandomCocktails = async () => {
  try {
    const cocktailsPromise = [];

    cocktailsPromise.push(
      axios.get(
        'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic'
      )
    );

    cocktailsPromise.push(
      axios.get(
        'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic'
      )
    );

    const promAll = await Promise.all(cocktailsPromise);

    return promAll.flatMap(el => {
      let allCocktails = [];
      return (allCocktails = [...allCocktails, ...el.data.drinks]);
    });
  } catch (error) {
    return Promise.reject(error.message);
  }
};
