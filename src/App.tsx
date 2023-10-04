import { useEffect } from 'react';
import MainLayout from './layouts/MainLayout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { app } from './firebase/firebase.config';
import { IUser, resetUser, setUser } from './redux/features/auth/authSlice';
import { useAppDispatch } from './redux/hook';
const auth = getAuth(app);

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        const { displayName, photoURL, email, emailVerified, uid } =
          currentUser as IUser;

        const userPayload = {
          displayName,
          photoURL,
          email,
          emailVerified,
          uid,
        };
        dispatch(setUser(userPayload));
      } else {
        dispatch(resetUser());
      }
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch]);
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
