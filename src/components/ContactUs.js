import React from 'react';

const ContactUs = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
        alert('Form submitted!');
    };

    return (
        <div className="container mt-4">
            <h2 className="text-center ">Contact Us</h2>
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <div className="mt-4 text-center">
                        <p><b>Email:</b> contact@yourwebsite.com</p>
                        <p><b>Phone:</b> (123) 456-7890</p>
                        <p><b>Address:</b> 123 Your Street, Your City, Your Country</p>
                        <div className="mt-4 ">
                            <h4>Follow Us:</h4>
                            <a href="https://www.facebook.com" className="me-2" style={{color:'#aa8a3d'}}>Facebook</a>
                            <a href="https://www.twitter.com" className="me-2" style={{color:'#aa8a3d'}}>Twitter</a>
                            <a href="https://www.linkedin.com" className="me-2" style={{color:'#aa8a3d'}}>LinkedIn</a>
                            <a href="https://www.instagram.com" style={{color:'#aa8a3d'}}> Instagram</a>
                        </div>
                    </div>
                    <div className="mt-5 text-center">
                        <h4>Business Hours:</h4>
                        <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                        <p>Saturday: 10:00 AM - 4:00 PM</p>
                        <p>Sunday: Closed</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;

