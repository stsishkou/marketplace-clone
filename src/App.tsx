import { RouterProvider } from 'react-router-dom';
import './App.scss';
import { AppFallback } from './router/AppFallback';
import { appRouter } from './router/appRouter';

export default function App(): JSX.Element {
  return (
    <>
      <RouterProvider router={appRouter} fallbackElement={<AppFallback />} />
    </>
  );
}
