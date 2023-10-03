import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import LeftSideNav from '@/components/Shared/LeftSideNav';
import { tv } from 'tailwind-variants';
import { usepewdsflixSettings } from '@/hooks/useLocalStorage';
import { useMemo } from 'react';

export default function MainLayout() {
  const { sidebarMiniMode, sidebarBoxedMode, sidebarHoverMode } =
    usepewdsflixSettings();

  return (
    <div className=" border-[#262626] bg-black min-h-screen text-neutral-400  dark flex max-h-full  max-w-full flex-nowrap justify-start bg-content1/[0.3] transition-[padding] duration-200 p-0">
      <LeftSideNav />
      <div
        className={contentAreaStyles({
          mini: sidebarMiniMode.value,
          boxed: sidebarBoxedMode.value,
        })}
      >
        {' '}
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}
const contentAreaStyles = tv({
  base: ' ml-0  rounded-t-[10px] flex w-full grow flex-col   overflow-hidden  bg-background shadow-medium transition-[margin] duration-200 sm:border-divider sm:border-[#262626]',
  variants: {
    mini: {
      true: 'sm:ml-[80px] sm:!rounded-tl-medium sm:border-l sm:border-t',
    },
    boxed: {
      true: 'sm:ml-[200px] sm:!rounded-medium sm:border',
    },
    hideSidebar: {
      true: 'sm:ml-0',
    },
  },
  compoundVariants: [
    {
      mini: true,
      boxed: true,
      hideSidebar: false,
      class: 'sm:ml-[110px] sm:!rounded-medium sm:border',
    },
    {
      mini: false,
      boxed: false,
      hideSidebar: false,
      class: 'sm:ml-[180px] sm:!rounded-tl-medium sm:border-l sm:border-t',
    },
    {
      boxed: true,
      hideSidebar: true,
      class: 'sm:ml-[15px] sm:!rounded-medium sm:border',
    },
  ],
  defaultVariants: {
    mini: false,
    boxed: false,
    hideSidebar: false,
  },
});
