import { useState } from "react";
import { LINKS } from "../constants";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen); 
    };

    return (
        <nav className="border-b-2">
            <div className="max-w-7xl mx-auto flex justify-between items-center py-8 px-4">
                {/* Logo Section */}
                <div className="flex items-center gap-1 shrink-0">
                    <a href="#"> 
                        <img 
                            src="./assets/logo.png"
                            width={50} 
                            height={5} 
                            alt="Farspace" 
                            className="object-contain"
                        />
                    </a>
                    <h1>Farspace</h1>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8">
                    {LINKS.map((link, index) => (
                        <a key={index} href={link.link} className="uppercase text-sm font-medium hover:text-blue-600 transition-colors">
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button 
                        onClick={toggleMenu} 
                        className="text-2xl focus:outline-none"
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                    >
                        {isOpen ? "✕" : "☰"}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            <div className={`${isOpen ? "block" : "hidden"} md:hidden absolute bg-white w-full py-5 px-4 border-b-4 shadow-lg z-50`}>
                {LINKS.map((link, index) => (
                    <a 
                        key={index} 
                        href={link.link} 
                        className="uppercase text-lg font-medium block py-2 tracking-wide"
                        onClick={() => setIsOpen(false)}
                    >
                        {link.name}
                    </a>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;