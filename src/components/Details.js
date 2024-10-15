import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import CartContext from './cart/cartContext';

function Details() {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleAddToCart = async () => {
    const item = {
      name: 'Hair serum (for long hair)',
      quantity: quantity,
      price: 1300.0,
    };

    try {
      await addToCart(item);
      navigate('/Cart');
    } catch (error) {
      console.error('Error adding item to cart:', error);
    }
  };

  return (
    <>
      {/* Carousel and other elements */}
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner container my-2">
          <div className="carousel-item active">
            <img src="carosal1.jpg" className="d-block w-100" alt="..." style={{ height: '400px' }} />
          </div>
          <div className="carousel-item">
            <img src="carosal3.jpg" className="d-block w-100" alt="..." style={{ height: '400px' }} />
          </div>
          <div className="carousel-item">
            <img src="carosal2.jpg" className="d-block w-100" alt="..." style={{ height: '400px' }} />
          </div>
        </div>
        <div className="container">
          <button className="carousel-control-prev mx-3" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next mx-3" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <h5 className="card-title text-center my-2">Hair serum (for long hair)</h5>
      <p className="card-text text-center my-2">Rs. 1300</p>

      <div className="d-flex justify-content-center my-4">
        <input type="number" style={{ width: '70px' }} value={quantity} onChange={e => setQuantity(parseInt(e.target.value, 10) || 1)} min="1" />
      </div>
      <div className="d-flex justify-content-center my-4 ">
        <button onClick={handleAddToCart} className="btn btn-outline custom-btn mx-2">Add to Cart</button>
        <button onClick={handleAddToCart} className="btn btn-outline custom-btn mx-2">Order now</button>
      </div>
      <h3 className='text-center'>Details about the product</h3>
      <p className='container'>
        Hair serum typically contains a blend of ingredients designed to enhance the health, appearance, and manageability of hair. Silicone-based compounds, such as dimethicone and cyclopentasiloxane, are common in hair serums for their ability to coat the hair, providing a smooth and glossy finish while reducing frizz and tangles. Natural oils, such as argan oil, jojoba oil, and almond oil, are often included for their moisturizing and nourishing properties, helping to repair damage and add shine. Additionally, hair serums may contain vitamins like Vitamin E and Vitamin B5 (panthenol), which strengthen the hair and promote growth. Botanical extracts, such as aloe vera and green tea, offer soothing and antioxidant benefits. Proteins, such as keratin and silk proteins, can help rebuild and strengthen the hair shaft. Some advanced formulas may also include UV filters and heat protectants to shield hair from environmental damage and styling tools. The combination of these ingredients makes hair serums an effective solution for improving the overall health and appearance of hair.
      </p>
    </>
  );
}

export default Details;
