import React from "react";
import img1 from "./../assets/Event/Lakshy1.jpg";
import img2 from "./../assets/Event/Lakshay4.jpg";
import img3 from "./../assets/Event/Lakshy8.jpg";
import img4 from "./../assets/Event/Lakshy5.jpg";
const Sport = () => {
  return (
    <div className="mt-40 mb-40 p-10 bg-white h-screen py-6 sm:py-8 lg:py-12">
  <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
    <div className="mb-8">
      <h2
        className="text-2xl font-bold text-black lg:text-3xl dark:text-white py-3 mb-4"
        style={{ borderBottom: "1px solid blue" }}
      >
        Sports
      </h2>
      <p className="text-justify text-black dark:text-gray-300 md:block">
        At CIT, we believe in the importance of physical fitness and holistic
        development. Our extensive sports facilities cater to a wide range of
        interests, offering both indoor and outdoor sports options. Students can
        engage in sports such as cricket, football, basketball, volleyball,
        badminton, table tennis, and athletics. The campus boasts well-maintained
        fields, courts, and a fully equipped gymnasium. Regular sports events and
        tournaments are organized to encourage participation, teamwork, and
        healthy competition among students, fostering a spirit of sportsmanship
        and physical well-being.
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
        className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

      <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
        {label}
      </span>
    </a>
  );
};

export default Sport;
