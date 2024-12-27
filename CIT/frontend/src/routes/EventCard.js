import React, { useState } from 'react';
import axios from 'axios';

const EventCard = ({ event}) => {
  const [imageUrl, setImage] = useState(event.imageUrl ? `http://localhost:5000/${event.imageUrl}` : 'https://via.placeholder.com/150'); // Update the image URL

  const handleDelete = async (imageId) => {
    try {
        console.log(event)
      await axios.delete(`http://localhost:5000/api/event-images/${imageId}`);
      // Optionally, refetch event images or update the state to reflect the deletion
    } catch (error) {
      console.error('Error deleting event image:', error);
      // Handle error as needed
    }
  };


    

  return (
    <div className="border p-4  shadow-md mb-4">
      <div className="text-center">
        <img
          src={imageUrl}
          alt={event.name}
          className="w-80 h-60 object-cover mt-2 mb-2 mx-auto"
        />
       
      </div>

      <div className="mt-4 text-center">
        <button
         onClick={()=>handleDelete(event._id)}
          className="bg-red-500 text-white p-2 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default EventCard;
