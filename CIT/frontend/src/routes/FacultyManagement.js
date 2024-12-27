import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FacultyForm from './FacultyForm';
import FacultyCard from './FacultyCard';
import FacultyManagementSidebar from './FacultyManagementSidebar';

const FacultyManagement = () => {
  const [facultyData, setFacultyData] = useState([]);
  const [create, setCreate] = useState(false);

  const [selectedFaculty, setSelectedFaculty] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const departments = ['Administration', 'Computer Science', 'Mechanical', 'Civil', 'Electrical', "Electronics"];

  // Fetch all faculty data from backend on component mount
  useEffect(() => {
    fetchFacultyData();
  }, []);

  useEffect(() => {
    if (create) {
      fetchFacultyData();
      setCreate(false);
    }
  }, [create]);

  const fetchFacultyData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/faculties');
      setFacultyData(response.data);
    } catch (error) {
      console.error('Error fetching faculty data:', error);
    }
  };

  const handleCreate = () => {
    setSelectedFaculty(null);
    setIsModalOpen(true);
  };

  const handleSelectDepartment = (dept) => {
    setSelectedDepartment(dept);
  };

  const handleDeleteFaculty = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/faculties/${id}`);
      // Remove faculty from local state after successful deletion
      setFacultyData((prevData) => prevData.filter((item) => item._id !== id));
    } catch (error) {
      console.error('Error deleting faculty:', error);
    }
  };

  const handleUpdateFaculty = (faculty) => {
    setSelectedFaculty(faculty);
    setIsModalOpen(true);
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen mt-40">
      <FacultyManagementSidebar
        departments={departments}
        onDepartmentSelect={handleSelectDepartment}
        onCreate={handleCreate}
      />
      <div className="flex-grow p-4 overflow-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {facultyData
            .filter(
              (faculty) =>
                !selectedDepartment || faculty.department === selectedDepartment
            )
            .map((faculty) => (
              <FacultyCard
                key={faculty._id}
                faculty={faculty}
                onUpdate={handleUpdateFaculty}
                onDelete={handleDeleteFaculty}
              />
            ))}
        </div>
        {facultyData.filter(
          (faculty) =>
            !selectedDepartment || faculty.department === selectedDepartment
        ).length === 0 && (
          <div className="text-center text-gray-500 mt-40">
            No faculties available
          </div>
        )}
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <FacultyForm
            faculty={selectedFaculty}
            departments={departments}
            onClose={() => setIsModalOpen(false)}
            setIsModalOpen={setIsModalOpen}
            setCreate={setCreate}
          />
        </div>
      )}
    </div>
  );
};

export default FacultyManagement;
