import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchRandomCocktails } from 'redux/thunk/cocktailsThunk';
import { SkeletonRandomCoktails } from 'components/Skeleton/SkeletonRandomCoktails/SkeletonRandomCoktails';

import {
  CocktailsItem,
  CocktailsLists,
  CocktailsSection,
} from './RandomCocktails.styled';
import InfiniteScroll from 'utils/infinitiScroll';

const RandomCocktails = () => {
  const dispatch = useDispatch();
  const cocktails = useSelector(state => state.cocktailsRandom.randomCocktails);
  const isLoading = useSelector(state => state.cocktailsRandom.isLoading);

  useEffect(() => {
    dispatch(fetchRandomCocktails());
  }, [dispatch]);

  const renderItem = item => {
    return (
      <CocktailsItem key={item.idDrink}>
        <Link to={`/cocktail/${item.idDrink}`}>
          <img src={item.strDrinkThumb} alt={item.strDrink} />
        </Link>
      </CocktailsItem>
    );
  };

  return (
    <CocktailsSection>
      <div className="container">
        {isLoading && <SkeletonRandomCoktails quantity={6} />}
        {!isLoading && (
          <CocktailsLists>
            <InfiniteScroll
              data={cocktails} // Массив данных, которые вы хотите показать
              renderItem={renderItem} // Функция, которая возвращает рендеринг каждого элемента
            />
          </CocktailsLists>
        )}
      </div>
    </CocktailsSection>
  );
};

export default RandomCocktails;
