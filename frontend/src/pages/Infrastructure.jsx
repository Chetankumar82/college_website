import React from 'react'
import Header from '../Components/Header'
import Breadcrumb from '../Components/Breadcrumb'
import Footer from '../Components/Footer';

const Infrastructure = () => {
    const home = "Home"; // Use `const` to declare the variable
    const campustour = "Campus & Infrastructure"; // Avoid using the same name as the component
  return (
    <>
    <Header />
    <Breadcrumb Home={home} Pages={campustour} />
    <section className="rts-mission">
        <div className="container">
            
           
            <div className="row mt-5 mb-5">
                <div className="col-lg-12">
                    <div className="rts-timeline-section">
                        <div className="rts-timeline-content">
                            <div className="left-side">
                                <div className="single-timeline-item">
                                    <h5 className="timeline-title">Library</h5>
                                    <p> The library plays a pivotal role in the intellectual pursuits 
                                    of students and academia at the college. The library is a veritable
                                     storehouse of information with sample text and reference books,
                                      national and international periodicals & journals, thesis & dissertations.
                                       The library has a special collection of prescribed text books, latest research papers,
                                        reference materials in print along with the facility to refer to e-journals, CDs, project
                                         reports.
                                    </p>
                                    <img src="assets/images/about/mission-1.jpg" alt=""/>
                                </div>
                                <div className="single-timeline-item">
                                    <h5 className="timeline-title">Computer Lab</h5>
                                    <p> Housing over 180 high-end internet enabled computers, 
                                    CIT has one of the best IT infrastructures among engineering 
                                    college of Rajasthan. It is adequately equipped with modern
                                     hardware and software and staffed with qualified personnel. 
                                     The 24×7 Wi-fi enabled campus encourages the students to keep themselves updated with the latest of everything.
                                    </p>
                                    <img src="assets/images/about/mission-2.jpg" alt=""/>
                                </div>
                                <div className="single-timeline-item">
                                    <h5 className="timeline-title">Lecture Theaters</h5>
                                    <p> SMPGC has well furnished, spacious, air-cooled lecture theatres having adequate sitting 
                                    capacity and equipped with all the latest teaching aids like OHPs and LCDs. Such 
                                    modern teaching aids make sure that the students & the faculties have the very best 
                                    means at their disposal. This breaks from the traditional textbook teaching and ensures 
                                    a more practical & interactive class-room experience.
                                    </p>
                                    <img src="assets/images/about/mission-1.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="separator">
                            </div>
                            <div className="right-side">
                                <div className="single-timeline-item">
                                    <h5 className="timeline-title">The Campus</h5>
                                    <p> The CIT College campus is not just a place to learn, 
                                    but a place where you can grow to make a difference. You
                                     will find a confidence to try new things. It is one of the 
                                     most beautiful colleges in the sirohi district. There are various
                                      student activities available for enrichment and enjoyment. You can
                                       find informal gathering, sports activities, kite flying, etc.
                                    </p>
                                    <img src="assets/images/about/mission-3.jpg" alt=""/>
                                </div>
                                <div className="single-timeline-item">
                                    <h5 className="timeline-title">24 x 7 Security</h5>
                                    <p> The campus is under 24 x 7 CCTV surveillance. All entry & exit points 
                                    are manned by security personnel. Only registered students and staff members
                                     can enter/exit the campus premises. Visitors are required to take prior appointments
                                      and approval of the desired office.
                                    </p>
                                    <img src="assets/images/about/mission-4.jpg" alt=""/>
                                </div>
                                <div className="single-timeline-item">
                                    <h5 className="timeline-title">Laboratories</h5>
                                    <p> The college has well equipped separate labs for each department. 
                                    Students use resources of the laboratories to solve problems, perform 
                                    developmental experiments and work on projects guided by the faculty. 
                                    All laboratories are state-of-the-art in terms of facilities and well 
                                    stocked with all the required equipments and materials required for proper practical exposure to the students.
                                    </p>
                                    <img src="assets/images/about/mission-4.jpg" alt=""/>
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Footer />
    </>
  )
}

export default Infrastructure