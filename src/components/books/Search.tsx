import {
  HoverCard,
  HoverCardArrow,
  HoverCardContent,
  HoverCardTrigger,
} from '@radix-ui/react-hover-card';
import { Badge } from '../ui/badge';
import { ISearchResult } from '@/redux/features/search/searchSlice';
import { FC, useState } from 'react';
import { useFetchBookQuery } from '@/redux/features/books/bookApi';
import HoverContent from './hoverContent';

interface IProps {
  items: ISearchResult[];
}

const SearchResult: FC<IProps> = ({ items }) => {
  const [skip, setSkip] = useState(true);
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const { data, isLoading, isSuccess, isError } = useFetchBookQuery(
    { id, name },
    {
      skip,
    }
  );

  return (
    <div className="py-8">
      <div className="grid grid-cols-2 lg:grid-cols-6 md:grid-cols-5  gap-3 sm:grid-cols-4">
        {items.map((item: ISearchResult, index: number) => {
          return (
            <HoverCard
              onOpenChange={() => {
                setSkip(false);
                setId(item.id);
                setName(item.name);
              }}
              key={index}
              openDelay={500}
              closeDelay={0}
            >
              <HoverCardTrigger className="rounded-sm h-[250px] max-w-fit relative overflow-hidden   flex flex-col justify-center ">
                <div className=" h-[200px] w-[150px] mx-auto  overflow-hidden flex items-center justify-center rounded-sm">
                  <img
                    src={item.img}
                    className=" h-full w-full   rounded-sm "
                  ></img>
                </div>
                <p className="mt-1 w-[140px] mx-auto text-sm truncate">
                  {item.name}
                </p>
              </HoverCardTrigger>
              <HoverContent isSuccess={isSuccess} book={data?.data} id={id} />
            </HoverCard>
          );
        })}
      </div>
    </div>
  );
};

export default SearchResult;
