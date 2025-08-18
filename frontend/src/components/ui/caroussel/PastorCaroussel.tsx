import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import PastorCard from '../cards/PastorCards';
import { clergy } from '../../../data/clergy';

export default function PastorCaroussel() {
  const mobileSwiperRef = useRef(null);
  const desktopSwiperRef = useRef(null);

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

        {/* Desktop Pagination Dots
        <div className="flex gap-2 mt-6">
          {clergy.map((_, index) => (
            <button
              key={index}
              onClick={() => desktopSwiperRef.current?.slideTo(index)}
              className={`w-3 h-3 rounded-full transition-all ${desktopSwiperRef.current?.activeIndex === index ? 'bg-[#ab4f43] w-6' : 'bg-gray-300'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))} */}
        {/* </div> */}
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
          
          {/* Mobile Pagination Dots */}
          {/* <div className="flex gap-2 mx-4">
            {clergy.map((_, index) => (
              <button
                key={index}
                onClick={() => mobileSwiperRef.current?.slideTo(index)}
                className={`w-2 h-2 rounded-full transition-all ${mobileSwiperRef.current?.realIndex === index ? 'bg-[#ab4f43] w-4' : 'bg-gray-300'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div> */}
          
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