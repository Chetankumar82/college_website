import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Admin from "./routes/Admin";
import Academics from "./routes/Academics";
import Traning from "./routes/Traning";
import Scholership from "./routes/Scholership";
import Studentcorener from "./routes/Studentcorener";
import Contact from "./routes/Contact";
import AboutUs from "./components/AboutUs";
import Navbar from "./components/Nav_Bar/Navbar";
import Footer from "./components/Footer-sec/Footer";
import Academics_progrma from "./components/ACADEMIC_PROGRAMS";

import Administration from "./routes/Administration.js";
import Department from "./routes/Department";

import Mission from "./routes/Misson.js";

import Goal from "./routes/Goal.js";
import Event from "./components/Photo_Gallary/Events.js";
import Notes from "./routes/Notes.js";
import Facilities from "./routes/Facilities.js";
import ClassroomPage from "./routes/ClassroomPage.js";
import ComputerScience from "./routes/ComputerScience.js";
import MechanicalComponent from "./routes/MechanicalComponent.js";
import CivilEngineering from "./routes/CivilEngineering.js";
import ElectricalEngineering from "./routes/ElectricalEngineering.js";
import ElectronicsEngineering from "./routes/ElectronicsEngineering.js";
import Library from "./routes/Library.js";
import Lab from "./routes/Lab.js";
import Hostel from "./routes/Hostel.js";
import Sports from "./routes/Sports.js";
import AICTE from "./routes/AICTE.js";
import NPTEL from "./routes/NPTEL.js";
import FacultyManagement from "./routes/FacultyManagement.js";
import NoticeAndManual from "./routes/NoticeAndManual.js";

import DepartmentDetails from "./routes/DepartmentDetails.js";
import EnquiryForm from "./components/testimonial/EnquiryFrom.js";
import FixFooter from "./components/FixFooter/FixFooter.jsx";
import Docdawnload from "./routes/Docdawnload.jsx";
import Affiliations from "./routes/Affliation/Affiliations.jsx";
import Introduction from "./routes/Introduction.jsx";

import Universitydocument from "./components/Universitydocument/Universitydocument.jsx";
import Consolied from "./components/Conditionlizedmarksheet/Consolied.jsx";
import CorrectionName from "./components/Correctioninname/CorrectionName.jsx";
import DuplicateMarksheet from "./components/Duplicatemarksheet/DuplicateMarksheet.jsx";
import MigrationCertificate from "./components/Migration/MigrationCertificate.jsx";
import ProvisionalCertificate from "./components/ProvisionalCertificate/ProvisionalCertificate.jsx";
import StudentClub from "./components/StudentClub/StudentClub.jsx";
import CodingClub from "./components/Club/CodingClub.jsx";
import CulturalClub from "./components/Club/CulturalClub.jsx";
import SocialClub from "./components/Club/SocialClub.jsx";
import TechnicalClub from "./components/Club/TechnicalClub.jsx";
import RoboticsClub from "./components/Club/RoboticsClub.jsx";
import EventGallary from "./routes/EventGallary.js";
import Seminar from "./routes/Seminar.jsx";
import Mess from "./routes/Mess.jsx";
import Wifi from "./routes/Wifi.jsx";
import Greencampus from "./routes/Greencampus.jsx";
import Security from "./routes/Security.jsx";
import Alumni from "./routes/Alumni.jsx";



export default function App() {
  return (
    <div className="App">

      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/Academics" element={<Academics />} />
        <Route path="/Training" element={<Traning />} />
        <Route path="/Scholarship" element={<Scholership />} />
        <Route path="/Administration" element={<Administration />} />

        <Route path="/Studentcorner" element={<Studentcorener />} />
        
        <Route path="/Contact" element={<Contact />} />

        <Route path="/Admin" element={<Admin />} />
        <Route path="/Admin/notices-lab-manuals" element={<NoticeAndManual />} />
        <Route path="/Admin/faculty-details" element={<FacultyManagement />} />
        <Route path="/Admin/event-gallary" element={<EventGallary />} />
        


        
        

        {/* Academics */}
       
        <Route path="/Department" element={<Department />} />

        {/* Gallary */}
        <Route path="/Event" element={<Event />} />
        <Route path="/Notes" element={<Notes />} />
        <Route path="/Facilities" element={<Facilities />} />

        {/*  */}
        <Route path="Department/cs" element={<DepartmentDetails name={"CSE"} />} />
        <Route path="Department/me" element={<DepartmentDetails name={"ME"} /> }/>
        <Route path="Department/ce" element={<DepartmentDetails name={"CE"} />} />
        <Route path="Department/ee" element={<DepartmentDetails name={"EE"} />} />
        <Route path="Department/ele" element={<DepartmentDetails name={"ELE"} />} />


        {/* Student Club */}
        <Route path="studentclub/code" element={<CodingClub name={"code"} />} />
        <Route path="studentclub/cultural" element={<CulturalClub name={"cultural"} /> }/>
        <Route path="studentclub/robotics" element={<RoboticsClub name={"robotics"} />} />
        <Route path="studentclub/social" element={<SocialClub name={"social"} />} />
        <Route path="studentclub/technical" element={<TechnicalClub name={"technical"} />} />
        
        {/*  */}
        <Route path="/ClassroomPage" element={<ClassroomPage />} />
        <Route path="/Library" element={<Library />} />
        <Route path="/Lab" element={<Lab />} />
        <Route path="/Sports" element={<Sports />} />
        <Route path="/Hostel" element={<Hostel />} />


        <Route path="/AICTE" element={<AICTE />} />
        <Route path="/NPTEL" element={<NPTEL />} />
        <Route path="/Contact" element={<EnquiryForm />} />
        <Route path="/docdownload" element={<Docdawnload />} />
        <Route path="/affiliations" element={<Affiliations />} />
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/universitydocument" element={<Universitydocument />} />
        <Route path="/consolidatedmarksheet" element={<Consolied />} />
        <Route path="/correctioninname" element={<CorrectionName />} />
        <Route path="/duplicatecertificate" element={<DuplicateMarksheet />} />
        <Route path="/migrationcertificate" element={<MigrationCertificate />} />
        <Route path="/provisionaldegreecertificate" element={<ProvisionalCertificate />} />
        <Route path="/studentclub" element={<StudentClub />} />
        <Route path="/seminar" element={<Seminar />} />
        <Route path="/mess" element={<Mess />} />
        <Route path="/wifi" element={<Wifi />} />
        <Route path="/greencampus" element={<Greencampus />} />
        <Route path="/security" element={<Security />} />
        <Route path="/alumni" element={<Alumni />} />

      </Routes>

      <Footer />
      <FixFooter />
    </div>
  );
}
