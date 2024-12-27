import React from 'react';
import img from './../assets/Nptel.png'

const university = {
  name: "AICTE",
  description: "The All India Council for Technical Education (AICTE) is a national-level council for technical education under the Department of Higher Education, Ministry of Education. Established in November 1945, AICTE is responsible for proper planning and coordinated development of the technical education and management education system in India. It accredits postgraduate and graduate programs under specific categories at Indian institutions as per its charter.",
  image:img // Replace with the actual image URL
};

function NPTEL() {
  return (
    <>
    <div className="bg-white min-h-screen bg-gray-100 flex items-center justify-center ">
      <div className="bg-white  rounded-lg overflow-hidden flex flex-col md:flex-row">
        <div className="md:w-1/4 flex items-center justify-center">
          <img src={university.image} alt={university.name} className="object-cover p-5" style={{ width: '700px', height: '200px' }} />
        </div>
        <div className="p-2 md:w-3/4 flex flex-col justify-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">{university.name}</h1>
          <p className="text-gray-700">{university.description}</p>
          <a href='https://nptel.ac.in/' className='text-blue-500'>Click Here</a>

        </div>
      </div>
    </div>
</>
    
  );
}

export default NPTEL;
