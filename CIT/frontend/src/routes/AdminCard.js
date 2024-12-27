import React from 'react';
import { Link } from 'react-router-dom';

const AdminCard = ({ title, image,path }) => {



  return (
    <div
      className=" mt-0 p-4 mb-0 cursor-pointer"
    >
      <img src={image} alt={title} className="w-20 h-20 object-cover mx-auto border-5 p-2 rounded-lg mb-3" />
      <Link to={path}><h2 className="text-xl font-bold text-center text-black">{title}</h2></Link>
    </div>
  );
};

export default AdminCard;
