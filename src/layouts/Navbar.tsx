import { PopoverAuth } from '@/components/AuthPopover';
import { Button } from '@nextui-org/button';
import { Link } from 'react-router-dom';

export default function Navbar() {
  // const { user } = useAppSelector((state) => state.user);
  // const dispatch = useAppDispatch();
  // const handleLogout = () => {
  //   signOut(auth).then(() => {
  //     dispatch(setUser(null));
  //     //
  //   });
  // };
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

  return (
    <nav className="container mx-auto items-center flex justify-between w-full top-0 backdrop-blur-lg  z-99 my-4 text-center">
      <div></div>
      <div className=" h-full w-full ">
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
      <div>
        <PopoverAuth />
      </div>
    </nav>
  );
}
