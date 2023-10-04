import { useFetchCollectionQuery } from '@/redux/features/news/collectionApi';

import NewsCard from './Card';

const FeaturedNews = () => {
  // const [skip, setSkip] = useState(true);

  const { data, isError } = useFetchCollectionQuery(
    'featured'
    // {
    //   skip,
    // }
  );
  if (data) {
    console.log(data.items);
  }
  if (isError) {
    console.log(isError);
  }
  return (
    <div className="my-4">
      {!isError && (
        <div className="grid grid-cols-3 gap-3  auto-rows-auto auto-cols-auto grid-flow-dense	">
          {data?.items?.map((item: any, index: number) => (
            <NewsCard key={index} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FeaturedNews;
