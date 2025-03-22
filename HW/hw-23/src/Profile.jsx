// Profile.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    dispatch({ type: 'LOGOUT' });
    navigate('/login');
  };

  return (
    <div>
      <h1>Profile Page</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;
