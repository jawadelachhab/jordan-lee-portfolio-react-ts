import React from "react";
import { FaFacebookF, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import { motion } from "framer-motion";

type SocialLink = {
  name: string;
  href: string;
  icon: React.ReactNode;
};

const socialLinks: SocialLink[] = [
  { name: "Facebook", href: "#", icon: <FaFacebookF /> },
  { name: "Twitter", href: "#", icon: <FaXTwitter /> },
  { name: "LinkedIn", href: "#", icon: <FaLinkedinIn /> },
];

const Hero: React.FC = () => {
  // Framer Motion variants
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
    <section className="hero" id="home">
      {/* Image Banner */}
      <motion.figure
        className="hero-banner"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <picture>
          <source
            srcSet="./images/hero-banner.png"
            media="(min-width: 768px)"
          />
          <source
            srcSet="./images/hero-banner-md.png"
            media="(min-width: 500px)"
          />
          <img
            src="./images/hero-banner-sm.png"
            alt="A man in a blue shirt with a happy expression"
            className="w-100"
          />
        </picture>
      </motion.figure>

      {/* Content */}
      <motion.div
        className="hero-content"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 className="h2 hero-title" variants={item}>
          We Design & Build Creative Products
        </motion.h2>
        <motion.a
          href="#contact"
          className="btn btn-primary"
          variants={item}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get in touch
        </motion.a>
      </motion.div>

      {/* Social Links */}
      <motion.ul
        className="hero-social-list"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {socialLinks.map((social) => (
          <motion.li key={social.name} variants={item}>
            <a href={social.href} className="hero-social-link">
              {social.icon}
              <div className="tooltip">{social.name}</div>
            </a>
          </motion.li>
        ))}
      </motion.ul>

      <motion.a
        href="#stats"
        className="scroll-down"
       
      >
        Scroll
      </motion.a>
    </section>
  );
};

export default Hero;
