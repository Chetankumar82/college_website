import React, { useState } from "react";
import img from "../assets/images/sports.png";
import img1 from "../assets/Event/seminar4.jpg";
import img2 from "../assets/Event/cp7.jpg";
import img3 from "../assets/Event/cp-3.jpg"; // Add the image for the hostel
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import seminar from "../assets/images/seminar-hall.png";
import hostel from "../assets/images/hostel.png";
import camera from "../assets/images/camera.png";
import wifi from "../assets/images/wifi.png";
import greencampus from "../assets/images/greencampus.png";
const Facilities = () => {
  const [hoveredId, setHoveredId] = useState(null);

  const facilities = [
    {
      id: 1,
      name: "Classrooms",
      image: img1,
      url: "/ClassroomPage",
    },
    {
      id: 2,
      name: "Library",
      image:
        "https://images.unsplash.com/photo-1580537659466-0a9bfa916a54?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      url: "/Library", // Example URL for Library
    },
    {
      id: 3,
      name: "Labs",
      image: img2,
      url: "/Lab", // Example URL for Labs
    },
    {
      id: 4,
      name: "Sports Facilities",
      image: img,
      url: "/Sports", // Example URL for Sports Facilities
    },
    {
      id: 5,
      name: "Hostel",
      image: hostel,
      url: "/Hostel", // Example URL for Hostel
    },
    {
      id: 6,
      name: "Workshop & Seminar",
      image: seminar,
      url: "/seminar", // Example URL for Hostel
    },
    {
      id: 7,
      name: "Mess",
      image: img3,
      url: "/mess", // Example URL for Hostel
    },
    {
      id: 8,
      name: "24 x 7 Security",
      image: camera,
      url: "/security", // Example URL for Hostel
    },
    {
      id: 9,
      name: "Wifi Campus",
      image: wifi,
      url: "/wifi", // Example URL for Hostel
    },
    {
      id: 10,
      name: "Green Campus",
      image: greencampus,
      url: "/greencampus", // Example URL for Hostel
    },
   
  ];

  const handleClick = (url) => {
    // Handle navigation programmatically
    window.location.href = url;
  };

  return (
    <>
    <Breadcrumb Home="Home" PageName="Facilities" />
    <div className="mt-40 mb-40 p-4 px-5">
  <h1 className="text-4xl font-bold mb-2 text-left">Facilities</h1>
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
    {facilities.map((facility) => (
      <div
        key={facility.id}
        className="bg-white shadow-lg rounded-lg overflow-hidden transition duration-300 transform hover:scale-105 mt-4"
        onClick={() => handleClick(facility.url)}
        onMouseEnter={() => setHoveredId(facility.id)}
        onMouseLeave={() => setHoveredId(null)}
      >
        <img
          src={facility.image}
          alt={facility.name}
          className="w-full h-48 object-cover"
        />
        <div className="p-4 text-center">
          <h2 className="text-xl font-bold text-gray-800">{facility.name}</h2>
        </div>
      </div>
    ))}
  </div>
</div>

    </>
  );
};

export default Facilities;
