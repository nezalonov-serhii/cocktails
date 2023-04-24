import Skeleton from 'react-loading-skeleton';

import 'react-loading-skeleton/dist/skeleton.css';
import {
  SkeletonIngredient,
  SkeletonIngredients,
  SkeletonInstruction,
  SkeletonSection,
  SkeletonThumb,
  SkeletonWrapInstruction,
} from './SkeletonCoctails.styled';

export const SkeletonCoctails = () => {
  return (
    <SkeletonSection>
      <SkeletonThumb>
        <Skeleton />
      </SkeletonThumb>
      <SkeletonWrapInstruction>
        <SkeletonInstruction>
          <Skeleton></Skeleton>
          <Skeleton></Skeleton>
          <Skeleton></Skeleton>
        </SkeletonInstruction>

        <SkeletonIngredients>
          <SkeletonIngredient>
            <Skeleton></Skeleton>
          </SkeletonIngredient>
          <SkeletonIngredient>
            <Skeleton></Skeleton>
          </SkeletonIngredient>
          <SkeletonIngredient>
            <Skeleton></Skeleton>
          </SkeletonIngredient>
        </SkeletonIngredients>

        <SkeletonInstruction>
          <Skeleton></Skeleton>
          <Skeleton></Skeleton>
          <Skeleton></Skeleton>
        </SkeletonInstruction>
      </SkeletonWrapInstruction>
    </SkeletonSection>
  );
};
