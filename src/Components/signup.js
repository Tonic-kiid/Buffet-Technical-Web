import React, { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async (event) => {
    event.preventDefault();

    

    try {
      const response = await axios.post("http://localhost:5212/api/User/Register", {
        name,
        email,
        password
      });
      
      console.log("Sign up successful:", response.data);
      alert("Sign up successful")
      // Optionally, you can redirect the user or show a success message here
    } catch (error) {
      console.error("Sign up failed:", error.response); 
      alert("Something went wrong")
      // Log the response error
      // Optionally, you can show an error message to the user
    }
  };

  return (
    <form onSubmit={handleSignUp}>
      <h3>Sign Up</h3>
      <div className="mb-3">
        <label> Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
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
      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </div>
      <p className="forgot-password text-right">
        Already registered? <a href="/sign-in">Login</a>
      </p>
    </form>
  );
};

export default SignUp;
