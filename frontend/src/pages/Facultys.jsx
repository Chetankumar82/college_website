import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Breadcrumb from '../Components/Breadcrumb';
import { Link } from 'react-router-dom';

const Facultys = () => {
    const home = "Home"; // Use `const` to declare the variable
    const facultyPage = "Faculty's Profile"; // Avoid using the same name as the component
  return (
    <>
    <Header />
    <Breadcrumb Home={home} Pages={facultyPage} />
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
                                                <td>S. No.</td>
                                                <td>Name of Faculty</td>
                                                <td>Department</td>
                                                <td>Designation</td>
                                                <td>Qualification</td>
                                                <td>Email Id</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>01</td>
                                                <td>Mr. Ashish Sen</td>
                                                <td>Computer Science and Engineering</td>
                                                <td>Asst. Professor</td>
                                                <td>M.Tech*, B.Tech.</td>
                                                <td>ashish@citabu.ac.in</td>
                                            </tr>
                                            <tr>
                                                <td>02</td>
                                                <td>Ms. Heena Bano</td>
                                                <td>Computer Science & Engineering</td>
                                                <td>Asst. Professor</td>
                                                <td>M.Tech*, B.Tech.</td>
                                                <td>heena@citabu.ac.in</td>
                                            </tr>
                                            <tr>
                                                <td>03</td>
                                                <td>Mr. Dinesh Rao</td>
                                                <td>Electrical Engineering</td>
                                                <td>Asst. Professor</td>
                                                <td>M.Tech, B.Tech.</td>
                                                <td>dinesh@citabu.ac.in</td>
                                            </tr>
                                            <tr>
                                                <td>04</td>
                                                <td>Mr. Rahul Sharma</td>
                                                <td>Electrical Engineering</td>
                                                <td>Asst. Professor</td>
                                                <td>M.Tech, B.Tech.</td>
                                                <td>rahul@citabu.ac.in</td>
                                            </tr>
                                            <tr>
                                                <td>05</td>
                                                <td>Mr. Amir Mohammad</td>
                                                <td>Electrical Engineering</td>
                                                <td>Asst. Professor</td>
                                                <td>M.Tech, B.Tech.</td>
                                                <td>amir@citabu.ac.in</td>
                                            </tr>
                                            <tr>
                                                <td>06</td>
                                                <td>Mr. Mohsin Ali</td>
                                                <td>Mechanical Engineering</td>
                                                <td>Asst. Professor</td>
                                                <td>M.Tech, B.Tech.</td>
                                                <td>mohsin@citabu.ac.in</td>
                                            </tr>
                                            <tr>
                                                <td>01</td>
                                                <td>Mr. Ashish Sen</td>
                                                <td>Computer Science and Engineering</td>
                                                <td>Asst. Professor</td>
                                                <td>M.Tech*, B.Tech.</td>
                                                <td>ashish@citabu.ac.in</td>
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

export default Facultys