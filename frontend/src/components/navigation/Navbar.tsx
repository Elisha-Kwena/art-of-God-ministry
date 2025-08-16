import React from "react";
import { ROUTES } from "../../config/routes";
import { menuitems } from "../../data/menu";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook,faYoutube } from "@fortawesome/free-brands-svg-icons";


const socials = [
    {id:1,banner:faFacebook,path:"",color:"text-blue-400"},
    {id:2,banner:faYoutube,path:"",color:"text-red-500"},
]

const Navbar: React.FC = () => {
  return (
    <header className="w-full fixed top-0 left-0 p-2 z-50 backdrop-blur-sm ">
      <nav className="flex w-[95%] items-center justify-between px-4  mx-auto">
        <div className="logo">
          <Link to={ROUTES.HOME} className="flex items-center justify-start gap-2">
            <img src={logo} alt="Church Logo" className="w-20" />
            <div className="flex flex-col items-start gap-0 justify-center">
              <h1 className="text-2xl font-['impact'] font-extrabold text-gold">The Ark of God</h1>
              <h1 className="text-2xl font-['impact'] font-extrabold text-gold">Ministry</h1>
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <div className="hidden md:flex items-center justify-between gap-6">
          {menuitems.map(item => (
            <Link 
              key={item.id} 
              to={item.path}
              className="font-bold text-xl hover:text-gold-200 transition-colors" // Added hover effect
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* endnav */}
        <div className="flex items-center justify-between gap-4">
            {socials.map(item =>(
                <a href={item.path} className="flex items-center justify-center">
                    <FontAwesomeIcon icon={item.banner} className={`h-6 w-6 ${item.color}`}/>
                </a>
            ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;