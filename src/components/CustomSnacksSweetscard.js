import React from "react";

const CustomSnacksSweetscard = (props) => {
  // console.log(CustomSnacksSweetscard);

  return (
    <div className="w-100 p-3">
      <div className="row align-items-center">
        {/* Image section */}
        {props.img && (
          <div className="col-auto text-center ">
            <img
              className="rounded-circle "
              style={{ width: "60px", height: "60px" }}
              src={props.img}
              alt={props.title}
            />
          </div>
        )}

        {/* Text section */}
        <div className="col text-center">
          <h5 className="fw-bold ">{props.title}</h5>
          <p className="text-secondary mb-0">{props.description}</p>
        </div>

        {/* Price section */}
        <div className="col-auto text-end">
          <h5 className="text-danger fw-bold">${props.price}</h5>
          {/* Dollar symbol added here */}
        </div>
      </div>
      <hr className="line"/>

      {/* Dotted line separator */}
    </div>

    /*<div className="container burger-menu">
  <div className="row justify-content-center">
    <div className="col-lg-8 col-md-10 col-sm-12 mb-4">
      <div className="d-flex flex-row align-items-center">

        {/* Image Column */
    // <div className="flex-shrink-0 text-center">
    //   {props.img && (
    //     <img
    //       className="rounded-circle"
    //       style={{ width: "60px", height: "60px" }}
    //       src={props.img}
    //       alt={props.title}
    //     />
    //   )}
    // </div>

    /* Text Column */
    // <div className="flex-grow-1 d-flex flex-column justify-content-center p-0">
    //   <div className="mx-2">
    //     <h5 className="card-title  mb-1 text-nowrap">{props.title}</h5>
    //     <p className="card-text mb-0 text-wrap">{props.description}</p>
    //   </div>
    // </div>

    /* Price Column */
    //         <div className="flex-shrink-0 d-flex flex-column justify-content-center">
    //           <div className="text-end pe-3">
    //             <strong>${props.price}</strong>
    //           </div>
    //         </div>

    //       </div>
    //     </div>
    //   </div>
    // </div
  );
};

export default CustomSnacksSweetscard;
