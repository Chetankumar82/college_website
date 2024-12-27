// FacultyList.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FacultyList = () => {
  const [faculties, setFaculties] = useState([]);

  useEffect(() => {
    const fetchFaculties = async () => {
      try {
        const response = await axios.get('/api/faculties'); // Adjusted endpoint to match backend
        setFaculties(response.data);
      } catch (error) {
        console.error('Error fetching faculties:', error);
      }
    };

    fetchFaculties();
  }, []);

  return (
    <div>
      <h2>Faculty List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Mobile</th>
            <th>Experience</th>
            <th>Designation</th>
            <th>Department</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {faculties.map((faculty) => (
            <tr key={faculty._id}>
              <td>{faculty.name}</td>
              <td>{faculty.mobile}</td>
              <td>{faculty.experience}</td>
              <td>{faculty.designation}</td>
              <td>{faculty.department}</td>
              <td>
                {faculty.image && (
                  <img
                    src={`http://localhost:5000/${faculty.image}`}
                    alt={faculty.name}
                    style={{ width: '100px', height: 'auto' }}
                  />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FacultyList;
