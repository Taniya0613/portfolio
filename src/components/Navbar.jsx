import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-scroll";

export default function Navbar({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleHomeClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setIsOpen(false);
  };

  const navLinks = [
    { name: "Home", href: "home", action: handleHomeClick },
    { name: "About", href: "about" },
    { name: "Projects", href: "projects" },
    { name: "Skills", href: "skills" },
    { name: "Education", href: "education" },
    { name: "Contact", href: "contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        scale: scrolled ? 0.97 : 1,
        backgroundColor: scrolled
          ? "rgba(255,255,255,0.95)"
          : "rgba(255,255,255,0)",
      }}
      transition={{ duration: 0.5 }}
      className={`navbar ${scrolled ? "scrolled" : ""}`}
    >
      <div className="container">
        <a href="#home" className="logo" onClick={handleHomeClick}>
          TANIYA
        </a>

        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.href}
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
              onClick={link.action || (() => setIsOpen(false))}
              className="nav-link"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <button
            className="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "1.4rem",
              color: "inherit",
            }}
          >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>
          <button
            className="menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
