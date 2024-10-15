import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = ({ user, logoutUser }) => {
  let location = useLocation();
  const navigate = useNavigate(); // Use useNavigate hook to get navigation function

  const cartButton = async() => {
    navigate('/Cart'); // Use navigate function to navigate to '/Cart'
  };

  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand customfont" to="/">
            Electric Eye
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="mx-auto">
              <ul className="navbar-nav mb-2 mb-lg-0" style={{ marginLeft: '130px' }}>
                <li className="nav-item">
                  <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${location.pathname === "/AboutUs" ? "active" : ""}`} to="/AboutUs">
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${location.pathname === "/ContactUs" ? "active" : ""}`} to="/ContactUs">
                    Contact Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${location.pathname === "/Products" ? "active" : ""}`} to="/Products">
                    Products
                  </Link>
                </li>
              </ul>
            </div>
            <div className="ms-auto">
              {user ? (
                <>
                  <span className="navbar-text" style={{ color: "white" }}>
                    Welcome, {user.name}
                  </span>
                  <button className="btn btn-outline custom-btn mx-2" style={{ color: "white" }} onClick={logoutUser}>
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to="/Signup" className="btn btn-outline custom-btn mx-2" role="button" style={{ color: "white" }}>
                    SignUp
                  </Link>
                  <Link to="/Login" className="btn btn-outline custom-btn" role="button" style={{ color: "white" }}>
                    Login
                  </Link>
                </>
              )}
              <i className="fa-solid fa-cart-shopping mx-3" onClick={cartButton} style={{ color: 'white' }}></i>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
