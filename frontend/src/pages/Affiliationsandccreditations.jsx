import React from 'react'
import Header from '../Components/Header'
import Breadcrumb from '../Components/Breadcrumb'
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';

const Affiliationsandccreditations = () => {
    const home = "Home"; // Use `const` to declare the variable
    const affiliationsAndccreditations = "Affiliations & Creditations"; // Avoid using the same name as the component   
  return (<>
    <Header />
    <Breadcrumb Home={home} Pages={affiliationsAndccreditations} />
    <div className="rts-page-content py-5">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="admission-content-top">
                        

                        

                        
                        <div className="application-deadline">
                            
                            <div className="application-deadline__content">
                                <div className="application-deadline__content--table">
                                    <table className="table">
                                        <thead className="table-theme">
                                            <tr>
                                                <td>Institute</td>
                                                <td>Courses</td>
                                                <td>Recognized & Affiliating Body</td>
                                                <td>Website Link</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Chartered Institute of Technology</td>
                                                <td>Enginerring & Technology</td>
                                                <td><li>Affiliated to Bikaner Technical University</li>
                                                <li>Recognized by: Govt. of Rajasthan</li></td>
                                                <td><Link to="https://btu.ac.in/home/">https://btu.ac.in/home/</Link></td>
                                            </tr>
                                            
                                            
                                        </tbody>
                                    </table>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
   </div>
   <Footer />
                        </>
  )
}

export default Affiliationsandccreditations