import { useState, useEffect } from 'react'
import { FaXmark } from "react-icons/fa6";
import { FaBars } from "react-icons/fa"
import '../../App.css'
import './navbar.css'

const navBarItems = [
    {
        id: 1,
        href: "/home",
        label: "Home"
    },
    {
        id: 2,
        href: "/listings",
        label: "Listings"
    },
    {
        id: 3,
        href: "/move",
        label: "Let's Move"
    },
    {
        id: 4,
        href: "/about",
        label: "About Us"
    }
]

// Navbar function
export const Navbar = () => {
    const [activeItem, setActiveItem] = useState(1)
    const [isScrolled, setIsScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleClick = (e, id) => {
        e.preventDefault();
        setActiveItem(id);
        setMenuOpen(false); // Close mobile menu when item is clicked
    }

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <>
            <div className={`sticky top-0 z-50 w-full flex space-x-5 p-4 justify-between lg:px-32 transition-all duration-300
                           ${isScrolled 
                             ? 'bg-white/50 backdrop-blur-md shadow-lg py-3' 
                             : 'bg-white shadow-[2px_20px_300px_0px_rgba(0,_3,_6,_0.18)] py-4'
                           }`}>
                
                {/* Logo */}
                <div className='flex lg:justify-start justify-center items-center'>
                    <img src="/Marci_navbar_logo.svg" alt="Marci Metzger Homes Logo" className='w-55' />
                </div>

                {/* Desktop Navigation - Hidden on mobile */}
                <div className='hidden lg:flex space-x-6 items-center'>
                    {navBarItems.map(({id, href, label}) => (
                        <a key={id}
                           href={href}
                           onClick={(e) => handleClick(e, id)}
                           className={`relative text-gray-800 hover:text-gray-600 transition-all duration-300
                                      before:content-[""] before:absolute before:bottom-0 before:left-0
                                      before:h-0.5 before:bg-gray-800 before:transition-all before:duration-300
                                      ${activeItem === id 
                                        ? 'before:w-full text-gray-600 font-medium' 
                                        : 'before:w-0 hover:before:w-full'
                                      }`}>
                            {label}
                        </a>
                    ))}
                </div>

                {/* Mobile Hamburger Menu Button - Only visible on mobile */}
                <div className='lg:hidden flex items-center'>
                    <button
                        onClick={toggleMenu}
                        className='p-2 text-gray-800 hover:text-gray-600 transition-colors duration-200 focus:outline-none'
                        aria-label="Toggle navigation menu"
                    >
                        {menuOpen ? <FaXmark size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay - Only visible when menu is open */}
            {menuOpen && (
                <div className="lg:hidden fixed inset-0 z-40 bg-black/30 backdrop-blur-md border border-white/100" onClick={() => setMenuOpen(false)}>
                    {/* Mobile Menu Panel */}
                    <div className="fixed top-0 right-0 h-full w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out">
                        <div className="flex flex-col p-6 space-y-6 mt-20">
                            {navBarItems.map(({id, href, label}) => (
                                <a key={id}
                                   href={href}
                                   onClick={(e) => handleClick(e, id)}
                                   className={`relative text-lg font-medium transition-all duration-300 py-3 border-b border-gray-100 hover:text-gray-600
                                              ${activeItem === id 
                                                ? 'text-gray-600 border-gray-800 font-semibold' 
                                                : 'text-gray-800'
                                              }`}>
                                    {label}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}