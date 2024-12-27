import React, { useState, useEffect } from "react";
import "./student.css"

const Student = () => {
  const [studentsCount, setStudentsCount] = useState(0);
  const [alumniCount, setAlumniCount] = useState(0);
  const [placementsCount, setPlacementsCount] = useState(0);
  const [yearsCount, setYearsCount] = useState(0);

  const animateCount = (setCount, maxCount) => {
    let start = 0;
    const duration = 2000;
    const stepTime = Math.abs(Math.floor(duration / maxCount));

    const step = () => {
      start += 1;
      setCount(start);
      if (start < maxCount) {
        setTimeout(step, stepTime);
      }
    };

    step();
  };

  useEffect(() => {
    animateCount(setStudentsCount, 1000);
    animateCount(setAlumniCount, 2000);
    animateCount(setPlacementsCount, 1250);
    animateCount(setYearsCount, 13);
  }, []);

  return (
    <div className="blue-bg cta-newsletter-wrapper" >
      <div className="grid  md:grid-cols-4 lg:grid-cols-4 gap-4">
        <div className="text-center m-4">
          <i className="fa-sharp fa-solid fa-user text-5xl text-yellow-400 student-icon " ></i>
          <h4 className="text-3xl  mt-3 text-white shadow-text-lg">
            {studentsCount}+
          </h4>
          <p className="text-lg text-white ">Students</p>
        </div>
        <div className="text-center m-4">
          <i className="fa-solid fa-graduation-cap text-5xl text-yellow-400 student-icon"></i>
          <h4 className="text-3xl  mt-3 text-white shadow-text-lg">
            {alumniCount}+
          </h4>
          <p className="text-lg text-white ">Proud Alumni</p>
        </div>
        <div className="text-center m-4">
          <i className="fa-solid fa-building-columns text-5xl text-yellow-400 student-icon"></i>
          <h4 className="text-3xl  mt-3 text-white shadow-text-lg">
            {placementsCount}+
          </h4>
          <p className="text-lg text-white ">
            Campus Placements
          </p>
        </div>
        <div className="text-center m-4">
          <i className="fa-sharp fa-solid fa-building text-5xl text-yellow-400 student-icon"></i>
          <h4 className="text-3xl  mt-3 text-white shadow-text-lg">
            {yearsCount}+ Years
          </h4>
          <p className="text-lg text-white ">
            Excellence in Education
          </p>
        </div>
      </div>
    </div>
  );
};

export default Student;
