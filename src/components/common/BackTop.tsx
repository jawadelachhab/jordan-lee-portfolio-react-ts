import { FaArrowUp } from "react-icons/fa6";
import React, { useState, useEffect } from "react";

const BackTop: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsActive(window.scrollY >= 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`go-top ${isActive ? "active" : ""}`}
      title="Go to Top"
      onClick={scrollToTop}
    >
      <FaArrowUp />
    </button>
  );
};

export default BackTop;
