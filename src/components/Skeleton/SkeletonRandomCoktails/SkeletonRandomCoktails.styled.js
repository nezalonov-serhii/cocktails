import Skeleton from 'react-loading-skeleton';
import styled from 'styled-components';
import 'react-loading-skeleton/dist/skeleton.css';

export const SkeletonLists = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  list-style: none;

  @media screen and (min-width: 480px) {
    gap: 20px;
  }
`;

export const SkeletonItems = styled.li`
  flex-basis: 100%;
  height: 400px;

  @media screen and (min-width: 480px) {
    flex-basis: calc((100% - 20px) / 2);
  }

  @media screen and (min-width: 1280px) {
    flex-basis: calc((100% - 40px) / 3);
  }
`;

export const SkeletonItem = styled(Skeleton)`
  height: 400px;
`;
