import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NoticeUpload from '../components/NoticeUpload';
import LabManualUpload from '../components/labManualUpload';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';

const AdminPage = ({ login }) => {
  const [notices, setNotices] = useState([]);
  const [labManuals, setLabManuals] = useState([]);



  const handleDownloadNotice = async (noticeId) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/notices/notice/${noticeId}`, {
        responseType: 'blob',
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'notice.pdf'); // Set the desired file name here
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error('Error downloading notice:', error);
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
  }, [login]);

  return (
    <>
    <Breadcrumb Home="Home" PageName="Notices and Order" />
    <div className=" md:flex-row justify-center items-start px-3  min-h-screen mt-3 ">
      <div className="w-full  p-6 ">
        <div className="sidebar-bottom">
          <div className="flex justify-between items-center mb-4 border-b-2 border-blue-400 pb-0">
            <h5 className="text-4xl font-bold mt-4 mb-3">Notices and Orders</h5>
          </div>
          <div className="sidebar-bottom-list  overflow-y-scroll overflow-x-hidden ">
          {notices.length > 0 ? (
                <ul>
                  {notices.map((notice, index) => (
                    <li
                      key={index}
                      onClick={() => handleDownloadNotice(notice._id)}
                      className="cursor-pointer hover:text-blue-500 mb-2 mt-3 border-gray-400 bg-gray-100 border-1 p-3 rounded-md"
                    >
                      <div>
                        <span className="font-medium">{notice['filename']}</span>
                        <br />
                       
                          
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600">No Notices Found</p>
              )}
          </div>
        </div>
      </div>

    </div>
    </>
  );
};

export default AdminPage;
