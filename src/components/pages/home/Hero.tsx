import React from "react";
import { FaFacebookF, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";

interface SocialLink {
  name: string;
  href: string;
  icon: React.ReactNode;
}

const socialLinks: SocialLink[] = [
  { name: "Facebook", href: "#", icon: <FaFacebookF /> },
  { name: "Twitter", href: "#", icon: <FaXTwitter /> },
  { name: "LinkedIn", href: "#", icon: <FaLinkedinIn /> },
];

const Hero: React.FC = () => {
  return (
    <section className="hero" id="home">
      {/* Image Banner */}
      <figure className="hero-banner">
        <picture>
          <source
            srcSet="/assets/images/hero-banner.png"
            media="(min-width: 768px)"
          />
          <source
            srcSet="/assets/images/hero-banner-md.png"
            media="(min-width: 500px)"
          />
          <img
            src="/assets/images/hero-banner-sm.png"
            alt="A man in a blue shirt with a happy expression"
            className="w-100"
          />
        </picture>
      </figure>

      {/* Content */}
      <div className="hero-content">
        <h2 className="h2 hero-title">We Design & Build Creative Products</h2>
        <a href="#contact" className="btn btn-primary">
          Get in touch
        </a>
      </div>

      {/* Social Links */}
      <ul className="hero-social-list">
        {socialLinks.map((social) => (
          <li key={social.name}>
            <a href={social.href} className="hero-social-link">
              {social.icon}
              <div className="tooltip">{social.name}</div>
            </a>
          </li>
        ))}
      </ul>

      <a href="#stats" className="scroll-down">
        Scroll
      </a>
    </section>
  );
};

export default Hero;
