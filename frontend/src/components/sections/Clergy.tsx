import React from "react";
import { Link } from "react-router-dom";
import ClergyCaroussel from "../ui/caroussel/ClergyCaroussel";
import SectionBreak from "../ui/SectionBreak";

const Clergy:React.FC = () =>{
    return(
        <>
        <section className="w-full welcome py-12 flex items-center justify-center">
            <div className="w-[90%] mx-auto flex flex-col gap-4">
                <div>
                    <h1 className="text-6xl text-center mb-3 font-bold text-[#ab4f43]" data-aos="fade-up" data-aos-delay="400">Meet Our Shepherds : Guiding You Closer to Christ</h1>
                    <p className="text-xl w-3/4 mx-auto text-black text-center" data-aos="fade-up" data-aos-delay="400">Behind every sermon, event, and ministry is a team passionate about helping you encounter Jesus. We’re not just leaders we’re fellow travelers on this faith journey. Let’s grow together!</p>
                </div>

                <div className="w-full flex items-center justify-between gap-4 mt-10">
                    <div className="w-[60%]">
                        <ClergyCaroussel/>
                    </div>
                    
                    <div className="w-[40%] flex flex-col">
                        <h1 className="text-3xl font-bold mb-3" data-aos="fade-up" data-aos-delay="400">Why We're Here: </h1>
                        <ul className="flex flex-col gap-0 items-start justify-center">
                            <li className="flex items-center justify-start gap-2" data-aos="fade-up" data-aos-delay="400">
                                <span className="font-bold text-xl">To Teach Truth –</span>
                                <p className="text-lg"> Bold, biblical preaching that transforms lives.</p>
                            </li>
                            <li className="flex items-center justify-start gap-2" data-aos="fade-up" data-aos-delay="400">
                                <span className="font-bold text-xl">To Offer Care –</span>
                                <p className="text-lg"> Counseling, prayer, and spiritual guidance.</p>
                            </li>
                            <li className="flex items-center justify-start gap-2" data-aos="fade-up" data-aos-delay="400">
                                <span className="font-bold text-xl">To Lead with Love –</span>
                                <p className="text-lg"> Serving as Christ served (Mark 10:45).</p>
                            </li>
                        </ul>

                        <p className="text-xl mt-8" data-aos="fade-up" data-aos-delay="400">"Their work is to watch over your souls, and they are accountable to God."
                        <span className="font-bold text-[#ab4f43]" data-aos="fade-up" data-aos-delay="400">Hebrews 13:17 (NLT)</span></p>

                        <div className="flex items-center justify-start gap-4 mt-8">
                        <Link to="" className="uppercase text-xl text-[#ab4f43] border-[2px] border-[#ab4f43] p-2 px-5 rounded-[3px] transition-all duration-300 hover:text-white hover:bg-[#ab4f43]" data-aos="fade-up" data-aos-delay="400">
                        Learn More About our Staff
                        </Link>
                        <Link to="" className="uppercase text-xl bg-[#ab4f43] text-white border-[2px] border-[#ab4f43] p-2 px-5 rounded-[3px] transition-all duration-300 hover:text-[#ab4f43] hover:bg-transparent" data-aos="fade-up" data-aos-delay="400">
                        Contact pastor
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
export default Clergy