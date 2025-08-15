import { FaFacebook, FaInstagram, FaLinkedin, FaYelp } from 'react-icons/fa';
import { FaGlobeAmericas, FaMapMarkerAlt,FaPhoneAlt } from 'react-icons/fa';

import './footer.css'

export const links = [
    {
        id: 1,
        icon: <FaFacebook className='icon'/>,
        title: 'Facebook',
        link: 'https://www.facebook.com/MarciHomes/'
    },
    {
        id: 2,
        icon: <FaInstagram  className='icon'/>,
        title: 'Instagram',
        link: 'https://www.instagram.com/marciandlauren_nvrealtors/'
    },
    {
        id: 3,
        icon: <FaLinkedin  className='icon'/>,
        title: 'LinkedIn',
        link: 'https://www.linkedin.com/in/marci-metzger-30642496/'
    },
    {
        id: 4,
        icon: <FaYelp  className='icon'/>,
        title: 'Yelp',
        link: 'https://www.yelp.com/biz/marci-metzger-the-ridge-realty-pahrump'
    }
]

export const contacts = [
    {
        id: 1,
        detailsIcon: <FaGlobeAmericas/>,
        value: "United States of America",
        className: "stateInformation"
    },
    {
        id: 2,
        detailsIcon: <FaMapMarkerAlt className='detailsIcon'/>,
        value: "3190 HW-160, Suite F, Pahrump, Nevada 89048, United States",
        className: "contactInformation"
    },
    {
        id: 3,
        detailsIcon: <FaPhoneAlt className='detailsIcon'/>,
        value: "(206) 919-6886",
        className: "contactInformation"
    }

]
