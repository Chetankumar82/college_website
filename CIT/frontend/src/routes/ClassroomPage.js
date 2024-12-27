import React from "react";
import img from "./../assets/Event/cp7.jpg";
import img1 from "./../assets/Event/cp-8.jpg";
import img2 from "./../assets/Event/Seminar1.jpg";
import img3 from "./../assets/Event/seminar4.jpg";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";

const ClassroomPage = () => {
  return (
    <>
    <Breadcrumb Home="Home" PageName="Classroom" />
    <div className="mt-40 mb-40 p-10 bg-white  h-full py-6 sm:py-8 lg:py-12" >
  <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
  <h2 className="text-2xl font-bold text-black lg:text-3xl dark:text-white mb-5 pb-3 text-left" style={{ borderBottom: "1px solid blue"}}>
          Classrooms
        </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      
      <div className="mt-2">
        <GalleryItem imageUrl={img3} label="Classrooms" colSpan="1" />
        
      </div>
      
      <div>
      <p className="text-black dark:text-gray-300 leading-7">
          At our college, we offer a diverse range of classes designed to cater to a variety of academic interests and career paths. From foundational courses in mathematics, sciences, and humanities to specialized classes in fields like engineering, business, and the arts, students have the opportunity to explore and excel in their chosen disciplines. Our classes are designed to be engaging and interactive, fostering critical thinking, practical skills, and creativity. Whether you're pursuing a degree or enhancing your professional skills, our dedicated faculty and state-of-the-art facilities ensure a supportive environment for learning and growth.
        </p>
        <p className="text-black dark:text-gray-300 leading-7">
          The campus has more than required number of teaching-learning facilities in each college, such as class-rooms, seminar halls & laboratories. The colleges have well-equipped tutorials & classrooms with furniture, projectors, and online lesson delivery facilities. These facilities are extensively used by the teaching staff to conduct live demonstrations, PPT & slides for lecture delivery, hands-on training, and "learn by seeing" to inculcate thoughts and ideas for better understanding of the subject. For better communication, the training, innovation, and creative techniques are adopted by the teachers.
        </p>
      </div>
    </div>
  </div>
</div>
</>
  );
};

// GalleryItem component
const GalleryItem = ({ imageUrl, label, colSpan }) => {
  return (
    <a
      href="#"
      className={`group relative flex h-30 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg ${colSpan} md:h-80`}
    >
      <img
        src={imageUrl}
        loading="lazy"
        alt={`Photo by ${label}`}
        className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

      <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
        {label}
      </span>
    </a>
  );
};

export default ClassroomPage;
