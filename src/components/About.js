import React from "react";
import Custombackground from "./Custombackground";
import Footer from "./Footer";
import Customabout from "./Customabout";
import Button from "./CustomButton";
import Discountbutton from "./CustomButton";
import { useNavigate } from "react-router-dom";
import Gmapcomponent from "./Gmapcomponent";
function About() {
  const navigate=useNavigate();
const redirecttolocation=()=>
{
navigate('/Gmapcomponent')
}
  const playStoreUrl =
    "https://play.google.com/store/apps/details?id=com.example.app"; // Replace with your app's Play Store URL
  return (
    <div className="">
      <div className="container-fluid text-center p-0">
        <Custombackground
          className="custombackground bg-danger p-0 rounded-0 text-white d-flex justify-content-center align-items-center"
          style={{ width: "100%", height: "50vh" }}
        >
          <div className="text-center">
            <h4 className="fs-3 fs-md-1">A few words</h4>
            <h1 className="display-1 display-md-1 fw-bold">About Us</h1>
          </div>
        </Custombackground>
       
        <div className="">
  <div className="position-relative">
    <img
      src="burgercover.jpg"
      className="img-fluid"
      alt="Cover"
      style={{ width: "100vw", height: "100vh", objectFit: "cover", margin: 0, padding: 0 }}
    />
   
    <div className=" text-overlay position-absolute top-50 start-50 translate-middle d-flex flex-column align-items-center text-white">
      <div
        className="d-flex"
        style={{ height: "80px", width: "1px", background: "grey" }}
      ></div>

      <div className="text-center">
        <h1 className="fw-bold">
          We're passionate about <br /> our food
        </h1>
        <p className="fw-bold">
          Lorem ipsum is a nonsensical Latin text used to demonstrate
          the visual form of a document or a typeface
        </p>
        <p>
          Lorem re magna veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </p>
      </div>
    </div>
  </div>


<section className="food-delivery">
  <div className="container-fluid bg-warning">
    <div className="position-relative mx-5">
      <span className="ms-5 bg-white rounded-circle p-4 position-absolute top-0 start-0 translate-middle">
        <i className="fas fa-truck text-danger"></i>
      </span>

      <span className="bg-white ms-3 p-4 rounded-circle position-absolute top-0 start-50 translate-middle text-center">
        <i className="fas fa-utensils text-danger me-2"></i>
      </span>

      <span className="bg-white rounded-circle p-4 position-absolute top-0 start-100 translate-middle text-center">
        <i className="fas fa-clock text-danger"></i>
      </span>
    </div>

    <div className="container p-5">
      <div className="row fw-bold">
        <div className="col-sm">
          <h2 className="text-center text-white">
            First Shipping on <br /> First Order
          </h2>
          <p className="text-center text-white">
            Lorem ipsum is a y BC text by Cicero and has been popularized
            by graphic
          </p>
        </div>
        <div className="col-sm">
          <h2 className="text-center text-white">
            Variety of
            <br /> Dishes
          </h2>
          <p className="text-center text-white">
            Lorem ipsum is a y BC text by Cicero and has been popularized
            by graphic
          </p>
        </div>
        <div className="col-sm">
          <h2 className="text-center text-white">
            Thirty Minutes
            <br /> Delivery
          </h2>
          <p className="text-center text-white">
            Lorem ipsum is a y BC text by Cicero and has been popularized
            by graphic
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


      <Customabout className=" ">
        <h5 className="text-danger pt-5">History</h5>
        <h1 className="display-2 fw-bold">
          Our journey starts way <br />
          back in 1975
        </h1>
      </Customabout>

       {/* <section className="outlet  bg-white">
      <div className="container-fluid   text-center ">
        <h5 className="fw-bold text-black">OUR OUTLETS</h5>
        <h1 className="fw-bold display-2">Find an outlet near you</h1>
      </div>
      <div className="d-flex justify-content-center">
      <div class="d-flex" style={{height: "70px"}}>
  <div class="vr"></div>
</div>
  </div>
  <div class="">
  <div class="row justify-content-center g-4">
    <div class="col-12 c col-md-4 col-lg-3 text-center">
      <img src="rest1.jpg" alt="restaurant-outlet1" class="img-fluid"></img>
      <div class="mt-3 text-center">
        <i class="fas fa-map-marker-alt " style={{color: "yellow"}}></i> 
        <span style={{color:"yellow;"}}></span>
      </div>
      <h4 className="text-center">762 Filtan St San Francisco,Califrnia<br/>(CA),94102</h4>
      <h6 className="text-center text-danger">(415)834-5089</h6>
    </div>
    <div class="col-12 col-md-4 col-lg-3 text-center">
      <img src="rest1.jpg" alt="restaurant-outlet2" class="img-fluid"></img>
      <div class="mt-3 text-center">
        <i class="fas fa-map-marker-alt " style={{color: "yellow"}}></i> 
        <span style={{color:"yellow;"}}></span>
      </div>
      <h4 className="text-center">762 Filtan St San Francisco,Califrnia<br/>(CA),94102</h4>
      <h6 className="text-center text-danger">(415)834-5089</h6>
    </div>
    <div class="col-12 col-md-4 col-lg-3 text-center">
      <img src="rest1.jpg" alt="restaurant-outlet3" class="img-fluid"></img>
      <div class="mt-3 text-center">
        <i class="fas fa-map-marker-alt "  style={{color: "yellow"}}></i> 
        <span style={{color:"yellow;"}}></span>
      </div>
      <h4 className="text-center">762 Filtan St San Francisco,Califrnia<br/>(CA),94102</h4>
      <h6 className="text-center text-danger">(415)834-5089</h6>
    </div>
  </div>
</div>



      </section>  */}
      <section className="outlet bg-white">
  <div className="container text-center">
    <h5 className="fw-bold text-black">OUR OUTLETS</h5>
    <h1 className="fw-bold display-2">Find an outlet near you</h1>
  </div>
  
  <div className="d-flex justify-content-center my-3">
    <div className="d-flex" style={{ height: "70px" }}>
      <div className="vr"></div>
    </div>
  </div>
  
  <div className="container">
    <div className="row justify-content-center g-4">
      <div className="col-12 col-md-4 col-lg-3 text-center">
        <img src="restu.jpg" alt="restaurant-outlet1" className="img-fluid rounded" />
        <div className="mt-3">
          <i className="fas fa-map-marker-alt text-warning" onClick={redirecttolocation}></i>
          <div className="text-blac fw-bold ">762 Filtan St San Francisco, California (CA), 94102</div>
        </div>
        <h6 className="text-danger fw-bold">(415) 834-5089</h6>
      </div>

      <div className=" rounded col-12 col-md-4 col-lg-3 text-center">
        <img src="rest1.jpg" alt="restaurant-outlet1" className="img-fluid rounded" />
        <div className="mt-3">
          <i className="fas fa-map-marker-alt text-warning" onClick={redirecttolocation} ></i>
          <div className="text-blac fw-bold ">762 Filtan St San Francisco, California (CA), 94102</div>
        </div>
        <h6 className="text-danger fw-bold">(415) 834-5089</h6>
      </div>

      <div className="col-12 col-md-4 col-lg-3 text-center">
        <img src="restu1.jpg" alt="restaurant-outlet1" className="img-fluid rounded" />
        <div className="mt-3">
          <i className="fas fa-map-marker-alt text-warning" onClick={redirecttolocation}></i>
          <div className="text-blac fw-bold ">762 Filtan St San Francisco, California (CA), 94102</div>
        </div>
        <h6 className="text-danger fw-bold">(415) 834-5089</h6>
      </div>
    </div>
  </div>
</section>

    </div>
    </div>
    
    <div className="mt-5"> <Footer /></div>
    </div>
  );
}

export default About;
