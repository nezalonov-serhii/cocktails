import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { cocktailItemsSlice } from 'redux/Slice/cocktailItemSlice';
import {
  CocktailSection,
  Ingredient,
  Ingredients,
  Instruction,
  Thumb,
  WrapInstruction,
} from './Cocktail.styled';
import { fetchCocktails } from 'redux/thunk/cocktailsThunk';
import { SkeletonCoctails } from 'components/Skeleton/SkeletonCoctails/SkeletonCoctails';

const Cocktail = () => {
  const id = useParams();
  const dispatch = useDispatch();
  const cocktail = useSelector(state => state.cocktailById.cocktail);
  const isAlcoholic = useSelector(state => state.cocktailById.isAlcoholic);
  const isLoading = useSelector(state => state.cocktailById.isLoading);

  console.log(isLoading);

  const cocktailComponents = getIngredients();

  useEffect(() => {
    dispatch(fetchCocktails(id));
    dispatch(cocktailItemsSlice.actions.isAlcoholic(cocktail.strAlcoholic));
  }, [cocktail.strAlcoholic, dispatch, id]);

  function getIngredients() {
    const allComponents = [];

    for (let i = 1; i < 16; i++) {
      let ingredientsStr = `strIngredient${i}`;
      let measureStr = `strMeasure${i}`;

      if (!cocktail[ingredientsStr] && !cocktail[measureStr])
        return allComponents;

      allComponents.push({
        ingredient: cocktail[ingredientsStr],
        measure: cocktail[measureStr],
      });
    }
  }

  return (
    <CocktailSection className="container">
      {isLoading && <SkeletonCoctails />}
      {!isLoading && (
        <>
          <Thumb isAlcoholic={isAlcoholic}>
            <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
            <h2>{cocktail.strDrink}</h2>
            <p>{cocktail.strAlcoholic}</p>
          </Thumb>
          <WrapInstruction>
            <Instruction>{cocktail.strInstructions}</Instruction>

            <Ingredients>
              {cocktailComponents.map(({ ingredient, measure }) => {
                return (
                  <Ingredient key={nanoid()}>
                    <p>{ingredient}</p>
                    <p>{measure}</p>
                  </Ingredient>
                );
              })}
            </Ingredients>
          </WrapInstruction>
        </>
      )}
    </CocktailSection>
  );
};

export default Cocktail;
