import { Link } from 'react-router-dom';

export default function MiniNavbar() {
  // const { user } = useAppSelector((state) => state.user);
  // const dispatch = useAppDispatch();
  // const handleLogout = () => {
  //   signOut(auth).then(() => {
  //     dispatch(setUser(null));
  //     //
  //   });
  // };
  return (
    <nav className="top backdrop-blur-lg bg-[#152232] z-10">
      <div className=" mx-auto h-full w-full flex justify-center py-4">
        <div className="logo-container">
          <Link to="/" className="logo text-2xl text-white font-extrabold">
            My Book List
          </Link>
        </div>
      </div>
    </nav>
  );
}
