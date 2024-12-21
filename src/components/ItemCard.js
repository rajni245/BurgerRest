import React, { useState } from 'react';
import { Card, Button, Image } from 'react-bootstrap';
import { FaTrashAlt, FaPlus, FaMinus } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../Redux/slices/CartSlice';

const ItemCard = ({ id, title, discrption, img, price, qty }) => {
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();
 
  

  const handleIncrement = () => setQuantity(quantity + 1);
  const handleDecrement = () => quantity > 0 && setQuantity(quantity - 1);

  return (
    <>
      <Card
        style={{
          width: '100%',
          maxWidth: '17rem',
          border: 'none',
          borderRadius: '15px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
          transition: 'transform 0.2s, box-shadow 0.2s',
        }}
        className="mx-auto my-3 position-relative"
      >
        {/* Delete Icon in the top-right corner */}
        <FaTrashAlt
          className="text-danger position-absolute"
          style={{
            fontSize: '1.5rem',
            top: '10px',
            right: '10px',
            cursor: 'pointer',
            transition: 'color 0.3s',
          }}
          onClick={() => dispatch(removeFromCart(id))}  // Use id here
          onMouseEnter={(e) => (e.target.style.color = 'darkred')}
          onMouseLeave={(e) => (e.target.style.color = 'red')}
        />

        {/* Row for burger image and name */}
        <Card.Body className="p-3 mt-1">
          <div className="d-flex align-items-center justify-content-between">
            {/* Burger Image */}
            <Image
              src={img}
              roundedCircle
              style={{ width: '50px', height: '50px', border: '2px solid brown' }}
            />
            {/* Burger Name */}
            <Card.Title className="mb-0 ms-2 text-black fw-bold">{title}</Card.Title>
          </div>
        </Card.Body>

        {/* Row for price and quantity controls */}
        <Card.Body className="text-center p-2">
          <div className="d-flex justify-content-between align-items-center">
            <Card.Text className="mb-0 font-weight-bold">Price: ${price}</Card.Text>
            <div className="quantity-controls d-flex align-items-center">
              <Button variant="outline-secondary" size="sm" onClick={handleDecrement}>
                <FaMinus />
              </Button>
              <span className="mx-2">{qty}</span>
              <Button variant="outline-secondary" size="sm" onClick={handleIncrement}>
                <FaPlus />
              </Button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default ItemCard;
