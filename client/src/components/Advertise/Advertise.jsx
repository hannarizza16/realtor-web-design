
import { advertise } from "./advertise.data.jsx";
import './useInView.jsx'

import "../Home/home.css";
import "./advertise.css";
import useInView from "./useInView.jsx";



export const Advertise = () => {
    return (
        <div className=" side-padding flex flex-col h-auto py-15 ">

        <div className="">
            <span className=" flex justify-center text-black font text-[32px] lg:fontMedium">Your key to the perfect home</span>
        </div>

        <div className="flex flex-col lg:flex-row flex-6 justify-between py-5">             
            <div className="flex flex-col w-full lg:w-1/2 justify-start items-start">                 
                {advertise.map(({id, heading, context}, index) => {
                    const [ref, isInView] = useInView({threshold: 1});

                    return (
                        <div key={id} ref={ref} className={`text-black py-5 px-8 transform transition-all duration-700 ease-out ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                        style={{transitionDelay: `${index * 0.2}s`}}>
                            <span className="flex py-5 text-3xl">{heading}</span>
                            <span className="text-xl">{context}</span>

                        </div>

                    )
                })}        
            </div>

            <div className="flex lg:w-1/2 h-auto justify-center items-center py-5 lg:py-0">
                {/* <video className="rounded-lg shadow-2xl" autoPlay muted loop playsInline>
                    <source
                        src="/videos/houseDemo.mp4"
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video> */}
                <iframe src="https://player.vimeo.com/video/1112554069?autoplay=1&loop=1&playsinline=1"
                    className="lg:w-full lg:h-full w-2xl h-96" 
                    // width="1920" height="1080"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    title="houseDemo">
                </iframe>

            </div>
        </div>
        
        </div>
    )
}