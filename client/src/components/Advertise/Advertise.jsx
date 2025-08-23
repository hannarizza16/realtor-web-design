
import { advertise } from "./advertise.data.jsx";

import "../Home/home.css";
import "./advertise.css";


export const Advertise = () => {
    return (
        <div className=" side-padding flex flex-col h-screen py-15 ">

        <div className="">
            <span className=" flex justify-center text-black font fontMedium">Your key to the perfect home</span>
        </div>

        <div className="flex flex-col lg:flex-row flex-6 justify-between py-5">
            <div className="flex flex-col w-full lg:w-1/2 justify-start items-start">
                {/* <h1 className="text-black">left</h1> */}
                {advertise.map(({id, heading, context}) => (
                    <div key={id} className="text-black py-5 px-8 ">
                        <span className="flex py-5 text-3xl">{heading}</span>
                        <span className="text-xl">{context}</span>

                    </div>
                ))}
            </div>

            <div className="flex w-full lg:w-1/2 justify-center items-center">
                {/* <h1 className="text-black">right</h1> */}
                <video className="rounded-lg shadow-2xl" autoPlay muted loop playsInline>
                    <source
                        src="/videos/houseDemo.mp4"
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
            </div>
            

        </div>
        

        
        
        </div>
    )
}