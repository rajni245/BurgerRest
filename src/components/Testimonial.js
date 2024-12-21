import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Testimonial({ name, reviewno, rating, timing, description, image }) {
  return (
    <div className="mb-4 d-flex justify-content-center ps-5 pe-4">
      <div className="col-md-center " style={{ maxWidth: "" }}>
        <div className="row g-4 align-items-center">
          <div className="col-12 text-center">
            <div className="">
              <div className="d-flex align-items-center mb-2">
                {/* Image section */}
                <img
                  className="rounded-circle me-2"
                  style={{ width: "70px", height: "70px" }}
                  src={image}
                  alt={name} // Use name for better accessibility
                />
                {/* Name section */}
                <h3 className="card-text text-secondary mb-0 fw-bold">{name}</h3>
              </div>

              <div className="d-flex align-items-center mb-2">
                {/* Display 5 stars */}
                {Array(5)
                  .fill()
                  .map((_, i) => (
                    <FontAwesomeIcon
                      key={i}
                      icon={faStar}
                      color="gold"
                      className="me-1"
                    />
                  ))}
                {/* Timing text aligned next to stars */}
                <p className="card-text text-nowrap text-muted  ms-3 mb-0">{timing}</p>
                <p className="card-text text-danger text-nowrap fw-bold ms-2">{reviewno}</p>
              </div>

              {/* Description */}
              <p className="card-text text-start pe-4 fw-bold text-no-wrap">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
