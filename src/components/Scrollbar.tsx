// src/components/CustomScrollbar.tsx
import React, { useEffect, useState } from "react";

const CustomScrollbar: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const totalHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollPosition = window.scrollY;
    const scrollProgress = (scrollPosition / totalHeight) * 100;
    setScrollProgress(scrollProgress);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-2  z-50">
      <div
        className="h-1 bg-grayLight"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};

export default CustomScrollbar;
