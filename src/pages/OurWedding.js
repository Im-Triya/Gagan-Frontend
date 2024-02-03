import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// import CoupleImage from "../images/Couple2.JPG";
import HaldiImage from "../images/OurWedding/Haldi2.jpg";
import WeddingImage from "../images/OurWedding/Wedding.jpg";
import ReceptionImage from "../images/OurWedding/Reception.jpg";
import Pellikoduku from "../images/OurWedding/Pellikoduku.jpg";
import Pellikuturu from "../images/OurWedding/pellikuturu.jpg";

function OurWedding() {
  return (
    <div>
      <Navbar />
      <div className="content-container grid grid-cols-1 md:grid-cols-2 gap-8 m-5">
        {/* ROW 0 */}
        
        <div className="flex items-center justify-center">
          <div className="font-serif text-right">
            <p className="font text-3xl md:text-5xl mb-2 text-yellow-950">
              Pelli Kuturu Ceremony
            </p>
            <p className="text-xl md:text-2xl text-bold text-yellow-900 mb-2">
              12th February, 2024
            </p>
            <p className="text-xl md:text-2xl text-bold text-yellow-900 mb-2">
              11:30 AM
            </p>
            <p className="text-lg md:text-xl mb-2 text-yellow-800">
              6-140, Opp. Five star Koli Hut, Pulagalipalem Road, Pendurthi,
              Visakhapatnam
            </p>

            <p className="text-base md:text-lg mt-5 text-yellow-950">
              Step into the enchanting ritual where the bride, adorned in the
              elegance of tradition, graces the ceremony with the colors of
              anticipation. It's a mesmerizing dance of grace and ritual, where
              promises are woven into the fabric of destiny. Join in the
              celebration as the bride embraces the sacred journey, inviting
              your soul to twirl in the cosmic waltz of love's timeless
              symphony.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img
            src={Pellikuturu}
            className="w-full max-h-full p-5 opacity-70"
            alt=""
          />
        </div>
       

        {/* ROW 1 */}
        <div className="flex items-center justify-center">
          <img
            src={Pellikoduku}
            className="w-full max-h-full p-5 opacity-70"
            alt=""
          />
        </div>
        <div className="flex items-center justify-center">
          <div className="font-serif text-left">
            <p className="font text-3xl md:text-5xl mb-2 text-yellow-950">
              Pellikoduku Ceremony
            </p>
            <p className="text-xl md:text-2xl text-bold text-yellow-900 mb-2">
              12th February, 2024
            </p>
            <p className="text-xl md:text-2xl text-bold text-yellow-900 mb-2">
              8:30 AM
            </p>
            <p className="text-lg md:text-xl mb-2 text-yellow-800">
              49-54-15/9/2/2/3 , individual house, 49-54-15/9/2, North
              extension, Balayya Sastri Layout, Seethammadra Visakhapatnam
            </p>

            <p className="text-base md:text-lg mt-5 text-yellow-950">
              Join in, as the groom steps into the embrace of destiny, a dance
              of devotion painted with hues of promises—your soul invited to
              swirl in the cosmic waltz of love's timeless celebration.
            </p>
          </div>
        </div>

        {/* ROW 2 */}
        <div className="flex items-center justify-center">
          <div className="font-serif text-right">
            <p className="font text-3xl md:text-5xl mb-2 text-yellow-950">
              Haldi Ceremony
            </p>
            <p className="text-xl md:text-2xl text-bold text-yellow-900 mb-2">
              13th February, 2024
            </p>
            <p className="text-xl md:text-2xl text-bold text-yellow-900 mb-2">
              9:00 AM
            </p>
            <p className="text-lg md:text-xl mb-2 text-yellow-800">
              Sea Shore Front, Vizag
            </p>

            <p className="text-base md:text-lg mt-5 text-yellow-950">
              Bathed in the hues of joy, the haldi ceremony unfolds, each golden
              droplet a brushstroke on the canvas of anticipation—a radiant
              prelude to the union, inviting you to dip your spirit in the
              laughter-filled mosaic of love's vibrant celebration.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img
            src={HaldiImage}
            className="w-full max-h-full p-5 opacity-70"
            alt=""
          />
        </div>

        {/* ROW 3 */}
        <div className="flex items-center justify-center">
          <img
            src={WeddingImage}
            className="w-full max-h-full p-5 opacity-70"
            alt=""
          />
        </div>
        <div className="flex items-center justify-center">
          <div className="font-serif text-left">
            <p className="font text-3xl md:text-5xl mb-2 text-yellow-950">
              Wedding Ceremony
            </p>
            <p className="text-xl md:text-2xl text-bold text-yellow-900 mb-2">
              14th February, 2024
            </p>
            <p className="text-xl md:text-2xl text-bold text-yellow-900 mb-2">
              3:53 AM (early hours of Thursday morning)
            </p>
            <p className="text-lg md:text-xl mb-2 text-yellow-800">
              Novotel V-Convention Hall, R.K Beach Road, Visakhapatnam
            </p>

            <p className="text-base md:text-lg mt-5 text-yellow-950">
              In the cathedral of shared dreams, vows ascend like incense,
              weaving a tapestry of promises—a sacred moment where two souls
              unite, beckoning you to join in the chorus of love as the wedding
              ceremony unfolds, a symphony of forever echoing in the chambers of
              hearts.
            </p>
          </div>
        </div>

        {/* Row 4 */}
        <div className="flex items-center justify-center">
          <div className="font-serif text-right">
            <p className="font text-3xl md:text-5xl mb-2 text-yellow-950">
              Reception
            </p>
            <p className="text-xl md:text-2xl text-bold text-yellow-900 mb-2">
              14th February, 2024
            </p>
            <p className="text-xl md:text-2xl text-bold text-yellow-900 mb-2">
              7:00 PM
            </p>
            <p className="text-lg md:text-xl mb-2 text-yellow-800">
              Novotel Varun Beach
            </p>

            <p className="text-base md:text-lg mt-5 text-yellow-950">
              Beneath the glittering stars of jubilation, the reception
              unfolds—a feast of laughter and shared tales, where each toast
              echoes the melody of love's triumph. Join in the celebration, dear
              guest, and let your presence add a sparkling note to this
              harmonious journey into the night of joy and endless memories.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img
            src={ReceptionImage}
            className="w-full max-h-full p-5 opacity-70"
            alt=""
          />
        </div>

        {/* ROW 5
        <div className="flex items-center justify-center">
          <img
            src={CoupleImage}
            className="w-full max-h-full p-5 opacity-70"
            alt=""
          />
        </div>
        <div className="flex items-center justify-center">
          <div className="font-serif text-left">
            <p className="font text-3xl md:text-5xl mb-2 text-yellow-950">
              Haldi Ceremony
            </p>
            <p className="text-xl md:text-2xl text-bold text-yellow-900 mb-2">
              14th February, 2024
            </p>
            <p className="text-lg md:text-xl mb-2 text-yellow-800">
              Novotel, Hyderabad
            </p>

            <p className="text-base md:text-lg mt-5 text-yellow-950">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div> */}
      </div>
      <Footer />
    </div>
  );
}

export default OurWedding;
