import React from "react";

import { Link, Route, Routes } from "react-router-dom";
import DepartmentDetails from "./DepartmentDetails";
import "./Department.css";
import cse from "../assets/Departments/CSE.png"
import me from "../assets/Departments/me.png"
import ee from "../assets/Departments/ee.png"
import ce from "../assets/Departments/ce.png"
import ece from "../assets/Departments/ece.png"
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";

const departments = [
  {
    id: "cs",
    img: cse,
    name: "Computer Science & Engineering",
    description: "Focuses on computing, programming, and software development.",
  },
  {
    id: "me",
    img: me,
    name: "Mechanical Engineering",
    description:
      "Deals with the design and manufacturing of mechanical systems.",
  },
  {
    id: "ee",
    img: ee,
    name: "Electrical Engineering",
    description: "Involves the study of electrical systems and circuits.",
  },
  {
    id: "ce",
    img: ce,
    name: "Civil Engineering",
    description:
      "Covers construction, design, and maintenance of the physical and naturally built environment.",
  },
  {
    id: "ele",
    img: ece,
    name: "Electronics Engineering",
    description:
      "Combines physical sciences with life sciences and mathematics.",
  },
];

const DepartmentCard = ({img, id, name, description }) => (
  <>
 
  <section class="popular-program-section-2 fix section-padding pt-0">
            <div class="">
               
                        <div class="popular-program-box-items box-shadow mt-0">
                            <div class="thumb">
                                <img src={img} alt="img"/>
                            </div>
                            <div class="content">
                                
                                
                                <h3> <Link
    to={`/Department/${id}`}
    className="relative bg-white  rounded-lg shadow-md hover:shadow-5xl transition-shadow duration-300 cursor-pointer"
  >
    <div className="absolute inset-0 bg-white text-black flex items-center justify-center opacity-0 hover:opacity-90 transition-opacity duration-300"></div>
    <h3 className="text-2xl font-semibold text-black">{name}</h3>
  </Link></h3>
                                <p className="text-black dark:text-gray-300 md:block">{description}</p>
                                
                            </div>
                        </div>
                    </div>
                   
               
        </section>
        </>
);

const Department = () => {
  return (
    <>
    <Breadcrumb Home="Home" PageName="Engineering Departments" />
    <div
      className="mt-40 mb-5 min-h-screen py-10"
      
    >
      <div className="p-4  mx-auto ">
        
        {/* Increased font size */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8">
          {departments.map((dept) => (
            <DepartmentCard key={dept.id} id={dept.id} name={dept.name} description={dept.description} img={dept.img} />
          ))}
        </div>
      </div>

      {/* Routes for department details */}
     
    </div>
   
        </>
  );
};

export default Department;
