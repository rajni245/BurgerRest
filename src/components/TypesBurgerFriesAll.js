import React from 'react'
import Discountbutton from "./Discountbutton";
import Button from "./CustomButton";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
function TypesBurgerFriesAll() {
  const navigate=useNavigate();
  const redirectbutton=()=>{
    navigate('/Offer')
  }
    const playStoreUrl = "https://play.google.com/store/apps/details?id=com.example.app"; 
  return (
    <div className="container-fluid  ">
      <div className="row no-gutters">
        {/* Left Column: Burger Image with Overlay */}
        

        {/* Right Column: Two Stacked Burgers */}
        <div className="col-12 col-md-6 d-flex flex-column p-0">
          {/* First Burger */}
          <div className="position-relative mt-0">
            <img
              src="burger3.jpg"
              className="img-fluid"
              alt="Burger 2"
              style={{
                height: "100%", 
                width: "100%", 
                objectFit: "cover" // Make sure the image covers the container
              }}
            />
            <div
              className="orderonline position-absolute top-50 translate-middle-y start-0 text-white"
              style={{ paddingLeft: '20rem' }} // Adjust left padding for spacing
            >
              <div className="burgertype text-start">
                <h5 className="fw-bold">Deal Of The Day</h5>
                <h2 className="display-6 fw-bold">Quinoa & Black Bean Burger</h2>
              </div>

              {/* Button positioned at the bottom */}
              <div className="button1 position-absolute bottom-100 start-50 translate-middle-x mb-3">
                <a href={""} target="_blank" rel="noopener noreferrer">
                 
                  <Button onClick={redirectbutton}
                    className="order-btn "
                    style={{
                      width: "150px",
                      background: "#fff",
                      color: "black",
                      borderRadius: "50px",
                      fontWeight: "bold",
                      padding: "10px",
                      border: "none",
                    }}
                  >
                    ORDER ONLINE
                  </Button>
                </a>
              </div>
            </div>

            {/* Discount Button for Burger 2 */}
            <Discountbutton className="discount-button position-absolute top-0 translate-middle-y bg-warning p-4 fw-bold rounded-circle d-flex align-items-center justify-content-center text-white">
              <div>
                only
                <br />
                $13
              </div>
            </Discountbutton>
          </div>

          {/* Second Burger */}
          <div className="position-relative mt-0">
            <img
              src="burger3.jpg"
              className="img-fluid"
              alt="Burger 2"
              style={{
                height: "100%", 
                width: "100%", 
                objectFit: "cover" // Make sure the image covers the container
              }}
            />
            <div
              className="orderonline position-absolute top-50 translate-middle-y start-0 text-white"
              style={{ paddingLeft: '20rem' }} // Adjust left padding for spacing
            >
              <div className="burgertype text-start">
                <h5 className="fw-bold">Deal Of The Day</h5>
                <h2 className="display-6 fw-bold">Quinoa & Black Bean Burger</h2>
              </div>

              {/* Button positioned at the bottom */}
              <div className="button1 position-absolute bottom-100 start-50 translate-middle-x mb-3">
                <a href={""} target="_blank" rel="noopener noreferrer">
                  <Button
                    className="order-btn "
                    style={{
                      width: "150px",
                      background: "#fff",
                      color: "black",
                      borderRadius: "50px",
                      fontWeight: "bold",
                      padding: "10px",
                      border: "none",
                    }}
                  >
                    ORDER ONLINE
                  </Button>
                </a>
              </div>
            </div>

            {/* Discount Button for Burger 2 */}
            <Discountbutton className="discount-button position-absolute top-0 translate-middle-y bg-success p-4 fw-bold rounded-circle d-flex align-items-center justify-content-center text-white">
              <div>
                only
                <br />
                $13
              </div>
            </Discountbutton>
          </div>
        </div>
        <div className="col-12 col-md-6 d-flex align-items-stretch position-relative p-0">
          <img
            src="burger2.jpg"
            className="burger-single img-fluid"
            alt="Single Burger"
            style={{
              height: "100%", 
              width: "100%", 
              objectFit: "cover" // Make sure the image covers the container
            }}
          />
          <div
            className="orderonline position-absolute top-50 translate-middle-y start-0 text-white"
            style={{ paddingLeft: '20rem' }} // Adjust left padding for spacing
          >
            <div className="burgertype text-center">
              <h5 className="fw-bold text-nowrap">Deal Of The Day</h5>
              <h2 className="display-6 fw-bold">Quinoa & Black <br/>Bean Burger</h2>
            </div>

            {/* Button positioned at the bottom */}
            <div className="button1 position-absolute bottom-100 start-50 translate-middle-x mb-3">
                <a href={""} target="_blank" rel="noopener noreferrer">
                  <Button
                    className="order-btn "
                    style={{
                      width: "150px",
                      background: "#fff",
                      color: "black",
                      borderRadius: "50px",
                      fontWeight: "bold",
                      padding: "10px",
                      border: "none",
                    }}
                  >
                    ORDER ONLINE
                  </Button>
                </a>
              </div>

          </div>

          {/* Discount Button for Single Burger */}
          <Discountbutton className="discount-button position-absolute top-0 translate-middle-y bg-danger p-4 fw-bold rounded-circle d-flex align-items-center justify-content-center text-white">
            <div>
              only
              <br />
              $17
            </div>
          </Discountbutton>
        </div>
      </div>
    </div>
  )
}

export default TypesBurgerFriesAll