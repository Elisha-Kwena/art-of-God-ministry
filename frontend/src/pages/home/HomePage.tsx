import React from "react";
import Hero from "../../components/sections/Hero";
import Welcome from "../../components/sections/Welcome";
import Services from "../../components/sections/Services";
import Sermon from "../../components/sections/Sermon";
import Events from "../../components/sections/Events";
import Clergy from "../../components/sections/Clergy";
import Gallery from "../../components/sections/Gallery";
const HomePage:React.FC = () => {
    return (
        <>
        <div className="w-full flex flex-col">
          <Hero/>
          <Welcome/>
          <Services/>
          <Sermon/>
          <Events/>
          <Clergy/>
          <Gallery/>
        </div>
        </>
    );
  };
export default HomePage;