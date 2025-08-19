import React, { useState } from "react";
import { ROUTES } from '../../config/routes';
import { Link } from "react-router-dom";
import Search from '../../components/ui/search/Search';
import gallery from '../../../public/images/banners/gallery.jpg';
import { galleryData } from "../../data/gallery";

const Gallery: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [activeCategory, setActiveCategory] = useState("All");
    const [activeMediaType, setActiveMediaType] = useState('Images');
    const [searchTerm, setSearchTerm] = useState("");
    const [modalContent, setModalContent] = useState<{
        type: 'image' | 'video';
        src: string;
        alt: string;
        youtubeId?: string;
    } | null>(null);

    const ITEMS_PER_PAGE = 12;

    // Filter logic
    const filteredData = galleryData.filter(item => {
        const matchesCategory = activeCategory === "All" || item.category === activeCategory;
        const matchesMediaType = activeMediaType === "All" || 
                              (activeMediaType === "Images" && item.type === "image") || 
                              (activeMediaType === "Videos" && item.type === "video");
        const matchesSearch = searchTerm === "" || item.alt.toLowerCase().includes(searchTerm.toLowerCase());

        return matchesCategory && matchesMediaType && matchesSearch;
    });

    // Pagination logic
    const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
    const currentItems = filteredData.slice(
        (currentPage - 1) * ITEMS_PER_PAGE, 
        currentPage * ITEMS_PER_PAGE
    );

    // Handle page change
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    // Open modal with content
    const openModal = (item: typeof galleryData[0]) => {
        setModalContent({
            type: item.type as 'image' | 'video',
            src: item.src,
            alt: item.alt,
            youtubeId: item.youtubeId
        });
    };

    // Close modal
    const closeModal = () => {
        setModalContent(null);
    };

    return (
        <>
            <div className="w-full flex flex-col gap-4 pb-12 relative">
                {/* Hero Section */}
                <section className="hero w-full flex flex-col items-center justify-center gap-2 relative h-[30vh] lg:h-[50vh]">
                    <div className="absolute w-full h-full left-0 top-0">
                        <img src={gallery} alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-full flex flex-col items-center justify-center gap-2 z-10">
                        <div className="flex items-end justify-center gap-2" data-aos="fade-up" data-aos-delay="200">
                            <Link to={ROUTES.HOME} className="text-black text-xl font-extrabold hover:text-red-600">Home</Link>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-[#ab4f43] font-bold">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                </svg>
                            </span>
                            <p className="text-xl text-red-600 font-extrabold">Gallery</p>
                        </div>
                        <h1 className="text-4xl lg:text-6xl font-extrabold text-[#ab4f43]" data-aos="fade-up" data-aos-delay="200">Gallery </h1>
                        <h2 className="text-xl lg:text-2xl text-white font-extrabold lg:font-bold text-center" data-aos="fade-up" data-aos-delay="400">Welcome to Our Gallery – Celebrating Faith, Fellowship, and Miracles</h2>
                    </div>
                </section>

                <Search 
                    onSearch={setSearchTerm}
                    onCategoryChange={setActiveCategory}
                    onMediaTypeChange={setActiveMediaType}
                    setCurrentPage={setCurrentPage}
                />

                <section className="w-full">
                    <div className="w-full lg:w-[90%] mx-auto lg:p-0 px-2 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
                        {currentItems.map(image => (
                            <div 
                                key={image.id} 
                                className="h-[200px] lg:h-[260px] shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
                                onClick={() => openModal(image)}
                            >
                                {image.type === "image" ? (
                                    <img 
                                        src={image.src} 
                                        alt={image.alt} 
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                                    />
                                ) : (
                                    <div className="relative w-full h-full group">
                                        {/* Video Thumbnail Image */}
                                        <img 
                                            src={image.src} 
                                            alt={image.alt}
                                            className="w-full h-full object-cover group-hover:brightness-75 transition-all duration-300"
                                        />

                                        {/* Play Button Overlay */}
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <div className="w-14 h-14 lg:w-16 lg:h-16 bg-[#ab4f43]/90 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform">
                                                <svg 
                                                    xmlns="http://www.w3.org/2000/svg" 
                                                    className="h-6 w-6 lg:h-8 lg:w-8 text-white" 
                                                    viewBox="0 0 20 20" 
                                                    fill="currentColor"
                                                >
                                                    <path 
                                                        fillRule="evenodd" 
                                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" 
                                                        clipRule="evenodd" 
                                                    />
                                                </svg>
                                            </div>
                                        </div>

                                        {/* Video Badge */}
                                        <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                                            Video
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Pagination Controls */}
                    {totalPages > 1 && (
                        <div className="flex justify-center mt-8 gap-2">
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                                <button
                                    key={page}
                                    onClick={() => handlePageChange(page)}
                                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                                        currentPage === page 
                                            ? 'bg-[#ab4f43] text-white' 
                                            : 'bg-gray-200 hover:bg-gray-300'
                                    }`}
                                >
                                    {page}
                                </button>
                            ))}
                        </div>
                    )}
                </section>
            </div>

            {/* Modal */}
            {modalContent && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90" onClick={closeModal}>
                    <div className="relative w-full max-w-6xl max-h-[90vh]">
                        <button 
                            onClick={closeModal}
                            className="absolute -top-10 right-0 text-white hover:text-[#ab4f43] z-10"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        
                        <div className="bg-white rounded-lg overflow-hidden" onClick={e => e.stopPropagation()}>
                            {modalContent.type === 'image' ? (
                                <img 
                                    src={modalContent.src} 
                                    alt={modalContent.alt}
                                    className="w-full h-full max-h-[80vh] object-contain"
                                />
                            ) : (
                                <div className="relative w-full h-0 pb-[56.25%]"> {/* 16:9 aspect ratio */}
                                    <iframe 
                                        className="absolute top-0 left-0 w-full h-full"
                                        src={`https://www.youtube.com/embed/${modalContent.youtubeId}?autoplay=1`}
                                        title={modalContent.alt}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Gallery;