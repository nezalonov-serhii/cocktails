import styled from 'styled-components';
import 'react-loading-skeleton/dist/skeleton.css';

export const SkeletonSection = styled.section`
  width: 100%;
  /* display: flex; */
  flex-wrap: wrap;
  gap: 40px;
  box-sizing: border-box;

  @media screen and (max-width: 479px) {
    padding: 0 15px;
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const SkeletonThumb = styled.div`
  width: 100%;
  & span {
    height: 400px;
  }

  @media screen and (max-width: 1279px) {
    margin-bottom: 20px;
  }
  @media screen and (min-width: 1280px) {
    width: calc(50% - 20px);
    & span {
      height: 500px;
    }
  }
`;

export const SkeletonWrapInstruction = styled.div`
  background-color: #d5d5d5;
  border-radius: 10px;
  padding: 20px 30px;

  @media screen and (min-width: 1280px) {
    width: calc(50% - 80px);
  }
`;

export const SkeletonInstruction = styled.div`
  margin-bottom: 25px;
`;

export const SkeletonIngredients = styled.ul`
  list-style: none;
  margin-bottom: 25px;
`;

export const SkeletonIngredient = styled.li`
  width: 80%;
`;
