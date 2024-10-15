import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ showAlert, setUser }) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password })
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      localStorage.setItem('token', json.authtoken);
      setUser({ name: json.user.name }); // Set the user state with the logged in user's name
      showAlert("Logged in Successfully!", "success");
      navigate("/");
    } else {
      showAlert("Invalid Details!", "danger");
      console.log('error in login');
    }
  }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  }

  return (
    <div style={{
      background: 'white', width: '50%', display: 'flex',
      justifyContent: 'center', alignItems: 'center', borderRadius: '18px',
      height: '100vh', margin: '0 auto'
    }}>
      <div className='mt-2'>
        <h2>Login to Continue</h2>
        <form onSubmit={handleSubmit}>
          <div className="my-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" style={{ width: '100%', border: "2px solid #aa8a3d" }} className="form-control" value={credentials.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" value={credentials.password} onChange={onChange} style={{ width: '100%', border: "2px solid #aa8a3d" }} className="form-control" name="password" id="password" />
          </div>

          <div className="d-flex justify-content-center my-4">
            <button type="submit" className="btn btn-outline custom-btn">Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login;
