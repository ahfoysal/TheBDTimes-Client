import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import timeAgoFunc from '@/helpers/timeAgo';

const NewsCard = ({ item }) => {
  const hasHeroImage = item?.story?.['hero-image-s3-key'];

  return (
    <Card
      className={`p-0 mt-2 overflow-hidden ${
        hasHeroImage && 'col-span-2 flex flex-row-reverse gap-2 '
      }`}
    >
      <img
        src={
          item?.story?.alternative?.home?.default?.['hero-image']?.[
            'hero-image-url'
          ] ||
          'https://images.prothomalo.com/' + item?.story?.['hero-image-s3-key']
        }
        alt=""
        className={`w-full overflow-hidden ${
          hasHeroImage ? 'h-full object-cover ' : 'max-h-48 object-contain '
        }`}
      />
      <div className="flex flex-col justify-between w-full">
        <CardHeader className="p-3">
          <CardTitle className="line-clamp-2 text-base font-bold">
            {item?.story?.headline}
          </CardTitle>

          <CardDescription
            className={`${hasHeroImage ? 'line-clamp-8 ' : 'line-clamp-3 '}`}
          >
            {item?.story?.summary ||
              item?.story?.alternative?.home?.default?.['hero-image']?.[
                'hero-image-caption'
              ]}
          </CardDescription>
        </CardHeader>

        <CardFooter className="text-xs p-3">
          {timeAgoFunc(item?.story?.['published-at'])}
        </CardFooter>
      </div>
    </Card>
  );
};

export default NewsCard;
