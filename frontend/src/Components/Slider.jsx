import React from 'react'

const Slider = () => {
  return (
    <>


<div id="carousel-example-generic" class="carousel slide" data-ride="carousel" data-interval="3000">
   
    <ol class="carousel-indicators">
        <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
        <li data-target="#carousel-example-generic" data-slide-to="1"></li>
        <li data-target="#carousel-example-generic" data-slide-to="2"></li>
    </ol>

  
    <div class="carousel-inner">
        <div class="item active">
            <img src="assets/img/slide1.png" alt="First slide" />
            <div class="carousel-caption">
                
            </div>
        </div>
        <div class="item">
            <img src="assets/img/slide2.png" alt="Second slide" />
            <div class="carousel-caption">
            </div>
        </div>
        <div class="item">
            <img src="assets/img/slide3.png" alt="Third slide" />
            <div class="carousel-caption">
                
            </div>
        </div>
    </div>

</div>
<div class="slider-content">
    <h1>Welcome To CIT</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel ipsum id velit dignissim efficitur. Nulla facilisi. Nulla facilisi.</p>
</div>


    </>
  )
}

export default Slider;