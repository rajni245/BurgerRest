import React from "react";
import Custombackground from "./Custombackground";
import Button from "./CustomButton";
import Customabout from "./Customabout";
import Footer from "./Footer";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom"; // Import NavLink from react-router-dom
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"; // Import icons from react-icons

import { TbExternalLink, TbTextSize } from "react-icons/tb";
function Franchisee() {
  const playStoreUrl =
    "https://play.google.com/store/apps/details?id=com.example.app";
  return (
    <div>
      <Custombackground
        className="custombackground bg-danger p-0 rounded-0 text-white d-flex justify-content-center align-items-center"
        style={{ width: "100%", height: "50vh" }}
      >
        <div className="text-center">
          <h4 className="fs-3 fs-md-1 fw-bold">Operate a</h4>
          <h1 className="display-1 display-md-1 fw-bold">Franchisee</h1>
        </div>
      </Custombackground>

      <section
        className="  howstarted d-flex flex-column justify-content-center align-items-center text-center p-5"
        style={{ minHeight: "50vh", backgroundColor: "lightgrey" }} // Ensures the section takes at least 50% of the viewport height
      >
        <h1 className="text-center fw-bold display-3 display-md-1">
          How to get started
        </h1>
        <h6 className="text-center fw-bold fs-6 fs-md-5 px-3">
          Lorem ipsum is a nonsensical Latin text used to demonstrate the visual
          form of a document or a typeface. It is derived from a 1st-century BC
          text by Cicero and has been popularized by graphic.
        </h6>

        <div className="container pt-3 ">
          <div className="row justify-content-center g-1">
            <div className="col-12 col-md-6 col-lg-6 text-center">
              <img
                src="rest2.jpg"
                alt="restaurant-outletimage1"
                className="img-fluid rounded"
                style={{ minHeight: "50vh", minWidth: "" }}
              />
              <div className="d-flex justify-content-center   ">
                <a
                  href={playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    className=" bg-danger mt-2"
                    style={{
                      background: "white",
                      color: "black",
                      borderRadius: "50px",
                      fontWeight: "bold",
                      padding: "10px 20px",
                      border: "none",
                      margin: "12px",
                      TextSize: "small",
                    }}
                  >
                    OUR RESTURANTS
                  </Button>
                </a>
              </div>
            </div>
 
            <div className="col-12 col-md-6 col-lg-6 text-center">
              <img
                src="rest3.jpg"
                alt="restaurant-outletimage2"
                className="img-fluid rounded"
                style={{ minHeight: "50vh", minWidth: "" }}
              />
              <div className="d-flex justify-content-center   ">
                <a
                  href={playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    className=" bg-danger mt-2"
                    style={{
                      background: "white",
                      color: "black",
                      borderRadius: "50px",
                      fontWeight: "bold",
                      padding: "10px 20px",
                      border: "none",
                      margin: "12px",
                      TextSize: "small",
                    }}
                  >
                    INVESTMENT
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className=" position-relative overflow-hidden">
        <div className="position-relative">
          <img
            src="Burgerover.jpg"
            className="img-fluid"
            alt="Cover"
            style={{ width: "100vw", height: "100vh", objectFit: "cover" }}
          />

          <div className=" p-4 d-flex flex-column align-items-center justify-content-center position-absolute top-0 start-50 translate-middle-x text-white w-100 h-100">
            <div
              className="d-flex"
              style={{ height: "70px", width: "1px", background: "white" }} // Reduced height
            ></div>

            <div className="text-center ">
              <h6 className="mt-5"> A LITTLE ABOUT US</h6>
              <h1 className="fw-bold">
                We're passionate about <br /> our food
              </h1>
              <p className="fw-bold p-5">
                Lorem ipsum is a nonsensical Latin text used to demonstrate the
                visual form of a document or a typeface the visual form of a
                document or a typeface the visual form of a document or a
                typeface
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="container pt-5">
        <div class="row justify-content-center g-4">
          <div class="col-12 col-md-4 col-lg-3 text-center">
            <div className="text-center">
              <img
                src="rest2.jpg"
                alt="Your Alt Text"
                className="img-fluid mb-3"
              />
              <h2 class=" fw-bold mt-3 text-nowrap">Why choose<br/> Burger  Nation?</h2>
              <p>
              
                Lorem ipsum is a nonsensical Latin text used to demonstrate the
                visual form of a document or a typeface{" "}
              </p>
              <div className="d-flex justify-content-center">
                <a
                  href={playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    className="mt-2"
                    style={{
                      background: "red",
                      color: "white",
                      borderRadius: "50px",
                      fontWeight: "bold",
                      padding: "10px 20px",
                      border: "none",
                      margin: "12px",
                    }}
                  >
                    LEARN MORE
                  </Button>
                </a>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-4 col-lg-3 text-center">
            <div className="text-center">
              <img
                src="rest2.jpg"
                alt="Your Alt Text"
                className="img-fluid mb-3"
              />
              <h2 class=" mt-3 fw-bold">Acquiring a franchise</h2>
              <p>
            
                Lorem ipsum is a nonsensical Latin text used to demonstrate the
                visual form of a document or a typeface{" "}
              </p>
              <div className="d-flex justify-content-center">
                <a
                  href={playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    className="mt-2"
                    style={{
                      background: "red",
                      color: "white",
                      borderRadius: "50px",
                      fontWeight: "bold",
                      padding: "10px 20px",
                      border: "none",
                      margin: "12px",
                    }}
                  >
                    LEARN MORE
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* <div class="col-12 col-md-4 col-lg-3 text-center">
            <div className="text-center">
              <img
                src="rest2.jpg"
                alt="Your Alt Text"
                className="img-fluid mb-3"
              />
  <h2 class=" fw-bold mt-3">Franchising FAQ's</h2>
              <p className="text-wrap">
            
                Lorem ipsum is a nonsensical Latin text used to demonstrate the
                visual form of a document or a typeface{" "}
              </p>
              <div className="d-flex justify-content-center">
                <a
                  href={playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    className="mt-2"
                    style={{
                      background: "red",
                      color: "white",
                      borderRadius: "50px",
                      fontWeight: "bold",
                      padding: "10px 20px",
                      border: "none",
                      margin: "12px",
                    }}
                  >
                    LEARN MORE
                  </Button>
                </a>
              </div>
            </div>
          </div> */}
          <div class="col-12 col-md-4 col-lg-3 text-center">
            <div className="text-center">
              <img
                src="rest2.jpg"
                alt="Your Alt Text"
                className="img-fluid mb-3"
              />
              <h2 class=" mt-3 fw-bold">Franchising<br/>FAQ's</h2>
              <p>
            
                Lorem ipsum is a nonsensical Latin text used to demonstrate the
                visual form of a document or a typeface{" "}
              </p>
              <div className="d-flex justify-content-center">
                <a
                  href={playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    className="mt-2"
                    style={{
                      background: "red",
                      color: "white",
                      borderRadius: "50px",
                      fontWeight: "bold",
                      padding: "10px 20px",
                      border: "none",
                      margin: "12px",
                    }}
                  >
                    LEARN MORE
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Customabout className="">
        <h1 className="display-2 fw-bold pt-5"> A little about us</h1>
      </Customabout>

      <div>
       
        <Navbar className="bg-black fixed" variant="dark" expand="lg">
          <Container>
            <Navbar.Collapse
              id="basic-navbar-nav"
              className="d-flex justify-content-between align-items-center"
            >
              <Nav className="mx-auto">
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

              {/* Social media icons */}
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
    </div>
  );
}

export default Franchisee;
