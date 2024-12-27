import React from 'react'
import Breadcrumb from '../Breadcrumb/Breadcrumb'

const RoboticsClub = () => {
  return (
    <>
        <Breadcrumb Home="Home" PageName="Robotics Club" id="studentclub /" />
        <div className="mt-40 mb-5 min-h-screen py-10 mx-3">
      <div className="mx-auto max-w-screen-2xl px-4 ">
        <div className="mb-4  sm:mb-8 md:mb-12">
          <div className="">
            <h2 className="text-2xl font-bold text-black lg:text-3xl dark:text-white text-left mb-5 pb-3 " style={{borderBottom: "1px solid blue"}}>
            Robotics Club
            </h2>
            <p className="text-black dark:text-gray-300 md:block fs-6">
            Robotics club at CIT aims to deals with the design, construction, operation, structural disposition, manufacture and 
            application of robots. The concept and creation of autonomously operating machines dates back a long time, but credible
             research into the functionality and potential uses of robots did not grow substantially until the 20th century. 
             And today, robotics is a rapidly growing field, as we continue to research, design and build new robots that 
             serve various practical purposes including domestic, commercial and military. Thus the Robotics Club of CIT 
             strives to stimulate interest in robotics among the students of the institute. Besides making a serious endeavour
              to spread knowledge on Robotics and its diverse applications. The club today is an active platform for students 
              to display and develop their practical machine building skills and knowledge. Any company interested to adopt any
               of the Robotics devices, we would be more than happy to adopt or transfer the technology.
            </p>
            
            <h4 className=" font-bold text-black lg:text-2xl dark:text-white text-left mb-2 mt-5 ">
            Club representatives:
            </h4>
            <p className="text-black dark:text-gray-300 md:block fs-6" style={{marginBottom:"0px"}}>
            Co-ordinator:- Mr. Mossin Bhatti
            </p>
            <p className="text-black dark:text-gray-300 md:block fs-6" style={{marginBottom:"0px"}}>
            President:- Aayush Saini
            </p>
            <p className="text-black dark:text-gray-300 md:block fs-6" style={{marginBottom:"0px"}}>
            Vice president:- Harsh Kumar
            </p>
            
          </div>
        </div>
      </div>
    </div> 
    </>
  )
}

export default RoboticsClub