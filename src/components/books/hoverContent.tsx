import { HoverCardArrow, HoverCardContent } from '@radix-ui/react-hover-card';

import { Badge } from '../ui/badge';
import { FC } from 'react';
import { IBook } from '@/types/boookTypes';

interface IProps {
  isSuccess: boolean;
  book: IBook;
  id: string;
}
const HoverContent: FC<IProps> = ({ isSuccess, book, id }) => {
  if (isSuccess) {
    // console.log(id, name);
  }
  //   console.log('o');
  return (
    <HoverCardContent
      hideWhenDetached={false}
      side="right"
      sideOffset={20}
      alignOffset={15}
      align={'start'}
      className={`min-h-[100px] 
    
      z-50 min-w-fit  max-w-[400px] p-2 px-3 rounded-md  hidden sm:block bg-[#151F2E]`}
    >
      <div className="flex flex-col ">
        <p className="text-sm font-normal w-[200px] truncate">
          {book?.titleEnglish}
        </p>
        <p className="text-sm font-normal w-[200px] truncate">{book?.author}</p>
        <div className="flex gap-1 mt-3 text-xs flex-wrap    items-center ">
          {book?.genre?.slice(0, 3)?.map((genre) => {
            return (
              <Badge
                key={genre}
                className="bg-[#bbe916ab] max-w-[130px] text-center  px-1 text-xs truncate text-white"
              >
                {genre}
              </Badge>
            );
          })}
        </div>
      </div>
    </HoverCardContent>
  );
};

export default HoverContent;
