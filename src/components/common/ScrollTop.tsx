import { FaArrowUp } from "react-icons/fa6";
import React, { useState, useEffect } from "react";

const ScrollTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY >= 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href="#top"
      className={`go-top ${isVisible ? "active" : ""}`}
      title="Go to Top"
      data-go-top
    >
      <FaArrowUp/>
    </a>
  );
};

export default ScrollTop;
