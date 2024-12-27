import React from "react";
import "./Testimonial.css";
import Arman from "./../../assets/images/testi2.jpg";
import Vishal from "./../../assets/images/testi1.jpg";
import Deepak from "./../../assets/images/usericon.png";
import Manali from "./../../assets/images/manali.png";
import jhalak from "./../../assets/images/jhalak.png";
import ruchir from "./../../assets/images/ruchir.png";
import Slider from "react-slick";

const Testimonial = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
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
  }
  return (
    <>
    <div className="cta-newsletter-wrapper blue-bg">
      <h1 className="text-center text-5xl text-white mb-2 test">Testim<span className="text-yellow-400">onial</span></h1>
      <p className="text-center text-white mb-4">What Alumini say about us</p>
   
    <div className="container-lg mx-auto">
  <Slider {...settings}>
    <div className="testimonal">
      <div className="slide-content">
        <div className="testimonial-img">
          <img src={Arman} alt="Arman" />
        </div>
        <div className="testimonial-text">
          <h3>Arman</h3>
          <p>
            Collage has given me the confidence, inspired me to think differently. It's like no
            other time in your life. 
          </p>
        </div>
      </div>
      <div className="star-circle"></div>
    </div>

    <div className="testimonal">
      <div className="slide-content">
        <div className="testimonial-img">
          <img src={Vishal} alt="Vishal" />
        </div>
        <div className="testimonial-text">
          <h3>Vishal</h3>

          <p>
            The thing I admire the most is the support from everyone at every step. My teachers
            really helped me a lot in brightening my future.
          </p>
        </div>
      </div>
      <div className="star-circle"></div>
    </div>

    <div className="testimonal">
      <div className="slide-content">
        <div className="testimonial-img">
          <img src={ruchir} alt="Ruchir" />
        </div>
        <div className="testimonial-text">
          <h3>Ruchir</h3>
          <p>
            It is an immensely satisfying experience in many ways. The excellent location on the
            foothills of Mount Abu, the efficient organization.
          </p>
        </div>
      </div>
      <div className="star-circle"></div>
    </div>

    <div className="testimonal">
      <div className="slide-content">
        <div className="testimonial-img">
          <img src={Manali} alt="Manali" />
        </div>
        <div className="testimonial-text">
          <h3>Manali</h3>
          <p>
            I am happy to be a product of esteemed institution CIT. The college provides
            academically 360-degree development of students.
          </p>
        </div>
      </div>
      <div className="star-circle"></div>
    </div>

    <div className="testimonal">
      <div className="slide-content">
        <div className="testimonial-img">
          <img src={jhalak} alt="Jhalak" />
        </div>
        <div className="testimonial-text">
          <h3>Jhalak</h3>
          
          <p>
            College life, my friends, and teachers are all very good. The campus is very safe, and
            the positive atmosphere is also available.
          </p>
        </div>
      </div>
      <div className="star-circle"></div>
    </div>
  </Slider>
</div>
 </div>
</>
  );
};

export default Testimonial;
