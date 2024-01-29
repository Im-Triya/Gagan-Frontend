import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Galary from '../components/Galary';

function OurGalary() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow grid grid-cols-4 gap-4 p-8">
        {/* 1st Column */}
        <div className="col-span-1 flex flex-col items-center justify-center text-3xl font-bold font-serif text-yellow-800">
          <p>M</p>
          <p>E</p>
          <p>M</p>
          <p>O</p>
          <p>R</p>
          <p>Y</p>
        </div>

        {/* 2nd and 3rd Columns */}
        <div className="col-span-2">
          <Galary autoSlide={true} />
        </div>

        {/* 4th Column */}
        <div className="col-span-1 flex flex-col items-center justify-center text-3xl font-bold font-serif text-yellow-800">
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
