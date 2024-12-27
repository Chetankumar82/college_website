import React, { useState } from 'react';
import axios from 'axios';

const LabManualUpload = ({setUploaded}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedBranch, setSelectedBranch] = useState('');

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleBranchChange = (e) => {
    setSelectedBranch(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!selectedFile || !selectedBranch) {
        console.error('Please select both file and branch');
        return;
      }

      const formData = new FormData();
      formData.append('file', selectedFile);
      formData.append('branch', selectedBranch);

      const response = await axios.post('http://localhost:5000/api/labManuals/labManual', formData);

      alert('Lab Manual uploaded successfully');
    } catch (error) {
      console.error('Error uploading lab manual:', error);
      alert('Error uploading lab manual');
    }
    toggleModal();
    setUploaded((result)=>!result)
  };

  return (
    <>
      <button
        onClick={toggleModal}
        className="bg-blue-1000 text-white px-4 py-2 rounded"
      >
        Lab Manual Upload
      </button>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 w-6 h-6 flex items-center justify-center"
              onClick={toggleModal}
              style={{ width: '25px', height: '25px' }}
            >
              X
            </button>
            <h2 className="text-xl font-bold mb-4">Lab Manual Upload</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="fileUpload" className="block text-gray-700">
                  Upload PDF:
                </label>
                <input
                  type="file"
                  id="fileUpload"
                  name="fileUpload"
                  accept="application/pdf"
                  onChange={handleChange}
                  className="mt-2 block w-full text-sm text-gray-500 rounded-full py-2 px-4 border-0 bg-blue-50 text-blue-700 hover:bg-blue-100"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="branch" className="block text-gray-700">
                  Choose Branch:
                </label>
                <select
                  id="branch"
                  name="branch"
                  value={selectedBranch}
                  onChange={handleBranchChange}
                  className="mt-2 block w-full text-sm text-gray-700 rounded-full py-2 px-4 border-0 bg-blue-50 text-blue-700 hover:bg-blue-100"
                >
                  <option value="">Select Branch</option>
                  <option value="CSE">Computer Science</option>
                  <option value="EE">Electrical</option>
                  <option value="ME">Mechanical</option>
                  <option value="CE">Civil</option>
                  <option value="ECE">Electronics</option>
                  {/* Add more options as needed */}
                </select>
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default LabManualUpload;
