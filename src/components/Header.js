import { useState } from "react";
import { Menu, X } from "lucide-react"; // Optional: replace with text/icon if needed

const Header = ({ scrollToSection, homeRef, aboutRef, projectsRef, contactRef }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md px-6 py-3 z-10 fixed top-0 left-0">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <button 
          onClick={() => scrollToSection(homeRef)}
          className="font-bold text-xl sm:text-2xl hover:text-violet-600 tracking-wide sm:tracking-wider"
        >
          CHANDAN GAUTAM
        </button>

        {/* Burger Icon on Small Screens */}
        <button
          className="sm:hidden text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Nav Links - visible on sm and above */}
        <nav className="hidden sm:flex items-center gap-6 font-bold text-sm sm:text-base tracking-wider">
          <button 
            onClick={() => scrollToSection(homeRef)}
            className="hover:text-violet-600"
          >
            HOME
          </button>
          <button 
            onClick={() => scrollToSection(aboutRef)}
            className="hover:text-violet-600"
          >
            ABOUT
          </button>
          <button 
            onClick={() => scrollToSection(projectsRef)}
            className="hover:text-violet-600"
          >
            PROJECTS
          </button>
          <button 
            onClick={() => scrollToSection(contactRef)}
            className="hover:text-violet-600"
          >
            CONTACT
          </button>
        </nav>
      </div>

      {/* Nav Links for small screens */}
      {isOpen && (
        <div className="sm:hidden mt-3 flex flex-col items-start gap-3 font-bold text-sm tracking-wider px-2">
          <button 
            onClick={() => {
              scrollToSection(homeRef);
              setIsOpen(false);
            }}
            className="hover:text-violet-600"
          >
            HOME
          </button>
          <button 
            onClick={() => {
              scrollToSection(aboutRef);
              setIsOpen(false);
            }}
            className="hover:text-violet-600"
          >
            ABOUT
          </button>
          <button 
            onClick={() => {
              scrollToSection(projectsRef);
              setIsOpen(false);
            }}
            className="hover:text-violet-600"
          >
            PROJECTS
          </button>
          <button 
            onClick={() => {
              scrollToSection(contactRef);
              setIsOpen(false);
            }}
            className="hover:text-violet-600"
          >
            CONTACT
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;