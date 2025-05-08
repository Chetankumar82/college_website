
import React, { useState } from 'react';
import axios from 'axios'; // Import Axios
import { Link,Route,Routes } from 'react-router-dom';
import AdminPage from './AdminPage';
import './Admin.css';
const BASE_URL = process.env.REACT_APP_BASE_URL;
const Admin = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [nameError, setNameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [login, setLogin] = useState(false);


  const handleLogin = async () => {
    let valid = true;

    // Validate name
    if (name === '') {
      setNameError('Name is required');
      valid = false;
    } else {
      setNameError('');
    }

    // Validate password
    if (password === '') {
      setPasswordError('Password is required');
      valid = false;
    } else {
      setPasswordError('');
    }

    if (valid) {
      alert('Login Successful');
      try {
        // Make API call to backend for login using Axios
        const response = await axios.post(`${BASE_URL}/api/auth/login`, { name, password });
        console.log(response)

        if (response.status === 200) {
          alert(response.data.msg); // Display success message
          setLogin(true);
          // Handle successful login (e.g., redirect, state update)
        } 
      } catch (error) {
        console.error('Error:', error);
        alert('Invalid Credentials');
      }
    }
  };

  return (
    <>
   <div className='mt-60 mb-20'>
   {!login && <div className="login-container">
      <h2>Admin Login</h2>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input 
          type="text" 
          id="name" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {nameError && <p className="error">{nameError}</p>}
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input 
          type="password" 
          id="password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {passwordError && <p className="error">{passwordError}</p>}
      </div>

      <button onClick={handleLogin}>Login</button>
        </div>        
   }

    {login && <AdminPage login={login}/>}
   </div>

    </>
  );
  }

export default Admin

