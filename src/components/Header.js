import { NavLink, Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    return(
    <header className="w-full bg-white shadow-md px-4 py-3">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between">
            <Link to="/">
                <h1 className="font-bold text-xl sm:text-2xl hover:text-violet-600 tracking-wide sm:tracking-wider">CHANDAN GAUTAM</h1>
            </Link>

            <button className="sm:hidden focus:outline-none"></button>

            <nav className="mt-2 sm:mt-0 flex flex-col sm:flex-row items-center font-bold text-sm sm:text-base">
                <NavLink className="mb-1 sm:mb-0 sm:ml-4 hover:text-violet-600" to="/">HOME</NavLink>
                <NavLink className="mb-1 sm:mb-0 sm:ml-4 hover:text-violet-600" to="/about">ABOUT</NavLink>
                <NavLink className="mb-1 sm:mb-0 sm:ml-4 hover:text-violet-600" to="/product">PRODUCT</NavLink>
                <NavLink className="mb-1 sm:mb-0 sm:ml-4 hover:text-violet-600" to="/contact">CONTACT</NavLink>
            </nav>
        </div>
    </header>
)
};

export default Header