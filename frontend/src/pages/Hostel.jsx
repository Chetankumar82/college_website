import React from 'react';
import Breadcrumb from '../Components/Breadcrumb';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const Hostel = () => {
  const home = "Home"; // Use `const` to declare the variable
  const hostelPage = "Hostel & Mess"; // Avoid using the same name as the component

  return (
    <>
    <Header />
    <Breadcrumb Home={home} Pages={hostelPage} />
    <div className="rts-athletics rts-section-padding">
        <div className="container">
            <div className="rts-athletics__content">
                <div className="row g-5 pb-5">
                    <div className="col-lg-5">
                        <div className="left-content">
                            <div className="athletics-image">
                                <img src="assets/images/campus/hostel.png" alt="campus-single"/>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="right-content">
                            <div className="right-content__section">
                                <h2 className="rts-section-title mb--15">Hostel at CIT
                                </h2>
                                <p className="description">
                                Hundreds of students from all across the country live in hostel premises, 
                                which come closest to being "a home away from home". The separate facilities for 
                                boys and girls, caring wardens and a tight security ensure a pleasant stay allowing 
                                the students to focus on academics.
                                Whilst internet access and best lab facilities ensure close contact with family and friends 
                                outside, the fully equipped common rooms allow for that relaxed time with friends on Campus.
                                The College has a elegantly constructed Boy's Hostel in the campus having two , three and four seaters.
                                 Hygienically prepared nutritious food, recreation room equipped with wifi, facility of indoor games, 
                                 exemplary discipline with desired freedom make the hostel a home away from home. We appreciate parent's 
                                 anxiety regarding a safe and secure environment for their wards. 
                                </p>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row g-5">
                    <div className="col-lg-5">
                        <div className="left-content">
                            <div className="athletics-image">
                                <img src="assets/images/campus/mess.png" alt="campus-single"/>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="right-content">
                            <div className="right-content__section">
                                <h2 className="rts-section-title mb--15">Mess Facilities
                                </h2>
                                <p className="description">
                                Mess facility is an integral part of the college, which provides wholesome, nutritious & homely food to all hostellers, 
                                faculty & staff members.The mess serves Vegetarian Food only and operates in self service mode.
                                The mess provides morning tea, regular breakfast, lunch, evening snacks and tea, dinner and milk to all hostellers.
                                The menu of the items is designed in consideration with requirements of the students and nutrition is 
                                added to make it healthy and complete.
                                The stay in the hostel gives a sense of solidarity amongst the students. Mess caters to the tastes of 
                                the students of different region and students with varied culinary preferences.
                                Mess menu is planed and managed by the management in consultation with the students.
                                </p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer />
    </>
  );
};

export default Hostel;