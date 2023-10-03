import {
  HoverCard,
  HoverCardArrow,
  HoverCardContent,
  HoverCardTrigger,
} from '@radix-ui/react-hover-card';
import { Badge } from '../ui/badge';

export default function BookListGrid() {
  return (
    <div className="py-8">
      <div className="flex justify-between items-center py-4">
        <h3 className="text-1xl text-[#ADC0D2] font-semibold uppercase">
          Recently Added
        </h3>
        <p className="text-xs text-[#ADC0D2] font-semibold uppercase">
          View All
        </p>
      </div>
      <div className="grid grid-cols-6 gap-5">
        {[1, 2, 3, 4, 5, 6].map((index) => {
          return (
            <HoverCard key={index} openDelay={500} closeDelay={100}>
              <HoverCardTrigger className="rounded-sm">
                <img
                  src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx145064-5fa4ZBbW4dqA.jpg"
                  className="h-full w-full rounded-sm"
                ></img>
                <p className="mt-1 text-sm">Name</p>
              </HoverCardTrigger>
              <HoverCardContent
                side="right"
                sideOffset={4}
                alignOffset={15}
                align={'start'}
                className="min-h-[100px] min-w-[240px]  p-2 px-3 rounded-md  hidden md:block bg-[#151F2E]"
              >
                <HoverCardArrow
                  className="mr-4 text-[#151F2E] "
                  color="#151F2E"
                  width={10}
                  height={10}
                />
                <div className="flex flex-col ">
                  <p className="text-sm font-normal"> Total Page 200</p>
                  <div className="flex gap-1 mt-3 text-xs ">
                    <Badge className="bg-[#bbe916ab] text-white"> Story </Badge>
                    <Badge className="bg-[#bbe916ab] text-white">
                      Classic Story
                    </Badge>
                    <Badge className="bg-[#bbe916ab] text-white">
                      Short Story
                    </Badge>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          );
        })}
      </div>
    </div>
  );
}
