import { useState } from "react";
import pictures from "./gallery.Data.jsx";
import '../../App.css';
import '../Home/home.css';

export const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const openImage = (index) => {
    setActiveIndex(index);
  };

  const closeImage = () => {
    setActiveIndex(null);
  };

  const nextImage = () => {
    setActiveIndex((prev) => (prev + 1) % pictures.length);
  };

  const prevImage = () => {
    setActiveIndex((prev) => (prev - 1 + pictures.length) % pictures.length);
  };

  return (
    <>
   
    <div className="px-2 lg:px-36 lg:h-auto h-screen py-8 ">  {/* h-screen or h-auto galleryBg*/}
      <h1 className="text-black font text-xs-custom lg:text-2xl py-5">Gallery</h1>

      {/* Image Grid */}
      <div className="grid h-auto grid-cols-3 gap-5 lg:grid-cols-5">
        {pictures.map(({ id, image, label }, index) => (
          <div key={id} className="relative group cursor-pointer ">
            <img
              src={image}
              alt={label}
              onClick={() => openImage(index)}
              className="object-cover w-full h-auto rounded-2xl aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]
              shadow-md  hover:shadow-[0_8px_30px_rgba(0,0,0,1)] hover:scale-105 transition duration-300"
            />

            {/* Hover Label */}
            <div className="absolute bottom-0 left-0 w-full bg-white/60 text-black text-sm md:text-base px-2 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b">
              {label}
            </div>
          </div>
        ))}
      </div>


      {/* Modal Lightbox */}
      {activeIndex !== null && (
        <div
          onClick={closeImage}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 cursor-zoom-out"
        >
          <div
            className="relative flex items-center justify-center w-11/12 xl:w-4/5 h-11/12"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Prev Button */}
            <button
              onClick={prevImage}
              className="absolute left-4 flex items-center justify-center text-white bg-white/20 rounded-full p-3 hover:bg-white/40"
            >
              ‹
            </button>

            {/* Active Image */}
            <img
              src={pictures[activeIndex].image}
              alt={pictures[activeIndex].label}
              className="object-contain w-full h-full"
            />

            {/* Next Button */}
            <button
              onClick={nextImage}
              className="absolute right-4 flex items-center justify-center text-white bg-white/20 rounded-full p-3 hover:bg-white/40"
            >
              ›
            </button>
          </div>
        </div>
      )}

    </div>
      
    </>
  );
};
