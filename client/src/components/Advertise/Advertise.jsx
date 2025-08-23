
import { advertise } from "./advertise.data.jsx";

import "../Home/home.css";
import "./advertise.css";



export const Advertise = () => {
    return (
        <div className=" side-padding flex flex-col h-auto py-15 ">

        <div className="">
            <span className=" flex justify-center text-black font text-[32px] lg:fontMedium">Your key to the perfect home</span>
        </div>

        <div className="flex flex-col lg:flex-row flex-6 justify-between py-5 ">
            <div className="flex flex-col w-full lg:w-1/2 justify-start items-start">
                {/* <h1 className="text-black">left</h1> */}
                {advertise.map(({id, heading, context}) => (
                    <div key={id} className="text-black py-5 px-8 ">
                        <span className="flex py-5 text-3xl">{heading}</span>
                        <span className="text-xl">{context}</span>

                    </div>
                ))}
            </div>

            <div className="flex lg:w-1/2 justify-center items-center overflow-hidden py-5 lg:py-0">
                {/* <video className="rounded-lg shadow-2xl" autoPlay muted loop playsInline>
                    <source
                        src="/videos/houseDemo.mp4"
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video> */}
                <iframe src="https://player.vimeo.com/video/1112554069?autoplay=1&muted=1&loop=1&background=1&dnt=1&playsinline=1"
                    className="w-full h-full"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    title="houseDemo">
                </iframe>


                
            </div>
            

        </div>
        

        
        
        </div>
    )
}