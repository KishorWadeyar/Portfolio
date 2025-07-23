import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "education", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#education", label: "Education" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed w-full top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo/Name */}
          <div className="text-2xl font-bold text-white">
            Kishor Wadeyar
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`nav-link ${
                  activeSection === item.href.substring(1) ? "active" : ""
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          
          {/* Social Icons & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/KishorWadeyar"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon text-slate-300 hover:text-slate-50"
            >
              <FaGithub className="text-xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/kishorwadeyar/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon text-slate-300 hover:text-slate-50"
            >
              <FaLinkedin className="text-xl" />
            </a>
            
            {/* Mobile Hamburger */}
            <button
              className={`md:hidden hamburger-btn ${isMenuOpen ? "hamburger-active" : ""}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`hamburger-line w-full h-0.5 bg-slate-50 transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
                <span className={`hamburger-line w-full h-0.5 bg-slate-50 transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`}></span>
                <span className={`hamburger-line w-full h-0.5 bg-slate-50 transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
              </div>
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"} mt-4 pb-4 border-t border-slate-700/20`}>
          <div className="flex flex-col space-y-3 pt-4">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="nav-link block py-2 text-left"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
