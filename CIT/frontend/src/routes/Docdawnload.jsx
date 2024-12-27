import React from 'react'
import Breadcrumb from '../components/Breadcrumb/Breadcrumb'
import { GrUserWorker } from "react-icons/gr";
import { FaBookReader } from "react-icons/fa";
import { IoIosBook } from "react-icons/io";
import internship from "../assets/pdf/Internship-letter.pdf"

const cardData = [
    {
      id: 1,
      icon: (
        <GrUserWorker />
      ),
      title: "Internship / Training Letter",
      details: "Download Here...",
      Href: internship,
    },
    {
      id: 2,
      icon: (
        <FaBookReader />
      ),
      title: "Scheme",
      details: "Download Here...",
      Href: "https://btu.ac.in/home/SYLLABUS-FOR-UNDERGRADUATE-PROGRAMME2021-22146",
    },
    {
      id: 3,
      icon: (
        <IoIosBook />
      ),
      title: "Syllabus",
      details: "Download Here...",
      Href: "https://btu.ac.in/home/SYLLABUS-FOR-UNDERGRADUATE-PROGRAMME2021-22146",
    },
    
  ];
  const Card = ({ icon, title, details, Href }) => (
    <div className="flex flex-col items-center p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 fs-1 text-yellow-400 mt-5 mb-5">
      {icon}
      <h5 className="mt-4 mb-2 text-lg font-semibold text-gray-800 dark:text-white">
        {title}
      </h5>
      <a href={Href} className="text-sm text-gray-600 dark:text-gray-400">{details}</a>
    </div>
  );  
const Docdawnload = () => {
    const title = "Home"
    const pageName = "Downloads"
  return (
    <div>
    <Breadcrumb Home={title} PageName={pageName}/>
    
    
   


  <div className="grid grid-cols-3 mx-4 gap-4 mb-5">
    {cardData.map((card) => (
      <Card key={card.id} icon={card.icon} title={card.title} details={card.details} Href={card.Href} />
    ))}
  </div>


  </div>

    

  )
}

export default Docdawnload