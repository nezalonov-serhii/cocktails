import styled from 'styled-components';

export const CocktailSection = styled.section`
  padding: 20px 0;

  @media screen and (min-width: 1280px) {
    display: flex;
    gap: 40px;
  }
`;

export const Thumb = styled.div`
  position: relative;
  top: 0;
  left: 0;

  border-radius: 10px;
  overflow: hidden;

  @media screen and (max-width: 1279px) {
    margin-bottom: 20px;
  }

  & h2 {
    position: absolute;
    bottom: 0;
    left: 0;

    width: 100%;

    background-color: rgb(128 128 131 / 50%);
    color: #161616;
    text-align: center;
  }

  & p {
    position: absolute;
    top: 0;
    right: 0;
    padding: 5px 8px;
    border-bottom-left-radius: 10px;

    background-color: ${({ isAlcoholic }) =>
      isAlcoholic ? 'rgb(160 35 0 / 50%)' : 'rgb(1 121 4 / 50%)'};
    color: #fff;
    font-size: 18px;
    font-weight: 600;
  }
`;

export const WrapInstruction = styled.div`
  background-color: #d5d5d5;
  border-radius: 10px;
  padding: 20px 30px;
`;

export const Instruction = styled.p`
  margin-bottom: 15px;
  font-size: 18px;
`;

export const Ingredients = styled.ul`
  list-style: none;
`;

export const Ingredient = styled.li`
  display: flex;
  justify-content: space-between;
  border-bottom: solid 1px black;

  font-size: 18px;
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

//   @media screen and (min-width: 480px) {
//     width: 480px;
//   }

//   @media screen and (min-width: 1280px) {
//     width: 1280px;
//   }
