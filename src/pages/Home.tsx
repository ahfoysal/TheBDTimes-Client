import RightSideNav from '@/components/Shared/RightSideNav';
import BreakingNews from '@/components/home/BreakingNews';
import FeaturedNews from '@/components/home/FeaturedNews';
// import { usepewdsflixSettings } from '@/hooks/useLocalStorage';

export default function Home() {
  // const { sidebarMiniMode, sidebarBoxedMode, sidebarHoverMode } =
  //   usepewdsflixSettings();

  return (
    <div className="container mx-auto">
      <BreakingNews />
      <div className="grid md:grid-cols-4 grid-cols-1 gap-6">
        <div className="col-span-3">
          <div className="div">
            <FeaturedNews />
          </div>
        </div>
        <RightSideNav />
      </div>
    </div>
  );
}
