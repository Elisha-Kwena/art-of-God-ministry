import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import Navbar from '../navigation/Navbar';
import Footer from '../sections/Footer';
import Sidebar from '../navigation/Sidebar';

export default function Layout() {
  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false)

  const toggleSidebar = ():void =>{
      setSidebarOpen(prevState => !prevState)
  }

  const closeSidebar = ():void =>{
      setSidebarOpen(false)
  }
  return (
    <div className="min-h-screen w-vw flex flex-col ">
      <Navbar
        isSidebarOpen={isSidebarOpen} 
        toggleSidebar={toggleSidebar} 
      />
      <main className="flex-grow w-ful relative">
        <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar}/>
        <Outlet /> {/* This renders the current page */}
      </main>
      <Footer/>
    </div>
  );
}