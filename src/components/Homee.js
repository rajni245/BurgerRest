import React, { Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "./CustomButton";
import Discountbutton from "./Discountbutton";
import { useNavigate } from "react-router-dom";
import BurgerTypesdata from "../BurgerTypesdata";
import SnacksAndSweetsTypesdata from "../SnacksAndSweetsTypesdata";
import Customerreviewdata from "../Customerreviewdata";

// Lazy load components
const Typesburger = React.lazy(() => import("./Typesburger"));
const Footer = React.lazy(() => import("./Footer"));
const Customburgercard = React.lazy(() => import("./Customburgercard"));
const Ourmenu = React.lazy(() => import("./Ourmenu"));
const Burgerdetailscomponents = React.lazy(() => import("./Burgerdetailscomponents"));
const Testimonial = React.lazy(() => import("./Testimonial"));

const Homee = (props) => {
  const navigate = useNavigate();

  const buttonredirect = () => {
    navigate('/Ourmenu');
  };

  const redirecttolocation = () => {
    navigate('/Gmapcomponent');
  };

  return (
    <>
      <div className="bg-danger position-relative overflow-hidden">
        <div className="position-relative">
          <img
            src="bgcover.png"
            className="img-fluid"
            alt="Cover"
            style={{ width: "100vw", height: "100vh", objectFit: "cover" }}
          />
          <div className="mt-5 text-overlay position-absolute top-0 start-30 bottom-100 translate-middle-y d-flex flex-column align-items-start text-white">
            <div className="p-2 fs-3 fw-bold">Only $12.99</div>
            <div className="p-2 fw-bold thesmokin">
              The <br />
              Smokin <br />
              Burger
            </div>

            <div className="d-flex flex-row mt-2 position-relative">
              <Discountbutton className="discount mt-2 bg-warning p-4 fw-bold rounded-circle d-flex flex-column align-items-center justify-content-center text-white">
                <div>20%<br />DISCOUNT</div>
              </Discountbutton>
              <div className="onyourfirst fw-bold p-2 fs-5 text-center">
                On your first <br /> order, if you order <br /> online through
                <br /> our App!
              </div>
            </div>
            <div className="d-flex justify-content-center ms-5">
              <a href={""} target="_blank" rel="noopener noreferrer">
                <Button
                  onClick={buttonredirect}
                  className="bg-danger mt-5 custom-hover"
                  style={{
                    background: "#fff",
                    color: "black",
                    borderRadius: "50px",
                    fontWeight: "bold",
                    padding: "10px 20px",
                    border: "none",
                    marginTop: "40px",
                  }}
                >
                  ORDER ONLINE
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <div className="types-burger">
          <Typesburger />
        </div>

        <div className="Burmenudetails">
          <Burgerdetailscomponents />
        </div>

        <div className="burgermenu">
          <div className="container-fluid text-center p-0">
            <p className="fs-4 fs-md-2 mt-5 text-warning">OUR MENU</p>
            <h1 className="display-1 display-md-3 fw-bold">Choose & Enjoy</h1>
            <div className="container p-0">
              <div className="row justify-content-center g-0">
                {BurgerTypesdata.productData.map((item, index) => (
                  <div
                    key={index}
                    className="col-12 col-sm-6 col-md-4 col-lg-4 d-flex justify-content-center"
                  >
                    <Customburgercard
                      img={item.img}
                      title={item.title}
                      price={item.price}
                      discription={item.discription}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="customer review">
          <div className="container-fluid text-center mt-2 p-0">
            <h5 className="fw-bold text-secondary">TESTIMONIALS</h5>
            <h1 className="fw-bold display-3 px-3">Our Customer Reviews</h1>
            <div className="container px-0 mt-5">
              <div className="row g-0">
                {Customerreviewdata.customerreview.map((item) => (
                  <div
                    key={item.id}
                    className="col-12 col-sm-6 col-md-6 d-flex justify-content-center"
                  >
                    <Testimonial
                      image={item.image}
                      name={item.name}
                      description={item.description}
                      reviewno={item.reviewno}
                      timing={item.timing}
                      rating={item.rating}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="outletnear">
          <section className="our-outletnear bg-light">
            <div className="container text-center pt-3">
              <h5 className="fw-bold text-black">OUR OUTLETS</h5>
              <h1 className="fw-bold display-2">Find an outlet near you</h1>
            </div>
            <div className="container">
              <div className="row justify-content-center g-4">
                <div className="col-12 col-md-4 col-lg-3 text-center">
                  <img src="restu.jpg" alt="restaurant-outlet1" className="img-fluid rounded" />
                  <div className="mt-3">
                    <i className="fas fa-map-marker-alt text-warning" onClick={redirecttolocation}></i>
                    <div className="text-black fw-bold">762 Filtan St San Francisco, California (CA), 94102</div>
                  </div>
                  <h6 className="text-danger fw-bold">(415) 834-5089</h6>
                </div>
              </div>
            </div>
          </section>
        </div>

        <Footer />
      </Suspense>
    </>
  );
};

export default Homee;
