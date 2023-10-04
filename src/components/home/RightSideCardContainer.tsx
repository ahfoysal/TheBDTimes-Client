import { useFetchCollectionQuery } from '@/redux/features/news/collectionApi';

import React from 'react';
import SideCard from './SideCard';
interface RightSideCardContainerProps {
  collection: string;
}

const RightSideCardContainer: React.FC<RightSideCardContainerProps> = ({
  collection,
}) => {
  const { data, isError } = useFetchCollectionQuery(collection);
  if (data) {
    console.log(data.items);
  }
  if (isError) {
    console.log(isError);
  }
  return (
    <div>
      {!isError && (
        <div className="grid grid-cols-1 gap-1  auto-rows-auto auto-cols-auto grid-flow-dense	">
          {data?.items.slice(0, 5)?.map((item: any, index: number) => (
            <SideCard key={index} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default RightSideCardContainer;
