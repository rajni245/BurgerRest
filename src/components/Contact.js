import React, { useEffect, useState } from "react";

import Custombackground from "./Custombackground";
import Button from "./CustomButton";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom"; // Import NavLink from react-router-dom
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"; // Import icons from react-icons
import Googlemap from "./Gmapcomponent";
import Gmapcomponent from "./Gmapcomponent";
import ItemCard from "./ItemCard";
import Cart from "./Cart";
function Contact() {
  const navigate = useNavigate();
  const redirecttolocation = () => {
    navigate("/Gmapcomponent");
  };

  const [formInputsdata, setFormInputsdata] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    console.log("Flag is true, form submitted.");
  }, [flag]);

  const handleData = (e) => {
    setFormInputsdata({
      ...formInputsdata,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formInputsdata.firstName ||
      !formInputsdata.lastName ||
      !formInputsdata.email ||
      !formInputsdata.message
    ) {
      alert("All fields are mandatory");
      return;
    } else {
      setFlag(true);
    }

    console.log("Form Data Submitted:", formInputsdata);
  };

  return (
    <>
      <div className="container-fluid text-center p-0">
        <Custombackground
          className="custombackground bg-danger p-0 rounded-0 text-white d-flex justify-content-center align-items-center"
          style={{ width: "100%", height: "50vh" }}
        >
          <div className="text-center">
            <h4 className="fs-3 fs-md-1">Get in touch</h4>
            <h1 className="display-1 display-md-1 fw-bold">Contact</h1>
          </div>
        </Custombackground>

        <section className="contact-info custom-bg-secondary">
          <div className="container pt-3">
            <div className="row justify-content-center g-1">
              <div className="col-12 col-md-6 col-lg-6">
                <div className="row mb-3 mt-5 ">
                  <h1 className="fw-bold col-12">Contact info</h1>
                  <div className="fw-bold text-danger col-12">6204108817</div>
                  <div className="fw-bold text-danger col-12">
                    jrajni579@gmail.com
                  </div>
                  <div className="fw-bold text-danger col-12">
                    Gurugram, India
                  </div>
                </div>

                <div className="row mt-4">
                  <h5 className="fw-bold col-12">Opening hours</h5>
                  <div className="fw-bold text-black col-12">
                    Monday-Friday: 8:00-22:00
                  </div>
                  <div className="fw-bold text-black col-12">
                    Saturday-Sunday: 10:00-23:00
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-6 text-center">
                {flag && (
                  <h2 className="text-success mb-4">
                    Hello {formInputsdata.firstName}, your message is submitted
                    successfully!
                  </h2>
                )}

                <form className="container" onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      placeholder="Enter your first name"
                      value={formInputsdata.firstName}
                      onChange={handleData}
                      className="form-control"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      placeholder="Enter your last name"
                      value={formInputsdata.lastName}
                      onChange={handleData}
                      className="form-control"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter your email"
                      value={formInputsdata.email}
                      onChange={handleData}
                      className="form-control"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Enter your message"
                      value={formInputsdata.message}
                      onChange={handleData}
                      className="form-control"
                      rows="6"
                    ></textarea>
                  </div>

                  <div>
                    <Button
                      className="bg-danger mt-2 custom-hover"
                      style={{
                        background: "black",
                        color: "white",
                        borderRadius: "50px",
                        fontWeight: "bold",
                        padding: "10px 20px",
                        border: "none",
                        margin: "12px",
                        type: "submit",
                      }}
                    >
                      Send
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="our-outletnear bg-light  ">
          <div className="outletnear">
            <section className="our-outletnear bg-light  ">
              <div className="">
                <div className="container text-center pt-3">
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
                      <img
                        src="restu.jpg"
                        alt="restaurant-outlet1"
                        className="img-fluid rounded"
                      />
                      <div className="mt-3">
                        <i
                          className="fas fa-map-marker-alt text-warning"
                          onClick={redirecttolocation}
                        ></i>
                        <div className="text-blac fw-bold ">
                          762 Filtan St San Francisco, California (CA), 94102
                        </div>
                      </div>
                      <h6 className="text-danger fw-bold">(415) 834-5089</h6>
                    </div>

                    <div className=" rounded col-12 col-md-4 col-lg-3 text-center">
                      <img
                        src="rest1.jpg"
                        alt="restaurant-outlet1"
                        className="img-fluid rounded"
                      />
                      <div className="mt-3">
                        <i
                          className="fas fa-map-marker-alt text-warning"
                          onClick={redirecttolocation}
                        ></i>
                        <div className="text-blac fw-bold ">
                          762 Filtan St San Francisco, California (CA), 94102
                        </div>
                      </div>
                      <h6 className="text-danger fw-bold">(415) 834-5089</h6>
                    </div>

                    <div className="col-12 col-md-4 col-lg-3 text-center">
                      <img
                        src="restu1.jpg"
                        alt="restaurant-outlet1"
                        className="img-fluid rounded"
                      />
                      <div className="mt-3">
                        <i
                          className="fas fa-map-marker-alt text-warning"
                          onClick={redirecttolocation}
                        ></i>
                        <div className="text-blac fw-bold ">
                          762 Filtan St San Francisco, California (CA), 94102
                        </div>
                      </div>
                      <h6 className="text-danger fw-bold">(415) 834-5089</h6>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
        <section className="googole-map">
          <Gmapcomponent />
        </section>
       
      </div>
      <section className="footer">
          <div>
            <Navbar className="bg-black fixed" variant="dark" expand="lg">
              <Container>
                <Navbar.Collapse
                  id="basic-navbar-nav"
                  className="d-flex justify-content-between  text-sm-star"
                >
                  <Nav className="mx-auto text-sm-start">
                    <NavLink to="/Homee" className="nav-link text-danger">
                      HOME
                    </NavLink>
                    <NavLink to="/Ourmenu" className="nav-link text-danger">
                      OUR MENU
                    </NavLink>
                    <NavLink to="/Offer" className="nav-link text-danger">
                      OFFERS
                    </NavLink>
                    <NavLink to="/about" className="nav-link text-danger">
                      ABOUT
                    </NavLink>
                    <NavLink to="/franchisee" className="nav-link text-danger">
                      FRANCHISEE
                    </NavLink>
                    <NavLink to="/contact" className="nav-link text-danger">
                      CONTACT
                    </NavLink>
                  </Nav>

                  <div className="social-icons">
                    <a
                      href="https://www.facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-warning me-3"
                    >
                      <FaFacebook size={30} />
                    </a>
                    <a
                      href="https://www.twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-warning me-3"
                    >
                      <FaTwitter size={30} />
                    </a>
                    <a
                      href="https://www.instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-warning"
                    >
                      <FaInstagram size={30} />
                    </a>
                  </div>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
          {/* <Cart/> */}
          {/* <ItemCard
            burgerImage="https://via.placeholder.com/150"
            burgerName="Deluxe Burger"
            burgerPrice={10.99}
          /> */}
        </section>
    </>
  );
}

export default Contact;
