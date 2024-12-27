import React from 'react'
import Breadcrumb from '../Breadcrumb/Breadcrumb'

const TechnicalClub = () => {
  return (
    <>
        <Breadcrumb Home="Home" PageName="Technical Innovation Club" id="studentclub /" />
        <div className="mt-40 mb-5 min-h-screen py-10 mx-3">
      <div className="mx-auto max-w-screen-2xl px-4 ">
        <div className="mb-4  sm:mb-8 md:mb-12">
          <div className="">
            <h2 className="text-2xl font-bold text-black lg:text-3xl dark:text-white text-left mb-5 pb-3 " style={{borderBottom: "1px solid blue"}}>
            Technical Innovation Club
            </h2>
            <p className="text-black dark:text-gray-300 md:block fs-6">
            Innovation Clubs in college helps to engage students in innovative and creative activities apart from providing opportunities
             for Hands-on activities. This would be developed for the culture of Creativity and Innovation among students. The key and 
             immediate objective of the Innovation Club in college is to create awareness, educate, nurture and inculcate a culture of 
             innovation among college students and to enable them to generate new ideas and become more innovative. Innovation Clubs can
              reach out to our future generation, foster a strong bonding with students and embark on a critical mission to promote critical 
              thinking, problem solving capabilities and adoption of innovative methodology as part of their lifestyle.
            </p>
            
           
            
          </div>
        </div>
      </div>
    </div> 
    </>
  )
}

export default TechnicalClub