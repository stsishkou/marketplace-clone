import { Outlet } from 'react-router-dom';

export function AppLayout(): JSX.Element {
  return (
    <>
      <div className="h-screen p-2">
        <div className="h-full flex flex-col items-center border">
          <Outlet/>
        </div>
      </div>
    </>
  );
}