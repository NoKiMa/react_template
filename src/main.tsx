import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import ErrorPage from './components/error-page.tsx';
import Root from './routes/root';
import Tab from './routes/tab.tsx';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'a/:id',
        element: <Tab />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
