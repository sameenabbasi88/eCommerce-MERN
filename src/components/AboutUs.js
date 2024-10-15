import React from 'react';

function AboutUs() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12">
          <h1 className="text-center">About Us</h1>
          <p className="lead text-center">Learn more about our company's history and meet our team.</p>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-12">
          <h2 className='text-center'>Our History</h2>
          <p>
            Founded in 2000, our company has grown from a small startup to an industry leader.
            Over the past two decades, we have consistently innovated and expanded our offerings,
            always striving to deliver the best products and services to our customers.
          </p>
          <p>
            Our journey began with a handful of dedicated individuals who were passionate about
            making a difference. Today, we have a global presence with a diverse team that
            continues to drive our mission forward.
          </p>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-12">
          <h2 className='text-center'>Meet Our Team</h2>
        </div>

        <div className="col-md-4 text-center">
          <img src="profile.jpg" className="rounded-circle" alt="John Doe" style={{ width: '150px', height: '150px' }} />
          <h4 className="mt-3">John Doe</h4>
          <p className="text-muted">CEO & Founder</p>
          <p>
            John is the visionary behind our company. With over 20 years of experience in the industry,
            he leads with a focus on innovation and excellence.
          </p>
        </div>

        <div className="col-md-4 text-center">
          <img src="profile2.png" className="rounded-circle" alt="Jane Smith" style={{ width: '150px', height: '150px' }} />
          <h4 className="mt-3">Jane Smith</h4>
          <p className="text-muted">Chief Operating Officer</p>
          <p>
            Jane oversees the daily operations, ensuring that our processes run smoothly and
            efficiently. Her expertise in operational management is unparalleled.
          </p>
        </div>

        <div className="col-md-4 text-center">
          <img src="profile3.png" className="rounded-circle" alt="Mike Johnson" style={{ width: '150px', height: '150px' }} />
          <h4 className="mt-3">Mike Johnson</h4>
          <p className="text-muted">Chief Technology Officer</p>
          <p>
            Mike is the technical genius of our team. He leads our technology initiatives, driving
            innovation and ensuring that we stay ahead of the curve.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
