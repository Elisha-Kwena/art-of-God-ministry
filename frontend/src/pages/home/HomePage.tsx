import React from "react";
import Hero from "../../components/sections/Hero";
import Welcome from "../../components/sections/Welcome";
import Services from "../../components/sections/Services";
const HomePage:React.FC = () => {
    return (
        <>
        <div className="w-full flex flex-col">
          <Hero/>
          <Welcome/>
          <Services/>
        </div>
        </>
    );
  };
export default HomePage;