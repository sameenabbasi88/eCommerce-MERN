import React from 'react'

function Footer() {
  return (
    <div>
      <footer className="bg-dark text-white mt-5">
    <div className="container-fluid py-3">
      <div className="row">
        <div className="col-md-4 text-center text-md-left">
          <h5 className="text-uppercase">Company Name</h5>
          <p>Electric Eye</p>
        </div>
        <div className="col-md-4 text-center">
          <h5 className="text-uppercase">Useful Links</h5>
          <ul className="list-unstyled">
            <li><a href="#" className="text-white">Home</a></li>
            <li><a href="#" className="text-white">About</a></li>
            <li><a href="#" className="text-white">Services</a></li>
            <li><a href="#" className="text-white">Contact</a></li>
          </ul>
        </div>
        <div className="col-md-4 text-center text-md-right">
          <h5 className="text-uppercase">Contact Us</h5>
          <p>Email: electricEye@gmail.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
      </div>
      <div className="text-center py-3">
        <p>&copy; 2024 Electric Eye. All rights reserved.</p>
      </div>
    </div>
  </footer>
    </div>
  )
}

export default Footer
