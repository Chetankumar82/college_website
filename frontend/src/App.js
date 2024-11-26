import React from 'react'
import Home from './pages/Home';
import {  Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Academics from './pages/Academics';
import Placement from './pages/Placement';
import Studentcorner from './pages/Studentcorner';
import Hostel from './pages/Hostel';
import Infrastructure from './pages/Infrastructure';
import Affiliationsandccreditations from './pages/Affiliationsandccreditations';
import Principle from './pages/Principle';
import Chairman from './pages/Chairman';
import Facultys from './pages/Facultys';
import Researchanddev from './pages/Researchanddev';

const App = () => {
  return (

    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/academics" element={<Academics />} />
        <Route path='/studentcorner' element={<Studentcorner />} />
        
        <Route path='/placement' element={<Placement />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/hostel' element={<Hostel/>} />
        <Route path='/infrastructure' element={<Infrastructure/>} />
        <Route path='/affliationsandccreditations' element={<Affiliationsandccreditations />} />
        <Route path='/principle' element={<Principle />} />
        <Route path='/chairman' element={<Chairman  />} />
        <Route path='/faculty' element={<Facultys  />} />
        <Route path='/research' element={<Researchanddev />} />
        
        
    </Routes>
    
  )
}

export default App;