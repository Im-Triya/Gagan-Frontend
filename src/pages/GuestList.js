import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function GuestList() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [room, setRoom] = useState("");

  const handleAddGuest = async () => {
    // Replace 'your-api-endpoint' with your actual backend API endpoint
    const apiUrl = "http://localhost:4000/api/wedding/";

    try {
      // Call your backend API to add a new guest
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, mobile, room }),
      });

      if (response.ok) {
        // Handle successful response (e.g., show a success message)
        console.log("Guest added successfully!");
      } else {
        // Handle error response (e.g., show an error message)
        console.error("Failed to add guest");
      }
    } catch (error) {
      console.error("Error adding guest:", error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-yellow-700 opacity-50 p-8 rounded-md shadow-md text-white">
          <h2 className="text-2xl font-bold mb-4">Add Guest</h2>
          <div className="mb-4">
            <label className="block text-white">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border rounded-md py-2 px-3 text-black"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white">Mobile</label>
            <input
              type="number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="w-full border rounded-md py-2 px-3 text-black"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white">Room</label>
            <input
              type="text"
              value={room}
              onChange={(e) => setRoom(e.target.value)}
              className="w-full border rounded-md py-2 px-3 text-black"
            />
          </div>
          <button
            onClick={handleAddGuest}
            className="bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600"
          >
            Add Guest
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default GuestList;
