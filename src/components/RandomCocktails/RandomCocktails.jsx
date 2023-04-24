import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { nanoid } from 'nanoid';

import { fetchRandomCocktails } from 'redux/thunk/cocktailsThunk';
import { SkeletonRandomCoktails } from 'components/Skeleton/SkeletonRandomCoktails/SkeletonRandomCoktails';

import {
  CocktailsItem,
  CocktailsLists,
  CocktailsSection,
} from './RandomCocktails.styled';

const RandomCocktails = () => {
  const dispatch = useDispatch();
  const cocktails = useSelector(state => state.cocktailsRandom.randomCocktails);
  const isLoading = useSelector(state => state.cocktailsRandom.isLoading);

  useEffect(() => {
    dispatch(fetchRandomCocktails());
  }, [dispatch]);

  return (
    <CocktailsSection>
      <div className="container">
        {isLoading && <SkeletonRandomCoktails quantity={6} />}
        {!isLoading && (
          <CocktailsLists>
            {cocktails.map(cocktail => {
              return (
                <CocktailsItem key={nanoid()}>
                  <Link to={`/cocktail/${cocktail.idDrink}`}>
                    <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
                  </Link>
                </CocktailsItem>
              );
            })}
          </CocktailsLists>
        )}
      </div>
    </CocktailsSection>
  );
};

export default RandomCocktails;
