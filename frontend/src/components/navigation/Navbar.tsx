import React from "react";
import { ROUTES } from "../../config/routes";
import { menuitems } from "../../data/menu";
import { NavLink,Link } from "react-router-dom";
import logo from '../../assets/logo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook,faYoutube } from "@fortawesome/free-brands-svg-icons";
import ToggleSidebar from "../ui/toggleSidebar/ToggleSidebar";


const socials = [
    {id:1,banner:faFacebook,path:"https://www.facebook.com/groups/361360018744941/",color:"text-blue-600"},
    {id:2,banner:faYoutube,path:"",color:"text-red-600"},
]
interface NavbarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({isSidebarOpen, toggleSidebar}) => {
  return (
    <header className="w-full fixed top-0 left-0 p-2 z-50 backdrop-blur-sm overflow-hidden">
      <nav className="flex w-full lg:w-[95%] items-center justify-between px-2 lg:px-4  mx-auto">
        <div className="logo">
          <Link to={ROUTES.HOME} className="flex items-center justify-start gap-2">
            <img src={logo} alt="Church Logo" className="w-10 lg:w-20" />
            <div className="flex flex-col items-start gap-0 justify-center">
              <h1 className="text-md lg:text-2xl font-['impact'] font-extrabold text-gold">The Ark of God</h1>
              <h1 className="text-md lg:text-2xl font-['impact'] font-extrabold text-gold">Ministry</h1>
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <div className="hidden lg:flex items-center justify-between gap-6">
          {menuitems.map(item => (
            <NavLink 
              key={item.id} 
              to={item.path}
              className={({isActive}) => 
                `menu-item font-bold text-xl hover:text-gold-200 transition-all duration-300 p-3 py-2 hover:text-white ${isActive ? 'menu-item-active':''}`} // Added hover effect
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* endnav */}
        <div className="hidden lg:flex items-center justify-between gap-4">
            {socials.map(item =>(
                <a key={item.id} href={item.path} className="flex items-center justify-center">
                    <FontAwesomeIcon icon={item.banner} className={`h-6 w-6 ${item.color}`}/>
                </a>
            ))}
        </div>

        {/* sidebar button */}
        <ToggleSidebar 
          isSidebarOpen={isSidebarOpen} 
          toggleSidebar={toggleSidebar} 
        />
      </nav>
    </header>
  );
};

export default Navbar;