import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function SendMessage() {
  const [message, setMessage] = useState("");

  const handleSendClick = async () => {
    try {
      // Replace 'your-api-endpoint' with your actual backend API endpoint
      const apiUrl = "http://localhost:4000/api/wedding/send-sms";

      // Call your backend API to send a message to all
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      if (response.ok) {
        // Handle successful response (e.g., show a success message)
        console.log("Message sent successfully to all!");
      } else {
        // Handle error response (e.g., show an error message)
        console.error("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const handleSendRoomNumbersClick = async () => {
    try {
      // Replace 'your-room-numbers-endpoint' with your actual backend API endpoint
      const roomNumbersApiUrl = "http://localhost:4000/api/wedding/send-room-numbers";

      // Call your backend API to send room numbers to all guests
      const roomNumbersResponse = await fetch(roomNumbersApiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // You can pass any additional data needed for sending room numbers
        body: JSON.stringify({}),
      });

      if (roomNumbersResponse.ok) {
        // Handle successful response (e.g., show a success message)
        console.log("Room numbers sent successfully to all guests!");
      } else {
        // Handle error response (e.g., show an error message)
        console.error("Failed to send room numbers");
      }
    } catch (error) {
      console.error("Error sending room numbers:", error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex">
        {/* Left Column */}
        <div className="w-1/2 flex items-center justify-center h-screen">
          <div className="bg-yellow-700 opacity-50 p-8 rounded-md shadow-md text-white">
            <h2 className="text-2xl font-bold mb-4 text-white">Send Message</h2>
            <div className="mb-4">
              <label className="block text-white">Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full border rounded-md py-2 px-3 text-yellow-950"
              />
            </div>
            <button
              onClick={handleSendClick}
              className="bg-yellow-900 text-white py-2 px-4 rounded-md hover:bg-yellow-600"
            >
              Send to All
            </button>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-1/2 flex items-center justify-center h-screen">
          <div className="bg-yellow-700 opacity-50 p-8 rounded-md shadow-md text-white">
            <h2 className="text-2xl font-bold mb-4 text-white">Send Room Numbers</h2>
            <button
              onClick={handleSendRoomNumbersClick}
              className="bg-yellow-900 text-white py-2 px-4 rounded-md hover:bg-yellow-600"
            >
              Send Room-Numbers to All Guests
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SendMessage;
