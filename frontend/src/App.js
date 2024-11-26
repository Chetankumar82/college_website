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
    </Routes>
    
  )
}

export default App;