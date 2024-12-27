import React from 'react'
import "./Universitydocument.css"
import Breadcrumb from '../Breadcrumb/Breadcrumb'
import { FaPenAlt } from "react-icons/fa";

const Universitydocument = () => {
    const document = [
        {
            
            title: "Consolidated Marksheet",
            Href: "/consolidatedmarksheet",
        },
        {
            title: "Correction In Name",
            Href: "/correctioninname",
        },
        {
            title: "Duplicate Certificate",
            Href: "/duplicatecertificate",
        },
        {
            title: "Migration Certificate",
            Href: "/migrationcertificate",

        },
        {
            title: "Provisional Degree Certificate",
            Href: "/provisionaldegreecertificate",
        }

      ];
  return (
    <>
        <Breadcrumb Home="Home" PageName="University Document" />
        <div className='section-header'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <div className='page-title'>
                            <h1 className='fs-1 mx-5 font-bold fs-3' style={{ borderBottom: '2px solid blue'}}>University Document</h1>
                        </div>
                    </div>
                </div>
                <div className="table-container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="card">
                                            
                                            {document.map((document, index) => (
                                                <div className="card-header mb-4 py-4">
                                                <h5 className="card-title " style={{fontSize:"20px"}}>
                                                    <a href={document.Href}  rel="noopener noreferrer" className='text-black hover:text-blue-800'>
                                                    <FaPenAlt style={{display:"inline", marginRight:"5px"}}/> {document.title}
                                                    </a>
                                                </h5>
                                                </div>
                                            ))}
                                                
                                           
                                           
                                        </div>
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

export default Universitydocument