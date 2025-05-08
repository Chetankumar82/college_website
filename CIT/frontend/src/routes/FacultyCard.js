import React, { useState } from 'react';
import axios from 'axios';
import FacultyImg from '../assets/faculty/Dummy.jpeg'
const BASE_URL = process.env.REACT_APP_BASE_URL;

const FacultyCard = ({ faculty, onUpdate, onDelete }) => {
  const [image, setImage] = useState(faculty.image ? `${BASE_URL}/${faculty.image}` : FacultyImg); // Update the image URL



  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'image/jpeg') {
      const formData = new FormData();
      formData.append('image', file);

      try {
        const response = await axios.put(
          `${BASE_URL}/api/faculties/${faculty._id}/image`,
          formData
        );

        setImage(`${BASE_URL}/${response.data.imageUrl}`); // Update image state with new image URL
      } catch (error) {
        console.error('Error uploading image:', error);
        // Handle error as needed
      }
    } else {
      alert('Please upload a valid JPG image.');
    }
  };

  return (
    <div className="border p-4 rounded shadow-md mb-4">
      <div className="text-center">
        <h2 className="text-xl font-bold text-blue-600">{faculty.name}</h2>
        <img
          src={image}
          alt={faculty.name}
          className="w-32 h-32 object-cover mt-4 mb-4 mx-auto rounded-full"
          onClick={() => document.getElementById(`file-input-${faculty._id}`).click()}
        />
        <input
          id={`file-input-${faculty._id}`}
          type="file"
          accept="image/jpeg"
          className="hidden"
          onChange={handleImageChange}
        />
      </div>
      <div className="text-left">
        <p className='text-gray-800'>Mobile: {faculty.mobile}</p>
        <p className='text-gray-800'>Experience: {faculty.experience}</p>
        <p className='text-gray-800'>Designation: {faculty.designation}</p>
        <p className='text-gray-800'>Department: {faculty.department}</p>
      </div>
      <div className="mt-4 text-center flex">
        <button
          onClick={() => onUpdate(faculty)}
          className="bg-yellow-300 text-blue-900 p-2 rounded mr-2 mb-2 hover:text-white"
        >
          Update
        </button>
        <button
          onClick={()=> onDelete(faculty._id)}
          className="bg-blue-900 text-white p-2 rounded mr-2 mb-2"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default FacultyCard;
