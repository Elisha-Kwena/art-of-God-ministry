import React from "react";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';


interface ToggleSidebarProps {
    isSidebarOpen: boolean;
    toggleSidebar: () => void;
  }
  
const ToggleSidebar:React.FC<ToggleSidebarProps> = ({isSidebarOpen,toggleSidebar}) =>{

    return(
        <>
        <button 
        onClick={toggleSidebar}
        aria-expanded={isSidebarOpen}
        aria-label="Toggle Sidebar"
        className="lg:hidden flex items-center justify-center rounded-md p-1 border-[2px] welcome border-[#ab4f43]">
            {isSidebarOpen ? (
                <FontAwesomeIcon icon={faXmark} className="text-2xl text-black"/>
            ):<FontAwesomeIcon icon={faBars} className="text-2xl text-black"/>
            }
        </button>
        </>
    )
}
export default ToggleSidebar

