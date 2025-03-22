// HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the Home Page!</p>
      <Link to="/login">Go to Login</Link>
      <br />
      <Link to="/profile">Go to Profile</Link>
    </div>
  );
};

export default HomePage;
