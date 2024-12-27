import React,{useEffect, useState} from 'react';
import './StudentCornerCard.css'
import axios from 'axios';
const StudentCard = ({ student }) => {
  
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [files, setFiles] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`http://localhost:5000/api/student/students/${student._id}/getFiles`);
        setFiles(response.data);
      } catch (error) {
        console.error('Error retrieving files:', error);
        // Handle error in fetching files
      }
    }
    fetchData();
  }, [student._id,files]);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (e) => {
    setSelectedFile(e.target.files[0]);

  };

  const handleSubmit =async (e) => {
    e.preventDefault();

    try {
      if (!selectedFile) {
        console.error('No file selected');
        return;
      }

      const formData = new FormData();
      formData.append('file', selectedFile);

      const response = await axios.put(`http://localhost:5000/api/student/students/${student._id}/fileUpload`, formData);
      console.log(response.data);
      alert('File uploaded successfully');
      toggleModal(); // Close modal or perform other UI update
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('Error uploading file');
    }
  };
  return (
  <div className='card'>
    <h4>{student.name}</h4>
    <p>Roll Number: {student.rollNumber}</p>
    
    {files.length > 0 ? (
        <div >
          <h6>Files:</h6>
          <ul className='files-list'>
            {files.map((file, index) => (
              <li key={index}>{file.filename}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No files</p>
      )}

    </div>
    
  );
};

export default StudentCard;