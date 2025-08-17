import React from "react";
import { useRef } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight,faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import ClergyCard from "../cards/ClergyCard";

import { Swiper, SwiperSlide } from 'swiper/react';
import {Swiper as SwiperType} from 'swiper'


// Replace all Swiper CSS imports with:
// import '../node_modules/swiper/swiper.min.css';
// import '../node_modules/swiper/modules/navigation.min.css';
// import '../node_modules/swiper/modules/pagination.min.css';


import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import { clergy } from "../../../data/clergy";

import dove from '../../../../public/images/banners/dove.png'
const ClergyCaroussel:React.FC = () =>{
    const swiperRef = useRef<SwiperType | null>(null)
    return(
        <>
        <div className="hidden w-full lg:flex gap-3 relative h-[500px]">
            <div className="feed-background w-full h-full bottom-0 left-0 absolute px-16 ">
                <img src={dove} alt="" />
            </div>
            <div className="absolute lg:w-[100px] w-[50px] h-full left-0 z-10 bg-gradient-to-r from-[#f0f0f0] to-transparent"></div>
            <div className="absolute lg:w-[100px] w-[50px] h-full right-0 z-10 bg-gradient-to-l from-[#f0f0f0] to-transparent"></div>
            <div className="nav-buttons flex gap-2 absolute z-10 left-2 -bottom-8 " data-aos="fade-up" data-aos-delay="400">
                <button
                className='flex items-center justify-center bg-transparent text-2xl text-[#ab4f43] w-12 h-12 rounded-full border-[3px] border-[#ab4f43] transition-all duration-300 hover:bg-[#ab4f43] hover:text-white'
                onClick={() => swiperRef.current?.slidePrev()}
                >
                    <FontAwesomeIcon icon={faArrowLeft}/>
                </button>
                <button
                className='flex items-center justify-center bg-transparent text-2xl text-[#ab4f43] w-12 h-12 rounded-full border-[3px] border-[#ab4f43] transition-all duration-300 hover:bg-[#ab4f43] hover:text-white'
                onClick={() => swiperRef.current?.slideNext()}
                >
                    <FontAwesomeIcon icon={faArrowRight}/>
                </button>
            </div>
            <Swiper
                slidesPerView={2.5}
                spaceBetween={10}
                loop={true}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                  waitForTransition:false,
                  pauseOnMouseEnter:false,
                }}
                speed={1000}
                pagination={{
                  clickable: true,
                }}
                navigation={false}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
                onSwiper = {(swiper) =>{
                    swiperRef.current = swiper
                }}
                onSlideChange={() => {
                    swiperRef.current?.autoplay?.start();
                }}
                data-aos="fade-up" data-aos-delay="400"
            >
                {clergy.map(person => (
                    <SwiperSlide key={person.id}>
                        <ClergyCard 
                            name={person.name}
                            title={person.title}
                            role={person.role}
                            responsibilities={person.responsibilities}
                            image={person.image}
                            bio={person.bio}
                            phone={person.phone}
                            email={person.email}
                        />
                    </SwiperSlide>
                ))}
                
            </Swiper>

            
        </div>

        {/* mobile slide */}
        <div className="lg:hidden w-full flex gap-3 relative h-[500px]">
            <div className="feed-background w-full h-full bottom-0 left-0 absolute px-16 ">
                <img src={dove} alt="" />
            </div>
            <div className="absolute lg:w-[100px] w-[50px] h-full left-0 z-10 bg-gradient-to-r from-[#f0f0f0] to-transparent"></div>
            <div className="absolute lg:w-[100px] w-[50px] h-full right-0 z-10 bg-gradient-to-l from-[#f0f0f0] to-transparent"></div>
            <div className="nav-buttons flex gap-2 absolute z-10 left-2 -bottom-8 ">
                <button
                className='flex items-center justify-center bg-transparent text-2xl text-[#ab4f43] w-12 h-12 rounded-full border-[3px] border-[#ab4f43] transition-all duration-300 hover:bg-[#ab4f43] hover:text-white'
                onClick={() => swiperRef.current?.slidePrev()}
                >
                    <FontAwesomeIcon icon={faArrowLeft}/>
                </button>
                <button
                className='flex items-center justify-center bg-transparent text-2xl text-[#ab4f43] w-12 h-12 rounded-full border-[3px] border-[#ab4f43] transition-all duration-300 hover:bg-[#ab4f43] hover:text-white'
                onClick={() => swiperRef.current?.slideNext()}
                >
                    <FontAwesomeIcon icon={faArrowRight}/>
                </button>
            </div>
            <Swiper
                slidesPerView={1.3}
                spaceBetween={10}
                loop={true}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                  waitForTransition:false,
                  pauseOnMouseEnter:false,
                }}
                speed={1000}
                pagination={{
                  clickable: true,
                }}
                navigation={false}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
                onSwiper = {(swiper) =>{
                    swiperRef.current = swiper
                }}
                onSlideChange={() => {
                    swiperRef.current?.autoplay?.start();
                }}
                data-aos="fade-up" data-aos-delay="400"
            >
                {clergy.map(person => (
                    <SwiperSlide key={person.id}>
                        <ClergyCard 
                            name={person.name}
                            title={person.title}
                            role={person.role}
                            responsibilities={person.responsibilities}
                            image={person.image}
                            bio={person.bio}
                            phone={person.phone}
                            email={person.email}
                        />
                    </SwiperSlide>
                ))}
                
            </Swiper>

            
        </div>
            
        </>
    )
}
export default ClergyCaroussel

