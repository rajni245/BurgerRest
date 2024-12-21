import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom"; // Import NavLink from react-router-dom
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"; // Import icons from react-icons

function Footer() {
  return (
    <>
      <div className="container-fluid" style={{ backgroundColor: "#EF5359" }}>
        {/* Container for the menu and image */}
        <div className="container p-3 position-relative">
          <div className="row mt-5 text-center text-lg-left">
            {/* Column for logo, discount text, and app store images */}
            <div className="col-12 col-lg-6">
              {/* Logo */}
              <img
                className="position-lg-absolute start-lg-0 mb-3"
                src="Burger-King-Logo.png"
                alt="Logo"
                style={{
                  height: "39px",
                  width: "59px",
                  background: "transparent",
                }}
              />

              {/* Discount text */}
              <h2 className="text-white">Get 20% Discount</h2>
              <p className="text-white">
                Get flat 20% off on your first order through
                <br /> The Burger Nation App
              </p>

              {/* App store images */}
              <div className="d-inline-block">
                <img
                  src="gp.png"
                  alt="Google Play Store"
                  className="img-fluid me-2 d-inline-block"
                  style={{ width: "100px" }}
                />
                <img
                  src="ap.png"
                  alt="Apple App Store"
                  className="img-fluid d-inline-block"
                  style={{ width: "130px" }}
                />
              </div>
            </div>

            {/* Column for the mobile phone and additional image */}
            <div className="d-none d-lg-block col-12 col-lg-6 text-lg-left position-relative">
              <img
                className="position-lg-absolute end-lg-0"
                src="mobilesnippet.png"
                alt="Promotional Image"
                style={{
                  height: "90%",
                  width: "100%",
                  background: "transparent",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Navbar with the social media icons */}
      <Navbar className="bg-black fixed" variant="dark" expand="lg">
        <Container>
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="d-flex justify-content-between align-items-center"
          >
            <Nav className="mx-auto text-sm-start">
              <NavLink to="/Homee" className="nav-link">
                HOME
              </NavLink>
              <NavLink to="/Ourmenu" className="nav-link">
                OUR MENU
              </NavLink>
              <NavLink to="/Offer" className="nav-link">
                OFFERS
              </NavLink>
              <NavLink to="/about" className="nav-link">
                ABOUT
              </NavLink>
              <NavLink to="/franchisee" className="nav-link">
                FRANCHISEE
              </NavLink>
              <NavLink to="/contact" className="nav-link">
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
    </>
  );
}

export default Footer;
