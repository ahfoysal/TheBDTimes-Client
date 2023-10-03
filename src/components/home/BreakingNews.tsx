import { useFetchCollectionQuery } from '@/redux/features/news/collectionApi';
import { Button } from '@nextui-org/button';
import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const BreakingNews: React.FC = () => {
  // const [skip, setSkip] = useState(true);

  const { data, isError } = useFetchCollectionQuery(
    'latest'
    // {
    //   skip,
    // }
  );

  if (isError) {
    console.log(isError);
  }
  return (
    <div className=" p-2 rounded-md flex bg-[#18181B]">
      <Button className="bg-[#27272A] rounded-lg py-1 px-4 text-white">
        Headlines
      </Button>
      {!isError && (
        <Marquee loop={0} direction="left" pauseOnHover speed={100}>
          {data?.items?.map((item: any, index: number) => (
            <Link to={'/'} className="mr-10" key={index}>
              {item?.story?.headline} !!!
            </Link>
          ))}
        </Marquee>
      )}
    </div>
  );
};

export default BreakingNews;
