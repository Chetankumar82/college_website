// src/components/ImageGallery.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ImageGallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Fetch images from backend API
    axios.get('/api/event-images')
      .then(response => {
        setImages(response.data); // Assuming backend returns an array of image objects
      })
      .catch(error => {
        console.error('Error fetching images:', error);
      });
  }, []);

  return (
    <div className='mt-40'>
      <h2>Event Image Gallery</h2>
      {images.map(image => (
        <div key={image._id}>
          <img src={`http://localhost:5000/${image.imageUrl}`} alt={image.category} style={{ maxWidth: '300px', maxHeight: '300px' }} />
          <p>Category: {image.category}</p>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
