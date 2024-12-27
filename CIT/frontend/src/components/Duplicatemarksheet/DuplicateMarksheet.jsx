import React from 'react'
import Breadcrumb from '../Breadcrumb/Breadcrumb'

const DuplicateMarksheet = () => {
  return (
    <>
        <Breadcrumb Home="Home" PageName="Duplicate Certificate" />
        <div className="mt-40 mb-5 min-h-screen py-10">
      <div className="mx-auto max-w-screen-2xl px-4 ">
        <div className="mb-4  sm:mb-8 md:mb-12">
          <div className="">
            <h2 className="text-2xl font-bold text-black lg:text-3xl dark:text-white text-left mb-5">
            
Duplicate Marksheet
            </h2>
            <h4 className="text-black dark:text-gray-300  mb-4 pb-3" style={{borderBottom: "1px solid blue"}}>
            To get your Duplicate Mark sheet please go through following steps:
            </h4>
            <ol className="list-decimal text-black dark:text-gray-300 md:block px-5">
              <li className='py-2'>Download relevant application form <a href='https://www.rtu.ac.in/RTU/wp-content/uploads/2015/05/Form-for-Duplicate-e.pdf' target='blank' className='text-blue-500'>from here.</a> </li>
              <li className='py-2'>Fill the complete form.</li>
              <li className='py-2'>Attach Copy of all mark sheets issued during completion of course.</li>
              <li className='py-2'>Copy of enrolment card</li>
              <li className='py-2'>Photo copy of Personal ID</li>
              <li className='py-2'>Send the complete form to CONTROLLER OF EXAMINATION, Rajasthan Technical University, Rawatbhata Road, KOTA – 324010.</li>
              <li className='py-2'>The Certificates shall be dispatched to your college within seven working days of receipt of application.</li>
              <li className='py-2'>If you desire your certificates to be sent at your home address, please attach a proof of residence such as Driving licence, Ration card, Aadhar card etc.</li>
              <li className='py-2'>In case you have lost your enrolment card, you shall be required to send an authorisation letter from college in addition to documents mentioned above.</li>
            </ol>
          </div>
        </div>
      </div>
    </div> 
    </>
  )
}

export default DuplicateMarksheet