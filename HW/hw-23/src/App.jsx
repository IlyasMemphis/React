// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from './Profile';
import Login from './Login';
import HomePage from './HomePage';  // Импортируем HomePage

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />  {/* Добавляем путь для HomePage */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
