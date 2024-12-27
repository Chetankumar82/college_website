import React, { useState } from 'react';
import axios from 'axios';

const NoticeUpload = ({setUploaded}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const toggleModal = () => {
    setIsOpen(!isOpen);
    console.log("Modal isOpen state:", isOpen);
  };

  const handleChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!selectedFile) {
        console.error('No file selected');
        return;
      }

      const formData = new FormData();
      formData.append('file', selectedFile);

      const response = await axios.post('http://localhost:5000/api/notices/notice', formData);

      console.log(response.data);
      alert('Notice uploaded successfully');
    } catch (error) {
      console.error('Error uploading notice:', error);
      alert('Error uploading notice');
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
        Notice Upload
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
            <h2 className="text-xl font-bold mb-4">File Upload</h2>
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
                  className="mt-2 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                />
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

export default NoticeUpload;
