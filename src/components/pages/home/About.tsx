import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  const container = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.2, duration: 0.6 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="about" id="about">
      {/* About Image */}
      <motion.figure
        className="about-banner"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src="./images/about-banner.png"
          alt="A man in a alice blue shirt with a thinking expression"
          className="w-100"
        />
      </motion.figure>

      
      <motion.div
        className="about-content section-content"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          className="section-subtitle"
          
        >
          About me
        </motion.p>

        <motion.h2 className="h3 section-title" variants={item}>
          Need a Creative Product? I can Help You!
        </motion.h2>

        <motion.p className="section-text" variants={item}>
          Hi! I’m Jordan Lee, and I’m a developer who has passion for building
          clean web applications with intuitive functionalities. I enjoy the
          process of turning ideas into reality using creative solutions. I’m
          always curious about learning new skills, tools, and concepts. In
          addition to working on various solo full stack projects, I have worked
          with creative teams, which involves daily stand-ups and
          communications, source control, and project management.
        </motion.p>

        <motion.div className="btn-group" variants={item}>
          <motion.button
            className="btn btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Hire me
          </motion.button>

          <motion.button
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download cv
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
