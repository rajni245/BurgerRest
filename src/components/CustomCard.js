import React from 'react'

function CustomCard(props) {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-12 mx-0">
    <div className="card p-0 overflow-hidden h-70 w-70 border-0 custom-card">
      <img src={props.img} className="card-img-top img-fluid" alt={props.title} />
      <div className="card-body">
        <h5 className="card-title fw-bold">{props.title}</h5>
        <p className="card-text">{props.discription}</p>
        <div className="plus d-flex justify-content-center">
         
        </div>
      </div>
    </div>
  </div>
  )
}

export default CustomCard