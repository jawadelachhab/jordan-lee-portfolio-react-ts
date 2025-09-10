import { FaArrowUp } from "react-icons/fa6";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ScrollTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY >= 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTopVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { type: "spring" as const, bounce: 0.3, duration: 0.5 } },
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          href="#top"
          className="go-top"
          title="Go to Top"
          data-go-top
          variants={scrollTopVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <FaArrowUp />
        </motion.a>
      )}
    </AnimatePresence>
  );
};

export default ScrollTop;
