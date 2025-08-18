import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Keyboard } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import PastorCard from '../cards/PastorCards';
import { clergy } from '../../../data/clergy';

export default function PastorCaroussel() {
  const mobileSwiperRef = useRef<SwiperType | null>(null);
  const desktopSwiperRef = useRef<SwiperType | null>(null);

  return (
    <>
      {/* Desktop Slide with Custom Navigation */}
      <div className="hidden w-full lg:flex flex-col items-center relative">
        <div className="w-full h-[500px] relative">
          <Swiper
            slidesPerView={4}
            spaceBetween={40}
            cssMode={true}
            pagination={false}
            navigation={false}
            mousewheel={true}
            keyboard={true}
            modules={[Mousewheel, Keyboard]}
            className="mySwiper"
            onSwiper={(swiper) => (desktopSwiperRef.current = swiper)}
          >
            {clergy.map(person => (
              <SwiperSlide key={person.id}>
                <PastorCard {...person} />
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Desktop Navigation Arrows */}
          <button 
            onClick={() => desktopSwiperRef.current?.slidePrev()}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-[#ab4f43] text-white hover:bg-[#8a3c32] transition shadow-lg transform -translate-x-4"
            aria-label="Previous slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={() => desktopSwiperRef.current?.slideNext()}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-[#ab4f43] text-white hover:bg-[#8a3c32] transition shadow-lg transform translate-x-4"
            aria-label="Next slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Slide with Custom Navigation */}
      <div className="lg:hidden w-full flex flex-col items-center relative">
        <div className="w-full h-[500px]">
          <Swiper
            slidesPerView={1.3}
            spaceBetween={10}
            loop={true}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={false}
            navigation={false}
            modules={[]}
            className="mySwiper"
            onSwiper={(swiper) => (mobileSwiperRef.current = swiper)}
          >
            {clergy.map(person => (
              <SwiperSlide key={person.id}>
                <PastorCard {...person} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Mobile Navigation Controls */}
        <div className="flex justify-center items-center gap-6 mt-6 mb-8 w-full">
          <button 
            onClick={() => mobileSwiperRef.current?.slidePrev()}
            className="p-3 rounded-full bg-[#ab4f43] text-white hover:bg-[#8a3c32] transition shadow-lg"
            aria-label="Previous slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={() => mobileSwiperRef.current?.slideNext()}
            className="p-3 rounded-full bg-[#ab4f43] text-white hover:bg-[#8a3c32] transition shadow-lg"
            aria-label="Next slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}