import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Breadcrumb from '../Components/Breadcrumb'
import { Link } from 'react-router-dom'

const Principle = () => {
    const home = "Home"; // Use `const` to declare the variable
    const principle = "principle's profile"; // Avoid using the same name as the component
  return (
    <>
   <Header />
   <Breadcrumb Home={home} Pages={principle} />
   <section className="rts-faculty-details  rts-section-padding">
        <div className="container">
            <div className="row justify-content-sm-center g-5">
                <div className="col-lg-4 col-md-10 col-sm-10">
                    <div className="faculty-member">
                        <div className="faculty-member__details rt-center ">
                            <div className="faculty-member__image">
                                <img src="assets/images/faculty/principal.jpeg" alt="member image"/>
                            </div>
                            <div className="faculty-member__info">
                                <h4>Dr. Rajnesh Kumar Yadav</h4>
                                <p>
                                    BE, M.Tech, Phd (Power System)<br/>
                                    LISTE, MIEEE, MSESI<br/>
                                    15 Years of Teaching & Research Experience</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8 col-md-10 col-sm-10">
                    <div className="member-info ">
                        <div className="member-info__details">
                            <div className="short-info">
                                
                                <p className="description">
                                    To meet the challenges posed by rapid economic growth, liberalization and globalization the country 
                                    needs a workforce of young and efficient engineers and managers. The undergraduate programme of engineering
                                     at CIT aims to provide young engineers, with a high level of competence , dedication and motivation.
                                </p>
                                <p className="description">
                                I invite you to explore the opportunities to study for the Bachelor of Engineering at CIT and take advantage of
                                 the philosophy and vision of the founders and numerous advantage of networking with ITs former Professor and 
                                 others for excellence.
                                </p>
                                <p className="description">
                                The infrastructure, the dedicated facultymembers and pleasant surroundings make education at CIT a pleasant and
                                 valuable experience.
                                </p>
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

export default Principle