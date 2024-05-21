import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:5212/api/User/Login", {
        email,
        password
      });
      
      console.log("Login successful:", response.data);
      alert("Login successful")
      // Optionally, you can redirect the user or perform other actions upon successful login
    } catch (error) {
      console.error("Login failed:", error.response);
      alert("Something went wrong")
      
      // Log the response error
      // Optionally, you can show an error message to the user
    }
  };

  return (
    <form onSubmit={handleLogin} >
      <h3 className='txt'>Login</h3>
      <div className="mb-3">
        <label>Email Address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
          />
          <label className="custom-control-label" htmlFor="customCheck1">
            Remember me
          </label>
        </div>
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
      
    </form>
  );
};

export default Login;
