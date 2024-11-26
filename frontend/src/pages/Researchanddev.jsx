import React from 'react'
import Header from '../Components/Header'
import Breadcrumb from '../Components/Breadcrumb'
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';

const Researchanddev = () => {
    const home = "Home"; // Use `const` to declare the variable
    const researchAndDev = "Research & Development"; // Avoid using the same name as the component
  return (
    <>
        <Header />
        <Breadcrumb Home={home} Pages={researchAndDev} />
        
        <Footer />
    </>
  )
}

export default Researchanddev