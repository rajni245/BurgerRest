import React from 'react'
import Custombackground from './Custombackground'
import Typesburger from "./Typesburger";
import Footer from './Footer';
import TypesBurgerFriesAll from './TypesBurgerFriesAll';
function Offer() {
  return (
    <>
    <div className='container-fluid text-center p-0'> 
    <Custombackground
    className="custombackground bg-danger p-0 rounded-0 text-white d-flex justify-content-center align-items-center"
    style={{ width: "100%", height: "50vh" }}
  >
    <div className="text-center">
      <h4 className="fs-3 fs-md-1">Check Out Our</h4>
      <h1 className="display-1 display-md-1 fw-bold">Offers</h1>
    </div>
  </Custombackground>
  <div className=" ">
          <Typesburger />
        </div>
        <div className=" ">
          <TypesBurgerFriesAll />
        </div>
       
  </div>
  <Footer />
  </>
  
  )
}

export default Offer