import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import RightSideCardContainer from '../home/RightSideCardContainer';

const RightSideNav: React.FC = () => {
  return (
    <div className="my-6">
      <Tabs defaultValue="latest" className="w-full">
        <div className="flex justify-center">
          <TabsList>
            <TabsTrigger value="latest">Latest</TabsTrigger>
            <TabsTrigger value="politics">Politics</TabsTrigger>
            <TabsTrigger value="sports">Sports</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="latest">
          <RightSideCardContainer collection={'latest'} />
        </TabsContent>
        <TabsContent value="politics">
          <RightSideCardContainer collection={'politics'} />
        </TabsContent>
        <TabsContent value="sports">
          <RightSideCardContainer collection={'sports-all'} />
        </TabsContent>
      </Tabs>

      <div className="mt-52">Advertisement here</div>
    </div>
  );
};

export default RightSideNav;
