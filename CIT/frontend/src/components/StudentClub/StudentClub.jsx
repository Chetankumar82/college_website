import React from 'react'
import Breadcrumb from '../Breadcrumb/Breadcrumb'
import codingclub from "../../assets/Clubs/CodingClub.webp"
import cultural from "../../assets/Clubs/cultural.jpeg"
import robotics from "../../assets/Clubs/robotics.jpg"
import social from "../../assets/Clubs/mediaclub.jpeg"
import technical from "../../assets/Clubs/technical.jpeg"
import { Link } from "react-router-dom";
 
const departments = [
    {
      id: "code",
      img: codingclub,
      name: "Coding Club",
      description: "Interact with like-minded peers and explore the world of computer science.",
    },
    {
      id: "cultural",
      img: cultural,
      name: "Cultural Club",
      description: "Cultural club strives to bring out the hidden talent of the students of the college...",
    },
    {
      id: "robotics",
      img: robotics,
      name: "Robotics Club",
      description: "Deals with the design, construction, operation, structural disposition of robots...",
    },
    {
      id: "technical",
      img: technical,
      name: "Technical Innovation Club",
      description:
        "To create awareness, educate, nurture and inculcate a culture of innovation...",
    },
    {
      id: "social",
      img: social,
      name: "Social Media Club",
      description:
        "Combines physical sciences with life sciences and mathematics...",
    },
  ];
const StudentClubCard = ({img, id, name, description }) => (
    <>
   
    <section class="popular-program-section-2 fix section-padding pt-0">
              <div class="">
                 
                          <div class="popular-program-box-items box-shadow mt-0">
                              <div class="thumb">
                                  <img src={img} alt="img"/>
                              </div>
                              <div class="content">
                                  
                                  
                                  <h3> <Link
      to={`/studentclub/${id}`}
      className="relative bg-white  rounded-lg shadow-md hover:shadow-5xl transition-shadow duration-300 cursor-pointer"
    >
      <div className="absolute inset-0  text-black flex items-center justify-center opacity-0 hover:opacity-90 transition-opacity duration-300"></div>
      <h3 className="text-2xl font-semibold text-black">{name}</h3>
    </Link></h3>
                                  <p className="text-black dark:text-gray-300 md:block">{description}</p>
                                  
                              </div>
                          </div>
                      </div>
                     
                 
          </section>
          </>
  );
const StudentClub = () => {
    
  return (
    <>
        <Breadcrumb Home="Home" PageName="Student Club" />
        <div
      className="mt-40 mb-5 min-h-screen py-10"
      
    >
      <div className="p-4  mx-auto ">
        
        {/* Increased font size */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8">
          {departments.map((dept) => (
            <StudentClubCard key={dept.id} id={dept.id} name={dept.name} description={dept.description} img={dept.img} />
          ))}
        </div>
      </div>

      {/* Routes for department details */}
     
    </div>
    </>
  )
}

export default StudentClub