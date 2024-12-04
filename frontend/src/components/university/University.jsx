import React from 'react'
import Slider from "react-slick";
import "./University.css"
const University = () => {
   
    var settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0,
        autoplay: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <>
    <div className='courses-container'>
      <div className="row">
        <div className="col-lg-4">
        <div className="container">
        <div className="course-table">
            <h2>Courses Offered</h2>
            <table>
                <thead>
                    <tr>
                        <th>Course Name</th>
                        <th>Seat</th>
                    </tr>
                    <tr>
                        <td>Computer Science Engineering</td>
                        <td>120</td>
                    </tr>
                    <tr>
                        <td>Electronics & Communication Engineering</td>
                        <td>120</td>
                    </tr>
                    <tr>
                        <td>Mechanical Engineering</td>
                        <td>120</td>                        
                    </tr>
                    <tr>
                        <td>Civil Engineering</td>
                        <td>120</td>                        
                    </tr>
                     <tr>
                        <td>Electrical Engineering</td>
                        <td>120</td>
                      </tr>
                </thead>
                
            
            </table>
            </div>
            </div>
        </div>
        <div className="col-lg-8">
    <div className="container">
      <Slider {...settings} className='uni-slide'>
        <div>
          <img src="assets/img/university1.jpg" alt="" />
          <h3>AICTE</h3>
          <p>Approved by All India Council for Technical Education</p>
        </div>
        <div>
        <img src="assets/img/university2.jpg" alt="" />
        <h3>ISTE</h3>
        <p>Member of Indian Society for Technical Education</p>
        </div>
        <div>
        <img src="assets/img/university3.jpeg" alt="" />
        <h3>IAO</h3>
        <p>Approved By International Accredation Organization</p>
        </div>
        <div>
        <img src="assets/img/university4.jpg" alt="" />
        <h3>BTU</h3>
        <p>Approved By Bikaner Technical University</p>
        </div>
        
        
      </Slider>
    </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default University