// Mission.js

import React from "react";

const objectives = [
  "Upliftment of Rural Students through technical education.",
  "Respond to local societal needs by developing selected 'targeted research projects'.",
  "Quality training programs in need based modern technology.",
  "To maintain state-of-the-art infrastructure in laboratories.",
  "To promote culture of self-employment.",
  "To impart non-formal education to unemployed youth.",
  "To inculcate moral, ethical, spiritual values in education at all levels.",
];

const Goal = () => {
  return (
    <>
      <div className="mt-40 bg-white shadow-md rounded-md p-6">
        <h2 className="text-3xl font-bold mb-4">Short Term Goals</h2>
        <ul className="list-disc list-inside">
          {objectives.map((objective, index) => (
            <li key={index} className="mb-2">
              {objective}
            </li>
          ))}
        </ul>
      </div>{" "}
      <div className=" bg-white shadow-md rounded-md p-6">
        <h2 className="text-3xl font-bold mb-4">Long Term Goals</h2>
        <ul className="list-disc list-inside">
          {objectives.map((objective, index) => (
            <li key={index} className="mb-2">
              {objective}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Goal;
