import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/slices/CartSlice";
function Customburgercard({img,id,title,price,discription}) {
  
  
  const dispatch=useDispatch();
console.log(dispatch);


  const [isReadMore, setIsReadMore] = useState(false);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  const shortDescription = discription.slice(0, 100); // Show the first 100 characters

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-12 mx-0">
      <div className="card p-0 overflow-hidden h-100 w-100 border-0 custom-card">
        <img
          src={img}
          className="card-img-top img-fluid"
          alt={title}
          style={{ objectFit: "", height: "" }}
        />
        <div className="card-body text-center">
          <h5 className="card-title fw-bold">{title}</h5>
          <h6 className="text-danger fw-bold">${price}</h6>
          
          <p className="card-text">
            {isReadMore ? discription : `${shortDescription}...`}
          <span 
            className="text-primary fw-bold"
            style={{ cursor: "pointer" }}
            onClick={toggleReadMore}
          >
            {isReadMore ? "..." : "..."}
          </span>
          </p>
          
          <div className="plus d-flex justify-content-center mt-3">
            <div 
              className="fontcircle bg-danger rounded-circle d-flex justify-content-center align-items-center"
              style={{ width: "50px", height: "50px" }}
            >  
                            <i className="fas fa-plus text-white" onClick={()=>{
              dispatch(addToCart({id,img,title,price,discription, qty:1 }))
            }}></i>


            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customburgercard;
