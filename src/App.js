import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Products from './components/Products';
import Alert from './components/Alert';
import Footer from './components/Footer';
import Details from './components/Details';
import Cart from './components/Cart';
import CartState from './components/cart/CartState';
import Checkout from './components/Checkout';


const App = () => {
  const [user, setUser] = useState(null);
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async (token) => {
      const response = await fetch("http://localhost:5000/api/auth/getuser", {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      const json = await response.json();
      console.log('User details response:', json); // Debug log
      if (json.success) {
        setUser({ name: json.name });
      } else {
        localStorage.removeItem('token');
      }
    };

    const token = localStorage.getItem('token');
    console.log('Token:', token); // Debug log
    if (token) {
      fetchUserDetails(token);
    }
  }, []);

  const logoutUser = () => {
    setUser(null);
    localStorage.removeItem('token');
  };
  
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  return (
    <>
    <CartState>
    <Router>
      <Navbar user={user} logoutUser={logoutUser} />
      <Alert />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Cart" element={<Cart/>} />
          <Route path="/Signup" element={<Signup showAlert={showAlert} setUser={setUser} />} />
          <Route path="/Login" element={<Login showAlert={showAlert} setUser={setUser} />} />
          <Route path="/Details" element={<Details />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
      <Footer/>
    </Router>
    </CartState></>
  );
};

export default App;
