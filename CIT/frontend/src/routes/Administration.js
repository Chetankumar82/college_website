import axios from 'axios';
const BASE_URL = process.env.REACT_APP_BASE_URL;
import { useState, useEffect } from 'react';
const Administration = () => {
  const [facultyData, setFacultyData] = useState([]);

  const data = [
    {
      title: "Principal",
      name: "Mr. Rajnish ",
      qualifications: [
        "Ph.D., IIT, Roorkee",
        "M.E., GNDEC, Ludhiana",
        "B.E., GNDEC, Ludhiana",
      ],
      phone: ["0161-5064501", "0161-2502240(FAX)"],
      email: "principal@gndec.ac.in",
    },
    {
      title: "HoD - Civil Engineering",
      name: "Dr. Jagbir Singh",
      phone: [],
      email: "ce@gndec.ac.in",
    },
    {
      title: "HoD - Computer Science and Engineering",
      name: "Dr. Kiran Jyoti",
      phone: ["0161-5064501"],
      email: "cse@gndec.ac.in",
    },
    {
      title: "HoD - Electrical Engineering",
      name: "Dr. KD Singh",
      phone: ["0161-5064501"],
      email: "ee@gndec.ac.in",
    },
    {
      title: "HoD - Electronics and Communication Engineering",
      name: "Dr. Narwant Singh",
      phone: ["0161-5064501"],
      email: "ece@gndec.ac.in",
    },
    {
      title: "HoD - Information Technology",
      name: "Dr. KS Maan",
      phone: ["0161-5064501"],
      email: "it@gndec.ac.in",
    },
    {
      title: "HoD - Mechanical Engineering",
      name: "Dr. JS Grewal",
      phone: ["0161-5064501"],
      email: "me@gndec.ac.in",
    },
    {
      title: "HoD - Computer Applications",
      name: "Pf. Jasbir Singh Saini",
      phone: ["0161-5064501"],
      email: "mca@gndec.ac.in",
    },
    {
      title: "HoD - Business Administration",
      name: "Pf. Parampal Singh",
      phone: ["0161-5064501"],
      email: "mba@gndec.ac.in",
    },
    {
      title: "AR Admin",
      name: "Mr. Ramandeep Singh",
      phone: ["0161-5064501"],
      email: "ramandeep.pta@gmail.com",
    },
    {
      title: "AR Accounts",
      name: "Er. Ardamanbir Singh, Assistant Prof. (ME)",
      phone: ["9814123832(M)"],
      email: "aol.ardaman@gmail.com",
    },
    {
      title: "Dean Academics",
      name: "Dr. Akshay Girdhar, Professor (IT)",
      phone: [],
      email: "",
    },
    {
      title: "DR Academics",
      name: "Er. Harmeet Singh, Assistant Prof (EE)",
      phone: [],
      email: "",
    },
    {
      title: "AR Academics",
      name: "Dr. Pankaj Bhambri, Assistant Prof. (IT)",
      phone: [],
      email: "",
    },
    {
      title: "AR Academics",
      name: "Er. Charnjeet Singh, Assistant Prof. (CE)",
      phone: [],
      email: "",
    },
    {
      title: "AR Academics",
      name: "Er. Daljeet Singh, Assistant Prof. (ECE)",
      phone: ["0161-5064704(O)"],
      email: "deanacademic@gndec.ac.in",
    },
    {
      title: "HR Manager",
      name: "Dr. Gurdeep Kaur",
      phone: ["8528002375(M)"],
      email: "hrm@gndec.ac.in",
    },
    {
      title: "Training & Placement Officer",
      name: "Pf. Gagandeep Singh Sodhi, Assistant Prof. (EE)",
      phone: ["0161-2501106(O)"],
      email: "tpo@gndec.ac.in",
    },
    {
      title: "Dean (Consultancy)",
      name: "Dr. Harvinder Singh, Professor (CE)",
      phone: ["0161-2491193(O)"],
      email: "deanconsultancy@gndec.ac.in",
    },
    {
      title: "Dean (Industrial Relationship)",
      name: "Dr. Jatinder Kapoor, Professor (ME & PE)",
      phone: ["98I4857865(O)"],
      email: "jatinder_kapoor@gndec.ac.in",
    },
    {
      title: "Dean (Alumni)",
      name: "Dr. Ameeta Seehra, Associate Professor (ECE)",
      phone: ["9872169597(O)"],
      email: "aseehra@gndec.ac.in",
    },
    {
      title: "Dean (Student's Welfare)",
      name: "Dr. Parminder Singh, Professor (CSE)",
      phone: ["0161-5064551(O)"],
      email: "parminder2u@gmail.com",
    },
    {
      title: "Dean (Skill Enhancement Cell)",
      name: "Dr. Akshay Girdhar, Professor (IT)",
      phone: [],
      email: "skill_cell@gndec.ac.in",
    },
    {
      title: "Chief Warden",
      name: "Dr. Puneet Pal Singh Cheema, Asstt. Prof (CE)",
      phone: ["0161-5064532(O)"],
      email: "cwb@gndec.ac.in",
    },
  ];


  
  const fetchFacultyData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/faculties`);
      const allFacultyData = response.data;
  
      // Step 2: Filter the administration category
      const administrationFaculty = allFacultyData.filter(
        (faculty) => faculty.department === 'Administration'
      );

      // Step 3: Separate principal and dean positions
      const principalAndDean = allFacultyData.filter(
        (faculty) =>
          faculty.designation.toLowerCase() === 'principle' ||
          faculty.designation.toLowerCase() === 'dean'
      );

      // Step 5: Filter out principal and dean from administration category
      const otherAdministrationFaculty = allFacultyData.filter(
        (faculty) =>
          faculty.designation.toLowerCase() === 'hod' 
      );

      // Step 6: Faculty from other categories
      const notPrincipleFaculty = administrationFaculty.filter(
        (faculty) => faculty.designation.toLowerCase() !== 'principle' 
      );
      const notDeanFaculty = notPrincipleFaculty.filter(
        (faculty) => faculty.designation.toLowerCase() !== 'dean' 
      );

      // Combine the arrays
      const finalFacultyArray = [
        ...principalAndDean,
        ...otherAdministrationFaculty,
        ...notDeanFaculty,
      ];
  
      // Set the final data to the state
      setFacultyData(finalFacultyArray);
      console.log(facultyData)
    } catch (error) {
      console.error('Error fetching faculty data:', error);
    }
  };
  
  // Using useEffect to fetch data on component mount
  useEffect(() => {
    fetchFacultyData();
  }, []);
  
  // Example usage of the fetched data
  
 
  

  return (
    <div className="mt-40 container1 mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Administration</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
          <thead className="bg-gray-900 text-white">
            <tr>
              <th className="py-2 px-4 border-b  text-left text-xl">Designation</th>
              <th className="py-2 px-4 border-b text-left text-xl">Name</th>
              <th className="py-2 px-4 border-b text-left text-xl">
                Department
              </th>
              <th className="py-2 px-4 border-b text-left text-xl">Experience</th>
              <th className="py-2 px-4 border-b text-left text-xl">Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {facultyData.map((person, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="py-3 px-4 border-b font-semibold">
                  {person.designation}
                </td>
                <td className="py-3 px-4 border-b">{person.name}</td>
                <td className="py-3 px-4 border-b">
                  {person.department}
                </td>
                <td className="py-3 px-4 border-b">
                  {person.experience}
                </td>
                <td className="py-3 px-4 border-b">{person.mobile}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Administration;
