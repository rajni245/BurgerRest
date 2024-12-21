import React from 'react';


function Burgerdetailscomponents() {
  return (
    <div className="container-fluid ingredients-section p-5">
      <h5 className="text-uppercase text-center">Ingredients</h5>
      <h1 className="title text-center">Baked with Natural <br /> Ingredients</h1>

      <div className="row mt-4">
        <div className="col-md-4 text-center text-md-start">
          <div className="ingredient-item">
            <h3>Fresh Buns</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
          </div>
          <div className="ingredient-item">
            <h3>Lettuce Leaf</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
          </div>
          <div className="ingredient-item">
            <h3>Organic Onions</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
          </div>
        </div>

        <div className="col-md-4 text-center">
          <img 
            src="burgerdetailsimg1.png" 
            alt="Burger" 
            className="img-fluid burger-image" 
          />
        </div>

        <div className="col-md-4 text-center text-md-end">
          <div className="ingredient-item">
            <h3>Glow Cheese</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
          </div>
          <div className="ingredient-item">
            <h3>Quality Meat</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
          </div>
          <div className="ingredient-item">
            <h3>Homemade Bacon</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Burgerdetailscomponents;
