import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const SideCard: React.FC<any> = ({ item }) => {
  return (
    <Link to={`/news/${item.id}`}>
      <Card className={`mt-2 overflow-hidden col-span-2 flex flex-row `}>
        <img
          src={
            item?.story?.alternative?.home?.default?.['hero-image']?.[
              'hero-image-url'
            ] ||
            'https://images.prothomalo.com/' +
              item?.story?.['hero-image-s3-key']
          }
          alt=""
          className={`w-[150px] overflow-hidden  h-[100px] object-cover  
        }`}
        />
        <div className="flex flex-col justify-between w-full">
          <CardHeader className="p-1.5">
            <CardTitle className="line-clamp-4 text-sm font-normal">
              {item?.story?.headline}
            </CardTitle>
          </CardHeader>
        </div>
      </Card>
    </Link>
  );
};

export default SideCard;
