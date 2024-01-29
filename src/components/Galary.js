import React, { useEffect, useState, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import CoupleImage from "../images/Couple2.JPG";
import photo1 from "../images/OurGalary/photo1.jpg";
import photo2 from "../images/OurGalary/photo2.jpg";
import photo3 from "../images/OurGalary/photo3.jpg";
import photo4 from "../images/OurGalary/photo4.jpg";
import photo5 from "../images/OurGalary/photo5.jpg";
import photo6 from "../images/OurGalary/photo6.jpg";
import photo7 from "../images/OurGalary/photo7.jpg";
import photo8 from "../images/OurGalary/photo8.jpg";
import photo9 from "../images/OurGalary/photo9.jpg";
import photo10 from "../images/OurGalary/photo10.jpg";
import photo11 from "../images/OurGalary/photo11.jpg";
import photo12 from "../images/OurGalary/photo12.jpg";
import photo13 from "../images/OurGalary/photo13.jpg";
import photo14 from "../images/OurGalary/photo14.jpg";
import photo15 from "../images/OurGalary/photo15.jpg";
import photo16 from "../images/OurGalary/photo16.jpg";


function Gallery() {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Update the active slide index
      const newIndex = (activeIndex + 1) % 16; // Assuming you have 16 photos
      setActiveIndex(newIndex);

      // Simulate clicking the next button
      carouselRef.current.dispatchEvent(new Event("click"));
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, [activeIndex]);

  const handlePrevClick = () => {
    // Update the active slide index when clicking the previous button
    const newIndex = (activeIndex - 1 + 16) % 16; // Assuming you have 16 photos
    setActiveIndex(newIndex);

    // Trigger a click event on the previous button
    carouselRef.current.dispatchEvent(new Event("click"));
  };

  const handleNextClick = () => {
    // Update the active slide index when clicking the next button
    const newIndex = (activeIndex + 1) % 16; // Assuming you have 16 photos
    setActiveIndex(newIndex);

    // Trigger a click event on the next button
    carouselRef.current.dispatchEvent(new Event("click"));
  };
  return (
    <div
      id="controls-carousel"
      className="relative w-full"
      data-carousel="static"
      ref={carouselRef}
    >
      {/* Carousel wrapper */}
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {/* Item 1 */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src={photo1}
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
        {/* Item 2 */}
        <div
          className="hidden duration-700 ease-in-out"
          data-carousel-item="active"
        >
          <img
            src={photo2}
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
        {/* Item 3 */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src={photo3}
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
        {/* Item 4 */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src={photo4}
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
        {/* Item 5 */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src={photo5}
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
        {/* Item 6 */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src={photo6}
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
        {/* Item 7 */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src={photo7}
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
        {/* Item 8 */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src={photo8}
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
        {/* Item 9 */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src={photo9}
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
        {/* Item 10 */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src={photo10}
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
        {/* Item 11 */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src={photo11}
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
        {/* Item 12 */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src={photo12}
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
        {/* Item 13 */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src={photo13}
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
        {/* Item 14 */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src={photo14}
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
        {/* Item 15 */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src={photo15}
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
        {/* Item 16 */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src={photo16}
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
      </div>
       {/* Slider controls */}
       <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-dotted"
        data-carousel-prev
        onClick={handlePrevClick}
      >
        <FaArrowLeft className="text-white text-2xl" /> {/* Previous button content */}
      </button>
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
        onClick={handleNextClick}
      >
        <FaArrowRight className="text-white text-2xl" /> {/* Next button content */}
      </button>
    </div>
  );
}

export default Gallery;
