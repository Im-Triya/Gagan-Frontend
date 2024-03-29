import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

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
    if (path === "/contact-us") {
      // For the "Contact Us" link, scroll to the footer instead of navigating
      scrollToFooter();
    } else {
      // For other links, navigate as usual
      navigate(path);
      closeSidePanel();
    }
  };

  const scrollToFooter = () => {
    scroll.scrollToBottom({
      duration: 800,
      smooth: "easeInOutQuart",
    });
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
        <div className="lg:hidden bg-yellow-950 text-white">
          <button onClick={toggleSidePanel} className="text-3xl">
            ☰
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex lg:items-center">
          <Link to="/" className="mx-2 hover:text-yellow-200">
            Our Journey
          </Link>
          <Link to="/ourwedding" className="mx-2 hover:text-yellow-200">
            Our Wedding
          </Link>
          <Link to="/ourgalary" className="mx-2 hover:text-yellow-200">
            Our Gallery
          </Link>
          <ScrollLink
            to="footer" // Assuming the ID of your footer is "footer"
            smooth={true}
            duration={800}
            className="mx-2 hover:text-yellow-200 cursor-pointer"
            onClick={() => scrollToFooter()}
          >
            Contact Us
          </ScrollLink>
          {/* <Link to="/guestlist" className="mx-2 hover:text-yellow-200">
            Guest List
          </Link>
          <Link to="/sendmessage" className="mx-2 hover:text-yellow-200">
            Send Message
          </Link> */}
        </div>

        {/* Side Panel */}
        <div
          className={`lg:hidden fixed top-0 left-0 h-full w-1/2 bg-yellow-950 opacity-50 p-4 transform ${
            isSidePanelOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform`}
          style={{ zIndex: 9999 }} // Set a higher z-index value
          onClick={(e) => e.stopPropagation()} // Stop propagation of clicks within the side panel
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
            Our Journey
          </button>

          <button
            className="block mb-2 text-white text-lg font-serif font-semibold hover:text-yellow-950"
            onClick={() => {
              console.log("navigating to our wedding");
              handleNavigation("/ourwedding");
            }}
          >
            Our Wedding
          </button>

          <button
            className="block mb-2 text-white text-lg font-serif font-semibold hover:text-yellow-950"
            onClick={() => {
              console.log("navigating to our gallery");
              handleNavigation("/ourgalary");
            }}
          >
            Our Gallery
          </button>

          <ScrollLink
            to="footer" // Assuming the ID of your footer is "footer"
            smooth={true}
            duration={800}
            className="block mb-2 text-white text-lg font-serif font-semibold hover:text-yellow-950"
            onClick={() => {
              console.log("scrolling to footer");
              scrollToFooter();
            }}
          >
            Contact Us
          </ScrollLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
