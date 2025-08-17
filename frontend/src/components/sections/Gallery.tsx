import React, { useState } from "react";
import { Link } from "react-router-dom";

import left1 from '../../../public/images/gallery/left1.jpg';
import left2 from '../../../public/images/gallery/left2.jpg';
import right1 from '../../../public/images/gallery/right1.jpg';
import right2 from '../../../public/images/gallery/right2.jpg';
import middle1 from '../../../public/images/gallery/middle1.jpg';
import bottom1 from '../../../public/images/gallery/bottom1.jpg';
import bottom2 from '../../../public/images/gallery/bottom2.jpg';

interface ImageData {
  src: string;
  alt: string;
  caption?: string;
}

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);

  const images = {
    left1: { src: left1, alt: "Left image 1", caption: "Worship service - January 2024" },
    left2: { src: left2, alt: "Left image 2", caption: "Bible study group" },
    right1: { src: right1, alt: "Right image 1", caption: "Community outreach" },
    right2: { src: right2, alt: "Right image 2", caption: "Children's ministry" },
    middle1: { src: middle1, alt: "Middle image", caption: "Sunday sermon" },
    bottom1: { src: bottom1, alt: "Bottom image 1", caption: "Prayer meeting" },
    bottom2: { src: bottom2, alt: "Bottom image 2", caption: "Baptism ceremony" }
  };

  const openModal = (image: ImageData) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  return (
    <>
      <section className="w-full py-12 welcome">
        <div className="w-full lg:w-[90%] mx-auto flex flex-col items-center justify-center gap-4 px-2">
          <div className="w-full">
            <h1 className="text-4xl lg:text-6xl text-center mb-4 font-bold text-[#ab4f43]" data-aos="fade-up" data-aos-delay="400">Visualizing Our Faith Journey</h1>
            <p className="text-xl text-black text-center" data-aos="fade-up" data-aos-delay="400">Through the Lens of Faith: Moments That Move Us</p>
            <p className="text-xl text-black text-center" data-aos="fade-up" data-aos-delay="400">A living scrapbook of worship, service, and fellowship—where God's love becomes visible.</p>
          </div>
          <p className="text-xl text-black text-center" data-aos="fade-up" data-aos-delay="400">CLICK TO VIEW FULL PHOTO</p>
          <div className="w-full lg:h-[90vh] h-[50vh] py-4 flex items-center justify-between gap-2">
            {/* left */}
            <div className="w-1/4 h-full flex flex-col gap-2">
              <div className="h-1/3 w-full bg-red rounded-md cursor-pointer" onClick={() => openModal(images.left1)} data-aos="fade-up" data-aos-delay="400">
                <img src={left1} alt={images.left1.alt} className="rounded-md w-full h-full object-cover"/>
              </div>
              <div className="h-2/3 w-full bg-red rounded-md cursor-pointer" onClick={() => openModal(images.left2)} data-aos="fade-down" data-aos-delay="400">
                <img src={left2} alt={images.left2.alt} className="rounded-md w-full h-full object-cover"/>
              </div>
            </div>
            
            {/* middle */}
            <div className="w-2/4 h-full flex flex-col gap-2">
              <div className="w-full bg-red h-[60%] rounded-md cursor-pointer" onClick={() => openModal(images.middle1)} data-aos="zoom-in" data-aos-delay="400">
                <img src={middle1} alt={images.middle1.alt} className="rounded-md w-full h-full object-cover"/>
              </div>
              <div className="w-full h-[40%] flex items-center justify-between gap-2">
                <div className="h-full rounded-md bg-red w-[40%] cursor-pointer" onClick={() => openModal(images.bottom1)} data-aos="fade-up" data-aos-delay="400">
                  <img src={bottom1} alt={images.bottom1.alt} className="rounded-md w-full h-full object-cover"/>
                </div>
                <div className="h-full rounded-md bg-red w-[60%] cursor-pointer" onClick={() => openModal(images.bottom2)} data-aos="fade-down" data-aos-delay="400">
                  <img src={bottom2} alt={images.bottom2.alt} className="rounded-md w-full h-full object-cover"/>
                </div>
              </div>
            </div>
            
            {/* right */}
            <div className="w-1/4 h-full flex flex-col gap-2">
              <div className="h-2/3 w-full bg-red rounded-md cursor-pointer" onClick={() => openModal(images.right1)} data-aos="fade-up" data-aos-delay="400">
                <img src={right1} alt={images.right1.alt} className="rounded-md w-full h-full object-cover"/>
              </div>
              <div className="h-1/3 w-full bg-red rounded-md cursor-pointer" onClick={() => openModal(images.right2)} data-aos="fade-down" data-aos-delay="400">
                <img src={right2} alt={images.right2.alt} className="rounded-md w-full h-full object-cover"/>
              </div> 
            </div>
          </div>
          <div className="mt-16 flex flex-col items-center justify-center">
            <p className="mb-8 text-xl" data-aos="fade-up" data-aos-delay="400">Share your photos with us @ChurchName #OurFaithFamily</p>
            <Link to="" className="uppercase text-xl lg:text-3xl text-[#ab4f43] border-[2px] border-[#ab4f43] p-2 px-5 rounded-[3px] transition-all duration-300 hover:text-white hover:bg-[#ab4f43]" data-aos="fade-up" data-aos-delay="400">View more in our Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
          onClick={closeModal}
        >
          <div className="relative max-w-[90vw] max-h-[90vh]">
            <button 
              className="absolute -top-12 right-0 text-white text-4xl hover:text-gray-300"
              onClick={closeModal}
            >
              &times;
            </button>
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt} 
              className="max-w-full max-h-[80vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            {selectedImage.caption && (
              <div className="text-white text-center mt-4 text-xl">
                {selectedImage.caption}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;