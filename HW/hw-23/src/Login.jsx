// Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [token, setToken] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem('token', token);
    navigate('/profile');
  };

  return (
    <div>
      <h1>Login Page</h1>
      <input
        type="text"
        placeholder="Enter token"
        value={token}
        onChange={(e) => setToken(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
