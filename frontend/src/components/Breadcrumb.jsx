import React from 'react'


const Breadcrumb = ({Home, PageName}) => {
  return (
    <section class="breadcrumb-wrapper">
        <div class="shape-1">
            <img src="assets/img/breadcrumb/shape-1.png" alt="img"/>
        </div>
        <div class="shape-2">
            <img src="assets/img/breadcrumb/shape-2.png" alt="img"/>
        </div>
        <div class="shape-3">
            <img src="assets/img/breadcrumb/shape-3.png" alt="img"/>
        </div>
        <div class="dot-shape">
            <img src="assets/img/breadcrumb/dot-shape.png" alt="img"/>
        </div>
        <div class="vector-shape">
            <img src="assets/img/breadcrumb/Vector.png" alt="img"/>
        </div>
        <div class="container">
            <div class="row">
                <div class="page-heading">
                    <h1>{PageName}</h1>
                    <ul class="breadcrumb-items">
                        <li><a href="index.html">{Home}</a></li>
                        <li class="style-2">{PageName}</li>
                    </ul>
                    <div class="breadcrumb-image">
                        <img src="assets/img/breadcrumb/breadcrumb.jpg" alt="img"/>
                    </div>
                </div>
            </div>
        </div>
        </section>
  )
}

export default Breadcrumb