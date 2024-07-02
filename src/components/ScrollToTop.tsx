import { useEffect, useState } from "react";
import arrow from "../assets/icons/right-arrow.png";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleToTop = () => {
    window.scrollTo(0, 0);
  };

  const toggleVisibility = () => {
    if (window.scrollY > window.innerHeight) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <div className="absolute">
          <button
            className="scrollToTopHover w-10 h-10 p-3 md:w-12 md:h-12 md:p-3 bg-textWhite rounded-xl fixed right-6 bottom-4 md:right-10 md:bottom-8 cursor-pointer animate-opacity"
            onClick={handleToTop}
          >
            <img src={arrow} alt="scroll-to-top" className="-rotate-90" />
          </button>
        </div>
      )}
    </>
  );
};

export default ScrollToTop;
