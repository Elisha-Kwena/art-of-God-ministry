import React, {useState} from 'react'

import { searchToggle } from '../../../data/gallery'
import { galleryCategories } from '../../../data/gallery'

interface SearchProps {
    onSearch: (term: string) => void;
    onCategoryChange: (category: string) => void;
    onMediaTypeChange: (type: string) => void;
    setCurrentPage: (page: number) => void;
}

const Search:React.FC<SearchProps> = ({onSearch, onCategoryChange, onMediaTypeChange,setCurrentPage }) =>{
    const [searchInput, setSearchInput] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");
    const [activeMediaType, setActiveMediaType] = useState("Images");

        
    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        onSearch(searchInput);
        setCurrentPage(1);
    };

        
    const handleCategoryClick = (category: string) => {
        setActiveCategory(category);
        onCategoryChange(category);
        setCurrentPage(1);
    };

    const handleMediaTypeClick = (type: string) => {
        setActiveMediaType(type);
        onMediaTypeChange(type);
        setCurrentPage(1);
    };

    return(
        <>
        <div className="navigation w-full flex flex-col items-center justify-center gap-2 mt-2 ">
            <div className="w-full lg:w-[50%] lg:p-0 px-2 flex items-center justify-between gap-3 relative">
            <form onSubmit={handleSearch} className="w-full relative">
                <input 
                    type="text"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    className="w-full p-3 text-lg text-black border-2 pl-6 pr-14 border-gray-300 rounded-full focus:border-[#ab4f43] focus:ring-2 focus:ring-[#ab4f43]/30 focus:outline-none transition-all duration-200 placeholder-gray-400"
                    placeholder="Find moments of worship, sermons, or events..."
                />
                <button 
                    type="submit"
                    className="absolute right-1 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center bg-[#ab4f43] hover:bg-[#8a3c32] transition-colors"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </button>
            </form>
            </div>
            <div className="w-full lg:w-[70%] flex lg:flex-row flex-col-reverse items-center justify-between gap-3 relative mt-3">
                {/* Category Filters */}
                <div className="flex flex-wrap  items-center justify-center gap-2">
                    <button 
                        onClick={() => handleCategoryClick("All")}
                        className={`shadow-md rounded-full px-4 py-2 font-bold transition-all duration-300 ${
                            activeCategory === "All" 
                                ? 'bg-[#ab4f43] text-white' 
                                : 'bg-white text-black hover:bg-gray-100'
                        }`}
                    >
                        All
                    </button>
                    {galleryCategories.map(item => (
                        <button 
                            key={item.id}
                            onClick={() => handleCategoryClick(item.term)}
                            className={`shadow-md rounded-full px-4 py-2 font-bold transition-all duration-300 ${
                                activeCategory === item.term 
                                    ? 'bg-[#ab4f43] text-white' 
                                    : 'bg-white text-black hover:bg-gray-100'
                            }`}
                        >
                            {item.term}
                        </button>
                    ))}
                </div>
                <div className="flex items-center justify-center gap-2 bg-gray-100 p-1 rounded-full">
                    {searchToggle.map(item => (
                        <button 
                            key={item.id}
                            onClick={() => handleMediaTypeClick(item.term)}
                            className={`rounded-full px-4 py-2 font-bold transition-all duration-300 ${
                                activeMediaType === item.term 
                                    ? 'bg-[#ff1b1b] text-white shadow-inner' 
                                    : 'bg-transparent text-black hover:bg-gray-200'
                            }`}
                        >
                            {item.term}
                        </button>
                    ))}
                </div>
            </div>
        </div>
        </>
    )
}
export default Search


