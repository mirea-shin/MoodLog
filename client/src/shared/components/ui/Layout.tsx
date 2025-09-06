import { Outlet } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen min-w-screen">
      <Header />
      <main className="flex-1 flex justify-center items-center">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
