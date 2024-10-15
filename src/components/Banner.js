import React from 'react';

function Banner() {
  return (
    <div>
      <div className='container my-3' style={{marginLeft:'50px'}}>
        <video  autoPlay loop src='bannergif.mp4' style={{ width: '90%' }} ></video>
      </div>
      <hr />
    </div>
  );
}

export default Banner;
