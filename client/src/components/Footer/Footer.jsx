import './footer.css'
import {links, contacts} from './link.Data.jsx'
import { OfficeHours } from './office.Hours.jsx'



export const Footer = () => {
    return (
        <>
            <div className="footer">

                <div className='details font-black'>
                    Find Your Dream Home with Marci Metzger

                    <div className='flex flex-col lg:flex-row space-x-20'>
                        <div className='contacts'>
                            {contacts.map(({id, detailsIcon, value, className}) => (
                                <p key={id}>
                                    <span>{detailsIcon}</span> 
                                    <span className={className}>{value}</span>
                                    </p>
                            ))}
                        </div>
                        <div>
                            <OfficeHours/>
                        </div>
                    </div>
                </div>

                <hr/>
                <div className='flex flex-col justify-center lg:flex-row lg:justify-between '>
                    <div className="icons">
                    {links.map(({id, icon, link, title}) => (
                        <a key={id} href={link} target='_blank' rel='noopener noreferrer' title={title}>
                            {icon}
                        </a>
                    ))}
                </div>
                <div className=''>
                    COPYRIGHT &copy; <span className='text-white'> 2025 </span> MARCI METZGER HOMES - ALL RIGHTS RESERVED
                </div>

                </div>
                
            </div>


        </>
    )
}

import './footer.css';


