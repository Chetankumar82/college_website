import React from 'react'

const Slider = () => {
  return (
    <>
        <div className="rts-hero-slider v-1 rt-relative">
        <div className="rts-hero-slider-active swiper swiper-data" data-swiper='{
            "slidesPerView":1,
            "effect": "fade",
            "loop": true,
            "speed": 1000,
            "navigation":{
                "nextEl":".rt-next",
                "prevEl":".rt-prev"
            },
            "pagination":{
                "el": ".rts-swiper-dots",
                "clickable": "true"
            },
            "autoplay":{
                "delay":"7000"
            }
    }'>
            <div className="swiper-wrapper">
                
                <div className="swiper-slide">
                    <div className="rts-slider-height rts-slider-overlay rt-relative">
                        <div className="rts-slider-bg" data-background="assets/images/banner/01.jpg" style={{backgroundImage: "url('assets/images/banner/01.jpg')"}}></div>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-7 col-md-10">
                                    <div className="rts-slider rt-center">
                                        <div className="rts-slider-content">
                                            <div className="rts-university-icon">
                                                <img src="assets/images/banner/v-logo-1.png" alt="university-logo"/>
                                            </div>
                                            <div className="rts-university-estd">
                                                <span>Est - 2008</span>
                                            </div>
                                            <h1 className="rts-slider-title">
                                                Welcome to <span>Chartered</span>
                                                 Institute of Technology
                                            </h1>
                                            <p className="rts-slider-desc w-560">
                                            An initiative by Gyan Raman Charitable Trust
                                            </p>
                                            <div className="rts-slider-btn mt--50">
                                                <a href="academic.html" className="rts-theme-btn btn-arrow">View Our Program <span><i className="fa-thin fa-arrow-right"></i></span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
                <div className="swiper-slide">
                    <div className="rts-slider-height rts-slider-overlay rt-relative">
                        <div className="rts-slider-bg" data-background="assets/images/banner/02.jpg" style={{backgroundImage: "url('assets/images/banner/02.jpg')"}}></div>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-7 col-md-10">
                                    <div className="rts-slider rt-center">
                                        <div className="rts-slider-content">
                                            <div className="rts-university-icon">
                                                <img src="assets/images/banner/v-logo-1.png" alt="university-logo"/>
                                            </div>
                                            <div className="rts-university-estd">
                                                <span>Est - 2008</span>
                                            </div>
                                            <h1 className="rts-slider-title">
                                            Best BTU <span> Affiliated</span>
                                            Colleges in Rajasthan
                                            </h1>
                                            <p className="rts-slider-desc w-560">
                                            Excellence in technical and management education.
                                            </p>
                                            <div className="rts-slider-btn mt--50">
                                                <a href="academic.html" className="rts-theme-btn btn-arrow">View Our Program <span><i className="fa-thin fa-arrow-right"></i></span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="swiper-slide">
                    <div className="rts-slider-height rts-slider-overlay rt-relative">
                        <div className="rts-slider-bg" data-background="assets/images/banner/03.jpg" style={{backgroundImage: "url('assets/images/banner/03.jpg')"}}></div>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-7 col-md-10">
                                    <div className="rts-slider rt-center">
                                        <div className="rts-slider-content">
                                            <div className="rts-university-icon">
                                                <img src="assets/images/banner/v-logo-1.png" alt="university-logo"/>
                                            </div>
                                            <div className="rts-university-estd">
                                                <span>Est - 2008</span>
                                            </div>
                                            <h1 className="rts-slider-title">
                                                CIT Providing<span> excellent </span>
                                                 learning environment
                                            </h1>
                                            <p className="rts-slider-desc w-560">
                                            A globally recognized institute of excellence in the field of education.
                                            </p>
                                            <div className="rts-slider-btn mt--50">
                                                <a href="academic.html" className="rts-theme-btn btn-arrow">View Our Program <span><i className="fa-thin fa-arrow-right"></i></span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            

            <div className="rts-slider-arrow">
                <div className="rt-slider-btn rt-next">
                    <i className="fa-regular fa-arrow-left"></i>
                </div>
                <div className="rt-slider-btn rt-prev">
                    <i className="fa-regular fa-arrow-right"></i>
                </div>
            </div>
            <div className="rts-swiper-dots"></div>
        </div>
    </div>
    </>
  )
}

export default Slider;