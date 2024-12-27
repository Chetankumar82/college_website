import React from "react";

const ComputerScience = ({dept}) => {
  const subjects = [
    { name: "Data Structures", teacher: "Sharukh Rahman " },
    { name: "Algorithms", teacher: "Sharukh Rahman" },
    { name: "Operating Systems", teacher: "Neha parashar" },
    { name: "Database Systems", teacher: "Chitra Thingar" },
    { name: "Computer Networks", teacher: "Shubhangi Chaturvedi" },
  ];

  const features = [
    {
      id: 1,
      name: "Research Labs",
      description:
        "State-of-the-art research labs for AI, ML, and Data Science.",
    },
    {
      id: 2,
      name: "Industry Collaborations",
      description:
        "Collaborations with top tech companies for internships and projects.",
    },
    {
      id: 3,
      name: "Experienced Faculty",
      description: "Faculty with extensive industry and academic experience.",
    },
    {
      id: 4,
      name: "Modern Curriculum",
      description:
        "Curriculum designed to meet current industry standards and future trends.",
    },
    {
      id: 5,
      name: "Student Clubs",
      description: "Active student clubs for coding, robotics, and more.",
    },
  ];

  return (
    <div className="mt-40 flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-1/4 bg-gray-100 p-4">
        <h2 className="text-2xl font-bold mb-4">Main CSE Subjects</h2>
        <ul>
          {subjects.map((subject, index) => (
            <li key={index} className="mb-2">
              <p className="text-xl font-semibold">{subject.name}</p>
              <p className="text-gray-600">{subject.teacher}</p>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="w-full md:w-3/4 p-4">
        <h2 className="text-2xl font-bold mb-4">Department Features</h2>
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th className="py-2 px-4 border">ID</th>
              <th className="py-2 px-4 border">Feature</th>
              <th className="py-2 px-4 border">Description</th>
            </tr>
          </thead>
          <tbody>
            {features.map((feature) => (
              <tr key={feature.id}>
                <td className="py-2 px-4 border">{feature.id}</td>
                <td className="py-2 px-4 border">{feature.name}</td>
                <td className="py-2 px-4 border">{feature.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default ComputerScience;
