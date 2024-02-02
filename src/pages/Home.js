import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CoupleImage from "../images/Couple2.JPG";

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
    <Navbar />
    <div className="flex-grow relative">
      <div className="relative">
          <img
            src={CoupleImage}
            alt="Couple"
            className="w-full h-screen object-cover max-h-screen sm:max-h-full opacity-70"
          />
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 font-serif text-center text-white w-full opacity-100">
            <p className="text-5xl sm:text-4xl lg:text-8xl font-bold lg:mb-20 mb-60 mx-auto lg:bg-yellow-600 bg-yellow-800 lg:bg-opacity-30 bg-opacity-30">
              Sukesh Gulipalli & Vikasini
            </p>
          </div>
        </div>

        <div className="text-center font-serif mt-8">
          <div className="text-4xl lg:text-5xl text-yellow-600 p-5 sm:p-10">
            We are getting married
          </div>
          <div className="text-5xl lg:text-8xl text-yellow-950 font-thin p-5 sm:p-10">
            14 <span className="text-5xl">th</span> February, 2024
          </div>
          <div className="text-4xl lg:text-3xl text-yellow-600 p-5 sm:p-10">
            Novotel, Visakhapatnam
          </div>
          </div>
      </div>
      <Footer className="absolute bottom-0 w-full" />
    </div>
  );
}

export default Home;
