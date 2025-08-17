import React from "react";
import { Link } from "react-router-dom";
import WelcomeCard from "../ui/cards/WelcomeCard";
import SectionBreak from "../ui/SectionBreak";

import { about } from "../../data/welcome";
const Welcome:React.FC = () =>{
    return(
        <>
        <section className="w-full relative lg:h-screen welcome pt-20">
            <div className="w-[90%] h-full mx-auto flex items-center justify-center flex-col gap-12">
                <div className="w-full">
                    <h1 className="font-abel text-center text-4xl lg:text-6xl capitalize font-extrabold text-[#ab4f43]" data-aos="fade-up">Welcome to art of God Ministry</h1>
                    <p className="text-black text-xl lg:text-2xl text-center mt-4" data-aos="fade-u" data-aos-delay="800">A sanctuary for the seeking and the saved, The Ark of God Ministry upholds the timeless truths of Scripture, fostering deep worship and discipleship.</p>
                </div>
                
                <div className="w-full lg:w-[90%] grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {about.map(item =>(
                        <WelcomeCard 
                        key={item.id}
                        label={item.label}
                        banner={item.banner}
                        description={item.description}
                        />
                    ))}
                </div>

                <div className="w-full flex items-center justify-center gap-4">
                    <Link to="" className="uppercase p-4 border-[2px] rounded-[5px] text-[#ab4f43] font-bold border-[#ab4f43] transition-all duration-300 ease-out hover:bg-[#ab4f43] hover:text-white" data-aos="fade-up" data-aos-delay="800">Want to Meet Pastor</Link>
                    <Link to="" className="uppercase p-4 border-[2px] rounded-[5px] text-white bg-[#ab4f43] font-bold border-[#ab4f43] transition-all duration-300 ease-out hover:bg-transparent hover:text-[#ab4f43]" data-aos="fade-up" data-aos-delay="800">Know more about us</Link>
                </div>
                <SectionBreak/>
            </div>
        </section>
        </>
    )
}
export default Welcome