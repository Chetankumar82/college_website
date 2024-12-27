import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EventCard from './EventCard';
import EventSidebar from './EventSidebar';

const EventGallary = () => {
  const [selectEvent, setSelectEvent] = useState('');
  const [eventImages, setEventImages] = useState([]);
  const Events = ['Tarunya', 'Lakshya', 'Seminar', 'Exibition', 'Arts', 'Hostel', "Recreation", "Culture"];


useEffect(() => {
    fetchEventImages();
  }, []);

  const fetchEventImages = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/event-images');
      setEventImages(response.data);
    } catch (error) {
      console.error('Error fetching event images:', error);
      // Handle error as needed
    }
  };

//   const handleCreate = () => {
//     setSelectedFaculty(null);
//     setIsModalOpen(true);
//   };

  const changeEventName = (event) => {
    setSelectEvent(event);
  };



//   const handleDeleteFaculty = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5000/api/faculties/${id}`);
//       // Remove faculty from local state after successful deletion
//       setFacultyData((prevData) => prevData.filter((item) => item._id !== id));
//     } catch (error) {
//       console.error('Error deleting faculty:', error);
//       // Handle error as needed
//     }
//   };

//   const handleUpdateFaculty = (faculty) => {
//     setSelectedFaculty(faculty);
//     setIsModalOpen(true);
//   };

  return (
    <div className="flex flex-col lg:flex-row h-screen mt-40">
      <EventSidebar
        Events={Events}
        changeEventName={changeEventName}
       
      />
   <div className="flex-grow p-4 overflow-auto">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {eventImages
      .filter(
        (event) =>
          !selectEvent || event.category === selectEvent
      )
      .map((event) => (
        <EventCard
          key={event._id}
          event={event}
        //   onUpdate={handleUpdateFaculty}
        //   onDelete={handleDeleteFaculty}
        />
      ))}
  </div>
  {/* {facultyData.filter(
    (faculty) =>
      !selectEvent || faculty.department === selectedDepartment
  ).length === 0 && (
    <div className="text-center text-gray-500 mt-4">
      No faculties available
    </div>
  )} */}
</div>
     
    </div>
  );
};

export default EventGallary;
