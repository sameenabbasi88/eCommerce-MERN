import React from 'react';

function Specifications() {
  return (
    <>
     <div className="container">
    <h2 className='text-center my-4'>Product Specifications</h2>
    <p className='text-center'>
      Electric Eye products work on all hair types, making your clients' hair smoother, softer, straighter and more manageable.With electric eye products you can give your clients BETTER results than other keratin treatments in HALF the chair time. No fumes. No dangerous chemicals. No special ventilation. No restrictions. Unlimited styling options. There are 4 formulas to choose from to meet each client's expectations.</p>
    </div>
    <div className='container d-flex my-2'>
  <div className="card mx-2" style={{ width: "50%" }}>
    <img 
      src="rough1.jpg" 
      className="card-img-top" 
      alt="..." 
      style={{ width: "100%", height: "70%" }}
    />
    <div className="card-body">
      <p className="card-text text-center">Before</p>
    </div>
  </div>
  <div className="card mx-2" style={{ width: "50%" }}>
    <img 
      src="Strong.jpg" 
      className="card-img-top" 
      alt="..." 
      style={{ width: "100%", height: "70%" }}
    />
    <div className="card-body">
      <p className="card-text text-center">After</p>
    </div>
  </div>
</div>

    <div className='container d-flex my-2'>
      <div className="card mx-2 my-1" style={{ width: "50%" }}>
        <img 
          src="rough2.jpg" 
          className="card-img-top" 
          alt="..." 
          style={{ width: "100%", height: "70%" }}
        />
        <div className="card-body" style={{ height: "30%" }}>
          <p className="card-text text-center">Before</p>
        </div>
      </div>
      <div className="card mx-2 my-1" style={{ width: "50%" }}>
        <img 
          src="smooth.jpg" 
          className="card-img-top" 
          alt="..." 
          style={{ width: "100%", height: "70%" }}
        />
        <div className="card-body" style={{ height: "30%" }}>
          <p className="card-text text-center">After</p>
        </div>
      </div>
    </div>
    <div className="container">
    <p className='text-center'>
      Electric Eye products work on all hair types, making your clients' hair smoother, softer, straighter and more manageable.With electric eye products you can give your clients BETTER results than other keratin treatments in HALF the chair time. No fumes. No dangerous chemicals. No special ventilation. No restrictions. Unlimited styling options. There are 4 formulas to choose from to meet each client's expectations.</p>
    </div>
    </>
  );
}

export default Specifications;
