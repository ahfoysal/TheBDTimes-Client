import { useEffect } from 'react';
import MainLayout from './layouts/MainLayout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  useEffect(() => {
    // if (decodedToken) {
    //   const { id, email, role } = decodedToken as Partial<IUser>;
    //   const user = {
    //     id,
    //     email,
    //     role,
    //   };
    //   dispatch(setUser(user));
    //   dispatch(setToken(token as string));
    //   setSkip(false);
    //   if (isSuccess) {
    //     dispatch(setUser(data?.data?.user));
    //   }
    //   if (isError) {
    //     console.log(error);
    //   }
    //   // console.log(decodedToken)
    // }
    //
  }, []);

  return (
    <div>
      <MainLayout />
      <ToastContainer
        limit={1}
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        theme="dark"
      />
    </div>
  );
}

export default App;
