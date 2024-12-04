import React from 'react'
import Breadcrumb from '../components/Breadcrumb'

const Affiliation = () => {
    const home = "Home";
    const pageName = "Affiliation and Accreditation";
  return (
    <>
    <Breadcrumb Home={home} PageName={pageName} />
    <div class="cart-section section-padding">
            <div class="container">
                <div class="cart-list-area">
                    <div class="table-responsive">
                        <table class="table common-table border">
                            <thead data-aos="fade-down">
                                <tr>
                                    <th class="text-center">Institute</th>
                                    <th class="text-center">Departments</th>
                                    <th class="text-center">Recognized & Affiliating Body</th>
                                    <th class="text-center">Website Links</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="align-items-center py-3">
                                    <td>
                                        <div class="cart-item-thumb text-center">
                                            <span class="head ">Chartered Institute of Technology,Aburoad</span>
                                        </div>
                                    </td>
                                    <td class="text-center">
                                        <span class="price-usd">
                                        CSE, ME, EE, CE, ECE
                                        
                                        </span>
                                    </td>
                                    <td class="price-quantity text-center">
                                        <div class="quantity d-inline-flex align-items-start justify-content-center   n50-border_20 text-sm">
                                        Recognized by: Govt. of Rajasthan<br/>
                                        Affiliated to Bikaner Technical University
                                    </div>
                                    </td>
                                    <td class="text-center">
                                        <span class="price-usd">
                                        <a href="https://btu.ac.in/home/">https://btu.ac.in/</a>
                                        </span>
                                    </td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>
                    
                </div>
            </div>
        </div>
        </>
  )
}

export default Affiliation