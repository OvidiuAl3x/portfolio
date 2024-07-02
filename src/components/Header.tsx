import { useState, useRef, useEffect } from "react";

import menu from "../assets/icons/menu.png";
import close from "../assets/icons/close.png";

const Header: React.FC = () => {
  const [navOpen, setNavOpen] = useState(false);

  // Ref for the navbar menu
  const navMenuRef = useRef<HTMLDivElement>(null);

  // Function to toggle navbar
  const toggleNav = () => {
    setNavOpen((prev) => !prev);
  };

  // Effect to handle click outside of navbar menu
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        navMenuRef.current &&
        !navMenuRef.current.contains(event.target as Node)
      ) {
        setNavOpen(false);
      }
    };

    if (navOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
      document.body.style.overflow = "hidden"; // Disable scrolling on body
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.body.style.overflow = ""; // Re-enable scrolling on body
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.body.style.overflow = ""; // Ensure scrolling is re-enabled on component unmount
    };
  }, [navOpen]);

  return (
    <nav className="flex mt-1 font-fireCode justify-between py-5 font-firaCode animate-transform w-[90%] xl:w-[70%] mx-auto">
      <h1 className="text-xl">Ovidiu Ciobanu</h1>

      {/* Desktop navigation */}
      <div className="hidden md:flex gap-5 items-center justify-center text-grayLight">
        <a href="#about" className="hover:text-textWhite">
          About
        </a>
        <a href="#projects" className="hover:text-textWhite">
          Projects
        </a>
        <a href="#contacts" className="hover:text-textWhite">
          Contacts
        </a>
      </div>

      {/* Mobile menu toggle */}
      <img
        src={menu}
        alt="navbar-menu"
        className="w-8 block md:hidden cursor-pointer"
        onClick={toggleNav}
      />

      {/* Mobile navigation */}
      {navOpen && (
        <div
          ref={navMenuRef}
          className="flex flex-col items-center justify-center absolute top-0 left-0 w-full h-full   bg-grayDark text-grayLight text-xl  gap-5 transition-all duration-500 z-50 "
        >
          <img
            src={close}
            alt=""
            className="absolute top-4 right-4 w-8 animate-opacity"
            onClick={toggleNav}
          />
          <a href="#about" onClick={toggleNav} className="animate-opacity">
            About
          </a>
          <a href="#projects" onClick={toggleNav} className="animate-opacity">
            Projects
          </a>
          <a href="#contacts" onClick={toggleNav} className="animate-opacity">
            Contacts
          </a>
        </div>
      )}
    </nav>
  );
};

export default Header;
