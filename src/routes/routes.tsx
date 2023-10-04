import { createBrowserRouter } from 'react-router-dom';
import App from '@/App';

import Home from '@/pages/Home';
import NotFound from '@/pages/NotFound';
import NewsDetails from '@/pages/NewsDetails';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        path: '/',
        element: <Home />,
      },
      {
        path: '/news/:id',
        element: <NewsDetails />,
      },
    ],
  },

  {
    path: '*',
    element: <NotFound />,
  },
]);

export default routes;
