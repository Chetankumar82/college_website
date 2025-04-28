import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NoticeUpload from '../components/NoticeUpload';
import LabManualUpload from '../components/labManualUpload';

const NoticeAndManual = ({ login }) => {
  const [notices, setNotices] = useState([]);
  const [labManuals, setLabManuals] = useState([]);
  const [upload, setUploaded] = useState(false);

  const handleDownloadNotice = async (noticeId) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/notices/notice/${noticeId}`, {
        responseType: 'blob',
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'notice.pdf');
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error('Error downloading notice:', error);
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

  const handleDeleteNotice = async (noticeId) => {
    try {
      await axios.delete(`http://localhost:5000/api/notices/notice/${noticeId}`);
      setUploaded(!upload);
    } catch (error) {
      console.error('Error deleting notice:', error);
    }
  };

  const handleDeleteLabManual = async (manualId) => {
    try {
      await axios.delete(`http://localhost:5000/api/labManuals/labManual/${manualId}`);
      setUploaded(!upload);
    } catch (error) {
      console.error('Error deleting lab manual:', error);
    }
  };

  const fetchManuals = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/labManuals/labManual');
      setLabManuals(response.data.reverse());
    } catch (error) {
      console.error('Error fetching lab manuals:', error);
    }
  };

  const fetchNotices = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/notices/notice');
      setNotices(response.data.reverse());
    } catch (error) {
      console.error('Error fetching notices:', error);
    }
  };

  useEffect(() => {
    fetchNotices();
    fetchManuals();
  }, [login, upload]);

  return (
    <div className="flex flex-col md:flex-row justify-center items-start md:space-x-8 p-4 bg-grey-200 min-h-screen mt-40">
      {/* Notices and Order Section */}
      <div className="w-full md:w-1/2 p-6 bg-white rounded-lg shadow-lg">
        <div className="max-h-96 overflow-y-scroll">
          <div className="flex justify-between items-center mb-4">
            <h5 className="text-xl font-bold text-blue-900 w-1/2">Notices and Orders</h5>
            <NoticeUpload setUploaded={setUploaded} />
          </div>
          <div>
            {notices.length > 0 ? (
              <ul className="divide-y divide-gray-200 max-h-80 overflow-y-auto">
                {notices.map((notice, index) => (
                  <li key={index} className="relative p-2 cursor-pointer hover:bg-gray-100 mt-2">
                    <span onClick={() => handleDownloadNotice(notice._id)}>{notice.filename}</span>
                    <button
                      onClick={() => handleDeleteNotice(notice._id)}
                      className="absolute top-1/2 right-4 transform -translate-y-1/2 text-red-600 hover:text-red-800 w-12"
                    >
                      &times;
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600">No Notices Found</p>
            )}
          </div>
        </div>
      </div>

      {/* Lab Manual Upload Section */}
      <div className="w-full md:w-1/2 p-6 bg-white rounded-lg shadow-lg">
        <div className="max-h-96 overflow-y-scroll">
          <div className="flex justify-between items-center mb-4">
            <h5 className="text-xl font-bold text-blue-900 w-1/2">Lab Manual Upload</h5>
            <LabManualUpload setUploaded={setUploaded} />
          </div>
          <div>
            {labManuals.length > 0 ? (
              <ul className="divide-y divide-gray-200 max-h-80 overflow-y-auto">
                {labManuals.map((manual, index) => (
                  <li key={index} className="relative p-2 cursor-pointer hover:bg-gray-100 mt-2">
                    <span onClick={() => handleDownloadLabManual(manual._id)}>{manual.filename}</span>
                    <button
                      onClick={() => handleDeleteLabManual(manual._id)}
                      className="absolute top-1/2 right-4 transform -translate-y-1/2 text-red-600 hover:text-red-800 w-12"
                    >
                      &times;
                    </button>
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
  );
};

export default NoticeAndManual;
