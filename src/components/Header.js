import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Optional: replace with text/icon if needed

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md px-6 py-3 z-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <h1 className="font-bold text-xl sm:text-2xl hover:text-violet-600 tracking-wide sm:tracking-wider">
            CHANDAN GAUTAM
          </h1>
        </Link>

        {/* Burger Icon on Small Screens */}
        <button
          className="sm:hidden text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Nav Links - visible on sm and above */}
        <nav className="hidden sm:flex items-center gap-6 font-bold text-sm sm:text-base tracking-wider">
          <NavLink to="/" className="hover:text-violet-600">HOME</NavLink>
          <NavLink to="/about" className="hover:text-violet-600">ABOUT</NavLink>
          <NavLink to="/projects" className="hover:text-violet-600">PROJECTS</NavLink>
          <NavLink to="/contact" className="hover:text-violet-600">CONTACT</NavLink>
        </nav>
      </div>

      {/* Nav Links for small screens */}
      {isOpen && (
        <div className="sm:hidden mt-3 flex flex-col items-start gap-3 font-bold text-sm tracking-wider px-2">
          <NavLink to="/" onClick={() => setIsOpen(false)} className="hover:text-violet-600">HOME</NavLink>
          <NavLink to="/about" onClick={() => setIsOpen(false)} className="hover:text-violet-600">ABOUT</NavLink>
          <NavLink to="/projects" onClick={() => setIsOpen(false)} className="hover:text-violet-600">PROJECTS</NavLink>
          <NavLink to="/contact" onClick={() => setIsOpen(false)} className="hover:text-violet-600">CONTACT</NavLink>
        </div>
      )}
    </header>
  );
};

export default Header;