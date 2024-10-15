import React, { useState, useEffect } from 'react';
import CartContext from './cartContext';

const CartState = ({ children }) => {
    const host = "http://localhost:5000";
    const [cart, setCart] = useState([]);

    const getCart = async () => {
      try {
          const response = await fetch(`${host}/api/cart/fetchallcartitems`, {
              method: 'GET',
              headers: {
                  'Content-Type': 'application/json',
                  'auth-token': localStorage.getItem('token') // Correct header for token
              }
          });

          if (response.status === 200) {
              const json = await response.json();
              console.log("All Cart", json);
              setCart(json); // Correctly set the cart items
          } else {
              console.error("Failed to fetch cart items:", response.status, response.statusText);
          }
      } catch (error) {
          console.error('Error fetching cart:', error);
      }
  };

  useEffect(() => {
      getCart();
  }, []);


    const addToCart = async (item) => {
        try {
            const response = await fetch(`${host}/api/cart/addcart`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': localStorage.getItem('token') // Correct header for token
                },
                body: JSON.stringify({ items: [item] }) // Correct payload structure
            });

            if (response.ok) {
                const cartData = await response.json();
                setCart(cartData.items || []);
            } else {
                console.error('Failed to add item to cart:', response.status, response.statusText);
            }
        } catch (error) {
            console.error('Error adding item to cart:', error);
        }
    };

    return (
        <CartContext.Provider value={{ cart, getCart, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartState;
