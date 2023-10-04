import RightSideNav from '@/components/Shared/RightSideNav';
import { useFetchDetailsQuery } from '@/redux/features/news/collectionApi';
import { useParams } from 'react-router-dom';

const NewsDetails = () => {
  const { id } = useParams();
  const { data, isError } = useFetchDetailsQuery(id);
  if (data) {
    console.log(data.story);
  }
  if (isError) {
    console.log(isError);
  }
  return (
    <div className="container mx-auto">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-6">
        <div className="md:col-span-1 lg:col-span-3 ">
          <div className="div">something</div>
        </div>
        <RightSideNav />
      </div>
    </div>
  );
};

export default NewsDetails;
