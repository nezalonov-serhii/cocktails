import styled from 'styled-components';

export const CocktailsSection = styled.section`
  padding: 10px 0;
  @media screen and (min-width: 480px) {
    padding: 30px 0;
  }
`;

export const CocktailsLists = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  list-style: none;

  @media screen and (min-width: 480px) {
    gap: 20px;
  }
`;

export const CocktailsItem = styled.li`
  flex-basis: 100%;

  @media screen and (min-width: 480px) {
    flex-basis: calc((100% - 20px) / 2);
  }

  @media screen and (min-width: 1280px) {
    flex-basis: calc((100% - 40px) / 3);
  }
`;
