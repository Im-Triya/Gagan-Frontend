import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import CoupleImage from "../images/Couple2.JPG";

function OurWedding() {
  return (
    <div>
      <Navbar />
      <div className="content-container grid grid-cols-1 md:grid-cols-2 gap-8 m-5">
        {/* ROW 1 */}
        <div className="flex items-center justify-center">
          <img src={CoupleImage} className="w-full max-h-full p-5 opacity-70" alt="" />
        </div>
        <div className="flex items-center justify-center">
          <div className="font-serif text-left">
            <p className="font text-3xl md:text-5xl mb-2 text-yellow-950">Pellikoduku Ceremony</p>
            <p className="text-xl md:text-2xl text-bold text-yellow-900 mb-2">12th February, 2024</p>
            <p className="text-lg md:text-xl mb-2 text-yellow-800">Main House, Vizag</p>

            <p className="text-base md:text-lg mt-5 text-yellow-950">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        {/* ROW 2 */}
        <div className="flex items-center justify-center">
          <div className="font-serif text-right">
            <p className="font text-3xl md:text-5xl mb-2 text-yellow-950">Haldi Ceremony</p>
            <p className="text-xl md:text-2xl text-bold text-yellow-900 mb-2">14th February, 2024</p>
            <p className="text-lg md:text-xl mb-2 text-yellow-800">Novotel, Hyderabad</p>

            <p className="text-base md:text-lg mt-5 text-yellow-950">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img src={CoupleImage} className="w-full max-h-full p-5 opacity-70" alt="" />
        </div>

        {/* ROW 3 */}
        <div className="flex items-center justify-center">
          <img src={CoupleImage} className="w-full max-h-full p-5 opacity-70" alt="" />
        </div>
        <div className="flex items-center justify-center">
          <div className="font-serif text-left">
            <p className="font text-3xl md:text-5xl mb-2 text-yellow-950">Haldi Ceremony</p>
            <p className="text-xl md:text-2xl text-bold text-yellow-900 mb-2">14th February, 2024</p>
            <p className="text-lg md:text-xl mb-2 text-yellow-800">Novotel, Hyderabad</p>

            <p className="text-base md:text-lg mt-5 text-yellow-950">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        {/* Row 4 */}
        <div className="flex items-center justify-center">
          <div className="font-serif text-right">
            <p className="font text-3xl md:text-5xl mb-2 text-yellow-950">Haldi Ceremony</p>
            <p className="text-xl md:text-2xl text-bold text-yellow-900 mb-2">14th February, 2024</p>
            <p className="text-lg md:text-xl mb-2 text-yellow-800">Novotel, Hyderabad</p>

            <p className="text-base md:text-lg mt-5 text-yellow-950">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img src={CoupleImage} className="w-full max-h-full p-5 opacity-70" alt="" />
        </div>

        {/* ROW 5 */}
        <div className="flex items-center justify-center">
          <img src={CoupleImage} className="w-full max-h-full p-5 opacity-70" alt="" />
        </div>
        <div className="flex items-center justify-center">
          <div className="font-serif text-left">
            <p className="font text-3xl md:text-5xl mb-2 text-yellow-950">Haldi Ceremony</p>
            <p className="text-xl md:text-2xl text-bold text-yellow-900 mb-2">14th February, 2024</p>
            <p className="text-lg md:text-xl mb-2 text-yellow-800">Novotel, Hyderabad</p>

            <p className="text-base md:text-lg mt-5 text-yellow-950">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        
      </div>
      <Footer />
    </div>
  );
}

export default OurWedding;
