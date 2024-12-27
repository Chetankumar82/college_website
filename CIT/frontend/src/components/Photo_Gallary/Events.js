import "./Events.css";
import React, { useState, useEffect } from "react";
import axios from 'axios';
import background1 from "./../../assets/images/p1.png";
import Breadcrumb from "../Breadcrumb/Breadcrumb";

const Event = () => {
  const [images, setImages] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    fetchEventImages();
  }, []);

  const fetchEventImages = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/event-images');
      setImages(response.data); // Assuming your API returns an array of image objects
    } catch (error) {
      console.error('Error fetching event images:', error);
      // Handle error as needed
    }
  };

  const filterImagesByCategory = (categoryItem) => {
    setSelectedCategory(categoryItem);
  };

  const sortedImages = images.sort((a, b) => {
    // Sort logic based on category, modify as per your requirements
    if (selectedCategory === "Arts") {
      return a.category === "Arts" ? -1 : 1;
    } else if (selectedCategory === "Recreation") {
      return a.category === "Recreation" ? -1 : 1;
    } else if (selectedCategory === "Campus") {
      return a.category === "Campus" ? -1 : 1;
    } else if (selectedCategory === "Seminar") {
      return a.category === "Seminar" ? -1 : 1;
    } else if (selectedCategory === "Exhibition") {
      return a.category === "Exibition" ? -1 : 1;
    } else if (selectedCategory === "Lakshy") {
      return a.category === "Lakshy" ? -1 : 1;
    } else if (selectedCategory === "Tarunya") {
      return a.category === "Tarunya" ? -1 : 1;
    } else if (selectedCategory === "Culture") {
      return a.category === "Culture" ? -1 : 1;
    } else {
      return 0; // Default order
    }
  });

  return (
    <>
    <Breadcrumb Home="Home" PageName="Gallery"/>
    <div className="mt-0"
      style={{
        
        width: "100%",
        marginBottom: "2%",
      }}
    >
      <br />
      <br />
      <h2
        className="Heading"
        style={{
          paddingBottom: "15px",
          margin: "3%",
          marginLeft: "4%",
          fontSize: "40px",
          textAlign: "left",
          borderBottom: "1px solid blue",
          color: "#000",
        }}
      >
        IMAGE GALLERY
      </h2>
      <div className="Outerbox">
        <div className="Gallary">
          <ul className="menu">
            {/* Replace onClick handlers with filterImagesByCategory function */}
            <li onClick={() => filterImagesByCategory("Arts")}>Arts</li>
            <li onClick={() => filterImagesByCategory("Recreation")}>Recreation</li>
            <li onClick={() => filterImagesByCategory("Seminar")}>Seminar</li>
            <li onClick={() => filterImagesByCategory("Exhibition")}>Exhibition</li>
            <li onClick={() => filterImagesByCategory("Lakshy")}>Lakshya</li>
            <li onClick={() => filterImagesByCategory("Tarunya")}>Tarunya</li>
            <li onClick={() => filterImagesByCategory("Culture")}>Culture</li>
          </ul>
        </div>

        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
            {sortedImages.map((image) => (
              <div key={image._id} className="col mt-3">
                <img src={`http://localhost:5000/${image.imageUrl}`} className="img-fluid" alt="image" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Event;
