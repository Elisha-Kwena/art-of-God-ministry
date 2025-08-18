import React from "react";
import {ROUTES} from '../../config/routes'
import { Link } from "react-router-dom";

import PastorCaroussel from "../../components/ui/caroussel/PastorCaroussel";
import banner from '../../../public/images/banners/banner6.jpg'
import about from '../../../public/images/banners/about.jpg'
import pastor from '../../../public/images/clergy/pastor.png'
const About:React.FC =() =>{
    return(
        <>
        <div className="w-full flex flex-col gap-4 pb-12">
            <section className="hero w-full flex flex-col items-center justify-center gap-2 relative h-[30vh] lg:h-[50vh]">
                <div className="absolute w-full h-full left-0 top-0">
                    <img src={about} alt="" className="w-full h-full object-cover" />
                </div>
                {/* <div className="overlay absolute w-full h-full z-10 top-0 left-0 bg-black/50 backdrop-blur-sm"></div> */}
                <div className="w-full flex flex-col items-center justify-center gap-2 z-10">
                    <div className="flex items-end justify-center gap-2" data-aos="fade-up" data-aos-delay="200">
                        <Link to={ROUTES.HOME} className="text-black text-xl font-extrabold hover:text-red-600">Home</Link>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-[#ab4f43] font-bold">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                            </svg>
                        </span>
                        <p className="text-xl text-red-600 font-extrabold">About Us</p>
                    </div>
                    <h1 className="text-4xl lg:text-6xl font-extrabold text-[#ab4f43]" data-aos="fade-up" data-aos-delay="200">About The Ark of God Ministry </h1>
                    <h2 className="text-xl lg:text-2xl text-black font-extrabold lg:font-bold" data-aos="fade-up" data-aos-delay="200">A Bible-believing church in Dandora Phase 5</h2>
                </div>
            </section>
            <section className="about w-full flex-col gap-0 lg:p-0 px-3">
                <div className="w-full lg:w-[90%] p-2 lg:p-0 mx-auto grid grid-cols-1 gap-4 lg:grid-cols-2 place-items-start lg:pt-12 ">
                  <div className="relative flex items-center justify-center h-full overflow-hidden px-2" data-aos="zoom-in" data-aos-delay="200">
                    <img 
                      src={pastor} 
                      alt="Pastor" 
                      className="h-full w-full object-contain object-center"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-center p-0 lg:p-12">
                        <div>
                            <h2 className="text-5xl lg:text-6xl font-extrabold mb-4 text-[#ab4f43]" data-aos="fade-up" data-aos-delay="200">Our story</h2>
                            <h2 className="text-2xl lg:text-4xl font-extrabold" data-aos="fade-up" data-aos-delay="200">We Are Building God's Kingdom Through Faith, Prayer & Action</h2>
                            <div className="w-1/4 lg:w-2/4 bg-red h-2 rounded-full" data-aos="fade-up" data-aos-delay="200"></div>
                        </div>
                        <p className="py-3 text-lg" data-aos="fade-up" data-aos-delay="200">At The Ark of God Ministry in Dandora Phase 5, we believe in transforming lives through the power of the Gospel. Founded in 2011, our church is a beacon of hope, dedicated to nurturing spiritual growth, fostering community, and serving as a house of prayer for all nations.</p>
                        <div className="w-full gap-4 grid grid-cols-1 lg:grid-cols-2 mt-6">
                            <div className="flex flex-col gap-2 items-start justify-start">
                                <div className="w-full" data-aos="fade-up" data-aos-delay="200">
                                    <span className="bg-[#ab4f43] transition-all duration-300 ease-in-out hover:bg-black flex items-center justify-center w-14 h-14 text-white rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                        </svg>
                                    </span>
                                </div>
                                <h1 className="font-extrabold text-2xl" data-aos="fade-up" data-aos-delay="200">A Sanctuary in Dandora</h1>
                                <p className="text-xl text-gray-500" data-aos="fade-up" data-aos-delay="200">Our church provides a refuge from life’s storms, where you can encounter God’s presence through worship and the Word. </p>
                            </div>
                            <div className="flex flex-col gap-2 items-start justify-start  lg:mt-0 mt-4">
                                <div className="w-full" data-aos="fade-up" data-aos-delay="200">
                                    <span className="bg-[#ab4f43] transition-all duration-300 ease-in-out hover:bg-black flex items-center justify-center w-14 h-14 text-white rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                                    </svg>
                                    </span>
                                </div>
                                <h1 className="font-extrabold text-2xl" data-aos="fade-up" data-aos-delay="200">Deep Dive into Scriptures</h1>
                                <p className="text-xl text-gray-500" data-aos="fade-up" data-aos-delay="200">Join our Wednesday Bible studies to unpack God’s truth and apply it to daily life.</p>
                            </div>
                        </div>
                  </div>
                </div>
                <div className="w-full h-[300px] lg:h-[160px] lg:w-[90%] mx-auto flex flex-col lg:flex-row items-center justify-start lg:gap-28 gap-20 rounded-md relative px-4 lg:px-12 lg:p-4 pt-10 pb-10 lg:pb-4" data-aos="fade-up" data-aos-delay="200">
                    <div className="absolute w-full h-full top-0 left-0">
                        <img src={banner} alt="" className="w-full object-cover h-full object-top rounded-md" />
                    </div>
                    <div className="relative z-10 flex items-center justify-center" data-aos="zoom-in" data-aos-delay="200">
                        <Link to="" className="flex items-center justify-center relative">
                          {/* Ripple effect (background circles) */}
                          <div className="ripple-box absolute bg-[#fccbc5] rounded-full"></div>
                          <div className="ripple-box-delayed absolute bg-[#fccbc5] rounded-full"></div>

                          {/* Always-visible icon container (unchanged) */}
                          <div className="flex items-center justify-center bg-[#d87a6e] rounded-full w-20 h-20 z-10">
                            <div className="flex items-center justify-center bg-[#ab4f43] rounded-full w-14 h-14 z-50">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125                      1.125 0 0 1-1.667-.986V5.653Z" />
                              </svg>
                            </div>
                          </div>
                        </Link>
                    </div>
                    <div className="z-10 lg:mb-0 mb-4" data-aos="zoom-in" data-aos-delay="200">
                        <p className="text-2xl lg:text-4xl text-white font-extrabold">Pray! And listen to God! You can do this alone, but find somebody to do it with you</p>
                    </div>
                   
                </div>
            </section>
            <section className="about w-full flex-col gap-0 lg:p-0 px-3 mt-8">
                <div className="flex-flex-col items-center justify-center w-full lg:w-[90%] mx-auto">
                    <h1 className="text-[#ab4f43] text-4xl lg:text-6xl text-center font-extrabold" data-aos="fade-up" data-aos-delay="200">Our Church Clergy</h1>
                    <div className="h-2 mt-2 w-[150px] mx-auto rounded-lg bg-[#1a1312]" data-aos="fade-up" data-aos-delay="200"></div>
                    <div className="w-full flex items-center justify-center mt-10" data-aos="fade-up" data-aos-delay="200">
                        <PastorCaroussel/>
                    </div>
                </div>
            </section>

        </div>
        
        </>
    )
}
export default About

