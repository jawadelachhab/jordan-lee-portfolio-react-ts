import { useState, useEffect } from "react";
import { useTheme } from "../../ThemeContext";
import { motion } from "framer-motion";

type NavLink = {
  id: string;
  label: string;
  href: string;
};

const navLinks: NavLink[] = [
  { id: "home", label: "Home.", href: "#home" },
  { id: "about", label: "About.", href: "#about" },
  { id: "skills", label: "Skills.", href: "#skills" },
  { id: "portfolio", label: "Portfolio.", href: "#portfolio" },
  { id: "contact", label: "Contact.", href: "#contact" },
];

const headerVariants = {
  hidden: { y: -50, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { type: "spring" as const, bounce: 0.2, duration: 0.8 } 
  },
};

const navLinkVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.3 },
  }),
};

const Header = () => {
  const { toggleTheme, theme } = useTheme();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleNavToggle = () => setIsNavOpen((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY >= 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`header ${isScrolled ? "active" : ""}`}
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container">
        <motion.h1 
          className="h1 logo"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", duration: 0.8, bounce: 0.2 }}
        >
          <a href="#">
            Jordan Lee<span>.</span>
          </a>
        </motion.h1>

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
            {navLinks.map(({ id, label, href }, i) => (
              <motion.li
                key={id}
                custom={i}
                variants={navLinkVariants}
                initial="hidden"
                animate="visible"
              >
                <a
                  href={href}
                  className="navbar-link"
                  onClick={() => setIsNavOpen(false)}
                >
                  {label}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
