import React from 'react'
import Breadcrumb from '../components/Breadcrumb/Breadcrumb'
import chairman from "../assets/faculty/chairman.png"
import principal from "../assets/faculty/principal.png"
import { FaCheckDouble } from "react-icons/fa6";

const Introduction = () => {
  return (
    <>
  <Breadcrumb Home="Home" PageName="Introduction" />
  <div className="mt-40 mb-40 p-10 bg-white h-full py-6 sm:py-8 lg:py-12" >  
    <div className="mx-auto max-w-screen-2xl px-4 md:px-8" style={{borderBottom: "1px solid black"}}>
      <div className="mb-4">
        <div className="mt-0">
          <h2 className="text-left font-bold text-black lg:text-3xl dark:text-white mb-4">
            Introduction
          </h2>

          <p className="text-black dark:text-gray-300 md:block fs-6 leading-7">
            Chartered Institute of Technology is an initiative by Gyan Raman Charitable Trust. CIT believes in
            revolutionizing the conventional pattern of teaching through fresh ideas and innovations in the present
            education system. We intend to deliver quality education by seamlessly integrating technology with academics.
          </p>
          <p className="text-black dark:text-gray-300 md:block fs-6 leading-7">
            CIT commits itself to prepare aspiring individuals for facing the challenges of the global world. The amalgamation
            of the finest training procedures and brilliant methods of inculcating professional ethics along with development
            of individuals' pursuits make the nucleus at CIT. The experts of various fields are constantly working at CIT to
            create a learning environment that leads to an overall development of young aspirants enabling them to achieve their
            goals and bloom into influential personalities.
          </p>
          <p className="text-black dark:text-gray-300 md:block fs-6 leading-7">
            CIT is set at a location which is not only awe-inspiring for tourists but delightfully conducive to students.
            Set in Mount Abu natural magnificence with a strong aim of imparting quality education, Chartered Institute of 
            Technology is the place to nurture aspirations. The location of CIT is ideal for serious pursuits of professional
            studies. The Institute is situated in the foothills of Mount Abu, easily approachable from the city of Abu Road.
          </p>
        </div>      
      </div>
    </div>

    <div className="mx-auto max-w-screen-2xl px-4 md:px-8" style={{borderBottom: "1px solid black"}}>
      <div className="">
        <div className="mt-5">
          <h2 className="text-left font-bold text-black lg:text-3xl dark:text-white mb-4">
          Vision
          </h2>

          <div className='row'>
            
            <div className='col-lg-8'>
              <p className="text-black dark:text-gray-300 md:block fs-6 mb-4">
              <FaCheckDouble style={{display: "inline", marginRight: "10px"}} />
              To achieve excellence in technical and management education through quality teaching and innovation.   
              </p>
              
              
            </div>
          </div>
        </div>      
      </div>
    </div>

    <div className="mx-auto max-w-screen-2xl px-4 md:px-8" style={{borderBottom: "1px solid black"}}>
      <div className="mb-4">
        <div className="mt-5">
          <h2 className="text-left font-bold text-black lg:text-3xl dark:text-white mb-4">
          Mission
          </h2>

          <div className='row mt-4'>
            
            <div className='col-lg-12'>
              <ul className="text-black dark:text-gray-300 md:block fs-6 leading-7">
                  <li><FaCheckDouble style={{display: "inline", marginRight: "10px"}}/>To provide an excellent learning environment to produce socially responsible and productive technical professionals.</li>
                    <li><FaCheckDouble style={{display: "inline", marginRight: "10px"}}/>To set up the state-of-the-art facilities for quality education and innovation.</li>
                    <li><FaCheckDouble style={{display: "inline", marginRight: "10px"}}/>To impart knowledge & Skills leading to shaping a budding manager as a quality executive.</li>
                    <li><FaCheckDouble style={{display: "inline", marginRight: "10px"}}/>To encourage for life-long learning and team-based problem solving through learning environment.</li>
              </ul>
              
              
            </div>
          </div>
        </div>      
      </div>
    </div>

    <div className="mx-auto max-w-screen-2xl px-4 md:px-8" style={{borderBottom: "1px solid black"}}>
      <div className="mb-4">
        <div className="mt-5">
          <h2 className="text-left font-bold text-black lg:text-3xl dark:text-white mb-4">
          Objectives
          </h2>

          <div className='row mt-4'>
            
            <div className='col-lg-12'>
              <ul className="text-black dark:text-gray-300 md:block fs-6 leading-7">
                  <li><FaCheckDouble style={{display: "inline", marginRight: "10px"}}/>To create and sustain a community of learning in which students acquire knowledge and learn to 
                  apply it professionally with due consideration for ethical, ecological and economic issues.</li>
                    <li><FaCheckDouble style={{display: "inline", marginRight: "10px"}}/>To pursue research and disseminate research findings.</li>
                    <li><FaCheckDouble style={{display: "inline", marginRight: "10px"}}/>To provide knowledge-based technological services to satisfy the needs of society and the industry.</li>
                    <li><FaCheckDouble style={{display: "inline", marginRight: "10px"}}/>To help in building national capabilities in science, technology, humanities, management, education and research.</li>
                    <li><FaCheckDouble style={{display: "inline", marginRight: "10px"}}/>To become a globally recognized institute of excellence in the field.</li>
              </ul>
              
              
            </div>
          </div>
        </div>      
      </div>
    </div>

    <div className="mx-auto max-w-screen-2xl px-4 md:px-8" style={{borderBottom: "1px solid black"}}>
      <div className="mb-4">
        <div className="mt-5">
          <h2 className="text-left font-bold text-black lg:text-3xl dark:text-white mb-4">
            Chairman’s Message
          </h2>

          <div className='row mt-5'>
            <div className='col-lg-4'>
              <div className='section-img' style={{ width: "200px", height: "150px", margin: "auto" }}>
                <img src={chairman} alt="Chairman" className="" style={{ width: "100%" }} />
                <div className='intro mt-3' >
                <h2 className='text-black fs-5 font-medium'>Mr. Kishore Gandhi</h2>
                <p className='text-black text-center ' style={{marginTop:"0px", fontSize:"20px"}}>Chairman, CIT</p>
                <p className='text-black text-center' style={{marginTop:"-8px", fontSize:"18px"}}>Director, RRPL</p>
              </div>
              </div>
              
            </div>
            <div className='col-lg-8'>
              <p className="text-black dark:text-gray-300 md:block fs-6 leading-7">
                I warmly welcome the aspiring students to the fraternity of Chartered Institute of Technology promoted by Gyan Raman
                Charitable Trust, where we believe in the enhancement of mental canvas of the students as well as setting academic, 
                professional & ethical standards.   
              </p>
              <p className="text-black dark:text-gray-300 md:block fs-6 leading-7">
                CIT offers an inspiring atmosphere for professional education, knowledge expansion & planning career achievements. 
                Being an educational institute, we are well aware of the upcoming challenges and striving hard to get our students prepared
                to take up the challenges with a fighting spirit and order to evolve themselves as successful entrepreneurs of tomorrow by
                fostering an academically exhilarating, creative & harmonizing environment.
              </p>
              <div className="text-black dark:text-gray-300 md:block fs-6 leading-7">
              <h2 className='mb-1 mt-2 font-medium text-black text-left fs-5'>Best Wishes</h2>
                <h4 className='text-gray-500 leading-5 mb-5'>Kishore Gandhi
                <br/>Chair­man</h4>
                
              </div>
              
            </div>
          </div>
        </div>      
      </div>
    </div>

    <div className="mx-auto max-w-screen-2xl px-4 md:px-8" >
      <div className="mb-4">
        <div className="mt-5">
          <h2 className="text-left font-bold text-black lg:text-3xl dark:text-white mb-4">
            Principal's Profile
          </h2>

          <div className='row mt-5'>
            <div className='col-lg-4'>
              <div className='section-img' style={{ width: "200px", height: "150px", margin: "auto" }}>
                <img src={principal} alt="Chairman" className="" style={{ width: "100%" }} />
                <div className='intro mt-3' >
                <h2 className='text-black font-medium text-center mb-3' style={{fontSize:"20px"}}>Dr. Rajnesh Kumar Yadav</h2>
                <p className='text-black text-center ' style={{marginTop:"-15px", fontSize:"18px"}}>BE, M.Tech, Phd</p>
                
                
              </div>
              </div>
              
            </div>
            <div className='col-lg-8'>
              <p className="text-black dark:text-gray-300 md:block fs-6 leading-7">
              To meet the challenges posed by rapid economic growth, liberalization and globalization the country needs a workforce of young and 
              efficient engineers and managers. The undergraduate programme of engineering at CIT aims to provide young engineers, with a high 
              level of competence , dedication and motivation.   
              </p>
              <p className="text-black dark:text-gray-300 md:block fs-6 leading-7">
              I invite you to explore the opportunities to study for the Bachelor of Engineering at CIT and take advantage of the philosophy and 
              vision of the founders and numerous advantage of networking with ITs former Professor and others for excellence.
              </p>
              <p className="text-black dark:text-gray-300 md:block fs-6 leading-7">
              The infrastructure, the dedicated facultymembers and pleasant surroundings make education at CIT a pleasant and 
              valuable experience.
              </p>
              <div className="text-black dark:text-gray-300 md:block fs-6 leading-7">
              <h2 className='mb-2 mt-2 font-medium text-black text-left fs-5'>Principal</h2>
                <h4 className='text-gray-500 mb-2'>Dr. Rajnesh Kumar Yadav <br/>Chartered Institute of Technology</h4>
                
              </div>
              
            </div>
          </div>
        </div>      
      </div>
    </div>


    

  </div>
</>
  )
}

export default Introduction