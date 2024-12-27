import React from 'react'
import Breadcrumb from '../Breadcrumb/Breadcrumb'

const CulturalClub = () => {
  return (
    <>
        <Breadcrumb Home="Home" PageName="Cultural Club" id="Student-Club /" />
        <div className="mt-40 mb-5 min-h-screen py-10 mx-3">
      <div className="mx-auto max-w-screen-2xl px-4 ">
        <div className="mb-4  sm:mb-8 md:mb-12">
          <div className="">
            <h2 className="text-2xl font-bold text-black lg:text-3xl dark:text-white text-left mb-5 pb-3 " style={{borderBottom: "1px solid blue"}}>
            Cultural Club
            </h2>
            <p className="text-black dark:text-gray-300 md:block fs-6">
            The Cultural club of CIT is responsible for all the cultural events in the Institute around the year. CIT cultural club strives 
            to bring out the hidden talent of the students of the college. It is the place where students can showcase what they have got. 
            It helps to discover their talent. Cultural events include competitions such as instrumental, singing, dance etc. Every year this
             club organizes activities such as Talent Hunt, Fresher’s Party, Farewell, Fest and Alumni Meet.
            </p>
            <p className="text-black dark:text-gray-300 md:block fs-6">
            The competitive academic environment and co-curricular activities on campus keep the students on their toes. But everyone needs 
            some time off, to relax and recharge.This club looks for active participation of students from various courses in cultural 
            activities which results in enhancement of the personal skills and experiences like confidence, self-presentation; teamwork 
            and collaboration, time management and organizational skills, self-awareness, self-discipline, open-mindedness to move beyond 
            boundaries and experiment with different ideas, communication skills, the ability to cope with criticism and learn from them
             resulting in a whole new developed, changed and an improved person.
            </p>
            <h4 className=" font-bold text-black lg:text-2xl dark:text-white text-left mb-2 mt-5 ">
            Club representatives:
            </h4>
            <p className="text-black dark:text-gray-300 md:block fs-6" style={{marginBottom:"0px"}}>
            Co-ordinator:- Mrs. Ruksana Saifie
            </p>
            <p className="text-black dark:text-gray-300 md:block fs-6" style={{marginBottom:"0px"}}>
            President:- Jayesh Rawal
            </p>
            <p className="text-black dark:text-gray-300 md:block fs-6" style={{marginBottom:"0px"}}>
            Vice president:-Laxman Meena
            </p>
            
          </div>
        </div>
      </div>
    </div> 
    </>
  )
}

export default CulturalClub