import { FaFacebookF ,FaXTwitter,FaLinkedinIn} from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <figure className="hero-banner">
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
      </figure>

      <div className="hero-content">
        <h2 className="h2 hero-title">We Design & Build Creative Products</h2>
        <a href="#contact" className="btn btn-primary">
          Get in touch
        </a>
      </div>

      <ul className="hero-social-list">
        <li>
          <a href="#" className="hero-social-link">
            
            <FaFacebookF/>
            <div className="tooltip">Facebook</div>
          </a>
        </li>
        <li>
          <a href="#" className="hero-social-link">
            
            <FaXTwitter/>
            <div className="tooltip">Twitter</div>
          </a>
        </li>
        <li>
          <a href="#" className="hero-social-link">
            
            <FaLinkedinIn/>
            <div className="tooltip">LinkedIn</div>
          </a>
        </li>
      </ul>

      <a href="#stats" className="scroll-down">
        Scroll
      </a>
    </section>
  );
};

export default Hero;
