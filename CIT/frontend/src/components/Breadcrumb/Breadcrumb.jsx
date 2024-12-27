import React from 'react'
import "./Breadcrumb.css"
import shap1 from "../../assets/breadcrumb/shape-1.png"
import shap2 from "../../assets/breadcrumb/shape-2.png"
import shap3 from "../../assets/breadcrumb/shape-3.png"
import dot from "../../assets/breadcrumb/dot-shape.png"
import vector from "../../assets/breadcrumb/Vector.png"
const Breadcrumb = ({Home, PageName , id}) => {
  return (
    <section class="breadcrumb-wrapper courses-page-banner">
            <div class="shape-1">
                <img src={shap1} alt="img"/>
            </div>
            <div class="shape-2">
                <img src={shap2} alt="img"/>
            </div>
            <div class="shape-3">
                <img src={shap3} alt="img"/>
            </div>
            <div class="dot-shape">
                <img src={dot} alt="img"/>
            </div>
            <div class="vector-shape">
                <img src={vector} alt="img"/>
            </div>
            <div class="container">
                <div class="row">
                    <div class="page-heading">
                        <h1>{PageName}</h1>
                        <ul class="breadcrumb-items">
                            <li><a href="/">{Home} /</a></li>
                            <li><a href="/studentclub">{id} </a></li>
                            <li class="style-2">{PageName}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Breadcrumb