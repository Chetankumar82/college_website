import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EventCard from './EventCard';
import EventSidebar from './EventSidebar';

const EventGallery = () => {
  const [selectEvent, setSelectEvent] = useState('');
  const [eventImages, setEventImages] = useState([]);
  const Events = ['Tarunya', 'Lakshya', 'Seminar', 'Exhibition', 'Arts', 'Hostel', 'Labs', 'Library'];

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

  const changeEventName = (event) => {
    setSelectEvent(event);
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen mt-40">
      <EventSidebar Events={Events} changeEventName={changeEventName} />
      <div className="flex-grow p-4 overflow-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {eventImages
            .filter((event) => !selectEvent || event.category === selectEvent)
            .map((event) => (
              <EventCard key={event._id} event={event} />
            ))}
        </div>
        {eventImages.filter((event) => !selectEvent || event.category === selectEvent).length === 0 && (
          <div className="text-center text-gray-500 mt-4">No images available for this category</div>
        )}
      </div>
    </div>
  );
};

export default EventGallery;
