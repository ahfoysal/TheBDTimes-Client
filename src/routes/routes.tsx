import { createBrowserRouter } from 'react-router-dom';
import App from '@/App';

import Home from '@/pages/Home';
import NotFound from '@/pages/NotFound';
import Signup from '@/pages/Signup';
import Login from '@/pages/Login';
import AuthLayout from '@/layouts/AuthLayout';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },

  {
    path: '*',
    element: <NotFound />,
  },
]);

export default routes;
