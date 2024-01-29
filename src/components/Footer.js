import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="bg-yellow-700 bg-opacity-20 text-yellow-900 p-2 sm:p-4">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Social Media Icons */}
        <div className="flex items-center justify-center space-x-2 sm:space-x-4">
          {/* <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-500 text-sm sm:text-base"
          >
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-500 text-sm sm:text-base"
          >
            <FontAwesomeIcon icon={faFacebook} size="lg" />
          </a> */}
        </div>

        {/* Logo */}
        <div className="flex items-center justify-center text-base sm:text-2xl font-bold">
          <span className="font-serif">S</span>
          <span className="font-thin mx-1 sm:mx-2">+</span>
          <span className="font-serif">V</span>
        </div>

        {/* Contact Information */}
        <div className="flex items-center justify-center text-center sm:text-right">
          <div>
            <p className="mb-1 sm:mb-0 text-xs sm:text-sm">Contact us: example@email.com</p>
            <p className="text-xs sm:text-sm">Phone: +91 8247464848</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
