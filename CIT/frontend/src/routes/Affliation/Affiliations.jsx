import React from 'react'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import "./Affiliation.css"

const Affiliations = () => {
    return ( 
    <>
        <Breadcrumb Home="Home" PageName="Affiliations & Accreditations" />
        <div className='section-header'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <div className='page-title'>
                            <h1 className='fs-1  px-4 font-bold fs-3'>Affiliations and Accreditations</h1>
                        </div>
                    </div>
                </div>
                <div className="table-container">
      
      <table border={2} className="instituteTable">
        <thead>
          <tr>
            <th>Institute</th>
            <th>Courses</th>
            <th>Recognized & Affiliating Body</th>
            <th>Website Links</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Chartered Institute of Technology</td>
            <td>
              Civil Engineering, Computer Science, Electrical Engineering, Electronics Engineering, Mechanical Engineering
            </td>
            <td>
              * Recognized by: Govt. of Rajasthan<br />
              * Affiliated to Bikaner Technical University, Bikaner
            </td>
            <td>
              <a href="https://btu.ac.in/home/" target="_blank" rel="noopener noreferrer" className='text-blue-500'>
                https://btu.ac.in/
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
        
        </div>
    </> 
    
    )
}

export default Affiliations