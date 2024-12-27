import React from 'react'
import img1 from '../assets/images/mess1.png'
import img2 from '../assets/images/mess2.png'
import img3 from '../assets/images/mess3.png'
import img4 from '../assets/images/mess4.png'

const Mess = () => {
  return (
    <div className="mt-40 mb-40 p-10 bg-white h-screen py-6 sm:py-8 lg:py-12">
    <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
      <div className="mb-8">
        <h2
          className="text-2xl font-bold text-black lg:text-3xl dark:text-white py-3 mb-4"
          style={{ borderBottom: "1px solid blue" }}
        >
          Mess
        </h2>
        <p className="text-justify text-black dark:text-gray-300 md:block">
        The institute boasts a spacious and well-maintained mess that serves healthy and nutritious 
        meals to students. Ensuring the highest standards of hygiene and food quality, the college 
        takes special care in preparing meals that cater to the dietary needs of its students. 
        
        </p>
        <p className="text-justify text-black dark:text-gray-300 md:block">
        The mess offers a variety of vegetarian dishes, including both regular meals and evening 
        snacks. With a focus on cleanliness, quality, and balanced nutrition, the mess provides 
        a comfortable and safe dining experience for all students. The college is committed to 
        offering wholesome, delicious meals to promote the well-being of its student community.
        </p>
      </div>
  
      <div className="grid grid-cols-3 md:grid-cols-4 gap-6">
        {/* Frame for Image 1 */}
        <div className="p-4 border rounded-lg shadow-md bg-gray-50">
          <img
            src={img1}
            alt="Sports Facility"
            className="w-full h-[200px] object-cover rounded-md"
          />
        </div>
  
        {/* Frame for Image 2 */}
        <div className="p-4 border rounded-lg shadow-md bg-gray-50">
          <img
            src={img2}
            alt="Cricket Field"
            className="w-full h-[200px] object-cover rounded-md"
          />
        </div>
  
        {/* Frame for Image 3 */}
        <div className="p-4 border rounded-lg shadow-md bg-gray-50">
          <img
            src={img3}
            alt="Basketball Court"
            className="w-full h-[200px] object-cover rounded-md"
          />
        </div>
  
        {/* Frame for Image 4 */}
        <div className="p-4 border rounded-lg shadow-md bg-gray-50">
          <img
            src={img4}
            alt="Gymnasium"
            className="w-full h-[200px] object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  </div>
  )
}

export default Mess