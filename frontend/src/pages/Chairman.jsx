import React from 'react'
import Breadcrumb from '../Components/Breadcrumb';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const Chairman = () => {
    const home = "Home"; // Use `const` to declare the variable
    const chairman = "chairman's message"; // Avoid using the same name as the component
  return (<>
    <Header />
    <Breadcrumb Home={home} Pages={chairman} />
    <section className="rts-faculty-details  rts-section-padding">
        <div className="container">
            <div className="row justify-content-sm-center g-5">
                <div className="col-lg-4 col-md-10 col-sm-10">
                    <div className="faculty-member">
                        <div className="faculty-member__details rt-center ">
                            <div className="faculty-member__image">
                                <img src="assets/images/faculty/chairman.jpg" alt="member image"/>
                            </div>
                            <div className="faculty-member__info">
                                <h4>Mr. Kishore Gandhi</h4>
                                <p>
                                Chairman, CIT College<br/>
                                Director, RRPL<br/>
                                </p>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8 col-md-10 col-sm-10">
                    <div className="member-info ">
                        <div className="member-info__details">
                            <div className="short-info">
                                
                                <p className="description">
                                I warmly wel­come the aspir­ing stu­dents to the fra­ter­nity of Char­tered Insti­tute of Tech­nol­ogy pro­moted by
                                 Gyan Raman Char­i­ta­ble Trust, where we believe in the enhance­ment of men­tal can­vas of the stu­dents as well
                                  as set­ting aca­d­e­mic, pro­fes­sional & eth­i­cal stan­dards.
                                </p>
                                <p className="description">
                                CIT offers an inspir­ing atmos­phere for pro­fes­sion­als edu­ca­tion, knowl­edge expan­sion & plan­ning career achieve­ments.
                                 Being an edu­ca­tional insti­tute we are well aware of the upcom­ing chal­lenges and striv­ing hand to get our stu­dents
                                  pre­pared to take up the chal­lenges with a fight­ing spirit and order to evolve them­selves as suc­cess­ful 
                                  entre­pre­neurs of tomor­row by fos­ter­ing an aca­d­e­m­i­cally exhil­a­rat­ing , cre­ative & har­mo­niz­ing envi­ron­ment.
                                </p>
                                <p className="description">
                                Hope you have tremen­dous learn­ing and joy­ful expe­ri­ence at Char­tered Insti­tute of Tech­nol­ogy.
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

export default Chairman