import React from "react";
import Discountbutton from "./Discountbutton";
import Button from "./CustomButton";
import Custombackground from "./Custombackground";
import Customburgercard from "./Customburgercard";
import BurgerTypesdata from "../BurgerTypesdata";
import CustomSnacksSweetscard from "./CustomSnacksSweetscard";
import SnacksAndSweetsTypesdata from "../SnacksAndSweetsTypesdata";
import Typesburger from "./Typesburger";
import Footer from "./Footer";
import { useSelector } from "react-redux";

function Ourmenu(props) {
  // const cartItems = useSelector((state) => state.cart.cart);
  
  // console.log(cartItems);

  // console.log(SnacksAndSweetsTypesdata);
  // console.log(BurgerTypesdata);
  return (
  
    
    <>
      <Custombackground
        className="custombackground bg-danger p-0 rounded-0 text-white d-flex justify-content-center align-items-center"
        style={{ width: "100%", height: "50vh" }}
      >
        <div className="text-center">
          <h4 className="fs-3 fs-md-1">Check Out</h4>
          <h1 className="display-1 display-md-1 fw-bold">Our Menu</h1>
        </div>
      </Custombackground>

      <div className="container-fluid text-center p-0 ">
        <p className="fs-4 fs-md-2 mt-5 text-warning ">A VARIETY OF</p>
        <h1 className="display-1 display-md-3 fw-bold">Delicious Burgers</h1>

        <div className="container p-0">
          <div className="row justify-content-center g-0">

        {/* Mapping through cartItems and rendering Customburgercard for each */}
        {/* {cartItems.map((item, index) => {
          console.log(item);  // Log each individual cart item to the console
          return (
            <Customburgercard
              key={index}  // Set a unique key for each item (you can use item.id if available)
              img={item.img}
              title={item.title}
              price={item.price}
              description={item.description}  // Ensure the description key is correct in your data
            />
          );
        })} */}

    
 
    
            
             {BurgerTypesdata.productData.map((item, index) => (
              <div
                key={index}
                className="col-12 col-sm-6 col-md-4 col-lg-4 d-flex justify-content-center"
              >
                <Customburgercard
                id={item.id}
                  img={item.img}
                  title={item.title}
                  price={item.price}
                  discription={item.discription}
                />
              </div>
            ))} 
          </div>
        </div>

        <div className=" text-center p-0 bg-light">
          <div>
            <p className="fs-4 fs-md-2 mt-5 text-warning">Delicious</p>
            <h1 className="display-5 display-md-3 fw-bold">Snacks $Sides</h1>
          </div>

          {/* Snacks & Sweets section */}
          <div className="container px-0 mt-5">
            <div className="row g-0">
              {SnacksAndSweetsTypesdata.menuItems.map((item) => (
                <div
                  key={item.id}
                  className="col-12 col-sm-6 col-md-6 d-flex justify-content-center"
                >
                  <CustomSnacksSweetscard
                    img={item.image}
                    title={item.name}
                    description={item.description}
                    price={item.price}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="my-5   ">
          <Typesburger />
        </div>

        {/* Additional Custom Snacks & Sweets Section */}
        <div className=" text-center p-0">
          <div>
            <p className="fs-4 fs-md-2 mt-5 text-warning">EXTRAS</p>
            <h1 className="display-5 display-md-3 fw-bold">
              Sweets & Desserts
            </h1>
          </div>

          {/* Snacks & Sweets section */}
          <div className="container px-0 mt-5">
            <div className="row g-0">
              {SnacksAndSweetsTypesdata.menuItems.map((item) => (
                <div
                  key={item.id}
                  className="col-12 col-sm-6 col-md-6 d-flex justify-content-center"
                >
                  <CustomSnacksSweetscard
                    img={item.image}
                    title={item.name}
                    description={item.description}
                    price={item.price}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

       
 </div>
 <Footer />
    </>
  );
}

export default Ourmenu;
