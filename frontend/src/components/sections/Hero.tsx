import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import banner from '../../../public/images/banners/banner1.jpg'

const Hero:React.FC = () =>{
    return(
        <>
        <section className="w-full relative lg:h-[95vh] h-[50vh] lg:p-0 p-2">
            <div className="absolute w-full h-full left-0 top-0 ">
                <img src={banner} alt="" className="w-full h-full object-cover object-bottom" />
            </div>
            <div className="absolute w-full h-full top-0 left-0 backdrop-blur-sm"></div>
            <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
                <h1 className="text-3xl lg:text-6xl font-extrabold font-['impact'] text-white text-center" data-aos="fade-up" data-aos-delay="400">Experience God's Presence at The Ark of God Ministry</h1>
                <p className=" font-extrabold text-2xl text-black text-center" data-aos="fade-up" data-aos-delay="800">Join us as we worship, grow, and serve together in Christ’s love.</p>
                <div className="flex items-center justify-between gap-4 mt-10" data-aos="fade-up" data-aos-delay="1200">
                    <button className="rounded-md p-4 flex items-center font-extrabold bg-yellow-500 text-white text-md lg:text-xl px-6 hover:bg-gold">Daily Devotion</button>
                    <Link to="" className="flex items-center justify-center gap-4 rounded-md p-4 bg-red ">
                    <FontAwesomeIcon icon={faPlay} className="text-2xl text-white"/>
                    <span className="text-white font-extrabold text-md lg:text-xl">Watch Latest Sermon</span>
                    </Link>
                </div>
            </div>
        </section>
        </>
    )
}
export default Hero