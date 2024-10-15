import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Signup = ({ showAlert, setUser }) => {
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = credentials;
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, password })
    });
    const json = await response.json();
    console.log("Credentials", json);
    if (json.success) {
      localStorage.setItem('token', json.authtoken);
      setUser({ name }); // Set the user state with the new user's name
      navigate("/");
      showAlert("Account Created Successfully!", "success");
    } else {
      showAlert("Invalid credentials!", "danger");
      console.log('error in signup')
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div style={{
      background: 'white', width: '40%', display: 'flex',
      justifyContent: 'center', alignItems: 'center', borderRadius: '18px',
      height: '100vh', margin: '0 auto'
    }}>
      <div className='container mt-2'>
        <h2>Create an Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="my-3">
            <label htmlFor="name" className="form-label">Username</label>
            <input type="text" className="form-control" style={{ width: '90%', border: "2px solid #aa8a3d" }} id="name" name='name' onChange={onChange} aria-describedby="emailHelp" required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" style={{ width: '90%', border: "2px solid #aa8a3d" }} id="email" name='email' onChange={onChange} aria-describedby="emailHelp" required />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" style={{ width: '90%', border: "2px solid #aa8a3d" }} id="password" name='password' onChange={onChange} minLength={3} required />
          </div>
          <div className="mb-3">
            <label htmlFor="cpassword" className="form-label">Confirm Password</label>
            <input type="password" className="form-control" style={{ width: '90%', border: "2px solid #aa8a3d" }} id="cpassword" name='cpassword' onChange={onChange} minLength={3} required />
          </div>
          <div className="d-flex justify-content-center my-4">
            <button type="submit" className="btn btn-outline custom-btn">Signup</button>
          </div>
        </form>
      </div>
    </div>
  )
};

export default Signup;
