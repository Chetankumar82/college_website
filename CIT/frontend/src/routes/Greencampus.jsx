import React from 'react'
import img1 from "../assets/images/green1.png"
import img2 from "../assets/images/greencampus.png"
const Greencampus = () => {
  return (
    <div className="mt-40 mb-40 p-10 bg-white h-screen py-6 sm:py-8 lg:py-12">
    <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
      <div className="mb-8">
        <h2
          className="text-2xl font-bold text-black lg:text-3xl dark:text-white py-3 mb-4"
          style={{ borderBottom: "1px solid blue" }}
        >
          Green Campus
        </h2>
        <p className="text-justify text-black dark:text-gray-300 md:block">
        Greening the campus is all about sweeping away wasteful inefficiencies and using 
        conventional sources of energies for its daily power needs, correct disposal handling, 
        purchase of environment friendly supplies and effective recycling program. The Institute 
        has an impressive and pollution-free campus with panoramic green surroundings, elegant 
        landscaping and beautiful flowerbeds. These strategies are incorporated into the institutional 
        planning and budgeting processes with the aim of developing a clean and green campus.
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

     
      
    </div>
    </div>
  </div>
  )
}

export default Greencampus