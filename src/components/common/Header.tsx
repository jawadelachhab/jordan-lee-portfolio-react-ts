import  { useState, useEffect } from "react";
import { useTheme } from "../../ThemeContext";
const Header = () => {
  const { toggleTheme, theme } = useTheme();
const [isNavOpen, setIsNavOpen] = useState(false);
 const [isScrolled, setIsScrolled] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen((prev) => !prev);
  };

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
   <header className={`header ${isScrolled ? "active" : ""}`}>
      <div className="container">
        <h1 className="h1 logo">
          <a href="#">
            Jordan Lee<span>.</span>
          </a>
        </h1>

        <div className="navbar-actions">
          <select name="language" id="lang">
            <option value="en">En</option>
            <option value="ar">Ar</option>
          </select>

          <button
            className={`theme-btn ${theme === "light_theme" ? "active" : ""}`}
            aria-label="Change Theme"
            title="Change Theme"
            onClick={toggleTheme}
          >
            <span className="icon"></span>
          </button>
        </div>

        <button
          
          className={`nav-toggle-btn ${isNavOpen ? "active" : ""}`}
          aria-label="Toggle Menu"
          title="Toggle Menu"
           onClick={handleNavToggle}
        >
          <span className="one"></span>
          <span className="two"></span>
          <span className="three"></span>
        </button>

       <nav className={`navbar ${isNavOpen ? "active" : ""}`}>
          <ul className="navbar-list">
            <li>
              <a href="#home" className="navbar-link">
                Home.
              </a>
            </li>

            <li>
              <a href="#about" className="navbar-link">
                About.
              </a>
            </li>

            <li>
              <a href="#skills" className="navbar-link">
                Skills.
              </a>
            </li>

            <li>
              <a href="#portfolio" className="navbar-link">
                Portfolio.
              </a>
            </li>

            <li>
              <a href="#contact" className="navbar-link">
                Contact.
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
