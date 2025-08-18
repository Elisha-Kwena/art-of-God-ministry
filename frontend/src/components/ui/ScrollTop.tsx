import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isVisible && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="group relative p-3 bg-[#ab4f43] text-white rounded-full shadow-lg hover:bg-[#8a3c32] transition-all duration-300 flex items-center justify-center"
        >
          <FaArrowUp className="w-5 h-5" />
          <span className="tooltip">Back to Top</span>
        </button>
      )}
    </div>
  );
};

export default ScrollTop;