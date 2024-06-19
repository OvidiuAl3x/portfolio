import { Link } from "react-router-dom";
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
    <nav className="flex mt-1 font-fireCode md:mx-5 justify-between py-5 font-firaCode">
      <Link to="/" className="text-xl">
        Ovidiu Ciobanu
      </Link>

      {/* Desktop navigation */}
      <div className="hidden md:flex gap-5 items-center justify-center text-grayLight">
        <a href="#about" className="hover:text-textWhite">
          About
        </a>
        <Link to="/projects" className="hover:text-textWhite">
          Projects
        </Link>
        <Link to="/" className="hover:text-textWhite">
          Contacts
        </Link>
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
          className="flex flex-col absolute right-0 items-center justify-center text-grayLight bg-grayDark h-full w-full text-xl top-0 gap-5 transition-all duration-500"
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
          <Link to="/projects" onClick={toggleNav} className="animate-opacity">
            Projects
          </Link>
          <Link to="/" onClick={toggleNav} className="animate-opacity">
            Contacts
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Header;
