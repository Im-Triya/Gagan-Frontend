import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [isSidePanelOpen, setSidePanelOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidePanel = () => {
    setSidePanelOpen(!isSidePanelOpen);
  };

  const closeSidePanel = () => {
    setSidePanelOpen(false);
    console.log("closeSidePanel");
  };

  const handleNavigation = (path) => {
    navigate(path);
    closeSidePanel();
  };

  return (
    <div className="bg-yellow-700 bg-opacity-20 text-yellow-900 p-2">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold mb-2">
          <span className="font-serif">S</span>
          <span className="font-thin mx-2">+</span>
          <span className="font-serif">V</span>
        </div>

        {/* Mobile Menu Button (Hamburger) */}
        <div className="lg:hidden">
          <button onClick={toggleSidePanel} className="text-3xl">
            ☰
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex lg:items-center">
          <Link to="/" className="mx-2 hover:text-yellow-200">
            Start here
          </Link>
          <Link to="/ourwedding" className="mx-2 hover:text-yellow-200">
            Our Wedding
          </Link>
          <Link to="/ourgalary" className="mx-2 hover:text-yellow-200">
            Our Gallery
          </Link>
          <Link to="/contact-us" className="mx-2 hover:text-yellow-200">
            Contact Us
          </Link>
          {/* <Link to="/guestlist" className="mx-2 hover:text-yellow-200">
            Guest List
          </Link>
          <Link to="/sendmessage" className="mx-2 hover:text-yellow-200">
            Send Message
          </Link> */}
        </div>

        {/* Side Panel */}
        <div
          className={`lg:hidden fixed top-0 left-0 h-fit w-1/2 bg-yellow-700 opacity-50 p-4 transform ${
            isSidePanelOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform`}
        >
          <button
            onClick={closeSidePanel}
            className="text-3xl mb-4 items-end text-white"
          >
            ✕
          </button>

          <button
            className="block mb-2 text-white text-lg font-serif font-semibold hover:text-yellow-950"
            onClick={() => {
              handleNavigation("/");
              console.log("navigating home");
            }}
          >
            Start here
          </button>

          <div
            className="block mb-2 text-white text-lg font-serif font-semibold hover:text-yellow-950"
            onClick={() => handleNavigation("/ourwedding")}
          >
            Our Wedding
          </div>
          <div
            className="block mb-2 text-white text-lg font-serif font-semibold hover:text-yellow-950"
            onClick={() => handleNavigation("/ourgalary")}
          >
            Our Gallery
          </div>
          <div
            className="block mb-2 text-white text-lg font-serif font-semibold hover:text-yellow-950"
            onClick={() => handleNavigation("/contact-us")}
          >
            Contact Us
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
