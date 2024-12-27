import React from "react";
import lib from "../assets/images/lib.png";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
const Library = () => {
  return (
    <>
    <Breadcrumb Home="Home" PageName="Library" />
    <div className="mt-40 mb-40 p-10 bg-white  h-screen h-full py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
      <h2 className="text-2xl font-bold text-black lg:text-3xl dark:text-white text-left py-3 mb-5 " style={{ borderBottom: "1px solid blue"}}>
              Library
            </h2>
        <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
          <div className="row">
           <div className="col-lg-6 mt-2">
           <GalleryItem
            imageUrl={lib}
            label=""
          />
           </div>
           <div className="col-lg-6">
           <p className=" text-black dark:text-gray-300 md:block leading-7">
              library is an essential resource for the College of Engineering
              and Technology (CIT), offering comprehensive support for students
              and faculty in data analysis, algorithm development, and
              computational tasks. This library provides a robust suite of
              functions and data structures tailored for efficient manipulation
              and management of arrays in various programming contexts. Whether
              for numerical simulations, image processing, or scientific
              computing, libarray empowers users with optimized tools to enhance
              learning and research endeavors across disciplines within CIT.
            </p>
            <p className="text-black dark:text-gray-300 md:block leading-7">The Institution's semi-digitized library provides open access and user friendly atmosphere with sufficient reading space. It has approximately 6360 titles, including National and International Journals with a separate section for leaning using down loaded CDs with Audio – Video facilities. The well stocked Library of the institution contains books, journals, encyclopaedia and electronic resource materials. The institution library has rich resources of lectures & CDs downloaded from various open sources site such as edx, UGC Pathshala.</p>
           </div>
          
            
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

export default Library;
