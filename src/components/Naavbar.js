import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { BsCart } from 'react-icons/bs'; // Importing Bootstrap cart icon
import Cart from './Cart'; // Import your Cart component

const Naavbar = () => {
  const [cartVisible, setCartVisible] = useState(false); // State to handle cart visibility
  const playStoreUrl = 'https://play.google.com/store/apps/details?id=com.example.app';

  const toggleCart = () => {
    setCartVisible(!cartVisible); // Toggle cart visibility on click
  };

  return (
    <>
      <Navbar className='bg-danger fixed' variant="dark" expand="lg">
        <Container className='m-0'>
          <Navbar.Brand href="#home">
            <img src='Burger-King-Logo.png' alt='Logo' style={{ height: '39px', width:'59px' }} />
          </Navbar.Brand>
          <Navbar.Brand href="#home">BURGER NATION</Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" className='' />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="w-100 text-start text-lg-center">
              <NavLink to="/Homee" className="nav-link">HOME</NavLink>
              <NavLink to="/Ourmenu" className="nav-link">OUR MENU</NavLink>
              <NavLink to="/Offer" className="nav-link">OFFERS</NavLink>
              <NavLink to="/about" className="nav-link">ABOUT</NavLink>
              <NavLink to="/franchisee" className="nav-link">FRANCHISEE</NavLink>
              <NavLink to="/contact" className="nav-link">CONTACT</NavLink>
            </Nav>

            <div className=" align-items-center">
              {/* Shopping Cart Icon */}
              <a href={playStoreUrl} target="_blank" rel="noopener noreferrer">
                <button type="button" className='text-nowrap btn btn-warning rounded-pill p-3 m-2'>
                  DOWNLOAD APP
                </button>
              </a>
             
            </div>
          </Navbar.Collapse>
          <BsCart
                className="text-light d-xs-none "
                size={30}
                style={{ cursor: 'pointer' }}
                onClick={toggleCart} // Show/Hide Cart on click
              />
        </Container>
      </Navbar>

      {/* Cart Component */}
      {cartVisible && <Cart handleClose={toggleCart} />} {/* Pass the toggle function to close */}
    </>
  );
};

export default Naavbar;
