import { PopoverAuth } from '@/components/AuthPopover';
import UserPopover from '@/components/UserPopover';
import { usepewdsflixSettings } from '@/hooks/useLocalStorage';
import { useAppSelector } from '@/redux/hook';
import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

export default function Navbar() {
  const { user } = useAppSelector((state) => state.auth);
  const [isLogoVisible, setIsLogoVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;

      const threshold = 10;

      setIsLogoVisible(scrolled < threshold);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const currentDate: Date = new Date();
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  };

  const formattedDate: string = new Intl.DateTimeFormat(
    'en-US',
    options
  ).format(currentDate);
  const { sidebarMiniMode } = usepewdsflixSettings();

  return (
    <nav
      className={`fixed    w-full top-0 backdrop-blur-lg  z-40 py-3 text-center ${
        isLogoVisible ? '' : 'border-b'
      }`}
    >
      <div className="container mx-auto items-center flex justify-between ">
        <div className=""></div>
        <div
          className={` h-full w-full  ${isLogoVisible ? 'block' : 'hidden'}`}
        >
          <div className="logo-container flex  justify-center">
            <Link
              to="/"
              className="h-[60px] logo text-2xl text-white font-extrabold"
            >
              <img
                src="/Logo.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </Link>
          </div>
          <div className="mt-2">{formattedDate}</div>
        </div>
        <div className={`${sidebarMiniMode.value ? 'mr-20' : 'mr-44'}`}>
          {user.email ? <UserPopover user={user} /> : <PopoverAuth />}
        </div>
      </div>
    </nav>
  );
}
