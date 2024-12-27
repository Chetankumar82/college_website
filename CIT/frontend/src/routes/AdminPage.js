
import React from 'react';
import AdminCard from './AdminCard';
import notes from "../assets/notes-svgrepo-com.svg";
import gallery from "../assets/gallery-image-interface-svgrepo-com.svg";
import faculty from "../assets/man-svgrepo-com.svg";

const AdminPage = () => {
  return (
    <div className="mt-8">
    <h2 className="text-5xl  text-center text-black mb-3">Admin Panel</h2>
    <p className="text-center text-gray-500 mb-5">Manage your account here and Add new Notice, Faculty Details, Gallary.</p>
    <div className='admin-page flex justify-around '>
    
    <AdminCard
        title="Notices"
        image={notes}
        path="/Admin/notices-lab-manuals"
      />
      <AdminCard
        title="Faculty Details"
        image={faculty}
        path="/Admin/faculty-details"
      />
       <AdminCard
        title="Gallary"
        image={gallery}
        path="/Admin/event-gallary"
      />
      
    </div>
      
            {/* <FacultyManagement/> */}

    </div>
  );
};

export default AdminPage;

