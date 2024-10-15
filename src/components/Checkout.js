import React, { useContext } from 'react';
import CartContext from './cart/cartContext';

function Checkout() {
  const { cart } = useContext(CartContext);

  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission, like saving order details and clearing the cart
    alert('Order placed successfully!');
  };

  return (
    <div className="container">
      <h3 className="text-center my-4">Checkout</h3>
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
          <div className="d-flex justify-content-end">
            <h4>Total: Rs. {totalAmount}</h4>
          </div>
          <form onSubmit={handleSubmit}>
            <h2 className='text-center'>  Address Details</h2>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" id="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="address">Enter Your Address</label>
              <input type="text" className="form-control" id="address" required />
            </div>
            <div className="form-group">
              <label htmlFor="contactNumber">Contact Number</label>
              <input type="text" className="form-control" id="contactNumber" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" id="email" required />
            </div>
            <div className="d-flex justify-content-center">
              <button type="submit" className="btn" style={{ backgroundColor: 'black', color: 'white' }}>
                Place Order
              </button>
              </div>
          </form>
        </>
      )}
    </div>
  );
}

export default Checkout;
