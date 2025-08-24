import { useState } from "react";
import { FaX } from "react-icons/fa6";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import pictures from "./gallery.Data.jsx";
import "../../App.css";
import "../Home/home.css";

export const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

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

  // Show only first 10 if not expanded
  const visiblePictures = showAll ? pictures : pictures.slice(0, 10);

  return (
    <>
      <div className="side-padding h-auto py-15">
        <span className="text-black font text-[32px] lg:text-4xl ">
          Property Gallery
        </span>

        {/* Image Grid */}
        <div className="grid h-auto grid-cols-3 gap-5 lg:grid-cols-5 mt-4 py-5">
          {visiblePictures.map(({ id, image, label }, index) => (
            <div key={id} className="relative group cursor-pointer">
              <img
                src={image}
                alt={label}
                onClick={() => openImage(index)}
                className="object-cover w-full h-auto rounded-2xl aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]
                shadow-md hover:shadow-[0_8px_30px_rgba(0,0,0,1)] hover:scale-105 transition duration-300"
              />

              {/* Hover Label */}
              <div className="absolute bottom-0 left-0 w-full bg-white/60 text-black text-sm md:text-base px-2 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b">
                {label}
              </div>
            </div>
          ))}
        </div>

        {/* See More Button */}
        {!showAll && pictures.length > 10 && (
          <div className="flex justify-center mt-6">
            <button
              onClick={() => setShowAll(true)}
              className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition"
            >
              See More
            </button>
          </div>
        )}

        {/* Modal */}
        {activeIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 cursor-zoom-out">
            {/* Close Button */}
            <button
              onClick={closeImage}
              className="absolute top-2 right-2 text-black rounded-full px-2 py-1 text-sm hover:text-gray-300 cursor-pointer"
            >
              <FaX />
            </button>

            <div
              className="relative flex items-center justify-center w-11/12 xl:w-4/5 h-11/12"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Prev Button */}
              <button
                onClick={prevImage}
                className="absolute left-4 flex items-center justify-center lg:text-white text-black bg-white/20 rounded-full p-3 hover:bg-white/40"
              >
                <MdKeyboardArrowLeft size={30} />
              </button>

              {/* Active Image */}
              <img
                src={pictures[activeIndex].image}
                alt={pictures[activeIndex].label}
                className="object-contain w-full h-full rounded-2xl"
              />

              {/* Next Button */}
              <button
                onClick={nextImage}
                className="absolute right-4 flex items-center justify-center lg:text-white text-black bg-white/20 rounded-full p-3 hover:bg-white/40"
              >
                <MdKeyboardArrowRight size={30} />
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
