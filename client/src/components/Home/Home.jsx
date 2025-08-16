import './home.css'
import '../Footer/footer.css'
import {links, contacts} from '../Footer/link.Data.jsx'


export const Home = () => {
    return ( 
        <>
        <div className="relative h-screen">
            <div className=" absolute inset-0 bg-[url(/background.jpg)]  bg-cover bg-center  blur-xs"></div>

            <div className="h-full relative flex flex-col  lg:justify-between lg:px-36 lg:flex-row">

                {/* left side - small screen */}
                <div className='lg:hidden  flex flex-col items-center py-5'>
                    <span className='font text-xl-custom lg:text-2xl lg:text-black '> Marci Metzger - The Ridge Realty Group</span>

                    <hr className='line' />
                    <span className="font fontBig fontGradient pt-4">Pahrump Realtor</span>
                </div>

                {/* left side - image */}
                <div className='flex flex-col justify-center items-center lg:justify-start '>
                    <img src="/Img/M.png" alt="" className="w-60 h-60 lg:w-90 lg:h-90 rounded-b-full " />

                    <div className='flex justify-center lg:justify-between '>
                        <div className="icons">
                            {links.map(({id, icon, link, title}) => (
                                <a key={id} href={link} target='_blank' rel='noopener noreferrer' title={title}>
                                    {icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                
                {/* right side - large screen */}
                <div className='hidden lg:flex flex-col items-center lg:py-20 py-15'>
                    <span className='font lg:text-2xl lg:text-black '> Marci Metzger - The Ridge Realty Group</span>
                    <hr className='line' />
                    <span className="font fontBig fontGradient pt-4">Pahrump Realtor</span>
                </div>
                

            </div>


        </div>
        

        </>
    )
}