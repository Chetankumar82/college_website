import React from "react";

const ElectricalEngineering = () => {
  const subjects = [
    { name: "Circuit Analysis", teacher: "Dr. Robinson" },
    { name: "Electromagnetics", teacher: "Prof. Garcia" },
    { name: "Control Systems", teacher: "Dr. Rodriguez" },
    { name: "Power Systems", teacher: "Prof. Hernandez" },
    { name: "Digital Signal Processing", teacher: "Dr. Hall" },
  ];

  const features = [
    {
      id: 1,
      name: "High-Tech Laboratories",
      description:
        "Labs with advanced equipment for electrical engineering experiments.",
    },
    {
      id: 2,
      name: "Industry Partnerships",
      description:
        "Partnerships with leading companies for internships and projects.",
    },
    {
      id: 3,
      name: "Experienced Faculty",
      description: "Faculty with extensive industry and academic experience.",
    },
    {
      id: 4,
      name: "Innovative Curriculum",
      description:
        "Curriculum designed to meet current industry standards and future trends.",
    },
    {
      id: 5,
      name: "Student Organizations",
      description:
        "Active student organizations for electronics, robotics, and more.",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-1/4 bg-gray-100 p-4">
        <h2 className="text-2xl font-bold mb-4">Main EE Subjects</h2>
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
        <table className="min-w-full  border">
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

export default ElectricalEngineering;
