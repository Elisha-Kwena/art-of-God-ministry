import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../config/routes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faYoutube } from "@fortawesome/free-brands-svg-icons";
import {
  faHome,
  faCircleInfo,
  faHandsHelping,
  faBible,
  faCalendar,
  faUsers,
  faImages,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

interface SidebarProps {
  isOpen: boolean;
  closeSidebar: () => void;
}

const menuitems = [
  { id: 1, icon: faHome, label: "Home", path: ROUTES.HOME },
  { id: 2, icon: faHandsHelping, label: "Services", path: ROUTES.SERVICES },
  { id: 3, icon: faBible, label: "Sermon", path: ROUTES.SERMON },
  { id: 4, icon: faCalendar, label: "Events", path: ROUTES.EVENTS },
  { id: 5, icon: faUsers, label: "Leadership", path: ROUTES.LEADERSHIP },
  { id: 6, icon: faImages, label: "Gallery", path: ROUTES.GALLERY },
  { id: 7, icon: faCircleInfo, label: "About", path: ROUTES.ABOUT },
  { id: 8, icon: faEnvelope, label: "contact", path: ROUTES.CONTACT },
];

const social = [
  { id: 1, icon: faFacebook, path: "https://www.facebook.com/groups/361360018744941/", color: 'text-blue-600' },
  { id: 2, icon: faYoutube, path: "", color: "text-red-600" }
];

const Sidebar: React.FC<SidebarProps> = ({ isOpen, closeSidebar }) => {
  const [currentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeSidebar();
    }
  };

  return (
    <div 
      onClick={handleBackdropClick}
      className={`
        lg:hidden fixed inset-0 top-[55px] z-50
        transition-all duration-500 ease-in-out
        ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
      `}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-md transition-opacity duration-500"></div>
      
      {/* Sidebar */}
      <div
        className={`
          absolute top-0 right-0 h-full w-[70%] bg-white
          transform transition-transform duration-500 ease-in-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col gap-2 p-2 h-full welcome">
          <div className="flex flex-col gap-1 items-start justify-start">
            {menuitems.map(item => (
              <NavLink 
                key={item.id}
                to={item.path}
                onClick={closeSidebar}
                className={({isActive}) => 
                  `flex items-center justify-start gap-2 p-2 rounded-md w-full ${
                    isActive ? 'shadow-[0_1px_2px_rgba(0,0,0,0.0005),0_1px_3px_rgba(0,0,0,0.5)] text-[#ab4f43] font-extrabold' : 'text-gray-600 font-bold'
                  }`
                }
              >
                <FontAwesomeIcon icon={item.icon} className=""/>
                <div className="text-lg">{item.label}</div>
              </NavLink>
            ))}
          </div>
          <div className="flex w-full flex-col gap-2 items-center mt-6 justify-center">
            <h1 className="text-black text-center text-lg font-bold">Our Social Media Links</h1>
            <div className="w-full flex items-center justify-center gap-3">
              {social.map(item => (
                <a
                  onClick={closeSidebar}
                  key={item.id} 
                  href={item.path} 
                  className="flex items-center justify-center text-3xl w-10 h-10 rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.0005),0_1px_3px_rgba(0,0,0,0.5)]"
                >
                  <FontAwesomeIcon icon={item.icon} className={`${item.color}`}/>
                </a>
              ))}
            </div>
            <div className="flex items-center justify-center gap-3">
              <NavLink 
                onClick={closeSidebar}
                to={ROUTES.FAQS} 
                className={({isActive}) => 
                  `text-lg ${isActive ? 'text-red-600 font-bold' : 'font-bold text-blue-500'}`
                }
              >
                Terms & Conditions
              </NavLink>
              <NavLink 
                onClick={closeSidebar}
                to={ROUTES.FAQS} 
                className={({isActive}) => 
                  `text-lg ${isActive ? 'text-red-600 font-bold' : 'font-bold text-blue-500'}`
                }
              >
                Privacy Policy
              </NavLink>
            </div>
            <div className="flex mt-2 items-center justify-center flex-col gap-2">
              <p className="text-lg text-center">
                Copyright &copy; {currentYear} The Ark of God Ministry. All rights reserved.
              </p>
              <p className="text-lmd text-center">
                Website by: <a onClick={closeSidebar} href="tel:+254707575589" className="hover:text-[#ab4f43]">Luminary Softwares - 0707 575 589</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;