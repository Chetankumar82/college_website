// TabComponent.jsx
import React, { useState } from "react";

const departments = {
  Mechanical: {
    1: [
      { name: "Mathematics I", url: "/path/to/thermodynamics.pdf" },
      { name: "Physics", url: "/path/to/fluid_mechanics.pdf" },
      { name: "Chemistry I", url: "/path/to/thermodynamics.pdf" },
      {
        name: "Introduction to Electrical Engineering",
        url: "/path/to/fluid_mechanics.pdf",
      },
      { name: "Engineering Drawing", url: "/path/to/thermodynamics.pdf" },
      { name: "Engineering Mechanics", url: "/path/to/fluid_mechanics.pdf" },
    ],
    2: [
      { name: "Computer Programmings", url: "/path/to/mechanics.pdf" },
      {
        name: "Thermodynamics",
        url: "/path/to/materials_science.pdf",
      },
      { name: "Mathematics II", url: "/path/to/dynamics.pdf" },
      { name: "Environmental Studies", url: "/path/to/machine_design.pdf" },
      { name: "Manufacturing Notes", url: "/path/to/manufacturing.pdf" },
    ],
    3: [
      { name: "Mathematics III", url: "/path/to/dynamics.pdf" },
      { name: "Fluid Mechanics", url: "/path/to/machine_design.pdf" },
      { name: "Mechanics of Solids II", url: "/path/to/dynamics.pdf" },
      { name: "Fluid Mechanics", url: "/path/to/machine_design.pdf" },
      { name: "Manufacturing Processes I", url: "/path/to/dynamics.pdf" },
      {
        name: "Material Science and Engineering",
        url: "/path/to/machine_design.pdf",
      },
      { name: "Kinematics of Machinery", url: "/path/to/machine_design.pdf" },
    ],
    4: [
      { name: "Mathematics IV", url: "/path/to/heat_transfer.pdf" },
      { name: "Applied Thermodynamics", url: "/path/to/manufacturing.pdf" },
      { name: "Manufacturing Processes II", url: "/path/to/heat_transfer.pdf" },
      { name: "Dynamics of Machinery", url: "/path/to/manufacturing.pdf" },
      { name: "Heat Transfer", url: "/path/to/heat_transfer.pdf" },
      { name: "Elective I", url: "/path/to/manufacturing.pdf" },
    ],
    5: [
      { name: "Machine Design I", url: "/path/to/vibrations.pdf" },
      { name: "Theory of Machines", url: "/path/to/robotics.pdf" },
      {
        name: "Refrigeration and Air Conditioning",
        url: "/path/to/vibrations.pdf",
      },
      { name: "Fluid Machinery", url: "/path/to/robotics.pdf" },
      { name: "Elective II", url: "/path/to/vibrations.pdf" },
      { name: "Industrial Training I", url: "/path/to/robotics.pdf" },
    ],
    6: [
      { name: "Machine Design II", url: "/path/to/control_systems.pdf" },
      { name: "CAD/CAM", url: "/path/to/thermo_fluids.pdf" },
      { name: "Automobile Engineering", url: "/path/to/control_systems.pdf" },
      { name: "Mechatronics", url: "/path/to/thermo_fluids.pdf" },
      { name: "Elective III", url: "/path/to/control_systems.pdf" },
      { name: "Industrial Training II", url: "/path/to/thermo_fluids.pdf" },
    ],
    7: [
      { name: "Power Plant Engineering", url: "/path/to/renewable_energy.pdf" },
      {
        name: "Robotics",
        url: "/path/to/automotive_engineering.pdf",
      },
      { name: "Elective IV", url: "/path/to/renewable_energy.pdf" },
      {
        name: "Elective V",
        url: "/path/to/automotive_engineering.pdf",
      },
      { name: "Project I", url: "/path/to/renewable_energy.pdf" },
      {
        name: "Industrial Management",
        url: "/path/to/automotive_engineering.pdf",
      },
    ],
    8: [
      {
        name: "Renewable Energy Systems",
        url: "/path/to/project_management.pdf",
      },
      {
        name: "Seminar",
        url: "/path/to/advanced_manufacturing.pdf",
      },
      {
        name: "Elective VII",
        url: "/path/to/project_management.pdf",
      },
    ],
  },
  Electrical: {
    1: [
      { name: "Circuit Theory Notes", url: "/path/to/circuit_theory.pdf" },
      { name: "Electromagnetics Notes", url: "/path/to/electromagnetics.pdf" },
      { name: "Mathematics I", url: "/path/to/mathematics_I.pdf" },
      { name: "Physics I", url: "/path/to/physics_I.pdf" },
      { name: "Chemistry", url: "/path/to/chemistry.pdf" },
      {
        name: "Computer Programming",
        url: "/path/to/computer_programming.pdf",
      },
      {
        name: "Electrical Engineering Materials",
        url: "/path/to/electrical_engineering_materials.pdf",
      },
    ],
    2: [
      {
        name: "Signal Processing Notes",
        url: "/path/to/signal_processing.pdf",
      },
      { name: "Control Systems Notes", url: "/path/to/control_systems.pdf" },
      { name: "Mathematics II", url: "/path/to/mathematics_II.pdf" },
      { name: "Physics II", url: "/path/to/physics_II.pdf" },
      {
        name: "Environmental Studies",
        url: "/path/to/environmental_studies.pdf",
      },
      { name: "Network Analysis", url: "/path/to/network_analysis.pdf" },
      {
        name: "Electrical Machines I",
        url: "/path/to/electrical_machines_I.pdf",
      },
    ],
    3: [
      { name: "Microelectronics Notes", url: "/path/to/microelectronics.pdf" },
      { name: "Digital Systems Notes", url: "/path/to/digital_systems.pdf" },
      { name: "Mathematics III", url: "/path/to/mathematics_III.pdf" },
      { name: "Electronic Devices", url: "/path/to/electronic_devices.pdf" },
      { name: "Circuit Analysis", url: "/path/to/circuit_analysis.pdf" },
      {
        name: "Electromagnetic Theory",
        url: "/path/to/electromagnetic_theory.pdf",
      },
      { name: "Signals and Systems", url: "/path/to/signals_and_systems.pdf" },
    ],
    4: [
      { name: "Power Systems Notes", url: "/path/to/power_systems.pdf" },
      {
        name: "Communication Systems Notes",
        url: "/path/to/communication_systems.pdf",
      },
      { name: "Mathematics IV", url: "/path/to/mathematics_IV.pdf" },
      {
        name: "Microprocessors and Microcontrollers",
        url: "/path/to/microprocessors_and_microcontrollers.pdf",
      },
      {
        name: "Electrical Machines II",
        url: "/path/to/electrical_machines_II.pdf",
      },
      { name: "Instrumentation", url: "/path/to/instrumentation.pdf" },
      { name: "Control Systems", url: "/path/to/control_systems.pdf" },
    ],
    5: [
      { name: "Embedded Systems Notes", url: "/path/to/embedded_systems.pdf" },
      {
        name: "Electrical Machines Notes",
        url: "/path/to/electrical_machines.pdf",
      },
      { name: "Power Electronics", url: "/path/to/power_electronics.pdf" },
      {
        name: "Digital Signal Processing",
        url: "/path/to/digital_signal_processing.pdf",
      },
      { name: "Elective I", url: "/path/to/elective_I.pdf" },
      { name: "Elective II", url: "/path/to/elective_II.pdf" },
      { name: "Industrial Training", url: "/path/to/industrial_training.pdf" },
    ],
    6: [
      {
        name: "Renewable Energy Systems Notes",
        url: "/path/to/renewable_energy_systems.pdf",
      },
      {
        name: "Advanced Control Systems Notes",
        url: "/path/to/advanced_control_systems.pdf",
      },
      {
        name: "High Voltage Engineering",
        url: "/path/to/high_voltage_engineering.pdf",
      },
      {
        name: "Power System Protection",
        url: "/path/to/power_system_protection.pdf",
      },
      { name: "Elective III", url: "/path/to/elective_III.pdf" },
      { name: "Elective IV", url: "/path/to/elective_IV.pdf" },
      {
        name: "Industrial Training II",
        url: "/path/to/industrial_training_II.pdf",
      },
    ],
    7: [
      {
        name: "Power Electronics Notes",
        url: "/path/to/power_electronics.pdf",
      },
      { name: "Smart Grid Notes", url: "/path/to/smart_grid.pdf" },
      { name: "Electrical Drives", url: "/path/to/electrical_drives.pdf" },
      { name: "Elective V", url: "/path/to/elective_V.pdf" },
      { name: "Elective VI", url: "/path/to/elective_VI.pdf" },
      { name: "Project I", url: "/path/to/project_I.pdf" },
      {
        name: "Industrial Management",
        url: "/path/to/industrial_management.pdf",
      },
    ],
    8: [
      { name: "Project Design Notes", url: "/path/to/project_design.pdf" },
      {
        name: "Advanced Electromagnetics Notes",
        url: "/path/to/advanced_electromagnetics.pdf",
      },
      {
        name: "Power System Dynamics",
        url: "/path/to/power_system_dynamics.pdf",
      },
      { name: "Elective VII", url: "/path/to/elective_VII.pdf" },
      { name: "Elective VIII", url: "/path/to/elective_VIII.pdf" },
      { name: "Seminar", url: "/path/to/seminar.pdf" },
      {
        name: "Comprehensive Viva Voce",
        url: "/path/to/comprehensive_viva_voce.pdf",
      },
    ],
  },
  Civil: {
    1: [
      {
        name: "Structural Analysis Notes",
        url: "/path/to/structural_analysis.pdf",
      },
      {
        name: "Geotechnical Engineering Notes",
        url: "/path/to/geotechnical_engineering.pdf",
      },
      { name: "Mathematics I", url: "/path/to/mathematics_I.pdf" },
      { name: "Physics I", url: "/path/to/physics_I.pdf" },
      { name: "Chemistry", url: "/path/to/chemistry.pdf" },
      {
        name: "Engineering Mechanics",
        url: "/path/to/engineering_mechanics.pdf",
      },
      { name: "Engineering Drawing", url: "/path/to/engineering_drawing.pdf" },
    ],
    2: [
      {
        name: "Environmental Engineering Notes",
        url: "/path/to/environmental_engineering.pdf",
      },
      {
        name: "Construction Management Notes",
        url: "/path/to/construction_management.pdf",
      },
      { name: "Mathematics II", url: "/path/to/mathematics_II.pdf" },
      { name: "Physics II", url: "/path/to/physics_II.pdf" },
      {
        name: "Computer Programming",
        url: "/path/to/computer_programming.pdf",
      },
      {
        name: "Mechanics of Solids I",
        url: "/path/to/mechanics_of_solids_I.pdf",
      },
      { name: "Engineering Geology", url: "/path/to/engineering_geology.pdf" },
    ],
    3: [
      { name: "Hydraulics Notes", url: "/path/to/hydraulics.pdf" },
      {
        name: "Transportation Engineering Notes",
        url: "/path/to/transportation_engineering.pdf",
      },
      { name: "Mathematics III", url: "/path/to/mathematics_III.pdf" },
      { name: "Fluid Mechanics I", url: "/path/to/fluid_mechanics_I.pdf" },
      {
        name: "Mechanics of Solids II",
        url: "/path/to/mechanics_of_solids_II.pdf",
      },
      { name: "Surveying I", url: "/path/to/surveying_I.pdf" },
      {
        name: "Building Materials and Construction",
        url: "/path/to/building_materials_and_construction.pdf",
      },
    ],
    4: [
      {
        name: "Structural Design Notes",
        url: "/path/to/structural_design.pdf",
      },
      { name: "Surveying Notes", url: "/path/to/surveying.pdf" },
      { name: "Mathematics IV", url: "/path/to/mathematics_IV.pdf" },
      { name: "Fluid Mechanics II", url: "/path/to/fluid_mechanics_II.pdf" },
      {
        name: "Geotechnical Engineering I",
        url: "/path/to/geotechnical_engineering_I.pdf",
      },
      { name: "Surveying II", url: "/path/to/surveying_II.pdf" },
      { name: "Concrete Technology", url: "/path/to/concrete_technology.pdf" },
    ],
    5: [
      {
        name: "Water Resources Engineering Notes",
        url: "/path/to/water_resources_engineering.pdf",
      },
      {
        name: "Advanced Construction Techniques Notes",
        url: "/path/to/advanced_construction_techniques.pdf",
      },
      {
        name: "Structural Analysis II",
        url: "/path/to/structural_analysis_II.pdf",
      },
      {
        name: "Geotechnical Engineering II",
        url: "/path/to/geotechnical_engineering_II.pdf",
      },
      {
        name: "Design of Concrete Structures",
        url: "/path/to/design_of_concrete_structures.pdf",
      },
      { name: "Elective I", url: "/path/to/elective_I.pdf" },
      { name: "Industrial Training", url: "/path/to/industrial_training.pdf" },
    ],
    6: [
      { name: "Urban Planning Notes", url: "/path/to/urban_planning.pdf" },
      {
        name: "Coastal Engineering Notes",
        url: "/path/to/coastal_engineering.pdf",
      },
      {
        name: "Design of Steel Structures",
        url: "/path/to/design_of_steel_structures.pdf",
      },
      {
        name: "Foundation Engineering",
        url: "/path/to/foundation_engineering.pdf",
      },
      { name: "Elective II", url: "/path/to/elective_II.pdf" },
      { name: "Elective III", url: "/path/to/elective_III.pdf" },
      {
        name: "Industrial Training II",
        url: "/path/to/industrial_training_II.pdf",
      },
    ],
    7: [
      {
        name: "Bridge Engineering Notes",
        url: "/path/to/bridge_engineering.pdf",
      },
      {
        name: "Advanced Surveying Notes",
        url: "/path/to/advanced_surveying.pdf",
      },
      {
        name: "Water and Wastewater Engineering",
        url: "/path/to/water_and_wastewater_engineering.pdf",
      },
      {
        name: "Hydrology and Water Resources",
        url: "/path/to/hydrology_and_water_resources.pdf",
      },
      { name: "Elective IV", url: "/path/to/elective_IV.pdf" },
      { name: "Elective V", url: "/path/to/elective_V.pdf" },
      { name: "Project I", url: "/path/to/project_I.pdf" },
    ],
    8: [
      { name: "Project Planning Notes", url: "/path/to/project_planning.pdf" },
      {
        name: "Infrastructure Management Notes",
        url: "/path/to/infrastructure_management.pdf",
      },
      {
        name: "Construction Project Management",
        url: "/path/to/construction_project_management.pdf",
      },
      { name: "Elective VI", url: "/path/to/elective_VI.pdf" },
      { name: "Elective VII", url: "/path/to/elective_VII.pdf" },
      { name: "Seminar", url: "/path/to/seminar.pdf" },
      {
        name: "Comprehensive Viva Voce",
        url: "/path/to/comprehensive_viva_voce.pdf",
      },
    ],
  },
  CSE: {
    1: [
      {
        name: "Introduction to Programming",
        url: "/path/to/intro_programming.pdf",
      },
      {
        name: "Discrete Mathematics",
        url: "/path/to/discrete_mathematics.pdf",
      },
      { name: "Mathematics I", url: "/path/to/mathematics_I.pdf" },
      { name: "Physics I", url: "/path/to/physics_I.pdf" },
      { name: "Chemistry", url: "/path/to/chemistry.pdf" },
      {
        name: "Engineering Graphics",
        url: "/path/to/engineering_graphics.pdf",
      },
      {
        name: "Basic Electrical Engineering",
        url: "/path/to/basic_electrical_engineering.pdf",
      },
    ],
    2: [
      { name: "Data Structures", url: "/path/to/data_structures.pdf" },
      {
        name: "Computer Organization",
        url: "/path/to/computer_organization.pdf",
      },
      { name: "Mathematics II", url: "/path/to/mathematics_II.pdf" },
      { name: "Physics II", url: "/path/to/physics_II.pdf" },
      { name: "Digital Logic", url: "/path/to/digital_logic.pdf" },
      {
        name: "Software Engineering",
        url: "/path/to/software_engineering.pdf",
      },
      {
        name: "Environmental Studies",
        url: "/path/to/environmental_studies.pdf",
      },
    ],
    3: [
      { name: "Algorithms", url: "/path/to/algorithms.pdf" },
      { name: "Database Systems", url: "/path/to/database_systems.pdf" },
      { name: "Mathematics III", url: "/path/to/mathematics_III.pdf" },
      { name: "Operating Systems", url: "/path/to/operating_systems.pdf" },
      { name: "Computer Networks", url: "/path/to/computer_networks.pdf" },
      {
        name: "Theory of Computation",
        url: "/path/to/theory_of_computation.pdf",
      },
      { name: "Web Technologies", url: "/path/to/web_technologies.pdf" },
    ],
    4: [
      {
        name: "Software Project Management",
        url: "/path/to/software_project_management.pdf",
      },
      {
        name: "Artificial Intelligence",
        url: "/path/to/artificial_intelligence.pdf",
      },
      { name: "Mathematics IV", url: "/path/to/mathematics_IV.pdf" },
      { name: "Compiler Design", url: "/path/to/compiler_design.pdf" },
      { name: "Distributed Systems", url: "/path/to/distributed_systems.pdf" },
      { name: "Machine Learning", url: "/path/to/machine_learning.pdf" },
      { name: "Mobile Computing", url: "/path/to/mobile_computing.pdf" },
    ],
    5: [
      { name: "Cloud Computing", url: "/path/to/cloud_computing.pdf" },
      { name: "Data Mining", url: "/path/to/data_mining.pdf" },
      { name: "Software Testing", url: "/path/to/software_testing.pdf" },
      { name: "Elective I", url: "/path/to/elective_I.pdf" },
      { name: "Elective II", url: "/path/to/elective_II.pdf" },
      {
        name: "Human Computer Interaction",
        url: "/path/to/human_computer_interaction.pdf",
      },
      { name: "Industrial Training", url: "/path/to/industrial_training.pdf" },
    ],
    6: [
      { name: "Big Data Analytics", url: "/path/to/big_data_analytics.pdf" },
      { name: "Internet of Things", url: "/path/to/internet_of_things.pdf" },
      { name: "Cyber Security", url: "/path/to/cyber_security.pdf" },
      { name: "Elective III", url: "/path/to/elective_III.pdf" },
      { name: "Elective IV", url: "/path/to/elective_IV.pdf" },
      {
        name: "Industrial Training II",
        url: "/path/to/industrial_training_II.pdf",
      },
      { name: "Robotics", url: "/path/to/robotics.pdf" },
    ],
    7: [
      {
        name: "Blockchain Technology",
        url: "/path/to/blockchain_technology.pdf",
      },
      { name: "Augmented Reality", url: "/path/to/augmented_reality.pdf" },
      { name: "Virtual Reality", url: "/path/to/virtual_reality.pdf" },
      { name: "Elective V", url: "/path/to/elective_V.pdf" },
      { name: "Elective VI", url: "/path/to/elective_VI.pdf" },
      { name: "Project I", url: "/path/to/project_I.pdf" },
      { name: "Entrepreneurship", url: "/path/to/entrepreneurship.pdf" },
    ],
    8: [
      { name: "Advanced Algorithms", url: "/path/to/advanced_algorithms.pdf" },
      { name: "Project Management", url: "/path/to/project_management.pdf" },
      {
        name: "Advanced Machine Learning",
        url: "/path/to/advanced_machine_learning.pdf",
      },
      { name: "Elective VII", url: "/path/to/elective_VII.pdf" },
      { name: "Elective VIII", url: "/path/to/elective_VIII.pdf" },
      { name: "Seminar", url: "/path/to/seminar.pdf" },
      {
        name: "Comprehensive Viva Voce",
        url: "/path/to/comprehensive_viva_voce.pdf",
      },
    ],
  },
  Electronics: {
    1: [
      {
        name: "Introduction to Electronics",
        url: "/path/to/intro_electronics.pdf",
      },
      { name: "Mathematics I", url: "/path/to/mathematics_I.pdf" },
      { name: "Physics I", url: "/path/to/physics_I.pdf" },
      { name: "Chemistry", url: "/path/to/chemistry.pdf" },
      {
        name: "Engineering Graphics",
        url: "/path/to/engineering_graphics.pdf",
      },
      {
        name: "Basic Electrical Engineering",
        url: "/path/to/basic_electrical_engineering.pdf",
      },
    ],
    2: [
      { name: "Analog Electronics", url: "/path/to/analog_electronics.pdf" },
      {
        name: "Digital Logic Design",
        url: "/path/to/digital_logic_design.pdf",
      },
      { name: "Mathematics II", url: "/path/to/mathematics_II.pdf" },
      { name: "Physics II", url: "/path/to/physics_II.pdf" },
      {
        name: "Electromagnetic Theory",
        url: "/path/to/electromagnetic_theory.pdf",
      },
      {
        name: "Environmental Studies",
        url: "/path/to/environmental_studies.pdf",
      },
    ],
    3: [
      {
        name: "Microprocessors and Microcontrollers",
        url: "/path/to/microprocessors.pdf",
      },
      {
        name: "Communication Systems",
        url: "/path/to/communication_systems.pdf",
      },
      { name: "Mathematics III", url: "/path/to/mathematics_III.pdf" },
      { name: "Signals and Systems", url: "/path/to/signals_systems.pdf" },
      {
        name: "Electronic Devices and Circuits",
        url: "/path/to/electronic_devices.pdf",
      },
      { name: "Network Theory", url: "/path/to/network_theory.pdf" },
    ],
    4: [
      {
        name: "Digital Signal Processing",
        url: "/path/to/digital_signal_processing.pdf",
      },
      { name: "Control Systems", url: "/path/to/control_systems.pdf" },
      { name: "Mathematics IV", url: "/path/to/mathematics_IV.pdf" },
      { name: "VLSI Design", url: "/path/to/vlsi_design.pdf" },
      { name: "Embedded Systems", url: "/path/to/embedded_systems.pdf" },
      {
        name: "Analog Communication",
        url: "/path/to/analog_communication.pdf",
      },
    ],
    5: [
      { name: "Power Electronics", url: "/path/to/power_electronics.pdf" },
      {
        name: "Wireless Communication",
        url: "/path/to/wireless_communication.pdf",
      },
      {
        name: "Advanced Digital Signal Processing",
        url: "/path/to/advanced_dsp.pdf",
      },
      { name: "Elective I", url: "/path/to/elective_I.pdf" },
      { name: "Elective II", url: "/path/to/elective_II.pdf" },
      { name: "Industrial Training", url: "/path/to/industrial_training.pdf" },
    ],
    6: [
      {
        name: "Microwave Engineering",
        url: "/path/to/microwave_engineering.pdf",
      },
      { name: "Optoelectronics", url: "/path/to/optoelectronics.pdf" },
      { name: "Nanoelectronics", url: "/path/to/nanoelectronics.pdf" },
      { name: "Elective III", url: "/path/to/elective_III.pdf" },
      { name: "Elective IV", url: "/path/to/elective_IV.pdf" },
      {
        name: "Industrial Training II",
        url: "/path/to/industrial_training_II.pdf",
      },
    ],
    7: [
      { name: "Internet of Things", url: "/path/to/iot.pdf" },
      {
        name: "Digital Image Processing",
        url: "/path/to/digital_image_processing.pdf",
      },
      {
        name: "Embedded System Design",
        url: "/path/to/embedded_system_design.pdf",
      },
      { name: "Elective V", url: "/path/to/elective_V.pdf" },
      { name: "Elective VI", url: "/path/to/elective_VI.pdf" },
      { name: "Project I", url: "/path/to/project_I.pdf" },
    ],
    8: [
      {
        name: "Advanced Embedded Systems",
        url: "/path/to/advanced_embedded_systems.pdf",
      },
      { name: "Project II", url: "/path/to/project_II.pdf" },
      {
        name: "Robotics and Automation",
        url: "/path/to/robotics_automation.pdf",
      },
      { name: "Elective VII", url: "/path/to/elective_VII.pdf" },
      { name: "Elective VIII", url: "/path/to/elective_VIII.pdf" },
      { name: "Seminar", url: "/path/to/seminar.pdf" },
      {
        name: "Comprehensive Viva Voce",
        url: "/path/to/comprehensive_viva_voce.pdf",
      },
    ],
  },
};

const Notes = () => {
  const [activeDepartment, setActiveDepartment] = useState(null);
  const [activeSemester, setActiveSemester] = useState(null);

  const handleDepartmentClick = (department) => {
    setActiveDepartment(department);
    setActiveSemester(null);
  };

  const handleSemesterClick = (semester) => {
    setActiveSemester(semester);
  };

  return (
    <div className="bg-white p-4 mt-40">
      <h1 className=" text-center text-5xl font-bold font-sans ">Notes</h1>
      <hr className="w-full my-6 border-gray-300" />
      <div className="flex flex-col md:flex-row border-b justify-between border-gray-200">
        {Object.keys(departments).map((department) => (
          <button
            key={department}
            onClick={() => handleDepartmentClick(department)}
            className={`bg-blue-600 mx-2 ${
              activeDepartment === department
                ? "border-b-2 border-blue-200 text-white "
                : "text-white"
            }`}
          >
            {department}
          </button>
        ))}
      </div>
      {activeDepartment && (
        <div className="mt-4">
          <div className="grid grid-cols-2 gap-4 md:flex md:flex-row border-b justify-between border-gray-200">
            {Object.keys(departments[activeDepartment]).map((semester) => (
              <button
                key={semester}
                onClick={() => handleSemesterClick(semester)}
                className={`bg-red-600 hover:bg-orange-600 mx-2 ${
                  activeSemester === semester
                    ? " border-b-2 border-blue-500 text-white"
                    : "text-white"
                }`}
              >
                Semester {semester}
              </button>
            ))}
          </div>
        </div>
      )}
      {activeSemester && (
        <div className="mt-4 m-2">
          {departments[activeDepartment][activeSemester].map((note) => (
            <div key={note.name} className="mb-2">
              <a
                href={note.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {note.name}
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Notes;
