import React from 'react'
import Breadcrumb from '../Breadcrumb/Breadcrumb'

const CodingClub = () => {
  return (
   <>
    <Breadcrumb Home="Home" PageName="Coding Club" id="studentclub /" />
    <div className="mt-40  min-h-screen mx-3">
      <div className="mx-auto max-w-screen-2xl px-4 ">
        <div className="  sm:mb-8 ">
          <div className="">
            <h2 className="text-2xl font-bold text-black lg:text-3xl dark:text-white text-left mb-5 pb-3 " style={{borderBottom: "1px solid blue"}}>
            Coding Club
            </h2>
            <p className="text-black dark:text-gray-300 md:block fs-6">
            The coding club at CIT is followed by a group of students in CIT aims to interact with like-minded peers and 
            explore the world of computer science. They are driven by their passion for coding and hunger to learn, which 
            has helped the club scale new heights.
            </p>
            <p className="text-black dark:text-gray-300 md:block fs-6">
            Coding Club helps members gain in-depth knowledge of coding. This helps them immensely during placements and can
             also bring laurels to the institution through various national and international programming contest. The club 
             helps members develop an aptitude for logical thinking and visualizing a problem from various perspectives and 
             creating multiple innovative solutions The country as a whole requires a lot more coders for it to achieve the 
             goal of a ‘Digital India’. The club is doing its bit to help the country pursue this goal.
            </p>
            <h4 className=" font-bold text-black lg:text-2xl dark:text-white text-left mb-2 mt-5 ">
            Club representatives:
            </h4>
            <p className="text-black dark:text-gray-300 md:block fs-6" style={{marginBottom:"0px"}}>
            Co-ordinator:- Ms. Neha Parashar
            </p>
            <p className="text-black dark:text-gray-300 md:block fs-6" style={{marginBottom:"0px"}}>
            President:- Awanish chaurasiya
            </p>
            <p className="text-black dark:text-gray-300 md:block fs-6" style={{marginBottom:"0px"}}>
            Vice president:-Yashmala Kothari
            </p>
            
          </div>
        </div>
      </div>
    </div> 
   </>
  )
}

export default CodingClub