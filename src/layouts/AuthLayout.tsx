import { Outlet } from 'react-router-dom';
import MiniNavbar from './MiniNavbar';

export default function AuthLayout() {
  return (
    <div className=" bg-[#0B1622] min-h-screen   my-auto text-neutral-400  dark">
      <MiniNavbar />
      <div className=" mt-16  ">
        <Outlet />
      </div>
    </div>
  );
}
