import React from "react";
import { useRef } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight,faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import ClergyCard from "../cards/ClergyCard";

import { Swiper, SwiperSlide } from 'swiper/react';
import {Swiper as SwiperType} from 'swiper'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import { clergy } from "../../../data/clergy";

import dove from '../../../../public/images/banners/dove.png'
const ClergyCaroussel:React.FC = () =>{
    const swiperRef = useRef<SwiperType | null>(null)
    return(
        <>
        <div className="w-full flex gap-3 relative h-[500px]">
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
                
                {/* <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide> */}
            </Swiper>

            
        </div>
            
        </>
    )
}
export default ClergyCaroussel

