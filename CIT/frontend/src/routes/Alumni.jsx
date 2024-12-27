import React from 'react'
import Breadcrumb from '../components/Breadcrumb/Breadcrumb'

const Alumni = () => {
  return (
    <>
    <Breadcrumb Home="Home" PageName="Alumni Cell"/>
    <div className="training mt-40">
    <h2 className="mt-5 pt-5 fs-1  mx-4 font-bold fs-3 py-3" style={{borderBottom: "1px solid blue"}}>Alumni Cell</h2>
      <div class="row">
        <div class="col-md-12">
          <p className="mt-3 px-4 leading-7">
          The CIT Alumni Cell is an organization, composed of CIT alumni, alumni groups and student coordinators organized across the 
          world, with a view to preserve and carry forward the fine traditions of Chartered Institute of technology, to strengthen the 
          connection between the alumni at home, abroad and college. Alumni spread across India, and even the world; they play an 
          important role in social development and national rejuvenation. The great achievements they make have gained a high 
          reputation for their alma mater. To strengthen the cooperation between alumni at home and abroad, as well as alumni 
          and alma mater, and also to serve our alumni, the college established the alumni Cell and has been working productively 
          since then. We are an engaged alumni cell with vibrant communication that actively reaches out, participates fully, and 
          welcomes and shares new ideas and fresh thinking. As alumni society let us stand together in advancing the goal of CIT, 
          to be the leading college offering engineering in computer, electrical, civil and mechanical respectively We seek to bring 
          the alumni of CIT together to foster mutual relationships while stimulating & strengthening an old network. CIT alumni meet 
          “Regalia” is conducted in order to reconnect with ex-students, recognize their success and various achievements.
          </p>
        </div>
      </div>
      <h2 className="mt-4 fs-1  mx-4 font-bold fs-3 py-3" style={{borderBottom: "1px solid blue"}}>The aims and objectives of the CIT Alumni Cell are</h2>
      <div class="row">
        <div class="col-md-12">
         <ul className='list-disc list-inside px-4 leading-7 mt-3 mb-40'>
            <li>To encourage the alumni of CIT to work for improvement in awareness towards technical education in the society</li>
            <li>To create a world-class organization for bringing together all the alumni of CIT and providing a forum for professional networking amongst the alumni, with present students and professors for mutual benefit in professional and/ or business areas; including employment network for new graduates or alumni looking for career upgrade/ change, and alumni displaced from the workforce</li>
            <li>To organize and establish scholarship funds for the help of the needy and deserving students</li>
            <li>To encourage the alumni to take an active and abiding interest in the work and progress of the institute so as to contribute towards enhancement of the social utility of their Alma Mater</li>
            <li>To inculcate the knowledge of and help the passing out students in the fields of employment and motivate them towards entrepreneurship</li>
            <li>To institute prizes for outstanding project work, research papers or other professional activities by the students of the institute: also to recognize outstanding social and community service by the alumni and the students</li>
            <li>To extend academic support to the institute through various networks such as “visiting faculty network”, “curriculum development network”, “industry-academia relationship building”, “distance learning network” and “academic endowment network” etc. for enhancing technological and practical knowledge of students</li>
           
         </ul>
        </div>
      </div>
     

    </div>
    </>
  )
}

export default Alumni