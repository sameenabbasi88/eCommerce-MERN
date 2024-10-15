import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Products() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/Details');
  };

  return (
    <>
      <h1 className='text-center'>Our Products</h1>
      <div className="container d-flex">
        <div className="card mx-1" style={{ width: "40%", height: "30%", border: "none" }}>
          <img src="serums.jpg" height={'180px'} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title text-center">Hair serum</h5>
            <p className="card-text text-center">Rs .1300 </p>
            <div className="d-flex justify-content-center my-4">
              <Link to="/Details" className="btn btn-outline custom-btn ">View Details</Link>
            </div>
          </div>
        </div>
        <div className="card mx-1" style={{ width: "40%", height: "30%", border: "none" }}>
          <img src="serums.jpg" height={'180px'} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title text-center">Hair serum</h5>
            <p className="card-text text-center">Rs .1300 </p>
            <div className="d-flex justify-content-center my-4">
              <button onClick={handleClick} className="btn btn-outline custom-btn ">View Details</button>
            </div>
          </div>
        </div>
        <div className="card mx-1" style={{ width: "40%", height: "30%", border: "none" }}>
          <img src="serums.jpg" height={'180px'} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title text-center">Hair serum</h5>
            <p className="card-text text-center">Rs .1300 </p>
            <div className="d-flex justify-content-center my-4">
              <Link to="/Details" className="btn btn-outline custom-btn ">View Details</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container d-flex">
        <div className="card mx-1" style={{ width: "40%", height: "30%", border: "none" }}>
          <img src="serums.jpg" height={'180px'} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title text-center">Hair serum</h5>
            <p className="card-text text-center">Rs .1300 </p>
            <div className="d-flex justify-content-center my-4">
              <Link to="/Details" className="btn btn-outline custom-btn ">View Details</Link>
            </div>
          </div>
        </div>
        <div className="card mx-1" style={{ width: "40%", height: "30%", border: "none" }}>
          <img src="serums.jpg" height={'180px'} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title text-center">Hair serum</h5>
            <p className="card-text text-center">Rs .1300 </p>
            <div className="d-flex justify-content-center my-4">
              <button onClick={handleClick} className="btn btn-outline custom-btn ">View Details</button>
            </div>
          </div>
        </div>
        <div className="card mx-1" style={{ width: "40%", height: "30%", border: "none" }}>
          <img src="serums.jpg" height={'180px'} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title text-center">Hair serum</h5>
            <p className="card-text text-center">Rs .1300 </p>
            <div className="d-flex justify-content-center my-4">
              <Link to="/Details" className="btn btn-outline custom-btn ">View Details</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container d-flex">
        <div className="card mx-1" style={{ width: "40%", height: "30%", border: "none" }}>
          <img src="serums.jpg" height={'180px'} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title text-center">Hair serum</h5>
            <p className="card-text text-center">Rs .1300 </p>
            <div className="d-flex justify-content-center my-4">
              <Link to="/Details" className="btn btn-outline custom-btn ">View Details</Link>
            </div>
          </div>
        </div>
        <div className="card mx-1" style={{ width: "40%", height: "30%", border: "none" }}>
          <img src="serums.jpg" height={'180px'} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title text-center">Hair serum</h5>
            <p className="card-text text-center">Rs .1300 </p>
            <div className="d-flex justify-content-center my-4">
              <button onClick={handleClick} className="btn btn-outline custom-btn ">View Details</button>
            </div>
          </div>
        </div>
        <div className="card mx-1" style={{ width: "40%", height: "30%", border: "none" }}>
          <img src="serums.jpg" height={'180px'} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title text-center">Hair serum</h5>
            <p className="card-text text-center">Rs .1300 </p>
            <div className="d-flex justify-content-center my-4">
              <Link to="#" className="btn btn-outline custom-btn ">View Details</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
