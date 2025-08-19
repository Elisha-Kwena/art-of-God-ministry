import React from "react";
import {ROUTES} from '../../config/routes'
import { Link } from "react-router-dom";

import headphone from '../../../public/images/banners/headphone.png'
import contact from '../../../public/images/banners/contact.jpg'
import banner1 from '../../../public/images/banners/contact3.jpg'
import banner2 from '../../../public/images/banners/contact4.jpg'
import banner3 from '../../../public/images/banners/contact5.jpg'
import banner4 from '../../../public/images/banners/contact2.png'
const Contact:React.FC =() =>{
    return(
        <>
        <div className="w-full flex flex-col gap-4 pb-12">
            <section className="hero w-full flex flex-col items-center justify-center gap-2 relative h-[30vh] lg:h-[50vh]">
                <div className="absolute w-full h-full left-0 top-0">
                    <img src={contact} alt="" className="w-full h-full object-cover" />
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
                        <p className="text-xl text-red-600 font-extrabold">Contact Us</p>
                    </div>
                    <h1 className="text-4xl lg:text-6xl font-extrabold text-[#ab4f43]" data-aos="fade-up" data-aos-delay="200">Contact Us </h1>
                    <h2 className="text-xl lg:text-2xl text-black font-extrabold lg:font-bold" data-aos="fade-up" data-aos-delay="400"> We Would like to hear from you</h2>
                </div>
            </section>
            <section className="w-full py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 w-full lg:w-[90%] mx-auto lg:p-0 px-2">

                    {/* grid 1 */}
                    <div className="flex flex-col items-center justify-center gap-2 relative h-[300px] lg:h-[400px] rounded-xl overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.05),0_1px_3px_rgba(0,0,0,0.6)]" data-aos="zoom-in" data-aos-delay="200">
                     {/* Background Image */}
                        <div className="absolute w-full h-full top-0 left-0">
                            <img src={banner1} alt="" className="w-full h-full object-cover object-center" />
                        </div>
                        <div className="absolute w-full h-full bg-[#ff381e]/70 z-10"></div>

                        <div className="relative px-6 z-20 text-white w-full h-full flex items-center justify-center flex-col gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-20">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>
                            <h1 className="text-3xl">Our Location</h1>
                            <p className="text-center text-xl">Dandora phase 5 sharp corner,down police station 
                            </p>
                        </div>
                    </div>
                    {/* grid 2 */}
                    <div className="flex flex-col items-center justify-center gap-2 relative h-[300px] lg:h-[400px] rounded-xl overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.05),0_1px_3px_rgba(0,0,0,0.6)]" data-aos="zoom-in" data-aos-delay="200">
                     {/* Background Image */}
                        <div className="absolute w-full h-full top-0 left-0">
                            <img src={banner2} alt="" className="w-full h-full object-cover object-center" />
                        </div>
                        <div className="absolute w-full h-full bg-[#171258]/80 z-10"></div>

                        <div className="relative px-6 z-20 text-white w-full h-full flex items-center justify-center flex-col gap-1">
                            <img src={headphone} alt="" className="w-20"/>
                            <h1 className="text-3xl">Phone Number</h1>
                            <p className="text-center text-xl">(+254)723-055-078</p>
                        </div>
                    </div>
                    {/* grid 3 */}
                    <div className="flex flex-col items-center justify-center gap-2 relative h-[300px] lg:h-[400px] rounded-xl overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.05),0_1px_3px_rgba(0,0,0,0.6)]" data-aos="zoom-in" data-aos-delay="200">
                     {/* Background Image */}
                        <div className="absolute w-full h-full top-0 left-0">
                            <img src={banner3} alt="" className="w-full h-full object-cover object-center" />
                        </div>
                        <div className="absolute w-full h-full bg-[#171258]/80 z-10"></div>

                        <div className="relative px-6 z-20 text-white w-full h-full flex items-center justify-center flex-col gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-20">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>

                            <h1 className="text-3xl">Email Address</h1>
                            <p className="text-center text-xl"> tagm2011@gmail.com</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full py-12">
                <div className="w-full lg:w-[90%] mx-auto lg:p-0 px-2 flex flex-col lg:flex-row items-center justify-between">
                    <div className="w-full lg:w-[40%]">
                        <form action="" className="w-full flex flex-col gap-6">
                            <div className="input w-full "  data-aos="fade-up" data-aos-delay="200">
                            <input type="text"className="w-full p-3 text-lg text-black border-2 border-gray-300 rounded-md focus:border-[#ab4f43] focus:ring-2 focus:ring-[#ab4f43]/30 focus:outline-none transition-all duration-200 placeholder-gray-400"placeholder="Name"/>
                            </div>
                            <div className="input w-full "  data-aos="fade-up" data-aos-delay="200">
                            <input type="text"className="w-full p-3 text-lg text-black border-2 border-gray-300 rounded-md focus:border-[#ab4f43] focus:ring-2 focus:ring-[#ab4f43]/30 focus:outline-none transition-all duration-200 placeholder-gray-400"placeholder="Email"/>
                            </div>
                            <div className="input w-full "  data-aos="fade-up" data-aos-delay="200">
                            <input type="text"className="w-full p-3 text-lg text-black border-2 border-gray-300 rounded-md focus:border-[#ab4f43] focus:ring-2 focus:ring-[#ab4f43]/30 focus:outline-none transition-all duration-200 placeholder-gray-400"placeholder="Phone Number"/>
                            </div>
                            <div className="input w-full "  data-aos="fade-up" data-aos-delay="200">
                                <textarea name="" id="" className="w-full p-2 px-3 text-lg text-black border-[2px] rounded-[3px] max-w-full h-48 focus:ring-2 focus:ring-[#ab4f43]/30 focus:outline-none transition-all duration-200 placeholder-gray-400" placeholder="Your Message"></textarea>
                            </div>
                            <div className="w-full"  data-aos="fade-up" data-aos-delay="200">
                                <button className="bg-[#ab4f43] text-white font-bold rounded-[3px] text-lg p-8 py-3">Send Now</button>
                            </div>
                        </form>
                    </div>
                    <div className="flex items-center justify-center w-full lg:w-[60%]" data-aos="fade-up" data-aos-delay="200">
                        <img src={banner4} alt="" className="w-full h-full" />
                    </div>
                </div>
                <div className="w-full lg:w-[90%] mx-auto rounded-full lg:p-0 px-2">
                    <div className="w-full rounded-xl overflow-hidden shadow-lg">
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.51405373155!2d36.89503399144966!3d-1.2436234781153424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f15b9f24ea1c5%3A0x486fe9a009446c8e!2sSharp%20Corner!5e0!3m2!1sen!2ske!4v1755543645898!5m2!1sen!2ske"
                        //   width="600"
                        //   height="450"
                          className="w-full h-[400px]"
                          style={{ border: 0 }}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          title="The Ark of God Ministry Location"
                          aria-label="Map to The Ark of God Ministry in Dandora Phase 5"
                        />
                    </div>
                </div>
            </section>
        </div>
        </>
    )
}
export default Contact

