import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CoupleImage from "../images/Couple2.JPG";

function Home() {
  return (
    <div className="relative">
      <Navbar />
      <div className="relative">
        <img
          src={CoupleImage}
          alt="Couple"
          className="w-full h-auto object-cover min-h-screen opacity-60 "
        />
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 font-serif text-center text-white w-full opacity-100">
          <p className="text-4xl sm:text-4xl lg:text-8xl font-bold mb-2 mx-auto">
            Sukesh Gulipalli & Vikasini
          </p>
        </div>
      </div>
      
      <div className="text-center  font-serif mt-8">
        <div className="text-4xl lg:text-5xl text-yellow-600  p-10">
          We are getting married
        </div>
        <div className="text-6xl lg:text-8xl text-yellow-950 font-thin p-5">14 <span className="text-5xl">th</span> February, 2024</div>
        <div className="text-4xl lg:text-3xl text-yellow-600 p-10">
          Novotel, Visakhapatnam
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
