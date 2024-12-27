// src/ModalForm.js
import React, { useState } from 'react';
import './StudentFormModal.css';
import axios from 'axios';

const StudentFormModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    rollNumber: '',
    batchYear: '',
    enrollmentNo: '',
    currentYear: '',
    fileUpload: null,
  });


  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/student/students', formData);
      console.log(response.data);
      alert('Student created successfully');
    } catch (error) {
      console.error(error);
      alert('Error creating student');
    }
    toggleModal();
  };

  return (
    <div>
      <button onClick={toggleModal}>Create Student</button>

      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            
            <h2>Submit Your Details <span className="closeBtn" onClick={toggleModal}>X</span></h2>
            <form onSubmit={handleSubmit}>

            <div className="form-grp">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
              </div>

              <div className="form-grp">
                <label htmlFor="rollNumber">Roll Number:</label>
                <input type="text" id="rollNumber" name="rollNumber" value={formData.rollNumber} onChange={handleChange} required />
              </div>

              <div className="form-grp">
                <label htmlFor="batchYear">Batch Year:</label>
                <input type="number" id="batchYear" name="batchYear" value={formData.batchYear} onChange={handleChange} required />
              </div>

              <div className="form-grp">
                <label htmlFor="enrollmentNo">Enrollment No:</label>
                <input type="text" id="enrollmentNo" name="enrollmentNo" value={formData.enrollmentNo} onChange={handleChange} required />
              </div>

              <div className="form-grp">
                <label htmlFor="currentYear">Current Year:</label>
                <input type="number" id="currentYear" name="currentYear" value={formData.currentYear} onChange={handleChange} required />
              </div>

              <div className="form-grp">
                <label htmlFor="fileUpload">Upload PDF:</label>
                <input type="file" id="fileUpload" name="fileUpload" accept="application/pdf" onChange={handleChange}  />
              </div>

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentFormModal;
