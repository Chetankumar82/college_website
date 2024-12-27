import React, { useState, useEffect } from "react";
import axios from "axios";
import FacultyImg from '../assets/faculty/Dummy.jpeg'

const DepartmentDetails = ({ name }) => {
  const [faculties, setFaculties] = useState([]);
  const [labManuals, setLabManuals] = useState([]);

  const mapDept = {
    "CSE":"Computer Science",
    "EE":"Electrical",
    "ME":"Mechanical",
    "CE":"Civil",
    "ELE":"Electronics"

  }

  useEffect(() => {
    fetchFacultyData();
    fetchManuals();
  }, []);

  const fetchFacultyData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/faculties");

      setFaculties(response.data.filter(faculty => faculty.department === mapDept[name]));
    } catch (error) {
      console.error("Error fetching faculty data:", error);
    }
  };
  const fetchManuals = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/labManuals/labManual');
      setLabManuals(response.data.filter(manual => manual.branch === name).reverse());
    } catch (error) {
      console.error('Error fetching lab manuals:', error);
    }
  };

  const handleDownloadLabManual = async (manualId) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/labManuals/labManual/${manualId}`, {
        responseType: 'blob',
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'labmanual.pdf');
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error('Error downloading lab manual:', error);
    }
  };

  const features = [
    {
      id: 1,
      name: "Research Labs",
      description:
        "State-of-the-art research labs for AI, ML, and Data Science.",
    },
    {
      id: 2,
      name: "Industry Collaborations",
      description:
        "Collaborations with top tech companies for internships and projects.",
    },
    {
      id: 3,
      name: "Experienced Faculty",
      description: "Faculty with extensive industry and academic experience.",
    },
    {
      id: 4,
      name: "Modern Curriculum",
      description:
        "Curriculum designed to meet current industry standards and future trends.",
    },
    {
      id: 5,
      name: "Student Clubs",
      description: "Active student clubs for coding, robotics, and more.",
    },
  ];

  return (
    <div className="mt-40 bg-slate-100">
      <h2 className="text-3xl font-bold pt-8  pl-5">{mapDept[name]} Engineering Department</h2>

    <div className=" flex flex-col md:flex-row p-4 gap-4 ">

      {/* Left Side Grid for Faculties */}
      <div className="w-full md:w-2/5 bg-slate-200 p-4 rounded">
      <h2 className="text-2xl font-bold mb-3">Faculties Available</h2>
      {faculties.length > 0 ? (

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4  max-h-screen overflow-y-auto">
          {faculties.map((faculty) => (
            <div key={faculty._id} className="bg-white p-4 rounded-lg shadow-md">
              <div className="text-center">
                <h2 className="text-xl font-bold">{faculty.name}</h2>
                <img
                  src={faculty.image !== '' ? `http://localhost:5000/${faculty.image}` : FacultyImg}
                  alt={faculty.name}
                  className="w-32 h-32 object-cover mt-2 mb-2 mx-auto rounded-full"
                />
              </div>
              <div className="text-left">
              <p>Department: {faculty.department}</p>
              <p>Designation: {faculty.designation}</p>
                <p>Experience: {faculty.experience}</p>
                <p>Mobile: {faculty.mobile}</p>
              </div>
            </div>
          ))}
        </div>)  : (              
          <p className="text-gray-600">No Faculties Available at the Moment</p>
)}
      </div>

      {/* Right Side Column Layout */}
      <div className="w-full md:w-3/5 flex flex-col gap-4">
        {/* Top Component for Department Features */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Department Features</h2>
          <table className="min-w-full bg-white border">
            <thead>
              <tr>
                <th className="py-2 px-4 border bg-blue-600 text-white">ID</th>
                <th className="py-2 px-4 border bg-blue-600 text-white">Feature</th>
                <th className="py-2 px-4 border bg-blue-600 text-white">Description</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature) => (
                <tr key={feature.id}>
                  <td className="py-2 px-4 border">{feature.id}</td>
                  <td className="py-2 px-4 border">{feature.name}</td>
                  <td className="py-2 px-4 border">{feature.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom Component for Lab Manuals */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">{mapDept[name]} Engineering Lab Manuals</h2>
          <div>
            {labManuals.length > 0 ? (
              <ul className="divide-y divide-gray-200 max-h-80 overflow-y-auto">
                {labManuals.map((manual, index) => (
                  <li key={index} className="relative p-2 cursor-pointer hover:bg-gray-100 mt-2">
                    <span onClick={() => handleDownloadLabManual(manual._id)}>{manual.filename}</span>
                   
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600">No Lab Manuals Found</p>
            )}
          </div> 
        </div>
      </div>
    </div>
    </div>
  );
};

export default DepartmentDetails;
