import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faVolumeUp,faVideoCamera } from "@fortawesome/free-solid-svg-icons";
import banner from '../../../public/images/banners/sermon.jpg'
import banner2 from '../../../public/images/banners/sermon2.jpg'
import SectionBreak from "../ui/SectionBreak";


const sermonlinks = [
    {id:1,label:"Download",icon:faDownload,path:""},
    {id:2,label:"Listen",icon:faVolumeUp,path:""},
    {id:3,label:"Watch now",icon:faVideoCamera,path:""},
]

const Sermon:React.FC =()=>{
    return(
        <>
        <section className="w-full min-h-screen py-10 welcome">
            <div className="w-full relative flex flex-col gap-1 lg:h-[500px]" data-aos="fade-up" data-aos-delay="400">
                
                <div className="absolute w-full top-0 left-0 h-full">
                    <img src={banner} alt="" className="w-full h-full object-cover"/>
                </div>
                <div className="absolute overlay w-full h-full top-0 left-0 bg-black/50"></div>
                <div className="w-full relative z-10 h-full py-10 flex flex-col items-center justify-center gap-6">
                    <h1 className="text-center text-gold font-bold text-4xl lg:text-7xl" data-aos="zoom-in" data-aos-delay="400">Our Church Sermon</h1>
                    <p className="text-white w-full px-2 lg:w-[80%] text-center mx-auto text-xl" data-aos="zoom-in" data-aos-delay="800">No matter where you are in your spiritual journey, God’s Word meets you right there. Dive into our library of sermons filled with biblical truth, practical wisdom, and fresh inspiration. Join us live on Sundays or explore past messages at your pace</p>
                </div>
            </div>
            <div className="w-full lg:w-[90%] mx-auto flex flex-col gap-6 px-2">
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 items-center justify-between gap-6 lg:py-8">
                    <div className="h-[320px] mt-10 lg:mt-0" data-aos="fade-up" data-aos-delay="800">
                        <Link to="" className="w-full h-full">
                            <img src={banner2} alt="" className="w-full h-full object-cover rounded-[5px]" />
                        </Link>
                    </div>
                    <div className="flex flex-col items-start  gap-1 h-[320px]">
                        <div className="flex-grow">
                            <h1 className="text-3xl lg:text-4xl font-bold mb-6 text-[#ab4f43]" data-aos="fade-up" data-aos-delay="800">Standing Firm in the Storm</h1>
                            <p className="text-lg lg:text-xl" data-aos="fade-up" data-aos-delay="800">Therefore everyone who hears these words of mine and puts them into practice is like a wise man who built his house on the rock</p>
                            <p className="text-md font-bold text-[#ab4f43]" data-aos="fade-up" data-aos-delay="800">(Matthew 7:24)</p>
                            <div className="mt-8 w-full flex items-center justify-start gap-20 " data-aos="fade-up" data-aos-delay="800">
                                <p className="text-xl">August 17, 2025</p>
                                <p className="font-bold text-xl">Pastor : John Doe</p>
                            </div>
                        </div>
                        <div className="flex w-full items-center justify-between lg:justify-start gap-2 lg:gap-8" data-aos="fade-up" data-aos-delay="800">
                            {sermonlinks.map(item =>(
                                <Link key={item.id} to={item.path} className="flex items-center justify-center gap-2 lg:gap-4 py-2 px-4 lg:px-6 rounded-[3px] border-[2px] border-black/50 transition-all duration-300 ease-in-out hover:bg-[#ab4f43] hover:border-[#ab4f43] hover:text-white">
                                    <span className="uppercase">{item.label}</span>
                                    <FontAwesomeIcon icon={item.icon} className="text-md lg:text-xl"/>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="w-full flex items-center justify-center mt-8 lg:mb-16">
                    <Link to="" className="uppercase text-xl lg:text-3xl text-[#ab4f43] border-[2px] border-[#ab4f43] p-2 px-5 rounded-[3px] transition-all duration-300 hover:text-white hover:bg-[#ab4f43]" data-aos="fade-up" data-aos-delay="800">View all sermon series
                    </Link>
                </div>
                <SectionBreak/>
            </div>
        </section>
        </>
    )
}
export default Sermon



