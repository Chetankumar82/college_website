import React from 'react'
import Breadcrumb from '../Breadcrumb/Breadcrumb'

const SocialClub = () => {
  return (
    <>
        <Breadcrumb Home="Home" PageName="Social Media Club" id = "Student-Club /" />
        <div className="mt-40 min-h-screen  mx-3">
      <div className="mx-auto max-w-screen-2xl px-4 ">
        <div className=" sm:mb-8 ">
          <div className="">
            <h2 className="text-2xl font-bold text-black lg:text-3xl dark:text-white text-left mb-5 pb-3 " style={{borderBottom: "1px solid blue"}}>
            Social Media Club
            </h2>
            <p className="text-black dark:text-gray-300 md:block fs-6">
            Social Media Club hosts a crew of students at CIT who explore key issues facing our society by 
            conducting educational events to share the awesome social media talents in our community. This 
            club is to transform the lives by connecting, communicating, collaborating and relating to each other. 
            The key focuses are on knowledge sharing through sharing lessons online, expanding digital me literacy,
             enhancing communication skills and competing industry standards. The purpose of this club is to create,
              conduct and support on and off campus activities related to the various social, academic, cultural, 
              placement related activities, summer internships and club related events.
            </p>
            <p className="text-black dark:text-gray-300 md:block fs-6">
            To enhance the skills of the students through hands-on experience to provide students with the opportunity
             to express their ideas and talent through social media. To foster the Institute interaction by posting the
              content related to guest lectures by corporate delegates, plant visits and industrial visits organized by
               the institute. To develop relationship with alumni, entrepreneurs, academicians and industry professionals.
                To digitally market the events and activities by uploading photos, videos and related reminders about the 
                events. To provide an opportunity to interact online to various technologists related to their queries about
                 the institute. To disseminate knowledge, information and making important announcements related to all 
                 activities of institute.
            </p>
            <h4 className=" font-bold text-black lg:text-2xl dark:text-white text-left mb-2 mt-5 ">
            Club representatives:
            </h4>
            <p className="text-black dark:text-gray-300 md:block fs-6" style={{marginBottom:"0px"}}>
            Co-ordinator:- Mr.Rahul Sharma
            </p>
            <p className="text-black dark:text-gray-300 md:block fs-6" style={{marginBottom:"0px"}}>
            President:- Tina Goswami
            </p>
            <p className="text-black dark:text-gray-300 md:block fs-6" style={{marginBottom:"0px"}}>
            Vice president:- Visvaraj Singh Vaghela
            </p>
            
          </div>
        </div>
      </div>
    </div> 
    </>
  )
}

export default SocialClub