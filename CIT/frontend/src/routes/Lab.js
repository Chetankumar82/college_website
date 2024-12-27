import React from "react";
import cse from "../assets/images/cse.png";
import me from "../assets/images/me.png";
import ce from "../assets/images/ce.png";
import ee from "../assets/images/ee.png";
import ece from "../assets/images/ece.png";

const Lab = () => {
  return (
    <div className="mt-40 mb-40 p-10 bg-white h-full py-6 sm:py-8 lg:py-12">
  <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
    <div className="mb-12 flex items-center justify-between">
      <div>
        <h2
          className="text-2xl font-bold text-black lg:text-3xl dark:text-white mb-4 pb-3 text-left"
          style={{ borderBottom: "1px solid blue" }}
        >
          Labs
        </h2>
        <p className="text-justify text-black dark:text-gray-300 md:block">
          CIT offers state-of-the-art laboratory facilities across various
          engineering disciplines, designed to provide hands-on experience and
          bridge the gap between theoretical concepts and real-world
          applications.
        </p>
      </div>
    </div>

    <div className="grid gap-12">
    {/* Row 2 */}
    <div className="grid grid-cols-12 items-center gap-6 mt-5">
        
        
        <div className="col-span-4">
          <img
            src={cse}
            alt="Civil Engineering Lab"
            className="w-[450px] h-[250px] mx-auto rounded-lg"
          />
        </div>
        <div className="col-span-8">
        <h2 className="text-blue-700 text-3xl mb-3">Computer Science Lab</h2>
          <p className="text-justify text-black dark:text-gray-300">
          The Computer Engineering department has well 
          organized computer labs and classrooms. Multimedia projector
           has been set up in each classroom for high quality teaching 
           with latest technology. All laboratory computers are configured 
           with latest hardware and software’s and are connected via LAN.
           Computer Science Department at CIT is enjoying significant growth 
           since last year, and the blend of experienced faculties along with 
           young and dynamic faculties. Computer Science involves many aspects 
           of computer design, the creation of individual components for computer 
           equipment, networking design, and Software development with the hardware 
           that will drive the applications.
          </p>
        </div>
      </div>
      {/* Row 2 */}
      <div className="grid grid-cols-12 items-center gap-6 mt-5">
        
        <div className="col-span-8">
        <h2 className="text-blue-700 text-3xl mb-3">Civil Lab</h2>
          <p className="text-justify text-black dark:text-gray-300">
            Civil Engineering labs feature modern equipment for geotechnical,
            structural, and environmental studies, including material testing
            and surveying.Civil engineering is one of the major disciplines 
            in the present scenario. It offers numerous career opportunities 
            and areas to discover with special chances with the government departments.
             Prestigious projects such as express highways, Railway projects and large 
             dams including bridges and Transportation/Traffic in India and abroad are
              the key opportunities for anyone planning a career in this field. Civil 
              engineering offers several majors in designing, supervision and construction
               activities in various projects.
          </p>
        </div>
        <div className="col-span-4">
          <img
            src={ce}
            alt="Civil Engineering Lab"
            className="w-[450px] h-[250px] mx-auto rounded-lg"
          />
        </div>
      </div>
      {/* Row 1 */}
      <div className="grid grid-cols-12 items-center gap-6 mt-5">
        
       
        <div className="col-span-4">
          <img
            src={me}
            alt="Mechanical Engineering Lab"
            className="w-[450px] h-[250px] mx-auto rounded-lg"
          />
        </div>
        <div className="col-span-8">
        <h2 className="text-blue-700 text-3xl mb-3">Mechanical Lab</h2>
          <p className="text-justify text-black dark:text-gray-300">
            Our Mechanical Engineering labs are equipped with advanced
            machinery for projects in thermodynamics, fluid mechanics, robotics,
            and CAD/CAM.Mechanical Engineering focuses on the design, construction,
             installation, commissioning and operation of industries, power stations,
              engines, and machines with utmost precision and infrastructural management.
               Being one of the oldest and the broadest disciplines of engineering, 
               Mechanical engineers have always been in demand due to their ability 
               to be the forefront for technological innovation.
          </p>
        </div>
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-12 items-center gap-6 mt-5">
        
        <div className="col-span-8">
        <h2 className="text-blue-700 text-3xl mb-3">Electronics & Communication Lab</h2>
          <p className="text-justify text-black dark:text-gray-300">
          The Department of Electronics & Communication Engineering at Chartered Institute 
          of Technology has always been on a high growth path and has experienced and dedicated
           faculty with strong commitment to engineering education who work with zeal and 
           enthusiasm to provide a vibrant and optimum learning environment to the students
            in order to help them excel in today’s competitive environment. To keep pace with
             the current technological trends, the department has a well-designed, constantly
              reviewed teaching plan according to syllabus of Bikaner Technical University,
               to incorporate all advancements in existing and emerging technologies which 
               gives the students a holistic and pragmatic view of the present scenario of 
               the Electronics and Communication industry.
          </p>
        </div>
        <div className="col-span-4">
          <img
            src={ece}
            alt="Civil Engineering Lab"
            className="w-[450px] h-[250px] mx-auto rounded-lg"
          />
        </div>
      </div>

      {/* Row 3 */}
      <div className="grid grid-cols-12 items-center gap-6 mt-5">
        <div className="col-span-4">
          <img
            src={ee}
            alt="Electrical Engineering Lab"
            className="w-[450px] h-[250px] mx-auto rounded-lg"
          />
        </div>
        <div className="col-span-8">
        <h2 className="text-blue-700 text-3xl mb-3">Electrical Lab</h2>
          <p className="text-justify text-black dark:text-gray-300">
            Electrical Engineering labs support experiments in circuits, control
            systems, power electronics, and electrical machines.Electrical Department
             which has fine blend of young and dynamic personalities is involved 
             in providing quality education. It has broad base UG curriculum. 
             The Syllabus of the courses are continuously updated and the laboratories
              modernized to reflect the rapid changes in technology. The Department has
               strong industry interaction and has been involved in the development of 
               state-of-art products for industry. It has testing facilities for carrying
                out industry sponsored research and consultancy projects.”
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
  );
};

// GalleryItem component
const GalleryItem = ({ imageUrl, label, colSpan }) => {
  return (
    <a
      href="#"
      className={`group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg ${colSpan} md:h-80`}
    >
      <img
        src={imageUrl}
        loading="lazy"
        alt={`Photo by ${label}`}
        className="absolute inset-0 h-10 w-10 object-coverr transition duration-200 group-hover:scale-110"
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

      <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
        {label}
      </span>
    </a>
  );
};

export default Lab;
