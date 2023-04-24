import {
  SkeletonItem,
  SkeletonItems,
  SkeletonLists,
} from './SkeletonRandomCoktails.styled';
import 'react-loading-skeleton/dist/skeleton.css';

export const SkeletonRandomCoktails = ({ quantity }) => {
  const arr = [];

  for (let i = 0; i < quantity; i++) {
    arr.push(<SkeletonItem key={i} />);
  }

  return (
    <SkeletonLists>
      {arr.map(el => (
        <SkeletonItems>{el}</SkeletonItems>
      ))}
    </SkeletonLists>
  );
};
