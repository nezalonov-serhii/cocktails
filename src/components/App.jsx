import { Route, Routes } from 'react-router-dom';

import Layout from './Layout/Layout';
import Home from 'page/Home/Home';
import CocktailsItem from 'page/CocktailItem/CocktailItem';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/cocktail/:id" element={<CocktailsItem />}></Route>
      </Route>
    </Routes>
  );
};
