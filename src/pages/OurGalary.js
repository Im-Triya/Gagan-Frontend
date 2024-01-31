import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Galary from '../components/Galary';

function OurGalary() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow grid grid-cols-1 md:grid-cols-4 gap-4 p-8">
        {/* 1st Column (Hidden in Mobile View) */}
        <div className="hidden md:flex md:col-span-1 flex-col items-center justify-center text-3xl font-bold font-serif text-yellow-800">
          <p>M</p>
          <p>E</p>
          <p>M</p>
          <p>O</p>
          <p>R</p>
          <p>Y</p>
        </div>

        {/* 2nd and 3rd Columns (Full Width in Mobile View) */}
        <div className="col-span-2 md:col-span-2 items-center justify-center flex-col">
          <Galary/>
        </div>

        {/* 4th Column (Hidden in Mobile View) */}
        <div className="hidden md:flex md:col-span-1 flex-col items-center justify-center text-3xl font-bold font-serif text-yellow-800">
          <p>L</p>
          <p>A</p>
          <p>N</p>
          <p>E</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default OurGalary;
