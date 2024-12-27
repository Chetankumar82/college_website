import "./AboutUsStyles.css";
import Navbar from "./../components/Nav_Bar/Navbar";
import background from "./../assets/Event/1.png";
import pic1 from "./../assets/1.png";
import pic2 from "./../assets/2.png";
import pic3 from "./../assets/3.png";
import pic4 from "./../assets/iv.png";
import pic5 from "./../assets/Lovepik_com-401195244-cartoon-stereo-book.png";


import video from "../assets/videos/videoplayback.mp4";
function AboutUs() {
  return (
    <>
    <div className="about-section ">
      <div className="about-wrapper-5">
        <div className="container-lg">
          <div className="row g-4 ">
          <h1 className="text-center text-5xl about-head" style={{ visibility: "visible", textAlign: "center", marginTop: "60px", marginBottom: "30px" }}>
                 About CIT
                </h1>
            <div className="col-lg-6">
              <div className="section-title mb-0">
                
                <div>
                 <video
                    src={video}
                    controls
                    width="500"
                    height="500"
                    autoPlay
                    loop
                    style={{ marginTop: "20px", marginBottom: "20px" }}
                  ></video>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="section-title mb-0">
                <p className="mb-2 text-black about-para">
                Chartered Institute of Technology is an initiative by Gyan Raman Charitable Trust and Amongst Top 10 Best RTU 
                Affiliated Engineering Colleges in Rajasthan. We believe in revolutionizing the conventional pattern of teaching 
                through fresh ideas and innovations in the present education system.</p>
                <p className="mb-2 text-black about-para">
                Chartered Institute of Technology Abu Road commits itself to prepare aspiring individuals for facing the challenges
                 of the global world.The amalgamation of the finest training procedures and brilliant methods of inculcating 
                 professional ethics along with development of individuals pursuits make the nucleus of at Chartered Institute
                of Technology.</p>
                <p className="mb-2 text-black about-para">Chartered Institute of Technology is privileged to provide a platform of focused, methodical and blissful 
                learning, igniting and fostering the young minds, empowering them to carry out a revolution in the fields of 
                Science & Technology that our future India dreams.
                </p>
              </div>
              <div className="counter-box-items mt-4">
                <a href="/introduction" className="counter-content" style={{ backgroundColor:"rgb(0, 92, 161)", padding: "5px 15px", borderRadius: "5px", color: "white", fontSize: "16px", fontWeight: "bold" }}>
                  Read More<i className="fa fa-angle-right ml-2"></i>
                </a>
              </div>
            </div>
            </div>
            </div>
            </div>
            
    </div>
    
    </>
  );
}

export default AboutUs;
