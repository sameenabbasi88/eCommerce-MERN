import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CartContext from './cart/cartContext';

function Cart() {
  const { cart, getCart } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    getCart();
  }, []);

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className="container">
      <h3 className="text-center my-4">Your Cart</h3>
      {cart.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Item Name</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>Rs. {item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="text-center my-4">
            <button onClick={handleCheckout} className="btn btn-dark">
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
