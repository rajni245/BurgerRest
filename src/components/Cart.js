
import React, { useState } from "react";
import ItemCard from "./ItemCard";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cart);

  console.log(cartItems);

  const [isMyordervisible, setIsmyOrdervisble] = useState(true);

  const handleDelete = () => setIsmyOrdervisble(false);
  return (
    <>
      {isMyordervisible && (
        <div
          className="my-order   position-fixed top-0 start-0  w-auto h-100 bg-light"
          style={{ zIndex: 1050 }}
        >
          <div className="container-fluid h-100 d-flex flex-column">
            <div className="d-flex justify-content-between align-items-center p-3 border-bottom">
              <h2>My Order</h2>
              {/* Close button should correctly call the handleClose prop */}

              <button className="btn-close" onClick={handleDelete}></button>
            </div>

            <div className="flex-grow-1 overflow-auto p-3">
            {cartItems.length>  0 ? cartItems.map((food) => (
  <ItemCard
    key={food.id}
    id={food.id}
    discription={food.discription}
    img={food.img}
    title={food.title}
    price={food.price}
    qty={food.qty}
  />
)):<h2 className="pt-5">There is no order</h2>}

             
             
              
            </div>

            <div className="border-top bg-light p-3  position-fixed bottom-0 ">
              <div className="row mb-2 ">
                <div className="col-8 text-start">
                  <span>Item:</span>
                </div>
                <div className="col-4 text-start">
                  {/* Add dynamic item count */}
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-8 ">
                  <strong>Total Amount:</strong>
                </div>
                <div className="col-4 text-start"></div>
              </div>
              <div className="d-flex justify-content-center">
                <button className="btn btn-warning w-100">Checkout</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
