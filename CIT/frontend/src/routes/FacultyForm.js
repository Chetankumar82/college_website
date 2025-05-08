import React, { useState, useEffect } from 'react';
import axios from 'axios';
const BASE_URL = process.env.REACT_APP_BASE_URL;

const FacultyForm = ({ faculty, departments, onClose, setCreate }) => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    experience: '',
    designation: '',
    department: '',
  });

  useEffect(() => {
    if (faculty) {
      setFormData(faculty);
    }
  }, [faculty]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (faculty) {
        // If faculty exists, update existing faculty
        await axios.put(`${BASE_URL}/api/faculties/${faculty._id}`, formData);
      } else {
        // If no faculty (creating new), make a POST request
        await axios.post(`${BASE_URL}/api/faculties`, formData);
      }
      setCreate(true); // Trigger data fetch in parent component
      onClose(); // Close the modal
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="fixed inset-0 mt-40 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded shadow-md w-full max-w-md">
        <h2 className="text-xl font-bold mb-4 text-center">
          {faculty ? 'Update Faculty' : 'Add New Faculty'}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="flex mb-4">
            <label className="w-1/3 text-right pr-2">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border p-2 rounded flex-1"
              required
            />
          </div>
          <div className="flex mb-4">
            <label className="w-1/3 text-right pr-2">Mobile:</label>
            <input
              type="text"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="border p-2 rounded flex-1"
              required
            />
          </div>
          <div className="flex mb-4">
            <label className="w-1/3 text-right pr-2">Experience:</label>
            <input
              type="text"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="border p-2 rounded flex-1"
              required
            />
          </div>
          <div className="flex mb-4">
            <label className="w-1/3 text-right pr-2">Designation:</label>
            <input
              type="text"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              className="border p-2 rounded flex-1"
              required
            />
          </div>
          <div className="flex mb-4">
            <label className="w-1/3 text-right pr-2">Department:</label>
            <select
              name="department"
              value={formData.department}
              onChange={handleChange}
              className="border p-2 rounded flex-1"
              required
            >
              <option value="">Select Department</option>
              {departments.map((dept) => (
                <option key={dept} value={dept}>
                  {dept}
                </option>
              ))}
            </select>
          </div>
          <div className="flex justify-end mt-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white p-2 rounded mr-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded"
            >
              {faculty ? 'Update' : 'Create'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FacultyForm;
