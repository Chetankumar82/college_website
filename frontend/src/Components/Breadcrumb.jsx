import React from 'react'

const Breadcrumb = ({Home , Pages}) => {
  return (
    <section className="rts-breadcrumb breadcrumb-height breadcumb-bg" style={{backgroundImage: "url(assets/images/banner/breadcrumb.jpg)"}}>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="breadcrumb-content">
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item"><a href="index.html">{Home}</a></li>
                            <li className="breadcrumb-item active" aria-current="page">{Pages}</li>
                        </ul>
                        <h2 className="section-title">{Pages}</h2>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Breadcrumb