import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Nav_Bar/Navbar";
import Trip from "../components/Trip";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { FaWpforms } from "react-icons/fa6";
import { LuGraduationCap } from "react-icons/lu";
import { FaHandsHelping } from "react-icons/fa";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";

function Scholership() {
  return (
    <>
      <Breadcrumb Home="Home" PageName="Scholarship"/>
      <section className="mt-40 mb-40 py-12 bg-white">
        <div className="max-w-8xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            
            <p className="font-heading mt-2 mb-4 py-3 text-3xl text-left leading-8 font-semibold tracking-tight text-gray-900 sm:text-4xl" style={{borderBottom: "1px solid blue"}}>
              Invest in Your Future with Scholarships
            </p>
            <p className="mt-4 max-w-full text-left text-gray-500 ">
              At our institution, we are committed to supporting our students'
              academic pursuits through various scholarship programs. Whether
              you're looking for financial assistance, streamlined application
              processes, merit-based selection criteria, or comprehensive
              student support services, our scholarships are designed to empower
              you on your educational journey.
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {/* Scholarship Benefits section */}
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center  bg-primary-500 ">
                  <RiMoneyRupeeCircleFill className="h-12 w-12 text-3xl text-blue-900" />
                  </div>
                  <p className="font-heading ml-16 text-lg leading-6 font-bold text-blue-900">
                    Financial Support
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Our scholarship program offers robust financial support to
                  alleviate the burden of educational expenses, ensuring you can
                  focus on your studies and achieve academic success.
                </dd>
              </div>

              {/* Application Process section */}
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center ">
                  <FaWpforms className="h-12 w-12 text-3xl text-blue-900" />
                    </div>
                  <p className="font-heading ml-16 text-lg leading-6 font-bold text-blue-900">
                    Easy Application
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  We have simplified our scholarship application process to make
                  it accessible and straightforward, ensuring that every
                  eligible student can apply easily and efficiently.
                </dd>
              </div>

              {/* Eligibility Criteria section */}
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center">
                  <LuGraduationCap  className="h-12 w-12 text-3xl text-blue-900"/>
                  </div>
                  <p className="font-heading ml-16 text-lg leading-6 font-bold text-blue-900">
                    Merit-based Selection
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Our scholarships are awarded based on merit, recognizing and
                  rewarding academic excellence and achievements within our
                  student community.
                </dd>
              </div>

              {/* Support Resources section */}
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center">
                  <FaHandsHelping className="h-12 w-12 text-3xl text-blue-900"/>
                  </div>
                  <p className="font-heading ml-16 text-lg leading-6 font-bold text-blue-900">
                    Student Support
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Beyond financial aid, our scholarships come with comprehensive
                  student support services, including academic counseling,
                  mentoring programs, and career guidance to ensure your
                  holistic development and success.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>{" "}
    </>
  );
}

export default Scholership;
