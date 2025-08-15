// import { FaHome } from 'react-icons/fa'

import { useState, useEffect } from 'react'
import {FaXmark} from "react-icons/fa6";
import {FaBars} from "react-icons/fa"
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
    }

    return (
        <>
        <div>

        </div>
            <div className={`sticky top-0 z-50 w-full flex space-x-5 p-4 justify-between lg:px-32 transition-all duration-300 
                           ${isScrolled 
                             ? 'bg-white/50 backdrop-blur-md shadow-lg py-0' 
                             : 'bg-white shadow-[2px_20px_300px_0px_rgba(0,_3,_6,_0.18)] py-1'
                           }`}>
                <div className='flex lg:justify-start justify-center items-center'>
                    <img src="/Marci_navbar_logo.svg" alt="Marci Metzger Homes Logo" className='w-55' />
                </div>

                <div className='flex space-x-6 items-center'>
                    {/* <div className='menu'> */}
                        {/* menu opening and closing */}

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


                    {/* </div> */}
                    
                </div>
            </div>
        </>
    )
}