import { createBrowserRouter, Link } from 'react-router-dom';
import { bikeDetailsLoader, BikeDetailsPage } from '../pages/BikeDetailsPage';
import { PreOwnedBikesPage } from '../pages/PreOwnedBikesPage';
import { AppLayout } from './AppLayout';

export const appRouter: ReturnType<typeof createBrowserRouter> = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        async lazy() {
          const { PreOwnedBikesPage } = await import('../pages/PreOwnedBikesPage');
          return { Component: PreOwnedBikesPage };
        }
      },
      {
        path: ':bikeId',
        async lazy() {
          const { BikeDetailsPage, bikeDetailsLoader } = await import('../pages/BikeDetailsPage');
          return { loader: bikeDetailsLoader, Component: BikeDetailsPage };
        }
      },
      {
        path: '*',
        element: <NoMatch />
      }
    ]
  }
]);

function NoMatch() {
  return (
    <div className="">
      <h2>Something went wrong!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
