import { Outlet } from 'react-router-dom';
import Navbar from '../navigation/Navbar';
import Footer from '../sections/Footer';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow w-full">
        <Outlet /> {/* This renders the current page */}
      </main>
      <Footer/>
    </div>
  );
}