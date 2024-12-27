
import Hero from "../components/Hero";
import Navbar from "../components/Nav_Bar/Navbar";
import Trip from "../components/Trip";
import image from "./../assets/download.jpeg";
import AboutUs from "../components/AboutUs";
import Academics_progrma from "../components/ACADEMIC_PROGRAMS";
import Student_count from "../components/student-count/Student";

import Campus_life from "../components/Campus_life/Campus_life";
import Event from "../components/Photo_Gallary/Events";
import CollegeRecognition from "../components/testimonial/CollegeRecognition";
import Carousel from "../components/MyCarousel";

import Footer from "../components/Footer-sec/Footer";
import Testimonial from "../components/testimonial/Testimonial";
import Topnav from "../components/Topnav/Topnav";
import DarkVariantExample from "../components/Example";
import TabComponent from "./TabComponent";
import Student from "../components/student-count/Student";
import Whychoose from "../components/Whychoose/Whychoose";
import Placement from "../components/testimonial/Placement";
import Faq from "../components/testimonial/Faq";
function Home() {
  return (
    <div className="HOme">
      <Hero />
      <AboutUs />
      <Academics_progrma />
      <Whychoose />
      <Student />
      
      <Carousel />
      
      {/* <TabComponent /> */}
      <Testimonial />
      <CollegeRecognition />
      <Placement />
      <Faq />
    </div>
  );
}

export default Home;
