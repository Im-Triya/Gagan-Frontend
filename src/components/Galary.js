import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import CoupleImage from "../images/Couple2.JPG";
import photo1 from "../images/OurGalary/photo1.jpg";
import photo2 from "../images/OurGalary/photo2.jpg";
import photo3 from "../images/OurGalary/photo3.jpg";
// import photo4 from "../images/OurGalary/photo4.jpg";
import photo5 from "../images/OurGalary/photo5.jpg";
import photo6 from "../images/OurGalary/photo6.jpg";
import photo7 from "../images/OurGalary/photo7.jpg";
import photo8 from "../images/OurGalary/photo8.jpg";
import photo9 from "../images/OurGalary/photo9.jpg";
// import photo10 from "../images/OurGalary/photo10.jpg";
// import photo11 from "../images/OurGalary/photo11.jpg";
// import photo12 from "../images/OurGalary/photo12.jpg";
import photo13 from "../images/OurGalary/photo13.jpg";
// import photo14 from "../images/OurGalary/photo14.jpg";
import photo15 from "../images/OurGalary/photo15.jpg";
// import photo16 from "../images/OurGalary/photo16.jpg";


function Gallery() {
  const photos = [photo1, photo2, photo3, photo5, photo6, photo7, photo8, photo13, photo15, photo9];

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <Carousel showThumbs={false} className="max-w-2xl w-full h-96">
        {photos.map((photo, index) => (
          <div key={index} className="flex items-center justify-center">
            <img
              src={photo}
              alt={`${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Gallery;