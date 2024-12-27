import React from 'react'
import sem1 from '../assets/images/seminar-hall.png'
import sem2 from '../assets/images/sem2.png'
import sem3 from '../assets/images/seminar3.png'
import sem4 from '../assets/images/seminar4.png'
const Seminar = () => {
  return (
    <div className="mt-40 mb-40 p-10 bg-white h-screen py-6 sm:py-8 lg:py-12">
    <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
      <div className="mb-8">
        <h2
          className="text-2xl font-bold text-black lg:text-3xl dark:text-white py-3 mb-4"
          style={{ borderBottom: "1px solid blue" }}
        >
          Workshop & Seminar
        </h2>
        <p className="text-justify text-black dark:text-gray-300 md:block">
        The transition from high school to college represents a significant milestone 
        in a student’s academic journey, often filled with new challenges and opportunities.
         Academic workshops for college students have emerged as vital platforms to support, 
         engage, and enhance the learning experience. But what exactly are academic workshops? 
         Why are they crucial for college students? How can they be tailored to overcome specific
          challenges faced by students? Let’s embark on an exploration of these workshops, uncovering 
          their essential characteristics, significance, benefits, and potential obstacles.
        </p>
        <p className="text-justify text-black dark:text-gray-300 md:block">
            Unlike traditional lectures or classroom settings, academic workshops are usually 
            interactive and focused sessions that provide hands-on experience, skills development,
             or targeted learning on specific subjects. 
            They may involve group activities, simulations, case studies, or real-world applications.
        </p>
      </div>
  
      <div className="grid grid-cols-3 md:grid-cols-4 gap-6">
        {/* Frame for Image 1 */}
        <div className="p-4 border rounded-lg shadow-md bg-gray-50">
          <img
            src={sem1}
            alt="Sports Facility"
            className="w-full h-[200px] object-cover rounded-md"
          />
        </div>
  
        {/* Frame for Image 2 */}
        <div className="p-4 border rounded-lg shadow-md bg-gray-50">
          <img
            src={sem2}
            alt="Cricket Field"
            className="w-full h-[200px] object-cover rounded-md"
          />
        </div>
  
        {/* Frame for Image 3 */}
        <div className="p-4 border rounded-lg shadow-md bg-gray-50">
          <img
            src={sem3}
            alt="Basketball Court"
            className="w-full h-[200px] object-cover rounded-md"
          />
        </div>
  
        {/* Frame for Image 4 */}
        <div className="p-4 border rounded-lg shadow-md bg-gray-50">
          <img
            src={sem4}
            alt="Gymnasium"
            className="w-full h-[200px] object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  </div>
  )
}

export default Seminar