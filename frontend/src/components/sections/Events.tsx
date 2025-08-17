import React from "react";
import { Link } from "react-router-dom";
import SectionBreak from "../ui/SectionBreak";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faLocationPin, faChevronRight } from "@fortawesome/free-solid-svg-icons";

import banner1 from '../../../public/images/events/banner1.jpg'
const Events:React.FC = () =>{
    return(
        <>
        <section className=" flex items-center justify-center welcome py-10">
            <div className="w-[90%] mx-auto flex flex-col gap-4">
                <div className="w-full mb-10">
                    <h1 className="text-6xl text-center mb-4 font-bold text-[#ab4f43]">Latest Events on The Ark of God Ministry</h1>
                    <p className="text-xl text-black text-center">Wherever you are in life, there’s a place for you here. From worship services to small groups, community outreaches to special gatherings we’d love for you to join us. Check out our upcoming events and see where you fit in!</p>
                </div>

                <div className="w-full grid grid-cols-2 gap-6">
                    <div className="flex items-start justify-center gap-2">
                        <div className="date flex items-start justify-center rounded-md bg-[#ab4f43] w-[80px] h-[120px] p-2">
                            <div className="w-[95%] rounded-md flex items-center flex-col gap-2 justify-center bg-white">
                                <h1 className="text-2xl">17</h1>
                                <h1 className="text-2xl font-bold">AUG</h1>
                            </div>
                        </div>
                        <div className="w-[calc(100%-80px)] flex flex-col gap-4">
                            <div className="banner w-full rounded-md overflow-hidden h-[300px]">
                                <img src={banner1} alt="" className="w-full h-full object-cover transition-all duration-300 ease-in-out hover:scale-125 rounded-md"/>
                            </div> 
                            <div className="details w-full">
                                <h1 className="text-4xl mb-4">Trans-Night Prayers</h1>
                                <div className="flex w-full items-center justify-start gap-4 mb-2">
                                    <FontAwesomeIcon icon={faClock} className="text-gray-500"/>
                                    <p>Friday, August 17, 2025, 9:00 AM - 4:00 PM</p>
                                </div>
                                <div className="flex w-full items-center justify-start gap-4">
                                    <FontAwesomeIcon icon={faLocationPin} className="text-green-500"/>
                                    <p>2101 Justin Rd., Flower Mound, TX US 75028</p>
                                </div>
                            </div>
                            <Link to="" className="uppercase w-1/4 flex items-center justify-center gap-2 text-2xl text-[#ab4f43] border-[2px] border-[#ab4f43] p-2 px-5 rounded-[3px] transition-all duration-300 hover:text-white hover:bg-[#ab4f43]">
                            Details
                            <FontAwesomeIcon icon={faChevronRight}/>
                            </Link>
                        </div>
                    </div>
                    <div className="flex items-start justify-center gap-2">
                        <div className="date flex items-start justify-center rounded-md bg-[#ab4f43] w-[80px] h-[120px] p-2">
                            <div className="w-[95%] rounded-md flex items-center flex-col gap-2 justify-center bg-white">
                                <h1 className="text-2xl">17</h1>
                                <h1 className="text-2xl font-bold">AUG</h1>
                            </div>
                        </div>
                        <div className="w-[calc(100%-80px)] flex flex-col gap-4">
                            <div className="banner w-full rounded-md overflow-hidden h-[300px]">
                                <img src={banner1} alt="" className="w-full h-full object-cover transition-all duration-300 ease-in-out hover:scale-125 rounded-md"/>
                            </div> 
                            <div className="details w-full">
                                <h1 className="text-4xl mb-4">Trans-Night Prayers</h1>
                                <div className="flex w-full items-center justify-start gap-4 mb-2">
                                    <FontAwesomeIcon icon={faClock} className="text-gray-500"/>
                                    <p>Friday, August 17, 2025, 9:00 AM - 4:00 PM</p>
                                </div>
                                <div className="flex w-full items-center justify-start gap-4">
                                    <FontAwesomeIcon icon={faLocationPin} className="text-green-500"/>
                                    <p>2101 Justin Rd., Flower Mound, TX US 75028</p>
                                </div>
                            </div>
                            <Link to="" className="uppercase w-1/4 flex items-center justify-center gap-2 text-2xl text-[#ab4f43] border-[2px] border-[#ab4f43] p-2 px-5 rounded-[3px] transition-all duration-300 hover:text-white hover:bg-[#ab4f43]">
                            Details
                            <FontAwesomeIcon icon={faChevronRight}/>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="mt-20">
                    <SectionBreak/>
                </div>
            </div>
        </section>
        </>
    )
}
export default Events


