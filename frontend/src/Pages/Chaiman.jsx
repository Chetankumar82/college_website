import React from 'react'
import Breadcrumb from '../components/Breadcrumb'

const Chaiman = () => {
    const home = "Home";
    const pageName = "Chairman's Message";
  return (
    <>
    <Breadcrumb Home={home} PageName={pageName} />
    <section class="team-details-section section-padding pt-0 section-margin">
            <div class="container">
                <div class="team-details-wrapper">
                    <div class="team-details-items">
                        <div class="details-image">
                            <img src="assets/img/team/details-1.jpg" alt="img"/>
                        </div>
                        <div class="team-details-content">
                            <h2>
                            Mr. Kishore Gandhi
                            </h2>
                            <span>Chairman, CIT College<br/>
                            Director, RRPL</span>
                            
                            <p class="mt-4">
                            I warmly wel­come the aspir­ing stu­dents to the fra­ter­nity of Char­tered Insti­tute of Tech­nol­ogy
                             pro­moted by Gyan Raman Char­i­ta­ble Trust, where we believe in the enhance­ment of men­tal can­vas 
                             of the stu­dents as well as set­ting aca­d­e­mic, pro­fes­sional & eth­i­cal stan­dards.
                            </p>
                            <p class="mt-4">
                            CIT offers an inspir­ing atmos­phere for pro­fes­sion­als edu­ca­tion, knowl­edge expan­sion & plan­ning
                             career achieve­ments. Being an edu­ca­tional insti­tute we are well aware of the upcom­ing chal­lenges
                              and striv­ing hand to get our stu­dents pre­pared to take up the chal­lenges with a fight­ing spirit
                               and order to evolve them­selves as suc­cess­ful entre­pre­neurs of tomor­row by fos­ter­ing an aca­d­e­m­i­cally
                                exhil­a­rat­ing , cre­ative & har­mo­niz­ing envi­ron­ment.
                            </p>
                            <p class="mt-4">
                            Hope you have tremen­dous learn­ing and joy­ful expe­ri­ence at Char­tered Insti­tute of Tech­nol­ogy.
                            </p>
                           
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
  )
}

export default Chaiman