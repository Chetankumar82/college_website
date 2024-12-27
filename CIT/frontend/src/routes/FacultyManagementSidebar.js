import React from 'react';

const FacultyManagementSidebar
= ({ departments, onDepartmentSelect, onCreate,fetchFacultyData }) => {
  return (
    <div className="w-full lg:w-1/4 p-4 bg-gray-100 h-screen">
      <button
        onClick={onCreate}
        className=" text-white p-2 rounded mb-4 w-full " style={{backgroundColor: "#031f42"}}
      >
       Add New Faculty
      </button>
      <h3 className="font-bold text-2xl text-center mb-4">Departments</h3>
      <ul>
      <li
            className="cursor-pointer py-1 px-2 hover:bg-gray-200 border-gray-500 border-2 rounded-lg mb-3"
            onClick={() =>{ fetchFacultyData();
              onDepartmentSelect('')
            }} // Correctly call the function
            >All</li>
        {departments.map((dept) => (
          <li
            key={dept}
            className="cursor-pointer py-1 px-2 hover:bg-gray-200 border-gray-500 border-2 rounded-lg mb-3"
            onClick={() => onDepartmentSelect(dept)}
          >
            {dept}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FacultyManagementSidebar
;
