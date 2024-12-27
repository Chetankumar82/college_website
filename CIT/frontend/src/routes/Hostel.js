import React from "react";
import img1 from "./../assets/Event/Art-2.jpg";
import img2 from "./../assets/Event/Culture10.jpg";
import img3 from "./../assets/Event/Culture8.jpg";
import img4 from "./../assets/Event/Culture9.jpg";
const Hostel = () => {
  return (
  
    <div className="mt-40 mb-40 p-10 bg-white h-screen py-6 sm:py-8 lg:py-12">
  <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
    <div className="mb-8">
      <h2
        className="text-2xl font-bold text-black lg:text-3xl dark:text-white py-3 mb-4"
        style={{ borderBottom: "1px solid blue" }}
      >
        Hostel
      </h2>
      <p className="text-justify text-black dark:text-gray-300 md:block">
        CIT provides comfortable and secure hostel accommodations designed to
        create a conducive environment for students' personal and academic
        growth. Our hostels are equipped with modern amenities, including
        spacious rooms, high-speed internet, study areas, and recreational
        facilities. The hostels ensure a homely atmosphere with 24/7 security,
        dedicated wardens, and a focus on cleanliness and hygiene. Regular
        events and activities are organized to promote camaraderie and a sense
        of community among students, making their stay at CIT a memorable and
        enriching experience.
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

export default Hostel;
